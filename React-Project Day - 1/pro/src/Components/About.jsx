import React from 'react'

function About() {
  return (
    <div style={{display:"flex", justifyContent:"space-around", height:"690px"}}>
        <div id='main' style={{width:"50%",marginTop:"180px"}}>
            <h1 style={{fontWeight:"bold", fontSize:"80px"}}>Angel One</h1>
            <p style={{fontFamily:"sans-serif", marginTop:"70px"}}>Angel One Limited, formerly known as Angel Broking Limited, is an Indian stockbroker firm established in 1996. The company is a member of the Bombay Stock Exchange, National Stock Exchange of India, National Commodity & Derivatives Exchange Limited and Multi Commodity Exchange of India Limited. Wikipedia
            Stock price: ANGELONE (NSE) ₹2,844.00 +2.10 (+0.07%)
            25 Apr, 3:30 pm IST - Disclaimer
            Customer service: 1800 1020
            Subsidiaries: Angel One Asset Management Company Limited, MORE
            Headquarters: India
        </p> 
        </div>
        <div id='normal'>
            <img src="https://play-lh.googleusercontent.com/Ic8lUYwMCgTePpo-Gbg0VwE_0srDj1xD386BvQHO_mOwsfMjX8lFBLl0Def28pO_Mvk=w240-h480-rw" alt="" style={{width:"500px", height:"500px", objectFit:"cover"} } />
        </div>
    </div>
  )
}

export default About