export interface IPlayer {
    name: string;
    level: number;
    position: string;
    city: string;
    type: 'Analyst' | 'Frontend' | 'Backend' | 'QA' | 'Team Lead' | 'DevOps',
    company: 'Сбер' | 'Корус' | 'ООО "ЭйчТуСофт"'
    skills: string[];
    specs: string[];
    comments: string[];
}
