export const colorCode = (color: Colors): number => {
  return COLORS.indexOf(color)
}


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
export type Colors = (typeof COLORS)[number]