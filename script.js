let multipleColor= document.querySelector('.multi-colored-box')
const listItems= document.querySelectorAll('nav ul li')
let par = document.querySelector('.awesome')

listItems.forEach((item,idx)=>{
    listItems[0].addEventListener('click', ()=>{    
        multipleColor.style.backgroundColor='red'
        para_show()
    })
    listItems[1].addEventListener('click', ()=>{    
        multipleColor.style.backgroundColor='green'
        para_show()
    })
    listItems[2].addEventListener('click', ()=>{    
        multipleColor.style.backgroundColor='blue'
        para_show()
    })
    listItems[3].addEventListener('click', ()=>{    
        multipleColor.style.backgroundColor='yellow'
        para_show()
    })
    listItems[4].addEventListener('click', ()=>{    
        multipleColor.style.backgroundColor='purple'
        para_show()
    })
})
function para_show(){
    par.style.opacity='1'
    setTimeout(() => {
        par.style.opacity='0'
    }, 2000);
}