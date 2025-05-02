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
      This is a demo API calling project using OMDb API to call generically for any movie with Batman in the title. Though with specific searches you can access the whole available library of OMDb. 
    </div>
  )
}

export default About
