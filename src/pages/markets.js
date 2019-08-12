import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class Markets extends Component {
    state = { 
        hover: false,
        title: "",
        info: "",
        // starting here, titles/info (abbreviated t and i) representing information for each market pinpoint on the map are saved
        // to add more markets, first open main.css in agtgeo/public (public is found in the same folder as src), and follow the
        // instructions below

        // First, create new variables tX and iX, X being the next number in sequence of the previous existing t's and i's 
        // ex. if the last t/i group is t8: i8: then create t9 and i9
        // You also need to find the array containing require("imageurl") duplicated many times. It's inside the state block 
        // this comment is a part of, and should be at the very end. Just copy paste that require("image") line one more time with
        // commas and everything.
        // Make sure to fill in tX and iX with the relevant text, and continue to the next step: adding a pinpoint in main.css.

        // Adding a pinpoint using main.css: 
        // 1) create a new css class using the format below (X corresponds to a number, for example, if the 
        //    previous .pinpoint class was .pinpoint8, X would be 9 and the next .pinpoint would be .pinpoint9) -
        // .pinpointX{
        //      position: absolute;
        //      left: 100px;
        //      top: 100px;  
        //  }
        //  NOTE: 100px is an example number, the actual number will vary and require some tinkering to place the pinpoint on the map
        //  correctly. left corresponds to how much distance the pinpoint has from the left, and top corresponds to how much distance 
        //  the pinpoint has from the top (of the map image including some whitespace around the actual map)

        // next, go to line 123 in this file

        // copy paste the line that looks like
        //<img class="ml-4 pinpoint1" id={0} title={this.state.t1} info={this.state.i1} src={this.state.pinpoint[0]} alt="pinpoint_red1"
        //                    onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
        // and paste it at the bottom of the block of duplicated lines that consist of a <img /> item
        // Then, just change the numbers properly, as in change X in pinpointX to whatever number you put after .pinpoint in main.css.
        // Every number that isn't id={y} and this.state.pinpoint[y] should be equal to X. in the examples i just mentioned, y should equal X-1
        // In conclusion, if you just created class .pinpoint9 in main.css, your new <img /> item should look like this:
        //<img class="ml-4 pinpoint9" id={8} title={this.state.t9} info={this.state.i9} src={this.state.pinpoint[8]} alt="pinpoint_red9"
        //                    onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
        t1: "MID-CONTINENT",
        i1: "AGT's iterative approach to building an anisotropic velocity field allows for much better well ties and crisper fault definitions in resolving the isolated velocity anomalies in a localized area, resulting in better structural ties to the data.",
        t2: "ONSHORE GULF COAST",
        i2: "AGT's high-resolution tomography captures horizontally varying velocity anomalies and tracks along fault boundaries. AGT's ability to consistently create high-frequency RTM migrations (+60Hz) yields crisper, cleaner images than traditional Kirchhoff.",
        t3:"GULF OF MEXICO (Shelf)",
        i3:"AGT's amplitude preserving gather output for both RTM and Kirchhoff migrations allow for stratigraphic analysis of the data. In areas with both flat laying sedimentary basins along with salt bodies, RTM allows for a single algorithm to image both geologic regimens with frequencies as high as 60hz.",
        t4:"GULF OF MEXICO (Deep Water)",
        i4:"AGT's 3D tomographic velocity model building workflow with RTM angle gathers created a superior and highly focused 50 Hz RTM derived image. Accurate imaging of the steeply dipping salt flanks and subsalt area due to a high resolution, high fidelity tomographic velocity field was obtained.",
        t5:"WEST AFRICA",
        i5:"Deep water rougose top and base of salt structures create serious imaging issues. AGT's RTM angle gather workflow ensures that the final migration image utilizes the same technology as the velocity model to yield much clearer and more accurate images.",
        t6:"WEST AFRICA",
        i6:"Deep water rougose top and base of salt structures create serious imaging issues. AGT's RTM angle gather workflow ensures that the final migration image utilizes the same technology as the velocity model to yield much clearer and more accurate images.",
        t7:"CHINA",
        i7:"Complex onshore topography makes accurate velocity modeling and automatic picking routines extremely important in creating more focused images. Converging the velocity model quickly enables iterative Kirchhoff migration passes to resolve continuity within dipping geologic beds.",
        t8:"WESTERN AUSTRALIA",
        i8:"AGT's finite element 3D orthorhombic elastic modeling technology allows for simualting 4D seismic acquisition geometries with rough seafloor topography without the artifacts that come from more traditional finite difference algorithms.",
        pinpointRed: require('../images/pinpoint_red.png'),
        pinpointBlue: require('../images/pinpoint_blue.png'),
        pinpoint: [require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png'),
        require('../images/pinpoint_red.png')]
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
            fontSize: 50
        }
    }

    onHover = (label) => {
        var newTitle = label.currentTarget.getAttribute("title");
        var newInfo = label.currentTarget.getAttribute("info");
        var newPinpoint = this.state.pinpoint;
        newPinpoint[label.currentTarget.getAttribute("id")] = this.state.pinpointBlue;
        this.setState({pinpoint: newPinpoint, hover: true, title: newTitle, info: newInfo})
    }

    onExit = () => {
        var newPinpoint = [];
        for(let i=0; i<this.state.pinpoint.length; i++)
            newPinpoint.push(this.state.pinpointRed)
        this.setState({pinpoint: newPinpoint, hover: false})
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="row ml-3 mt-2 mr-3">
                    <div class="col mr-2">
                        <h1 class="heading mt-5 ml-4" style={this.styles.header}>MARKETS SERVED</h1>
                        <div class="mt-4 ml-4">
                            <span class="txt subheading">The next frontier of energy discovery sits deep below the surface—and beyond the scope of most current imaging technologies. AGT applies our leading-edge depth imaging technologies to proprietary data collected from hard-to-reach places around the world.<br/><br/>

                            From the complex topography of onshore locations in China to the steep salt flanks beneath the Gulf of Mexico, we transform proprietary data into high- resolution velocity models that help oil and gas companies address their most complex geophysical challenges. We are evolving into a service organization that uses our world-class computing power and proprietary algorithms to develop multidimensional, high-resolution seismic maps quickly and cost-effectively.<br/><br/>

                            Together, our team of elite geophysicists is creating unparalleled value by helping major oil and gas companies select and employ the ideal imaging technology to accurately predict the geophysical properties of salt basins and other subsurface locations. To learn more about specific markets we serve, hover over pinpoints on the map below:</span>
                        </div>
                    </div>
                </div>
                <div class="row ml-5 mt-5 mb-5">
                    <div class = "container mb-3">
                        <img class="ml-4" src={require("../images/market-global-map.png")} alt="market-map"/>
                        <img class="ml-4 pinpoint1" id={0} title={this.state.t1} info={this.state.i1} src={this.state.pinpoint[0]} alt="pinpoint_red1"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint2" id={1} title={this.state.t2} info={this.state.i2} src={this.state.pinpoint[1]} alt="pinpoint_red2"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint3" id={2} title={this.state.t3} info={this.state.i3} src={this.state.pinpoint[2]} alt="pinpoint_red3"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint4" id={3} title={this.state.t4} info={this.state.i4} src={this.state.pinpoint[3]} alt="pinpoint_red4"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint5" id={4} title={this.state.t5} info={this.state.i5} src={this.state.pinpoint[4]} alt="pinpoint_red5"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint6" id={5} title={this.state.t6} info={this.state.i6} src={this.state.pinpoint[5]} alt="pinpoint_red6"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint7" id={6} title={this.state.t7} info={this.state.i7} src={this.state.pinpoint[6]} alt="pinpoint_red7"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        <img class="ml-4 pinpoint8" id={7} title={this.state.t8} info={this.state.i8} src={this.state.pinpoint[7]} alt="pinpoint_red8"
                            onMouseOver={this.onHover} onMouseOut={this.onExit}/> 
                        {this.state.hover ? (<div class="labelbox">
                            <h4 class="heading" style={{color: 'red'}}>{this.state.title}</h4>
                            <p class="subheading">{this.state.info}</p>
                        </div>):null}
                    </div>
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 
