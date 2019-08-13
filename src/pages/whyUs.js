import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class WhyUs extends Component {
    state = {  }

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

    componentDidMount() {
        document.title = 'AGT - Why Us?';
    }

    render() { 
        return (  
            <React.Fragment>
                <div class="container border border-grey">
                    <div class="row ml-4 mt-1 mr-3 mb-5">
                        <div class="col mr-2">
                            <h1 class="heading mt-5 ml-4" style={this.styles.header}>WHY AGT?</h1>
                            <div class="mt-4 ml-4">
                                <span class="txt subheading">In today’s highly competitive, capital intensive oil and gas industry, competitive advantage goes to those who have the skills, resources and discipline to find untapped energy reserves in hard-to-reach places. AGT offers oil and gas companies and industry partners a </span>
                                <span class="txt subheading-bold" style={this.styles.blue}>DYNAMIC TEAM OF EXPERTS </span>
                                <span class="txt subheading">committed to bring unsurpassed resolution to these complex sub-surface environments.</span>
                                <br/><br/>
                                <span class="txt subheading">By combining world-class expertise with innovative technologies, we deliver </span>
                                <span class="txt subheading-bold" style={this.styles.blue}>CUSTOM SOLUTIONS </span>
                                <span class="txt subheading">that help optimize energy exploration and investment. We use our knowledge of the world’s most challenging onshore and offshore locations to identify the most effective imaging technology for each site. And we apply our </span>
                                <span class="txt subheading-bold" style={this.styles.blue}>WORLD-CLASS COMPUTING POWER</span> 
                                <span class="txt subheading">, </span>
                                <span class="txt subheading-bold" style={this.styles.blue}>UNPARALLELED SEISMIC PROCESSING ALGORITHMS AND UNIQUE IMAGE FLOW </span>
                                <span class="txt subheading">to turn your proprietary data into high-quality, three-dimensional sub-surface maps quickly and cost effectively.</span>
                                <br/><br/>
                                <span class="txt subheading">With AGT, you also benefit from objective, impartial advice; technical proficiency; a passion for innovation; and </span>
                                <span class="txt subheading-bold" style={this.styles.blue}>TRUE COLLABORATION.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
