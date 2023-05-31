import { useState, useEffect } from "react";
import optionStyle from "../../styles/cotizacion/options.module.scss";

export const BanoOpciones = () => {
  const [total, setTotal] = useState(0);
  const [quoteData, setQuoteData] = useState({
    type: "empotrado",
    length: 0,
    material: "standard",
    meson: "quartstone",
    superior: false,
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    setQuoteData({
      ...quoteData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const { type, length, material, meson, superior } = quoteData;

  useEffect(() => {
    if (type === "empotrado") {
      setQuoteData((prevData) => ({ ...prevData, meson: 0 }));
    }

    const typeValue = 7500;
    const lengthValue = Number(length);
    const materialValue = material === "standard" ? 1 : 1.34;
    const mesonValue = meson
      ? meson === "quartstone"
        ? 6900
        : meson === "granite"
        ? 6900
        : 27000
      : 0;
    const superiorValue = superior ? 200000 : 0;

    const totalToShow =
      typeValue * lengthValue * materialValue +
      mesonValue * lengthValue +
      superiorValue;

    setTotal(totalToShow);
  }, [type, length, material, meson, superior]);
  return (
    <section className={optionStyle.options__container}>
      <div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="type">1. Selecciona el tipo de mueble:</label>
          <select name="type" onChange={handleInput}>
            <option value="empotrado">Empotrado</option>
            <option value="sobreponer">Sobreponer</option>
          </select>
        </div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="meson">2. Selecciona el tipo de pidra: </label>
          <select
            name="meson"
            id="meson"
            onChange={handleInput}
            disabled={type === "empotrado" ? true : false}
          >
            <option value="quartstone">Quartstone</option>
            <option value="granite">Granito natural</option>
            <option value="sintered">Sinterizado</option>
          </select>
        </div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="length">
            3. Ingresa la longitud en centimetros:{" "}
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
          <label htmlFor="material">4. Selecciona el tipo de material: </label>
          <select name="material" id="material" onChange={handleInput}>
            <option value="standard">Estandar</option>
            <option value="highgloss">HighGloss (Brillante)</option>
          </select>
        </div>
      </div>
      <div className={optionStyle.second__options}>
        <div className={optionStyle.check__container}>
          <label htmlFor="superior">5. Con mueble superior? </label>
          <input
            type="checkbox"
            name="superior"
            id="superior"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className={optionStyle.total__container}>
        <h4>Total: ${total.toLocaleString("es-ES")}</h4>
      </div>
    </section>
  );
};
