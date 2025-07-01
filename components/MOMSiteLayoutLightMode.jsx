"use client";
import React, { useState } from "react";
import Header from "./Header";
import ProcessSteps from "./ProcessSteps";
import RolesAndResourcesSection from "./RolesAndResourcesSection";
import ApprovalSection from "./ApprovalSection";
import ReferenceSection from "./ReferenceSection";
import TimingAndStorageSection from "./TimingAndStorageSection";
import { useTheme } from "../contexts/ThemeContext";
import ContentSection from "./ContentSection";
import { PageContentProvider, usePageContent } from "../contexts/PageContentContext";
import AdditionalNotesSection from './AdditionalNotesSection';
import Timeline from './Timeline';

const MOMSiteLayoutContent = ({ initialPage = 'home' }) => {
  const { isDarkMode } = useTheme();
  const { currentPage } = usePageContent();
  const [copied, setCopied] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // If current page is timeline, render the Timeline component
  if (currentPage === 'timeline') {
    return (
      <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <Header />
        <Timeline />
      </div>
    );
  }

  // Map page IDs to hero images
  const getHeroImage = () => {
    switch (currentPage) {
      case 'csv-file':
        return '/CSVFile.jpg';
      case 'acquire-kmz':
        return '/site-mapping-bg.jpg'; // Using the same image as home for now
      case 'scheduling':
        return '/Scheduling.jpg'; // Using the new Scheduling hero image
      case 'project-contract-review':
        return '/ProjectContractReview.jpg'; // Using the new Project Contract Review hero image
      case 'vendor-contract-review':
        return '/VendorContractReview.jpg'; // Using the new Vendor Contract Review hero image
      case 'subcontract-review':
        return '/SubcontractReview.jpg'; // Using the new Subcontract Review hero image
      case 'receive-estimate':
        return '/ReceiveEstimate.jpg'; // Using the new Receive Estimate hero image
      case 'review-exhibit-k':
        return '/ReviewExhibitK.jpg'; // Using the new Review Exhibit K hero image
      case 'verify-swi-installation-manual':
        return '/SWIReview.jpg'; // Using the new SWI Review hero image
      case 'take-offs':
        return '/TakeOffs.jpg'; // Using the new Take Offs hero image
      case 'resource-planning-equipment':
        return '/ResourcePlanningEquipment.jpg'; // Using the new Resource Planning Equipment hero image
      case 'logistics-plan-laydown-selection-areas':
        return '/site-mapping-bg.jpg'; // Using the same image as home for now
      default:
        return '/site-mapping-bg.jpg';
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      // Optionally handle error
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    
    try {
      // Dynamically import the libraries to avoid SSR issues
      const html2canvas = (await import('html2canvas')).default;
      const jsPDF = (await import('jspdf')).jsPDF;

      // Scroll to top to ensure we capture from the beginning
      window.scrollTo(0, 0);
      
      // Wait a moment for any animations to settle
      await new Promise(resolve => setTimeout(resolve, 500));

      // Temporarily remove overflow hidden to capture full content
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'visible';
      document.documentElement.style.overflow = 'visible';

      // Get the main content container
      const element = document.getElementById('pdf-content') || document.body;
      
      // Configure html2canvas options for full page capture
      const canvas = await html2canvas(element, {
        height: element.scrollHeight,
        width: element.scrollWidth,
        scrollX: 0,
        scrollY: 0,
        useCORS: true,
        allowTaint: true,
        scale: 1,
        logging: false,
        backgroundColor: isDarkMode ? '#121212' : '#ffffff',
        foreignObjectRendering: true,
        removeContainer: false,
        ignoreElements: (element) => {
          // Skip elements that might cause issues
          return element.tagName === 'SCRIPT' || element.tagName === 'NOSCRIPT';
        }
      });

      // Restore original overflow settings
      document.body.style.overflow = originalOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      const imgData = canvas.toDataURL('image/png', 0.9);
      
      // Create PDF with better sizing
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate dimensions to fit the content properly
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      // Download the PDF
      pdf.save('MOM-Site-Mapping-Complete.pdf');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`} id="pdf-content">
      <Header />

      <main className="flex relative flex-col justify-center pt-28 pb-80 w-full text-lg font-semibold min-h-[553px] max-md:px-5 max-md:py-24">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getHeroImage()}')`
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <section className="flex relative flex-col items-start w-full px-20 max-md:px-5 max-md:max-w-full z-10">
          <div className="flex flex-col max-w-full w-[720px]">
            <div className="flex flex-col w-full text-zinc-50 max-md:max-w-full">
              <h2 className="gap-2.5 self-start leading-none">
                OPERATIONAL OBJECTIVE
              </h2>
              <ContentSection />
            </div>
            <div className="flex gap-3.5 justify-center items-center self-start mt-11 leading-none max-md:mt-10">
              <button 
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className={`gap-2 self-stretch px-6 py-3.5 my-auto transition-colors max-md:px-5 ${
                  isDarkMode 
                    ? 'bg-[#01361B] border border-[#006B35] text-white hover:bg-[#024a26]' 
                    : 'bg-white border border-emerald-800 text-emerald-800 hover:bg-gray-50'
                } ${isGeneratingPDF ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
              </button>
              <button
                type="button"
                onClick={handleCopyLink}
                className={`gap-2 self-stretch px-6 py-3.5 my-auto border border-solid transition-colors max-md:px-5 ${
                  isDarkMode 
                    ? 'bg-[#01361B] border-[#006B35] text-white hover:bg-[#024a26]' 
                    : 'bg-zinc-50 border-[color:var(--Brand-Color-Light-Mode,#006B35)] text-emerald-800 hover:bg-gray-100'
                }`}
              >
                {copied ? "Copied!" : "Send Link"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className="px-20 max-md:px-5">
        <RolesAndResourcesSection />

        <ProcessSteps />

        <TimingAndStorageSection />

        <ApprovalSection />
        <ReferenceSection />
        <AdditionalNotesSection />
      </div>
    </div>
  );
};

const MOMSiteLayoutLightMode = ({ initialPage = 'home' }) => {
  return (
    <PageContentProvider initialPage={initialPage}>
      <MOMSiteLayoutContent />
    </PageContentProvider>
  );
};

export default MOMSiteLayoutLightMode;
