import React from "react";
import { ContextoGlobal } from "./hooks/CountContext";

function Count() {
  const contexto = React.useContext(ContextoGlobal);
  return (
    <div className="ml-5 text-8xl">
      <p>{contexto.contar}</p>
      <button
        onClick={contexto.aumentarContar}
        className="py-2 px-4 ml-4 bg-purple-400"
      >
        + 1{" "}
      </button>
      <button
        onClick={contexto.diminuirContar}
        className="py-2 px-4 ml-4 bg-purple-400"
      >
        - 1{" "}
      </button>
      <button
        onClick={contexto.limparContar}
        className="py-2 px-4 ml-4 bg-purple-400"
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default Count;
