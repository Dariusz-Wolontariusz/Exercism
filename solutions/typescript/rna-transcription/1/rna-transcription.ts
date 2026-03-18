export function toRna(dna: string): string {
  const rna: Record<string, string> = {'A':'U', 'C':'G', 'G':'C', 'T':'A'}
  return dna.split('').map(char => {
    if(!rna[char]) {
      throw new Error ('Invalid input DNA.')
    } return rna[char]
  }).join('')
}
