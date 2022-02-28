const advice = document.getElementById('advice-text');
const adviceIdText = document.getElementById('advice-id')
// Calls initial advice on load
getAdvice();
// Change advice on click
document.querySelector('.advice-change').addEventListener('click', () => {
    getAdvice();
})
// Function that gets the advice
function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(function (response) {
        return response.json();
    }).then(function (data) {
        let id = data.slip.id
        advice.innerText = data.slip.advice
        adviceIdText.innerText = `ADVICE #${id}`
    })
}
