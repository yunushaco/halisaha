// script.js
const players = [
    { name: 'Emo', rating: 82, photo: 'https://img.a.transfermarkt.technology/portrait/header/369316-1696446465.png?lm=1' },
    { name: 'Eto', rating: 83, photo: 'https://media02.tr.beinsports.com/img/players/P69238.png' },
    { name: 'Ali', rating: 80, photo: 'https://img.a.transfermarkt.technology/portrait/big/126414-1709035146.jpg?lm=1' },
    { name: 'Atakan', rating: 77, photo: 'https://media02.tr.beinsports.com/img/players/P213.png' },
    { name: 'Mami', rating: 80, photo: 'https://ajssarimg2.mediatriple.net/1658150.jpg.webp?w=750&h=422' },
    { name: 'Alican', rating: 81, photo: 'https://cdn.soccerwiki.org/images/player/3320.png' },
    { name: 'Baran', rating: 79, photo: 'https://img.a.transfermarkt.technology/portrait/big/3373-1515762355.jpg?lm=1' },
    { name: 'Erdem', rating: 77, photo: 'https://foto.sondakika.com/haber/2013/06/19/fenerbahce-semih-senturk-ile-yollarini-ayiriyor-4747338_3785_amp.jpg' },
    { name: 'Emre', rating: 81, photo: 'https://img.a.transfermarkt.technology/portrait/header/18537-1598536967.jpg?lm=1' },
    { name: 'Yunus', rating: 79, photo: 'https://i20.haber7.net/resize/1280x720//haber/haber7/photos/2024/27/merih_demiralin_bozkurt_hareketini_hazmedemediler_omur_boyu_men_edilsin_1719998748_477.jpg' },
    { name: 'Enes', rating: 80, photo: 'https://image.hurimg.com/i/hurriyet/75/750x422/56256732f018fb45587d8676.jpg' },
    { name: 'Berkant', rating: 80, photo: 'https://yenicagricom.teimg.com/crop/1280x720/yenicagri-com/uploads/2024/06/a-a-20240618-34912830-34912829-2024-a-v-r-u-p-a-f-u-t-b-o-l-s-a-m-p-i-y-o-n-a-s-i-t-u-r-k-i-y-e-g-u-r-c-i-s-t-a-n.jpg' },
    { name: 'Tolga', rating: 79, photo: 'https://img.a.transfermarkt.technology/portrait/big/318077-1671110829.png?lm=1' },
    { name: 'bilinmeyen', rating: 80, photo: 'https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1000?cb=20201203082929&path-prefix=tr' },
];

document.addEventListener("DOMContentLoaded", () => {
    const playersDiv = document.getElementById('players');
    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.innerHTML = `<img src="${player.photo}" alt="${player.name}"> ${player.name} (${player.rating})`;
        playersDiv.appendChild(playerDiv);
    });
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createTeams() {
    const shuffledPlayers = shuffle([...players]);
    const team1 = shuffledPlayers.slice(0, 7);
    const team2 = shuffledPlayers.slice(7, 14);

    displayTeam('team1', team1);
    displayTeam('team2', team2);
}

function displayTeam(teamId, team) {
    const teamUl = document.querySelector(`#${teamId} ul`);
    teamUl.innerHTML = '';
    team.forEach(player => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${player.photo}" alt="${player.name}"> ${player.name} (${player.rating})`;
        teamUl.appendChild(li);
    });
}
