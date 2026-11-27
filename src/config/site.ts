// Datos reales de EmigraHoy. Todo enlace del sitio sale de aquí: si un dato cambia, se cambia una sola vez.

const whatsappNumero = '573003553637';
const whatsappTexto = 'Hola, EmigraHoy. Quiero agendar una asesoría.';

export const site = {
  nombre: 'EmigraHoy',
  url: 'https://emigrahoy.com.co',
  titulo: 'EmigraHoy · Ciudadanía italiana, visas y viajes desde Envigado',
  descripcion:
    'Ciudadanía italiana, visas de estudio, trabajo, turismo y residencia, y viajes. Te acompañamos paso a paso desde nuestra sede en Envigado.',
  sede: 'Envigado, Antioquia',
  pais: 'Colombia',
  correo: 'contacto@emigrahoy.com.co',
  whatsapp: {
    visible: '+57 300 355 3637',
    href: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappTexto)}`,
    base: `https://wa.me/${whatsappNumero}`,
    tel: '+573003553637',
  },
  resenas: {
    total: 45,
    href: 'https://www.google.com/maps/place/Emigra+Hoy+Colombia/@6.1631145,-75.5964573,17z/data=!3m1!4b1!4m6!3m5!1s0x864f9e0ddbbc2ee3:0x1d2ed4ca8c014943!8m2!3d6.1631145!4d-75.5964573!16s%2Fg%2F11txmjy8v1',
  },
  redes: [
    { nombre: 'Instagram', href: 'https://www.instagram.com/emigrahoycom/' },
    { nombre: 'Facebook', href: 'https://www.facebook.com/EmigraHoy' },
    { nombre: 'YouTube', href: 'https://www.youtube.com/@emigrahoycolombia' },
    { nombre: 'TikTok', href: 'https://www.tiktok.com/@emigrahoy' },
  ],
  // El formulario envía al correo de EmigraHoy con FormSubmit (sin servidor propio).
  // El primer envío real dispara un correo de activación a contacto@emigrahoy.com.co: hay que aprobarlo una vez.
  formulario: {
    endpoint: 'https://formsubmit.co/ajax/contacto@emigrahoy.com.co',
  },
} as const;

export const cta = {
  texto: 'Agenda tu asesoría',
  href: '#agenda',
} as const;

export const navegacion = [
  { texto: 'Rutas', href: '#rutas', id: 'rutas' },
  { texto: 'Italia', href: '#italia', id: 'italia' },
  { texto: 'Por qué nosotros', href: '#confianza', id: 'confianza' },
  { texto: 'Proceso', href: '#proceso', id: 'proceso' },
] as const;
