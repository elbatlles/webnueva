import useScrollView from '@/hooks/useScrollView';
import React from 'react';
import useIsInViewport from 'use-is-in-viewport';

export default function Whoiam() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);

  return (
    <div className="grid grid-flow-col grid-cols-2">
      <div>
        <div ref={targetRef} className={scrollView ? `visible` : `invisible`}>
          <h2 className={scrollView ? `subtitle` : ``}>
            <div className="blast">W</div>
            <div className="blast">h</div>
            <div className="blast">a</div>
            <div className="blast mr-5">t</div>
            <div className="blast">I</div>
            <div className="blast">&apos;</div>
            <div className="blast mr-5">m</div>
            <div className="blast">i</div>
            <div className="blast">n</div>
            <div className="blast">t</div>
            <div className="blast">o</div>
            <div className="blast">?</div>
          </h2>
        </div>
        <p>
          Hi, how are you? I hope you&apos;re doing great! <br />
          <br />
          If you&apos;ve come this far, I guess you&apos;re looking for
          something more about me than a simple list of my professional
          achievements and experiences, so here we go! <br />
          <br />
          With more than 7 years of experience working as a web designer and
          layout designer, I currently work as a Frontend Developer. <br />
          <br />
          I consider myself a curious, active and self-taught person. There is
          nothing I am more passionate about than devouring information,
          experimenting and testing what&apos;s new in the industry. When
          something catches my attention I absorb as much as I can until I
          really control it 100%. I consider this to be my greatest differential
          value and what I enjoy most about my work.
          <br /> <br />
          Now, my efforts are focused on learning Reactjs, as I see my
          professional future focused on the development of new technologies
          related to JavaScript/Typescript. I am also learning everything
          related to Blockchain as I find it a super interesting world.
          <br />
          <br /> My other passion is sports in general, but what fascinates me
          is Crossfit, for me it is a constant challenge, both mentally and
          physically that I can extrapolate in my day to day. <br /> <br />I
          will be adding some other project in my Github that I will be doing
          that may be of interest.
        </p>
      </div>

      <div>
        dsadasd asdasdas asdasdassdasd sdasdasdasdasd dsadasd asdasdassdasda
        sdasdasdasdasdsdasdas dasdas asdasdassdasd sdasdasdasdasd dsadasd
        asdasdassdasda sdasdasdasdasdsdasdas dasdas asdasdassdasd sdasdasdasdasd
        dsadasd asdasdassdasda sdasdasdasdasdsdasdas dasdas asdasdassdasd
        sdasdasdasdasd dsadasd asdasdassdasda sdasdasdasdasdsdasdas dasdas
        asdasdassdasd sdasdasdasdasd dsadasd asdasdassdasda
        sdasdasdasdasdsdasdas
      </div>
    </div>
  );
}

/* return (
    <div>

      {scrollY}
    </div>
  ); */