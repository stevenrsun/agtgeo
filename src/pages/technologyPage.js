import React, { Component } from 'react';
import {Footer} from '../components/footer.js';

export class TechnologyPage extends Component {
    state = { 
        info: {},
        bodyText: [],
        list: [],
        images: [],
        technology: [
            {title: 'ADVANCED FORWARD MODELING TECHNOLOGY', 
            list: [
                {link: false, title: 'Low GPU-memory requirement (Patented)'},
                {link: false, title: 'Acoustic/elastic'},
                {link: false, title: 'Anisotropic'},
                {link: false, title: 'Finite Element'},
                {link: false, title: 'Arbritrary topography'},
                {link: false, title: 'All Acquisition Types'},
                {link: false, title: 'Survey Design'},
                {link: true, title: 'ADVANCED FORWARD MODELING TECHNOLOGY',
                    list: [
                        'AGT’s unique Forward Modeling technology is the “gold standard” in the oil/gas industry',
                        'GPU based efficient implementation',
                        'Low GPU-memory requirement (Patented)',
                        'Acoustic and elastic',
                        'Anisotropic – VTI, TTI, Orthorhombic or arbitrary anisotropic',
                        'Finite element based commercial implementation for extremely large projects',
                        'Arbitrary surface / seafloor / horizon topography',
                        'Variable grid for further efficiency boost',
                        'Wide variety of acquisition types – land (dynamite, vibroseis), marine (streamer, nodal), VSP / Sea-Floor multi-component recording',
                        'Reverse shooting based on rigorously validated numerical reciprocity',
                        '3D acquisition design based on AGT advanced modeling technology'
                    ],
                    images: [
                        {image: require('../images/techInstances/forward_modeling_1.png'), caption: 'SEAM Arid Model'},
                        {image: require('../images/techInstances/forward_modeling_2.png'), caption: 'Modeling-aided 3D acquisition design: optimally weight node/receiver/shot contribution'}
                    ],
                    body: []
                 },
            ]},
            {title: 'MODEL BUILDING TECHNOLOGY',
            list: [
                {link: true, title: 'High Resolution Velocity Tomography',
                list:[
                    'Global RMO auto-picking & local arbitrary RMO picking',
                    'Geological structural constraint and spatial varying regularization',
                    'High resolution (~ 100 m) resolving small velocity anomalies',
                    'Isotropic, VTI, TTI, orthorhombic',
                    'Automatic fault preserving',
                    'Sub-salt velocity update capability with RTM angle gathers',
                    'Velocity model building Integrated with Q model building'
                ],
                images:[
                    {image: require('../images/techInstances/HRVT_1.jpg'), caption: 'High resolution tomography'}
                ],
                body: []
                },
                {link: true, title: 'FWI (Patented)',
                list:[
                    'Immune to cycle-skipping phenomenon even without low frequency data – Beat Tone FWI (patented)',
                    'Efficient and nearly error free forward modeling engine: 16th-order accuracy at the 4th-order computational expense.',
                    'Efficient implementation 2nd order derivative information (Hessian) for convergence rate acceleration.',
                    'No source wavelet estimation is required.',
                    'Insensitive to Q, illumination imbalance, unknown mass density, etc.'
                ],
                images:[
                    {image: require('../images/techInstances/FWI_1.jpg'), caption: 'Tomography velocity with well markers'},
                    {image: require('../images/techInstances/FWI_2.jpg'), caption: 'FWI velocity with well markers'}
                ],
                body:[]
                },
                {link: true, title: 'Refraction Tomography',
                list:[],
                images:[
                    {image: require('../images/techInstances/refraction_tomography_1.png'), caption: 'Near surface velocity model – depth slice'}
                ],
                body:[]
                },
            ]},
            {title: 'ADVANCED IMAGING TECHNOLOGY',
            list: [
                {link: false, title: 'PSTM - VTI/HTI'},
                {link: true, title: 'PSDM - VTI/TTI/orthorhombic/Q',
                list: [
                    'GPU based efficient implementation',
                    'PSTM – VTI/HTI',
                    'Kirchhoff PSDM - VTI, TTI, orthorhombic',
                    'Q Kirchhoff migration'
                ],
                images: [
                    {image: require('../images/techInstances/PSDM_1.gif'), caption: 'Kirchhoff migration'},
                    {image: require('../images/techInstances/PSDM_2.gif'), caption: 'Q Kirchhoff migration'}
                ],
                body: []
                },
                {link: true, title: 'RTM - VTI/TTI/Q (Patented)',
                list: [
                    'GPU based efficient implementation',
                    'High frequency (40 Hz – 80 Hz)',
                    'AVO compliant offset and dense angle gathers (Patent pending)',
                    'RTM Offset /Angle / Shot Index Gathers',
                    'Isotropic, VTI, TTI',
                    'RTM based velocity model building',
                    'Q-RTM (Patented)',
                    'Diffraction imaging'
                ],
                images: [],
                body: []
                },
                {link: false, title: 'Diffraction imaging'},
                {link: false, title: 'AVO Compliant Offset Gather'},
            ]},
            {title: 'AI-BASED SEISMIC PROCESSING',
            list: [
                {link: true, title: 'DL-Based First Break Picking',
                list:[
                    'Feature Analysis Network + Data Reconstruction Network',
                    'Human-in-the-Loop Interactive Training',
                    'Convolutional and Recurrent Neural Networks',
                    'Lovasz hinge loss function',
                    'Adaptive to noisy field data',
                    'Applicable to shot gathers with arbitrary sizes'
                ],
                images:[],
                body:[]
                },
                {link: true, title: 'DL-Based Denoising',
                list:[
                    'Sparse coding based denoising',
                    'Deep residual network based denoising',
                    'U-Net combined with STFT for harmonic noise removal'
                ],
                images:[],
                body:[]
                },
                {link: true, title: 'DL-Based FWI Low Frequency Reconstruction',
                list:[
                    'Mathematically predict missing low frequency components in acquired seismic data',
                    'A unique dual data feed (DDF) network structure for network performance enhancement',
                    'Beat Tone helps implicit feature extraction',
                    'Progressive Transfer Learning Strategy: great potential in universal large sized field data projects',
                    'Only a single arbitrarily selected training velocity model is needed: avoid being overwhelmed by Big Data',
                    'Seamlessly integrating physics based module and deep learning network'
                ],
                images:[
                    {image: require('../images/techInstances/FWI_AI_1.jpg'), caption: 'a) FWI result produced by inverting DL-predicted 3 Hz, 5 Hz, 7 Hz data, followed by measured high frequency data (10 Hz – 30 Hz) inversion; b) FWI result produced by sequentially inverting full-bandwidth measured data ( 3 Hz – 30 Hz); c) FWI result produced by direct inverting measured high frequency data sequentially from 10 Hz to 30 Hz.'}
                ],
                body:[
                    'In order to eliminate the notorious cycle-skipping problem in FWI, AGT developed a novel Progressive Transfer Learning method to reconstruct the absent low frequency data from the acquired high frequency seismic data by learning the nonlinear relationship between different frequency bands. This pure data-driven approach does not require any a priori information of the subsurface geological structures. The learning and training process is initiated by arbitrarily selecting a training velocity model. After the initial network training and network prediction, each of the subsequent Progressive Transfer Learning iteration provides an improved training velocity model and training dataset to enhance the low frequency data reconstruction accuracy progressively until the training model converges to the true velocity model. The synthetic and field data examples validated this approach and demonstrate its robustness. The reconstructed low frequency data match the true data with high accuracy and the FWI engine is immune to the cycle-skipping-induced artifacts with the aid of this technology, providing high quality subsurface velocity models nearly identical to those obtained by using physically acquired true low frequency data.'
                ]
                },
            ]},
            {title: 'SIGNAL PROCESSING',
            list:[
                {link: true, title: '5D interpolation', 
                list: [
                    'Input and output data can be arbitrarily located',
                    'Exact locations are used, so binning is not required',
                    'Anti-leakage, anti-aliasing',
                    'No extra regularization is needed',
                    'Multi-resolution implemented in an iterative manner',
                    'Global interpolation performance at local interpolation expense',
                    'Excellent noise suppression capability',
                    'Able to fill large data gap',
                    'Accurate, robust, and fully automatic'
                ],
                images: [
                    {image: require('../images/techInstances/5d_1.png'), caption: 'NMO stack w/o interpolated data'},
                    {image: require('../images/techInstances/5d_2.png'), caption: 'NMO stack with interpolated data'}
                ],
                body: [
                    "AGT’s efficient global-local-hybrid 5D (GLH-5D) seismic data interpolation algorithm, based on the principle of multi-resolution analysis, poses the interpolation as an inverse problem and solves it in an iterative manner. In the first iteration, a low resolution interpolation function is built to roughly approximate the given dataset to resolve the low wavenumber components. With the iteration proceeds, more and more fine features of the seismic data are brought into the interpolation procedure through the gradually refined control lattices, while the interpolation error reduces accordingly. With this iterative multiresolution fashion, the broadband spatial spectral information of the seismic data is reconstructed efficiently.",
                    "Compared with the widely used FFT-based method, there is no binning procedure needed in this algorithm and there is no regularization parameter required, which reduces the uncertainty and bias caused by user interaction and experiences. Actually, the regularization is natively and automatically embedded in the iterative dyadic control lattice strategy in this GLH-5D algorithm. Because this algorithm employs a local interpolation operator with the interpolation stencil length of 4, it is much more efficient than the global interpolation methods, especially the DFT-based method. On the other hand, the global information is taken into account through the iterative multi-resolution interpolation strategy. Furthermore, the local interpolation operator employed by this hybrid interpolation algorithm is an optimally windowed Sinc interpolation, whose spectral properties are precisely controlled to guarantee its anti-aliasing performance. Another important feature of this algorithm is that the initial control lattice resolution can be determined by the frequency bandwidth of the seismic data and the corresponding velocity model. The final control lattice is determined by the predefined interpolation error. These facts further reduce the computational cost and make this algorithm completely automatic. For these reasons, the GLH-5D method is a powerful tool for seismic data processing."
                ]
                },
                {link: true, title: 'Bandwidth Extrapolation',
                list: [
                    'Applicable to both post-stack and pre-stack data',
                    'Insensitive to noise, source wavelet estimation, and non-flatness of the earth frequency response',
                    'Based on sparsity inversion, solved by SALSA',
                    'No matrix multiplication operation is required: highly efficient',
                    'Extrapolating bandlimited data down to DC and up to Nyquist frequency',
                    'Minimum user interaction'
                ],
                images: [],
                body: [
                    'AGT’s bandwidth extrapolation (BE) technology is based on a sparsity-constrained inversion algorithm. With the assumption that the seismic data can be pre-whitening through deconvolution and the earth consists of a series of reflectors, the seismic data can be decomposed to a summation of frequency domain harmonics, thus converting an under-determined inverse problem to an over-determined optimization problem with sparsity constraints. We cast the inverse problem into the minimization of a basis pursuit denoise cost function, which can be solved by an efficient iterative solver, SALSA. Furthermore, for this application, SALSA does not need to involve any matrix multiplication operations during the iteration, saving the computation cost and memory use significantly. AGT’s BE technology is able to extrapolate the bandlimited seismic data down to DC and up to the Nyquist frequency. The field data example shows substantial resolution enhancements while the reliability and robustness is validated, demonstrating its great potential in geological interpretation and other applications in the oil / gas industry. This BE algorithm is applicable to both pre-stack and post-stack data.'
                ]
                },
                {link: true, title: 'Ground-Roll Attenuation',
                list: [],
                images: [
                    {image: require('../images/techInstances/gr_attenuation_1.png'), caption: 'Before Ground Roll removal (Captured with 3rd party software)'},
                    {image: require('../images/techInstances/gr_attenuation_2.png'), caption: 'After Ground Roll removal (Captured with 3rd party software)'}
                ],
                body: []
                },
                {link: false, title: 'Statics Correction'},
            ]},
            {title: 'FACILITY / PRODUCT / DELIVERY',
            list: [
                {link: false, title: 'Unique in-house HPC facility',
                },
                {link: false, title: 'World-class GPU environment (3.9 Petaflops)'},
                {link: false, title: 'Time to Market Exceptional - Real time or near time testing of ideas and workflows'},
                {link: true, title: 'Unique Time/Depth Parallel Interactive Processing Workflow',
                list: [
                    'Parallel and interactive time processing & depth processing',
                    'Depth processing helps QC time processing',
                    'Catch problems at an early stage'
                ],
                images: [
                    {image: require('../images/techInstances/time_workflow.png'), caption: 'Workflow example'}
                ],
                body: []
                },
                {link: true, title: 'Integrated Propriety Platform - NovaSeis',
                list: [],
                images: [
                    {image: require('../images/techInstances/novaseis.jpg'), caption: 'All developed technologies integrated in AGT proprietary NovaSeis Platform'}
                ],
                body: []
                },
            ]}
        ]
    }

