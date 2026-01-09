import axios from "axios";
import { useEffect, useState } from "react";
import type { Empleado } from "../modelos/Empleado";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export default function ListadoEmpleados() {
  const urlBase = import.meta.env.VITE_API_URL;

  const [empleados, setEmpleados] = useState<Empleado[]>([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get(urlBase);
      console.log("Resultado de cargar empleados");
      console.log(resultado.data);
      setEmpleados(resultado.data);
    } catch (error) {
      console.log("Error al cargar los empleados", error);
    }
  };

  const eliminarEmpleado = async (idEmpleado: number) => {
    try {
      await axios.delete(`${urlBase}/${idEmpleado}`);
      console.log("Empleado eliminado");
      cargarEmpleados();
    } catch (error) {
      console.log("Error al eliminar el empleado", error);
    }
  };

  return (
    <div className="container">
      <div className="container text-center mt-3 mb-3">
        <h3>Sistema de Recursos Humanos</h3>
      </div>
      <table className="table table-striped table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Empleado</th>
            <th scope="col">Departamento</th>
            <th scope="col">Sueldo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            // Iterar el array de empleados
            empleados.map((empleado: Empleado) => (
              <tr key={empleado.idEmpleado}>
                <th scope="row">{empleado.idEmpleado}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.departamento}</td>
                <td>
                  <NumericFormat
                    value={empleado.sueldo}
                    displayType={"text"}
                    thousandSeparator=","
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale
                  />
                </td>
                <td className="text-center">
                  <Link
                    to={`/editar/${empleado.idEmpleado}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => {
                      if (empleado.idEmpleado !== undefined) {
                        eliminarEmpleado(empleado.idEmpleado);
                      }
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
