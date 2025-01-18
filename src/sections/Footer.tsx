import Image from "next/image";
import Logo from "@/assets/logosaas.png"
import SocialX from "@/assets/social-x.svg"
import SocialLinkedIn from "@/assets/social-linkedin.svg"
import SocialInsta from "@/assets/social-insta.svg"
import SocialYT from "@/assets/social-youtube.svg"
import SocialPin from "@/assets/social-pin.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F87BFF] via-[#FB92CF] to-[#2FD8FE] blur opacity-75 rounded-full"></div>
              <Image src={Logo || "/placeholder.svg"} height={70} width={70} alt="SaaS Logo" className="relative rounded-lg" />
            </div>
            <p className="text-sm text-center md:text-left max-w-xs mx-auto md:mx-0">
              Empowering your digital journey with innovative SaaS solutions.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm mb-8 md:mb-0">
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Customers</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Help</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Careers</a>
          </nav>
          <div className="flex space-x-4">
            <SocialIcon Icon={SocialInsta} />
            <SocialIcon Icon={SocialLinkedIn} />
            <SocialIcon Icon={SocialX} />
            <SocialIcon Icon={SocialPin} />
            <SocialIcon Icon={SocialYT} />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }) => (
  <a href="#" className="text-[#BCBCBC] hover:text-white transition-colors duration-300">
    <Icon className="w-6 h-6" />
  </a>
);

