let level = [];         //Holds an array with all unmutable levels, including the field
let mutableField        //Holds the mutable field of the current level
let currentLevel = 0;   //Current level
let finalLevel = 2;     //Final level
let x;                  //Bear coordinates
let y;
let gx;                 //Ghost coordinates
let gy;
let intervalId;         //Interval for ghost movement

level[0] = {
    field: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'XBX                                          XKX',
    'X X                                          X X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                     XXX                      X',
    'X                     XKX                      X',
    'X                     XXX                      X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'X                                              X',
    'XXX                                          XXX',
    'XGX                                          XPX',
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
    keys: [1, 46, 11, 23],
    doors: [12, 23, 22, 45],
    speed: 1000
};

level[1] = {
    field: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
'XBXFFF                  F          X           X',
'X XFFF XXXXXXXXXXXXXXXX F FXXXXXXX X XXX FFFFF X',
'X XFFF F                F F        X XKX FFFFF X',
'X XXXX X XXXXXXXXXXXXXFFF F XXXXXXXX X X FFFFF X',
'X      X X     X          F X        X X FFFFF X',
'X XXXXXX X XFX X     X XXXX X XXXXXXXX X FFFFF X',
'X X      X XKX X     X X    X X        X FFFFF X',
'X X XXXXXX X X XXXXXXX X XXXX X        X X     X',
'X F FFFFFF X X         X X    XXXXXXX  X XXX X X',
'X F      F X X XXXXXXXXX X FF X     X  X X X XFX',
'X XXXXXX F X X         X X FF X FFF X  X X X F X',
'X      X F X X XXXXXXX X X FF X FGF X  X X X F X',
'X XXXX X F X X         XFX FFXX FFF X  X X X F X',
'X X    X F X X XXXXXXX X X X           X X X F X',
'X X FF X   X X X       X X X X XXXXXXXXX X X F X',
'XFX FF XXXXX X X       X X X X X       X X X   X',
'X      X     X X    XXXX X X X X XXXX  X XXX XXX',
'XFFFF  X FFFFF XFFF X    X X X X    X  X     X X',
'X      X FFFFF XFFF X XXXX X X XXX  X  XXXXXXX X',
'X FFFF X     F XFFF X X             X        X X',
'X FFFF XXXXX F XXXX X XXXXXXXXXXXXXXXXXXXXXX F X',
'X            F      X                        FPX',
'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
    keys: [7, 12, 3, 38],
    doors: [22, 20, 17, 46],
    speed: 750
};

level[2] = {
    field: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    'X                     XPX                      X',
    'X XFXFX X X X XXXXXXX XXX XXXXXXXXXXXXXXXXXXXX X',
    'X X   X X X X X     X X   X                  X X',
    'X X K X X X X X XXX X XXX X XXXXXXXX X XXXXX X X',
    'X XXXXX X X X X X X X   X X X      X X X   X X X',
    'X       X X X X X X XXX X X X XXXX X X X   X X X',
    'X XXXXXXX X X X X X   X X X X X  X X X X   X X X',
    'X X       X X X X XXX X X X X X  X K X X   X   X',
    'X X XXXXXXX X X X   X X X   X XXXX   X X   XXXXX',
    'X X X       XXX X X X X X XXX    XXXXX X       X',
    'X X X FFFFF X   X X X XBX XKF          X XXXXX X',
    'X X X FFFFF X XXX X X XXX XFF XXXXXXXXXX X   X X',
    'X X X FFFFF X X X X X     X   X              X X',
    'X X X FFFFF X X X X XXXXXXX XXX XXXXXXXXXXXXXX X',
    'X X X         X X X         X   X              X',
    'X X XXXX XXXXXX X XXXXXXXXXXX XXX XXXXXXXXXXXXXX',
    'X X X KX X      X             X   X            X',
    'X XXXXXXXX XXXXXX           XXX XXX XXXXXXXXXX X',
    'X          X    XXXXX FFFFF X   X X X          X',
    'XXXXXXXXXXXX  X     X FFFFF X F X X X FFFFFFFFFX',
    'X             XXXXXXX FFFFF X F XXX X FFFFFFFFFX',
    'XG                          X       X        FKX',
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
    keys: [8, 35, 17, 6, 11, 27, 4, 4, 22, 46],
    doors: [17, 4, 12, 27, 2, 4, 22, 45, 2, 23],
    speed: 500
};

