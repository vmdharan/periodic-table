var row1 = [
    { Symbol: 'H', Name: '' }, 
    {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, 
    { Symbol: 'He', Name: '' }
];

var row2 = [
    { Symbol: 'Li', Name: '' },
    { Symbol: 'Be', Name: '' },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
    { Symbol: 'B', Name: '' },
    { Symbol: 'C', Name: '' },
    { Symbol: 'N', Name: '' },
    { Symbol: 'O', Name: '' },
    { Symbol: 'F', Name: '' },
    { Symbol: 'Ne', Name: '' }
];

var row3 = [
    { Symbol: 'Na', Name: '' },
    { Symbol: 'Mg', Name: '' },
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
    { Symbol: 'Al', Name: '' },
    { Symbol: 'Si', Name: '' },
    { Symbol: 'P', Name: '' },
    { Symbol: 'S', Name: '' },
    { Symbol: 'Cl', Name: '' },
    { Symbol: 'Ar', Name: '' }
];

var row4 = [
    { Symbol: 'K', Name: '' },
    { Symbol: 'Ca', Name: '' },
    { Symbol: 'Sc', Name: '' },
    { Symbol: 'Ti', Name: '' },
    { Symbol: 'V', Name: '' },
    { Symbol: 'Cr', Name: '' },
    { Symbol: 'Mn', Name: '' },
    { Symbol: 'Fe', Name: '' },
    { Symbol: 'Co', Name: '' },
    { Symbol: 'Ni', Name: '' },
    { Symbol: 'Cu', Name: '' },
    { Symbol: 'Zn', Name: '' },
    { Symbol: 'Ga', Name: '' },
    { Symbol: 'Ge', Name: '' },
    { Symbol: 'As', Name: '' },
    { Symbol: 'Se', Name: '' },
    { Symbol: 'Br', Name: '' },
    { Symbol: 'Kr', Name: '' }
];

var row5 = [
    { Symbol: 'Rb', Name: '' },
    { Symbol: 'Sr', Name: '' },
    { Symbol: 'Y', Name: '' },
    { Symbol: 'Zr', Name: '' },
    { Symbol: 'Nb', Name: '' },
    { Symbol: 'Mo', Name: '' },
    { Symbol: 'Tc', Name: '' },
    { Symbol: 'Ru', Name: '' },
    { Symbol: 'Rh', Name: '' },
    { Symbol: 'Pd', Name: '' },
    { Symbol: 'Ag', Name: '' },
    { Symbol: 'Cd', Name: '' },
    { Symbol: 'In', Name: '' },
    { Symbol: 'Sn', Name: '' },
    { Symbol: 'Sb', Name: '' },
    { Symbol: 'Te', Name: '' },
    { Symbol: 'I', Name: '' },
    { Symbol: 'Xe', Name: '' }
];

var row6 = [
    { Symbol: 'Cs', Name: '' },
    { Symbol: 'Ba', Name: '' },
    { Symbol: '', Name: '' },
    { Symbol: 'Hf', Name: '' },
    { Symbol: 'Ta', Name: '' },
    { Symbol: 'W', Name: '' },
    { Symbol: 'Re', Name: '' },
    { Symbol: 'Os', Name: '' },
    { Symbol: 'Ir', Name: '' },
    { Symbol: 'Pt', Name: '' },
    { Symbol: 'Au', Name: '' },
    { Symbol: 'Hg', Name: '' },
    { Symbol: 'Tl', Name: '' },
    { Symbol: 'Pb', Name: '' },
    { Symbol: 'Bi', Name: '' },
    { Symbol: 'Po', Name: '' },
    { Symbol: 'At', Name: '' },
    { Symbol: 'Rn', Name: '' }
];

var row7 = [
    { Symbol: 'Fr', Name: '' },
    { Symbol: 'Ra', Name: '' },
    { Symbol: '', Name: '' },
    { Symbol: 'Rf', Name: '' },
    { Symbol: 'Db', Name: '' },
    { Symbol: 'Sg', Name: '' },
    { Symbol: 'Bh', Name: '' },
    { Symbol: 'Hs', Name: '' },
    { Symbol: 'Mt', Name: '' },
    { Symbol: 'Ds', Name: '' },
    { Symbol: 'Rg', Name: '' },
    { Symbol: 'Cn', Name: '' },
    { Symbol: 'Nh', Name: '' },
    { Symbol: 'Fl', Name: '' },
    { Symbol: 'Mc', Name: '' },
    { Symbol: 'Lv', Name: '' },
    { Symbol: 'Ts', Name: '' },
    { Symbol: 'Og', Name: '' }
];



function createCard(cardImg, cardText) {
    var card = document.createElement('div');

    var img = document.createElement('div');
    var txt = document.createElement('div');

    card.classList.add("j1-card");
    img.classList.add("j1-img-div");
    img.classList.add(cardImg);

    txt.classList.add("j1-card-text");
    txt.textContent = cardText;

    card.appendChild(img);
    card.appendChild(txt);

    return card;
}