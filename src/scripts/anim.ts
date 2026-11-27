import { animate } from 'motion';

/** Lee un tiempo (ms) definido en :root y lo devuelve en segundos para Motion. */
export function tiempo(nombre: '--dur-respuesta' | '--dur-entrada' | '--paso-grupo'): number {
  const v = getComputedStyle(document.documentElement).getPropertyValue(nombre).trim();
  const n = parseFloat(v);
  return Number.isFinite(n) ? n / 1000 : 0.3;
}

export const easeSalida = [0.22, 1, 0.36, 1] as const;
export const easeSello = [0.3, 0.75, 0.2, 1] as const;

export const movimientoReducido = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** true cuando el sitio puede animar entradas (JS cargó a tiempo y no hay movimiento reducido). */
export const conMovimiento = () => document.documentElement.classList.contains('motion') && !movimientoReducido();

/** El golpe del sello: baja, presiona y queda girado. */
export function sellar(el: Element, retraso = 0) {
  const giro = parseFloat((el as HTMLElement).style.getPropertyValue('--giro')) || -8;
  if (movimientoReducido()) {
    // sin golpe ni giro: el sello aparece con un fundido corto
    return animate(el, { opacity: [0, 1] }, { duration: 0.2, delay: Math.min(retraso, 0.2) });
  }
  return animate(
    el,
    { opacity: [0, 1], scale: [1.32, 1], rotate: [giro - 7, giro] },
    { duration: 0.26, delay: retraso, ease: easeSello },
  );
}
