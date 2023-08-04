import { IDiscoveryNodeData, IDiscoveryLinkData, IDiscoveryColorData } from '../interfaces/discoveryInterfaces';

export const discoveryNodesForceDirectedData : IDiscoveryNodeData[] = [
    {id: "IT", name: "IT", group: 0, nodeLabelType: "Field", description: "Field of IT"},
    {id: "Application Development", name: "Application Development", group: 1, nodeLabelType: "Specialization", description: "Units involved with the development of applications."},
    {id: "SIT232", name: "Object-Oriented Development", group: 2, nodeLabelType: "Unit", description: "Introduction to object oriented programming."},
    {id: "SIT305", name: "Mobile Application Development", group: 2, nodeLabelType: "Unit", description: "Development of mobile applications using Android Studio and Java."},
    {id: "SIT313", name: "Full Stack Development: Secure Frontend Applications", group: 2, nodeLabelType: "Unit", description: "Development of front end web applications using the React library."},
    {id: "SIT331", name: "Full Stack Development: Secure Backend Services", group: 2, nodeLabelType: "Unit", description: "Development of backend services using ASP.net."},
    {id: "SIT323", name: "Cloud Native Application Development", group: 2, nodeLabelType: "Unit", description: "Cloud development"},
    {id: "Game Development", name: "Game Development", group: 1, nodeLabelType: "Specialization", description: "Units involved with game development."},
    {id: "SIT151", name: "Game Fundamentals", group: 2, nodeLabelType: "Unit", description: "Learn the fundamentals of game development."},
    {id: "SIT253", name: "Content Creation for Interactive Experiences", group: 2, nodeLabelType: "Unit", description: "Create content and interactive experiences."},
    {id: "SIT254", name: "Game Design", group: 2, nodeLabelType: "Unit", description: "Learn the core concepts of game design and apply them in your own game!"},
    {id: "SIT283", name: "Development for Virtual and Augmented Reality", group: 2, nodeLabelType: "Unit", description: "Development of experiences in virtualand augmented reality."},
    {id: "Cyber Security", name: "Cyber Security", group: 1, nodeLabelType: "Specialization", description: "Units involving cyber security."},
    {id: "SIT192", name: "Discrete Mathematics", group: 2, nodeLabelType: "Unit", description: "Learn discrete mathematics."},
    {id: "SIT202", name: "Computer Networks and Communication", group: 2, nodeLabelType: "Unit", description: "Learn about networking."},
    {id: "SIT327", name: "Network Forensics", group: 2, nodeLabelType: "Unit", description: "Learn about networking forensics."},
    {id: "SIT379", name: "Ethical Hacking", group: 2, nodeLabelType: "Unit", description: "Learn about ethical hacking."},
    {id: "Science", name: "Science", group: 0, nodeLabelType: "Field", description: "Units involving science."},
    {id: "Cell Biology and Genomics", name: "Cell Biology and Genomics", group: 1, nodeLabelType: "Specialization", description: "Learn about cell biology and genomics."},
    {id: "SLE212", name: "Biochemistry", group: 2, nodeLabelType: "Unit", description: "Learn about biochemistry."},
    {id: "SLE254", name: "Genetics and Genomics", group: 2, nodeLabelType: "Unit", description: "Learn about genetics"},
    {id: "HMM202", name: "Molecular Diagnostics", group: 2, nodeLabelType: "Unit", description: "Learn about the techniques involved with moulecar based diagnostics."},
    {id: "SLE357", name: "Advanced Cell Biology", group: 2, nodeLabelType: "Unit", description: "Learn about advanced cell biology."},
    {id: "SLE339", name: "Human Genetics and Genomics", group: 2, nodeLabelType: "Unit", description: "Learn about human genetics and genomics."},
    {id: "SLE340", name: "Genomes and Bioinformatics", group: 2, nodeLabelType: "Unit", description: "Learn about genomes and bioinformatics"},
    {id: "Chemistry", name: "Chemistry", group: 1, nodeLabelType: "Specialization", description: "Units involving chemistry"},
    {id: "SLE210", name: "Chemistry the Enabling Science", group: 2, nodeLabelType: "Unit", description: "Learn about chemistry."},
    {id: "SLE214", name: "Organic Chemistry", group: 2, nodeLabelType: "Unit", description: "Learn about organic chemistry"}
]

export const discoveryLinksForceDirectedData : IDiscoveryLinkData[] = [
    {source: "IT", target: "Game Development", lineLabelType: "Field", distance: 100},
    {source: "IT", target: "Application Development", lineLabelType: "Field", distance: 100},
    {source: "IT", target: "Cyber Security", lineLabelType: "Field", distance: 100},
    {source: "SIT232", target: "Application Development", lineLabelType: "Unit", distance: 100},
    {source: "SIT305", target: "Application Development", lineLabelType: "Unit", distance: 100},
    {source: "SIT313", target: "Application Development", lineLabelType: "Unit", distance: 100},
    {source: "SIT323", target: "Application Development", lineLabelType: "Unit", distance: 100},
    {source: "SIT323", target: "SIT331", lineLabelType: "Unit", distance: 100},
    {source: "SIT151", target: "Game Development", lineLabelType: "Unit", distance: 50},
    {source: "SIT253", target: "Game Development", lineLabelType: "Unit", distance: 50},
    {source: "SIT254", target: "Game Development", lineLabelType: "Unit", distance: 50},
    {source: "SIT283", target: "Game Development", lineLabelType: "Unit", distance: 50},
    {source: "SIT192", target: "Cyber Security", lineLabelType: "Unit", distance: 50},
    {source: "SIT202", target: "Cyber Security", lineLabelType: "Unit", distance: 50},
    {source: "SIT327", target: "Cyber Security", lineLabelType: "Unit", distance: 50},
    {source: "SIT379", target: "Cyber Security", lineLabelType: "Unit", distance: 50},
    {source: "Science", target: "Cell Biology and Genomics", lineLabelType: "Field", distance: 100},
    {source: "Science", target: "Chemistry", lineLabelType: "Field", distance: 100},
    {source: "SLE212", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "SLE254", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "HMM202", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "SLE357", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "SLE339", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "SLE340", target: "Cell Biology and Genomics", lineLabelType: "Unit", distance: 100},
    {source: "SLE210", target: "Chemistry", lineLabelType: "Unit", distance: 100},
    {source: "SLE214", target: "Chemistry", lineLabelType: "Unit", distance: 100},
]

export const discoveryForceDirectedColorMapping : IDiscoveryColorData = {
    0: "#1d192b",
    1: "#484458",
    2: "#e8def8",
  }