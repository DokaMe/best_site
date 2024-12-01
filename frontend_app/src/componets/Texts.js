import React from 'react'
import './css/texts.css'
import pig from '../../static/images/pig-no-bg-preview (carve.photos).png'
import disco from '../../static/images/disco.png'
import dudelka from '../../static/images/dudelka.png'

function Texts() {
  return (
    <div className='container-texts'>
      <div className='paper'>
      
        <img className='pig' src={pig}/>
        <img className='disco' src={disco}/>
        <img className='dudelka' src={dudelka}/>
        
      </div>
    </div>
  )
}

export default Texts