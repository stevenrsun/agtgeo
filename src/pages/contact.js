import React, { Component } from 'react';
import {Footer} from '../components/footer.js';
import { CorporateLocations } from '../components/corporateLocations.js';
import {Link} from 'react-router-dom';

export class Contact extends Component {
    
    componentDidMount() {
        document.title = 'AGT - Contact';
    }

    styles = {
        header: {
            color: 'red',
            fontSize: 35
        },
        subheader: {
            color: 'red',
            fontSize: 25
        },
        bold: {
            fontWeight: 'bold'
        },
        blue: {
            color: '#1cb7e6',
            fontSize: 15
        }
    }

    render() { 
        return (
            <React.Fragment>
            <div class="container-fluid border border-grey" style={{width: '60vw', minWidth: 1000}}>
                <div class="row m-4">
                    <div class="col-7 m-4">
                        <h1 class="heading mb-4" style={this.styles.header}>CONTACT</h1>
                        <span class="txt subheading">For more information about AGT's proprietary imaging technologies and services, please contact AGT and we will reply to you as soon as possible. </span>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                        <Link to='/'><img src={require('../images/seismic-imaging-tag.png')} alt="agt-homelink"/></Link> 
                        <br/><br/><br/><br/><br/>   
                    </div>
                    <CorporateLocations/>
                </div>
            </div>
            <br/><br/><br/><br/><br/>
            <Footer min={1000}/>
            </React.Fragment>
        );
    }
}
 
