const facts = [
    "I am 21 years old.",
    "I love mountains and enjoy activities like hiking or appreciating mountain landscapes.",
    "I am an avid reader and spend a significant amount of my free time immersed in literature.",
    "I have a deep appreciation for nature and outdoor activities.",
    "I have a curiosity for learning and exploring new ideas through literature."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
