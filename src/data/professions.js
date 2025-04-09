function generateProfessions(count) {
    const baseTitles = [
        "Software Engineer", "Web Developer", "Mobile App Developer", "Full Stack Developer", "Frontend Developer",
        "Backend Developer", "DevOps Engineer", "Data Scientist", "Machine Learning Engineer", "AI Engineer",
        "UI/UX Designer", "Product Manager", "QA Tester", "Cybersecurity Analyst", "Cloud Architect",
        "Game Developer", "Blockchain Developer", "Technical Support Specialist", "IT Manager", "Network Engineer",

        "Doctor", "Nurse", "Pharmacist", "Dentist", "Surgeon", "Therapist", "Psychologist", "Radiologist",
        "Medical Assistant", "Physician Assistant", "Veterinarian", "Chiropractor", "Optometrist", "Lab Technician",
        "Paramedic", "Nutritionist", "Anesthesiologist", "Occupational Therapist", "Speech Therapist",

        "Teacher", "Professor", "Tutor", "Librarian", "Academic Advisor", "School Counselor", "Principal",
        "Special Education Teacher", "Substitute Teacher", "Teaching Assistant", "Curriculum Developer",

        "Accountant", "Financial Analyst", "Business Analyst", "Operations Manager", "Marketing Manager",
        "Sales Executive", "HR Manager", "Recruiter", "Customer Service Representative", "Executive Assistant",
        "Office Manager", "Project Manager", "Administrative Assistant", "Data Entry Clerk", "Receptionist",

        "Electrician", "Plumber", "Carpenter", "Welder", "Mechanic", "Construction Worker", "Truck Driver",
        "HVAC Technician", "Painter", "Heavy Equipment Operator", "Landscaper", "Roofer", "Mason", "Janitor",

        "Graphic Designer", "Photographer", "Videographer", "Animator", "Art Director", "Copywriter",
        "Content Creator", "Social Media Manager", "Editor", "Journalist", "Blogger", "Illustrator",
        "Fashion Designer", "Interior Designer", "Voice Actor",

        "Cashier", "Retail Sales Associate", "Store Manager", "Barista", "Bartender", "Waiter", "Chef",
        "Cook", "Hotel Manager", "Housekeeper", "Concierge", "Flight Attendant", "Travel Agent", "Tour Guide",

        "Lawyer", "Judge", "Police Officer", "Detective", "Paralegal", "Court Clerk", "Firefighter",
        "Security Guard", "Military Officer", "Customs Officer",

        "Farmer", "Fisherman", "Zookeeper", "Park Ranger", "Archaeologist", "Astronomer", "Scientist",
        "Chemist", "Geologist", "Biologist", "Historian", "Economist", "Statistician"
    ];

    const prefixes = ["Junior", "Senior", "Lead", "Assistant", "Principal", "Chief"];
    const suffixes = ["Specialist", "Consultant", "Coordinator", "Strategist", "Manager"];

    const professions = [];

    while (professions.length < count) {
        const base = baseTitles[Math.floor(Math.random() * baseTitles.length)];
        const withPrefix = Math.random() < 0.4 ? prefixes[Math.floor(Math.random() * prefixes.length)] + " " : "";
        const withSuffix = Math.random() < 0.3 ? " " + suffixes[Math.floor(Math.random() * suffixes.length)] : "";
        const finalTitle = `${withPrefix}${base}${withSuffix}`;

        // Ensure no duplicates
        if (!professions.includes(finalTitle)) {
            professions.push(finalTitle);
        }
    }

    return professions;
}

export const UserProfessions = generateProfessions(1000);
