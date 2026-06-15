const characters = [
  {
    name: "Generation Z Indian Boy",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
    desc: "A small-town boy fighting between distraction and discipline."
  },
  {
    name: "Generation Z Indian Girl",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    desc: "A fearless dreamer choosing confidence over doubt."
  },
  {
    name: "College Student",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    desc: "A student deciding between comfort and career."
  },
  {
    name: "Struggling Teacher",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",
    desc: "A teacher rising through digital learning and courage."
  },
  {
    name: "Young Professional",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    desc: "A worker facing office pressure and competition."
  },
  {
    name: "Unemployed Graduate",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    desc: "A graduate choosing between excuses and skill-building."
  },
  {
    name: "Small Town Dreamer",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    desc: "A dreamer from a small city aiming for a big future."
  },
  {
    name: "Startup Founder",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    desc: "A founder learning that ideas need execution."
  },
  {
    name: "Intern",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    desc: "An intern proving that learning daily creates identity."
  },
  {
    name: "Government Job Aspirant",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    desc: "An aspirant choosing discipline over frustration."
  },
  {
    name: "Content Creator",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80",
    desc: "A creator choosing value over viral shortcuts."
  },
  {
    name: "Ordinary Person with Extraordinary Dreams",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    desc: "An ordinary life transformed by extraordinary effort."
  }
];

const scenes = [
  {
    title: "Scene 1: The First Decision",
    text: "The character stands at the beginning of life. Friends are scrolling reels. The world is moving fast. One voice says, 'Relax, life will manage itself.' Another voice says, 'Start learning before life tests you.'"
  },
  {
    title: "Scene 2: Education and Skills",
    text: "Exams are near. New skills are available online. The choice is clear: waste time and complain about the system, or learn, practice, and become useful."
  },
  {
    title: "Scene 3: Failure Arrives",
    text: "A rejection, a failed exam, or a lost opportunity hits hard. The weak mindset blames luck. The Phoenix mindset studies the mistake and prepares stronger."
  },
  {
    title: "Scene 4: Career Pressure",
    text: "Competition becomes serious. Others are building portfolios, improving communication, and taking internships. The character must decide whether to hide or rise."
  },
  {
    title: "Scene 5: Money and Responsibility",
    text: "Family expectations increase. Money becomes important. The character can stay dependent and frustrated, or become responsible and create value."
  },
  {
    title: "Scene 6: Final Transformation",
    text: "Years pass. The result of every small decision becomes visible. The character now faces the final mirror of life."
  }
];

let currentCharacter = "";
let currentScene = 0;
let phoenixScore = 0;
let roachScore = 0;

const storyGrid = document.getElementById("storyGrid");

characters.forEach((char, index) => {
  const card = document.createElement("div");
  card.className = "story-card";
  card.innerHTML = `
    <img src="${char.image}" alt="${char.name}">
    <h3>${char.name}</h3>
    <p>${char.desc}</p>
  `;
  card.onclick = () => startStory(index);
  storyGrid.appendChild(card);
});

function startStory(index) {
  currentCharacter = characters[index].name;
  currentScene = 0;
  phoenixScore = 0;
  roachScore = 0;

  document.querySelector(".hero").classList.add("hidden");
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector(".stories").classList.add("hidden");
  document.getElementById("endingSection").classList.add("hidden");
  document.getElementById("gameSection").classList.remove("hidden");

  showScene();
}

function showScene() {
  document.getElementById("characterName").innerText = currentCharacter;
  document.getElementById("sceneCount").innerText = `Scene ${currentScene + 1} of ${scenes.length}`;
  document.getElementById("sceneTitle").innerText = scenes[currentScene].title;
  document.getElementById("sceneText").innerText = scenes[currentScene].text;
}

function chooseMindset(type) {
  if (type === "roach") {
    roachScore++;
  } else {
    phoenixScore++;
  }

  currentScene++;

  if (currentScene >= scenes.length) {
    showEnding();
  } else {
    showScene();
  }
}

function showEnding() {
  document.getElementById("gameSection").classList.add("hidden");
  document.getElementById("endingSection").classList.remove("hidden");

  const endingBox = document.getElementById("endingBox");

  if (roachScore > phoenixScore) {
    endingBox.className = "bad-ending";
    endingBox.innerHTML = `
      <h2>🪳 The Downfall Ending</h2>
      <p>
        ${currentCharacter} kept waiting for life to become easy.
        Opportunities came, but laziness wasted them. Skills were ignored.
        Complaints became stronger than action. Friends moved ahead.
        Family lost hope. Confidence became frustration.
      </p>
      <p>
        In the final scene, the character sits alone, realizing that life was not destroyed in one day.
        It was destroyed by repeated weak choices.
      </p>
      <p><strong>Message:</strong> A Cockroach Mindset does not fail because the world is cruel. It fails because it refuses to improve.</p>
    `;
  } else {
    endingBox.className = "good-ending";
    endingBox.innerHTML = `
      <h2>🔥 The Phoenix Ending</h2>
      <p>
        ${currentCharacter} faced pressure, failure, rejection, and competition.
        But every fall became training. Every insult became fuel.
        Every day added one new skill, one new habit, one new level of confidence.
      </p>
      <p>
        Years later, the character becomes successful, respected, financially stronger,
        and known as someone who rose from ordinary life through discipline and courage.
      </p>
      <p><strong>Message:</strong> A Phoenix Mindset does not wait for perfect conditions. It rises, learns, builds, and wins.</p>
    `;
  }
}

function goHome() {
  document.querySelector(".hero").classList.remove("hidden");
  document.querySelector(".intro").classList.remove("hidden");
  document.querySelector(".stories").classList.remove("hidden");
  document.getElementById("gameSection").classList.add("hidden");
  document.getElementById("endingSection").classList.add("hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}
