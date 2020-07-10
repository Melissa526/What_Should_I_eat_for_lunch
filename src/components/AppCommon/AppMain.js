import React, {Component} from 'react';

import '../../lib/css/style.css';           /* Theme style */
import '../../lib/css/animate.css';
/*import '../../lib/css/aos.css';*/
import '../../lib/css/bootstrap.css';       /* BootStrap CSS */
import '../../lib/css/bootstrap-grid.css';
import '../../lib/css/bootstrap-reboot.css';
import '../../lib/css/magnific-popup.css';

class AppManin extends Component{

    state = {
        firstBlock : null,
        secondBlock : null,
        selection : null
    }



    selectFirstBlockHandler = ()=>{
        this.setState(state => ({
            firstBlock : 'test'
        }));

    }

    render() {
        return(
            <div>

                {/* header [s] */}
                <header role="banner">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="index.html">오점뭐</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample05" aria-controls="navbarsExample05"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarsExample05">
                                <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="recipes.html">Recipes</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04"
                                           data-toggle="dropdown" aria-haspopup="true"
                                           aria-expanded="false">Services</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                                            <a className="dropdown-item" href="services.html">Food Catering</a>
                                            <a className="dropdown-item" href="services.html">Drink &amp; Beverages</a>
                                            <a className="dropdown-item" href="services.html">Wedding &amp; Birthday</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="news.html">News</a>
                                    </li>
                                </ul>

                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item cta-btn">
                                        <a className="nav-link" href="contact.html" style={{borderRadius : '2rem'}}>Contact Us</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </header>
                {/* header [e] */}

                {/* title [s] */}
                <div className="slider-wrap">

                    <section className="home-slider owl-carousel">
                        <div className="slider-item" style={{backgroundImage: `url('img/hero_2.jpg')`}}>
                            <div className="container">
                                <div className="row slider-text align-items-center justify-content-center">
                                    <div className="col-md-8 text-center col-sm-12 ">
                                        <h1 data-aos="fade-up">WHAT SHOULD I EAT FOR LUNCH</h1>
                                        <p className="mb-5" data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor
                                            sit amet, consectetur adipisicing elit. Sapiente et sed quasi.</p>
                                        <p data-aos="fade-up" data-aos-delay="200">
                                            <a href="#first-selection" className="btn btn-white btn-outline-white">Get Started</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                {/* title [e] */}


                {/* 첫번째 메뉴선택 [s] */}
                <section className="section bg-light py-5  bottom-slant-gray" id="first-selection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                 data-aos-delay="" onClick={this.selectFirstBlockHandler}>
                                <span className="wrap-icon"><span className="flaticon-dinner d-block mb-4"></span></span>
                                <h3 className="mb-2 text-primary">Enjoy Eating</h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                 data-aos-delay="100">
                                <span className="wrap-icon"><span className="flaticon-fish d-block mb-4"></span></span>
                                <h3 className="mb-2 text-primary">Fresh Sea Foods</h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                 data-aos-delay="200">
                                <span className="wrap-icon"><span
                                    className="flaticon-hot-coffee-rounded-cup-on-a-plate-from-side-view d-block mb-4"></span></span>
                                <h3 className="mb-2 text-primary">Cup of Coffees</h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up" data-aos-delay="300">
                                <span className="wrap-icon"><span className="flaticon-meat d-block mb-4"></span></span>
                                <h3 className="mb-2 text-primary">Meat Eaters</h3>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* 첫번째 메뉴선택 [e] */}


                {/* 두번째 메뉴선택 [s] */}
                {(this.state.firstBlock)?
                    <section className="section bg-light py-5  bottom-slant-gray" id="second-selection">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                     data-aos-delay="" onClick={this.selectFirstBlockHandler}>
                                    <span className="wrap-icon"><span className="flaticon-dinner d-block mb-4"></span></span>
                                    <h3 className="mb-2 text-primary">Seco</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                </div>
                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                     data-aos-delay="100">
                                    <span className="wrap-icon"><span className="flaticon-fish d-block mb-4"></span></span>
                                    <h3 className="mb-2 text-primary">Fresh Sea Foods</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                </div>
                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up"
                                     data-aos-delay="200">
                                <span className="wrap-icon"><span
                                    className="flaticon-hot-coffee-rounded-cup-on-a-plate-from-side-view d-block mb-4"></span></span>
                                    <h3 className="mb-2 text-primary">Cup of Coffees</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                </div>
                                <div className="col-md-6 mb-4 mb-lg-0 col-lg-3 text-left service-block" data-aos="fade-up" data-aos-delay="300">
                                    <span className="wrap-icon"><span className="flaticon-meat d-block mb-4"></span></span>
                                    <h3 className="mb-2 text-primary">Meat Eaters</h3>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    : null}

                {/* 두번째 메뉴선택 [e] */}


                {/* 메뉴선택 결과 [s] */}
                {(this.state.secondBlock) ?
                    <section className="section bg-light  top-slant-white bottom-slant-gray">

                        <div className="clearfix mb-5 pb-5">
                            <div className="container-fluid">
                                <div className="row" data-aos="fade">
                                    <div className="col-md-12 text-center heading-wrap">
                                        <h2>Today's Menu</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">

                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image order-2"
                                             style={{backgroundImage: `url('img/dishes_4.jpg')`}} data-aos="fade"></div>
                                        <div className="text order-1">
                                            <h3>Grilled Caesar salad, shaved reggiano</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$12.00</p>
                                        </div>

                                    </div>

                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image" style={{backgroundImage: `url('img/dishes_1.jpg')`}}
                                             data-aos="fade"></div>
                                        <div className="text">
                                            <h3>Spicy Calamari and beans</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$12.00</p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image order-2"
                                             style={{backgroundImage: `url('img/dishes_2.jpg')`}} data-aos="fade"></div>
                                        <div className="text order-1">
                                            <h3>Bacon wrapped wild gulf prawns</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$18.00</p>

                                        </div>

                                    </div>

                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image" style={{backgroundImage: `url('img/dishes_3.jpg')`}}
                                             data-aos="fade"></div>
                                        <div className="text">
                                            <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$16.00</p>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image order-2"
                                             style={{backgroundImage: `url('img/dishes_4.jpg')`}} data-aos="fade"></div>
                                        <div className="text order-1">
                                            <h3>Grilled Caesar salad, shaved reggiano</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$12.00</p>
                                        </div>

                                    </div>

                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image" style={{backgroundImage: `url('img/dishes_1.jpg')`}}
                                             data-aos="fade"></div>
                                        <div className="text">
                                            <h3>Spicy Calamari and beans</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$12.00</p>

                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image order-2"
                                             style={{backgroundImage: `url('img/dishes_2.jpg')`}} data-aos="fade"></div>
                                        <div className="text order-1">
                                            <h3>Bacon wrapped wild gulf prawns</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$18.00</p>

                                        </div>

                                    </div>

                                    <div className="sched d-block d-lg-flex">
                                        <div className="bg-image" style={{backgroundImage: `url('img/dishes_3.jpg')`}}
                                             data-aos="fade"></div>
                                        <div className="text">
                                            <h3>Seared ahi tuna fillet*, honey-ginger sauce</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo
                                                delectus...</p>
                                            <p className="text-primary h3">$16.00</p>

                                        </div>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </section>
                    : null
                }
                {/* 메뉴선택 결과 [e] */}

            </div>
        );
    }
}

export default AppManin;