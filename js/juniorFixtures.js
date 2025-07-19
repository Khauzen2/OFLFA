document.addEventListener('DOMContentLoaded', function() {
    const juniorfixtureContainer = document.getElementById('juniorfixtureContainer');
    
    const juniorfixtures = [
        {
            date: '19/07/2025',
            day: 'Saturday',
            venue: 'Multipurpose Ground',
            matches: [
                'U11 Third place: Black seven vs Falcons (10h00)'
                'U13 Third place: Holy Birds vs Spirtz (10h30)'
                'U15 Third place: Orange farm United vs Blue wheals (11h05)'
                'U11 Final: Blue wheals vs Messi Academy (12h00)'
                'U13 Final: City Rockers vs Blue wheals (12h40)'
                'U15 Final: City Rockers vs Messi Academy (13h30)'
            ]
        },
    ];
    
    fixtures.forEach(fixture => {
        const fixtureCard = document.createElement('div');
        fixtureCard.className = 'fixture-card';
        
        fixtureCard.innerHTML = `
            <h3>OFLFA Super League - ${fixture.day}</h3>
            <p>Date: ${fixture.date}</p>
            <p>Venue: ${fixture.venue}</p>
            <ul>
                ${fixture.matches.map(match => `<li>${match}</li>`).join('')}
            </ul>
        `;
        
        juniorfixtureContainer.appendChild(fixtureCard);
    });
});