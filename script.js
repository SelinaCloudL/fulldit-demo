(() => {
  "use strict";

  const audios = Array.from(document.querySelectorAll("audio"));

  audios.forEach((audio) => {
    const card = audio.closest(".comparison-card");

    audio.addEventListener("play", () => {
      audios.forEach((other) => {
        if (other !== audio && !other.paused) other.pause();
      });

      document.querySelectorAll(".is-playing").forEach((element) => element.classList.remove("is-playing"));
      if (card) card.classList.add("is-playing");
    });

    const clearPlayingState = () => {
      if (card) card.classList.remove("is-playing");
    };
    audio.addEventListener("pause", clearPlayingState);
    audio.addEventListener("ended", clearPlayingState);
  });
})();
