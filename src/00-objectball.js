function gameObject() {
    debugger;
    return {
        home : {
            teamName:'Brooklyn Nets',
            colors:['Black','White'],
            players:{
                'Alan Anderson':{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7},
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15},
                'Mason Plumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5},
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1}
            }
        },

        away : {
            teamName:'Charlotte Hornets',
            colors:['Turquoise','Purple'],
            players:{
                'Jeff Adrien':{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10},
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5},
                'Ben Gordon':{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0},
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12}
            }
        }
    }
}

///console.log(gameObject());

function homeTeamName() {
    debugger;
    let object = gameObject()
    return object['home']['teamName']
}

//console.log(homeTeamName());

function numPointsScored(playerName) {
    debugger;
    const game=gameObject();
   
    for (const teamKey in game) {

        const team = game[teamKey];
        const players = team.players;
        
        for (const player in players) {
            if (player === playerName) {
                return players[player].points
            }
        }
    }
    debugger;
    return "Player not found";
};

function shoeSize(playerName) {

    const game = gameObject();

    for (const teamKey in game) {

        const team = game[teamKey];
        const players = team.players;

        for (const player in players) {
            if (player === playerName) {
                return players[player].shoe;
            }
        }
    }
    return "Player not found"; 
}

function teamColors(teamName) {
    debugger;
    const game = gameObject();

    for (const teamKey in game) {

        const team = game[teamKey];
            if ( team.teamName === teamName) {
                return team.colors}
        
    }
    debugger;
    return "Team not found"; 
}

function teamNames() {
    const game = gameObject();
    const names = [];

    for (const teamKey in game) {
        names.push(game[teamKey].teamName);
    }

    return names;
}

function playerNumbers(teamName) {
    debugger;
    const game = gameObject();
    let numbers = [];

    for (const teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            for (const player in team.players) {
                numbers.push(team.players[player].number);
            }
            
            break;
        }
    }
    debugger;
    return numbers;
}

function playerStats(playerName) {
    debugger;
    const game = gameObject();

    for (const teamKey in game) {
        const players = game[teamKey].players;
        if (players[playerName]) {
            return players[playerName]; 
        }
    }
    debugger;
    return "Player not found";
}

function bigShoeRebounds() {
    debugger;
    const game = gameObject();
    let biggestShoeSize = 0;
    let reboundsForBiggestShoe = 0;

    for (const teamKey in game) {
        const players = game[teamKey].players;
        debugger;
        for (const playerName in players) {
            const player = players[playerName];
            debugger;
            if (player.shoe > biggestShoeSize) {
                biggestShoeSize = player.shoe;
                reboundsForBiggestShoe = player.rebounds;
            }
        }
    }
    debugger;
    return reboundsForBiggestShoe;
}


//Bonus Questions Functions:

function mostPointsScored() {
    debugger;
    const game = gameObject();
    let highestPoints = 0;
    let playerWithHighestPoints = "";

    for (const teamKey in game) {
        const players = game[teamKey].players;
        for (const playerName in players) {
            const player = players[playerName];
            if (player.points > highestPoints) {
                highestPoints = player.points;
                playerWithHighestPoints = playerName;
            }
        }
    }
    debugger;
    return playerWithHighestPoints;
}

function winningTeam() {
    debugger;
    const game = gameObject();
    let highestTeamPoints = 0;
    let teamWithHighestPoints = "";

    for (const teamKey in game) {
        const team = game[teamKey];
        let teamPoints = 0;
        debugger;
        for (const playerName in team.players) {
            teamPoints += team.players[playerName].points;
        }
        if (teamPoints > highestTeamPoints) {
            highestTeamPoints = teamPoints;
            teamWithHighestPoints = team.teamName;
        }
        debugger;
    }
    return teamWithHighestPoints;
}

function playerWithLongestName() {
    debugger;
    const game = gameObject();
    let longestName = "";

    for (const teamKey in game) {
        const players = game[teamKey].players;
        debugger;
        for (const playerName in players) {
            if (playerName.length > longestName.length) {
                longestName = playerName;
            }
        }
    }
    debugger;
    return longestName;
}


//Super Bonus

function doesLongNameStealATon() {
    debugger;
    const playerLongestName = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;
    let playerWithMostSteals = "";

    for (const teamKey in game) {
        const players = game[teamKey].players;
        debugger;
        for (const playerName in players) {
            const player = players[playerName];
            if (player.steals > mostSteals) {
                mostSteals = player.steals;
                playerWithMostSteals = playerName;
                debugger;
            }
        }
    }

    return playerLongestName === playerWithMostSteals;
}