    componentDidMount = () => {
        var info = {};
        let i=0;
        var found = false;
        while(i<this.state.technology.length && !found) {
            let j=0;
            while(j<this.state.technology[i]['list'].length && !found) {
                if('/TechnologyPage/' + (this.state.technology[i]['list'][j]['title'].replace(/\s/g, '')) === this.props.location.pathname){
                    info = this.state.technology[i]['list'][j];
                    found = true;
                }
                j++;
            }
            i++;
        } 

        //const {info} = this.props.location.state;
        this.setState({info});
        document.title = 'AGT - ' + info.title;
        
        var listContent = [];
        for(let i=0; i<info['list'].length; i++) {
            listContent.push(<li class="subheading" style={this.styles.body}>{info['list'][i]}</li>)
        }
        var list = <ol>{listContent}</ol>

        var images = [];
        for(let i=0; i<info['images'].length; i++) {
            images.push(<div class="text-center">
                <img src={info['images'][i]['image']} alt={"image" + i} style={this.styles.image}/>
                <p class="subheading mt-2" style={this.styles.caption}>{info['images'][i]['caption']}</p>
            </div>)
        }

        var bodyText = [];
        for(let i=0; i<info['body'].length; i++) {
            bodyText.push(<p class="subheading" style={this.styles.body}>{info['body'][i]}</p>)
        }
        this.setState({bodyText, list, images});
    }

    styles = {
        header: {
            fontSize: 60,
            color: '#EE3124'
        },

        body:{
            fontSize: 20
        },

        caption:{
            fontSize: 15
        },

        image:{
            width: '50vw'
        }
    }

    render() { 
        console.log(this.props.location.pathname)
        return ( 
            <React.Fragment>
            <div class="container border border-grey">
                <div class="text-left mt-4">
                    <h1 class="heading ml-5 mr-5" style={this.styles.header}>{this.state.info['title']}</h1>
                </div>
                <div class="text-left ml-5 mr-5 mt-4 mb-5">
                    {this.state.list}
                    {this.state.images}
                    {this.state.bodyText}
                </div>
            </div>
            <Footer/>
            </React.Fragment>
        );
    }
}
 