export type Lang = "es" | "en";
export type Copy = readonly [string, string];
export const text = (value: Copy, lang: Lang) => value[lang === "es" ? 0 : 1] || value[0] || value[1];
export type Category = "all" | "web" | "mobile" | "ai" | "desktop" | "concept";
export type Project = {
  id: string; name: string; number: string; category: Category; year: string;
  type: Copy; status: Copy; headline: Copy; description: Copy; problem: Copy;
  contribution: Copy; decisions: Copy[]; features: Copy[]; validation: Copy;
  stack: string[]; link?: string; repo?: string; visual: string;
};
export const categories: { id: Category; label: Copy }[] = [
  { id: "all", label: ["Todos", "All"] }, { id: "web", label: ["Web & Full-Stack", "Web & Full-Stack"] },
  { id: "mobile", label: ["Mobile", "Mobile"] }, { id: "ai", label: ["IA & Agentes", "AI & Agents"] },
  { id: "desktop", label: ["Desktop", "Desktop"] }, { id: "concept", label: ["Propuestas", "Proposals"] },
];

export const projects: Project[] = [
  {
    id: "commerce", number: "01", name: "IP Global Commerce", category: "web", year: "2026", visual: "commerce",
    type: ["Producto · Inventario Apple", "Product · Apple Inventory"], status: ["Desarrollado · v3.3.78", "Developed · v3.3.78"],
    headline: ["Cada equipo. Toda su historia.", "Every device. Its entire story."],
    description: ["Una plataforma para gestionar inventario, ventas, clientes, crédito y catálogos en múltiples tiendas.", "A platform for inventory, sales, customers, credit and catalogs across multiple stores."],
    problem: ["Vender equipos implica controlar cada IMEI, su condición, su batería y su costo. La operación también necesita pagos mixtos, abonos, cuotas y trazabilidad por tienda.", "Selling devices requires tracking each IMEI, condition, battery level and cost. Store operations also need mixed payments, installments and traceability."],
    contribution: ["Desarrollo Full-Stack y evolución del producto: reglas comerciales, flujos de venta y crédito, catálogos, permisos y una interfaz adaptable al trabajo diario.", "Full-Stack development and product evolution: business rules, sales and credit workflows, catalogs, permissions and an interface built for daily operations."],
    features: [
      ["Inventario serializado y por cantidad. IMEI 1/2, serial, batería, estado, costos, proveedor y lotes.", "Serialized and quantity inventory. IMEI 1/2, serial, battery, condition, cost, supplier and batches."],
      ["Búsqueda unificada, cámara y lector. Generación de códigos y etiquetas para impresión térmica de 58 mm.", "Unified search, camera and scanner support. Barcode and label generation for 58 mm thermal printing."],
      ["Ventas con pagos mixtos, crédito directo o financiera. Abonos, calendario de cuotas, cartera y cancelaciones.", "Sales with mixed payments, direct credit or financing. Payments, installment schedules, receivables and cancellations."],
      ["Clientes por documento, catálogos públicos y para revendedores, pedidos e importación desde Excel.", "Customer lookup by document, public and reseller catalogs, orders and Excel imports."],
      ["Tiendas y roles independientes, invitaciones, sesiones en varios dispositivos, reportes y auditoría.", "Separate stores and roles, invitations, multi-device sessions, reports and audit trails."],
    ],
    decisions: [
      ["Separar empresa, usuario y rol en cada consulta para conservar el contexto de la operación.", "Keep company, user and role context in every query."],
      ["Cancelar ventas y crédito con reposición de stock y registro de auditoría dentro del mismo flujo.", "Cancel sales and credit with inventory restoration and an audit record in the same workflow."],
      ["Descartar respuestas de búsqueda antiguas y conservar los costos editados mientras llega la tasa de cambio.", "Discard stale search responses and preserve edited costs while exchange rates load."],
      ["Importaciones con identificadores estables para reintentar filas pendientes sin duplicar unidades.", "Use stable import identifiers to retry incomplete rows without duplicating devices."],
    ],
    validation: ["La entrega v3.3.78 documenta 143 pruebas de ventas, crédito/SQL, flujos, catálogos e interfaces, además de TypeScript, lint y build. La revisión usa datos de ensayo; cámara, lector e impresora requieren validación física en la instalación.", "Release v3.3.78 documents 143 tests covering sales, credit/SQL, workflows, catalogs and interfaces, plus TypeScript, lint and build checks. Reviews use test data; camera, scanner and printer require physical validation at installation."],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "PWA", "ExcelJS"],
    link: "https://apple-device-inventory.vercel.app", repo: "https://github.com/Wafer2000/apple-device-inventory",
  },
  {
    id: "maya", number: "02", name: "MAYA", category: "ai", year: "2026", visual: "maya",
    type: ["Proyecto propio · Agente local", "Personal project · Local agent"], status: ["Prototipo · v0.7.3", "Prototype · v0.7.3"],
    headline: ["IA local. Acciones con control.", "Local AI. Controlled actions."],
    description: ["Un asistente modular con memoria local, herramientas, políticas de ejecución y coordinación entre dispositivos.", "A modular assistant with local memory, tools, execution policies and cross-device coordination."],
    problem: ["Un agente útil necesita operar sobre archivos y terminal, recordar contexto y coordinar equipos sin perder el control de qué acciones puede ejecutar.", "A useful agent needs file and terminal access, remembered context and device coordination with clear control over what it can execute."],
    contribution: ["Diseño y desarrollo incremental del runtime: registro de herramientas, sesiones, memoria, política de permisos, auditoría, identidad de dispositivos, coordinador y worker remoto.", "Incremental runtime design and development: tool registry, sessions, memory, permissions, audit logs, device identities, coordinator and remote worker."],
    features: [
      ["Modelos locales mediante Ollama y ejecución de herramientas para archivos, Git y terminal.", "Local models through Ollama and tools for files, Git and terminal."],
      ["Memoria normalizada, sesiones de proyecto y espacios de trabajo autorizados.", "Normalized memory, project sessions and authorized workspaces."],
      ["Identidad Ed25519, emparejamiento con códigos de un solo uso y protección contra repetición de solicitudes.", "Ed25519 identity, one-time pairing codes and request replay protection."],
      ["Coordinador HTTP/WebSocket, tareas con leases y worker para Windows/macOS con respaldo por polling.", "HTTP/WebSocket coordinator, leased tasks and a Windows/macOS worker with polling fallback."],
    ],
    decisions: [
      ["Separar los datos locales y la base del coordinador para poder evolucionar cada capa.", "Separate device-local data from the coordinator database so each layer can evolve."],
      ["El worker aplica la política local y bloquea acciones que requieren confirmación.", "The worker enforces local policy and blocks actions requiring confirmation."],
      ["Las claves privadas permanecen en su dispositivo; el servidor conserva las claves públicas.", "Private keys stay on the device; the server stores public keys."],
    ],
    validation: ["El paquete v0.7.3 incluye suites de evaluación de núcleo, seguridad, memoria, SQLite, coordinación y worker. La visión, voz y expansión del acceso remoto forman parte de la evolución del proyecto.", "The v0.7.3 package includes evaluation suites for core behavior, security, memory, SQLite, coordination and the worker. Vision, voice and expanded remote access remain part of the roadmap."],
    stack: ["Node.js", "JavaScript", "Ollama", "SQLite", "WebSocket", "Ed25519"],
  },
  {
    id: "musiclinks", number: "03", name: "MusicLinks", category: "desktop", year: "2026", visual: "musiclinks",
    type: ["Producto · Aplicación Windows", "Product · Windows application"], status: ["Instalación y uso comprobados", "Installation and use confirmed"],
    headline: ["Tu música, sus enlaces.", "Your music, its links."],
    description: ["Una aplicación de escritorio para obtener y organizar enlaces de canciones, álbumes y listas desde varias plataformas.", "A desktop application to collect and organize song, album and playlist links from several platforms."],
    problem: ["Obtener enlaces limpios de un álbum o una lista no debería requerir repetir pasos manuales ni combinar varias herramientas de terminal.", "Getting clean links for an album or playlist should not require repeating manual steps or combining multiple command-line tools."],
    contribution: ["Desarrollo de la interfaz Windows, automatización de extracción, detección de plataformas, distribución e integración con un sistema de licencias.", "Development of the Windows interface, extraction automation, platform detection, distribution and licensing integration."],
    features: [
      ["Spotify, YouTube, YouTube Music y Deezer. Soporte de canciones, álbumes y listas según la plataforma.", "Spotify, YouTube, YouTube Music and Deezer. Songs, albums and playlists depending on the platform."],
      ["Detección automática, contador, copiar resultados, copiar todo y exportación TXT.", "Automatic detection, result count, copy individual results, copy all and TXT export."],
      ["Instalador, accesos directos, desinstalación y herramientas para diagnóstico de errores.", "Installer, shortcuts, uninstaller and diagnostic tools."],
      ["Activación por dispositivo, validación remota y almacenamiento local de la licencia.", "Device-bound activation, remote validation and local license storage."],
    ],
    decisions: [
      ["Combinar una interfaz Windows Forms con procesos Python para integrar las herramientas de extracción.", "Combine a Windows Forms interface with Python processes to integrate extraction tools."],
      ["Conservar resultados copiables y exportables, con errores y estados visibles durante cada operación.", "Keep results easy to copy and export, with visible errors and operation states."],
      ["Mantener las funciones de administración de licencias separadas del cliente.", "Keep license administration functions separate from the client application."],
    ],
    validation: ["La instalación y el funcionamiento fueron confirmados en Windows. Las mejoras de tiempos de respuesta y el ciclo de activación y expiración siguen bajo pruebas manuales.", "Installation and operation were confirmed on Windows. Response-time improvements and the activation/expiration lifecycle remain under manual testing."],
    stack: ["PowerShell", "Windows Forms", "Python", "yt-dlp", "spotdl", "Supabase"], repo: "https://github.com/Wafer2000/MusicLinks",
  },
  {
    id: "ai-global", number: "04", name: "AI Global", category: "web", year: "2026", visual: "global",
    type: ["Producto · Marketplace & EdTech", "Product · Marketplace & EdTech"], status: ["Despliegues registrados", "Recorded deployments"],
    headline: ["Comercio y aprendizaje conectados.", "Connecting commerce and learning."],
    description: ["Una plataforma de productos digitales y cursos con membresías, referidos, recargas y administración.", "A digital products and courses platform with memberships, referrals, top-ups and administration."],
    problem: ["Conectar catálogo, formación y acceso a contenido requiere coordinar membresías, pagos y permisos desde una misma plataforma.", "Connecting a catalog, learning and content access requires coordinating memberships, payments and permissions within one platform."],
    contribution: ["Propiedad y desarrollo del producto, evolución hacia Next.js/Supabase, integración de módulos comerciales y de cursos y despliegue en Vercel.", "Product ownership and development, evolution toward Next.js/Supabase, commercial and course modules and Vercel deployment."],
    features: [
      ["Marketplace de productos digitales y panel administrativo.", "Digital products marketplace and administration panel."],
      ["Cursos, membresías mensuales y control de acceso al contenido de video.", "Courses, monthly memberships and video access control."],
      ["Autenticación, perfiles, referidos, cupones y operaciones de recarga con aprobación.", "Authentication, profiles, referrals, coupons and top-up operations with approval."],
    ],
    decisions: [
      ["Evolucionar una experiencia multiplataforma hacia una solución web con responsabilidades separadas.", "Evolve a cross-platform experience toward a web solution with separated responsibilities."],
      ["Acreditar saldo después de la aprobación administrativa del comprobante.", "Credit the balance after an administrator approves the payment receipt."],
      ["Conservar límites de acceso entre contenido público, perfiles y administración.", "Maintain access boundaries between public content, profiles and administration."],
    ],
    validation: ["El historial registra código y despliegues de la plataforma. La auditoría independiente es un trabajo separado: la propiedad del producto no implica autoría de las pruebas realizadas por terceros.", "The history records platform code and deployments. Independent auditing is separate work: product ownership does not imply authorship of third-party tests."],
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    link: "https://ai-global-web.vercel.app", repo: "https://github.com/Wafer2000/ai-global-web",
  },
  {
    id: "banking", number: "05", name: "Mobile Banking", category: "mobile", year: "2025—2026", visual: "banking",
    type: ["Experiencia profesional · EPAM", "Professional experience · EPAM"], status: ["Trabajo en producción", "Production work"],
    headline: ["Experiencias financieras en Flutter.", "Financial experiences built with Flutter."],
    description: ["Desarrollo y mantenimiento de aplicaciones bancarias para Android e iOS, con integraciones nativas y servicios financieros.", "Development and maintenance of Android and iOS banking applications with native integrations and financial services."],
    problem: ["Los flujos bancarios combinan reglas de negocio, integración de servicios, seguridad móvil y una experiencia consistente entre Android e iOS.", "Banking workflows combine business rules, service integration, mobile security and a consistent Android/iOS experience."],
    contribution: ["Como Senior Flutter Developer en EPAM, participo en nuevas funcionalidades, integraciones, debugging, revisión de código, refactoring, pruebas y entrega continua. El trabajo incluye servicios bancarios, Bre-B para personas naturales y jurídicas y soluciones para Pymes.", "As a Senior Flutter Developer at EPAM, I contribute features, integrations, debugging, code review, refactoring, tests and continuous delivery. The work includes banking services, Bre-B for individuals and businesses and SME solutions."],
    features: [
      ["Aplicaciones multiplataforma con Flutter/Dart y gestión de estado BLoC/Riverpod.", "Cross-platform Flutter/Dart applications with BLoC/Riverpod state management."],
      ["Integración de APIs REST, WebSockets y servicios Firebase/GCP.", "REST API, WebSocket and Firebase/GCP service integration."],
      ["Integraciones Android/iOS con Kotlin, Swift y Platform Channels.", "Android/iOS integrations using Kotlin, Swift and Platform Channels."],
      ["Pruebas, revisión de código y pipelines con Git y Azure DevOps.", "Tests, code review and pipelines with Git and Azure DevOps."],
    ],
    decisions: [
      ["Separar presentación y lógica de negocio mediante arquitectura y gestión de estado.", "Separate presentation and business logic through architecture and state management."],
      ["Resolver los requisitos nativos sin fragmentar la experiencia multiplataforma.", "Address native requirements without fragmenting the cross-platform experience."],
    ],
    validation: ["Experiencia profesional en aplicaciones bancarias productivas. El caso describe mi contribución al equipo; no publica código, datos operativos ni pantallas internas del cliente.", "Professional experience in production banking applications. This case describes my team contribution without publishing client source code, operational data or internal screens."],
    stack: ["Flutter", "Dart", "BLoC", "Riverpod", "Kotlin", "Swift", "REST", "Azure DevOps"],
  },
  {
    id: "containers", number: "06", name: "La Raya Container Registry", category: "web", year: "2026", visual: "containers",
    type: ["Aplicación · Logística", "Application · Logistics"], status: ["Sistema desarrollado", "Developed system"],
    headline: ["Trazabilidad desde el primer registro.", "Traceability from the first record."],
    description: ["Registro de contenedores, mercancías, evidencias y observaciones con acceso por trabajador y organización.", "Container, cargo, evidence and observation records with worker and organization access controls."],
    problem: ["Una operación logística necesita saber quién registró cada contenedor, qué mercancía contiene y cómo evoluciona su revisión, manteniendo la información de cada organización separada.", "A logistics operation needs to know who registered each container, what cargo it holds and how its review progresses, while separating each organization's information."],
    contribution: ["Desarrollo del sistema de registro y consulta, modelado de roles, evidencias de mercancías y evolución de la privacidad por trabajador y organización.", "Development of registration and lookup flows, role modeling, cargo evidence and worker/organization privacy controls."],
    features: [
      ["Registro de contenedores y mercancías, fotografías, videos y observaciones.", "Container and cargo registration, photographs, videos and observations."],
      ["Flujos de revisión y aprobación; trabajadores, responsables y organizaciones.", "Review and approval workflows; workers, managers and organizations."],
      ["Historial de observaciones con autor y fecha, y controles de acceso a los registros.", "Observation history with author and date, plus record access controls."],
    ],
    decisions: [
      ["Distinguir al registrador de la jefatura y de la organización a la que pertenece el registro.", "Distinguish the registering worker from the manager and owning organization."],
      ["Aplicar el contexto de permisos también a la mercancía y a las evidencias asociadas.", "Apply permission context to cargo and associated evidence as well."],
    ],
    validation: ["El historial contiene registros reales de contenedores y entregas de código. Las ampliaciones de permisos, reportes y configuración requieren verificarse por versión; el portafolio utiliza datos ilustrativos.", "The history contains real container records and code deliveries. Permission, reporting and configuration extensions require version-specific verification; this portfolio uses illustrative data."],
    stack: ["Next.js", "React", "TypeScript", "Supabase Auth", "PostgreSQL", "Storage"],
  },
  {
    id: "licensing", number: "07", name: "MusicLinks Licensing", category: "desktop", year: "2026", visual: "license",
    type: ["Módulo de producto · Licencias", "Product module · Licensing"], status: ["Generación probada", "Generation tested"],
    headline: ["Una licencia. Un dispositivo.", "One license. One device."],
    description: ["Generador administrativo y backend de licencias mensuales y anuales con duración desde la primera activación.", "Administrative generator and monthly/annual license backend with duration starting at first activation."],
    problem: ["La distribución de una app comercial necesita emitir licencias, controlar su vigencia y limitar el uso por dispositivo sin entregar funciones administrativas al cliente.", "Commercial app distribution needs license issuance, expiration control and device limits without exposing administrative functions to the client."],
    contribution: ["Desarrollo del generador con interfaz Windows y de las funciones de generación, activación y validación, más la migración para planes de 1 y 12 meses.", "Development of the Windows generator and issuance, activation and validation functions, plus the migration for 1- and 12-month plans."],
    features: [
      ["Planes mensual (1 mes) y anual (12 meses), con un dispositivo por licencia.", "Monthly (1 month) and annual (12 months) plans, with one device per license."],
      ["Activación inicial que fija las fechas sin extenderlas en las revalidaciones.", "First activation fixes the dates without extending them during revalidation."],
      ["Token administrativo separado, huella de dispositivo y estado local protegido con DPAPI.", "Separate administrative token, device fingerprint and DPAPI-protected local state."],
    ],
    decisions: [
      ["Iniciar la vigencia al activar, conservando las licencias heredadas existentes.", "Start the validity period on activation while preserving existing legacy licenses."],
      ["Separar las funciones administrativas de los endpoints usados por la aplicación.", "Separate administrative functions from the endpoints used by the application."],
    ],
    validation: ["La generación mensual/anual y los errores de plan, email y autenticación fueron probados. El flujo completo de activación y expiración quedó pendiente de prueba manual en el registro más reciente.", "Monthly/annual generation and plan, email and authentication errors were tested. The latest record leaves the complete activation/expiration flow pending manual testing."],
    stack: ["PowerShell", "C# Launcher", "Supabase", "Edge Functions", "TypeScript", "DPAPI"], repo: "https://github.com/Wafer2000/MusicLinks",
  },
  {
    id: "alerts", number: "08", name: "Alarmas médicas LAN", category: "desktop", year: "2026", visual: "alerts",
    type: ["Prototipo · Red local Windows", "Prototype · Windows local network"], status: ["Prototipo en pruebas", "Prototype under testing"],
    headline: ["Una alerta. Varios equipos.", "One alert. Multiple devices."],
    description: ["Aplicación para emitir códigos y mensajes visuales desde un administrador a clientes de una red local.", "An application to send visual codes and messages from an administrator to local-network clients."],
    problem: ["Un coordinador necesita comunicar una alerta simultánea y saber qué equipos la han aceptado, sin depender de una infraestructura de datos compleja.", "A coordinator needs to communicate simultaneous alerts and know which devices acknowledged them without complex data infrastructure."],
    contribution: ["Desarrollo del administrador, mensajes y programación de alarmas, comunicación local y registro de confirmaciones. Evolución de la interfaz y preparación de la distribución Windows.", "Development of administration, messages, scheduled alerts, local communication and acknowledgment records. Interface evolution and Windows distribution preparation."],
    features: [
      ["Códigos de colores y mensajes libres, sin sonido.", "Color-coded alerts and custom messages, without sound."],
      ["Alarmas recurrentes y mensajes a una hora concreta.", "Recurring alarms and messages at a specified time."],
      ["Clientes receptores con botón Aceptar y registro de confirmaciones.", "Receiving clients with an Acknowledge button and confirmation logs."],
    ],
    decisions: [
      ["Separar el administrador de los clientes, que solo reciben y confirman.", "Separate administration from receiving and acknowledging clients."],
      ["Usar comunicación LAN y registros CSV/JSON para mantener una instalación sencilla.", "Use LAN communication and CSV/JSON logs to keep installation simple."],
    ],
    validation: ["La prueba de código azul está confirmada en el historial. El prototipo continúa en revisión de interfaz, roles y empaquetado para Windows.", "The blue-code test is confirmed in the history. The prototype continues through interface, role and Windows packaging review."],
    stack: ["Python", "PySide6", "TCP/LAN", "CSV", "JSON", "Windows"],
  },
  {
    id: "human", number: "09", name: "Núcleo Humano", category: "web", year: "2026", visual: "human",
    type: ["Encargo · Portafolio académico", "Commission · Academic portfolio"], status: ["Entrega web · v6", "Web delivery · v6"],
    headline: ["Aprender también puede explorarse.", "Learning can be explored, too."],
    description: ["Una experiencia web para Juan Esteban. Evolución de Maestro · Ser Humano, con clases, evidencias y reflexión personal.", "A web experience for Juan Esteban. An evolution of Maestro · Ser Humano, with classes, evidence and personal reflection."],
    problem: ["Organizar clases, reflexiones y evidencias académicas de forma navegable, personal y creativa.", "Organize classes, reflections and academic evidence into a personal, creative and navigable experience."],
    contribution: ["Construcción y adaptación de la experiencia web por encargo. Los textos académicos, reflexiones y autoría del portafolio corresponden a Juan Esteban.", "Commissioned construction and adaptation of the web experience. Academic writing, reflections and portfolio authorship belong to Juan Esteban."],
    features: [
      ["Navegación por niveles y clases, evidencias, reflexiones y glosario.", "Navigation through levels and classes, evidence, reflections and glossary."],
      ["Estética retro, avatar y presentación de materiales multimedia.", "Retro style, avatar and multimedia materials."],
      ["Diseño adaptable y actualización del contenido.", "Responsive design and content updates."],
    ],
    decisions: [
      ["Traducir la estructura académica a una experiencia de exploración sin cambiar su autoría.", "Translate the academic structure into an exploration experience while preserving authorship."],
      ["Mantener el contenido personal del autor como centro de la experiencia.", "Keep the author's personal content at the center of the experience."],
    ],
    validation: ["Se conserva el paquete de entrega v6 del sitio. Este caso representa trabajo de diseño y desarrollo web por encargo, no estudios ni producción académica propios.", "The v6 site delivery package is preserved. This case represents commissioned web design/development, not my own academic studies or writing."],
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: "pharmacy", number: "10", name: "Inventario de farmacia", category: "concept", year: "2026", visual: "pharmacy",
    type: ["Propuesta · Diseño de solución", "Proposal · Solution design"], status: ["Propuesta, sin entrega confirmada", "Proposal, delivery unconfirmed"],
    headline: ["Lotes, vencimientos y trazabilidad.", "Batches, expiration and traceability."],
    description: ["Propuesta funcional y técnica para controlar existencias, lotes, fechas de vencimiento y movimientos de una farmacia.", "Functional and technical proposal to track pharmacy stock, batches, expiration dates and movements."],
    problem: ["El inventario farmacéutico requiere conocer existencias y vencimientos, registrar entradas y salidas y generar alertas oportunas.", "Pharmacy inventory requires stock and expiration visibility, inbound/outbound records and timely alerts."],
    contribution: ["Levantamiento del alcance, definición de módulos, tiempos y propuesta de desarrollo y mantenimiento.", "Scope definition, module planning, delivery timeline and a development/maintenance proposal."],
    features: [["Inventario, lotes, vencimientos, alertas y movimientos propuestos.", "Proposed inventory, batch, expiration, alert and movement modules."],["Reportes, usuarios, auditoría y acceso multiplataforma.", "Reports, users, auditing and cross-platform access."]],
    decisions: [["Delimitar el alcance de inventario y separar los requisitos de contabilidad y facturación regulada.", "Define inventory scope separately from accounting and regulated invoicing requirements."]],
    validation: ["Existe una propuesta formal de agosto de 2026. El historial no confirma implementación ni puesta en producción.", "A formal August 2026 proposal exists. The history does not confirm implementation or production release."],
    stack: ["Análisis de requisitos", "Diseño funcional", "Planificación"],
  },
  {
    id: "edtech", number: "11", name: "Marketplace de servicios & EdTech", category: "concept", year: "2026", visual: "edtech",
    type: ["Propuesta · Arquitectura de MVP", "Proposal · MVP architecture"], status: ["MVP propuesto", "Proposed MVP"],
    headline: ["Reservas, pagos y contenido digital.", "Bookings, payments and digital content."],
    description: ["Diseño de un MVP multiplataforma con proveedores, suscripciones, reservas, videollamadas y pagos divididos.", "Design of a cross-platform MVP with providers, subscriptions, bookings, video calls and split payments."],
    problem: ["Conectar clientes y proveedores implica coordinar disponibilidad, cobros, acceso a contenido y distribución de pagos.", "Connecting customers and providers requires coordinating availability, charging, content access and payment distribution."],
    contribution: ["Propuesta de arquitectura y ejecución por hitos basada en mi experiencia con Flutter, APIs, Stripe Connect e integraciones transaccionales.", "Architecture and milestone-based delivery proposal built on my Flutter, API, Stripe Connect and transactional integration experience."],
    features: [["Experiencia Web/Android/iOS y roles cliente/proveedor.", "Web/Android/iOS experience and customer/provider roles."],["Stripe Connect/Billing, reservas, videollamadas y protección de contenido propuestos.", "Proposed Stripe Connect/Billing, booking, video call and content protection modules."]],
    decisions: [["Separar agenda, pagos y acceso al contenido en servicios con contratos claros.", "Separate scheduling, payments and content access into services with clear contracts."]],
    validation: ["La propuesta y la experiencia técnica están documentadas. No se presenta como producto entregado.", "The proposal and technical experience are documented. It is not presented as a delivered product."],
    stack: ["Flutter", "Dart", "Python", "FastAPI", "Stripe Connect", "APIs"],
  },
];

