window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

global.requestAnimationFrame = callback => setTimeout(callback, 0);
