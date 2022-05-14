import React from 'react'

import logo from "../images/logo_light.png"

const styles = {
    logo: {
        maxWidth: "50%",
        maxHeight: "5vh",
        objectFit: "contain",
    },
}

function Footer() {
  return (
    <div className='pt-4 my-5 pt-5 border-top'>
        <div className="container">
            <footer className="">
                <div className="row text-center">
                    {/* Logo / trademark */}
                    <div className="col-12 col-md text-center mb-4">
                        <img className="mb-2" src={logo} alt="logo underseen" style={styles.logo} />
                        <br />
                        {/* <small className="d-block mb-3 text-muted">© 2022-2023</small> */}
                    </div>

                    {/* Column 1 */}
                    <div className="col-6 col-md-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource name</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Another resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Final resource</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="col-6 col-md-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource name</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Another resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Final resource</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-6 col-md-4">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Resource name</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Another resource</a></li>
                            <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Final resource</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer