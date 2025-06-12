const dailyTab = document.getElementById('daily')
const weeklyTab = document.getElementById('weekly')
const monthlyTab = document.getElementById('monthly')

const cards = {
    Work: document.getElementById('Work'),
    Play: document.getElementById('Play'),
    Study: document.getElementById('Study'),
    Exercise: document.getElementById('Exercise'),
    Social: document.getElementById('Social'),
    'Self Care': document.getElementById('Self Care')
}


dailyTab.addEventListener('click', () => {
    updateActivityContent('daily');
});
weeklyTab.addEventListener('click', () => {
    updateActivityContent('weekly');
});
monthlyTab.addEventListener('click', () => {
    updateActivityContent('monthly');
});

let activityData = []

async function getData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        activityData = await response.json();
        updateActivityContent('daily');
        console.log(data);
    }catch (error) {
        console.error('Error fetching data', error)
    }
}

function updateActivityContent(timeframe) {
    activityData.forEach(activity => {
        const card = cards[activity.title];
        if (card) {
            const hours = card.querySelector('h3');
            const previous = card.querySelector('p');
            hours.textContent = `${activity.timeframes[timeframe].current}hrs`;
            previous.textContent = `Last ${getLastLabel(timeframe)} - ${activity.timeframes[timeframe].previous}hrs`;
        }
    });
}

function getLastLabel(timeframe) {
    switch (timeframe) {
        case 'daily': return 'Day';
        case 'weekly': return 'Week';
        case 'monthly': return 'Month';
        default: return '';
    }
}
getData();