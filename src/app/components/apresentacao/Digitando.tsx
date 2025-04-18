"use client"
import { useState, useEffect } from "react";

export default function TypedText() {
  const texto = "< Transformando idéias em código, e código em experiências incríveis! />";
  const [textoExibido, setTextoExibido] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setTextoExibido((prev) => prev + texto[index]);
        setIndex(index + 1);
      }, 100); 

      return () => clearTimeout(timeout); 
    }
  }, [index, texto]);

  return (
    <h1 className="text-3xl text-black font-minhaFonte text-center md:text-left break-words max-w-md">{textoExibido}</h1>
  );
}
