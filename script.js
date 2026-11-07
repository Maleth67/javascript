// ====================================
// FRUITRATE - JAVASCRIPT
// ====================================

// CSS automatikus betöltése
const css = document.createElement("link");
css.rel = "stylesheet";
css.href = "style.css";
document.head.appendChild(css);

// Alapadatok
const foods = [
    { id: "alma", name: "Alma", emoji: "🍎", type: "fruit", rating: 0, count: 0 },
    { id: "banan", name: "Banán", emoji: "🍌", type: "fruit", rating: 0, count: 0 },
    { id: "paprika", name: "Paprika", emoji: "🫑", type: "vegetable", rating: 0, count: 0 },
    { id: "ananasz", name: "Ananász", emoji: "🍍", type: "fruit", rating: 0, count: 0 },
    { id: "repa", name: "Répa", emoji: "🥕", type: "vegetable", rating: 0, count: 0 },
    { id: "kukorica", name: "Kukorica", emoji: "🌽", type: "vegetable", rating: 0, count: 0 },
    { id: "borso", name: "Borsó", emoji: "🫛", type: "vegetable", rating: 0, count: 0 },
    { id: "eper", name: "Eper", emoji: "🍓", type: "fruit", rating: 0, count: 0 },
    { id: "szolo", name: "Szőlő", emoji: "🍇", type: "fruit", rating: 0, count: 0 },
    { id: "dinnye", name: "Görögdinnye", emoji: "🍉", type: "fruit", rating: 0, count: 0 },
    { id: "barack", name: "Barack", emoji: "🍑", type: "fruit", rating: 0, count: 0 }
];

// Vicces reakciók
const reactions = {
    alma: [
        "Steve Jobs csalódott benned. 😭",
        "Az alma most új állást keres.",
        "Newton most visszafordul a sírjában."
    ],
    banan: [
        "A banán elcsúszott a depresszióban. 😭",
        "Ez még a majmoknak is fájna.",
        "A banán most meghámozta a szívét."
    ],
    paprika: [
        "Ez most csípett! 🌶️",
        "A paprika bosszút forral.",
        "Még a paprika is elpirult."
    ],
    ananasz: [
        "Az ananász beadta a felmondását.",
        "Hawaii most szomorú.",
        "Ez egy gyümölcs elleni támadás!"
    ],
    repa: [
        "A répa nem látja értelmét ennek.",
        "A répa most szemüveget kér.",
        "Nyuszi most csalódott benned."
    ],
    kukorica: [
        "Ez elég kukoricázós értékelés volt.",
        "A kukorica kipattant a dühtől.",
        "Ez még a pattogatott kukoricának is sok."
    ],
    borso: [
        "A borsó szeme könnybe lábadt.",
        "Ez egy apró, de fájdalmas értékelés.",
        "A borsó most elgurult."
    ],
    eper: [
        "Az eper sír a hűtőben. 🍓",
        "Ez most nagyon epresen fájt.",
        "Az eper letiltott téged."
    ],
    szolo: [
        "Ez most savanyú lett.",
        "A szőlő fürtökben hullatja a könnyeit.",
        "A szőlő most kipréselve érzi magát."
    ],
    dinnye: [
        "A dinnye darabokra tört.",
        "Ez egy görög tragédia.",
        "A dinnye most elgurult."
    ],
    barack: [
        "A barack most elpirult.",
        "Ez egy barackos pofon volt.",
        "A barack megsértődött."
    ]
};

// Adatok betöltése
const saved = JSON.parse(localStorage.getItem("fruitRate") || "{}");

foods.forEach(food => {
    if (saved[food.id]) {
        food.rating = saved[food.id].rating;
        food.count = saved[food.id].count;
    }
});

// Mentés
function saveData() {
    const data = {};

    foods.forEach(food => {
        data[food.id] = {
            rating: food.rating,
            count: food.count
        };
    });

    localStorage.setItem("fruitRate", JSON.stringify(data));
}

// HTML létrehozása
document.body.innerHTML = `
    <div class="app">

        <header class="navbar">
            <div class="logo">fruit<span>rate.</span></div>
            <div class="nav-label">A gyümölcsök és zöldségek világa</div>
        </header>

        <section class="hero">
            <span class="eyebrow">A TE ÍZLÉSED. A TE SZABÁLYAID.</span>

            <h1>Mennyire jók<br>ezek az ételek?</h1>

            <p>
                Értékeld a kedvenc gyümölcseidet és zöldségeidet.
                De vigyázz, az őszinteség néha fáj! 
            </p>

            <a href="#foods" class="hero-button">
                Kezdjük az értékelést ↓
            </a>
        </section>

        <section class="stats">
            <div class="stat">
                <strong id="totalFoods">11</strong>
                <span>Értékelhető étel</span>
            </div>

            <div class="stat">
                <strong id="ratedFoods">0</strong>
                <span>Értékelt étel</span>
            </div>

            <div class="stat">
                <strong id="totalVotes">0</strong>
                <span>Összes szavazat</span>
            </div>
        </section>

        <main id="foods">

            <div class="section-heading">
                <div>
                    <span class="eyebrow">VÁLASZD KI A KEDVENCED</span>
                    <h2>Értékelések</h2>
                </div>

                <input
                    type="search"
                    id="search"
                    placeholder="Keresés..."
                >
            </div>

            <div class="filters">
                <button class="filter active" data-filter="all">
                    Összes
                </button>

                <button class="filter" data-filter="fruit">
                    🍓 Gyümölcsök
                </button>

                <button class="filter" data-filter="vegetable">
                    🥕 Zöldségek
                </button>
            </div>

            <div class="food-grid" id="foodGrid"></div>

        </main>

        <section class="leaderboard">
            <span class="eyebrow">A NAGY RANGLISTA</span>
            <h2>Legjobbak és legrosszabbak</h2>

            <div class="ranking-grid">
                <div class="ranking-card">
                    <h3>🏆 Legjobb ételek</h3>
                    <div id="bestFoods"></div>
                </div>

                <div class="ranking-card">
                    <h3>💀 Legrosszabb ételek</h3>
                    <div id="worstFoods"></div>
                </div>
            </div>
        </section>

        <footer>
            <div class="logo">fruit<span>rate.</span></div>
            <p>Minden gyümölcs megérdemel egy esélyt. 🍉</p>
            <span>© 2026 FruitRate</span>
        </footer>

    </div>

    <div class="toast" id="toast"></div>
`;

