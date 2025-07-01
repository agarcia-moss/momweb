import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const RolesAndResourcesSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const content = currentContent.rolesAndResponsibilities || {
    whoIsInvolved: [
      "Site Superintendent – Verifies accuracy and applies file to planning",
      "Surveyor – Uses KMZ to validate site points on ground",
      "Project Manager / Estimator – May initiate request or provide source file"
    ],
    resourcesNeeded: [
      "Project KMZ file (compressed KML)",
      "Preliminary site layout or project folder access",
      "Access to Google Earth / GIS viewer software"
    ]
  };
  
  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="flex flex-wrap gap-16 items-start w-full max-md:flex-col max-md:gap-8">
        {/* Left column - Roles & Responsibilities */}
        <div className="flex-1 min-w-[320px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3.5">
              <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
                isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
              }`}>
                ROLES & RESPONSIBILITIES
              </h2>
              <h3 className={`text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl ${
                isDarkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                Who Is Involved
              </h3>
            </div>
            <div className={`text-lg font-semibold leading-7 ${
              isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
            }`}>
              {content.whoIsInvolved.map((item, index) => (
                <p key={index} className="mb-2">• {item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Resources Needed (always left-aligned) */}
        <div className="flex-1 min-w-[320px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3.5 text-left">
              <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
                isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
              }`}>
                RESOURCES NEEDED
              </h2>
              <h3 className={`text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl ${
                isDarkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                What You Need to Begin
              </h3>
            </div>
            <div className={`text-lg font-semibold leading-7 ${
              isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
            }`}>
              {content.resourcesNeeded.map((item, index) => (
                <p key={index} className="mb-2">• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`flex w-full border-b min-h-12 mt-8 max-md:mt-6 max-md:max-w-full ${
        isDarkMode ? 'border-white' : 'border-zinc-300'
      }`} />
    </section>
  );
};

export default RolesAndResourcesSection; 