export type Dashboard = {
    id: number,
    name: string,
    components: DashboardComponent[],
}

export type DashboardComponent = {
    id: number,
    title: string,
    description: string,
    type: 'timeseries' | 'data-card',
}

export const dashboards: Dashboard[] = [{
    id: 0,
    name: 'Dashboard One',
    components: [{
        id: 0,
        title: 'Tick Tock Tolerance',
        description: 'Ability to withstand the force of a parent clock\'s PPS pulse',
        type: 'timeseries',
    }, {
        id: 1,
        title: 'Chrono-Chaos Coeffifient',
        description: "Detected time-offset coefficient to adjust from cosmic background radiation ",
        type: 'data-card',
    }, {
        id: 2,
        title: 'Time Warp Resilience Rating',
        description: "Source's stability in correcting both short-term and long-term effects of time warps",
        type: 'data-card',
    }, {
        id: 3,
        title: 'Leap Second Limbo Level',
        description: "Reported ability to navigate the time between leap seconds",
        type: 'timeseries',
    }, {
        id: 4,
        title: 'Jitter Juggernaut Index',
        description: "Current index of the Jitter Juggernaut subsystem",
        type: 'timeseries',
    }, {
        id: 5,
        title: 'Gravitational Groove Guardian',
        description: "Ability to discipline the oscillator after correcting for the forces of gravitational waves",
        type: 'timeseries',
    }, {
        id: 6,
        title: 'Satellite Semaphore Sync',
        description: "Current status of GNSS satellite semaphore signaling",
        type: 'data-card',
    }],
}, {
    id: 1,
    name: 'Dashboard Two',
    components: [],
}]
