import React, { Component } from 'react';
import {ServiceItem} from '../components/serviceItem.js';
import {PageNav} from '../components/pageNav.js';
import {Footer} from '../components/footer.js';
import {Link} from 'react-router-dom';

export class Services extends Component {
    state = { 
        services: [
            { format: 'list', category: 'tech', id: 11, title: '5-D INTERPOLATION', list: ['Global-Local-Hybrid Multi-resolution approach', 'Anti-leakage and anti-aliasing', 'Fills large data gaps'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 10, title: 'DIFFRACTION IMAGING', list: ['Double stage reflection energy suppression'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 9, title: 'FORWARD MODELING', list: ['Finite Element and Finite Difference', 'Surface/Seafloor topography', 'Variable gridding', 'Full physics (Acoustic/Elastic, ISO/VTI/TTI/Orthorhombic, Q)', 'VSP/Sea floor multi-component recording'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 8, title: '3D TOMOGRAPHIC VELOCITY MODEL BUILDING WITH Q, ORTHORHOMBIC', list: ['High-resolution tomography for small velocity anomalies', 'Superior fault definition and improved image', 'Global automatic residual depth move-out picking', 'Geology structural conformed inversion', 'Sub-salt velocity update with RTM dense angle gathers or shot index gathers'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 7, title: 'PREPROCESSING', list: ['Internal time processing package along with Paradigm/Echos'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 6, title: '3D KIRCHHOFF DEPTH & TIME MIGRATION', list: ['Q, HTI/VTI, Orthorhombic', 'Designed for large 3D datasets and high resolution imaging', 'Large scale seismic modeling capability'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 5, title: 'FULL WAVEFORM INVERSION (PATENTED)', list: ['Beat-Tone FWI algorithm that does not require low-frequency data', 'Insensitive to source estimation error and data measurement error', 'Fast convergence rate (efficient computation of second-order derivative) ', 'Highly automatic algorithm, minimum user interaction', 'Optimized workflows designed for various categories of seismic data'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 4, title: '3D RTM, QRTM & RTM ANGLE GATHERS (ISO/VTI/TTI)', list: ['AVO compliant offset and angle gathers, Finite-difference Q-RTM (patent pending) which is 5x faster than traditional methods', 'Affordable high frequency (e.g. 50Hz) 3D RTM angle gather', 'Output every location in offset or angle domain', 'Azimuthal Imaging'], body: 'Body text to be added.'},
            { format: 'list', category: 'service', id: 3, title: 'Research & Development', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'Body text to be added.'},
            { format: 'list', category: 'service', id: 2, title: 'Migration & Velocity Model Building', list: ['2D/3D Time', '2D/3D Depth', 'Land/Marine (NAZ, WAZ, Broadband, Nodal, etc.)'], body: 'Body text to be added.'},
            { format: 'text', category: 'service', id: 1, title: 'Seismic Imaging Service', text: 'AGT provides advanced, best-in-class seismic imaging services to Oil and Gas Companies.', body: 'Body text to be added.'}
        ],
        servicesReset:[
            { format: 'list', category: 'tech', id: 11, title: '5-D INTERPOLATION', list: ['Global-Local-Hybrid Multi-resolution approach', 'Anti-leakage and anti-aliasing', 'Fills large data gaps'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 10, title: 'DIFFRACTION IMAGING', list: ['Double stage reflection energy suppression'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 9, title: 'FORWARD MODELING', list: ['Finite Element and Finite Difference', 'Surface/Seafloor topography', 'Variable gridding', 'Full physics (Acoustic/Elastic, ISO/VTI/TTI/Orthorhombic, Q)', 'VSP/Sea floor multi-component recording'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 8, title: '3D TOMOGRAPHIC VELOCITY MODEL BUILDING WITH Q, ORTHORHOMBIC', list: ['High-resolution tomography for small velocity anomalies', 'Superior fault definition and improved image', 'Global automatic residual depth move-out picking', 'Geology structural conformed inversion', 'Sub-salt velocity update with RTM dense angle gathers or shot index gathers'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 7, title: 'PREPROCESSING', list: ['Internal time processing package along with Paradigm/Echos'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 6, title: '3D KIRCHHOFF DEPTH & TIME MIGRATION', list: ['Q, HTI/VTI, Orthorhombic', 'Designed for large 3D datasets and high resolution imaging', 'Large scale seismic modeling capability'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 5, title: 'FULL WAVEFORM INVERSION (PATENTED)', list: ['Beat-Tone FWI algorithm that does not require low-frequency data', 'Insensitive to source estimation error and data measurement error', 'Fast convergence rate (efficient computation of second-order derivative) ', 'Highly automatic algorithm, minimum user interaction', 'Optimized workflows designed for various categories of seismic data'], body: 'Body text to be added.'},
            { format: 'list', category: 'tech', id: 4, title: '3D RTM, QRTM & RTM ANGLE GATHERS (ISO/VTI/TTI)', list: ['AVO compliant offset and angle gathers, Finite-difference Q-RTM (patent pending) which is 5x faster than traditional methods', 'Affordable high frequency (e.g. 50Hz) 3D RTM angle gather', 'Output every location in offset or angle domain', 'Azimuthal Imaging'], body: 'Body text to be added.'},
            { format: 'list', category: 'service', id: 3, title: 'Research & Development', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'Body text to be added.'},
            { format: 'list', category: 'service', id: 2, title: 'Migration & Velocity Model Building', list: ['2D/3D Time', '2D/3D Depth', 'Land/Marine (NAZ, WAZ, Broadband, Nodal, etc.)'], body: 'Body text to be added.'},
            { format: 'text', category: 'service', id: 1, title: 'Seismic Imaging Service', text: 'AGT provides advanced, best-in-class seismic imaging services to Oil and Gas Companies.', body: 'Body text to be added.'}
        ], // a copy of the entirety of news to be saved every time news is modified by a function call
        numServiceItems: 6, // number of news entries to be displayed per page
        page: 0,
        title: 'SERVICES AND TECHNOLOGIES'
    }
    
    // convert numServiceItems at a time news entries into NewsItem components
    formatService = () => {
        var serviceJSX = [];
        let i = this.state.page * this.state.numServiceItems;
        while(i<this.state.services.length && i<this.state.page*this.state.numServiceItems + 6){
            let dict = this.state.services[i];
            serviceJSX.push(<ServiceItem info={dict}/>)
            i++;
        }
        if(serviceJSX.length > 0)
            return serviceJSX;
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
        const page = Math.ceil(this.state.services.length/this.state.numServiceItems) - 1;
        this.setState({page});
    }

    reset = () => {
        this.setState({services: this.state.servicesReset});
    }

    applyFilter = (num) => {
        var newTitle = '';
        var newList = [];
        if(num==0) {
            newTitle = 'SERVICES';
            newList = this.state.servicesReset.filter(o=>{return o['category'] == 'service'});
        }
        else if(num==1) {
            newTitle = 'TECHNOLOGIES';
            newList = this.state.servicesReset.filter(o=>{return o['category'] == 'tech'});
        }
        else {
            newTitle = 'SERVICES AND TECHNOLOGIES';
            newList = this.state.servicesReset;
        }
        this.setState({title: newTitle, services: newList, page: 0})
    }

    render() { 
        var serviceFormatted = this.formatService();
        return ( 
            <div style={{width: '100vw'}}>
            <div class="container border border-grey">
                <div class="row">
                    <div class="col-2 border-right text-center">
                        <br/>
                       <span class="txt heading" style={{fontSize: 25, fontWeight: 'bold', color: '#1cb7e6'}}>Filter by:</span>
                       <br/>
                       <Link class="subheading" onClick={() => this.applyFilter(0)} style={{fontSize: 20, color: 'black'}}>Services</Link><br/>
                       <Link class="subheading" onClick={() => this.applyFilter(1)} style={{fontSize: 20, color: 'black'}}>Technologies</Link><br/>
                       <Link class="subheading" onClick={() => this.applyFilter(2)} style={{fontSize: 20, color: 'black'}}>All</Link><br/>
                    </div>
                    <div class="col-8">
                        <h1 class="heading ml-2 mt-1" style={{fontSize: 35, color: '#585c5e'}}>{this.state.title}</h1>
                        {serviceFormatted}
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
                        lastPage={Math.ceil(this.state.services.length/this.state.numServiceItems)}/>
            </div>
            <Footer/>
            </div>
        );
    }
}
