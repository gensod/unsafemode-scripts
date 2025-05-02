// HTML element with id "bsod" assumed
const bsod = document.getElementById("bsod");

// Array of color hex codes to cycle through
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6",
  "#1ABC9C", "#E74C3C", "#2ECC71", "#3498DB", "#E67E22",
  "#34495E", "#16A085", "#27AE60", "#2980B9", "#8E44AD",
  "#D35400", "#C0392B", "#BDC3C7", "#7F8C8D", "#2C3E50",
  "#FF33A1", "#33FFF6", "#FF8C33", "#A6FF33", "#8033FF",
  "#FF3333", "#33FF8A", "#337BFF", "#FFBB33", "#33D4FF"
];


// Delay function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to change background colors with delay
async function cycleColors() {
  for (const color of colors) {
    bsod.style.background = color;
    await sleep(500); // 500ms delay between colors
  }
  setRainbowGradient(); // Call this after all colors
}

// Start the color cycle
cycleColors();
