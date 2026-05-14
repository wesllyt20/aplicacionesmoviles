/**
 * ============================================================
 *  CONTENIDO CENTRALIZADO DE LA LANDING PAGE #IGP
 *  Modifica los textos desde este archivo.
 *  Dividido por secciones para fácil ubicación.
 * ============================================================
 */

// ─── HERO ───────────────────────────────────────────────────
export const hero = {
    hashtag: '#IGP',
    title: 'App Institucional',
    description:
        'Accede a la información geofísica más reciente sobre sismos, volcanes y otros fenómenos naturales, generados por el IGP, entidad oficial del Estado peruano encargada de su monitoreo y difusión.',
    ctaLabel: 'Conoce más',
    ctaHref: '#about',
    storeLabel: 'Disponible en:',
    rating: '+1.5M descargas de usuarios',
    backgrounds: ['bg2.png', 'bg3.png', 'bg4.png', 'bg5.png'],
}

// ─── BARRA DE ESTADÍSTICAS ──────────────────────────────────
export const stats = [
    { value: '99k', label: 'Usuarios informados' },
    { value: '50k', label: 'Descargas' },
    { value: '24/7', label: 'Tiempo Real' },
]

// ─── ACERCA DE #IGP ─────────────────────────────────────────
export const about = {
    eyebrow: 'Acerca de #IGP',
    title: 'Todo el IGP en ',
    titleHighlight: 'un solo lugar',
    description:
        '#IGP es una aplicación móvil institucional del Instituto Geofísico del Perú que centraliza, en un solo lugar, la información de todos sus servicios, facilitando que la población, autoridades y profesionales se informen, prevengan riesgos y tomen decisiones oportunas.',
    features: [
        {
            icon: 'informacion_institucional.svg',
            title: 'Información institucional',
            description:
                'Accede fácilmente a la información del instituto, sus órganos de línea y sus facilidades científicas en un solo lugar.',
        },
        {
            icon: 'servicios.svg',
            title: 'Servicios del IGP',
            description:
                'Mantente informado mediante reportes y alertas de sismos, volcanes y otros fenómenos geofísicos generados por nuestros servicios institucionales.',
        },
        {
            icon: 'accesibilidad.svg',
            title: 'Accesibilidad de usuario',
            description:
                'Disponible para todos los usuarios en iOS y Android, con opciones de sonido, accesibilidad y widgets interactivos.',
        },
        {
            icon: 'gestion.svg',
            title: 'Información certificada con ISO',
            description:
                'Tecnología, monitoreo e información geofísica respaldada por estándares ISO 9001, ISO 37001 e ISO 27001.',
        },
    ],
}

