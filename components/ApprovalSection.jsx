import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const ApprovalSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const approvers = currentContent.approvers || [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      text: "Site Superintendent – Confirms file matches planned site intent",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      text: "Surveyor – Validates on-ground alignment",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Project Manager / Director (optional) – Sign-off if major deviations from site plan are needed",
    },
  ];

  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
        isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
      }`}>
        APPROVAL & REVIEW
      </h2>
      <div className="flex gap-10 items-center mt-6 max-w-full font-semibold w-full">
        <div className="flex-1 shrink gap-14 self-stretch my-auto w-full basis-0 max-md:max-w-full">
          <div className="gap-8 w-full max-md:max-w-full">
            <div className="gap-6 w-full max-md:max-w-full">
              <h3 className={`text-5xl tracking-tighter leading-none max-md:text-4xl max-md:max-w-full ${
                isDarkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                Who Reviews and Approves
              </h3>
              <div className="gap-3.5 mt-6 w-full text-lg leading-relaxed max-md:max-w-full">
                {approvers.map((approver, index) => (
                  <div
                    key={index}
                    className="flex flex-wrap gap-3.5 items-center mt-3.5 w-full max-md:max-w-full"
                  >
                    <div className={isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'}>
                      {approver.icon}
                    </div>
                    <p className={`flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full ${
                      isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
                    }`}>
                      {approver.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex mt-8 w-full border-b min-h-12 max-md:mt-6 max-md:max-w-full ${
        isDarkMode ? 'border-white' : 'border-zinc-300'
      }`} />
    </section>
  );
};

export default ApprovalSection;
