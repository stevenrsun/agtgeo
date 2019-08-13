import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class CorporateLocations extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="col" style={{backgroundColor: 'lightgrey'}}>
              <h5 class="heading mt-3 ml-2" style={{fontWeight: 'bold', fontSize: 15, color: '#3d3838'}}>CORPORATE LOCATIONS</h5>
              <div class="row ml-2">
                <h3 class="heading mt-1" style={{fontWeight: 'bold', fontSize: 20, color: '#f00e0e'}}>HOUSTON TEXAS</h3>
                &nbsp;
                <h3 class="mt-1" style={{fontWeight: 'bold', color: '#0293db', fontSize: 20}}>-</h3>
                &nbsp;
                <h3 class="heading mt-1" style={{fontWeight: 'bold', fontSize: 20, color: '#f00e0e'}}>USA</h3>
              </div>
              <div class="ml-2">
                <span class="txt subheading" style={{fontSize: 13}}>14100 Southwest Freeway, Suite 110<br/></span>
                <span class="txt subheading" style={{fontSize: 13}}>Sugar Land, TX 77478 USA </span>
                <a href='https://goo.gl/maps/J9EKkRi5LgT2' class="link" style={{fontSize: 13}}> 
                  (Map)
                </a><br/>
                <span class="txt subheading" style={{fontSize: 13}}>Tel: 281.888.6789</span>
              </div>

              <div class="row ml-2">
                <h3 class="heading mt-2" style={{fontWeight: 'bold', fontSize: 20, color: '#f00e0e'}}>BEIJING</h3>
                &nbsp;
                <h3 class="mt-2" style={{fontWeight: 'bold', color: '#0293db', fontSize: 20}}>-</h3>
                &nbsp;
                <h3 class="heading mt-2" style={{fontWeight: 'bold', fontSize: 20, color: '#f00e0e'}}>CHINA</h3>
              </div>
              <div class="ml-2 mb-3">
                <span class="txt subheading" style={{fontSize: 13}}>69 Banjing Rd, Suite East 3A<br/></span>
                <span class="txt subheading" style={{fontSize: 13}}>Haidian District<br/></span>
                <span class="txt subheading" style={{fontSize: 13}}>Beijing 100097 China </span>
                <a href='https://goo.gl/maps/909cp' class="link" style={{fontSize: 13}}> 
                  (Map)
                </a><br/>
                <span class="txt subheading" style={{fontSize: 13}}>Tel: +86 10 8843 6207</span>
              </div>
            </div>
           
         );
    }
}
 
