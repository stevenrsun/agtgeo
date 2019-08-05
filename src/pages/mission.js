import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class Mission extends Component {
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
            fontSize: 50
        }
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="row m-5 mr-1">
                    <vl/>
                    <div class="col-8">
                        <h1 class="heading" style={this.styles.header}>ADVANCED GEOPHYSICAL TECHNOLOGY</h1>
                        <div>
                            <span class="txt subheading-bold">Advanced Geophysical Technology </span>
                            <span class="txt subheading">(“AGT”) is a growing Houston-based company that is revolutionizing seismic imaging. From our origin as a developer of innovative GPU-based depth imaging algorithms, we are evolving into a service organization that uses our world-class computing power and proprietary algorithms to develop high-resolution 3D seismic images quickly and cost-effectively. Together, our team of elite geophysicists is creating unparalleled value by helping oil and gas companies select and employ the ideal imaging technology to accurately image the geophysical properties of salt basins and other hard-to-image subsurface locations.</span>
                        </div>
                        <div>
                            <span class="txt heading-2" style={this.styles.blue}>+ </span>
                            <span class="txt heading-3" style={this.styles.subheader}>Our Mission</span>
                        </div>
                        <div>
                            <span class="txt subheading-bold">AGT </span>
                            <span class="txt subheading">will invest in leading-edge depth imaging technologies and proprietary algorithms that help support oil and gas companies seeking new energy discoveries. Our technologies and services help them derive more value from data, accelerate project timetables, and mitigate financial risks.</span>
                        </div>
                        <div>
                            <span class="txt heading-2" style={this.styles.blue}>+ </span>
                            <span class="txt heading-3" style={this.styles.subheader}>Our Vision</span>
                        </div>
                        <div>
                            <span class="txt subheading-bold">AGT </span>
                            <span class="txt subheading">will open the window to a dynamic future of energy exploration, in which highly sophisticated depth imaging technologies help oil and gas companies turn vast energy reserves deep below the surface into abundant resources that enhance quality of life and power economic growth.</span>
                        </div>
                        <div>
                            <span class="txt heading-2" style={this.styles.blue}>+ </span>
                            <span class="txt heading-3" style={this.styles.subheader}>Our Values</span>
                        </div>
                        <div>
                            <span class="txt subheading-bold">AGT </span>
                            <span class="txt subheading">is an entrepreneurial company that is using our collective geophysics technology expertise to shape the future of seismic imaging. We apply the knowledge of our carefully selected team to generate fast, cost-effective images of the highest available resolution and quality—including proprietary patent-pending technologies that allow us to obtain high-quality images in record times.  By seeing far below the surface, oil and gas companies can secure the world’s energy future while protecting employees and the environment.</span>
                        </div>
                    </div>
                    <div class="col-2 mr-5">
                        <img src={require("../images/mission-timeline2017.png")} alt="timeline"/>
                    </div>
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 