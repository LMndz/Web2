//Aplicar promesas y async/await para solucionar un problema aplicado a su proyecto autónomo que tenga por lo menos 3 arreglos. 
//Estos 3 arreglos deben tener relación con el proceso principal de su proyecto. Por ejemplo, si fuese consultar una reservación de hotel: Cabecera de reservación, detalle de cuartos por reservación y detalle de personas que van a ubicarse por cada cuarto en la reservación.

//tema del proyecto Software para registro y control de trabajos de titulación.

/*--------------------------------------------------------------------------------------
ARREGLOS
--------------------------------------------------------------------------------------*/
const Tesis=[
    {
        id:1,
        titulo:'la figura del heroe mitico como factor de interes en el anime los caballeros del zodiaco',
        idautor:1,
        idClasificacion:9
    },

    {
        id:2,
        titulo:'El camino del dolor: el discurso sobre el ciclo bélico de violencia representado en el anime shōnen Naruto Shippūden a partir del relato de Nagato/Pain',
        idautor:2,
        idClasificacion:9
    },    

    {
        id:3,
        titulo:'Tecnicas y trucos de como pasar al siguiente mundo en el juego de Mario Bros',
        idautor:3,
        idClasificacion:9
    }    
]

const autores=[
    {
        idautor:1,
        nombre:'Pipino El Brebe',
        idFacultad:1
    },

    {
        idautor:2,
        nombre:'Clodoveo I',
        idFacultad:2
    },

    {
        idautor:3,
        nombre:'Alejandro Magno',
        idFacultad:3
    }
]

const facultades=[
    {
        idFacultad:1,
        facultad: 'licenciatura'
    },

    {
        idFacultad:2,
        facultad: 'Ingenieria'
    },

    {
        idFacultad:3,
        facultad: 'Arte'
    }
]

const clasificacion=[
  
    {
        idClasificacion:1,
        nombre:'documental'
    },

    {
        idClasificacion:2,
        nombre:'histórica'
    },

    {
        idClasificacion:3,
        nombre:'de campo'
    },

    {
        idClasificacion:4,
        nombre:'experimental'
    },
    
    {
        idClasificacion:5,
        nombre:'descriptiva'
    },
    
    {
        idClasificacion:6,
        nombre:'analítica'
    },

    {
        idClasificacion:7,
        nombre:'factible'
    },
    
    {
        idClasificacion:8,
        nombre:'especial'
    },

    {
        idClasificacion:9,
        nombre:'de licenciatura'
    },

    {
        idClasificacion:10,
        nombre:'maestría'
    },

    {
        idClasificacion:11,
        nombre:'de doctorado'
    }
]

/*--------------------------------------------------------------------------------------
PROMESAS
--------------------------------------------------------------------------------------*/

function buscarTesisId(id)
{
    return new Promise((resolve, reject)=>{
        const tesi = Tesis.find((tesi)=> tesi.id===id);
        if (!tesi)
        {
            const error= new Error();
            error.message="tesis no encontrado";
            reject(error);
        }
        resolve(tesi);
    })
}

function buscarAutorId (id)
{
    return new Promise((resolve,reject)=>{
        const autor =  autores.find((autor)=> autor.idautor===id)
        if (!autor)
        {
            const error= new Error();
            error.message="Autor no encontrado";
            reject(error);
        }
        resolve(autor);
    })
}

function buscarfacultadId (id)
{
    return new Promise((resolve,reject)=>{
        const facultad =  facultades.find((facultad)=> facultad.idFacultad===id)
        if (!facultad)
        {
            const error= new Error();
            error.message="facultadcion no encontrada";
            reject(error);
        }
        resolve(facultad);
    })
}

let tesiAuxiliar={};

buscarTesisId(2).then((tesi)=>{
    tesiAuxiliar=tesi;
    return buscarAutorId(tesi.idautor);
}).then((autor)=>{
    tesiAuxiliar.autor= autor;
    delete tesiAuxiliar.idautor;
    return buscarfacultadId(autor.idFacultad);
}).then((facultad)=>{
    tesiAuxiliar.facultad= facultad;
    console.log('--------------------------\nPROMESAS\n--------------------------')
    console.log(tesiAuxiliar);
}).catch((error)=>{
    console.log(error.message)
})

/*--------------------------------------------------------------------------------------
ASYNC/AWAIT
--------------------------------------------------------------------------------------*/
async function buscarTesisPorId(id)
{
    const Tesi = Tesis.find((Tesi)=> Tesi.id===id );
    if (!Tesi)
    {
        const error =  new Error();
        error.message="No existe Tesis";
        throw error;
    }
    return Tesi;
}

async function buscarAutorPorId(id)
{
    const autor = autores.find((autor)=> autor.idautor===id );
    if (!autor)
    {
        const error =  new Error();
        error.message="No existe el autor";
        throw error;
    }
    return autor;
}

async function buscarClasificacionId(id)
{
    const clasifica = clasificacion.find((clasifica)=> clasifica.idClasificacion===id );
    if (!clasifica)
    {
        const error =  new Error();
        error.message="No existe el clasificacion";
        throw error;
    }
    return clasifica;
}


async function main()
{
    try {
        const Tesi= await  buscarTesisPorId(1);
        const autor = await buscarAutorPorId(Tesi.idautor);
        const clasifica = await buscarClasificacionId(Tesi.idClasificacion);
        console.log('--------------------------\nAsync/Await\n--------------------------')
        console.log(`Tesis:${Tesi.titulo} \nAutor: ${autor.nombre} \nClasificacion:${clasifica.nombre}`);
        
    } catch (err) {
        console.log(err.message)
    }

}

main();






