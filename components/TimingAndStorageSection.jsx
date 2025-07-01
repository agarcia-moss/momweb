import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const TimingAndStorageSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const content = currentContent.timingAndStorage || {
    timing: [
      "Triggered during Pre-Mobilization phase, before field layout begins",
      "Ideally completed prior to Civil mobilization to support better planning of site setup"
    ],
    storage: [
      "SharePoint > [Project Folder] > Survey > KMZ Files"
    ]
  };
  
  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* Two-column layout for Timing & File Storage */}
      <div className="flex flex-wrap gap-16 items-start pb-8 w-full max-md:flex-col max-md:gap-8 max-md:pb-6">
        {/* Left column - Timing & Triggers */}
        <div className="flex-1 min-w-[320px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3.5">
              <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
                isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
              }`}>
                TIMING & TRIGGERS
              </h2>
              <h3 className={`text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl ${
                isDarkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                When This Should Occur
              </h3>
            </div>
            <div className={`text-lg font-semibold leading-7 max-w-[640px] ${
              isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
            }`}>
              {content.timing.map((item, index) => (
                <p key={index} className="mb-2">• {item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - File Storage (always left-aligned) */}
        <div className="flex-1 min-w-[320px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3.5 text-left">
              <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
                isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
              }`}>
                FILE STORAGE
              </h2>
              <h3 className={`text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl ${
                isDarkMode ? 'text-white' : 'text-neutral-800'
              }`}>
                Where This Output Is Stored
              </h3>
            </div>
            <div className={`text-lg font-semibold leading-7 ${
              isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
            }`}>
              {content.storage.map((item, index) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider between sections */}
      <div className={`flex w-full border-b min-h-12 max-md:max-w-full ${
        isDarkMode ? 'border-white' : 'border-zinc-300'
      }`} />
    </section>
  );
};

export default TimingAndStorageSection; 