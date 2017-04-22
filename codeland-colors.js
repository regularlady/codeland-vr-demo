AFRAME.registerComponent('codeland-colors', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;

    // Set material component's color property to a random color from our array.
    setInterval(function () {
      el.setAttribute('material', 'color', getCodelandColor());
    }, 5000)
  }
});


function getCodelandColor() {
  const colors = ["#bada55", "#ffaa62", "#1ffff5", "#00ff00", "#fc2eff"];
  for (var i = 0; i < 6; i++ ) {
    color = colors[Math.floor(Math.random() * 5)];
  }
  return color;
}
