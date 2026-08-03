import { useEffect } from "react";

const scrollToHashTarget = () => {
  const targetId = decodeURIComponent(window.location.hash.slice(1));

  if (!targetId) {
    return;
  }

  requestAnimationFrame(() => {
    document.getElementById(targetId)?.scrollIntoView();
  });
};

const HashScroll = () => {
  useEffect(() => {
    scrollToHashTarget();
    window.addEventListener("hashchange", scrollToHashTarget);

    return () => window.removeEventListener("hashchange", scrollToHashTarget);
  }, []);

  return null;
};

export default HashScroll;
