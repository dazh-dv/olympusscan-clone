export const variantEnterToRight = {
  in: { transform: 'translateX(0)', opacity: 1 },
  out: { transform: 'translateX(10px)', opacity: 0 },
}
export const variantEnterToLeft = {
  in: { transform: 'translateX(0)', opacity: 1 },
  out: { transform: 'translateX(-10px)', opacity: 0 },
}
export const variantInLeftOutRight = {
  in: { transform: 'translateX(0)', opacity: 1 },
  out: { transform: 'translateX(-10px)', opacity: 0 },
}
export const transtion = {
  duration: 0.5,
  ease: "linear",
}