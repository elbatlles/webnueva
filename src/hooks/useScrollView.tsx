import { useState, useEffect } from 'react';

const useScrollView = (isInViewport: boolean | null) => {
  // const [isInViewport, targetRef] = useIsInViewport();
  const [scrollView, setscrollView] = useState(false);

  useEffect(() => {
    if (isInViewport === true) {
      setscrollView(true);
    }
  }, [isInViewport]);

  return scrollView;
};

export default useScrollView;
