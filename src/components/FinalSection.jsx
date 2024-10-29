import Confetti from 'react-confetti';
import { useState } from 'react';

const FinalSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setShowConfetti(true);
    setTimeout(() => alert("You just made me the happiest human being, I love you so much and can't even believe you are mine, my girlfriend. Finally. I love you my baby"), 500);
  };

  const handleNo = () => {
    alert("Oh no! You broke my heart! 😢");
  };

  return (
    <section className="main2 flex flex-col items-center justify-center py-10 bg-pink-50">
      <div className='honest'>
        Honestly, while i was doing this, I didn't have the words, at leat not enough to effectively show you how much I want you, adore you, love you.
        I see my future and I sincerely cannot imagine it without you in it, you bring laughter into my life, you make me smile, you make me be at peace, in ways
        I never thought possible, I want to make memories with you, I want to live and enjoy with you, I want to wake up everyday and be filled with joy knowing you are mine
      </div>
      <p>
        I want to be by your side through everything, I want you to be my everything, and here come the most important question I have ever asked, Oyekunle Eunice Oluwatoyin
      </p>
      <h3 className="text-2xl md:text-4xl font-bold mb-8">Will you be my girlfriend?</h3>
      <div className="btn-container flex space-x-4">
        <button onClick={handleYes} className="yes btn bg-green-500 text-white px-6 py-3 rounded-lg text-lg md:text-xl">
          Yes
        </button>
        <button onClick={handleNo} className="hell-no btn bg-red-500 text-white px-6 py-3 rounded-lg text-lg md:text-xl">
          No
        </button>
      </div>
      {showConfetti && <Confetti />}
    </section>
  );
};

export default FinalSection;
