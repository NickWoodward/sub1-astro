import type { ReactNode } from "react";
import { cn } from "../utils/utils";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";
import { Card } from "./Card";
import { Map } from "./Map";

interface Props {
  className?: string,
  solarIcon?: ReactNode,
  settingsIcon?: ReactNode,
  recycleIcon?: ReactNode
}

export const DataCenters = ({className, solarIcon, settingsIcon, recycleIcon}: Props) => {
  const title = "Current Data Center Developments";
  const subtitle = "Capacity Available for Lease or Purchase";
  const description = ["SUB1 have multiple developments at various stages of completion. Brownfield projects provide capacity much quicker than traditional design and build data centres. Please contact us to find out more about future developments. Below are developments that have capacity or are close to completion:"];

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
  ];

  const classes = cn("DATACENTERS relative py-section-sm gap-16 grid auto-rows-min grid-cols-1 w-full scroll-mt-header mx-auto overflow-hidden", className);

  return (
    <div className={classes} id="datacenters">
      <Map location="Harlow" />
      <SectionIntro className="">
        <SectionSubtitle subtitle={subtitle} />
        <SectionTitle className="text-primaryDark" title={title} />
        <SectionDescription className="space-y-2">
          <p>
          SUB1 have multiple developments at various stages of completion. Brownfield projects provide capacity much quicker than traditional design and build data centres. Please contact us to find out more about future developments.</p> 
          <p>Below are developments that have capacity or are close to completion:
          </p>
        </SectionDescription>
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
