(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const letterSets = {
    a: ["01", "02", "03", "04", "05", "06", "07", "08"],
    n: ["09", "10", "11", "12", "13", "14", "15", "16"],
    f: ["33", "34", "36", "37", "38", "39", "40"],
    p: ["17", "19", "20", "21", "22", "23", "24"],
    h: ["25", "26", "27", "28", "29", "30", "31", "32"],
    m: ["41", "42", "43", "44", "45", "46", "47", "48"],
  };

  const scrapSrc = (letter, id) =>
    `assets/name-scraps/letters_${letter}-${id}.png`;

  const initLetterFlash = () => {
    if (reduceMotion) return;

    const letters = [...document.querySelectorAll(".scrap-name img[data-letter]")];
    if (!letters.length) return;

    Object.entries(letterSets).forEach(([letter, ids]) => {
      ids.forEach((id) => {
        const img = new Image();
        img.src = scrapSrc(letter, id);
      });
    });

    const slots = letters.map((el) => {
      const letter = el.dataset.letter;
      const variants = letterSets[letter];
      if (!variants?.length) return null;

      const slot = {
        el,
        letter,
        variants,
        i: Math.floor(Math.random() * variants.length),
        paused: false,
      };

      el.addEventListener("pointerenter", () => {
        slot.paused = true;
      });
      el.addEventListener("pointerleave", () => {
        slot.paused = false;
      });
      el.addEventListener("focus", () => {
        slot.paused = true;
      });
      el.addEventListener("blur", () => {
        slot.paused = false;
      });

      return slot;
    }).filter(Boolean);

    const swapAll = () => {
      slots.forEach((slot) => {
        if (slot.paused) return;
        let next = Math.floor(Math.random() * slot.variants.length);
        if (slot.variants.length > 1 && next === slot.i) {
          next = (next + 1) % slot.variants.length;
        }
        slot.i = next;
        slot.el.src = scrapSrc(slot.letter, slot.variants[slot.i]);
        slot.el.classList.remove("is-flashing");
        void slot.el.offsetWidth;
        slot.el.classList.add("is-flashing");
      });
    };

    window.setInterval(swapAll, 1000);
  };

  const initParallax = () => {
    if (reduceMotion) return;

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const props = [...hero.querySelectorAll(".prop")];
    let raf = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (event) => {
      if (document.body.classList.contains("is-arranging")) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x;
      targetY = y;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      props.forEach((prop) => {
        const depth = Number(prop.dataset.depth || 0.05);
        prop.style.setProperty("--tx", `${targetX * depth * -120}px`);
        prop.style.setProperty("--ty", `${targetY * depth * -80}px`);
      });
      raf = 0;
    };

    hero.addEventListener("pointermove", onMove);
  };

  initLetterFlash();
  initParallax();
})();
