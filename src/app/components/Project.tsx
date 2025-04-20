import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdOutlineOpenInNew } from "react-icons/md";

type ProjectProps = {
  imageSrc: StaticImageData;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

const Project = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectLink,
}: ProjectProps) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[30%] mb-6 bg-[#F8F8FA] flex flex-col p-4 sm:p-6 lg:p-8 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 aspect-square flex p-2 sm:p-3 bg-white rounded-full items-center justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="w-auto h-auto rounded-lg"
          />
        </div>
        <Link href={projectLink} target="_blank" rel="noopener noreferrer">
          <MdOutlineOpenInNew className="text-[#96979A]" size={20} />
        </Link>
      </div>
      <h2 className="text-base sm:text-lg text-black font-bold mb-2">
        {projectName}
      </h2>
      <p className="text-xs sm:text-sm text-[#96979A] mb-2">
        {projectDescription}
      </p>
    </div>
  );
};

export default Project;
