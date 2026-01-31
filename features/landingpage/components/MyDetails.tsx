import React from 'react'
import {
  AnimatedNumber_002,
  AnimatedNumber_003,

} from '@/components/ui/skiper-ui/skiper37'

import { cormorant_garamond, geist, inter, pacifico, playfair_Display, poppins, yatraOne } from '@/lib/fonts'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import CardFlip from '@/components/kokonutui/card-flip'
import ShimmerText from '@/components/kokonutui/shimmer-text'
const MyDetails = () => {
  const data = [
    {
      title: "10th Percentage",
      subtitle: "Class X Board Exams",
      value: 100,
      numberIn: 100,
      emptyRgba: "rgba(255, 99, 132, 0.5)",
      halfRgba: "rgba(255, 99, 132, 0.5)",
      fullRgba: "rgba(255, 99, 132, 0)",
      features: ["Corona pass", "Pedda chesindhi em la but it's something"]
    },
    {
      title: "12th Percentage",
      subtitle: "Class XII Board Exams",
      value: 94,
      numberIn: 100,
      emptyRgba: "rgba(255, 159, 64, 0.5)",
      halfRgba: "rgba(255, 159, 64, 0.5)",
      fullRgba: "rgba(255, 159, 64, 0)",
      features: ["First time in hostel", "okkodu okko animuthyam"]

    },
    {
      title: "College CGPA",
      subtitle: "Current Academic Score",
      value: 9.32,
      numberIn: 10,
      emptyRgba: "rgba(255, 205, 86, 0.5)",
      halfRgba: "rgba(255, 205, 86, 0.5)",
      fullRgba: "rgba(255, 205, 86, 0)",
      features: ["Still Alive", "Lets what happens next -Stay Tuned"]
    },
    {
      title: "Skills Learned",
      subtitle: "Technical & other skills",
      value: 3,
      numberIn: 10,
      emptyRgba: "rgba(57, 255, 20, 0.9)  ",
      halfRgba: "rgba(57, 255, 20, 0.9)  ",
      fullRgba: "rgba(57, 255, 20, 0)  ",
      features: ["Programming", "Design", "ai-antha ai daya ", "etc."]
    },
    {
      title: "Projects Completed",
      subtitle: "Personal & academic projects",
      value: 3,
      numberIn: 10,
      emptyRgba: "rgba(153, 102, 255, 0.5)",
      halfRgba: "rgba(153, 102, 255, 0.5)",
      fullRgba: "rgba(153, 102, 255, 0)",
      features: ["Smart select", "Portfolio", "Other projects-other ante other e malla addakku"]
    }

  ]
  return (
    <div

      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}


      className=' pb-15 pt-10'>
      <div className=" flex justify-center flex-col mt-30 mb-15 ">
        <ShimmerText className='  text-6xl' text={"MY STATS"} />
        {/* <ShimmerText className=' text-5xl' text={"THIS YEAR"} /> */}
      </div>
      <div className=' grid grid-cols-3 gap-4'>
        {
          data.map((item, i) => (
            <div key={i} className=' text-white flex flex-col items-center  '>

              {/* <h1 className={` ${geist.className} text-center  font-medium text-5xl`}>{item.title}</h1>
               <AnimatedNumber_003  data={item.value} des={item.numberIn} />
               <SlidingNumber value={10000}/> */}
              <CardFlip description={`${item.value}`} title={item.title} subtitle={item.subtitle} features={item.features} />



            </div>

          ))
        }


      </div>

      {/* <AnimatedNumber_002/> */}
    </div>
  )
}

export default MyDetails
