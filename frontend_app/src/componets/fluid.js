import React, { useEffect, useRef } from "react"
import { Renderer, Geometry, Program, Mesh, Vec2, Vec4, Texture, Flowmap } from "ogl"
import "./css/fluid.css"

export default function FluidEffect() {
    const containerRef = useRef(null)

    useEffect(() => {
        if (!containerRef.current) return

        const _size = [2048, 1638]

        const renderer = new Renderer({ dpr: 2 })
        const gl = renderer.gl
        containerRef.current.appendChild(gl.canvas)

        let aspect = 1
        const mouse = new Vec2(-1)
        const velocity = new Vec2()

        const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 0, 1);
      }
    `

        const fragment = `
      precision highp float;
      precision highp int;
      uniform sampler2D tWater;
      uniform sampler2D tFlow;
      uniform float uTime;
      varying vec2 vUv;
      uniform vec4 res;
      uniform vec2 img;

      vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
          return uvs * factor - factor /2. + 0.5;
      }

      void main() {
        // R and G values are velocity in the x and y direction
        // B value is the velocity length
        vec3 flow = texture2D(tFlow, vUv).rgb;

        vec2 uv = .5 * gl_FragCoord.xy / res.xy;

        // vec2 uv = .5 * gl_FragCoord.xy / res.xy;
        vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV -= flow.xy * (0.15 * 1.2);

        vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV2 -= flow.xy * (0.125 * 1.2);

        vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
        myUV3 -= flow.xy * (0.10 * 1.4);

        vec3 tex = texture2D(tWater, myUV).rgb;
        vec3 tex2 = texture2D(tWater, myUV2).rgb;
        vec3 tex3 = texture2D(tWater, myUV3).rgb;

        gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
      }
    `

        function resize() {
            gl.canvas.width = window.innerWidth * 2.0
            gl.canvas.height = window.innerHeight * 2.0
            gl.canvas.style.width = window.innerWidth + "px"
            gl.canvas.style.height = window.innerHeight + "px"

            let a1, a2
            const imageAspect = _size[1] / _size[0]

            if (window.innerHeight / window.innerWidth < imageAspect) {
                a1 = 1
                a2 = window.innerHeight / window.innerWidth / imageAspect
            } else {
                a1 = (window.innerWidth / window.innerHeight) * imageAspect
                a2 = 1
            }

            mesh.program.uniforms.res.value = new Vec4(window.innerWidth, window.innerHeight, a1, a2)

            renderer.setSize(window.innerWidth, window.innerHeight)
            aspect = window.innerWidth / window.innerHeight
        }

        const flowmap = new Flowmap(gl, {
            falloff: 0.3,
            dissipation: 0.92,
            alpha: 0.5,
        })

        const geometry = new Geometry(gl, {
            position: {
                size: 2,
                data: new Float32Array([-1, -1, 3, -1, -1, 3]),
            },
            uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) },
        })

        const texture = new Texture(gl, {
            minFilter: gl.LINEAR,
            magFilter: gl.LINEAR,
        })

        const img = new Image()
        img.onload = () => (texture.image = img)
        img.crossOrigin = "anonymous"
        img.src = "https://robindelaporte.fr/codepen/bg3.jpg"

        let a1, a2
        const imageAspect = _size[1] / _size[0]

        if (window.innerHeight / window.innerWidth < imageAspect) {
            a1 = 1
            a2 = window.innerHeight / window.innerWidth / imageAspect
        } else {
            a1 = (window.innerWidth / window.innerHeight) * imageAspect
            a2 = 1
        }

        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uTime: { value: 0 },
                tWater: { value: texture },
                res: {
                    value: new Vec4(window.innerWidth, window.innerHeight, a1, a2),
                },
                img: { value: new Vec2(_size[1], _size[0]) },
                tFlow: flowmap.uniform,
            },
        })

        const mesh = new Mesh(gl, { geometry, program })

        window.addEventListener("resize", resize, false)
        resize()

        const isTouchCapable = "ontouchstart" in window
        if (isTouchCapable) {
            window.addEventListener("touchstart", updateMouse, false)
            window.addEventListener("touchmove", updateMouse, { passive: false })
        } else {
            window.addEventListener("mousemove", updateMouse, false)
        }

        let lastTime = null
        const lastMouse = new Vec2()

        function updateMouse(e) {
            e.preventDefault()

            let x, y

            if ("changedTouches" in e && e.changedTouches.length) {
                x = e.changedTouches[0].pageX
                y = e.changedTouches[0].pageY
            } else if ("pageX" in e) {
                x = e.pageX
                y = e.pageY
            } else {
                return
            }

            mouse.set(x / gl.renderer.width, 1.0 - y / gl.renderer.height)

            if (!lastTime) {
                lastTime = performance.now()
                lastMouse.set(x, y)
            }

            const deltaX = x - lastMouse.x
            const deltaY = y - lastMouse.y

            lastMouse.set(x, y)

            const time = performance.now()

            const delta = Math.max(10.4, time - lastTime)
            lastTime = time
            velocity.x = deltaX / delta
            velocity.y = deltaY / delta

            velocity.needsUpdate = true
        }

        function update(t) {
            requestAnimationFrame(update)

            if (!velocity.needsUpdate) {
                mouse.set(-1)
                velocity.set(0)
            }
            velocity.needsUpdate = false

            flowmap.aspect = aspect
            flowmap.mouse.copy(mouse)

            flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1)
            flowmap.update()

            program.uniforms.uTime.value = t * 0.01
            renderer.render({ scene: mesh })
        }

        requestAnimationFrame(update)

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", updateMouse)
            window.removeEventListener("touchstart", updateMouse)
            window.removeEventListener("touchmove", updateMouse)
            if (containerRef.current && containerRef.current.contains(gl.canvas)) {
                containerRef.current.removeChild(gl.canvas)
            }
        }
    }, [])

    return (
        <div className="fluid-container">
          <div ref={containerRef} className="fluid-canvas"></div>
      
          <div className="mask">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1040 205.1"
              className="mask-text"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="200"
                fontWeight="bold"
                fontFamily="Roboto"
              >
                ПРОЕКТЫ
              </text>
            </svg>
          </div>
        </div>
      );
}