// ─── SERVICIOS Y FUNCIONALIDADES (MINICARDS) ────────────────
export const services = {
    eyebrow: 'Servicios y Funcionalidades',
    title: 'lo que #IGP tiene para ti!',
    strongTitle: '¡Explora todo ',
    description:
        'Conoce todo lo que puedes encontrar dentro del aplicativo, desde el último sismo hasta las funciones del Planetario Nacional.',
    cards: [
        {
            id: 1,
            icon: 'minicard1.svg',
            image: 'minicard1.png',
            image1: 'minicard1-1.png',
            image2: 'minicard1-2.png',
            overlayTitle: 'Infórmate sobre el último sismo y más.',
            expandedTitle: 'Centro Sismológico Nacional (CENSIS)',
            expandedDescription1:
                'Infórmate sobre el',
            strongDescription: ' último sismo en el país',
            expandedDescription2:', consulta reportes sísmicos recientes y mapas sísmicos actualizados.',
            cta: 'Ver más',
        },
        {
            id: 2,
            icon: 'minicard2.svg',
            image: 'minicard2.png',
            image1: 'minicard2-1.png',
            image2: 'minicard2-2.png',
            overlayTitle: 'Conoce sobre la actividad volcánica reciente y más.',
            expandedTitle: 'Centro Vulcanológico Nacional (CENVUL)',
            expandedDescription1:
                'Infórmate sobre el',
             strongDescription:' último evento volcánico ',
             expandedDescription2:'y consulta reportes, boletines, alertas recientes y el estado de cada volcán.',
            cta: 'Ver más',
        },
        {
            id: 3,
            icon: 'minicard3.svg',
            image: 'minicard3.png',
            image1: 'minicard3-1.png',
            image2: 'minicard3-2.png',
            overlayTitle: 'Explora las últimas publicaciones científicas del IGP.',
            expandedTitle: 'Repositorio Geofísico Nacional (REGEN)',
            expandedDescription1:
                'Explora las',
            strongDescription: ' últimas publicaciones ',
            expandedDescription2: 'de los científicos y profesionales del IGP y de las comunidades geofísicas en nuestro repositorio.',
            cta: 'Ver más',
        },
        {
            id: 4,
            icon: 'minicard4.svg',
            image: 'minicard4.png',
            image1: 'minicard4-1.png',
            image2: 'minicard4-2.png',
            overlayTitle: 'Conoce los próximos eventos del Planetario IGP.',
            expandedTitle: 'Planetario Nacional IGP',
            expandedDescription1:
                'Infórmate sobre los',
            strongDescription: 'próximos eventos y funciones que el planetario ',
            expandedDescription2: 'ofrece al público en general.',
            cta: 'Ver más',
        },
        {
            id: 5,
            icon: 'minicard5.svg',
            image: 'minicard5.png',
            image1: 'minicard5-1.png',
            image2: 'minicard5-2.png',
            overlayTitle: 'Consulta reportes acelerométricos de sismos M ≥ 4.5',
            expandedTitle: 'ACELDAT PERÚ',
            expandedDescription1:
                'Visualiza todos los',
                strongDescription: ' reportes acelerométricos ',
                expandedDescription2: 'generados tras sismos de magnitud mayor o igual a 4.5.',
            cta: 'Ver más',
        },
        {
            id: 6,
            icon: 'minicard6.svg',
            image: 'minicard6.png',
            image1: 'minicard6-1.png',
            image2: 'minicard6-2.png',
            overlayTitle: 'Conoce toda la información geoespacial del IGP.',
            expandedTitle: 'Infraestructura de Datos Espaciales (IDE)',
            expandedDescription1:
                'Consulta información geoespacial sobre fenómenos geofísicos a través de nuestro portal IDE IGP.',
            strongDescription: '',
            expandedDescription2: '',
            cta: 'Ver más',
        },
    ],
}

// ─── RESEÑAS ────────────────────────────────────────────────
export const reviews = {
    eyebrow: 'Reseñas',
    title: 'Descubre la experiencia de los usuarios con #IGP',
    rating: 4.8,
    comments: 120,
    items: [
        { name: 'Carlos Zúñiga Rendón', source: 'Google Play Store', comment: 'Es una excelente aplicación, la gente debe entender que esta app es informativa y no preventiva...', color: '#ef4444' },
        { name: 'dennis victtorio mino madueño', source: 'Google Play Store', comment: 'Útil, necesaria y muy seria, permite estar sobre aviso ante cualquier movimiento sísmico, tsunami u otro evento de la naturaleza en nuestro país', color: '#64748b' },
        { name: 'Aristides Fernández García', source: 'Google Play Store', comment: 'Está aplicación es un instrumento que nos permite saber la magnitud, dónde y que hora se ha registrado el sismo y también nos Previene para la emergencia correspondiente, según el caso...', color: '#3b82f6' },
        { name: 'raul higa hurtado', source: 'Google Play Store', comment: 'Muy bien que estén actualizando, para usar más funcionalidades.', color: '#ea580c' },
        { name: 'Luis Gonzales Tanaka', source: 'Google Play Store', comment: 'un aplicativo que te informa de movimientos telúricos rápido y con exactitud, excelente', color: '#f59e0b' },
        { name: 'Lucia Torres Odiaga', source: 'Google Play Store', comment: 'recién la instale y se abrió de inmediato, muchas gracias, así estaremos mejor informados', color: '#ec4899' },
        { name: 'VICTOR RICARDO OBLITAS DIAZ', source: 'Google Play Store', comment: 'Muy buena y recomendable para los que estamos al pendiente de estos movimientos sísmicos.', color: '#06b6d4' },
        { name: 'Yanesa Yumbato', source: 'Google Play Store', comment: 'Muy buen aplicativo gracias a todos ustedes', color: '#d946ef' },
        { name: 'Guillermo Ernesto Villanueva Sánchez', source: 'Google Play Store', comment: 'Es una exelente aplicación porque nos informa la magnitud detectada de cada cismo que ocurre ..', color: '#84cc16' },
        { name: 'Luciana Cárdenas Acuña', source: 'Google Play Store', comment: 'La aplicación me pareció muy buena ya que nos informa sobre magnitudes de sismos que suceden e incluso cuenta con alertas de volcanes, nos brinda conocimiento de que es y para qué sirve el IGP.', color: '#dc2626' },
        { name: 'Maximo Espinoza', source: 'Google Play Store', comment: 'Es una aplicación de mucha importancia, yo desearía que tenga alarma.', color: '#a855f7' },
        { name: 'YAKOSTA ELISA GALAVIS', source: 'Google Play Store', comment: 'Muy completa la aplicación. Los felicito', color: '#facc15' },
    ],
}

