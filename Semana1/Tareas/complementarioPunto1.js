
//1.Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola utilizando recursividad.

const tabla =function(N,i=1){
    if(i<=10){
        console.log(`${N} * ${i} = ${N*i}`)
        i++;
        return tabla(N,i=i)
    }
}
tabla(2);

//2.Crear un objeto Mascota que tenga como parámetros Nombre, Edad y Color.
//3.Definir un arreglo con sus comidas favoritas.

const Mascota = {
    nombre: ['Bob', 'Smith'],
    edad: 32,
    color: 'rojo',
    comidasFavoritas: ['chocolate', 'pañales', 'carroña']
  };

//4.Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando un do-while.

const TamañoDeArreglo= Mascota.comidasFavoritas
let i=0;

    do{
    console.log(Mascota.comidasFavoritas[i])
    i++;
    }while(i<TamañoDeArreglo.length)

//5.Crear una función flecha que reciba un elemento del arreglo de comidas favoritas y lo devuelva en mayúscula.

const mayus=(posicion)=> {
  if(posicion>=3){
      return "El array solo posee 3 posiciones :c intente con un numero menor"
  }
    return TamañoDeArreglo[posicion]=TamañoDeArreglo[posicion].toUpperCase();
} 
console.log(mayus(2))