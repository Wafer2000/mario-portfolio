export type Lang = "es" | "en";
export type Copy = readonly [string, string];
export const text = (value: Copy, lang: Lang) => value[lang === "es" ? 0 : 1] || value[0] || value[1];
export type Category = "all" | "web" | "backend" | "mobile" | "ai" | "desktop" | "education" | "cloud" | "concept";
export type Project = {
  id: string; name: string; number: string; category: Category; year: string;
  type: Copy; status: Copy; headline: Copy; description: Copy; problem: Copy;
  contribution: Copy; decisions: Copy[]; features: Copy[]; validation: Copy;
  stack: string[]; link?: string; repo?: string; visual: string; visible?: boolean;
  cover?: string; gallery?: { url: string; caption: Copy }[];
  caseStudy?: {
    context?: Copy; role?: Copy; architecture?: Copy[]; challenges?: Copy[]; security?: Copy[];
    testing?: Copy[]; deployment?: Copy[]; results?: Copy[]; lessons?: Copy[];
  };
};
export const categories: { id: Category; label: Copy }[] = [
  { id: "all", label: ["Todos", "All"] }, { id: "web", label: ["Web & Full-Stack", "Web & Full-Stack"] },
  { id: "backend", label: ["Backend & APIs", "Backend & APIs"] }, { id: "mobile", label: ["Mobile", "Mobile"] }, { id: "ai", label: ["IA & Agentes", "AI & Agents"] },
  { id: "desktop", label: ["Desktop", "Desktop"] }, { id: "education", label: ["Educación & EdTech", "Education & EdTech"] },
  { id: "cloud", label: ["Cloud & Infra", "Cloud & Infra"] }, { id: "concept", label: ["Propuestas", "Proposals"] },
];

