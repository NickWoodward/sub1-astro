import type { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/utils";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";
import { Card } from "./Card";

interface Props {
  className?: string,
  cardImage?: ReactNode,
}

export const About = ({className, cardImage}: Props) => {
  const title = "Single-Tenant Data Centres";
  const subtitle = "Cost Efficient, Resilient & Secure";
  const description = "New or fully refurbished hyper-efficient data centres, with low cooling requirements, onsite power generation and direct utility procurement.";

  const cards = [
    {
      id: 1,
      cardImage: cardImage,
      cardTitle: "Onsite Generation",
      cardDescription: "The reduced mechanical load leverages renewable energy generated onsite"
    },
    {
      id: 2,
      cardImage: cardImage,
      cardTitle: "No Compressors",
      cardDescription: "Compressorless cooling via evaporative free-air system, with active hot and cold-aisle containment"
    },
    {
      id: 3,
      cardImage: cardImage,
      cardTitle: "No Fossil Fuels",
      cardDescription: "Resilient and sustainable back-up generator sets, 100% powered by HVO"
    },
  ];

  const classes = cn("relative py-section-sm gap-8 grid auto-rows-min grid-cols-1 w-full scroll-mt-header mx-auto overflow-hidden", className);

  return (
    <div className={classes} id="about">
      <SectionIntro className="">
        <SectionSubtitle subtitle={subtitle} />
        <SectionTitle title={title} />
        <SectionDescription description={description} />
      </SectionIntro>
      {
        cards.map(card => {
          return <Card key={card.id} cardTitle={card.cardTitle} cardDescription={card.cardDescription} cardImage={card.cardImage} />
        })
      }
    </div>
  )
}

//     <div class="relative mx-auto max-w-xl px-4 xxs:px-8  md:max-w-2xl lg:max-w-6xl xl:max-w-[1400px] lg:px-8 xl:px-0">
//       <div class="">
//         <h2 class="strapline text-lg font-semibold text-primary">${this.subtitle}</h2>

//         <!--<h2 class="strapline text-lg font-semibold text-primary">Efficient Power and Cooling Solutions</h2>-->

//         <p class="headline mt-2 text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-700">${this.title}</p>

//         <p class="description mt-5 max-w-prose text-xl text-gray-500">${this.content}</p>
//       </div>
//       <div class="mt-20">
//         <div class="grid grid-cols-1 gap-8 xl:gap-12 lg:grid-cols-3">

//           <div class="card pt-6">
//             <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
//               <div class="-mt-6">
//                 <div class="card__icon  flex justify-between items-center ">
//                   <img src=${icon3} alt="A sun and solar panel" class="w-28 sm:w-32 -translate-x-4" />
//                   <a href="" class="flex  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
//                     <div class=" flex justify-end gap-2">
//                       <div class="hidden sm:flex lg:hidden">Find Out More</div>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//                 <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">Onsite Generation</h3>
//                 <p class="card__description mt-2 text-lg leading-7 text-gray-600">${this.card1}</p>
//               </div>
//             </div>
//           </div>

//           <div class="card pt-6">
//             <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
//               <div class="-mt-6">
//                 <div class="card__icon flex justify-between items-center">
//                   <img src=${icon2} alt="A water droplet and 2 cogs" class="w-28 sm:w-32 -translate-x-4" />
//                   <a class="flex grow  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
//                     <div class=" flex justify-between gap-2">
//                       <div class="hidden sm:flex lg:hidden">Find Out More</div>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//                 <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Compressors</h3>
//                 <p class="card__description mt-2 text-lg leading-7 text-gray-600">
//                   ${this.card2}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="card pt-6">
//             <div class="flow-root  lg:min-h-[330px] shadow-sm rounded-lg bg-gray-50 px-10 pb-12">
//               <div class="-mt-6">
//                 <div class="card__icon flex justify-between items-center">
//                   <img src=${icon1} alt="The earth with 2 arrows wrapping around it" class="w-28 sm:w-32 -translate-x-4" />
//                   <a class="flex grow  items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
//                     <div class=" flex justify-between gap-2">
//                       <div class="hidden sm:flex lg:hidden">Find Out More</div>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="w-4 h-4" viewBox="0 0 24 24"  stroke="currentColor" >
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>
//                 <h3 class="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-slate-700">No Fossil Fuels</h3>
//                 <p class="card__description mt-2 text-lg leading-7 text-gray-600">
//                   ${this.card3}
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   </div>
