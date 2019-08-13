import React, { Component } from 'react';

export class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            
                <div id="footer" class="footer mt-3" style={{minWidth: this.props.min, width: '100vw', fontSize: 15, textAlign: 'center', color: 'white', backgroundColor: 'red'}}>
                    
                    <span class="txt">info@agtgeo.com / Tel: 281.888.6789
                    &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; 
                    © 2017 Advanced Geophysical Technology / All Rights Reserved 
                    </span>

                </div>
        );
    }
}
 
