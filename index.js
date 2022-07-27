
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor= 1/20;

function moveBackground(event){
   const shapes = document.querySelectorAll(".shape")
   const x = event.clientX * scaleFactor;
   const y = event.clientY * scaleFactor;

   

   for (let i= 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const BoolInr = isOdd ? -1 : 1 ;
      shapes[i].style.transform = `translate(${x * BoolInr}px, ${y * oddIntager}px)`

   }
}


function toggleContrast() {
   contrastToggle = !contrastToggle
   if (contrastToggle) {
      document.body.classList += " dark-theme"

   }
   else{
      document.body.classList.remove ("dark-theme") 
   }
}




function contact(event) {
event.preventDefault(); /*prevents page reload*/ 
 const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"

// template_c8fa3y2
//  service_dr4egne
//  pu9KIeaE0Ute1o74g

emailjs
 .sendForm (
    'service_dr4egne',
     'template_c8fa3y2',
    event.target,
   //   'pu9KIeaE0Ute1o74g'
  ).then(() => {
    loading.classList.remove('modal__overlay--visible')
    success.classList += " modal__overlay--visible"
 }).catch(() => {
    loading.classList.remove('modal__overlay--visible')
    alert(
    'The email service is currently unavailable, contact me directly at: antonio.spada01@gmail.com'
    )
    
 })
 
}

function toggleModal () {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }

    isModalOpen =  true;
    document.body.classList += " modal--open";

}