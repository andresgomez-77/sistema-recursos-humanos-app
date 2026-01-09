import { HashRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import NavBar from "./plantilla/NavBar";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import EditarEmpleado from "./empleados/EditarEmpleado";
// usar browser router para usar con el backend cambiar el hashrouter por browserrouter
function App() {
  return (
    <>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ListadoEmpleados />} />
          <Route path="/agregar" element={<AgregarEmpleado />} />
          <Route path="/editar/:idEmpleado" element={<EditarEmpleado />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
