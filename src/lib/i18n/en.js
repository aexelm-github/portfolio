export const en = {
	lang: 'en',
	nav: {
		about: 'About',
		stack: 'Stack',
		projects: 'Projects',
		experience: 'Experience',
		architecture: 'Architecture',
		contact: 'Contact'
	},
	hero: {
		greeting: "Hi, I'm",
		name: 'Exel Avendaño',
		title: 'Senior Full Stack Engineer',
		subtitle: '& Software Architect',
		description:
			'I build web platforms, mobile apps and enterprise systems focused on operations, analytics, automation and data visualization.',
		available: 'Available for projects',
		cta_projects: 'View projects',
		cta_cv: 'Download CV',
		cta_contact: 'Get in touch',
		years_exp: 'years of experience',
		enterprise: 'Enterprise solutions',
		fullstack: 'Full Stack end-to-end'
	},
	about: {
		label: 'About me',
		title: 'I build software that',
		title_highlight: 'solves real problems',
		description:
			'With over 20 years of experience in software development, I have designed and built enterprise platforms, SaaS products, operational systems and mobile applications that solve complex challenges across Colombia and internationally.',
		description2:
			'My approach combines solid architecture, thoughtful user experience and a deep understanding of business needs to deliver software that not only works, but scales.',
		philosophy_title: 'Development philosophy',
		philosophy:
			'Excellent software is not just code that works — it is code that any engineer can understand, maintain and scale. I prioritize clarity over cleverness and robustness over superficial speed.',
		metrics: {
			years: { value: '20+', label: 'Years of experience' },
			projects: { value: '30+', label: 'Projects delivered' },
			stack: { value: 'Full Stack', label: 'End-to-end' },
			scope: { value: 'Enterprise', label: 'Colombia & International' }
		},
		strengths: {
			title: 'Core strengths',
			items: [
				'Scalable systems architecture',
				'Full Stack web and mobile development',
				'Technical leadership & teams',
				'Geolocation & dashboards',
				'Legacy system integration',
				'End-to-end SaaS platforms'
			]
		}
	},
	stack: {
		label: 'Technologies',
		title: 'Technical stack',
		subtitle: 'Tools and technologies I use to build production software.',
		categories: {
			frontend: 'Frontend',
			backend: 'Backend',
			mobile: 'Mobile',
			databases: 'Databases',
			infrastructure: 'Infrastructure',
			ai: 'AI & Automation'
		}
	},
	projects: {
		label: 'Projects',
		title: 'Featured work',
		subtitle: 'Enterprise platforms and systems built from the ground up.',
		view_case: 'View case',
		impact_label: 'Impact',
		stack_label: 'Stack',
		gallery_btn: 'View project gallery',
		repo_btn: 'View showcase repository',
		items: [
			{
				id: 'simplify',
				title: 'Simplify2+',
				company: 'Own SaaS product',
				category: 'SaaS · Analytics & Data Platform',
				description:
					'Multi-source data analytics SaaS platform. Connects multiple databases, enables custom dashboards, advanced visualizations and dynamic filters for complex data analysis.',
				impact:
					'Used in research with 500,000+ records. Reduces weeks of analysis to hours.',
				tags: ['Multi-database', 'Dashboards', 'Analytics', 'Visualization', 'Advanced filters'],
				stack: ['SvelteKit', 'JavaScript', 'MySQL', 'TailwindCSS', 'Node.js'],
				repo: 'https://github.com/aexelm-github/simplify2plus-showcase',
				featured: true,
				color: '#06b6d4'
			},
			{
				id: 'ap-pilot',
				title: 'AP-PILOT+',
				company: 'Multi-tenant SaaS platform',
				category: 'SaaS · GIS & Field Operations',
				description:
					'Multi-tenant platform for end-to-end public lighting management: georeferenced inventory, citizen requests (PQR), work orders, warehouse and dynamic censuses, with an offline-first mobile app for field crews.',
				impact:
					'35,000+ streetlights of a single municipality on one map, with dynamic clustering, vector tiles and offline sync.',
				tags: ['GIS', 'Multi-tenant', 'Offline-first', 'RBAC', 'Dynamic censuses'],
				stack: ['SvelteKit', 'Express', 'PostGIS', 'Flutter'],
				repo: 'https://github.com/aexelm-github/ap-pilot-plus-showcase',
				featured: true,
				color: '#a855f7'
			},
			{
				id: 'conlus',
				title: 'Public Lighting Platform',
				company: 'CONLUS — Santa Marta Iluminada',
				category: 'SaaS Enterprise · Operations & Analytics',
				description:
					'Web platform for administration, operations and maintenance of Santa Marta streetlights. Real-time work orders, operational dashboards, geolocation and reporting.',
				impact:
					'Full digitization of 40,000+ lighting points. 60% reduction in operational response time.',
				tags: ['Dashboard', 'Geolocation', 'Real-time', 'Work orders', 'Reporting'],
				stack: ['PHP', 'CodeIgniter', 'jQuery', 'Node.js', 'MySQL', 'Google Maps API', 'Bootstrap', 'Bash'],
				featured: true,
				color: '#6366f1'
			},
			{
				id: 'mobile-ops',
				title: 'Field Operations Mobile App',
				company: 'CONLUS — App Conlus',
				category: 'Mobile · Field Operations',
				description:
					'Mobile app for field technicians with full offline work order management, automatic sync, GPS evidence capture and digital signature.',
				impact:
					'50+ field technicians using the app daily. 100% elimination of paper-based processes.',
				tags: ['GPS', 'Offline-first', 'Sync', 'Work orders', 'Digital signature'],
				stack: ['React Native', 'SQLite', 'Node.js', 'REST API'],
				featured: true,
				color: '#10b981'
			},
			{
				id: 'indra',
				title: 'Honduras Enterprise Migration',
				company: 'Indra Colombia — International Project',
				category: 'Enterprise · System Migration',
				description:
					'Enterprise migration of the Honduras Energy Company billing system from IBM 390 to OpenSGC/InCMS. Technical consulting, requirements analysis and critical module development.',
				impact: 'Successful migration of critical systems for a utility company with 500,000+ customers.',
				tags: ['Enterprise', 'IBM 390', 'OpenSGC', 'InCMS', 'Utilities'],
				stack: ['Java', 'Oracle', 'IBM 390', 'OpenSGC'],
				featured: false,
				color: '#f59e0b'
			}
		]
	},
	gallery: {
		title: 'Project Gallery',
		subtitle: 'Real screenshots and demos of built software.',
		close: 'Close',
		click_to_expand: 'Click to view fullscreen',
		captures: 'screenshots',
		items: [
			{
				id: 'grupoenercas',
				title: 'GrupoEnercas Website',
				desc: 'Corporate website developed for GrupoEnercas through NeedCrave, presenting the company, its services and its projects.'
			},
			{
				id: 'simplify2',
				title: 'Simplify2+',
				desc: 'SaaS platform for cross-referencing and analyzing data across multiple databases with interactive dashboards.'
			},
			{
				id: 'alumbrado-web',
				title: 'Public Lighting Web',
				desc: 'Web platform for administration, operations and maintenance of public lighting with geolocation.'
			},
			{
				id: 'alumbrado-mobile',
				title: 'Conlus Mobile App',
				desc: 'Offline-first mobile app for field technicians. Work orders, GPS and auto-sync.'
			},
			{
				id: 'alumbrado-gps',
				title: 'Alumbrado GPS',
				desc: 'Simple mobile app to capture GPS points with a reference label (poles, luminaires, assets) and sync them to the public lighting database.'
			},
			{
				id: 'centro-control',
				title: 'Control Center',
				desc: 'Centralized dashboard for real-time supervision of the public lighting service.'
			},
			{
				id: 'cartera-alumbrado',
				title: 'Lighting Accounts',
				desc: 'Platform for managing and collecting the public lighting tax with financial reporting.'
			},
			{
				id: 'appencuesta',
				title: 'Appencuesta Web',
				desc: 'Data analysis system for socioeconomic and voting-intention studies with geolocation.'
			},
			{
				id: 'appencuesta-mobile',
				title: 'Appencuesta Mobile',
				desc: 'Mobile app for capturing social surveys with GPS and real-time data submission.'
			},
			{
				id: 'votasoft',
				title: 'VotaSoft',
				desc: 'Web platform for political campaign management, voter database, bulk SMS and electoral analytics.'
			},
			{
				id: 'domicilios',
				title: 'Delivery App',
				desc: 'Mobile app for delivery order management with real-time tracking and store administration.'
			},
			{
				id: 'cartas-pdf',
				title: 'PDF Letter Generator',
				desc: 'App to mass-generate letters and notifications in PDF with a built-in Word-like designer.'
			},
			{
				id: 'chatia',
				title: 'Corporate ChatAI',
				desc: 'ChatGPT-style chat for natural language queries on operational databases. n8n + OpenAI backend.'
			},
			{
				id: 'songuiando',
				title: 'Songuiando',
				desc: 'Personal web app to store a songbook with lyrics and chords — built for guitar players and music lovers.'
			}
		]
	},
	timeline: {
		label: 'Experience',
		title: 'Professional journey',
		subtitle: 'Over 20 years building software that matters.',
		present: 'Present',
		items: [
			{
				id: 'conlus-dir',
				role: 'Technology Director',
				company: 'Consorcio Santa Marta Iluminada y Segura (CONLUS)',
				period: '2020 — May 2026',
				location: 'Santa Marta, Colombia',
				description:
					'Full technology leadership for public lighting management in Santa Marta. Design and development of web platform, mobile app and operational management systems.',
				highlights: [
					'Architecture and development of enterprise platform from scratch',
					'Design and implementation of offline-first mobile app',
					'Linux infrastructure management in production',
					'Technical team leadership'
				],
				color: '#6366f1'
			},
			{
				id: 'agora',
				role: 'Senior Software Engineer',
				company: 'Ágora S.A.S.',
				period: '2009 — Present',
				location: 'Barranquilla, Colombia',
				description:
					'Software engineering for social research platforms. Development and evolution of Appencuesta, a social research system with geolocation.',
				highlights: [
					'Development of Simplify+ SaaS platform for data analytics',
					'Appencuesta geolocation system since 2009',
					'Mobile app for social survey capture',
					'Multi-database Oracle / MySQL architecture'
				],
				color: '#06b6d4'
			},
			{
				id: 'campaign',
				role: 'Software Engineer',
				company: 'Campaña Política Carlos Moreno',
				period: 'May 2023 — Oct 2023',
				location: 'Colombia',
				description:
					'Development of VotaSoft platform for managing voter base and campaign collaborators.',
				highlights: [
					'Development of VotaSoft — electoral management platform',
					'Voter and collaborator database',
					'Campaign reporting and analytics'
				],
				color: '#10b981'
			},
			{
				id: 'indra',
				role: 'Software Consultant',
				company: 'Indra Colombia',
				period: 'Oct 2007 — Jan 2020',
				location: 'Colombia & International',
				description:
					'Enterprise technology consulting for utilities, telecom and public sector clients in Colombia and Honduras. OpenSGC/InCMS system implementation.',
				highlights: [
					'IBM 390 system migration consulting in Honduras',
					'OpenSGC/InCMS implementation for utilities',
					'Critical enterprise module development',
					'12+ years of international consulting experience'
				],
				color: '#f59e0b'
			}
		]
	},
	architecture: {
		label: 'Architecture',
		title: 'Systems I design',
		subtitle: 'Real architectures I have designed and implemented in production, from mobile to infrastructure.',
		diagram_title: 'Typical architectural stack',
		layers: {
			mobile: 'Mobile Layer',
			api: 'API Gateway',
			services: 'Business Services',
			data: 'Data Layer',
			infra: 'Infrastructure'
		},
		principles: {
			title: 'Design principles',
			items: [
				{
					title: 'Offline-first',
					desc: 'Applications that work without connectivity and sync when it is restored.'
				},
				{
					title: 'API-first',
					desc: 'Decoupled backends that expose clean, versioned APIs.'
				},
				{
					title: 'Observability',
					desc: 'Systems with logging, metrics and traceability built in from design.'
				},
				{
					title: 'Scalability',
					desc: 'Architectures that grow with the business without massive refactoring.'
				}
			]
		}
	},
	contact: {
		label: 'Contact',
		title: "Let's work together",
		subtitle:
			'Have a project that requires expertise in architecture, Full Stack development or technical leadership? Let us talk.',
		email: 'exel.avendano@gmail.com',
		phone: '+57 300 367 2520',
		location: 'Santa Marta / Barranquilla, Colombia',
		cta: 'Send message',
		or: 'or connect on',
		copy_email: 'Copy email',
		copied: 'Copied!',
		github_note:
			'Due to copyright reasons, only a few projects are published on GitHub, as showcase versions.'
	}
};
