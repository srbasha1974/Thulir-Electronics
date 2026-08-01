/* Thulir Bench Quest — interactive bench simulations
   Game-object style widgets: click the meter, click the dial, run the test.
*/
(function () {
  "use strict";

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function hook(name) {
    return window.THULIR_HOOKS && typeof window.THULIR_HOOKS[name] === "function" ? window.THULIR_HOOKS[name] : null;
  }

  // ============================================================ MULTIMETER
  var METER_MODES = [
    { id: "off", label: "OFF" },
    { id: "ohms", label: "Ω" },
    { id: "volts", label: "V" },
    { id: "diode", label: "◆))" }
  ];
  var MODE_ANGLE = { off: -120, ohms: -40, volts: 40, diode: 120 };

  var MM_SCENARIOS = {
    resistor: {
      title: "Resistor · 470Ω ±5%",
      correctMode: "ohms",
      goodReading: "468Ω",
      goodExplain: "468Ω is well within tolerance of the marked 470Ω — this resistor is good.",
      faultReading: "OL",
      faultExplain: "OL (open) means the resistor element has cracked or burnt out internally — faulty, replace it.",
      hints: {
        off: "Turn the dial to a setting first.",
        volts: "A resistor on the bench has no power across it — Voltage mode has nothing to read. Switch to Ω.",
        diode: "Diode/Continuity mode is for junctions and fuses, not for reading a resistor's value. Switch to Ω."
      },
      component: function (revealed) {
        return (
          '<svg viewBox="0 0 220 100" width="100%" height="100%">' +
            '<line x1="10" y1="50" x2="60" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<line x1="160" y1="50" x2="210" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<rect x="58" y="30" width="104" height="40" rx="10" fill="#e8d9b0" stroke="#b89f6d" stroke-width="2"/>' +
            '<rect x="80" y="30" width="10" height="40" fill="#f4c430"/>' +
            '<rect x="98" y="30" width="10" height="40" fill="#8b5cf6"/>' +
            '<rect x="116" y="30" width="10" height="40" fill="#8b5a2b"/>' +
            '<rect x="140" y="30" width="10" height="40" fill="#d4af37"/>' +
            '<circle cx="12" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
            '<circle cx="208" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
          '</svg>'
        );
      }
    },
    diode: {
      title: "1N4007 rectifier diode",
      correctMode: "diode",
      goodReading: "0.612V",
      goodExplain: "About 0.6V forward drop is exactly what a healthy silicon diode should read — this one's good.",
      faultReading: "OL",
      faultExplain: "OL both ways (or a dead short) means the junction has failed — this diode is faulty, replace it.",
      hints: {
        off: "Turn the dial to a setting first.",
        ohms: "Ohms mode can't tell which way current flows through a junction — you need Diode mode.",
        volts: "There's no power source here for a voltmeter to read. Switch to Diode mode."
      },
      component: function (revealed) {
        return (
          '<svg viewBox="0 0 220 100" width="100%" height="100%">' +
            '<line x1="10" y1="50" x2="70" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<line x1="150" y1="50" x2="210" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<rect x="70" y="32" width="80" height="36" rx="6" fill="#2a2f45" stroke="#555c85" stroke-width="2"/>' +
            '<rect x="140" y="32" width="10" height="36" fill="#e8e8f0"/>' +
            '<text x="110" y="55" text-anchor="middle" font-size="11" fill="#c7cbe6" font-family="monospace">1N4007</text>' +
            '<circle cx="12" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
            '<circle cx="208" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
          '</svg>'
        );
      }
    },
    fuse: {
      title: "5A glass cartridge fuse",
      correctMode: "diode",
      goodReading: "🔊 0.4Ω",
      goodExplain: "A confident beep and near-0Ω means the fuse wire is intact — this fuse is good.",
      faultReading: "OL",
      faultExplain: "OL (no beep, open) means the wire inside has melted — this fuse is blown. Replace with the same rating.",
      hints: {
        off: "Turn the dial to a setting first.",
        ohms: "Ohms can technically work, but on the bench you'd reach for Diode/Continuity mode first — it beeps instantly instead of making you read a number.",
        volts: "A fuse isn't powered on the bench — there's no voltage to read here."
      },
      component: function (revealed) {
        return (
          '<svg viewBox="0 0 220 100" width="100%" height="100%">' +
            '<line x1="10" y1="50" x2="55" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<line x1="165" y1="50" x2="210" y2="50" stroke="#8a8fb0" stroke-width="3"/>' +
            '<rect x="55" y="28" width="18" height="44" fill="#c9c9d4" stroke="#8a8fb0" stroke-width="1.5"/>' +
            '<rect x="147" y="28" width="18" height="44" fill="#c9c9d4" stroke="#8a8fb0" stroke-width="1.5"/>' +
            '<rect x="73" y="34" width="74" height="32" fill="#dfeaf5" stroke="#9db3c9" stroke-width="1.5" opacity="0.85"/>' +
            '<polyline points="76,50 92,42 108,58 124,42 140,50" fill="none" stroke="#a0824a" stroke-width="2"/>' +
            '<circle cx="12" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
            '<circle cx="208" cy="50" r="6" fill="' + (revealed ? "#4ade80" : "#3a4066") + '"/>' +
          '</svg>'
        );
      }
    }
  };

  function meterSvg(mode, readingText) {
    var angle = MODE_ANGLE[mode] || MODE_ANGLE.off;
    return (
      '<svg viewBox="0 0 200 230" width="100%" height="100%">' +
        '<rect x="10" y="10" width="180" height="210" rx="18" fill="#2b2f4a" stroke="#161829" stroke-width="3"/>' +
        '<rect x="28" y="28" width="144" height="54" rx="6" fill="#c9ecd0" stroke="#0c2b13" stroke-width="2"/>' +
        '<text x="100" y="64" text-anchor="middle" font-size="26" font-family="monospace" fill="#0c2b13" font-weight="700">' + esc(readingText) + '</text>' +
        '<circle cx="100" cy="140" r="46" fill="#1b1e35" stroke="#0c0e1c" stroke-width="3"/>' +
        '<g transform="rotate(' + angle + ' 100 140)"><line x1="100" y1="140" x2="100" y2="102" stroke="#ff5b6e" stroke-width="4" stroke-linecap="round"/></g>' +
        '<circle cx="100" cy="140" r="6" fill="#c9cbe6"/>' +
        '<text x="100" y="100" text-anchor="middle" font-size="10" fill="#9aa1c4">OFF</text>' +
        '<text x="152" y="150" text-anchor="middle" font-size="11" fill="#9aa1c4">Ω</text>' +
        '<text x="100" y="196" text-anchor="middle" font-size="11" fill="#9aa1c4">V</text>' +
        '<text x="48" y="150" text-anchor="middle" font-size="10" fill="#9aa1c4">◆))</text>' +
        '<line x1="30" y1="200" x2="10" y2="222" stroke="#ff5b6e" stroke-width="4" stroke-linecap="round"/>' +
        '<line x1="170" y1="200" x2="190" y2="222" stroke="#232634" stroke-width="4" stroke-linecap="round"/>' +
      '</svg>'
    );
  }

  function mmTemplate(scenario, s) {
    var reading = "– – – –";
    if (s.revealed) reading = s.truthIsGood ? scenario.goodReading : scenario.faultReading;

    var modeButtons = METER_MODES.map(function (m) {
      return '<button class="sim-mode-btn' + (s.mode === m.id ? " active" : "") + '" data-mode="' + m.id + '">' + m.label + '</button>';
    }).join("");

    var hint = "";
    if (s.lastHint) hint = '<div class="sim-hint">💡 ' + esc(s.lastHint) + '</div>';

    var verdictSection = "";
    if (s.revealed && !s.verdict) {
      verdictSection = (
        '<div class="sim-verdict-row">' +
          '<span class="sim-prompt">Your call — is it good or faulty?</span>' +
          '<div class="sim-verdict-btns">' +
            '<button class="sim-verdict-btn good" data-verdict="good">✓ Good</button>' +
            '<button class="sim-verdict-btn bad" data-verdict="faulty">✕ Faulty</button>' +
          '</div>' +
        '</div>'
      );
    }

    var feedback = "";
    if (s.verdict) {
      var correct = s.verdict === (s.truthIsGood ? "good" : "faulty");
      var explain = s.truthIsGood ? scenario.goodExplain : scenario.faultExplain;
      feedback = (
        '<div class="sim-feedback ' + (correct ? "ok" : "no") + '">' +
          '<b>' + (correct ? "✅ Correct!" : "❌ Not quite.") + '</b> ' + esc(explain) +
        '</div>' +
        '<button class="sim-retry-btn">🔁 Try Another Scenario</button>'
      );
    }

    return (
      '<div class="sim-widget">' +
        '<div class="sim-widget-title">🔧 Bench Simulation — ' + esc(scenario.title) + '</div>' +
        '<div class="sim-stage">' +
          '<div class="sim-meter">' + meterSvg(s.mode, reading) + '</div>' +
          '<div class="sim-component">' + scenario._componentFn(s.revealed) + '</div>' +
        '</div>' +
        '<div class="sim-controls">' +
          '<div class="sim-dial-row"><span class="sim-label">1. Set the dial</span><div class="sim-mode-row">' + modeButtons + '</div></div>' +
          '<div class="sim-probe-row"><span class="sim-label">2. Touch the probes</span><button class="sim-probe-btn">⚡ Touch Probes to Component</button></div>' +
        '</div>' +
        hint +
        verdictSection +
        feedback +
      '</div>'
    );
  }

  function mountMultimeter(el, scenarioKey) {
    var base = MM_SCENARIOS[scenarioKey] || MM_SCENARIOS.resistor;
    var scenario = Object.assign({}, base, { _componentFn: base.component });
    var s = { mode: "off", revealed: false, lastHint: null, truthIsGood: Math.random() < 0.5, verdict: null };

    function paint() {
      el.innerHTML = mmTemplate(scenario, s);
      wire();
    }

    function wire() {
      el.querySelectorAll(".sim-mode-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          s.mode = btn.getAttribute("data-mode");
          s.lastHint = null;
          if (!s.verdict) { s.revealed = false; }
          paint();
        });
      });
      var probeBtn = el.querySelector(".sim-probe-btn");
      if (probeBtn) {
        probeBtn.addEventListener("click", function () {
          if (s.mode === scenario.correctMode) {
            s.revealed = true;
            s.lastHint = null;
          } else {
            s.revealed = false;
            s.lastHint = scenario.hints[s.mode] || "Try a different dial setting.";
          }
          paint();
        });
      }
      el.querySelectorAll(".sim-verdict-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          s.verdict = btn.getAttribute("data-verdict");
          var correct = s.verdict === (s.truthIsGood ? "good" : "faulty");
          var report = hook("reportSimResult");
          if (report) report(correct, "Multimeter: " + scenario.title);
          paint();
        });
      });
      var retryBtn = el.querySelector(".sim-retry-btn");
      if (retryBtn) {
        retryBtn.addEventListener("click", function () {
          s.mode = "off";
          s.revealed = false;
          s.lastHint = null;
          s.verdict = null;
          s.truthIsGood = Math.random() < 0.5;
          paint();
        });
      }
    }

    paint();
  }

  // ============================================================ BREADBOARD
  var BB_ROWS = 5, BB_COLS = 8;

  function bbGroupId(row, col) {
    if (row === "railTop") return "railTop";
    if (row === "railBottom") return "railBottom";
    var half = col < BB_COLS / 2 ? "L" : "R";
    return "strip-" + row + "-" + half;
  }

  function bbTemplate(s) {
    var cellSize = 34;
    var w = BB_COLS * cellSize + 40;
    var railH = 30;
    var bodyH = BB_ROWS * cellSize;
    var totalH = railH * 2 + bodyH + 40;

    var svgParts = [];
    svgParts.push('<rect x="0" y="0" width="' + w + '" height="' + totalH + '" rx="10" fill="#e9e3d0"/>');

    // top rail
    for (var c = 0; c < BB_COLS; c++) {
      var x = 20 + c * cellSize + cellSize / 2;
      svgParts.push(bbHole(x, 20, "railTop", c));
    }
    // main strips
    for (var r = 0; r < BB_ROWS; r++) {
      var y = railH + 20 + r * cellSize + cellSize / 2;
      for (var cc = 0; cc < BB_COLS; cc++) {
        var xx = 20 + cc * cellSize + cellSize / 2;
        svgParts.push(bbHole(xx, y, r, cc));
      }
    }
    // bottom rail
    for (var c2 = 0; c2 < BB_COLS; c2++) {
      var x2 = 20 + c2 * cellSize + cellSize / 2;
      svgParts.push(bbHole(x2, totalH - 20, "railBottom", c2));
    }
    // centre gap marker
    svgParts.push('<line x1="' + (20 + (BB_COLS / 2) * cellSize) + '" y1="' + (railH + 15) + '" x2="' + (20 + (BB_COLS / 2) * cellSize) + '" y2="' + (railH + 15 + bodyH) + '" stroke="#c94b4b" stroke-width="2" stroke-dasharray="4 3"/>');

    function bbHole(cx, cy, row, col) {
      var groupId = bbGroupId(row, col);
      var isSelected = s.selected && s.selected.groupId === groupId;
      var isHighlighted = s.revealGroup === groupId;
      var fill = isHighlighted ? "#4ade80" : (isSelected ? "#5b8cff" : "#555b7a");
      return '<circle class="bb-hole" data-group="' + groupId + '" data-row="' + row + '" data-col="' + col + '" cx="' + cx + '" cy="' + cy + '" r="5.5" fill="' + fill + '" stroke="#33364a" stroke-width="1"/>';
    }

    return (
      '<div class="sim-widget">' +
        '<div class="sim-widget-title">🧩 Bench Simulation — Which Holes Are Connected?</div>' +
        '<p class="blk-intro">' + esc(s.promptText) + '</p>' +
        '<div class="sim-bb-stage"><svg viewBox="0 0 ' + w + ' ' + totalH + '" width="100%" height="' + Math.min(260, totalH) + '">' + svgParts.join("") + '</svg></div>' +
        (s.feedback ? '<div class="sim-feedback ' + (s.feedback.ok ? "ok" : "no") + '"><b>' + (s.feedback.ok ? "✅ Correct!" : "❌ Not quite.") + '</b> ' + esc(s.feedback.msg) + '</div>' : '<div class="sim-hint">💡 Tap the hole marked ★, then tap the OTHER hole you think is electrically connected to it.</div>') +
        (s.feedback ? '<button class="sim-retry-btn">🔁 Try Another</button>' : '') +
      '</div>'
    );
  }

  function mountBreadboard(el) {
    function newRound() {
      var row = Math.floor(Math.random() * BB_ROWS);
      var col = Math.floor(Math.random() * BB_COLS);
      var groupId = bbGroupId(row, col);
      return {
        anchor: { row: row, col: col },
        selected: { row: row, col: col, groupId: groupId },
        promptText: "The starred hole is live. Tap the other hole on this board that's electrically connected to it (same strip, same side of the centre gap).",
        feedback: null,
        revealGroup: null
      };
    }
    var s = newRound();

    function paint() {
      el.innerHTML = bbTemplate(s);
      // mark anchor with a star overlay using a title tooltip isn't trivial in SVG string; add a simple ring via a second pass
      var anchorGroup = bbGroupId(s.anchor.row, s.anchor.col);
      var holes = el.querySelectorAll('.bb-hole[data-group="' + CSS.escape(anchorGroup) + '"]');
      holes.forEach(function (h) {
        if (parseInt(h.getAttribute("data-row") === "railTop" || h.getAttribute("data-row") === "railBottom" ? -1 : h.getAttribute("data-row"), 10) === s.anchor.row && h.getAttribute("data-col") === String(s.anchor.col) || (h.getAttribute("data-row") === String(s.anchor.row) && h.getAttribute("data-col") === String(s.anchor.col))) {
          h.setAttribute("stroke", "#ffcf5b");
          h.setAttribute("stroke-width", "3");
        }
      });
      wire();
    }

    function wire() {
      el.querySelectorAll(".bb-hole").forEach(function (hole) {
        hole.addEventListener("click", function () {
          if (s.feedback) return;
          var row = hole.getAttribute("data-row");
          var col = hole.getAttribute("data-col");
          if (row === String(s.anchor.row) && col === String(s.anchor.col)) return; // clicked anchor itself
          var clickedGroup = hole.getAttribute("data-group");
          var anchorGroup = bbGroupId(s.anchor.row, s.anchor.col);
          var ok = clickedGroup === anchorGroup;
          s.revealGroup = anchorGroup;
          s.feedback = {
            ok: ok,
            msg: ok
              ? "Same strip (or same power rail) — that connection is real."
              : "Not connected — breadboard strips only join five holes in a column on one side of the centre gap (or along a power rail)."
          };
          var report = hook("reportSimResult");
          if (report) report(ok, "Breadboard connection check");
          paint();
        });
      });
      var retryBtn = el.querySelector(".sim-retry-btn");
      if (retryBtn) {
        retryBtn.addEventListener("click", function () {
          s = newRound();
          paint();
        });
      }
    }

    paint();
  }

  // ============================================================ OSCILLOSCOPE
  var SCOPE_SCENARIOS = [
    { id: "clean", wave: "clean", verdict: "clean", label: "Clean, steady sine wave", explain: "A smooth, even sine wave with no wobble is exactly what a healthy signal should look like." },
    { id: "ripple", wave: "ripple", verdict: "faulty", label: "Ripple riding on DC", explain: "That fuzzy wobble on top of the line is ripple — usually a filter capacitor that's failing to smooth the supply." },
    { id: "noisy", wave: "noisy", verdict: "faulty", label: "Noisy, jagged trace", explain: "A jagged, irregular trace like that points to interference or a noisy/failing stage upstream." },
    { id: "flat", wave: "flat", verdict: "faulty", label: "Flat-lined trace", explain: "A flat line means no signal is reaching this test point at all — trace back toward the source." }
  ];

  function scopeWavePath(type) {
    var pts = [];
    var w = 260, h = 100, midY = 50;
    for (var x = 0; x <= w; x += 4) {
      var y = midY;
      if (type === "clean") y = midY - 30 * Math.sin((x / w) * Math.PI * 4);
      else if (type === "ripple") y = midY - 30 * Math.sin((x / w) * Math.PI * 4) - 6 * Math.sin((x / w) * Math.PI * 24);
      else if (type === "noisy") y = midY - 30 * Math.sin((x / w) * Math.PI * 4) + (Math.random() * 16 - 8);
      else if (type === "flat") y = midY;
      pts.push(x + "," + y.toFixed(1));
    }
    return pts.join(" ");
  }

  function scopeTemplate(s) {
    var scenario = s.current;
    var choices = ["clean", "faulty"];
    return (
      '<div class="sim-widget">' +
        '<div class="sim-widget-title">📈 Bench Simulation — Read the Trace</div>' +
        '<p class="blk-intro">A test point is probed live. Judge the waveform: is this signal clean, or is something wrong?</p>' +
        '<div class="sim-scope-stage"><svg viewBox="0 0 260 100" width="100%" height="160">' +
          '<rect x="0" y="0" width="260" height="100" fill="#0b2115"/>' +
          '<line x1="0" y1="50" x2="260" y2="50" stroke="#1f4d2e" stroke-width="1"/>' +
          '<polyline points="' + scopeWavePath(scenario.wave) + '" fill="none" stroke="#4ade80" stroke-width="2"/>' +
        '</svg></div>' +
        (s.verdict ? "" :
          '<div class="sim-verdict-row"><div class="sim-verdict-btns">' +
            '<button class="sim-verdict-btn good" data-verdict="clean">✓ Clean Signal</button>' +
            '<button class="sim-verdict-btn bad" data-verdict="faulty">✕ Something\'s Wrong</button>' +
          '</div></div>'
        ) +
        (s.verdict ? '<div class="sim-feedback ' + (s.correct ? "ok" : "no") + '"><b>' + (s.correct ? "✅ Correct!" : "❌ Not quite.") + '</b> This was: ' + esc(scenario.label) + '. ' + esc(scenario.explain) + '</div>' + '<button class="sim-retry-btn">🔁 Try Another Trace</button>' : '') +
      '</div>'
    );
  }

  function mountOscilloscope(el) {
    var s = { current: SCOPE_SCENARIOS[Math.floor(Math.random() * SCOPE_SCENARIOS.length)], verdict: null, correct: null };

    function paint() { el.innerHTML = scopeTemplate(s); wire(); }
    function wire() {
      el.querySelectorAll(".sim-verdict-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          s.verdict = btn.getAttribute("data-verdict");
          s.correct = s.verdict === s.current.verdict;
          var report = hook("reportSimResult");
          if (report) report(s.correct, "Oscilloscope: " + s.current.label);
          paint();
        });
      });
      var retryBtn = el.querySelector(".sim-retry-btn");
      if (retryBtn) {
        retryBtn.addEventListener("click", function () {
          s = { current: SCOPE_SCENARIOS[Math.floor(Math.random() * SCOPE_SCENARIOS.length)], verdict: null, correct: null };
          paint();
        });
      }
    }
    paint();
  }

  // ============================================================ SOLDERING IRON
  var SOLDER_TEMPS = [
    { id: "cold", label: "220°C", ok: false, resultLabel: "Cold, dull, grainy joint", explain: "Too cool — the solder never fully wetted the pad. That grainy, dull look is a classic cold joint." },
    { id: "good", label: "340°C", ok: true, resultLabel: "Shiny, cone-shaped joint", explain: "Right in the everyday range (300–350°C) — the joint flowed properly and set shiny and smooth." },
    { id: "hot", label: "480°C", ok: false, resultLabel: "Scorched pad, lifted track", explain: "Too hot for this board — excess heat lifted the pad right off the track." }
  ];

  function jointSvg(kind) {
    var padColor = "#c9863f";
    var solder = kind === "cold" ? '<ellipse cx="60" cy="45" rx="16" ry="10" fill="#9a9aa0" stroke="#6e6e78" stroke-width="1.5"/>' :
      kind === "hot" ? '<path d="M40,50 Q60,20 80,50" stroke="#2a2c33" stroke-width="4" fill="none"/><ellipse cx="60" cy="48" rx="14" ry="7" fill="#7c7c86"/>' :
      '<path d="M45,50 Q60,25 75,50 Z" fill="#d7d9e6" stroke="#9aa1c4" stroke-width="1.5"/>';
    return (
      '<svg viewBox="0 0 120 80" width="100%" height="120">' +
        '<rect x="0" y="55" width="120" height="10" fill="#2f6f3a"/>' +
        '<rect x="52" y="30" width="16" height="30" fill="' + padColor + '"/>' +
        (kind === "hot" ? '<rect x="46" y="24" width="28" height="8" fill="#1c1c20"/>' : "") +
        solder +
      '</svg>'
    );
  }

  function solderTemplate(s) {
    var tempButtons = SOLDER_TEMPS.map(function (t) {
      return '<button class="sim-mode-btn' + (s.chosen === t.id ? " active" : "") + '" data-temp="' + t.id + '">' + t.label + '</button>';
    }).join("");
    var chosenObj = s.chosen ? SOLDER_TEMPS.filter(function (t) { return t.id === s.chosen; })[0] : null;

    return (
      '<div class="sim-widget">' +
        '<div class="sim-widget-title">🪛 Bench Simulation — Set the Iron, Solder the Joint</div>' +
        '<p class="blk-intro">Pick an iron temperature for a standard through-hole joint on a normal FR4 board, then solder it and see what you get.</p>' +
        '<div class="sim-dial-row"><span class="sim-label">Set the iron temperature</span><div class="sim-mode-row">' + tempButtons + '</div></div>' +
        '<div class="sim-stage"><div class="sim-component" style="flex:1 1 100%">' + jointSvg(chosenObj ? chosenObj.id : "cold") + '</div></div>' +
        (chosenObj ? '<div class="sim-feedback ' + (chosenObj.ok ? "ok" : "no") + '"><b>' + (chosenObj.ok ? "✅ Nice joint!" : "❌ Not ideal.") + '</b> ' + esc(chosenObj.resultLabel) + ' — ' + esc(chosenObj.explain) + '</div>' : '<div class="sim-hint">💡 Most everyday through-hole joints solder cleanly around 300–350°C.</div>') +
        (chosenObj ? '<button class="sim-retry-btn">🔁 Try Another Temperature</button>' : "") +
      '</div>'
    );
  }

  function mountSoldering(el) {
    var s = { chosen: null };
    function paint() { el.innerHTML = solderTemplate(s); wire(); }
    function wire() {
      el.querySelectorAll(".sim-mode-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          s.chosen = btn.getAttribute("data-temp");
          var t = SOLDER_TEMPS.filter(function (x) { return x.id === s.chosen; })[0];
          var report = hook("reportSimResult");
          if (report) report(t.ok, "Soldering: chose " + t.label);
          paint();
        });
      });
      var retryBtn = el.querySelector(".sim-retry-btn");
      if (retryBtn) {
        retryBtn.addEventListener("click", function () { s = { chosen: null }; paint(); });
      }
    }
    paint();
  }

  window.THULIR_SIMS = {
    mount: function (el, simId, scenarioKey) {
      if (simId === "multimeter") mountMultimeter(el, scenarioKey);
      else if (simId === "breadboard") mountBreadboard(el);
      else if (simId === "oscilloscope") mountOscilloscope(el);
      else if (simId === "soldering") mountSoldering(el);
    }
  };
})();
