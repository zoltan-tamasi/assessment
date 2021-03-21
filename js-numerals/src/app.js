const convert = require('./convert');

window.addEventListener('load', (event) => {
  document.getElementById('submit-button').addEventListener('click', () => {
    try {
      document.getElementById('result-container').innerText =
        convert(document.getElementById('number-input').value);
    } catch {
      alert('parameter must be an integer greater or equal to 0');
    }
  });
});
