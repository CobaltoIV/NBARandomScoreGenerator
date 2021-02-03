const RNG = max => Math.floor(Math.random() * (max - 1)); // function that generates a number from 0 to max


/**
 * Message format: [TeamA]: [ScoreA]
 *                 [TeamB]: [ScoreB]
 *                 [TeamX] won!!!
 */


const teams = ['Chicago Bulls', 'Orlando Magic', 'Toronto Raptors', 'Indiana Pacers', 'Memphis Grizzlies', 'Washington Wizards', 'Portland Trail Blazers', 'Detroit Pistons', 'Utah Jazz', 'Golden State Warriors', 'Boston Celtics', 'Brooklyn Nets', 'Los Angeles Clippers', 'Philadelphia 76ers', 'Milwaukee Bucks', 'Atlanta Hawks', 'Cleveland Cavaliers', 'Charlotte Hornets', 'New York Knicks', 'Miami Heat', 'Los Angeles Lakers', 'Denver Nuggets', 'Phoenix Suns', 'Houston Rockets', 'San Antonio Spurs', 'Sacramento Kings', 'Oklahoma City Thunder', 'Dallas Mavericks', 'New Orleans Pelicans', 'Minnesota Timberwolves'];

const chooseTeams = (max, RNG) => {

    let t1 = RNG(max);
    let t2 = RNG(max);
    // Repeat loop until we have different teams
    while (t1 === t2) {
        t2 = RNG(max);
    }
    return [t1, t2];
}

const genScores = (maxScore, ts, RNG) => {
    // return array of objects with scores as properties
    return ts.map(t => {
        let s = RNG(maxScore);
        return {
            name: teams[t],
            score: s
        }
    });
}

const genMsg = (teamObjs) => {
    teamObjs.forEach(t => { console.log(`${t.name}: ${t.score} \n`) })
    if (teamObjs[0].score > teamObjs[1].score) console.log(`${teamObjs[0].name} won!!!`);
    else if (teamObjs[0].score < teamObjs[1].score) console.log(`${teamObjs[1].name} won!!!`);
    else console.log('The game ended with a tie!!');

}


let game = genScores(150, chooseTeams(teams.length, RNG), RNG);

genMsg(game);