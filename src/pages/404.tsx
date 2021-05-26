import React from 'react';
import useScrollView from '@/hooks/useScrollView';
import useIsInViewport from 'use-is-in-viewport';

export default function About() {
  const [isInViewport, targetRef] = useIsInViewport();
  const scrollView = useScrollView(isInViewport);
  const born: Date = new Date(`1989-11-29`);
  const timeDiff = Math.abs(Date.now() - born.getTime());
  const time = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  return (
    <div className="notfoundbody   min-w-full ">
      <main className="flex-col lg:flex-row  flex ">
        <div className="notfound">
          <div className="centered">
            <span className="inverted">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            &nbsp;
          </div>
          <div className="centered">
            <span className="inverted">&nbsp;4&nbsp;0&nbsp;4&nbsp;</span>
            <span className="shadow">&nbsp;</span>
          </div>
          <div className="centered">
            <span className="inverted">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="shadow">&nbsp;</span>
          </div>
          <div className="centered">
            &nbsp;
            <span className="shadow">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          <div className="row">&nbsp;</div>
          <div className="row">
            A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.
          </div>
          <div className="row">The current request will be terminated.</div>
          <div className="row">&nbsp;</div>
          <div className="row">
            * Press any key to return to the previous page.
          </div>
          <div className="row">
            * Press CTRL+ALT+DEL to restart your computer. You will
          </div>
          <div className="row">
            &nbsp;&nbsp;lose any unsaved information in all applications.
          </div>
          <div className="row">&nbsp;</div>
          <div className="centered">
            Press any key to continue...<span className="blink">&#9608;</span>
          </div>
        </div>
      </main>
    </div>
  );
}
