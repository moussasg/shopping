function ajout(e){
    const row = e.target.parentElement.parentElement
    quant =row.querySelector(".qt")
    total = row.querySelector(".total")
    unitprice = row.querySelector(".unitprice")
    quant.innerText++
    total.innerText = quant.innerText * unitprice.innerText
     totalCart()
}
function soust(e){
    const row = e.target.parentElement.parentElement
    quant =row.querySelector(".qt")
    total = row.querySelector(".total")
    unitprice = row.querySelector(".unitprice")
    if (quant.innerText == "1") return false
    quant.innerText--
    total.innerText = quant.innerText * unitprice.innerText
    totalCart()
}
function supr(e){
  const lign = e.target.parentElement.parentElement
  lign.style.display = ' none'
  totalCart()
}
function totalCart(e){
    totaltab = document.querySelectorAll(".total")
    totalfin = document.querySelector(".cartTotal span")
    let tot = 0
    totaltab.forEach(el => {
        tot = tot + parseInt(el.innerText)   
    })
    totalfin.innerText = tot  }
    function dern(e) {
        const heart = e.target.parentElement.parentElement
         fin = heart.querySelector('.heart')
         prod1 = heart.querySelector('.prod1')
        fin.addEventListener('click', function () { 
        const jdid = fin
        jdid.classList.toggle('active') //jdid yweli .heart.active
        const jdid1 = prod1 // jdid1 yweli .prod1
        jdid1.classList.toggle('active1')//jdid1 yweli .prod1.active1
    })
    }



    