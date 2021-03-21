window.addEventListener('load', (event) => {
    document.getElementById('submit-button').addEventListener('click', () => {
        console.log(document.getElementById('number-input').value + ' converted');
    });
});
