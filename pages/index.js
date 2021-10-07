import Formulario from "../components/HomePage/Formulario";
import Header from "../components/HomePage/Header";
import CategoriasProvider from "../context/CategoriasContext";
import RecetasProvider from "../context/RecetasContext";


export default function Home() {
  return (
    <CategoriasProvider>
      <RecetasProvider>

      <div>
        <div  className="flex justify-center items-center | bg-red-500 h-40 ">
          <Header/>
        </div>
        <div className="m-5">
          <Formulario/>
        </div>
      </div>
      </RecetasProvider>
    </CategoriasProvider>


  )
}
