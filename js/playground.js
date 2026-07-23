(() => {
  const canvas = document.getElementById("doodle");
  const stage = document.getElementById("playground");
  const clearBtn = document.getElementById("clear-doodle");
  if (!canvas || !stage) return;

  const ctx = canvas.getContext("2d");
  let drawing = false;
  let last = null;

  const resize = () => {
    const rect = stage.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(rect.width * ratio);
    canvas.height = Math.floor(rect.height * ratio);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1a1a1a";
    ctx.lineWidth = 3;
  };

  const pos = (event) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const start = (event) => {
    drawing = true;
    stage.classList.add("is-drawing");
    last = pos(event);
  };

  const move = (event) => {
    if (!drawing) return;
    const point = pos(event);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();
    last = point;
  };

  const end = () => {
    drawing = false;
    last = null;
  };

  canvas.addEventListener("pointerdown", start);
  canvas.addEventListener("pointermove", move);
  window.addEventListener("pointerup", end);
  window.addEventListener("resize", resize);
  clearBtn?.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stage.classList.remove("is-drawing");
    resize();
  });

  resize();
})();
