import Script from "next/script";
import React from "react"

const ParticleImage = () => {
  
  return (
    <div>
      {/* <Script strategy="beforeInteractive" src="/static/particles.js"/>
      <canvas id="canvas1" className=""></canvas> */}
      <img alt="agustin" className="h-full w-full" src="/foto.png" />
    </div>
  )
}

export default ParticleImage;