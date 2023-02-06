let user = {
    "firstName": "Pierre",
    "lastName": "Dupont",
    "age": 19,
    "Adress": {
        "street": "Rue dessus l'Etang 19",
        "town": "Ebly",
        "pc": 6800,
        "country": "Belgium"
    },
    "phone": {
        "personnal": "0468380124",
        "profesionnal": "0032468380124"
    }
};

let message = "Bonjour, " + user["firstName"] + " " + user["lastName"] + ", vous avez " + user["age"] + " ans."
let second = "Votre numéro de téléphone personnel est <strong class=\"tel\">" + user["phone"]["personnal"] + "</strong> et votre numéro de téléphone profesionnel est <strong class=\"tel\">" + user["phone"]["profesionnal"] + "</strong>"


document.getElementById('result-1').innerHTML = message + second

