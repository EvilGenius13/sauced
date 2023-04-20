import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to Sauced!</h1>
      <p className="text-lg mb-4">
        Sauced is the premier website for finding and learning how to make the perfect drink. Created in
        2023, Sauced has quickly become the go-to destination for drink enthusiasts all around the world.
      </p>
      <p className="text-lg mb-4">
        Our extensive database of drinks is constantly updated, ensuring that you always have access to the
        latest and greatest cocktail recipes. From classic drinks like the Old Fashioned and Margarita to
        new and exciting creations, Sauced has it all.
      </p>
      <p className="text-lg mb-4">
        Our easy-to-use search function makes finding the perfect drink a breeze. Whether you're looking for
        a refreshing summer cocktail or a warm winter drink, Sauced has you covered.
      </p>
      <p className="text-lg mb-4">
        So come on in, grab a shaker, and join the fun. Cheers to Sauced!
      </p>
    </div>
  );
};

export default About;