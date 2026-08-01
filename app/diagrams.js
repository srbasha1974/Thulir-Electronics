/* Thulir Bench Quest — reusable inline SVG diagrams */
(function () {
  "use strict";

  function svg(inner, viewBox, height) {
    return '<div class="diagram-wrap"><svg viewBox="' + (viewBox || "0 0 240 120") + '" width="100%" height="' + (height || 130) + '" preserveAspectRatio="xMidYMid meet">' + inner + '</svg></div>';
  }

  var DIAGRAMS = {
    "resistor-bands": function () {
      return svg(
        '<line x1="10" y1="60" x2="55" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<line x1="185" y1="60" x2="230" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<rect x="55" y="35" width="130" height="50" rx="12" fill="#e8d9b0" stroke="#b89f6d" stroke-width="2"/>' +
        '<rect x="82" y="35" width="12" height="50" fill="#8b5a2b"/>' +
        '<rect x="104" y="35" width="12" height="50" fill="#000"/>' +
        '<rect x="126" y="35" width="12" height="50" fill="#8b5a2b"/>' +
        '<rect x="155" y="35" width="12" height="50" fill="#d4af37"/>' +
        '<text x="88" y="100" text-anchor="middle" font-size="11" fill="#565d7e">1</text>' +
        '<text x="110" y="100" text-anchor="middle" font-size="11" fill="#565d7e">0</text>' +
        '<text x="132" y="100" text-anchor="middle" font-size="11" fill="#565d7e">×10</text>' +
        '<text x="161" y="100" text-anchor="middle" font-size="11" fill="#565d7e">±5%</text>' +
        '<text x="120" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#5b8cff">Brown-Black-Brown-Gold = 100Ω ±5%</text>',
        "0 0 240 120", 130
      );
    },
    "capacitor-polarity": function () {
      return svg(
        '<line x1="10" y1="60" x2="70" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<line x1="170" y1="60" x2="230" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<rect x="70" y="20" width="100" height="80" rx="14" fill="#2a3a5a" stroke="#1a2438" stroke-width="2"/>' +
        '<rect x="163" y="20" width="7" height="80" fill="#e8e8f0"/>' +
        '<text x="120" y="65" text-anchor="middle" font-size="14" fill="#cfe0ff">470µF</text>' +
        '<text x="120" y="82" text-anchor="middle" font-size="11" fill="#9ab4e8">25V</text>' +
        '<text x="30" y="55" text-anchor="middle" font-size="20" font-weight="800" fill="#4ade80">+</text>' +
        '<text x="200" y="55" text-anchor="middle" font-size="20" font-weight="800" fill="#ff5b6e">−</text>' +
        '<text x="120" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#5b8cff">Stripe marks the negative (−) leg</text>',
        "0 0 240 120", 130
      );
    },
    "diode-polarity": function () {
      return svg(
        '<line x1="10" y1="60" x2="75" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<line x1="160" y1="60" x2="230" y2="60" stroke="#8a8fb0" stroke-width="4"/>' +
        '<rect x="75" y="38" width="85" height="44" rx="8" fill="#2a2f45" stroke="#555c85" stroke-width="2"/>' +
        '<rect x="150" y="38" width="10" height="44" fill="#e8e8f0"/>' +
        '<text x="117" y="65" text-anchor="middle" font-size="12" fill="#c7cbe6" font-family="monospace">1N4007</text>' +
        '<text x="45" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#4ade80">ANODE (+)</text>' +
        '<text x="195" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#ff5b6e">CATHODE (−)</text>' +
        '<path d="M25,90 L45,90 L35,105 Z" fill="#5b8cff"/>' +
        '<text x="120" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#5b8cff">Current flows anode → cathode only</text>',
        "0 0 240 120", 130
      );
    },
    "transistor-pinout": function () {
      return svg(
        '<rect x="90" y="20" width="60" height="55" rx="8" fill="#2a2f45" stroke="#555c85" stroke-width="2"/>' +
        '<circle cx="120" cy="30" r="4" fill="#555c85"/>' +
        '<line x1="105" y1="75" x2="105" y2="105" stroke="#8a8fb0" stroke-width="3"/>' +
        '<line x1="120" y1="75" x2="120" y2="105" stroke="#8a8fb0" stroke-width="3"/>' +
        '<line x1="135" y1="75" x2="135" y2="105" stroke="#8a8fb0" stroke-width="3"/>' +
        '<text x="105" y="118" text-anchor="middle" font-size="11" fill="#565d7e">E</text>' +
        '<text x="120" y="118" text-anchor="middle" font-size="11" fill="#565d7e">B</text>' +
        '<text x="135" y="118" text-anchor="middle" font-size="11" fill="#565d7e">C</text>' +
        '<text x="120" y="14" text-anchor="middle" font-size="12" font-weight="700" fill="#5b8cff">TO-92 — flat side faces you</text>',
        "0 0 240 130", 135
      );
    },
    "breadboard-rails": function () {
      var parts = [];
      parts.push('<rect x="0" y="0" width="240" height="130" rx="8" fill="#e9e3d0"/>');
      var cell = 24;
      for (var c = 0; c < 9; c++) {
        parts.push('<circle cx="' + (20 + c * cell) + '" cy="16" r="4" fill="#c0392b"/>');
        parts.push('<circle cx="' + (20 + c * cell) + '" cy="114" r="4" fill="#2c3e91"/>');
      }
      for (var r = 0; r < 3; r++) {
        for (var cc = 0; cc < 9; cc++) {
          var isLeftHalf = cc < 4;
          parts.push('<circle cx="' + (20 + cc * cell) + '" cy="' + (40 + r * 20) + '" r="4" fill="' + (isLeftHalf ? "#5b8cff" : "#ff8a5b") + '"/>');
        }
      }
      parts.push('<line x1="' + (20 + 4 * cell + cell / 2) + '" y1="34" x2="' + (20 + 4 * cell + cell / 2) + '" y2="106" stroke="#c94b4b" stroke-width="2" stroke-dasharray="4 3"/>');
      parts.push('<text x="120" y="127" text-anchor="middle" font-size="10" font-weight="700" fill="#565d7e">Rails = full rows · Strips = 5-hole columns, split by the centre gap</text>');
      return svg(parts.join(""), "0 0 240 132", 140);
    },
    "oscilloscope-wave": function () {
      var pts = [];
      for (var x = 0; x <= 220; x += 4) {
        pts.push((x + 10) + "," + (60 - 32 * Math.sin((x / 220) * Math.PI * 4)).toFixed(1));
      }
      return svg(
        '<rect x="0" y="0" width="240" height="120" fill="#0b2115"/>' +
        '<line x1="0" y1="60" x2="240" y2="60" stroke="#1f4d2e" stroke-width="1"/>' +
        '<polyline points="' + pts.join(" ") + '" fill="none" stroke="#4ade80" stroke-width="2"/>' +
        '<text x="120" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#9ad9ae">Voltage (Y) vs Time (X) — the shape tells the story</text>',
        "0 0 240 120", 130
      );
    },
    "multimeter-dial": function () {
      return svg(
        '<circle cx="120" cy="65" r="50" fill="#1b1e35" stroke="#0c0e1c" stroke-width="3"/>' +
        '<line x1="120" y1="65" x2="120" y2="22" stroke="#ff5b6e" stroke-width="4" stroke-linecap="round"/>' +
        '<circle cx="120" cy="65" r="6" fill="#c9cbe6"/>' +
        '<text x="120" y="14" text-anchor="middle" font-size="11" fill="#9aa1c4">OFF</text>' +
        '<text x="176" y="70" text-anchor="middle" font-size="12" fill="#9aa1c4">Ω</text>' +
        '<text x="120" y="122" text-anchor="middle" font-size="12" fill="#9aa1c4">V</text>' +
        '<text x="64" y="70" text-anchor="middle" font-size="11" fill="#9aa1c4">◆))</text>',
        "0 0 240 130", 130
      );
    },
    "schematic-symbols": function () {
      return svg(
        '<line x1="10" y1="20" x2="30" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<polyline points="30,20 36,10 44,30 52,10 60,30 68,10 74,20" fill="none" stroke="#5b8cff" stroke-width="2"/>' +
        '<line x1="74" y1="20" x2="94" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<text x="50" y="42" text-anchor="middle" font-size="10" fill="#565d7e">Resistor</text>' +

        '<line x1="110" y1="20" x2="128" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<line x1="128" y1="8" x2="128" y2="32" stroke="#5b8cff" stroke-width="3"/>' +
        '<line x1="136" y1="8" x2="136" y2="32" stroke="#5b8cff" stroke-width="3"/>' +
        '<line x1="136" y1="20" x2="154" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<text x="132" y="42" text-anchor="middle" font-size="10" fill="#565d7e">Capacitor</text>' +

        '<line x1="170" y1="20" x2="186" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<path d="M186,10 L186,30 L202,20 Z" fill="#5b8cff"/>' +
        '<line x1="202" y1="10" x2="202" y2="30" stroke="#5b8cff" stroke-width="3"/>' +
        '<line x1="202" y1="20" x2="218" y2="20" stroke="#8a8fb0" stroke-width="2"/>' +
        '<text x="194" y="42" text-anchor="middle" font-size="10" fill="#565d7e">Diode</text>' +

        '<circle cx="60" cy="75" r="18" fill="none" stroke="#5b8cff" stroke-width="2"/>' +
        '<line x1="48" y1="65" x2="48" y2="85" stroke="#5b8cff" stroke-width="2"/>' +
        '<line x1="48" y1="75" x2="72" y2="65" stroke="#5b8cff" stroke-width="2"/>' +
        '<line x1="48" y1="75" x2="72" y2="85" stroke="#5b8cff" stroke-width="2"/>' +
        '<text x="60" y="102" text-anchor="middle" font-size="10" fill="#565d7e">Transistor</text>',
        "0 0 240 110", 115
      );
    }
  };

  window.THULIR_DIAGRAMS = {
    render: function (id) {
      var fn = DIAGRAMS[id];
      return fn ? fn() : "";
    }
  };
})();
