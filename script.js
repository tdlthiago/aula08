function imc(){
    let nome =document.getElementById('nome').value
    let altura =document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado= document.getElementById('resultado')

    let valorIMC = (peso / (altura*altura)).toFixed(1)

    if(nome !== '' && altura !== ' ' && peso !==''){
       
        if(valorIMC < 18.5){
            tipoIMC = "abaixo do peso"
        }else if(valorIMC > 18.6 && valorIMC < 24.9){
            tipoIMC =" Peso ideal (parabens"
        }else if(valorIMC > 25.0 && valorIMC < 29.9){
            tipoIMC = "Levemente acima do peso"
        }else if(valorIMC > 30.0 && valorIMC < 34.9){
            tipoIMC = "Obesidade grau 1"
        }else if(valorIMC > 35.0 && valorIMC < 39.9){
            tipoIMC = "Obesidade grau 2(severa)"
        }else {
            tipoIMC = "Obsiade 3 (mórbida)"
        }

resultado.innerHTML = "Ola "+nome+" seu IMC é "+valorIMC+" e você está "+tipoIMC 

    }else{
        resultado.innerHTML= 'por favor preencha todos os campos'
    }
}