let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonarray = Array.from(buttons);

let string = '';
buttonarray.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let value = e.target.innerHTML;

    if (value == 'DEL') {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (value == 'AC') {
      string = '';
      display.value = string;
    } else if (value == '=') {
      try {
        string = eval(string);
        display.value = string;
      } catch (error) {
        display.value = 'Error';
        string = '';
      }
    } else {
      string += value;
      display.value = string;
    }
  });
});
