// about section scroll aware autofill text
let about = document.querySelector('.about');
let textElement= document.querySelector('#abttext');
let textContent = textElement.textContent;
textElement.innerHTML= '';

for(let char of textContent){
    let span = document.createElement('span');
    span.textContent = char;
    textElement.appendChild(span);
}

let spans = textElement.querySelectorAll('span');
window.addEventListener('scroll',()=>{
    let scrollDistance = window.scrollY;
    spans.forEach((span,index)=>{
        if (scrollDistance >= (index+1) * 6){
            span.classList.add('active')
        } else {
            span.classList.remove('active')
        }
    })
})

// window.addEventListener('scroll',()=>{
//     const rect = about.getBoundingClientRect();
// const isVisible =
//   rect.top >= (window.innerHeight)*0.5 &&
//   rect.left >= (window.innerWidth)*0.5 &&
//   rect.bottom <= window.innerHeight &&
//   rect.right <= window.innerWidth;
// console.log(isVisible);
// })

