export function hey(message: string): string {

  const trimmed = message.trim()
  const isYelling = trimmed === trimmed.toUpperCase() && trimmed !== trimmed.toLowerCase()
  const isQuestion = trimmed.endsWith('?')

  if(isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!"
  } else if(isYelling) {
    return "Whoa, chill out!" 
  } else if(isQuestion) {
    return "Sure."
  } else if(trimmed === '') {
    return "Fine. Be that way!"
  } return "Whatever."

}