import React from "react";
import { InputField } from "./assets/InputField";
import { Button } from "./assets/Buttons";


function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-6 text-center mx-auto">
        <h2 className="text-2xl font-bold text-gray-700">Calculadora</h2>
        
        <InputField placeholder="Ingrese el primer número" />
        <InputField placeholder="Ingrese el segundo número" />
        
        <Button text="Calcular" />
      </div>
    </div>
  );
}

export default App;

