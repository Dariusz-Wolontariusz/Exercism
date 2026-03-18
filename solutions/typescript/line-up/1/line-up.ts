export function format(name: string, number: number): string {
 const ordinalNumber = getSuffix(number)
  return `${name}, you are the ${ordinalNumber} customer we serve today. Thank you!`
}

const getSuffix = (number: number): string => {
  const lastOne = number % 10
  const lastTwo = number % 100
  const suffixes: Record<number, string> = {1: 'st', 2: 'nd', 3: 'rd'}
  
  if(lastTwo >= 11 && lastTwo <= 13) {
    return `${number}th`
  } return `${number}${suffixes[lastOne] ?? 'th'}`
}