import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class CorporateLocations extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="col-sm" style={{backgroundColor: '#a6a8ab'}}>
              <h5 class="heading mt-5 m-3" style={{fontWeight: 'bold', fontSize: 20, color: '#3d3838'}}>CORPORATE LOCATIONS</h5>
              <div class="row ml-3">
                <h3 class="heading mt-3" style={{fontWeight: 'bold', fontSize: 30, color: '#f00e0e'}}>HOUSTON TEXAS</h3>
                &nbsp;
                <h3 class="mt-3" style={{fontWeight: 'bold', color: '#0293db', fontSize: 30}}>-</h3>
                &nbsp;
                <h3 class="heading mt-3" style={{fontWeight: 'bold', fontSize: 30, color: '#f00e0e'}}>USA</h3>
              </div>
              <div class="ml-3">
                <span class="txt subheading" style={{fontSize: 10}}>14100 Southwest Freeway, Suite 110<br/></span>
                <span class="txt subheading" style={{fontSize: 10}}>Sugar Land, TX 77478 USA </span>
                <Link to={'/address_sugarland'} style={{fontSize: 10}}>
                  (Map)
                </Link><br/>
                <span class="txt subheading" style={{fontSize: 10}}>Tel: 281.888.6789</span>
              </div>

              <div class="row ml-3">
                <h3 class="heading mt-4" style={{fontWeight: 'bold', fontSize: 30, color: '#f00e0e'}}>BEIJING</h3>
                &nbsp;
                <h3 class="mt-4" style={{fontWeight: 'bold', color: '#0293db', fontSize: 30}}>-</h3>
                &nbsp;
                <h3 class="heading mt-4" style={{fontWeight: 'bold', fontSize: 30, color: '#f00e0e'}}>CHINA</h3>
              </div>
              <div class="ml-3">
                <span class="txt subheading" style={{fontSize: 10}}>69 Banjing Rd, Suite East 3A<br/></span>
                <span class="txt subheading" style={{fontSize: 10}}>Haidian District<br/></span>
                <span class="txt subheading" style={{fontSize: 10}}>Beijing 100097 China </span>
                <Link to={'/address_beijing'} style={{fontSize: 10}}>
                  (Map)
                </Link><br/>
                <span class="txt subheading" style={{fontSize: 10}}>Tel: +86 10 8843 6207</span>
              </div>
            </div>
           
         );
    }
}
 
