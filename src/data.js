// export const playAudio = (isPlaying, audioRef) => {
//   if (isPlaying) {
//     const playPromise = audioRef.current.play();
//     if (playPromise !== undefined) {
//       playPromise
//         .then((audio) => {
//           audioRef.current.play();
//         })
//         .catch((error) => console.log(error));
//     }
//   }
// };


import {v4 as uuidv4} from "uuid";

function chillHop(){
  return [
    {
      name:"Bell Tower" ,
      artist: "Mama Aiuto" ,
      cover:"https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/61226ba21704e25a2ece5728_tet0c8gdl30scqu-p-800.png" ,
      id: uuidv4(),
      active: true,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21734"  

    },
    {
      name: "Little Bird",
      artist: "Liphe",
      cover: "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/6116287c262a8001bc174be5_Single%20Cover%2001Fall2021Single.png",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21735"

    },
    {
      name: "Blue Coupe",
      artist: "Kreatev",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21736"

    },
    {
      name: "Sprits",
      artist: "Evil Needle, Misha",
      cover: "https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21737"

    },
    {
      name: "Gratiitude",
      artist: "FantomPower",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22792"

    },
    {
      name: "Places",
      artist: "Ruck P",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563"

    },
    {
      name: "Aftersome",
      artist: "Toonorth",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17944"

    },
    {
      name: "Who Knows",
      artist: "Psalm Trees",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/371dadcad6dee874bd96515ae5d19b6daef2f408-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10553"

    },
    {
      name: "Bliss",
      artist: "Misha, Jussi Halme",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248"

    },
    {
      name: "Lonely Waves",
      artist: "C Y G N",
      cover: "https://chillhop.com/wp-content/uploads/2021/02/80be32197ca7971424bef5e4d0c6810e1d4334c6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14981"

    },
    {
      name: "Desire",
      artist: "Psalm Trees, Guillaume",
      cover: "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10554"

    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    }
  ]
}

export default chillHop;