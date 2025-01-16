"use client"

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import CheckedIcon from "@/assets/check.svg"

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false })

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
}

export const Pricing = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="description my-5">Pricing</h1>
        <p className="title p-10">
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
      {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <MotionDiv
              key={title}
              variants={itemVariants}
              className={`p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] flex flex-col h-fit self-end ${
                inverse ? "bg-black/90 text-white" : "bg-white"
              }`}
            >
              <h3 className={`text-lg font-bold ${inverse ? "text-white" : "text-gray-500"}`}>{title}</h3>
              {popular && (
                <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase mt-2 inline-block">
                  Most Popular
                </span>
              )}
              <div className="flex items-baseline gap-2 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className={`font-bold tracking-tight ${inverse ? "text-gray-200" : "text-gray-500"}`}>/month</span>
              </div>
              <ul className="flex flex-col gap-5 my-8 flex-grow">
                {features.map((feature: string) => (
                  <li key={feature} className="flex text-sm items-center gap-5">
                    <CheckedIcon className={`w-6 h-6 ${inverse ? "text-green-300" : "text-green-500"}`}/>
                    <span className={inverse ? "text-gray-100" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight text-white w-full mt-auto transition-colors duration-300 ${
                inverse ? "bg-white text-black hover:bg-transparent hover:text-white" : "bg-black hover:bg-gray-900"
              }`}>
                {buttonText}
              </button>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}

