function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function startFlashLoop() {
  while (true) {
    bsod.style.background = "#000000";
    bsod.style.color = "#ffffff";
    await sleep(1000);
    bsod.style.background = "#ffffff";
    bsod.style.color = "#000000";
    await sleep(1000);
  }
}

// Call this to start the flashing loop
startFlashLoop();
