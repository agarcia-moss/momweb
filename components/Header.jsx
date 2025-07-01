"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import { useTheme } from "../contexts/ThemeContext";
import { usePageContent } from "../contexts/PageContentContext";

const navItems = [
  {
    label: "Pre-Mobilization",
    dropdown: [
      { 
        label: "Engineering",
        dropdown: [
          { label: "CSV File", pageId: "csv-file" },
          { label: "Acquire KMZ", pageId: "acquire-kmz" },
          { label: "Scheduling", pageId: "scheduling" },
          { label: "Project Contract Review", pageId: "project-contract-review" },
          { label: "Vendor Contract Review", pageId: "vendor-contract-review" },
          { label: "Subcontract Review", pageId: "subcontract-review" },
          { label: "Receive Estimate", pageId: "receive-estimate" },
          { label: "Review Exhibit K", pageId: "review-exhibit-k" },
          { label: "Verify SWI / Installation Manual", pageId: "verify-swi-installation-manual" },
          { label: "Take Offs", pageId: "take-offs" },
          { label: "Resource Planning Equipment", pageId: "resource-planning-equipment" },
          { label: "Resource Planning Manpower" },
          { label: "Labor Acquisition" },
          { label: "N1 Review" },
          { label: "Review Travelers For Each Task" },
          { label: "Pull Schedule" },
          { label: "P6 Schedule" },
          { label: "SharePoint Project Structure" }
        ]
      },
      { 
        label: "Localization",
        dropdown: [
          { label: "Localize Base Station" },
          { label: "Verify Control Points" },
          { label: "Permanent-Temporary Power in Place" },
          { label: "Confirm Office Trailer Delivery Date" }
        ]
      },
    ],
  },
  {
    label: "Mobilization",
    dropdown: [
      { 
        label: "Office Setup",
        dropdown: [
          { label: "Logistics – Plan Laydown Selection Areas", pageId: "logistics-plan-laydown-selection-areas" },
          { label: "Prebuild Staging Area (if required)", pageId: "prebuild-staging-area" },
          { label: "Defining Team Members for Supervision Roles and Responsibilities", pageId: "defining-team-members" },
          { label: "Verify Safety Team PPE Onsite-Ordered", pageId: "verify-safety-team-ppe" },
          { label: "Quantity Tracking Board", pageId: "quantity-tracking-board" },
          { label: "Ordering Connex Portalets Water Ice Fuel" },
          { label: "Ordering Tool Connex" },
          { label: "Man Power Board" },
          { label: "Equipment Ordering" }
        ]
      },
      { 
        label: "Schedule",
        dropdown: [
          { label: "Training Schedule" },
          { label: "Material Delivery Schedule" },
          { label: "Equipment Delivery Schedule" },
          { label: "Set Build Sequence" }
        ]
      },
      { 
        label: "Manpower",
        dropdown: [
          { label: "Coordination with HR when admin will be onsite" },
          { label: "Hiring Processes" },
          { label: "Requesting People" },
          { label: "Terminating People" }
        ]
      },
      { 
        label: "Working Files-Ongoing Actions",
        dropdown: [
          { label: "Dig Permits" },
          { label: "Incident Reporting" },
          { label: "Pricing change Orders" },
          { label: "Latest SWIs" },
          { label: "JSA" },
          { label: "Problem Escalation Process" },
          { label: "Daily Tracker" },
          { label: "Forms Processes" },
          { label: "Job Planning" },
          { label: "Training" },
          { label: "How to Track Material" }
        ]
      },
    ],
  },
  { label: "Piles" },
  { label: "Racking" },
  { label: "PV" },
  { label: "De-Mobilization" },
  { label: "Timeline" },
  { label: "Help" },
];

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { navigateToPage } = usePageContent();
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [toggleAnim, setToggleAnim] = useState(false);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fun scale animation on toggle
  const handleToggleClick = () => {
    setToggleAnim(true);
    toggleDarkMode();
    setTimeout(() => setToggleAnim(false), 250);
  };

  const handleDropdownClick = (label) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else {
      setActiveDropdown(label);
      setActiveSubDropdown(null);
    }
  };

  const handleSubDropdownClick = (label) => {
    if (activeSubDropdown === label) {
      setActiveSubDropdown(null);
    } else {
      setActiveSubDropdown(label);
    }
  };

  const handleNavigation = (pageId) => {
    console.log('Navigating to page:', pageId);
    
    // Map page IDs to routes
    const pageRoutes = {
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
      'home': '/',
      // Add more mappings as we create more pages
    };
    
    const route = pageRoutes[pageId];
    if (route) {
      router.push(route);
    } else {
      // Fallback to content change if no route exists
      navigateToPage(pageId);
    }
    
    setActiveDropdown(null);
    setActiveSubDropdown(null);
  };

  const renderDropdown = (items, parentLabel = null) => {
    return (
      <div
        ref={dropdownRef}
        className={`absolute left-0 mt-2 min-w-[200px] rounded-md shadow-lg z-50 py-2 ${
          isDarkMode ? 'bg-[#222] border border-[#333]' : 'bg-white border border-gray-200'
        }`}
      >
        {items.map((option) => (
          <div key={option.label} className="relative">
            <button
              className={`block w-full text-left px-4 py-2 text-base font-medium transition-colors rounded-md ${
                isDarkMode
                  ? 'text-white hover:bg-[#333]'
                  : 'text-neutral-800 hover:bg-gray-100'
              }`}
              onClick={() => {
                if (option.dropdown) {
                  handleSubDropdownClick(option.label);
                } else {
                  // Use pageId if available, otherwise generate from label
                  const pageId = option.pageId || option.label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                  handleNavigation(pageId);
                }
              }}
              tabIndex={0}
            >
              <div className="flex justify-between items-center">
                <span>{option.label}</span>
                {option.dropdown && (
                  <svg
                    className={`w-3 h-3 ml-2 transition-transform ${
                      activeSubDropdown === option.label ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            </button>
            {option.dropdown && activeSubDropdown === option.label && (
              <div className="absolute left-full top-0 ml-1">
                {renderDropdown(option.dropdown, option.label)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className={`w-full ${isDarkMode ? 'bg-green-900' : 'bg-green-900'}`}>
      <nav className="w-full">
        {/* Top banner with breadcrumb */}
        <div className="flex justify-between items-center px-20 py-[13px] w-full text-lg font-semibold text-white border-b border-solid border-b-[color:var(--Brand-Color-Light-Mode,#006B35)]">
          <div className="flex items-center gap-[13px] h-[29px]">
            <a href="/" className="text-center text-white leading-[27px]">
              Home
            </a>
            <span className="text-center text-white leading-[28.8px]">
              /
            </span>
            <a
              href="/pre-mobilization"
              className="text-center text-white leading-[27px]"
            >
              Pre-mobilization
            </a>
            <span className="text-center text-white leading-[28.8px]">
              /
            </span>
            <a
              href="/engineering"
              className="text-center text-white leading-[28.8px]"
            >
              Engineering
            </a>
          </div>
          <div className="flex justify-end items-center gap-6">
            <h1 className="text-white leading-[25.2px]">
              MOM - MECHANICAL OPERATIONS MANUAL
            </h1>
          </div>
        </div>

        {/* Main navigation */}
        <div className={`flex flex-wrap gap-10 justify-between items-center px-20 py-6 w-full ${isDarkMode ? 'bg-[#121212]' : 'bg-white'} max-md:px-5 max-md:max-w-full`}>
          <div className="flex gap-2 items-center self-stretch my-auto h-[60px] min-w-60 w-[250px]">
            <Logo />
          </div>

          <div className="flex flex-wrap gap-5 items-center self-stretch my-auto text-lg font-semibold leading-none text-center whitespace-nowrap min-w-60 max-md:max-w-full">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => handleDropdownClick(item.label)}
                      className={`flex gap-1 justify-center items-center self-stretch my-auto transition-colors px-2 py-1 rounded-md ${
                        isDarkMode 
                          ? 'text-white hover:text-[#33FF99]' 
                          : 'text-neutral-800 hover:text-emerald-800'
                      }`}
                    >
                      <span className="self-stretch my-auto">{item.label}</span>
                      <svg
                        className={`w-3 h-3 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.label && renderDropdown(item.dropdown, item.label)}
                  </>
                ) : (
                  <button
                    onClick={() => {
                      if (item.label === "Timeline") {
                        handleNavigation("timeline");
                      }
                    }}
                    className={`flex gap-1 justify-center items-center self-stretch my-auto transition-colors px-2 py-1 rounded-md ${
                      isDarkMode 
                        ? 'text-white hover:text-[#33FF99]' 
                        : 'text-neutral-800 hover:text-emerald-800'
                    }`}
                  >
                    <span className="self-stretch my-auto">{item.label}</span>
                    {item.label !== "Help" && item.label !== "Timeline" && (
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-4 justify-center items-center self-stretch py-2.5 px-1 my-auto">
            <span className={`text-base font-medium ${
              isDarkMode ? 'text-white' : 'text-neutral-700'
            }`}>
              DARK MODE
            </span>
            <button
              onClick={handleToggleClick}
              className={`relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                isDarkMode 
                  ? 'bg-emerald-600' 
                  : 'bg-gray-300'
              } ${toggleAnim ? 'scale-110' : ''}`}
              role="switch"
              aria-checked={isDarkMode}
              aria-label="Toggle dark mode"
              style={{ minWidth: 64 }}
            >
              <span
                className={`inline-flex items-center justify-center h-8 w-8 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out absolute top-1 left-1 ${
                  isDarkMode ? 'translate-x-10' : 'translate-x-0'
                }`}
              >
                {isDarkMode ? (
                  <svg className="h-5 w-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              {/* Track background */}
              <span className="block h-10 w-20 opacity-0" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
