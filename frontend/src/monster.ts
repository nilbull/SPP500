export const enum MonsterType {
	Aberration,
	Beast,
	Celestial,
	Construct,
	Dragon,
	Elemental,
	Fey,
	Fiend,
	Giant,
	Humanoid,
	Monstrosity,
	Ooze,
	Plant,
	SwarmOfTinyBeasts,
	Undead,
}

export const MonsterTypeNames = new Map<number, string>([
	[MonsterType.Aberration, "Aberration"],
	[MonsterType.Beast, "Beast"],
	[MonsterType.Celestial, "Celestial"],
	[MonsterType.Construct, "Construct"],
	[MonsterType.Dragon, "Dragon"],
	[MonsterType.Elemental, "Elemental"],
	[MonsterType.Fey, "Fey"],
	[MonsterType.Fiend, "Fiend"],
	[MonsterType.Giant, "Giant"],
	[MonsterType.Humanoid, "Humanoid"],
	[MonsterType.Monstrosity, "Monstrosity"],
	[MonsterType.Ooze, "Ooze"],
	[MonsterType.Plant, "Plant"],
	[MonsterType.SwarmOfTinyBeasts, "Swarm of Tiny Beasts"],
	[MonsterType.Undead, "Undead"],
])

export const enum MonsterSize {
	Tiny,
	Small,
	Medium,
	Large,
	Huge,
	Gargantuan,
}

export const MonsterSizeNames = new Map<number, string>([
	[MonsterSize.Tiny, "Tiny"],
	[MonsterSize.Small, "Small"],
	[MonsterSize.Medium, "Medium"],
	[MonsterSize.Large, "Large"],
	[MonsterSize.Huge, "Huge"],
	[MonsterSize.Gargantuan, "Gargantuan"],
])

export enum MonsterEnvironment {
	Arctic = "Arctic",
	Coastal = "Coastal",
	Desert = "Desert",
	Forest = "Forest",
	Grassland = "Grassland",
	Hill = "Hill",
	Mountain = "Mountain",
	Swamp = "Swamp",
	Underdark = "Underdark",
	Underwater = "Underwater",
	Urban = "Urban",
}

export const enum MonsterRace {
	AnyRace,
	Devil,
	Demon,
	Human,
	Shapechanger,
	Goblinoid,
	Titan,
	Gnoll,
	Gnome,
	Dwarf,
	Elf,
	Orc,
	Kobold,
	Lizardfolk,
	Merfolk,
	Sahuagin,
	Grimlock,
}

export const MonsterRaceNames = new Map<number, string>([
	[MonsterRace.AnyRace, "AnyRace"],
	[MonsterRace.Devil, "Devil"],
	[MonsterRace.Demon, "Demon"],
	[MonsterRace.Human, "Human"],
	[MonsterRace.Shapechanger, "Shapechanger"],
	[MonsterRace.Goblinoid, "Goblinoid"],
	[MonsterRace.Titan, "Titan"],
	[MonsterRace.Gnoll, "Gnoll"],
	[MonsterRace.Gnome, "Gnome"],
	[MonsterRace.Dwarf, "Dwarf"],
	[MonsterRace.Elf, "Elf"],
	[MonsterRace.Orc, "Orc"],
	[MonsterRace.Kobold, "Kobold"],
	[MonsterRace.Lizardfolk, "Lizardfolk"],
	[MonsterRace.Merfolk, "Merfolk"],
	[MonsterRace.Sahuagin, "Sahuagin"],
	[MonsterRace.Grimlock, "Grimlock"],
])

export const enum MonsterAlignment {
	Unaligned,
	AnyAlignment,
	LawfulGood,
	LawfulNeutral,
	LawfulEvil,
	NeutralGood,
	Neutral,
	NeutralEvil,
	ChaoticGood,
	ChaoticNeutral,
	ChaoticEvil,
}

export const MonsterAlignmentNames = new Map<number, string>([
	[MonsterAlignment.Unaligned, "Unaligned"],
	[MonsterAlignment.AnyAlignment, "Any Alignment"],
	[MonsterAlignment.LawfulGood, "Lawful Good"],
	[MonsterAlignment.LawfulNeutral, "Lawful Neutral"],
	[MonsterAlignment.LawfulEvil, "Lawful Evil"],
	[MonsterAlignment.NeutralGood, "Neutral Good"],
	[MonsterAlignment.Neutral, "Neutral"],
	[MonsterAlignment.NeutralEvil, "Neutral Evil"],
	[MonsterAlignment.ChaoticGood, "Chaotic Good"],
	[MonsterAlignment.ChaoticNeutral, "Chaotic Neutral"],
	[MonsterAlignment.ChaoticEvil, "Chaotic Evil"],
])

export interface IMonsterAbilities {
	name: string,
	description: string,
}

export enum TypeOfAction {
	Ranged = "Ranged",
	Melee = "Melee",
}

export interface IMonsterActions {
	name: string,
	description: string,
	usageCount: number,
	legendaryAction: boolean,
	typeOfAction?: TypeOfAction, 
	toHit: number,
	reach: number,
	targets: number,
	averagedDamage: number,
	damageDice: number,
	damageConstant: number,

}

export interface IMonster {
	name: string,
	type: MonsterType,
	size: MonsterSize,
	race: MonsterRace,
	//environment: MonsterEnvironment,
	resistance?: string,
	damageImmunity?: string,
	conditionImmunity?: string,
	vulnerability?: string,
	armorClass: number,
	hitPoints?: number,
	hitPointDice?: number,
	hitPointDiceAdd?: number,
	speedLand: number,
	speedSwim?: number,
	strStat: number,
	dexStat: number,
	conStat: number,
	intStat: number,
	wisStat: number,
	chaStat: number,
	strSavingThrow?: number,
	dexSavingThrow?: number,
	conSavingThrow?: number,
	intSavingThrow?: number,
	wisSavingThrow?: number,
	chaSavingThrow?: number,
	skillsAthletics: number,
	skillsAcrobatics?: number,
	skillsSleightOfHand?: number,
	skillsStealth?: number,
	skillsArcana?: number,
	skillsHistory?: number,
	skillsInvestigation?: number,
	skillsNature?: number,
	skillsReligion?: number,
	skillsAnimalHandling?: number,
	skillsInsight?: number,
	skillsMedicine?: number,
	skillsPerception?: number,
	skillsSurvival?: number,
	skillsDeception?: number,
	skillsIntimidation?: number,
	skillsPerformance?: number,
	skillsPersuasion?: number,
	sensesBlindsight?: number,
	sensesDarkvision?: number,
	sensesTremorsense?: number,
	sensesTruesight?: number,
	sensesPassivePerception?: number,
	sensesPassiveInvestigation?: number,
	sensesPassiveInsight?: number,
	languages?: string,
	challengeRating: number,
	experiencePoints: number,
	abilities?: IMonsterAbilities[],
	actions?: IMonsterActions[],
}