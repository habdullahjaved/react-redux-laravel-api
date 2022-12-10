import React from 'react'

export default function Loader() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={stylesheet.container}
      height='100%'
      width='100%'
    >
      <div className='loader'></div>
    </div>
  )
}

const stylesheet = {
  container: {
    height: '100vh',
    width: '100vw',
  },
}
