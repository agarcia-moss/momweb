export const pageContent = {
  "csv-file": {
    operationalObjective: {
      title: "CSV File for Site Mapping",
      description: "To obtain and verify CSV file data for accurate pile placement, ensuring proper layout of production piles, inverters, cab piles, roads, laydown areas, and MV runs."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Pile Assistant Superintendent – Uploads file to GPS equipment vendor (ex. Carlson) and verifies accuracy",
        "Site Superintendent – Oversees the process and ensures proper implementation",
        "Pile Superintendent – QCs the file before pushing it to site level"
      ],
      resourcesNeeded: [
        "CSV file from Racking manufacturing vendor (typically issued at 90% or after IFC)",
        "GPS Equipment vendor ready for file upload",
        "Control points for verification",
        "TP3 in Office 3D (pneedle format) for conversion"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for acquiring, preparing, and utilizing vendor-provided CSV data for GPS-guided pile driving operations. The steps below ensure data integrity from initial receipt through to accurate field execution with GPS equipment.",
      steps: [
        {
          number: "01",
          title: "Receive CSV file from vendor",
          description: "Receive CSV file from vendor (via VP, Estimating, PM, SPE, Site Super, General Super, or Director)"
        },
        {
          number: "02", 
          title: "Verify the percentage of the file",
          description: "Verify the percentage of the file (30%/60%/90%)"
        },
        {
          number: "03",
          title: "Convert to TP3 in Office 3D",
          description: "Convert to TP3 in Office 3D (pneedle format)"
        },
        {
          number: "04",
          title: "Ensure pile ID exists for every pile",
          description: "Ensure pile ID exists for every pile with northern and eastern coordinates and description (color)"
        },
        {
          number: "05",
          title: "Upload file onto the GPS equipment vendor portal",
          description: "Upload file onto the GPS equipment vendor portal"
        },
        {
          number: "06",
          title: "Verify established control points",
          description: "Verify established control points"
        },
        {
          number: "07",
          title: "Check communication status",
          description: "Check communication status between GPS equipment and PD10"
        },
        {
          number: "08",
          title: "Begin driving piles",
          description: "Begin driving piles at designated locations"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Typically received at 90% design or after IFC (Issued for Construction)",
        "Must be in place before pile driving operations can begin"
      ],
      storage: [
        "TBD (Look into SharePoint storage)",
        "Local copy (Flash drive zip tied to base station/rack)"
      ]
    },
    additionalNotes: [
      "A CSV (Comma-Separated Values) file is a simple text file used to store tabular data, such as spreadsheets or databases, in a structured format. Each line in a CSV file represents a row of data, and values are typically separated by commas.",
      "The file is provided by the Racking manufacturing vendor of the build, sometimes issued at 90% but most often after IFC.",
      "The file gets sent to Bill who QCs it and then pushes it out to the site level.",
      "The file should be verified and checked by superintendent level and above, including seniors/generals.",
      "The file must be converted to TP3 in Office 3D with pneedle format.",
      "Every pile on the site must have a pile ID."
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Pile Superintendent/General Superintendent – Accountable for file discrepancies"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "acquire-kmz": {
    operationalObjective: {
      title: "Acquire KMZ File for Site Mapping",
      description: "To obtain a preliminary KMZ file used for establishing lay-down areas, preliminary mapping, and ensuring early-stage site planning aligns with project requirements."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Verifies accuracy and applies file to planning",
        "Surveyor – Uses KMZ to validate site points on ground",
        "Project Manager/Estimator – May initiate request or provide source file"
      ],
      resourcesNeeded: [
        "Project KMZ file (compressed KML)",
        "Preliminary site layout or project folder access",
        "Access to Google Earth/GIS viewer software"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for acquiring and preparing a KMZ file used in early-stage site planning. The steps below ensure consistent identification of key layout zones while minimizing data conflicts across project systems.",
      steps: [
        {
          number: "01",
          title: "Request or retrieve KMZ file",
          description: "Request or retrieve KMZ file from Estimating, PM, or regional folder"
        },
        {
          number: "02",
          title: "Open in Google Earth to verify",
          description: "Open in Google Earth to verify general site boundaries and overlay accuracy"
        },
        {
          number: "03",
          title: "Identify and mark preliminary areas",
          description: "Identify and mark preliminary lay-down, staging, and office trailer areas"
        },
        {
          number: "04",
          title: "Cross-reference with data",
          description: "Cross-reference with any CSV or Civil data for overlap/conflict"
        },
        {
          number: "05",
          title: "Save finalized version",
          description: "Save finalized version to SharePoint > [Project Name] > Survey > KMZ Folder"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Triggered during Pre-Mobilization phase, before field layout begins",
        "Ideally completed prior to Civil mobilization for better planning of site setup"
      ],
      storage: [
        "SharePoint > [Project Folder] > Survey > KMZ Files"
      ]
    },
    additionalNotes: [
      "Some projects receive KMZ file from estimating; others may require retrieval from shared project folders",
      "It's common to realign the KMZ once actual survey points are established",
      "Helpful reference tool for site preliminary mapping and planning"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Confirms file matches planned site intent"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Surveyor – Validates on-ground alignment"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Project Manager/Director (optional) – Sign-off if major deviations from site plan are needed"
      }
    ],
    references: [
      "[Include link for step-by-step instructions on uploading the file to Google Earth app]"
    ]
  },
  "scheduling": {
    operationalObjective: {
      title: "Scheduling",
      description: "To establish a comprehensive schedule for all work-related activities, ensuring proper coordination between trades, efficient resource allocation, and timely project completion."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Responsible for scheduling all work-related activities in the field and providing support/management to field teams",
        "Field Project Administrator – Assists with hiring process",
        "Safety – Schedules site orientations and related safety meetings/updates",
        "Project Manager – Coordinates higher-level scheduling with client and other stakeholders",
        "Assistant Project Manager/Project Engineer – Assists with scheduling and documentation"
      ],
      resourcesNeeded: [
        "Weather forecasts and conditions",
        "Project estimate",
        "Holiday schedule",
        "Internal P6 (project timelines and milestones)",
        "Owner supplied schedules (PV materials)",
        "Vendor supplied schedules (pile and racking materials)",
        "Resource availability (manpower, equipment, materials)",
        "Coordination requirements with other trades"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for comprehensive project planning and coordination, encompassing considerations for weather, inter-trade workflow, safety, and logistical scheduling. The steps below ensure proactive management of project activities, resource allocation, and stakeholder communication to meet key milestones and maintain operational efficiency.",
      steps: [
        {
          number: "01",
          title: "Consider weather conditions and work flow",
          description: "Consider weather conditions and flow of work by other trades when planning build sequence"
        },
        {
          number: "02",
          title: "Coordinate with civil and other trades",
          description: "Coordinate with civil and other trades to ensure areas are ready for work to start"
        },
        {
          number: "03",
          title: "Coordinate with electrical throughout project",
          description: "Coordinate with electrical throughout project lifecycle to ensure areas are clear prior to beginning ground-breaching tasks (MV and pile install coordination)"
        },
        {
          number: "04",
          title: "Schedule task kickoffs",
          description: "Schedule task kickoffs at least 2 weeks prior to activity start"
        },
        {
          number: "05",
          title: "Schedule regular items",
          description: "Schedule regular items (POD, Budget Review, Equipment Review, Trainings, Ice/water/fuel, Toilets)"
        },
        {
          number: "06",
          title: "Schedule deliveries",
          description: "Schedule deliveries for materials and hardware/modules"
        },
        {
          number: "07",
          title: "Plan All Hands and Safety Meetings",
          description: "Plan All Hands and Safety Meetings"
        },
        {
          number: "08",
          title: "Schedule SQPP reviews",
          description: "Schedule SQPP (Safety Quality Production Profitability) reviews"
        },
        {
          number: "09",
          title: "Plan out Golden Row installation",
          description: "Plan out Golden Row installation"
        },
        {
          number: "10",
          title: "Schedule regular QC/owner walkdowns",
          description: "Schedule regular QC/owner walkdowns"
        },
        {
          number: "11",
          title: "Consider other major milestones",
          description: "Consider any other major milestones"
        },
        {
          number: "12",
          title: "Update Mechanical Daily Tracker",
          description: "Update Mechanical Daily Tracker"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Schedule development should begin during pre-mobilization phase",
        "Updates should occur weekly or as conditions change"
      ],
      storage: [
        "Project SharePoint (P6 Schedule location)",
        "Project SharePoint (Site superintendent controls access to pull schedule)",
        "On-site scheduling boards (Include photo example)"
      ]
    },
    additionalNotes: [
      "[NA – this will be added in the future]"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Senior Superintendent – Final approval of pull schedule"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Project Manager – Reviews P6 for alignment with overall project timeline"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "General Superintendent/Director – Optional review for major schedule changes"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "project-contract-review": {
    operationalObjective: {
      title: "Project Contract Review",
      description: "To ensure thorough understanding of contractual obligations, requirements, and specifications before project execution begins, allowing for proper planning and resource allocation."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Responsible for reviewing contracts and channeling information to team",
        "Senior Superintendent – Provides oversight and guidance",
        "Director – Initial higher-level review",
        "Project Manager – Assists with contract interpretation and clarification"
      ],
      resourcesNeeded: [
        "Complete contract documentation",
        "Project specifications",
        "Site-specific requirements",
        "Exhibit K (if applicable)",
        "IRA requirements (if applicable)"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for contract review, revision, and dissemination within the project team. The steps below ensure thorough examination of contractual obligations, incorporation of site-specific requirements, and clear communication of finalized terms to all relevant personnel for effective project execution.",
      steps: [
        {
          number: "01",
          title: "Receive contract from VP, Director, or PM",
          description: "Receive contract from VP, Director of the region, or Project Manager"
        },
        {
          number: "02",
          title: "Initial higher-level review by Director",
          description: "Initial higher-level review by Director"
        },
        {
          number: "03",
          title: "Identify site-specific requirements",
          description: "Identify site-specific requirements and note corrections/updates needed"
        },
        {
          number: "04",
          title: "Submit preliminary changes to estimating",
          description: "Submit preliminary changes to estimating for re-pricing/re-bid"
        },
        {
          number: "05",
          title: "Finalize contract and establish schedule",
          description: "Finalize contract and establish schedule"
        },
        {
          number: "06",
          title: "Distribute finalized contract to team",
          description: "Distribute finalized contract to Site Superintendent and field team (PM, PE's, APM's)"
        },
        {
          number: "07",
          title: "Site Superintendent reviews and communicates",
          description: "Site Superintendent reviews contract details and communicates relevant information to team members"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Contract review should occur during pre-mobilization phase",
        "Review should be completed before estimate is generated",
        "Updates may be required if significant changes occur during project"
      ],
      storage: [
        "[Project SharePoint Folder]"
      ]
    },
    additionalNotes: [
      "Pricing Change Orders:",
      "Site Superintendent is responsible for putting together change order details and PCO",
      "Earn sheet is used to input prices along with self-perform budget tracker",
      "Change orders are reviewed by Senior/General Superintendent and Director of the region",
      "Change orders should be submitted as soon as possible to recoup costs",
      "PCOs that go too long without being submitted may not always be accepted",
      "Project Management team is the resource for assistance with cost uncertainties",
      "",
      "Mechanical Self-Perform Responsibilities:",
      "Own everything Mechanical, including piles, racking and PV installation",
      "Own the Estimator-Doer model for Mechanical operations, using Estimating for support",
      "Own and manage safety for Mechanical operations, using Safety for support",
      "Perform work in a timely manner to ensure Electrical can meet their schedule",
      "Work with Operations and Electrical to create a Site Logistics Plan",
      "Coordinate Mechanical's plan regularly with Project Management team",
      "Participate in alignment meetings with applicable teams before beginning major tasks",
      "",
      "Project Budget Tracker:",
      "Located in SharePoint in Division 710 'solar ops' under the 'self-perform budget tracker'",
      "Contains tabs at the bottom for every project",
      "Must be updated every week by noon on Monday morning",
      "Provides actual data for cost vs earned",
      "Valuable tool to track curves and determine when adjustments are needed",
      "Actual costs should be tracked separately to monitor profitability before updates"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Director – Initial review and approval"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Senior Superintendent – Secondary review"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Site Superintendent – Final review before implementation"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "vendor-contract-review": {
    operationalObjective: {
      title: "Vendor Contract Review",
      description: "To ensure all contracts with material suppliers and service vendors align with project requirements, budget constraints, schedule needs, and company standards before execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Project Manager (PM) – Primary responsibility for reviewing vendor contracts",
        "General Superintendent – Provides input on site-specific requirements, logistics, and schedule impacts",
        "Procurement Department – Supports negotiation and ensures compliance with company procurement policies",
        "Legal Department (as needed) – Reviews complex or non-standard terms and conditions"
      ],
      resourcesNeeded: [
        "Draft vendor contract or purchase order",
        "Project specifications relevant to the vendor's scope",
        "Project schedule (highlighting key delivery or service dates)",
        "Project budget for the specific materials or services",
        "Company standard terms and conditions (if applicable)",
        "Relevant sections of the prime contract (flow-down requirements)"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the detailed review and finalization of vendor purchase orders and associated contractual documents. The steps below ensure comprehensive verification of scope, pricing, schedule, and terms, including risk assessment and necessary negotiations, prior to distribution to the project team.",
      steps: [
        {
          number: "01",
          title: "Receive executed PO and supporting documents",
          description: "Receive executed PO and supporting documents from vendor or procurement"
        },
        {
          number: "02",
          title: "Verify vendor scope alignment",
          description: "Verify vendor scope aligns with project requirements and specifications"
        },
        {
          number: "03",
          title: "Confirm pricing matches budget",
          description: "Confirm pricing matches approved budget and quotes"
        },
        {
          number: "04",
          title: "Review delivery or service schedule",
          description: "Review delivery or service schedule; ensure alignment with project schedule"
        },
        {
          number: "05",
          title: "Review terms and conditions",
          description: "Review terms and conditions, including: Warranties, Indemnification, Insurance requirements, Liquidated damages (if applicable), Change order procedures, Termination clauses"
        },
        {
          number: "06",
          title: "Identify non-standard or high-risk clauses",
          description: "Identify any non-standard or high-risk clauses requiring legal review"
        },
        {
          number: "07",
          title: "Coordinate review with General Superintendent",
          description: "Coordinate review with General Superintendent for logistical feasibility (delivery access, storage, etc.)"
        },
        {
          number: "08",
          title: "Negotiate necessary changes",
          description: "Negotiate necessary changes with the vendor, involving procurement as needed"
        },
        {
          number: "09",
          title: "Distribute executed contract to team",
          description: "Distribute executed contract to relevant team members (Superintendent, Assistant Superintendent, Field Engineer)"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Triggered upon receiving executed PO from procurement team/project management team",
        "Typically occurs during the Pre-Mobilization or early Mobilization phases"
      ],
      storage: [
        "SharePoint > [Project Folder] > 02. Accounting & Contracts > Subcontracts"
      ]
    },
    additionalNotes: [
      "Pay close attention to flow-down requirements from the prime contract",
      "Clearly define delivery terms (FOB point, responsibility for offloading)",
      "Document all negotiations and agreed-upon changes",
      "Understand the process for handling defective materials or services under the contract",
      "Confirm vendor understands and can comply with site safety requirements"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "General Superintendent – Logistical and schedule review"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Project Manager/Procurement Department – Overall review and negotiation lead"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Legal Department – As required for non-standard terms"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "subcontract-review": {
    operationalObjective: {
      title: "Subcontract Review",
      description: "To ensure all agreements with subcontractors clearly define the scope of work, responsibilities, safety requirements, quality standards, schedule, and commercial terms, while mitigating risks and ensuring compliance with the prime contract and company policies before execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Project Manager – Primary responsibility for negotiating and finalizing subcontract agreements",
        "Site Superintendent – Reviews scope, schedule, logistics, safety plan, and provides operational input",
        "Assistant Project Manager/Project Engineer – Assists with technical scope review, drawing/specification alignment",
        "Safety Manager – Reviews subcontractor safety plan and qualifications",
        "Quality Manager – Reviews quality requirements and inspection protocols",
        "Legal Department – Reviews terms and conditions, especially non-standard clauses",
        "Director/VP (as per Delegation of Authority) – Initial review and approval of subcontract work, final execution approval"
      ],
      resourcesNeeded: [
        "Draft subcontract agreement",
        "Subcontractor proposal/bid",
        "Detailed Scope of Work (SOW) document",
        "Relevant project drawings and specifications",
        "Project schedule (highlighting subcontractor milestones)",
        "Subcontractor prequalification information (safety record, financial stability, experience)",
        "Subcontractor Site-Specific Safety Plan",
        "Insurance certificate requirements",
        "Bonding requirements (if applicable)",
        "Prime contract (for flow-down clauses)"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the comprehensive review, negotiation, and execution of subcontractor agreements. The steps below ensure thorough verification of the scope of work, pricing, schedule, safety, quality, and contractual terms, including legal consultation for high-risk clauses, culminating in a fully executed and properly filed agreement.",
      steps: [
        {
          number: "01",
          title: "Receive draft subcontract and supporting documents",
          description: "Receive draft subcontract and supporting documents following subcontractor selection"
        },
        {
          number: "02",
          title: "Verify Scope of Work (SOW)",
          description: "Verify Scope of Work (SOW) is clear, complete, and aligns with project needs and subcontractor bid"
        },
        {
          number: "03",
          title: "Confirm pricing, payment schedule, and retention terms",
          description: "Confirm pricing, payment schedule, and retention terms align with bid and project budget"
        },
        {
          number: "04",
          title: "Review schedule requirements and milestones",
          description: "Review schedule requirements, milestones, and coordination needs with Site Superintendent"
        },
        {
          number: "05",
          title: "Review Safety Manager input",
          description: "Review Safety Manager input on subcontractor safety plan and qualifications"
        },
        {
          number: "06",
          title: "Review Quality Manager input",
          description: "Review Quality Manager input on quality requirements and inspection responsibilities"
        },
        {
          number: "07",
          title: "Verify insurance and bonding requirements",
          description: "Verify insurance and bonding requirements are clearly stated and meet project/prime contract needs"
        },
        {
          number: "08",
          title: "Review general terms and conditions",
          description: "Review general terms and conditions, focusing on: Indemnification, Warranties, Change order process, Dispute resolution, Termination clauses, Compliance with laws and regulations, Flow-down provisions from the prime contract"
        },
        {
          number: "09",
          title: "Identify deviations and engage Legal Department",
          description: "Identify any deviations from standard terms or high-risk clauses; engage Legal Department for review"
        },
        {
          number: "10",
          title: "Negotiate necessary revisions",
          description: "Negotiate necessary revisions with the subcontractor, led by the PM"
        },
        {
          number: "11",
          title: "Obtain final sign-offs from all internal reviewers",
          description: "Obtain final sign-offs from all internal reviewers (Superintendent, Safety, Quality, Legal as needed)"
        },
        {
          number: "12",
          title: "Execute the subcontract agreement",
          description: "Execute the subcontract agreement"
        },
        {
          number: "13",
          title: "Distribute executed subcontract to team",
          description: "Distribute executed subcontract to relevant team members"
        },
        {
          number: "14",
          title: "File executed subcontract and required attachments",
          description: "File executed subcontract and required attachments (insurance certs, bonds, safety plan) in the project folder"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Triggered after subcontractor selection and receipt of draft agreement",
        "Typically occurs during Pre-Mobilization or early Mobilization phases",
        "Must be completed and executed before the subcontractor mobilizes or commences work on site",
        "Allow sufficient time for review cycles (Safety, Quality, Legal) and negotiation"
      ],
      storage: [
        "SharePoint > [Project Folder] > 02. Accounting & Contracts > Subcontracts",
        "Review comments and negotiation records: May be stored within the subcontract folder or PM working files"
      ]
    },
    additionalNotes: [
      "Ensure the Scope of Work is extremely detailed to avoid disputes; clearly define inclusions and exclusions",
      "Verify all required flow-down clauses from the prime contract are included",
      "Confirm subcontractor insurance certificates are received, compliant, and maintained throughout their work",
      "Ensure bonding requirements are met before mobilization if applicable",
      "Clearly define site rules, access, work hours, and coordination procedures",
      "The approved Site-Specific Safety Plan should be an attachment to the subcontract",
      "Understand the process for back-charges if the subcontractor fails to perform"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Assistant Project Manager/Project Engineer – Technical scope review"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Site Superintendent – Operational review (Scope, Schedule, Logistics)"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Safety Manager – Safety plan and qualifications review"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Quality Manager – Quality requirements review"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Project Manager – Overall review, negotiation lead, commercial terms"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Legal Department – As required for non-standard terms/high risk"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Director/VP (as per Delegation of Authority) – Initial review and approval, final execution approval"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "approvalSection": {
    approvers: [
      {
        icon: "user",
        text: "Pile Superintendent/General Superintendent – Accountable for file discrepancies"
      }
    ]
  },
  "referenceSection": {
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "receive-estimate": {
    operationalObjective: {
      title: "Receive Estimate",
      description: "To receive, review, and understand the project estimate to ensure proper planning, resource allocation, and execution of the project according to budgetary constraints."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Responsible for reviewing the estimate and coordinating with task leaders",
        "Senior Superintendent/General Superintendent – Reviews changes/differences identified by Site Superintendent",
        "Director – Responsible for generating and distributing estimate, makes decisions on personnel placement and approves changes",
        "Task Leaders – Review their specific portions of the earn sheet with Site Superintendent"
      ],
      resourcesNeeded: [
        "Project estimate from General Superintendent or Director of Region",
        "Earn sheets for each task",
        "Project plans and specifications",
        "Site-specific requirements and conditions"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for detailed estimate review, site-specific takeoff adjustments, and preliminary resource planning. The steps below ensure thorough reconciliation of initial estimates with actual project requirements, identification and pricing of necessary change orders, and strategic manpower allocation in preparation for project execution.",
      steps: [
        {
          number: "01",
          title: "Receive estimate from General Superintendent or Director of Region",
          description: "Receive estimate from General Superintendent or Director of Region"
        },
        {
          number: "02",
          title: "Begin preliminary takeoff and redline plans",
          description: "Begin preliminary takeoff and redline plans to identify adjustments needed based on actual site requirements. Verify estimate matches MechTech"
        },
        {
          number: "03",
          title: "Work with Senior/General Superintendent to escalate process",
          description: "Work with Senior/General Superintendent to escalate process and verify differences between estimate and actual requirements"
        },
        {
          number: "04",
          title: "Price out any change orders",
          description: "Price out any change orders that need to be submitted to the client"
        },
        {
          number: "05",
          title: "Begin planning for appropriate manpower",
          description: "Begin planning for appropriate manpower with approval from Senior/General/Director"
        },
        {
          number: "06",
          title: "Review estimate vs. plans and takeoffs",
          description: "Review estimate vs. plans and takeoffs to verify quantities"
        },
        {
          number: "07",
          title: "Meet with each person in charge of a task",
          description: "Meet with each person in charge of a task to review their earn sheet, allowances, and timeframes"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Estimate should be received during pre-mobilization phase",
        "Review should be completed before task/job startup"
      ],
      storage: [
        "Mechanical Ops – Team Documents > 01. Self-Perform Estimates > 02. Estimates > Pick Year > 01. Awarded"
      ]
    },
    additionalNotes: [
      "Consider whether site teams would benefit from a full understanding of the estimate and a review of the estimate in its entirety prior to task/job startup",
      "If an estimate doesn't include or has additional work not being performed onsite (e.g., Texas with Hard setting), notify Senior Superintendent immediately to address the discrepancy"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Initial review of estimate"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Senior/General Superintendent – Reviews changes identified by Site Superintendent"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Director – Final approval of any significant changes or adjustments"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "review-exhibit-k": {
    operationalObjective: {
      title: "Review Exhibit K",
      description: "To thoroughly review and understand Exhibit K, which contains critical project specifications, requirements, and deliverables, ensuring compliance with contractual obligations and proper project execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Primary responsibility for reviewing and understanding Exhibit K",
        "Project Manager – Assists with interpretation and clarification",
        "Senior/General Superintendent – Provides oversight and guidance as needed",
        "Task Leaders – Review portions relevant to their specific tasks",
        "Mechanical Procurement – Help coordinate supplier scheduling and scope"
      ],
      resourcesNeeded: [
        "Exhibit K document from contract package",
        "Project specifications and drawings",
        "Any related contract documents or addenda",
        "Previous project experience with similar requirements"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the comprehensive review, dissemination, and integration of 'Exhibit K' requirements into project planning and execution. The steps below ensure a thorough understanding of all specifications and deliverables, alignment of project activities with the stipulated timeline, and ongoing compliance monitoring.",
      steps: [
        {
          number: "01",
          title: "Receive Exhibit K as part of the contract package",
          description: "Receive Exhibit K as part of the contract package from Director/General Superintendent, Project Manager, or Mechanical Procurement"
        },
        {
          number: "02",
          title: "Review document thoroughly",
          description: "Review document thoroughly, noting all requirements, specifications, and deliverables"
        },
        {
          number: "03",
          title: "Consult with Project Manager or Senior Superintendent",
          description: "Consult with Project Manager or Senior Superintendent for clarification on ambiguous items"
        },
        {
          number: "04",
          title: "Analyze schedule from Exhibit K",
          description: "Analyze schedule from Exhibit K and ensure project activities cater to timeline"
        },
        {
          number: "05",
          title: "Share relevant portions with task leaders",
          description: "Share relevant portions with task leaders and ensure they understand requirements specific to their areas"
        },
        {
          number: "06",
          title: "Incorporate Exhibit K requirements",
          description: "Incorporate Exhibit K requirements into project planning and execution strategy"
        },
        {
          number: "07",
          title: "Establish tracking mechanisms",
          description: "Establish tracking mechanisms for ongoing compliance with Exhibit K requirements"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial review should occur during pre-mobilization phase",
        "Detailed review should be completed before task/job startup",
        "Ongoing reference throughout project execution"
      ],
      storage: [
        "Project SharePoint folder",
        "Site Superintendent's files",
        "Accessible to all relevant team members"
      ]
    },
    additionalNotes: [
      "Exhibit K typically contains specific project requirements, deliverables, and acceptance criteria",
      "Pay special attention to any requirements that differ from standard practices or previous projects",
      "If Exhibit K contains conflicting information with other contract documents, notify Project Manager immediately",
      "Consider creating a simplified checklist of key requirements for easy reference during project execution",
      "Highlight any items in Exhibit K that may require additional resources, time, or specialized equipment"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and implementation"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Project Manager – Secondary review and clarification"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Oversight and guidance as needed"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "verify-swi-installation-manual": {
    operationalObjective: {
      title: "Verify SWI / Installation Manual",
      description: "To review Standard Work Instructions (SWI) and Installation Manuals to ensure alignment with project requirements, identify any gaps in documentation, and establish a clear understanding of installation procedures for proper project execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Primary responsibility for reviewing SWIs and Installation Manuals checking for accurate procedures",
        "Task Leaders – Review SWIs relevant to their specific tasks, identifying any discrepancies with site/system requirements and current procedures",
        "Senior/General Superintendent – Provides oversight and guidance for SWI implementation",
        "Training & Development – Responsible for creating/updating SWI documents"
      ],
      resourcesNeeded: [
        "Standard Work Instructions (SWIs) for all project tasks",
        "Installation Manuals from manufacturers",
        "Project specifications and drawings",
        "Contract requirements",
        "Exhibit K and other relevant contract documents",
        "SWI request and modification procedures"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the comprehensive review, management, and application of Standard Work Instructions (SWIs) and Installation Manuals. The steps below ensure thorough understanding of installation procedures, alignment with project specifications, resolution of discrepancies or deviations, and integration of these instructions into project planning and execution strategies.",
      steps: [
        {
          number: "01",
          title: "Collect all SWIs and Installation Manuals",
          description: "Collect all SWIs and Installation Manuals relevant to the project"
        },
        {
          number: "02",
          title: "Review each SWI and Installation Manual thoroughly",
          description: "Review each SWI and Installation Manual thoroughly to understand installation procedures"
        },
        {
          number: "03",
          title: "Compare SWIs and Installation Manuals against project specifications",
          description: "Compare SWIs and Installation Manuals against project specifications and requirements"
        },
        {
          number: "04",
          title: "Identify any gaps, discrepancies, or missing information",
          description: "Identify any gaps, discrepancies, or missing information in the documentation"
        },
        {
          number: "05",
          title: "Document differences and consult with Senior Superintendent",
          description: "If an SWI deviates from your installation method, document the differences and consult with Senior Superintendent"
        },
        {
          number: "06",
          title: "Follow SWI request and modification procedure",
          description: "For missing or inaccurate SWIs, follow the SWI request and modification procedure outlined here: [Include link for SWI request and modification procedures]"
        },
        {
          number: "07",
          title: "Share relevant SWIs with task leaders",
          description: "Share relevant SWIs with task leaders and ensure they understand the procedures"
        },
        {
          number: "08",
          title: "Incorporate SWI requirements into project planning",
          description: "Incorporate SWI requirements into project planning and execution strategy"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial review should occur during pre-mobilization phase",
        "Detailed review should be completed well before task/job startup",
        "Ongoing reference throughout project execution",
        "Additional review when new SWIs are received or updated"
      ],
      storage: [
        "Reference Training and Development (Mechanical) folder",
        "Site Superintendent's files",
        "Task Leaders' reference materials",
        "Accessible to all relevant team members"
      ]
    },
    additionalNotes: [
      "SWIs provide standardized procedures for consistent quality and efficiency",
      "If an SWI doesn't exist or deviates from your install method, use the SWI request form",
      "Installation Manuals from manufacturers may contain critical warranty information",
      "Deviations from SWIs or Installation Manuals may void warranties or affect quality",
      "Document any approved deviations from standard procedures for future reference"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and implementation"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Task Leaders – Review and implementation of task-specific SWIs"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Oversight and approval of any deviations"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "take-offs": {
    operationalObjective: {
      title: "Take Offs",
      description: "To accurately determine the quantities of materials needed for project execution, ensure proper material allocation, and facilitate efficient inventory management throughout the project lifecycle."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Overall responsibility for takeoff accuracy and material management",
        "Task Leaders – Responsible for task-specific takeoffs and material verification",
        "Project Engineers – Support with takeoff documentation and material tracking",
        "Senior/General Superintendent – Responsible for auditing takeoffs to confirm accuracy"
      ],
      resourcesNeeded: [
        "Project drawings and specifications",
        "Bill of Materials by Array (BBA)",
        "Project schedule and build sequence",
        "Manufacturer specifications and requirements",
        "Historical data from similar projects (if available)",
        "CSV and converted TP3",
        "Rough draft of logistics plan"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for conducting detailed material takeoffs and integrating this data into project planning and execution. The steps below ensure accurate identification and quantification of all necessary materials, alignment with project schedules and sequences, and effective utilization of takeoff data for procurement, inventory management, and progress tracking.",
      steps: [
        {
          number: "01",
          title: "Review project drawings, specifications, and BBA",
          description: "Review project drawings, specifications, and BBA"
        },
        {
          number: "02",
          title: "Identify all materials needed for each project area or task",
          description: "Identify all materials needed for each project area or task"
        },
        {
          number: "03",
          title: "Build out schedules for tasks by area",
          description: "Build out schedules for tasks by area (Follow job sequence)"
        },
        {
          number: "04",
          title: "Calculate quantities for each material type",
          description: "Calculate quantities for each material type based on project requirements"
        },
        {
          number: "05",
          title: "Verify calculations through cross-checking",
          description: "Verify calculations through cross-checking and quality control measures"
        },
        {
          number: "06",
          title: "Document all takeoff quantities",
          description: "Document all takeoff quantities in appropriate tracking systems"
        },
        {
          number: "07",
          title: "Share takeoff information with relevant team members",
          description: "Share takeoff information with relevant team members"
        },
        {
          number: "08",
          title: "Send finalized takeoff to Mechanical Admin team",
          description: "Send finalized takeoff to Mechanical Admin team for project setup"
        },
        {
          number: "09",
          title: "Update takeoffs as needed when project changes occur",
          description: "Update takeoffs as needed when project changes occur"
        },
        {
          number: "10",
          title: "Use takeoff data for material ordering and inventory management",
          description: "Use takeoff data for material ordering, inventory management, and progress tracking"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial takeoffs completed during pre-mobilization phase",
        "Task-specific takeoffs performed before task startup",
        "Inventory reconciliation takeoffs conducted at 25%, 50%, 75%, and 90% completion",
        "Additional takeoffs as needed for material management and verification"
      ],
      storage: [
        "Project SharePoint folder (Look at standardizing filing location for takeoff documents)",
        "MechTech system",
        "Site Superintendent's files",
        "Task-specific tracking documents"
      ]
    },
    additionalNotes: [
      "Takeoffs are essential for accurate material ordering and inventory management",
      "Regular reconciliation of takeoff quantities against actual inventory helps prevent shortages",
      "Coordinate with procurement team to ensure timely material delivery based on takeoffs",
      "Document any discrepancies between takeoff quantities and received materials"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and approval"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Task Leaders – Review of task-specific takeoffs"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Audit finalized takeoffs"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "resource-planning-equipment": {
    operationalObjective: {
      title: "Resource Planning Equipment",
      description: "To effectively plan, track, and manage equipment resources throughout the project lifecycle, ensuring optimal utilization, cost control, and timely availability of equipment to support project activities."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Overall responsibility for equipment planning and management",
        "Equipment Coordinator – Day-to-day equipment tracking and coordination",
        "Project Manager/PE – Support with equipment budgeting and procurement",
        "Task Leaders – Identifying task-specific equipment needs",
        "Senior/General Superintendent – Oversight of equipment allocation across projects/Track budget throughout project lifecycle"
      ],
      resourcesNeeded: [
        "Project schedule and build sequence",
        "Equipment estimates from project budget",
        "Power BI dashboard resource planning data",
        "Task-specific equipment requirements",
        "Equipment specifications",
        "Ensure equipment is rated appropriately for the activity",
        "Ensure delivered equipment complies with current Moss safety standards",
        "Equipment availability information (based on location)"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for managing project equipment allocation, scheduling, and tracking. The steps below ensure that actual onsite equipment aligns with project needs, orders are adjusted accordingly, deliveries are coordinated, and utilization is properly documented and coded.",
      steps: [
        {
          number: "01",
          title: "Access the MechTech dashboard and review equipment schedule",
          description: "Access the MechTech dashboard and review equipment schedule"
        },
        {
          number: "02",
          title: "Compare actual equipment onsite against the planned allocation",
          description: "Compare actual equipment onsite against the planned allocation"
        },
        {
          number: "03",
          title: "Make adjustments to equipment orders based on project needs and schedule",
          description: "Make adjustments to equipment orders based on project needs and schedule"
        },
        {
          number: "04",
          title: "Coordinate equipment deliveries and call-offs with vendors and the equipment coordinator",
          description: "Coordinate equipment deliveries and call-offs with vendors and the equipment coordinator"
        },
        {
          number: "05",
          title: "Document any deviations from the equipment plan and their justifications",
          description: "Document any deviations from the equipment plan and their justifications"
        },
        {
          number: "06",
          title: "Monitor that all equipment is coded appropriately based on task utilization",
          description: "Monitor that all equipment is coded appropriately based on task utilization"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial equipment planning during pre-mobilization phase",
        "Weekly meetings with Equipment Coordinator to review allocations and budgetary constraints",
        "Equipment adjustments based on project progress and schedule changes",
        "Equipment call-offs as tasks are completed"
      ],
      storage: [
        "MechTech dashboard",
        "SharePoint > [Project Folder] > 15. Metrics > Equipment > Equipment Tracking Log",
        "Site Superintendent's files"
      ]
    },
    additionalNotes: [
      "The equipment schedule is based on project estimates and should be reviewed regularly",
      "Site superintendents should make sound judgment calls when ordering additional equipment beyond estimates",
      "Equipment utilization should be maximized to control project costs",
      "Coordinate with other project sites for potential equipment sharing when possible"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and approval of equipment plans"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Equipment Coordinator – Regular monitoring and reporting"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Oversight and approval of significant deviations from plan/Tracking equipment budget"
      }
    ],
    references: [
      "[Include link for step-by-step instructions for checking MechTech dash (picture guide)]"
    ]
  },
  "approvalSection": {
    approvers: [
      {
        icon: "user",
        text: "Pile Superintendent/General Superintendent – Accountable for file discrepancies"
      }
    ]
  },
  "referenceSection": {
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "receive-estimate": {
    operationalObjective: {
      title: "Receive Estimate",
      description: "To receive, review, and understand the project estimate to ensure proper planning, resource allocation, and execution of the project according to budgetary constraints."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Responsible for reviewing the estimate and coordinating with task leaders",
        "Senior Superintendent/General Superintendent – Reviews changes/differences identified by Site Superintendent",
        "Director – Responsible for generating and distributing estimate, makes decisions on personnel placement and approves changes",
        "Task Leaders – Review their specific portions of the earn sheet with Site Superintendent"
      ],
      resourcesNeeded: [
        "Project estimate from General Superintendent or Director of Region",
        "Earn sheets for each task",
        "Project plans and specifications",
        "Site-specific requirements and conditions"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for detailed estimate review, site-specific takeoff adjustments, and preliminary resource planning. The steps below ensure thorough reconciliation of initial estimates with actual project requirements, identification and pricing of necessary change orders, and strategic manpower allocation in preparation for project execution.",
      steps: [
        {
          number: "01",
          title: "Receive estimate from General Superintendent or Director of Region",
          description: "Receive estimate from General Superintendent or Director of Region"
        },
        {
          number: "02",
          title: "Begin preliminary takeoff and redline plans",
          description: "Begin preliminary takeoff and redline plans to identify adjustments needed based on actual site requirements. Verify estimate matches MechTech"
        },
        {
          number: "03",
          title: "Work with Senior/General Superintendent to escalate process",
          description: "Work with Senior/General Superintendent to escalate process and verify differences between estimate and actual requirements"
        },
        {
          number: "04",
          title: "Price out any change orders",
          description: "Price out any change orders that need to be submitted to the client"
        },
        {
          number: "05",
          title: "Begin planning for appropriate manpower",
          description: "Begin planning for appropriate manpower with approval from Senior/General/Director"
        },
        {
          number: "06",
          title: "Review estimate vs. plans and takeoffs",
          description: "Review estimate vs. plans and takeoffs to verify quantities"
        },
        {
          number: "07",
          title: "Meet with each person in charge of a task",
          description: "Meet with each person in charge of a task to review their earn sheet, allowances, and timeframes"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Estimate should be received during pre-mobilization phase",
        "Review should be completed before task/job startup"
      ],
      storage: [
        "Mechanical Ops – Team Documents > 01. Self-Perform Estimates > 02. Estimates > Pick Year > 01. Awarded"
      ]
    },
    additionalNotes: [
      "Consider whether site teams would benefit from a full understanding of the estimate and a review of the estimate in its entirety prior to task/job startup",
      "If an estimate doesn't include or has additional work not being performed onsite (e.g., Texas with Hard setting), notify Senior Superintendent immediately to address the discrepancy"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Initial review of estimate"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Senior/General Superintendent – Reviews changes identified by Site Superintendent"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Director – Final approval of any significant changes or adjustments"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "review-exhibit-k": {
    operationalObjective: {
      title: "Review Exhibit K",
      description: "To thoroughly review and understand Exhibit K, which contains critical project specifications, requirements, and deliverables, ensuring compliance with contractual obligations and proper project execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Primary responsibility for reviewing and understanding Exhibit K",
        "Project Manager – Assists with interpretation and clarification",
        "Senior/General Superintendent – Provides oversight and guidance as needed",
        "Task Leaders – Review portions relevant to their specific tasks",
        "Mechanical Procurement – Help coordinate supplier scheduling and scope"
      ],
      resourcesNeeded: [
        "Exhibit K document from contract package",
        "Project specifications and drawings",
        "Any related contract documents or addenda",
        "Previous project experience with similar requirements"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the comprehensive review, dissemination, and integration of 'Exhibit K' requirements into project planning and execution. The steps below ensure a thorough understanding of all specifications and deliverables, alignment of project activities with the stipulated timeline, and ongoing compliance monitoring.",
      steps: [
        {
          number: "01",
          title: "Receive Exhibit K as part of the contract package",
          description: "Receive Exhibit K as part of the contract package from Director/General Superintendent, Project Manager, or Mechanical Procurement"
        },
        {
          number: "02",
          title: "Review document thoroughly",
          description: "Review document thoroughly, noting all requirements, specifications, and deliverables"
        },
        {
          number: "03",
          title: "Consult with Project Manager or Senior Superintendent",
          description: "Consult with Project Manager or Senior Superintendent for clarification on ambiguous items"
        },
        {
          number: "04",
          title: "Analyze schedule from Exhibit K",
          description: "Analyze schedule from Exhibit K and ensure project activities cater to timeline"
        },
        {
          number: "05",
          title: "Share relevant portions with task leaders",
          description: "Share relevant portions with task leaders and ensure they understand requirements specific to their areas"
        },
        {
          number: "06",
          title: "Incorporate Exhibit K requirements",
          description: "Incorporate Exhibit K requirements into project planning and execution strategy"
        },
        {
          number: "07",
          title: "Establish tracking mechanisms",
          description: "Establish tracking mechanisms for ongoing compliance with Exhibit K requirements"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial review should occur during pre-mobilization phase",
        "Detailed review should be completed before task/job startup",
        "Ongoing reference throughout project execution"
      ],
      storage: [
        "Project SharePoint folder",
        "Site Superintendent's files",
        "Accessible to all relevant team members"
      ]
    },
    additionalNotes: [
      "Exhibit K typically contains specific project requirements, deliverables, and acceptance criteria",
      "Pay special attention to any requirements that differ from standard practices or previous projects",
      "If Exhibit K contains conflicting information with other contract documents, notify Project Manager immediately",
      "Consider creating a simplified checklist of key requirements for easy reference during project execution",
      "Highlight any items in Exhibit K that may require additional resources, time, or specialized equipment"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and implementation"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Project Manager – Secondary review and clarification"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Oversight and guidance as needed"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "verify-swi-installation-manual": {
    operationalObjective: {
      title: "Verify SWI / Installation Manual",
      description: "To review Standard Work Instructions (SWI) and Installation Manuals to ensure alignment with project requirements, identify any gaps in documentation, and establish a clear understanding of installation procedures for proper project execution."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Primary responsibility for reviewing SWIs and Installation Manuals checking for accurate procedures",
        "Task Leaders – Review SWIs relevant to their specific tasks, identifying any discrepancies with site/system requirements and current procedures",
        "Senior/General Superintendent – Provides oversight and guidance for SWI implementation",
        "Training & Development – Responsible for creating/updating SWI documents"
      ],
      resourcesNeeded: [
        "Standard Work Instructions (SWIs) for all project tasks",
        "Installation Manuals from manufacturers",
        "Project specifications and drawings",
        "Contract requirements",
        "Exhibit K and other relevant contract documents",
        "SWI request and modification procedures"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for the comprehensive review, management, and application of Standard Work Instructions (SWIs) and Installation Manuals. The steps below ensure thorough understanding of installation procedures, alignment with project specifications, resolution of discrepancies or deviations, and integration of these instructions into project planning and execution strategies.",
      steps: [
        {
          number: "01",
          title: "Collect all SWIs and Installation Manuals",
          description: "Collect all SWIs and Installation Manuals relevant to the project"
        },
        {
          number: "02",
          title: "Review each SWI and Installation Manual thoroughly",
          description: "Review each SWI and Installation Manual thoroughly to understand installation procedures"
        },
        {
          number: "03",
          title: "Compare SWIs and Installation Manuals against project specifications",
          description: "Compare SWIs and Installation Manuals against project specifications and requirements"
        },
        {
          number: "04",
          title: "Identify any gaps, discrepancies, or missing information",
          description: "Identify any gaps, discrepancies, or missing information in the documentation"
        },
        {
          number: "05",
          title: "Document differences and consult with Senior Superintendent",
          description: "If an SWI deviates from your installation method, document the differences and consult with Senior Superintendent"
        },
        {
          number: "06",
          title: "Follow SWI request and modification procedure",
          description: "For missing or inaccurate SWIs, follow the SWI request and modification procedure outlined here: [Include link for SWI request and modification procedures]"
        },
        {
          number: "07",
          title: "Share relevant SWIs with task leaders",
          description: "Share relevant SWIs with task leaders and ensure they understand the procedures"
        },
        {
          number: "08",
          title: "Incorporate SWI requirements into project planning",
          description: "Incorporate SWI requirements into project planning and execution strategy"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial review should occur during pre-mobilization phase",
        "Detailed review should be completed well before task/job startup",
        "Ongoing reference throughout project execution",
        "Additional review when new SWIs are received or updated"
      ],
      storage: [
        "Reference Training and Development (Mechanical) folder",
        "Site Superintendent's files",
        "Task Leaders' reference materials",
        "Accessible to all relevant team members"
      ]
    },
    additionalNotes: [
      "SWIs provide standardized procedures for consistent quality and efficiency",
      "If an SWI doesn't exist or deviates from your install method, use the SWI request form",
      "Installation Manuals from manufacturers may contain critical warranty information",
      "Deviations from SWIs or Installation Manuals may void warranties or affect quality",
      "Document any approved deviations from standard procedures for future reference"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and implementation"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Task Leaders – Review and implementation of task-specific SWIs"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Oversight and approval of any deviations"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "take-offs": {
    operationalObjective: {
      title: "Take Offs",
      description: "To accurately determine the quantities of materials needed for project execution, ensure proper material allocation, and facilitate efficient inventory management throughout the project lifecycle."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent – Overall responsibility for takeoff accuracy and material management",
        "Task Leaders – Responsible for task-specific takeoffs and material verification",
        "Project Engineers – Support with takeoff documentation and material tracking",
        "Senior/General Superintendent – Responsible for auditing takeoffs to confirm accuracy"
      ],
      resourcesNeeded: [
        "Project drawings and specifications",
        "Bill of Materials by Array (BBA)",
        "Project schedule and build sequence",
        "Manufacturer specifications and requirements",
        "Historical data from similar projects (if available)",
        "CSV and converted TP3",
        "Rough draft of logistics plan"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for conducting detailed material takeoffs and integrating this data into project planning and execution. The steps below ensure accurate identification and quantification of all necessary materials, alignment with project schedules and sequences, and effective utilization of takeoff data for procurement, inventory management, and progress tracking.",
      steps: [
        {
          number: "01",
          title: "Review project drawings, specifications, and BBA",
          description: "Review project drawings, specifications, and BBA"
        },
        {
          number: "02",
          title: "Identify all materials needed for each project area or task",
          description: "Identify all materials needed for each project area or task"
        },
        {
          number: "03",
          title: "Build out schedules for tasks by area",
          description: "Build out schedules for tasks by area (Follow job sequence)"
        },
        {
          number: "04",
          title: "Calculate quantities for each material type",
          description: "Calculate quantities for each material type based on project requirements"
        },
        {
          number: "05",
          title: "Verify calculations through cross-checking",
          description: "Verify calculations through cross-checking and quality control measures"
        },
        {
          number: "06",
          title: "Document all takeoff quantities",
          description: "Document all takeoff quantities in appropriate tracking systems"
        },
        {
          number: "07",
          title: "Share takeoff information with relevant team members",
          description: "Share takeoff information with relevant team members"
        },
        {
          number: "08",
          title: "Send finalized takeoff to Mechanical Admin team",
          description: "Send finalized takeoff to Mechanical Admin team for project setup"
        },
        {
          number: "09",
          title: "Update takeoffs as needed when project changes occur",
          description: "Update takeoffs as needed when project changes occur"
        },
        {
          number: "10",
          title: "Use takeoff data for material ordering and inventory management",
          description: "Use takeoff data for material ordering, inventory management, and progress tracking"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial takeoffs completed during pre-mobilization phase",
        "Task-specific takeoffs performed before task startup",
        "Inventory reconciliation takeoffs conducted at 25%, 50%, 75%, and 90% completion",
        "Additional takeoffs as needed for material management and verification"
      ],
      storage: [
        "Project SharePoint folder (Look at standardizing filing location for takeoff documents)",
        "MechTech system",
        "Site Superintendent's files",
        "Task-specific tracking documents"
      ]
    },
    additionalNotes: [
      "Takeoffs are essential for accurate material ordering and inventory management",
      "Regular reconciliation of takeoff quantities against actual inventory helps prevent shortages",
      "Coordinate with procurement team to ensure timely material delivery based on takeoffs",
      "Document any discrepancies between takeoff quantities and received materials"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent – Primary review and approval"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Task Leaders – Review of task-specific takeoffs"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Senior/General Superintendent – Audit finalized takeoffs"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  }
};

// Default content for the home page
export const defaultContent = {
  operationalObjective: {
    title: "Acquire KMZ File for Site Mapping",
    description: "To obtain a preliminary KMZ file used for establishing lay-down areas, preliminary mapping, and ensuring early-stage site planning aligns with project requirements."
  },
  rolesAndResponsibilities: {
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
  },
  processSteps: {
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
  },
  timingAndStorage: {
    timing: [
      "Triggered during Pre-Mobilization phase, before field layout begins",
      "Ideally completed prior to Civil mobilization to support better planning of site setup"
    ],
    storage: [
      "SharePoint > [Project Folder] > Survey > KMZ Files"
    ]
  },
  additionalNotes: [
    "Some projects receive the KMZ file from estimating; others may require retrieval from shared project folders",
    "It's common to realign the KMZ once actual survey points are established",
    "Serves as a helpful reference tool for site preliminary mapping and planning"
  ],
  approvers: [
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
  ],
  references: [
    "WORKDAY / Heat Illness Prevention Program (HIPP) 2025 – Leader Training",
    "WORKDAY / Password Policies and Multi-Factor Authentication",
    "WORKDAY / Card Holder Best Practices – How to Upload Receipts to Corpay",
  ]
}; 