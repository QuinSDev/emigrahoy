# IDEA · EmigraHoy

**En una frase:** el sitio es tu expediente migratorio en orden. Cada duda resuelta recibe un sello rojo, como un pasaporte revisado en un despacho de Envigado.

**Lugar u objeto (respuesta 6):** pasaporte y expediente sobre papel de alto gramaje, con luz natural cálida. Todo el recorrido usa esos elementos con una función: el **sello** marca algo resuelto o elegido; la **página de pasaporte** ordena los pasos; la **ventana de foto carnet** se abre al destino.

## Paleta y tipografía

Los dos colores del logo son verde, rojo y blanco, igual que la bandera italiana (respuestas 1 y 7).

| Token | HEX | OKLCH | Uso |
|---|---|---|---|
| verde-marca | `#428F4C` | 0.584 0.126 146.4 | logo, superficies, texto grande |
| verde-texto | `#2E6B37` | 0.474 0.103 146.7 | enlaces y títulos verdes (6.1:1 sobre papel) |
| rojo-sello | `#BE3744` | 0.542 0.171 19.8 | botón principal y sellos (5.5:1 con blanco) |
| papel | `#FBF9F4` | 0.982 0.007 88.6 | fondo base: el "blanco" del logo, con gramaje |
| folio | `#F1ECE1` | 0.944 0.016 86.4 | fondo alterno de secciones |
| tinta | `#1C2620` | 0.257 0.018 158.5 | texto (14.8:1) |
| verde-noche | `#163020` | 0.283 0.044 155.3 | sala de embarque: Confianza y Contacto |
| línea | `#D9D1C0` | 0.862 0.025 85.8 | filetes, bordes de documento |

**Tipografías** (respuestas 5 y 8: Monocle/Kinfolk + legal-tech):
- **Newsreader:** títulos, en tamaño muy grande. Es un serif editorial de revista.
- **Schibsted Grotesk:** texto, menú, botones y formulario. Es una grotesca de periódico, clara y de despacho.
- **IBM Plex Mono:** solo en números de folio, la franja tipo pasaporte (`<<<`) y la referencia del sello.

## La entrada (primeros 5 s)

Sobre papel aparece el título por líneas: **"Emigra con tus papeles en orden"**. Debajo dice qué hacemos (ciudadanía italiana, visas y viajes) y que la sede física está en Envigado, con 45 reseñas en Google. A la derecha, la calle toscana se abre dentro de un marco alto de foto carnet. Aparece el botón **Agenda tu asesoría** y, en el segundo 1.4, un **sello rojo "Envigado · Antioquia"** cae sobre la esquina de la foto: queda claro que hay una sede donde puedes ir. La secuencia dura 1.5 s: fondo, imagen, título, botón y sello.

## Navegación corregida

- En escritorio, la barra está siempre visible y no hay hamburguesa. Lleva el logo, 4 enlaces (Rutas · Italia · Por qué nosotros · Proceso), WhatsApp y el botón principal.
- Al bajar, la barra se compacta y subraya la sección actual.
- En el celular, un menú a pantalla completa con transición que se puede interrumpir, y una barra inferior fija con el botón principal.
- Cero enlaces muertos: cada enlace va a un ancla o a una URL real. Las redes sociales solo aparecen si me pasas el enlace.

## Secciones

`sección · duda · composición · imagen · animación · paso a la siguiente`

1. **Entrada** · ¿Qué es y para quién? · columnas desiguales con la foto encimada al texto · calle toscana (plano medio) · secuencia de entrada y sello · *corte seco* al folio.
2. **Explorador de rutas** (interacción 1) · ¿Aplica a mi caso? · índice de documento a la izquierda y hoja de resultado a la derecha · foto del destino elegido (plano general) · las pestañas entran en cascada lateral y la hoja se revela con una máscara desde arriba. Eliges objetivo y destino (EE. UU., Canadá, Australia, Europa, Dubái o Italia), ves qué hacemos y el botón ya lleva ese trámite al formulario · *la imagen crece hasta ser el fondo*.
3. **Ciudadanía italiana** (momento principal, GSAP) · ¿Qué vía me sirve? · pantalla completa · Toscana (plano general) · al bajar, la ventana de foto carnet se abre hasta llenar la pantalla. Encima entran 3 fichas: administrativa, judicial y consular. Es el comparador (interacción 2): tocas una vía y ves dónde se hace, si debes viajar y qué llevamos nosotros. Funciona hacia abajo y hacia arriba · *el color invade*.
4. **Confianza** · ¿Por qué confiar y a quién reclamo? · "Envigado" en texto enorme, con la foto de la sede pasando por detrás · sede (espacio marcado) · las letras se revelan con una máscara horizontal · **botón a la mitad** · *máscara que descubre*.
5. **Proceso** (segundo mejor momento) · ¿Cuánto esfuerzo me pide? · recorrido horizontal de páginas de pasaporte (deslizar, flechas y teclado) · sellos en pasaporte (detalle) · cada página recibe su sello al centrarse · *el color invade* (verde-noche).
6. **Contacto** · ¿Qué hago ahora? · formulario sobre papel, encimado en el fondo verde-noche, con un pase que resume tu trámite · sin foto · el pase entra de lado, los campos en cascada y la confirmación recibe su sello · **botón al final** · fin, pie de página con la franja de pasaporte.

Las secciones alternan intensidad: grande, tranquila, grande, tranquila, grande, tranquila. Son 5 composiciones distintas y 4 tipos de transición.

## Fotos

**Dirección:** luz natural cálida de hora dorada, piedra, verde y papel, sin gente posando. Todas llevan el mismo ajuste de color.

| Foto | Uso |
|---|---|
| `toscana-italia.jpg` | sección Italia |
| calle italiana | entrada |
| destinos de visas | fotos libres de Unsplash/Pexels, con su fuente en el pie |
| `sellos.png` | solo mide 347 px: la cambio por una foto libre de sellos en mejor resolución |
| `estudiar_trabajr.jpg` | **no se usa**: tiene marca de agua de Depositphotos |

## Me falta para no dejar nada muerto

- Número de WhatsApp oficial.
- Enlace a las reseñas de Google.
- Calle o barrio de la sede en Envigado y horario.
- Correo.
- Redes sociales.
- ¿Las fotos de la calle italiana y de la Toscana tienen licencia de uso?
- Destino del formulario. Si no lo tienes, al enviar se abre WhatsApp con tus datos ya escritos y la confirmación lo dice tal cual.
