import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const AdditionalNotesSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get additional notes from context, fallback to default if not available
  const additionalNotes = currentContent.additionalNotes || [
    "Some projects receive the KMZ file from Estimating; others may require retrieval from shared project folders",
    "It's common to realign the KMZ once actual survey points are established",
    "Serves as a helpful reference tool for site preliminary mapping and planning"
  ];
  
  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* Divider above Additional Notes section */}
      <div className={`flex w-full border-b min-h-12 max-md:max-w-full ${
        isDarkMode ? 'border-white' : 'border-zinc-300'
      }`} />
      
      <div className="w-full max-w-[1366px] mt-8">
        <div className="flex flex-col gap-[18px]">
          <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
            isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
          }`}>
            ADDITIONAL NOTES
          </h2>
          <h3 className={`text-5xl font-semibold tracking-tighter leading-none max-md:text-4xl ${
            isDarkMode ? 'text-white' : 'text-neutral-800'
          }`}>
            Important Considerations
          </h3>
          <div className={`text-lg font-semibold leading-7 ${
            isDarkMode ? 'text-[#E0E0E0]' : 'text-neutral-800'
          }`}>
            {additionalNotes.map((item, index) => (
              <p key={index} className="mb-2">• {item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalNotesSection; 