import React, { Component } from 'react';
import { Fade } from 'react-slideshow-image';
import {NewsCard} from '../components/newsCard.js';

export class Home extends Component {

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

    Slideshow = () => {
        return (
          <div className="slide-container d-flex justify-content-center">
            <Fade {...this.fadeProperties} style={this.styles.fade}>
              <div className="each-fade">
                <div className="container">
                  <NewsCard title='Test Title' caption='New breakthrough in seismic wave graphing, thanks to dr peter stone...' img={require('../images/1.jpeg')}/>
                </div>
              </div>
              <div className="each-fade">
                <div className="container">
                    <NewsCard title='Test Title' caption='new breakthrough in seismic wave graphing, thanks to dr peter stone'  img={require('../images/2.jpeg')}/>
                    </div>
                </div>
              <div className="each-fade">
                <div className="container">
                  <NewsCard title='Test Title' caption='new breakthrough in seismic wave graphing, thanks to dr peter stone' img={require('../images/3.jpg')}/>
                </div>
              </div>
            </Fade>
          </div>
        )
    }

    render() { 
        //const Slideshow = require('react-slidez')
        /*<Slideshow
                showIndex={true}
                showArrows={true}  
                autoplay={true}
                enableKeyboard={false}
                useDotIndex={true}
                slideInterval={10000}
                defaultIndex={1}
                slides={['https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 
                'https://jooinn.com/images/beautiful-scenery-8.jpg', 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCbrBNzNVYRK0bLGA9nl89w25d9GOiD0gQc4vIbh0ecMQKte8']}
                effect={'fade'}
                height={'100%'}
                width={'100%'}
           />*/
        return (
           this.Slideshow()
        );
    }
}
 