document.addEventListener('DOMContentLoaded', function() {
  var output = document.getElementById('output');

  for (var i = 1; i <= 100; i++) {
    var text = '';
    if (i % 3 === 0) {
      text += 'google';
    }
    if (i % 5 === 0) {
      text += 'facebook';
    }
    if (text === '') {
      text = i;
    }

    var element = document.createElement('p');
    element.textContent = text;
    output.appendChild(element);
  }
});
