import React, { useState } from 'react';
import PropTypes from 'prop-types';
import webbg from './images/web-bg.jpg';

export function Jumbotron({}) {
    const [style, setStyle] = useState("container")
    return (
        <div className={style}>
            <div className="jumbotron">
                <h1 className="display-4">Hello, World!</h1>
                <p className="lead"> This is first example using jumbotron </p>
                <hr className="my-4"/> 
                <p> Current style  <b>{style}</b></p>
                <a className="btn btn-primary btn-lg m-2" href="#"
                    onClick={() => setStyle("container")}
                > class="container"</a>
                <a className="btn btn-primary btn-lg" href="#"
                    onClick={() => setStyle("container-fluid")}
                > class="container-fluid"</a>
            </div>
        </div>
    );
}

Jumbotron.defaultProps = {};

Jumbotron.propTypes = {
};

export function Grid({}) {
    const [showBorder, setShowBorder] = useState(true)
    return (
        <div className="container">
            <div className={"row "  + (showBorder ? "border":"") }>
                <header className="col-md-12" title="col-md-12">
                    HEADER
                </header>
            </div>

            <div className={"row "  + (showBorder ? "border":"") }>
                <div className="offset-md-4 col-md-4 border" title='offset-md-4 col-md-4'> 1/3 </div>
                <div className="col-md-4 border" title="col-md-4"> 1/3 </div>
            </div>


            <div className={"row "  + (showBorder ? "border":"") }>
                <div className="col-md-4 border" title="col-md-4"> 1/3 </div>
                <div className="col-md-8 border" title="col-md-8"> 2/3 </div>
            </div>

            <div className={"row "  + (showBorder ? "border":"") }>
                <div className="col-md-3 border" title="col-md-3"> 1/4 </div>
                <div className="col-md-6 border" title="col-md-6"> 1/2 </div>
                <div className="col-md-3 border" title="col-md-3"> 1/4 </div>
            </div>

            <div className={"row "  + (showBorder ? "border":"") }>
                <div className="col-md-3 border"> 1/4 </div>
                <div className="col-md-3 border"> 1/4 </div>
                <div className="col-md-3 border">1/4</div>
                <div className="col-md-3 border">1/4</div>
            </div>

            <div className={"row "  + (showBorder ? "border":"") }>
                <div className="col-md-3 border"> 1/4 </div>
                <div className="col-md-6 border"> 
                    <div className="row border">
                        <div className="col-md-6 border"> 1/4 </div>
                        <div className="col-md-6 border"> 1/4 </div>
                    </div>
                </div>
                <div className="col-md-3 border">1/4</div>
            </div>


            <footer className={"row "  + (showBorder ? "border":"") }>
                <div className="col-md-2 border"> 1/2 </div>
                <div className="col-md-7 border"> 7/2 </div>
                <div className="col-md-3 border"> 1/4 </div>
            </footer>
        </div>
    )
}

export function SimplePage({}) {
    const introHeaderStyle = {
        // backgroundColor: '#f4f4f4',
        backgroundImage: `url(${webbg})`,
        backgroundSize: 'cover'
    }
    const wrapHeadlineStyle = {
        position: 'relative',
        paddingTop: '20%',
        paddingBottom: '20%'
    }
    const btnDefaultStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px'
    }
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <a className="navbar-brand" href="#"> Company name</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mymenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="mymenu" className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Feature</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Contact</a> 
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Demo</a>
                            <a className="dropdown-item" href="#">Cooperation</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <section id="intro-header" style={introHeaderStyle}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="wrap-headline" style={wrapHeadlineStyle}>
                        <h1 className="text-center" style={{color: "#FFF"}}>Company name</h1>
                        <h2 className="text-center" style={{color: "#FFF"}}>Tagline message</h2>
                        <hr style={{width: "10%"}}/>
                        <ul className="list-inline list-unstyled text-center">
                            <li className="list-inline-item">
                                <a className="btn btn-lg btn-default" href="#" style={btnDefaultStyle}> 
                                    Sign In
                                </a>
                            </li>
                            <li className="list-inline-item"><a className="btn btn-lg btn-primary" href="#"> Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <div className="row pt-2">
                    <div className="col-sm-6">
                        <img src={webbg} alt="" className="img-responsive"/>
                    </div>
                    <div className="col-sm-6">
                        Lorem ipsum dolor...
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row pt-2">
                    <div className="col-sm-6">
                        Lorem ipsum dolor...
                    </div>
                    <div className="col-sm-6">
                        <img src={webbg} alt="" className="img-responsive"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="feature">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="text-center"> Features </h3>
                        <p className="text-center"> Features headline message </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                    <div className="col-sm-2 col-md-4">
                        <div> Feature </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pricing">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12">
                        <h3> Price Table</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10 offset-sm-1">
                        <div className="row text-center">
                            <div className="col-sm-4 h-25 bg-info text-white p-2 h-25">
                                Free plan
                            </div>
                            <div className="col-sm-4 bg-primary text-white p-2">
                                Standard plan
                            </div>
                            <div className="col-sm-4 bg-danger text-white p-2">
                                Premium plan
                            </div>
                        </div>
                        <div className="row text-center pt-1" style={{height: "100px"}}>
                            <div className="col-sm-4 bg-info text-white">
                                $ 0
                            </div>
                            <div className="col-sm-4 bg-primary text-white p-2">
                                $ 99
                            </div>
                            <div className="col-sm-4 bg-danger text-white p-2">
                                $ 999
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                            <div className="col-sm-4">lorem ipsum</div>
                        </div>

                        <div className="row text-center">
                            <div className="col-sm-4 btn bg-info">Purchase</div>
                            <div className="col-sm-4 btn bg-primary">Purchase</div>
                            <div className="col-sm-4 btn bg-danger">Purchase</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <div className="container-fluid mt-3 bg-secondary">
                <div className="row">
                    <div className="col-sm-2">Logo</div>
                    <div className="col-sm-2">
                        <h5>The Company</h5>
                        <ul className="list-unstyled">
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                        </ul>
                    </div>

                    <div className="col-sm-2">
                        <h5>The Company</h5>
                        <ul className="list-unstyled">
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h5>The Company</h5>
                        <ul className="list-unstyled">
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <h5>The Company</h5>
                        <ul className="list-unstyled">
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                            <li className="list-items"> Documentation </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    ) 
}
