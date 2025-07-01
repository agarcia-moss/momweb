export const mobilizationContent = {
  "logistics-plan-laydown-selection-areas": {
    operationalObjective: {
      title: "Logistics: Plan Laydown Selection Areas",
      description: "Planning and selecting appropriate laydown areas is critical for efficient material handling, storage, and workflow on solar construction projects. This process ensures that materials are strategically located to minimize handling, reduce transportation time, and protect components from damage while maintaining site safety and environmental compliance."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent: Oversees the laydown area planning process and approves final locations",
        "Logistics Coordinator (Project Engineer): Develops detailed laydown plans based on material delivery schedules and coordinates with Mechanical Procurement/Vendor for deliveries",
        "Civil Team: Prepares laydown areas according to specifications",
        "Environmental Manager (typically third-party): Ensures compliance with environmental requirements",
        "Safety Manager: Reviews plans for safety considerations"
      ],
      resourcesNeeded: [
        "Site layout plans and topographic maps",
        "Material delivery schedule and quantities",
        "Equipment specifications and space requirements",
        "Environmental constraints and protected areas",
        "Drainage patterns and flood zones",
        "Soil conditions and load-bearing capacity",
        "Access road locations and specifications",
        "Security requirements and fencing plans"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for planning, preparing, and managing material laydown areas on the project site. The steps below ensure a systematic approach to assessing storage requirements, evaluating site conditions, developing and constructing suitable laydown areas, and implementing effective material organization and traffic management systems.",
      steps: [
        {
          number: "01",
          title: "Assess Material Storage Requirements",
          description: "a. Identify all major components requiring storage (modules, racking, piles, etc.). b. Calculate required square footage for each material type. c. Determine special storage requirements (covered). d. Establish material rotation strategy (FIFO - First In, First Out)"
        },
        {
          number: "02",
          title: "Evaluate Site Conditions",
          description: "a. Review topographic maps to identify flat areas. b. Assess soil conditions for stability and drainage. c. Identify environmental constraints (wetlands, protected species, etc.). d. Consider proximity to pre-build areas to minimize transportation"
        },
        {
          number: "03",
          title: "Develop Preliminary Laydown Plan",
          description: "a. Mark potential laydown areas on site map. b. Calculate capacity of each area. c. Assign specific materials to each area based on installation sequence. d. Plan traffic flow patterns for delivery and retrieval"
        },
        {
          number: "04",
          title: "Prepare Laydown Areas",
          description: "a. Clear vegetation and debris. b. Grade area for proper drainage (typically 1-2% slope). c. Install geotextile fabric where needed for soil stabilization. d. Apply appropriate surface material (gravel, crushed stone, etc.). e. Install drainage features as needed. f. Establish security measures (fencing, lighting, etc.)"
        },
        {
          number: "05",
          title: "Create Material Organization System",
          description: "a. Develop grid system for locating specific materials. b. Create signage for different storage zones. c. Establish inventory tracking procedures. d. Define stacking heights and methods for different materials"
        },
        {
          number: "06",
          title: "Implement Traffic Management",
          description: "a. Designate one-way traffic patterns where possible. b. Create turning areas for delivery vehicles. c. Establish loading/unloading zones"
        },
        {
          number: "07",
          title: "Document Final Laydown Plan",
          description: "a. Create detailed maps of all laydown areas. b. Document capacity and designated materials for each area. c. Distribute plans to all relevant personnel. d. Update plans as project progresses and requirements change"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial Planning: During pre-construction phase, 4-6 weeks before mobilization",
        "Final Selection: 2-3 weeks before mobilization",
        "Preparation: 1-2 weeks before first material deliveries",
        "Ongoing Adjustments: Throughout project as material flow and site conditions change"
      ],
      storage: [
        "Laydown Plans: Project SharePoint under Construction Drawings & Specifications folder",
        "Material Inventory System: Project SharePoint",
        "Site Preparation Specifications: Project SharePoint under Construction Drawings & Specifications folder",
        "Traffic Management Plans: Project SharePoint under Safety folder"
      ]
    },
    additionalNotes: [
      "Laydown areas should typically be 1.5-2 times the actual storage space needed to allow for material movement and access",
      "Consider seasonal weather patterns when selecting and preparing laydown areas",
      "Avoid low-lying areas prone to flooding or water accumulation",
      "Maintain minimum 20' fire lanes between large material stacks",
      "Plan for snow removal in cold climates",
      "Consider prevailing wind direction when storing lightweight materials",
      "Separate incompatible materials (e.g., chemicals, fuels) according to safety requirements",
      "Establish clear height limitations for stacked materials based on stability and safety",
      "Designate specific areas for damaged or rejected materials",
      "Plan for expansion of laydown areas as project progresses if needed",
      "Consider security needs, especially for high-value components",
      "Ensure adequate lighting for early morning and evening operations"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent and Logistics Coordinator: Preliminary laydown planning"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
        text: "Environmental Manager (typically third-party): Review of environmental constraints and approval of laydown non-interference"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Safety Manager: Review and approve traffic plans"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Project Manager and Site Superintendent: Final approval of laydown locations"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "prebuild-staging-area": {
    operationalObjective: {
      title: "Prebuild Staging Area",
      description: "The prebuild staging area provides a dedicated space for assembling components before installation, improving efficiency and quality control. This process establishes a controlled environment where teams can preassemble racking, combine electrical components, or prepare other materials to streamline field installation and reduce on-site assembly time."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent: Determines the need for and approves prebuild staging areas",
        "Task Leader: Plans the layout and workflow of the prebuild area",
        "Civil Team: Prepares the physical space according to specifications",
        "Mechanical Foreman: Oversees prebuild operations and quality control",
        "Safety Manager: Ensures safe working conditions in the prebuild area",
        "Quality Control: Inspects prebuilt assemblies before installation"
      ],
      resourcesNeeded: [
        "Installation drawings and specifications",
        "Material delivery schedule",
        "Manpower availability",
        "Equipment requirements for prebuild activities",
        "Production rate targets",
        "Transportation plan from prebuild area to installation location"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for establishing and managing an efficient prebuild area to support project installation schedules. The steps below encompass the assessment of prebuild requirements, site selection and preparation, workflow design, implementation of production and quality control systems, personnel training, and logistics for transporting completed assemblies, along with continuous operational monitoring and improvement.",
      steps: [
        {
          number: "01",
          title: "Assess Prebuild Requirements",
          description: "a. Identify components suitable for prebuilding (typically racking assemblies, combiner boxes, harnesses). b. Calculate production volume needed to support installation schedule. c. Determine space requirements based on assembly size and production volume. d. Identify equipment needs (tables, jigs, tools, lifting equipment)"
        },
        {
          number: "02",
          title: "Select and Prepare Location",
          description: "a. Choose location with consideration for material flow from delivery to installation. b. Ensure adequate size for all operations plus material storage. c. Prepare surface (typically compacted gravel or concrete pad). d. Install drainage features as needed. e. Provide weather protection if required (temporary structures, canopies, tarps). f. Establish power supply for tools and equipment"
        },
        {
          number: "03",
          title: "Design Workflow and Layout",
          description: "a. Create stations for sequential assembly steps. b. Establish material input and finished product output areas. c. Design for one-way flow to minimize cross-traffic. d. Include quality control checkpoints. e. Provide adequate space between workstations for safety. f. Create dedicated tool and equipment storage areas"
        },
        {
          number: "04",
          title: "Establish Production Systems",
          description: "a. Develop standard work instructions for each assembly. b. Create quality checklists for each assembly type. c. Implement inventory management system for components. d. Establish production tracking and reporting procedures"
        },
        {
          number: "05",
          title: "Train Personnel",
          description: "a. Train team on assembly procedures and quality requirements. b. Conduct safety training specific to prebuild operations. c. Cross-train personnel on different assembly types for flexibility. d. Identify and develop team leads for each assembly type"
        },
        {
          number: "06",
          title: "Implement Transportation System",
          description: "a. Determine appropriate transportation method for completed assemblies. b. Establish loading procedures and equipment. c. Create secure attachment methods for transport (Fork sleeves). d. Develop delivery schedule coordinated with installation teams"
        },
        {
          number: "07",
          title: "Monitor and Improve",
          description: "a. Track production rates and quality metrics. b. Identify bottlenecks and implement improvements. c. Adjust staffing and resources based on production needs. d. Update procedures based on field feedback"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Assessment and Planning: 3-4 weeks before prebuild operations begin",
        "Location Preparation: 1-2 weeks before prebuild operations begin",
        "Setup of Workstations: 3-5 days before production starts",
        "Initial Production: Begin 1-2 weeks ahead of installation requirements",
        "Demobilization: When prebuild requirements are complete or project ends"
      ],
      storage: [
        "Standard Work Instructions: Project SharePoint under Safety Folder",
        "Production Reports: Daily Tracker"
      ]
    },
    additionalNotes: [
      "Prebuild areas typically require 1.5-2 times the space of the actual assembly footprint to allow for workflow and material handling",
      "Consider weather protection needs based on climate and season – prebuild operations are significantly impacted by adverse weather",
      "Establish clear quality standards and hold points before assemblies leave the prebuild area",
      "Implement a tagging system to identify completed and inspected assemblies",
      "Ensure adequate lighting for quality inspection and safe operations",
      "Plan for material waste collection and recycling within the prebuild area",
      "Consider noise impacts if the prebuild area is near residential areas or offices",
      "Maintain flexibility to adjust prebuild operations as field conditions and requirements change",
      "Establish clear communication protocols between prebuild teams and installation teams",
      "Consider shift work for high-volume production needs",
      "Implement ergonomic workstations to reduce worker fatigue and injury risk"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent: Approved locations and workflow"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Site Superintendent/Training & Development: Review and approve updated SWI's for prebuild tasks"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "defining-team-members": {
    operationalObjective: {
      title: "Defining Team Members for Supervision Roles and Responsibilities",
      description: "Clearly defining supervision roles and responsibilities ensures proper project oversight, accountability, and efficient communication channels. This process establishes the organizational structure for the mechanical team, clarifies reporting relationships, and assigns specific responsibilities to each supervisory position."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent: Defines the mechanical supervision structure and assigns personnel to roles",
        "Senior/General Superintendent: Provides guidance on supervision structure based on project requirements"
      ],
      resourcesNeeded: [
        "Project scope and complexity",
        "Project schedule and phasing",
        "Available personnel and their qualifications",
        "Company organizational standards",
        "Project-specific requirements",
        "Client expectations and requirements"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for establishing and managing the project supervision structure. The steps below ensure a systematic approach to assessing supervision needs, developing an effective organizational framework, defining clear roles and responsibilities, selecting appropriate personnel, and continuously monitoring and adjusting the structure to meet evolving project demands.",
      steps: [
        {
          number: "01",
          title: "Assess Project Supervision Requirements",
          description: "a. Review project scope, size, and complexity. b. Identify key work areas requiring dedicated supervision. c. Determine optimal supervision ratios based on task complexity. d. Consider geographical spread of work areas"
        },
        {
          number: "02",
          title: "Develop Supervision Organizational Structure",
          description: "a. Create organizational chart showing reporting relationships. b. Define key supervision positions needed. c. Establish clear lines of authority and communication. d. Identify backup/alternate supervisors for critical positions"
        },
        {
          number: "03",
          title: "Define Role Responsibilities",
          description: "a. Create detailed job descriptions for each supervision position. b. Clearly define authority levels and decision-making boundaries. c. Establish performance expectations and metrics. d. Define reporting requirements and frequency. e. Specify coordination responsibilities with other teams"
        },
        {
          number: "04",
          title: "Select Team Members for Supervision Roles",
          description: "a. Review qualifications and experience of available personnel. b. Match individual strengths to role requirements. c. Consider leadership abilities and communication skills. d. Assess technical knowledge relevant to assigned areas. e. Identify training needs for selected individuals"
        },
        {
          number: "05",
          title: "Document and Communicate Assignments",
          description: "a. Finalize organizational chart with names and contact information. b. Distribute role descriptions to appointed supervisors. c. Communicate structure to all project team members"
        },
        {
          number: "06",
          title: "Conduct Role Orientation",
          description: "a. Hold kickoff meeting with supervision team. b. Review project goals, schedule, and critical success factors. c. Clarify expectations and performance metrics. d. Address questions and concerns. e. Establish regular supervision team meeting schedule"
        },
        {
          number: "07",
          title: "Monitor and Adjust",
          description: "a. Regularly evaluate effectiveness of supervision structure. b. Adjust responsibilities or personnel as project progresses. c. Provide additional training or support as needed. d. Document changes to organizational structure and communicate updates"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial Assessment: During pre-construction planning phase",
        "Structure Development: 1-2 months before mobilization",
        "Role Definition: 1-2 months before mobilization",
        "Team Selection: 3-4 weeks before mobilization",
        "Communication and Orientation: 1-2 weeks before mobilization",
        "Ongoing Monitoring: Throughout project duration",
        "Formal Review: Monthly or at major project phase transitions"
      ],
      storage: [
        "Organizational Charts: Project SharePoint under Contacts folder",
        "Role Descriptions: Project SharePoint under Human Resources/Job Descriptions",
        "Contact Lists: Project SharePoint under Contacts folder"
      ]
    },
    additionalNotes: [
      "Typical supervision ratio is 1 supervisor for every 10-15 workers, but may vary based on task complexity",
      "Always identify and train backup supervisors for critical positions to ensure continuity",
      "Consider cultural and language factors when assigning supervisors to specific teams",
      "Clearly communicate overtime expectations and rotation schedules for supervisory staff",
      "Establish clear boundaries between supervision responsibilities and those of project management",
      "Ensure supervisors understand both their technical and administrative responsibilities",
      "Provide supervisors with necessary tools (tablets, phones, radios) to perform their roles effectively",
      "Consider creating a supervision RACI chart (Responsible, Accountable, Consulted, Informed) for key decisions",
      "Establish clear protocols for supervision handover between shifts",
      "Ensure all supervisors are trained on project-specific safety requirements and procedures",
      "Document any changes to the supervision structure as the project evolves"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent and Senior/General Superintendent: Review and approve supervision structure"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Personnel Assignments: Site Superintendent"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Performance Evaluation: Senior/General Superintendent/Director with input from Site Superintendent as necessary"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "verify-safety-team-ppe": {
    operationalObjective: {
      title: "Verify Safety Team PPE Onsite/Ordered",
      description: "Ensuring that all required Personal Protective Equipment (PPE) is available onsite or properly ordered before work begins is essential for maintaining a safe work environment. This process verifies that appropriate PPE is available for all team members based on their specific job functions and the hazards present on the project site."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Safety Manager: Oversees the PPE verification process, approves PPE specifications, and orders required PPE",
        "Site Superintendent: Ensures PPE requirements are communicated and enforced",
        "Task Leaders: Verify their team members have appropriate PPE",
        "Safety Team: Conduct regular PPE inspections and compliance checks"
      ],
      resourcesNeeded: [
        "Project-specific safety plan with PPE requirements",
        "Staffing plan with crew sizes and job functions",
        "Hazard assessments for different work areas (SWI's)",
        "Company PPE standards and specifications",
        "Vendor information and lead times",
        "Budget allocation for safety equipment",
        "Regulatory requirements for specific PPE"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for identifying, procuring, and managing Personal Protective Equipment (PPE) for project personnel. The steps below ensure a systematic approach to assessing PPE needs based on safety requirements and crew sizes, managing existing inventory, procuring necessary items, and establishing an effective onsite distribution and tracking system.",
      steps: [
        {
          number: "01",
          title: "Identify PPE Requirements",
          description: "a. Review project safety plan and hazard assessments. b. Identify specific PPE needed for each job function. c. Determine quantities based on crew sizes and rotation schedules. d. Consider environmental conditions (heat, cold, rain, noise) that may require specialized PPE. e. Identify any client-specific PPE requirements beyond standard requirements"
        },
        {
          number: "02",
          title: "Assess Current Inventory",
          description: "a. Conduct inventory of existing PPE in company warehouses. b. Evaluate condition of existing PPE for compliance with standards. c. Identify quantities available for immediate deployment. d. Determine if existing PPE can be transferred from other projects. e. Document inventory results in the PPE tracking system"
        },
        {
          number: "03",
          title: "Determine Procurement Needs",
          description: "a. Calculate quantities needed based on crew size minus available inventory. b. Add contingency quantities (typically 10-15%) for replacements and new hires. c. Identify priority items needed before mobilization. d. Develop procurement schedule aligned with project timeline. e. Obtain quotes from approved vendors"
        },
        {
          number: "04",
          title: "Place and Track Orders",
          description: "a. Submit purchase orders for required PPE. b. Confirm order receipt and expected delivery dates with vendors. c. Track shipments and update delivery status within PPE tracker. d. Arrange expedited shipping for critical items if necessary"
        },
        {
          number: "05",
          title: "Receive and Verify Deliveries",
          description: "a. Inspect all PPE upon delivery for quality and compliance with specifications. b. Verify quantities received against purchase orders. c. Document any discrepancies or quality issues. d. Properly store PPE according to manufacturer recommendations. e. Update inventory system with received items"
        },
        {
          number: "06",
          title: "Establish Distribution System",
          description: "a. Create PPE distribution procedure for initial issuance and replacements. b. Set up PPE storage and distribution area at project site. c. Develop documentation system for tracking PPE issuance. d. Establish schedule for regular inventory checks and reordering"
        },
        {
          number: "07",
          title: "Conduct Final Verification",
          description: "a. Perform final inventory check before mobilization. b. Verify all critical PPE is onsite or scheduled for delivery before work begins"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial Assessment: 6-8 weeks before mobilization",
        "Inventory Check: 1-2 weeks before mobilization",
        "Order Placement: 4-5 weeks before mobilization",
        "Delivery Verification: 2-3 weeks before mobilization",
        "Distribution Setup: 1-2 weeks before mobilization",
        "Final Verification: 3-5 days before work begins",
        "Ongoing Monitoring: Weekly throughout project duration"
      ],
      storage: [
        "PPE Inventory Records: Project SharePoint under Safety/PPE folder",
        "Purchase Orders: Project SharePoint under Safety/PPE folder",
        "Distribution Records: Project SharePoint under Safety/PPE folder",
        "Inspection Reports: Project SharePoint under Safety/Inspections"
      ]
    },
    additionalNotes: [
      "Always maintain a minimum 10% buffer stock of commonly used PPE items such as gloves, safety glasses, and earplugs",
      "Consider climate conditions when ordering PPE – hot weather requires cooling vests and sun protection, while cold weather requires insulated gear",
      "Establish a clear procedure for PPE replacement due to damage, loss, or normal wear and tear",
      "Verify that specialized PPE (fall protection, respiratory protection) meets current certification standards",
      "Ensure proper sizing options are available, especially for items like gloves, harnesses, and protective clothing",
      "Document employee training for specialized PPE such as respiratory protection or fall arrest systems",
      "Consider language needs when ordering PPE training materials and signage",
      "Establish a designated area for damaged PPE collection and evaluation",
      "Implement a system to track PPE with expiration dates or inspection requirements",
      "Verify compatibility between different PPE items (hard hats with hearing protection, face shields with respirators)",
      "Consider sustainability in PPE selection – some items may be recyclable or have longer service lives"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Safety Manager and Site Superintendent: Review and approve PPE requirements"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Safety Manager and Project Manager: Perform final verification of expenditures and inventory"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  },
  "quantity-tracking-board": {
    operationalObjective: {
      title: "Quantity Tracking Board",
      description: "The Quantity Tracking Board provides a visual management tool for monitoring installation progress across all mechanical tasks. This centralized display creates transparency for all team members, facilitates daily updates, and serves as a backup to digital tracking systems, ensuring everyone has immediate access to current production data."
    },
    rolesAndResponsibilities: {
      whoIsInvolved: [
        "Site Superintendent: Establishes the tracking board and verifies information accuracy",
        "Task Supervisors: Update their respective task quantities daily",
        "Project Engineer: Assists with data verification and alignment with PM digital systems",
        "Quality Control: Uses board data to prioritize inspection areas",
        "Project Manager: Reviews board during site visits to assess progress",
        "All Team Members: Reference board for planning and coordination"
      ],
      resourcesNeeded: [
        "Total quantities for each task from takeoffs and estimates",
        "Daily installation quantities from field supervisors",
        "Project schedule milestones and targets",
        "Area/block designations and sequence",
        "Quality control inspection results",
        "Weather impacts and other delay factors",
        "Equipment and crew allocation information"
      ]
    },
    processSteps: {
      description: "This section outlines the standard procedure for designing, implementing, and maintaining a visual production board for daily project tracking and planning. The steps below ensure the creation of an effective visual tool that accurately reflects project progress, integrates with digital tracking systems, facilitates daily goal setting, and supports proactive management of project activities and potential constraints.",
      steps: [
        {
          number: "01",
          title: "Design Board Layout",
          description: "a. Determine appropriate size based on project complexity. b. Create sections for each major task (piles, racking, modules). c. Include columns for planned vs. actual quantities. d. Add space for daily, weekly, and cumulative totals. e. Include visual indicators for progress (percentages, color coding). f. Designate areas for notes on issues or constraints"
        },
        {
          number: "02",
          title: "Establish Board Location",
          description: "a. Select a central, accessible location visible to all team members. b. Position near meeting areas where daily briefings occur"
        },
        {
          number: "03",
          title: "Populate Initial Data",
          description: "a. Enter total quantities for each task from takeoffs. b. Mark project areas/blocks according to build sequence. c. Add schedule milestones and target completion dates (PILE START and PV FINISH). d. Include productivity targets (daily/weekly goals). e. Note any known constraints or special considerations"
        },
        {
          number: "04",
          title: "Implement Daily Update Process",
          description: "a. Assign responsibility for updates to specific team members. b. Establish consistent time for daily updates (typically end of shift). c. Implement verification process to ensure accuracy"
        },
        {
          number: "05",
          title: "Integrate with Daily Tracker",
          description: "a. Ensure activity and quantity alignment with the Daily Tracker. b. Reconcile any differences between board and digital systems. c. Use board data to verify digital entries"
        },
        {
          number: "06",
          title: "Utilize Board for Daily Planning",
          description: "a. Reference board during morning meetings to set daily goals. b. Use visual indicators to identify areas falling behind schedule. c. Highlight areas requiring additional resources or attention. d. Track productivity trends to forecast completion dates. e. Document weather or other impacts affecting production"
        },
        {
          number: "07",
          title: "Maintain and Update Board",
          description: "a. Clean and refresh board weekly to ensure readability. b. Update format as needed based on project phase. c. Archive completed sections or create new sections as project progresses. d. Photograph board regularly for documentation. e. Adjust targets based on approved schedule changes"
        }
      ]
    },
    timingAndStorage: {
      timing: [
        "Initial Setup: During site mobilization, before task work begins",
        "Daily Updates: End of each workday",
        "Weekly Review: During weekly progress meetings",
        "Milestone Updates: At completion of major project phases",
        "Comprehensive Verification: Monthly, aligned with progress reporting",
        "Final Documentation: At project completion for lessons learned"
      ],
      storage: [
        "Physical Board: Centrally located in site office or meeting area",
        "Digital Photos: Site Superintendent's files"
      ]
    },
    additionalNotes: [
      "The physical board serves as a backup to digital systems and should be reconciled regularly with MechTech data",
      "Use color coding for quick visual reference (green for on/ahead of schedule, yellow for slight delays, red for significant delays)",
      "Include weather days and other non-productive time to accurately reflect productivity rates",
      "Consider using magnetic or movable elements for frequently changing information",
      "Take photos of the board before major updates for historical tracking",
      "Include quality metrics alongside quantity data to provide a complete picture of progress",
      "Ensure all team members understand how to read and interpret the board",
      "Update the board before daily meetings to ensure discussions are based on current data",
      "Include contact information for task supervisors on the board for quick reference",
      "Consider adding QR codes linking to digital trackers or additional information",
      "Regularly clean and maintain the board to ensure readability and professionalism"
    ],
    approvers: [
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        text: "Site Superintendent: Board design and weekly production reviews"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Site Superintendent and Task Supervisors: Initial activity production requirement verifications"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        text: "Task Leaders: Daily production verifications"
      }
    ],
    references: [
      "[Include link for step-by-step instructions]"
    ]
  }
}; 