const convert = require('./convert');

window.addEventListener('load', (event) => {
  document.getElementById('submit-button').addEventListener('click', () => {
    document.getElementById('result-container').innerText =
      convert(document.getElementById('number-input').value);
  });
});
