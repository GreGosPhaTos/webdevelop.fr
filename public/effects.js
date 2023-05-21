function onScrollAnimation(selector, options) {
  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    var element = document.querySelector(selector);

    var speed = 0.5;
    var width = window.innerWidth;
    var height = window.innerHeight;

    function stopAnimation(type) {
      if (Object.hasOwn(options, 'stop')) {
        var rect = element.getBoundingClientRect();
        console.log({ scrolled, rect })
        if (type === 'fadeRight' && ((options.stop / 100) * width) <= rect.right) {
          return true;
        }

        if (type === 'fadeLeft' && ((options.stop / 100) * width) >= rect.left) {
          return true;
        }

        if (type === 'fadeUp' && ((options.stop / 100) * height) <= rect.top) {
          return true;
        }

        if (type === 'fadeDown' && ((options.stop / 100) * height) >= rect.bottom) {
          return true;
        }
      }

      return false;
    }

    if (Object.hasOwn(options, 'speed')) {
      speed = speed * (options.speed / 100)
    }

    if (Object.hasOwn(options, 'type') && options.type === 'fadeUp') {
      if (!stopAnimation('fadeUp')) {
        element.style.transform = 'translateY(-' + scrolled * speed + 'px)';
      }
      return;
    }

    if (Object.hasOwn(options, 'type') && options.type === 'fadeRight') {
      if (!stopAnimation('fadeRight')) {
        element.style.transform = 'translateX(' + scrolled * speed + 'px)';
      }

      return;
    }

    if (Object.hasOwn(options, 'type') && options.type === 'fadeLeft') {
      if (!stopAnimation('fadeLeft')) {
        element.style.transform = 'translateX(-' + scrolled * speed + 'px)';
      }

      return;
    }

    // Default is fadeDown
    if (stopAnimation('fadeDown')) {
      return;
    }
    element.style.transform = 'translateY(' + (scrolled * speed) + 'px)';
  });
}

function site() {
  function init() {
    var cursor = 0;
    function increment() {
      setTimeout(() => {
        cursor += 20;
        window.scrollTo({
          top: 0,         // Keep the current vertical scroll position
          left: cursor,      // Set the desired horizontal scroll position
          behavior: 'smooth'  // Optionally, use smooth scrolling animation
        })
        console.log({ cursor });
        if (cursor < 4000) {
          increment();
        }
      }, 100);

      return;
    }

    increment();
  }

  return init();
}

document.addEventListener('DOMContentLoaded', function () {
  // site();
  // onScrollAnimation('.parallax-heading', { type: 'fadeDown', speed: 80 });
  // onScrollAnimation('.quote', { type: 'fadeLeft', speed: 150 });
  // onScrollAnimation('.quote p', { type: 'fadeLeft', stop: 50, speed: 150 });
  // onScrollAnimation('.moon', { type: 'fadeRight', stop: 50 });
});