export const experience = [
  { company: "EPAM", role: "Senior Flutter Developer", dates: ["Junio 2025 — Actualidad", "June 2025 — Present"] as Copy, description: ["Soluciones bancarias móviles. Flutter/Dart, BLoC/Riverpod, APIs, integraciones Android/iOS, pruebas y CI/CD.", "Mobile banking solutions. Flutter/Dart, BLoC/Riverpod, APIs, Android/iOS integrations, tests and CI/CD."] as Copy, current: true },
  { company: "Periferia IT Group", role: "Semi Senior Flutter Mobile Developer", dates: ["Noviembre 2024 — Junio 2025", "November 2024 — June 2025"] as Copy, description: ["Aplicaciones Android/iOS, APIs REST y WebSockets, Firebase, SQLite y gestión de estado. Testing, debugging y refactoring.", "Android/iOS applications, REST APIs and WebSockets, Firebase, SQLite and state management. Testing, debugging and refactoring."] as Copy },
  { company: "Servinformación", role: "GCP Pre-Sales Engineer", dates: ["Octubre 2022 — Enero 2024", "October 2022 — January 2024"] as Copy, description: ["Análisis de requisitos, diseño de soluciones cloud, arquitectura y planificación de migraciones. GCP, AWS, Azure, Docker y Kubernetes.", "Requirements analysis, cloud solution design, architecture and migration planning. GCP, AWS, Azure, Docker and Kubernetes."] as Copy },
  { company: "EFFICODE", role: "Full-Stack Developer", dates: ["Febrero 2018 — Septiembre 2022", "February 2018 — September 2022"] as Copy, description: ["Mobile, web y servicios con Flutter, Python/FastAPI, JavaScript/TypeScript y Angular. APIs, JWT, SQL/NoSQL, AWS/Firebase y pruebas Pytest/Jest.", "Mobile, web and services using Flutter, Python/FastAPI, JavaScript/TypeScript and Angular. APIs, JWT, SQL/NoSQL, AWS/Firebase and Pytest/Jest tests."] as Copy },
];

