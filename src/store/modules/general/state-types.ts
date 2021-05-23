export interface Technology {
  name: string;
  skill: number; // out of 1
  link?: string;
}

export interface TechnologySkillBreakpointLabel {
  skill: number; // out of 1, minimum
  label: string;
}

export interface MergedTechnology extends Technology {
  label: string;
}

export interface Tool {
  name: string;
  description: string;
}
