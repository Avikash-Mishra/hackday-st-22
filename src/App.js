import "./App.css";
import AvengersWrapper from "./AvengersWrapper";

function getData() {
  const data = {
    avengers: [
      {
        title: "Original organization: The First Avengers",
        date: "(1963–2004)",
        note: "All of these members helped form the team in The Avengers #1 (September 11, 1963).",
        characters: [
          {
            id: 1009368,
            name: "Iron Man",
            description:
              "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55/portrait_uncanny.jpg",
            comics: 2617,
            series: 647,
            stories: 3943,
            events: 31,
            wiki: "http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009664,
            name: "Thor",
            description:
              "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350/portrait_uncanny.jpg",
            comics: 1824,
            series: 530,
            stories: 2737,
            events: 27,
            wiki: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009707,
            name: "Wasp",
            description:
              'When Janet Van Dyne\'s father died, she convinced her father\'s associate Hank Pym to give her a supply of "Pym particles"; Pym also subjected her to a procedure which granted her the ability to, upon shrinking, grow wings and fire blasts of energy, which she called her "wasp\'s stings."',
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfd5ef165/portrait_uncanny.jpg",
            comics: 414,
            series: 161,
            stories: 471,
            events: 14,
            wiki: "http://marvel.com/universe/Wasp?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009155,
            name: "Ant-Man (Hank Pym)",
            description: "",
            thumbnail:
              "https://static.wikia.nocookie.net/marveldatabase/images/6/66/Henry_Pym_%28Earth-616%29_from_Avengers_Origins_Ant-Man_%26_the_Wasp_Vol_1_1_001.jpg",
            comics: 38,
            series: 27,
            stories: 41,
            events: 1,
            wiki: "http://marvel.com/universe/Yellowjacket_(Henry_Pym)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009351,
            name: "Hulk",
            description:
              "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/portrait_uncanny.jpg",
            comics: 1719,
            series: 503,
            stories: 2607,
            events: 26,
            wiki: "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
        ],
      },
      {
        title: 'Original organization: "Cap\'s Kooky Quartet"',
        date: "(1963–2004)",
        note: "",
        characters: [
          {
            id: 1010955,
            name: "Nomad (Steve Rogers)",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/portrait_uncanny.jpg",
            comics: 2421,
            series: 686,
            stories: 3586,
            events: 31,
            wiki: "http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1017108,
            name: "Hawkeye/Clint Barton (MAA)",
            description:
              "Hawkeye is an expert archer with an attitude just as on-target as his aim. His stealth combat experience and his ability to hit any target with any projectile make him a valuable member of the Avengers. However, he refuses to let things get too serious, as he has as many jokes as he does arrows!",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/4/03/5232198a81c17/portrait_uncanny.jpg",
            comics: 0,
            series: 0,
            stories: 0,
            events: 0,
            wiki: "",
          },
          {
            id: 1009524,
            name: "Quicksilver",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/6/f0/53176ffc42f58/portrait_uncanny.jpg",
            comics: 372,
            series: 130,
            stories: 395,
            events: 11,
            wiki: "http://marvel.com/universe/Quicksilver?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009562,
            name: "Scarlet Witch",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b/portrait_uncanny.jpg",
            comics: 544,
            series: 188,
            stories: 614,
            events: 17,
            wiki: "http://marvel.com/universe/Scarlet_Witch_(Wanda_Maximoff)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
        ],
      },
      {
        title: "Original organization: The Mighty Demi-God Squad",
        date: "(1963–2004)",
        note: "",
        characters: [
          {
            id: 1009343,
            name: "Hercules",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/52052ebddfa53/portrait_uncanny.jpg",
            comics: 305,
            series: 110,
            stories: 348,
            events: 12,
            wiki: "http://marvel.com/universe/Hercules_(Heracles)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009187,
            name: "Black Panther",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d/portrait_uncanny.jpg",
            comics: 692,
            series: 234,
            stories: 912,
            events: 17,
            wiki: "http://marvel.com/universe/Black_Panther_(T%27Challa)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009697,
            name: "Vision",
            description:
              "The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594/portrait_uncanny.jpg",
            comics: 556,
            series: 164,
            stories: 632,
            events: 15,
            wiki: "http://marvel.com/universe/Vision_(Victor_Shade)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009343,
            name: "Black Knight (Dane Whitman)",
            description:
              "Nephew of the villainous Black Knight that went by the name of Nathan Garrett, Dane was summoned by his uncle when he was mortally wounded following a battle with Iron Man.",
            thumbnail:
              "https://static.wikia.nocookie.net/marveldatabase/images/c/c5/Dane_Whitman_%28Earth-616%29_from_Avengers_Vol_8_43_001.jpg",
            comics: 82,
            series: 23,
            stories: 84,
            events: 1,
            wiki: "http://marvel.com/universe/Black_Knight_(Dane_Whitman)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
        ],
      },
      {
        title: "Original organization: Spy Avengers",
        date: "(1963–2004)",
        note: "",
        characters: [
          {
            id: 1009189,
            name: "Black Widow/Natasha Romanoff (MAA)",
            description:
              "Natasha Romanoff, also known as Black Widow, is a world-renowned super spy and one of S.H.I.E.L.D.'s top agents. Her hand-to-hand combat skills, intelligence, and unpredictability make her a deadly secret weapon. True to her mysterious nature, Black Widow comes and goes as she pleases, but always appears exactly when her particular skills are needed.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/a/03/523219743a99b/portrait_uncanny.jpg",
            comics: 1,
            series: 1,
            stories: 1,
            events: 0,
            wiki: "http://marvel.com/comics/characters/1017109/black_widownatasha_romanoff_maa?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009641,
            name: "Swordsman",
            description:
              "Andreas reappeared as the Swordsman in the latest incarnation of the Thunderbolts, though his true identity was kept secret for some time.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/a/40/535ff38904fff/portrait_uncanny.jpg",
            comics: 60,
            series: 25,
            stories: 56,
            events: 4,
            wiki: "http://marvel.com/universe/Swordsman_%28Andreas_Strucker%29?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1011026,
            name: "Mantis",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/3/20/52740fa12e826/portrait_uncanny.jpg",
            comics: 52,
            series: 15,
            stories: 58,
            events: 4,
            wiki: "http://marvel.com/universe/Mantis?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009175,
            name: "Beast",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/2/80/511a79a0451a3/portrait_uncanny.jpg",
            comics: 820,
            series: 218,
            stories: 913,
            events: 30,
            wiki: "http://marvel.com/universe/Beast_(Henry_McCoy)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009451,
            name: "Moondragon",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/b/a0/4c003d2ebd6c5/portrait_uncanny.jpg",
            comics: 76,
            series: 29,
            stories: 91,
            events: 4,
            wiki: "http://marvel.com/universe/Moondragon?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1010351,
            name: "Hellcat (Patsy Walker)",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/c/30/4d751d6b1bc7d/portrait_uncanny.jpg",
            comics: 110,
            series: 39,
            stories: 111,
            events: 1,
            wiki: "http://marvel.com/universe/Hellcat_(Patricia_Hellstrom)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1009719,
            name: "Wonder Man",
            description:
              "Simon Williams agreed to undergo an experiment to give him superhuman powers, and Baron Zemo gave him the costumed guise of Wonder Man, warning Simon that he would die without further treatments from Zemo in order to ensure his loyalty, but Simon betrayed Zemo to the Avengers and ultimately joined their ranks.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594/portrait_uncanny.jpg",
            comics: 260,
            series: 92,
            stories: 314,
            events: 8,
            wiki: "http://marvel.com/universe/Wonder_Man_(Simon_Williams)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1010852,
            name: "Two-Gun Kid",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/9/70/4ce5a390b929b/portrait_uncanny.jpg",
            comics: 135,
            series: 7,
            stories: 459,
            events: 0,
            wiki: "http://marvel.com/universe/Two-Gun_Kid?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1010338,
            name: "Captain Marvel (Carol Danvers)",
            description: "",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a/portrait_uncanny.jpg",
            comics: 554,
            series: 189,
            stories: 653,
            events: 16,
            wiki: "http://marvel.com/universe/Ms._Marvel_(Carol_Danvers)?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
          {
            id: 1017575,
            name: "Captain America (Sam Wilson)",
            description:
              "Sam Wilson, a Harlem native, previously operated under the name Falcon, fighting alongside the Avengers. When his longtime friend Steve Rogers stepped down as Captain America, Wilson was hand-picked to fill the role. Now the former Falcon soars through the skies wearing red, white and blue.",
            thumbnail:
              "http://i.annihil.us/u/prod/marvel/i/mg/c/80/545a84a75ddaf/portrait_uncanny.jpg",
            comics: 64,
            series: 27,
            stories: 65,
            events: 2,
            wiki: "http://marvel.com/comics/characters/1017575/captain_america_sam_wilson?utm_campaign=apiRef&utm_source=4a54b2b0755f4c77b0d87ebed043956f",
          },
        ],
      },
    ],
  };

  return data.avengers;
}

function App() {
  return (
    <div className="thepad">
      <div className="App">
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {/* <header className="title">Avengers</header> */}
        <img
          className="headmg"
          src="https://see.fontimg.com/api/renderfont4/zvgl/eyJyIjoiZnMiLCJoIjoxMjYsInciOjIwMDAsImZzIjo2MywiZmdjIjoiI0I4MjkyOSIsImJnYyI6IiNGQ0ZDRkMiLCJ0IjoxfQ/VGhlIEF2ZW5nZXJzIERpcmVjdG9yeQ/avengero-regular.png"
          alt="avengers-font"
          border="0"
        ></img>

        {getData().map((obj, i) => {
          console.log("entered");
          // Return the element. Also pass key
          return <AvengersWrapper avenger={obj} />;
        })}

        {/* <CardGrid cards={getCards()} /> */}
      </div>
    </div>
  );
}

export default App;