export const expertise = [
  { title: ["Mobile", "Mobile"] as Copy, note: ["Una base de código. La profundidad nativa que hace falta.", "One codebase. Native depth where it matters."] as Copy, items: ["Flutter", "Dart", "BLoC", "Riverpod", "Provider", "FlutterFlow", "Kotlin", "Swift", "Platform Channels", "BLE / GATT", "Android / iOS"] },
  { title: ["Web, APIs & Datos", "Web, APIs & Data"] as Copy, note: ["Del flujo de usuario a las reglas del negocio.", "From user flows to business rules."] as Copy, items: ["Next.js", "React", "Angular", "JavaScript", "TypeScript", "Python", "FastAPI", "Node.js", "REST", "WebSockets", "SQL / NoSQL", "PostgreSQL", "SQLite", "JWT"] },
  { title: ["Cloud & Calidad", "Cloud & Quality"] as Copy, note: ["Arquitectura, pruebas y entrega continua.", "Architecture, testing and continuous delivery."] as Copy, items: ["GCP", "AWS", "Azure", "Firebase", "Supabase", "Docker", "Kubernetes", "Git / GitHub", "Azure DevOps", "CI/CD", "Clean Architecture", "Pytest / Jest"] },
  { title: ["Integraciones & IA", "Integrations & AI"] as Copy, note: ["Sistemas conectados y herramientas con propósito.", "Connected systems and purposeful tools."] as Copy, items: ["Stripe / Stripe Connect", "SAP / Siigo", "Pagos / Conciliación", "Geolocalización", "Notificaciones", "Cifrado", "Ollama", "Codex", "Claude Code", "Copilot", "Cursor", "Gemini", "MCP"] },
];

