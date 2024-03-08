// index.js

// CodeFusion - An innovative coding platform designed to revolutionize the way developers collaborate and build software.

// CodeFusion functionality
class CodeFusion {
    constructor() {
        this.projects = [];
        this.collaborators = {};
    }

    // Method to create a new project
    createProject(projectName, description) {
        const project = {
            name: projectName,
            description: description
        };
        this.projects.push(project);
    }

    // Method to add collaborators to a project
    addCollaborators(projectName, collaborators) {
        this.collaborators[projectName] = collaborators;
    }

    // Method to display all projects and their collaborators
    displayProjects() {
        console.log("Projects:");
        this.projects.forEach(project => {
            console.log(`- ${project.name}: ${project.description}`);
            if (this.collaborators[project.name]) {
                console.log(`  Collaborators: ${this.collaborators[project.name].join(", ")}`);
            }
        });
    }
}

// Example usage:
const codeFusionApp = new CodeFusion();

// Creating projects
codeFusionApp.createProject("Real-Time Chat Application", "Build a real-time chat application using WebSocket technology.");
codeFusionApp.createProject("E-commerce Website", "Develop an e-commerce website with user authentication and product listing features.");

// Adding collaborators to projects
codeFusionApp.addCollaborators("Real-Time Chat Application", ["developer1", "developer2", "designer"]);
codeFusionApp.addCollaborators("E-commerce Website", ["developer2", "developer3"]);

// Displaying projects
codeFusionApp.displayProjects();
