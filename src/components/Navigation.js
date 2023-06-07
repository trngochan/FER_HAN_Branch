import React, { Component } from "react";
export default function Navigation() {
    return (
        <div className="header" >
            <nav>
                <ul>
                    <li><a className="active" href='#home'>Home</a></li>
                    <li><a className="active" href='#about'>About</a></li>
                    <li><a className="active" href='#news'>News</a></li>
                    <li><a className="active" href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    )

}