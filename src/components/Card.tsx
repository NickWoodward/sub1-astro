import type { ReactNode } from "react";

export interface CardType {
  cardTitle: string,
  cardDescription: string,
  cardImage: ReactNode,
}

export const Card = ({cardTitle, cardDescription, cardImage}: CardType) => {
  return <div>
    <div>{cardTitle}</div>
    <div>{cardDescription}</div>
    <div>{cardImage}</div>
  </div>
};