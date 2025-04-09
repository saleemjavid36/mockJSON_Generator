function generateHobbies(count) {
    const baseHobbies = [
        "Drawing", "Painting", "Calligraphy", "Sketching", "Pottery", "Sculpture", "Origami", "Wood carving",
        "Photography", "Filmmaking", "DIY crafts", "Candle making", "Jewelry making", "Sewing", "Quilting",
        "Knitting", "Embroidery", "Cosplay", "Interior decorating", "Makeup artistry",
        "Hiking", "Running", "Swimming", "Cycling", "Skateboarding", "Rock climbing", "Surfing", "Kayaking",
        "Skiing", "Snowboarding", "Gardening", "Camping", "Fishing", "Archery", "Horseback riding", "Scuba diving",
        "Bird watching", "Orienteering", "Geocaching", "Parkour",
        "Reading", "Writing", "Blogging", "Journaling", "Crossword puzzles", "Sudoku", "Learning languages",
        "Playing chess", "Brain teasers", "Trivia games", "Researching history", "Studying astronomy",
        "Watching documentaries", "Debating",
        "Coding", "Video editing", "App development", "Web design", "3D modeling", "Animation", "Game development",
        "Ethical hacking", "Home automation", "Crypto trading", "Digital painting", "Building PCs", "Typing practice",
        "Blogging", "Vlogging", "Streaming",
        "Singing", "Playing guitar", "Playing piano", "Playing violin", "Playing drums", "DJing", "Beatboxing",
        "Stand-up comedy", "Acting", "Dancing", "Karaoke", "Musical composition", "Magic tricks",
        "Spoken word poetry",
        "Yoga", "Meditation", "Journaling", "Skin care", "Spa rituals", "Aromatherapy", "Tai Chi", "Fitness workouts",
        "Meal prepping", "Baking", "Cooking", "Clean eating",
        "Traveling", "Road tripping", "Backpacking", "Urban exploring", "Food tasting", "Wine tasting", "Bar hopping",
        "Festival hopping", "Photography walks", "Volunteering", "Event organizing", "Language exchange",
        "Coin collecting", "Stamp collecting", "Vinyl collecting", "Sneaker collecting", "Comic book collecting",
        "Antique hunting", "Toy collecting", "Pop culture memorabilia", "Model trains", "Lego building",
        "Fossil collecting", "Shell collecting"
    ];

    const adjectives = [
        "Extreme", "Night", "Solo", "Urban", "Nature", "Silent", "Mindful",
        "Digital", "Retro", "Classic", "Speed", "Slow", "Competitive", "DIY"
    ];

    const suffixes = ["Club", "Craft", "Challenge", "Exploration", "Mastery", "Hunt", "Jam", "Collecting"];

    const hobbies = new Set();

    while (hobbies.size < count) {
        const base = baseHobbies[Math.floor(Math.random() * baseHobbies.length)];
        const adj = Math.random() < 0.3 ? adjectives[Math.floor(Math.random() * adjectives.length)] + " " : "";
        const suf = Math.random() < 0.2 ? " " + suffixes[Math.floor(Math.random() * suffixes.length)] : "";
        hobbies.add(`${adj}${base}${suf}`);
    }

    return Array.from(hobbies);
}

export const Hobbies = generateHobbies(1000);
