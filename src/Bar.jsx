import React from 'react'

const Bar= ({ animationDuration, progress }) => (
  <div
    style={{
            background: '#d3d2f7',
      height: 2,
      left: 0,
      marginLeft: `${(-1 + progress) * 100}%`,
      position: 'fixed',
      top: 0,
      transition: `margin-left ${animationDuration}ms linear`,
      width: '100%',
      zIndex: 1031,
    }}
  >
    <div
      style={{
                boxShadow: '0 0 10px #d3d2f7, 0 0 5px #d3d2f7',
        display: 'block',
        height: '100%',
        opacity: 1,
        position: 'absolute',
        right: 0,
        transform: 'rotate(3deg) translate(0px, -4px)',
        width: 100,
      }}
    />
  </div>
)

export default Bar
