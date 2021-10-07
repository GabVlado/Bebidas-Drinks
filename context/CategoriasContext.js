import { createContext , useState, useEffect } from 'react';

//Crear context

export const CategoriasContext =  createContext();


//Provider

const CategoriasProvider  = ( props ) =>{ 
  
  //crear el state del context
  const  [categorias, guardarCategorias ] = useState([]);


  // Ejecutar el llamado de la api

  useEffect(() => {
    const obtenerCategorias  = async () =>{

      const response =  await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      //console.log(response);
      const categorias = await response.json();
      //console.log(categorias.drinks);


      guardarCategorias(categorias.drinks)
    }
    obtenerCategorias();

  }, [])




  return (
     <CategoriasContext.Provider
      value = {{categorias}}
     >

       {props.children}
     </CategoriasContext.Provider>
  )
} 

export default CategoriasProvider;