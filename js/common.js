function getPlayerName(playerId, playerBtn){
    document.getElementById('best-five-txt').style.display = "none"
    //get player name
    const playerName = document.getElementById(playerId).innerText;
    
    
    //create li
    const playerList = document.getElementById('player-list');
    const listEntry = document.createElement('li');

    //check player list and add to list
    if(document.querySelectorAll("li").length > 4){
        document.getElementById(playerBtn).disabled = false;
        alert("Can not select more than 5 players");
    }
    else{
        document.getElementById(playerBtn).disabled = true;
        document.getElementById(playerBtn).style.background = '#A2A9AF';
        listEntry.appendChild(document.createTextNode(playerName));
        playerList.appendChild(listEntry);
    }
    return playerName;
}