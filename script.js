const changebg = document.getElementById('change-bg');
const hexcode = document.getElementById('colorhex');

function generate(number) {
  return Math.floor(Math.random() * (number + 1));
}

function toHex(number) {
  const hex = number.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

changebg.addEventListener('click', function () {
  var randomcolor =
    '#' + toHex(generate(255)) + toHex(generate(255)) + toHex(generate(255));
  document.getElementById('container').style.background = randomcolor;
  hexcode.textContent = randomcolor;
});
