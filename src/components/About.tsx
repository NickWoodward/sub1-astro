import type { ComponentProps, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "../utils/utils";

import { Card } from "./Card";

interface Props {
  className?: string,
  solarIcon?: ReactNode,
  settingsIcon?: ReactNode,
  recycleIcon?: ReactNode
}

export const About = ({className, solarIcon, settingsIcon, recycleIcon}: Props) => {

  const cards = [
    {
      id: 1,
      cardImage: solarIcon,
      cardTitle: "Onsite Generation",
      cardDescription: "The reduced mechanical load leverages renewable energy generated onsite"
    },
    {
      id: 2,
      cardImage: settingsIcon,
      cardTitle: "No Compressors",
      cardDescription: "Compressorless cooling via evaporative free-air system, with active hot and cold-aisle containment"
    },
    {
      id: 3,
      cardImage: recycleIcon,
      cardTitle: "No Fossil Fuels",
      cardDescription: "Resilient and sustainable back-up generator sets, 100% powered by HVO"
    },
  ];

  useGSAP(() => {
    gsap.to('#text', {
      ease: "power1.inOut",
      opacity:1,
      y: 0
    })
  });

  const classes = cn("ABOUT relative gap-y-16 flex  w-full scroll-mt-header", className);

  return (
    <div className={classes} id="about">

      <div className="cards grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {
          cards.map(card => {
            return <Card key={card.id} cardTitle={card.cardTitle} cardDescription={card.cardDescription} cardImage={card.cardImage} />
          })
        }
      </div>
    </div>
  )
}
