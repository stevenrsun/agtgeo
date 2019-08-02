import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class NewsItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card border-light">
                <div className="card-body">
                    <h5 class="card-title heading" style={{color: 'red'}}>{this.props.info['title']}</h5>
                    <p class="subheading card-text">{this.props.info['text']}</p>
                    <Link to={{pathname: '/NewsPage', state:{info: this.props.info}}}>See more</Link>
                </div>
            </div>
        );
    }
}
 
