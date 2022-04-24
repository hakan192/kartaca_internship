db = db.getSiblingDB('stajdb');

db.createCollection('iller');
db.createCollection('ulkeler');

db.iller.insertMany([
  {
    "il": "tekirdag",
    "nufus": "1140200",
    "ilceler": [
      "hayrabolu",
      "malkara"
    ]
  },
  {
    "il": "kocaeli",
    "nufus": "11142200",
    "ilceler": [
      "darica",
      "gebze"
    ]
  },
  {
    "il": "istanbul",
    "nufus": "17140220",
    "ilceler": [
      "besiktas",
      "kadikoy"
    ]
  },
  {
    "il": "ankara",
    "nufus": "3140200",
    "ilceler": [
      "cankaya",
      "evren"
    ]
  },
  {
    "il": "hatay",
    "nufus": "32412684",
    "ilceler": [
      "altinozu",
      "erzin"
    ]
  },
  {
    "il": "erzincan",
    "nufus": "1140200",
    "ilceler": [
      "cayirli",
      "kemah"
    ]
  },
  {
    "il": "izmir",
    "nufus": "51140200",
    "ilceler": [
      "bornova",
      "cesme"
    ]
  },
  {
    "il": "adana",
    "nufus": "81140200",
    "ilceler": [
      "seyhan",
      "feke"
    ]
  },
  {
    "il": "mugla",
    "nufus": "91140200",
    "ilceler": [
      "bodrum",
      "dalaman"
    ]
  },
  {
    "il": "edirne",
    "nufus": "101140200",
    "ilceler": [
      "enez",
      "ipsala"
    ]
  }
]);

db.ulkeler.insertMany([
  {
    "ulke": "turkiye",
    "nufus": "84000000",
    "baskent": "ankara"
  },
  {
    "ulke": "fransa",
    "nufus": "284000000",
    "baskent": "paris"
  },
  {
    "ulke": "finlandiya",
    "nufus": "384000000",
    "baskent": "helsinki"
  },
  {
    "ulke": "almanya",
    "nufus": "484000000",
    "baskent": "berlin"
  },
  {
    "ulke": "ukranya",
    "nufus": "484000000",
    "baskent": "kiev"
  },
  {
    "ulke": "cin",
    "nufus": "684000000",
    "baskent": "pekin"
  },
  {
    "ulke": "japonya",
    "nufus": "784000000",
    "baskent": "tokyo"
  },
  {
    "ulke": "misir",
    "nufus": "884000000",
    "baskent": "kahire"
  },
  {
    "ulke": "abd",
    "nufus": "984000000",
    "baskent": "washington dc"
  },
  {
    "ulke": "ingiltere",
    "nufus": "1084000000",
    "baskent": "londra"
  }
]);