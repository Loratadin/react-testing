import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    render() {
        return(
            <div className="app">
                <div className="quote">Truth lies within a little and certain compass, but error is immense</div>
                <img className="logoIMG" alt="logo" src="https://www.gstatic.com/webp/gallery3/5_webp_ll.webp"/>
              </div>
        )
    }
}