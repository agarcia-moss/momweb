import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const ReferenceSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const references = currentContent.references || [
    "WORKDAY / Heat Illness Prevention Program (HIPP) 2025 – Leader Training",
    "WORKDAY / Password Policies and Multi-Factor Authentication",
    "WORKDAY / Card Holder Best Practices – How to Upload Receipts to Corpay",
  ];

  return (
    <section className={`overflow-hidden w-full py-8 max-md:py-6 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      <h2 className={`text-xs font-bold tracking-wide leading-tight uppercase ${
        isDarkMode ? 'text-[#33FF99]' : 'text-emerald-800'
      }`}>
        REFERENCE MATERIAL
      </h2>
      <div className="flex flex-col justify-center mt-6 max-w-full font-semibold w-full">
        <div className="gap-14 w-full text-5xl tracking-tighter leading-none max-md:text-4xl max-md:max-w-full">
          <h3 className={`gap-8 w-full max-md:max-w-full ${
            isDarkMode ? 'text-white' : 'text-neutral-800'
          }`}>
            Where to Find Supporting Guides and Trainings
          </h3>
        </div>
        <ol className={`text-lg leading-7 max-md:max-w-full mt-6 ${
          isDarkMode ? '' : 'list-decimal list-inside'
        }`}>
          {references.map((reference, index) => (
            <li key={index} className="mb-2">
              <a href="#" className={`hover:underline ${
                isDarkMode ? 'text-[#66D9EF]' : 'text-[#015893]'
              }`}>
                {reference}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ReferenceSection;
