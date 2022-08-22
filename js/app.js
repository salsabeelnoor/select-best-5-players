document.getElementById('btn-messi').addEventListener('click', function(){
    getAndAddPlayerName('name-messi', 'btn-messi');
    
});
document.getElementById('btn-machado').addEventListener('click', function(){
    getAndAddPlayerName('name-machado', 'btn-machado');
    
});
document.getElementById('btn-mbappe').addEventListener('click', function(){
    getAndAddPlayerName('name-mbappe', 'btn-mbappe');
    
});
document.getElementById('btn-neymar').addEventListener('click', function(){
    getAndAddPlayerName('name-neymar', 'btn-neymar');
    
});
document.getElementById('btn-ramos').addEventListener('click', function(){
    getAndAddPlayerName('name-ramos', 'btn-ramos');
    
});
document.getElementById('btn-sanches').addEventListener('click', function(){
    getAndAddPlayerName('name-sanches', 'btn-sanches');
    
});

document.getElementById('btn-player-cost').addEventListener('click',function(){
    const perPlayerCost = parseFloat(document.getElementById('per-player-cost-field').value);
    const playerCount = document.querySelectorAll("li").length;
    document.getElementById('player-expense').innerText = perPlayerCost * playerCount;
});
