addEventListener('DOMContentLoaded', function(){
    let decrease = document.getElementById('decreaseCount');
    let increase = document.getElementById('increaseCount');
    let reset = document.getElementById('resetCount');
    let countDisplay = document.getElementById('count');
    let count = 0;

    decrease.addEventListener('click', function(){
        count -= 1;
        countDisplay.textContent = count;
    })
    increase.addEventListener('click', function(){
        count += 1;
        countDisplay.textContent = count;
    })
    reset.addEventListener('click', function(){
        count = 0;
        countDisplay.textContent = count;
    })
})