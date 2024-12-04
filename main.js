// Add your JavaScript here
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && email.includes('@gmail.com') && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
    } else {
        alert('Please enter a valid Gmail ID and password.');
    }
}

async function generateTimetable() {
    const subjectsInput = document.getElementById('subjects').value;
    const daysRemaining = parseInt(document.getElementById('days-remaining').value, 10);
    const dailyHours = parseFloat(document.getElementById('daily-hours').value);
    const strengths = document.getElementById('strengths').value.split(',').map(s => s.trim());
    const weaknesses = document.getElementById('weaknesses').value.split(',').map(s => s.trim());

    if (!subjectsInput || isNaN(daysRemaining) || isNaN(dailyHours)) {
        alert('Please fill in all required fields correctly.');
        return;
    }

    const subjects = subjectsInput.split(',').map(item => {
        const [subject, ...topics] = item.split(':').map(s => s.trim());
        return { subject, topics: topics.join('').split(',').map(t => t.trim()) };
    });

    // For now, we can mock the timetable as we are not using Gemini API
    const timetable = subjects.map(subject => {
        return `${subject.subject}: ${subject.topics.join(', ')}`;
    }).join('<br>');

    document.getElementById('output').innerHTML = `<h2>Generated Timetable</h2><p>${timetable}</p>`;
}
