export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const

export type Color = (typeof COLORS)[number] 

export const decodedValue = (colors: Color[]): number => {
  const [color1, color2] = colors
  return 10 * COLORS.indexOf(color1) + COLORS.indexOf(color2)
}