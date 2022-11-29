
const ser =document.querySelector('.carasy')

function creatImgItem(n=0){
  let x=img[n]
 
 
  const el =document.createElement('img');
  el.classList.add('carasy_item', 'item4');
  el.src=x.src;
  return el
  
}


document.querySelector('.left').addEventListener('click',()=>{
  const img= document.querySelectorAll('.carasy_item');
  let x=img[0]
 
 
  const el =document.createElement('img');
  el.classList.add('carasy_item', 'item4');
  el.src=x.src;
  
  ser.append(el)
  
  img[0].style.left='-330%'
  img[1].style.left='-106%'
  img[2].style.left='0'
  
  setTimeout(() => {
    
    el.style.left='106%'
    x.remove()
    
    
  }, );    
})
document.querySelector('.richt').addEventListener('click',()=>{
  const img= document.querySelectorAll('.carasy_item');
  let x=img[2]
 
 
  const el =document.createElement('img');
  el.classList.add('carasy_item', 'item5');
  el.src=x.src;
  ser.prepend(el)
  
  img[2].style.left='330%'
  img[1].style.left='106%'
  img[0].style.left='0%'
  
  setTimeout(() => {
    
    el.style.left='-106%'
    x.remove()
    
    
  }, );     
})





  
  