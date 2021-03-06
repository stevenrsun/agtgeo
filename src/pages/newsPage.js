import React, { Component } from 'react';

export class NewsPage extends Component {
    state = { 
        info: {}
    }

    componentDidMount = () => {
        const {info} = this.props.location.state;
        this.setState({info});
        document.title = 'AGT - ' + info.title;
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="text-center">
                <h1 class="heading" style={{color: '#EE3124'}}>{this.state.info['title']}</h1>
            </div>
            <div class="text-left ml-5">
                <p>{this.state.info['text']}</p>
            </div>
            </React.Fragment>
        );
    }
}
 



