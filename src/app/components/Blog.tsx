import Image, { StaticImageData } from "next/image";

type EducationProps = {
  schoolLink: string;
  backgroundColor: string;
  school: string;
  degree: string;
  courseDescription: string[];
  time: string;
  imageSrc: StaticImageData,
  imageAlt: string,
};

const Education = ({
  schoolLink,
  backgroundColor,
  school,
  degree,
  courseDescription,
  time,
  imageSrc,
  imageAlt,
}: EducationProps) => {
  return (
    <div
      className={`w-full bg-[${backgroundColor}] p-6 md:p-10 flex flex-col md:flex-row justify-center rounded-lg mb-4 md:mb-1`}
    >
      {/* School Logo and Information Section */}
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
          {/* Time and School Name */}
          <div className="flex justify-between mb-2">
            <h2 className="text-lg text-black font-bold">
              <a href={schoolLink} target="_blank" rel="noopener noreferrer">
                {school}
              </a>
            </h2>
            <p className="text-[#96979A] text-sm">{time}</p>
          </div>

          {/* Degree and GPA */}
          <p className="text-[#96979A] text-sm mb-2">{degree}</p>

          {/* Course Description */}
          <p className="text-black text-sm mb-2">
            <strong>{courseDescription[0]}</strong>
          </p>
          {courseDescription.slice(1).map((line, index) => (
            <p key={index} className="text-black text-sm mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
