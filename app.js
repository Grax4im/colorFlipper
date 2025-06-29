const colors = [
    // Cores básicas
    "red", "green", "blue", "yellow", "cyan", "magenta",
    "black", "white", "gray", "silver", "purple", "orange",
    
    // Tons de vermelho/rosa
    "darkred", "firebrick", "crimson", "indianred", "lightcoral",
    "salmon", "darksalmon", "lightsalmon", "pink", "lightpink",
    "hotpink", "deeppink", "palevioletred", "mediumvioletred",
    
    // Tons de verde
    "darkgreen", "forestgreen", "seagreen", "mediumseagreen",
    "lightgreen", "limegreen", "lime", "olive", "darkolivegreen",
    "olivedrab", "yellowgreen", "lawngreen", "chartreuse",
    
    // Tons de azul
    "darkblue", "mediumblue", "navy", "midnightblue", "royalblue",
    "dodgerblue", "cornflowerblue", "skyblue", "lightskyblue",
    "steelblue", "lightsteelblue", "aqua", "turquoise",
    "mediumturquoise", "darkturquoise", "lightcyan",
    
    // Tons de amarelo/laranja
    "gold", "lightyellow", "lemonchiffon", "lightgoldenrodyellow",
    "papayawhip", "moccasin", "peachpuff", "palegoldenrod",
    "khaki", "darkkhaki", "coral", "tomato", "orangered",
    
    // Tons de marrom/bege
    "brown", "maroon", "saddlebrown", "sienna", "chocolate",
    "peru", "sandybrown", "burlywood", "tan", "wheat",
    "bisque", "blanchedalmond", "cornsilk", "antiquewhite",
    
    // Tons de roxo/lavanda
    "indigo", "darkmagenta", "darkviolet", "blueviolet",
    "mediumorchid", "mediumpurple", "rebeccapurple",
    "thistle", "plum", "violet", "orchid", "lavender",
    
    // Outras cores nomeadas
    "gainsboro", "whitesmoke", "ghostwhite", "snow",
    "honeydew", "mintcream", "azure", "aliceblue",
    "lavenderblush", "mistyrose", "seashell", "oldlace",
    "linen", "floralwhite", "ivory", "beige"
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const random = generateRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function generateRandomNumber() {
    return Math.round(Math.random() * (colors.length-1));
}

