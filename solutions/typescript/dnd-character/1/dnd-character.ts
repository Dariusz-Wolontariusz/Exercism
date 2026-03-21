
export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number
  public hitpoints: number

constructor() {
  this.strength = DnDCharacter.generateAbilityScore()
  this.dexterity = DnDCharacter.generateAbilityScore()
  this.constitution = DnDCharacter.generateAbilityScore()
  this.intelligence = DnDCharacter.generateAbilityScore()
  this.wisdom = DnDCharacter.generateAbilityScore()
  this.charisma = DnDCharacter.generateAbilityScore()
  this.hitpoints = 10 + (DnDCharacter.getModifierFor(this.constitution))
  
}

  public static generateAbilityScore(): number {
    
    const diceRoll = () => Math.floor(Math.random() * 6 + 1)
    const abilityScore = Array.from({length: 4}, () => diceRoll())
    const sortScore = abilityScore.sort((a,b) => a-b )
    sortScore.shift()
    const finalScore = sortScore.reduce((total, num) => total + num, 0)
    return finalScore
  
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}

