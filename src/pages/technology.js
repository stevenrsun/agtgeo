import React, { Component } from 'react';
import {TechnologyItem} from '../components/techItem.js';
import {PageNav} from '../components/pageNav.js';
import {Footer} from '../components/footer.js';
import {Link} from 'react-router-dom';

export class Technology extends Component {
    state = { 
        // just as in news.js, id corresponds to the number displayed in url

        // format must be either 'list' or 'text' exactly:
        // list: use key list equal to an array of strings to be displayed in a vertical, bulleted list under the card title
        // text: the entire string will be displayed and wrap around per line according to the dimensions of the containing card

        // the body key corresponds to the text that will appear in each instance page (after clicking more info on a card)
        // any additional keys can be accessed in src/components/techItem.js using this.props.info.keyName or this.props.info['keyName']
        technology: [
            { format: 'list', category: 'tech', id: 11, title: '5-D INTERPOLATION', list: ['Global-Local-Hybrid Multi-resolution approach', 'Anti-leakage and anti-aliasing', 'Fills large data gaps'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 10, title: 'DIFFRACTION IMAGING', list: ['Double stage reflection energy suppression'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 9, title: 'FORWARD MODELING', list: ['Finite Element and Finite Difference', 'Surface/Seafloor topography', 'Variable gridding', 'Full physics (Acoustic/Elastic, ISO/VTI/TTI/Orthorhombic, Q)', 'VSP/Sea floor multi-component recording'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 8, title: '3D TOMOGRAPHIC VELOCITY MODEL BUILDING WITH Q, ORTHORHOMBIC', list: ['High-resolution tomography for small velocity anomalies', 'Superior fault definition and improved image', 'Global automatic residual depth move-out picking', 'Geology structural conformed inversion', 'Sub-salt velocity update with RTM dense angle gathers or shot index gathers'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 7, title: 'PREPROCESSING', list: ['Internal time processing package along with Paradigm/Echos'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 6, title: '3D KIRCHHOFF DEPTH & TIME MIGRATION', list: ['Q, HTI/VTI, Orthorhombic', 'Designed for large 3D datasets and high resolution imaging', 'Large scale seismic modeling capability'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 5, title: 'FULL WAVEFORM INVERSION (PATENTED)', list: ['Beat-Tone FWI algorithm that does not require low-frequency data', 'Insensitive to source estimation error and data measurement error', 'Fast convergence rate (efficient computation of second-order derivative) ', 'Highly automatic algorithm, minimum user interaction', 'Optimized workflows designed for various categories of seismic data'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 4, title: '3D RTM, QRTM & RTM ANGLE GATHERS (ISO/VTI/TTI)', list: ['AVO compliant offset and angle gathers, Finite-difference Q-RTM (patent pending) which is 5x faster than traditional methods', 'Affordable high frequency (e.g. 50Hz) 3D RTM angle gather', 'Output every location in offset or angle domain', 'Azimuthal Imaging'], body: 'Body text to be added.'},
        ],
        publications:[
            { format: 'list', category: 'publication', id: 3, title: 'Research & Development', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'Body text to be added.'},
        ], // publications
        display: [
            { format: 'list', category: 'tech', id: 11, title: '5-D INTERPOLATION', list: ['Global-Local-Hybrid Multi-resolution approach', 'Anti-leakage and anti-aliasing', 'Fills large data gaps'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 10, title: 'DIFFRACTION IMAGING', list: ['Double stage reflection energy suppression'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 9, title: 'FORWARD MODELING', list: ['Finite Element and Finite Difference', 'Surface/Seafloor topography', 'Variable gridding', 'Full physics (Acoustic/Elastic, ISO/VTI/TTI/Orthorhombic, Q)', 'VSP/Sea floor multi-component recording'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 8, title: '3D TOMOGRAPHIC VELOCITY MODEL BUILDING WITH Q, ORTHORHOMBIC', list: ['High-resolution tomography for small velocity anomalies', 'Superior fault definition and improved image', 'Global automatic residual depth move-out picking', 'Geology structural conformed inversion', 'Sub-salt velocity update with RTM dense angle gathers or shot index gathers'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 7, title: 'PREPROCESSING', list: ['Internal time processing package along with Paradigm/Echos'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 6, title: '3D KIRCHHOFF DEPTH & TIME MIGRATION', list: ['Q, HTI/VTI, Orthorhombic', 'Designed for large 3D datasets and high resolution imaging', 'Large scale seismic modeling capability'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 5, title: 'FULL WAVEFORM INVERSION (PATENTED)', list: ['Beat-Tone FWI algorithm that does not require low-frequency data', 'Insensitive to source estimation error and data measurement error', 'Fast convergence rate (efficient computation of second-order derivative) ', 'Highly automatic algorithm, minimum user interaction', 'Optimized workflows designed for various categories of seismic data'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 4, title: '3D RTM, QRTM & RTM ANGLE GATHERS (ISO/VTI/TTI)', list: ['AVO compliant offset and angle gathers, Finite-difference Q-RTM (patent pending) which is 5x faster than traditional methods', 'Affordable high frequency (e.g. 50Hz) 3D RTM angle gather', 'Output every location in offset or angle domain', 'Azimuthal Imaging'], body: 'Body text to be added.'},
        ], // by default this should be the same as the technology list
        numTechItems: 8, // number of tech entries to be displayed per page
        page: 0,
        title: 'TECHNOLOGIES'
    }
    
    // convert numTechItems at a time news entries into NewsItem components
    formatTech = () => {
        var techJSX = [];
        let i = this.state.page * this.state.numTechItems;
        while(i<this.state.display.length && i<this.state.page*this.state.numTechItems + 8){
            let dict = this.state.display[i];
            techJSX.push(<TechnologyItem info={dict}/>)
            i++;
        }
        if(techJSX.length > 0)
            return techJSX;
        else
            return <span class="txt subheading ml-2 mt-2">Nothing on this page.</span>
    }

    incrementPage = () => {
        const page = this.state.page + 1;
        this.setState({page});
    }

    incrementPageTwice = () => {
        const page = this.state.page + 2;
        this.setState({page});
    }
    
    decrementPage = () => {
        const page = this.state.page - 1;
        this.setState({page});
    }
    
    goFirstPage = () => {
        const page = 0;
        this.setState({page});
    }

    goLastPage = () => {
        const page = Math.ceil(this.state.technology.length/this.state.numTechItems) - 1;
        this.setState({page});
    }

    reset = () => {
        this.setState({technology: this.state.publications});
    }

    applyFilter = (num) => {
        var newTitle = '';
        var newList = [];
        if(num==0) {
            newTitle = 'PUBLICATIONS';
            newList = this.state.publications;
        }
        else if(num==1) {
            newTitle = 'TECHNOLOGIES';
            newList = this.state.technology;
        }
        this.setState({title: newTitle, display: newList, page: 0})
    }

    render() { 
        var techFormatted = this.formatTech();
        return ( 
            <div>
            <div class="container-fluid border border-grey" style={{width: '80vw'}}>
                <div class="row">
                    <div class="col-2 border-right text-center">
                        <br/>
                       <span class="txt heading" style={{fontSize: 25, fontWeight: 'bold', color: '#1cb7e6'}}>Filter by:</span>
                       <br/>
                       <Link class="subheading" onClick={() => this.applyFilter(0)} style={{fontSize: 20, color: 'black'}}>Publications</Link><br/>
                       <Link class="subheading" onClick={() => this.applyFilter(1)} style={{fontSize: 20, color: 'black'}}>Technologies</Link><br/>
                    </div>
                    <div class="col-8">
                        <h1 class="heading ml-2 mt-1" style={{fontSize: 35, color: '#585c5e'}}>{this.state.title}</h1>
                        <div class="container-fluid" style={{width: '60vw'}}>
                            <div class="row">
                                {techFormatted.length >= 1 ? techFormatted[0] : null}
                                {techFormatted.length >= 2 ? techFormatted[1] : null}
                            </div>
                            <div class="row">
                                {techFormatted.length >= 3 ? techFormatted[2] : null}
                                {techFormatted.length >= 4 ? techFormatted[3] : null}
                            </div>
                            <div class="row">
                                {techFormatted.length >= 5 ? techFormatted[4] : null}
                                {techFormatted.length >= 6 ? techFormatted[5] : null}
                            </div>
                            <div class="row">
                                {techFormatted.length >= 7 ? techFormatted[6] : null}
                                {techFormatted.length >= 8 ? techFormatted[7] : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <PageNav decrementPage={this.decrementPage} 
                        incrementPage={this.incrementPage}
                        goFirstPage={this.goFirstPage}
                        goLastPage={this.goLastPage}
                        page={this.state.page}
                        incrementPageTwice={this.incrementPageTwice}
                        lastPage={Math.ceil(this.state.technology.length/this.state.numTechItems)}/>
            </div>
            <Footer/>
            </div>
        );
    }
}
