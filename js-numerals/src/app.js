const convert = require('./convert');

window.addEventListener('load', (event) => {
  document.getElementById('submit-button').addEventListener('click', () => {
    console.log(
      convert(document.getElementById('number-input').value) + ' converted'
    );
  });
});
