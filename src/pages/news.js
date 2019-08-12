import React, { Component } from 'react';
import {NewsItem} from '../components/newsItem.js';
import {PageNav} from '../components/pageNav.js';
import {Link} from 'react-router-dom';
import {Footer} from '../components/footer.js';

export class News extends Component {
    state = { 
        news: [
            {id: 1, year: 2019, title: '', text: 'No news yet!'}
         ],
        newsReset: [
            {id: 1, year: 2019, title: '', text: 'No news yet!'}
         ], // a copy of the entirety of news to be saved every time news is modified by a function call
        numNewsItems: 6, // number of news entries to be displayed per page
        page: 0
    }
    
    // convert numNewsItems at a time news entries into NewsItem components
    formatNews = () => {
        var newsJSX = [];
        let i = this.state.page * this.state.numNewsItems;
        while(i<this.state.news.length && i<this.state.page*this.state.numNewsItems + 6){
            let dict = this.state.news[i];
            newsJSX.push(<NewsItem info={dict}/>)
            i++;
        }
        return newsJSX;
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
        const page = Math.ceil(this.state.news.length/this.state.numNewsItems) - 1;
        this.setState({page});
    }

    applyFilter = (year) => {
        var news = this.state.newsReset.filter(o => {return o['year'] === year});
        this.setState({news});
    }

    reset = () => {
        this.setState({news: this.state.newsReset});
    }

    render() { 
        var newsFormatted = this.formatNews();
        return ( 
            <div style={{width: '100vw'}}>
            <div class="container border border-grey" style={{width: '100vw'}}>
                <div class="row">
                    <div class="col-2 border-right text-center">
                        <br/>
                        <Link class="heading" onClick={this.reset} style={{fontSize: 25, fontWeight: 'bold', color: '#1cb7e6'}}>All News</Link><br/>
                        <Link class="subheading" onClick={() => this.applyFilter(2019)} style={{fontSize: 20, color: 'black'}}>2019-2020</Link><br/>
                    </div>
                    <div class="col-lg">
                        <h1 class="heading ml-2 mt-1" style={{fontSize: 35, color: '#585c5e'}}>LATEST NEWS</h1>
                        {newsFormatted}
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
                        lastPage={Math.ceil(this.state.news.length/this.state.numNewsItems)}/>
            </div>
            <Footer class="mt-5"/>
            </div>
        );
    }
}
