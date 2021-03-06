import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class Partners extends Component {
    state = {  }

    styles = {
        header: {
            color: '#EE3124',
            fontSize: 35
        },
        subheader: {
            color: '#EE3124',
            fontSize: 25
        },
        bold: {
            fontWeight: 'bold'
        },
        blue: {
            color: '#00ACD4',
            fontSize: 15
        }
    }

    componentDidMount() {
        document.title = 'AGT - Partners';
    }

    render() { 
        return (
            <React.Fragment>
            <div class="container-fluid border border-grey" style={{width: '60vw', minWidth: 700}}>
                <div class="row m-4">
                    <div class="col-lg m-4">
                        <h1 class="heading mb-4" style={this.styles.header}>PARTNERS</h1>
                            <span class="txt subheading">As a research and service organization, AGT is committed to accelerating the development of innovative seismic imaging technologies and providing global oil and gas companies with the industry’s most accurate, high resolution subsurface images. We form strategic research and development </span>
                            <span class="txt subheading-bold" style={this.styles.blue}>PARTNERSHIPS FOCUSED ON TECHNICAL DEVELOPMENT</span>
                            <span class="txt subheading">, </span>
                            <span class="txt subheading-bold" style={this.styles.blue}>TESTING AND TRIALS.</span>
                            <br/><br/>
                            <span class="txt subheading">We also collaborate with other imaging service providers whose clients benefit from our collective knowledge along with AGT’s technologies, proprietary algorithms and custom solutions.</span>
                            <br/><br/>
                            <span class="txt subheading">In select markets, we also partner with oil and gas companies by licensing proprietary AGT technologies. In these instances we provide a strong foundation of collaboration, implementation and support.</span>
                    </div>
                    <div class="col mb-4">
                        <img src={require("../images/overheard-bubble-partners.jpg")} alt="partners_image"/>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            <Footer min={700}/>
            </React.Fragment>
        );
    }
}
 
