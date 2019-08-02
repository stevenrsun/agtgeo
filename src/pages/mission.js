import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class Mission extends Component {
    state = {  }

    styles = {
        header: {
            color: 'red',
            fontSize: 35
        },
        bold: {
            fontWeight: 'bold'
        },
        blue: {
            color: 'blue'
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="row">
                    <vl/>
                    <div class="col-8">
                        <h1 class="heading mt-3" style={this.styles.header}>ADVANCED GEOPHYSICAL TECHNOLOGY</h1>
                    </div>
                    <div class="col-0">
                        <img src={require("../images/mission-timeline2017.png")} alt="timeline"/>
                    </div>
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 