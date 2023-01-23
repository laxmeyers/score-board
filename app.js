// Variables
let score1 = document.getElementById('team-1-score')
let score2 = document.getElementById('team-2-score')
let team1 = 0
let team2 = 0

// functions
function reset(){
    score1.innerText = 00
    score2.innerText = 00
    team1 = 0
    team2 = 0
}

function addTeamOneOne(){
    team1 += 1
    score1.innerText = team1
}

function addTeamTwoOne(){
    team2 += 1
    score2.innerText = team2
}

function addTeamOneThree(){
    team1 += 3
    score1.innerText = team1
}

function addTeamTwoThree(){
    team2 += 3
    score2.innerText = team2
}