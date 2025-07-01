import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const ProcessSteps = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const content = currentContent.processSteps || {
    description: "This section outlines the standard procedure for acquiring and preparing a KMZ file used in early-stage site planning. The steps below ensure consistent identification of key layout zones while minimizing data conflicts across project systems.",
    steps: [
      {
        number: "01",
        title: "Request or Retrieve KMZ File",
        description: "Obtain the KMZ file from Estimating, the Project Manager, or the designated regional project folder."
      },
      {
        number: "02",
        title: "Verify in Google Earth",
        description: "Open the file in Google Earth to confirm general site boundaries and ensure that overlays align accurately with known coordinates."
      },
      {
        number: "03",
        title: "Mark Key Areas",
        description: "Use the KMZ tool to identify and mark preliminary zones for lay-down areas, staging, and office trailer placement."
      },
      {
        number: "04",
        title: "Cross-Reference Project Data",
        description: "Compare the marked KMZ layout with any available CSV or civil data sets to check for spatial conflicts or overlaps."
      },
      {
        number: "05",
        title: "Save Final Version",
        description: "Save the finalized KMZ file to the project's SharePoint directory."
      }
    ]
  };

  const isHorizontalLayout = content.steps.length <= 5;

  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="gap-5 w-full max-md:max-w-full">
        <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
          isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
        }`}>
          STEP-BY-STEP INSTRUCTIONS
        </h2>
        <h3 className={`mt-5 text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl max-md:max-w-full ${
          isDarkMode ? 'text-white' : 'text-neutral-800'
        }`}>
          Executing the Process
        </h3>
        <p className={`mt-5 text-lg leading-7 max-md:max-w-full ${
          isDarkMode ? 'text-[#E0E0E0] font-normal' : 'text-stone-500'
        }`}>
          {content.description}
        </p>
      </div>

      <div className="gap-8 mt-12 w-full max-md:mt-8 max-md:max-w-full">
        {isHorizontalLayout ? (
          // Horizontal layout for 5 or fewer steps
          <>
            <div className="flex flex-wrap gap-8 items-center w-full max-md:max-w-full">
              {content.steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className={`flex items-center justify-center self-stretch px-2 my-auto text-lg font-semibold text-center text-white whitespace-nowrap h-[46px] rounded-[100px] w-[46px] ${
                    isDarkMode 
                      ? 'bg-[#01361B] border border-[#33FF99]' 
                      : 'bg-emerald-800 border border-solid border-[color:var(--Color-Neutral-neutral-6,#D9D9D9)]'
                  }`}>
                    {step.number}
                  </div>
                  {index < content.steps.length - 1 && (
                    <div className="flex flex-1 shrink gap-2.5 items-start self-stretch py-2.5 my-auto basis-4">
                      <div className={`flex-1 shrink w-full border min-h-px ${
                        isDarkMode 
                          ? 'border-[#33FF99] border-solid' 
                          : 'border-dashed basis-0 bg-neutral-800 border-neutral-800'
                      }`} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 items-start mt-8 w-full text-lg max-md:max-w-full">
              {content.steps.map((step) => (
                <div
                  key={step.number}
                  className="flex-1 shrink gap-5 rounded-xl basis-0 min-w-[240px] max-md:min-w-full"
                >
                  <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>
                    {step.title}
                  </h4>
                  <p className={`mt-5 leading-7 ${
                    isDarkMode ? 'text-[#E0E0E0] font-normal' : 'text-stone-500'
                  }`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          // Vertical layout for more than 5 steps
          <div className="space-y-8">
            {content.steps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className={`flex items-center justify-center flex-shrink-0 px-2 text-lg font-semibold text-center text-white whitespace-nowrap h-[46px] rounded-[100px] w-[46px] ${
                  isDarkMode 
                    ? 'bg-[#01361B] border border-[#33FF99]' 
                    : 'bg-emerald-800 border border-solid border-[color:var(--Color-Neutral-neutral-6,#D9D9D9)]'
                }`}>
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-neutral-800'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-lg leading-7 ${
                    isDarkMode ? 'text-[#E0E0E0] font-normal' : 'text-stone-500'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`flex w-full border-b min-h-12 mt-8 max-md:mt-6 max-md:max-w-full ${
        isDarkMode ? 'border-white' : 'border-zinc-300'
      }`} />
    </section>
  );
};

export default ProcessSteps;
