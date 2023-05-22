import React, { ReactElement, useEffect, useRef } from 'react';
import anime from 'animejs';
import { useScroll } from '../hooks/useScroll';

const MyWork = (): ReactElement => {
  const myWork = useRef(null);
  const animationRef = useRef<anime.AnimeInstance | null>(null);
  const handleScroll = (scrollPosition: number): void => {
    // Get the scroll height of the page
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    // Start at 50% of the scroll height
    const start = scrollHeight * 0.3;

    if (animationRef.current != null && scrollPosition >= start) {
      animationRef.current.seek(animationRef.current.duration * ((scrollPosition - start) / (scrollHeight - start)));
    }
  };

  useEffect(() => {
    const animation = anime({
      targets: myWork.current,
      translateY: -400,
      easing: 'easeInOutQuad',
      elasticity: 200,
      autoplay: false
    });

    animationRef.current = animation;
  }, []);
  useScroll(handleScroll);

  return (
    <article id="my_work">
      <div ref={myWork} className="quote">
        <h3>My work</h3>
        <p>
          Here is a list of recent projects I have been involved in and &#128155; working on.<br /><br />
        </p>
        <ul>
          <li>My <a href='#'>Medium posts</a></li>
          <li>A template to create <a href=''>AWS Lambdas with Typescript</a>.</li>
          <li>The website of <a href=''>Emma Roussel Naturopath</a>.</li>
          <li><a href=''>Zippy</a> : An archiver made with Electron JS.</li>
          <li><a href=''>Bigfile</a> : An executable that identifies large files on your system.</li>
        </ul>
        <p>
          You can explore all my work on my <a href=''>GitHub account</a>.<br /><br />
          Stay tuned for more exciting projects!
        </p>
      </div>
    </article>
  );
};

export default MyWork;
