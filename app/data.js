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
            { type: "check", questions: [
              { q: "Which of these five parts is the odd one out for having polarity (a + and − side) that matters?", choices: ["Resistor", "Diode", "Fixed resistor", "None of them"], answer: 1, explain: "Diodes (and electrolytic capacitors) are polarized. Plain resistors fit either way round.", why: ["The table lists no polarity concern for resistors", "", "A fixed resistor is still a resistor and has no polarity", "The whole point of the question is that one part IS the odd one out"] },
              { q: "Per the table, what is a resistor's job?", choices: ["Limits current", "Stores charge", "Stores energy", "One-way valve"], answer: 0, explain: "The table lists 'Limits current' as the resistor's job, measured in ohms.", why: ["", "That's the capacitor's job, not the resistor's", "That's the inductor's job, not the resistor's", "That's the diode's job, not the resistor's"] },
              { q: "Per the table, what is a capacitor's job?", choices: ["Stores charge", "Limits current", "Switch / amplify", "One-way valve"], answer: 0, explain: "The table lists 'Stores charge' as the capacitor's job, measured in farads.", why: ["", "That's the resistor's job, not the capacitor's", "That's the transistor's job, not the capacitor's", "That's the diode's job, not the capacitor's"] },
              { q: "Per the table, what unit is an inductor measured in?", choices: ["Henrys (H)", "Farads (F)", "Ohms (Ω)", "Vf (V)"], answer: 0, explain: "The table lists Henrys (H) as the inductor's unit.", why: ["", "Farads are the capacitor's unit", "Ohms are the resistor's unit", "Vf (forward voltage) is listed for the diode"] },
              { q: "Per the table, what is a transistor's job?", choices: ["Switch / amplify", "Limits current", "Stores charge", "Stores energy"], answer: 0, explain: "The table lists 'Switch / amplify' as the transistor's job, measured in gain (hFE).", why: ["", "That's the resistor's job, not the transistor's", "That's the capacitor's job, not the transistor's", "That's the inductor's job, not the transistor's"] }
            ] }
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
            { type: "check", questions: [
              { q: "A resistor reads OL on the meter's Ω setting. What does that mean?", choices: ["It's brand new and unused", "It's open — burnt or cracked, replace it", "It's reading exactly zero ohms", "The meter needs new batteries"], answer: 1, explain: "OL (over limit / open) on Ω mode means the resistive element has broken internally.", why: ["Being unused has no bearing on the reading; even a new resistor should read its marked value", "", "OL means infinite resistance (open), the opposite of zero ohms", "A dead meter battery typically shows a low-battery icon, not a specific OL reading on a live measurement"] },
              { q: "Per the 'What it does' list, what does a pull-up or pull-down resistor do?", choices: ["Holds a signal line steady HIGH or LOW", "Limits current into LEDs", "Sets a voltage divider", "Controls motor speed"], answer: 0, explain: "The list specifically describes pull-up/pull-down resistors as holding a signal line steady at a HIGH or LOW level.", why: ["", "That's the 'Protects parts' item, not pull-up/pull-down", "That's the 'Sets voltage' item, not pull-up/pull-down", "That's the 'Controls behaviour' item, not pull-up/pull-down"] },
              { q: "Per the Types table, what does a thermistor sense?", choices: ["Temperature", "Light level", "Voltage surges", "User adjustment"], answer: 0, explain: "The table lists the thermistor's purpose as 'Senses temperature', built from a metal-oxide bead.", why: ["", "Sensing light is the photoresistor's purpose, not the thermistor's", "Clamping voltage surges is the varistor's purpose, not the thermistor's", "User-adjustable value is the variable resistor's purpose, not the thermistor's"] },
              { q: "Per the bench-test steps, what's the very first thing to do before testing a resistor?", choices: ["Power OFF — it measures best out-of-circuit", "Set the meter to capacitance mode", "Discharge the resistor", "Reverse the probes"], answer: 0, explain: "Step 1 is powering off, since a resistor measures best out-of-circuit with no other power source interfering.", why: ["", "Capacitance mode is for capacitors, not resistors", "Discharging applies to capacitors, not resistors — resistors don't store charge like that", "Resistors have no polarity, so probe direction isn't the first concern"] },
              { q: "Per the tip box, what does the color code Brown-Black-Red-Gold represent?", choices: ["1 kΩ ±5%", "10 kΩ ±10%", "100 Ω ±1%", "1 MΩ ±5%"], answer: 0, explain: "The tip explicitly decodes Brown-Black-Red-Gold as 1 kΩ ±5%.", why: ["", "That would require a different set of color bands", "That would require a different set of color bands and tolerance color", "That would require an extra multiplier band, not Red"] }
            ] }
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
            { type: "check", questions: [
              { q: "You see a bulging, vented electrolytic capacitor on a board. What should you do?", choices: ["Leave it, bulging is normal", "Replace it — it has failed", "Reverse its polarity", "Increase its voltage rating and reuse it"], answer: 1, explain: "A bulging or vented top is a clear sign the capacitor has failed and needs replacing.", why: ["The warning box lists bulging/vented as a failure sign, not a normal condition", "", "Reversing an electrolytic capacitor's polarity is dangerous and doesn't fix a failed part", "A failed capacitor should be replaced with an equivalent, not reused with a different rating"] },
              { q: "Per the 'What it does' list, what does decoupling refer to?", choices: ["A local energy reserve placed beside each chip", "Flattening bumpy DC after the rectifier", "Coupling a signal between two stages", "Setting delays with a resistor (RC timing)"], answer: 0, explain: "Decoupling is described as a local energy reserve beside each chip, ready to supply sudden current demands.", why: ["", "That describes 'Smooths power', a different list item", "That describes 'Blocks DC, passes AC', a different list item", "That describes 'Timing', a different list item"] },
              { q: "Per the Types table, what makes a tantalum capacitor distinct?", choices: ["Powder + oxide construction, polarised, compact — high value in a small size", "Stacked layers, non-polar, small value", "Plastic dielectric, non-polar, accurate mid-range values", "Overlapping plates with a screw, set-once tuning"], answer: 0, explain: "The table describes tantalum capacitors as powder + oxide, polarised, and compact — offering high value in a small size.", why: ["", "That describes the ceramic type, not tantalum", "That describes the film type, not tantalum", "That describes the variable type, not tantalum"] },
              { q: "Per the bench-test steps, what must you do before testing a capacitor?", choices: ["Discharge the cap first — it can shock you", "Set the meter to Ω mode", "Reverse the leads", "Heat it briefly to check its rating"], answer: 0, explain: "Step 1 explicitly warns to discharge the capacitor first, since a charged cap can deliver a shock.", why: ["", "Capacitors are tested in capacitance mode, not Ω mode, per step 2", "The steps describe reading the printed value, not reversing leads", "Heating a capacitor is never part of this bench test and would be unsafe"] },
              { q: "Per the tip box, what does the ceramic marking '104' mean?", choices: ["10 then 4 zeros pF = 100 nF", "104 volts rating", "104 pF exactly", "10.4 µF"], answer: 0, explain: "The tip decodes ceramic code 104 as 10 followed by 4 zeros in picofarads, which equals 100 nF.", why: ["", "The three-digit ceramic code represents capacitance, not a voltage rating", "The code isn't read as a literal picofarad value — the third digit is a zero-count multiplier", "The ceramic code system doesn't produce this value from '104'"] }
            ] }
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
            { type: "check", questions: [
              { q: "What should a healthy inductor read on an ohmmeter?", choices: ["OL (infinite)", "Very low resistance, near a short", "Exactly the same as a resistor", "It cannot be measured with a multimeter"], answer: 1, explain: "A coil of wire is nearly a plain conductor, so a good inductor reads very low Ω.", why: ["OL means a broken winding — the failure mode, not the healthy state", "", "A resistor's reading matches its marked value; an inductor's coil reads near-zero, which is different", "An ohmmeter can measure a healthy inductor's coil resistance, just not its true inductance"] },
              { q: "Per the 'What it does' list, what do ferrite beads and chokes do?", choices: ["Block noise — kill high-frequency hash", "Smooth current with a capacitor as an LC filter", "Store energy in switch-mode supplies", "Form the core of transformers and motors"], answer: 0, explain: "The list describes ferrite beads and chokes as blocking noise by killing high-frequency hash.", why: ["", "That describes the 'Smooths current' item, not ferrite beads/chokes", "That describes the 'Stores energy' item, not ferrite beads/chokes", "That describes the 'Building block' item, not ferrite beads/chokes"] },
              { q: "Per the Types table, what makes a toroidal inductor distinct?", choices: ["Wound on a ring core — low leakage, compact", "Coil with no magnetic core at all", "Coil on laminated iron for large L at low frequency", "Ferrite over a wire, blocking high-frequency noise"], answer: 0, explain: "The table describes the toroidal type as wound on a ring core, giving low leakage in a compact form.", why: ["", "That describes the air-core type, not toroidal", "That describes the iron-core type, not toroidal", "That describes the choke/bead type, not toroidal"] },
              { q: "Per the warning box, what does a cracked ferrite core indicate?", choices: ["The inductor is damaged", "The inductor is functioning normally", "The inductor needs to be recharged", "The inductor's polarity is reversed"], answer: 0, explain: "The warning box lists a cracked ferrite core as a sign of damage.", why: ["", "The warning box explicitly lists this as a failure sign, not normal operation", "Inductors don't store charge that gets 'recharged' the way capacitors do", "Inductors have no polarity, per the definition block's facts line"] },
              { q: "Per the definition block's facts line, does an inductor have polarity, and what unit is it measured in?", choices: ["No polarity — measured in henrys (H)", "Has polarity — measured in farads (F)", "No polarity — measured in ohms (Ω)", "Has polarity — measured in henrys (H)"], answer: 0, explain: "The facts line states inductors are measured in henrys (µH, mH for real parts) and have no polarity — just a coil on a core.", why: ["", "Farads are the capacitor's unit, and inductors have no polarity at all", "Ohms are what you read on a meter testing it, not the unit it's specified in", "Inductors explicitly have no polarity per the facts line"] }
            ] }
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
            { type: "check", questions: [
              { q: "Testing a diode in Diode mode, the meter reads OL in BOTH directions. What's the verdict?", choices: ["Perfectly healthy", "Faulty — open junction", "Reversed but fine", "Needs a higher voltage meter"], answer: 1, explain: "A healthy diode reads ~0.5–0.7V one way and OL the other. OL both ways means the junction has failed open.", why: ["A healthy diode reads OL only in ONE direction, not both", "", "Reversing the probes on a healthy diode would flip which direction reads OL, not make both read OL", "This is a meter-mode reading issue with the part, not a limitation of the meter's voltage range"] },
              { q: "Per the 'What it does' list, what does a diode do when it 'emits light'?", choices: ["An LED lights when forward-biased", "It rectifies AC into DC", "It blocks reverse polarity", "It holds a steady reference voltage"], answer: 0, explain: "The list specifically states an LED lights when forward-biased, under the 'Emits light' item.", why: ["", "That describes the 'Rectifies' item, not 'Emits light'", "That describes the 'Protects' item, not 'Emits light'", "That describes the 'References voltage' item (a Zener), not 'Emits light'"] },
              { q: "Per the Types table, what does a Zener diode do?", choices: ["Holds a fixed voltage — voltage reference / clamp", "Rectifies AC to DC at high current", "Provides a low drop at very fast switching", "Absorbs transient spikes for ESD protection"], answer: 0, explain: "The table lists the Zener's purpose as holding a fixed voltage, used as a voltage reference or clamp.", why: ["", "That describes the Rectifier type, not Zener", "That describes the Schottky type, not Zener", "That describes the TVS type, not Zener"] },
              { q: "Per the bench-test steps, how should the meter probes be placed to test a diode?", choices: ["Red on anode, black on cathode", "Black on anode, red on cathode", "Either probe on either lead — polarity doesn't matter", "Both probes on the same lead"], answer: 0, explain: "Step 2 specifically instructs placing red on the anode and black on the cathode.", why: ["", "This is reversed from the correct probe placement given in step 2", "Diodes are polarized, so probe placement does matter — that's the whole point of the diode test", "Testing requires touching each lead separately, not both probes on the same one"] },
              { q: "Per the tip box, how can you identify an LED's anode lead by sight?", choices: ["The longer leg is the anode (+)", "The shorter leg is the anode (+)", "The anode is always marked with a stripe", "Both legs are the same length; only color marks polarity"], answer: 0, explain: "The tip states the LED's longer leg is the anode (+).", why: ["", "The tip specifically says the longer leg, not the shorter one, is the anode", "A stripe marking the cathode is mentioned for diodes generally, not as the specific LED-identification tip given here", "The tip specifically uses leg length, not leg color, to identify polarity"] }
            ] }
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
            { type: "check", questions: [
              { q: "What are the three legs of a BJT transistor called?", choices: ["Gate, Drain, Source", "Base, Collector, Emitter", "Anode, Cathode, Gate", "Positive, Negative, Ground"], answer: 1, explain: "BJTs use Base, Collector, Emitter. MOSFETs use Gate, Drain, Source instead.", why: ["That naming belongs to a MOSFET, not a BJT", "", "Anode/Cathode belong to diodes, and Gate belongs to a MOSFET — not a valid BJT combination", "BJT legs have specific functional names, not generic power-rail terms"] },
              { q: "Per the 'What it does' list, what controls the MOSFET family?", choices: ["Gate voltage — used to run power & logic circuits", "A small base current", "A weak audio signal only", "A fixed reference voltage from a Zener"], answer: 0, explain: "The list states the MOSFET family is controlled by gate voltage, and runs power & logic applications.", why: ["", "That describes the BJT family, not MOSFETs", "Amplifying weak signals is a general transistor use, not the specific MOSFET-family description here", "Zener reference voltage belongs to the diode module, unrelated to what controls a MOSFET"] },
              { q: "Per the Types table, what makes a Darlington transistor distinct?", choices: ["Very high current gain", "High-impedance amplification, used in sensor front-ends", "Efficient voltage-controlled switching (like IRFZ44)", "Switching high voltage and current, used in inverters"], answer: 0, explain: "The table lists the Darlington's purpose as very high current gain, exemplified by the TIP122.", why: ["", "That describes the JFET type, not Darlington", "That describes the MOSFET type, not Darlington", "That describes the IGBT type, not Darlington"] },
              { q: "Per the bench-test steps, what should Base→Emitter read in Diode mode on a healthy BJT?", choices: ["≈0.7V one way", "OL in both directions", "Exactly 0Ω, like a short", "5V regardless of direction"], answer: 0, explain: "Step 2 states Base→Emitter should read approximately 0.7V one way, just like a healthy diode junction.", why: ["", "OL both ways would indicate a failed, open junction, not a healthy one", "A short reading would indicate failure, per the warning box", "Diode mode reads a small forward-voltage drop, not a fixed 5V"] },
              { q: "Per the warning box, what does a Collector–Emitter short (≈0Ω) indicate?", choices: ["The transistor is blown", "The transistor is functioning normally", "The transistor just needs a higher gain rating", "This is the expected reading in diode mode"], answer: 0, explain: "The warning box lists a Collector–Emitter short as a blown-transistor failure sign, common in switching/power faults.", why: ["", "The warning box explicitly lists this as a failure sign, not normal function", "Gain rating is unrelated to a shorted junction — the part is simply damaged", "The expected diode-mode readings are the ≈0.7V B-E and B-C readings, not a C-E short"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which meter setting is shared by both the Diode and Transistor bench tests?", choices: ["Capacitance", "Ohms", "Diode mode", "AC Voltage"], answer: 2, explain: "Both diodes and BJT transistor junctions are tested in Diode mode — a transistor behaves like two diodes joined at the base.", why: ["Capacitance mode is used for capacitors per this table, not diodes or transistors", "Ohms is used for resistors and inductors per this table, not diodes or transistors", "", "AC Voltage isn't listed as a meter setting anywhere in this table"] },
              { q: "Per the cheat sheet, what's a resistor's good reading?", choices: ["= marked value (±tolerance)", "Very low Ω (near short)", "0.5–0.7V one way, OL other", "0.7V B–E & B–C one way"], answer: 0, explain: "The table lists the resistor's good reading as matching its marked value within tolerance.", why: ["", "That's the inductor's good reading, not the resistor's", "That's the diode's good reading, not the resistor's", "That's the transistor's good reading, not the resistor's"] },
              { q: "Per the cheat sheet, what meter setting is used to test a capacitor?", choices: ["Capacitance / ESR", "Ohms (Ω)", "Diode mode", "Gain (hFE) mode"], answer: 0, explain: "The table lists Capacitance / ESR as the capacitor's meter setting.", why: ["", "Ohms is used for resistors and inductors, not capacitors, in this table", "Diode mode is used for diodes and transistors, not capacitors", "hFE gain mode isn't a meter setting listed anywhere in this table"] },
              { q: "Per the cheat sheet, what's an inductor's bad reading?", choices: ["Open / OL", "Bulged, open or leaky", "Short or open both ways", "Shorted C–E"], answer: 0, explain: "The table lists Open / OL as the inductor's bad reading, meaning a broken winding.", why: ["", "That's the capacitor's bad reading, not the inductor's", "That's the diode's bad reading, not the inductor's", "That's the transistor's bad reading, not the inductor's"] },
              { q: "Per the cheat sheet, what's a diode's good reading?", choices: ["0.5–0.7 V one way, OL other", "= marked value (±tol.)", "Very low Ω (near short)", "0.7 V B–E & B–C one way"], answer: 0, explain: "The table lists the diode's good reading as 0.5–0.7V forward and OL reverse.", why: ["", "That's the resistor's good reading, not the diode's", "That's the inductor's good reading, not the diode's", "That's the transistor's good reading pattern, though phrased for two junctions, not the single diode's reading"] }
            ] }
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
            { type: "check", questions: [
              { q: "In the LED Indicator project, why is 470Ω chosen even though the calculation gives 350Ω?", choices: ["470Ω was on sale", "470Ω is the nearest standard resistor value", "It doesn't matter what value is used", "The LED requires exactly 470Ω"], answer: 1, explain: "350Ω isn't a standard resistor value, so you round up to the nearest one you can actually buy: 470Ω.", why: ["Pricing isn't part of this worked example at all", "", "The value matters — too low risks overdriving the LED, per the calculation's whole purpose", "The worked example computes 350Ω as the requirement, then rounds to a buildable standard value, not a fixed exact one"] },
              { q: "Per the projects table, which project uses R, C, LED, and IC?", choices: ["555 LED Flasher", "LED Indicator", "Transistor Relay Driver", "Mini DC Power Supply"], answer: 0, explain: "The table lists the 555 LED Flasher's 'Uses' column as R · C · LED · IC.", why: ["", "The LED Indicator's 'Uses' column lists just R · LED", "The Transistor Relay Driver's 'Uses' column lists Q · R · D · coil", "The Mini DC Power Supply's 'Uses' column lists D · C · coil · R"] },
              { q: "Per the projects table, which project uses D, C, coil, and R?", choices: ["Mini DC Power Supply", "LED Indicator", "555 LED Flasher", "Transistor Relay Driver"], answer: 0, explain: "The table lists the Mini DC Power Supply's 'Uses' column as D · C · coil · R.", why: ["", "The LED Indicator's 'Uses' column lists just R · LED", "The 555 LED Flasher's 'Uses' column lists R · C · LED · IC", "The Transistor Relay Driver's 'Uses' column lists Q · R · D · coil"] },
              { q: "Per the worked example, how much voltage is left for R1 after the LED's forward drop?", choices: ["9V − 2V (LED drop) = 7V", "9V − 0.7V = 8.3V", "9V exactly, the LED has no drop", "2V, the LED's own drop"], answer: 0, explain: "The worked example subtracts the LED's 2V drop from the 9V supply, leaving 7V for R1.", why: ["", "0.7V is a silicon diode's drop, not the LED's drop used in this specific worked example", "The worked example explicitly accounts for a 2V LED drop, not zero", "7V, not 2V, is what's left over for the resistor after the LED's drop"] },
              { q: "Per the worked example's bench check, what current flows through the 470Ω resistor?", choices: ["≈ 15 mA", "≈ 20 mA", "≈ 7 mA", "≈ 350 mA"], answer: 0, explain: "The bench check computes I = 7V ÷ 470Ω ≈ 15 mA, confirmed safe for the LED.", why: ["", "20 mA (0.02A) was the target current used in the original 350Ω calculation, before rounding to 470Ω", "7 is the voltage in volts left for R1, not the resulting current", "350 was the calculated resistance in ohms, not a current value"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Always use SMD parts", "Power off and discharge capacitors before you probe anything", "Test every part twice", "Never use a multimeter"], answer: 1, explain: "Safety first, every time — power off and discharge capacitors before you probe.", why: ["SMD vs through-hole choice is never discussed as a golden rule in this module", "", "Testing twice is never named as this module's golden rule", "The multimeter is the primary tool this whole module teaches you to use, not something to avoid"] },
              { q: "Per the checklist, besides naming the five parts, what should you be able to read?", choices: ["A resistor's colour code and a capacitor's markings", "The exact die size of any IC", "A full schematic of a smartphone motherboard", "The manufacturing date code of any part"], answer: 0, explain: "The checklist specifically names reading a resistor's colour code and a capacitor's markings.", why: ["", "IC die size isn't covered anywhere in this components module", "Full smartphone schematics are far beyond this module's five-component scope", "Manufacturing date codes aren't covered in this module's checklist"] },
              { q: "Per the checklist, what should you be able to recognise on a real board?", choices: ["Real parts on a board — and their schematic symbols", "Which country manufactured the board", "The board's total retail price", "The exact PCB layer count"], answer: 0, explain: "The checklist names recognising real parts on a board and matching them to their schematic symbols.", why: ["", "Country of manufacture isn't part of this module's checklist", "Retail pricing isn't part of this module's checklist", "PCB layer count isn't part of this module's checklist"] },
              { q: "Per the checklist, what should you be able to do with a multimeter after this module?", choices: ["Test each part and spot common failures", "Only measure AC mains voltage", "Program a microcontroller", "Only measure resistance, nothing else"], answer: 0, explain: "The checklist names testing each part with a multimeter and spotting common failures.", why: ["", "AC mains measurement isn't the specific skill named in this checklist", "Programming a microcontroller is unrelated to this components module", "The module explicitly covers testing resistors, capacitors, inductors, diodes, and transistors — not just resistance"] },
              { q: "Per the checklist, what's the final hands-on skill this module builds?", choices: ["Build, solder and measure a working circuit from a schematic", "Design a custom PCB layout", "Write firmware for an embedded board", "Calculate power grid load balancing"], answer: 0, explain: "The checklist's final item is building, soldering, and measuring a working circuit from a schematic — tying together everything else learned.", why: ["", "PCB layout design isn't part of this checklist", "Firmware writing isn't part of this checklist", "Power grid calculations are far outside this module's scope"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which device is designed to physically break (melt) when current gets too high?", choices: ["Varistor", "Fuse", "DIAC", "TVS diode"], answer: 1, explain: "A fuse is a deliberate weak link — a thin wire that melts to break the circuit on overcurrent.", why: ["The table lists the varistor's job as clamping voltage surges, not breaking on overcurrent", "", "The table lists the DIAC's job as triggering a TRIAC, not breaking on overcurrent", "The table lists the TVS diode's job as clamping fast spikes, not breaking on overcurrent"] },
              { q: "Per the table, what is a varistor's job?", choices: ["Clamps voltage surges", "Breaks on overcurrent", "Latching DC switch", "AC power switch"], answer: 0, explain: "The table lists the varistor's job as clamping voltage surges, with a key spec of V clamp.", why: ["", "That's the fuse's job, not the varistor's", "That's the SCR's job, not the varistor's", "That's the TRIAC's job, not the varistor's"] },
              { q: "Per the table, what is an SCR's job?", choices: ["Latching DC switch", "Clamps voltage surges", "AC power switch", "Triggers a TRIAC"], answer: 0, explain: "The table lists the SCR's job as a latching DC switch, with a Gate key spec.", why: ["", "That's the varistor's job, not the SCR's", "That's the TRIAC's job, not the SCR's", "That's the DIAC's job, not the SCR's"] },
              { q: "Per the table, what is a TRIAC's job?", choices: ["AC power switch", "Breaks on overcurrent", "Clamps fast spikes", "Latching DC switch"], answer: 0, explain: "The table lists the TRIAC's job as an AC power switch, with a Gate key spec.", why: ["", "That's the fuse's job, not the TRIAC's", "That's the TVS diode's job, not the TRIAC's", "That's the SCR's job, not the TRIAC's"] },
              { q: "Per the table, what is a DIAC's job?", choices: ["Triggers a TRIAC", "Latching DC switch", "Breaks on overcurrent", "Clamps voltage surges"], answer: 0, explain: "The table lists the DIAC's job as triggering a TRIAC, with a V break key spec.", why: ["", "That's the SCR's job, not the DIAC's", "That's the fuse's job, not the DIAC's", "That's the varistor's job, not the DIAC's"] }
            ] }
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
            { type: "check", questions: [
              { q: "You're replacing a blown fuse. What rating should you use?", choices: ["Any fuse that physically fits", "A higher rating for extra safety margin", "The exact same rating as the original", "A lower rating to be extra safe"], answer: 2, explain: "Always replace a fuse with the same rating — a different rating can under-protect or nuisance-trip the circuit.", why: ["Physical fit alone doesn't guarantee correct protection — the amp rating matters", "A higher rating under-protects the circuit it's meant to guard", "", "A lower rating risks nuisance-tripping under normal, safe operating current"] },
              { q: "Per the numbered card, what should a healthy fuse read on a continuity test?", choices: ["Beep, ~0Ω", "Open / OL", "Very high / open", "Shorted"], answer: 0, explain: "A good fuse reads continuity — a beep at roughly 0Ω — since it's just a thin, intact wire.", why: ["", "Open/OL describes a blown fuse, not a healthy one", "That reading describes a healthy varistor, not a fuse", "A shorted reading isn't the described failure mode for a fuse in this card"] },
              { q: "Per the numbered card, what should a healthy varistor read in Ω mode?", choices: ["Very high / open", "Beep, ~0Ω", "Exactly its clamp voltage", "Shorted"], answer: 0, explain: "A good MOV reads very high or open resistance, since it only conducts once a surge exceeds its clamp voltage.", why: ["", "That reading describes a healthy fuse, not a varistor", "Ohms mode reads resistance, not the clamp voltage rating printed on the part", "A shorted reading is listed as a varistor failure mode, not the healthy state"] },
              { q: "Per the numbered card, how does a varistor typically fail?", choices: ["Shorted, or cracked and charred after big surges", "Open with an audible beep", "It gains extra clamp voltage capacity", "It becomes more accurate over time"], answer: 0, explain: "The card describes varistor failure as going shorted, or becoming cracked and charred after absorbing large surges.", why: ["", "A beep on continuity describes a healthy fuse's test result, not a varistor failure", "Components don't gain capability as they fail — this describes damage, not improvement", "Components degrade or fail with use and surge exposure, not improve in accuracy"] },
              { q: "Per the facts line, what does the MOV marking '14D471K' approximately indicate?", choices: ["≈ 470 V clamp voltage", "14 amps continuous rating", "471 kΩ resistance", "A fast-blow fuse rating"], answer: 0, explain: "The facts line decodes the example marking 14D471K as approximately a 470V clamp voltage MOV.", why: ["", "MOV markings encode a clamp voltage code, not a current rating like a fuse's amp marking", "The code isn't read as a literal resistance in kΩ", "Fast/slow-blow (F/T) marking belongs to fuses, not MOVs, per this same facts line"] }
            ] }
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
            { type: "check", questions: [
              { q: "A dimmer's lamp is stuck at full brightness no matter where the dial is set. What's the likely fault?", choices: ["The TRIAC has failed shorted", "The fuse is blown", "The lamp is too bright by design", "The DIAC is oversized"], answer: 0, explain: "A TRIAC failing shorted is a classic dimmer fault — the load gets stuck full-on since the switch never turns off.", why: ["", "A blown fuse would cut power entirely, leaving the lamp off, not stuck full-on", "This describes an electrical failure mode, not a design choice", "DIACs don't have a sizing spec that would cause a stuck-on symptom like this"] },
              { q: "Per the definition's facts line, what are an SCR's three leads called?", choices: ["A-K-G (Anode, Cathode, Gate)", "MT1-MT2-G", "Base, Collector, Emitter", "Gate, Drain, Source"], answer: 0, explain: "The facts line states SCR leads are A-K-G — Anode, Cathode, Gate.", why: ["", "MT1-MT2-G is the TRIAC's lead naming, not the SCR's", "That naming belongs to a BJT transistor, not an SCR", "That naming belongs to a MOSFET, not an SCR"] },
              { q: "Per the table, what is a TRIAC's purpose?", choices: ["Switch AC in both directions", "Switch & latch DC power", "Fire a TRIAC's gate cleanly", "Clamp voltage surges"], answer: 0, explain: "The table lists the TRIAC's purpose as switching AC in both directions, used in dimmers and motor/heater control.", why: ["", "That's the SCR's purpose, not the TRIAC's", "That's the DIAC's purpose, not the TRIAC's", "Clamping surges is a varistor's job from an earlier card, not the TRIAC's"] },
              { q: "Per the table, what is a DIAC's purpose?", choices: ["Fire a TRIAC's gate cleanly", "Switch AC in both directions", "Switch & latch DC power", "Break on overcurrent"], answer: 0, explain: "The table lists the DIAC's purpose as firing a TRIAC's gate cleanly, used as the trigger stage in dimmers.", why: ["", "That's the TRIAC's purpose, not the DIAC's", "That's the SCR's purpose, not the DIAC's", "Breaking on overcurrent is the fuse's job, not the DIAC's"] },
              { q: "Per the warning box, how does an SCR typically fail?", choices: ["Shorted (stuck on)", "Open, no continuity at all", "It resets itself automatically", "It only fails when overcooled"], answer: 0, explain: "The warning box lists the SCR's common failure as shorted, stuck on.", why: ["", "The warning box lists shorted, not open, as the SCR's common failure", "None of these components self-reset when they fail", "Overheating, not overcooling, is the typical stress that damages these power devices"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which signal block has a gain of less than 1 by design?", choices: ["Amplifier", "Attenuator", "Oscillator", "Counter"], answer: 1, explain: "An attenuator deliberately reduces signal level — the opposite job of an amplifier.", why: ["The table lists the amplifier's spec as Gain > 1, the opposite of what this question asks", "", "The oscillator's spec is a frequency range (Hz → MHz), not a gain figure below 1", "The counter's spec is a division ratio (÷N), not a gain figure below 1"] },
              { q: "Per the table, what is an amplifier's job?", choices: ["Boosts a signal", "Reduces a signal", "Selects frequencies", "Generates a wave"], answer: 0, explain: "The table lists the amplifier's job as boosting a signal, with a spec of Gain > 1.", why: ["", "That's the attenuator's job, not the amplifier's", "That's the filter's job, not the amplifier's", "That's the oscillator's job, not the amplifier's"] },
              { q: "Per the table, what is a filter's job?", choices: ["Selects frequencies", "Boosts a signal", "Generates a wave", "Counts & divides"], answer: 0, explain: "The table lists the filter's job as selecting frequencies, with a spec of LP / HP / BP.", why: ["", "That's the amplifier's job, not the filter's", "That's the oscillator's job, not the filter's", "That's the counter's job, not the filter's"] },
              { q: "Per the table, what is an oscillator's job?", choices: ["Generates a wave", "Reduces a signal", "Selects frequencies", "Counts & divides"], answer: 0, explain: "The table lists the oscillator's job as generating a wave, with a spec ranging from Hz to MHz.", why: ["", "That's the attenuator's job, not the oscillator's", "That's the filter's job, not the oscillator's", "That's the counter's job, not the oscillator's"] },
              { q: "Per the table, what is a counter's job?", choices: ["Counts & divides", "Boosts a signal", "Reduces a signal", "Generates a wave"], answer: 0, explain: "The table lists the counter's job as counting & dividing, with a ÷N spec.", why: ["", "That's the amplifier's job, not the counter's", "That's the attenuator's job, not the counter's", "That's the oscillator's job, not the counter's"] }
            ] }
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
            { type: "check", questions: [
              { q: "What does a filter's cut-off frequency formula fc = 1 ÷ (2πRC) tell you?", choices: ["The gain of an amplifier", "The frequency where the filter starts rolling off", "How loud a signal is", "The resistor's colour code"], answer: 1, explain: "fc marks the point where a passive R-C filter begins to roll the signal off.", why: ["Amplifier gain is given by a separate formula, Vout ÷ Vin, not the filter's fc formula", "", "This formula computes a frequency in Hz, not a loudness or amplitude measure", "Resistor colour codes are a separate, unrelated topic from this R-C filter formula"] },
              { q: "Per the facts line, how is an amplifier's gain calculated?", choices: ["Gain = Vout ÷ Vin", "Gain = 20·log(Vout ÷ Vin)", "Gain = 1 ÷ (2πRC)", "Gain = Vin ÷ Vout"], answer: 0, explain: "The facts line defines gain simply as Vout divided by Vin.", why: ["", "That formula computes loss in decibels, a different quantity from plain gain", "That's the filter's cut-off frequency formula, not the gain formula", "This is gain inverted — it would describe attenuation ratio, not gain as defined here"] },
              { q: "Per the facts line, how is loss in decibels (dB) calculated?", choices: ["Loss(dB) = 20·log(Vout ÷ Vin)", "Loss(dB) = Vout ÷ Vin", "Loss(dB) = 1 ÷ (2πRC)", "Loss(dB) = Vin − Vout"], answer: 0, explain: "The facts line defines loss in decibels as 20 times the base-10 log of Vout divided by Vin.", why: ["", "That's the plain (non-dB) gain formula, not the decibel loss formula", "That's the filter's cut-off frequency formula, not the decibel loss formula", "The facts line specifically uses a logarithmic formula, not simple subtraction"] },
              { q: "Per the picture analogy, how does an attenuator behave?", choices: ["Big signal in, small signal out", "Small signal in, big signal out", "No signal in, a wave out", "A frequency gatekeeper letting some bands through"], answer: 0, explain: "The picture analogy describes the attenuator as taking a big input and producing a small output — the opposite of an amplifier.", why: ["", "That describes the amplifier's analogy, not the attenuator's", "That describes an oscillator, which needs no input signal at all — a different card entirely", "That describes the filter's analogy, not the attenuator's"] },
              { q: "Per the definition, which four frequency-selecting behaviors can a filter provide?", choices: ["Low-pass, high-pass, band-pass, notch", "Amplify, attenuate, oscillate, count", "Fast, slow, latching, triggering", "Series, parallel, star, delta"], answer: 0, explain: "The definition names low-pass, high-pass, band-pass, and notch as the filter's possible frequency-selecting behaviors.", why: ["", "Those are the five signal-block job categories from the overview card, not filter sub-types", "Those terms describe fuses and thyristor behavior from an earlier card, not filter types", "Those describe circuit topologies, unrelated to this filter definition"] }
            ] }
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
            { type: "check", questions: [
              { q: "What does a 4017 decade counter do when fed a clock signal?", choices: ["Amplifies the clock", "Steps one output at a time, then wraps around", "Converts AC to DC", "Filters out noise"], answer: 1, explain: "The 4017 lights one of its ten outputs per clock pulse, then wraps back to the start (÷10).", why: ["Amplifying is a different signal-block job entirely — a counter counts pulses, it doesn't boost them", "", "AC-to-DC conversion is the diode/rectifier's job, unrelated to a digital counter chip", "Filtering noise is the filter's job, unrelated to a digital counter chip"] },
              { q: "Per the definition, what does an oscillator produce?", choices: ["A sine, square or triangle wave with no input signal needed", "A count that advances on every clock pulse", "A voltage reduced from a larger input", "A fixed DC reference voltage only"], answer: 0, explain: "The definition states an oscillator produces a sine, square, or triangle wave with no input signal.", why: ["", "That describes the counter, a different block on this same card", "That describes an attenuator, from a different card entirely", "Oscillators produce a changing wave, not a fixed DC reference"] },
              { q: "Per the definition, what does a counter do?", choices: ["Advances a count on every incoming clock pulse", "Produces a wave with no input needed", "Boosts a weak input signal", "Selects a band of frequencies"], answer: 0, explain: "The definition states a counter advances its count on every incoming clock pulse.", why: ["", "That describes the oscillator, a different block on this same card", "That describes an amplifier, from a different card entirely", "That describes a filter, from a different card entirely"] },
              { q: "Per the facts line, what can oscillators be built from?", choices: ["RC, LC, crystal, or a 555 timer", "Chained flip-flops only", "A single resistor and nothing else", "A varistor and a fuse"], answer: 0, explain: "The facts line lists RC, LC, crystal, or 555-timer designs as ways to build an oscillator.", why: ["", "Chained flip-flops describes how counters (like the 4017) are built, per this same facts line", "A single resistor alone can't generate an oscillating signal", "A varistor and fuse are protection devices from a different card, unrelated to building an oscillator"] },
              { q: "Per the facts line, what are counters typically built from?", choices: ["Chained flip-flops, e.g. the 4017 decade counter", "RC or LC networks only", "A single crystal resonator", "A DIAC and TRIAC pair"], answer: 0, explain: "The facts line states counters are built from chained flip-flops, giving the 4017 decade counter as an example.", why: ["", "RC/LC networks are listed as ways to build an oscillator, not a counter, per this same facts line", "A crystal resonator is one way to build an oscillator, not a counter", "DIAC/TRIAC pairs belong to the power-control card, unrelated to building a counter"] }
            ] }
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
            { type: "check", questions: [
              { q: "What should a healthy varistor (MOV) read on an ohmmeter?", choices: ["Very high / open", "Near zero", "Exactly 470Ω", "It beeps like a fuse"], answer: 0, explain: "A good MOV reads very high or open resistance — it only conducts once a surge exceeds its clamp voltage.", why: ["", "A near-zero reading would suggest a shorted, failed varistor, per the table's bad-reading column", "The MOV's clamp voltage code (like 470V) isn't the same as its healthy ohmmeter reading", "A continuity beep near 0Ω is the fuse's good reading, not the varistor's"] },
              { q: "Per the bench-reference table, what's the good reading for a fuse?", choices: ["Beep, ~0 Ω", "Very high / open", "Diode-like one way", "A-K open both ways"], answer: 0, explain: "The table lists the fuse's good reading as a continuity beep at roughly 0Ω.", why: ["", "That's the varistor's good reading, not the fuse's", "That's the TVS diode's good reading, not the fuse's", "That's the SCR's good reading, not the fuse's"] },
              { q: "Per the bench-reference table, what's the good reading for a TVS diode?", choices: ["Diode-like one way", "Beep, ~0 Ω", "Open both ways", "MT1-MT2 open"], answer: 0, explain: "The table lists the TVS diode's good reading as diode-like conduction one way, tested in diode mode.", why: ["", "That's the fuse's good reading, not the TVS diode's", "That's the DIAC's good reading, not the TVS diode's", "That's the TRIAC's good reading, not the TVS diode's"] },
              { q: "Per the bench-reference table, what's the good reading for an SCR?", choices: ["A-K open both ways", "Beep, ~0 Ω", "Very high / open", "Shorted (stuck on)"], answer: 0, explain: "The table lists the SCR's good reading as A-K (anode-cathode) open in both directions when untriggered.", why: ["", "That's the fuse's good reading, not the SCR's", "That's the varistor's good reading, not the SCR's", "That's the SCR's bad reading, not its good one"] },
              { q: "Per the bench-reference table, what's the bad reading for a TRIAC?", choices: ["Shorted (load stuck on)", "MT1-MT2 open", "A-K open both ways", "Open / OL"], answer: 0, explain: "The table lists the TRIAC's bad reading as shorted, matching the classic dimmer fault of a load stuck full-on.", why: ["", "That's the TRIAC's good reading, not its bad one", "That's the SCR's good reading, not the TRIAC's bad one", "That's the fuse's bad reading, not the TRIAC's"] }
            ] }
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
            { type: "check", questions: [
              { q: "In the TRIAC dimmer, what happens if you increase the R-C time constant feeding the DIAC?", choices: ["The lamp gets brighter", "The TRIAC fires later, so the lamp dims", "Nothing changes", "The fuse blows"], answer: 1, explain: "A bigger R or C delays the firing point further into the AC cycle, dimming the lamp.", why: ["A larger R-C delays firing, which dims the lamp — the opposite of getting brighter", "", "The numbered card explicitly ties R-C size to firing angle and brightness — it does change something", "Changing the R-C time constant affects firing timing, not the fuse's overcurrent protection"] },
              { q: "Per the numbered dimmer card, at what voltage does the DIAC break over to fire the TRIAC?", choices: ["~30 V", "~470 V", "~0.7 V", "~120 V"], answer: 0, explain: "The card states the DIAC breaks over at approximately 30V, delivering one sharp gate pulse to the TRIAC.", why: ["", "470V is the example MOV clamp voltage from an earlier card, not the DIAC's break-over voltage", "0.7V is a silicon diode's forward drop, not the DIAC's break-over voltage", "120V is a mains-adjacent figure, not the specific DIAC break-over voltage stated on this card"] },
              { q: "Per the numbered dimmer card, what is the role of the fuse and MOV in this circuit?", choices: ["Guard the incoming mains before the TRIAC stage", "Set the exact firing angle of the TRIAC", "Amplify the DIAC's trigger pulse", "Convert the dimmer's AC output to DC"], answer: 0, explain: "The card states the fuse and MOV guard the incoming mains before the TRIAC stage handles the switching.", why: ["", "Firing angle is set by the R-C network, not the fuse/MOV protection stage", "Neither a fuse nor an MOV amplifies a signal — that's not their function", "This dimmer circuit switches AC power directly; nothing here converts it to DC"] },
              { q: "Per the LED chaser card, what formula sets the 555's clock (chase) speed?", choices: ["f = 1.44 ÷ ((R1 + 2·R2)·C1)", "fc = 1 ÷ (2πRC)", "Gain = Vout ÷ Vin", "I = V ÷ R"], answer: 0, explain: "The card gives the 555 astable frequency formula f = 1.44 ÷ ((R1 + 2·R2)·C1) as what sets the chase speed.", why: ["", "That's the passive R-C filter's cut-off frequency formula, from a different card entirely", "That's the amplifier's gain formula, from a different card entirely", "That's Ohm's Law, a general current formula, not the 555's specific timing formula"] },
              { q: "Per the LED chaser card, what happens if you use a bigger C1?", choices: ["The chase slows down so you can see each step", "The chase speeds up", "The 4017 stops wrapping around", "The LEDs get brighter"], answer: 0, explain: "The card states a bigger C1 slows the chase, making each step visible.", why: ["", "A bigger C1 slows the chase per this card, the opposite of speeding it up", "The 4017 still wraps around (÷10) regardless of chase speed", "C1 affects timing, not LED brightness — that would be set by the current-limiting resistor instead"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule for this module?", choices: ["Test dimmers alone at home", "Mains circuits like the dimmer are for supervised, isolated-bench work only", "Fuses never need replacing", "TRIACs don't need testing"], answer: 1, explain: "Mains-connected practicals always need supervision and proper isolation.", why: ["The golden rule explicitly warns against unsupervised work, the opposite of testing alone at home", "", "The fuse-replacement card explicitly covers when and how to replace a blown fuse", "The bench-reference card explicitly gives TRIAC testing readings — it does need testing"] },
              { q: "Per the checklist, what should you be able to pick the right device for?", choices: ["Overcurrent vs overvoltage protection", "Only overvoltage protection", "Only AC switching applications", "Choosing between resistor color codes"], answer: 0, explain: "The checklist names picking the right device for overcurrent vs overvoltage protection as a core skill.", why: ["", "The checklist explicitly names both overcurrent AND overvoltage, not just one", "The checklist covers protection device selection broadly, not narrowed to only AC switching", "Resistor color codes belong to the components module, not this protection-and-signal checklist"] },
              { q: "Per the checklist, which four devices should you be able to read and test on the bench?", choices: ["Fuses, MOVs, SCRs and TRIACs", "Resistors, capacitors, inductors and diodes", "Amplifiers, filters, oscillators and counters", "Fuses, transistors, LEDs and relays"], answer: 0, explain: "The checklist specifically names fuses, MOVs, SCRs, and TRIACs as the bench-test skill for this module.", why: ["", "Those five parts belong to the earlier components module's checklist, not this one", "Signal blocks are named separately in the checklist's next item, not this bench-test item", "This checklist item names MOVs and SCRs specifically, not transistors, LEDs, or relays"] },
              { q: "Per the checklist, which signal blocks should you be able to recognise?", choices: ["Amplify, attenuate, filter, oscillate, count", "Fuse, varistor, TVS diode, SCR, TRIAC", "Resistor, capacitor, inductor, diode, transistor", "Continuity, resistance, voltage, current, capacitance"], answer: 0, explain: "The checklist names the five signal blocks: amplify, attenuate, filter, oscillate, and count.", why: ["", "Those are protection/power devices from this module's other checklist item, not signal blocks", "Those are the five basic parts from the earlier components module, not signal blocks", "Those are meter settings/modes, not signal blocks"] },
              { q: "Per the checklist, what two projects should you be able to build from a schematic?", choices: ["An AC dimmer and a 555+4017 LED chaser", "A power supply and a battery charger", "An amplifier and an attenuator", "A fuse box and a surge protector"], answer: 0, explain: "The checklist names building an AC dimmer and a 555+4017 LED chaser as this module's hands-on project skill.", why: ["", "A power supply and battery charger aren't the two projects covered in this module's checklist", "Amplifiers and attenuators are signal blocks explained conceptually, not the two hands-on projects listed here", "A fuse box and surge protector aren't projects built in this module — fuses and MOVs are components, not standalone projects"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which hazard can still be dangerous hours after a board is unplugged?", choices: ["ESD", "Charged capacitors", "Fumes", "Fire"], answer: 1, explain: "Large capacitors can hold a dangerous charge for hours after the power is switched off.", why: ["ESD is a risk during handling, not a stored hazard that persists for hours after unplugging", "", "Fumes dissipate once ventilated, not lingering as a stored energy hazard for hours", "Fire is an active-power hazard, not one caused by stored energy after unplugging"] },
              { q: "Per the table, what causes electric shock, and at what threshold?", choices: ["Current through your body, 100 mA", "Static that kills silently, 100 V", "Shorted or overloaded parts, Class C", "Energy stored after power-off, Hours"], answer: 0, explain: "The table lists shock's cause as current through your body, with a 100 mA threshold.", why: ["", "That row describes ESD, not shock", "That row describes fire, not shock", "That row describes charged capacitors, not shock"] },
              { q: "Per the table, what is fire's cause and threshold?", choices: ["Shorted or overloaded parts, Class C", "Current through your body, 100 mA", "Static that kills silently, 100 V", "Solder flux and burnt parts, Ventilate"], answer: 0, explain: "The table lists fire's cause as shorted or overloaded parts, with a Class C threshold/response.", why: ["", "That row describes shock, not fire", "That row describes ESD, not fire", "That row describes fumes, not fire"] },
              { q: "Per the table, what threshold is listed for ESD?", choices: ["100 V", "100 mA", "Class C", "Hours"], answer: 0, explain: "The table lists ESD's threshold as 100V — the level at which many ICs can be destroyed.", why: ["", "100 mA is shock's threshold, not ESD's", "Class C is fire's threshold/response, not ESD's", "Hours is charged capacitors' threshold, not ESD's"] },
              { q: "Per the table, what causes the 'Fumes' hazard, and what's the response?", choices: ["Solder flux and burnt parts — ventilate", "Current through your body — ground yourself", "Static electricity — wear a wrist strap", "Shorted parts — use a Class C extinguisher"], answer: 0, explain: "The table lists fumes' cause as solder flux and burnt parts, with 'Ventilate' as the response.", why: ["", "That describes the shock row's cause and a general safety response, not fumes", "That describes ESD's cause and prevention, not fumes", "That describes fire's cause and response, not fumes"] }
            ] }
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
            { type: "check", questions: [
              { q: "What actually determines how dangerous an electric shock is?", choices: ["Voltage", "Current through the body", "The colour of the wire", "The time of day"], answer: 1, explain: "Current (measured in mA), not voltage, is what injures you.", why: ["The facts line explicitly states it's current, not voltage, that injures you", "", "Wire colour is a labeling convention, unrelated to shock severity", "Time of day has no bearing on how dangerous a shock is"] },
              { q: "Per the numbered danger scale, what happens at around 10 mA?", choices: ["Muscles lock — you can't let go", "Just a tingle", "Breathing becomes difficult", "Can stop the heart — fatal"], answer: 0, explain: "The scale lists 10 mA as the point where muscles lock and you can't let go of the source.", why: ["", "That's the 1 mA level, a much milder sensation", "That's the 30 mA level, a more severe effect than 10 mA", "That's the 100+ mA level, far more severe than 10 mA"] },
              { q: "Per the numbered danger scale, what happens at 100+ mA?", choices: ["Can stop the heart — fatal", "Just a tingle", "Muscles lock — you can't let go", "Breathing becomes difficult"], answer: 0, explain: "The scale lists 100+ mA as potentially fatal, capable of stopping the heart.", why: ["", "That's the 1 mA level, far milder than 100+ mA", "That's the 10 mA level, less severe than 100+ mA", "That's the 30 mA level, less severe than 100+ mA"] },
              { q: "Per the 'Stay safe on the bench' list, what should you do right after isolating the supply?", choices: ["Discharge capacitors first", "Ground yourself and the bench", "Keep one hand free during live tests", "Immediately begin probing"], answer: 0, explain: "The list orders discharging capacitors as the second step, right after isolating the supply.", why: ["", "Grounding yourself is listed as a later step in this sequence", "The one-hand rule is listed as a separate, later item in this sequence", "Probing immediately skips the safety sequence this list establishes"] },
              { q: "Per the facts line, why does sweat or a cut make a shock more dangerous?", choices: ["It lowers your skin's resistance fast, letting more current through", "It increases your skin's resistance, blocking current", "It has no effect on shock severity", "It only matters for AC shocks, not DC"], answer: 0, explain: "The facts line states sweat or a cut lowers skin resistance fast, compared to dry skin which resists current better.", why: ["", "The facts line says resistance drops, not rises, with sweat or a cut", "The facts line directly ties skin condition to shock risk — it's not irrelevant", "The facts line doesn't distinguish AC from DC shock risk on this point"] }
            ] }
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
            { type: "check", questions: [
              { q: "Why can a chip be destroyed by static you never even felt?", choices: ["Chips are always fragile", "You feel static at ~3000V but many ICs die at ~100V", "Static isn't actually dangerous", "Only old chips are affected"], answer: 1, explain: "The threshold to feel a spark (~3000V) is far above the ~100V that can kill many modern ICs.", why: ["The card is about a specific voltage gap, not a general claim that all chips are fragile", "", "This card exists specifically because static IS dangerous to boards, even unfelt", "The card doesn't restrict this risk to old chips only"] },
              { q: "Per the 'Protect the board every time' list, what should you wear before handling a board?", choices: ["A grounded wrist strap", "Insulated gloves rated for mains", "Safety glasses only", "Nothing — bare hands give the best grip"], answer: 0, explain: "The list specifically names wearing a grounded wrist strap as protection against ESD.", why: ["", "Insulated mains gloves belong to the live-work/fire card, not this ESD protection list", "Safety glasses are listed in the PPE table on a different card, not this specific ESD list", "Bare hands with no grounding is exactly the risk this card warns against"] },
              { q: "Per the 'Protect the board every time' list, what should you confirm before touching a lead?", choices: ["Confirm 0V before you touch a lead", "Confirm the room temperature", "Confirm the board's serial number", "Confirm the wrist strap's color"], answer: 0, explain: "The list's last item is confirming 0V before touching a lead, verifying any charge has actually discharged.", why: ["", "Room temperature isn't part of this ESD/charged-capacitor protection list", "Serial number tracking isn't part of this safety list", "Strap color is irrelevant — what matters is that it's grounded, not its color"] },
              { q: "Per the warning box, what specifically goes wrong when discharging a capacitor incorrectly?", choices: ["Shorting capacitor legs with a bare screwdriver", "Using an insulated resistor to discharge it", "Waiting the full recommended time", "Wearing a grounded wrist strap while working"], answer: 0, explain: "The warning box lists shorting capacitor legs with a bare screwdriver as a specific way this goes wrong.", why: ["", "Using an insulated resistor is the recommended correct method, not a listed mistake", "Waiting the full time is the correct approach, not a listed mistake", "Wearing a grounded strap is the recommended safe practice, not a listed mistake"] },
              { q: "Per the warning box, what's another way board safety commonly goes wrong?", choices: ["Skipping the wait and diving straight in", "Discharging caps with an insulated resistor", "Wearing an ESD mat and wrist strap together", "Confirming 0V with a meter before touching leads"], answer: 0, explain: "The warning box lists skipping the wait and diving straight in as a common way things go wrong.", why: ["", "That's the recommended safe discharge method, not a listed mistake", "That's the recommended safe practice from the protection list, not a mistake", "That's the recommended safe verification step, not a mistake"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the first step of the pre-work checklist, before you even touch a tool?", choices: ["Ground yourself", "Visually inspect the board", "Discharge capacitors", "Isolate the supply"], answer: 1, explain: "Visual inspection comes first — spotting burnt tracks or bulging caps before power is ever involved.", why: ["Grounding yourself is listed as step 4, not the first step", "", "Discharging capacitors is listed as step 3, not the first step", "Isolating the supply is listed as step 2, not the first step"] },
              { q: "Per the gear table, what is a CAT meter's purpose?", choices: ["Matched to the voltage", "Grounded to the bench", "For solder & caps", "Rated for live work"], answer: 0, explain: "The table lists the CAT meter's purpose as being matched to the voltage of the circuit under test.", why: ["", "That's the wrist strap's purpose, not the CAT meter's", "That's the safety glasses' purpose, not the CAT meter's", "That's the insulated tools' purpose, not the CAT meter's"] },
              { q: "Per the gear table, what is insulated tools' purpose?", choices: ["Rated for live work", "Grounded work surface", "Matched to the voltage", "For solder & caps"], answer: 0, explain: "The table lists insulated tools' purpose as being rated for live work.", why: ["", "That's the ESD mat's purpose, not insulated tools'", "That's the CAT meter's purpose, not insulated tools'", "That's the safety glasses' purpose, not insulated tools'"] },
              { q: "Per the numbered checklist's step 3, what should you do after isolating the supply?", choices: ["Discharge capacitors — bleed down stored charge, then confirm with a meter", "Ground yourself with a wrist strap", "Visually inspect the board", "Begin soldering immediately"], answer: 0, explain: "Step 3 is discharging capacitors, bleeding down stored charge and confirming with a meter.", why: ["", "Grounding yourself is step 4, which comes after discharging capacitors", "Visual inspection is step 1, which comes before this step", "Soldering isn't part of this pre-work safety checklist at all"] },
              { q: "Per the numbered checklist's step 4, what does 'ground yourself' involve?", choices: ["Wrist strap on, ESD mat connected, then begin", "Isolating the supply at the source", "Bleeding down stored charge in capacitors", "Putting on safety glasses only"], answer: 0, explain: "Step 4 describes grounding yourself as wrist strap on and ESD mat connected, before beginning work.", why: ["", "That's step 2 (isolating the supply), not step 4", "That's step 3 (discharging capacitors), not step 4", "Safety glasses are a separate gear item in the table, not what step 4 describes"] }
            ] }
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
            { type: "check", questions: [
              { q: "What extinguisher class is rated for electrical fires?", choices: ["Class A", "Class B", "Class C", "Water only"], answer: 2, explain: "Class C extinguishers are specifically rated for live electrical fires.", why: ["Class A is for ordinary combustibles, not the class named for electrical fires here", "Class B is for flammable liquids, not the class named for electrical fires here", "", "The warning box explicitly says NEVER throw water on an electrical fire"] },
              { q: "Per the 'When you must test live' list, what does the one-hand rule mean?", choices: ["Keep your free hand off the chassis or any earthed surface", "Only use one meter probe at a time", "Only test with one hand of experience", "Keep both hands on the chassis for stability"], answer: 0, explain: "The one-hand rule means keeping your free hand off the chassis or any earthed surface, so current has no path across your chest.", why: ["", "The rule is about hand placement relative to earthed surfaces, not probe count", "This isn't about experience level — it's a physical safety rule", "Touching the chassis with your free hand is exactly what the rule warns against"] },
              { q: "Per the 'When you must test live' list, why does the meter's CAT rating matter?", choices: ["A CAT I meter on mains wiring is a hazard, not a shortcut", "CAT rating only affects display brightness", "Any CAT rating works fine on any voltage", "CAT rating is only relevant for capacitance measurements"], answer: 0, explain: "The list warns that using a CAT I meter on mains wiring is a hazard, not a shortcut — the rating must match the circuit.", why: ["", "CAT rating relates to safety at different energy levels, not display brightness", "The whole point of this list item is that CAT rating must match the application", "CAT ratings apply broadly to voltage/energy safety, not specifically to capacitance measurement"] },
              { q: "Per the warning box, what should you do first if a board catches fire and it's safe to reach?", choices: ["Cut power at the source", "Pour water on it immediately", "Move it outside first", "Call for help and wait outside"], answer: 0, explain: "The warning box lists cutting power at the source (if safe to reach) as the first listed action.", why: ["", "The warning box explicitly says NEVER throw water on an electrical fire", "Moving a burning board isn't the listed first action — cutting power is", "Calling for help matters, but cutting power at the source is the first listed action, if safely reachable"] },
              { q: "Per the warning box, why should you never throw water on an electrical fire?", choices: ["Water conducts electricity and creates a shock hazard on a live fire", "Water is simply less effective than a Class C extinguisher", "Water damages the extinguisher", "There's no specific reason given — it's just tradition"], answer: 0, explain: "Water conducts electricity, so throwing it on a live electrical fire creates a serious shock hazard for whoever does it.", why: ["", "The warning isn't about effectiveness comparison — it's an explicit NEVER, implying real danger", "This isn't about equipment damage — it's about the shock hazard water creates on a live fire", "The rule reflects a real electrical safety hazard, not tradition"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the very first thing to do if you see someone being shocked?", choices: ["Grab them and pull them free", "Cut the power at the source", "Pour water on them", "Call a colleague and wait"], answer: 1, explain: "Cut the power first, if it's safely reachable — never touch the person directly while current is flowing.", why: ["The intro explicitly warns you'll become a second casualty if you touch them directly", "", "Water is never the response to an electrical hazard, per this course's fire guidance too", "Waiting passively isn't the first listed action — cutting power is"] },
              { q: "Per the 'Act, don't freeze' list, what should you use if you must separate someone from a live source?", choices: ["A dry wooden or plastic object — never your bare hands", "Any nearby metal tool", "A wet cloth", "Your bare hands, moving quickly"], answer: 0, explain: "Step 2 specifically calls for a dry wooden or plastic insulator, never bare hands.", why: ["", "Metal conducts electricity and would put you at risk too", "A wet cloth would conduct electricity, making the situation worse", "The list explicitly says never your bare hands"] },
              { q: "Per the 'Act, don't freeze' list, what is step 3?", choices: ["Call for emergency help", "Cut the power", "Check breathing", "Separate with an insulator"], answer: 0, explain: "Step 3 is calling for emergency help, getting trained medical assistance on the way.", why: ["", "Cutting the power is step 1, before this step", "Checking breathing is step 4, after this step", "Separating with an insulator is step 2, before this step"] },
              { q: "Per the 'Act, don't freeze' list, what does step 4 involve?", choices: ["Check breathing, and begin CPR if trained and breathing has stopped", "Cut the power at the source", "Call for emergency help", "Separate the person with an insulator"], answer: 0, explain: "Step 4 is checking breathing, and beginning CPR only if trained and breathing has stopped.", why: ["", "Cutting power is step 1, before this step", "Calling for help is step 3, before this step", "Separating with an insulator is step 2, before this step"] },
              { q: "Per the intro, why should you never touch a shock victim directly while current is flowing?", choices: ["You'll become a second casualty", "It's considered impolite", "It won't actually help them", "There's no real risk to you"], answer: 0, explain: "The intro states directly touching them makes you a second casualty, since current can pass through you too.", why: ["", "This is a genuine safety hazard, not a matter of etiquette", "Helping is the goal, but touching them directly while live is exactly the wrong way to do it", "The intro explicitly states there is real risk to the rescuer"] }
            ] }
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
            { type: "check", questions: [
              { q: "How do you confirm a board is safe from stored shock hazard before touching a lead?", choices: ["Assume it's fine after 5 minutes", "Confirm 0V with a multimeter", "Look for smoke", "Touch it briefly with a bare finger"], answer: 1, explain: "Always confirm 0V with a multimeter — don't rely on time alone or guesswork.", why: ["Time alone is guesswork — the table specifically calls for confirming with a meter, not a fixed wait", "", "Smoke is a fire indicator, unrelated to confirming a discharged capacitor", "Touching a possibly-charged lead directly is exactly the shock risk this whole table is about avoiding"] },
              { q: "Per the quick reference table, what tool do you check with for ESD risk?", choices: ["Wrist strap + mat", "Multimeter", "Insulated resistor", "Class C extinguisher"], answer: 0, explain: "The table lists 'Wrist strap + mat' as the check-with method for ESD.", why: ["", "Multimeter is listed for checking Shock, not ESD", "Insulated resistor is listed for checking Charged Cap, not ESD", "Class C extinguisher is listed for checking Fire, not ESD"] },
              { q: "Per the quick reference table, what's the safe state for the Fire hazard row?", choices: ["Power cut, area clear", "0V confirmed", "Grounded before touch", "Tip stored, cooled"], answer: 0, explain: "The table lists Fire's safe state as 'Power cut, area clear'.", why: ["", "That's the Shock row's safe state, not Fire's", "That's the ESD row's safe state, not Fire's", "That's the Burn row's safe state, not Fire's"] },
              { q: "Per the quick reference table, what's the danger sign for the Burn hazard row?", choices: ["Iron left on the bench", "Any voltage reading", "Warm or bulging body", "Smoke or burning smell"], answer: 0, explain: "The table lists Burn's danger sign as 'Iron left on the bench', unattended and hot.", why: ["", "That's the Shock row's danger sign, not Burn's", "That's the Charged Cap row's danger sign, not Burn's", "That's the Fire row's danger sign, not Burn's"] },
              { q: "Per the quick reference table, what's the danger sign for the Charged Cap hazard row?", choices: ["Warm or bulging body", "Any voltage reading", "No strap, dry air", "Smoke or burning smell"], answer: 0, explain: "The table lists Charged Cap's danger sign as 'Warm or bulging body', signaling stored energy or physical failure.", why: ["", "That's the Shock row's danger sign, not Charged Cap's", "That's the ESD row's danger sign, not Charged Cap's", "That's the Fire row's danger sign, not Charged Cap's"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Wear gloves at all times", "Power off, discharge capacitors, and ground yourself before probing", "Only test live boards", "Skip inspection to save time"], answer: 1, explain: "This combined habit protects both you and the board, every single time.", why: ["Gloves aren't the golden rule named in this module — the combined power-off/discharge/ground habit is", "", "The live-work card treats live testing as an exception requiring extra precautions, not the default approach", "Visual inspection is explicitly the required first step of the pre-work checklist, never to be skipped"] },
              { q: "Per the checklist, what should you be able to explain about shock injury?", choices: ["Why current, not voltage, is what injures you", "Why voltage alone determines injury severity", "Why wire color determines shock risk", "Why shocks are never actually dangerous"], answer: 0, explain: "The checklist names explaining why current, not voltage, is what injures you.", why: ["", "This is the opposite of what the shock card teaches — current, not voltage, is the injury factor", "Wire color has no bearing on shock risk anywhere in this module", "The whole safety module exists because shocks ARE dangerous"] },
              { q: "Per the checklist, what should you be able to identify and safely handle?", choices: ["A charged capacitor", "A resistor's colour code", "A transistor's pinout", "An oscillator's frequency"], answer: 0, explain: "The checklist names identifying and safely discharging a charged capacitor as a core safety skill.", why: ["", "Resistor colour codes belong to the components module, not this safety checklist", "Transistor pinouts belong to the components module, not this safety checklist", "Oscillator frequency belongs to the protection-signal module, not this safety checklist"] },
              { q: "Per the checklist, how should you protect a board from ESD?", choices: ["With a strap and a mat", "With a Class C extinguisher", "With a higher CAT-rated meter", "By working faster to reduce exposure time"], answer: 0, explain: "The checklist names a grounded wrist strap and ESD mat as the way to protect a board from ESD.", why: ["", "A Class C extinguisher is for fire, unrelated to ESD protection", "CAT rating relates to live-work meter safety, not ESD protection", "Working faster doesn't address ESD risk — proper grounding does, regardless of speed"] },
              { q: "Per the checklist, what three emergency situations should you be able to respond to correctly?", choices: ["Shock, burn, or bench fire", "ESD, overcurrent, or overvoltage", "Software crash, memory leak, or overheating CPU", "Late delivery, wrong part, or missing tool"], answer: 0, explain: "The checklist names responding correctly to a shock, burn, or bench fire as this module's final skill.", why: ["", "Those are the protection-device concepts from a different module's checklist, not this emergency-response item", "This is an electronics safety module, not a software or firmware topic", "Logistics issues aren't part of this safety module's emergency-response checklist"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which tool is described as \"your first diagnostic tool\"?", choices: ["Screwdriver", "Multimeter", "Solder wick", "Tweezers"], answer: 1, explain: "The multimeter is the first instrument you reach for on almost every fault.", why: ["The table lists the screwdriver under Hand Tools for daily use, not as the diagnostic tool", "", "Solder wick is listed under Desoldering, not as the first diagnostic tool", "Tweezers belong to the hand-tools category, not as the first diagnostic tool"] },
              { q: "Per the table, what temperature note is listed for Soldering?", choices: ["300–400°C", "V · Ω · A", "Wick / pump", "Magnify"], answer: 0, explain: "The table lists Soldering's note as 300–400°C, the typical iron temperature.", why: ["", "That note belongs to the Multimeter row, not Soldering", "That note belongs to the Desoldering row, not Soldering", "That note belongs to the Inspection row, not Soldering"] },
              { q: "Per the table, what note is listed for Desoldering?", choices: ["Wick / pump", "300–400°C", "Daily use", "Magnify"], answer: 0, explain: "The table lists Desoldering's note as 'Wick / pump', naming its two common tools.", why: ["", "That note belongs to the Soldering row, not Desoldering", "That note belongs to the Hand Tools row, not Desoldering", "That note belongs to the Inspection row, not Desoldering"] },
              { q: "Per the table, what is Inspection described as being about?", choices: ["Reading a board before you touch it", "Joining components to a board", "Removing parts cleanly", "Drivers, cutters, tweezers"], answer: 0, explain: "The table describes Inspection as reading a board before you touch it, with a 'Magnify' note.", why: ["", "That describes Soldering, not Inspection", "That describes Desoldering, not Inspection", "That describes Hand Tools, not Inspection"] },
              { q: "Per the table, what is Hand Tools described as being about?", choices: ["Drivers, cutters, tweezers", "Your first diagnostic tool", "Removing parts cleanly", "Joining components to a board"], answer: 0, explain: "The table describes Hand Tools as drivers, cutters, and tweezers, noted for daily use.", why: ["", "That describes the Multimeter, not Hand Tools", "That describes Desoldering, not Hand Tools", "That describes Soldering, not Hand Tools"] }
            ] }
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
            { type: "check", questions: [
              { q: "Why use a plastic spudger instead of a metal screwdriver to open a plastic case?", choices: ["Plastic looks nicer", "It won't scratch or short anything while prying", "It's cheaper", "Metal tools are illegal"], answer: 1, explain: "A non-conductive plastic spudger protects delicate plastics and avoids shorting live parts while prying.", why: ["Appearance isn't the reason given in this card for choosing a spudger", "", "Cost isn't the reason given in this card for choosing a spudger", "Metal tools aren't illegal — they're simply riskier to use for this specific task"] },
              { q: "Per the essential hand tools list, what are cutters & pliers used for?", choices: ["Flush cutters for leads, long-nose for bending", "Fine-tipped work on small SMD parts", "Opening cases without shorting anything", "Phillips and flathead screw driving"], answer: 0, explain: "The list describes cutters & pliers as flush cutters for leads and long-nose pliers for bending.", why: ["", "That describes tweezers, not cutters & pliers", "That describes spudgers, not cutters & pliers", "That describes the screwdriver set, not cutters & pliers"] },
              { q: "Per the essential hand tools list, what are tweezers used for?", choices: ["Fine-tipped work, for small SMD parts", "Flush-cutting component leads", "Prying open plastic cases", "Driving Phillips and flathead screws"], answer: 0, explain: "The list describes tweezers as fine-tipped, for handling small SMD parts.", why: ["", "That describes cutters & pliers, not tweezers", "That describes spudgers, not tweezers", "That describes the screwdriver set, not tweezers"] },
              { q: "Per the facts line, what are the non-negotiable basics of a bench setup?", choices: ["Grounded ESD mat, bright lighting, and a fire extinguisher within reach", "A soldering iron and nothing else", "A microscope and a set of tweezers", "A locked cabinet for tool storage"], answer: 0, explain: "The facts line names a grounded ESD mat, bright lighting, and a fire extinguisher within reach as non-negotiable basics.", why: ["", "The facts line names three specific basics, not just a soldering iron", "Microscope and tweezers aren't named as the non-negotiable bench basics here", "Tool storage isn't named as one of this card's non-negotiable basics"] },
              { q: "Per the essential hand tools list, what does the screwdriver set include?", choices: ["Phillips, flathead, precision bits", "Fine-tipped probes for SMD work", "Flush cutters and long-nose pliers", "Plastic, non-conductive prying tools"], answer: 0, explain: "The list describes the screwdriver set as Phillips, flathead, and precision bits.", why: ["", "That describes tweezers, not the screwdriver set", "That describes cutters & pliers, not the screwdriver set", "That describes spudgers, not the screwdriver set"] }
            ] }
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
            { type: "check", questions: [
              { q: "What should you heat first when making a solder joint?", choices: ["The solder wire directly", "The pad and lead together", "The iron tip only", "Nothing — feed solder cold"], answer: 1, explain: "Heat the pad and lead together, then feed solder onto the heated joint — never melt solder directly onto the iron.", why: ["The card explicitly warns against touching solder directly, not the pad and lead", "", "The iron tip is already hot by definition — the joint (pad and lead) is what needs heating", "Cold solder feeding produces a cold, dull joint — exactly the fault this card warns about"] },
              { q: "Per the soldering process steps, what happens in step 2?", choices: ["Feed the solder — melt it onto the heated joint, not onto the iron tip", "Heat the joint by touching the iron to the pad and lead", "Remove the iron, then the solder", "Inspect for a shiny, cone-shaped result"], answer: 0, explain: "Step 2 is feeding the solder onto the heated joint, explicitly not onto the iron tip itself.", why: ["", "That's step 1, which comes before feeding solder", "That's step 3, which comes after feeding solder", "That's step 4, the final inspection step"] },
              { q: "Per the soldering process steps, what is the correct order in step 3?", choices: ["Pull the iron away first, then the solder, let it set", "Pull the solder away first, then the iron", "Remove both iron and solder at the exact same instant", "Leave the iron in place until the solder cools"], answer: 0, explain: "Step 3 specifically orders removing the iron first, then the solder, letting the joint set undisturbed.", why: ["", "This is the reverse of the order step 3 actually specifies", "The step specifies a sequence, not a simultaneous removal", "Leaving the iron in place overheats the joint rather than letting it set"] },
              { q: "Per the warning box, what does a solder bridge indicate?", choices: ["Solder is connecting two separate pads that should be isolated", "The joint is perfectly healthy", "The iron temperature was too low", "The solder wire was too thin"], answer: 0, explain: "The warning box lists bridges — solder connecting two separate pads — as a bad-joint sign.", why: ["", "The warning box lists this as a defect, not a healthy sign", "Low iron temperature is associated with dull, cracked cold joints, not specifically bridging", "Wire thickness isn't cited as the cause of bridging in this warning box"] },
              { q: "Per the facts line, what does a good solder joint look like?", choices: ["Shiny and cone-shaped", "Dull and grainy", "Blobby and rounded", "Cracked with visible layers"], answer: 0, explain: "The facts line states a good joint is shiny and cone-shaped, while dull, cracked, or blobby joints are faults waiting to happen.", why: ["", "Dull and grainy describes a cold, faulty joint, per this same facts line", "Blobby describes a faulty joint per this same facts line", "Cracked describes a faulty joint per this same facts line"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the single biggest cause of lifted pads when removing a component?", choices: ["Using solder wick", "Rushing the desoldering job", "Using an ESD mat", "Wearing safety glasses"], answer: 1, explain: "Patience matters more than speed — rushing is the #1 cause of lifted pads.", why: ["Solder wick is a proper desoldering tool listed in the table, not the cause of lifted pads", "", "An ESD mat is a protective measure, unrelated to causing lifted pads", "Safety glasses protect your eyes and have no bearing on pad damage"] },
              { q: "Per the tools table, what is solder wick best for?", choices: ["Copper braid that soaks up melted solder — flat pads", "Spring-loaded vacuum pulling solder from a hole", "Even heat for multi-leg parts like ICs", "Everyday go-to for through-hole parts"], answer: 0, explain: "The table lists solder wick as copper braid that soaks up melted solder, best for flat pads.", why: ["", "That describes the solder sucker (pump), not solder wick", "That describes the hot air rework station, not solder wick", "That describes the iron + wick combo, not solder wick alone"] },
              { q: "Per the tools table, what is a hot air rework station best for?", choices: ["Even heat for multi-leg parts like ICs", "Copper braid soaking up solder on flat pads", "Spring-loaded vacuum pulling solder from a hole", "Everyday go-to for through-hole parts"], answer: 0, explain: "The table lists the hot air rework station as providing even heat, best for multi-leg parts like ICs.", why: ["", "That describes solder wick, not the hot air station", "That describes the solder sucker (pump), not the hot air station", "That describes the iron + wick combo, not the hot air station"] },
              { q: "Per the tools table, what is a solder sucker (pump) best for?", choices: ["Spring-loaded vacuum pulls solder from a hole", "Even heat for multi-leg parts like ICs", "Copper braid soaking up solder on flat pads", "Fine-tipped work on small SMD parts"], answer: 0, explain: "The table lists the solder sucker (pump) as a spring-loaded vacuum that pulls solder from a hole.", why: ["", "That describes the hot air rework station, not the solder sucker", "That describes solder wick, not the solder sucker", "Fine-tipped SMD work describes tweezers, not the solder sucker"] },
              { q: "Per the facts line, what matters more than speed when desoldering?", choices: ["Patience", "The exact tool brand used", "Room temperature", "How new the solder wick is"], answer: 0, explain: "The facts line states patience matters more than speed — rushing is the single biggest cause of lifted pads.", why: ["", "Tool brand isn't cited as the key factor in this facts line", "Room temperature isn't cited as the key factor in this facts line", "Wick freshness isn't cited as the deciding factor in this facts line — patience is"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the standard multimeter probe colour convention?", choices: ["Red = common, black = positive", "Red = positive, black = common", "Colour is interchangeable", "Both probes are always black"], answer: 1, explain: "Red is always positive; black is common (ground).", why: ["This reverses the actual convention the tip gives", "", "The tip explicitly states probe colours have a fixed meaning, not that they're interchangeable", "Probes are colour-coded specifically so they are NOT both the same colour"] },
              { q: "Per the settings list, what does the Resistance (Ω) setting check?", choices: ["A component's value, out of circuit", "Whether power is present, and how much", "A closed path, with a beep", "Current, measured in series"], answer: 0, explain: "The list describes Resistance (Ω) as checking a component's value, out of circuit.", why: ["", "That describes the Voltage (V) setting, not Resistance", "That describes Continuity / diode mode, not Resistance", "That describes the Current (A) setting, not Resistance"] },
              { q: "Per the settings list, what does Continuity / diode mode do?", choices: ["Beeps on a closed path — fast fault-finding", "Confirms power is present, and how much", "Checks a component's value out of circuit", "Measures current in series"], answer: 0, explain: "The list describes Continuity / diode mode as beeping on a closed path, for fast fault-finding.", why: ["", "That describes the Voltage (V) setting, not Continuity", "That describes the Resistance (Ω) setting, not Continuity", "That describes the Current (A) setting, not Continuity"] },
              { q: "Per the settings list, how is the Current (A) setting used, and how common is it?", choices: ["Measured in series — rarely needed, easy to get wrong", "Measured in parallel — used constantly", "Only relevant for capacitance testing", "Only usable with a CAT I meter"], answer: 0, explain: "The list describes Current (A) as measured in series, rarely needed, and easy to get wrong.", why: ["", "The list specifically says series, not parallel, and calls it rarely needed, not constant", "Capacitance testing is unrelated to the Current (A) setting described here", "CAT rating relates to safety at different voltage levels, not specifically to using the current setting"] },
              { q: "Per the facts line, what range should you start on, and what kind of meter should you use?", choices: ["The highest safe range, with a CAT-rated meter matched to what you're testing", "The lowest range, with any meter available", "It doesn't matter which range you start on", "Always start on the Ω range regardless of what's being tested"], answer: 0, explain: "The facts line says to always start on the highest safe range, using a CAT-rated meter matched to the test.", why: ["", "The facts line specifically says highest, not lowest, and specifies a CAT-rated meter, not just any meter", "The facts line gives a specific starting-range rule — it does matter", "Starting range should be the highest safe one for the actual measurement being made, not always Ω"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's a clear sign a soldering iron tip needs replacing rather than just cleaning?", choices: ["It's slightly warm", "It's pitted, worn flat, or won't hold solder", "It has flux residue on it", "It was used yesterday"], answer: 1, explain: "A pitted, flattened tip that won't hold solder has reached end of life — cleaning won't fix that.", why: ["Being warm is normal for an iron in use — it's not a defect sign", "", "Flux residue is normal after use and can be cleaned off, unlike physical wear", "Recent use alone doesn't indicate the tip is worn out"] },
              { q: "Per the inspecting-a-board list, what does magnification help you find?", choices: ["Hairline cracks", "The board's serial number", "Flux and grime hiding faults", "Burn marks visible to the naked eye"], answer: 0, explain: "The list states a loupe or microscope reveals hairline cracks that are otherwise easy to miss.", why: ["", "Serial number reading isn't part of this inspection list", "That's the purpose of cleaning first, a different list item", "Burn marks visible to the naked eye are caught in the earlier visual-scan step, not specifically by magnification"] },
              { q: "Per the inspecting-a-board list, what does cleaning first accomplish?", choices: ["Isopropyl alcohol removes flux and grime hiding faults", "It reveals hairline cracks under magnification", "It documents what you find with photos", "It replaces the need for a visual scan"], answer: 0, explain: "The list states cleaning with isopropyl alcohol removes flux and grime that can hide faults.", why: ["", "That's the magnification step's purpose, not cleaning's", "That's the documentation step's purpose, not cleaning's", "Cleaning is a separate step alongside the visual scan, not a replacement for it"] },
              { q: "Per the warning box, what indicates cutters need replacing?", choices: ["They leave a ragged, torn edge on leads", "They are slightly discoloured", "They were used on SMD parts", "They are the same brand as the soldering iron"], answer: 0, explain: "The warning box lists cutters leaving a ragged, torn edge on leads as a sign they need replacing.", why: ["", "Discoloration isn't the criterion given in this warning box", "Using cutters on SMD parts is normal use, not a failure sign", "Tool brand consistency isn't mentioned anywhere in this warning box"] },
              { q: "Per the warning box, what indicates meter leads need replacing?", choices: ["They are cracked or reading inconsistently", "They are more than one year old", "They were stored coiled up", "They have red and black colour coding"], answer: 0, explain: "The warning box lists meter leads that are cracked or reading inconsistently as needing replacement.", why: ["", "Age alone isn't the criterion given — condition and readings are", "Normal coiled storage isn't listed as a failure sign", "Red/black colour coding is the normal, expected convention, not a defect"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the typical iron temperature range for everyday soldering?", choices: ["50–100°C", "150–200°C", "300–400°C", "600–700°C"], answer: 2, explain: "Everyday through-hole and simple SMD joints solder well at 300–400°C.", why: ["That range is far too low to melt solder effectively", "That range is still too low for reliable everyday soldering", "", "That range is far too high and risks damaging boards and components"] },
              { q: "Per the table, what's the typical setting listed for a multimeter?", choices: ["CAT II+", "300–400°C", "Fresh braid", "10–20x"], answer: 0, explain: "The table lists the multimeter's typical setting as CAT II+, a safety rating matched to the work.", why: ["", "That's the soldering iron's typical setting, not the multimeter's", "That's the solder wick's typical setting, not the multimeter's", "That's the loupe/microscope's typical setting, not the multimeter's"] },
              { q: "Per the table, what should you watch for when using solder wick?", choices: ["Lifted or torn pads", "Cold, dull joints", "Wrong function selected", "Missed hairline cracks"], answer: 0, explain: "The table lists 'Lifted or torn pads' as what to watch for when using solder wick.", why: ["", "That's the watch-for item for the soldering iron, not solder wick", "That's the watch-for item for the multimeter, not solder wick", "That's the watch-for item for the loupe/microscope, not solder wick"] },
              { q: "Per the table, what should you watch for when using tweezers?", choices: ["Static damage without a strap", "Cold, dull joints", "Lifted or torn pads", "Wrong function selected"], answer: 0, explain: "The table lists 'Static damage without a strap' as what to watch for with tweezers, since they're used on ESD-sensitive SMD parts.", why: ["", "That's the watch-for item for the soldering iron, not tweezers", "That's the watch-for item for solder wick, not tweezers", "That's the watch-for item for the multimeter, not tweezers"] },
              { q: "Per the table, what's the typical setting listed for a loupe / microscope?", choices: ["10–20x", "CAT II+", "300–400°C", "Fine tip"], answer: 0, explain: "The table lists the loupe/microscope's typical setting as 10–20x magnification.", why: ["", "That's the multimeter's typical setting, not the loupe/microscope's", "That's the soldering iron's typical setting, not the loupe/microscope's", "That's the tweezers' typical setting, not the loupe/microscope's"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Buy the most expensive tools", "A tidy, grounded bench prevents more faults than any single tool ever fixes", "Always solder at maximum heat", "Skip inspection to save time"], answer: 1, explain: "Bench discipline prevents more faults than any one tool ever fixes.", why: ["Tool cost is never discussed as the golden rule anywhere in this module", "", "300–400°C is the recommended range, not 'maximum heat'", "Inspection is explicitly named as a core checklist skill, never something to skip"] },
              { q: "Per the checklist, what kind of bench should you be able to set up?", choices: ["An organised, ESD-safe repair bench", "The cheapest possible bench", "A bench with no lighting requirements", "A bench dedicated only to soldering"], answer: 0, explain: "The checklist names setting up an organised, ESD-safe repair bench as a core skill.", why: ["", "Cost minimization isn't named as the checklist goal", "The bench-setup card explicitly names bright lighting as a non-negotiable basic", "The bench serves all workshop skills, not soldering alone, per this module's full scope"] },
              { q: "Per the checklist, what soldering skill should you have after this module?", choices: ["Solder a clean, reliable joint from scratch", "Solder only pre-tinned components", "Solder exclusively with a hot air station", "Avoid soldering SMD parts entirely"], answer: 0, explain: "The checklist names soldering a clean, reliable joint from scratch as a core skill.", why: ["", "Pre-tinned-only soldering isn't the skill named in this checklist", "Hot air stations are covered under desoldering tools, not as the exclusive soldering method", "SMD parts are explicitly handled with tweezers elsewhere in this module, not avoided"] },
              { q: "Per the checklist, what should you be able to do when desoldering a part?", choices: ["Desolder without damaging the board", "Always use a hot air station only", "Skip the cleaning step entirely", "Desolder as fast as possible regardless of care"], answer: 0, explain: "The checklist names desoldering a part without damaging the board as a core skill.", why: ["", "The tools table lists multiple desoldering tools, not one mandatory method", "Cleaning is a separate, valuable inspection step, not something to skip", "The desoldering card explicitly warns that rushing is the #1 cause of lifted pads"] },
              { q: "Per the checklist, when should you visually inspect a board?", choices: ["Before powering it on", "Only after a fault has already occurred", "Only once a year", "Never — inspection is optional"], answer: 0, explain: "The checklist names visually inspecting a board before powering it on as a core skill.", why: ["", "The pre-work checklist elsewhere in this course places inspection first, before power, not just after faults", "No fixed yearly schedule is given anywhere in this module", "Inspection is explicitly listed as a required checklist skill, not optional"] }
            ] }
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
            { type: "check", questions: [
              { q: "Which instrument would you reach for to see a signal's shape changing over time?", choices: ["Multimeter", "Oscilloscope", "Bench supply", "Fuse"], answer: 1, explain: "An oscilloscope graphs voltage over time — showing shape, not just a single number.", why: ["The table lists the multimeter's answer as voltage, resistance, continuity — a single number, not a changing shape", "", "The table lists the bench supply as a power source, not a shape-viewing instrument", "A fuse isn't an instrument at all — it's a protection device"] },
              { q: "Per the table, what does a multimeter answer?", choices: ["Voltage, resistance, continuity", "Shows a signal changing over time", "Tests capacitors in-circuit", "Injects a known signal to trace faults"], answer: 0, explain: "The table lists the multimeter's answers as voltage, resistance, and continuity, noted for every job.", why: ["", "That's the oscilloscope's answer, not the multimeter's", "That's the ESR meter's answer, not the multimeter's", "That's the signal generator's answer, not the multimeter's"] },
              { q: "Per the table, what does an ESR meter answer?", choices: ["Tests capacitors in-circuit", "Voltage, resistance, continuity", "A safe, adjustable power source", "Shows a signal changing over time"], answer: 0, explain: "The table lists the ESR meter's answer as testing capacitors in-circuit.", why: ["", "That's the multimeter's answer, not the ESR meter's", "That's the bench supply's answer, not the ESR meter's", "That's the oscilloscope's answer, not the ESR meter's"] },
              { q: "Per the table, what does a bench supply answer?", choices: ["A safe, adjustable power source", "Injects a known signal to trace faults", "Tests capacitors in-circuit", "Shows a signal changing over time"], answer: 0, explain: "The table lists the bench supply's answer as a safe, adjustable power source, noted as 'Adjustable'.", why: ["", "That's the signal generator's answer, not the bench supply's", "That's the ESR meter's answer, not the bench supply's", "That's the oscilloscope's answer, not the bench supply's"] },
              { q: "Per the table, what does a signal generator answer?", choices: ["Injects a known signal to trace faults", "A safe, adjustable power source", "Voltage, resistance, continuity", "Tests capacitors in-circuit"], answer: 0, explain: "The table lists the signal generator's answer as injecting a known signal to trace faults, noted as 'Inject'.", why: ["", "That's the bench supply's answer, not the signal generator's", "That's the multimeter's answer, not the signal generator's", "That's the ESR meter's answer, not the signal generator's"] }
            ] }
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
            { type: "check", questions: [
              { q: "Why can an in-circuit reading sometimes mislead you compared to an offline one?", choices: ["In-circuit readings are always wrong", "Nearby components can skew the reading", "Offline testing is illegal", "In-circuit mode doesn't exist"], answer: 1, explain: "Neighbouring parts on the board can influence an in-circuit reading, unlike an isolated offline measurement.", why: ["The card describes in-circuit as faster but sometimes skewed, not always wrong", "", "Offline testing is a normal, recommended technique, not illegal", "The card explicitly names in-circuit testing as one of the three testing modes"] },
              { q: "Per the numbered list, what defines offline testing?", choices: ["Component removed or isolated — its true, standalone value", "Measured on the board — faster, but can be skewed", "Power on, circuit running", "Comparing a reading to a datasheet value"], answer: 0, explain: "The list defines offline testing as the component removed or isolated, giving its true standalone value.", why: ["", "That describes in-circuit testing, not offline testing", "That describes live testing, not offline testing", "That describes needing a reference, a separate concept from the offline/in-circuit/live distinction"] },
              { q: "Per the numbered list, what defines live testing?", choices: ["Power on, circuit running — the only way to catch some faults", "Component removed for its standalone value", "Measured on the board while off", "Comparing to a known-good board"], answer: 0, explain: "The list defines live testing as power-on, circuit running — the only way to catch certain faults.", why: ["", "That describes offline testing, not live testing", "That's neither live nor an accurate description of in-circuit testing (which happens with power involved)", "Comparing to a known-good board is part of having a reference, not the definition of live testing"] },
              { q: "Per the facts line, what does every reading need?", choices: ["A reference: a datasheet value, a known-good board, or a calculated expectation", "A second meter to cross-check it", "A live circuit, never offline", "Nothing — raw numbers are always meaningful"], answer: 0, explain: "The facts line states every reading needs a reference — a datasheet value, known-good board, or calculated expectation — to mean anything.", why: ["", "A second meter isn't the reference described in this facts line", "The card explicitly describes three valid testing modes, not a live-only requirement", "The whole point of the facts line is that raw numbers alone mean nothing without a reference"] },
              { q: "Per the picture analogy, what does a measurement without a reference resemble?", choices: ["A thermometer reading on a patient — the number alone means nothing until compared to what's normal", "A photograph with no camera settings", "A stopwatch with no start time", "A map with no legend"], answer: 0, explain: "The picture analogy compares a bare measurement to a thermometer reading — meaningless until compared to a normal baseline.", why: ["", "This specific card's analogy is the thermometer, not a photograph", "This specific card's analogy is the thermometer, not a stopwatch", "This specific card's analogy is the thermometer, not a map"] }
            ] }
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
            { type: "check", questions: [
              { q: "A multimeter reads nothing at all in current mode. What should you check first?", choices: ["The circuit is definitely broken", "The meter's internal fuse", "The battery voltage of the board", "The room temperature"], answer: 1, explain: "A blown internal fuse in the meter is a far more common cause than a dead meter itself.", why: ["The warning box specifically says to check the meter's fuse before blaming the circuit", "", "Board battery voltage isn't the first thing this warning box says to check", "Room temperature isn't mentioned anywhere in this warning box"] },
              { q: "Per the types & categories list, what does auto-ranging do?", choices: ["Picks the right range automatically", "Reads AC accurately on non-sine waveforms", "Shows a trend instead of a precise number", "Matches the meter to the circuit's energy level"], answer: 0, explain: "The list describes auto-ranging as picking the right range automatically, so you don't have to select it manually.", why: ["", "That describes True-RMS, not auto-ranging", "That describes an analog meter, not auto-ranging", "That describes CAT rating, not auto-ranging"] },
              { q: "Per the types & categories list, what does True-RMS mean?", choices: ["Reads AC accurately even on non-sine waveforms", "Automatically picks the measurement range", "Gives a precise number instead of a trend", "Is a safety spec, not a marketing term"], answer: 0, explain: "The list describes True-RMS as reading AC accurately even on non-sine waveforms, unlike a basic averaging meter.", why: ["", "That describes auto-ranging, not True-RMS", "That describes a digital meter (vs analog), not True-RMS specifically", "That description belongs to CAT rating, not True-RMS"] },
              { q: "Per the types & categories list, what is CAT rating described as?", choices: ["A safety spec that matches the meter to the circuit's energy level, not marketing", "A measure of display resolution", "A brand-specific marketing label with no real meaning", "The meter's maximum battery life rating"], answer: 0, explain: "The list explicitly describes CAT rating as a safety spec matching the meter to the circuit's energy level — not marketing.", why: ["", "Display resolution isn't what CAT rating measures", "The list explicitly says CAT rating is a safety spec, not marketing, the opposite of this option", "Battery life isn't related to CAT rating at all"] },
              { q: "Per the warning box, which is more common — a dead fuse or a dead meter?", choices: ["A dead fuse is more common than a dead meter", "A dead meter is more common than a dead fuse", "They fail at exactly the same rate", "Meters never contain a fuse"], answer: 0, explain: "The warning box explicitly states a dead fuse is more common than a dead meter.", why: ["", "This reverses what the warning box actually states", "The warning box makes a specific comparison, not an equal-rate claim", "The warning box explicitly discusses the meter's internal fuse, so meters do contain one"] }
            ] }
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
            { type: "check", questions: [
              { q: "A multimeter shows a steady average voltage, but an LED strip still flickers randomly. What tool reveals the real problem?", choices: ["A bigger multimeter", "An oscilloscope", "A fuse tester", "A screwdriver"], answer: 1, explain: "A scope reveals ripple or noise that a multimeter's averaged reading can hide completely.", why: ["A larger multimeter would still only show a single averaged number, hiding the same ripple", "", "A fuse tester checks continuity of a fuse, unrelated to diagnosing signal ripple", "A screwdriver is a hand tool, not a diagnostic instrument for this kind of fault"] },
              { q: "Per the specs list, what does bandwidth measure on an oscilloscope?", choices: ["The highest frequency the scope can measure accurately", "How many points per second it captures", "How many inputs it has", "The default probe attenuation"], answer: 0, explain: "The specs list defines bandwidth as the highest frequency the scope can measure accurately.", why: ["", "That describes sample rate, not bandwidth", "That describes channels, not bandwidth", "The default probe attenuation (10x) is mentioned in the tip, not as part of the bandwidth spec"] },
              { q: "Per the specs list, what does sample rate measure?", choices: ["How many points per second it captures", "The highest frequency it can measure accurately", "How many inputs let you compare signals", "The trace's trigger stability"], answer: 0, explain: "The specs list defines sample rate as how many points per second the scope captures.", why: ["", "That describes bandwidth, not sample rate", "That describes channels, not sample rate", "Trigger stability is a related but separate concept from sample rate, covered in the tip, not this spec"] },
              { q: "Per the specs list, what do channels provide on an oscilloscope?", choices: ["Two or more inputs to let you compare signals at once", "The highest frequency it can accurately capture", "The number of data points captured per second", "The default probe multiplier"], answer: 0, explain: "The specs list defines channels as two or more inputs, letting you compare signals at once.", why: ["", "That describes bandwidth, not channels", "That describes sample rate, not channels", "The 10x probe default is mentioned in the tip, unrelated to the channels spec"] },
              { q: "Per the tip box, what three things should you do when using a scope?", choices: ["Use the 10x probe as default, always connect the ground clip, and trigger on a stable point", "Use the 1x probe always, skip the ground clip for speed, and free-run without triggering", "Only use scopes on DC signals, never AC", "Only connect the ground clip when measuring mains voltage"], answer: 0, explain: "The tip states the 10x probe is the everyday default, to always connect the ground clip, and to trigger on a stable point.", why: ["", "The tip specifically recommends 10x as default and explicitly says to always connect the ground clip", "Scopes are described in this card as showing any signal changing over time, not restricted to DC", "The tip says to always connect the ground clip, not just for mains work"] }
            ] }
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
            { type: "check", questions: [
              { q: "A capacitor measures the correct capacitance value but the board still resets under load. What's the likely next test?", choices: ["Re-measure capacitance again", "Test the same capacitor's ESR in-circuit", "Replace the whole board", "Ignore it — it must be fine"], answer: 1, explain: "A capacitor can have the right capacitance but high ESR — a sign it's still worn out and failing.", why: ["Re-measuring the same value again won't reveal a different property like ESR", "", "Replacing the whole board skips diagnosis entirely — this card is about pinpointing the actual fault", "Correct capacitance doesn't rule out a worn part, per this card's whole point"] },
              { q: "Per the facts line, how is ESR testing typically done?", choices: ["In-circuit, on a discharged board — no desoldering needed to catch most bad capacitors", "Only out-of-circuit, after full desoldering", "Only while the board is powered live", "Only on capacitors under 1 µF"], answer: 0, explain: "The facts line states ESR testing works in-circuit on a discharged board, without needing to desolder the part.", why: ["", "The facts line explicitly says no desoldering is needed for most bad capacitors", "The facts line specifies a discharged board, not a live powered one", "No capacitance-size restriction is mentioned in this facts line"] },
              { q: "Per the tools table, what does an LCR meter measure?", choices: ["Precise inductance, capacitance, resistance (out of circuit)", "Current without breaking the circuit open", "Whether a winding or cable is leaking current", "A component running hotter than its neighbours"], answer: 0, explain: "The table lists the LCR meter's use as precise inductance, capacitance, and resistance measurement, out of circuit.", why: ["", "That describes the clamp meter, not the LCR meter", "That describes the insulation tester, not the LCR meter", "That describes the thermal camera, not the LCR meter"] },
              { q: "Per the tools table, what does a clamp meter do?", choices: ["Reads current without breaking the circuit open", "Measures precise inductance and capacitance", "Checks a winding for current leakage", "Spots a component running hot"], answer: 0, explain: "The table lists the clamp meter's use as reading current without breaking the circuit open.", why: ["", "That describes the LCR meter, not the clamp meter", "That describes the insulation tester, not the clamp meter", "That describes the thermal camera, not the clamp meter"] },
              { q: "Per the tools table, what does a thermal camera do?", choices: ["Spots a component running hotter than its neighbours", "Reads current without opening the circuit", "Measures precise capacitance out of circuit", "Checks a cable isn't leaking current"], answer: 0, explain: "The table lists the thermal camera's use as spotting a component running hotter than its neighbours.", why: ["", "That describes the clamp meter, not the thermal camera", "That describes the LCR meter, not the thermal camera", "That describes the insulation tester, not the thermal camera"] }
            ] }
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
            { type: "check", questions: [
              { q: "Before powering a freshly-repaired board from a bench supply, what should you set first?", choices: ["Maximum voltage", "The current limit, set low", "The AC frequency", "Nothing, just switch it on"], answer: 1, explain: "Setting the current limit low first protects the board if a fault still remains.", why: ["Maximum voltage risks damage if a fault remains, the opposite of the recommended caution", "", "A bench supply provides adjustable DC voltage with a current limit, not an AC frequency setting", "Switching it on with no precautions risks further damage if the repair didn't fully fix the fault"] },
              { q: "Per the facts line, why set the current limit low first?", choices: ["It protects the board (and you) if a short is still present", "It makes the supply's display more accurate", "It's required by law in most countries", "It has no real safety benefit, it's just convention"], answer: 0, explain: "The facts line explains that a low current limit protects the board and you if a fault such as a short is still present.", why: ["", "Display accuracy isn't the reason given in this facts line", "No legal requirement is mentioned anywhere in this card", "The facts line explicitly states there IS a real protective benefit"] },
              { q: "Per the signal injection list, what are sine and square waves described as?", choices: ["Standard test signals with known shape, amplitude, and frequency", "Random noise used to stress-test a board", "Only usable with an oscilloscope, never a signal generator", "Signals that can only be injected into powered-off circuits"], answer: 0, explain: "The list describes sine and square waves as standard test signals with known shape, amplitude, and frequency.", why: ["", "These are described as standard, known test signals, not random noise", "This card is specifically about using them with the signal generator", "The list describes feeding the signal in and following it through the circuit, implying the circuit is active"] },
              { q: "Per the signal injection list, how do you trace a fault using an injected signal?", choices: ["The signal disappears exactly where the fault sits", "The signal gets louder at the fault location", "The signal changes color on the oscilloscope display", "The signal only appears after the fault, not before"], answer: 0, explain: "The list states tracing a fault means following the injected signal until it disappears exactly where the fault sits.", why: ["", "The list describes the signal disappearing, not getting louder, at the fault", "Oscilloscope traces don't use color to indicate signal presence in this context", "The list describes the signal disappearing at the fault, not appearing only after it"] },
              { q: "Per the picture analogy, what does using a bench supply on a freshly-repaired board resemble?", choices: ["Testing a car engine on a stand before it goes back on the road — controlled, and safe to fail", "Driving a car at full speed immediately after a repair", "Testing a car engine with no gauges or limits at all", "Skipping the test and assuming the repair worked"], answer: 0, explain: "The picture analogy compares this to testing a car engine on a stand — controlled and safe to fail, unlike driving it straight back into use.", why: ["", "This is the opposite of what the analogy describes — the whole point is controlled, cautious testing", "The bench supply's whole purpose is providing controlled limits, not testing with none", "The card is specifically about verifying the repair with controlled testing, not skipping verification"] }
            ] }
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
            { type: "check", questions: [
              { q: "You need to isolate exactly which stage of a circuit has failed. Which technique fits best?", choices: ["Measure resistance of the whole board at once", "Inject a known signal and trace where it disappears", "Replace every component", "Guess based on appearance"], answer: 1, explain: "Signal injection and tracing pinpoints exactly where a signal is lost.", why: ["Whole-board resistance doesn't isolate which specific stage has failed", "", "Replacing everything skips diagnosis entirely, which this whole module is built to avoid", "Guessing based on appearance is exactly the kind of non-diagnostic approach this module replaces"] },
              { q: "Per the 'Match the tool to the symptom' list, what should you reach for first if you suspect a dead supply?", choices: ["Start with the multimeter — voltage first, always", "Start with the oscilloscope", "Start with the ESR meter", "Start with the function generator"], answer: 0, explain: "The list says to start with the multimeter, checking voltage first, when a dead supply is suspected.", why: ["", "The list recommends the oscilloscope for noise or timing issues, not a dead supply", "The list recommends the ESR meter for a board resetting under load, not a dead supply", "The list recommends the function generator for isolating a stage, not for a dead supply"] },
              { q: "Per the 'Match the tool to the symptom' list, what should you reach for if you suspect noise or timing issues?", choices: ["The oscilloscope", "The multimeter", "The ESR meter", "The bench supply"], answer: 0, explain: "The list specifically recommends the oscilloscope for suspected noise or timing problems.", why: ["", "The list recommends the multimeter for a suspected dead supply, not noise/timing", "The list recommends the ESR meter for a board resetting under load, not noise/timing", "The bench supply provides power; it doesn't diagnose noise or timing issues"] },
              { q: "Per the 'Match the tool to the symptom' list, what should you check if the board resets under load?", choices: ["Check capacitors in-circuit with an ESR meter", "Reach for the oscilloscope first", "Start with the multimeter's voltage reading", "Inject a signal with the function generator"], answer: 0, explain: "The list specifically points to checking capacitors in-circuit with an ESR meter when a board resets under load.", why: ["", "The list recommends the oscilloscope for noise/timing, not for a board resetting under load", "The list recommends starting with the multimeter for a suspected dead supply, not this symptom", "The list recommends signal injection for isolating a stage, not for a board resetting under load"] },
              { q: "Per the tip box, what are labelled test points (TP1, TP2, GND, VCC) described as?", choices: ["The designer helping you troubleshoot", "A sign the board was poorly designed", "Only useful for manufacturing, not repair", "A safety hazard to avoid touching"], answer: 0, explain: "The tip frames labelled test points as the designer helping you troubleshoot, giving you known reference points.", why: ["", "The tip frames labelled test points positively, as helpful, not as a design flaw", "The tip specifically frames them as useful for troubleshooting, which is a repair activity", "Test points are meant to be probed during troubleshooting, not avoided"] }
            ] }
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
            { type: "check", questions: [
              { q: "What should you always connect on an oscilloscope probe before trusting the trace?", choices: ["The ground clip", "A second probe", "A resistor", "Nothing extra is needed"], answer: 0, explain: "An ungrounded probe gives a meaningless trace — always connect the ground clip to the circuit's common.", why: ["", "The table's watch-for item is specifically an ungrounded probe, not a missing second channel", "No resistor is mentioned anywhere in this table's oscilloscope row", "The table explicitly lists 'Ungrounded probe' as something to watch for — something IS needed"] },
              { q: "Per the reference table, what should you watch for with the multimeter?", choices: ["Wrong function selected", "Ungrounded probe", "Board still charged", "Amplitude too high"], answer: 0, explain: "The table lists 'Wrong function selected' as the multimeter's watch-for item.", why: ["", "That's the oscilloscope's watch-for item, not the multimeter's", "That's the ESR meter's watch-for item, not the multimeter's", "That's the signal generator's watch-for item, not the multimeter's"] },
              { q: "Per the reference table, what should you watch for with the ESR meter?", choices: ["Board still charged", "Wrong function selected", "Ungrounded probe", "Limit set too high"], answer: 0, explain: "The table lists 'Board still charged' as the ESR meter's watch-for item — it must be tested on a discharged board.", why: ["", "That's the multimeter's watch-for item, not the ESR meter's", "That's the oscilloscope's watch-for item, not the ESR meter's", "That's the bench supply's watch-for item, not the ESR meter's"] },
              { q: "Per the reference table, what's the bench supply's typical setting?", choices: ["Low current limit first", "CAT II+", "Auto-trigger first", "Match circuit rating"], answer: 0, explain: "The table lists the bench supply's typical setting as setting the current limit low first.", why: ["", "That's the multimeter's typical setting, not the bench supply's", "That's the oscilloscope's typical setting, not the bench supply's", "That's the signal generator's typical setting, not the bench supply's"] },
              { q: "Per the reference table, what should you watch for with the signal generator?", choices: ["Amplitude too high", "Wrong function selected", "Ungrounded probe", "Board still charged"], answer: 0, explain: "The table lists 'Amplitude too high' as the signal generator's watch-for item, risking damage to the circuit under test.", why: ["", "That's the multimeter's watch-for item, not the signal generator's", "That's the oscilloscope's watch-for item, not the signal generator's", "That's the ESR meter's watch-for item, not the signal generator's"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Always use the most expensive meter", "A measurement means nothing without something to compare it to", "Never test in-circuit", "Scopes replace multimeters entirely"], answer: 1, explain: "Every reading needs a reference — a datasheet, known-good board, or calculation.", why: ["Meter cost is never discussed as the golden rule anywhere in this module", "", "In-circuit testing is explicitly described as a valid, useful testing mode in this module", "The module treats multimeters and oscilloscopes as complementary tools, not one replacing the other"] },
              { q: "Per the checklist, what testing approach should you be able to choose for a fault?", choices: ["Live, in-circuit, or offline testing", "Only ever offline testing", "Only ever live testing", "Guessing based on symptoms alone"], answer: 0, explain: "The checklist names choosing between live, in-circuit, or offline testing as a core skill.", why: ["", "The checklist names three distinct modes, not just offline", "The checklist names three distinct modes, not just live", "The checklist is specifically about disciplined testing choices, not guesswork"] },
              { q: "Per the checklist, what should you be able to read with confidence?", choices: ["A waveform on an oscilloscope", "A resistor's colour code", "A schematic symbol library", "A datasheet's pinout diagram alone"], answer: 0, explain: "The checklist names reading a waveform on an oscilloscope with confidence as a core skill.", why: ["", "Resistor colour codes belong to the components module's checklist, not this one", "Schematic symbols belong to the components module's checklist, not this one", "This checklist item is specifically about waveforms, not pinout diagrams alone"] },
              { q: "Per the checklist, how should you test a capacitor's health?", choices: ["In-circuit with an ESR meter", "Only by measuring its plain capacitance value", "Only after fully desoldering it", "By its physical size alone"], answer: 0, explain: "The checklist names testing a capacitor's health in-circuit with an ESR meter as a core skill.", why: ["", "This module's whole point is that plain capacitance alone can hide a worn-out part with high ESR", "The ESR card explicitly says in-circuit testing usually avoids the need to desolder", "Physical size isn't a health-testing method described anywhere in this module"] },
              { q: "Per the checklist, which two instruments should you be able to use safely together?", choices: ["A bench supply and signal generator", "A multimeter and a screwdriver", "An oscilloscope and a soldering iron", "A thermal camera and a fuse"], answer: 0, explain: "The checklist names using a bench supply and signal generator safely as one of its core skills.", why: ["", "A screwdriver is a hand tool from a different module, not paired with the multimeter in this checklist", "A soldering iron belongs to the workshop module, not paired with the oscilloscope in this checklist", "A thermal camera and fuse aren't paired together anywhere in this checklist"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the special challenge with BGA chips during rework?", choices: ["They're always the cheapest part", "Their solder balls are hidden underneath, invisible to the eye", "They never need replacing", "They don't use solder at all"], answer: 1, explain: "BGA joints sit in a hidden grid underneath the chip — you can't inspect a single one directly.", why: ["Cost isn't the challenge this card describes for BGA rework", "", "This module's whole BGA card exists specifically because BGAs DO need rework", "BGA stands for Ball Grid Array — they use hidden solder balls, not no solder at all"] },
              { q: "Per the table, what note is listed for Soldering?", choices: ["300–400°C", "No lifted pads", "IC vs board", "Hot air"], answer: 0, explain: "The table lists Soldering's note as 300–400°C, the typical iron temperature.", why: ["", "That note belongs to Desoldering, not Soldering", "That note belongs to Component Swap, not Soldering", "That note belongs to BGA Rework, not Soldering"] },
              { q: "Per the table, what is Component Swap described as being about?", choices: ["Right method per part type", "Removing parts cleanly", "Chips with hidden solder balls", "Verifying the repair holds"], answer: 0, explain: "The table describes Component Swap as choosing the right method per part type.", why: ["", "That describes Desoldering, not Component Swap", "That describes BGA Rework, not Component Swap", "That describes Inspection, not Component Swap"] },
              { q: "Per the table, what note is listed for BGA Rework?", choices: ["Hot air", "300–400°C", "No lifted pads", "Clean + test"], answer: 0, explain: "The table lists BGA Rework's note as 'Hot air', the equipment needed for its hidden solder balls.", why: ["", "That note belongs to Soldering, not BGA Rework", "That note belongs to Desoldering, not BGA Rework", "That note belongs to Inspection, not BGA Rework"] },
              { q: "Per the table, what is Inspection described as being about?", choices: ["Verifying the repair holds", "Right method per part type", "Removing parts cleanly", "Through-hole and SMD joints"], answer: 0, explain: "The table describes Inspection as verifying the repair holds, noted as 'Clean + test'.", why: ["", "That describes Component Swap, not Inspection", "That describes Desoldering, not Inspection", "That describes Soldering, not Inspection"] }
            ] }
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
            { type: "check", questions: [
              { q: "Why is a fume extractor considered essential for daily rework, not optional?", choices: ["It cools the board faster", "It pulls flux fumes away from your face", "It makes joints shinier", "It replaces the need for flux"], answer: 1, explain: "Flux fumes irritate the lungs — a fume extractor protects you during repeated hot air/soldering sessions.", why: ["Cooling isn't the extractor's job — that's a separate concern covered elsewhere", "", "Joint appearance is determined by soldering technique, not fume extraction", "The extractor removes fumes produced by flux — it doesn't replace flux itself, which is still needed for good joints"] },
              { q: "Per the tools table, what is a hot air rework station used for?", choices: ["Even, contactless heat for multi-leg SMD & BGA", "Fine-tip, temp-controlled through-hole & simple SMD", "Warming the whole board evenly to reduce warping", "Pulling flux fumes away from your face"], answer: 0, explain: "The table lists the hot air rework station's use as even, contactless heat for multi-leg SMD & BGA parts.", why: ["", "That describes the soldering iron, not the hot air station", "That describes the preheater, not the hot air station", "That describes the fume extractor, not the hot air station"] },
              { q: "Per the tools table, what is a preheater used for?", choices: ["Warms the whole board evenly, reduces warping", "Even, contactless heat for multi-leg SMD & BGA", "Fine-tip, temp-controlled through-hole soldering", "Pulling flux fumes away"], answer: 0, explain: "The table lists the preheater's use as warming the whole board evenly, reducing warping.", why: ["", "That describes the hot air rework station, not the preheater", "That describes the soldering iron, not the preheater", "That describes the fume extractor, not the preheater"] },
              { q: "Per the tip box, when should solder paste (with hot air) be used versus flux-core wire?", choices: ["Solder paste for SMD rework; flux-core wire for everyday through-hole joints", "Solder paste for through-hole only; flux-core wire for SMD only", "They are always interchangeable with no distinction", "Neither is used in rework, only in factory assembly"], answer: 0, explain: "The tip specifically pairs solder paste (with hot air) for SMD rework, and flux-core wire for everyday through-hole joints.", why: ["", "This reverses the tip's actual pairing of paste-with-SMD and wire-with-through-hole", "The tip draws a specific distinction between the two use cases, not interchangeability", "The intro explicitly frames this card as being about rework, distinct from factory assembly, and both tools are used in rework"] },
              { q: "Per the intro, how does rework soldering differ from factory assembly?", choices: ["It's precise, one-off work on a board that's already built and populated", "It's faster and less precise than factory work", "It uses entirely different solder alloys", "It never requires a soldering iron"], answer: 0, explain: "The intro states rework is precise, one-off work on an already-built, populated board — unlike factory assembly.", why: ["", "The intro emphasizes precision, not speed or reduced precision", "Solder alloy differences aren't the distinction this intro draws", "The tools table lists a soldering iron as one of the four core rework tools"] }
            ] }
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
            { type: "check", questions: [
              { q: "What solder defect is described as \"one end lifts as the other cools\"?", choices: ["Bridging", "Cold joint", "Tombstoning", "Wetting"], answer: 2, explain: "Tombstoning happens when uneven heating lifts one end of a small part as the other cools and anchors.", why: ["The warning box describes bridging as solder connecting two separate pads, not a lifting part", "The warning box describes a cold joint as dull, grainy, or cracked, not a lifted end", "", "Wetting refers to solder properly flowing onto a surface, and isn't even listed in this card's defect list"] },
              { q: "Per the through-hole steps, what happens in step 2?", choices: ["Heat pad and lead together, not just the wire", "Insert the lead, seated fully against the board", "Feed the solder onto the heated joint", "Trim and inspect the shiny, cone-shaped result"], answer: 0, explain: "Step 2 is heating the pad and lead together, not just the wire.", why: ["", "That's step 1, which comes before heating", "That's step 3, which comes after heating", "That's step 4, the final inspection step"] },
              { q: "Per the through-hole steps, what does step 3 say about feeding solder?", choices: ["Feed it onto the heated joint, not the iron tip", "Feed it directly onto the cold iron tip", "Feed it before heating the joint at all", "Feed it only after trimming the lead"], answer: 0, explain: "Step 3 specifically says to feed solder onto the heated joint, not the iron tip.", why: ["", "This is the opposite of what step 3 actually instructs", "The joint must be heated first, per steps 1 and 2, before feeding solder in step 3", "Trimming happens in step 4, after feeding solder in step 3"] },
              { q: "Per the warning box, what is bridging?", choices: ["Solder connecting two separate pads that should be isolated", "A dull, grainy, or cracked joint surface", "One end of a part lifting as the other cools", "A properly seated, cone-shaped joint"], answer: 0, explain: "The warning box defines bridging as solder connecting two separate pads.", why: ["", "That describes a cold joint, not bridging", "That describes tombstoning, not bridging", "That describes a healthy joint, not a defect at all"] },
              { q: "Per the warning box, what does a cold joint look like?", choices: ["Dull, grainy, or cracked", "Shiny and cone-shaped", "Two pads bridged together", "One end lifted off the board"], answer: 0, explain: "The warning box describes a cold joint as dull, grainy, or cracked in appearance.", why: ["", "That describes a healthy joint, the opposite of a cold joint", "That describes bridging, not a cold joint", "That describes tombstoning, not a cold joint"] }
            ] }
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
            { type: "check", questions: [
              { q: "What tool matches the removal of a multi-leg SMD IC?", choices: ["A single-point soldering iron only", "A hot air station heating all legs evenly", "A hammer and chisel", "A pair of pliers"], answer: 1, explain: "Multi-leg SMD ICs need even heat across all legs at once — a hot air station does this safely.", why: ["A single-point iron can't heat all legs simultaneously, risking lifted pads if rushed one leg at a time", "", "A hammer and chisel would physically destroy the board — never appropriate for rework", "Pliers alone can't melt solder to release the part safely"] },
              { q: "Per the facts line, what does good rework leave behind?", choices: ["No trace — same footprint, same pad condition, same board integrity", "A slightly different footprint but same function", "Visible marks that prove a repair happened", "A stronger board than the original, always"], answer: 0, explain: "The facts line states good rework leaves no trace — same footprint, same pad condition, same board integrity.", why: ["", "The facts line specifically says 'same footprint', not a different one", "The facts line specifically says 'no trace', the opposite of visible marks", "The goal stated is matching original integrity, not exceeding it"] },
              { q: "Per the table, what method and tool are used for a BGA chip?", choices: ["Preheat, then top heat, using a BGA rework station", "Heat both sides and pull, using an iron and wick", "Heat both pads together, using an iron or hot air", "Even heat on all legs at once, using a hot air station"], answer: 0, explain: "The table lists the BGA chip's method as preheat then top heat, using a BGA rework station, with board warping as the risk if uneven.", why: ["", "That describes the through-hole R/C method, not BGA", "That describes the SMD 2-pin part method, not BGA", "That describes the SMD IC (multi-leg) method, not BGA"] },
              { q: "Per the table, what's the risk listed for through-hole R/C removal?", choices: ["Low, with patience", "Tombstoning if uneven", "Lifted pads if rushed", "Board warping if uneven"], answer: 0, explain: "The table lists the through-hole R/C's risk as low, with patience.", why: ["", "That's the SMD 2-pin part's risk, not through-hole R/C's", "That's the SMD IC (multi-leg)'s risk, not through-hole R/C's", "That's the BGA chip's risk, not through-hole R/C's"] },
              { q: "Per the table, what's the risk listed for an SMD 2-pin part?", choices: ["Tombstoning if uneven", "Low, with patience", "Lifted pads if rushed", "Board warping if uneven"], answer: 0, explain: "The table lists the SMD 2-pin part's risk as tombstoning if the two pads are heated unevenly.", why: ["", "That's the through-hole R/C's risk, not the SMD 2-pin part's", "That's the SMD IC (multi-leg)'s risk, not the SMD 2-pin part's", "That's the BGA chip's risk, not the SMD 2-pin part's"] }
            ] }
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
            { type: "check", questions: [
              { q: "A board shows burn marks and damage across multiple tracks. What's the appropriate fix?", choices: ["Replace just the nearest IC", "Whole-board replacement", "Ignore it and power on anyway", "Apply more solder everywhere"], answer: 1, explain: "Widespread cascading damage across multiple tracks calls for a whole-board swap, not a single IC fix.", why: ["The table specifically maps this multi-track symptom to a whole-board swap, not a single IC", "", "Powering on a board with visible burn/track damage risks further, more serious harm", "Adding solder doesn't address structural cascading damage across multiple tracks"] },
              { q: "Per the table, what's the likely cause and fix when one function fails on a board?", choices: ["Single IC or part faulty — IC-only swap", "Cascading overcurrent damage — whole-board swap", "Physical / structural damage — whole-board swap", "Weak capacitor or supply IC — whole-board swap"], answer: 0, explain: "The table lists 'one function fails' as a single IC or part faulty, fixed with an IC-only swap.", why: ["", "That's the burn-marks row's cause and fix, not the one-function-fails row's", "That's the cracked/delaminated PCB row's cause and fix, not this row's", "This mixes a different row's cause with the wrong fix — the weak capacitor row is still an IC-only swap, but that's a different symptom"] },
              { q: "Per the table, what's the likely cause and fix when a board resets randomly?", choices: ["Weak capacitor or supply IC — IC-only swap", "Cascading overcurrent damage — whole-board swap", "Physical / structural damage — whole-board swap", "Single IC or part faulty — whole-board swap"], answer: 0, explain: "The table lists random resets as caused by a weak capacitor or supply IC, fixed with an IC-only swap.", why: ["", "That's the burn-marks row's cause and fix, not the random-reset row's", "That's the cracked/delaminated PCB row's cause and fix, not the random-reset row's", "The fix listed for a single faulty IC/part is an IC-only swap, not whole-board"] },
              { q: "Per the table, what's the likely cause and fix for a cracked or delaminated PCB?", choices: ["Physical / structural damage — whole-board swap", "Weak capacitor or supply IC — IC-only swap", "Single IC or part faulty — IC-only swap", "Cascading overcurrent damage — IC-only swap"], answer: 0, explain: "The table lists a cracked or delaminated PCB as physical/structural damage, fixed with a whole-board swap.", why: ["", "That's the random-reset row's cause and fix, not the cracked-PCB row's", "That's the one-function-fails row's cause and fix, not the cracked-PCB row's", "Cascading overcurrent damage is fixed with a whole-board swap, not an IC-only swap, per this table"] },
              { q: "Per the tip box, what's the guiding philosophy for choosing IC-only vs whole-board replacement?", choices: ["Repair the smallest thing that fixes the fault", "Always replace the whole board to be safe", "Always try an IC-only swap first, regardless of symptoms", "Replace whichever part is cheapest to source"], answer: 0, explain: "The tip states the guiding philosophy is repairing the smallest thing that fixes the fault.", why: ["", "The table shows single-function faults get an IC-only swap, not automatic whole-board replacement", "The table shows structural/cascading damage gets a whole-board swap, not always an IC-only attempt", "Part cost isn't the criterion given anywhere in this card — matching fix to symptom is"] }
            ] }
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
            { type: "check", questions: [
              { q: "How do you repair a cut track on a board?", choices: ["Ignore it, it doesn't matter", "Bridge it with a fine jumper wire", "Replace the entire board", "Cover it with tape only"], answer: 1, explain: "A fine jumper wire restores the broken electrical connection across a cut track.", why: ["A cut track breaks the circuit's electrical path — it does matter and needs fixing", "", "A cut track is a small, targeted fix — not a reason for whole-board replacement", "Tape provides no electrical connection; it doesn't restore the broken path"] },
              { q: "Per the facts line, what does BGA removal and reinstallation require, beyond just reheating?", choices: ["A hot air or BGA station, a stencil, and fresh solder balls — reballing, not just reheating", "Nothing extra — a standard soldering iron works fine", "Only a magnifying glass and patience", "A permanent marker to note ball positions"], answer: 0, explain: "The facts line specifies reballing — a hot air/BGA station, a stencil, and fresh solder balls — not just reheating the old ones.", why: ["", "The definition explicitly contrasts BGA with simple soldering iron work, given its hidden ball grid", "Magnification helps inspection generally, but the facts line specifically names reballing equipment as required", "Marking positions isn't the requirement named in this facts line — reballing equipment is"] },
              { q: "Per the track & pad repair list, how do you rebuild a lifted pad?", choices: ["A small wire tacked to the nearest good point", "Bridge it with a fine jumper wire across the gap", "Seal it immediately with lacquer, no wire needed", "Replace the entire board section"], answer: 0, explain: "The list describes rebuilding a lifted pad with a small wire tacked to the nearest good point.", why: ["", "That describes bridging a cut track, a different repair on this same list", "Sealing with lacquer is the final protective step, not the pad-rebuilding method itself", "This list describes small, targeted repairs, not board-section replacement"] },
              { q: "Per the track & pad repair list, what does sealing with lacquer accomplish?", choices: ["Protects the repaired area from moisture and corrosion", "Restores the broken electrical connection", "Rebuilds a lifted pad's physical structure", "Removes flux residue from the joint"], answer: 0, explain: "The list describes lacquer sealing as protecting the repaired area from moisture and corrosion.", why: ["", "That's what bridging a cut track or rebuilding a pad accomplishes, not sealing", "That's what tacking a wire to the nearest good point accomplishes, not sealing", "Isopropyl alcohol cleaning removes flux residue, a different card's step, not lacquer sealing"] },
              { q: "Per the picture analogy, what does a BGA chip's underside resemble?", choices: ["A plug with hundreds of tiny contacts hidden under its base — you can't inspect a single one directly", "A single visible leg you can probe directly with a meter", "An empty socket with no connections at all", "A large single pad covering the whole chip"], answer: 0, explain: "The picture analogy compares a BGA's underside to a plug with hundreds of hidden tiny contacts, impossible to inspect individually.", why: ["", "This is the opposite of a BGA — its balls are hidden, not a single visible probeable leg", "A BGA has hundreds of solder-ball connections, not an empty socket", "The whole point of the analogy is that the connections are a hidden grid of many tiny points, not one large pad"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the final step before calling a rework job done?", choices: ["Leave it for someone else to check", "Power-on test to confirm the function actually works", "Just visually check it looks tidy", "Apply extra flux for good luck"], answer: 1, explain: "A repair isn't complete until you've proven the function actually works with a power-on test.", why: ["The list names power-on test as the final step you perform yourself, not someone else", "", "Looking tidy is checked via magnification earlier in the list, but functional proof is the actual final step", "Flux has no role in verifying that a repair works — it's a soldering aid, not a test"] },
              { q: "Per the 'After rework' list, what does cleaning with isopropyl alcohol accomplish?", choices: ["Removes flux residue", "Confirms no bridges before power", "Verifies the repaired function works", "Catches defects your eyes alone will miss"], answer: 0, explain: "The list states cleaning with isopropyl alcohol removes flux residue.", why: ["", "That's the continuity check's purpose, not cleaning's", "That's the power-on test's purpose, not cleaning's", "That's the magnification step's purpose, not cleaning's"] },
              { q: "Per the 'After rework' list, what does magnifying every joint accomplish?", choices: ["Catches what your eyes alone will miss", "Removes flux residue from the board", "Confirms no bridges exist before power-on", "Verifies the repaired function actually works"], answer: 0, explain: "The list states magnifying every joint catches defects that your eyes alone will miss.", why: ["", "That's cleaning's purpose, not magnification's", "That's the continuity check's purpose, not magnification's", "That's the power-on test's purpose, not magnification's"] },
              { q: "Per the warning box, what should you do before handling a bare, unpackaged IC?", choices: ["Ground yourself", "Apply flux to your hands", "Preheat the whole board", "Run the fume extractor"], answer: 0, explain: "The warning box states you should ground yourself before handling a bare, unpackaged IC, protecting it from ESD.", why: ["", "Flux is never applied to hands — it's used in soldering, unrelated to ESD protection", "Preheating the board isn't the recommended action for handling a bare IC specifically", "The fume extractor addresses hot air/soldering fumes, a separate warning item from ESD protection"] },
              { q: "Per the warning box, when should you let hot air nozzles and boards cool?", choices: ["Before handling them", "Only after the next job starts", "Never — handle them hot for speed", "Only if the fume extractor is off"], answer: 0, explain: "The warning box states you should let hot air nozzles and boards cool before handling them.", why: ["", "The warning box says before handling, not after starting the next job", "Handling hot equipment for speed is exactly the risk this warning box guards against", "Cooling before handling is unrelated to whether the fume extractor is running"] }
            ] }
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
            { type: "check", questions: [
              { q: "Roughly what peak temperature does a BGA reflow profile target?", choices: ["100–120°C", "220–245°C", "500–600°C", "It doesn't matter"], answer: 1, explain: "BGA reflow follows a controlled profile peaking around 220–245°C.", why: ["That range is too low to reflow solder for BGA reballing", "", "That range is far too high and would damage the board and chip", "The table explicitly gives a specific target range — it matters a great deal, following a controlled profile"] },
              { q: "Per the table, what's the typical temperature for through-hole soldering?", choices: ["300–350°C", "320–370°C", "220–245°C peak", "500–600°C"], answer: 0, explain: "The table lists through-hole solder's typical temp as 300–350°C, using a soldering iron.", why: ["", "That's SMD hot air removal's typical temp, not through-hole's", "That's the BGA reflow's typical temp, not through-hole's", "No task in this table uses this temperature range"] },
              { q: "Per the table, what's the typical temperature for SMD hot air removal?", choices: ["320–370°C", "300–350°C", "220–245°C peak", "100–120°C"], answer: 0, explain: "The table lists SMD hot air removal's typical temp as 320–370°C, with even airflow and no direct point.", why: ["", "That's through-hole solder's typical temp, not SMD hot air removal's", "That's the BGA reflow's typical temp, not SMD hot air removal's", "No task in this table uses this temperature range"] },
              { q: "Per the table, what note is given for desoldering wick?", choices: ["Fresh braid absorbs better", "Even airflow, no direct point", "Follow the solder profile", "Higher for ground planes"], answer: 0, explain: "The table lists desoldering wick's note as 'Fresh braid absorbs better'.", why: ["", "That note belongs to SMD hot air removal, not desoldering wick", "That note belongs to BGA reflow, not desoldering wick", "That note belongs to through-hole soldering, not desoldering wick"] },
              { q: "Per the table, what note is given for SMD hot air removal?", choices: ["Even airflow, no direct point", "Fresh braid absorbs better", "Higher for ground planes", "Follow the solder profile"], answer: 0, explain: "The table lists SMD hot air removal's note as 'Even airflow, no direct point'.", why: ["", "That note belongs to desoldering wick, not SMD hot air removal", "That note belongs to through-hole soldering, not SMD hot air removal", "That note belongs to BGA reflow, not SMD hot air removal"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Speed matters more than precision", "Good rework leaves no trace it ever happened", "Always replace the whole board", "Never use hot air"], answer: 1, explain: "Same footprint, same pad condition, same board integrity — no trace of the repair.", why: ["The desoldering card explicitly names patience, not speed, as what matters most", "", "The IC-vs-board card explicitly teaches choosing the smallest fix, not always the whole board", "The BGA card explicitly requires hot air/BGA stations for reballing — hot air is essential, not forbidden"] },
              { q: "Per the checklist, what soldering skill should you have under rework conditions?", choices: ["Solder a clean through-hole or SMD joint under rework conditions", "Only solder BGA chips, nothing simpler", "Avoid soldering irons entirely in favor of hot air", "Solder only pre-tinned leads"], answer: 0, explain: "The checklist names soldering a clean through-hole or SMD joint under rework conditions as a core skill.", why: ["", "The checklist covers through-hole and SMD, not BGA exclusively", "The tools table lists a soldering iron as a core rework tool alongside hot air, not a replacement for it", "Pre-tinned-only soldering isn't the skill named in this checklist"] },
              { q: "Per the checklist, what should you be able to do when removing a component?", choices: ["Remove it without lifting a pad or damaging a track", "Remove it as fast as possible regardless of care", "Only remove through-hole parts, never SMD", "Always replace the whole board instead of removing one part"], answer: 0, explain: "The checklist names removing a component without lifting a pad or damaging a track as a core skill.", why: ["", "The desoldering card explicitly warns that rushing causes lifted pads — care matters more than speed", "The pcb-decision table covers through-hole, SMD, and BGA removal methods, not through-hole only", "This checklist item is specifically about single-component removal, not whole-board replacement"] },
              { q: "Per the checklist, what decision should you be able to make about IC vs board replacement?", choices: ["Decide between an IC-only swap and a whole-board replacement", "Always choose whichever is cheaper regardless of symptoms", "Never replace an IC, only ever the whole board", "Replace the IC first, then the board regardless of outcome"], answer: 0, explain: "The checklist names deciding between an IC-only swap and a whole-board replacement as a core skill.", why: ["", "The ic-vs-board card matches fix to symptom and cause, not simply to cost", "The symptom/cause/fix table explicitly lists IC-only swap as the correct fix for some symptoms", "The table matches one correct fix per symptom, not a fixed sequence of both regardless of outcome"] },
              { q: "Per the checklist, what BGA rework techniques should you be able to use?", choices: ["Preheat, hot air, and reballing", "Only a standard soldering iron", "Only visual inspection, no rework at all", "Only whole-board replacement, never single-chip rework"], answer: 0, explain: "The checklist names using preheat, hot air, and reballing as the core BGA rework skill.", why: ["", "The BGA card explicitly requires hot air/BGA station equipment, not a standard soldering iron", "The BGA card is specifically about performing rework, not just inspecting", "The BGA card is specifically about reworking the single BGA chip, not replacing the whole board"] }
            ] }
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
