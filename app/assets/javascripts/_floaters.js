function Tweek_initFloaters() {
  function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function createRandomFloater(style) {
    var el = document.createElement('div');

    el.className = 'floater';
    el.setAttribute('data-style', style);
    el.style.left = random(2, 98) + '%';
    el.style.top = random(2, 98) + '%';

    return el;
  }

  function showFloater(style) {
    var el = createRandomFloater(style);
    container.appendChild(el);

    setTimeout(show, 100);

    function show() {
      el.className = 'floater floater--visible';
      setTimeout(wait, 500);
    }

    function wait() {
      var delay = random(5000, 10000);
      setTimeout(hide, delay);
    }

    function hide() {
      el.className = 'floater';
      setTimeout(remove, 500);
    }

    function remove() {
      container.removeChild(el);
      showFloater(style);
    }
  }

  function createFloaters(num) {
    for (var i = 1; i <= 6; i++) {
      for (var j = 0; j < num; j++) {
        showFloater(i);
      }
    }
  }

  var container = document.querySelector('.floaters');

  if (window.innerWidth >= 768) {
    createFloaters(2);
  } else {
    createFloaters(1);
  }
}
