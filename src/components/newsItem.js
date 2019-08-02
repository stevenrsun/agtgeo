import React, { Component } from 'react';

export class NewsItem extends Component {
    state = {  }
    render() { 
        return (  
            <div className="card border-light">
                <div className="card-body">
                    <h5 class="card-title" style={{color: 'red'}}>{this.props.title}</h5>
                    <p class="card-text">{this.props.text}</p>
                </div>
            </div>
        );
    }
}
 
