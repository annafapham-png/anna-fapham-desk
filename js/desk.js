(() => {
  const STORAGE_KEY = "anna-desk-layout-v1";

  const ITEMS = [
    { id: "IMG-2033-a", src: "assets/desk/cutouts/IMG-2033-a.png" },
    { id: "IMG-2033-b", src: "assets/desk/cutouts/IMG-2033-b.png" },
    { id: "IMG-2033-c", src: "assets/desk/cutouts/IMG-2033-c.png" },
    { id: "IMG-2033-d", src: "assets/desk/cutouts/IMG-2033-d.png" },
    { id: "IMG-2034-a", src: "assets/desk/cutouts/IMG-2034-a.png" },
    { id: "IMG-2034-b", src: "assets/desk/cutouts/IMG-2034-b.png" },
    { id: "IMG-2034-c", src: "assets/desk/cutouts/IMG-2034-c.png" },
    { id: "IMG-2034-d", src: "assets/desk/cutouts/IMG-2034-d.png" },
    { id: "IMG-2035-a", src: "assets/desk/cutouts/IMG-2035-a.png" },
    { id: "IMG-2035-b", src: "assets/desk/cutouts/IMG-2035-b.png" },
    { id: "IMG-2036-a", src: "assets/desk/cutouts/IMG-2036-a.png" },
    { id: "IMG-2036-b", src: "assets/desk/cutouts/IMG-2036-b.png" },
    { id: "IMG-2036-c", src: "assets/desk/cutouts/IMG-2036-c.png" },
    { id: "IMG-2036-d", src: "assets/desk/cutouts/IMG-2036-d.png" },
    { id: "IMG-2037-a", src: "assets/desk/cutouts/IMG-2037-a.png" },
    { id: "IMG-2037-b", src: "assets/desk/cutouts/IMG-2037-b.png" },
    { id: "IMG-2038-a", src: "assets/desk/cutouts/IMG-2038-a.png" },
    { id: "IMG-2039-a", src: "assets/desk/cutouts/IMG-2039-a.png" },
    { id: "IMG-2039-b", src: "assets/desk/cutouts/IMG-2039-b.png" },
    { id: "IMG-2039-c", src: "assets/desk/cutouts/IMG-2039-c.png" },
    { id: "IMG-2040-a", src: "assets/desk/cutouts/IMG-2040-a.png" },
    { id: "IMG-2040-b", src: "assets/desk/cutouts/IMG-2040-b.png" },
    { id: "IMG-2041-a", src: "assets/desk/cutouts/IMG-2041-a.png" },
    { id: "IMG-2042-a", src: "assets/desk/cutouts/IMG-2042-a.png" },
    { id: "IMG-2043-a", src: "assets/desk/cutouts/IMG-2043-a.png" },
    { id: "IMG-2044-a", src: "assets/desk/cutouts/IMG-2044-a.png" },
    { id: "IMG-2044-b", src: "assets/desk/cutouts/IMG-2044-b.png" },
    { id: "IMG-2044-c", src: "assets/desk/cutouts/IMG-2044-c.png" },
    { id: "IMG-2045-a", src: "assets/desk/cutouts/IMG-2045-a.png" },
    { id: "IMG-2045-b", src: "assets/desk/cutouts/IMG-2045-b.png" },
    { id: "IMG-2046-a", src: "assets/desk/cutouts/IMG-2046-a.png" },
    { id: "IMG-2047-a", src: "assets/desk/cutouts/IMG-2047-a.png" },
    { id: "IMG-2048-a", src: "assets/desk/cutouts/IMG-2048-a.png" },
    { id: "IMG-2049-a", src: "assets/desk/cutouts/IMG-2049-a.png" },
    { id: "IMG-2049-b", src: "assets/desk/cutouts/IMG-2049-b.png" },
    { id: "IMG-2050-a", src: "assets/desk/cutouts/IMG-2050-a.png" },
    { id: "IMG-2051-a", src: "assets/desk/cutouts/IMG-2051-a.png" },
    { id: "IMG-2051-b", src: "assets/desk/cutouts/IMG-2051-b.png" },
    { id: "IMG-2052-a", src: "assets/desk/cutouts/IMG-2052-a.png" },
    { id: "IMG-2053-a", src: "assets/desk/cutouts/IMG-2053-a.png" },
    { id: "IMG-2054-a", src: "assets/desk/cutouts/IMG-2054-a.png" },
    { id: "IMG-2055-a", src: "assets/desk/cutouts/IMG-2055-a.png" },
    { id: "IMG-2056-a", src: "assets/desk/cutouts/IMG-2056-a.png" },
    { id: "IMG-2057-a", src: "assets/desk/cutouts/IMG-2057-a.png" },
    { id: "IMG-2058-a", src: "assets/desk/cutouts/IMG-2058-a.png" },
  ];

  const DEFAULT_LAYOUT = {
    "IMG-2033-a": { x: 84.74, y: 5.29, w: 2.4, rot: -58, z: 66 },
    "IMG-2033-c": { x: 4.47, y: 12.85, w: 15.66, rot: 106, z: 149 },
    "IMG-2034-c": { x: 67.86, y: 12.55, w: 28.13, rot: 211, z: 173 },
    "IMG-2035-a": { x: 4.03, y: 66.6, w: 3.29, rot: -8, z: 81 },
    "IMG-2035-b": { x: 8.35, y: 62.86, w: 3.65, rot: 3, z: 80 },
    "IMG-2037-b": { x: 91.29, y: 54.37, w: 4.95, rot: -219, z: 157 },
    "IMG-2038-a": { x: 7.85, y: 30.92, w: 10.12, rot: -156, z: 145 },
    "IMG-2039-a": { x: 70.74, y: -17.55, w: 25.63, rot: -200, z: 176 },
    "IMG-2040-a": { x: 3.17, y: 49.16, w: 10.45, rot: 93, z: 144 },
    "IMG-2040-b": { x: 88.22, y: 1.55, w: 10.1, rot: -166, z: 169 },
    "IMG-2044-a": { x: 0.61, y: 33.61, w: 8.33, rot: -14, z: 146 },
    "IMG-2044-b": { x: 88.62, y: 41.25, w: 10.49, rot: 107, z: 159 },
    "IMG-2045-a": { x: 0.73, y: 69.96, w: 10.15, rot: 49, z: 137 },
    "IMG-2049-b": { x: 3.26, y: 58.51, w: 3.15, rot: 88, z: 143 },
    "IMG-2051-a": { x: 85.45, y: 61.24, w: 17.21, rot: -8, z: 153 },
  };

  const hero = document.querySelector(".hero");
  const layer = document.querySelector(".desk");
  const tray = document.querySelector(".desk-tray__items");
  const toggle = document.querySelector(".desk-toggle");
  const resetBtn = document.querySelector(".desk-reset");
  const trayToggle = document.querySelector(".desk-tray-toggle");
  if (!hero || !layer || !tray || !toggle) return;

  const byId = Object.fromEntries(ITEMS.map((item) => [item.id, item]));
  let layout = loadLayout();
  let arranging = new URLSearchParams(location.search).has("arrange");
  let trayHidden = false;
  let selectedId = null;
  let zMax = 8;
  let drag = null;

  function loadLayout() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") return parsed;
      }
    } catch {
      /* keep default */
    }
    return { ...DEFAULT_LAYOUT };
  }

  function saveLayout() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(layout));
  }

  function applyItem(el, pos) {
    el.style.left = `${pos.x}%`;
    el.style.top = `${pos.y}%`;
    el.style.width = `${pos.w}%`;
    el.style.zIndex = String(pos.z || 3);
    el.style.setProperty("--rot", `${pos.rot || 0}deg`);
  }

  function placeOnMat(id, pos) {
    let el = layer.querySelector(`[data-desk-id="${id}"]`);
    if (!el) {
      const item = byId[id];
      if (!item) return;
      el = document.createElement("div");
      el.className = "desk-item prop";
      el.dataset.deskId = id;
      el.dataset.depth = "0.05";
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      img.draggable = false;
      el.appendChild(img);
      layer.appendChild(el);
    }
    applyItem(el, pos);
    return el;
  }

  function render() {
    layer.replaceChildren();
    tray.replaceChildren();
    zMax = 8;

    ITEMS.forEach((item) => {
      const pos = layout[item.id];
      if (pos) {
        zMax = Math.max(zMax, pos.z || 1);
        placeOnMat(item.id, pos);
        return;
      }

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "desk-tray__item";
      btn.dataset.deskId = item.id;
      btn.title = "Add to mat";
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = "";
      btn.appendChild(img);
      tray.appendChild(btn);
    });

    setSelected(selectedId && layout[selectedId] ? selectedId : null);
  }

  function setSelected(id) {
    selectedId = id;
    layer.querySelectorAll(".desk-item").forEach((el) => {
      el.classList.toggle("is-selected", el.dataset.deskId === id);
    });
  }

  function bringToFront(id) {
    zMax += 1;
    layout[id].z = zMax;
    const el = layer.querySelector(`[data-desk-id="${id}"]`);
    if (el) el.style.zIndex = String(zMax);
  }

  function setArranging(on) {
    arranging = on;
    document.body.classList.toggle("is-arranging", on);
    toggle.textContent = on ? "Done arranging" : "Arrange objects";
    toggle.setAttribute("aria-pressed", on ? "true" : "false");
    if (!on) {
      setSelected(null);
      setTrayHidden(false);
    }
  }

  function setTrayHidden(hidden) {
    trayHidden = hidden;
    document.body.classList.toggle("is-tray-hidden", hidden);
    if (trayToggle) {
      trayToggle.textContent = hidden ? "Show bar" : "Hide bar";
      trayToggle.setAttribute("aria-pressed", hidden ? "true" : "false");
    }
  }

  function addFromTray(id) {
    if (layout[id]) return;
    layout[id] = {
      x: 38 + Math.random() * 12,
      y: 30 + Math.random() * 12,
      w: 10,
      rot: Math.round((Math.random() - 0.5) * 24),
      z: ++zMax,
    };
    saveLayout();
    render();
    setSelected(id);
  }

  function returnToTray(id) {
    delete layout[id];
    saveLayout();
    selectedId = selectedId === id ? null : selectedId;
    render();
  }

  toggle.addEventListener("click", () => setArranging(!arranging));
  if (trayToggle) {
    trayToggle.addEventListener("click", () => setTrayHidden(!trayHidden));
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      layout = { ...DEFAULT_LAYOUT };
      saveLayout();
      render();
    });
  }

  tray.addEventListener("click", (event) => {
    if (!arranging) return;
    const btn = event.target.closest("[data-desk-id]");
    if (!btn) return;
    addFromTray(btn.dataset.deskId);
  });

  layer.addEventListener("pointerdown", (event) => {
    if (!arranging) return;
    const el = event.target.closest(".desk-item");
    if (!el) {
      setSelected(null);
      return;
    }

    const id = el.dataset.deskId;
    const pos = layout[id];
    if (!pos) return;

    setSelected(id);
    bringToFront(id);
    const rect = hero.getBoundingClientRect();
    drag = {
      id,
      pointerId: event.pointerId,
      dx: (event.clientX - rect.left) / rect.width * 100 - pos.x,
      dy: (event.clientY - rect.top) / rect.height * 100 - pos.y,
    };
    el.classList.add("is-dragging");
    el.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  layer.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const rect = hero.getBoundingClientRect();
    const pos = layout[drag.id];
    pos.x = (event.clientX - rect.left) / rect.width * 100 - drag.dx;
    pos.y = (event.clientY - rect.top) / rect.height * 100 - drag.dy;
    const el = layer.querySelector(`[data-desk-id="${drag.id}"]`);
    if (el) applyItem(el, pos);
  });

  const endDrag = (event) => {
    if (!drag || event.pointerId !== drag.pointerId) return;
    const el = layer.querySelector(`[data-desk-id="${drag.id}"]`);
    if (el) el.classList.remove("is-dragging");
    drag = null;
    saveLayout();
  };

  layer.addEventListener("pointerup", endDrag);
  layer.addEventListener("pointercancel", endDrag);

  hero.addEventListener(
    "wheel",
    (event) => {
      if (!arranging || !selectedId || !layout[selectedId]) return;
      event.preventDefault();
      const pos = layout[selectedId];
      if (event.altKey) {
        pos.rot = Math.round((pos.rot || 0) + event.deltaY * 0.08);
      } else {
        const next = pos.w * (event.deltaY > 0 ? 0.94 : 1.06);
        pos.w = Math.min(42, Math.max(2, next));
      }
      const el = layer.querySelector(`[data-desk-id="${selectedId}"]`);
      if (el) applyItem(el, pos);
      saveLayout();
    },
    { passive: false }
  );

  window.addEventListener("keydown", (event) => {
    if (!arranging) return;
    if (event.key === "Escape") {
      setSelected(null);
      return;
    }
    if (!selectedId || !layout[selectedId]) return;
    if (event.key === "Delete" || event.key === "Backspace") {
      event.preventDefault();
      returnToTray(selectedId);
      return;
    }

    const step = event.shiftKey ? 2 : 0.6;
    const pos = layout[selectedId];
    if (event.key === "ArrowLeft") pos.x -= step;
    else if (event.key === "ArrowRight") pos.x += step;
    else if (event.key === "ArrowUp") pos.y -= step;
    else if (event.key === "ArrowDown") pos.y += step;
    else return;

    event.preventDefault();
    const el = layer.querySelector(`[data-desk-id="${selectedId}"]`);
    if (el) applyItem(el, pos);
    saveLayout();
  });

  render();
  setArranging(arranging);
})();
