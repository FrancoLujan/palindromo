const palabra =   document.querySelector(".palabra");
const verificar = document.querySelector(".boton");
const comprobacion = document.querySelector(".valides");




    verificar.onclick = ()=>{    
    let text = palabra.value
    if(text != ""){
        let reversa = [... text].reverse().join("")
        if(text == reversa){
            comprobacion.style.color = "rgb(52, 255, 1)"
            comprobacion.style.textShadow = "0px 0px 0.2px white"
            comprobacion.textContent = "PALINDROMO"
        }
        else{
            comprobacion.style.textShadow = "0px 0px 0.2px black"
            comprobacion.textContent = "NO PALINDROMO"
            comprobacion.style.color = "rgb(225, 6 , 5)"

        }
    }else{
        
    }
}




