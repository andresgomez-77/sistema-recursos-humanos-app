import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Empleado } from "../modelos/Empleado";

export default function AgregarEmpleado() {
  const [empleado, setEmpleado] = useState<Empleado>({
    nombre: "",
    departamento: "",
    sueldo: 0,
  });
  const { nombre, departamento, sueldo } = empleado;
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // spread operador ... (expandir los atributos)
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };
  let navegacion = useNavigate();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlBase = import.meta.env.VITE_API_URL;
    await axios.post(urlBase, empleado);
    // Redirigir a la lista de empleados después de agregar
    navegacion("/");
  };
  return (
    <div className="container">
      <div className="container text-center mt-3 mb-3">
        <h3>Agregar Empleado</h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            value={departamento}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="number"
            step="any"
            className="form-control"
            id="sueldo"
            name="sueldo"
            value={sueldo}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-sm md-3">
            Agregar
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => navegacion("/")}
          >
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
}
