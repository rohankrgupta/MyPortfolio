import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

type ExperienceProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  description: string[];
  location: string;
  positionName: string;
  dateOfExperience: string;
  backgroundColor: string;
  companyName: string;
};

const inter = Inter({ subsets: ["latin"] });

const Experience = ({
  imageSrc,
  imageAlt,
  description,
  positionName,
  backgroundColor,
  location,
  dateOfExperience,
  companyName,
}: ExperienceProps) => {
  return (
    <div
      className={`w-full bg-[${backgroundColor}] p-6 md:p-10 flex flex-col md:flex-row justify-center rounded-lg mb-4 md:mb-1`}
    >
      <div className="flex justify-center md:w-[25%] mb-4 md:mb-0">
        <div className="w-36 h-36 aspect-square flex p-6 bg-white rounded items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg items-center"
          />
        </div>
      </div>
      <div className="flex flex-col md:w-[75%]">
        <div className="flex flex-col">
          <p className="text-[#96979A] text-sm mb-2">{dateOfExperience}</p>
          <h2 className="text-lg text-black font-bold mb-2">
            {positionName} @{" "}
            <span className="text-[#E95278]">{companyName}</span>
          </h2>
          <p className="text-[#96979A] text-sm mb-2">{location}</p>
          <p className="text-black text-sm mb-2">
            <strong>{description[0]}</strong> {/* First line bold */}
          </p>
          {description.slice(1).map((line, index) => (
          <p key={index} className="text-black text-sm mb-2">
            {line}
          </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
