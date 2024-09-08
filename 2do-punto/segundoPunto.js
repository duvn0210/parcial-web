function sumarCuadros(arrayNumeros) {
    let total = 0;

    
    function dibujarNumero(numero) {
        const strNumero = numero.toString();
        const guiones = '-'.repeat(strNumero.length);
        
        console.log(+${guiones}+);
        console.log(|${strNumero}|);
        console.log(+${guiones}+); 
    }

    
    arrayNumeros.forEach(numero => {
        dibujarNumero(numero);
        total += numero;
    });

   
    const totalStr = total.toString();
    const guionesTotal = '-'.repeat(totalStr.length);
    
    console.log(+${guionesTotal}+);
    console.log(|${total}|);
    console.log(+${guionesTotal}+);
}


const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);