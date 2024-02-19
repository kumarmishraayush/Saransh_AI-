import React from "react";



const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h1 className='text-xl  blue_gradient '>सारांश AI</h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/kumarmishraayush", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='orange_gradient head_text'>
      लेखों को संक्षेप में प्रस्तुत करें <br className='max-md:hidden' />
        <span className='blue_gradient '>सारांश AI</span>
      </h1>
       <h2 className='desc'>
       एक ओपन-सोर्स लेख सारांश के साथ अपने पढ़ने को सरल बनाएं
        जो लंबे लेखों को स्पष्ट और संक्षिप्त सारांश में बदल देता है
      </h2>
    </header>
  );
};

export default Hero;