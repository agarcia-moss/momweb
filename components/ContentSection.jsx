import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { usePageContent } from '../contexts/PageContentContext';

const ContentSection = () => {
  const { isDarkMode } = useTheme();
  const { currentContent, currentPage } = usePageContent();
  
  // Get content from context, fallback to default if not available
  const content = currentContent.operationalObjective || {
    title: "Acquire KMZ File for Site Mapping",
    description: "To obtain a preliminary KMZ file used for establishing lay-down areas, preliminary mapping, and ensuring early-stage site planning aligns with project requirements."
  };

  // Map page IDs to hero images
  const getHeroImage = () => {
    switch (currentPage) {
      case 'csv-file':
        return '/CSVFile.jpg';
      default:
        return '/site-mapping-bg.jpg';
    }
  };

  return (
    <>
      <h1 className="mt-5 text-6xl tracking-tighter leading-[62px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        {content.title}
      </h1>
      <p className="mt-5 leading-7 max-md:max-w-full">
        {content.description}
      </p>
    </>
  );
};

export default ContentSection;
