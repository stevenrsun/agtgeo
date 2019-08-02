import React, { Component } from 'react';

export class NewsCard extends Component {

    styles = {
        image: {
            width: '60vw',
            height: '60vh'
        },
        header: {
            color: 'aliceblue',
            fontSize: 100
        },
        caption: {
            color: 'aliceblue',
            fontSize: 30
        }
    }

    render() { 
        return ( 
            <div className="card">
                <img class="card-img" src={this.props.img} style={this.styles.image} alt="newsCard image"/>
                <div class="card-img-overlay">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <h1 class="card-title display-1 mt-1 ml-3" style={this.styles.header}> {this.props.title}</h1>
                    <p class="lead text-right mt-5 ml-5" style={this.styles.caption}>{this.props.caption}</p>
                </div>
            </div>
        );
    }
}
 
