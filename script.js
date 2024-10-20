function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function generateItinerary() {
    const destination = document.getElementById('destination').value;
    const days = document.getElementById('days').value;
    const interests = document.getElementById('interests').value;

    if (destination && days && interests) {
        let itinerary = `<strong>Your ${days}-day itinerary in ${destination}:</strong><br><br>`;
        
        switch(interests) {
            case 'adventure':
                itinerary += `- Day 1: Mountain hiking<br>- Day 2: Kayaking<br>- Day 3: Bungee jumping or zip-lining`;
                break;
            case 'culture':
                itinerary += `- Day 1: Museum tour<br>- Day 2: Historical city walk<br>- Day 3: Visit to art galleries and local markets`;
                break;
            case 'relaxation':
                itinerary += `- Day 1: Beach day<br>- Day 2: Spa retreat<br>- Day 3: Yoga and meditation session`;
                break;
            case 'food':
                itinerary += `- Day 1: Local food tour<br>- Day 2: Wine tasting<br>- Day 3: Gourmet cooking class`;
                break;
        }

        document.getElementById('itinerary-output').innerHTML = itinerary;
    } else {
        document.getElementById('itinerary-output').innerHTML = '<strong>Please fill out all the fields.</strong>';
    }
}
