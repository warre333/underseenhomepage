import React from 'react'

const styles ={
    marginLeft25: {
        marginLeft: "25%",
    },

    marginTB: {
        marginTop: "8rem",
        marginBottom: "8rem",
    },
}

function HowDoesItWork() {
  return (
    <div style={styles.marginTB}>
        <div className="container">
            <h2 className="text-center mb-4">How does Underseen work?</h2>

            <div className="row">
                <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="75" height="75"  role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" textAnchor="middle" fill="#ffffff" fontSize="1.75rem" dy=".3em">1</text>
                    </svg>

                    <h3>NFT Creation</h3>
                    <p className="w-50 text-center" style={styles.marginLeft25}>The creator creates the NFT collection for the community.</p>
                </div>
                
                <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="75" height="75"  role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" textAnchor="middle" fill="#ffffff" fontSize="1.75rem" dy=".3em">2</text>
                    </svg>
                    
                    <h3>Tradeable</h3>
                    <p className="w-50 text-center" style={styles.marginLeft25}>The community is able to buy and sell the NFTs safely.</p>
                </div>

                <div className="col-lg-4 text-center">
                    <svg className="bd-placeholder-img rounded-circle" width="75" height="75"  role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#777"></rect>
                        <text x="50%" y="50%" textAnchor="middle" fill="#ffffff" fontSize="1.75rem" dy=".3em">3</text>
                    </svg>

                    <h3>Giving Back</h3>
                    <p className="w-50 text-center" style={styles.marginLeft25}>The creator earns and invests back into the community.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowDoesItWork