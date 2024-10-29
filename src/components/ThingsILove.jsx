import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import postVideo from '../assets/loveVideo1.mp4'

const ThingsILikeSection = () => {
  const textsRef = useRef([]);

  useEffect(() => {
    textsRef.current.forEach((text, index) => {
      gsap.fromTo(text, 
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, 
        { opacity: 1, x: 0, duration: 1, scrollTrigger: text }
      );
    });
  }, []);

  const thingsILike = [
    "Your kindness",
    "The way you smile",
    "How you always make me laugh",
    "Your incredible sense of style"
  ];

  return (
    // <section className="py-12 bg-white text-center">
    //   {thingsILike.map((thing, index) => (
    //     <p
    //       key={index}
    //       className="text-xl md:text-3xl font-semibold mb-8 opacity-0"
    //       ref={(el) => (textsRef.current[index] = el)}
    //     >
    //       {thing}
    //     </p>
    //   ))}
    // </section>
    <div className='main2'>
      <h4>my love letter to you</h4>
      <p>
        this might be corny to say, i have said a lot corny things to you, but your presence is ray of sunshine in this my world of dark clouds.
        I think about you, everytime, thinking about you gets me smiling every single time. You're goofy, you're fun, you're always sleepy and you have the most beautiful smile.
      </p>
      <p>
        you once asked why I wanted to be with you, and the first thing that came to my mind was "why wouldn't I want to be with you?". I mean for one, we look perfect together, or at leaast I think we do,
        It goes beyond the fact that you are very adorable, or astonishingly beautiful,
          it's because being with you completes me. I don't like to talk about people based 
          on what they do for me, but you absolutely complete me.
      </p>
      <p className='p'>
            And you might even be like, 'what does this even mean, John?'. You make me feel like myself,
            your smile literally fixes me, holding you in my arms is a therapeutic experience on its own.
            And hearing from you, is what i want, everyday, everytime. 
          </p>
          <p className='p'>
            But it goes beyond all that, you are a good person, and as unserious as you paint yourself, You
            want to grow and develop, you are driven and I, as the greedy person that i am, want you for myself,
            your love for God inspires me and this biggest reason of them all, I want to be with you, because you are hot,
            very hot, the hottest woman I know.
          </p>
          <p>
            you're beyond adorable, you are absolutely breathtaking, sometimes even overwhelming, God knows you overwhelm my thoughts,
            and that's for starters. You overwhelm my actions, I can't do anything without thinking about you, you even overwhelm my dreams.
          </p>
    </div>
  );
};

export default ThingsILikeSection;
