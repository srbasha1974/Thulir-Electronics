/* Thulir Bench Quest — Electronics Fundamentals content data
   Sections = learning content per module (from the 7 training decks)
   Questions = quiz bank per module
   Card blocks may include: intro, definition, numbered, warning, checklist, golden, tip, table,
   diagram (inline SVG), simulation (interactive bench widget), check (interleaved micro-quiz)
*/

window.THULIR_DATA = {
  sections: [
    // ============================================================ MODULE: COMPONENTS
    {
      id: "components",
      code: "MOD·00",
      icon: "🔩",
      color: "#5b8cff",
      title: "Basic Electronic Components",
      subtitle: "The five parts you'll meet on every repair bench.",
      cards: [
        {
          id: "components-overview",
          title: "The Five Building Blocks",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Every circuit you'll ever repair is built from these five parts." },
            { type: "table", headers: ["Part", "Job", "Unit"], rows: [
              ["Resistor", "Limits current", "Ohms (Ω)"],
              ["Capacitor", "Stores charge", "Farads (F)"],
              ["Inductor", "Stores energy", "Henrys (H)"],
              ["Diode", "One-way valve", "Vf (V)"],
              ["Transistor", "Switch / amplify", "Gain (hFE)"]
            ]},
            { type: "check", q: "Which of these five parts is the odd one out for having polarity (a + and − side) that matters?", choices: ["Resistor", "Diode", "Fixed resistor", "None of them"], answer: 1, explain: "Diodes (and electrolytic capacitors) are polarized. Plain resistors fit either way round." }
          ]
        },
        {
          id: "components-resistor",
          title: "Resistor",
          tag: "Foundations",
          blocks: [
            { type: "diagram", id: "resistor-bands" },
            { type: "definition",
              plain: "A resistor limits how much current can flow. More resistance means less current gets through.",
              picture: "Like a narrow section in a water pipe — it slows the flow without stopping it.",
              facts: "Passive part · fits either way (no polarity) · measured in ohms (Ω)." },
            { type: "numbered", title: "What it does", items: [
              { title: "Protects parts", desc: "Limits current into LEDs and delicate chips" },
              { title: "Sets voltage", desc: "Two resistors in series make a voltage divider" },
              { title: "Controls behaviour", desc: "Brightness, motor speed, or volume" },
              { title: "Pull-up / pull-down", desc: "Holds a signal line steady HIGH or LOW" }
            ]},
            { type: "table", title: "Types", headers: ["Type", "Built", "Purpose"], rows: [
              ["Fixed", "Film/wirewound on ceramic, or SMD chip", "One set value"],
              ["Variable", "Wiper sliding on a resistive track", "User-adjustable (volume, trim)"],
              ["Thermistor", "Metal-oxide bead", "Senses temperature"],
              ["Photoresistor", "CdS film", "Senses light level"],
              ["Varistor", "Zinc-oxide grains", "Clamps voltage surges"]
            ]},
            { type: "numbered", title: "Test it on the bench", items: [
              { title: "1. Power OFF", desc: "measure best out-of-circuit" },
              { title: "2. Set meter to Ω", desc: "resistance mode" },
              { title: "3. Touch one probe to each lead", desc: "either way round" },
              { title: "4. Reading should match the marked value", desc: "" }
            ]},
            { type: "warning", title: "Failure signs", items: [
              "Reads open / OL (∞) → burnt or cracked",
              "Charred or discoloured body → overheated",
              "Value drifted far high → out of spec"
            ]},
            { type: "tip", text: "Colour code: Brown-Black-Red-Gold = 1 kΩ ±5%. SMD code 103 = 10 then 3 zeros = 10,000 Ω." },
            { type: "simulation", sim: "multimeter", scenario: "resistor" },
            { type: "check", q: "A resistor reads OL on the meter's Ω setting. What does that mean?", choices: ["It's brand new and unused", "It's open — burnt or cracked, replace it", "It's reading exactly zero ohms", "The meter needs new batteries"], answer: 1, explain: "OL (over limit / open) on Ω mode means the resistive element has broken internally." }
          ]
        },
        {
          id: "components-capacitor",
          title: "Capacitor",
          tag: "Foundations",
          blocks: [
            { type: "diagram", id: "capacitor-polarity" },
            { type: "definition",
              plain: "Stores charge on two plates split by an insulator; it charges and discharges very quickly.",
              picture: "A small water tank — it fills up, then empties on demand.",
              facts: "Measured in farads (F) — real parts in µF, nF, pF. Electrolytics are polarized: + and − matter!" },
            { type: "numbered", title: "What it does", items: [
              { title: "Smooths power", desc: "Flattens bumpy DC after the rectifier" },
              { title: "Blocks DC, passes AC", desc: "Couples a signal between two stages" },
              { title: "Decoupling", desc: "A local energy reserve beside each chip" },
              { title: "Timing", desc: "With a resistor, sets delays and speeds (RC)" }
            ]},
            { type: "table", title: "Types", headers: ["Type", "Built", "Purpose"], rows: [
              ["Ceramic", "Stacked layers, non-polar", "Small value, high frequency"],
              ["Film", "Plastic dielectric, non-polar", "Accurate mid-range values"],
              ["Electrolytic", "Etched foil + wet electrolyte, polarised", "Bulk energy storage"],
              ["Tantalum", "Powder + oxide, polarised, compact", "High value, small size"],
              ["Variable", "Overlapping plates + screw", "Set-once fine tuning"]
            ]},
            { type: "numbered", title: "Test it on the bench", items: [
              { title: "1. DISCHARGE the cap first", desc: "it can shock you" },
              { title: "2. Set meter to capacitance mode", desc: "" },
              { title: "3. Compare reading to printed µF", desc: "" },
              { title: "4. An ESR meter checks caps in-circuit", desc: "" }
            ]},
            { type: "warning", title: "Failure signs", items: [
              "Bulging or vented top → replace",
              "Leaked or crusty electrolyte → replace",
              "Reads open or way low → worn out"
            ]},
            { type: "tip", text: "Read: 470 µF 25 V electrolytic; ceramic 104 = 10 then 4 zeros pF = 100 nF." },
            { type: "check", q: "You see a bulging, vented electrolytic capacitor on a board. What should you do?", choices: ["Leave it, bulging is normal", "Replace it — it has failed", "Reverse its polarity", "Increase its voltage rating and reuse it"], answer: 1, explain: "A bulging or vented top is a clear sign the capacitor has failed and needs replacing." }
          ]
        },
        {
          id: "components-inductor",
          title: "Inductor",
          tag: "Foundations",
          blocks: [
            { type: "definition",
              plain: "Current through the coil builds a magnetic field; it resists sudden changes in current.",
              picture: "A heavy flywheel — hard to get spinning, and hard to stop once it is.",
              facts: "Measured in henrys (H) — real parts in µH, mH · no polarity · just a coil on a core." },
            { type: "numbered", title: "What it does", items: [
              { title: "Smooths current", desc: "With a capacitor, forms an LC filter" },
              { title: "Stores energy", desc: "The heart of switch-mode supplies (buck/boost)" },
              { title: "Blocks noise", desc: "Ferrite beads and chokes kill high-freq hash" },
              { title: "Building block", desc: "Of transformers, motors and relays" }
            ]},
            { type: "table", title: "Types", headers: ["Type", "Built", "Purpose"], rows: [
              ["Air-core", "Coil, no magnetic core", "Low L, no core loss (RF)"],
              ["Iron-core", "Coil on laminated iron", "Large L at low frequency"],
              ["Ferrite-core", "Coil on ceramic ferrite", "Efficient at high frequency"],
              ["Toroidal", "Wound on a ring core", "Low leakage, compact"],
              ["Choke / Bead", "Ferrite over a wire", "Blocks high-freq noise"]
            ]},
            { type: "numbered", title: "Test it on the bench", items: [
              { title: "1. Set meter to Ω", desc: "" },
              { title: "2. A healthy coil reads very LOW Ω", desc: "" },
              { title: "3. Open / OL means a broken winding", desc: "" },
              { title: "4. An LCR meter reads true inductance", desc: "" }
            ]},
            { type: "warning", title: "Failure signs", items: [
              "Open / OL → broken winding, replace",
              "Burnt varnish or smell → overheated",
              "Cracked ferrite core → damaged"
            ]},
            { type: "check", q: "What should a healthy inductor read on an ohmmeter?", choices: ["OL (infinite)", "Very low resistance, near a short", "Exactly the same as a resistor", "It cannot be measured with a multimeter"], answer: 1, explain: "A coil of wire is nearly a plain conductor, so a good inductor reads very low Ω." }
          ]
        },
        {
          id: "components-diode",
          title: "Diode",
          tag: "Foundations",
          blocks: [
            { type: "diagram", id: "diode-polarity" },
            { type: "definition",
              plain: "Lets current flow one way (anode → cathode) and blocks the other. Needs ~0.7 V to start.",
              picture: "A turnstile — it only lets people through in one direction.",
              facts: "Has polarity — a stripe marks the cathode (−). Silicon drop ≈ 0.7 V; Schottky ≈ 0.3 V." },
            { type: "numbered", title: "What it does", items: [
              { title: "Rectifies", desc: "Turns AC into DC (bridge rectifier)" },
              { title: "Protects", desc: "Blocks reverse polarity; clamps voltage spikes" },
              { title: "Emits light", desc: "An LED lights when forward-biased" },
              { title: "References voltage", desc: "A Zener holds a steady reference" }
            ]},
            { type: "table", title: "Types", headers: ["Type", "Purpose", "Example"], rows: [
              ["Rectifier", "AC to DC, high current", "PSU bridge (1N4007)"],
              ["Schottky", "Low drop, very fast", "SMPS, reverse-polarity guard"],
              ["Zener", "Holds a fixed voltage", "Voltage reference / clamp"],
              ["Switching", "Fast low-current on/off", "Logic & signal (1N4148)"],
              ["LED", "Indicate / illuminate", "Indicators, displays"],
              ["TVS", "Absorb transient spikes", "Port & ESD protection"]
            ]},
            { type: "numbered", title: "Test it on the bench", items: [
              { title: "1. Set meter to DIODE mode", desc: "" },
              { title: "2. Red on anode, black on cathode", desc: "" },
              { title: "3. Good: reads ≈ 0.5–0.7 V one way", desc: "" },
              { title: "4. Swap probes: should read OL", desc: "" }
            ]},
            { type: "warning", title: "Failure signs", items: [
              "Short (≈0 both ways) → blown",
              "Open (OL both ways) → blown",
              "Very common power-supply failure"
            ]},
            { type: "tip", text: "1N4001–1N4007 = mains rectifiers; 1N4148 = fast signal. LED's longer leg = anode (+)." },
            { type: "simulation", sim: "multimeter", scenario: "diode" },
            { type: "check", q: "Testing a diode in Diode mode, the meter reads OL in BOTH directions. What's the verdict?", choices: ["Perfectly healthy", "Faulty — open junction", "Reversed but fine", "Needs a higher voltage meter"], answer: 1, explain: "A healthy diode reads ~0.5–0.7V one way and OL the other. OL both ways means the junction has failed open." }
          ]
        },
        {
          id: "components-transistor",
          title: "Transistor",
          tag: "Foundations",
          blocks: [
            { type: "diagram", id: "transistor-pinout" },
            { type: "definition",
              plain: "A small current or voltage on one leg controls a much bigger current through the other two.",
              picture: "A tap where a light touch controls a big flow of water.",
              facts: "Three legs — BJT: Base, Collector, Emitter; MOSFET: Gate, Drain, Source." },
            { type: "numbered", title: "What it does", items: [
              { title: "Switching", desc: "Turn motors, relays and LEDs on/off from a tiny signal" },
              { title: "Amplifying", desc: "Make weak signals — like audio — stronger" },
              { title: "BJT family", desc: "Controlled by a small base current" },
              { title: "MOSFET family", desc: "Controlled by gate voltage; runs power & logic" }
            ]},
            { type: "table", title: "Types", headers: ["Type", "Purpose", "Example"], rows: [
              ["NPN BJT", "Switch/amplify (on with base I)", "BC547"],
              ["PNP BJT", "High-side switching", "BC557"],
              ["JFET", "High-impedance amplifier", "Sensor front-ends"],
              ["MOSFET", "Efficient V-controlled switch", "IRFZ44"],
              ["IGBT", "Switch high V and current", "Inverters"],
              ["Darlington", "Very high current gain", "TIP122"]
            ]},
            { type: "numbered", title: "Test it on the bench", items: [
              { title: "1. Set meter to DIODE mode", desc: "" },
              { title: "2. Base→Emitter reads ≈0.7V one way", desc: "" },
              { title: "3. Base→Collector reads ≈0.7V one way", desc: "" },
              { title: "4. Both read OL with probes reversed", desc: "" }
            ]},
            { type: "warning", title: "Failure signs", items: [
              "Collector–Emitter short (≈0) → blown",
              "Any junction open both ways → blown",
              "Common in switching / power faults"
            ]},
            { type: "check", q: "What are the three legs of a BJT transistor called?", choices: ["Gate, Drain, Source", "Base, Collector, Emitter", "Anode, Cathode, Gate", "Positive, Negative, Ground"], answer: 1, explain: "BJTs use Base, Collector, Emitter. MOSFETs use Gate, Drain, Source instead." }
          ]
        },
        {
          id: "components-cheatsheet",
          title: "Quick Test Reference",
          tag: "Cheat Sheet",
          blocks: [
            { type: "intro", text: "One line per part — the meter setting, a healthy reading, and a bad one." },
            { type: "table", headers: ["Component", "Meter Setting", "Good Reading", "Bad Reading"], rows: [
              ["Resistor", "Ohms (Ω)", "= marked value (±tol.)", "Open / OL, or way off"],
              ["Capacitor", "Capacitance / ESR", "= marked µF, low ESR", "Bulged, open or leaky"],
              ["Inductor", "Ohms (Ω)", "Very low Ω (near short)", "Open / OL"],
              ["Diode", "Diode mode", "0.5–0.7 V one way, OL other", "Short or open both ways"],
              ["Transistor", "Diode mode", "0.7 V B–E & B–C one way", "Shorted C–E"]
            ]},
            { type: "check", q: "Which meter setting is shared by both the Diode and Transistor bench tests?", choices: ["Capacitance", "Ohms", "Diode mode", "AC Voltage"], answer: 2, explain: "Both diodes and BJT transistor junctions are tested in Diode mode — a transistor behaves like two diodes joined at the base." }
          ]
        },
        {
          id: "components-lab",
          title: "Hands-On Lab: Four Projects",
          tag: "Lab",
          blocks: [
            { type: "intro", text: "Four projects turn the five components into working circuits — and drill the three core bench skills: Read a schematic, Solder clean joints, Measure & verify." },
            { type: "table", headers: ["#", "Project", "Level", "Uses"], rows: [
              ["01", "LED Indicator", "Beginner · 30 min", "R · LED"],
              ["02", "555 LED Flasher", "Beginner+ · 1 hr", "R · C · LED · IC"],
              ["03", "Transistor Relay Driver", "Intermediate · 1 hr", "Q · R · D · coil"],
              ["04", "Mini DC Power Supply", "Intermediate · 1.5 hr", "D · C · coil · R"]
            ]},
            { type: "numbered", title: "Worked example — LED Indicator", items: [
              { title: "Voltage left for R1", desc: "9V − 2V (LED drop) = 7V" },
              { title: "R = V ÷ I", desc: "7V ÷ 0.02A = 350Ω → use standard 470Ω" },
              { title: "Bench check", desc: "I = 7V ÷ 470Ω ≈ 15 mA — safe for the LED" }
            ]},
            { type: "check", q: "In the LED Indicator project, why is 470Ω chosen even though the calculation gives 350Ω?", choices: ["470Ω was on sale", "470Ω is the nearest standard resistor value", "It doesn't matter what value is used", "The LED requires exactly 470Ω"], answer: 1, explain: "350Ω isn't a standard resistor value, so you round up to the nearest one you can actually buy: 470Ω." }
          ]
        },
        {
          id: "components-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Name all five basic parts and say what each one does",
              "Read a resistor's colour code and a capacitor's markings",
              "Recognise real parts on a board — and their schematic symbols",
              "Test each part with a multimeter and spot common failures",
              "Build, solder and measure a working circuit from a schematic"
            ]},
            { type: "golden", text: "Power off and discharge capacitors before you probe anything." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Always use SMD parts", "Power off and discharge capacitors before you probe anything", "Test every part twice", "Never use a multimeter"], answer: 1, explain: "Safety first, every time — power off and discharge capacitors before you probe." }
          ]
        }
      ]
    },

    // ============================================================ MODULE: PROTECTION & SIGNAL
    {
      id: "protection-signal",
      code: "P2",
      icon: "🛡️",
      color: "#ff8a5b",
      title: "Protection & Signal Devices",
      subtitle: "The parts that keep circuits safe — and shape, generate and count signals.",
      cards: [
        {
          id: "ps-overview",
          title: "Safety & Switching Devices",
          tag: "Overview · Module A",
          blocks: [
            { type: "intro", text: "Parts that guard a circuit from too much current or voltage — and switch AC/DC power." },
            { type: "table", headers: ["Device", "Job", "Key spec"], rows: [
              ["Fuse", "Breaks on overcurrent", "Amps (A)"],
              ["Varistor", "Clamps voltage surges", "V clamp"],
              ["TVS diode", "Clamps fast spikes", "V"],
              ["SCR", "Latching DC switch", "Gate"],
              ["TRIAC", "AC power switch", "Gate"],
              ["DIAC", "Triggers a TRIAC", "V break"]
            ]},
            { type: "check", q: "Which device is designed to physically break (melt) when current gets too high?", choices: ["Varistor", "Fuse", "DIAC", "TVS diode"], answer: 1, explain: "A fuse is a deliberate weak link — a thin wire that melts to break the circuit on overcurrent." }
          ]
        },
        {
          id: "ps-fuse-varistor",
          title: "Fuse & Varistor (MOV)",
          tag: "Spotlight",
          blocks: [
            { type: "definition",
              plain: "Fuse: a thin wire that melts and breaks the circuit when current gets too high. Varistor: a voltage-dependent resistor that collapses above its clamp voltage.",
              picture: "The fuse is a deliberate weak link that sacrifices itself; the varistor is a shock-absorber for surges.",
              facts: "Fuse marked in amps + volts, fast (F) or slow (T). MOV marked with a clamp code, e.g. 14D471K ≈ 470 V." },
            { type: "numbered", title: "Test & fails", items: [
              { title: "Fuse", desc: "Continuity: good = beep (~0Ω), blown = open. Always replace with the same rating." },
              { title: "Varistor", desc: "Ω reads very high/open when good. Fails shorted, or cracked and charred after big surges." }
            ]},
            { type: "simulation", sim: "multimeter", scenario: "fuse" },
            { type: "check", q: "You're replacing a blown fuse. What rating should you use?", choices: ["Any fuse that physically fits", "A higher rating for extra safety margin", "The exact same rating as the original", "A lower rating to be extra safe"], answer: 2, explain: "Always replace a fuse with the same rating — a different rating can under-protect or nuisance-trip the circuit." }
          ]
        },
        {
          id: "ps-thyristors",
          title: "SCR, TRIAC & DIAC",
          tag: "Power Control",
          blocks: [
            { type: "definition",
              plain: "SCR: a gate pulse turns it on; it stays on until current drops to zero. TRIAC: like two SCRs back-to-back, conducts both AC directions. DIAC: fires a TRIAC's gate cleanly.",
              picture: "SCR is a one-way switch that latches ON. TRIAC is a two-way version for AC.",
              facts: "SCR leads: A-K-G. TRIAC leads: MT1-MT2-G, usually fired by a DIAC." },
            { type: "table", headers: ["Type", "Purpose", "Example use"], rows: [
              ["SCR", "Switch & latch DC power", "Crowbar, DC control, chargers"],
              ["TRIAC", "Switch AC in both directions", "Lamp dimmers, motor/heater control"],
              ["DIAC", "Fire a TRIAC's gate cleanly", "Trigger stage in dimmers"]
            ]},
            { type: "warning", title: "Common failures", items: [
              "SCR fails shorted (stuck on)",
              "TRIAC fails shorted → load stuck full-on (classic dimmer fault)",
              "DIAC fails shorted or open"
            ]},
            { type: "check", q: "A dimmer's lamp is stuck at full brightness no matter where the dial is set. What's the likely fault?", choices: ["The TRIAC has failed shorted", "The fuse is blown", "The lamp is too bright by design", "The DIAC is oversized"], answer: 0, explain: "A TRIAC failing shorted is a classic dimmer fault — the load gets stuck full-on since the switch never turns off." }
          ]
        },
        {
          id: "ps-signal-overview",
          title: "The Signal Building Blocks",
          tag: "Overview · Module B",
          blocks: [
            { type: "intro", text: "Functional blocks that shape, generate and count signals between the basic parts." },
            { type: "table", headers: ["Block", "Job", "Spec"], rows: [
              ["Amplifier", "Boosts a signal", "Gain > 1"],
              ["Attenuator", "Reduces a signal", "Gain < 1 (dB)"],
              ["Filter", "Selects frequencies", "LP / HP / BP"],
              ["Oscillator", "Generates a wave", "Hz → MHz"],
              ["Counter", "Counts & divides", "÷ N"]
            ]},
            { type: "check", q: "Which signal block has a gain of less than 1 by design?", choices: ["Amplifier", "Attenuator", "Oscillator", "Counter"], answer: 1, explain: "An attenuator deliberately reduces signal level — the opposite job of an amplifier." }
          ]
        },
        {
          id: "ps-signal-blocks",
          title: "Amplifier, Attenuator & Filter",
          tag: "Spotlight",
          blocks: [
            { type: "definition",
              plain: "Amplifier multiplies a signal by its gain (>1). Attenuator scales it down (gain<1, in dB). Filter passes a chosen frequency band (low-pass, high-pass, band-pass, notch).",
              picture: "Amplifier: small in, big out. Attenuator: big in, small out. Filter: a frequency gatekeeper.",
              facts: "Gain = Vout ÷ Vin. Loss(dB) = 20·log(Vout ÷ Vin). Filter cut-off fc = 1 ÷ (2πRC)." },
            { type: "check", q: "What does a filter's cut-off frequency formula fc = 1 ÷ (2πRC) tell you?", choices: ["The gain of an amplifier", "The frequency where the filter starts rolling off", "How loud a signal is", "The resistor's colour code"], answer: 1, explain: "fc marks the point where a passive R-C filter begins to roll the signal off." }
          ]
        },
        {
          id: "ps-oscillator-counter",
          title: "Oscillator & Counter",
          tag: "Spotlight",
          blocks: [
            { type: "definition",
              plain: "Oscillator produces a sine, square or triangle wave with no input signal. Counter advances a count on every incoming clock pulse.",
              picture: "Oscillator is a signal generator; counter is a digital tally that steps and divides.",
              facts: "Oscillators built from RC, LC, crystal, or a 555 timer. Counters built from chained flip-flops (e.g. 4017 decade counter)." },
            { type: "check", q: "What does a 4017 decade counter do when fed a clock signal?", choices: ["Amplifies the clock", "Steps one output at a time, then wraps around", "Converts AC to DC", "Filters out noise"], answer: 1, explain: "The 4017 lights one of its ten outputs per clock pulse, then wraps back to the start (÷10)." }
          ]
        },
        {
          id: "ps-bench-reference",
          title: "Testing Protection & Power Devices",
          tag: "Bench Reference",
          blocks: [
            { type: "table", headers: ["Device", "Meter Setting", "Good Reading", "Bad Reading"], rows: [
              ["Fuse", "Continuity", "Beep, ~0 Ω", "Open / OL"],
              ["Varistor (MOV)", "Ohms (Ω)", "Very high / open", "Shorted, or charred"],
              ["TVS diode", "Diode mode", "Diode-like one way", "Shorted or leaky"],
              ["SCR", "Diode mode", "A-K open both ways", "Shorted (stuck on)"],
              ["TRIAC", "Diode mode", "MT1-MT2 open", "Shorted (load stuck on)"],
              ["DIAC", "Ohms (Ω)", "Open both ways", "Shorted or open"]
            ]},
            { type: "check", q: "What should a healthy varistor (MOV) read on an ohmmeter?", choices: ["Very high / open", "Near zero", "Exactly 470Ω", "It beeps like a fuse"], answer: 0, explain: "A good MOV reads very high or open resistance — it only conducts once a surge exceeds its clamp voltage." }
          ]
        },
        {
          id: "ps-projects",
          title: "Projects: Dimmer & LED Chaser",
          tag: "Lab",
          blocks: [
            { type: "numbered", title: "TRIAC Lamp Dimmer — why it works", items: [
              { title: "Firing angle set by R·C", desc: "bigger R or C = later firing = dimmer lamp" },
              { title: "DIAC breaks over at ~30 V", desc: "delivers one sharp gate pulse to the TRIAC" },
              { title: "Fuse + MOV", desc: "guard the incoming mains before the TRIAC stage" }
            ]},
            { type: "numbered", title: "555 + 4017 LED Chaser — why it works", items: [
              { title: "555 clock sets the chase speed", desc: "f = 1.44 ÷ ((R1 + 2·R2)·C1)" },
              { title: "4017 lights one of Q0–Q9 per pulse", desc: "then wraps around (÷10)" },
              { title: "Bigger C1", desc: "slows the chase so you can see each step" }
            ]},
            { type: "warning", title: "Care", items: ["Mains circuits like the dimmer are for supervised, isolated-bench work only."] },
            { type: "check", q: "In the TRIAC dimmer, what happens if you increase the R-C time constant feeding the DIAC?", choices: ["The lamp gets brighter", "The TRIAC fires later, so the lamp dims", "Nothing changes", "The fuse blows"], answer: 1, explain: "A bigger R or C delays the firing point further into the AC cycle, dimming the lamp." }
          ]
        },
        {
          id: "ps-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Pick the right device for overcurrent vs overvoltage protection",
              "Read and test fuses, MOVs, SCRs and TRIACs on the bench",
              "Recognise the signal blocks: amplify, attenuate, filter, oscillate, count",
              "Build an AC dimmer and a 555+4017 LED chaser from a schematic"
            ]},
            { type: "golden", text: "Mains circuits like the dimmer are for supervised, isolated-bench work only." },
            { type: "check", q: "What's the golden rule for this module?", choices: ["Test dimmers alone at home", "Mains circuits like the dimmer are for supervised, isolated-bench work only", "Fuses never need replacing", "TRIACs don't need testing"], answer: 1, explain: "Mains-connected practicals always need supervision and proper isolation." }
          ]
        }
      ]
    },

    // ============================================================ MODULE 01: SAFETY
    {
      id: "safety",
      code: "MOD·01",
      icon: "⚠️",
      color: "#ff5b5b",
      title: "Electrical & Board Safety",
      subtitle: "How to protect yourself — and the boards you're repairing.",
      cards: [
        {
          id: "safety-overview",
          title: "The Five Things That Can Hurt You",
          tag: "Overview",
          blocks: [
            { type: "table", headers: ["Hazard", "Cause", "Threshold"], rows: [
              ["Shock", "Current through your body", "100 mA"],
              ["Fire", "Shorted or overloaded parts", "Class C"],
              ["ESD", "Static that kills silently", "100 V"],
              ["Charged Caps", "Energy stored after power-off", "Hours"],
              ["Fumes", "Solder flux and burnt parts", "Ventilate"]
            ]},
            { type: "check", q: "Which hazard can still be dangerous hours after a board is unplugged?", choices: ["ESD", "Charged capacitors", "Fumes", "Fire"], answer: 1, explain: "Large capacitors can hold a dangerous charge for hours after the power is switched off." }
          ]
        },
        {
          id: "safety-shock",
          title: "Electric Shock",
          tag: "Shock",
          blocks: [
            { type: "definition",
              plain: "Current from a live point flows through your body the moment you become part of its path back to earth.",
              picture: "Like water finding the fastest way downhill — electricity finds the fastest way to earth, even through you.",
              facts: "It's current (mA), not voltage, that injures you. Dry skin resists current; sweat or a cut lowers that resistance fast." },
            { type: "numbered", title: "Why it's dangerous", items: [
              { title: "1 mA", desc: "Just a tingle" },
              { title: "10 mA", desc: "Muscles lock — you can't let go" },
              { title: "30 mA", desc: "Breathing becomes difficult" },
              { title: "100+ mA", desc: "Can stop the heart — fatal" }
            ]},
            { type: "numbered", title: "Stay safe on the bench", items: [
              { title: "Isolate the supply first", desc: "" },
              { title: "Discharge capacitors first", desc: "" },
              { title: "Ground yourself and the bench", desc: "" },
              { title: "Keep one hand free during live tests", desc: "" }
            ]},
            { type: "check", q: "What actually determines how dangerous an electric shock is?", choices: ["Voltage", "Current through the body", "The colour of the wire", "The time of day"], answer: 1, explain: "Current (measured in mA), not voltage, is what injures you." }
          ]
        },
        {
          id: "safety-esd",
          title: "ESD & Charged Capacitors",
          tag: "Board Safety",
          blocks: [
            { type: "definition",
              plain: "Static builds up on your body and discharges the instant you touch a part — often with no shock you can even feel. Large capacitors can hold a charge for hours after power-off.",
              picture: "Like the hidden zap from a doorknob after walking on carpet — except this zap can leave a chip silently dead.",
              facts: "You feel a static spark at ~3,000V. Many ICs are destroyed by as little as 100V — thirty times less." },
            { type: "numbered", title: "Protect the board every time", items: [
              { title: "Wear a grounded wrist strap", desc: "" },
              { title: "Work on a grounded ESD mat", desc: "" },
              { title: "Discharge caps with an insulated resistor", desc: "" },
              { title: "Confirm 0V before you touch a lead", desc: "" }
            ]},
            { type: "warning", title: "What goes wrong", items: [
              "Shorting capacitor legs with a bare screwdriver",
              "Skipping the wait and diving straight in",
              "Handling boards without grounding first"
            ]},
            { type: "check", q: "Why can a chip be destroyed by static you never even felt?", choices: ["Chips are always fragile", "You feel static at ~3000V but many ICs die at ~100V", "Static isn't actually dangerous", "Only old chips are affected"], answer: 1, explain: "The threshold to feel a spark (~3000V) is far above the ~100V that can kill many modern ICs." }
          ]
        },
        {
          id: "safety-ppe",
          title: "PPE & Pre-Work Checklist",
          tag: "Procedure",
          blocks: [
            { type: "table", headers: ["Gear", "Purpose"], rows: [
              ["Wrist Strap", "Grounded to the bench"],
              ["ESD Mat", "Grounded work surface"],
              ["Safety Glasses", "For solder & caps"],
              ["Insulated Tools", "Rated for live work"],
              ["CAT Meter", "Matched to the voltage"]
            ]},
            { type: "numbered", title: "Every board, every time", items: [
              { title: "1. Visually inspect", desc: "Burnt tracks, bulging caps, exposed wires — before power" },
              { title: "2. Isolate the supply", desc: "Unplug or switch off at the source, not just the load" },
              { title: "3. Discharge capacitors", desc: "Bleed down stored charge, then confirm with a meter" },
              { title: "4. Ground yourself", desc: "Wrist strap on, ESD mat connected, then begin" }
            ]},
            { type: "check", q: "What's the first step of the pre-work checklist, before you even touch a tool?", choices: ["Ground yourself", "Visually inspect the board", "Discharge capacitors", "Isolate the supply"], answer: 1, explain: "Visual inspection comes first — spotting burnt tracks or bulging caps before power is ever involved." }
          ]
        },
        {
          id: "safety-live-fire",
          title: "Live Work & Fire",
          tag: "Fire & Live Work",
          blocks: [
            { type: "numbered", title: "When you must test live", items: [
              { title: "One-hand rule", desc: "Keep your free hand off the chassis or any earthed surface" },
              { title: "Match the CAT rating", desc: "A CAT I meter on mains wiring is a hazard, not a shortcut" },
              { title: "Don't work alone", desc: "Someone nearby who can cut power and call for help" }
            ]},
            { type: "warning", title: "If a board catches fire", items: [
              "Cut power at the source if safe to reach",
              "Use a Class C extinguisher, aimed at the base",
              "NEVER throw water on an electrical fire"
            ]},
            { type: "check", q: "What extinguisher class is rated for electrical fires?", choices: ["Class A", "Class B", "Class C", "Water only"], answer: 2, explain: "Class C extinguishers are specifically rated for live electrical fires." }
          ]
        },
        {
          id: "safety-emergency",
          title: "Emergency Response",
          tag: "Emergency",
          blocks: [
            { type: "intro", text: "If someone is being shocked, do not touch them directly — you'll become a second casualty." },
            { type: "numbered", title: "Act, don't freeze", items: [
              { title: "1. Cut the power", desc: "Switch off or unplug the source immediately, if reachable" },
              { title: "2. Separate with an insulator", desc: "A dry wooden or plastic object — never your bare hands" },
              { title: "3. Call for emergency help", desc: "Get trained medical assistance on the way" },
              { title: "4. Check breathing", desc: "If trained in CPR and breathing has stopped, begin CPR" }
            ]},
            { type: "check", q: "What's the very first thing to do if you see someone being shocked?", choices: ["Grab them and pull them free", "Cut the power at the source", "Pour water on them", "Call a colleague and wait"], answer: 1, explain: "Cut the power first, if it's safely reachable — never touch the person directly while current is flowing." }
          ]
        },
        {
          id: "safety-reference",
          title: "Quick Safety Reference",
          tag: "Reference",
          blocks: [
            { type: "table", headers: ["Hazard", "Check With", "Safe State", "Danger Sign"], rows: [
              ["Shock", "Multimeter", "0V confirmed", "Any voltage reading"],
              ["Charged Cap", "Insulated resistor", "Discharged, 0V", "Warm or bulging body"],
              ["ESD", "Wrist strap + mat", "Grounded before touch", "No strap, dry air"],
              ["Fire", "Class C extinguisher", "Power cut, area clear", "Smoke or burning smell"],
              ["Burn", "Iron on its stand", "Tip stored, cooled", "Iron left on the bench"]
            ]},
            { type: "check", q: "How do you confirm a board is safe from stored shock hazard before touching a lead?", choices: ["Assume it's fine after 5 minutes", "Confirm 0V with a multimeter", "Look for smoke", "Touch it briefly with a bare finger"], answer: 1, explain: "Always confirm 0V with a multimeter — don't rely on time alone or guesswork." }
          ]
        },
        {
          id: "safety-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Explain why current, not voltage, is what injures you",
              "Identify and safely discharge a charged capacitor",
              "Protect a board from ESD with a strap and a mat",
              "Follow the pre-work checklist before every repair",
              "Respond correctly to a shock, burn, or bench fire"
            ]},
            { type: "golden", text: "Power off and discharge capacitors — and ground yourself — before you probe anything." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Wear gloves at all times", "Power off, discharge capacitors, and ground yourself before probing", "Only test live boards", "Skip inspection to save time"], answer: 1, explain: "This combined habit protects both you and the board, every single time." }
          ]
        }
      ]
    },

    // ============================================================ MODULE 02: WORKSHOP SKILLS
    {
      id: "workshop",
      code: "MOD·02",
      icon: "🧰",
      color: "#ffcf5b",
      title: "Workshop Skills",
      subtitle: "The bench, the tools, and the techniques every repair starts with.",
      cards: [
        {
          id: "workshop-overview",
          title: "The Five Skills Every Bench Runs On",
          tag: "Overview",
          blocks: [
            { type: "table", headers: ["Skill", "About", "Note"], rows: [
              ["Hand Tools", "Drivers, cutters, tweezers", "Daily use"],
              ["Soldering", "Joining components to a board", "300–400°C"],
              ["Desoldering", "Removing parts cleanly", "Wick / pump"],
              ["Multimeter", "Your first diagnostic tool", "V · Ω · A"],
              ["Inspection", "Reading a board before you touch it", "Magnify"]
            ]},
            { type: "check", q: "Which tool is described as \"your first diagnostic tool\"?", choices: ["Screwdriver", "Multimeter", "Solder wick", "Tweezers"], answer: 1, explain: "The multimeter is the first instrument you reach for on almost every fault." }
          ]
        },
        {
          id: "workshop-bench",
          title: "Bench Setup & Hand Tools",
          tag: "Bench",
          blocks: [
            { type: "definition",
              plain: "A dedicated, organised, well-lit surface where every tool has a fixed place and every board has room to breathe.",
              picture: "Like a surgeon's tray — instruments laid out, nothing loose, nothing in the way of the next move.",
              facts: "Grounded ESD mat, bright lighting, and a fire extinguisher within reach — non-negotiable basics." },
            { type: "numbered", title: "Essential hand tools", items: [
              { title: "Screwdriver set", desc: "Phillips, flathead, precision bits" },
              { title: "Cutters & pliers", desc: "Flush cutters for leads, long-nose for bending" },
              { title: "Tweezers", desc: "Fine-tipped, for small SMD parts" },
              { title: "Spudgers", desc: "Plastic, non-conductive, for opening cases" }
            ]},
            { type: "check", q: "Why use a plastic spudger instead of a metal screwdriver to open a plastic case?", choices: ["Plastic looks nicer", "It won't scratch or short anything while prying", "It's cheaper", "Metal tools are illegal"], answer: 1, explain: "A non-conductive plastic spudger protects delicate plastics and avoids shorting live parts while prying." }
          ]
        },
        {
          id: "workshop-soldering",
          title: "Soldering",
          tag: "Soldering",
          blocks: [
            { type: "definition",
              plain: "Heat and solder join a component lead to a copper pad, creating both a mechanical bond and an electrical path.",
              picture: "Like welding in miniature — two metal surfaces fused together by a third, molten one.",
              facts: "A good joint is shiny and cone-shaped. A dull, cracked, or blobby joint is a fault waiting to happen. Iron runs 300–400°C." },
            { type: "numbered", title: "The soldering process", items: [
              { title: "1. Heat the joint", desc: "Touch the iron to both the pad and the lead, not the solder" },
              { title: "2. Feed the solder", desc: "Melt solder onto the heated joint — not onto the iron tip" },
              { title: "3. Remove heat, then solder", desc: "Pull the iron away first, then the solder, let it set" },
              { title: "4. Inspect the result", desc: "Shiny, cone-shaped, no bridges" }
            ]},
            { type: "warning", title: "Bad joint signs", items: [
              "Dull, grainy, or cracked surface — a cold joint",
              "Solder balled up, not wetted to the pad",
              "Bridges connecting two separate pads"
            ]},
            { type: "simulation", sim: "soldering" },
            { type: "check", q: "What should you heat first when making a solder joint?", choices: ["The solder wire directly", "The pad and lead together", "The iron tip only", "Nothing — feed solder cold"], answer: 1, explain: "Heat the pad and lead together, then feed solder onto the heated joint — never melt solder directly onto the iron." }
          ]
        },
        {
          id: "workshop-desoldering",
          title: "Desoldering",
          tag: "Desoldering",
          blocks: [
            { type: "definition",
              plain: "Re-melting existing solder so a component can be lifted free, leaving the pad and track intact.",
              picture: "Like carefully un-gluing something without tearing the paper underneath.",
              facts: "Rushed desoldering is the single biggest cause of lifted pads and ruined boards — patience matters more than speed." },
            { type: "table", headers: ["Tool", "Best for"], rows: [
              ["Solder wick", "Copper braid soaks up melted solder — flat pads"],
              ["Solder sucker (pump)", "Spring-loaded vacuum pulls solder from a hole"],
              ["Hot air rework station", "Even heat for multi-leg parts like ICs"],
              ["Iron + wick combo", "Everyday go-to for through-hole parts"]
            ]},
            { type: "check", q: "What's the single biggest cause of lifted pads when removing a component?", choices: ["Using solder wick", "Rushing the desoldering job", "Using an ESD mat", "Wearing safety glasses"], answer: 1, explain: "Patience matters more than speed — rushing is the #1 cause of lifted pads." }
          ]
        },
        {
          id: "workshop-multimeter",
          title: "The Multimeter",
          tag: "Test Equipment",
          blocks: [
            { type: "diagram", id: "multimeter-dial" },
            { type: "definition",
              plain: "A single meter that measures voltage, resistance, continuity, and current — the first thing you reach for.",
              picture: "Like a doctor's stethoscope — quick checks that tell you where to look closer.",
              facts: "Always start on the highest safe range, and use a CAT-rated meter matched to what you're testing." },
            { type: "numbered", title: "Settings you'll use", items: [
              { title: "Voltage (V)", desc: "Confirms power is present — and how much" },
              { title: "Resistance (Ω)", desc: "Checks a component's value, out of circuit" },
              { title: "Continuity / diode mode", desc: "Beeps on a closed path — fast fault-finding" },
              { title: "Current (A)", desc: "Measured in series — rarely needed, easy to get wrong" }
            ]},
            { type: "tip", text: "Match the probe colours: red = positive, black = common. Wait for the reading to settle." },
            { type: "check", q: "What's the standard multimeter probe colour convention?", choices: ["Red = common, black = positive", "Red = positive, black = common", "Colour is interchangeable", "Both probes are always black"], answer: 1, explain: "Red is always positive; black is common (ground)." }
          ]
        },
        {
          id: "workshop-inspection",
          title: "Inspection & Tool Care",
          tag: "Inspection",
          blocks: [
            { type: "numbered", title: "Inspecting a board", items: [
              { title: "Visual scan", desc: "Burn marks, bulging caps, cracked solder, corrosion" },
              { title: "Magnification", desc: "A loupe or microscope reveals hairline cracks" },
              { title: "Cleaning first", desc: "Isopropyl alcohol removes flux and grime hiding faults" },
              { title: "Document what you find", desc: "Photos and notes before you start" }
            ]},
            { type: "warning", title: "Time to replace a tool", items: [
              "Tip is pitted, worn flat, or won't hold solder",
              "Cutters leave a ragged, torn edge on leads",
              "Meter leads are cracked or reading inconsistently"
            ]},
            { type: "check", q: "What's a clear sign a soldering iron tip needs replacing rather than just cleaning?", choices: ["It's slightly warm", "It's pitted, worn flat, or won't hold solder", "It has flux residue on it", "It was used yesterday"], answer: 1, explain: "A pitted, flattened tip that won't hold solder has reached end of life — cleaning won't fix that." }
          ]
        },
        {
          id: "workshop-reference",
          title: "Quick Tool Reference",
          tag: "Reference",
          blocks: [
            { type: "table", headers: ["Tool", "Use For", "Typical Setting", "Watch For"], rows: [
              ["Soldering iron", "Joining leads to pads", "300–400°C", "Cold, dull joints"],
              ["Solder wick", "Lifting solder off a pad", "Fresh braid", "Lifted or torn pads"],
              ["Multimeter", "Voltage, Ω, continuity", "CAT II+", "Wrong function selected"],
              ["Tweezers", "Placing small SMD parts", "Fine tip", "Static damage without a strap"],
              ["Loupe / microscope", "Close inspection", "10–20x", "Missed hairline cracks"]
            ]},
            { type: "check", q: "What's the typical iron temperature range for everyday soldering?", choices: ["50–100°C", "150–200°C", "300–400°C", "600–700°C"], answer: 2, explain: "Everyday through-hole and simple SMD joints solder well at 300–400°C." }
          ]
        },
        {
          id: "workshop-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Set up an organised, ESD-safe repair bench",
              "Solder a clean, reliable joint from scratch",
              "Desolder a part without damaging the board",
              "Use a multimeter's core settings with confidence",
              "Visually inspect a board before powering it on"
            ]},
            { type: "golden", text: "A tidy, grounded bench prevents more faults than any single tool ever fixes." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Buy the most expensive tools", "A tidy, grounded bench prevents more faults than any single tool ever fixes", "Always solder at maximum heat", "Skip inspection to save time"], answer: 1, explain: "Bench discipline prevents more faults than any one tool ever fixes." }
          ]
        }
      ]
    },

    // ============================================================ MODULE 03: TEST & MEASUREMENT
    {
      id: "test-measurement",
      code: "MOD·03",
      icon: "📈",
      color: "#5bffb0",
      title: "Test & Measurement",
      subtitle: "The instruments that turn guessing into diagnosis.",
      cards: [
        {
          id: "tm-overview",
          title: "The Five Instruments on Every Bench",
          tag: "Overview",
          blocks: [
            { type: "table", headers: ["Instrument", "Answers", "Note"], rows: [
              ["Multimeter", "Voltage, resistance, continuity", "Every job"],
              ["Oscilloscope", "Shows a signal changing over time", "Waveform"],
              ["ESR Meter", "Tests capacitors in-circuit", "In-circuit"],
              ["Bench Supply", "A safe, adjustable power source", "Adjustable"],
              ["Signal Generator", "Injects a known signal to trace faults", "Inject"]
            ]},
            { type: "check", q: "Which instrument would you reach for to see a signal's shape changing over time?", choices: ["Multimeter", "Oscilloscope", "Bench supply", "Fuse"], answer: 1, explain: "An oscilloscope graphs voltage over time — showing shape, not just a single number." }
          ]
        },
        {
          id: "tm-fundamentals",
          title: "Measurement Fundamentals",
          tag: "Fundamentals",
          blocks: [
            { type: "definition",
              plain: "A measurement compares what a circuit is actually doing against what it should be doing — that gap is the fault.",
              picture: "Like a thermometer on a patient — the number alone means nothing until you compare it to what's normal.",
              facts: "Every reading needs a reference: a datasheet value, a known-good board, or a calculated expectation." },
            { type: "numbered", title: "Live vs offline vs in-circuit", items: [
              { title: "Offline testing", desc: "Component removed or isolated — its true, standalone value" },
              { title: "In-circuit testing", desc: "Measured on the board — faster, but nearby parts can skew it" },
              { title: "Live testing", desc: "Power on, circuit running — the only way to catch some faults" }
            ]},
            { type: "check", q: "Why can an in-circuit reading sometimes mislead you compared to an offline one?", choices: ["In-circuit readings are always wrong", "Nearby components can skew the reading", "Offline testing is illegal", "In-circuit mode doesn't exist"], answer: 1, explain: "Neighbouring parts on the board can influence an in-circuit reading, unlike an isolated offline measurement." }
          ]
        },
        {
          id: "tm-multimeter-types",
          title: "Multimeter Types & Markings",
          tag: "Multimeter",
          blocks: [
            { type: "numbered", title: "Types & categories", items: [
              { title: "Analog vs digital", desc: "Digital gives a precise number; analog shows a trend" },
              { title: "Auto-ranging", desc: "Picks the right range automatically" },
              { title: "True-RMS", desc: "Reads AC accurately even on non-sine waveforms" },
              { title: "CAT rating", desc: "Matches the meter to the circuit's energy level — a safety spec, not marketing" }
            ]},
            { type: "warning", title: "Before you blame the circuit", items: [
              "Reads nothing in current mode → check the fuse first",
              "Reading drifts or flickers with the leads still",
              "A dead fuse is more common than a dead meter"
            ]},
            { type: "check", q: "A multimeter reads nothing at all in current mode. What should you check first?", choices: ["The circuit is definitely broken", "The meter's internal fuse", "The battery voltage of the board", "The room temperature"], answer: 1, explain: "A blown internal fuse in the meter is a far more common cause than a dead meter itself." }
          ]
        },
        {
          id: "tm-oscilloscope",
          title: "Oscilloscope",
          tag: "Oscilloscope",
          blocks: [
            { type: "diagram", id: "oscilloscope-wave" },
            { type: "definition",
              plain: "An oscilloscope draws a graph of voltage over time — so you can see a signal's shape, not just its value.",
              picture: "Like a heart-rate monitor — the shape of the trace tells you as much as the number does.",
              facts: "A multimeter gives one number; a scope shows you if that number is steady, pulsing, or corrupted by noise." },
            { type: "numbered", title: "Specs that matter", items: [
              { title: "Bandwidth", desc: "The highest frequency the scope can measure accurately" },
              { title: "Sample rate", desc: "How many points per second it captures" },
              { title: "Channels", desc: "Two or more inputs let you compare signals at once" }
            ]},
            { type: "tip", text: "10x probe is the everyday default. Always connect the ground clip, and trigger on a stable point." },
            { type: "simulation", sim: "oscilloscope" },
            { type: "check", q: "A multimeter shows a steady average voltage, but an LED strip still flickers randomly. What tool reveals the real problem?", choices: ["A bigger multimeter", "An oscilloscope", "A fuse tester", "A screwdriver"], answer: 1, explain: "A scope reveals ripple or noise that a multimeter's averaged reading can hide completely." }
          ]
        },
        {
          id: "tm-specialist",
          title: "ESR Meter & Specialist Tools",
          tag: "Specialist Meters",
          blocks: [
            { type: "definition",
              plain: "ESR (Equivalent Series Resistance) measures a capacitor's internal resistance — high ESR means a worn-out part.",
              picture: "Like checking a battery's health, not just its voltage — a capacitor can read the right value and still be bad.",
              facts: "ESR testing works in-circuit, on a discharged board — no desoldering needed to catch most bad capacitors." },
            { type: "table", headers: ["Tool", "Use"], rows: [
              ["LCR meter", "Precise inductance, capacitance, resistance (out of circuit)"],
              ["Insulation tester", "Checks a winding or cable isn't leaking current"],
              ["Clamp meter", "Reads current without breaking the circuit open"],
              ["Thermal camera", "Spots a component running hotter than its neighbours"]
            ]},
            { type: "check", q: "A capacitor measures the correct capacitance value but the board still resets under load. What's the likely next test?", choices: ["Re-measure capacitance again", "Test the same capacitor's ESR in-circuit", "Replace the whole board", "Ignore it — it must be fine"], answer: 1, explain: "A capacitor can have the right capacitance but high ESR — a sign it's still worn out and failing." }
          ]
        },
        {
          id: "tm-supply-signal",
          title: "Bench Supply & Signal Generator",
          tag: "Power & Signal",
          blocks: [
            { type: "definition",
              plain: "A bench supply provides a clean, adjustable voltage with a current limit — so a fault can't do further damage.",
              picture: "Like testing a car engine on a stand before it goes back on the road — controlled, and safe to fail.",
              facts: "Set the current limit low first — it protects the board (and you) if a short is still present." },
            { type: "numbered", title: "Signal injection", items: [
              { title: "Sine & square waves", desc: "Standard test signals with known shape, amplitude, frequency" },
              { title: "Injecting a signal", desc: "Feed it in at a known point and follow it through the circuit" },
              { title: "Tracing a fault", desc: "The signal disappears exactly where the fault sits" }
            ]},
            { type: "check", q: "Before powering a freshly-repaired board from a bench supply, what should you set first?", choices: ["Maximum voltage", "The current limit, set low", "The AC frequency", "Nothing, just switch it on"], answer: 1, explain: "Setting the current limit low first protects the board if a fault still remains." }
          ]
        },
        {
          id: "tm-choosing",
          title: "Choosing the Right Tool",
          tag: "Method",
          blocks: [
            { type: "numbered", title: "Match the tool to the symptom", items: [
              { title: "Suspect a dead supply?", desc: "Start with the multimeter — voltage first, always" },
              { title: "Suspect noise or timing?", desc: "Reach for the oscilloscope" },
              { title: "Board resets under load?", desc: "Check capacitors in-circuit with an ESR meter" },
              { title: "Need to isolate a stage?", desc: "Inject a signal and trace it with the function generator" }
            ]},
            { type: "tip", text: "Labelled test points (TP1, TP2, GND, VCC) are the designer helping you troubleshoot." },
            { type: "check", q: "You need to isolate exactly which stage of a circuit has failed. Which technique fits best?", choices: ["Measure resistance of the whole board at once", "Inject a known signal and trace where it disappears", "Replace every component", "Guess based on appearance"], answer: 1, explain: "Signal injection and tracing pinpoints exactly where a signal is lost." }
          ]
        },
        {
          id: "tm-reference",
          title: "Quick Instrument Reference",
          tag: "Reference",
          blocks: [
            { type: "table", headers: ["Instrument", "Measures", "Typical Setting", "Watch For"], rows: [
              ["Multimeter", "V · Ω · continuity · A", "CAT II+", "Wrong function selected"],
              ["Oscilloscope", "Waveform over time", "Auto-trigger first", "Ungrounded probe"],
              ["ESR meter", "Capacitor health", "In-circuit, discharged", "Board still charged"],
              ["Bench supply", "Adjustable V · A limit", "Low current limit first", "Limit set too high"],
              ["Signal generator", "Test sine · square wave", "Match circuit rating", "Amplitude too high"]
            ]},
            { type: "check", q: "What should you always connect on an oscilloscope probe before trusting the trace?", choices: ["The ground clip", "A second probe", "A resistor", "Nothing extra is needed"], answer: 0, explain: "An ungrounded probe gives a meaningless trace — always connect the ground clip to the circuit's common." }
          ]
        },
        {
          id: "tm-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Choose live, in-circuit, or offline testing for a fault",
              "Read a waveform on an oscilloscope with confidence",
              "Test a capacitor's health in-circuit with an ESR meter",
              "Use a bench supply and signal generator safely",
              "Trust a reading because you know what it should be"
            ]},
            { type: "golden", text: "A measurement means nothing without something to compare it to." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Always use the most expensive meter", "A measurement means nothing without something to compare it to", "Never test in-circuit", "Scopes replace multimeters entirely"], answer: 1, explain: "Every reading needs a reference — a datasheet, known-good board, or calculation." }
          ]
        }
      ]
    },

    // ============================================================ MODULE 04: REWORK
    {
      id: "rework",
      code: "MOD·04",
      icon: "🔬",
      color: "#c85bff",
      title: "Soldering & PCB Rework",
      subtitle: "Removing, fixing, and reinstalling components without damaging the board.",
      cards: [
        {
          id: "rework-overview",
          title: "The Five Skills of PCB Rework",
          tag: "Overview",
          blocks: [
            { type: "table", headers: ["Skill", "About", "Note"], rows: [
              ["Soldering", "Through-hole and SMD joints", "300–400°C"],
              ["Desoldering", "Removing parts cleanly", "No lifted pads"],
              ["Component Swap", "Right method per part type", "IC vs board"],
              ["BGA Rework", "Chips with hidden solder balls", "Hot air"],
              ["Inspection", "Verifying the repair holds", "Clean + test"]
            ]},
            { type: "check", q: "What's the special challenge with BGA chips during rework?", choices: ["They're always the cheapest part", "Their solder balls are hidden underneath, invisible to the eye", "They never need replacing", "They don't use solder at all"], answer: 1, explain: "BGA joints sit in a hidden grid underneath the chip — you can't inspect a single one directly." }
          ]
        },
        {
          id: "rework-tools-materials",
          title: "Rework Tools & Materials",
          tag: "Tools",
          blocks: [
            { type: "intro", text: "Rework soldering isn't factory assembly — it's precise, one-off work on a board that's already built and populated." },
            { type: "table", headers: ["Tool", "Use"], rows: [
              ["Soldering iron", "Fine-tip, temp-controlled — through-hole & simple SMD"],
              ["Hot air rework station", "Even, contactless heat for multi-leg SMD & BGA"],
              ["Preheater", "Warms the whole board evenly, reduces warping"],
              ["Fume extractor", "Pulls flux fumes away — not optional for daily rework"]
            ]},
            { type: "tip", text: "Solder paste (with hot air) for SMD rework; flux-core wire for everyday through-hole joints." },
            { type: "check", q: "Why is a fume extractor considered essential for daily rework, not optional?", choices: ["It cools the board faster", "It pulls flux fumes away from your face", "It makes joints shinier", "It replaces the need for flux"], answer: 1, explain: "Flux fumes irritate the lungs — a fume extractor protects you during repeated hot air/soldering sessions." }
          ]
        },
        {
          id: "rework-th-smd",
          title: "Through-Hole & SMD Soldering",
          tag: "Soldering",
          blocks: [
            { type: "numbered", title: "Through-hole: how to", items: [
              { title: "1. Insert the lead", desc: "Seat fully against the board before heating" },
              { title: "2. Heat pad and lead together", desc: "Not just the wire" },
              { title: "3. Feed the solder", desc: "Onto the heated joint, not the iron tip" },
              { title: "4. Trim and inspect", desc: "Shiny, cone-shaped result" }
            ]},
            { type: "warning", title: "Common defects", items: [
              "Cold joint — dull, grainy, or cracked",
              "Bridging — solder connecting two separate pads",
              "Tombstoning — one end lifts as the other cools"
            ]},
            { type: "check", q: "What solder defect is described as \"one end lifts as the other cools\"?", choices: ["Bridging", "Cold joint", "Tombstoning", "Wetting"], answer: 2, explain: "Tombstoning happens when uneven heating lifts one end of a small part as the other cools and anchors." }
          ]
        },
        {
          id: "rework-pcb-decision",
          title: "PCB Rework & Removal Methods",
          tag: "PCB Rework",
          blocks: [
            { type: "definition",
              plain: "Rework is removing, replacing, or repairing a component or the board area around it.",
              picture: "Like replacing a single tile on a roof instead of re-roofing the whole house.",
              facts: "Good rework leaves no trace — same footprint, same pad condition, same board integrity." },
            { type: "table", headers: ["Component", "Method", "Tool", "Risk"], rows: [
              ["Through-hole R/C", "Heat both sides, pull", "Iron + wick", "Low, with patience"],
              ["SMD 2-pin part", "Heat both pads together", "Iron or hot air", "Tombstoning if uneven"],
              ["SMD IC (multi-leg)", "Even heat, all legs at once", "Hot air station", "Lifted pads if rushed"],
              ["BGA chip", "Preheat, then top heat", "BGA rework station", "Board warping if uneven"]
            ]},
            { type: "check", q: "What tool matches the removal of a multi-leg SMD IC?", choices: ["A single-point soldering iron only", "A hot air station heating all legs evenly", "A hammer and chisel", "A pair of pliers"], answer: 1, explain: "Multi-leg SMD ICs need even heat across all legs at once — a hot air station does this safely." }
          ]
        },
        {
          id: "rework-ic-vs-board",
          title: "IC-Only vs Whole-Board Replacement",
          tag: "Decision",
          blocks: [
            { type: "table", headers: ["Symptom", "Likely Cause", "Fix"], rows: [
              ["One function fails", "Single IC or part faulty", "IC-only swap"],
              ["Board resets randomly", "Weak capacitor or supply IC", "IC-only swap"],
              ["Burn marks, multiple tracks", "Cascading overcurrent damage", "Whole-board swap"],
              ["Cracked or delaminated PCB", "Physical / structural damage", "Whole-board swap"]
            ]},
            { type: "tip", text: "Repair the smallest thing that fixes the fault." },
            { type: "check", q: "A board shows burn marks and damage across multiple tracks. What's the appropriate fix?", choices: ["Replace just the nearest IC", "Whole-board replacement", "Ignore it and power on anyway", "Apply more solder everywhere"], answer: 1, explain: "Widespread cascading damage across multiple tracks calls for a whole-board swap, not a single IC fix." }
          ]
        },
        {
          id: "rework-bga",
          title: "BGA Rework & Track Repair",
          tag: "BGA",
          blocks: [
            { type: "definition",
              plain: "A BGA chip connects to the board through a hidden grid of solder balls underneath it, not visible legs.",
              picture: "Like a plug with hundreds of tiny contacts hidden under its base — you can't inspect a single one directly.",
              facts: "Removal and reinstallation need a hot air or BGA station, a stencil, and fresh solder balls — reballing, not just reheating." },
            { type: "numbered", title: "Track & pad repair", items: [
              { title: "Bridge a cut track", desc: "A fine jumper wire restores the broken connection" },
              { title: "Rebuild a lifted pad", desc: "A small wire tacked to the nearest good point" },
              { title: "Seal with lacquer", desc: "Protects the repaired area from moisture and corrosion" }
            ]},
            { type: "check", q: "How do you repair a cut track on a board?", choices: ["Ignore it, it doesn't matter", "Bridge it with a fine jumper wire", "Replace the entire board", "Cover it with tape only"], answer: 1, explain: "A fine jumper wire restores the broken electrical connection across a cut track." }
          ]
        },
        {
          id: "rework-cleaning-safety",
          title: "Cleaning, Inspection & Safety",
          tag: "Cleaning & Safety",
          blocks: [
            { type: "numbered", title: "After rework", items: [
              { title: "Clean with isopropyl alcohol", desc: "Removes flux residue" },
              { title: "Magnify every joint", desc: "Catches what your eyes alone will miss" },
              { title: "Continuity check", desc: "Confirm no bridges before power" },
              { title: "Power-on test", desc: "Verify the repaired function actually works" }
            ]},
            { type: "warning", title: "Rework safety", items: [
              "Run the fume extractor during every hot air job",
              "Let hot air nozzles and boards cool before handling",
              "Ground yourself before handling a bare, unpackaged IC"
            ]},
            { type: "check", q: "What's the final step before calling a rework job done?", choices: ["Leave it for someone else to check", "Power-on test to confirm the function actually works", "Just visually check it looks tidy", "Apply extra flux for good luck"], answer: 1, explain: "A repair isn't complete until you've proven the function actually works with a power-on test." }
          ]
        },
        {
          id: "rework-reference",
          title: "Quick Reference: Rework Temperatures",
          tag: "Reference",
          blocks: [
            { type: "table", headers: ["Task", "Tool", "Typical Temp", "Notes"], rows: [
              ["Through-hole solder", "Soldering iron", "300–350°C", "Higher for ground planes"],
              ["SMD hot air removal", "Hot air station", "320–370°C", "Even airflow, no direct point"],
              ["BGA reflow", "BGA / hot air station", "220–245°C peak", "Follow the solder profile"],
              ["Desoldering wick", "Iron + wick", "300–350°C", "Fresh braid absorbs better"]
            ]},
            { type: "check", q: "Roughly what peak temperature does a BGA reflow profile target?", choices: ["100–120°C", "220–245°C", "500–600°C", "It doesn't matter"], answer: 1, explain: "BGA reflow follows a controlled profile peaking around 220–245°C." }
          ]
        },
        {
          id: "rework-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Solder a clean through-hole or SMD joint under rework conditions",
              "Remove a component without lifting a pad or damaging a track",
              "Decide between an IC-only swap and a whole-board replacement",
              "Rework a BGA chip using preheat, hot air, and reballing",
              "Clean, inspect, and verify a repair before calling it done"
            ]},
            { type: "golden", text: "Good rework leaves no trace it ever happened — same footprint, same board, working part." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Speed matters more than precision", "Good rework leaves no trace it ever happened", "Always replace the whole board", "Never use hot air"], answer: 1, explain: "Same footprint, same pad condition, same board integrity — no trace of the repair." }
          ]
        }
      ]
    },

    // ============================================================ MODULE 05: CIRCUIT BUILDING
    {
      id: "circuit-building",
      code: "MOD·05",
      icon: "🧩",
      color: "#5bd8ff",
      title: "Circuit Building",
      subtitle: "From a schematic on paper to a working circuit on the bench.",
      cards: [
        {
          id: "cb-overview",
          title: "The Five Steps From Paper to Bench",
          tag: "Overview",
          blocks: [
            { type: "table", headers: ["Step", "About", "Note"], rows: [
              ["Read It", "Understand the schematic first", "Symbols"],
              ["Breadboard It", "Prototype before anything permanent", "No solder"],
              ["Build It", "Power, input, processing, output", "4 blocks"],
              ["Test It", "Verify before and after power-on", "Trace it"],
              ["Document It", "Record what you built and found", "BOM + notes"]
            ]},
            { type: "check", q: "What's the very first step before you ever touch a breadboard?", choices: ["Solder everything down", "Read and understand the schematic", "Apply power", "Order more parts"], answer: 1, explain: "Understanding the schematic always comes before building anything physical." }
          ]
        },
        {
          id: "cb-schematics",
          title: "Reading Schematics",
          tag: "Schematics",
          blocks: [
            { type: "diagram", id: "schematic-symbols" },
            { type: "definition",
              plain: "A schematic shows how components connect to each other using symbols and lines — not what they physically look like.",
              picture: "Like a subway map — it shows connections and stops clearly, without drawing every street in between.",
              facts: "Signal generally flows left to right, power rails run top and bottom, and ground ties everything to a common reference." },
            { type: "numbered", title: "Reading signal flow", items: [
              { title: "Start at the power source", desc: "Find where energy enters the circuit first" },
              { title: "Follow left to right", desc: "Most schematics flow input to output in reading order" },
              { title: "Watch for feedback loops", desc: "A line looping backward usually means feedback or control" },
              { title: "Find the ground return", desc: "Every path eventually needs a way back to common" }
            ]},
            { type: "table", title: "Common symbols", headers: ["Symbol", "Component", "Key point"], rows: [
              ["Zigzag / box", "Resistor", "Limits current"],
              ["Two parallel lines", "Capacitor", "Stores charge"],
              ["Triangle + bar", "Diode", "Current flows one way"],
              ["Three lines + circle", "Transistor", "Switch or amplifier"]
            ]},
            { type: "check", q: "What does a schematic diagram actually represent?", choices: ["The exact physical size of every part", "How components connect to each other", "The cost of each component", "The manufacturer of each part"], answer: 1, explain: "A schematic is a map of connections, not a picture of physical parts or layout." }
          ]
        },
        {
          id: "cb-breadboard",
          title: "Breadboarding",
          tag: "Breadboarding",
          blocks: [
            { type: "diagram", id: "breadboard-rails" },
            { type: "definition",
              plain: "A breadboard holds components and connects them through internal metal strips — no soldering needed to test an idea.",
              picture: "Like building with reusable blocks instead of gluing every piece down permanently.",
              facts: "It's for prototyping only — never a permanent build, since connections can loosen with vibration or time." },
            { type: "numbered", title: "How the rows connect", items: [
              { title: "Power rails (top & bottom)", desc: "Long strips running the full length, for +V and ground" },
              { title: "Terminal strips (middle)", desc: "Short columns of five holes, all connected vertically" },
              { title: "The centre gap", desc: "Separates the two halves — ICs usually straddle it, NO connection across it" }
            ]},
            { type: "warning", title: "Don't do this", items: [
              "Assume the centre gap is electrically connected",
              "Leave loose, half-inserted leads",
              "Build the entire circuit before testing any of it"
            ]},
            { type: "simulation", sim: "breadboard" },
            { type: "check", q: "Do the two halves of a breadboard connect electrically across the centre gap?", choices: ["Yes, always", "No — the gap breaks the connection", "Only for ICs", "Only if you press hard enough"], answer: 1, explain: "The centre gap has no connection — a very common wiring mistake to assume otherwise." }
          ]
        },
        {
          id: "cb-building",
          title: "The Four Building Blocks",
          tag: "Building",
          blocks: [
            { type: "numbered", title: "Every circuit breaks down into these", items: [
              { title: "Power source", desc: "Battery, adapter, or bench supply — where the energy comes from" },
              { title: "Input", desc: "Switches, sensors, or signals — where information enters" },
              { title: "Processing", desc: "Transistors, ICs, or logic — where decisions are made" },
              { title: "Output", desc: "LEDs, motors, or speakers — where the result appears" }
            ]},
            { type: "numbered", title: "From schematic to breadboard", items: [
              { title: "1. Identify the four blocks", desc: "Mark power, input, processing, output first" },
              { title: "2. Place power rails first", desc: "Wire +V and ground before placing a component" },
              { title: "3. Place components by block", desc: "Power → input → processing → output" },
              { title: "4. Wire the connections last", desc: "Follow the schematic exactly, one net at a time" }
            ]},
            { type: "warning", title: "Common build mistakes", items: [
              "LED or electrolytic capacitor placed backwards",
              "Wrong resistor value, read in a hurry",
              "Whole circuit built and powered before any checks"
            ]},
            { type: "check", q: "What are the four building blocks found in almost every circuit?", choices: ["Power, Input, Processing, Output", "Voltage, Current, Resistance, Power", "Read, Build, Test, Document", "Series, Parallel, AC, DC"], answer: 0, explain: "Every circuit, simple or complex, breaks down into Power, Input, Processing, and Output." }
          ]
        },
        {
          id: "cb-testing",
          title: "Verify & Troubleshoot",
          tag: "Testing",
          blocks: [
            { type: "numbered", title: "Verify before power-on", items: [
              { title: "Check polarity", desc: "Every diode, LED, and electrolytic capacitor oriented correctly" },
              { title: "Check for shorts", desc: "Continuity-test the rails before power ever touches the board" },
              { title: "Check connections", desc: "Every wire seated firmly, no loose leads" },
              { title: "Check power rating", desc: "Confirm the supply voltage matches what the circuit expects" }
            ]},
            { type: "numbered", title: "Systematic troubleshooting", items: [
              { title: "1. Confirm the power stage", desc: "Start at the source" },
              { title: "2. Trace stage by stage", desc: "Input toward output, one block at a time" },
              { title: "3. Compare to expected values", desc: "Schematic or known-good build" },
              { title: "4. Isolate before you replace", desc: "Confirm the exact faulty stage before swapping any part" }
            ]},
            { type: "check", q: "In systematic troubleshooting, what should you confirm first, before tracing anything else?", choices: ["The output stage", "The power stage", "The documentation", "The breadboard colour"], answer: 1, explain: "Start at the source — there's no point testing further downstream without confirmed power." }
          ]
        },
        {
          id: "cb-documentation",
          title: "Documentation & Moving to PCB",
          tag: "Documentation",
          blocks: [
            { type: "definition",
              plain: "Once a breadboard circuit works, it moves to stripboard or a custom PCB for a permanent, solid build.",
              picture: "Like moving from a cardboard model to the finished, built structure.",
              facts: "Re-check every connection during the move — it's a fresh build, not just a copy of the breadboard." },
            { type: "numbered", title: "Documenting your build", items: [
              { title: "Keep the schematic", desc: "The reference every future repair starts from" },
              { title: "List your components (BOM)", desc: "Values, part numbers, and quantities" },
              { title: "Photograph the build", desc: "Catches wiring mistakes notes alone might miss" },
              { title: "Record your test results", desc: "Voltages and behaviour when known-good" }
            ]},
            { type: "check", q: "Why re-check every connection when moving a working breadboard circuit to a permanent PCB?", choices: ["It's not necessary, just copy it exactly", "It's a fresh build, not just a copy — mistakes can creep in", "PCBs never have wiring errors", "Breadboards are always wired identically to PCBs"], answer: 1, explain: "Treat the move to a permanent board as a fresh build deserving its own careful check." }
          ]
        },
        {
          id: "cb-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Read a schematic and trace its signal flow",
              "Prototype a circuit correctly on a breadboard",
              "Identify the four building blocks in any circuit",
              "Verify a build before and after power-on",
              "Document a finished build so it can be repaired later"
            ]},
            { type: "golden", text: "A schematic is a map — trace the path before you ever pick up a component." },
            { type: "check", q: "What's the golden rule of this module?", choices: ["Never document your builds", "A schematic is a map — trace the path before you pick up a component", "Always skip breadboarding", "Power on before checking polarity"], answer: 1, explain: "Understanding the schematic always comes before touching any part." }
          ]
        }
      ]
    },
  ],

  // ================================================================ QUESTIONS
  questions: [
    // --- components
    { id: "q-comp-1", module: "components", q: "What unit is resistance measured in?", choices: ["Farads", "Henrys", "Ohms", "Volts"], answer: 2, explain: "Resistance is measured in ohms (Ω)." },
    { id: "q-comp-2", module: "components", q: "An SMD resistor is printed \"103\". What value is it?", choices: ["103 Ω", "1.03 kΩ", "10,000 Ω (10 kΩ)", "1,030 Ω"], answer: 2, explain: "103 = 10 then 3 zeros = 10,000 Ω." },
    { id: "q-comp-3", module: "components", q: "Which component is typically polarized and must go in the right way round?", choices: ["Fixed resistor", "Electrolytic capacitor", "Air-core inductor", "Ceramic disc capacitor"], answer: 1, explain: "Electrolytics are polarized — + and − matter." },
    { id: "q-comp-4", module: "components", q: "What meter setting tests a resistor out of circuit?", choices: ["Diode mode", "Capacitance", "Ohms (resistance)", "AC voltage"], answer: 2, explain: "Set the meter to Ω and compare to the marked value." },
    { id: "q-comp-5", module: "components", q: "A capacitor is bulging or vented on top. What should you do?", choices: ["Nothing, it's normal", "Replace it", "Reverse its polarity", "Increase the voltage"], answer: 1, explain: "Bulging/vented tops mean the capacitor has failed — replace it." },
    { id: "q-comp-6", module: "components", q: "An inductor stores energy in what form?", choices: ["A magnetic field", "An electric field", "Heat", "Light"], answer: 0, explain: "Current through the coil builds a magnetic field." },
    { id: "q-comp-7", module: "components", q: "What is the typical forward voltage drop of a silicon diode?", choices: ["~0.1 V", "~0.7 V", "~2.5 V", "~5 V"], answer: 1, explain: "Silicon diodes drop about 0.7 V; Schottky types drop about 0.3 V." },
    { id: "q-comp-8", module: "components", q: "What does the stripe on a diode's body mark?", choices: ["The anode (+)", "The cathode (−)", "The gate", "Nothing important"], answer: 1, explain: "The stripe marks the cathode — current exits there." },
    { id: "q-comp-9", module: "components", q: "What are the three legs of a BJT transistor?", choices: ["Gate, Drain, Source", "Base, Collector, Emitter", "Anode, Cathode, Gate", "Input, Output, Ground"], answer: 1, explain: "BJTs use Base, Collector, Emitter; MOSFETs use Gate, Drain, Source." },
    { id: "q-comp-10", module: "components", q: "In the LED Indicator project (9V battery, LED drop ≈2V, target 15mA), why is 470Ω chosen over a calculated 350Ω?", choices: ["470Ω is cheaper", "It's the next standard resistor value", "It gives more current", "It's required by the LED"], answer: 1, explain: "350Ω isn't a standard value, so you round up to the nearest standard: 470Ω." },
    { id: "q-comp-11", module: "components", q: "A ceramic capacitor is printed \"104\". What value is that?", choices: ["104 pF", "10.4 nF", "100 nF", "1.04 µF"], answer: 2, explain: "104 = 10 then 4 zeros pF = 100,000 pF = 100 nF." },
    { id: "q-comp-12", module: "components", q: "What is the golden rule of the Components module?", choices: ["Always use the highest wattage resistor", "Power off and discharge capacitors before you probe anything", "Never use SMD parts", "Test every part with a scope"], answer: 1, explain: "Safety first — always power off and discharge caps before probing." },

    // --- protection-signal
    { id: "q-ps-1", module: "protection-signal", q: "What deliberately melts to break a circuit on overcurrent?", choices: ["Fuse", "Varistor", "TRIAC", "Diode"], answer: 0, explain: "A fuse is a thin wire that melts and breaks the circuit on overcurrent." },
    { id: "q-ps-2", module: "protection-signal", q: "What does a varistor (MOV) do?", choices: ["Amplifies a signal", "Clamps voltage surges", "Counts pulses", "Generates a waveform"], answer: 1, explain: "A varistor is a voltage-dependent resistor that clamps surges." },
    { id: "q-ps-3", module: "protection-signal", q: "What component fires a TRIAC's gate cleanly in a dimmer circuit?", choices: ["DIAC", "SCR", "Zener diode", "Fuse"], answer: 0, explain: "The DIAC delivers a sharp trigger pulse to the TRIAC's gate." },
    { id: "q-ps-4", module: "protection-signal", q: "How does an SCR typically fail?", choices: ["Open, no continuity", "Shorted (stuck on)", "It disappears", "It becomes a resistor"], answer: 1, explain: "SCRs commonly fail shorted, staying stuck on." },
    { id: "q-ps-5", module: "protection-signal", q: "Which signal block increases a signal's level (gain > 1)?", choices: ["Attenuator", "Filter", "Amplifier", "Counter"], answer: 2, explain: "An amplifier boosts a signal; gain is greater than 1." },
    { id: "q-ps-6", module: "protection-signal", q: "Which block passes only a chosen band of frequencies?", choices: ["Oscillator", "Filter", "Counter", "Amplifier"], answer: 1, explain: "A filter passes low-pass, high-pass, band-pass, or notch bands." },
    { id: "q-ps-7", module: "protection-signal", q: "Which block generates a repeating waveform with no input signal?", choices: ["Attenuator", "Filter", "Oscillator", "Amplifier"], answer: 2, explain: "An oscillator produces its own sine, square, or triangle wave." },
    { id: "q-ps-8", module: "protection-signal", q: "In the 555+4017 LED chaser, what does the 4017 do?", choices: ["Generates the clock", "Counts pulses and steps one LED at a time", "Amplifies the LED signal", "Filters noise"], answer: 1, explain: "The 4017 is a decade counter — it lights one output per clock pulse." },
    { id: "q-ps-9", module: "protection-signal", q: "In the TRIAC dimmer, roughly what voltage does the DIAC break over at?", choices: ["~3 V", "~30 V", "~230 V", "~470 V"], answer: 1, explain: "The DIAC breaks over at about 30 V, firing the TRIAC's gate." },
    { id: "q-ps-10", module: "protection-signal", q: "What is the golden rule for Part 2 (Protection & Signal Devices)?", choices: ["Always test live", "Mains circuits like the dimmer are for supervised, isolated-bench work only", "Never use a DIAC", "Fuses can be replaced with any rating"], answer: 1, explain: "Mains-connected projects need supervision and isolation." },

    // --- safety
    { id: "q-safety-1", module: "safety", q: "What actually injures you in an electric shock?", choices: ["Voltage", "Current", "Resistance", "Frequency"], answer: 1, explain: "It's current (mA) through the body, not voltage, that causes harm." },
    { id: "q-safety-2", module: "safety", q: "At roughly what current level does breathing become difficult?", choices: ["1 mA", "10 mA", "30 mA", "100+ mA"], answer: 2, explain: "30 mA is the level where breathing becomes difficult." },
    { id: "q-safety-3", module: "safety", q: "At roughly what current can a shock stop the heart?", choices: ["1 mA", "10 mA", "30 mA", "100+ mA"], answer: 3, explain: "100+ mA can be fatal, stopping the heart." },
    { id: "q-safety-4", module: "safety", q: "About how many volts of static can a person actually feel?", choices: ["~100 V", "~500 V", "~3,000 V", "~10,000 V"], answer: 2, explain: "You feel a static spark at around 3,000 V." },
    { id: "q-safety-5", module: "safety", q: "How many volts of ESD can destroy many ICs?", choices: ["~10,000 V", "~3,000 V", "~1,000 V", "~100 V"], answer: 3, explain: "Many ICs are destroyed by as little as 100 V — far less than you can feel." },
    { id: "q-safety-6", module: "safety", q: "A board has been unplugged for five minutes. Is it definitely safe to touch?", choices: ["Yes, always", "No — large capacitors can hold charge for hours", "Only if it's a laptop", "Yes, if the LED is off"], answer: 1, explain: "Charged capacitors can retain energy for hours after power-off." },
    { id: "q-safety-7", module: "safety", q: "What class of fire extinguisher is used for electrical fires?", choices: ["Class A", "Class B", "Class C", "Class D"], answer: 2, explain: "Class C extinguishers are rated for electrical fires." },
    { id: "q-safety-8", module: "safety", q: "What is the \"one-hand rule\" for live testing?", choices: ["Only use one meter probe", "Keep your free hand off the chassis or any earthed surface", "Only test with your dominant hand", "Use one tool at a time"], answer: 1, explain: "Keeping a hand off earthed surfaces avoids current crossing your chest." },
    { id: "q-safety-9", module: "safety", q: "What is the very first thing to do if someone is being shocked?", choices: ["Grab them and pull them away", "Cut the power at the source", "Pour water on them", "Wait for them to let go"], answer: 1, explain: "Cut the power first — never touch them directly." },
    { id: "q-safety-10", module: "safety", q: "What temperature does a soldering iron typically run at?", choices: ["50–100°C", "150–200°C", "300–400°C", "600–700°C"], answer: 2, explain: "Soldering irons typically run at 300–400°C." },
    { id: "q-safety-11", module: "safety", q: "What is the golden rule of the Safety module?", choices: ["Always wear gloves", "Power off, discharge caps, and ground yourself before probing", "Never use a multimeter live", "Solder only in the dark"], answer: 1, explain: "This combined habit protects you and the board every time." },

    // --- workshop
    { id: "q-workshop-1", module: "workshop", q: "What temperature range covers most everyday soldering joints?", choices: ["100–150°C", "300–350°C", "500–550°C", "700–750°C"], answer: 1, explain: "Most work sits around 300–350°C." },
    { id: "q-workshop-2", module: "workshop", q: "What does a good solder joint look like?", choices: ["Dull and grainy", "Shiny and cone-shaped", "Balled up", "Cracked"], answer: 1, explain: "A good joint is smooth, shiny, and cone-shaped." },
    { id: "q-workshop-3", module: "workshop", q: "What is the single biggest cause of lifted pads?", choices: ["Using flux", "Rushing desoldering", "Using an ESD mat", "Using tweezers"], answer: 1, explain: "Rushed desoldering is the number-one cause of lifted pads." },
    { id: "q-workshop-4", module: "workshop", q: "Which tool is copper braid that soaks up melted solder?", choices: ["Solder sucker", "Solder wick", "Hot air station", "Tweezers"], answer: 1, explain: "Solder wick is copper braid used to lift solder off flat pads." },
    { id: "q-workshop-5", module: "workshop", q: "Which multimeter setting confirms power is present?", choices: ["Resistance (Ω)", "Voltage (V)", "Capacitance", "Continuity"], answer: 1, explain: "Voltage mode confirms power is present, and how much." },
    { id: "q-workshop-6", module: "workshop", q: "Which multimeter mode beeps on a closed path for fast fault-finding?", choices: ["Voltage", "Current", "Continuity / diode mode", "Capacitance"], answer: 2, explain: "Continuity mode beeps when there's a closed electrical path." },
    { id: "q-workshop-7", module: "workshop", q: "What is the standard probe colour convention on a multimeter?", choices: ["Red = common, black = positive", "Red = positive, black = common", "Both are interchangeable", "Colour doesn't matter"], answer: 1, explain: "Red is positive, black is common (ground)." },
    { id: "q-workshop-8", module: "workshop", q: "For wire gauge (AWG), what does a smaller number mean?", choices: ["Thinner wire, less current", "Thicker wire, more current capacity", "No relation to thickness", "Higher voltage rating only"], answer: 1, explain: "A smaller AWG number means a thicker wire with higher current capacity." },
    { id: "q-workshop-9", module: "workshop", q: "What's a sign a soldering iron tip needs replacing, not just cleaning?", choices: ["It's slightly discoloured", "It's pitted, worn flat, or won't hold solder", "It's warm", "It has flux on it"], answer: 1, explain: "A pitted or worn tip that won't hold solder needs replacing." },
    { id: "q-workshop-10", module: "workshop", q: "What is the golden rule of the Workshop Skills module?", choices: ["Buy the most expensive tools", "A tidy, grounded bench prevents more faults than any single tool fixes", "Always solder at maximum heat", "Skip inspection to save time"], answer: 1, explain: "Bench discipline prevents more faults than any one tool fixes." },

    // --- test-measurement
    { id: "q-tm-1", module: "test-measurement", q: "What does an ESR meter test?", choices: ["Resistor colour codes", "A capacitor's health in-circuit", "Diode forward voltage", "Transistor gain"], answer: 1, explain: "ESR (Equivalent Series Resistance) reveals a worn-out capacitor in-circuit." },
    { id: "q-tm-2", module: "test-measurement", q: "Which instrument shows a signal's shape changing over time?", choices: ["Multimeter", "Oscilloscope", "ESR meter", "Bench supply"], answer: 1, explain: "An oscilloscope graphs voltage over time, showing the signal's shape." },
    { id: "q-tm-3", module: "test-measurement", q: "What's the everyday default oscilloscope probe setting?", choices: ["1x probe", "10x probe", "100x probe", "No probe needed"], answer: 1, explain: "The 10x probe, which attenuates the signal, is the everyday default." },
    { id: "q-tm-4", module: "test-measurement", q: "What should you set first on a bench power supply before powering a repaired board?", choices: ["Maximum voltage", "Current limit, set low", "Frequency", "Nothing, just switch it on"], answer: 1, explain: "Set the current limit low first — it protects the board if a fault remains." },
    { id: "q-tm-5", module: "test-measurement", q: "What does a True-RMS multimeter do better than a standard one?", choices: ["Measures resistance more precisely", "Reads AC accurately on non-sine waveforms", "Tests capacitors in-circuit", "Displays waveforms"], answer: 1, explain: "True-RMS meters read AC accurately even on non-sine waveforms." },
    { id: "q-tm-6", module: "test-measurement", q: "What does a multimeter's CAT rating indicate?", choices: ["Its brand category", "The energy level/environment it's safely rated for", "Its display resolution", "Its price tier"], answer: 1, explain: "CAT rating is a safety spec matched to the circuit's energy level." },
    { id: "q-tm-7", module: "test-measurement", q: "Which type of testing can give a misleading reading because nearby parts skew it?", choices: ["Offline testing", "In-circuit testing", "Both equally", "Neither"], answer: 1, explain: "In-circuit readings can be skewed by neighbouring components." },
    { id: "q-tm-8", module: "test-measurement", q: "Which tool measures current without breaking the circuit open?", choices: ["Clamp meter", "ESR meter", "LCR meter", "Insulation tester"], answer: 0, explain: "A clamp meter reads current by clamping around a wire — no need to break the circuit." },
    { id: "q-tm-9", module: "test-measurement", q: "What tool injects a known signal to trace where a fault sits?", choices: ["Thermal camera", "Signal/function generator", "Insulation tester", "Fuse"], answer: 1, explain: "A signal generator injects a known waveform; the fault is where the signal disappears." },
    { id: "q-tm-10", module: "test-measurement", q: "What is the golden rule of the Test & Measurement module?", choices: ["Always use the most expensive meter", "A measurement means nothing without something to compare it to", "Never test in-circuit", "Scopes replace multimeters entirely"], answer: 1, explain: "Every reading needs a reference — a datasheet, known-good board, or calculation." },

    // --- rework
    { id: "q-rework-1", module: "rework", q: "What's the biggest risk of forcing a part off before every joint has released?", choices: ["Nothing, it's fine", "Lifted pads or damaged tracks", "The part gets cleaner", "Faster repair time"], answer: 1, explain: "Forcing a part off before joints release risks lifting pads or tracks." },
    { id: "q-rework-2", module: "rework", q: "How does a BGA chip connect to the board?", choices: ["Through visible legs", "Through a hidden grid of solder balls underneath", "Through a single central pin", "It's glued, not soldered"], answer: 1, explain: "BGA chips use a hidden grid of solder balls under the package." },
    { id: "q-rework-3", module: "rework", q: "Why preheat the whole board during BGA rework?", choices: ["To speed up the job only", "To reduce thermal shock and warping", "To clean the board", "It's not necessary"], answer: 1, explain: "Preheating reduces thermal shock and warping across the whole board." },
    { id: "q-rework-4", module: "rework", q: "When should you replace the whole board instead of just the faulty IC?", choices: ["Whenever any part fails", "When damage is widespread — multiple tracks or an unrepairable pad", "Every single repair", "Never — always swap just the IC"], answer: 1, explain: "Widespread damage or a ruined footprint calls for a whole-board swap." },
    { id: "q-rework-5", module: "rework", q: "How do you repair a cut track on a board?", choices: ["Ignore it", "Bridge it with a fine jumper wire", "Replace the whole board", "Cover it with tape only"], answer: 1, explain: "A fine jumper wire restores the broken connection across a cut track." },
    { id: "q-rework-6", module: "rework", q: "What solvent is commonly used to clean flux residue after rework?", choices: ["Water", "Isopropyl alcohol", "Vinegar", "Acetone on plastics"], answer: 1, explain: "Isopropyl alcohol removes flux residue that can hide problems." },
    { id: "q-rework-7", module: "rework", q: "What solder defect is described as \"one end lifts as the other cools\"?", choices: ["Bridging", "Cold joint", "Tombstoning", "Wetting"], answer: 2, explain: "Tombstoning is when one end of a component lifts as the other cools." },
    { id: "q-rework-8", module: "rework", q: "Why is a fume extractor considered essential for daily rework?", choices: ["It cools the board", "It pulls flux fumes away from your face", "It amplifies signals", "It measures ESR"], answer: 1, explain: "A fume extractor protects you from flux fumes during hot air jobs." },
    { id: "q-rework-9", module: "rework", q: "What is the golden rule of the PCB Rework module?", choices: ["Speed matters more than precision", "Good rework leaves no trace it ever happened", "Always replace the whole board", "Never use hot air"], answer: 1, explain: "Same footprint, same pad condition, same board integrity — no trace of repair." },

    // --- circuit-building
    { id: "q-cb-1", module: "circuit-building", q: "What does a schematic primarily show?", choices: ["The physical size of parts", "How components connect to each other", "The exact colour of components", "Manufacturing cost"], answer: 1, explain: "A schematic is a map of connections, not a picture of physical parts." },
    { id: "q-cb-2", module: "circuit-building", q: "On a standard breadboard, do the two halves across the centre gap connect electrically?", choices: ["Yes, always", "No", "Only for ICs", "Only if you press hard"], answer: 1, explain: "The centre gap has no connection — a common wiring mistake to assume otherwise." },
    { id: "q-cb-3", module: "circuit-building", q: "What are the four building blocks found in almost every circuit?", choices: ["Power, Input, Processing, Output", "Voltage, Current, Resistance, Power", "Read, Build, Test, Document", "Series, Parallel, AC, DC"], answer: 0, explain: "Every circuit breaks down into Power, Input, Processing, and Output." },
    { id: "q-cb-4", module: "circuit-building", q: "What should you place first when moving a schematic onto a breadboard?", choices: ["The largest IC", "Power rails (+V and ground)", "The output LEDs", "Random components"], answer: 1, explain: "Wire +V and ground before placing a single component." },
    { id: "q-cb-5", module: "circuit-building", q: "What should you check before ever applying power to a new build?", choices: ["Nothing, just power it on", "Polarity, shorts, connections, and power rating", "Only the LED colour", "The breadboard brand"], answer: 1, explain: "A five-minute check beats a five-hour rebuild." },
    { id: "q-cb-6", module: "circuit-building", q: "Which schematic symbol is a triangle pointing to a bar?", choices: ["Resistor", "Capacitor", "Diode", "Transistor"], answer: 2, explain: "A triangle + bar represents a diode — current flows one way." },
    { id: "q-cb-7", module: "circuit-building", q: "What is a breadboard meant for?", choices: ["Permanent final builds", "Prototyping only, never permanent", "Only high-voltage work", "Replacing a PCB entirely"], answer: 1, explain: "Breadboards are for prototyping — connections can loosen over time." },
    { id: "q-cb-8", module: "circuit-building", q: "In systematic troubleshooting, what should you confirm first?", choices: ["The output stage", "The power stage", "The documentation", "The breadboard colour"], answer: 1, explain: "Start at the source — there's no point testing further without power." },
    { id: "q-cb-9", module: "circuit-building", q: "What is the golden rule of the Circuit Building module?", choices: ["Never document your builds", "A schematic is a map — trace the path before you pick up a component", "Always skip breadboarding", "Power on before checking polarity"], answer: 1, explain: "Understanding the schematic comes before touching any part." },

  ]
};
