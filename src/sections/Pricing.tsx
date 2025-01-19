"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Check from "@/assets/check.svg";
const pricingTiers = [
  {
    title: "Essential",
    monthlyPrice: 29,
    buttonText: "Choose Essential",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "5GB cloud storage",
      "Basic integrations",
      "Priority email support",
    ],
  },
  {
    title: "Professional",
    monthlyPrice: 79,
    buttonText: "Choose Professional",
    popular: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "100GB cloud storage",
      "Advanced integrations",
      "24/7 phone and email support",
      "Advanced analytics",
      "Custom branding options",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 199,
    buttonText: "Contact Sales",
    features: [
      "Unlimited project members",
      "Unlimited tasks and projects",
      "Unlimited cloud storage",
      "Custom integrations",
      "Dedicated account manager",
      "On-site training and support",
      "Advanced security features",
      "Custom contract terms",
    ],
  },
];

export const Pricing = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={containerRef}>
      <motion.div className="max-w-7xl mx-auto" style={{ opacity, scale }}>
        <h2 className="description mb-4">Choose Your Plan</h2>
        <p className="title max-w-4xl mx-auto py-10">
          Elevate your productivity with our tailored pricing options. Select
          the plan that aligns with your ambitions and watch your projects soar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingTiers.map(
            ({ title, monthlyPrice, buttonText, popular, features }) => (
              <div
                key={title}
                className={`p-8 rounded-none flex flex-col h-full border ${
                  popular ? "border-gray-900" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-2xl font-serif font-bold mb-2 ${
                    popular ? "text-gray-900" : "text-gray-700"
                  }`}
                >
                  {title}
                </h3>
                {popular && (
                  <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 uppercase mb-4 inline-block">
                    Most Popular
                  </span>
                )}
                <div className="flex items-baseline gap-2 mb-6">
                  <span
                    className={`text-5xl font-serif font-bold ${
                      popular ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    ${monthlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="flex-grow mb-8 space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 ${
                          popular ? "text-gray-900" : "text-gray-500"
                        }`}
                      />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`px-6 py-3 font-medium text-center w-full transition-colors duration-300 ${
                    popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-gray-900 border border-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};
