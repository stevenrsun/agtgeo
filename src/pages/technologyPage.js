import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class TechnologyPage extends Component {
    state = { 
        info: {},
        bodyText: [],
        list: [],
        images: []
    }

    componentDidMount = () => {
        const {info} = this.props.location.state;
        this.setState({info});
        document.title = 'AGT - ' + info.title;
        
        var listContent = [];
        for(let i=0; i<info['list'].length; i++) {
            listContent.push(<li class="subheading" style={this.styles.body}>{info['list'][i]}</li>)
        }
        var list = <ol>{listContent}</ol>

        var images = [];
        for(let i=0; i<info['images'].length; i++) {
            images.push(<div class="text-center">
                <img src={info['images'][i]['image']} alt={"image" + i} style={this.styles.image}/>
                <p class="subheading mt-2" style={this.styles.caption}>{info['images'][i]['caption']}</p>
            </div>)
        }

        var bodyText = [];
        for(let i=0; i<info['body'].length; i++) {
            bodyText.push(<p class="subheading" style={this.styles.body}>{info['body'][i]}</p>)
        }
        this.setState({bodyText, list, images});
    }

    styles = {
        header: {
            fontSize: 60,
            color: '#EE3124'
        },

        body:{
            fontSize: 20
        },

        caption:{
            fontSize: 15
        },

        image:{
            width: '50vw'
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="text-left mt-4">
                    <h1 class="heading ml-5 mr-5" style={this.styles.header}>{this.state.info['title']}</h1>
                </div>
                <div class="text-left ml-5 mr-5 mt-4 mb-5">
                    {this.state.list}
                    {this.state.images}
                    {this.state.bodyText}
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 