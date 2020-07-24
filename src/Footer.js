import React from 'react';

function Footer() {



  return (
    <p className="text-sm text-show-500 text-center mt-6 mb-40"
    >
      Random Ep is a React-based single page app. Uses the <a
        className="font-bold text-show-400 hover:text-show-300"
        href="https://www.tvmaze.com/api"
        target="_blank"
        rel="noopener noreferrer"
      >
         TVMaze API
      </a> for show data and <a
      className="font-bold text-show-400 hover:text-show-300"
      href="https://tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
       Tailwind CSS
    </a> for styling. Optimized for mobile.
    </p>
  )
}

export default Footer;