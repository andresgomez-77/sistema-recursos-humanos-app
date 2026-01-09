import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import NavBar from "./plantilla/NavBar";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListadoEmpleados />} />
          <Route path="/agregar" element={<AgregarEmpleado />} />
          <Route path="/editar/:idEmpleado" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
