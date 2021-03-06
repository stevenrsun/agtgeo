import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class ServiceItem extends Component {
    state = {  }
    render() { 
        var cardInfo;
        if(this.props.info.format == "text")
            cardInfo = <p class="card-text">{this.props.info['text']}</p>;
        else if(this.props.info.format == "list"){
            var temp = [];
            for(let i=0; i<this.props.info.list.length; i++){
                temp.push(<li class="list-group-item subheading border border-white py-0">{this.props.info.list[i]}</li>);
            }
            cardInfo = <ul class="list-group list-group-flush mb-3">{temp}</ul>;
        }

        return (  
            <div className="card border-white">
                <div className="card-body">
                    <h5 class="card-title heading" style={{color: '#EE3124'}}>{this.props.info['title']}</h5>
                    {cardInfo}
                    <Link to={{pathname: ('/ServicePage/' + this.props.info['id']), state:{info: this.props.info}}}>See more</Link>
                </div>
            </div>
        );
    }
}
 
