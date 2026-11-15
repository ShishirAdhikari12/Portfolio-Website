export interface Project {
    status: "Completed" | "In Progress" | "Live";
    title: string;
    description: string;
    stack: string;
    keyFeatures: string;
    purpose: string;
    links: {
        github: string;
        liveDemo?: string;
    };
}