const boton = document.querySelector('#switch');

boton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});

// document.addEventListener('DOMContentLoaded',()=>{
//     if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//         document.body.classList.add('dark');
//     }
// });