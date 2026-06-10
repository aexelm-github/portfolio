export const es = {
	lang: 'es',
	nav: {
		about: 'Sobre mí',
		stack: 'Stack',
		projects: 'Proyectos',
		experience: 'Experiencia',
		architecture: 'Arquitectura',
		contact: 'Contacto'
	},
	hero: {
		greeting: 'Hola, soy',
		name: 'Exel Avendaño',
		title: 'Senior Full Stack Engineer',
		subtitle: '& Software Architect',
		description:
			'Desarrollo plataformas web, móviles y sistemas empresariales enfocados en operación, analítica, automatización y visualización de datos.',
		available: 'Disponible para proyectos',
		cta_projects: 'Ver proyectos',
		cta_cv: 'Descargar CV',
		cta_contact: 'Contactar',
		years_exp: 'años de experiencia',
		enterprise: 'Soluciones enterprise',
		fullstack: 'Full Stack end-to-end'
	},
	about: {
		label: 'Sobre mí',
		title: 'Construyo software que',
		title_highlight: 'resuelve problemas reales',
		description:
			'Con más de 20 años de experiencia en desarrollo de software, he diseñado y construido plataformas empresariales, SaaS, sistemas operativos y aplicaciones móviles que resuelven retos complejos en Colombia e internacionalmente.',
		description2:
			'Mi enfoque combina arquitectura sólida, experiencia de usuario cuidada y un entendimiento profundo del negocio para entregar software que no solo funciona, sino que escala.',
		philosophy_title: 'Filosofía de desarrollo',
		philosophy:
			'El software excelente no es solo código que funciona — es código que cualquier ingeniero puede entender, mantener y escalar. Priorizo la claridad sobre la inteligencia y la robustez sobre la velocidad superficial.',
		metrics: {
			years: { value: '20+', label: 'Años de experiencia' },
			projects: { value: '30+', label: 'Proyectos entregados' },
			stack: { value: 'Full Stack', label: 'End-to-end' },
			scope: { value: 'Enterprise', label: 'Colombia & Internacional' }
		},
		strengths: {
			title: 'Fortalezas principales',
			items: [
				'Arquitectura de sistemas escalables',
				'Desarrollo Full Stack web y mobile',
				'Liderazgo técnico y equipos',
				'Georreferenciación y dashboards',
				'Integración de sistemas legacy',
				'Plataformas SaaS end-to-end'
			]
		}
	},
	stack: {
		label: 'Tecnologías',
		title: 'Stack técnico',
		subtitle: 'Herramientas y tecnologías con las que construyo software de producción.',
		categories: {
			frontend: 'Frontend',
			backend: 'Backend',
			mobile: 'Mobile',
			databases: 'Bases de datos',
			infrastructure: 'Infraestructura',
			ai: 'IA & Automatización'
		}
	},
	projects: {
		label: 'Proyectos',
		title: 'Trabajo destacado',
		subtitle: 'Plataformas y sistemas empresariales construidos de principio a fin.',
		view_case: 'Ver caso',
		impact_label: 'Impacto',
		stack_label: 'Stack',
		gallery_btn: 'Ver galería de proyectos',
		items: [
			{
				id: 'simplify',
				title: 'Simplify2+',
				company: 'Producto SaaS propio',
				category: 'SaaS · Analytics & Data Platform',
				description:
					'Plataforma SaaS de análisis y cruce de datos multi-fuente. Conecta múltiples bases de datos, permite dashboards personalizados, visualizaciones avanzadas y filtros dinámicos para análisis de datos complejos.',
				impact:
					'Plataforma usada en investigaciones con más de 500,000 registros. Reduce semanas de análisis a horas.',
				tags: ['Multi-database', 'Dashboards', 'Analytics', 'Visualización', 'Filtros avanzados'],
				stack: ['SvelteKit', 'JavaScript', 'MySQL', 'TailwindCSS', 'Node.js'],
				featured: true,
				color: '#06b6d4'
			},
			{
				id: 'conlus',
				title: 'Plataforma de Alumbrado Público',
				company: 'CONLUS — Santa Marta Iluminada',
				category: 'SaaS Enterprise · Operación & Analítica',
				description:
					'Plataforma web integral para la administración, operación y mantenimiento de luminarias de Santa Marta. Órdenes de trabajo en tiempo real, dashboards operativos, georreferenciación y reportería.',
				impact:
					'Digitalización de más de 40,000 puntos de alumbrado. Reducción del 60% en tiempos de respuesta operativa.',
				tags: ['Dashboard', 'Georreferenciación', 'Tiempo real', 'Órdenes de trabajo', 'Reportería'],
				stack: ['PHP', 'CodeIgniter', 'jQuery', 'Node.js', 'MySQL', 'Google Maps API', 'Bootstrap', 'Bash'],
				featured: true,
				color: '#6366f1'
			},
			{
				id: 'mobile-ops',
				title: 'App Operativa Móvil',
				company: 'CONLUS — App Conlus',
				category: 'Mobile · Operación en Campo',
				description:
					'Aplicación móvil para técnicos de campo con gestión de órdenes de trabajo, soporte offline completo, sincronización automática, captura de evidencias con GPS y firma digital.',
				impact:
					'50+ técnicos en campo usando la app diariamente. Eliminación del 100% del proceso manual en papel.',
				tags: ['GPS', 'Offline-first', 'Sincronización', 'Órdenes de trabajo', 'Firma digital'],
				stack: ['React Native', 'SQLite', 'Node.js', 'REST API'],
				featured: true,
				color: '#10b981'
			},
			{
				id: 'indra',
				title: 'Migración Enterprise Honduras',
				company: 'Indra Colombia — Proyecto Internacional',
				category: 'Enterprise · Migración de Sistemas',
				description:
					'Migración enterprise del sistema comercial de la Empresa de Energía de Honduras desde IBM 390 hacia OpenSGC/InCMS. Consultoría técnica, análisis de requerimientos y desarrollo de módulos críticos.',
				impact:
					'Migración exitosa de sistema crítico para empresa de utilities con más de 500,000 clientes.',
				tags: ['Enterprise', 'IBM 390', 'OpenSGC', 'InCMS', 'Utilities'],
				stack: ['Java', 'Oracle', 'IBM 390', 'OpenSGC'],
				featured: false,
				color: '#f59e0b'
			}
		]
	},
	gallery: {
		title: 'Galería de Proyectos',
		subtitle: 'Muestras reales de software construido y entregado.',
		close: 'Cerrar',
		click_to_expand: 'Click para ver en pantalla completa',
		captures: 'capturas',
		items: [
			{
				id: 'simplify2',
				title: 'Simplify2+',
				desc: 'Plataforma SaaS para cruce y análisis de datos entre múltiples bases de datos con dashboards interactivos.'
			},
			{
				id: 'alumbrado-web',
				title: 'Alumbrado Público Web',
				desc: 'Plataforma web para administración, operación y mantenimiento de luminarias con georreferenciación.'
			},
			{
				id: 'alumbrado-mobile',
				title: 'App Conlus Móvil',
				desc: 'App móvil offline-first para técnicos de campo. Órdenes de trabajo, GPS y sincronización.'
			},
			{
				id: 'alumbrado-gps',
				title: 'Alumbrado GPS',
				desc: 'App móvil para capturar puntos GPS con referencia (postes, luminarias, activos) y enviarlos a la base de datos del sistema de alumbrado público.'
			},
			{
				id: 'centro-control',
				title: 'Centro de Control',
				desc: 'Dashboard centralizado para supervisión en tiempo real del servicio de alumbrado público.'
			},
			{
				id: 'cartera-alumbrado',
				title: 'Cartera Alumbrado Público',
				desc: 'Plataforma de gestión y liquidación del impuesto de alumbrado público con reportería financiera.'
			},
			{
				id: 'appencuesta',
				title: 'Appencuesta Web',
				desc: 'Sistema de análisis de datos para estudios socioeconómicos y de intención de voto con visualización georreferenciada.'
			},
			{
				id: 'appencuesta-mobile',
				title: 'Appencuesta Móvil',
				desc: 'App móvil para captura de encuestas sociales con GPS y envío de datos en tiempo real.'
			},
			{
				id: 'votasoft',
				title: 'VotaSoft',
				desc: 'Plataforma web para administración de campañas políticas, base de votantes, SMS masivos y analítica electoral.'
			},
			{
				id: 'domicilios',
				title: 'App Domicilios',
				desc: 'App móvil para gestión de pedidos domiciliarios con seguimiento en tiempo real y administración de comercios.'
			},
			{
				id: 'cartas-pdf',
				title: 'Generador de Cartas PDF',
				desc: 'Aplicación para generar masivamente cartas y notificaciones en PDF con diseñador integrado tipo Word.'
			},
			{
				id: 'chatia',
				title: 'ChatIA Corporativo',
				desc: 'Chat tipo ChatGPT para consultas en lenguaje natural sobre bases de datos operativas. Backend n8n + OpenAI.'
			},
			{
				id: 'songuiando',
				title: 'Songuiando',
				desc: 'App web personal para guardar un cancionero con letras y acordes. Pensada para quienes disfrutan la música y tocar guitarra.'
			}
		]
	},
	timeline: {
		label: 'Experiencia',
		title: 'Trayectoria profesional',
		subtitle: 'Más de 20 años construyendo software que importa.',
		present: 'Presente',
		items: [
			{
				id: 'conlus-dir',
				role: 'Director de Tecnología',
				company: 'Consorcio Santa Marta Iluminada y Segura (CONLUS)',
				period: '2020 — Presente',
				location: 'Santa Marta, Colombia',
				description:
					'Liderazgo tecnológico completo para la administración del alumbrado público de Santa Marta. Diseño y desarrollo de plataforma web, aplicación móvil y sistemas de gestión operativa.',
				highlights: [
					'Arquitectura y desarrollo de plataforma enterprise desde cero',
					'Diseño e implementación de app móvil offline-first',
					'Gestión de infraestructura Linux en producción',
					'Liderazgo del equipo tecnológico'
				],
				color: '#6366f1'
			},
			{
				id: 'agora',
				role: 'Senior Software Engineer',
				company: 'Ágora S.A.S.',
				period: '2009 — Presente',
				location: 'Barranquilla, Colombia',
				description:
					'Ingeniería de software para plataformas de investigación social. Desarrollo y evolución de Appencuesta, sistema de estudios sociales con georreferenciación.',
				highlights: [
					'Desarrollo de plataforma SaaS Simplify+ para análisis de datos',
					'Sistema Appencuesta con georreferenciación desde 2009',
					'App móvil para captura de encuestas sociales',
					'Arquitectura multi-base de datos Oracle / MySQL'
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
					'Desarrollo de plataforma VotaSoft para gestión de base de votantes y colaboradores de campaña política.',
				highlights: [
					'Desarrollo de VotaSoft — plataforma de gestión electoral',
					'Base de datos de votantes y colaboradores',
					'Reportería y analítica de campaña'
				],
				color: '#10b981'
			},
			{
				id: 'indra',
				role: 'Consultor de Software',
				company: 'Indra Colombia',
				period: 'Oct 2007 — Ene 2020',
				location: 'Colombia & Internacional',
				description:
					'Consultoría tecnológica enterprise para clientes de utilities, telecomunicaciones y sector público en Colombia y Honduras. Implementación de sistemas OpenSGC/InCMS.',
				highlights: [
					'Consultoría en migración de sistemas IBM 390 en Honduras',
					'Implementación OpenSGC/InCMS para utilities',
					'Desarrollo de módulos críticos enterprise',
					'12+ años de experiencia en consultoría internacional'
				],
				color: '#f59e0b'
			}
		]
	},
	architecture: {
		label: 'Arquitectura',
		title: 'Sistemas que diseño',
		subtitle:
			'Arquitecturas reales que he diseñado e implementado en producción, desde mobile hasta infraestructura.',
		diagram_title: 'Stack arquitectónico típico',
		layers: {
			mobile: 'Mobile Layer',
			api: 'API Gateway',
			services: 'Business Services',
			data: 'Data Layer',
			infra: 'Infrastructure'
		},
		principles: {
			title: 'Principios de diseño',
			items: [
				{
					title: 'Offline-first',
					desc: 'Aplicaciones que funcionan sin conexión y sincronizan cuando la recuperan.'
				},
				{
					title: 'API-first',
					desc: 'Backends desacoplados que exponen APIs limpias y versionadas.'
				},
				{
					title: 'Observabilidad',
					desc: 'Sistemas con logging, métricas y trazabilidad desde el diseño.'
				},
				{
					title: 'Escalabilidad',
					desc: 'Arquitecturas que crecen con el negocio sin refactoring masivo.'
				}
			]
		}
	},
	contact: {
		label: 'Contacto',
		title: 'Trabajemos juntos',
		subtitle:
			'¿Tienes un proyecto que requiere experiencia en arquitectura, desarrollo Full Stack o liderazgo técnico? Conversemos.',
		email: 'exel.avendano@gmail.com',
		phone: '+57 300 367 2520',
		location: 'Santa Marta / Barranquilla, Colombia',
		cta: 'Enviar mensaje',
		or: 'o conéctate por',
		copy_email: 'Copiar correo',
		copied: '¡Copiado!'
	}
};