export const projects: Project[] = [
  {
    id: "commerce", number: "01", name: "Apple Inventory", category: "web", year: "2026", visual: "commerce",
    type: ["Producto IP Global Digital · Full-Stack · POS/CRM", "IP Global Digital product · Full-Stack · POS/CRM"], status: ["Activo · v3.3.89", "Active · v3.3.89"],
    headline: ["Inventario, ventas y crédito en una sola operación.", "Inventory, sales and credit in one operation."],
    description: ["Plataforma multiempresa para inventario de dispositivos, ventas, créditos, clientes, revendedores, pedidos, caja y trazabilidad por IMEI.", "Multi-company platform for device inventory, sales, credit, customers, resellers, orders, cash operations and IMEI-level traceability."],
    problem: ["Una operación de venta de dispositivos necesita controlar IMEI, serial, batería, costos, stock, pagos, crédito y devoluciones sin perder trazabilidad entre empresas, sedes y usuarios.", "A device-sales operation needs to control IMEI, serial, battery health, costs, stock, payments, credit and returns without losing traceability across companies, branches and users."],
    contribution: ["Diseño y evolución Full-Stack del producto: reglas de inventario y ventas, crédito, membresías, catálogos, roles, auditoría, búsqueda, importaciones y flujos operativos responsive.", "Full-Stack product design and evolution: inventory and sales rules, credit, memberships, catalogs, roles, auditing, search, imports and responsive operational workflows."],
    features: [
      ["Inventario serializado por IMEI/serial, salud de batería, lotes, costos, proveedores y búsqueda unificada.", "Serialized inventory by IMEI/serial, battery health, batches, costs, suppliers and unified search."],
      ["Ventas con pagos mixtos, crédito directo, cuotas, abonos, cartera, devoluciones y cancelaciones.", "Sales with mixed payments, direct credit, installments, payments, receivables, returns and cancellations."],
      ["Roles multiempresa, propietarios, administradores, revendedores, clientes y sesiones en múltiples dispositivos.", "Multi-company roles for owners, administrators, resellers and customers, plus multi-device sessions."],
      ["Catálogos, pedidos, importación Excel, escaneo/cámara, etiquetas e impresión para operación comercial.", "Catalogs, orders, Excel imports, camera/scanner support, labels and printing for commercial operations."]
    ],
    decisions: [
      ["Mantener empresa, tienda, usuario y rol como contexto de cada operación sensible.", "Keep company, store, user and role as context for every sensitive operation."],
      ["Restaurar inventario y conservar auditoría cuando una venta o crédito se cancela o devuelve.", "Restore inventory and preserve audit history when a sale or credit operation is cancelled or returned."],
      ["Usar validaciones y pruebas aisladas con datos de ensayo para no afectar operaciones reales.", "Use isolated validation and tests with synthetic data so real operations are not affected."]
    ],
    validation: ["El repositorio actual incluye typecheck, lint y suites para ventas, crédito, devoluciones, membresías, catálogos, interfaces y envíos. La versión declarada en package.json es 3.3.89.", "The current repository includes type checking, linting and suites for sales, credit, returns, memberships, catalogs, interfaces and shipping. package.json declares version 3.3.89."],
    caseStudy: {
      context: ["Producto comercial de IP Global Digital para centralizar la operación de negocios que venden dispositivos y accesorios.", "IP Global Digital commercial product for centralizing the operation of businesses selling devices and accessories."],
      role: ["Product Owner / Full-Stack Engineer responsable de arquitectura funcional, reglas de negocio, datos, permisos y evolución del producto.", "Product Owner / Full-Stack Engineer responsible for functional architecture, business rules, data, permissions and product evolution."],
      architecture: [["Next.js/React y TypeScript para la aplicación web responsive.", "Next.js/React and TypeScript for the responsive web application."], ["Supabase/PostgreSQL para autenticación, persistencia y aislamiento de datos.", "Supabase/PostgreSQL for authentication, persistence and data isolation."], ["ExcelJS, QR/barcodes y APIs del navegador alrededor de los flujos de inventario.", "ExcelJS, QR/barcodes and browser APIs around inventory workflows."]],
      security: [["Roles, permisos y separación de empresas para proteger operaciones y datos.", "Roles, permissions and company separation to protect operations and data."], ["Auditoría en ventas, créditos, cancelaciones y cambios sensibles.", "Audit trails for sales, credit, cancellations and sensitive changes."]],
      testing: [["Suites automatizadas cubren ventas, crédito, devoluciones, membresías, catálogos, interfaces y envíos.", "Automated suites cover sales, credit, returns, memberships, catalogs, interfaces and shipping."]],
      deployment: [["Aplicación desplegada como producto web; las integraciones con hardware se validan en el entorno físico correspondiente.", "Deployed as a web product; hardware integrations are validated in their physical environment."]],
      results: [["Una plataforma operativa que unifica inventario, ventas, crédito, clientes y administración multiempresa.", "An operational platform unifying inventory, sales, credit, customers and multi-company administration."]]
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "PWA", "ExcelJS", "Zod"],
    link: "https://apple-device-inventory.vercel.app"
  },
  {
    id: "mesaflow", number: "02", name: "MesaFlow", category: "web", year: "2026", visual: "mesaflow",
    type: ["Producto IP Global Digital · SaaS para restaurantes", "IP Global Digital product · Restaurant SaaS"], status: ["Publicado · Activo", "Published · Active"],
    headline: ["La operación del restaurante, conectada.", "Restaurant operations, connected."],
    description: ["Plataforma multiempresa para menú, pedidos, mesas, cocina, caja, inventario, personal, fidelización y múltiples sedes.", "Multi-company platform for menus, orders, tables, kitchen, cash operations, inventory, staff, loyalty and multiple branches."],
    problem: ["Restaurantes con varias sedes necesitan que pedidos, caja, inventario, equipo y experiencia del cliente compartan una sola fuente de verdad sin perder la identidad de cada empresa.", "Multi-branch restaurants need orders, cash operations, inventory, staff and customer experience to share one source of truth without losing each company's identity."],
    contribution: ["Diseño de producto, arquitectura multiempresa y desarrollo Full-Stack de los flujos públicos, operativos y administrativos de MesaFlow.", "Product design, multi-company architecture and Full-Stack development of MesaFlow's public, operational and administrative workflows."],
    features: [
      ["Menú público responsive, carrito y pedidos con consecutivo por empresa y sede.", "Responsive public menu, cart and orders with per-company and per-branch numbering."],
      ["Mesas, cocina, turnos, caja diaria, gastos, transferencias y estados operativos.", "Tables, kitchen, shifts, daily cash register, expenses, transfers and operational states."],
      ["Inventario, categorías, costos/precios, carga masiva y estadísticas de productos.", "Inventory, categories, cost/price management, bulk imports and product statistics."],
      ["Multi-sede, roles de personal, personalización de marca, QR/NFC, fidelización y reportes.", "Multi-branch operation, staff roles, brand customization, QR/NFC, loyalty and reporting."]
    ],
    decisions: [
      ["Separar datos por empresa y sede manteniendo una sola aplicación y una sola arquitectura de producto.", "Separate data by company and branch while keeping one application and one product architecture."],
      ["Validar precios y pedidos en backend para no confiar en valores manipulables desde el cliente.", "Validate prices and orders on the backend instead of trusting client-controlled values."],
      ["Usar pruebas con Postgres embebido y datos desechables para verificar aislamiento y reglas de negocio.", "Use embedded Postgres and disposable data to verify isolation and business rules."]
    ],
    validation: ["El repositorio contiene typecheck, lint, build y pruebas para aislamiento, caja, rutas por sede, importaciones, PWA, acceso de clientes, NFC, tiempos de servicio y otros flujos operativos.", "The repository contains type checking, linting, build validation and tests for isolation, cash operations, branch routing, imports, PWA, customer access, NFC, service times and other operational workflows."],
    caseStudy: {
      context: ["MesaFlow es un producto de IP Global Digital orientado a restaurantes multiempresa y multisede.", "MesaFlow is an IP Global Digital product for multi-company and multi-branch restaurants."],
      role: ["Product Owner / Full-Stack Engineer responsable de producto, arquitectura, datos, UX operativa y evolución funcional.", "Product Owner / Full-Stack Engineer responsible for product, architecture, data, operational UX and functional evolution."],
      architecture: [["Next.js 16 + React 19 + TypeScript para frontend y lógica web.", "Next.js 16 + React 19 + TypeScript for frontend and web logic."], ["Supabase/PostgreSQL y RLS para persistencia y aislamiento multiempresa.", "Supabase/PostgreSQL and RLS for persistence and multi-company isolation."], ["ExcelJS, QRCode y PDF tooling para operación, exportaciones y material de punto de venta.", "ExcelJS, QRCode and PDF tooling for operations, exports and point-of-sale materials."]],
      security: [["RLS y permisos por empresa/restaurante para datos e imágenes.", "RLS and per-company/restaurant permissions for data and images."], ["Roles separados para propietarios, administradores, colaboradores y operadores de plataforma.", "Separated roles for owners, administrators, staff and platform operators."]],
      testing: [["Pruebas automatizadas cubren aislamiento, caja, sedes, inventario, PWA, clientes, NFC y reglas operativas.", "Automated tests cover isolation, cash operations, branches, inventory, PWA, customers, NFC and operational rules."]],
      deployment: [["Producto publicado en mesaflow.lat sobre Vercel y Supabase.", "Product published at mesaflow.lat on Vercel and Supabase."]],
      results: [["Producto funcional capaz de soportar operación multiempresa, múltiples sedes y flujos de restaurante desde una sola plataforma.", "Functional product supporting multi-company, multi-branch restaurant operations from a single platform."]]
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "ExcelJS", "PWA", "QR / NFC", "Vercel"],
    link: "https://mesaflow.lat/"
  },
  {
    id: "random-playlist", number: "03", name: "Random Playlist", category: "web", year: "2026", visual: "playlist",
    type: ["Producto IP Global Digital · Music SaaS", "IP Global Digital product · Music SaaS"], status: ["Publicado · Producción", "Published · Production"],
    headline: ["Tus playlists, entre plataformas.", "Your playlists, across platforms."],
    description: ["Aplicación web para organizar, crear, transferir y dividir playlists entre cuentas de servicios musicales conectados por el usuario.", "Web application for organizing, creating, transferring and splitting playlists across user-connected music-service accounts."],
    problem: ["Mover playlists entre servicios musicales exige OAuth, paginación, matching de canciones, límites externos y reglas de plan sin perder orden ni contexto de cuenta.", "Moving playlists across music services requires OAuth, pagination, track matching, external limits and plan rules without losing order or account context."],
    contribution: ["Diseño y desarrollo Full-Stack del producto, integraciones musicales, matching de canciones, transferencias, Split Playlist, sesiones, planes y panel administrativo.", "Full-Stack product design and development, music integrations, track matching, transfers, Split Playlist, sessions, plans and administration."],
    features: [
      ["TIDAL y YouTube/YouTube Music disponibles públicamente; Spotify integrado en modo administrativo y Apple Music preparado para habilitación futura.", "TIDAL and YouTube/YouTube Music are publicly available; Spotify is integrated in admin-only mode and Apple Music is prepared for future enablement."],
      ["Conexión de múltiples cuentas, cuenta activa por plataforma y lectura completa de playlists.", "Multiple connected accounts, active account per platform and complete playlist reading."],
      ["Transferencia multiplataforma con matching por título, artista y duración.", "Cross-platform transfer with matching by title, artist and duration."],
      ["Split Playlist para dividir listas grandes conservando orden y límites del plan.", "Split Playlist for dividing large lists while preserving order and plan limits."]
    ],
    decisions: [
      ["Mantener la disponibilidad comercial separada de la capacidad técnica de cada integración.", "Keep commercial availability separate from the technical capability of each integration."],
      ["Aplicar límites de planes también en backend para que no dependan del frontend.", "Enforce plan limits on the backend so they do not depend on frontend behavior."],
      ["Tratar origen/destino y cuenta activa como parte explícita del contexto de transferencia.", "Treat source/destination and active account as explicit transfer context."]
    ],
    validation: ["El producto está desplegado en randomplaylist.business. La documentación actual describe TIDAL y YouTube/YouTube Music como activos, Spotify en modo admin-only y Apple Music como próximamente disponible.", "The product is deployed at randomplaylist.business. Current documentation describes TIDAL and YouTube/YouTube Music as active, Spotify as admin-only and Apple Music as upcoming."],
    caseStudy: {
      context: ["Producto musical multiplataforma con cuentas conectadas, transferencias, split y membresías.", "Cross-platform music product with connected accounts, transfers, split and memberships."],
      role: ["Product Owner / Full-Stack Engineer responsable de arquitectura, integraciones, reglas de producto y despliegue.", "Product Owner / Full-Stack Engineer responsible for architecture, integrations, product rules and deployment."],
      architecture: [["Next.js 15/React 19 y TypeScript sobre App Router.", "Next.js 15/React 19 and TypeScript on App Router."], ["Supabase Auth + PostgreSQL para usuarios, sesiones, cuentas conectadas y estado del producto.", "Supabase Auth + PostgreSQL for users, sessions, connected accounts and product state."], ["OAuth/MusicKit y APIs de proveedores para lectura, creación y transferencia de playlists.", "OAuth/MusicKit and provider APIs for playlist reading, creation and transfer."]],
      security: [["Tokens y cuentas de plataforma se manejan por usuario y sesión; la autoridad de administración no depende de un simple campo de plan.", "Platform tokens and accounts are handled per user/session; administrative authority does not depend on a simple plan field."]],
      deployment: [["Producto en producción bajo randomplaylist.business y Vercel.", "Production product under randomplaylist.business and Vercel."]],
      results: [["Flujo unificado para mover y dividir playlists entre servicios con reglas de planes y múltiples cuentas.", "Unified workflow for moving and splitting playlists across services with plan rules and multiple accounts."]]
    },
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "OAuth", "Music APIs", "Vercel"],
    link: "https://randomplaylist.business/"
  },
  {
    id: "device-control", number: "04", name: "IP Device Control", category: "backend", year: "2026", visual: "devicecontrol",
    type: ["Producto IP Global Digital · Backend & Device Management", "IP Global Digital product · Backend & Device Management"], status: ["Backend validado · Piloto de dispositivos", "Backend validated · Device pilot"],
    headline: ["Crédito y control de dispositivos, conectados.", "Credit and device control, connected."],
    description: ["Sistema para administrar dispositivos financiados y emitir restricciones remotas ante mora confirmada usando mecanismos oficiales de cada plataforma e integración con Apple Inventory.", "System for managing financed devices and issuing remote restrictions after confirmed delinquency using official platform mechanisms and Apple Inventory integration."],
    problem: ["La financiación de equipos necesita vincular crédito, estado del dispositivo, órdenes remotas y evidencia sin depender de mecanismos inseguros o no oficiales.", "Device financing needs to connect credit status, device state, remote commands and evidence without relying on unsafe or unofficial mechanisms."],
    contribution: ["Arquitectura del sistema, backend FastAPI, modelo multiempresa, órdenes versionadas e integración con Apple Inventory; diseño de agentes/MDM por plataforma.", "System architecture, FastAPI backend, multi-company model, versioned commands and Apple Inventory integration; design of platform-specific agents/MDM."],
    features: [
      ["Backend FastAPI para estados, mora, órdenes, multiempresa y panel web.", "FastAPI backend for states, delinquency, commands, multi-company operation and web panel."],
      ["Servidor MDM para iPhone/iPad/Mac usando mecanismos oficiales de administración.", "MDM server for iPhone/iPad/Mac using official management mechanisms."],
      ["Agente Android Device Owner y servicio Windows diseñados para restricciones administradas.", "Android Device Owner agent and Windows service designed for managed restrictions."],
      ["Módulo de integración con Apple Inventory para disparar acciones desde el flujo de crédito.", "Apple Inventory integration module for triggering actions from the credit workflow."]
    ],
    decisions: [
      ["Usar exclusivamente mecanismos oficiales de administración de cada plataforma.", "Use only official device-management mechanisms on each platform."],
      ["No prometer resistencia universal a borrado/restauración sin validación física por modo de inscripción y modelo.", "Do not claim universal resistance to wipe/restore without physical validation by enrollment mode and device model."],
      ["Versionar órdenes y estados para reducir ambigüedad entre backend y agentes.", "Version commands and states to reduce ambiguity between backend and agents."]
    ],
    validation: ["El repositorio documenta 26/26 pruebas del backend y 10/10 del servidor MDM; Android y Windows tienen fuente lista pero requieren validación física adicional.", "The repository documents 26/26 backend tests and 10/10 MDM-server tests; Android and Windows source is ready but still requires additional physical-device validation."],
    caseStudy: {
      context: ["Extensión de Apple Inventory para operaciones de crédito que requieren gestión remota de dispositivos financiados.", "Apple Inventory extension for credit operations requiring remote management of financed devices."],
      role: ["Backend / Systems Engineer responsable de arquitectura, API, estados, seguridad y diseño de integración multi-plataforma.", "Backend / Systems Engineer responsible for architecture, API, states, security and multi-platform integration design."],
      architecture: [["FastAPI como backend central y API de órdenes/estado.", "FastAPI as the central backend and command/state API."], ["MDM para Apple y agentes administrados para Android/Windows.", "MDM for Apple and managed agents for Android/Windows."], ["Integración con Apple Inventory para relacionar mora, crédito y acción remota.", "Apple Inventory integration linking delinquency, credit and remote action."]],
      security: [["El sistema evita exploits y se apoya en mecanismos oficiales de gestión de dispositivos.", "The system avoids exploits and relies on official device-management mechanisms."], ["La resistencia a borrado depende de inscripción/modelo y no se presenta como garantía universal.", "Wipe resistance depends on enrollment/model and is not presented as a universal guarantee."]],
      testing: [["26/26 pruebas de backend y 10/10 del servidor MDM documentadas en el repositorio.", "26/26 backend tests and 10/10 MDM-server tests documented in the repository."]],
      results: [["Backend e integración con Apple Inventory demostrados; validación física multi-plataforma sigue como siguiente etapa.", "Backend and Apple Inventory integration demonstrated; multi-platform physical validation remains the next stage."]]
    },
    stack: ["Python", "FastAPI", "MDM", "Android Device Owner", "Windows Service", "Multi-tenant", "REST APIs"]
  },
  {
    id: "exivun", number: "05", name: "Exivun", category: "ai", year: "2026", visual: "exivun",
    type: ["Producto IP Global Digital · WhatsApp & AI Automation", "IP Global Digital product · WhatsApp & AI Automation"], status: ["En pruebas · Integración Meta en curso", "Testing · Meta integration in progress"],
    headline: ["Operación empresarial desde WhatsApp.", "Business operations through WhatsApp."],
    description: ["Plataforma multiempresa para atención, catálogo, inventario y ventas mediante WhatsApp, con automatización e IA aplicada.", "Multi-company platform for customer service, catalog, inventory and sales through WhatsApp, with automation and applied AI."],
    problem: ["Muchas empresas atienden y venden por WhatsApp, pero la conversación queda separada del catálogo, inventario, seguimiento y automatización del negocio.", "Many businesses sell and support customers through WhatsApp, but conversations remain disconnected from catalog, inventory, tracking and business automation."],
    contribution: ["Diseño del producto, flujos multiempresa, conexión técnica con Meta, webhook, suscripción de mensajes y preparación de automatizaciones con IA.", "Product design, multi-company flows, Meta technical integration, webhook, message subscription and preparation of AI-powered automations."],
    features: [
      ["Atención y flujos empresariales centralizados alrededor de WhatsApp.", "Customer-service and business workflows centered around WhatsApp."],
      ["Catálogo, inventario y ventas conectados al contexto de cada empresa.", "Catalog, inventory and sales connected to each company's context."],
      ["Webhook y campo de mensajes configurados para la integración con Meta.", "Webhook and messages field configured for Meta integration."],
      ["Automatización con IA con límites de uso controlables por plataforma.", "AI automation with controllable platform usage limits."]
    ],
    decisions: [
      ["Separar la configuración y los datos por empresa desde el diseño inicial.", "Separate configuration and data per company from the initial design."],
      ["Mantener la integración Meta como dependencia explícita y no presentar la publicación como terminada antes de su verificación.", "Keep Meta integration as an explicit dependency and do not present publication as complete before verification."],
      ["Aplicar límites a las llamadas de IA para controlar consumo y costos durante pruebas.", "Apply limits to AI calls to control usage and costs during testing."]
    ],
    validation: ["La aplicación está creada y en pruebas. La conexión técnica con Meta y el webhook quedaron configurados y el campo messages está suscrito; publicación/verificación final siguen pendientes.", "The application is built and in testing. The Meta technical connection and webhook are configured and the messages field is subscribed; final publication/verification remain pending."],
    stack: ["WhatsApp Cloud API", "Meta Webhooks", "AI Automation", "Multi-tenant", "Inventory", "Sales"]
  },
  {
    id: "maya", number: "06", name: "MAYA", category: "ai", year: "2026", visual: "maya",
    type: ["Local AI · Agents · Tooling", "Local AI · Agents · Tooling"], status: ["Prototipo · v0.7.3", "Prototype · v0.7.3"],
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
    caseStudy: {
      context: ["Agente local experimental orientado a operar herramientas, memoria y coordinación entre dispositivos sin ceder el control de ejecución.", "Experimental local agent focused on tools, memory and device coordination without giving up execution control."],
      role: ["Diseño del runtime y desarrollo incremental de herramientas, memoria, sesiones, política, identidad y coordinación remota.", "Runtime design and incremental development of tools, memory, sessions, policy, identity and remote coordination."],
      architecture: [["Ollama ejecuta modelos locales; un registro de herramientas conecta archivos, Git y terminal.", "Ollama runs local models; a tool registry connects files, Git and terminal."], ["SQLite conserva memoria y sesiones locales, mientras HTTP/WebSocket coordina tareas remotas.", "SQLite stores local memory and sessions while HTTP/WebSocket coordinates remote tasks."], ["El worker aplica política local antes de ejecutar acciones.", "The worker enforces local policy before executing actions."]],
      challenges: [["Coordinar equipos y herramientas sin convertir el agente en un ejecutor sin límites.", "Coordinate devices and tools without turning the agent into an unrestricted executor."], ["Separar estado local, coordinación remota e identidad para que cada capa pueda evolucionar.", "Separate local state, remote coordination and identity so each layer can evolve independently."]],
      security: [["Identidad Ed25519, códigos de emparejamiento de un solo uso y protección contra replay.", "Ed25519 identity, one-time pairing codes and replay protection."], ["Claves privadas permanecen en el dispositivo y las acciones sensibles pueden requerir aprobación local.", "Private keys remain on-device and sensitive actions can require local approval."]],
      testing: [["El paquete v0.7.3 incluye suites para núcleo, seguridad, memoria, SQLite, coordinación y worker.", "The v0.7.3 package includes suites for core behavior, security, memory, SQLite, coordination and the worker."]],
      results: [["Prototipo funcional con arquitectura local-first y una base para voz, visión y expansión de acceso remoto.", "Functional local-first prototype with a foundation for voice, vision and expanded remote access."]],
    },
    stack: ["Node.js", "JavaScript", "Ollama", "SQLite", "WebSocket", "Ed25519"],
  },
  {
    id: "musiclinks", number: "07", name: "MusicLinks", category: "desktop", year: "2026", visual: "musiclinks",
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
    id: "ai-global", number: "08", name: "AI Global", category: "web", year: "2026", visual: "global",
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
    id: "banking", number: "09", name: "Mobile Banking", category: "mobile", year: "2025—2026", visual: "banking",
    type: ["Enterprise Software · Financial Technology", "Enterprise Software · Financial Technology"], status: ["Trabajo en producción", "Production work"],
    headline: ["Software financiero en producción.", "Financial software in production."],
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
    caseStudy: {
      context: ["Software financiero móvil en producción para Android/iOS dentro de equipos empresariales.", "Production financial mobile software for Android/iOS within enterprise teams."],
      role: ["Senior Flutter Developer en EPAM, participando en funcionalidades, integraciones, debugging, code review, refactoring, pruebas y entrega continua.", "Senior Flutter Developer at EPAM contributing features, integrations, debugging, code review, refactoring, testing and continuous delivery."],
      architecture: [["Flutter/Dart con BLoC/Riverpod para separar presentación y lógica de negocio.", "Flutter/Dart with BLoC/Riverpod to separate presentation and business logic."], ["APIs REST, WebSockets y servicios Firebase/GCP conectan capacidades financieras.", "REST APIs, WebSockets and Firebase/GCP services connect financial capabilities."], ["Kotlin, Swift y Platform Channels cubren integraciones nativas específicas.", "Kotlin, Swift and Platform Channels cover platform-specific integrations."]],
      challenges: [["Mantener una experiencia consistente entre Android/iOS mientras se integran reglas financieras y capacidades nativas.", "Keep a consistent Android/iOS experience while integrating financial rules and native capabilities."]],
      security: [["El trabajo se realiza dentro de requisitos de seguridad móvil y confidencialidad propios del software financiero.", "The work operates under mobile-security and confidentiality requirements typical of financial software."]],
      testing: [["Pruebas, revisión de código, debugging y refactoring forman parte del flujo de entrega.", "Testing, code review, debugging and refactoring are part of the delivery workflow."]],
      deployment: [["Pipelines de CI/CD con Git y Azure DevOps para software que llega a producción.", "CI/CD pipelines with Git and Azure DevOps for software delivered to production."]],
      results: [["Contribución continua a servicios bancarios, Bre-B para personas y empresas y soluciones para Pymes.", "Ongoing contribution to banking services, Bre-B for individuals and businesses, and SME solutions."]],
    },
    stack: ["Flutter", "Dart", "BLoC", "Riverpod", "Kotlin", "Swift", "REST", "Azure DevOps"],
  },
  {
    id: "containers", number: "10", name: "La Raya Container Registry", category: "web", year: "2026", visual: "containers",
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
    id: "licensing", number: "11", name: "MusicLinks Licensing", category: "backend", year: "2026", visual: "license",
    type: ["Backend · Licensing · Supabase", "Backend · Licensing · Supabase"], status: ["Generación probada", "Generation tested"],
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
    caseStudy: {
      context: ["Backend y herramienta administrativa para comercializar MusicLinks con licencias por dispositivo y vigencia controlada.", "Backend and administrative tooling to commercialize MusicLinks with device-bound licenses and controlled validity."],
      role: ["Diseño e implementación del generador administrativo, modelo de licencias y funciones de generación, activación y validación.", "Design and implementation of the administrative generator, license model, and issuance, activation and validation functions."],
      architecture: [["Supabase y Edge Functions concentran generación, activación y validación.", "Supabase and Edge Functions handle issuance, activation and validation."], ["El cliente Windows conserva estado local protegido con DPAPI y usa una huella de dispositivo.", "The Windows client keeps DPAPI-protected local state and uses a device fingerprint."], ["Las funciones administrativas están separadas de los endpoints consumidos por la aplicación.", "Administrative functions are separated from application-facing endpoints."]],
      challenges: [["Iniciar vigencia en la primera activación sin extenderla durante revalidaciones y conservar licencias heredadas.", "Start validity on first activation without extending it during revalidation while preserving legacy licenses."]],
      security: [["Token administrativo separado, vínculo por dispositivo y estado local protegido con DPAPI.", "Separate administrative token, device binding and DPAPI-protected local state."]],
      testing: [["Se probaron generación mensual/anual y errores de plan, email y autenticación; el ciclo completo de expiración sigue marcado para prueba manual.", "Monthly/annual generation plus plan, email and authentication errors were tested; the full expiration lifecycle remains flagged for manual testing."]],
      results: [["Generación de licencias mensuales y anuales probada con un dispositivo por licencia.", "Monthly and annual license generation tested with one device per license."]],
    },
    stack: ["PowerShell", "C# Launcher", "Supabase", "Edge Functions", "TypeScript", "DPAPI"], repo: "https://github.com/Wafer2000/MusicLinks",
  },
  {
    id: "alerts", number: "12", name: "Alarmas médicas LAN", category: "desktop", year: "2026", visual: "alerts",
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
    id: "human", number: "13", name: "Núcleo Humano", category: "web", year: "2026", visual: "human",
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
    id: "pharmacy", number: "14", name: "Inventario de farmacia", category: "concept", year: "2026", visual: "pharmacy", visible: false,
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
    id: "edtech", number: "15", name: "Marketplace de servicios & EdTech", category: "concept", year: "2026", visual: "edtech", visible: false,
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
  {
    id: "gyo-medical", number: "16", name: "GYO Medical I.P.S. · Internal Alerts", category: "desktop", year: "2026", visual: "alerts", cover: "/assets/projects/gyo-medical.svg",
    type: ["Participación profesional · Salud & TI", "Professional participation · Healthcare IT"], status: ["Desarrollado e implementado internamente", "Developed and implemented internally"],
    headline: ["Comunicación interna con contexto tecnológico.", "Internal communication with technical context."],
    description: ["Aplicación interna para anuncios, notificaciones y alertas institucionales, acompañada por trabajo de soporte e infraestructura tecnológica en GYO Medical I.P.S.", "An internal application for institutional announcements, notifications and alerts, alongside IT support and infrastructure work at GYO Medical I.P.S."],
    problem: ["La operación necesitaba centralizar avisos internos y mantener disponible una infraestructura tecnológica que también soportaba sistemas, equipos y conectividad del centro médico.", "Operations needed a central place for internal notices while keeping the technology infrastructure that supported systems, devices and connectivity available."],
    contribution: ["Desarrollo e implementación de la aplicación interna y participación en soporte de sistemas, LAN/Wi-Fi, cableado, hardware, impresoras, inventario tecnológico y documentación.", "Development and implementation of the internal application plus participation in systems support, LAN/Wi-Fi, cabling, hardware, printers, technology inventory and documentation."],
    features: [
      ["Anuncios, notificaciones y alertas internas para el personal.", "Internal announcements, notifications and alerts for staff."],
      ["Soporte operativo sobre equipos, conectividad y periféricos del entorno institucional.", "Operational support for devices, connectivity and peripherals in the institutional environment."],
      ["Participación alrededor de HIS/ERP y ecosistemas PACS/DICOM sin alterar sus responsabilidades clínicas.", "Work around HIS/ERP and PACS/DICOM ecosystems without changing their clinical responsibilities."],
      ["Inventario y documentación técnica para facilitar continuidad y soporte.", "Technology inventory and documentation to support continuity and maintenance."],
    ],
    decisions: [
      ["Mantener la herramienta de comunicación separada de los sistemas clínicos especializados.", "Keep the communication tool separate from specialized clinical systems."],
      ["Documentar cambios y soporte para reducir dependencia de conocimiento informal.", "Document changes and support work to reduce dependence on informal knowledge."],
      ["Priorizar una implementación interna simple y mantenible para el entorno disponible.", "Prioritize a simple, maintainable internal implementation for the available environment."],
    ],
    validation: ["El proyecto forma parte de mi participación tecnológica en GYO Medical I.P.S. y se presenta como trabajo interno, no como producto clínico ni sistema de diagnóstico.", "This project is part of my technology work at GYO Medical I.P.S. and is presented as an internal tool, not as a clinical or diagnostic product."],
    stack: ["Aplicación interna", "LAN / Wi-Fi", "Soporte TI", "HIS / ERP", "PACS / DICOM"],
  },
  {
    id: "exam-randomizer", number: "17", name: "Randomized Exam Generator", category: "education", year: "2026", visual: "edtech", cover: "/assets/projects/exam-randomizer.svg",
    type: ["Proyecto educativo · Automatización", "Education project · Automation"], status: ["Diseñado y automatizado", "Designed and automated"],
    headline: ["Un banco de preguntas. Exámenes distintos.", "One question bank. Different exams."],
    description: ["Sistema para generar evaluaciones individuales a partir de un banco amplio de preguntas usando Google Forms, Sheets y Apps Script.", "A system that generates individual assessments from a larger question bank using Google Forms, Sheets and Apps Script."],
    problem: ["Crear exámenes diferentes manualmente para cada estudiante consume tiempo y dificulta mantener una misma cobertura temática y trazabilidad.", "Creating different exams manually for every student takes time and makes consistent topic coverage and traceability harder."],
    contribution: ["Diseño del flujo de automatización, selección aleatoria de preguntas, generación de formularios y registro de cada evaluación entregada.", "Automation flow design, random question selection, form generation and registration of each delivered assessment."],
    features: [
      ["Banco central de aproximadamente 100 preguntas y selección automática de 50 por estudiante.", "Central bank of about 100 questions with automatic selection of 50 per student."],
      ["Generación de formularios individuales y registro del estudiante.", "Individual form generation and student registration."],
      ["Control para reducir duplicados y conservar evidencia de qué evaluación recibió cada persona.", "Controls to reduce duplicates and keep evidence of which assessment each person received."],
      ["Uso de herramientas Google para facilitar administración y adopción docente.", "Use of Google tools to simplify administration and teacher adoption."],
    ],
    decisions: [
      ["Mantener el banco de preguntas en Sheets para facilitar mantenimiento sin tocar código.", "Keep the question bank in Sheets so it can be maintained without editing code."],
      ["Usar Apps Script como capa de automatización para trabajar dentro del ecosistema Google.", "Use Apps Script as the automation layer inside the Google ecosystem."],
      ["Registrar las asignaciones para poder auditar y reproducir el proceso de evaluación.", "Record assignments so the assessment process can be audited and reproduced."],
    ],
    validation: ["El flujo fue planteado para uso educativo con generación aleatoria y registro automatizado. La calidad final de cada evaluación depende del banco de preguntas configurado por el docente.", "The flow was designed for educational use with randomized generation and automated records. Final assessment quality depends on the question bank configured by the teacher."],
    stack: ["Google Apps Script", "Google Forms", "Google Sheets", "JavaScript", "Automatización"],
  },
  {
    id: "eficode-fullstack", number: "18", name: "Full-Stack Product Engineering · EFFICODE", category: "web", year: "2018—2022", visual: "global", cover: "/assets/projects/eficode-fullstack.svg",
    type: ["Participación profesional · Full-Stack", "Professional participation · Full-Stack"], status: ["Experiencia profesional completada", "Completed professional experience"],
    headline: ["Mobile, web y backend conectados.", "Mobile, web and backend connected."],
    description: ["Conjunto de soluciones desarrolladas durante mi etapa como Full-Stack Developer, combinando aplicaciones móviles, frontends web, APIs e integraciones.", "A set of solutions developed during my time as a Full-Stack Developer, combining mobile applications, web frontends, APIs and integrations."],
    problem: ["Los productos empresariales suelen requerir varias capas trabajando juntas: experiencia móvil/web, reglas de negocio, datos, autenticación e integraciones externas.", "Enterprise products often require multiple layers working together: mobile/web experiences, business rules, data, authentication and external integrations."],
    contribution: ["Desarrollo Full-Stack con Flutter, Python/FastAPI, JavaScript/TypeScript y Angular, además de APIs, bases de datos, cloud e integraciones empresariales.", "Full-Stack development with Flutter, Python/FastAPI, JavaScript/TypeScript and Angular, plus APIs, databases, cloud and enterprise integrations."],
    features: [
      ["Aplicaciones Flutter conectadas a servicios backend y APIs REST.", "Flutter applications connected to backend services and REST APIs."],
      ["Servicios Python/FastAPI y frontends JavaScript/TypeScript/Angular.", "Python/FastAPI services and JavaScript/TypeScript/Angular frontends."],
      ["Persistencia SQL/NoSQL, autenticación JWT y servicios en AWS/Firebase.", "SQL/NoSQL persistence, JWT authentication and AWS/Firebase services."],
      ["Integraciones con pagos, ERP y flujos financieros/transaccionales según el proyecto.", "Payment, ERP and financial/transactional integrations depending on the project."],
    ],
    decisions: [
      ["Definir contratos claros entre frontend, mobile y backend para reducir acoplamiento.", "Define clear contracts between frontend, mobile and backend to reduce coupling."],
      ["Aplicar pruebas y separación por capas para facilitar mantenimiento de productos en evolución.", "Apply tests and layered separation to make evolving products easier to maintain."],
      ["Elegir servicios cloud e integraciones según necesidades reales de cada solución.", "Choose cloud services and integrations based on the actual needs of each solution."],
    ],
    validation: ["Se presenta como experiencia profesional agrupada. Por confidencialidad no se atribuyen nombres, datos ni detalles de clientes que no estén documentados públicamente.", "Presented as grouped professional experience. For confidentiality, no client names, data or details are attributed unless publicly documented."],
    stack: ["Flutter", "Dart", "Python", "FastAPI", "Angular", "TypeScript", "REST", "SQL / NoSQL", "AWS", "Firebase", "SAP / Siigo"],
  },
  {
    id: "cloud-solutions", number: "19", name: "Cloud Solutions & Migrations · Servinformación", category: "cloud", year: "2022—2024", visual: "containers", cover: "/assets/projects/cloud-solutions.svg",
    type: ["Cloud Architecture · Migrations", "Cloud Architecture · Migrations"], status: ["Experiencia profesional completada", "Completed professional experience"],
    headline: ["Del requisito a una arquitectura desplegable.", "From requirement to deployable architecture."],
    description: ["Trabajo de análisis, diseño de soluciones cloud, arquitectura y planificación de migraciones como GCP Pre-Sales Engineer.", "Requirements analysis, cloud solution design, architecture and migration planning as a GCP Pre-Sales Engineer."],
    problem: ["Migrar o diseñar una solución cloud exige traducir necesidades de negocio y restricciones técnicas en una arquitectura viable, segura y operable.", "Migrating or designing a cloud solution requires translating business needs and technical constraints into a viable, secure and operable architecture."],
    contribution: ["Levantamiento de requisitos, diseño de alternativas, troubleshooting, planificación de migraciones y trabajo con servicios de GCP, AWS y Azure.", "Requirements discovery, solution design, troubleshooting, migration planning and work with GCP, AWS and Azure services."],
    features: [
      ["Análisis técnico y levantamiento de requisitos para soluciones cloud.", "Technical analysis and requirements discovery for cloud solutions."],
      ["Arquitecturas y planes de migración considerando aplicaciones, datos y operación.", "Architectures and migration plans considering applications, data and operations."],
      ["Uso de contenedores y herramientas como Docker/Kubernetes cuando el escenario lo requería.", "Use of containers and tools such as Docker/Kubernetes when the scenario required them."],
      ["Troubleshooting y comunicación técnica para conectar equipos comerciales y de ingeniería.", "Troubleshooting and technical communication connecting commercial and engineering teams."],
    ],
    decisions: [
      ["Comenzar por restricciones y objetivos antes de seleccionar servicios cloud.", "Start with constraints and goals before selecting cloud services."],
      ["Diseñar migraciones por etapas para reducir riesgo operacional.", "Design migrations in stages to reduce operational risk."],
      ["Documentar supuestos y dependencias para que la arquitectura pueda ser evaluada y ejecutada.", "Document assumptions and dependencies so the architecture can be evaluated and executed."],
    ],
    validation: ["Este caso resume mi participación profesional en arquitectura y preventa técnica; no representa una única migración ni expone información confidencial de clientes.", "This case summarizes my professional participation in architecture and technical pre-sales; it does not represent a single migration or expose confidential client information."],
    caseStudy: {
      context: ["Experiencia profesional en preventa técnica y arquitectura cloud, traduciendo necesidades de negocio a opciones desplegables.", "Professional experience in technical pre-sales and cloud architecture, translating business needs into deployable options."],
      role: ["GCP Pre-Sales Engineer: levantamiento de requisitos, diseño de alternativas, troubleshooting y planificación de migraciones.", "GCP Pre-Sales Engineer: requirements discovery, solution design, troubleshooting and migration planning."],
      architecture: [["Diseño con servicios de GCP, AWS y Azure según restricciones y objetivos del escenario.", "Design using GCP, AWS and Azure services according to scenario constraints and goals."], ["Docker y Kubernetes se incorporan cuando la necesidad de contenerización u orquestación lo justifica.", "Docker and Kubernetes are introduced when containerization or orchestration needs justify them."], ["Migraciones diseñadas por etapas para controlar dependencias y riesgo operacional.", "Migrations designed in stages to manage dependencies and operational risk."]],
      challenges: [["Convertir requisitos comerciales y técnicos en una arquitectura que pueda evaluarse, migrarse y operarse.", "Turn business and technical requirements into an architecture that can be evaluated, migrated and operated."]],
      security: [["La arquitectura considera viabilidad, seguridad y operación sin exponer información confidencial de clientes.", "Architecture considers viability, security and operations without exposing confidential client information."]],
      results: [["Experiencia aplicada en análisis cloud, diseño de soluciones y planes de migración multi-cloud.", "Applied experience in cloud analysis, solution design and multi-cloud migration planning."]],
    },
    stack: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Arquitectura cloud", "Migraciones"],
  },
  {
    id: "wake-on-lan", number: "20", name: "Wake-on-LAN Home Automation", category: "cloud", year: "2026", visual: "maya", cover: "/assets/projects/wake-on-lan.svg",
    type: ["Proyecto personal · Automatización", "Personal project · Automation"], status: ["Configurado y probado por etapas", "Configured and tested in stages"],
    headline: ["Encender un equipo también puede automatizarse.", "Even powering on a computer can be automated."],
    description: ["Proyecto personal para encender y controlar un PC remotamente mediante Wake-on-LAN, red doméstica y herramientas de automatización.", "A personal project for remotely powering on and controlling a PC through Wake-on-LAN, a home network and automation tools."],
    problem: ["Acceder de forma remota a un PC apagado requiere coordinación entre firmware, adaptador de red, router y una ruta segura para enviar la señal de encendido.", "Remotely reaching a powered-off PC requires coordination between firmware, the network adapter, router and a safe path for the wake signal."],
    contribution: ["Configuración y pruebas de Wake-on-LAN con router Archer C80, exploración de integración con Alexa y herramientas de control como PC Commander y Push2Run.", "Wake-on-LAN configuration and testing with an Archer C80 router, plus exploration of Alexa integration and control tools such as PC Commander and Push2Run."],
    features: [
      ["Configuración de Wake-on-LAN entre PC, BIOS/UEFI, adaptador y red local.", "Wake-on-LAN configuration across the PC, BIOS/UEFI, network adapter and LAN."],
      ["Pruebas de encendido remoto y rutas de automatización doméstica.", "Remote wake testing and home-automation paths."],
      ["Exploración de comandos por voz y acciones posteriores al encendido.", "Exploration of voice commands and post-wake actions."],
    ],
    decisions: [
      ["Validar primero Wake-on-LAN dentro de la red antes de agregar capas de automatización.", "Validate Wake-on-LAN inside the local network before adding automation layers."],
      ["Mantener separadas las credenciales y accesos remotos de la simple señal de encendido.", "Keep credentials and remote access separate from the wake signal itself."],
    ],
    validation: ["El proyecto documenta configuración y pruebas personales. La disponibilidad desde fuera de la red depende del router, ISP y mecanismo remoto usado.", "The project documents personal configuration and testing. Availability from outside the network depends on the router, ISP and remote mechanism used."],
    stack: ["Wake-on-LAN", "LAN", "Archer C80", "Alexa", "PC Commander", "Push2Run", "Automatización"],
  },
  {
    id: "dev-minds", number: "21", name: "Dev-Minds", category: "education", year: "2026", visual: "edtech", cover: "/assets/projects/dev-minds.svg",
    type: ["Proyecto educativo · Dirección", "Education project · Lead"], status: ["Centro de interés en ejecución", "Learning initiative in progress"],
    headline: ["Tecnología que se aprende construyendo.", "Technology learned by building."],
    description: ["Centro de Interés que dirijo para acercar programación, pensamiento computacional y trabajo STEAM a estudiantes mediante actividades y proyectos.", "A learning initiative I lead to bring programming, computational thinking and STEAM work to students through activities and projects."],
    problem: ["La enseñanza de tecnología gana sentido cuando el estudiante puede relacionar conceptos con problemas, prototipos y resultados que puede observar.", "Technology education becomes more meaningful when students connect concepts with problems, prototypes and results they can observe."],
    contribution: ["Dirección del Centro de Interés, diseño de actividades, acompañamiento de proyectos y articulación de pensamiento computacional, ABP y STEAM.", "Leadership of the learning initiative, activity design, project guidance and integration of computational thinking, project-based learning and STEAM."],
    features: [
      ["Actividades de programación y pensamiento computacional con enfoque progresivo.", "Programming and computational-thinking activities with a progressive approach."],
      ["Proyectos ABP/STEAM vinculados con problemas y productos observables.", "PBL/STEAM projects connected to problems and observable outcomes."],
      ["Uso de herramientas digitales para evaluación, seguimiento y participación.", "Use of digital tools for assessment, tracking and participation."],
    ],
    decisions: [
      ["Priorizar aprendizaje basado en proyectos sobre actividades aisladas.", "Prioritize project-based learning over isolated activities."],
      ["Ajustar la complejidad de las herramientas al grado y a los recursos disponibles.", "Match tool complexity to the grade level and available resources."],
    ],
    validation: ["Dev-Minds forma parte de mi trabajo docente y de liderazgo tecnológico. Los productos específicos dependen de cada grupo y periodo académico.", "Dev-Minds is part of my teaching and technology-leadership work. Specific outputs depend on each student group and academic period."],
    stack: ["STEAM", "ABP / PBL", "Pensamiento computacional", "Programación", "Evaluación digital"],
  },
  {
    id: "digital-security", number: "22", name: "Digital Citizenship & Security", category: "education", year: "2026", visual: "license", cover: "/assets/projects/digital-security.svg",
    type: ["Proyecto educativo · Seguridad digital", "Education project · Digital security"], status: ["Diseñado para aula", "Designed for classroom use"],
    headline: ["Usar tecnología también implica saber protegerse.", "Using technology also means knowing how to stay safe."],
    description: ["Secuencia educativa sobre identidad digital, riesgos, violencia digital, estafas, malware, privacidad y protección de información.", "An educational sequence covering digital identity, risks, online violence, scams, malware, privacy and information protection."],
    problem: ["Los estudiantes usan servicios digitales todos los días, pero necesitan criterios prácticos para reconocer riesgos y tomar mejores decisiones de seguridad y convivencia.", "Students use digital services every day but need practical criteria to recognize risks and make better security and online-behavior decisions."],
    contribution: ["Diseño de unidades, actividades, evaluaciones y productos de aula conectando ciudadanía digital con pensamiento computacional y análisis de casos.", "Design of units, activities, assessments and classroom outputs connecting digital citizenship with computational thinking and case analysis."],
    features: [
      ["Identidad digital, privacidad y protección de datos personales.", "Digital identity, privacy and personal-data protection."],
      ["Reconocimiento de estafas, malware y prácticas de seguridad cotidiana.", "Recognition of scams, malware and everyday security practices."],
      ["Violencia digital, convivencia y responsabilidad en plataformas en línea.", "Online violence, digital citizenship and responsible behavior on platforms."],
      ["Actividades, campañas e infografías como productos de aprendizaje.", "Activities, campaigns and infographics as learning outputs."],
    ],
    decisions: [
      ["Trabajar con escenarios cotidianos para convertir conceptos de seguridad en decisiones concretas.", "Use everyday scenarios to turn security concepts into concrete decisions."],
      ["Evitar enseñar solo herramientas y priorizar principios que sigan siendo útiles aunque cambien las plataformas.", "Avoid teaching only specific tools and prioritize principles that remain useful as platforms change."],
    ],
    validation: ["El proyecto está integrado a planeaciones de Tecnología e Informática y se evalúa mediante productos, actividades y evidencias de aula.", "The project is integrated into Technology and Computing lesson plans and assessed through classroom products, activities and evidence."],
    stack: ["Ciudadanía digital", "Seguridad digital", "Privacidad", "Pensamiento computacional", "ABP / PBL"],
  },
  {
    id: "microbit-arduino", number: "23", name: "Computational Thinking · micro:bit & Arduino", category: "education", year: "2026", visual: "maya", cover: "/assets/projects/microbit-arduino.svg",
    type: ["Proyecto educativo · STEAM", "Education project · STEAM"], status: ["Planeado e integrado al currículo", "Planned and integrated into the curriculum"],
    headline: ["Del algoritmo al prototipo.", "From algorithm to prototype."],
    description: ["Línea de actividades que conecta descomposición, patrones, algoritmos y evaluación de soluciones con prototipos usando micro:bit y Arduino.", "A set of activities connecting decomposition, patterns, algorithms and solution evaluation with prototypes using micro:bit and Arduino."],
    problem: ["El pensamiento computacional puede quedarse abstracto si el estudiante no ve cómo un algoritmo controla o explica el comportamiento de un sistema real.", "Computational thinking can remain abstract if students do not see how an algorithm controls or explains the behavior of a real system."],
    contribution: ["Diseño de la progresión didáctica y de cierres STEAM que llevan conceptos de pensamiento computacional hacia prototipos físicos y evaluación de soluciones.", "Design of the learning progression and STEAM final projects that move computational-thinking concepts toward physical prototypes and solution evaluation."],
    features: [
      ["Descomposición de problemas, reconocimiento de patrones y construcción de algoritmos.", "Problem decomposition, pattern recognition and algorithm construction."],
      ["Prototipos y actividades con micro:bit/Arduino según disponibilidad del aula.", "Prototypes and activities with micro:bit/Arduino depending on classroom availability."],
      ["Evaluación de resultados y mejora iterativa de soluciones.", "Result evaluation and iterative improvement of solutions."],
    ],
    decisions: [
      ["Enseñar primero el razonamiento y luego la herramienta de hardware.", "Teach the reasoning first and the hardware tool second."],
      ["Trabajar con prototipos pequeños que puedan probarse y mejorarse dentro del tiempo de clase.", "Use small prototypes that can be tested and improved within class time."],
    ],
    validation: ["La línea está incorporada a la planeación de pensamiento computacional/STEAM; el hardware utilizado puede variar según los recursos disponibles.", "The line is incorporated into computational-thinking/STEAM planning; hardware can vary depending on available resources."],
    stack: ["micro:bit", "Arduino", "STEAM", "Pensamiento computacional", "Algoritmos", "Prototipado"],
  },
  {
    id: "university-apps", number: "24", name: "University Mobile & Web Apps", category: "mobile", year: "Formación / Studies", visual: "banking", cover: "/assets/projects/university-apps.svg",
    type: ["Proyectos académicos · Ingeniería de Sistemas", "Academic projects · Systems Engineering"], status: ["Proyectos de formación", "Training projects"],
    headline: ["Aprender software construyendo software.", "Learning software by building software."],
    description: ["Aplicaciones y ejercicios académicos desarrollados durante mi formación en Ingeniería de Sistemas, incluyendo experiencias con Ionic y Firebase.", "Applications and academic exercises developed during my Systems Engineering studies, including work with Ionic and Firebase."],
    problem: ["La formación técnica requiere pasar de conceptos a implementaciones donde interfaz, datos y lógica funcionen juntos.", "Technical education requires moving from concepts to implementations where interface, data and logic work together."],
    contribution: ["Participación en proyectos académicos de desarrollo móvil/web y práctica de integración entre frontend, persistencia y servicios en la nube.", "Participation in academic mobile/web development projects and practice integrating frontend, persistence and cloud services."],
    features: [
      ["Aplicaciones híbridas y prototipos móviles con Ionic Framework.", "Hybrid applications and mobile prototypes with Ionic Framework."],
      ["Persistencia y servicios con Firebase en ejercicios académicos.", "Persistence and services with Firebase in academic exercises."],
      ["Práctica de análisis, implementación y presentación de soluciones de software.", "Practice in analyzing, implementing and presenting software solutions."],
    ],
    decisions: [
      ["Usar los proyectos académicos como espacio para integrar varias capas de una aplicación.", "Use academic projects as a space to integrate multiple application layers."],
      ["Priorizar prototipos funcionales que permitan validar conceptos del curso.", "Prioritize functional prototypes that validate course concepts."],
    ],
    validation: ["Se presenta como una agrupación de proyectos de formación. El historial disponible no conserva nombres y alcance suficiente de cada aplicación individual para detallarlas sin inventar información.", "Presented as a group of training projects. The available history does not preserve enough names and scope for each individual application to describe them without inventing details."],
    stack: ["Ionic Framework", "Firebase", "Mobile", "Web", "Ingeniería de Sistemas"],
  },
  {
    id: "cloud-delivery", number: "25", name: "Cloud, CI/CD & Delivery Engineering", category: "cloud", year: "2018—2026", visual: "containers", cover: "/assets/projects/cloud-delivery.svg",
    type: ["Práctica transversal · Cloud & DevOps", "Cross-project practice · Cloud & DevOps"], status: ["Experiencia aplicada en múltiples proyectos", "Applied across multiple projects"],
    headline: ["El software no termina cuando compila.", "Software does not end when it compiles."],
    description: ["Trabajo transversal de despliegue, automatización, control de calidad y operación usando servicios cloud, repositorios y pipelines.", "Cross-project work in deployment, automation, quality control and operations using cloud services, repositories and pipelines."],
    problem: ["Un producto necesita builds reproducibles, validaciones, entornos y una ruta de despliegue que reduzca errores entre desarrollo y producción.", "A product needs reproducible builds, validations, environments and a deployment path that reduces errors between development and production."],
    contribution: ["Configuración y uso de Git/GitHub, Vercel, Supabase, Firebase, GCP, AWS, Azure, Docker, Kubernetes y Azure DevOps según el contexto del proyecto.", "Configuration and use of Git/GitHub, Vercel, Supabase, Firebase, GCP, AWS, Azure, Docker, Kubernetes and Azure DevOps depending on project context."],
    features: [
      ["Validaciones de TypeScript, lint, tests y build antes de liberar cambios.", "TypeScript, lint, test and build checks before releasing changes."],
      ["Despliegues web y backend en servicios administrados y cloud.", "Web and backend deployments on managed and cloud services."],
      ["Migraciones SQL, políticas RLS y administración de configuración en proyectos con Supabase.", "SQL migrations, RLS policies and configuration management in Supabase projects."],
      ["Pipelines y prácticas CI/CD para reducir trabajo manual y detectar errores temprano.", "CI/CD pipelines and practices to reduce manual work and detect errors early."],
    ],
    decisions: [
      ["Usar validaciones automatizadas como condición previa al despliegue.", "Use automated checks as a prerequisite for deployment."],
      ["Mantener secretos y configuración fuera del código fuente cuando el producto los requiere.", "Keep secrets and configuration out of source code when the product requires them."],
      ["Adaptar la complejidad de infraestructura al tamaño y necesidades reales del producto.", "Match infrastructure complexity to the product's actual scale and needs."],
    ],
    validation: ["Este caso agrupa prácticas aplicadas en distintos productos y empleos; no pretende representar un único sistema o una sola infraestructura.", "This case groups practices applied across different products and roles; it does not represent a single system or infrastructure."],
    stack: ["Git / GitHub", "CI/CD", "Vercel", "Supabase", "Firebase", "GCP", "AWS", "Azure", "Docker", "Kubernetes", "Azure DevOps"],
  },

];

