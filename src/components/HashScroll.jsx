import { useEffect } from "react";

const scrollToHashTarget = () => {
  let targetId;

  try {
    targetId = decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return;
  }

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
