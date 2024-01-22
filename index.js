var somaP1 = 0;
var somaP2 = 0;
var winnerP1 = 0;
var winnerP2 = 0;
var count = 30; 
var timer = document.getElementById('timer'); 

document.addEventListener('keydown', function(event) {
    if(event.key === '1') {
        puxarCartaP1();
    }
});

document.addEventListener('keydown',function(event){
    if(event.key === '2'){
        puxarCartaP2();
    }
});
document.addEventListener('keydown', function(event){
    if(event.key === 'r' || event.key === 'R'){
        reload()
    }
})
function reload(){
    var resultado2 = document.getElementById('winnerP2');
    var resultado = document.getElementById('winnerP1');
    var elemento2 = document.getElementById('idDoElemento');
    var elemento = document.getElementById('idDoElemento2');
    var history = document.getElementById('historico')
    count = 30;
    timer.innerHTML = count;
    count--;
    somaP1 = 0;
    somaP2 = 0;
    winnerP1 = 0;
    winnerP2 = 0;

    history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
    elemento2.textContent = somaP1;
    elemento.textContent = somaP2;
    resultado2.textContent ='Vitórias P2: ' + winnerP2;
    resultado.textContent ='Vitórias P1: ' + winnerP1; 
}
function startTimer() {
    var resultado2 = document.getElementById('winnerP2');
    var resultado = document.getElementById('winnerP1');
    var elemento2 = document.getElementById('idDoElemento');
    var elemento = document.getElementById('idDoElemento2');
    var history = document.getElementById('historico');
    var button = document.getElementById("TrocarNPC");
    if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21 && count === 25){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21  && count === 20){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21 && count === 15){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21 && count === 10){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21 && count === 5){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if(button.innerHTML ==='NPC ON' && somaP1 >= somaP2 && somaP2 < 21 && somaP1 < 21 && count === 1){
        puxarCartaP2()
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }else if (count > 0) {
            timer.innerHTML = count; 
            count--;

    }else if(count === 0 && somaP1 > somaP2){
        winnerP1 += 1
        resultado.textContent ='Vitórias P1: ' + winnerP1; 
        count = 30;
        timer.innerHTML = count;
        count--;
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP1 = 0;
        somaP2 = 0;
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
        
    }else if(count === 0 && somaP1 < somaP2){
        winnerP2 += 1
        resultado2.textContent ='Vitórias P2: ' + winnerP2; 
        count = 30;
        timer.innerHTML = count;
        count--;
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP1 = 0;
        somaP2 = 0;
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;

    } else {
        //clearInterval(intervalId); 
        count = 30;
        timer.innerHTML = count;
        count--;
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP1 = 0;
        somaP2 = 0;
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
    }
}

var intervalId = setInterval(startTimer, 1000); 

function puxarCartaP1() {
    var numero = Math.floor(Math.random() * 10) + 1;
    somaP1 += numero;
    var elemento = document.getElementById('idDoElemento');
    var elemento2 = document.getElementById('idDoElemento2')
    var resultado = document.getElementById('winnerP1');
    var resultado2 = document.getElementById('winnerP2');
    var button = document.getElementById("TrocarNPC");
    var history = document.getElementById('historico')

    if(button.innerHTML === 'NPC ON' && somaP1 > somaP2 && somaP2 < 21 && somaP1 < 21){
        puxarCartaP2()
        elemento.textContent = somaP1;
        elemento2.textContent = somaP2;
    }else if (somaP1 > 21){
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP1 = 0;
        somaP2 = 0;
        elemento.textContent = somaP1;
        elemento2.textContent = somaP2;
        var vencedor = winnerP2 += 1;
        resultado2.textContent ='Vitórias P2: ' + vencedor;
        count = 30;
        timer.innerHTML = count;
        count--;
    }else if(somaP1 === 21){
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        var vencedor = winnerP1 += 1
        resultado.textContent = 'Vitórias P1: ' + vencedor
        somaP1 = 0;
        somaP2 = 0; 
        elemento2.textContent = somaP2;
        elemento.textContent = somaP1;
        count = 30;
        timer.innerHTML = count;
        count--;  
    }else{
        elemento.textContent = somaP1;
    }
}
function puxarCartaP2() {
    var numero = Math.floor(Math.random() * 10) + 1;
    somaP2 += numero;
    var elemento = document.getElementById('idDoElemento2');
    var resultado = document.getElementById('winnerP2');
    var elemento2 = document.getElementById('idDoElemento');
    var resultado2 = document.getElementById('winnerP1');
    var history = document.getElementById('historico')
    
    if (somaP2 > 21){
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP2 = 0;
        somaP1 = 0;
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
        var vencedor = winnerP1 += 1;
        resultado2.textContent = 'Vitórias P1: ' + vencedor;
        count = 30;
        timer.innerHTML = count;
        count--;
    }else if(somaP2 === 21){
        var vencedor = winnerP2 += 1
        resultado.textContent = 'Vitórias P2: ' + vencedor;
        history.textContent ='Player P1: ' + somaP1 + ' Player P2: '+ somaP2;
        somaP2 = 0;
        somaP1 = 0;
        elemento2.textContent = somaP1;
        elemento.textContent = somaP2;
        count = 30;
        timer.innerHTML = count;
        count--;
    }else{
        elemento.textContent = somaP2;
    }
}

function NPC() {
    var button = document.getElementById("TrocarNPC");
    var elemento2 = document.getElementById('idDoElemento');
    var elemento = document.getElementById('idDoElemento2');
    var P2carta = document.getElementById ('cartaP2')
    

    if(button.innerHTML === "NPC OFF"){
        somaP1 = 0;
        somaP2 = 0
        elemento.textContent = somaP1;
        elemento2.textContent = somaP2;
        count = 30;
        timer.innerHTML = count;
        count--;
        button.innerHTML = "NPC ON";
        count = 30;
        timer.innerHTML = count;
        count--;
    }
    else if ( button.innerHTML === "NPC ON") {
        somaP1 = 0;
        somaP2 = 0
        elemento.textContent = somaP1;
        elemento2.textContent = somaP2;
        count = 30;
        timer.innerHTML = count;
        count--;
        button.innerHTML = "NPC OFF";
        count = 30;
        timer.innerHTML = count;
        count--;
    }else if(button.innerHTML === "NPC ON"){
        button.innerHTML = "NPC OFF";
        count = 30;
        timer.innerHTML = count;
        count--;
    }else{
        button.innerHTML ='NPC ON';
        count = 30;
        timer.innerHTML = count;
        count--;
    }
}
function mudarNivel(){
   var definirNivel = document.getElementById('nivel');
   var elemento2 = document.getElementById('idDoElemento2')
   if(definirNivel.innerHTML === 'Normal'){
    definirNivel.innerHTML = 'Hard';
    elemento2.style.display = 'none'
   }else if (definirNivel.innerHTML === 'Hard'){
    definirNivel.innerHTML = 'Normal';
    elemento2.style.display ='block';
   }
}


