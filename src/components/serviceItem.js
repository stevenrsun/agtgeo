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
                temp.push(<li class="list-group-item subheading border border-light"><span class="txt subheading" style={{color:'#1cb7e6'}}>• </span>{this.props.info.list[i]}</li>);
            }
            cardInfo = <ul class="list-group list-group-flush">{temp}</ul>;
        }

        return (  
            <div className="card border-light">
                <div className="card-body">
                    <h5 class="card-title heading" style={{color: 'red'}}>{this.props.info['title']}</h5>
                    {cardInfo}
                    <Link to={{pathname: ('/ServicePage/' + this.props.info['id']), state:{info: this.props.info}}}>See more</Link>
                </div>
            </div>
        );
    }
}
 
