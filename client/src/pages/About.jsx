import React from "react";
import { career } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            To learn more about the individuals behind JobQuestPro Corporation
            and their contributions, please explore our website. For detailed
            information about the team and collaborators at JobQuestPro
            Corporation, we invite you to visit our website at
            http://www.jobquestpro.com. Meet the passionate minds that drive
            JobQuestPro Corporation forward. Our team is composed of experienced
            professionals with diverse backgrounds in IT, each bringing their
            unique expertise to the table. At JobQuestPro Corporation, we
            nurture a culture of continuous learning and professional growth.
            Our team members are encouraged to share their knowledge and
            insights, fostering a dynamic and creative work environment."
          </p>
        </div>
        <img src={career} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          Welcome to JobQuestPro, your trusted partner in the world of
          technology solutions. With a track record of six years in the IT
          industry, we have been at the forefront of delivering innovative IT
          solutions. Our journey began with a vision to revolutionize the IT
          landscape, and today, we proudly stand as industry leaders. At
          JobQuestPro, we believe in making technology work for you. Our mission
          is to harness the power of innovation to solve complex IT challenges.
          We are a team of dedicated professionals with a shared passion for
          cutting-edge technology and its transformative potential. Our team of
          experts comprises seasoned IT professionals, developers, engineers,
          and designers who are committed to excellence. We take pride in our
          collaborative approach, working closely with clients to understand
          their challenges and deliver customized IT solutions. Your IT needs
          are in capable hands. Discover how JobQuestPro can be your technology
          partner of choice, as we strive to exceed expectations and deliver
          solutions that drive measurable results for businesses of all sizes.
        </p>
      </div>
    </div>
  );
};

export default About;
