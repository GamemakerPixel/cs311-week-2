const rareWeightMaximum = 1;
const rareEightBallImagePath = "infinitum.png";
const eightBallImagePath = "8ball.png";

const fortunes = [
  {
    "text": "Your fate is indeterminant. What will you make of it?",
    "color": "#c2c2c2",
    "weight": 75,
  },
  {
    "text": "Great fortune awaits you. It will destroy you.",
    "color": "#b9fbc0",
    "weight": 50,
  },
  {
    "text": "Significant misfortune awaits you. Your greatness shall be forged by its flame.",
    "color": "#ffcfd2",
    "weight": 50,
  },
  {
    "text": "You shall find the keys to the universe in the brightest of shadows.",
    "color": "#8eecf5",
    "weight": 27,
  },
  {
    "text": "You shall find only destruction hidden amongst the light.",
    "color": "#f1c0e8",
    "weight": 27,
  },
  {
    "text": "You seek chaos. Perhaps it will be to your benefit, perhaps not.",
    "color": "#cfbaf0",
    "weight": 16,
  },
  {
    "text": "You shall witness the divine.",
    "color": "#fbf8cc",
    "weight": 4,
  },
  {
    "text": "You have overcome fate itself.",
    "color": "#ff0000",
    "weight": 1,
  },
];

const fortuneWeightAllocations = calculateFortuneWeightAllocations(fortunes);

const fortuneText = document.getElementById("fortune");
const eightBallImage = document.getElementById("8ball");


function calculateFortuneWeightAllocations(fortunes) {
  let allocations = [0];

  for (let i = 0; i < fortunes.length; i++) {
    let weight = fortunes[i].weight;
    allocations.push(allocations[i] + weight)
  }

  return allocations;
}

function onFortuneRolled() {
  let fortune = chooseFortune();

  fortuneText.style.color = fortune.color;
  fortuneText.innerHTML = fortune.text;
  
  if (fortune.weight > rareWeightMaximum) {
    eightBallImage.src = eightBallImagePath;
  }
  else {
    eightBallImage.src = rareEightBallImagePath;
  }
}

function chooseFortune() {
  let weightLimit = fortuneWeightAllocations[fortuneWeightAllocations.length - 1];
  let numberSelected = Math.floor(Math.random() * weightLimit);

  for (let i = 1; i < fortuneWeightAllocations.length; i++){
    if (numberSelected < fortuneWeightAllocations[i]) {
      return fortunes[i - 1];
    }
  }
}
