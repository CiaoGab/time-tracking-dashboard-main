const dailyTab = document.getElementById('daily')
const weeklyTab = document.getElementById('weekly')
const monthlyTab = document.getElementById('monthly')
let activityContent = document.getElementById('activity')
let hours = activityContent.querySelector('h2')
let previous = activityContent.querySelector('p') 




async function getContent() {
    try {
        let dailyContent = (await fetch('data.json'))
        .then
    }
    

}