export const experience = [
  { company: "EPAM", role: "Senior Flutter Developer", dates: ["Junio 2025 — Actualidad", "June 2025 — Present"] as Copy, description: ["Ingeniería de software móvil en productos bancarios en producción: Flutter/Dart, APIs, CI/CD, testing, code review e integraciones nativas Android/iOS con Kotlin, Swift y Platform Channels.", "Mobile software engineering for production banking products: Flutter/Dart, APIs, CI/CD, testing, code review and native Android/iOS integrations with Kotlin, Swift and Platform Channels."] as Copy, current: true },
  { company: "Periferia IT Group", role: "Semi Senior Flutter Mobile Developer", dates: ["Noviembre 2024 — Junio 2025", "November 2024 — June 2025"] as Copy, description: ["Desarrollo Android/iOS con Flutter, APIs REST, WebSockets, Firebase y SQLite. Trabajo en arquitectura, gestión de estado, testing, debugging y refactoring.", "Android/iOS development with Flutter, REST APIs, WebSockets, Firebase and SQLite. Work across architecture, state management, testing, debugging and refactoring."] as Copy },
  { company: "Servinformación", role: "GCP Pre-Sales Engineer", dates: ["Octubre 2022 — Enero 2024", "October 2022 — January 2024"] as Copy, description: ["Arquitectura cloud, levantamiento de requisitos, diseño de soluciones y planificación de migraciones con GCP, AWS y Azure; Docker/Kubernetes cuando el escenario lo requería.", "Cloud architecture, requirements discovery, solution design and migration planning with GCP, AWS and Azure; Docker/Kubernetes when the scenario required them."] as Copy },
  { company: "EFFICODE", role: "Full-Stack Developer", dates: ["Febrero 2018 — Septiembre 2022", "February 2018 — September 2022"] as Copy, description: ["Ingeniería Full-Stack con Python/FastAPI, JavaScript/TypeScript, Angular y Flutter. APIs, JWT, SQL/NoSQL, AWS/Firebase, testing con Pytest/Jest e integraciones empresariales.", "Full-Stack engineering with Python/FastAPI, JavaScript/TypeScript, Angular and Flutter. APIs, JWT, SQL/NoSQL, AWS/Firebase, Pytest/Jest testing and enterprise integrations."] as Copy },
];

