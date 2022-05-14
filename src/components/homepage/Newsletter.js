import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions';

const styles = {
    marginLeft25: {
        marginLeft: "25%",
    },

    padding0: {
        paddingLeft: 0,
        paddingRight: 0,
    }
}

function Newsletter() {
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
    <div className="border-top mt-5">
        <div class="newsletter-subscribe mt-5 container">
            <div class="container">
                <div class="intro">
                    <h2 class="text-center newsletter">Subscribe to our Newsletter</h2>
                    <p class={isOnMobile ? "text-center" : "text-center w-50"} style={isOnMobile? {} : styles.marginLeft25}>Be one the first to know when we're launching, new updates and more!</p>
                </div>

                <div class="form-inline row">
                    <div className="col-md-3" />
                    <div class="form-group col-8 col-md-5" style={styles.padding0}>
                        <input class="form-control" type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div class="form-group col-4 col" style={styles.padding0}>
                        <button class="btn btn-primary" type="button">Subscribe </button>
                    </div>
                    <div className="col-md-3" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Newsletter