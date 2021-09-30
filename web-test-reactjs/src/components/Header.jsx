import React from 'react';
import "./styles/Header.scss"
import imgH from "./img/logo.png"
import imgH2 from "./img/logo@2x.png"
import imgH3 from "./img/logo@3x.png"

function Header(props) {
    return (
        <div className="box">
            <img src={imgH}
                srcset={`${imgH2} 2x,
                ${imgH3} 3x`}
                class="logo" alt="hình ảnh"></img>
            <div className="menu">
                <ul className="menu-group">
                    <li className="menu-item ">INTRODUCTION</li>
                    <li className="menu-item">SOLUTION</li>
                    <li className="menu-item separate">RATE PLAN</li>
                    <li className="menu-item">LOGIN</li>
                    <li className="menu-item">APPLY FOR FREE USE</li>
                </ul>
            </div>
        </div>

    );
}

export default Header;