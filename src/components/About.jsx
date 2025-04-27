import React from 'react'

function About() {
  return (
    <div style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}>
      This demo website is built using React  and calls from an open API filtering Video Games from multiple websites and only returning those that are free. This is just a small project for practice calling and sorting API JSON info. If you are having trouble loading the games on page there most likely is an issue with CORS affecting your display. You have 2 options, use cors-anywhere.herokuapp.com to temporarily bypass the CORS issue or use a browser extension that allows you to disable CORS. Additionaly you could try using Microsoft Edge <br /><br /> Happy gaming! 🎮
    </div>
  )
}

export default About
