import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import {NewsCard} from '../components/newsCard.js';
import {Link} from 'react-router-dom';
import {Footer} from '../components/footer.js';

export class Home extends Component {
    state = {
      newsSlides: [
        {title: 'Title 1', caption: 'caption 1', img: require('../images/1.jpeg')},
        {title: 'Title 2', caption: 'caption 2', img: require('../images/2.jpeg')},
        {title: 'Title 3', caption: 'caption 3', img: require('../images/3.jpg')}
      ]
    }

    // slideshow fade effect
    fadeProperties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
        onChange: (oldIndex, newIndex) => {
            console.log(`fade transition from ${oldIndex} to ${newIndex}`);
        }
    }

    styles = {
        image: {
            width: '60vw',
            height: '60vh'
        },
        fade: {
            width: '60vw',
            height: '60vh'
        }
    }

    // display cards on a timer w/fade effect (code from react-native-slideshow)
    Slideshow = () => {
        return (
          <div className="slide-container d-flex justify-content-center">
            <Fade {...this.fadeProperties} style={this.styles.fade}>
              <div className="each-fade">
                <div className="container-lg">
                  <NewsCard title={this.state.newsSlides[0]['title']} caption={this.state.newsSlides[0]['caption']} img={this.state.newsSlides[0]['img']}/>
                </div>
              </div>
              <div className="each-fade">
                <div className="container-lg">
                  <NewsCard title={this.state.newsSlides[1]['title']} caption={this.state.newsSlides[1]['caption']} img={this.state.newsSlides[1]['img']}/>                    </div>
                </div>
              <div className="each-fade">
                <div className="container-lg">
                  <NewsCard title={this.state.newsSlides[2]['title']} caption={this.state.newsSlides[2]['caption']} img={this.state.newsSlides[2]['img']}/>                </div>
              </div>
            </Fade>
          </div>
        )
    }

    render() { 
        return (
          <React.Fragment>
          <div class="row" style={{width: '100vw'}}>
            <div class="col-lg ml-2">
              {this.Slideshow()}
            </div>
            <div class="col-sm" style={{backgroundColor: '#a6a8ab'}}>
              <h5 class="mt-5 m-3" style={{fontWeight: 'bold', fontSize: 30, color: '#3d3838'}}>CORPORATE LOCATIONS</h5>
              <div class="row ml-3">
                <h3 class="display-1 mt-3" style={{fontWeight: 'bold', fontSize: 40, color: '#f00e0e'}}>HOUSTON TEXAS</h3>
                &nbsp;
                <h3 class="mt-3" style={{fontWeight: 'bold', color: '#0293db', fontSize: 40}}>-</h3>
                &nbsp;
                <h3 class="display-1 mt-3" style={{fontWeight: 'bold', fontSize: 40, color: '#f00e0e'}}>USA</h3>
              </div>
              <div class="ml-3">
                <span class="txt" style={{fontSize: 20}}>14100 Southwest Freeway, Suite 110<br/></span>
                <span class="txt" style={{fontSize: 20}}>Sugar Land, TX 77478 USA </span>
                <Link to={'/address_sugarland'} style={{fontSize: 20}}>
                  (Map)
                </Link><br/>
                <span class="txt" style={{fontSize: 20}}>Tel: 281.888.6789</span>
              </div>

              <div class="row ml-3">
                <h3 class="display-1 mt-4" style={{fontWeight: 'bold', fontSize: 40, color: '#f00e0e'}}>BEIJING</h3>
                &nbsp;
                <h3 class="mt-4" style={{fontWeight: 'bold', color: '#0293db', fontSize: 40}}>-</h3>
                &nbsp;
                <h3 class="display-1 mt-4" style={{fontWeight: 'bold', fontSize: 40, color: '#f00e0e'}}>CHINA</h3>
              </div>
              <div class="ml-3">
                <span class="txt" style={{fontSize: 20}}>69 Banjing Rd, Suite East 3A<br/></span>
                <span class="txt" style={{fontSize: 20}}>Haidian District<br/></span>
                <span class="txt" style={{fontSize: 20}}>Beijing 100097 China </span>
                <Link to={'/address_beijing'} style={{fontSize: 20}}>
                  (Map)
                </Link><br/>
                <span class="txt" style={{fontSize: 20}}>Tel: +86 10 8843 6307</span>
              </div>
            </div>
           </div>
           <br/>
           <br/>
           <br/><br/><br/>
           <Footer/>
          </React.Fragment>
        );
    }
}
 