import React, { Component } from 'react';
import {ServiceItem} from '../components/serviceItem.js';
import {PageNav} from '../components/pageNav.js';
import {Footer} from '../components/footer.js';
import {Link} from 'react-router-dom';

export class Services extends Component {
    state = { 
        // just as in news.js, id corresponds to the number displayed in url

        // format must be either 'list' or 'text' exactly:
        // list: use key list equal to an array of strings to be displayed in a vertical, bulleted list under the card title
        // text: the entire string will be displayed and wrap around per line according to the dimensions of the containing card

        // the body key corresponds to the text that will appear in each instance page (after clicking more info on a card)
        // any additional keys can be accessed in src/components/serviceItem.js using this.props.info.keyName or this.props.info['keyName']
        services: [
            { format: 'list', id: 4364364, title: 'Researcopment', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'asdfasfdafae'},
            { format: 'list', id: 3, title: 'Research & Development', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'Body text to be added.'},
            { format: 'list', id: 2, title: 'Migration & Velocity Model Building', list: ['2D/3D Time', '2D/3D Depth', 'Land/Marine (NAZ, WAZ, Broadband, Nodal, etc.)'], body: 'Body text to be added.'},
            { format: 'text', id: 1, title: 'Seismic Imaging Service', text: 'AGT provides advanced, best-in-class seismic imaging services to Oil and Gas Companies.', body: 'Body text to be added.'}
        ],
        /*servicesReset:[
            { format: 'list', id: 3, title: 'Research & Development', list: ['40% of all capital is committed to R&D', 'Customer Focused Results - technology roadmap is adaptable', 'Rapid Technology Implementation - i.e. AVO Compliant RTM Gathers, Q', 'Nimble; technology roadmap adaptable to clients\' needs'], body: 'Body text to be added.'},
            { format: 'list', id: 2, title: 'Migration & Velocity Model Building', list: ['2D/3D Time', '2D/3D Depth', 'Land/Marine (NAZ, WAZ, Broadband, Nodal, etc.)'], body: 'Body text to be added.'},
            { format: 'text', id: 1, title: 'Seismic Imaging Service', text: 'AGT provides advanced, best-in-class seismic imaging services to Oil and Gas Companies.', body: 'Body text to be added.'}
        ], */// a copy of the entirety of news to be saved every time news is modified by a function call, since there is currently
        // no filter for this page, it's useless, but I'm keeping it here in case we decide to apply filters later. There's 
        // no need to update this at all until filters are implemented, so you can leave it alone unlike the news/technology pages
        numServiceItems: 6, // number of news entries to be displayed per page
        page: 0,
        title: 'SERVICES'
    }

    componentDidMount() {
        document.title = 'AGT - Services';
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

    /*applyFilter = (num) => {
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
    }*/

    render() { 
        var serviceFormatted = this.formatService();
        return ( 
            <div style={{width: '100vw'}}>
            <div class="container-fluid border border-grey" style={{width: '60vw', minWidth: 700}}>
                <div class="row">
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
            <Footer min={700}/>
            </div>
        );
    }
}
