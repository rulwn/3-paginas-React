import React, { useState } from "react";
import { InputField } from "../assets/InputField";
import { Button } from "../assets/Buttons";
import Todo from "../Todo"; // Asegúrate de que la ruta sea correcta
import "../Todo.css"; // Importa los estilos del Todo

function App() {
  const [activeComponent, setActiveComponent] = useState("calculator");

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="bg-dark text-white p-4 rounded shadow" style={{ maxWidth: "800px", width: "100%" }}>
        <div className="text-center mb-4">
          <h2>Mi Aplicación</h2>
          <div className="d-flex justify-content-center gap-3">
            <Button 
              text="Calculadora" 
              onClick={() => setActiveComponent("calculator")}
              className={activeComponent === "calculator" ? "active" : ""}
            />
            <Button 
              text="Todo List" 
              onClick={() => setActiveComponent("todo")}
              className={activeComponent === "todo" ? "active" : ""}
            />
          </div>
        </div>

        {activeComponent === "calculator" ? <Calculator /> : <Todo />}
      </div>
    </div>
  );
}

// Mueve tu componente Calculadora aquí dentro del mismo archivo
function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");
  const [error, setError] = useState("");

  const validarEntradas = () => {
    setError("");
    if (num1 === "" || num2 === "") {
      setError("Por favor ingrese ambos números");
      return false;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setError("Ingrese números válidos");
      return false;
    }
    return { n1, n2 };
  };

  const handleOperacion = (operacion) => {
    const valores = validarEntradas();
    if (!valores) return;

    const { n1, n2 } = valores;
    let resultadoOperacion = "";

    switch (operacion) {
      case "sumar":
        resultadoOperacion = `Resultado: ${n1 + n2}`;
        break;
      case "restar":
        resultadoOperacion = `Resultado: ${n1 - n2}`;
        break;
      case "multiplicar":
        resultadoOperacion = `Resultado: ${n1 * n2}`;
        break;
      case "dividir":
        if (n2 === 0) {
          setError("No se puede dividir por cero");
          return;
        }
        resultadoOperacion = `Resultado: ${n1 / n2}`;
        break;
      default:
        return;
    }
    setResultado(resultadoOperacion);
  };

  const handleLimpiar = () => {
    setNum1("");
    setNum2("");
    setResultado("");
    setError("");
  };

  return (
    <div className="row g-3 mt-3 d-flex flex-column align-items-center">
      <div className="col-12 w-100">
        <InputField placeholder="Ingrese el primer número" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </div>
      <div className="col-12 w-100">
        <InputField placeholder="Ingrese el segundo número" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>
      <div className="col-12 text-center">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          <Button text="Sumar" onClick={() => handleOperacion("sumar")} />
          <Button text="Restar" onClick={() => handleOperacion("restar")} />
          <Button text="Multiplicar" onClick={() => handleOperacion("multiplicar")} />
          <Button text="Dividir" onClick={() => handleOperacion("dividir")} />
          <Button text="Limpiar" onClick={handleLimpiar} />
        </div>
      </div>
      {error && <div className="mt-3 p-2 bg-danger text-white rounded text-center">{error}</div>}
      {resultado && !error && <div className="mt-3 p-2 bg-success text-white rounded text-center">{resultado}</div>}
    </div>
  );
}

export default App;
