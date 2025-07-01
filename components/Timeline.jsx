import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Timeline = () => {
  const { isDarkMode } = useTheme();

  const timelineEvents = [
    // Completed Initiatives
    {
      category: "Building a Safer Workplace",
      title: "Standardizing Safety Incident Reporting",
      description: "On October 1, 2023, the Mechanical department launched a standardized process for reporting safety incidents using Smartsheet forms. This initiative ensures that all safety data is consistently captured and ingested into the data lake, laying the groundwork for future analysis and continuous improvement in jobsite safety.",
      date: "October 1, 2023"
    },
    {
      category: "Driving Continuous Improvement",
      title: "Launch of Mechanical Leadership Team Meetings",
      description: "Beginning November 1, 2023, regular meetings were established to bring field concerns, ideas, and opportunities for improvement directly to the Mechanical department. These sessions foster a culture of collaboration and ongoing development, supporting the growth of Mechanical Self-Perform.",
      date: "November 1, 2023"
    },
    {
      category: "Laying the Foundation for Data-Driven Estimating",
      title: "Mechanical Estimate 3.0 Implementation",
      description: "On January 1, 2024, the department rolled out Mechanical Estimate 3.0, a revised estimate structure that introduced data validation. This update prepared the estimate for seamless data ingestion into the data lake, while maintaining the proven estimating logic from earlier versions.",
      date: "January 1, 2024"
    },
    {
      category: "Standardizing Work Instructions",
      title: "SWI Process Completion",
      description: "By February 1, 2024, the Mechanical team completed a major milestone in the SWI (Standard Work Instruction) process. This included creating, modifying, and distributing SWIs, ensuring that best practices are documented and accessible. The SWI process remains an evolving initiative, adapting to new standards and field feedback.",
      date: "February 1, 2024"
    },
    {
      category: "Empowering the Field with Technology",
      title: "Launch of MechTech Power Apps",
      description: "On March 1, 2024, the Mechanical department, in partnership with the Data Team, introduced the MechTech Power App. This tool enables daily production data tracking and reporting, with seamless integration into the data lake for future analysis and process improvement.",
      date: "March 1, 2024"
    },
    {
      category: "Visualizing Performance",
      title: "Creation of the Mechanical Power BI Dashboard",
      description: "April 1, 2024, marked the debut of the Mechanical Power BI dashboard. This platform brings together estimated and actual cost and production data, providing a unified view of project performance. The dashboard is a cornerstone of the department's data-driven culture.",
      date: "April 1, 2024"
    },
    {
      category: "Shaping the Next Generation",
      title: "Launch of the Intern Passport Program",
      description: "On May 1, 2024, the Mechanical department overhauled its intern process with the Passport Program. This structured curriculum enhances intern training and experience, leading to higher retention and greater potential for intern-to-employee conversion.",
      date: "May 1, 2024"
    },
    {
      category: "Digitalizing Equipment Management",
      title: "Standardized Rig Status Reporting",
      description: "Starting June 1, 2024, the department implemented a standardized process for reporting pile driving rig status using Smartsheet forms. This marks Mechanical's first step toward digital equipment management, with all data flowing into the data lake for future use.",
      date: "June 1, 2024"
    },
    {
      category: "Investing in Leadership",
      title: "Mechanical Leaders Development Program (MLDP) Launch",
      description: "On August 1, 2024, the Mechanical Leaders Development Program was launched to cultivate top-tier leadership talent within Moss. This hands-on initiative addresses the growing need for skilled leaders by providing comprehensive training and development opportunities in record time.",
      date: "August 1, 2024"
    },
    {
      category: "Capturing Every Change",
      title: "Standardized Change Order Reporting",
      description: "As of September 1, 2024, the Mechanical department standardized its process for reporting potential change orders using Smartsheet forms. This ensures all potential changes are tracked and costs are accurately captured, supporting better project financial management.",
      date: "September 1, 2024"
    },
    {
      category: "Aligning Expectations Early",
      title: "Golden Row Process Enhancement",
      description: "On October 1, 2024, the Golden Row process was modified to improve project quality and address design issues early. By standardizing this process at project kickoff, all stakeholders—vendors, customers, and Moss—are aligned on expectations from the start.",
      date: "October 1, 2024"
    },
    {
      category: "Learning from Every Project",
      title: "Initiation of Project Post Mortems",
      description: "Beginning November 1, 2024, the department started conducting post mortems using data collected throughout the project lifecycle. These reviews of performance and financials help identify opportunities for improvement and are a key part of the MechTech project lifecycle.",
      date: "November 1, 2024"
    },
    {
      category: "Easy Access to Standards",
      title: "SWI Table of Contents Launch",
      description: "On March 1, 2025, a Power BI list was introduced to provide an up-to-date reference of all current SWIs available for each system. This tool ensures that the latest standard work instructions are always accessible to the team.",
      date: "March 1, 2025"
    },
    {
      category: "Standardizing Field Operations",
      title: "Mechanical Operation Manual Initiative",
      description: "Launched June 1, 2025, the Mechanical Operation Manual (MOM) is a digital reference that standardizes every process performed by the Mechanical field team. It serves as a go-to resource for employees seeking guidance on required procedures.",
      date: "June 1, 2025"
    },
    {
      category: "Bringing Visibility to the Jobsite",
      title: "Weekly Cost Dashboard Review Implementation",
      description: "Starting December 1, 2025, weekly cost dashboard reviews were established with site teams. These sessions not only track project progress but also teach teams how to use dashboards to make informed, data-driven decisions.",
      date: "December 1, 2025"
    },
    // Future Initiatives
    {
      category: "Evolving Estimating with Data",
      title: "Mechanical Estimate 4.0 Development",
      description: "Mechanical Estimate 4.0 represents a complete shift in estimating methodology. By leveraging historical units-per-man-hour KPIs, the department can generate durations and costs from real data, creating scalable, consistent, and more accurate forecasts.",
      date: "TBD"
    },
    {
      category: "Streamlining Data Collection",
      title: "BaseCamp Initiative",
      description: "BaseCamp will consolidate current Smartsheets and PowerApps into a single master app, simplifying and streamlining data recording from project sites for greater efficiency and accuracy.",
      date: "TBD"
    },
    {
      category: "Dynamic Scheduling for Success",
      title: "Self Perform Pull Planning Initiative",
      description: "This initiative will introduce a dynamic pull schedule based on project setup forms in PowerApp. By tracking estimated schedules down to the area level, the department will gain real-time visibility into project progress and metrics.",
      date: "TBD"
    },
    {
      category: "Data at Your Fingertips",
      title: "BOB: The Teams Field Assistant",
      description: "BOB will serve as a Teams-based field assistant, delivering information from the data lake directly to the team. This tool will empower field staff to make data-driven decisions without needing to access dashboards or data intake forms.",
      date: "TBD"
    }
  ];

  // Calculate timeline line heights based on number of events
  const timelineLineHeights = Array(timelineEvents.length - 1).fill(320);

  return (
    <div className={`min-h-screen flex justify-center items-start gap-[10px] ${isDarkMode ? 'bg-[#121212]' : 'bg-white'} pb-20`}>
      <div className="w-[1024px] flex flex-col justify-start items-center gap-[57px] pt-8">
        {/* Division line */}
        <div className={`w-full h-px ${
          isDarkMode ? 'bg-[#33FF99]' : 'bg-[#D9D9D9]'
        }`}></div>
        
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-center gap-[18px]">
          <h1 className={`w-full text-[42px] font-semibold leading-[52.5px] ${
            isDarkMode ? 'text-white' : 'text-[#202020]'
          }`}>
            Mechanical Self-Perform Department Timeline
          </h1>
          <p className={`w-full text-lg font-normal leading-[28.8px] ${
            isDarkMode ? 'text-white' : 'text-[#646464]'
          }`}>
            The Mechanical Self-Perform department's journey is defined by innovation, collaboration, and a commitment to continuous improvement. This timeline highlights the key milestones, initiatives, and future plans that have shaped our evolution. Each step reflects our dedication to operational excellence, empowering our teams, and setting new standards for performance and quality across every project.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="w-full flex justify-center items-start gap-8 relative">
          {/* Left Cards Container */}
          <div className="flex-1 flex flex-col justify-start items-start">
            {/* Remove initial space for first card */}
            {timelineEvents.map((event, index) => {
              if (index % 2 === 0) {
                return (
                  <React.Fragment key={index}>
                    {/* Card */}
                    <div className={`w-full p-6 outline outline-1 ${
                      isDarkMode ? 'outline-[#33FF99]' : 'outline-[#D9D9D9]'
                    } outline-offset-[-1px] flex flex-col justify-start items-start gap-[18px]`}>
                      <div className="w-full pb-[18px] flex flex-col justify-start items-start gap-[18px]">
                        <div className={`text-sm font-semibold uppercase leading-[19.6px] ${
                          isDarkMode ? 'text-[#33FF99]' : 'text-[#006B35]'
                        }`}>
                          {event.category}
                        </div>
                        <h3 className={`w-full text-2xl font-semibold leading-9 ${
                          isDarkMode ? 'text-white' : 'text-[#202020]'
                        }`}>
                          {event.title}
                        </h3>
                        <p className={`w-full text-lg font-normal leading-[28.8px] ${
                          isDarkMode ? 'text-white' : 'text-[#646464]'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                    {/* Space after card (except last) */}
                    {index < timelineEvents.length - 2 && <div className="w-full h-[320px]"></div>}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>

          {/* Story Navigator */}
          <div className="flex flex-col justify-start items-center relative pt-[110px]">
            {/* Vertical line that extends only to the last dot */}
            <div className={`absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full z-0 ${isDarkMode ? 'bg-[#33FF99]' : 'bg-[#202020]'}`}></div>
            {/* Timeline dots and lines */}
            {timelineEvents.map((event, index) => (
              <React.Fragment key={index}>
                {/* Navigator */}
                <div className={`relative z-10 p-[10px] rounded-full ${
                  isDarkMode 
                    ? 'bg-[#121212] border border-[#33FF99]' 
                    : 'bg-white border border-[#006B35]'
                } flex justify-center items-center`} style={{marginBottom: index < timelineEvents.length - 1 ? `${timelineLineHeights[index]}px` : 0}}>
                  <div className={`w-[14px] h-[14px] rounded-full ${
                    isDarkMode ? 'bg-[#33FF99]' : 'bg-[#006B35]'
                  }`}></div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Right Cards Container */}
          <div className="flex-1 flex flex-col justify-start items-start">
            {/* Increase top spacer to stagger the first right card lower than the first left card */}
            <div className="w-full h-[320px]"></div>
            {timelineEvents.map((event, index) => {
              if (index % 2 === 1) {
                return (
                  <React.Fragment key={index}>
                    {/* Card */}
                    <div className={`w-full p-6 outline outline-1 ${
                      isDarkMode ? 'outline-[#33FF99]' : 'outline-[#D9D9D9]'
                    } outline-offset-[-1px] flex flex-col justify-start items-start gap-[18px]`}>
                      <div className="w-full pb-[18px] flex flex-col justify-start items-start gap-[18px]">
                        <div className={`text-sm font-semibold uppercase leading-[19.6px] ${
                          isDarkMode ? 'text-[#33FF99]' : 'text-[#006B35]'
                        }`}>
                          {event.category}
                        </div>
                        <h3 className={`w-full text-2xl font-semibold leading-9 ${
                          isDarkMode ? 'text-white' : 'text-[#202020]'
                        }`}>
                          {event.title}
                        </h3>
                        <p className={`w-full text-lg font-normal leading-[28.8px] ${
                          isDarkMode ? 'text-white' : 'text-[#646464]'
                        }`}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                    {/* Space after card (except last) */}
                    {index < timelineEvents.length - 2 && <div className="w-full h-[320px]"></div>}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline; 