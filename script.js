const style = document.createElement('style');
style.textContent = `
    body {
        font-family: sans-serif;
        max-width: 450px;
        margin: 20px auto;
        padding: 0 10px;
        background-color: hotpink;
    }
    .etel-kartya {
        background-color: cyan;
        border: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
    }
    .etel-info {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .etel-kep {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 5px;
    }
    select {
        padding: 5px;
    }
    h1 {
        background-color: cyan;
        border-radius: 10px;
        text-align: center;
        padding: 10px;
    }
`;
document.head.appendChild(style);

const etelek = [
    { nev: 'Kukorica', kep: 'kukorica.jpg' },
    { nev: 'Borsó', kep: 'zoldborso-recept.png' },
    { nev: 'Paradicsom', kep: 'paradicsom.jpg' },
    { nev: 'Mandarin', kep: 'mandarin.jpg' },
    { nev: 'Alma', kep: 'almafa-es-alma.jpg' }
];

const cim = document.createElement('h1');
cim.textContent = 'Ételek értékelése';
document.body.appendChild(cim);

const listaKontener = document.createElement('div');

etelek.forEach(etel => {
    const kartya = document.createElement('div');
    kartya.className = 'etel-kartya';

    const info = document.createElement('div');
    info.className = 'etel-info';

    const kep = document.createElement('img');
    kep.src = etel.kep;
    kep.alt = etel.nev;
    kep.className = 'etel-kep';

    const nev = document.createElement('span');
    nev.textContent = etel.nev;

    info.appendChild(kep);
    info.appendChild(nev);

    const valaszto = document.createElement('select');
    valaszto.innerHTML = `
        <option value="">Értékelés...</option>
        <option value="1">1 ⭐</option>
        <option value="2">2 ⭐⭐</option>
        <option value="3">3 ⭐⭐⭐</option>
        <option value="4">4 ⭐⭐⭐⭐</option>
        <option value="5">5 ⭐⭐⭐⭐⭐</option>
    `;

    valaszto.addEventListener('change', (e) => {
        if (e.target.value) {
            alert(`${etel.nev} értékelése: ${e.target.value} csillag`);
        }
    });

    kartya.appendChild(info);
    kartya.appendChild(valaszto);
    listaKontener.appendChild(kartya);
});

document.body.appendChild(listaKontener);
