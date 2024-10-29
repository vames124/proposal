import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroVideo from '../assets/loveVideo2.mp4'

const HeroSection = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
//   }, []);

//   return (
//     <section className="relative h-screen w-full flex items-center justify-center bg-black">
//       <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50">
//         <source src={heroVideo}/>
//       </video>
//       <h1
//         ref={textRef}
//         className="relative text-white text-3xl md:text-5xl font-bold text-center px-4"
//       >
//         You're the most amazing person I've ever met.
//       </h1>
//     </section>
//   );
return (
  <div className='main'>
  <video src={heroVideo} autoPlay loop muted></video>
  <div className='content'>
      I love you.
  </div>
</div>
)
};


export default HeroSection;
