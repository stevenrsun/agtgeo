import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class Management extends Component {
    state = {  }

    styles = {
        header: {
            color: '#EE3124',
            fontSize: 35
        },
        subheader: {
            color: '#EE3124',
            fontSize: 25
        },
        bold: {
            fontWeight: 'bold',
            fontSize: 19
        },
        blue: {
            color: '#00ACD4',
            fontSize: 50
        },
        blueSmall: {
            color: '#00ACD4',
            fontSize: 20
        },
        small: {
            fontSize: 14
        }
    }

    componentDidMount() {
        document.title = 'AGT - Management';
    }

    render() { 
        return ( 
            <React.Fragment>
            <div class="container-fluid border border-grey" style={{width: '60vw', minWidth: 700}}>
                <div class="row m-5">
                    <div>
                        <span class="txt heading-2" style={this.styles.blue}>+ </span>
                        <span class="txt heading-3" style={this.styles.subheader}>Management Team</span>
                    </div>
                    <div>
                        <span class="txt subheading-bold">AGT </span>
                        <span class="txt subheading">is using our collective geophysics expertise to shape the future of seismic imaging. Our elite team of hand-picked professionals keeps AGT on the leading edge of imaging technology—and helps clients select the optimal technology for each project site.</span>
                    </div>
                </div>
                <div class="row m-5">
                    <div class="col">
                        <img src={require('../images/management_graphic.png')} alt="people_graphic"/>
                    </div>
                    <div class="col">
                        <div>
                            <span class="txt heading" style={this.styles.subheader}>Who </span>
                            <span class="txt heading-4" style={this.styles.subheader}>Does &nbsp;</span>
                            <span class="txt heading" style={this.styles.subheader}>What —</span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>ROB YORKE </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> CHIEF EXECUTIVE OFFICER</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Rob has provided seismic imaging services and software solutions to the oil service industry for more than 33 years. His broad experience base ranges from managing divisions within publicly traded oil service companies to leading small, entrepreneurial privately held seismic imaging companies. <br/><br/>

                            Rob began his career in Calgary with Veritas in 1981 before moving to the U.S., where he led the Veritas seismic processing group’s entry into the U.S. market in 1993. He subsequently served as Vice President of Seismic Services for ADS in 2001 before Core Lab’s purchase of ADS, and President of Core Lab’s Reservoir Technology Division. He also served as President of the U.S. division of Paradigm Geophysical and CEO of 3DGEO. Rob attended Acadia University, Nova Scotia, Canada from 1979-1981, where he majo#EE3124 in Computer Science.</span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>LIJIAN TAN, PH.D. </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> PRESIDENT &#038; CHIEF TECHNOLOGY OFFICER</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Since co-founding AGT in 2010, Lijian is in charge of the development
                                and application of innovative seismic forward modeling technology,
                                Reverse Time Migration (RTM) and angle gather output technologies.
                                These efforts have established AGT's status as an industry leader in
                                seismic forward modeling. Lijian has also successfully led the
                                development of AGT's Kirchhoff migration implementation on GPU
                                hardware, designed the framework of AGT's proprietary time processing
                                package and played a key role in development and application of the
                                underlying modules. <br/> <br/>
                                Since 2018, Lijian has been serving as the
                                President of AGT. Prior to Lijian's time with AGT, Lijian explored FWI
                                technology as a Senior Research Engineer at ExxonMobil between 2007
                                and 2010. He earned a Ph.D. degree from Cornell University in 2007 in
                                Mechanical &#038; Aerospace Engineering, with a minor in Computer Science.</span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>XIJING LIAN </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> VP: BUSINESS DEVELOPMENT CHINA</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Xijing has significant 3D depth imaging experience in many of the world’s geologic basins including GOM, South America, West Africa, East Africa and the North Arctic.<br/><br/>

                            Prior to joining AGT, Xijing worked as a Senior Geophysicist at ION/GXT from 1996-2012. He also worked as a Senior Geophysicist while at CNOOC from 1982-1995. He received a B.Sc. degree in Geophysics from the Marine Geology Department at Tongji University.</span>
                        </div>
                    </div>
                    <div class="col">
                        <div>
                            <span class="txt heading" style={this.styles.subheader}>&nbsp; </span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>J. JERRY YUAN, PH.D. </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> VP: VELOCITY MODEL BUILDING</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Since joining AGT in 2012, Jerry has focused on velocity model building in isotropic/anisotropic media, mainly through automatic moveout picking, ray tracing and tomographic inversion.<br/><br/>

                            Previously, Jerry worked as a Staff Velocity Geophysicist at ConocoPhillips (2009-2012), as a Senior Research Geophysicist at ION/GXT (2006-2009), and as a Senior Research Geophysicist at PGS (2000-2006). He received a Ph.D. degree in Geophysics from the University of Edinburgh, a Master’s degree in Geophysics from the China University of Petroleum, and a B.Sc. degree in Geophysics from Peking University.</span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>YONG SUN </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> VP: SYSTEMS &#38; MIGRATIONS</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Yong has spent more than 20 years working in the seismic industry as a geophysical researcher and software developer. His current work at AGT focuses primarily on seismic imaging, anisotropy, multiple elimination, regularization, supercomputing, and software systems.<br/><br/>

                            Yong received his M.Sc. degree in Computer Science from University of Houston in 1999, his M.Sc. degree in Geophysics from China Seismological Bureau in 1988, and his B.Sc. degree in Geophysics from Peking University in 1985.</span>
                        </div>
                        <div class="mt-2">
                            <span class="txt nav-text" style={this.styles.bold}>WENYI HU, PH.D. </span>
                            <span class="txt heading-2" style={this.styles.blueSmall}>></span>
                            <span class="txt nav-text" style={{fontSize: 19}}> VP: FULL WAVEFORM INVERSION</span>
                        </div>
                        <div class="mt-1">
                            <span class="txt subheading" style={this.styles.small}>Wenyi is pursuing a variety of research and development projects for AGT related to forward and inverse problems in exploration geophysics. In previous research positions, he developed algorithms for full waveform inversion of seismic data and joint inversion of multi-physics data. He also conducted research on velocity tomography and Q tomography.<br/><br/>

Since joining AGT in 2013, he has developed and implemented novel techniques for full waveform inversion (FWI) and advanced numerical modeling of seismic waves. He holds one US patent on Q tomography methodology and has two US patent applications under review. Wenyi received the Ph.D. degree in Electrical Engineering from Duke University, Durham, NC, in 2005.</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer min={700}/>
            </React.Fragment>
        );
    }
}
 