export const expertise = [
  { title: ["Software Engineering & Backend", "Software Engineering & Backend"] as Copy, note: ["Arquitectura, APIs, datos y lógica de negocio para software mantenible.", "Architecture, APIs, data and business logic for maintainable software."] as Copy, items: ["Python", "FastAPI", "TypeScript", "Node.js", "REST", "WebSockets", "PostgreSQL", "SQL / NoSQL", "JWT", "Clean Architecture"] },
  { title: ["Cloud & DevOps", "Cloud & DevOps"] as Copy, note: ["Cloud, contenedores y entrega continua para entornos de producción.", "Cloud, containers and continuous delivery for production environments."] as Copy, items: ["GCP", "AWS", "Azure", "Docker", "Kubernetes", "Git / GitHub", "Azure DevOps", "CI/CD"] },
  { title: ["Mobile Engineering", "Mobile Engineering"] as Copy, note: ["Flutter como especialidad fuerte, con integración nativa cuando el producto lo requiere.", "Flutter as a strong specialty, with native integration when the product requires it."] as Copy, items: ["Flutter", "Dart", "BLoC", "Riverpod", "Provider", "Kotlin", "Swift", "Platform Channels", "Android / iOS"] },
  { title: ["AI & Integrations", "AI & Integrations"] as Copy, note: ["IA aplicada, agentes e integraciones empresariales conectadas al producto.", "Applied AI, agents and enterprise integrations connected to the product."] as Copy, items: ["OpenAI", "Gemini", "Codex", "MCP", "Ollama", "SAP", "Siigo", "Stripe", "Integrations"] },
];

