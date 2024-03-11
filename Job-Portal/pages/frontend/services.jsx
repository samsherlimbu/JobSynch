import React from "react";
import NavBar from '@/components/NavBar'
import { FaSearchDollar } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiChoice } from "react-icons/gi";



const Service = () => {
  return (
    <>
    <NavBar/>
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                This is the best job portal you ever find 
              </p>
        <hr />
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="View and Search for the jobs"
            details="You can view and search for the job in a specific location, company and role"
            icon={
              <FaSearchDollar size ={50} 
              className ="text-purple-600"/> 
            }
          />
          <ServiceCard
            title="Register your account as a Job Seeker or Recruiter"
            details="You can Register your account "
            icon={
              <GiArchiveRegister size ={50} 
              className ="text-purple-600"/>

            }
          />
          
          <ServiceCard
            title="Apply for the job"
            details="Simple and straightforward application process, allowing you to express interest in desired positions seamlessly."
            icon={
              <FaDownload size ={50} 
              className ="text-purple-600"/>
            }
          />
          <ServiceCard
            title="View Applicants"
            details="conveniently review job applicants, gaining insights into potential hires"
            icon={
              <FaUsersViewfinder size ={50} 
              className ="text-purple-600"/>

            }
          />
          <ServiceCard
            title="Accept/Reject Applicant"
            details="Streamlined applicant management for informed decisions"
            icon={
              <GiChoice size ={50} 
              className ="text-purple-600"/>
            }
          />
         
        </div>
      </div>
    </section>
    </>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <> 
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
