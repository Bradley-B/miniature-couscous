export type Dashboard = {
    id: number,
    name: string,
    components: DashboardComponent[],
}

export type DashboardComponent = {
    id: number,
    title: string,
    description: string,
}

export const dashboards: Dashboard[] = [{
    id: 0,
    name: 'Dashboard One',
    components: [{
        id: 0,
        title: 'Tick Tock Tolerance',
        description: 'Ability to withstand the force of a parent clock\'s PPS pulse'
    }, {
        id: 1,
        title: 'Chrono-Chaos Coeffifient',
        description: "Adeptness at managing time-related pandemonium and maintaining order in the temporal realm",
    }, {
        id: 2,
        title: 'Time Warp Resilience Rating',
        description: "Resilience in withstanding and correcting time warps"
    }, {
        id: 3,
        title: 'Leap Second Limbo Level',
        description: "Reported ability to gracefully navigate the time between leap seconds"
    }, {
        id: 4,
        title: 'Jitter Juggernaut Index',
        description: "Prowess in juggling and taming the unruly forces of jitter"
    }, {
        id: 5,
        title: 'Gravitational Groove Guardian',
        description: "Ability to grind a groove through the gnarly gravitational waves"
    }, {
        id: 6,
        title: 'Satellite Semaphore Sync',
        description: "Proficiency in semaphore signaling with satellites"
    }],
}, {
    id: 1,
    name: 'Dashboard Two',
    components: [],
}]
