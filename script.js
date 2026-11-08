
const style = document.createElement("style");

style.textContent = `
body {
    font-family: Arial, sans-serif;
    background-color: #f4f5f2;
    color: #333;
    margin: 0;
}

header {
    background-color: #47734c;
    color: white;
    text-align: center;
    padding: 30px;
}

header h1 {
    margin: 0;
}

header p {
    margin-bottom: 0;
}

main {
    width: 85%;
    max-width: 1000px;
    margin: 30px auto;
}

h2 {
    color: #47734c;
    margin-bottom: 20px;
}

.foods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.food {
    background-color: white;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}

.food h3 {
    font-size: 22px;
    margin: 10px;
}

.food select {
    padding: 8px;
    margin: 10px;
    border: 1px solid #aaa;
    border-radius: 4px;
}

.food button {
    background-color: #47734c;
    color: white;
    border: none;
    padding: 9px 15px;
    border-radius: 4px;
    cursor: pointer;
}

.food button:hover {
    background-color: #345a39;
}

.result {
    margin-top: 12px;
    color: #47734c;
    font-weight: bold;
}

.message {
    margin-top: 8px;
    font-size: 14px;
}

@media (max-width: 600px) {
    .foods {
        grid-template-columns: 1fr;
    }

    main {
        width: 92%;
    }
}
`;

document.head.appendChild(style);

const foods = [
    { name: "Alma", emoji: "🍎", sum: 0, count: 0 },
    { name: "Mandarin", emoji: "🍊", sum: 0, count: 0 },
    { name: "Körte", emoji: "🍐", sum: 0, count: 0 },
    { name: "Banán", emoji: "🍌", sum: 0, count: 0 },
    { name: "Eper", emoji: "🍓", sum: 0, count: 0 },
    { name: "Paprika", emoji: "🫑", sum: 0, count: 0 },
    { name: "Kukorica", emoji: "🌽", sum: 0, count: 0 },
    { name: "Borsó", emoji: "🫛", sum: 0, count: 0 },
    { name: "Paradicsom", emoji: "🍅", sum: 0, count: 0 },
    { name: "Répa", emoji: "🥕", sum: 0, count: 0 }
];

document.body.innerHTML = `
    <header>
        <h1>Rate the Food</h1>
        <p>Értékeld a gyümölcsöket és zöldségeket!</p>
    </header>

    <main>
        <h2>Értékelhető ételek:</h2>
        <div class="foods" id="foods"></div>
    </main>
`;

let html = "";

for (let i = 0; i < foods.length; i++) {
    html += `
        <div class="food">
            <h3>${foods[i].emoji} ${foods[i].name}</h3>

            <select id="rating${i}">
                <option value="1">1 - Nagyon rossz</option>
                <option value="2">2 - Rossz</option>
                <option value="3" selected>3 - Közepes</option>
                <option value="4">4 - Jó</option>
                <option value="5">5 - Kiváló</option>
            </select>

            <button onclick="rateFood(${i})">Értékelés</button>

            <div class="result" id="result${i}"></div>
            <div class="message" id="message${i}"></div>
        </div>
    `;
}

document.getElementById("foods").innerHTML = html;

function rateFood(index) {
    let rating = Number(document.getElementById("rating" + index).value);

    foods[index].sum += rating;
    foods[index].count++;

    let average = foods[index].sum / foods[index].count;

    document.getElementById("result" + index).innerHTML =
        "Átlagos értékelés: " + average.toFixed(1) + " / 5";

    let message = "";

    if (index == 0) {
        if (rating == 1) {
            message = "Hot take";
        }
        else if (rating == 5) {
            message = "Based";
        }
        else {
            message = "Lehet basic, de mindig consistent.";
        }
    }
    else if (index == 1) {
        if (rating == 1) {
            message = "NAGYON NAGYON DURVA HOT TAKE!";
        }
        else if (rating == 5) {
            message = "DESERVED";
        }
        else {
            message = "Szegény mandarin mindig underrated marad :(";
        }
    }
    else if (index == 2) {
        if (rating == 1) {
            message = "Érthető";
        }
        else if (rating == 5) {
            message = "Niche pick";
        }
        else {
            message = "Valid";
        }
    }
    else if (index == 3) {
        if (rating == 1) {
            message = "Csak akkor ha nem érett meg normálisan.";
        }
        else if (rating == 5) {
            message = "Top 3ban fix benne van";
        }
        else {
            message = "A banán vagy a legeslegjobb, vagy borzalmas, egy közepes értékeléssel sohasem lehet téveszteni.";
        }
    }
    else if (index == 4) {
        if (rating == 1) {
            message = ":(";
        }
        else if (rating == 5) {
            message = "VALIIID";
        }
        else {
            message = "Az eper azért még mindig finom!";
        }
    }
    else if (index == 5) {
        if (rating == 1) {
            message = "HOLY HOT TAKE";
        }
        else if (rating == 5) {
            message = "Top listás zöldség.";
        }
        else {
            message = "Nah";
        }
    }
    else if (index == 6) {
        if (rating == 1) {
            message = "Biztosan félre kattintottak.";
        }
        else if (rating == 5) {
            message = "NAGYON NAGYON VALIIIIID";
        }
        else {
            message = ":)";
        }
    }
    else if (index == 7) {
        if (rating == 1) {
            message = "Understandable";
        }
        else if (rating == 5) {
            message = "Niche";
        }
        else {
            message = "Apró, de azért egész jó!";
        }
    }
    else if (index == 8) {
        if (rating == 1) {
            message = "Erre nem is lehetne más értékelést adni.";
        }
        else if (rating == 5) {
            message = "Sohasem lehet semmisem annyira jó, mint amennyira rossz a paradicsom, a legrosszabb dolog ami valaha történt ezzel a viláágal az az hogy felfedeztük ezt az ördögöktől származó borzalmat amit paradicsomnak nevezünk, mellesleg annyira utaállja mindenki hogy se a zöldségek, se a gyümölcsok sem akarják maguk közé venni.";
        }
        else {
            message = "CSAK a paradicsom szoszok az ehető dolgok, minden másnak ami paradicsomhoz kötődik mennie kell.";
        }
    }
    else if (index == 9) {
        if (rating == 1) {
            message = "Engem sem tanított meg fütyülni :(";
        }
        else if (rating == 5) {
            message = "VAlID";
        }
        else {
            message = "Overhated";
        }
    }

    document.getElementById("message" + index).innerHTML = message;
}
