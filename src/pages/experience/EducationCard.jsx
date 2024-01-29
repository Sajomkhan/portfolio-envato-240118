import { MdSchool } from "react-icons/md";
import { education } from "../../data/data";

const EducationCard = () => {
  return (
    <div className="flex flex-col items-center">
      {/* ---------------Line & Sigment---------------- */}
      <div className="primary_bg2 py-2 px-5 rounded-md hover:scale-105 duration-500">Education</div>
      <div className="w-px h-[30px] bg-gray-500/50 "></div>
      <div className="rounded-full p-4 primary_bg2 hover:scale-105 duration-500">
        <MdSchool className=" text-lg" />
      </div>
      <div className="w-px h-[30px] bg-gray-500/50 "></div>

      {/* -------------Education Card---------------- */}
      <div className="max-w-[575px] text-sm section_color shadow-lg p-4 mb-12 rounded-lg text-center hover:scale-105 duration-500">
        <p className="text-lg font-bold mb-1 primary_text">
          {education.lastEducation} | {education.duration}
        </p>
        <p className="mb-1 font-light">
          {education.institution}
        </p>
        <p className="">
          <b>Subject:</b> {education.subject}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
