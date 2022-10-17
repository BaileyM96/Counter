// Set intial count
var count = 0;

var buttons = document.querySelectorAll('.btn');
var value = document.querySelector('#value');


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        var styles = e.currentTarget.classList; 
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else { //This resets the counter
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        value.textContent = count;
    });
});