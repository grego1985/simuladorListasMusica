class CancionesEnLista{
  constructor(id, nombre, genero, artista){
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.artista = artista;
  }
}


const canciones = [
  { id: 1, nombre: 'Ella usó mi cabeza como un revolver', genero: 'Rock Nacional', artista: 'Soda Stereo' },
  { id: 2, nombre: 'Para qué?', genero: 'Rock Nacional', artista: 'Las pelotas' },
  { id: 3, nombre: 'Fanky', genero: 'Rock Nacional', artista: 'Charly Garcia' },
  { id: 4, nombre: 'Rompecabezas de Amor', genero: 'Rock Nacional', artista: 'Las pastillas del abuelo' },
  { id: 5, nombre: 'Toxi Taxi', genero: 'Rock Nacional', artista: 'Patricio Rey y sus REdonditos de Ricota' },
  { id: 6, nombre: 'Ritmo Merembe', genero: 'Cuarteto', artista: 'Banda XXI' },
  { id: 7, nombre: 'Ramito de Violeta', genero: 'Cuarteto', artista: 'La Mona Jimenez' },
  { id: 8, nombre: 'Es viernes', genero: 'Cuarteto', artista: 'La Mona Jimenez' },
  { id: 9, nombre: 'Amor Salvaje', genero: 'folklore', artista: 'Chaque Palavecino' },
  { id: 10, nombre: 'Entra a mi Hogar', genero: 'folklore', artista: 'Los Manseros Santiagueños' },
];

const arrayListaNva = [];

//---------------------------------------------
const listarCanciones = () =>{
  cancionArray = [];
  let i = 0;
  for(cancion of canciones){
     cancionArray[i] = `${i+1} ${cancion.nombre} ${cancion.genero} ${cancion.artista} \n`;
    i++;
    }
  alert(`Las canciones en la lista son 
        ${cancionArray}`);
        //canciones.sort((a, b) => a - b);  
}

//-------------------------------------------
const buscarCancionPorNombre = () => {
  let nombre = prompt(`Ingrese nombre de la canción, Género o Artista`);
  
  const busqueda = canciones.filter(can => can.nombre.includes(nombre));
  console.log(busqueda);
  if(busqueda.length > 0){
    arrayC = [];
    let i = 0;
    for(c of busqueda){
      arrayC[i] = `${i+1}) ${c.nombre} - ${c.genero} - ${c.artista} \n`;
      i++;
    }
    alert(arrayC);
  }

} //Cierre funcion busqueda por cancion

//-----------------------------------------------
const buscarCancionPorGeneroArtista = () =>{
  let nombre = prompt(`Ingrese nombre de la canción, Género o Artista`);

  const busqueda1 = canciones.filter(gen => gen.genero.includes(nombre));
  const busqueda2 = canciones.filter(art => art.artista.includes(nombre));

  if (busqueda1.length > 0) {
    arrayG = [];
    let i = 0;
    for(g of busqueda1){
      arrayG[i] = `${i+1}) ${g.nombre} - ${g.genero} - ${g.artista} \n`;
      i++;
    }
    alert(arrayG);
  }

  if (busqueda2.length > 0) {
    arrayA = [];
    let i = 0;
    for(a of busqueda2){
      arrayA[i] = `${i+1}) ${a.nombre} - ${a.genero} - ${a.artista} \n`;
      i++;
    }
    alert(arrayA);
  }
}//Cierre funcion busqueda por genero y artista

