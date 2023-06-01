import { useState, useEffect } from "react";
import optionStyle from "../../styles/cotizacion/options.module.scss";

export const ClosetOpciones = () => {
  const [total, setTotal] = useState(0);
  const [quoteData, setQuoteData] = useState({
    type: "vestier",
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
  const { type, length, material } = quoteData;

  useEffect(() => {
    const typeValue = type === "vestier" ? 6500 : 10000;
    const lengthValue = Number(length);
    const materialValue = material === "standard" ? 1 : 1.34;

    const totalToShow = typeValue * lengthValue * materialValue;

    setTotal(totalToShow);
  }, [type, length, material]);
  return (
    <section className={optionStyle.options__container}>
      <div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="type">1. Selecciona el tipo de mueble:</label>
          <select name="type" onChange={handleInput}>
            <option value="vestier">Vestier</option>
            <option value="closet">Closet</option>
          </select>
        </div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="length">
            2. Ingresa la longitud en centimetros:{" "}
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
          <label htmlFor="material">3. Selecciona el tipo de material: </label>
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
