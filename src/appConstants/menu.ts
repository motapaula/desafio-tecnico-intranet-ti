export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'comunicacao',
        label: 'COMUNICAÇÃO',
        isTitle: false,
        icon: 'uil-comments',
        children: [
            { key: 'mural', label: 'Mural', url: '/apps/cadastro', parentKey: 'comunicacao' },
            { key: 'contatos', label: 'Contatos', url: '/apps/cadastro', parentKey: 'comunicacao' },
        ],
    },
    {
        key: 'seguranca',
        label: 'SEGURANÇA',
        isTitle: false,
        icon: 'uil-shield',
        children: [
            { key: 'cftv', label: 'CFTV', url: '/apps/cadastro', parentKey: 'seguranca' },
            { key: 'portaria', label: 'Portaria', url: '/apps/cadastro', parentKey: 'seguranca' },
        ],
    },
    {
        key: 'agendamentos',
        label: 'AGENDAMENTOS',
        isTitle: false,
        icon: 'uil-calendar-alt',
        children: [
            { key: 'salas', label: 'Salas', url: '/apps/cadastro', parentKey: 'agendamentos' },
            { key: 'veiculos', label: 'Veículos', url: '/apps/cadastro', parentKey: 'agendamentos' },
        ],
    },
    {
        key: 'documentos',
        label: 'DOCUMENTOS',
        isTitle: false,
        icon: 'uil-file-alt',
        children: [
            { key: 'politicas-rh', label: 'Políticas RH', url: '/apps/cadastro', parentKey: 'documentos' },
        ],
    },
    {
        key: 'processos',
        label: 'PROCESSOS',
        isTitle: false,
        icon: 'uil-cogs',
        children: [
            { key: 'its', label: 'ITs', url: '/apps/cadastro', parentKey: 'processos' },
            { key: 'workflow', label: 'Workflow', url: '/apps/cadastro', parentKey: 'processos' },
        ],
    },
    {
        key: 'dashboards',
        label: 'DASHBOARDS',
        isTitle: false,
        icon: 'uil-chart-line',
        children: [
            { key: 'kpis-vendas', label: 'KPIs Vendas', url: '/apps/cadastro', parentKey: 'dashboards' },
            { key: 'produtividade', label: 'Produtividade', url: '/apps/cadastro', parentKey: 'dashboards' },
        ],
    },
    {
        key: 'acessos',
        label: 'ACESSOS',
        isTitle: false,
        icon: 'uil-key-skeleton',
        children: [
            { key: 'erp', label: 'ERP', url: '/apps/cadastro', parentKey: 'acessos' },
            { key: 'crm', label: 'CRM', url: '/apps/cadastro', parentKey: 'acessos' },
        ],
    },
    
    // Mantendo os itens originais
];

export { MENU_ITEMS };
