import type { Project } from "@/types/project";

export const projects: Project[] = [
    {
        status: "In Progress",
        title: "KinmelHub",
        description: "A multivendor marketplace project with product, order, and payment flow work.",
        stack: "Laravel 13.29.0 · React · TypeScript · Breeze · daisyUI",
        keyFeatures: "eSewa integration planning, order validation, and product management structure.",
        purpose: "Built to demonstrate marketplace logic, modern stack usage, and structured application design.",
        links: {
            github: "https://github.com/ShishirAdhikari12/kinmelhub-marketplace",
        }
    },
    {
        status: "Completed",
        title: "TaskFlow",
        description: "A task management application focused on clean workflow, pagination, and a polished modern UI.",
        stack: "Laravel 13.25 · Sail · MySQL · Inertia React · Tailwind CSS",
        keyFeatures: "Pagination, image upload, localStorage dark mode preference, and Docker-based development setup.",
        purpose: "Built to show practical product development, UI consistency, and backend organization.",
        links: {
            github: "https://github.com/ShishirAdhikari12/project-management",
        }
    },
    {
        status: "Live",
        title: "MediumClone",
        description: "A Medium-style publishing platform with posts, categories, user profiles, claps, follow/unfollow, scheduled publishing, and media handling.",
        stack: "Laravel 12.50 · Breeze · Spatie MediaLibrary v11.21 · Spatie Sluggable · Cloudinary",
        keyFeatures: "Posts, image uploads, categories, scheduled published_at, claps, follow/unfollow, avatar, bio, username, and own-post editing.",
        purpose: "Built as a real content platform with strong backend structure and media handling.",
        links: {
            github: "https://github.com/ShishirAdhikari12/MediumClone",
            liveDemo: "https://medium-clone1829.onrender.com/",
        }
    },
]