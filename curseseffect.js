function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Get the image element by its ID
const qrImage = document.getElementById('qr');


async function startFlashLoop() {
  while (true) {
    bsod.style.background = "#000000";
    bsod.style.color = "#ffffff";
    qrImage.src = 'https://raw.githubusercontent.com/pcdelatara/pcdelatara.github.io/refs/heads/main/qr.png';
    await sleep(1000);
    bsod.style.background = "#ffffff";
    bsod.style.color = "#000000";
    qrImage.src = 'https://raw.githubusercontent.com/gensod/unsafemode-scripts/refs/heads/main/src/10Hi.png';
    await sleep(1000);
  }
}

// Call this to start the flashing loop
startFlashLoop();