// ─── PREGUNTAS FRECUENTES ───────────────────────────────────
export const faq = {
    eyebrow: 'Preguntas Frecuentes',
    title: 'Encuentra respuestas sobre el uso, servicios y funcionalidades de #IGP',
    items: [
        {
            question: '¿La app móvil #IGP puede alertarme antes de un sismo?',
            answer: 'No. La aplicación móvil #IGP te notificará de manera inmediata luego de ocurrido un sismo reportado por el Centro Sismológico Nacional (CENSIS). Actualmente, no existe una tecnología capaz de predecir sismos antes de que ocurran.',
        },
        {
            question: '¿Cuánto tiempo demora en llegar una notificación de sismo?',
            answer: 'Generalmente, el reporte sísmico es emitido por el CENSIS en un tiempo aproximado de hasta 2 minutos después de ocurrido el evento. Una vez publicado, la información es enviada automáticamente a las plataformas oficiales del IGP, incluyendo redes sociales y el aplicativo móvil.',
        },
        {
            question: '¿La app funciona sin conexión a internet?',
            answer: 'No. La aplicación requiere conexión a internet para acceder a reportes, alertas, mapas y demás información actualizada en tiempo real.',
        },
        {
            question: '¿Cómo activo las noticias del aplicativo?',
            answer: 'Por defecto, las notificaciones de #IGP se encuentran activadas. Durante el primer ingreso a la aplicación, el sistema operativo de tu dispositivo solicitará permiso para recibir notificaciones; es importante aceptarlo para poder recibir alertas y reportes. Desde la aplicación, podrás habilitar o deshabilitar las notificaciones según tu preferencia desde la sección de ajustes.',
        },
        {
            question: '¿Puedo personalizar los sonidos del app?',
            answer: 'No. #IGP utiliza sonidos preestablecidos para la emisión de reportes y alertas. Esto permite que los usuarios puedan reconocer rápidamente el tipo de notificación, especialmente en caso de eventos sísmicos. Actualmente, la aplicación no cuenta con opciones para personalizar estos sonidos.',
        },
        {
            question: '¿Puedo recibir notificaciones solo de una región específica?',
            answer: 'Actualmente no. La aplicación está diseñada para informar a todos los usuarios sobre los eventos geofísicos reportados a nivel nacional.',
        },
        {
            question: '¿Es posible configurar alertas según la magnitud del sismo?',
            answer: 'No por el momento. El aplicativo móvil reporta todos los sismos emitidos por el Centro Sismológico Nacional, independientemente de su magnitud.',
        },
        {
            question: '¿Puedo consultar eventos geofísicos anteriores?',
            answer: 'Sí. La aplicación permite consultar los últimos 50 eventos sísmicos, volcánicos, acelerométricos y publicaciones científicas registradas. Si deseas acceder a información histórica más detallada, podrás ingresar a las plataformas web oficiales de cada servicio desde la misma aplicación.',
        },
        {
            question: '¿Puedo comprar entradas para las funciones del Planetario desde #IGP?',
            answer: 'No. La aplicación está orientada a brindar información institucional, reportes y alertas geofísicas. Sin embargo, podrás acceder directamente al sitio oficial del Planetario Nacional desde la app para consultar funciones y adquirir entradas.',
        },
        {
            question: '¿Puedo visualizar en tiempo real lahares y erupciones volcánicas?',
            answer: 'No. La aplicación emite reportes y alertas relacionados con actividad volcánica; sin embargo, para acceder al monitoreo especializado y en tiempo real de lahares, volcanes u otros eventos asociados, deberás ingresar a la plataforma web oficial del CENVUL, donde encontrarás información más detallada y herramientas de monitoreo.',
        },
    ]
}

// ─── CTA (DESCARGA) ─────────────────────────────────────────
export const cta = {
    title: 'Descarga Ahora #IGP',
    subtitle: 'Información Oficial, Confiable Y Siempre A Tu Alcance',
}

// ─── NAVEGACIÓN ─────────────────────────────────────────────
export const navigation = {
    links: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Acerca de', href: '#about' },
        { label: 'Servicios y Funcionalidades', href: '#services' },
        { label: 'Reseñas', href: '#reviews' },
    ],
    ctaLabel: 'DescargarApp',
}
