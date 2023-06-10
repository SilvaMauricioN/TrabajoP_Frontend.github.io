const Formulario = document.getElementById('formulario'),
    Nombrenuevo = document.querySelector('#exampleModal .nombre'),
    Apellidonuevo = document.querySelector('#exampleModal .apellido'),
    Emailnuevo = document.querySelector('#exampleModal .email'),
    CantiEntradas =document.querySelector('#exampleModal .cantidad'),
    PrecioTotal = document.querySelector('#exampleModal .total'),
    BotonBorrar = document.getElementById('Borrar');

  
Formulario.Nombre.addEventListener('keyup', (e) => {
    let valor = e.target.value;
    //no dejo que el usuario ingrese numeros en campos de letras
    Formulario.Nombre.value = valor.replace(/[0-9]/g,'');    
    Nombrenuevo.textContent = valor;  

});

Formulario.Apellido.addEventListener('keyup', (e) => {
    let valor1 = e.target.value;
    //no dejo que el usuario ingrese numeros en campos de letras

    Formulario.Apellido.value = valor1.replace(/[0-9]/g,'');
    Apellidonuevo.textContent = valor1;

});

Formulario.Email.addEventListener('keyup', (e) => {
    let valor2 = e.target.value;

    Formulario.Email.value = valor2;
    Emailnuevo.textContent = valor2;

});

Formulario.Cantidad.addEventListener('keyup', (e) => {
    let valor3 = e.target.value;
    //no dejo que el usuario ingrese letras en campos de numeros

    Formulario.Cantidad.value = valor3.replace(/\D/g, '');
    CantiEntradas.textContent = valor3;

});

function BorrarDatos() {
    Formulario.reset(); 
}


BotonBorrar.addEventListener('click', function() {
    BorrarDatos();
    
});

document.getElementById('Resumen').addEventListener('click', function() {
    event.preventDefault();        
    
});

//funcion calcular que descuento corresponde segun la categoria
function Descuento(Categoria){
    let descuento = 0;

    if (Categoria === "1") {
        descuento = 0.8;
    } else if (Categoria === "2") {
        descuento = 0.5;
    } else if (Categoria === "3") {
        descuento = 0.15; 
    };

    return descuento;
}

//calculo el precio final de las entradas
function PrecioFinal(){
    let cantidad = parseInt(document.getElementById('Cantidad').value);

    let categoria = Formulario.Categoria.value;
    let descuento = Descuento(categoria);

    let precioTotal = cantidad * 200 * (1 - descuento);

    return Math.round(precioTotal);
}


Formulario.Categoria.addEventListener('change',(e)=>{
    
    let precioTotal = PrecioFinal();
    PrecioTotal.textContent = "$ " + precioTotal;

})


  
