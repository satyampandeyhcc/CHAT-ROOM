let str = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    try {
      if (e.target.innerHTML === '=') {
        str = eval(str);
        document.querySelector('input').value = str;
      } else if (e.target.innerHTML === 'AC') {
        str = "";
        document.querySelector('input').value = str;
      } else if (e.target.innerHTML === 'DEL') {
        str = str.substring(0, string.length - 1);
        document.querySelector('input').value = str;
      } else {
        console.log(e.target);
        str = str + e.target.innerHTML;
        document.querySelector('input').value = str;
      }
    } catch (error) {
      // Handle the error here
      console.error(error);
      str = ""; // Clear the string to prevent further evaluation
      document.querySelector('input').value = 'Error';
    }
  });
});
