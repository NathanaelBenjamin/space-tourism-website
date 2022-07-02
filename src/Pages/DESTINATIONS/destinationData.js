import moonImage from "./Moon.jpg";
import marsImage from "./Mars.jpg";
import europaImage from "./europa.jpg";
import titansImage from "./titans.jpg";

const destinations = {
    moon: {
        image: moonImage, 
        place: "MOON",
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        averageDistance: "384,400 KM", 
        estimatedTimeTravel: "3 DAYS"
    },

    mars : {
        image: marsImage,
        place: "MARS",
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        averageDistance: "225 MIL. KM", 
        estimatedTimeTravel: "9 MONTHS"
    },

    europa: {
        image: europaImage,
        place: "EUROPA",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        averageDistance: "628 MIL. KM", 
        estimatedTimeTravel: "3 YEARS"
    },

    titans : {
        image: titansImage,
        place: "TITANS",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        averageDistance: "1.6 BIL. KM", 
        estimatedTimeTravel: "7 YEARS"
    }

};


export default destinations;


