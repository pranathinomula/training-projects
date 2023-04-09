var Scrn = document.querySelector('#screen');
var maibox = document.querySelector('.calBox');
var exp = '';
var errro_btn = document.querySelector('#error_screen');
var close = document.querySelector('#close')

maibox.addEventListener('click', (e) => {
  let vlu = e.target.value;

  if (vlu) {
    if (vlu != 'undefined') {
      if (vlu == '=') {
        try {


          exp = eval(exp)
          Scrn.innerHTML = exp
        } catch (error) {

          errro_btn.innerHTML += error.message
          errro_btn.style.display = "block"

        }
      } else if (vlu == 'ac') {
        Scrn.innerHTML = '0'
        exp = ''
      } else if (vlu == 'OFF') {
        Scrn.innerHTML = ''
        exp = ''
      } else if (vlu == 'undefined') {
        exp = '='
        Scrn.innerHTML = '0'
      } else {

        exp += vlu
        Scrn.innerHTML = exp
      }
    }
  }
})

errro_btn.addEventListener('click', (e) => {

  if (e.target.id === "close") {
    errro_btn.style.display = "none";
  }
})