export const technoTypes = [
    'language',
    'framework',
    'library',
    'database',
    'development-tool',
    'devops',
    'apis-integration'
] as const;

const technoTypesLabels: Record<TechnoType, Record<string, string>> = {
    language: {
        en: 'Language',
        cn: '语言'
    },
    framework: {
        en: 'Framework',
        cn: '框架'
    },
    library: {
        en: 'Library',
        cn: '库'
    },
    database: {
        en: 'Database',
        cn: '数据库'
    },
    'development-tool': {
        en: 'Development Tool',
        cn: '开发工具'
    },
    devops: {
        en: 'DevOps',
        cn: '开发选项'
    },
    'apis-integration': {
        en: 'APIs & Integration',
        cn: 'API 与集成'
    }
};

export function getTechnoTypeLabel(type: TechnoType) {
    const { locale } = useI18n();
    return technoTypesLabels[type][locale.value];
}

type TechnoType = (typeof technoTypes)[number];

type Techno = {
    title: string;
    icon?: string;
    image?: string;
    type: TechnoType;
    url: string;
};

export const projectTypes = [
    'favorite',
    'game',
    'web',
    'dev-tool',
    'scripting'
] as const;

const projectTypesLabels: Record<ProjectType, Record<string, string>> = {
    favorite: {
        en: 'Favorite',
        cn: '最喜欢的'
    },
    game: {
        en: 'Game',
        cn: '游戏'
    },
    web: {
        en: 'Web',
        cn: '网页'
    },
    'dev-tool': {
        en: 'Dev Tool',
        cn: '开发工具'
    },
    scripting: {
        en: 'Scripting',
        cn: '脚本'
    }
};

export function getProjectTypeLabel(type: ProjectType) {
    const { locale } = useI18n();
    return projectTypesLabels[type][locale.value];
}

type ProjectType = (typeof projectTypes)[number];

type Locale = 'en' | 'cn';

type Project = {
    name: string;
    description: Record<Locale, string>;
    date: string;
    type: ProjectType[];
    technos: string[];
    link: string;
    repo_link: string;
};

type Hobby = {
    title: Record<Locale, string>;
    icon: string;
    emoji: string;
};

export type { Hobby, Locale, Project, ProjectType, Techno, TechnoType };
