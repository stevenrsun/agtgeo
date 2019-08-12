import React, { Component } from 'react';

export class ServicePage extends Component {
    state = { 
        info: {}
    }

    componentDidMount = () => {
        const {info} = this.props.location.state;
        this.setState({info});
    }

    styles = {
        header: {
            fontSize: 60,
            color: 'red'
        },

        body:{
            fontSize: 20
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="text-center mt-4">
                    <h1 class="heading" style={this.styles.header}>{this.state.info['title']}</h1>
                </div>
                <div class="text-left ml-5">
                    <p class="subheading" style={this.styles.body}>{this.state.info['body']}</p>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
 