// Értékelő kártyák megjelenítése
function renderFoods(filter = "all", search = "") {

    const grid = document.getElementById("foodGrid");

    const filtered = foods.filter(food => {
        const matchesType =
            filter === "all" || food.type === filter;

        const matchesSearch =
            food.name.toLowerCase().includes(search.toLowerCase());

        return matchesType && matchesSearch;
    });

    grid.innerHTML = filtered.map(food => {

        const average = food.count > 0
            ? (food.rating / food.count).toFixed(1)
            : "–";

        return `
            <article class="food-card">

                <div class="food-image">
                    <span>${food.emoji}</span>
                    <span class="food-type">
                        ${food.type === "fruit" ? "Gyümölcs" : "Zöldség"}
                    </span>
                </div>

                <div class="food-content">

                    <div class="food-title">
                        <h3>${food.name}</h3>
                        <span class="average">${average}/10</span>
                    </div>

                    <p class="votes">
                        ${food.count} értékelés
                    </p>

                    <label for="rating-${food.id}">
                        Saját értékelés
                    </label>

                    <div class="rating-value">
                        <strong id="value-${food.id}">8</strong>
                        <span>/ 10</span>
                    </div>

                    <input
                        type="range"
                        id="rating-${food.id}"
                        min="1"
                        max="10"
                        value="8"
                        class="rating-slider"
                        data-id="${food.id}"
                    >

                    <button
                        class="rate-button"
                        data-id="${food.id}"
                    >
                        Értékelés elküldése
                    </button>

                </div>

            </article>
        `;
    }).join("");

    updateStats();
    updateRanking();
}

// Értékelés elküldése
function rateFood(id) {

    const food = foods.find(item => item.id === id);

    const slider = document.getElementById(`rating-${id}`);

    const rating = Number(slider.value);

    food.rating += rating;
    food.count++;

    saveData();

    const messages = reactions[id];

    let message;

    if (rating <= 3) {
        message = messages[Math.floor(Math.random() * messages.length)];
    } else if (rating <= 6) {
        message = "Hát... ez nem volt túl meggyőző. 😅";
    } else if (rating <= 8) {
        message = "Ez már egy korrekt értékelés! ❤️";
    } else {
        message = "EZ AZ! " + food.name + " imád téged! 🏆";
    }

    showToast(`${food.emoji} ${message}`);

    renderFoods(
        document.querySelector(".filter.active").dataset.filter,
        document.getElementById("search").value
    );
}

// Statisztikák
function updateStats() {

    const rated = foods.filter(food => food.count > 0).length;

    const votes = foods.reduce(
        (sum, food) => sum + food.count, 0
    );

    document.getElementById("totalFoods").textContent = foods.length;
    document.getElementById("ratedFoods").textContent = rated;
    document.getElementById("totalVotes").textContent = votes;
}

// Ranglista
function updateRanking() {

    const rated = foods
        .filter(food => food.count > 0)
        .map(food => ({
            ...food,
            average: food.rating / food.count
        }))
        .sort((a, b) => b.average - a.average);

    const best = rated.slice(0, 3);
    const worst = [...rated].reverse().slice(0, 3);

    function createRanking(items) {
        if (items.length === 0) {
            return "<p class='empty'>Még nincs értékelés.</p>";
        }

        return items.map((food, index) => `
            <div class="ranking-item">
                <span>${index + 1}.</span>
                <span class="rank-emoji">${food.emoji}</span>
                <strong>${food.name}</strong>
                <span class="rank-score">
                    ${food.average.toFixed(1)}/10
                </span>
            </div>
        `).join("");
    }

    document.getElementById("bestFoods").innerHTML =
        createRanking(best);

    document.getElementById("worstFoods").innerHTML =
        createRanking(worst);
}

// Üzenet megjelenítése
function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// Eseménykezelés
document.addEventListener("input", event => {

    if (event.target.classList.contains("rating-slider")) {

        const id = event.target.dataset.id;

        document.getElementById(`value-${id}`).textContent =
            event.target.value;
    }

    if (event.target.id === "search") {

        const activeFilter =
            document.querySelector(".filter.active").dataset.filter;

        renderFoods(activeFilter, event.target.value);
    }
});

document.addEventListener("click", event => {

    if (event.target.classList.contains("rate-button")) {
        rateFood(event.target.dataset.id);
    }

    if (event.target.classList.contains("filter")) {

        document.querySelectorAll(".filter").forEach(button => {
            button.classList.remove("active");
        });

        event.target.classList.add("active");

        renderFoods(
            event.target.dataset.filter,
            document.getElementById("search").value
        );
    }
});

// Indítás
renderFoods();