//Convert cell ID into 2 digits (prepended by 0 if under 10)
const convertId = id => {
    return id < 10 ? '0' + id : id;
}

//For each field element, create an HTML image element
const initializeElement = name => {
    let element = document.createElement('img');
    element.setAttribute('src', './' + name + '.png');
    element.style.width = '20px';
    element.style.height = '20px';
    return element;
}

//Bear caught fire, game over
const caughtFire = () => {
    document.getElementById('c' + convertId(y) + convertId(x)).firstElementChild.remove();
    document.getElementById('c' + convertId(y) + convertId(x)).appendChild(dead);
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m4').style.display = 'inline-flex';
    gameOver();
}

//Bear found key, open door
const openDoor = () => {

    //Iterate over the keys array to establish which key was found and which door matches it
    for (let i = 0; i < level[currentLevel].keys.length; i += 2) {
        let kx = level[currentLevel].keys[i];
        let ky = level[currentLevel].keys[i + 1];
        let dx = level[currentLevel].doors[i];
        let dy = level[currentLevel].doors[i + 1];
          if (x === ky && y === kx) {

            //Remove key and door from the string representation of the field
            mutableField[kx] = mutableField[kx].substring(0, ky) + ' ' + mutableField[kx].substring(ky + 1);
            mutableField[dx] = mutableField[dx].substring(0, dy) + ' ' + mutableField[dx].substring(dy + 1);
            
            //Remove key and door images from the field and put bear in place
            document.getElementById('c' + convertId(kx) + convertId(ky)).firstChild.remove();
            document.getElementById('c' + convertId(dx) + convertId(dy)).firstChild.remove();
            document.getElementById('c' + convertId(y) + convertId(x)).appendChild(bear);
        }
    }
}

//Game over
const gameOver = () => {
    window.clearInterval(intervalId);
    window.removeEventListener('keydown', moveBear);
    document.getElementById('continue').style.display = 'block';
    window.addEventListener('keydown', clearField);
}

//Princess saved, proceed to next level
const savedPrincess = () => {
    document.getElementById('c' + convertId(y) + convertId(x)).removeChild(princess);
    document.getElementById('c' + convertId(y) + convertId(x)).appendChild(heart);
    document.getElementById('m1').style.display = 'none';
    document.getElementById('m2').style.display = 'inline-flex';  
    window.clearInterval(intervalId);
    window.removeEventListener('keydown', moveBear);
    document.getElementById('continue').style.display = 'block';

    //If not in final level, increment level
    if (currentLevel < finalLevel) {
        currentLevel++;
    }

    //Else, start over
    else {
        document.getElementById('continue').innerHTML = 'Game completed! Press space to start over';
        currentLevel = 0;
    }
    window.addEventListener('keydown', clearField);
}

//Clear the field in order to proceed to next level
const clearField = event => {
    if (event.keyCode === 32) {
        for (let i = 0; i < 24; i++) {
            for (let j = 0; j < 48; j++) {
                let element = document.getElementById('c' + convertId(i) + convertId(j));
                if (element.hasChildNodes()) {
                    element.firstElementChild.remove();     
                }
             }
        }
        window.removeEventListener('keydown', clearField);
        document.getElementById('m2').style.display = 'none';
        document.getElementById('m3').style.display = 'none';
        document.getElementById('m4').style.display = 'none';
        document.getElementById('m1').style.display = 'inline-flex';  
        document.getElementById('continue').style.display = 'none';
        nextLevel();
    }
}

//Start the game when space is pressed
const startGame = event => {
    if (event.keyCode === 32) {
        document.getElementById('continue').style.display = 'none';
        document.getElementById('m1').style.display = 'inline-flex';  
        window.removeEventListener('keydown', startGame);
        nextLevel();
    }
}

