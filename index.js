// template_c8fa3y2
//  service_dr4egne
//  pu9KIeaE0Ute1o74g


function contact(event) {
event.preventDefault(); /*prevents page reload*/ 
 const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"


emailjs
 .sendForm (
    'service_dr4egne',
     'template_c8fa3y2',
    event.target,
     'pu9KIeaE0Ute1o74g'
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
let isModalOpen = false;
function toggleModal () {
    
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }

    isModalOpen =  true;
    document.body.classList += " modal--open";

}