export const certificates = [
  { issuer: "OpenAI", name: "Codex Deployment Practitioner", year: "2026", kind: ["Credencial prioritaria", "Priority credential"] as Copy },
  { issuer: "OpenAI", name: "API Deployment Practitioner", year: "2026", kind: ["Credencial prioritaria", "Priority credential"] as Copy },
  { issuer: "OpenAI", name: "Technical Practitioner", year: "2026", kind: ["Credencial prioritaria", "Priority credential"] as Copy },
  { issuer: "OpenAI", name: "Cyber Solutions Practitioner", year: "2026", kind: ["Credencial prioritaria", "Priority credential"] as Copy },
  { issuer: "OpenAI", name: "Cyber Deployment Practitioner", year: "2026", kind: ["Credencial prioritaria", "Priority credential"] as Copy },
  { issuer: "Google", name: "Certified Partner Specialist · Gemini Enterprise Agent Development", year: "2026", kind: ["Certificación · Vence 07/02/2027", "Certification · Expires February 7, 2027"] as Copy },
  { issuer: "Google Cloud", name: "Associate Cloud Engineer", year: "2023—2026", kind: ["Certificación histórica · Expirada", "Historical certification · Expired"] as Copy },
  { issuer: "Google Cloud", name: "Cloud Digital Leader", year: "", kind: ["Certificación histórica · Expirada", "Historical certification · Expired"] as Copy },
];

