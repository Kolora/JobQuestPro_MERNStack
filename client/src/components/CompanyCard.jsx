import React from "react";
import { Link } from "react-router-dom";
// import JobCard from "./JobCard";

const CompanyCard = ({ cmp }) => {
  return (
    <div className="w-full h-16 flex gap-4 items-center justify-between bg-white shadow-md rounded">
      <div className="w-3/4 md:w-2/4 flex gap-4 items-center">
        <Link to={`/company-profile/${cmp?._id}`}>
          <img
            src={
              cmp?.profileUrl ||
              "https://res.cloudinary.com/dunsguide/image/upload/b_white,c_pad,d_defaults:default_company_logo.png,dpr_auto,h_180,w_180/v1/defaults/default_company_logo.png"
            }
            alt={cmp?.name}
            className="w-8 md:w-12 h-8 md:h-12 rounded"
          />
        </Link>
        <div className="h-full flex flex-col">
          <Link
            to={`/company-profile/${cmp?._id}`}
            className="text-base md:text-lg font-semibold text-gray-600 truncate"
          >
            {cmp?.name}
          </Link>
          <span className="text-sm text-blue-600">{cmp?.email}</span>
        </div>
      </div>

      <div className="hidden w-1/4 h-full md:flex items-center">
        <p className="text-base text-start">{cmp?.location}</p>
      </div>

      <div className="w-1/4 h-full flex flex-col items-center">
        <p className="text-blue-600 font-semibold">{cmp?.jobPosts?.length}</p>
        <span className="text-xs md:base font-normal text-gray-600">
          Jobs Posted
          {/* <div className="w-full flex flex-wrap gap-4">
            {data?.map((job, index) => {
              const newJob = {
                name: job?.company?.name,
                logo: job?.company?.profileUrl,
                ...job,
              };
              console.log(job);
              return <JobCard job={newJob} key={index} />;
            })}
          </div> */}
        </span>
      </div>
    </div>
  );
};

export default CompanyCard;
