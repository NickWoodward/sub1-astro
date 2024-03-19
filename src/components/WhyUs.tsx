import type { ReactNode } from "react";
import { cn } from "../utils/utils";
import { Button } from "./Button";
import { SectionDescription } from "./SectionDescription";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";

interface Props {
  className?: string;
  children?: ReactNode
}

export const WhyUs = ({className, children}: Props) => {
  const title = "Why SUB1?";
  const content = "SUB1 creates hyper-efficient data centres for single tenant occupancy. Tenants pay for power directly with utility providers, resulting in a total cost of ownership (TCO) of around half, compared to large colo deployments with metered power.";
  const content2 = "Each site is selected based on power availability and carrier density. SUB1 has a variety of sites available, to suit various requirements.";

  const description = [content, content2];

  const classes = cn("WHY_US relative py-section-sm gap-16 grid auto-rows-min grid-cols-1 w-full scroll-mt-header mx-auto overflow-hidden", className);
  return (
    <div className={classes}>
      <SectionIntro className="">
        <SectionTitle className="text-primaryDark" title={title} />
        <SectionDescription className="text-white" description={description} />
      </SectionIntro>

      <Button className="py-3 px-6 text-base font-semibold" intent="gray" rounded size="md">Find Out More</Button>
    </div>
  )
}