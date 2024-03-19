import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/utils";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";
import { Card } from "./Card";

interface Props {
  className?: string,
  solarIcon?: ReactNode,
  settingsIcon?: ReactNode,
  recycleIcon?: ReactNode
}

export const About = ({className, solarIcon, settingsIcon, recycleIcon}: Props) => {
  const title = "Single-Tenant Data Centres";
  const subtitle = "Cost Efficient, Resilient & Secure";
  const description = ["New or fully refurbished hyper-efficient data centres, with low cooling requirements, onsite power generation and direct utility procurement."];

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

  const classes = cn("ABOUT relative py-section-sm gap-16 grid auto-rows-min grid-cols-1 w-full scroll-mt-header mx-auto overflow-hidden", className);

  return (
    <div className={classes} id="about">
      <SectionIntro className="">
        <SectionSubtitle subtitle={subtitle} />
        <SectionTitle className="text-primaryDark" title={title} />
        <SectionDescription description={description} />
      </SectionIntro>
      <div className="cards grid gap-16">
        {
          cards.map(card => {
            return <Card key={card.id} cardTitle={card.cardTitle} cardDescription={card.cardDescription} cardImage={card.cardImage} />
          })
        }
      </div>
    </div>
  )
}
