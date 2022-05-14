import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';


function HowSecurity() {
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
                                    <h2 className="text-center text-md-start">How do we make it safer?</h2>
                                    <p className={isOnMobile ? "lead text-center text-md-start" : "lead w-75 text-center text-md-start"}>Our “Creator Score” system provides investors with the security they deserve and ensures creators money to create new content.</p>
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
        
        {/* <div className="Wrapper" id="SaferWrapper">
          <div className="TextNextToImage" id="SecondTextNextToImage">
            <h2 className="Title" id="SaferTitle">How do we make it safer?</h2>
            <h3 id="SaferText">Our “Creator Score” system provides investors with the security they deserve and ensures creators money to create new content.</h3>
          </div>
          <img src={""} alt="" className="ImgInfo" id="SecondImgInfo" />
      </div> */}
    </div>
  )
}

export default HowSecurity