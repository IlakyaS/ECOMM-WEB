
/* ---------------- nav menu open close-------- */


const  bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('act');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('act');
    })
}

/* ---------------sproduct page-------------------*/


var MainImg= document.getElementById("MainImg");
        var smallImg= document.getElementsByClassName("small-Img");

        smallImg[0].onclick=function(){
            MainImg.src=smallImg[0].src;
        }
        smallImg[1].onclick=function(){
            MainImg.src=smallImg[1].src;
        }
        smallImg[2].onclick=function(){
            MainImg.src=smallImg[2].src;
        }
        smallImg[3].onclick=function(){
            MainImg.src=smallImg[3].src;
        }



/*----------------------------google sheet------------------------*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbw45ehzl-Ncpn6C6DGPR5yj7JBc3K6i_gCpSEp2WXmWM6bgqvNIEKCYaW9fTp8SS4vxZQ/exec'
			const form = document.forms['GoogleformName']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(() => {
                alert("Success!");
              })
             .catch(error => console.error('Error!', error.message))
			})  



           /*window.addEventListener("load", function() {
                const form = document.getElementById('g');
                form.addEventListener("submit", function(e) {
                  e.preventDefault();
                  const data = new FormData(form);
                  const action = e.target.action;
                  fetch(action, {
                    method: 'POST',
                    body: data,
                  })
                  .then(() => {
                    alert("Success!");
                  })
                });
              });  */
              
            
              