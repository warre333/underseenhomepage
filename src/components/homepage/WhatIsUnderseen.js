import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function WhatIsUnderseen() {
    const { width } = useWindowDimensions();

    const [isOnMobile, setIsOnMobile] = useState(false)

    useEffect(() => {
        if(width < 768){
            setIsOnMobile(true)
        } else {
            setIsOnMobile(false)
        }
    })

  return (
    <div className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <table className="h-100">
                        <tbody>
                            <tr>
                                <td className="align-middle">
                                    <h2 className="text-center text-md-start">What is Underseen?</h2>
                                    <p className={isOnMobile ? "lead text-center text-md-start" : "lead w-75 text-center text-md-start"}>Underseen is a platform that makes it possible for creators to engage and monetize their community.</p>
                                </td>
                            </tr>
                        </tbody>                        
                    </table>                    
                </div>

                <div className="col-md-5">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto" width="500" height="500" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#eee"></rect>
                        <text x="50%" y="50%" fill="#aaa" dx="-1em">500x500</text>
                    </svg>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default WhatIsUnderseen