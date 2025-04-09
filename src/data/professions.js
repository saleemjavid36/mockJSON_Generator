function generateProfessions(count) {
    const baseTitles = [
        "Software Engineer", "Doctor", "Teacher", "Nurse", "Electrician", "Plumber",
        "Carpenter", "Data Scientist", "UX Designer", "Product Manager",
        "Marketing Executive", "Financial Analyst", "HR Manager", "Graphic Designer",
        "Cybersecurity Expert", "Web Developer", "Mobile App Developer", "Pilot",
        "Chef", "Lawyer", "Police Officer", "Firefighter", "Pharmacist",
        "Accountant", "Dentist", "Civil Engineer", "Mechanical Engineer",
        "Project Manager", "Business Analyst", "AI Researcher", "DevOps Engineer",
        "Customer Support Specialist", "Therapist", "Veterinarian", "Scientist",
        "Architect", "Translator", "Journalist", "Content Writer", "Librarian"
        // Add more common jobs as needed
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
