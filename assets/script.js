// Set intial count
var count = 0;

var buttons = document.querySelectorAll('.btn');
var value = document.querySelector('#value');


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        var styles = e.currentTarget.classList; //This might throw an error later
        if(styles.contains('decrease')) {
            count--;
        } else if(styles.contains('increase')) {
            count++;
        } else {
            
        }
        value.textContent = count;
    });
});