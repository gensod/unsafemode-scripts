// Dynamically load the brainrotRain.js script
const script = document.createElement('script');
script.src = "https://pcdelatara.github.io/brainrotRain.js/brainrotRain.js";
script.onload = () => {
  // Once the script is loaded, set the interval and start the rain
  if (typeof br !== 'undefined') {
    br.interval(1); // Set interval to 1 ms
    br.start();     // Start the rain
  } else {
    console.error("brainrotRain library did not load properly.");
  }
};
script.onerror = () => {
  console.error("Failed to load brainrotRain.js");
};
document.head.appendChild(script);
