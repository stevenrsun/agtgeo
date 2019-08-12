import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import {NewsCard} from '../components/newsCard.js';
import {CorporateLocations} from '../components/corporateLocations.js';
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
            height: '60vh',
            flexDirection: 'row'
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
          <div class="container-fluid border border-grey" style={{width: '60vw'}}>
            <div class="row">
              {this.Slideshow()}
            </div>
            <div class="row">
              <div class="col-8 border-right border-grey">
                asdf
              </div>
              <CorporateLocations/>
            </div>
            
           </div>
           
           <Footer/>
          </React.Fragment>
        );
    }
}
 