export const certificates = [
  { issuer: "OpenAI", name: "API Deployment Practitioner", year: "2026", kind: ["Credencial completada", "Completed credential"] as Copy },
  { issuer: "OpenAI", name: "Codex Deployment Practitioner", year: "2026", kind: ["Credencial completada", "Completed credential"] as Copy },
  { issuer: "OpenAI", name: "Technical Practitioner", year: "2026", kind: ["Credencial completada", "Completed credential"] as Copy },
  { issuer: "OpenAI", name: "Cyber Deployment Practitioner", year: "2026", kind: ["Credencial completada", "Completed credential"] as Copy },
  { issuer: "OpenAI", name: "Cyber Solutions Practitioner", year: "2026", kind: ["Credencial completada", "Completed credential"] as Copy },
  { issuer: "Google", name: "Certified Partner Specialist · Gemini Enterprise Agent Development", year: "2026", kind: ["Certificación · Vence 07/02/2027", "Certification · Expires February 7, 2027"] as Copy },
  { issuer: "Google Cloud", name: "Associate Cloud Engineer", year: "2023—2026", kind: ["Certificación histórica · Expirada", "Historical certification · Expired"] as Copy },
  { issuer: "Google Cloud", name: "Cloud Digital Leader", year: "", kind: ["Certificación histórica · Expirada", "Historical certification · Expired"] as Copy },
];

export const archiveRepos = [
  "SOFTWARE_EDUCATIVO-ADMINISTRADOR-", "SOFTWARE_EDUCATIVO-ESTUDIANTES-", "SOFTWARE_EDUCATIVO-PREINSCRITOS-", "SOFTWARE_EDUCATIVO-PROFESOR-", "softwaresolutions", "DBCONTABLE", "HSSR", "koba", "ai_global",
];

export const contact = { email: "mariofernandogonsalvez@gmail.com", github: "https://github.com/Wafer2000", linkedin: "https://www.linkedin.com/in/mariofernandogonsalvezarias", whatsapp: "https://wa.me/573209318053" };