//-----------------------------------------------
const AgregarCancionALista = () => {
  let cancionInresada = prompt('Ingrese Cancion que desea agregar');
  let generoInresado = prompt('Ingrese Género de la canción');
  let artistaInresado = prompt('Ingrese Artista de la canción');

  if (cancionInresada != "" && generoInresado != "" && artistaInresado != "") {
    id = canciones.length + 1;
    //alert(id);
    nuevaCancion = new CancionesEnLista(id, cancionInresada, generoInresado, artistaInresado);
    canciones.push(nuevaCancion);
  } else {
    alert(`Ingrese los Datos Solicitados Correctamente`);
  }
}//fin funcion agrega canciones
//----------------------------------------------
const BorrarCancion = () => {
  let cancionIngresada = prompt(`Ingrese Nombre de la cancion que desea Borrar`);
  const resultado = canciones.find(can => can.nombre === cancionIngresada);
  if(resultado === undefined){
    console.log(`No existe esa canción`);
  }else{
    let indice = canciones.findIndex(can => can.nombre === cancionIngresada);
    //alert(indice);
    canciones.splice(indice, 1);
    listarCanciones();
  }
  
}//Cierre funcion elimina cancion
//-----------------------------------------------
const agregarCancionALista = (agrega) =>{
  if (agrega ===true) {
    cancionArray = [];
    let inicia = true;

    while (inicia) {
      let i = 0;
      for(cancion of canciones){
         cancionArray[i] = `${i+1} ${cancion.nombre} ${cancion.genero} ${cancion.artista} \n`;
        i++;
        }
  
      let cancionEnLista = Number(prompt(`Ingrese el numero de la cancion que desea Agregar a su Lista \n ${cancionArray} 
      PRESIONE 0 PARA SALIR`));
      
      switch (inicia) {
        case (cancionEnLista >= 1):
          if (typeof cancionEnLista === 'number' && cancionEnLista != "" && cancionEnLista <= canciones.length) {
            const buscaCancion = canciones.find((ca) => ca.id === cancionEnLista)
            //alert(canciones.length);
            arrayListaNva.push(buscaCancion); 
            console.log(arrayListaNva);
          }else{
            alert(`Seleccione una Canción Válida`)
          }
          break;
        case cancionEnLista === 0:
          inicia = false;
          break;
      }
    }
  } //Cierre if agrega === true
}
//----------------------------------------------
const listarMiLista = () => {
  cancionArray = [];
  let i = 0;
  for(cancion of arrayListaNva){
     cancionArray[i] = `${i+1} ${cancion.nombre} ${cancion.genero} ${cancion.artista} \n`;
    i++;
    }
  alert(`Las canciones de MI LISTA SON: 
        ${cancionArray}`);
}
//-----------------------------------------------
const eliminaDeMiLista = () => {
  let cancionIngresada = prompt(`Ingrese Nombre de la cancion que desea Borrar`);
  const resultado = arrayListaNva.find(can => can.nombre === cancionIngresada);
  if(resultado === undefined){
    console.log(`No existe esa canción`);
  }else{
    let indice = arrayListaNva.findIndex(can => can.nombre === cancionIngresada);
    //alert(indice);
    arrayListaNva.splice(indice, 1);
    listarMiLista();
  }
}
//-----------------------------------------------
let sesion = true;
while (sesion) {
  let opciones = Number(prompt(`#####Ingrese una opción#####
                        1) Listar Las canciones Cargadas en la Biblioteca
                        2) Buscar una Canción por Nombre
                        3) Buscar una canción por Género o Artista
                        4) Agregar una cancion a la Biblioteca
                        5) Borrar una canción
                        6) Agregar Canciones a la Lista de Reproducción
                        7) Listar Mi Lista de Reproducción
                        8) Eliminar cancion de mi Lista
                        
                        PRESIONE "0" O ENTER PARA SALIR DEL MENU`));

  switch (opciones) {
    case 0:
      alert(`El sistema se cerró correctamente`);
      sesion = false;
      break;
    case 1:
      listarCanciones();
      break;
    case 2:
      buscarCancionPorNombre();
      break;
    case 3:
      buscarCancionPorGeneroArtista();
      break;
    case 4:
      AgregarCancionALista();
      break;
    case 5:
      BorrarCancion();
      break;
    case 6:
      let agrega = true;
      agregarCancionALista(agrega);
      break;
    case 7:
      listarMiLista();
      break;
    case 8:
      eliminaDeMiLista();
      break;
    default:
      alert(`Seleccione una opción Válida`);
      break;
  } //cierre Switch
} //Cierre while


