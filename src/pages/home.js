import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import {NewsCard} from '../components/newsCard.js';
import {CorporateLocations} from '../components/corporateLocations.js';
import {Footer} from '../components/footer.js';

export class Home extends Component {
    state = {
      newsSlides: [
        {title: '', caption: '', img: require('../images/home-image-1.jpg')},
        {title: '', caption: '', img: require('../images/home-image-2.jpg')},
        {title: '', caption: '', img: require('../images/home-image-3.jpg')}
      ]
    }

    componentDidMount() {
      document.title = 'AGT';
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
            height: '60vh',
            minWidth: 700,
            maxHeight: 500
        },
        fade: {
            width: '60vw',
            height: '60vh',
            flexDirection: 'row',
            minWidth: 700,
            maxHeight: 500
        },
        blue: {
          color: '#00ACD4',
          fontSize: 25
        },
        link: {
          fontStyle: 'italic', 
          textDecorationLine: 'underline'
        }
    }

    // display cards on a timer w/fade effect (code from react-native-slideshow)
    Slideshow = () => {
        return (
          <div className="slide-container d-flex justify-content-center">
            <Fade {...this.fadeProperties} style={this.styles.fade}>
              <div className="each-fade">
                <div className="container-lg">
                  <img src={this.state.newsSlides[0]['img']} alt='asdf' style={this.styles.image}/>
                </div>
              </div>
              <div className="each-fade">
                <div className="container-lg">
                  <img src={this.state.newsSlides[1]['img']} alt='asdf' style={this.styles.image}/>                    </div>
                </div>
              <div className="each-fade">
                <div className="container-lg">
                  <img src={this.state.newsSlides[2]['img']} alt='asdf' style={this.styles.image}/>               </div>
              </div>
            </Fade>
          </div>
        )
    }

    render() { 
        return (
          <React.Fragment>
          <div class="container-fluid border border-grey" style={{width: '60vw', minWidth: 700}}>
            <div class="row">
              {this.Slideshow()}
            </div>
            <div class="row">
              <div class="col-8 border-right border-grey">
                <div class="container-fluid m-4" style={{width: '30vw'}}>
                  <span class="txt subheading" style={{fontSize: 25}}>Find out how </span>
                  <span class="txt subheading-bold" style={this.styles.blue}>AGT PRODUCES HIGHER RESOLUTION RESULTS</span>
                  <span class="txt subheading" style={{fontSize: 25}}> than conventional processing methods and algorithms used today.&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  
                  <Link to={'/Services'} style={this.styles.link}>Read more</Link>
                </div>
              </div>
              <CorporateLocations/>
            </div>
            
           </div>
           
           <Footer min = {700}/>
          </React.Fragment>
        );
    }
}
 