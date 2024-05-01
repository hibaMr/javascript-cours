let title = document.getElementById('game');

gamlist = []

function end(num1,num2,num3){
    title.innerHTML = gamlist[num1] + ' winner';
    document.getElementById('item' + num1).style.backgroundColor = 'darkmagenta';
    document.getElementById('item' + num2).style.backgroundColor = 'darkmagenta';
    document.getElementById('item' + num3).style.backgroundColor = 'darkmagenta';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)
}

function gan(){
    for(let i = 1;i < 10;i ++){
        gamlist[i] = document.getElementById('item'+ i).innerHTML;
    }
    if(gamlist[1] == gamlist[2] && gamlist[2] == gamlist[3] && gamlist[1] != ''){
        end(1,2,3)
    }
    else if(gamlist[4] == gamlist[5] && gamlist[5] == gamlist[6] && gamlist[6] != ''){
        end(4,5,6)
    }
    else if(gamlist[7] == gamlist[8] && gamlist[8] == gamlist[9] && gamlist[9] != ''){
        end(7,8,9)
    }

    


    else if(gamlist[1] == gamlist[4] && gamlist[4] == gamlist[7] && gamlist[1] != ''){
        end(1,4,7)
    }
    else if(gamlist[2] == gamlist[5] && gamlist[5] == gamlist[8] && gamlist[8] != ''){
        end(2,5,8)
    }
    else if(gamlist[3] == gamlist[6] && gamlist[6] == gamlist[9] && gamlist[9] != ''){
        end(3,6,9)
    }


    
    else if(gamlist[1] == gamlist[5] && gamlist[5] == gamlist[9] && gamlist[1] != ''){
        end(1,5,9)
    }
    else if(gamlist[3] == gamlist[5] && gamlist[5] == gamlist[7] && gamlist[7] != ''){
        end(3,5,7)
    }

}


valeur = 'x';
function game(id){
        let element = document.getElementById(id);
        if(valeur === 'x' && element.innerHTML == ''){
            element.innerHTML = 'X';
            valeur = 'o';
            title.innerHTML = 'O';
            title.style.color = 'yellow'
        }
        else if(valeur === 'o' && element.innerHTML == ''){
            element.innerHTML = 'O';
            valeur = 'x';
            title.innerHTML = 'X';
        }
    gan()
 
}       