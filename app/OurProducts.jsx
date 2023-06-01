"use client";

import ourProducts from "./OurProducts/ourProducts.js";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import productStyle from "../styles/home/ourProducts.module.scss";

export const OurProducts = () => {
  return (
    <section className={productStyle.products__container}>
      <h4>¿Qué fabricamos?</h4>

      <div className={productStyle.accordion__placer}>
        <Accordion className={productStyle.accordion__container}>
          {ourProducts.map((prod) => (
            <AccordionItem
              key={prod.id}
              className={productStyle.accordion__item}
            >
              <AccordionItemHeading>
                <AccordionItemButton className={productStyle.accordion__title}>
                  {prod.category}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={productStyle.accordion__panel}>
                {prod.products.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
