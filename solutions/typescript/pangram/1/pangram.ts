export function isPangram(sentence: string): boolean {
  const mod = new Set(sentence.toLowerCase().replace(/[^a-z]/g, '').split(''))

  return (mod.size === 26)
  
}
