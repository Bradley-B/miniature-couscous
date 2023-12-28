export type Dashboard = {
    id: number,
    name: string,
    components: DashboardComponent[],
}

export type DashboardComponent = {
    title: string,
    description: string,

}

export const dashboards: Dashboard[] = [{
    id: 0,
    name: 'Dashboard One',
    components: [],
}, {
    id: 1,
    name: 'Dashboard Two',
    components: [],
}]
