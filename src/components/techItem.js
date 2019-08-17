import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class TechnologyItem extends Component {
    state = {  }
    render() { 
        var cardInfo;
        var temp = [];
        for(let i=0; i<this.props.info.list.length; i++){
            if(this.props.info.list[i]['link'])
                temp.push(
                <li class="list-group-item subheading border border-white py-0">
                    <Link to={{pathname: ('/TechnologyPage/' + this.props.info.list[i]['id']), state:{info: this.props.info.list[i]}}}>{this.props.info.list[i]['title']}</Link>
                </li>);
            else
                temp.push(
                <li class="list-group-item subheading border border-white py-0">
                    {this.props.info.list[i]['title']}
                </li>);
        }
        cardInfo = <ul class="list-group list-group-flush mb-3">{temp}</ul>;

        return (  
            <div className="card border-white" style={{width: '28vw', minWidth: 350}}>
                <div className="card-body">
                    <h5 class="card-title heading" style={{color: '#EE3124'}}>{this.props.info['title']}</h5>
                    {cardInfo}
                </div>
            </div>
        );
    }
}
 
