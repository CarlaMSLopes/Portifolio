let trilho = document.getElementById("trilho");
let body = document.querySelector('body');
let logo_h1 = document.getElementById('logo_h1');
let iconImg =document.getElementById('iconImg');
trilho.addEventListener('click', ()=>{
   trilho.classList.toggle('dark') 
   body.classList.toggle('dark')

   /* Dark mode, header */
   logo_h1.classList.toggle('dark')
   iconImg.classList.toggle('dark')

})

