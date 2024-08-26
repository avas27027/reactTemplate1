import './LandingPage.scss'
import Lottie, { InteractivityProps } from 'lottie-react'
import drawline from '../../../../assets/lottie/drawline.json'
import flowChart from '../../../../assets/lottie/flowChart.json'
import wireframe from '../../../../assets/lottie/Wireframe.json'
import conectors from '../../../../assets/lottie/Conectors.json'
import Spline from '@splinetool/react-spline';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from 'react';

function LandingPage() {
  let sections = gsap.utils.toArray(".panel");
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.hero-container',
          start: "center center",
          end: '+=450',
          scrub: true,
          pin: true,
        }
      });
      timeline.to('.circle', {
        scale: 400,
      }).to('.title.main', {
        opacity: 1,
      })
      gsap.to(".path-container, .hero-container", {
        scrollTrigger: {
          trigger: ".path-container",
          start: "center start",
          end: '+=200',
          scrub: true,
        },
        x: "-100vw",
      })
    })
    return () => ctx.revert();
  })

  const interactivityDrawLine: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.15, .75],
        type: "seek",
        frames: [0, 300],
      },
    ],
  };
  const interactivityFlowChart: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [
      {
        visibility: [.4, .65],
        type: "seek",
        frames: [0, 300],
      },
    ],
  };
  const interactivityWireframe: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.3, .6],
        type: "seek",
        frames: [0, 600],
      },
    ],
  };
  const interactivityConectors: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, .8],
        type: "seek",
        frames: [0, 300],
      },
    ],
  };
  return (
    <div className='landing'>
      <div className="landing-container bg-background">
        <div className="hero-container panel">
          <Spline style={{ height: "100vh", position: "sticky" }} scene="https://prod.spline.design/M3aDVBcP-sx73Z8o/scene.splinecode" />
          <h1 className='title main'>Angle Designs</h1>
          <div className="circle"></div>
        </div>
        <div className="path-container panel">
          <div className='path-box'>
            <section className='path-first'>
              <h2 className='title text-foreground'>The path that will take you to the</h2>
              <h2 className='title text-focus'>Success</h2>
            </section>
            <section className='path-second'>
              <Lottie style={{ height: '70vh', width: '50vw' }} animationData={flowChart} interactivity={interactivityFlowChart}></Lottie>
              <h2 className='title text-foreground'>User Flow</h2>
            </section>
            <section className='path-third'>
              <h2 className='title text-foreground'>Wireframe</h2>
              <Lottie style={{ height: '70vh', width: '50vw' }} animationData={wireframe} interactivity={interactivityWireframe}></Lottie>
            </section>
            <section className="path-fourth">
              <div className="design">
                <h2 className='text-foreground'>Monserrat Semibolt</h2>
                <h3 className='text-foreground'>Lora Regular</h3>
                <h3 className='text-foreground'>Hind Mudarai Regular</h3>
                <div className="color text-foreground">
                  <div className="color-rectangle text-foreground-50">
                    <div className='rectangle w-14 h-14 bg-slate-500 rounded-md' />
                    <p>Primary</p>
                    <p>#9E2C2C</p>
                  </div>
                  <div className="color-rectangle text-foreground-50">
                    <div className='rectangle w-14 h-14 bg-focus rounded-md' />
                    <p>Secondary</p>
                    <p>#F8AEAE</p>
                  </div>
                  <div className="color-rectangle text-foreground-50">
                    <div className='rectangle w-14 h-14 bg-cyan-200 rounded-md' />
                    <p>Focus</p>
                    <p>#EE8D5E</p>
                  </div>
                  <div className="color-rectangle text-foreground-50">
                    <div className='rectangle w-14 h-14 bg-red-600 rounded-md' />
                    <p>Background</p>
                    <p>#000000</p>
                  </div>
                  <div className="color-rectangle text-foreground-50">
                    <div className='rectangle w-14 h-14 bg-primary rounded-md' />
                    <p>Foreground</p>
                    <p>#FFFFFF</p>
                  </div>
                </div>
              </div>
              <h2 className='title text-foreground'>Design System</h2>
            </section>
            <section className='path-fifth'>
              <h2 className='title text-foreground-50'>MVP</h2>
            </section>
            <Lottie style={{ height: '70vh', width: '100vw', position: "relative", zIndex: 1 }} animationData={conectors} interactivity={interactivityConectors}></Lottie>
            <div className="h-screen">
              <Spline style={{ position: "relative", top: "-110px" }} scene="https://prod.spline.design/CuLuuYbSY-TvjmxD/scene.splinecode" />
            </div>
          </div>
          <Lottie style={{ position: 'absolute', top: '750px', left: '30vw', height: '310vh', zIndex: -1 }} animationData={drawline} interactivity={interactivityDrawLine}></Lottie>
          <div className="prices">
            <div className="prices-box">
              <h2 className='text-foreground'>Landing</h2>
            </div>
            <div className="prices-box">
              <h2 className='text-foreground'>E-Commerce</h2>
            </div>
            <div className="prices-box">
              <h2 className='text-foreground'>Custom</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage

/*

.to('.hero-container', {
        x: "-100vw",
        duration: 2,
        delay: 2
      });
*/
