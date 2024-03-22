import { cn } from "../utils/utils";
import { SectionDescription } from "./SectionDescription";
import { SectionIntro } from "./SectionIntro";
import { SectionTitle } from "./SectionTitle";
import { FAQItem } from "./FAQItem";

interface Props {
  className?: string
}
export const FAQs = ({className}: Props) => {
  const classes = cn("FAQs relative gap-16 grid auto-rows-min grid-cols-1 w-full scroll-mt-header mx-auto overflow-hidden", className);

  const items = [
    {
      title: "How does SUB1 achieve cooling efficiency?",
      description: "Free-air and evaporative cooling systems consume less power than compressor-based alternatives. The power required for cooling is primarily generated onsite by solar PV."
    },
    {
      title: "How does this efficiency aid SUB1 customers?",
      description: "Reducing the amount of electricity used leads to a lower overall cost. In fact, the total cost of ownership for a 2MW deployment is approximately half the cost of retail colocation with metered power."
    }, 
    {
      title: "What are the benefits of using brownfield sites?",
      description: "Without planning and initial build phases, data centre capacity will be available more quickly. Leveraging existing power capacity also means quicker completion times and less impact to other developments, such as housing."
    },
    {
      title: "Are these sites available to lease or buy?",
      description: "Both options are available. A customer can take either a long term lease or purchase a site, subject to what best meets their requirement."
    },
    {
      title: "What's being done to reduce the environmental impact?",
      description: "In addition to less electricity consumed and greenfield used, HVO, as opposed to diesel, fuels the back-up generators, to reduce carbon emissions under normal operation."
    }
  ]

  return (
    <div className={classes}>
      

      <div className=" grid grid-cols-1 gap-y-10 xs:mt-16 lg:grid-cols-2 md:gap-x-6 xl:gap-x-10">
        {
          items.map((faqItem) => {
            return (
              <FAQItem title={faqItem.title} description={faqItem.description} />
            )
          })
        }
      </div>

    </div>
  )
}