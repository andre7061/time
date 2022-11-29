const btnsClears=document.querySelectorAll('.btn');
const wrap=document.querySelector('.cart-wrapper')

btnsClears.forEach(el=>{
  
  el.addEventListener('click', function(){
    
    const items=el.closest('.card')
    const obj={
      _id:items.dataset.id,
      imgSrc:items.querySelector('.product-img').src,
      title:items.querySelector('.item-title').textContent,
      small:items.querySelector('.text-muted').textContent,
      weight:items.querySelector('.price__weight').textContent,
      price:items.querySelector('.price__currency').textContent,
      current:items.querySelector('.items__current').textContent,
    }

    
    const isFull= wrap.querySelector(`[data-id="${obj._id}"]`);
    document.querySelector('.alert').textContent=''
   
    
   if(isFull){
    let x =isFull.querySelector('.items__current');
    let y=isFull.querySelector('.price__currency');     
       x.textContent=parseInt(x.textContent)+ parseInt(obj.current)
       y.textContent  =parseInt(obj.price)*parseInt(x.textContent)+' ₽'
      
       
        // console.log(value.textContent)
    
   }else{
    const card=`
    <div class="cart-item" data-id=${obj._id}>
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src=${obj.imgSrc} alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${obj.title}</div>
										<div class="cart-item__weight">${obj.weight} / ${obj.price}</div>

										
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${obj.current}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${parseInt(obj.price)*parseInt(obj.current)} ₽</div>
											</div>

										</div>
										

									</div>
								</div>
							</div>
    `
    
    wrap.insertAdjacentHTML('beforeend',card)
   }
   let  sum=wrap.querySelectorAll('.price__currency');
   let r=0
   sum.forEach(el=>{
     r+=parseInt(el.textContent)

   })
   
  document.querySelector('.total-price').textContent=r
    
  })
  
})

wrap.addEventListener('click',(e)=>{
  let wer =wrap.querySelector('.items__current')
if(e.target.dataset.action==='minus'){
  
  if(parseInt(wer.textContent)>1)
  e.target.nextElementSibling.textContent= parseInt(wer.textContent)-1
}else if(e.target.dataset.action==='plus'){
  e.target.previousElementSibling.textContent= parseInt(wer.textContent)+1
  console.log()
}
})