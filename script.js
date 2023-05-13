let ulelement=document.querySelector(".navbar-icons ul")
let lielements=document.querySelectorAll(".navbar-icons ul li")
let ielement=document.querySelector(".navbar-icons i")
let navbar=document.querySelector(".navbar")

            ielement.addEventListener("click",()=>{
                        ulelement.classList.toggle("active")
                        lielements.forEach((lielement)=>{
                                    lielement.classList.toggle("active")
                        })
            })


lielements.forEach((lielement)=>{
            lielement.addEventListener("click",()=>{
                        ulelement.style.width="0"
            ielement.addEventListener("click",()=>{
                        ulelement.style.width="25%"
                        lielements.forEach((lielement)=>{
                                    lielement.classList.toggle("active")
                        })
            })
            })
})