import florencia from '../assets/photos/italia-florencia.jpg';
import nuevaYork from '../assets/photos/eeuu-nueva-york.jpg';
import toronto from '../assets/photos/canada-toronto.jpg';
import sidney from '../assets/photos/australia-sidney.jpg';
import madrid from '../assets/photos/europa-madrid.jpg';
import dubai from '../assets/photos/dubai-marina.jpg';

export type ObjetivoId = 'ciudadania' | 'estudio' | 'trabajo' | 'turismo' | 'residencia';

export const objetivos: Record<ObjetivoId, { nombre: string; tramite: string; pasos: string[] }> = {
  ciudadania: {
    nombre: 'Ciudadanía',
    tramite: 'Ciudadanía italiana',
    pasos: [
      'Revisamos tu árbol familiar y tus actas para saber si aplicas.',
      'Te decimos qué vía conviene: administrativa, judicial o consular.',
      'Organizamos tu carpeta y seguimos el caso hasta el reconocimiento.',
    ],
  },
  estudio: {
    nombre: 'Estudiar',
    tramite: 'Visa de estudio',
    pasos: [
      'Revisamos tu perfil y tus documentos antes de aplicar.',
      'Preparamos contigo la solicitud, sin campos en blanco ni papeles vencidos.',
      'Te contamos cada avance hasta tener la respuesta.',
    ],
  },
  trabajo: {
    nombre: 'Trabajar',
    tramite: 'Visa de trabajo',
    pasos: [
      'Revisamos tu perfil laboral y qué tipo de visa aplica.',
      'Ordenamos y revisamos tus documentos uno por uno.',
      'Presentamos la solicitud contigo y seguimos el caso.',
    ],
  },
  turismo: {
    nombre: 'Turismo',
    tramite: 'Visa de turismo',
    pasos: [
      'Revisamos tus documentos para evitar los errores que causan negaciones.',
      'Te preparamos para la entrevista, si tu destino la pide.',
      'Si quieres, armamos tu paquete de viaje con la agencia.',
    ],
  },
  residencia: {
    nombre: 'Residencia',
    tramite: 'Residencia',
    pasos: [
      'Revisamos tu caso para saber qué tipo de residencia aplica.',
      'Reunimos y revisamos tus documentos antes de presentarlos.',
      'Te acompañamos en el trámite hasta la decisión final.',
    ],
  },
};

const visas: ObjetivoId[] = ['estudio', 'trabajo', 'turismo', 'residencia'];

export const destinos = [
  {
    id: 'italia',
    nombre: 'Italia',
    foto: florencia,
    alt: 'Florencia al atardecer desde lo alto, con la cúpula de la catedral sobre los tejados',
    objetivos: ['ciudadania'] as ObjetivoId[],
  },
  {
    id: 'eeuu',
    nombre: 'Estados Unidos',
    foto: nuevaYork,
    alt: 'Edificios del sur de Manhattan vistos desde el agua al final de la tarde',
    objetivos: visas,
  },
  {
    id: 'canada',
    nombre: 'Canadá',
    foto: toronto,
    alt: 'Silueta de Toronto al atardecer, con la torre CN frente al lago Ontario',
    objetivos: visas,
  },
  {
    id: 'australia',
    nombre: 'Australia',
    foto: sidney,
    alt: 'Puente de la bahía de Sídney iluminado al anochecer',
    objetivos: visas,
  },
  {
    id: 'europa',
    nombre: 'Europa',
    foto: madrid,
    alt: 'Gran Vía de Madrid al atardecer, con el cielo naranja sobre los edificios',
    objetivos: visas,
  },
  {
    id: 'dubai',
    nombre: 'Dubái',
    foto: dubai,
    alt: 'Torres de Dubai Marina con luz dorada de la tarde',
    objetivos: visas,
  },
] as const;

export const viasItalia = [
  {
    id: 'administrativa',
    nombre: 'Administrativa',
    donde: 'En un comune de Italia.',
    viajar: 'Sí. Debes fijar residencia en Italia mientras avanza el trámite.',
    nosotros: 'Dejamos tu carpeta completa y revisada antes de que viajes.',
  },
  {
    id: 'judicial',
    nombre: 'Judicial',
    donde: 'Ante un tribunal en Italia, con abogado.',
    viajar: 'No. El proceso avanza sin que tengas que estar allá.',
    nosotros: 'Reunimos y revisamos los documentos que pide la demanda.',
  },
  {
    id: 'consular',
    nombre: 'Consular',
    donde: 'En la oficina consular de Italia en Bogotá.',
    viajar: 'Solo a Bogotá, el día de tu cita.',
    nosotros: 'Organizamos tu carpeta para que llegues a la cita sin faltantes.',
  },
] as const;

/** Opciones del formulario: mismo vocabulario que el explorador. */
export const opcionesTramite = [
  'Ciudadanía italiana',
  'Visa de estudio',
  'Visa de trabajo',
  'Visa de turismo',
  'Residencia',
  'Paquete de viaje',
] as const;

export const opcionesDestino = [...destinos.map((d) => d.nombre), 'Aún no lo sé'] as const;
