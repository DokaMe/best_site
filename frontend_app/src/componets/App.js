import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
import Main from "./Main";
import Shop from "./Shop";
import It from "./It";
import Texts from "./Texts";
import Projects from "./Projects";
import Test from "./Test";
// C://user/local
// ./TestPage.js
// ../index.js

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    // Document oriented model
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} exact />
                    <Route path="/shop" element={<Shop />} exact />
                    <Route path="/it" element={<It />} exact />
                    <Route path="/texts" element={<Texts />} exact />
                    <Route path="/projects" element={<Projects />} exact />
                    <Route path="/test" element={<Test />} exact />
                </Routes>
            </BrowserRouter>
        );
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
