import CheckedIcon from "@/assets/check.svg";

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
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="description">Pricing</h1>
        <p className="title">
        Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>
        <div>
        {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => {
          return (
            <div key={title} className="p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA]">
              <h3 className="text-lg font-bold text-black/50">{title}</h3>
              <div className="flex items-baseline gap-2 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="font-bold text-black/50 tracking-tight">/month</span>
              </div>
              <button className="px-4 py-2 rounded-lg font-medium inline-flex justify-center items-center tracking-tight bg-black text-white h-8 w-full mt-[30px]">{buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature: string) => {
                  return (
                    <li key={feature} className="flex text-sm items-center gap-5">
                      <CheckedIcon className="w-6 h-6"/>
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};
