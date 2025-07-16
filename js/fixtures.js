document.addEventListener('DOMContentLoaded', function() {
    const fixtureContainer = document.getElementById('fixtureContainer');
    
    const fixtures = [
        {
            date: '16/06/2025',
            day: 'Saturday',
            venue: 'Driziek 5 ground',
            matches: [
                'BSA vs TLC (10h00)',
                'City rockers vs Blue wheals (12h00)',
                'Kweneng vs Az ramblers (14h00)',
                'Simunye vs Future Academy (16h00)'
            ]
        },
        {
            date: '22/06/2025',
            day: 'Sunday',
            venue: 'Exchange ground/ext7B',
            matches: [
                'Kweneng vs Black seven (10h00)',
                'City rockers vs BSA (12h00)',
                'Ajax18 vs Blue wheals (14h00)',
                'Juventus vs Nathi stars (16h00)'
            ]
        },
        {
            date: '28/06/2025',
            day: 'Saturday',
            venue: 'Multipurpose ground',
            matches: [
                'BSA vs Az RAMBLERS (10h00)',
                'Juventus vs TLC (11h30)',
                'Nathi stars vs Blue wheals (13h00)',
                'Simunye vs Ajax18 (15h00)'
            ]
        },
        {
            date: '29/06/2025',
            day: 'Sunday',
            venue: 'Multipurpose ground',
            matches: [
                'Benfica vs City rockers (10h00)',
                'Black seven vs Future Academy (11h30)',
                'Simunye vs Nathi stars (13h00)',
                'Young Tigers vs Kweneng (15h00)'
            ]
        },
        {
            date: '17/07/2025',
            day: 'Thursday',
            venue: 'Multipurpose ground',
            matches: [
                'Kweneng vs Blue wheals (15h00)'
            ]
        },
        {
            date: '20/07/2025',
            day: 'Sunday',
            venue: 'Multipurpose ground',
            matches: [
                'City rockers vs Ajax18 (10h00)',
                'Young Tigers vs BSA (11h30)',
                'Kweneng vs Juventus (13h00)',
                'Future Academy vs Benfica (15h00)'
            ]
        }
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
        
        fixtureContainer.appendChild(fixtureCard);
    });
});