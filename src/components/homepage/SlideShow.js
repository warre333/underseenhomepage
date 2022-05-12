import React from 'react'

import slide1 from "../../images/slideshow/1.jpg"
import slide2 from "../../images/slideshow/2.jpg"
import slide3 from "../../images/slideshow/3.jpg"
import slide4 from "../../images/slideshow/4.jpg"
import slide5 from "../../images/slideshow/5.jpg"
import slide6 from "../../images/slideshow/6.jpg"

const styles = {
    fullscreen: {
        height: "100vh",
        width: "100vw",
    },

    slideshow: {
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: "-10vh",
    },
}

function SlideShow() {
  return (
    <div>
        <div id="slideShow" className="carousel slide" data-bs-ride="carousel" style={styles.fullscreen}>
            <div className="carousel-inner" style={styles.fullscreen}>
                <div className="carousel-item active" style={styles.fullscreen}>
                    <img src={slide1} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Sign up today</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="carousel-item" style={styles.fullscreen}>
                    <img src={slide2} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="carousel-item" style={styles.fullscreen}>
                    <img src={slide3} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="carousel-item" style={styles.fullscreen}>
                    <img src={slide4} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="carousel-item" style={styles.fullscreen}>
                    <img src={slide5} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div> */}
                </div>

                <div className="carousel-item" style={styles.fullscreen}>
                    <img src={slide6} alt="" className="bd-placeholder-img" width="100%" height="100%" />

                    {/* <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-primary" href="/">Learn more</a></p>
                        </div>
                    </div> */}
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#slideShow" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#slideShow" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default SlideShow