export const featuredProjectIds = ["cloud-solutions", "mesaflow", "commerce", "random-playlist", "device-control", "banking"] as const;

export const additionalPriorityIds = ["exivun", "maya", "eficode-fullstack", "ai-global", "musiclinks", "licensing", "alerts", "containers", "cloud-delivery", "gyo-medical"] as const;

export const aiCloudDirection = {
  name: "AI Cloud Platform",
  status: ["Planificado · Cloud-native AI", "Planned · Cloud-native AI"] as Copy,
  headline: ["Cloud-native AI · Backend · Infraestructura · Deployment", "Cloud-native AI · Backend · Infrastructure · Deployment"] as Copy,
  note: ["Próximo case study. Complementará a MAYA con una arquitectura AI cloud-native orientada a backend, infraestructura, observabilidad y despliegue.", "Next case study. It will complement MAYA with a cloud-native AI architecture focused on backend, infrastructure, observability and deployment."] as Copy,
  stack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "OpenAI API", "RAG", "Embeddings", "Agents", "Docker", "Kubernetes", "Terraform", "GCP / AWS", "GitHub Actions", "OpenTelemetry", "Prometheus", "Grafana"],
};

export const archiveRepos = [
  "SOFTWARE_EDUCATIVO-ADMINISTRADOR-", "SOFTWARE_EDUCATIVO-ESTUDIANTES-", "SOFTWARE_EDUCATIVO-PREINSCRITOS-", "SOFTWARE_EDUCATIVO-PROFESOR-", "softwaresolutions", "DBCONTABLE", "HSSR", "koba", "ai_global",
];

export const contact = { email: "mariofernandogonsalvez@gmail.com", github: "https://github.com/Wafer2000", linkedin: "https://www.linkedin.com/in/mariofernandogonsalvezarias", whatsapp: "https://wa.me/573209318053" };
