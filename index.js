let nombre = prompt ("Ingresa tu nombre")

if(nombre != " "){
    alert("Bienvenido/a " + nombre)
}else{(alert ("No ingresaste ningun nombre"))}

let iva = 0.21
let resultado

function precio (parametro1, parametro2,){
    let pregunta = prompt ("¿Necesitas flores para tu jardin?")
    while (pregunta == "si"){

    let producto= prompt ("¿Que flor estas buscando?")
    let rosa = 800
    let tulipan = 1000
    let girasol = 950
    
    if(producto == "rosa"){
        parametro1 = rosa + rosa * parametro2
        alert ("El precio es " + parametro1)
    } else if(producto == "tulipan"){
        parametro1 = tulipan + tulipan * parametro2
        alert ("El precio es " + parametro1)
    } else if( producto == "girasol"){
        parametro1 = girasol + girasol * parametro2
        alert ("El precio es " + parametro1)
    } else (alert ( "no tenemos ese producto"))

    pregunta = prompt ("¿Necesitas saber el precio de otra flor?")
    }
  
}

precio (resultado, iva)

