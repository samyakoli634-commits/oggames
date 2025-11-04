// Fun Facts Rotator
const facts = [
    "Snake became iconic with Nokia phones in the 1990s.",
    "Tetris was created by a Russian programmer in 1984.",
    "Flappy Bird was made in just a few days by a single dev.",
    "The Chrome Dino game appears when you lose internet.",
    "Pong (1972) is one of the first arcade video games.",
    "Mario has appeared in over 200 games!",
  ];
  
  let factIndex = 0;
  const factList = document.getElementById("funfacts");
  
  function showFact() {
    factList.innerHTML = `<li>${facts[factIndex]}</li>`;
    factIndex = (factIndex + 1) % facts.length;
  }
  setInterval(showFact, 4000);
  showFact();
  