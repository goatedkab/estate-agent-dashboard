import React from "react";
import "./Top.css";
import { cardsData } from "../../Data/Data";

import Card from "./Card/Card";

const Top = () => {
  return (
    <div className="Top">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Top;
