const ingredients = {
    cannette: [1],
    hamburger: [175, 1, 0.25, 0.5, 0.5, 1.5, 0.5, 0.5, 1, 0.5, 0.5],
    macaroni: [75, 37.5, 100, 125, 1, 0.5, 0.5, 0.5],
    pindasoep: [150, 175, 1, 1, 1, 1, 0.5, 375, 0.5, 125, 75, 1],
    wortelsoep: [1.5, 3, 1, 1, 1, 325, 100, 62.5, 1, 1, 0.125, 75, 0.125, 40, 0.5, 0.25, 0.25, 0.75, 0.25, 0.25]
}

const changeIngredients = () => {
    for (let i = 0; i < ingredients[identifier].length; i++) {
        document.getElementById('i' + i).innerHTML = document.getElementById('persons').value * ingredients[identifier][i];
        if (document.getElementById('persons').value * ingredients[identifier][i] <= 1) {
            document.getElementById('i' + i + 's').style.display = 'inline';
            document.getElementById('i' + i + 'p').style.display = 'none';
        }
        else {
            document.getElementById('i' + i + 's').style.display = 'none';
            document.getElementById('i' + i + 'p').style.display = 'inline';
        }
    }
     
}

const identifier = document.getElementById('identifier').innerHTML;

document.getElementById('persons').addEventListener('input', changeIngredients);