//Initialize next level
const nextLevel = () => {

    //Create mutable variable to hold and edit field for current level
    mutableField = Object.assign({}, level[currentLevel].field);
 
    document.getElementById('level').innerHTML = 'Level ' + (currentLevel + 1);

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 48; j++) {
            let element = document.getElementById('c' + convertId(i) + convertId(j));
            
            //Put appropriate elements in place
            switch (mutableField[i][j]) {
                case 'B': element.appendChild(bear); x = j; y = i; break;
                case 'G': element.appendChild(ghost); gx = j; gy = i; break;
                case 'P': element.appendChild(princess); break;
                case 'F': element.appendChild(fire.cloneNode()); break;
                case 'K': element.appendChild(key.cloneNode()); break;
                case 'X': element.appendChild(wall.cloneNode()); break;
            }
        }
    }

    //Set ghost intervals
    intervalId = window.setInterval(moveGhost, level[currentLevel].speed);

    //Listen for key down
    window.addEventListener('keydown', moveBear);
}

//Event handler for arrow keys pressed
const moveBear = event => {
    document.getElementById('c' + convertId(y) + convertId(x)).removeChild(bear);
    
    //Move bear if intended location is not a wall
    switch (event.keyCode) {
        case 37: if (mutableField[y][x - 1] !== 'X') x -= 1; break;
        case 38: if (mutableField[y - 1][x] !== 'X') y -= 1; break;
        case 39: if (mutableField[y][x + 1] !== 'X') x += 1; break;
        case 40: if (mutableField[y + 1][x] !== 'X') y += 1; break;
    }
 
    //Evaluate the new position and take appropriate action
    switch (mutableField[y][x]) {
        case 'F': caughtFire(); break;
        case 'K': openDoor(); break;
        case 'P': savedPrincess(); break;
        default: document.getElementById('c' + convertId(y) + convertId(x)).appendChild(bear);
    }

    //Evaluate whether bear stepped into ghost and take appropriate action
    if (gx === x && gy === y) {
        document.getElementById('c' + convertId(y) + convertId(x)).removeChild(ghost);
        document.getElementById('c' + convertId(y) + convertId(x)).removeChild(bear);
        document.getElementById('c' + convertId(y) + convertId(x)).appendChild(dead);
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m3').style.display = 'inline-flex';
        gameOver();
    }
}

//Handler for ghost movement
const moveGhost = () => {
    let element = document.getElementById('c' + convertId(gy) + convertId(gx));
    element.removeChild(ghost);

    //Put wall or fire back if ghost ran into it in the last move
    switch (mutableField[gy][gx]) {
        case 'X': element.appendChild(wall.cloneNode()); break;
        case 'F': element.appendChild(fire.cloneNode()); break;
        case 'K': element.appendChild(key.cloneNode()); break;
    }
      
    //Find the longest axis and move over that axis one step closer to bear
    if (Math.abs(gx - x) > Math.abs(gy - y)) {
        if (gx > x) {
            gx--;
        }
        else {
            gx++;
        }
    }
    else {
       if (gy > y) {
           gy--;
       }
       else {
           gy++;
       }
    }

    element = document.getElementById('c' + convertId(gy) + convertId(gx));

    //Check whether ghost caught bear and take appropriate action
    if (gx === x && gy === y) {
        element.removeChild(bear);
        element.appendChild(dead);
        document.getElementById('m1').style.display = 'none';
        document.getElementById('m3').style.display = 'inline-flex';
        gameOver();
    
    }
    
    else {

        //Remove wall or fire if ghost ran into it
        if (mutableField[gy][gx] === 'X' || mutableField[gy][gx] === 'F' || mutableField[gy][gx] === 'K') {
            element.firstElementChild.remove();
            
        }
     element.appendChild(ghost);
    }
}

//Initialize elements
let bear = initializeElement('bear');
let princess = initializeElement('princess');
let wall = initializeElement('wall');
let heart = initializeElement('heart');
let ghost = initializeElement('ghost');
let dead = initializeElement('dead');
let fire = initializeElement('fire');
let key = initializeElement('key');

//Initialize field
for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 48; j++) {
        let element = document.createElement('div');
        element.setAttribute('id', 'c' + convertId(i) + convertId(j));
        document.getElementById('field').appendChild(element);        
    }
}

window.addEventListener('keydown', startGame);