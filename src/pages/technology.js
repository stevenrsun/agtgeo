import React, { Component } from 'react';
import {TechnologyItem} from '../components/techItem.js';
import {PageNav} from '../components/pageNav.js';
import {Footer} from '../components/footer.js';
import {Link} from 'react-router-dom';
import {pub1} from '../publications/P01-SEG2014_Hu_BTFWI.pdf';

export class Technology extends Component {
    state = { 
        // follow format, if no images/bodytext/list just create a key mapping to an empty list
        technology: [
            {title: 'ADVANCED FORWARD MODELING TECHNOLOGY', 
            list: [
                {link: true, title: 'Forward Modeling',
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
                {link: false, title: 'Low GPU-memory requirement (Patented)'},
                {link: false, title: 'Acoustic/elastic'},
                {link: false, title: 'Anisotropic'},
                {link: false, title: 'Finite Element'},
                {link: false, title: 'Arbritrary topography'},
                {link: false, title: 'All Acquisition Types'},
                {link: false, title: 'Survey Design'},
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
                {link: false, title: 'Q model building'},
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
        ],
        // add publications to agt/public, not src/publications
        publications:[
            {title: '(P01) Hu, Wenyi, 2014. FWI without low frequency data-beat tone inversion. In SEG Technical Program Expanded Abstracts 2014 (pp. 1116-1120). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P01-SEG2014_Hu_BTFWI.pdf'},
            {title: '(P02) Hu, Wenyi, 2014. A nearly exact seismic modeling algorithm for frequency domain FWI. In SEG Technical Program Expanded Abstracts 2014 (pp. 3460-3464). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P02-SEG2014_Hu_Exact-Modeling.pdf'},
            {title: '(P03) Hu, Wenyi, 2015. IBFD for seismic wave modeling-A regular grid method handling arbitrary topography. In SEG Technical Program Expanded Abstracts 2015 (pp. 3544-3548). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P03-SEG2015_Hu_IMFDTD.pdf'},
            {title: '(P04) Hu, Wenyi, 2016. Optimal Green\'s function estimation for FWI acceleration. In SEG Technical Program Expanded Abstracts 2016 (pp. 1074-1078). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P04-SEG2016_Hu_OGE.pdf'},
            {title: '(P05) Hu, Wenyi, Tong Zhou, and Jieyuan Ning, 2016. An efficient Q-RTM algorithm based on local differentiation operators. In SEG Technical Program Expanded Abstracts 2016 (pp. 4183-4187). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P05-SEG2016_Hu_QRTM.pdf'},
            {title: '(P06) Hu, Wenyi, 2016. An improved immersed boundary finite-difference method for seismic wave propagation modeling with arbitrary surface topography Seismic wave modeling with surface topography. Geophysics, 81(6), pp.T311-T322.', 
            link: process.env.PUBLIC_URL + '/P06-Geophysics2017_Hu_IBFD.pdf'},
            {title: '(P07) Hu, Wenyi, 2017. A global-local-hybrid multidimensional seismic-data interpolation algorithm. In SEG Technical Program Expanded Abstracts 2017 (pp. 4267-4271). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P07-SEG2017_Hu_5Dinterp.pdf'},
            {title: '(P08) Hu, Wenyi, Tong Zhou, and Jieyuan Ning, J., 2017. Efficient Q RTM in transversely isotropic media. In SEG Technical Program Expanded Abstracts 2017 (pp. 4676-4680). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P08-SEG2017_Hu_TTI_QRTM.pdf'},
            {title: '(P09) Jin, Yuchen, Xuqing Wu, Jiefu Chen, Zhu Han, and Wenyi Hu, 2018. Seismic data denoising by deep-residual networks. In SEG Technical Program Expanded Abstracts 2018 (pp. 4593-4597). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P09-SEG2018_Jin_et_al_DL-Denoise.pdf'},
            {title: '(P10) Jin, Yuchen, Wenyi Hu, Xuqing Wu, and Jiefu Chen, 2018. Learn low wavenumber information in fwi via deep inception based convolutional networks. In SEG Technical Program Expanded Abstracts 2018 (pp. 2091-2095). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P10-SEG2018_Jin_et_al_DL-LWI-FWI.pdf'},
            {title: '(P11) Zhou, Tong, Wenyi Hu, and Jieyuan Ning, 2018. An efficient local operator-based Q-compensated reverse time migration algorithm with multistage optimization. Geophysics, 83(3), pp.S249-S259.', 
            link: process.env.PUBLIC_URL + '/P11-Geophysics2018_Zhou_et_al_Q-RTM.pdf'},
            {title: '(P12) Tsai, Kuo Chun, Wenyi Hu, Xuqing Wu, Jiefu Chen, and Zhu Han, 2018. First-break automatic picking with deep semi-supervised learning neural network. In SEG Technical Program Expanded Abstracts 2018 (pp. 2181-2185). Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P12-SEG2018_Tsai_et_al_DL-FBP.pdf'},
            {title: '(P13) Hu, Wenyi, Jiefu Chen, Jianguo Liu, and Aria Abubakar, 2018. Retrieving low wavenumber information in fwi: An overview of the cycle-skipping phenomenon and solutions. IEEE Signal Processing Magazine, 35(2), pp.132-141.', 
            link: process.env.PUBLIC_URL + '/P13-IEEE_SPM2018_Hu_et_al_FWI_without_LF.pdf'},
            {title: '(P14) Hu, Wenyi, 2019. Broadband FWI through alternating restoration and inversion of missing frequencies. To be appeared in SEG Technical Program Expanded Abstracts 2019. Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P14-SEG2019_Hu_ARI-FWI.pdf'},
            {title: '(P15) Hu, Wenyi, Yuchen Jin, Xuqing Wu, and Jiefu Chen, 2019. A progressive deep transfer learning approach to cycle-skipping mitigation in FWI. To be appeared in SEG Technical Program Expanded Abstracts 2019. Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P15-SEG2019_Hu_DL-FWI.pdf'},
            {title: '(P16) Yuan, Pengyu, Wenyi Hu, Xuqing Wu, Jiefu Chen, and Hien Van Nguyen, 2019. First arrival picking using U-net with Lovasz loss and nearest point picking method. To be appeared in SEG Technical Program Expanded Abstracts 2019. Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P16-SEG2019_Yuan_et_al_DL-FBP.pdf'},
            {title: '(P17) Zhou, Tong and Wenyi Hu, 2019. Broadband finite-difference Q-compensation engine for accurate Q-RTM. To be appeared in SEG Technical Program Expanded Abstracts 2019. Society of Exploration Geophysicists.', 
            link: process.env.PUBLIC_URL + '/P17-SEG2019_Zhou_et_al_Broadband_TTI-QRTM.pdf'},
        ], // publications
        numTechItems: 8, // number of tech entries to be displayed per page
        numPubItems: 10,
        page: 0,
        title: 'TECHNOLOGIES',
        filter: 'tech'
    }

    componentDidMount() {
        document.title = 'AGT - Technology';
    }
    
    // convert numTechItems at a time news entries into NewsItem components
    formatTech = () => {
        var techJSX = [];
        let i = this.state.page * this.state.numTechItems;
        while(i<this.state.technology.length && i<this.state.page*this.state.numTechItems + this.state.numTechItems){
            let dict = this.state.technology[i];
            techJSX.push(<TechnologyItem info={dict}/>)
            i++;
        }
        if(techJSX.length > 0)
            return techJSX;
        else
            return <span class="txt subheading ml-2 mt-2">Nothing on this page.</span>
    }

    formatPub = () => {
        var pubJSX = [];
        let i = this.state.page * this.state.numPubItems;
        while(i<this.state.publications.length && i<this.state.page*this.state.numPubItems + this.state.numPubItems){
            let dict = this.state.publications[i];
            pubJSX.push(<li><a href={dict['link']}>{dict['title']}</a></li>)
            i++;
        }
        var result = <ol start={this.state.page * this.state.numPubItems + 1}>{pubJSX}</ol>
        if(pubJSX.length > 0)
            return result;
        else
            return <span class="txt subheading ml-2 mt-2">Nothing on this page.</span>
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
        const page = Math.ceil(this.state.technology.length/this.state.numTechItems) - 1;
        this.setState({page});
    }

    reset = () => {
        this.setState({technology: this.state.publications});
    }

    applyFilter = (num) => {
        var newTitle = '';
        var newFilter = '';
        if(num==0) {
            newTitle = 'PUBLICATIONS';
            newFilter = 'pub';
        }
        else if(num==1) {
            newTitle = 'TECHNOLOGIES';
            newFilter = 'tech';
        }
        this.setState({title: newTitle, filter: newFilter, page: 0})
    }

    render() { 
        var techFormatted = this.formatTech();
        var pubFormatted = this.formatPub();
        var lastPage = this.state.filter === 'tech' ? Math.ceil(this.state.technology.length/this.state.numTechItems) : Math.ceil(this.state.publications.length/this.state.numPubItems)
        return ( 
            <div>
            <div class="container-fluid border border-grey" style={{width: '80vw', minWidth: 700}}>
                <div class="row">
                    <div class="col-2 border-right text-center" style={{minWidth: 150}}>
                        <br/>
                       <span class="txt heading" style={{fontSize: 25, fontWeight: 'bold', color: '#00ACD4'}}>Filter by:</span>
                       <br/>
                       <Link class="subheading" onClick={() => this.applyFilter(0)} style={{fontSize: 20, color: 'black'}}>Publications</Link><br/>
                       <Link class="subheading" onClick={() => this.applyFilter(1)} style={{fontSize: 20, color: 'black'}}>Technologies</Link><br/>
                    </div>
                    <div class="col-8">
                        <h1 class="heading ml-2 mt-1" style={{fontSize: 35, color: '#5F6062'}}>{this.state.title}</h1>
                        <div class="container-fluid" style={{width: '65vw'}}>
                            <div class="row">
                                {this.state.filter === 'tech' ?
                                <React.Fragment>
                                <div class="col padding-0" style={{width: '28vw'}}>
                                    {techFormatted.length >= 1 ? techFormatted[0] : null}
                                    {techFormatted.length >= 3 ? techFormatted[2] : null}
                                    {techFormatted.length >= 5 ? techFormatted[4] : null}
                                    {techFormatted.length >= 7 ? techFormatted[6] : null}
                                </div>
                                <div class="col padding-0">
                                    {techFormatted.length >= 2 ? techFormatted[1] : null}
                                    {techFormatted.length >= 4 ? techFormatted[3] : null}
                                    {techFormatted.length >= 6 ? techFormatted[5] : null}
                                    {techFormatted.length >= 8 ? techFormatted[7] : null}
                                </div>
                                </React.Fragment> :
                                <React.Fragment>
                                    {pubFormatted}
                                </React.Fragment>
                                }
                            </div>
                        </div>
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
                        lastPage={lastPage}
                        href = '/#/Technology'/>
            </div>
            <Footer min={700}/>
            </div>
        );
    }
}
