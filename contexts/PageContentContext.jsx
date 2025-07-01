"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { pageContent, defaultContent } from '../data/pageContent';
import { mobilizationContent } from '../data/mobilizationContent';

const PageContentContext = createContext();

export const usePageContent = () => {
  const context = useContext(PageContentContext);
  if (!context) {
    throw new Error('usePageContent must be used within a PageContentProvider');
  }
  return context;
};

export const PageContentProvider = ({ children, initialPage = 'home' }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  // Map URL paths to page IDs
  const pathToPageId = {
    '/': 'home',
    '/pre-mobilization/engineering/csv-file': 'csv-file',
    '/pre-mobilization/engineering/acquire-kmz': 'acquire-kmz',
    '/pre-mobilization/engineering/scheduling': 'scheduling',
    '/pre-mobilization/engineering/project-contract-review': 'project-contract-review',
    '/pre-mobilization/engineering/vendor-contract-review': 'vendor-contract-review',
    '/pre-mobilization/engineering/subcontract-review': 'subcontract-review',
    '/pre-mobilization/engineering/receive-estimate': 'receive-estimate',
    '/pre-mobilization/engineering/review-exhibit-k': 'review-exhibit-k',
    '/pre-mobilization/engineering/verify-swi-installation-manual': 'verify-swi-installation-manual',
    '/pre-mobilization/engineering/take-offs': 'take-offs',
    '/pre-mobilization/engineering/resource-planning-equipment': 'resource-planning-equipment',
    '/mobilization/office-setup/logistics-plan-laydown-selection-areas': 'logistics-plan-laydown-selection-areas',
    '/mobilization/office-setup/prebuild-staging-area': 'prebuild-staging-area',
    '/mobilization/office-setup/defining-team-members': 'defining-team-members',
    '/mobilization/office-setup/verify-safety-team-ppe': 'verify-safety-team-ppe',
    '/mobilization/office-setup/quantity-tracking-board': 'quantity-tracking-board',
    '/timeline': 'timeline',
    // Add more mappings as we create more pages
  };
  
  // Map page IDs to URL paths
  const pageIdToPath = {
    'home': '/',
    'csv-file': '/pre-mobilization/engineering/csv-file',
    'acquire-kmz': '/pre-mobilization/engineering/acquire-kmz',
    'scheduling': '/pre-mobilization/engineering/scheduling',
    'project-contract-review': '/pre-mobilization/engineering/project-contract-review',
    'vendor-contract-review': '/pre-mobilization/engineering/vendor-contract-review',
    'subcontract-review': '/pre-mobilization/engineering/subcontract-review',
    'receive-estimate': '/pre-mobilization/engineering/receive-estimate',
    'review-exhibit-k': '/pre-mobilization/engineering/review-exhibit-k',
    'verify-swi-installation-manual': '/pre-mobilization/engineering/verify-swi-installation-manual',
    'take-offs': '/pre-mobilization/engineering/take-offs',
    'resource-planning-equipment': '/pre-mobilization/engineering/resource-planning-equipment',
    'logistics-plan-laydown-selection-areas': '/mobilization/office-setup/logistics-plan-laydown-selection-areas',
    'prebuild-staging-area': '/mobilization/office-setup/prebuild-staging-area',
    'defining-team-members': '/mobilization/office-setup/defining-team-members',
    'verify-safety-team-ppe': '/mobilization/office-setup/verify-safety-team-ppe',
    'quantity-tracking-board': '/mobilization/office-setup/quantity-tracking-board',
    'timeline': '/timeline',
    // Add more mappings as we create more pages
  };
  
  // Initialize page from URL on mount
  useEffect(() => {
    const pageFromPath = pathToPageId[pathname];
    if (pageFromPath && pageFromPath !== currentPage) {
      console.log('PageContentContext: Initializing from URL:', pageFromPath);
      setCurrentPage(pageFromPath);
    }
  }, [pathname, currentPage]);
  
  const getPageContent = (pageId) => {
    if (pageId === 'home') {
      return defaultContent;
    }
    // Check mobilization content first, then fall back to pre-mobilization content
    return mobilizationContent[pageId] || pageContent[pageId] || defaultContent;
  };
  
  const navigateToPage = (pageId) => {
    console.log('PageContentContext: Navigating to page:', pageId);
    setCurrentPage(pageId);
    
    // Update URL if we have a mapping
    const newPath = pageIdToPath[pageId];
    if (newPath && newPath !== pathname) {
      router.push(newPath);
    }
  };
  
  const value = {
    currentPage,
    navigateToPage,
    getPageContent,
    currentContent: getPageContent(currentPage)
  };
  
  return (
    <PageContentContext.Provider value={value}>
      {children}
    </PageContentContext.Provider>
  );
}; 