import avatarImg from "../assets/images/avatar2.jpeg";
import blackDemonImg from "../assets/images/blackdemon.jpeg";
import blueBeetleImg from "../assets/images/bluebeetle.jpeg";
import creedImg from "../assets/images/creed3.jpeg";
import duneImg from "../assets/images/dune.jpeg";
import equalizerImg from "../assets/images/equalizer3.jpeg";
import extractionImg from "../assets/images/extraction2.jpeg";
import fastXImg from "../assets/images/fastx.jpeg";
import gotgImg from "../assets/images/gotg3.jpeg";
import hungerGamesImg from "../assets/images/hungergames.jpeg";
import johnWickImg from "../assets/images/johnwick4.jpeg";
import medellinImg from "../assets/images/medellin.jpeg";
import missionImpossibleImg from "../assets/images/missionimpossible.jpeg";
import oppenheimerImg from "../assets/images/oppenheimer.jpeg";
import spidermanImg from "../assets/images/spiderman.jpeg";
import batmanImg from "../assets/images/thebatman.jpeg";
import flashImg from "../assets/images/theflash.jpeg";
import marvelsImg from "../assets/images/themarvels.jpeg";
import transformersImg from "../assets/images/transformers.jpeg";
import wonkaImg from "../assets/images/Wonka.jpeg";

export const movies = [
  {
    id: 1,
    title: "Medellin",
    year: 2023,
    description: "Un film d'action explosif rempli de scènes intenses.",
    image: medellinImg,
    team: ["Ramzy Bedia", "Mike Tyson", "Franck Gastambide"]
  },
  {
    id: 2,
    title: "Fast X",
    year: 2023,
    description: "La saga Fast and Furious continue avec plus d'action et de vitesse.",
    image: fastXImg,
    team: ["Vin Diesel", "Michelle Rodriguez", "Jason Momoa"]
  },
  {
    id: 3,
    title: "The Black Demon",
    year: 2023,
    description: "Un thriller mystérieux autour d'une créature marine géante.",
    image: blackDemonImg,
    team: ["Josh Lucas", "Fernanda Urrejola", "Julio Cesar Cedillo"]
  },
  {
    id: 4,
    title: "John Wick 4",
    year: 2023,
    description: "John Wick affronte de nouveaux ennemis dans une guerre mondiale.",
    image: johnWickImg,
    team: ["Keanu Reeves", "Donnie Yen", "Laurence Fishburne"]
  },
  {
    id: 5,
    title: "Oppenheimer",
    year: 2023,
    description: "L’histoire du scientifique qui a créé la première bombe atomique.",
    image: oppenheimerImg,
    team: ["Cillian Murphy", "Robert Downey Jr.", "Emily Blunt"]
  },
  {
    id: 6,
    title: "Avatar: The Way of Water",
    year: 2022,
    description: "Jake Sully protège sa famille dans les profondeurs des océans de Pandora.",
    image: avatarImg,
    team: ["Sam Worthington", "Zoe Saldana", "James Cameron"]
  },
  {
    id: 7,
    title: "Extraction 2",
    year: 2023,
    description: "Tyler Rake revient pour une mission encore plus dangereuse.",
    image: extractionImg,
    team: ["Chris Hemsworth", "Golshifteh Farahani", "Sam Hargrave"]
  },
  {
    id: 8,
    title: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    description: "Miles Morales explore de nouveaux univers et rencontre divers Spider-Men.",
    image: spidermanImg,
    team: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"]
  },
  {
    id: 9,
    title: "The Batman",
    year: 2022,
    description: "Batman enquête sur un tueur énigmatique qui menace Gotham.",
    image: batmanImg,
    team: ["Robert Pattinson", "Zoë Kravitz", "Matt Reeves"]
  },
  {
    id: 10,
    title: "Dune: Part One",
    year: 2021,
    description: "Paul Atreides découvre son destin sur la planète désertique Arrakis.",
    image: duneImg,
    team: ["Timothée Chalamet", "Zendaya", "Denis Villeneuve"]
  },
  {
    id: 11,
    title: "The Equalizer 3",
    year: 2023,
    description: "Robert McCall affronte la mafia italienne pour défendre des innocents.",
    image: equalizerImg,
    team: ["Denzel Washington", "Dakota Fanning", "Antoine Fuqua"]
  },
  {
    id: 12,
    title: "Mission Impossible: Dead Reckoning",
    year: 2023,
    description: "Ethan Hunt affronte une nouvelle menace mondiale.",
    image: missionImpossibleImg,
    team: ["Tom Cruise", "Rebecca Ferguson", "Simon Pegg"]
  },
  {
    id: 13,
    title: "The Marvels",
    year: 2023,
    description: "Carol Danvers s’allie à deux héroïnes pour sauver l’univers.",
    image: marvelsImg,
    team: ["Brie Larson", "Iman Vellani", "Teyonah Parris"]
  },
  {
    id: 14,
    title: "Creed III",
    year: 2023,
    description: "Adonis Creed affronte un ennemi venant de son passé.",
    image: creedImg,
    team: ["Michael B. Jordan", "Tessa Thompson", "Jonathan Majors"]
  },
  {
    id: 15,
    title: "The Flash",
    year: 2023,
    description: "Barry remonte le temps pour sauver sa mère, mais crée un nouveau chaos.",
    image: flashImg,
    team: ["Ezra Miller", "Michael Keaton", "Sasha Calle"]
  },
  {
    id: 16,
    title: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    description: "Les Gardiens tentent de sauver l’un des leurs dans une mission émotionnelle.",
    image: gotgImg,
    team: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"]
  },
  {
    id: 17,
    title: "Transformers: Rise of the Beasts",
    year: 2023,
    description: "Les Autobots affrontent une ancienne menace qui revient sur Terre.",
    image: transformersImg,
    team: ["Anthony Ramos", "Dominique Fishback", "Peter Cullen"]
  },
  {
    id: 18,
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    year: 2023,
    description: "Les origines du président Snow lors des premiers Hunger Games.",
    image: hungerGamesImg,
    team: ["Tom Blyth", "Rachel Zegler", "Viola Davis"]
  },
  {
    id: 19,
    title: "Wonka",
    year: 2023,
    description: "La jeunesse de Willy Wonka et ses débuts dans le monde du chocolat.",
    image: wonkaImg,
    team: ["Timothée Chalamet", "Rowan Atkinson", "Olivia Colman"]
  },
  {
    id: 20,
    title: "Blue Beetle",
    year: 2023,
    description: "Un jeune étudiant découvre un scarabée extraterrestre qui lui donne des pouvoirs.",
    image: blueBeetleImg,
    team: ["Xolo Maridueña", "Bruna Marquezine", "Susan Sarandon"]
  }
];
