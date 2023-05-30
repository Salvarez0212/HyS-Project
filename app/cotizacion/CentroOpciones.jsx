import { useState, useEffect } from "react";
import optionStyle from "../../styles/cotizacion/options.module.scss";

export const CentroOpciones = () => {
  const [total, setTotal] = useState(0);
  const [quoteData, setQuoteData] = useState({
    length: 0,
    material: "standard",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;

    setQuoteData({
      ...quoteData,
      [name]: value,
    });
  };
  const { length, material } = quoteData;

  useEffect(() => {
    const lengthValue = Number(length);
    const materialValue = material === "standard" ? 100 : 200;

    const totalToShow = lengthValue * materialValue;

    setTotal(totalToShow);
  }, [length, material]);
  return (
    <section className={optionStyle.options__container}>
      <div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="length">
            1. Ingresa la longitud en centimetros:{" "}
          </label>
          <input
            id="length"
            name="length"
            type="number"
            placeholder="100"
            className={optionStyle.input}
            onChange={handleInput}
          />
        </div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="material">2. Selecciona el tipo de material: </label>
          <select name="material" id="material" onChange={handleInput}>
            <option value="standard">Estandar</option>
            <option value="highgloss">HighGloss (Brillante)</option>
          </select>
        </div>
      </div>

      <div className={optionStyle.total__container}>
        <h4>Total: ${total.toLocaleString("es-ES")}</h4>
      </div>
    </section>
  );
};
