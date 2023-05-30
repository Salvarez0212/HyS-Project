"use client";
import { useEffect, useState } from "react";
import optionStyle from "../../styles/cotizacion/options.module.scss";

export const CocinaOpciones = () => {
  const [total, setTotal] = useState(0);
  const [quoteData, setQuoteData] = useState({
    type: "lineal",
    length: 0,
    material: "standard",
    meson: "steel",
    tower: false,
    bar: false,
    island: false,
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;

    setQuoteData({
      ...quoteData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const { type, length, material, meson, tower, bar, island } = quoteData;

  useEffect(() => {
    const typeValue = type === "lineal" ? 100 : 200;
    const lengthValue = Number(length);
    const materialValue = material === "standard" ? 100 : 200;
    const mesonValue =
      meson === "steel"
        ? 100
        : meson === "quartstone"
        ? 200
        : meson === "granite"
        ? 300
        : 400;
    const towerValue = tower ? 100 : 0;
    const barValue = bar ? 100 : 0;
    const islandValue = island ? 100 : 0;

    const totalToShow =
      typeValue * lengthValue +
      materialValue +
      mesonValue * lengthValue +
      towerValue +
      barValue +
      islandValue;

    setTotal(totalToShow);
  }, [type, length, material, meson, tower, bar, island]);

  return (
    <section className={optionStyle.options__container}>
      <div>
        <div className={optionStyle.inputs__container}>
          <label htmlFor="type">1. Selecciona el tipo de cocina:</label>
          <select name="type" onChange={handleInput}>
            <option value="lineal">Lineal</option>
            <option value="L">En L</option>
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
        <div className={optionStyle.inputs__container}>
          <label htmlFor="meson">4. Selecciona el tipo de mesón: </label>
          <select name="meson" id="meson" onChange={handleInput}>
            <option value="steel">Acero inoxidable</option>
            <option value="quartstone">Quartstone</option>
            <option value="granite">Granito natural</option>
            <option value="sintered">Sinterizado</option>
          </select>
        </div>
      </div>
      <div className={optionStyle.second__options}>
        <div className={optionStyle.check__container}>
          <label htmlFor="tower">5. Con torre? </label>
          <input
            type="checkbox"
            name="tower"
            id="tower"
            onChange={handleInput}
          />
        </div>
        <div className={optionStyle.check__container}>
          <label htmlFor="tower">6. Con barra? </label>
          <input type="checkbox" name="bar" id="bar" onChange={handleInput} />
        </div>
        <div className={optionStyle.check__container}>
          <label htmlFor="island">7. Con isla? </label>
          <input
            type="checkbox"
            name="island"
            id="island"
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
