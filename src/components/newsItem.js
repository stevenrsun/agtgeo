import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class NewsItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card border-white">
                <div className="card-body">
                    <h5 class="card-title heading" style={{color: '#EE3124'}}>{this.props.info['title']}</h5>
                    <p class="subheading card-text">{this.props.info['text']}</p>
                </div>
            </div>
        );
    }
}
 
