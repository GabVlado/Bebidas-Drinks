import React , {useState, useContext} from 'react';
import { CategoriasContext } from '../../context/CategoriasContext';
import { RecetasContext } from '../../context/RecetasContext';




const Formulario = () => {



  const [busqueda, guardarBusqueda] = useState({
    nombre:  '',
    categoria: ''
  })

  const {categorias} = useContext(CategoriasContext)
  const { buscarRecetas } = useContext(RecetasContext)

 //funcion para leer los contenidos 
 const obtenerDatosReceta = e => {
   guardarBusqueda({
     ...busqueda,
     [e.target.name]:[e.target.value]
   })
 }


  return (
    <form
      className= "col-12"
      onSubmit={ e => {
        e.preventDefault();
        buscarRecetas(busqueda)
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por  categoría o Ingrediente</legend>
      </fieldset>
      <div className="flex  flex-wrap items-center justify-center mt-4 ">
        <div className="w-full sm:w-1/3 ">
            <input 
              type="text" 
              name="nombre"
              className="focus:outline-none rounded-md p-2 w-full   "
              placeholder="Buscar por Ingrediente"
              onChange={obtenerDatosReceta}
            />
        </div>

        <div className="">
            <select
              className=" focus:outline-none   bg-white  m-4 rounded-md p-2"
              name="categoria"
              onChange={obtenerDatosReceta}
            >
                <option value="">--Selecciona categoria --</option> 
                {categorias.map(categoria => (
                  <option 
                    className=""
                    value={categoria.strCategory} 
                    key={categoria.strCategory}
                  >
                    {categoria.strCategory}
                  </option>
                ))}
              
            </select>
        </div>
        

        <div>
          <button
            type="submit"
            className="p-2 | bg-red-400 rounded-md | text-white"
            value=""
          >
            Buscar Recetas
          </button>
        </div>




      </div>
    </form>
  )
}

export default Formulario
