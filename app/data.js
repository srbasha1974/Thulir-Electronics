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
            { type: "check", questions: [
              { q: "What's the very first step before you ever touch a breadboard?", choices: ["Solder everything down", "Read and understand the schematic", "Apply power", "Order more parts"], answer: 1, explain: "Understanding the schematic always comes before building anything physical.", why: ["Soldering is for a permanent build, which comes much later than breadboarding", "", "Power-on comes near the end of the process, after building and verifying", "Ordering parts isn't part of this five-step process at all"] },
              { q: "Per the table, what is 'Breadboard It' about?", choices: ["Prototype before anything permanent", "Understand the schematic first", "Power, input, processing, output", "Record what you built and found"], answer: 0, explain: "The table describes Breadboard It as prototyping before anything permanent, noted 'No solder'.", why: ["", "That describes 'Read It', not 'Breadboard It'", "That describes 'Build It', not 'Breadboard It'", "That describes 'Document It', not 'Breadboard It'"] },
              { q: "Per the table, what is 'Build It' about?", choices: ["Power, input, processing, output", "Understand the schematic first", "Prototype before anything permanent", "Verify before and after power-on"], answer: 0, explain: "The table describes Build It as covering power, input, processing, and output, noted '4 blocks'.", why: ["", "That describes 'Read It', not 'Build It'", "That describes 'Breadboard It', not 'Build It'", "That describes 'Test It', not 'Build It'"] },
              { q: "Per the table, what note is listed for 'Test It'?", choices: ["Trace it", "Symbols", "No solder", "BOM + notes"], answer: 0, explain: "The table lists Test It's note as 'Trace it'.", why: ["", "That note belongs to 'Read It', not 'Test It'", "That note belongs to 'Breadboard It', not 'Test It'", "That note belongs to 'Document It', not 'Test It'"] },
              { q: "Per the table, what is 'Document It' about?", choices: ["Record what you built and found", "Understand the schematic first", "Prototype before anything permanent", "Power, input, processing, output"], answer: 0, explain: "The table describes Document It as recording what you built and found, noted 'BOM + notes'.", why: ["", "That describes 'Read It', not 'Document It'", "That describes 'Breadboard It', not 'Document It'", "That describes 'Build It', not 'Document It'"] }
            ] }
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
            { type: "check", questions: [
              { q: "What does a schematic diagram actually represent?", choices: ["The exact physical size of every part", "How components connect to each other", "The cost of each component", "The manufacturer of each part"], answer: 1, explain: "A schematic is a map of connections, not a picture of physical parts or layout.", why: ["The definition explicitly says a schematic doesn't show what parts physically look like", "", "Cost isn't part of what a schematic conveys at all", "Manufacturer isn't part of what a schematic conveys — that belongs in a BOM"] },
              { q: "Per the 'Reading signal flow' list, where should you start when reading a schematic?", choices: ["At the power source, finding where energy enters first", "At the ground return", "At a random feedback loop", "At the last component drawn on the page"], answer: 0, explain: "The list says to start at the power source, finding where energy enters the circuit first.", why: ["", "Finding the ground return is listed as a later step, not the starting point", "Feedback loops are something to watch for while tracing, not the starting point", "Page position has no bearing on schematic reading order per this list"] },
              { q: "Per the 'Reading signal flow' list, what does a line looping backward usually mean?", choices: ["Feedback or control", "A drawing mistake to ignore", "The end of the circuit", "A duplicate ground symbol"], answer: 0, explain: "The list states a backward-looping line usually means feedback or control, not an error.", why: ["", "The list explicitly treats this as meaningful, not a mistake to dismiss", "The ground return, not a feedback loop, is what marks the path back to common", "This describes a specific signal-flow feature, not a symbol duplication issue"] },
              { q: "Per the common symbols table, what does a triangle with a bar represent?", choices: ["Diode — current flows one way", "Resistor — limits current", "Capacitor — stores charge", "Transistor — switch or amplifier"], answer: 0, explain: "The table lists 'Triangle + bar' as the diode symbol, noting current flows one way.", why: ["", "That's the zigzag/box symbol, not triangle+bar", "That's the two-parallel-lines symbol, not triangle+bar", "That's the three-lines+circle symbol, not triangle+bar"] },
              { q: "Per the common symbols table, what does 'Three lines + circle' represent?", choices: ["Transistor — switch or amplifier", "Resistor — limits current", "Capacitor — stores charge", "Diode — current flows one way"], answer: 0, explain: "The table lists 'Three lines + circle' as the transistor symbol, noting switch or amplifier function.", why: ["", "That's the zigzag/box symbol, not three-lines+circle", "That's the two-parallel-lines symbol, not three-lines+circle", "That's the triangle+bar symbol, not three-lines+circle"] }
            ] }
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
            { type: "check", questions: [
              { q: "Do the two halves of a breadboard connect electrically across the centre gap?", choices: ["Yes, always", "No — the gap breaks the connection", "Only for ICs", "Only if you press hard enough"], answer: 1, explain: "The centre gap has no connection — a very common wiring mistake to assume otherwise.", why: ["The warning box specifically lists assuming the gap is connected as a mistake — it isn't", "", "ICs straddle the gap physically, but the gap still provides no electrical connection across it", "Physical pressure has no effect on whether the internal metal strips are connected across the gap"] },
              { q: "Per the 'How the rows connect' list, what are the power rails used for?", choices: ["Long strips running the full length, for +V and ground", "Short columns of five holes, connected vertically", "Separating the two halves with no connection", "Holding ICs straddled across the centre"], answer: 0, explain: "The list describes the power rails (top & bottom) as long strips for +V and ground running the full length.", why: ["", "That describes the terminal strips, not the power rails", "That describes the centre gap, not the power rails", "That describes how ICs are typically placed, not what the power rails are for"] },
              { q: "Per the 'How the rows connect' list, how are the terminal strips (middle) connected?", choices: ["Short columns of five holes, all connected vertically", "Long strips running the full board length", "Not connected at all — isolated per hole", "Connected horizontally across the entire board"], answer: 0, explain: "The list describes terminal strips as short columns of five holes, connected vertically.", why: ["", "That describes the power rails, not the terminal strips", "Each hole in a column IS connected to the others in that column — not fully isolated", "The connection runs vertically within a column, not horizontally across the whole board"] },
              { q: "Per the warning box, what's a mistake to avoid regarding testing?", choices: ["Building the entire circuit before testing any of it", "Testing each section as you build it", "Leaving leads fully and firmly inserted", "Assuming the centre gap breaks the connection"], answer: 0, explain: "The warning box lists building the entire circuit before testing any of it as a mistake to avoid.", why: ["", "Testing as you build is the recommended practice, the opposite of this listed mistake", "Firmly inserted leads is correct practice — the warning is about LOOSE, half-inserted leads", "Correctly assuming the gap breaks the connection is accurate, not a listed mistake"] },
              { q: "Per the facts line, what is a breadboard meant for?", choices: ["Prototyping only — never a permanent build", "A permanent, final production build", "High-voltage mains work exclusively", "Replacing the need for a schematic"], answer: 0, explain: "The facts line states it's for prototyping only, never a permanent build, since connections can loosen with vibration or time.", why: ["", "The facts line explicitly says never a permanent build, the opposite of this option", "Nothing in this card ties breadboards specifically to high-voltage mains work", "A breadboard is for testing a circuit built from a schematic — it doesn't replace reading one"] }
            ] }
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
            { type: "check", questions: [
              { q: "What are the four building blocks found in almost every circuit?", choices: ["Power, Input, Processing, Output", "Voltage, Current, Resistance, Power", "Read, Build, Test, Document", "Series, Parallel, AC, DC"], answer: 0, explain: "Every circuit, simple or complex, breaks down into Power, Input, Processing, and Output.", why: ["", "Those are electrical quantities, not the four functional building blocks this card names", "Those are the five overview steps from the earlier card, not the four circuit building blocks", "Those are wiring/current topology terms, not the four functional building blocks named here"] },
              { q: "Per the building blocks list, what does 'Input' refer to?", choices: ["Switches, sensors, or signals — where information enters", "Battery, adapter, or bench supply", "Transistors, ICs, or logic", "LEDs, motors, or speakers"], answer: 0, explain: "The list describes Input as switches, sensors, or signals — where information enters the circuit.", why: ["", "That describes Power source, not Input", "That describes Processing, not Input", "That describes Output, not Input"] },
              { q: "Per the 'From schematic to breadboard' list, what happens in step 2?", choices: ["Place power rails first — wire +V and ground before placing a component", "Identify the four blocks", "Place components by block", "Wire the connections last"], answer: 0, explain: "Step 2 is placing power rails first, wiring +V and ground before any component goes down.", why: ["", "That's step 1, which comes before placing power rails", "That's step 3, which comes after placing power rails", "That's step 4, the final step"] },
              { q: "Per the 'From schematic to breadboard' list, what does step 4 say to do last?", choices: ["Wire the connections, following the schematic exactly, one net at a time", "Identify the four blocks first", "Place power rails before any component", "Place components by block order"], answer: 0, explain: "Step 4 says to wire the connections last, following the schematic exactly, one net at a time.", why: ["", "That's step 1, which comes first, not last", "That's step 2, which comes before wiring", "That's step 3, which comes before wiring"] },
              { q: "Per the warning box, what's a common build mistake?", choices: ["LED or electrolytic capacitor placed backwards", "Wiring power rails before placing components", "Following the schematic exactly, net by net", "Identifying the four blocks before starting"], answer: 0, explain: "The warning box lists placing an LED or electrolytic capacitor backwards as a common build mistake.", why: ["", "That's the recommended correct order from the numbered list, not a mistake", "That's the recommended correct wiring approach, not a mistake", "That's the recommended first step, not a mistake"] }
            ] }
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
            { type: "check", questions: [
              { q: "In systematic troubleshooting, what should you confirm first, before tracing anything else?", choices: ["The output stage", "The power stage", "The documentation", "The breadboard colour"], answer: 1, explain: "Start at the source — there's no point testing further downstream without confirmed power.", why: ["Output is downstream — testing it first wastes time if the power stage itself has failed", "", "Documentation matters for later reference, but it isn't a troubleshooting step in this list", "Breadboard colour has no electrical significance in this troubleshooting process"] },
              { q: "Per the 'Verify before power-on' list, what does 'Check polarity' cover?", choices: ["Every diode, LED, and electrolytic capacitor oriented correctly", "Continuity-testing the rails before power touches the board", "Every wire seated firmly with no loose leads", "Confirming the supply voltage matches expectations"], answer: 0, explain: "The list defines checking polarity as confirming every diode, LED, and electrolytic capacitor is oriented correctly.", why: ["", "That describes 'Check for shorts', not 'Check polarity'", "That describes 'Check connections', not 'Check polarity'", "That describes 'Check power rating', not 'Check polarity'"] },
              { q: "Per the 'Verify before power-on' list, what does 'Check for shorts' involve?", choices: ["Continuity-test the rails before power ever touches the board", "Confirming diode and LED orientation", "Confirming the supply voltage matches expectations", "Checking every wire is seated firmly"], answer: 0, explain: "The list defines checking for shorts as continuity-testing the rails before power ever touches the board.", why: ["", "That describes 'Check polarity', not 'Check for shorts'", "That describes 'Check power rating', not 'Check for shorts'", "That describes 'Check connections', not 'Check for shorts'"] },
              { q: "Per the systematic troubleshooting list, what does step 2 involve?", choices: ["Trace stage by stage, input toward output, one block at a time", "Confirm the power stage first", "Compare to expected values from a schematic or known-good build", "Isolate before you replace any part"], answer: 0, explain: "Step 2 is tracing stage by stage, moving from input toward output one block at a time.", why: ["", "That's step 1, which comes before tracing stage by stage", "That's step 3, which comes after tracing stage by stage", "That's step 4, the final step"] },
              { q: "Per the systematic troubleshooting list, what does step 4 instruct?", choices: ["Isolate before you replace — confirm the exact faulty stage before swapping any part", "Confirm the power stage first", "Trace stage by stage from input to output", "Compare readings to expected values"], answer: 0, explain: "Step 4 instructs isolating before replacing — confirming the exact faulty stage before swapping any part.", why: ["", "That's step 1, which comes before this final step", "That's step 2, which comes before this final step", "That's step 3, which comes before this final step"] }
            ] }
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
            { type: "check", questions: [
              { q: "Why re-check every connection when moving a working breadboard circuit to a permanent PCB?", choices: ["It's not necessary, just copy it exactly", "It's a fresh build, not just a copy — mistakes can creep in", "PCBs never have wiring errors", "Breadboards are always wired identically to PCBs"], answer: 1, explain: "Treat the move to a permanent board as a fresh build deserving its own careful check.", why: ["The facts line explicitly says to re-check every connection during the move — it isn't just a copy step", "", "PCBs can absolutely have wiring errors, which is exactly why re-checking matters", "The facts line explicitly frames this as a fresh build, not an identical wiring repeat"] },
              { q: "Per the documenting-your-build list, what does 'Keep the schematic' provide?", choices: ["The reference every future repair starts from", "A record of test voltages when known-good", "A list of part numbers and quantities", "Photographic proof of the wiring"], answer: 0, explain: "The list describes keeping the schematic as the reference every future repair starts from.", why: ["", "That describes 'Record your test results', not 'Keep the schematic'", "That describes 'List your components (BOM)', not 'Keep the schematic'", "That describes 'Photograph the build', not 'Keep the schematic'"] },
              { q: "Per the documenting-your-build list, what does the BOM (bill of materials) include?", choices: ["Values, part numbers, and quantities", "Photographs of the finished wiring", "Voltages and behaviour when known-good", "The original schematic file"], answer: 0, explain: "The list describes the BOM as listing values, part numbers, and quantities.", why: ["", "That describes 'Photograph the build', not the BOM", "That describes 'Record your test results', not the BOM", "That describes 'Keep the schematic', not the BOM"] },
              { q: "Per the documenting-your-build list, what does photographing the build catch?", choices: ["Wiring mistakes notes alone might miss", "The exact resistor tolerance values", "The supply voltage rating", "The original schematic's revision number"], answer: 0, explain: "The list states photographing the build catches wiring mistakes that notes alone might miss.", why: ["", "Resistor tolerance is a component spec, not something a build photograph specifically reveals", "Supply voltage rating is a test-result detail, not what the photograph step is about", "Schematic revision tracking isn't described as the photograph step's purpose"] },
              { q: "Per the definition, where does a working breadboard circuit move to for a permanent build?", choices: ["Stripboard or a custom PCB", "Directly into a finished product with no further changes", "Back to a fresh breadboard for final testing", "A 3D-printed enclosure only"], answer: 0, explain: "The definition states a working breadboard circuit moves to stripboard or a custom PCB for a permanent, solid build.", why: ["", "The facts line explicitly says to re-check every connection, implying real work remains before it's finished", "The definition describes moving forward to a permanent board, not back to another breadboard", "An enclosure isn't mentioned in this card — stripboard/PCB is the described destination"] }
            ] }
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
            { type: "check", questions: [
              { q: "What's the golden rule of this module?", choices: ["Never document your builds", "A schematic is a map — trace the path before you pick up a component", "Always skip breadboarding", "Power on before checking polarity"], answer: 1, explain: "Understanding the schematic always comes before touching any part.", why: ["The checklist explicitly names documenting a finished build as a core skill", "", "The checklist explicitly names prototyping correctly on a breadboard as a core skill", "The verify list explicitly puts checking polarity before power-on, the reverse order of this option"] },
              { q: "Per the checklist, what should you be able to do with a schematic?", choices: ["Read it and trace its signal flow", "Ignore it and build from memory", "Redraw it from scratch every time", "Only read it after the build is finished"], answer: 0, explain: "The checklist names reading a schematic and tracing its signal flow as a core skill.", why: ["", "The golden rule explicitly says to trace the path before picking up a component — not to skip it", "Redrawing isn't a skill named in this checklist", "The golden rule places schematic understanding before, not after, building"] },
              { q: "Per the checklist, what should you be able to do on a breadboard?", choices: ["Prototype a circuit correctly", "Build a final, permanent product", "Skip it entirely and solder directly", "Ignore the centre gap's behavior"], answer: 0, explain: "The checklist names prototyping a circuit correctly on a breadboard as a core skill.", why: ["", "The breadboard card explicitly states it's for prototyping only, never a permanent build", "The overview table lists breadboarding as a required step before permanent building, not something to skip", "Correctly understanding the centre gap is explicitly one of this module's tested facts, not something to ignore"] },
              { q: "Per the checklist, what should you be able to identify in any circuit?", choices: ["The four building blocks", "The exact resistor tolerance of every part", "The manufacturer of every IC", "The retail price of the whole build"], answer: 0, explain: "The checklist names identifying the four building blocks in any circuit as a core skill.", why: ["", "Resistor tolerance isn't a skill named in this checklist", "Manufacturer identification isn't a skill named in this checklist", "Pricing isn't a skill named in this checklist"] },
              { q: "Per the checklist, when should you verify a build?", choices: ["Before and after power-on", "Only after something breaks", "Only once, at the very end", "Never — trust the schematic alone"], answer: 0, explain: "The checklist names verifying a build before and after power-on as a core skill.", why: ["", "The whole point of pre-power verification is catching problems before they cause a break", "The testing card describes multiple checks, both before and after power, not a single final check", "The verify-before-power-on list exists specifically because trusting the schematic alone isn't enough"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 07: POWER ELECTRONICS
    {
      id: "power-electronics",
      code: "MOD·07",
      icon: "🔌",
      color: "#ffb85b",
      title: "Power Electronics",
      subtitle: "Turning raw AC into the clean, steady power every circuit depends on.",
      cards: [
        {
          id: "power-overview",
          title: "The Five Stages of Power Electronics",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever wondered how a wall socket's AC becomes the steady, safe DC your phone charger actually delivers? Four stages make that happen, every time — by the end of this module, you'll know each one." },
            { type: "table", title: "From raw mains AC to the clean DC every board actually needs", headers: ["Stage", "What It Does", "Key Idea"], rows: [
              ["Rectification", "Turning AC into pulsing DC", "Diodes"],
              ["Filtering", "Smoothing the pulses out", "Ripple"],
              ["Regulation", "Holding voltage steady", "Linear / SMPS"],
              ["Switch-Mode Supplies", "Efficient, compact power conversion", "PWM"],
              ["Thermal Management", "Keeping power parts alive", "Heat sinks"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what does the Rectification stage do?", choices: ["Turning AC into pulsing DC", "Smoothing the pulses out", "Holding voltage steady", "Keeping power parts alive"], answer: 0, explain: "The table lists Rectification's job as turning AC into pulsing DC, with diodes as the key idea.", why: ["", "That's the Filtering stage's job, not Rectification's", "That's the Regulation stage's job, not Rectification's", "That's the Thermal Management stage's job, not Rectification's"] },
              { q: "Per the table, what is the key idea behind the Filtering stage?", choices: ["Ripple", "Diodes", "PWM", "Heat sinks"], answer: 0, explain: "The table lists 'Ripple' as the key idea for the Filtering stage — smoothing the pulses out.", why: ["", "Diodes is the key idea for Rectification, not Filtering", "PWM is the key idea for Switch-Mode Supplies, not Filtering", "Heat sinks is the key idea for Thermal Management, not Filtering"] },
              { q: "Per the table, what does the Regulation stage do?", choices: ["Holding voltage steady", "Turning AC into pulsing DC", "Efficient, compact power conversion", "Smoothing the pulses out"], answer: 0, explain: "The table lists Regulation's job as holding voltage steady, with Linear/SMPS as the key idea.", why: ["", "That's the Rectification stage's job, not Regulation's", "That's the Switch-Mode Supplies stage's job, not Regulation's", "That's the Filtering stage's job, not Regulation's"] },
              { q: "Per the table, what is the key idea behind Switch-Mode Supplies?", choices: ["PWM", "Ripple", "Diodes", "Heat sinks"], answer: 0, explain: "The table lists 'PWM' as the key idea for Switch-Mode Supplies, delivering efficient, compact power conversion.", why: ["", "Ripple is the key idea for Filtering, not Switch-Mode Supplies", "Diodes is the key idea for Rectification, not Switch-Mode Supplies", "Heat sinks is the key idea for Thermal Management, not Switch-Mode Supplies"] },
              { q: "Per the table, what does the Thermal Management stage do?", choices: ["Keeping power parts alive", "Holding voltage steady", "Turning AC into pulsing DC", "Efficient, compact power conversion"], answer: 0, explain: "The table lists Thermal Management's job as keeping power parts alive, with heat sinks as the key idea.", why: ["", "That's the Regulation stage's job, not Thermal Management's", "That's the Rectification stage's job, not Thermal Management's", "That's the Switch-Mode Supplies stage's job, not Thermal Management's"] }
            ] }
          ]
        },
        {
          id: "power-rectification",
          title: "Rectification: From AC to Pulsing DC",
          tag: "Rectification",
          blocks: [
            { type: "definition",
              plain: "Rectification converts alternating current, which reverses direction, into pulsing current that only flows one way.",
              picture: "Like a one-way valve on a pipe that swings back and forth — water still gets through, but only in one direction.",
              facts: "Diodes do the actual work — a diode's one-way behaviour is the entire principle behind rectification." },
            { type: "table", title: "Half-wave vs full-wave rectification", headers: ["Aspect", "Half-Wave", "Full-Wave (Bridge)"], rows: [
              ["Diodes used", "A single diode, blocking half of every cycle", "Four diodes, using both halves of the cycle"],
              ["Efficiency", "Simple, but wastes half the incoming power", "Far more efficient, smoother output"],
              ["Output pattern", "Leaves large gaps between output pulses", "The standard choice in almost every real supply"]
            ]},
            { type: "numbered", title: "The Bridge Rectifier", items: [
              { title: "Four diodes", desc: "Arranged so current always exits the same way, whichever half of AC it is" },
              { title: "Current path alternates", desc: "A different diode pair conducts on each half of the incoming cycle" },
              { title: "Ripple frequency doubles", desc: "Both halves are used, so the output pulses twice as often as the input" },
              { title: "Common fault", desc: "One shorted diode causes heavy ripple; one open diode halves the output badly" }
            ]},
            { type: "definition",
              plain: "A charger powers its load, but produces an audible hum that wasn't there when it was new.",
              picture: "Like a fridge that suddenly starts humming after years of running silently — nothing looks wrong, but something inside has changed.",
              facts: "Scoping the rectifier's output shows far more ripple than the datasheet's expected value — a hum is often ripple you can hear before you can see it." },
            { type: "numbered", title: "Diagnosing the hum", items: [
              { title: "What you do", desc: "Scope the rectifier's output and compare the ripple to the datasheet's expected value" },
              { title: "What it tells you", desc: "One diode in the bridge had failed open — the supply was quietly running on half-wave rectification" }
            ]},
            { type: "check", questions: [
              { q: "What does rectification actually do to the incoming AC?", choices: ["Converts it into pulsing current that only flows one way", "Removes ripple from a pulsing DC signal", "Holds output voltage steady under load", "Switches current rapidly to save energy"], answer: 0, explain: "Rectification forces a two-way alternating current into pulsing current that flows only one direction.", why: ["", "That's filtering's job, not rectification's", "That's regulation's job, not rectification's", "That's how an SMPS works, not plain rectification"] },
              { q: "Per the comparison table, why is full-wave (bridge) rectification the standard choice in real supplies?", choices: ["It uses both halves of the cycle, giving far more efficiency and a smoother output", "It uses fewer diodes than half-wave, so it's cheaper", "It doesn't require any diodes at all", "It produces larger gaps between output pulses"], answer: 0, explain: "The table shows full-wave uses all four diodes to capture both halves of the AC cycle, unlike half-wave which wastes half the incoming power.", why: ["", "Full-wave actually uses more diodes (four) than half-wave (one), not fewer", "Diodes are exactly what do the rectifying work in both half-wave and full-wave circuits", "Large gaps between pulses is the half-wave column's downside, not full-wave's advantage"] },
              { q: "Per the numbered list, why does ripple frequency double in a bridge rectifier compared to the input AC frequency?", choices: ["Because both halves of the AC cycle are used, so the output pulses twice as often", "Because the diodes run twice as hot", "Because only one diode conducts at any time", "Because the bridge doubles the input voltage"], answer: 0, explain: "Since a different diode pair conducts on each half of the AC cycle, the output gets a pulse from both halves — doubling the pulse rate.", why: ["", "Diode temperature isn't what doubles the ripple frequency", "A bridge always has current flowing through a diode PAIR, not a single diode at a time", "A bridge rectifier doesn't double the voltage — it just uses both halves of the existing AC swing"] },
              { q: "Per the numbered list, what's the common fault behavior if one diode in the bridge fails open?", choices: ["The output is halved badly, effectively running on half-wave rectification", "The supply produces no output at all", "The output voltage doubles", "Nothing changes — the other three diodes fully compensate"], answer: 0, explain: "The numbered list states an open diode halves the output badly — exactly what the charger-hum scenario demonstrated.", why: ["", "The scenario shows the charger still worked, just with a hum — it wasn't completely dead", "An open diode reduces output, it doesn't double the voltage", "The scenario explicitly shows a real, audible effect — the other diodes did not fully compensate"] },
              { q: "In the charger-with-a-hum scenario, what did scoping the rectifier's output reveal, and what did it mean?", choices: ["Far more ripple than the datasheet expected — one diode had failed open, running the supply on half-wave rectification", "Perfectly clean output matching the datasheet — the hum was unrelated to rectification", "No output at all — the bridge had failed completely", "Output voltage far above the rated maximum"], answer: 0, explain: "The scope showed excess ripple, revealing a failed-open diode had silently degraded the bridge into half-wave operation — a hum you can hear before you can see it on a meter.", why: ["", "The whole point of the scenario is that the ripple WAS the clue — it wasn't clean or unrelated", "The charger still worked (with a hum), so it wasn't a complete bridge failure with no output", "The fault was excess ripple from a degraded rectifier, not an overvoltage condition"] }
            ] }
          ]
        },
        {
          id: "power-filtering-regulation",
          title: "Filtering & Regulation: Smoothing and Holding Steady",
          tag: "Filtering & Regulation",
          blocks: [
            { type: "definition",
              plain: "A filter capacitor charges on each pulse and discharges between them, smoothing the rectifier's pulsing output.",
              picture: "Like a water tank absorbing a pulsing flow, so what comes out the other end is steady.",
              facts: "A weak or failing filter capacitor is one of the most common causes of visible ripple on a 'working' supply." },
            { type: "numbered", title: "Reading Ripple on a Scope", items: [
              { title: "AC-couple the input", desc: "Removes the large DC offset so small ripple is actually visible" },
              { title: "Measure peak-to-peak", desc: "Ripple is reported as a peak-to-peak voltage, not an average" },
              { title: "Compare to the datasheet", desc: "Every supply has an expected maximum ripple to measure against" },
              { title: "Check under load", desc: "Ripple often only appears clearly once real current is being drawn" }
            ]},
            { type: "definition",
              plain: "A regulator holds its output voltage constant, even as input voltage or load current changes.",
              picture: "Like a tap that automatically adjusts itself to keep the flow constant, no matter the pressure behind it.",
              facts: "Every downstream component depends on the regulator holding steady — regulation failure cascades everywhere." },
            { type: "table", title: "Linear vs switching regulators", headers: ["Aspect", "Linear Regulator", "Switching Regulator"], rows: [
              ["Noise & simplicity", "Simple, low noise, easy to troubleshoot", "More complex, and can introduce switching noise"],
              ["Efficiency", "Wastes excess energy as heat", "Highly efficient, runs much cooler"],
              ["Best fit", "Small, low-current loads", "Standard choice for higher-current supplies"]
            ]},
            { type: "definition",
              plain: "A linear regulator outputs the correct voltage, but runs uncomfortably hot even under light load.",
              picture: "Like a tap held half-shut against high pressure — the flow is right, but the strain shows up as heat.",
              facts: "Checking the input-to-output voltage difference reveals the input voltage was far higher than needed — correct output, but wasting most of the difference as heat." },
            { type: "numbered", title: "Diagnosing the hot regulator", items: [
              { title: "What you do", desc: "Check the input-to-output voltage difference, since a linear regulator dissipates that gap as heat" },
              { title: "What it tells you", desc: "The input voltage was far higher than needed, wasting most of the difference as heat" }
            ]},
            { type: "check", questions: [
              { q: "Why is a weak or failing filter capacitor one of the most common causes of visible ripple?", choices: ["It can no longer smooth the rectifier's pulsing output by charging and discharging properly", "It causes the diodes in the bridge to fail open", "It increases the AC input frequency", "It disconnects the regulator from the supply"], answer: 0, explain: "The filter capacitor's whole job is to charge on each pulse and discharge between them — a weak one can't smooth the pulses anymore, leaving visible ripple.", why: ["", "A weak filter cap doesn't cause diode failures — that's a separate, unrelated fault", "A filter capacitor doesn't affect the incoming AC frequency at all", "A filter cap issue is a smoothing problem, not a disconnection from the regulator"] },
              { q: "Per the ripple-reading steps, why should ripple be measured as peak-to-peak rather than an average?", choices: ["Ripple is reported as a peak-to-peak voltage, per how supplies specify their maximum ripple", "Peak-to-peak is easier to read on a multimeter", "Average voltage always equals peak-to-peak for ripple", "Ripple has no defined measurement convention"], answer: 0, explain: "The steps explicitly state ripple is reported as a peak-to-peak voltage, not an average — matching how datasheets specify it.", why: ["", "This measurement is taken on a scope, not simply read off a multimeter", "Peak-to-peak and average are different quantities entirely for a ripple waveform", "The steps explicitly give peak-to-peak as the standard convention"] },
              { q: "Per the ripple-reading steps, why should ripple be checked under load, not just at idle?", choices: ["Ripple often only appears clearly once real current is being drawn", "Ripple only exists when the supply is unloaded", "Load has no effect on ripple at all", "Checking under load damages the filter capacitor"], answer: 0, explain: "The steps state ripple often only appears clearly once real current is being drawn — a supply can look deceptively clean at idle.", why: ["", "This is backwards — ripple often hides at idle and appears under load, not the reverse", "The steps explicitly say load reveals ripple, meaning load does affect it", "Checking under load is a normal diagnostic step, not something that damages the capacitor"] },
              { q: "Per the comparison table, what's the tradeoff between linear and switching regulators?", choices: ["Linear is simple and low-noise but wastes energy as heat; switching is efficient but more complex and can introduce noise", "Linear is always more efficient than switching", "Switching regulators are simpler to troubleshoot than linear ones", "Both regulator types have identical noise characteristics"], answer: 0, explain: "The table shows this exact tradeoff: linear trades efficiency for simplicity and low noise; switching trades some simplicity and noise for much higher efficiency.", why: ["", "The table shows switching, not linear, as the highly efficient option", "The table lists linear as the easy-to-troubleshoot option, not switching", "The table explicitly distinguishes their noise characteristics — switching can introduce noise, linear is low-noise"] },
              { q: "In the hot-regulator scenario, why did a linear regulator with the correct output voltage still run uncomfortably hot?", choices: ["The input voltage was far higher than needed, and the linear regulator dissipates that excess gap as heat", "The regulator was outputting the wrong voltage", "The load was drawing far more current than rated", "The filter capacitor had failed open"], answer: 0, explain: "Checking the input-to-output voltage difference showed the input was much higher than necessary — a linear regulator burns off that entire excess as heat, even while the output stays correct.", why: ["", "The scenario explicitly states the output voltage was correct", "The scenario is about excess input voltage, not excess load current", "Filter capacitor failure isn't part of this particular scenario — it's an input-voltage issue"] }
            ] }
          ]
        },
        {
          id: "power-smps",
          title: "Switch-Mode Power Supplies (SMPS)",
          tag: "SMPS",
          blocks: [
            { type: "definition",
              plain: "A switch-mode power supply regulates voltage by rapidly switching current, rather than dissipating excess as heat.",
              picture: "Like PWM motor control, but used to regulate voltage instead of driving a motor.",
              facts: "It's smaller and far more efficient than a linear supply of the same power rating, but more complex to repair." },
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "Output voltage & current", desc: "What the supply is actually rated to deliver continuously" },
              { title: "Efficiency", desc: "How much input power actually reaches the output, versus wasted as heat" },
              { title: "Switching frequency", desc: "How fast the internal switch operates — affects size and noise" },
              { title: "Regulation accuracy", desc: "How tightly the output voltage is held under changing load" }
            ]},
            { type: "numbered", title: "Inside an SMPS", items: [
              { title: "1. Switching transistor", desc: "Rapidly switches current through the transformer's primary" },
              { title: "2. Transformer", desc: "Steps the switched voltage down, and isolates input from output" },
              { title: "3. Feedback / PWM controller", desc: "Adjusts switching to hold the output voltage steady" },
              { title: "4. Output rectifier & filter", desc: "Converts the switched output back into smooth DC" }
            ]},
            { type: "tip", text: "A healthy SMPS shows a steady output voltage under varying load, consistent quiet switching with no audible ticking, and a switching transistor and diodes that run only mildly warm." },
            { type: "warning", title: "SMPS fault signs", items: [
              "Repeated clicking as the supply restarts itself",
              "Output voltage far outside its rated tolerance",
              "Switching transistor or output diode runs very hot"
            ]},
            { type: "definition",
              plain: "A power supply clicks every few seconds, briefly starts up, then shuts down again in a loop.",
              picture: "Like a circuit breaker that keeps tripping the instant you reset it — it's not broken, it's refusing to stay on for a reason.",
              facts: "Checking the output for a short circuit before suspecting the switching stage reveals a shorted output capacitor was tripping the supply's own protection — it was working correctly all along." },
            { type: "numbered", title: "Diagnosing the clicking supply", items: [
              { title: "What you do", desc: "Check the output for a short circuit before suspecting the switching stage at all" },
              { title: "What it tells you", desc: "A shorted output capacitor was tripping the supply's own protection circuit" }
            ]},
            { type: "check", questions: [
              { q: "How does an SMPS regulate voltage, fundamentally differently from a linear regulator?", choices: ["By rapidly switching current, rather than dissipating the excess as heat", "By using a single diode to block reverse current", "By adding a larger filter capacitor", "By running at a fixed, unchanging duty cycle regardless of load"], answer: 0, explain: "The definition states an SMPS regulates by rapidly switching current, rather than a linear regulator's approach of dissipating the excess as heat.", why: ["", "A single diode describes rectification, not SMPS regulation", "A bigger filter cap is a filtering concept, not how an SMPS regulates", "The feedback/PWM controller actively adjusts switching — it isn't fixed"] },
              { q: "Per the specifications list, what does 'efficiency' specifically measure in an SMPS?", choices: ["How much input power actually reaches the output, versus wasted as heat", "How fast the internal switch operates", "How tightly output voltage is held under changing load", "The maximum current the supply can deliver continuously"], answer: 0, explain: "The specs list defines efficiency as how much input power reaches the output versus being wasted as heat.", why: ["", "That's the switching frequency spec, not efficiency", "That's the regulation accuracy spec, not efficiency", "That's the output voltage & current spec, not efficiency"] },
              { q: "Per the 'Inside an SMPS' list, what is the role of the feedback / PWM controller?", choices: ["Adjusts switching to hold the output voltage steady", "Rapidly switches current through the transformer's primary", "Steps the switched voltage down and isolates input from output", "Converts the switched output back into smooth DC"], answer: 0, explain: "The list describes the feedback/PWM controller as the stage that adjusts switching to hold the output voltage steady.", why: ["", "That's the switching transistor's role, not the feedback/PWM controller's", "That's the transformer's role, not the feedback/PWM controller's", "That's the output rectifier & filter's role, not the feedback/PWM controller's"] },
              { q: "Per the healthy/fault signs, what does an SMPS clicking and restarting in a loop typically indicate?", choices: ["It's often the supply protecting itself from a fault, such as a shorted output, not necessarily failing outright", "The switching transistor has definitely failed", "The transformer has lost isolation", "This is always normal, healthy SMPS behavior"], answer: 0, explain: "Repeated clicking and restarting is listed as a fault sign, and the scenario confirms it's frequently the supply's own protection circuit responding to a real short — working exactly as designed.", why: ["", "The scenario shows the transistor wasn't the cause — a shorted output capacitor was", "Transformer isolation loss isn't the cause identified in this scenario", "Clicking/restarting is explicitly listed under FAULT SIGNS, not healthy signs"] },
              { q: "In the clicking-supply scenario, what should be checked before suspecting the switching stage at all?", choices: ["The output, for a short circuit", "The transformer's turns ratio", "The AC input frequency", "The case temperature of the enclosure"], answer: 0, explain: "The scenario explicitly instructs checking the output for a short circuit first — which revealed a shorted output capacitor was tripping the supply's own protection.", why: ["", "Turns ratio isn't part of this diagnostic scenario", "AC input frequency isn't part of this diagnostic scenario", "Enclosure temperature isn't the specific check this scenario calls for"] }
            ] }
          ]
        },
        {
          id: "power-transformers-thermal",
          title: "Transformers & Thermal Management",
          tag: "Transformers & Thermal",
          blocks: [
            { type: "definition",
              plain: "A transformer uses two magnetically-linked coils to change voltage level between its primary and secondary sides.",
              picture: "Like two gears of different sizes, linked without touching — turning one drives the other at a different rate.",
              facts: "It also provides isolation — no direct electrical connection between the mains side and your circuit." },
            { type: "numbered", title: "Reading Transformer Specifications", items: [
              { title: "Turns ratio", desc: "Determines how much the voltage steps up or down" },
              { title: "VA rating", desc: "The maximum power it can deliver continuously, in volt-amps" },
              { title: "Primary / secondary voltage", desc: "The input and output voltage the transformer is rated for" },
              { title: "Isolation rating", desc: "Confirms it's safe for the voltage separation the design requires" }
            ]},
            { type: "numbered", title: "Thermal Management in Power Circuits", items: [
              { title: "Heat sinks", desc: "Increase surface area to move heat away from a hot component" },
              { title: "Thermal paste", desc: "Fills microscopic gaps for better contact with a heat sink" },
              { title: "Airflow", desc: "Moving air carries heat away far faster than still air can" },
              { title: "Derating", desc: "Running a part below its maximum rating extends its working life" }
            ]},
            { type: "numbered", title: "PCB Identification: Spotting the Power Section", items: [
              { title: "Large capacitors", desc: "Bulk filter capacitors are among the biggest parts on the board" },
              { title: "A transformer or large inductor", desc: "Bulky, heavy components near the incoming supply connector" },
              { title: "Heat sinks", desc: "Metal fins attached directly to regulators or switching transistors" },
              { title: "Thicker copper traces", desc: "Power traces are noticeably wider than nearby signal traces" }
            ]},
            { type: "check", questions: [
              { q: "Besides changing voltage level, what other important function does a transformer provide?", choices: ["Isolation — no direct electrical connection between the mains side and your circuit", "Rectification of the AC waveform", "Filtering of ripple on the output", "Regulating the output voltage under changing load"], answer: 0, explain: "The facts line states a transformer also provides isolation, with no direct electrical connection between primary and secondary.", why: ["", "Rectification is a diode's job, not a transformer's", "Filtering is a capacitor's job, not a transformer's", "Regulation is a regulator's job, not a transformer's"] },
              { q: "Per the transformer specs list, what does the turns ratio determine?", choices: ["How much the voltage steps up or down", "The maximum continuous power rating", "The physical size of the transformer", "The switching frequency of the supply"], answer: 0, explain: "The list states the turns ratio determines how much the voltage steps up or down between primary and secondary.", why: ["", "That's the VA rating, not the turns ratio", "Physical size isn't one of the four listed specs", "Switching frequency is an SMPS spec, not a transformer spec"] },
              { q: "Per the transformer specs list, what does the VA rating tell you?", choices: ["The maximum power it can deliver continuously, in volt-amps", "How much the voltage steps up or down", "The input and output voltage it's rated for", "Whether it's safe for the required voltage separation"], answer: 0, explain: "The list states the VA rating is the maximum power a transformer can deliver continuously, in volt-amps.", why: ["", "That's the turns ratio, not the VA rating", "That's the primary/secondary voltage spec, not the VA rating", "That's the isolation rating, not the VA rating"] },
              { q: "Per the thermal management list, what does derating a part accomplish?", choices: ["Running it below its maximum rating extends its working life", "It increases the part's maximum current rating", "It removes the need for a heat sink entirely", "It reduces the part's physical size"], answer: 0, explain: "The list defines derating as running a part below its maximum rating, extending its working life.", why: ["", "Derating doesn't increase a rating — it means operating below it", "The list treats heat sinks and derating as separate, complementary techniques, not one replacing the other", "Derating is an operating practice, not a change to a part's physical size"] },
              { q: "Per the PCB identification list, what is a strong visual clue that you've found the power section of a board?", choices: ["Thicker copper traces, noticeably wider than nearby signal traces", "Small SMD resistors clustered together", "A single tiny surface-mount IC with fine-pitch legs", "Multiple thin ribbon cables"], answer: 0, explain: "The list names thicker copper traces as a clue, since power traces are noticeably wider than nearby signal traces to carry higher current.", why: ["", "Small SMD resistors and fine-pitch ICs are typically signal/logic-section features, not power-section clues", "The same reasoning applies — fine-pitch parts are signal-section indicators, not power-section ones", "Ribbon cables aren't named in this list as a power-section indicator"] }
            ] }
          ]
        },
        {
          id: "power-practical-repair",
          title: "Practical & Repair Exercises",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Practical Exercise: Test a Rectifier & Regulator Stage", items: [
              { title: "1. Confirm rectifier output", desc: "With a multimeter" },
              { title: "2. Measure ripple", desc: "On the filtered output with a scope" },
              { title: "3. Confirm regulator output", desc: "Matches its rated voltage" },
              { title: "4. Check input-to-output voltage difference", desc: "On a linear regulator specifically" },
              { title: "5. Check regulator temperature", desc: "Under normal load" },
              { title: "6. Record all readings", desc: "Against the datasheet's expected values" }
            ]},
            { type: "definition",
              plain: "A repaired supply outputs the correct voltage, but runs far hotter than an identical, healthy unit.",
              picture: "Like a car engine that runs fine but overheats — something upstream is feeding it more than it needs.",
              facts: "The input voltage was never actually compared against the regulator's rated dropout voltage — correct output voltage doesn't rule out an overheating fault." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "The input voltage was never actually compared against the regulator's rated dropout voltage" },
              { title: "How to prevent it", desc: "Always check input-to-output voltage difference on a linear regulator, not just its final output" }
            ]},
            { type: "check", questions: [
              { q: "Per the practical exercise, what should be checked on a linear regulator besides just its output voltage?", choices: ["The input-to-output voltage difference", "The switching frequency", "The turns ratio", "The AC input waveform shape"], answer: 0, explain: "Step 4 of the practical exercise specifically calls out checking the input-to-output voltage difference on a linear regulator.", why: ["", "Switching frequency applies to SMPS, not linear regulators", "Turns ratio is a transformer spec, not part of this regulator check", "The exercise checks rectifier and regulator outputs, not the raw AC waveform shape"] },
              { q: "Per the practical exercise, at what point should regulator temperature be checked?", choices: ["Under normal load", "Only with no load connected", "Only immediately after power-up, before any load", "Temperature isn't part of this exercise"], answer: 0, explain: "Step 5 specifically calls for checking regulator temperature under normal load.", why: ["", "The exercise specifically calls for checking under normal load, not with no load", "The exercise specifies normal operating conditions, not the moment right after power-up", "Temperature check is explicitly step 5 of this exercise"] },
              { q: "In the overheating-supply repair exercise, what specifically went wrong during the original repair?", choices: ["The input voltage was never actually compared against the regulator's rated dropout voltage", "The wrong regulator part was installed", "The filter capacitor was left disconnected", "The output voltage was set incorrectly"], answer: 0, explain: "The scenario states the input voltage was never compared against the regulator's rated dropout voltage — that omission is exactly what caused the overheating.", why: ["", "The scenario doesn't describe a wrong part being installed", "A disconnected filter cap isn't the described fault in this scenario", "The scenario explicitly states the output voltage was correct"] },
              { q: "Per the repair exercise, what does 'correct output voltage' NOT guarantee about a power supply repair?", choices: ["That it's free of an overheating fault", "That the rectifier is working", "That the transformer has isolation", "That the fuse is intact"], answer: 0, explain: "The scenario's key lesson is that correct output voltage doesn't rule out an overheating fault — the input-to-output gap can still be excessive.", why: ["", "A working rectifier is generally implied by getting any correct output at all, but that's not this scenario's specific lesson", "Transformer isolation isn't the focus of this particular repair exercise", "Fuse condition isn't the focus of this particular repair exercise"] },
              { q: "Per the practical exercise, how should the readings taken during testing be recorded?", choices: ["Against the datasheet's expected values", "Only if a fault is actually found", "From memory, at the end of the day", "Compared only to the previous technician's guess"], answer: 0, explain: "Step 6 of the practical exercise specifically calls for recording all readings against the datasheet's expected values.", why: ["", "The exercise calls for recording every reading, not just ones tied to a fault", "The exercise implies recording as you go, not relying on memory afterward", "The exercise specifies datasheet comparison, not comparison to a guess"] }
            ] }
          ]
        },
        {
          id: "power-reference",
          title: "Quick Reference: Power Stage Faults",
          tag: "Reference",
          blocks: [
            { type: "table", title: "One line per stage — the healthy sign, and the fault sign", headers: ["Stage", "Tool", "Healthy Sign", "Fault Sign"], rows: [
              ["Rectifier", "Multimeter / scope", "Full-wave, low ripple", "Half-wave pattern, heavy hum"],
              ["Filter capacitor", "Oscilloscope", "Low peak-to-peak ripple", "High ripple under load"],
              ["Linear regulator", "Multimeter + touch test", "Correct output, mild warmth", "Correct output, very hot"],
              ["SMPS", "Multimeter / listen", "Steady output, quiet", "Clicking, restarting loop"]
            ]},
            { type: "check", questions: [
              { q: "Per the reference table, what fault sign is listed for the Rectifier stage?", choices: ["Half-wave pattern, heavy hum", "High ripple under load", "Correct output, very hot", "Clicking, restarting loop"], answer: 0, explain: "The table lists the Rectifier's fault sign as a half-wave pattern with heavy hum.", why: ["", "That's the Filter capacitor's fault sign, not the Rectifier's", "That's the Linear regulator's fault sign, not the Rectifier's", "That's the SMPS's fault sign, not the Rectifier's"] },
              { q: "Per the reference table, what tool is used to check the Filter capacitor stage?", choices: ["Oscilloscope", "Multimeter / scope", "Multimeter + touch test", "Multimeter / listen"], answer: 0, explain: "The table lists 'Oscilloscope' as the tool for checking the Filter capacitor stage.", why: ["", "That's the Rectifier's tool, not the Filter capacitor's", "That's the Linear regulator's tool, not the Filter capacitor's", "That's the SMPS's tool, not the Filter capacitor's"] },
              { q: "Per the reference table, what's the healthy sign for a Linear regulator?", choices: ["Correct output, mild warmth", "Full-wave, low ripple", "Low peak-to-peak ripple", "Steady output, quiet"], answer: 0, explain: "The table lists the Linear regulator's healthy sign as correct output with only mild warmth.", why: ["", "That's the Rectifier's healthy sign, not the Linear regulator's", "That's the Filter capacitor's healthy sign, not the Linear regulator's", "That's the SMPS's healthy sign, not the Linear regulator's"] },
              { q: "Per the reference table, what's the fault sign for an SMPS?", choices: ["Clicking, restarting loop", "Half-wave pattern, heavy hum", "High ripple under load", "Correct output, very hot"], answer: 0, explain: "The table lists the SMPS's fault sign as a clicking, restarting loop.", why: ["", "That's the Rectifier's fault sign, not the SMPS's", "That's the Filter capacitor's fault sign, not the SMPS's", "That's the Linear regulator's fault sign, not the SMPS's"] },
              { q: "Per the reference table, what tool is listed for checking an SMPS?", choices: ["Multimeter / listen", "Oscilloscope", "Multimeter / scope", "Multimeter + touch test"], answer: 0, explain: "The table lists 'Multimeter / listen' as the tool for checking an SMPS — since clicking is an audible fault sign.", why: ["", "That's the Filter capacitor's tool, not the SMPS's", "That's the Rectifier's tool, not the SMPS's", "That's the Linear regulator's tool, not the SMPS's"] }
            ] }
          ]
        },
        {
          id: "power-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Explain rectification and identify a bridge rectifier fault",
              "Measure and interpret ripple on a filtered power supply",
              "Tell linear and switching regulators apart, and when each is used",
              "Identify the four stages inside a typical SMPS",
              "Recognise heat as the leading cause of power component failure"
            ]},
            { type: "golden", text: "Most power failures are heat failures in disguise — check temperature as carefully as voltage." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["Most power failures are heat failures in disguise — check temperature as carefully as voltage", "Always replace the transformer first when a supply fails", "Ripple never matters if the output voltage is correct", "SMPS units never need thermal checks"], answer: 0, explain: "The golden rule explicitly states most power failures are heat failures in disguise, so temperature deserves the same attention as voltage.", why: ["", "The transformer isn't singled out as the first part to replace anywhere in this module", "The regulator-running-hot scenario is proof that correct voltage alone can still mask a heat fault", "The SMPS healthy/fault signs explicitly include component temperature as a diagnostic"] },
              { q: "Per the checklist, what should you be able to identify related to rectification?", choices: ["A bridge rectifier fault", "A stepper motor's step angle", "A PLC's scan cycle", "An RS-485 termination resistor"], answer: 0, explain: "The checklist names identifying a bridge rectifier fault as a core skill from this module.", why: ["", "Stepper motors belong to the Motors & Drives module, not this one", "PLC scan cycles belong to the PLC & Automation module, not this one", "RS-485 termination belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, what should you be able to measure and interpret on a filtered power supply?", choices: ["Ripple", "Baud rate", "Torque", "Scan time"], answer: 0, explain: "The checklist names measuring and interpreting ripple on a filtered power supply as a core skill.", why: ["", "Baud rate belongs to communication topics, not this power module", "Torque belongs to the Motors & Drives module, not this one", "Scan time belongs to the PLC & Automation module, not this one"] },
              { q: "Per the checklist, what should you be able to tell apart, and when each is used?", choices: ["Linear and switching regulators", "Sourcing and sinking I/O", "Stepper and servo motors", "RS-232 and RS-485"], answer: 0, explain: "The checklist names telling linear and switching regulators apart, and knowing when each is used, as a core skill.", why: ["", "Sourcing/sinking I/O belongs to the PLC & Automation module, not this one", "Stepper vs servo belongs to the Motors & Drives module, not this one", "RS-232 vs RS-485 belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, how many stages inside a typical SMPS should you be able to identify?", choices: ["Four", "Two", "Six", "Eight"], answer: 0, explain: "The checklist names identifying the four stages inside a typical SMPS: switching transistor, transformer, feedback/PWM controller, and output rectifier & filter.", why: ["", "The SMPS card lists four stages, not two", "The SMPS card lists four stages, not six", "The SMPS card lists four stages, not eight"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 08: EMBEDDED SYSTEMS
    {
      id: "embedded-systems",
      code: "MOD·08",
      icon: "🧠",
      color: "#5bffda",
      title: "Embedded Systems",
      subtitle: "When the fault isn't just hardware — it might be what's running on the chip.",
      cards: [
        {
          id: "embedded-overview",
          title: "The Five Skills of Embedded Repair",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever plugged in a 'dead' gadget and wondered if the problem was the hardware, or the code running inside it? By the end of this module, you'll have a clear way to tell the two apart." },
            { type: "table", title: "A 'dead' board might be a hardware fault — or it might just be lost code", headers: ["Skill", "What It Covers", "Key Idea"], rows: [
              ["Microcontrollers", "A computer on a single chip", "CPU + memory"],
              ["Firmware", "The code that runs the hardware", "Can corrupt"],
              ["GPIO & Peripherals", "How the chip talks to the world", "In / out"],
              ["Serial Monitor", "A window into what the board is doing", "Baud rate"],
              ["Debugging", "Telling firmware faults from hardware ones", "Systematic"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what is a microcontroller described as?", choices: ["A computer on a single chip", "The code that runs the hardware", "A window into what the board is doing", "How the chip talks to the world"], answer: 0, explain: "The table describes microcontrollers as a computer on a single chip, with CPU + memory as the key idea.", why: ["", "That describes Firmware, not Microcontrollers", "That describes the Serial Monitor, not Microcontrollers", "That describes GPIO & Peripherals, not Microcontrollers"] },
              { q: "Per the table, what is firmware described as?", choices: ["The code that runs the hardware", "A computer on a single chip", "How the chip talks to the world", "Telling firmware faults from hardware ones"], answer: 0, explain: "The table describes firmware as the code that runs the hardware, noted as able to corrupt.", why: ["", "That describes Microcontrollers, not Firmware", "That describes GPIO & Peripherals, not Firmware", "That describes Debugging, not Firmware"] },
              { q: "Per the table, what key idea is listed for GPIO & Peripherals?", choices: ["In / out", "CPU + memory", "Can corrupt", "Baud rate"], answer: 0, explain: "The table lists 'In / out' as the key idea for GPIO & Peripherals — how the chip talks to the world.", why: ["", "CPU + memory is the key idea for Microcontrollers, not GPIO & Peripherals", "Can corrupt is the key idea for Firmware, not GPIO & Peripherals", "Baud rate is the key idea for the Serial Monitor, not GPIO & Peripherals"] },
              { q: "Per the table, what key idea is listed for the Serial Monitor?", choices: ["Baud rate", "In / out", "Systematic", "CPU + memory"], answer: 0, explain: "The table lists 'Baud rate' as the key idea for the Serial Monitor — a window into what the board is doing.", why: ["", "In / out is the key idea for GPIO & Peripherals, not the Serial Monitor", "Systematic is the key idea for Debugging, not the Serial Monitor", "CPU + memory is the key idea for Microcontrollers, not the Serial Monitor"] },
              { q: "Per the table, what does Debugging cover in this module?", choices: ["Telling firmware faults from hardware ones", "A computer on a single chip", "The code that runs the hardware", "A window into what the board is doing"], answer: 0, explain: "The table describes Debugging as telling firmware faults from hardware ones, with 'Systematic' as the key idea.", why: ["", "That describes Microcontrollers, not Debugging", "That describes Firmware, not Debugging", "That describes the Serial Monitor, not Debugging"] }
            ] }
          ]
        },
        {
          id: "embedded-fundamentals",
          title: "What Is an Embedded System?",
          tag: "Fundamentals",
          blocks: [
            { type: "definition",
              plain: "An embedded system is a small computer built into a device to do one job — not a general-purpose PC.",
              picture: "Like a factory worker trained for one task, instead of an office worker who could do anything.",
              facts: "It's inside chargers, TVs, washing machines, and toys — anywhere a device needs to 'decide' something." },
            { type: "numbered", title: "Microcontroller vs Microprocessor", items: [
              { title: "1. Microcontroller (MCU)", desc: "CPU, memory, and I/O all on one chip — most repair-bench boards use these" },
              { title: "2. Microprocessor (MPU)", desc: "Needs separate memory and support chips — found in more powerful systems" },
              { title: "3. Fewer external parts", desc: "An MCU-based board is simpler to trace and diagnose" },
              { title: "4. Why it matters here", desc: "Most consumer repair work centres on MCU-based boards, not full computers" }
            ]},
            { type: "numbered", title: "Common Embedded Boards", items: [
              { title: "1. Arduino-style boards", desc: "AVR-based, popular for hobbyist and simple consumer designs" },
              { title: "2. ESP32 / ESP8266", desc: "Wi-Fi-enabled — common in smart home and IoT devices" },
              { title: "3. STM32", desc: "ARM-based, widely used in industrial and appliance control boards" },
              { title: "4. PIC microcontrollers", desc: "Common in older or cost-sensitive consumer electronics" }
            ]},
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "Clock speed", desc: "How many operations per second the chip can process" },
              { title: "Flash & RAM size", desc: "How much code and working memory the chip can hold" },
              { title: "Operating voltage", desc: "Usually 3.3V or 5V — mixing them up damages the chip" },
              { title: "I/O pin count", desc: "How many inputs and outputs the design has to work with" }
            ]},
            { type: "definition",
              plain: "A sensor board shows no activity at all — no lights, no output, completely unresponsive.",
              picture: "Like a lamp that doesn't light because it's not even plugged in — not because the bulb is bad.",
              facts: "Checking the supply voltage at the MCU first, before suspecting the firmware, revealed a missing 3.3V rail — the chip never even started." },
            { type: "numbered", title: "Diagnosing the dead sensor board", items: [
              { title: "What you do", desc: "Check the supply voltage at the MCU first, before suspecting the firmware at all" },
              { title: "What it tells you", desc: "A missing 3.3V rail meant the chip never even started — firmware was never the problem" }
            ]},
            { type: "check", questions: [
              { q: "What makes an embedded system different from a general-purpose PC?", choices: ["It's a small computer built into a device to do one specific job", "It has no CPU or memory of its own", "It can only run one program ever, with no way to update it", "It's always more powerful than a desktop PC"], answer: 0, explain: "The definition states an embedded system is built into a device to do one job, unlike a general-purpose PC.", why: ["", "The definition explicitly says it's a computer, with a CPU and memory of its own", "Firmware can be updated, as covered elsewhere in this module — it isn't fixed forever", "Embedded systems are typically far less powerful than a PC, being built for one focused task"] },
              { q: "Per the MCU vs MPU comparison, why are most repair-bench boards MCU-based?", choices: ["An MCU packs CPU, memory, and I/O onto one chip, meaning fewer external parts to trace", "MPUs are always cheaper than MCUs", "MCUs cannot be found in consumer electronics", "MPUs have no CPU of their own"], answer: 0, explain: "The list states an MCU-based board has fewer external parts, making it simpler to trace and diagnose — exactly why most repair work centres on them.", why: ["", "Cost isn't the comparison point made in this list", "The list explicitly says most repair-bench boards use MCUs, meaning they ARE common in consumer electronics", "An MPU does have a CPU — it just needs separate memory and support chips"] },
              { q: "Per the common embedded boards list, which family is described as ARM-based and widely used in industrial and appliance control?", choices: ["STM32", "Arduino-style boards", "ESP32 / ESP8266", "PIC microcontrollers"], answer: 0, explain: "The list describes STM32 as ARM-based, widely used in industrial and appliance control boards.", why: ["", "Arduino-style boards are described as AVR-based, not ARM-based", "ESP32/ESP8266 are described as Wi-Fi-enabled, not specifically ARM-based industrial control chips", "PIC microcontrollers are described as common in older or cost-sensitive consumer electronics, not this description"] },
              { q: "Per the specifications list, why is operating voltage the spec that's 'easy to get wrong'?", choices: ["Chips are usually 3.3V or 5V, and mixing them up damages the chip", "It's the only spec that can't be found on a datasheet", "It has no real consequence if set incorrectly", "It only matters for boards with no I/O pins"], answer: 0, explain: "The specs list explicitly warns that mixing up 3.3V and 5V operating voltage damages the chip.", why: ["", "Voltage rating is a standard datasheet spec, not a hidden one", "The list explicitly warns this mistake damages the chip — it's a real consequence", "Operating voltage matters for the whole chip, not specifically boards without I/O"] },
              { q: "In the dead-sensor-board scenario, what did checking the supply voltage at the MCU reveal?", choices: ["A missing 3.3V rail — the chip never even started, so firmware was never the problem", "A corrupted firmware image", "A shorted GPIO pin", "A blown fuse in the power supply chain unrelated to the MCU"], answer: 0, explain: "The scenario states a missing 3.3V rail meant the chip never even started — confirming power should be checked before ever suspecting firmware.", why: ["", "The scenario explicitly concludes firmware was never the problem", "A shorted GPIO pin isn't the fault identified in this scenario", "The scenario specifically traces the fault to the MCU's own supply rail, not a separate fuse"] }
            ] }
          ]
        },
        {
          id: "embedded-hardware",
          title: "MCU Hardware & Protection",
          tag: "Hardware",
          blocks: [
            { type: "numbered", title: "The Building Blocks of an MCU", items: [
              { title: "1. CPU core", desc: "Executes the firmware's instructions, one after another" },
              { title: "2. Flash memory", desc: "Stores the firmware itself, even with power removed" },
              { title: "3. RAM", desc: "Holds working data while the program is actually running" },
              { title: "4. Peripherals", desc: "Built-in timers, ADCs, and communication interfaces" }
            ]},
            { type: "numbered", title: "Supporting Components on the Board", items: [
              { title: "1. Crystal oscillator", desc: "Gives the chip its precise timing heartbeat" },
              { title: "2. Voltage regulator", desc: "Steps down and steadies the supply to what the chip needs" },
              { title: "3. Reset circuit", desc: "A resistor and capacitor (or button) that starts the chip cleanly" },
              { title: "4. Programming header", desc: "Pins used to load or update firmware onto the chip" }
            ]},
            { type: "numbered", title: "Protecting Embedded Boards", items: [
              { title: "1. GPIO pins are ESD-sensitive", desc: "Ground yourself before handling an exposed board" },
              { title: "2. Never hot-plug the programmer", desc: "Connect it before power, not while the board is live" },
              { title: "3. Power down before removing a chip", desc: "Hot removal can damage both the chip and the socket" },
              { title: "4. Static-safe during flashing", desc: "Keep the board on a grounded mat while firmware loads" }
            ]},
            { type: "check", questions: [
              { q: "Per the building blocks list, what does flash memory store?", choices: ["The firmware itself, even with power removed", "Working data only while the program is running", "Timing signals for the CPU", "Nothing — flash is only used during programming"], answer: 0, explain: "The list states flash memory stores the firmware itself, persisting even with power removed.", why: ["", "That describes RAM, not flash memory", "Timing is the crystal oscillator's job, not flash memory's", "Flash retains the firmware permanently, not only during the programming step"] },
              { q: "Per the building blocks list, what does RAM hold?", choices: ["Working data while the program is actually running", "The firmware permanently, even powered off", "Built-in timers and ADCs", "The chip's clock timing signal"], answer: 0, explain: "The list states RAM holds working data while the program is running — unlike flash, it doesn't retain data with power removed.", why: ["", "That describes flash memory, not RAM", "That describes peripherals, not RAM", "That describes the crystal oscillator, not RAM"] },
              { q: "Per the supporting components list, why does a missing heartbeat from the crystal oscillator look exactly like a dead chip?", choices: ["The crystal gives the chip its precise timing, and without it the chip can't run its instructions properly", "The crystal supplies the chip's main operating voltage", "The crystal stores the firmware image", "The crystal is only used for the programming header"], answer: 0, explain: "The list's insight line states a missing heartbeat from the crystal looks exactly like a dead chip, since timing is essential to running any instructions at all.", why: ["", "Voltage regulation is the voltage regulator's job, not the crystal's", "Firmware storage is flash memory's job, not the crystal's", "The crystal supplies system timing broadly, not specifically the programming header"] },
              { q: "Per the protecting embedded boards list, when should the programmer be connected to the board?", choices: ["Before power, not while the board is live", "Only while the board is powered and running", "It doesn't matter when it's connected", "Only after firmware has already been flashed once"], answer: 0, explain: "The list explicitly warns never to hot-plug the programmer — connect it before power, not while the board is live.", why: ["", "The list explicitly warns against connecting it live — this is the opposite of the correct practice", "The list gives a specific, deliberate order for this reason", "Connection timing matters on every flash, not just the first one"] },
              { q: "Per the protecting embedded boards list, why is a bare MCU pin an ESD risk worth taking seriously?", choices: ["GPIO pins are ESD-sensitive, so grounding yourself before handling an exposed board matters", "MCU pins are physically fragile and snap easily", "ESD only affects powered-on boards, never bare chips", "GPIO pins are immune to static, unlike other board components"], answer: 0, explain: "The list states GPIO pins are ESD-sensitive, requiring you to ground yourself before handling an exposed board — the same ESD discipline covered in the earlier safety module.", why: ["", "Physical fragility isn't the stated reason — ESD sensitivity is", "ESD risk applies to bare, unpowered boards specifically, which is exactly why this list warns about it", "The list explicitly states GPIO pins ARE ESD-sensitive, not immune"] }
            ] }
          ]
        },
        {
          id: "embedded-gpio-faults",
          title: "Reading GPIO & Common Hardware Faults",
          tag: "GPIO & Hardware Faults",
          blocks: [
            { type: "definition",
              plain: "GPIO (General Purpose Input/Output) pins can be configured as either inputs or outputs, in software.",
              picture: "Like a set of switches and sensors that firmware decides the job of, pin by pin.",
              facts: "A pin set to output can be checked with a meter; a pin set to input reacts to what's connected to it." },
            { type: "tip", text: "Healthy hardware shows supply voltage present and steady at the MCU, a crystal oscillator reading a clean signal on a scope, and a reset line that sits high but briefly pulses low at power-on." },
            { type: "warning", title: "Hardware fault signs", items: [
              "No voltage at the MCU's supply pin at all",
              "Reset line stuck permanently low",
              "Chip runs noticeably hot with no load"
            ]},
            { type: "check", questions: [
              { q: "What does the definition mean by saying firmware decides what a GPIO pin does?", choices: ["A GPIO pin can be configured as either input or output in software, so hardware alone can't tell you its role", "GPIO pins are physically wired as inputs or outputs at the factory and can never change", "Firmware has no control over GPIO pins at all", "GPIO pins can only ever be outputs"], answer: 0, explain: "The definition states GPIO pins can be configured as either input or output in software — firmware decides, hardware alone can't tell you.", why: ["", "The whole point of GPIO is that its role is set in software, not fixed at manufacture", "The definition explicitly states firmware configures GPIO pins", "GPIO pins can be either inputs or outputs, not just outputs"] },
              { q: "Per the definition, how can you check a GPIO pin that's been configured as an output?", choices: ["With a meter", "Only by reading the firmware source code", "It cannot be checked at all", "Only with a signal generator injecting a test signal"], answer: 0, explain: "The definition states a pin set to output can be checked with a meter.", why: ["", "Reading the pin's electrical state is done with a meter, not by inspecting source code", "The definition explicitly says it CAN be checked", "A signal generator isn't needed to check a simple output pin's state"] },
              { q: "Per the healthy signs, what should the reset line look like on a properly functioning board?", choices: ["It sits high, and briefly pulses low at power-on", "It stays permanently low at all times", "It stays permanently high, never pulsing", "It has no defined behavior at all"], answer: 0, explain: "The healthy signs describe the reset line sitting high, with a brief low pulse at power-on to start the chip cleanly.", why: ["", "Permanently low is listed as a FAULT sign, not healthy", "Never pulsing at power-on would mean the reset circuit isn't doing its job", "The healthy signs describe a specific, expected reset-line behavior"] },
              { q: "Per the fault signs, what does a chip running noticeably hot with no load usually indicate?", choices: ["A hardware fault", "Perfectly normal, expected behavior", "A firmware update in progress", "A GPIO pin correctly configured as an output"], answer: 0, explain: "The fault signs list a chip running noticeably hot with no load as a sign pointing to hardware, not firmware.", why: ["", "This is explicitly listed as a fault sign, not normal behavior", "Firmware updates don't inherently cause a chip to run hot with no load", "GPIO configuration is unrelated to a chip's overall temperature under no load"] },
              { q: "Per the fault signs, what does a reset line stuck permanently low usually indicate?", choices: ["A hardware fault, since the reset circuit should pulse low only briefly at power-on", "Normal behavior for every embedded board", "That firmware has been successfully flashed", "That the crystal oscillator is running perfectly"], answer: 0, explain: "The fault signs explicitly list a reset line stuck permanently low, contrasted with the healthy sign of a brief pulse at power-on.", why: ["", "The healthy signs describe a brief pulse, not a permanently stuck line — this is explicitly a fault", "A stuck reset line prevents the chip from running at all, unrelated to firmware flashing success", "A stuck reset line is a reset-circuit fault, not a statement about crystal health"] }
            ] }
          ]
        },
        {
          id: "embedded-firmware",
          title: "Firmware: Hardware's Instructions",
          tag: "Firmware",
          blocks: [
            { type: "definition",
              plain: "Firmware is the software permanently stored on the chip that tells the hardware exactly what to do.",
              picture: "Like a recipe baked into the chip — the hardware is the kitchen, firmware is what gets cooked.",
              facts: "Firmware can become corrupted without any hardware fault at all — the chip is fine, the instructions aren't." },
            { type: "numbered", title: "How Firmware Gets Onto the Chip", items: [
              { title: "1. ISP / programmer", desc: "A dedicated programmer writes firmware directly to the chip" },
              { title: "2. USB bootloader", desc: "A small built-in program that accepts new firmware over USB" },
              { title: "3. JTAG / SWD", desc: "A debug interface used for programming and live debugging" },
              { title: "4. OTA (over-the-air)", desc: "Wi-Fi-enabled chips can receive firmware updates wirelessly" }
            ]},
            { type: "table", title: "Firmware vs hardware fault", headers: ["Symptom", "Points To Firmware", "Points To Hardware"], rows: [
              ["Power & voltages", "All read correctly", "A voltage rail is missing or unstable"],
              ["Damage", "None visible; board was recently updated or reflashed", "Visible damage — burn marks, corrosion, cracks"],
              ["Behaviour", "Inconsistent or partially working", "Fault appeared after physical impact or liquid"]
            ]},
            { type: "definition",
              plain: "Power was lost mid-update. The board now shows no activity at all, as if it were switched off.",
              picture: "Like a book with a torn page mid-chapter — the story stops mid-sentence, but the rest of the book is still fine.",
              facts: "Checking supply voltage first (it's fine), then connecting the programmer, showed the bootloader still responds — the firmware was corrupted, not the chip itself." },
            { type: "numbered", title: "Diagnosing the 'bricked' board", items: [
              { title: "What you do", desc: "Check the supply voltage first, then connect the programmer to check for a bootloader" },
              { title: "What it tells you", desc: "The bootloader still responds — the firmware was corrupted, not the chip itself" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what does it mean that firmware can become corrupted 'without any hardware fault at all'?", choices: ["The chip itself can be perfectly fine while its stored instructions are broken", "Firmware corruption always means the chip is also physically damaged", "Firmware can never be corrupted under any circumstances", "Hardware faults always accompany firmware corruption"], answer: 0, explain: "The facts line states firmware can corrupt with the chip perfectly fine — the instructions aren't, but the hardware is.", why: ["", "The facts line explicitly separates the two — the chip can be fine while firmware isn't", "The whole point of this card is that firmware CAN become corrupted", "The facts line explicitly states these are separable — one can happen without the other"] },
              { q: "Per the 'How Firmware Gets Onto the Chip' list, what is JTAG / SWD used for?", choices: ["A debug interface used for programming and live debugging", "A small built-in program that accepts firmware over USB", "A dedicated external programmer that writes firmware directly", "Wireless firmware updates over Wi-Fi"], answer: 0, explain: "The list describes JTAG/SWD as a debug interface used for programming and live debugging.", why: ["", "That describes a USB bootloader, not JTAG/SWD", "That describes an ISP/programmer, not JTAG/SWD", "That describes OTA (over-the-air), not JTAG/SWD"] },
              { q: "Per the firmware-vs-hardware comparison table, what points toward a hardware fault rather than a firmware one?", choices: ["A voltage rail is missing or unstable", "Power and voltages all read correctly", "The board was recently updated or reflashed", "Behaviour is inconsistent or partially working"], answer: 0, explain: "The table lists a missing or unstable voltage rail under 'Points To Hardware'.", why: ["", "That points to firmware, per the table's 'Points To Firmware' column", "That points to firmware, since a recent reflash suggests a firmware-side cause", "That points to firmware, per the table's 'Points To Firmware' column"] },
              { q: "Per the firmware-vs-hardware comparison table, what points toward a firmware fault rather than a hardware one?", choices: ["Power and voltages all read correctly", "A voltage rail is missing or unstable", "Visible damage — burn marks, corrosion, cracks", "The fault appeared after physical impact or liquid"], answer: 0, explain: "The table lists power and voltages reading correctly under 'Points To Firmware' — since the hardware is confirmed fine, the fault likely lies in the code.", why: ["", "That points to hardware, per the table's 'Points To Hardware' column", "That points to hardware, per the table's 'Points To Hardware' column", "That points to hardware, per the table's 'Points To Hardware' column"] },
              { q: "In the 'bricked' board scenario, what did a responsive bootloader after a power-loss-during-update indicate?", choices: ["The chip survived — the firmware was corrupted, not the chip itself, and a reflash would fix it", "The chip itself was permanently destroyed", "The power supply was still faulty", "No further action was possible — the board was unrecoverable"], answer: 0, explain: "The scenario concludes a responsive bootloader means the chip survived — only the firmware was corrupted, and a reflash fixes it.", why: ["", "The scenario's whole point is the chip was NOT destroyed — it responded", "The scenario explicitly checked supply voltage first and confirmed it was fine", "The scenario explicitly states a reflash fixes it — it wasn't unrecoverable"] }
            ] }
          ]
        },
        {
          id: "embedded-diagnosis",
          title: "Diagnosis: Blink Test, Serial Monitor & Recovery",
          tag: "Diagnosis",
          blocks: [
            { type: "definition",
              plain: "Uploading the simplest possible program — blinking one LED — confirms the chip can run code at all.",
              picture: "Like checking a car starts and idles before diagnosing why the radio doesn't work.",
              facts: "If the blink test succeeds, the chip, power, and programming path are all confirmed working." },
            { type: "numbered", title: "Using the Serial Monitor", items: [
              { title: "1. Connect at the correct baud rate", desc: "Mismatched rates show only garbled text" },
              { title: "2. Watch the boot messages", desc: "Many boards print their own status as they start up" },
              { title: "3. Print debug values", desc: "Firmware can report sensor readings or internal state as it runs" },
              { title: "4. Look for error codes", desc: "Repeated resets or fault codes point straight at the problem" }
            ]},
            { type: "numbered", title: "Systematic Embedded Troubleshooting", items: [
              { title: "1. Check power rails first", desc: "Confirm every supply voltage the chip actually needs" },
              { title: "2. Check the crystal", desc: "Confirm the timing signal is present and clean" },
              { title: "3. Check the reset line", desc: "Confirm it pulses correctly, not stuck high or low" },
              { title: "4. Check the firmware last", desc: "Only suspect the code once the hardware is confirmed healthy" }
            ]},
            { type: "numbered", title: "Common Recovery Techniques", items: [
              { title: "1. Reflash the firmware", desc: "Overwrites corrupted code with a known-good version" },
              { title: "2. Factory reset", desc: "Clears stored settings that may be causing a fault" },
              { title: "3. Force bootloader mode", desc: "A button or pin combination recovers an unresponsive chip" },
              { title: "4. Replace the crystal", desc: "A damaged or drifted crystal can stop the chip cold" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what does a successful blink test actually confirm about a board?", choices: ["The chip, power, and programming path are all confirmed working", "The firmware has zero bugs anywhere in the codebase", "Every peripheral on the chip is functioning correctly", "The board's sensors are all reading accurate values"], answer: 0, explain: "The facts line states a successful blink test confirms the chip, power, and programming path are all working — nothing more, nothing less.", why: ["", "A blink test only proves the chip can run simple code — it says nothing about the rest of a complex firmware image", "The blink test doesn't exercise every peripheral, only the basic ability to run code and toggle a pin", "The blink test has nothing to do with sensor accuracy specifically"] },
              { q: "Per the serial monitor steps, what happens if you connect at the wrong baud rate?", choices: ["Mismatched rates show only garbled text", "The board refuses to power on at all", "The firmware automatically corrects the mismatch", "Nothing — baud rate has no effect on readability"], answer: 0, explain: "Step 1 explicitly states mismatched baud rates show only garbled text.", why: ["", "Baud rate mismatch affects only the serial link, not the board's power state", "Firmware doesn't auto-correct a baud rate mismatch on the monitor side", "The steps explicitly say a mismatch produces garbled text — it does matter"] },
              { q: "Per systematic embedded troubleshooting, what should be checked first, before anything else?", choices: ["Power rails", "The firmware", "The crystal", "The reset line"], answer: 0, explain: "Step 1 of the systematic troubleshooting list is checking power rails first.", why: ["", "Firmware is explicitly checked last, per step 4", "The crystal is checked second, per step 2, not first", "The reset line is checked third, per step 3, not first"] },
              { q: "Per systematic embedded troubleshooting, when should firmware be suspected?", choices: ["Only once the hardware is confirmed healthy, checked last", "Immediately, before checking power", "Before checking the crystal", "At the same time as checking the reset line"], answer: 0, explain: "Step 4 explicitly states firmware should only be suspected once hardware is confirmed healthy — checked last in the sequence.", why: ["", "The list explicitly orders power first, firmware last — the reverse of this option", "The crystal is checked before firmware, in step 2", "The reset line (step 3) comes before firmware (step 4), not simultaneously"] },
              { q: "Per the recovery techniques list, what does 'force bootloader mode' accomplish?", choices: ["A button or pin combination recovers an unresponsive chip", "It permanently erases the chip's flash memory", "It replaces the crystal oscillator automatically", "It only works over a Wi-Fi OTA connection"], answer: 0, explain: "The list describes forcing bootloader mode as using a button or pin combination to recover an unresponsive chip.", why: ["", "The technique recovers the chip; it doesn't describe permanent flash erasure", "Crystal replacement is a separate, physical recovery technique listed elsewhere on this card", "The list doesn't restrict this technique to Wi-Fi OTA-enabled chips only"] }
            ] }
          ]
        },
        {
          id: "embedded-practical-repair",
          title: "Practical & Repair Exercises",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Practical Exercise: Recover a Non-Responsive Board", items: [
              { title: "1. Check every supply voltage", desc: "The MCU requires" },
              { title: "2. Confirm the crystal oscillator", desc: "Is running cleanly" },
              { title: "3. Connect the serial monitor", desc: "At the correct baud rate" },
              { title: "4. Attempt the blink test", desc: "To confirm the chip runs code" },
              { title: "5. Force bootloader mode", desc: "And attempt a reflash" },
              { title: "6. Confirm normal operation", desc: "After the reflash completes" }
            ]},
            { type: "definition",
              plain: "A 'dead' board was reflashed twice already. It still shows no activity of any kind.",
              picture: "Like trying to reinstall an app on a phone with no battery — the software step was never the problem.",
              facts: "The supply voltage was never actually checked — the chip never had power to run the new firmware." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "The supply voltage was never actually checked — the chip never had power to run the new firmware" },
              { title: "How to prevent it", desc: "Always confirm hardware health before reflashing — code can't run on a chip with no power" }
            ]},
            { type: "check", questions: [
              { q: "Per the practical exercise, what should be attempted before force-booting into bootloader mode and reflashing?", choices: ["The blink test, to confirm the chip runs code", "Replacing the crystal oscillator", "A factory reset", "Disconnecting the serial monitor"], answer: 0, explain: "Step 4 of the practical exercise is attempting the blink test, before step 5's forced bootloader mode and reflash.", why: ["", "Crystal replacement isn't part of this specific practical exercise sequence", "Factory reset isn't part of this specific practical exercise sequence", "The serial monitor is connected as step 3, not disconnected before reflashing"] },
              { q: "Per the practical exercise, what's the final step after a reflash completes?", choices: ["Confirm normal operation", "Force bootloader mode again", "Recheck the supply voltage a second time", "Replace the crystal oscillator"], answer: 0, explain: "Step 6, the final step, is confirming normal operation after the reflash completes.", why: ["", "Bootloader mode is forced in step 5, before the reflash, not repeated afterward", "Supply voltage is checked once, in step 1, not specifically repeated as the final step", "Crystal replacement isn't part of this exercise's final confirmation step"] },
              { q: "In the silent-board repair exercise, what went wrong during the two prior reflash attempts?", choices: ["The supply voltage was never actually checked — the chip never had power to run the new firmware", "The wrong firmware image was used both times", "The bootloader was permanently disabled", "The crystal oscillator had failed"], answer: 0, explain: "The scenario states the supply voltage was never actually checked, so the chip never had power to run whatever firmware was loaded.", why: ["", "The scenario doesn't identify a wrong firmware image as the cause", "The scenario doesn't describe a disabled bootloader as the cause", "The scenario doesn't identify crystal failure as the cause"] },
              { q: "Per the repair exercise's lesson, why does reflashing a board with no power fix nothing?", choices: ["Code can't run on a chip that never has power to begin with", "Reflashing always requires a working crystal oscillator instead of power", "Firmware images are power-independent and don't need the chip to run", "Reflashing physically repairs damaged power circuitry"], answer: 0, explain: "The lesson is explicit: code can't run on a chip with no power — reflashing doesn't help if the chip was never powered in the first place.", why: ["", "The lesson is specifically about power, not the crystal", "The whole point of this lesson is that firmware absolutely requires power to run", "Reflashing loads code — it does nothing to fix a power delivery problem"] },
              { q: "Per the practical exercise, what should be confirmed about the crystal oscillator?", choices: ["That it is running cleanly", "That it has been physically replaced", "That it matches the wrong baud rate", "That it is disconnected during the blink test"], answer: 0, explain: "Step 2 of the practical exercise is confirming the crystal oscillator is running cleanly.", why: ["", "The exercise confirms the existing crystal is healthy — it doesn't call for automatic replacement", "Baud rate relates to the serial monitor step, not the crystal check", "The crystal should remain connected throughout — nothing in this exercise disconnects it"] }
            ] }
          ]
        },
        {
          id: "embedded-reference",
          title: "Quick Reference: Embedded Fault Signs",
          tag: "Reference",
          blocks: [
            { type: "table", title: "One line per check — what healthy looks like, and what doesn't", headers: ["Check", "Tool", "Healthy Sign", "Fault Sign"], rows: [
              ["Supply voltage", "Multimeter", "Steady at rated voltage", "Missing or unstable"],
              ["Crystal oscillator", "Oscilloscope", "Clean, steady signal", "Flat or distorted"],
              ["Reset line", "Multimeter / scope", "Brief pulse at power-on", "Stuck high or low"],
              ["Serial output", "Serial monitor", "Boot messages appear", "Silent or garbled text"]
            ]},
            { type: "check", questions: [
              { q: "Per the reference table, what tool checks the crystal oscillator?", choices: ["Oscilloscope", "Multimeter", "Multimeter / scope", "Serial monitor"], answer: 0, explain: "The table lists 'Oscilloscope' as the tool for checking the crystal oscillator.", why: ["", "That's the tool for Supply voltage, not the crystal oscillator", "That's the tool for the Reset line, not the crystal oscillator", "That's the tool for Serial output, not the crystal oscillator"] },
              { q: "Per the reference table, what's the fault sign for supply voltage?", choices: ["Missing or unstable", "Flat or distorted", "Stuck high or low", "Silent or garbled text"], answer: 0, explain: "The table lists supply voltage's fault sign as missing or unstable.", why: ["", "That's the crystal oscillator's fault sign, not supply voltage's", "That's the reset line's fault sign, not supply voltage's", "That's the serial output's fault sign, not supply voltage's"] },
              { q: "Per the reference table, what's the healthy sign for the reset line?", choices: ["Brief pulse at power-on", "Steady at rated voltage", "Clean, steady signal", "Boot messages appear"], answer: 0, explain: "The table lists the reset line's healthy sign as a brief pulse at power-on.", why: ["", "That's supply voltage's healthy sign, not the reset line's", "That's the crystal oscillator's healthy sign, not the reset line's", "That's serial output's healthy sign, not the reset line's"] },
              { q: "Per the reference table, what's the fault sign for serial output?", choices: ["Silent or garbled text", "Missing or unstable", "Flat or distorted", "Stuck high or low"], answer: 0, explain: "The table lists serial output's fault sign as silent or garbled text.", why: ["", "That's supply voltage's fault sign, not serial output's", "That's the crystal oscillator's fault sign, not serial output's", "That's the reset line's fault sign, not serial output's"] },
              { q: "Per the reference table, what's the healthy sign for the crystal oscillator?", choices: ["Clean, steady signal", "Boot messages appear", "Brief pulse at power-on", "Steady at rated voltage"], answer: 0, explain: "The table lists the crystal oscillator's healthy sign as a clean, steady signal.", why: ["", "That's serial output's healthy sign, not the crystal oscillator's", "That's the reset line's healthy sign, not the crystal oscillator's", "That's supply voltage's healthy sign, not the crystal oscillator's"] }
            ] }
          ]
        },
        {
          id: "embedded-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Explain the difference between a microcontroller and a microprocessor",
              "Identify the key supporting components around an MCU",
              "Tell a firmware fault apart from a hardware fault",
              "Use the blink test and serial monitor to diagnose a board",
              "Recover a non-responsive board using the right technique"
            ]},
            { type: "golden", text: "Confirm power, then timing, then reset — only suspect the firmware last." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["Confirm power, then timing, then reset — only suspect the firmware last", "Always reflash firmware before checking anything else", "Firmware faults and hardware faults look nothing alike", "A blink test proves every peripheral works correctly"], answer: 0, explain: "The golden rule explicitly orders power, then timing, then reset — with firmware suspected only last.", why: ["", "The systematic troubleshooting list explicitly checks hardware first, firmware last — the reverse of this option", "The whole module exists because the two CAN look identical, which is exactly why a systematic order matters", "The blink test only confirms the chip can run simple code, not that every peripheral works"] },
              { q: "Per the checklist, what should you be able to explain about microcontrollers vs microprocessors?", choices: ["The difference between a microcontroller and a microprocessor", "The difference between RS-232 and RS-485", "The difference between a stepper and a servo motor", "The difference between sourcing and sinking I/O"], answer: 0, explain: "The checklist names explaining the difference between a microcontroller and a microprocessor as a core skill.", why: ["", "RS-232 vs RS-485 belongs to the Industrial Communication module, not this one", "Stepper vs servo belongs to the Motors & Drives module, not this one", "Sourcing vs sinking belongs to the PLC & Automation module, not this one"] },
              { q: "Per the checklist, what should you be able to identify around an MCU?", choices: ["The key supporting components", "A PLC's I/O module type", "A transformer's turns ratio", "A Modbus device address"], answer: 0, explain: "The checklist names identifying the key supporting components around an MCU as a core skill.", why: ["", "PLC I/O modules belong to the PLC & Automation module, not this one", "Transformer turns ratio belongs to the Power Electronics module, not this one", "Modbus addressing belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, what two diagnostic tools should you be able to use together on a board?", choices: ["The blink test and the serial monitor", "An oscilloscope and a function generator only", "A thermal camera and an ESR meter", "A clamp meter and an insulation tester"], answer: 0, explain: "The checklist names using the blink test and serial monitor together to diagnose a board.", why: ["", "Oscilloscope and function generator pairing isn't the specific combination named in this checklist", "Thermal camera and ESR meter aren't the tools named in this embedded-specific checklist item", "Clamp meter and insulation tester belong more to wiring/motor diagnostics, not this checklist item"] },
              { q: "Per the checklist, what should you be able to do with a non-responsive board?", choices: ["Recover it using the right technique", "Always replace it outright, without diagnosis", "Ignore it until a newer replacement arrives", "Assume it's always a firmware fault"], answer: 0, explain: "The checklist names recovering a non-responsive board using the right technique as this module's final skill.", why: ["", "This module explicitly teaches recovery techniques, not automatic replacement", "The whole module is about diagnosing and recovering, not ignoring a fault", "The module explicitly teaches checking hardware before ever assuming firmware"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 09: SENSORS & ACTUATORS
    {
      id: "sensors-actuators",
      code: "MOD·09",
      icon: "📡",
      color: "#b05bff",
      title: "Sensors & Actuators",
      subtitle: "The parts that let a circuit feel the world — and act on it.",
      cards: [
        {
          id: "sensors-overview",
          title: "The Five Skills of Sensors & Actuators",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever wondered how a phone knows which way is up, or a washing machine knows the tub is full? Both are sensors quietly doing their job — by the end of this module, you'll know exactly how." },
            { type: "table", title: "How a circuit senses the world, and how it acts on what it finds", headers: ["Skill", "What It Covers", "Key Idea"], rows: [
              ["Sensors", "Turning the physical into electrical", "Input"],
              ["Actuators", "Turning electrical into motion or force", "Output"],
              ["Signal Conditioning", "Cleaning up a weak signal", "Amplify"],
              ["Interfacing", "Connecting sensors to a controller", "ADC"],
              ["Testing", "Confirming both ends actually work", "Bench check"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what does the Sensors skill cover?", choices: ["Turning the physical into electrical", "Turning electrical into motion or force", "Cleaning up a weak signal", "Connecting sensors to a controller"], answer: 0, explain: "The table describes Sensors as turning the physical into electrical, with 'Input' as the key idea.", why: ["", "That describes Actuators, not Sensors", "That describes Signal Conditioning, not Sensors", "That describes Interfacing, not Sensors"] },
              { q: "Per the table, what key idea is listed for Actuators?", choices: ["Output", "Input", "Amplify", "ADC"], answer: 0, explain: "The table lists 'Output' as the key idea for Actuators — turning electrical into motion or force.", why: ["", "Input is the key idea for Sensors, not Actuators", "Amplify is the key idea for Signal Conditioning, not Actuators", "ADC is the key idea for Interfacing, not Actuators"] },
              { q: "Per the table, what does Signal Conditioning cover?", choices: ["Cleaning up a weak signal", "Turning the physical into electrical", "Connecting sensors to a controller", "Confirming both ends actually work"], answer: 0, explain: "The table describes Signal Conditioning as cleaning up a weak signal, with 'Amplify' as the key idea.", why: ["", "That describes Sensors, not Signal Conditioning", "That describes Interfacing, not Signal Conditioning", "That describes Testing, not Signal Conditioning"] },
              { q: "Per the table, what key idea is listed for Interfacing?", choices: ["ADC", "Output", "Amplify", "Bench check"], answer: 0, explain: "The table lists 'ADC' as the key idea for Interfacing — connecting sensors to a controller.", why: ["", "Output is the key idea for Actuators, not Interfacing", "Amplify is the key idea for Signal Conditioning, not Interfacing", "Bench check is the key idea for Testing, not Interfacing"] },
              { q: "Per the table, what does the Testing skill cover?", choices: ["Confirming both ends actually work", "Turning electrical into motion or force", "Cleaning up a weak signal", "Turning the physical into electrical"], answer: 0, explain: "The table describes Testing as confirming both ends actually work, with 'Bench check' as the key idea.", why: ["", "That describes Actuators, not Testing", "That describes Signal Conditioning, not Testing", "That describes Sensors, not Testing"] }
            ] }
          ]
        },
        {
          id: "sensors-fundamentals",
          title: "What Is a Sensor?",
          tag: "Fundamentals",
          blocks: [
            { type: "definition",
              plain: "A sensor converts a physical quantity — heat, light, motion — into an electrical signal a circuit can read.",
              picture: "Like a translator turning a language a circuit can't understand into one it can — voltage or resistance.",
              facts: "Every sensor has a range and an accuracy — asking it to measure outside that range gives a meaningless reading." },
            { type: "numbered", title: "Types of Sensors", items: [
              { title: "1. Temperature", desc: "Thermistors and temperature ICs — resistance or voltage changes with heat" },
              { title: "2. Light", desc: "LDRs and photodiodes — resistance or current changes with brightness" },
              { title: "3. Motion & proximity", desc: "PIR, ultrasonic, and Hall-effect sensors detect movement or nearby objects" },
              { title: "4. Pressure & force", desc: "Converts physical pressure into a proportional electrical signal" }
            ]},
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "Sensitivity", desc: "How much output changes for a given change in the physical quantity" },
              { title: "Range", desc: "The minimum and maximum it can measure accurately" },
              { title: "Response time", desc: "How quickly it reacts to a sudden change" },
              { title: "Accuracy", desc: "How close its reading is to the true value" }
            ]},
            { type: "check", questions: [
              { q: "What does a sensor fundamentally do, per the definition?", choices: ["Converts a physical quantity into an electrical signal a circuit can read", "Converts an electrical signal into physical motion", "Amplifies a signal already in electrical form", "Stores energy for later release"], answer: 0, explain: "The definition states a sensor converts a physical quantity — heat, light, motion — into an electrical signal.", why: ["", "That describes an actuator, the opposite direction of conversion", "That describes signal conditioning, not a sensor's core job", "That describes a capacitor or battery, not a sensor"] },
              { q: "Per the types of sensors list, what do PIR, ultrasonic, and Hall-effect sensors detect?", choices: ["Movement or nearby objects", "Temperature changes", "Light brightness", "Physical pressure"], answer: 0, explain: "The list describes motion & proximity sensors — PIR, ultrasonic, and Hall-effect — as detecting movement or nearby objects.", why: ["", "That describes the Temperature category, not motion & proximity", "That describes the Light category, not motion & proximity", "That describes the Pressure & force category, not motion & proximity"] },
              { q: "Per the specifications list, what does 'sensitivity' measure?", choices: ["How much output changes for a given change in the physical quantity", "The minimum and maximum it can measure accurately", "How quickly it reacts to a sudden change", "How close its reading is to the true value"], answer: 0, explain: "The specs list defines sensitivity as how much output changes for a given change in the physical quantity being measured.", why: ["", "That's the Range spec, not sensitivity", "That's the Response time spec, not sensitivity", "That's the Accuracy spec, not sensitivity"] },
              { q: "Per the facts line, what happens if a sensor is asked to measure outside its rated range?", choices: ["It gives a meaningless reading", "It automatically expands its own range", "It shuts down safely with no output", "It becomes more accurate than normal"], answer: 0, explain: "The facts line explicitly states asking a sensor to measure outside its range gives a meaningless reading.", why: ["", "A sensor's range is a fixed physical limit, not something it can expand on its own", "The facts line describes a meaningless reading, not a safe shutdown", "Accuracy degrades, it doesn't improve, outside a sensor's rated range"] },
              { q: "Per the specifications list, what does 'response time' measure?", choices: ["How quickly a sensor reacts to a sudden change", "How close its reading is to the true value", "The minimum and maximum it can measure", "How much output changes per unit of input change"], answer: 0, explain: "The specs list defines response time as how quickly a sensor reacts to a sudden change in the physical quantity.", why: ["", "That's the Accuracy spec, not response time", "That's the Range spec, not response time", "That's the Sensitivity spec, not response time"] }
            ] }
          ]
        },
        {
          id: "sensors-signal-types",
          title: "Analog vs Digital & Reading Sensor Output",
          tag: "Signal Types",
          blocks: [
            { type: "table", title: "Analog vs digital sensors", headers: ["Aspect", "Analog Sensors", "Digital Sensors"], rows: [
              ["Output behavior", "Varies smoothly, like a voltage or resistance", "Switches between clear states, or sends data"],
              ["How to read it", "Read directly with a multimeter or an ADC", "Often needs a specific protocol to read properly"],
              ["Common examples", "Thermistors, LDRs, potentiometers", "PIR motion, digital temperature ICs"]
            ]},
            { type: "numbered", title: "Reading a Sensor's Output", items: [
              { title: "1. Voltage output", desc: "A signal that rises or falls smoothly with the reading" },
              { title: "2. Resistance change", desc: "Measured directly with a multimeter in resistance mode" },
              { title: "3. Digital pulse", desc: "On/off switching, often timed to represent a value" },
              { title: "4. Serial data", desc: "A digital protocol carrying a precise numeric reading" }
            ]},
            { type: "definition",
              plain: "A thermostat always reads several degrees warmer than the room actually is, every single time.",
              picture: "Like a bathroom scale that's always five pounds high — consistently wrong, not randomly wrong.",
              facts: "Comparing the sensor's resistance against its datasheet chart at a known, measured room temperature showed the thermistor had drifted with age — a consistent offset, not a random fault." },
            { type: "numbered", title: "Diagnosing the wrong reading", items: [
              { title: "What you do", desc: "Compare the sensor's resistance against its datasheet chart at a known, measured room temperature" },
              { title: "What it tells you", desc: "The thermistor had drifted with age — a consistent offset, not a random or intermittent fault" }
            ]},
            { type: "check", questions: [
              { q: "Per the comparison table, how should an analog sensor's output typically be read?", choices: ["Directly with a multimeter or an ADC", "Only with a specific communication protocol", "Only by counting digital pulses", "It cannot be read with standard bench tools"], answer: 0, explain: "The table states analog sensors are read directly with a multimeter or an ADC, since their output varies smoothly.", why: ["", "That describes reading digital sensors, per the table's other column", "Pulse counting is a digital-sensor reading method, not analog", "The table explicitly says analog sensors CAN be read with standard tools"] },
              { q: "Per the comparison table, what's a key difference in how digital sensors must often be read?", choices: ["They often need a specific protocol to read properly", "They always output a smoothly varying voltage", "They can only be tested with an ESR meter", "They never switch between distinct states"], answer: 0, explain: "The table states digital sensors often need a specific protocol to read properly, unlike analog's direct voltage/resistance reading.", why: ["", "That describes analog sensor output, the opposite column of the table", "An ESR meter is used for capacitor testing, unrelated to reading digital sensors", "The table explicitly says digital sensors switch between clear states"] },
              { q: "Per the 'Reading a Sensor's Output' list, what does 'resistance change' output require to measure?", choices: ["Measured directly with a multimeter in resistance mode", "A dedicated signal generator", "An oscilloscope set to AC coupling", "A serial communication protocol"], answer: 0, explain: "The list states resistance change is measured directly with a multimeter in resistance mode.", why: ["", "A signal generator injects signals, it doesn't measure resistance", "AC-coupled oscilloscope measurement is used for ripple, not sensor resistance", "Serial protocol decoding describes reading serial data output, a different item on this list"] },
              { q: "Per the 'Reading a Sensor's Output' list, what is 'serial data' output?", choices: ["A digital protocol carrying a precise numeric reading", "A signal that rises or falls smoothly with the reading", "On/off switching timed to represent a value", "A resistance measured directly with a multimeter"], answer: 0, explain: "The list describes serial data as a digital protocol carrying a precise numeric reading.", why: ["", "That describes voltage output, a different item on this list", "That describes digital pulse output, a different item on this list", "That describes resistance change output, a different item on this list"] },
              { q: "In the thermostat scenario, what did comparing the thermistor's resistance to its datasheet chart reveal?", choices: ["The thermistor had drifted with age — a consistent offset, not a random or intermittent fault", "The thermistor had failed completely, reading infinite resistance", "The thermostat's display was wired backwards", "The room's actual temperature was fluctuating wildly"], answer: 0, explain: "The scenario concludes the thermistor had drifted with age, producing a consistent offset rather than a random or intermittent fault.", why: ["", "The scenario describes a consistent offset, not a complete open-circuit failure", "Display wiring isn't the fault identified in this scenario", "The scenario is about a consistently wrong reading, not fluctuating room temperature"] }
            ] }
          ]
        },
        {
          id: "sensors-actuators-basics",
          title: "What Is an Actuator?",
          tag: "Actuators",
          blocks: [
            { type: "definition",
              plain: "An actuator converts an electrical signal into physical action — movement, sound, heat, or light.",
              picture: "Like a pair of hands carrying out an instruction the circuit has already decided on.",
              facts: "Actuators usually draw far more current than the logic driving them — they almost always need a switch or driver in between." },
            { type: "numbered", title: "Types of Actuators", items: [
              { title: "1. Motor", desc: "Converts current into rotation — fans, drives, and positioning" },
              { title: "2. Relay", desc: "An electrically-controlled switch for higher-power circuits" },
              { title: "3. Solenoid", desc: "Converts current into a short, linear mechanical push or pull" },
              { title: "4. Buzzer / speaker", desc: "Converts an electrical signal into sound" }
            ]},
            { type: "numbered", title: "Driving an Actuator", items: [
              { title: "1. Direct drive", desc: "Only for tiny loads the controller pin can safely supply itself" },
              { title: "2. Transistor switch", desc: "A single transistor switches higher current from a small control signal" },
              { title: "3. Relay / driver IC", desc: "Isolates and switches larger loads safely from delicate logic" },
              { title: "4. PWM control", desc: "Rapid switching controls speed or brightness, not just on/off" }
            ]},
            { type: "check", questions: [
              { q: "What does an actuator fundamentally do, per the definition?", choices: ["Converts an electrical signal into physical action", "Converts a physical quantity into an electrical signal", "Amplifies a weak signal before it's read", "Stores charge for later release"], answer: 0, explain: "The definition states an actuator converts an electrical signal into physical action — movement, sound, heat, or light.", why: ["", "That describes a sensor, the opposite direction of conversion", "That describes signal conditioning, not an actuator's core job", "That describes a capacitor, not an actuator"] },
              { q: "Per the facts line, why do actuators almost always need a switch or driver in between?", choices: ["They usually draw far more current than the logic driving them", "They cannot be controlled by any circuit at all", "They only work on AC power, never DC", "Drivers are required purely for cosmetic board layout reasons"], answer: 0, explain: "The facts line explains actuators draw far more current than the controlling logic, requiring a switch or driver in between.", why: ["", "Actuators are explicitly controlled by circuits — that's their whole purpose", "Nothing in this card restricts actuators to AC only", "The driver exists for a real electrical reason — current handling — not cosmetics"] },
              { q: "Per the types of actuators list, what does a solenoid do?", choices: ["Converts current into a short, linear mechanical push or pull", "Converts current into rotation", "Acts as an electrically-controlled switch for higher-power circuits", "Converts an electrical signal into sound"], answer: 0, explain: "The list describes a solenoid as converting current into a short, linear mechanical push or pull.", why: ["", "That describes a motor, not a solenoid", "That describes a relay, not a solenoid", "That describes a buzzer/speaker, not a solenoid"] },
              { q: "Per the driving-an-actuator list, when is direct drive from a controller pin acceptable?", choices: ["Only for tiny loads the controller pin can safely supply itself", "For any load, regardless of current draw", "Only when using PWM control", "Never — direct drive is always unsafe"], answer: 0, explain: "The list explicitly limits direct drive to tiny loads the controller pin can safely supply on its own.", why: ["", "The list explicitly limits this to tiny loads, not any load", "PWM control is a separate driving method, not a precondition for direct drive being acceptable", "The list does describe direct drive as viable in the specific tiny-load case"] },
              { q: "Per the driving-an-actuator list, what does PWM control accomplish beyond simple on/off?", choices: ["Rapid switching controls speed or brightness, not just on/off", "It permanently disables the actuator's on/off function", "It only works with relay-driven loads", "It eliminates the need for a driver stage entirely"], answer: 0, explain: "The list states PWM control uses rapid switching to control speed or brightness, going beyond a simple on/off action.", why: ["", "PWM control is an additional capability, not a way to disable on/off behavior", "PWM control isn't restricted to relay-driven loads specifically", "PWM is itself one of the driving methods listed — it doesn't remove the need for a driver stage"] }
            ] }
          ]
        },
        {
          id: "sensors-actuator-faults",
          title: "Common Actuator Faults",
          tag: "Actuator Faults",
          blocks: [
            { type: "tip", text: "Healthy actuators show a motor that spins freely and draws expected current, a relay that clicks cleanly and switches its load, and a buzzer that produces a clear, steady tone." },
            { type: "warning", title: "Actuator fault signs", items: [
              "Motor hums but doesn't turn — mechanical or winding fault",
              "Relay chatters or won't click at all",
              "Actuator draws far more current than its rating"
            ]},
            { type: "definition",
              plain: "A cooling fan hums when powered but the blade never turns, even nudged by hand.",
              picture: "Like an engine that turns over but won't start — power is clearly reaching it, but something is physically stuck.",
              facts: "Checking the drive transistor's output voltage, then the motor's winding resistance directly, showed the transistor was driving it correctly — a seized bearing was the real, purely mechanical fault." },
            { type: "numbered", title: "Diagnosing the fan that wouldn't spin", items: [
              { title: "What you do", desc: "Check the drive transistor's output voltage, then check the motor's winding resistance directly" },
              { title: "What it tells you", desc: "The transistor was driving it correctly — a seized bearing was the real, purely mechanical fault" }
            ]},
            { type: "check", questions: [
              { q: "Per the healthy signs, what should a healthy relay do?", choices: ["Click cleanly and switch its load", "Chatter continuously without switching", "Draw far more current than its rating", "Hum without ever engaging"], answer: 0, explain: "The healthy signs describe a relay clicking cleanly and switching its load correctly.", why: ["", "Chattering is listed as a fault sign, not a healthy one", "Excess current draw is listed as a fault sign, not a healthy one", "Humming without engaging describes a faulty motor, not a healthy relay"] },
              { q: "Per the fault signs, what does a motor that hums but doesn't turn typically indicate?", choices: ["A mechanical or winding fault", "A perfectly healthy motor under heavy load", "A relay chattering issue", "A missing pull-up resistor"], answer: 0, explain: "The fault signs list a motor humming but not turning as a mechanical or winding fault.", why: ["", "This is explicitly listed as a fault sign, not healthy behavior", "Relay chattering is a separate, distinct fault sign on this same list", "Pull-up resistors relate to digital sensor inputs, not motor faults"] },
              { q: "Per the fault signs, what does a humming, stationary motor still do electrically?", choices: ["It's still drawing full current", "It draws zero current since it isn't moving", "It automatically shuts off to protect itself", "It reverses direction on its own"], answer: 0, explain: "The insight line explicitly states a humming, stationary motor is still drawing full current — the electrical draw doesn't stop just because it's not turning.", why: ["", "The insight line explicitly says it's still drawing FULL current, not zero", "Nothing in this card describes an automatic protective shutoff", "Nothing in this scenario describes the motor reversing direction"] },
              { q: "In the fan-that-wouldn't-spin scenario, what did checking the motor's winding resistance directly reveal?", choices: ["The drive transistor was working correctly — a seized bearing was the real, purely mechanical fault", "The drive transistor had failed", "The motor's winding was shorted", "The fan had no power reaching it at all"], answer: 0, explain: "The scenario concludes the transistor was driving it correctly, and a seized bearing — a mechanical fault — was the actual cause.", why: ["", "The scenario explicitly confirms the transistor WAS driving it correctly", "The scenario identifies a seized bearing, not a shorted winding, as the fault", "The scenario states the fan hums when powered, meaning power was clearly reaching it"] },
              { q: "Why did checking the drive transistor's output voltage come before checking the motor directly in this scenario?", choices: ["To confirm whether the electrical drive signal was correct before concluding the fault was purely mechanical", "Because the transistor is always the more likely cause of any motor fault", "Because checking the motor directly would have destroyed it", "Because the transistor and motor cannot be tested in the same session"], answer: 0, explain: "Confirming the drive voltage was correct first narrowed the fault away from the electrical drive stage, pointing toward the purely mechanical seized-bearing cause.", why: ["", "This scenario specifically shows the transistor was fine — it isn't framed as always the more likely cause", "Nothing in the scenario suggests direct motor testing is destructive", "Nothing in this card suggests these two checks can't be done in the same diagnostic session"] }
            ] }
          ]
        },
        {
          id: "sensors-interfacing",
          title: "Interfacing, Calibration & Reading Datasheets",
          tag: "Interfacing",
          blocks: [
            { type: "definition",
              plain: "Signal conditioning amplifies, filters, or scales a raw sensor signal into something a controller can read reliably.",
              picture: "Like turning up a quiet whisper and cutting the background noise before anyone tries to listen to it.",
              facts: "A perfectly good sensor can still give a useless reading if its signal never gets conditioned properly." },
            { type: "numbered", title: "Common Interfacing Techniques", items: [
              { title: "1. Voltage divider", desc: "Turns a resistive sensor into a readable voltage" },
              { title: "2. Op-amp", desc: "Amplifies a small signal up to a usable level" },
              { title: "3. ADC", desc: "Converts an analog voltage into a digital number the MCU can use" },
              { title: "4. Pull-up / pull-down resistor", desc: "Keeps a digital input steady when nothing is actively driving it" }
            ]},
            { type: "definition",
              plain: "Calibration compares a sensor's reading against a known-correct reference and corrects any offset.",
              picture: "Like setting a clock against the correct time — the clock still runs, it was just reading wrong.",
              facts: "Sensors drift with age, temperature, and use — recalibration is maintenance, not a sign of failure." },
            { type: "numbered", title: "Reading Sensor Markings & Datasheets", items: [
              { title: "1. Part number", desc: "Printed on the sensor body — your starting point for the datasheet" },
              { title: "2. Rated range", desc: "Confirms the physical range the sensor is actually built for" },
              { title: "3. Output type", desc: "Datasheet confirms analog, digital, or serial before you connect a meter" },
              { title: "4. Pinout", desc: "Confirms which pin is power, ground, and signal before power is applied" }
            ]},
            { type: "numbered", title: "Testing Sensors & Actuators on the Bench", items: [
              { title: "1. Multimeter check", desc: "Confirms resistance or voltage output against the datasheet's expected range" },
              { title: "2. Known-reference comparison", desc: "Compare the reading against a trusted, working sensor of the same type" },
              { title: "3. Substitution test", desc: "Swap in a known-good part to confirm or rule out the original" },
              { title: "4. Oscilloscope for pulses", desc: "Confirms timing and shape on digital or PWM-driven signals" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what can signal conditioning do to a raw sensor signal?", choices: ["Amplify, filter, or scale it into something a controller can read reliably", "Physically move the sensor closer to the controller", "Permanently change the sensor's rated range", "Convert electrical energy into mechanical motion"], answer: 0, explain: "The definition lists amplifying, filtering, or scaling as what signal conditioning does to a raw sensor signal.", why: ["", "Signal conditioning changes the signal, not the sensor's physical location", "Signal conditioning doesn't change a sensor's underlying rated range", "That describes an actuator's job, not signal conditioning"] },
              { q: "Per the interfacing techniques list, what does a missing pull-up resistor commonly cause?", choices: ["It often looks exactly like a dead sensor", "It permanently damages the sensor", "It has no observable effect at all", "It only affects analog sensors, never digital ones"], answer: 0, explain: "The list's insight line states a missing pull-up often looks exactly like a dead sensor — a floating input reads as an unchanging, meaningless value.", why: ["", "A missing pull-up is a wiring/support issue, not something that damages the sensor itself", "The list explicitly states this DOES have an observable, misleading effect", "Pull-ups are specifically relevant to digital inputs, not analog ones"] },
              { q: "Per the definition, is sensor drift a sign the sensor is failing?", choices: ["No — recalibration is maintenance, not a sign of failure", "Yes — drift always means the sensor must be replaced", "Drift only happens to digital sensors, never analog ones", "Drift is impossible in properly manufactured sensors"], answer: 0, explain: "The facts line explicitly states sensors drift with age, temperature, and use — recalibration is maintenance, not a sign of failure.", why: ["", "The facts line explicitly frames drift as normal and correctable, not a replacement trigger", "Nothing in this card restricts drift to digital sensors specifically", "The facts line explicitly says drift IS expected, even in properly working sensors"] },
              { q: "Per the reading-datasheets list, what should be confirmed before you ever connect a meter to a sensor?", choices: ["Output type — whether it's analog, digital, or serial", "The exact retail price of the sensor", "The sensor's manufacturing date code", "The color of the sensor's housing"], answer: 0, explain: "The list states the datasheet confirms output type — analog, digital, or serial — before you connect a meter.", why: ["", "Retail price isn't relevant to how you'd test the sensor electrically", "Manufacturing date isn't part of this datasheet-reading checklist", "Housing color has no bearing on how the sensor should be tested"] },
              { q: "Per the bench-testing list, what does a substitution test accomplish quickly?", choices: ["It settles an argument in seconds by swapping in a known-good part", "It permanently recalibrates the original sensor", "It replaces the need for a datasheet entirely", "It only works on actuators, never sensors"], answer: 0, explain: "The list's insight line states a substitution test settles an argument in seconds — swap in a known-good part to confirm or rule out the original.", why: ["", "Substitution testing confirms or rules out a fault — it doesn't recalibrate anything", "The datasheet still matters for confirming expected values — substitution doesn't replace it", "The bench-testing list explicitly applies substitution testing to both sensors and actuators"] }
            ] }
          ]
        },
        {
          id: "sensors-practical-repair",
          title: "Practical & Repair Exercises",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Practical Exercise: Test a Sensor and Drive an Actuator", items: [
              { title: "1. Identify a sensor's part number", desc: "And look up its datasheet" },
              { title: "2. Measure its output", desc: "And compare against the rated range" },
              { title: "3. Identify how the matching actuator is driven", desc: "" },
              { title: "4. Confirm the drive signal", desc: "With a multimeter or oscilloscope" },
              { title: "5. Substitute a known-good sensor", desc: "To confirm your diagnosis" },
              { title: "6. Record all readings", desc: "Against the datasheet's expected values" }
            ]},
            { type: "definition",
              plain: "A digital sensor reads a constant, unchanging value no matter what physical condition it's exposed to.",
              picture: "Like a doorbell button that's wired but never actually connects to the chime — pressing it changes nothing, though nothing looks broken.",
              facts: "A missing pull-up resistor left the input floating — the sensor itself was working perfectly, just unsupported by its circuit." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "A missing pull-up resistor left the input floating — the sensor itself was working perfectly" },
              { title: "How to prevent it", desc: "Check the supporting circuit — pull-ups, power, and ground — before condemning the sensor itself" }
            ]},
            { type: "check", questions: [
              { q: "Per the practical exercise, what should be done immediately after identifying a sensor's part number?", choices: ["Look up its datasheet", "Substitute a known-good sensor", "Confirm the drive signal with an oscilloscope", "Record all readings"], answer: 0, explain: "Step 1 pairs identifying the part number with looking up its datasheet.", why: ["", "Substitution is step 5, much later in the sequence", "Confirming the drive signal is step 4, later in the sequence", "Recording readings is step 6, the final step"] },
              { q: "Per the practical exercise, what's the final step of the exercise?", choices: ["Record all readings against the datasheet's expected values", "Identify a sensor's part number", "Measure its output", "Identify how the matching actuator is driven"], answer: 0, explain: "Step 6, the final step, is recording all readings against the datasheet's expected values.", why: ["", "That's step 1, the first step, not the final one", "That's step 2, early in the sequence, not the final step", "That's step 3, in the middle of the sequence, not the final step"] },
              { q: "In the non-responsive-sensor repair exercise, what turned out to be the actual fault?", choices: ["A missing pull-up resistor left the input floating — the sensor itself was working perfectly", "The sensor had physically failed and needed replacement", "The wrong sensor type was installed", "The datasheet was for the wrong part number"], answer: 0, explain: "The scenario concludes a missing pull-up resistor left the input floating — the sensor itself was working perfectly, just unsupported.", why: ["", "The scenario explicitly states the sensor itself was working perfectly", "A wrong sensor type isn't the fault identified in this scenario", "A mismatched datasheet isn't the fault identified in this scenario"] },
              { q: "Per the repair exercise's lesson, what should be checked before condemning a sensor as dead?", choices: ["The supporting circuit — pull-ups, power, and ground", "Only the sensor's own part number", "Only the actuator connected to it", "Nothing — a constant reading always means the sensor has failed"], answer: 0, explain: "The lesson explicitly states to check the supporting circuit — pull-ups, power, and ground — before condemning the sensor itself.", why: ["", "The part number alone doesn't reveal a missing pull-up resistor fault", "This scenario is about the sensor's own input circuit, not a connected actuator", "The scenario's whole point is that a constant reading can be an unsupported sensor, not a dead one"] },
              { q: "Per the practical exercise, what confirms the drive signal to a matching actuator?", choices: ["A multimeter or oscilloscope", "The sensor's own datasheet alone", "Substituting a known-good sensor", "Recording the sensor's part number"], answer: 0, explain: "Step 4 specifically calls for confirming the drive signal with a multimeter or oscilloscope.", why: ["", "The sensor's datasheet describes the sensor, not the actuator's drive signal", "Substitution (step 5) applies to the sensor, and comes after this drive-signal check", "Recording the part number is step 1, unrelated to confirming a drive signal"] }
            ] }
          ]
        },
        {
          id: "sensors-reference",
          title: "Quick Reference: Common Sensors & Actuators",
          tag: "Reference",
          blocks: [
            { type: "table", title: "One line per part — what it does, and how to test it", headers: ["Part", "Senses / Does", "Type", "Test With"], rows: [
              ["Thermistor", "Temperature", "Analog (resistance)", "Multimeter"],
              ["LDR", "Light level", "Analog (resistance)", "Multimeter"],
              ["PIR sensor", "Motion", "Digital pulse", "Oscilloscope / meter"],
              ["Relay", "Switches a load", "Actuator", "Continuity + click test"]
            ]},
            { type: "check", questions: [
              { q: "Per the reference table, what does a thermistor sense, and what type is it?", choices: ["Temperature — analog (resistance)", "Light level — analog (resistance)", "Motion — digital pulse", "Switches a load — actuator"], answer: 0, explain: "The table lists the thermistor as sensing temperature, categorized as analog (resistance).", why: ["", "That's the LDR's entry, not the thermistor's", "That's the PIR sensor's entry, not the thermistor's", "That's the relay's entry, not the thermistor's"] },
              { q: "Per the reference table, what type is an LDR, and what does it sense?", choices: ["Light level — analog (resistance)", "Temperature — analog (resistance)", "Motion — digital pulse", "Switches a load — actuator"], answer: 0, explain: "The table lists the LDR as sensing light level, categorized as analog (resistance).", why: ["", "That's the thermistor's entry, not the LDR's", "That's the PIR sensor's entry, not the LDR's", "That's the relay's entry, not the LDR's"] },
              { q: "Per the reference table, how should a PIR sensor be tested?", choices: ["Oscilloscope / meter", "Multimeter", "Continuity + click test", "It cannot be tested on the bench"], answer: 0, explain: "The table lists 'Oscilloscope / meter' as the test method for a PIR sensor, matching its digital pulse output.", why: ["", "That's the test method for the thermistor and LDR, not the PIR sensor", "That's the test method for a relay, not the PIR sensor", "The table explicitly gives a bench test method for the PIR sensor"] },
              { q: "Per the reference table, what type is a relay categorized as?", choices: ["Actuator", "Analog (resistance)", "Digital pulse", "Signal conditioner"], answer: 0, explain: "The table categorizes the relay as an actuator, since it switches a load rather than sensing something.", why: ["", "Analog (resistance) describes the thermistor and LDR, not the relay", "Digital pulse describes the PIR sensor, not the relay", "Signal conditioner isn't a category used in this reference table"] },
              { q: "Per the reference table, how should a relay be tested?", choices: ["Continuity + click test", "Multimeter alone", "Oscilloscope / meter", "It cannot be tested with hand tools"], answer: 0, explain: "The table lists 'Continuity + click test' as the way to test a relay.", why: ["", "Multimeter alone is listed for the thermistor and LDR, not specifically for the relay's full test", "Oscilloscope / meter is listed for the PIR sensor, not the relay", "The table explicitly gives a hand-tool-based test method for the relay"] }
            ] }
          ]
        },
        {
          id: "sensors-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Identify common sensor types and read their output correctly",
              "Explain why actuators almost always need a driver stage",
              "Recognise the signs of a healthy vs faulty actuator",
              "Use signal conditioning and interfacing to explain a bad reading",
              "Test and substitute sensors and actuators on the bench"
            ]},
            { type: "golden", text: "A sensor is a translator — a wrong reading is often the messenger, not the message." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["A sensor is a translator — a wrong reading is often the messenger, not the message", "Every wrong sensor reading means the sensor has failed", "Actuators never need a driver stage between them and logic", "Calibration is only needed after a sensor completely fails"], answer: 0, explain: "The golden rule frames a sensor as a translator, meaning a wrong reading is often about what's around the sensor, not the sensor itself.", why: ["", "The thermostat and non-responsive-sensor scenarios both show wrong readings caused by something other than sensor failure", "The actuators card explicitly states actuators almost always need a driver stage", "The calibration card explicitly frames drift and recalibration as normal maintenance, not tied to failure"] },
              { q: "Per the checklist, what should you be able to do with common sensor types?", choices: ["Identify them and read their output correctly", "Manufacture replacement sensors from raw materials", "Redesign their internal circuitry", "Convert every sensor into a digital-only type"], answer: 0, explain: "The checklist names identifying common sensor types and reading their output correctly as a core skill.", why: ["", "Manufacturing sensors is far outside this module's repair-focused scope", "Redesigning internal sensor circuitry isn't a skill taught in this module", "Converting sensor types isn't a skill taught in this module"] },
              { q: "Per the checklist, what should you be able to explain about actuators?", choices: ["Why actuators almost always need a driver stage", "Why actuators never draw more current than logic pins", "Why actuators are always digital, never analog", "Why actuators cannot be tested on the bench"], answer: 0, explain: "The checklist names explaining why actuators almost always need a driver stage as a core skill.", why: ["", "This module explicitly teaches the opposite — actuators usually draw MORE current than logic pins", "Actuator type (digital/analog) isn't framed this way anywhere in this module", "The practical exercise explicitly includes testing an actuator on the bench"] },
              { q: "Per the checklist, what should you be able to recognise about actuators?", choices: ["The signs of a healthy vs faulty actuator", "The exact manufacturer of any actuator", "The retail price of a replacement actuator", "The country of origin for any actuator part"], answer: 0, explain: "The checklist names recognising the signs of a healthy vs faulty actuator as a core skill.", why: ["", "Manufacturer identification isn't part of this checklist's skill set", "Pricing isn't part of this checklist's skill set", "Country of origin isn't part of this checklist's skill set"] },
              { q: "Per the checklist, what should you be able to use signal conditioning and interfacing to do?", choices: ["Explain a bad reading", "Permanently fix any sensor without testing it", "Replace the need for a datasheet entirely", "Bypass calibration requirements forever"], answer: 0, explain: "The checklist names using signal conditioning and interfacing to explain a bad reading as a core skill.", why: ["", "This module explicitly teaches testing and substitution as ways to confirm a diagnosis, not skipping testing", "The datasheet reading skill remains explicitly part of this module's checklist", "Calibration remains a separate, still-necessary skill covered in this module"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 10: MOTORS & DRIVES
    {
      id: "motors-drives",
      code: "MOD·10",
      icon: "⚙️",
      color: "#5bff7a",
      title: "Motors & Drives",
      subtitle: "Turning electrical control into mechanical motion — and diagnosing when it stops.",
      cards: [
        {
          id: "motors-overview",
          title: "The Five Skills of Motors & Drives",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever wondered how a printer moves its print head to the exact same spot, every single time? That's precise motor control at work — by the end of this module, you'll know exactly how it's done." },
            { type: "table", title: "From a spinning shaft to the circuit that controls it", headers: ["Skill", "What It Covers", "Key Idea"], rows: [
              ["DC Motors", "The simplest way to spin something", "Brushed"],
              ["Stepper Motors", "Precise, repeatable increments", "Step angle"],
              ["Servo Motors", "Position control with feedback", "PWM signal"],
              ["Motor Drivers", "Switching current the logic can't", "H-bridge"],
              ["Speed Control", "PWM instead of a simple on/off", "Duty cycle"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what key idea is listed for DC Motors?", choices: ["Brushed", "Step angle", "PWM signal", "H-bridge"], answer: 0, explain: "The table lists 'Brushed' as the key idea for DC Motors — the simplest way to spin something.", why: ["", "Step angle is the key idea for Stepper Motors, not DC Motors", "PWM signal is the key idea for Servo Motors, not DC Motors", "H-bridge is the key idea for Motor Drivers, not DC Motors"] },
              { q: "Per the table, what does the Stepper Motors skill cover?", choices: ["Precise, repeatable increments", "The simplest way to spin something", "Position control with feedback", "Switching current the logic can't"], answer: 0, explain: "The table describes Stepper Motors as precise, repeatable increments, with 'Step angle' as the key idea.", why: ["", "That describes DC Motors, not Stepper Motors", "That describes Servo Motors, not Stepper Motors", "That describes Motor Drivers, not Stepper Motors"] },
              { q: "Per the table, what key idea is listed for Servo Motors?", choices: ["PWM signal", "Brushed", "Step angle", "Duty cycle"], answer: 0, explain: "The table lists 'PWM signal' as the key idea for Servo Motors — position control with feedback.", why: ["", "Brushed is the key idea for DC Motors, not Servo Motors", "Step angle is the key idea for Stepper Motors, not Servo Motors", "Duty cycle is the key idea for Speed Control, not Servo Motors"] },
              { q: "Per the table, what does the Motor Drivers skill cover?", choices: ["Switching current the logic can't", "Precise, repeatable increments", "Position control with feedback", "PWM instead of a simple on/off"], answer: 0, explain: "The table describes Motor Drivers as switching current the logic can't, with 'H-bridge' as the key idea.", why: ["", "That describes Stepper Motors, not Motor Drivers", "That describes Servo Motors, not Motor Drivers", "That describes Speed Control, not Motor Drivers"] },
              { q: "Per the table, what key idea is listed for Speed Control?", choices: ["Duty cycle", "H-bridge", "Step angle", "Brushed"], answer: 0, explain: "The table lists 'Duty cycle' as the key idea for Speed Control — PWM instead of a simple on/off.", why: ["", "H-bridge is the key idea for Motor Drivers, not Speed Control", "Step angle is the key idea for Stepper Motors, not Speed Control", "Brushed is the key idea for DC Motors, not Speed Control"] }
            ] }
          ]
        },
        {
          id: "motors-dc-fundamentals",
          title: "What Is a DC Motor?",
          tag: "DC Motors",
          blocks: [
            { type: "definition",
              plain: "A DC motor spins continuously when voltage is applied — reverse the voltage, and it spins the other way.",
              picture: "Like a water wheel that turns as long as water keeps flowing — remove the flow, and it stops.",
              facts: "Brushed motors are simple and cheap; brushless motors last longer but need a driver to commutate them." },
            { type: "numbered", title: "Types of Motors", items: [
              { title: "1. Brushed DC", desc: "Simple, cheap, spins continuously — brushes wear out over time" },
              { title: "2. Brushless DC (BLDC)", desc: "Longer-lasting, needs electronic commutation from a driver" },
              { title: "3. Stepper", desc: "Moves in precise, repeatable increments instead of spinning freely" },
              { title: "4. Servo", desc: "Holds a specific position, using internal feedback to correct itself" }
            ]},
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "Rated voltage", desc: "The voltage the motor is designed to run at continuously" },
              { title: "Stall current", desc: "The current it draws when stopped but still powered — often very high" },
              { title: "RPM", desc: "How fast it spins at rated voltage, under no load" },
              { title: "Torque", desc: "How much rotational force it can deliver before stalling" }
            ]},
            { type: "check", questions: [
              { q: "What happens to a DC motor's spin direction if you reverse the applied voltage?", choices: ["It reverses direction", "It spins faster in the same direction", "It stops permanently", "Nothing changes at all"], answer: 0, explain: "The definition states reversing the voltage reverses the spin direction.", why: ["", "Reversing voltage changes direction, not speed", "The motor reverses, it doesn't stop permanently", "The definition explicitly says reversing voltage does change something — direction"] },
              { q: "Per the types of motors list, what distinguishes brushless DC (BLDC) from brushed DC?", choices: ["BLDC lasts longer but needs electronic commutation from a driver", "BLDC has no moving parts at all", "BLDC only works with stepper drivers", "BLDC cannot spin continuously"], answer: 0, explain: "The list states BLDC is longer-lasting but needs electronic commutation from a driver, unlike simple brushed DC.", why: ["", "BLDC still has a rotating shaft — it isn't free of moving parts", "BLDC uses its own electronic commutation, not a stepper driver specifically", "BLDC spins continuously, just like brushed DC — the list contrasts it with steppers, which move in increments"] },
              { q: "Per the types of motors list, what makes a stepper motor different from a brushed or brushless DC motor?", choices: ["It moves in precise, repeatable increments instead of spinning freely", "It cannot be electronically controlled at all", "It always uses brushes to commutate", "It has no rated voltage specification"], answer: 0, explain: "The list states a stepper moves in precise, repeatable increments, unlike a DC motor's free continuous spin.", why: ["", "Steppers are explicitly electronically controlled via a pulse sequence", "Brushes are a DC-motor feature; steppers work differently", "Rated voltage is one of the four specs that matter for motors generally, including steppers"] },
              { q: "Per the specifications list, why is stall current described as 'the number that lets out the smoke'?", choices: ["It's the current drawn when stopped but still powered — often very high, risking damage if ignored", "It's always lower than the motor's normal running current", "It has no relationship to motor damage at all", "It only applies to servo motors, never DC motors"], answer: 0, explain: "The specs list describes stall current as often very high, and 'lets out the smoke' is a wry way of saying ignoring it risks real damage.", why: ["", "Stall current is typically higher than running current, not lower — that's exactly the risk", "The 'lets out the smoke' phrasing directly signals its damage potential", "Stall current is listed as a general motor spec, not one limited to servos"] },
              { q: "Per the specifications list, what does torque measure?", choices: ["How much rotational force a motor can deliver before stalling", "How fast the motor spins at rated voltage under no load", "The voltage the motor is designed to run at continuously", "The current it draws when stopped but still powered"], answer: 0, explain: "The specs list defines torque as how much rotational force the motor can deliver before stalling.", why: ["", "That's the RPM spec, not torque", "That's the rated voltage spec, not torque", "That's the stall current spec, not torque"] }
            ] }
          ]
        },
        {
          id: "motors-dc-faults",
          title: "Common Motor Faults",
          tag: "DC Motor Faults",
          blocks: [
            { type: "tip", text: "Healthy motors spin freely with no unusual noise or vibration, draw expected current under no load, and hold a consistent speed across repeated tests." },
            { type: "warning", title: "Motor fault signs", items: [
              "Worn brushes — sparking, or intermittent operation",
              "Grinding or rough bearings under rotation",
              "Shorted winding — draws far more current than rated"
            ]},
            { type: "definition",
              plain: "A conveyor motor runs smoothly at the right speed, but consistently spins the wrong way.",
              picture: "Like a light switch wired upside-down — flip it and the outcome is exactly backwards, but the switch itself works fine.",
              facts: "Checking the driver's output polarity, then the motor's own wiring against the schematic, revealed the motor's two leads had been swapped during a previous repair — nothing was actually faulty." },
            { type: "numbered", title: "Diagnosing the reversed motor", items: [
              { title: "What you do", desc: "Check the driver's output polarity, then check the motor's own wiring against the schematic" },
              { title: "What it tells you", desc: "The motor's two leads had been swapped during a previous repair — nothing was actually faulty" }
            ]},
            { type: "check", questions: [
              { q: "Per the fault signs, what does a shorted winding typically cause?", choices: ["The motor draws far more current than rated", "The motor spins faster than its rated RPM", "The motor becomes completely silent", "The motor's voltage rating increases"], answer: 0, explain: "The fault signs list a shorted winding as drawing far more current than rated.", why: ["", "A shorted winding is a fault, not a way to exceed rated RPM safely", "A shorted winding is an electrical fault, not something that silences the motor", "A winding fault doesn't change the motor's voltage rating"] },
              { q: "Per the fault signs, what do worn brushes typically cause?", choices: ["Sparking, or intermittent operation", "A permanently reversed spin direction", "An increase in the motor's torque rating", "No observable symptom at all"], answer: 0, explain: "The fault signs list worn brushes as causing sparking or intermittent operation.", why: ["", "Reversed direction is a wiring issue, covered in this card's own scenario, not a brush-wear symptom", "Worn brushes don't increase torque rating — they're a wear-related fault", "The fault signs explicitly describe an observable symptom"] },
              { q: "In the reversed-conveyor-motor scenario, what was actually wrong with the motor itself?", choices: ["Nothing — the motor's two leads had simply been swapped during a previous repair", "The motor's winding had shorted", "The motor's bearings had worn out", "The motor was rated for the wrong voltage"], answer: 0, explain: "The scenario concludes nothing was actually faulty — the motor's two leads had been swapped during a previous repair.", why: ["", "A shorted winding isn't the cause identified in this scenario", "Worn bearings aren't the cause identified in this scenario", "Voltage rating mismatch isn't the cause identified in this scenario"] },
              { q: "Per the reversed-motor scenario's insight, what does 'wrong direction' often mean in a motor fault?", choices: ["It's often wiring, not a fault at all", "It always means the motor has failed internally", "It means the driver IC must be replaced", "It's impossible to diagnose without disassembling the motor"], answer: 0, explain: "The scenario's insight line states wrong direction is often wiring, not a fault at all — exactly what the swapped leads turned out to be.", why: ["", "The scenario explicitly shows the motor itself was fine, not internally failed", "The scenario didn't require replacing the driver — it required correcting the wiring", "The scenario was diagnosed by checking polarity and wiring, without disassembling the motor"] },
              { q: "Per the reversed-motor scenario, what was checked first, before the motor's own wiring?", choices: ["The driver's output polarity", "The motor's bearing condition", "The motor's stall current", "The motor's RPM rating"], answer: 0, explain: "The scenario states the driver's output polarity was checked first, then the motor's own wiring against the schematic.", why: ["", "Bearing condition isn't part of this particular scenario's diagnostic steps", "Stall current isn't part of this particular scenario's diagnostic steps", "RPM rating isn't part of this particular scenario's diagnostic steps"] }
            ] }
          ]
        },
        {
          id: "motors-precision",
          title: "Stepper & Servo Motors",
          tag: "Precision Motion",
          blocks: [
            { type: "definition",
              plain: "A stepper motor rotates in fixed steps, not continuously — each pulse from the driver moves it by one precise angle.",
              picture: "Like a clock's second hand ticking forward, instead of sweeping smoothly around the face.",
              facts: "Because each step is known, a stepper can track exact position without any feedback sensor at all." },
            { type: "numbered", title: "How Steppers Move in Precise Increments", items: [
              { title: "1. Coils energised in sequence", desc: "The driver switches coil pairs on and off in a set pattern" },
              { title: "2. Step angle", desc: "A fixed angle per step — commonly 1.8°, giving 200 steps per revolution" },
              { title: "3. Holding torque", desc: "Even stationary, an energised stepper resists being turned by hand" },
              { title: "4. Missed steps", desc: "Too much load or speed can cause a step to be lost — position is no longer trusted" }
            ]},
            { type: "definition",
              plain: "A servo motor moves to and holds a commanded position, using internal feedback to correct any error.",
              picture: "Like someone holding a pointer steady on a target, nudging it back whenever it drifts off.",
              facts: "Unlike a stepper, a servo actively fights to hold its position — even against outside force." },
            { type: "numbered", title: "Reading a Servo's Control Signal", items: [
              { title: "1. PWM pulse width", desc: "The width of the pulse, not its frequency, sets the commanded position" },
              { title: "2. Feedback potentiometer", desc: "An internal sensor reports the shaft's actual current position" },
              { title: "3. Control loop", desc: "The servo constantly compares commanded and actual position, correcting the gap" },
              { title: "4. Typical range", desc: "Most hobby servos expect a pulse roughly between 1ms and 2ms" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, why can a stepper motor track exact position without any feedback sensor?", choices: ["Because each step is a known, fixed angle, so counting the steps sent tracks position", "Because it never moves unless a sensor confirms the move first", "Because it has an internal potentiometer like a servo", "Because it only ever moves in one direction"], answer: 0, explain: "The facts line states because each step is known, a stepper can track exact position just by counting the steps sent — no feedback sensor needed.", why: ["", "A stepper moves on each pulse; it doesn't wait for sensor confirmation, since it has no feedback sensor", "An internal feedback potentiometer is a servo feature, not a stepper feature", "Nothing in this card restricts a stepper to one direction only"] },
              { q: "Per the 'How Steppers Move' list, what does a missed step mean for the controller's position tracking?", choices: ["The controller's count is now a guess — position is no longer trusted", "Nothing changes — the stepper self-corrects automatically", "The motor immediately stops permanently", "The step angle changes to compensate"], answer: 0, explain: "The list's insight line states a missed step means the controller's count is now a guess — a stepper has no feedback to detect or correct this.", why: ["", "A stepper has no feedback sensor to self-correct a missed step, unlike a servo", "A missed step doesn't stop the motor — it just loses position tracking accuracy", "The step angle is a fixed mechanical property; it doesn't change to compensate for a missed step"] },
              { q: "Per the definition, how is a servo motor different from a stepper in how it handles position?", choices: ["A servo actively fights to hold its position, even against outside force, using feedback", "A servo has no way to know its own position at all", "A servo moves in fixed steps just like a stepper", "A servo cannot hold a stationary position at all"], answer: 0, explain: "The facts line contrasts a servo actively fighting to hold position using feedback, against a stepper which just assumes it's still in place.", why: ["", "A servo's whole design is built around knowing its position via feedback", "Fixed-step movement describes a stepper, not a servo, per this same card", "A servo's core purpose is holding a commanded position"] },
              { q: "Per the 'Reading a Servo's Control Signal' list, what actually sets a servo's commanded position?", choices: ["The width of the PWM pulse, not its frequency", "The frequency of the PWM signal", "The voltage amplitude of the pulse", "The color-coding of the servo's wires"], answer: 0, explain: "The list explicitly states the width of the pulse, not its frequency, sets the commanded position.", why: ["", "The list explicitly says frequency is NOT what sets position — pulse width is", "Pulse width, not voltage amplitude, is what encodes the servo command", "Wire color-coding is a wiring convention, not part of the actual control signal"] },
              { q: "Per the 'Reading a Servo's Control Signal' list, what is the feedback potentiometer's role?", choices: ["An internal sensor that reports the shaft's actual current position", "It sets the commanded target position", "It supplies the servo's main operating voltage", "It generates the PWM control signal"], answer: 0, explain: "The list describes the feedback potentiometer as an internal sensor reporting the shaft's actual current position, feeding the control loop.", why: ["", "The commanded position comes from the PWM pulse width, not the potentiometer", "The potentiometer is a position sensor, not a power supply component", "The controller generates the PWM signal; the potentiometer reports position back"] }
            ] }
          ]
        },
        {
          id: "motors-drivers",
          title: "Motor Drivers & the H-Bridge",
          tag: "Drivers",
          blocks: [
            { type: "definition",
              plain: "A motor driver takes a small control signal and switches the much larger current a motor actually needs.",
              picture: "Like a valve operated by a light touch, controlling a flow far stronger than that touch alone.",
              facts: "Never connect a motor straight to a logic pin — the driver exists specifically to protect it." },
            { type: "numbered", title: "The H-Bridge Explained", items: [
              { title: "1. Four switches", desc: "Arranged so current can flow through the motor in either direction" },
              { title: "2. Forward / reverse", desc: "Switching diagonal pairs reverses current, and the motor's direction" },
              { title: "3. Braking", desc: "Closing both switches on one side shorts the motor, slowing it quickly" },
              { title: "4. Common driver ICs", desc: "Purpose-built chips package the whole H-bridge, ready to drive directly" }
            ]},
            { type: "tip", text: "A healthy driver shows output voltage matching the input command, stays cool under normal load, and lets the motor respond immediately to direction changes." },
            { type: "warning", title: "Driver fault signs", items: [
              "Driver runs hot with no load connected at all",
              "One direction works, the other doesn't",
              "Output stuck high or low regardless of the input"
            ]},
            { type: "definition",
              plain: "A small robot drives forward normally but does absolutely nothing when commanded to reverse.",
              picture: "Like a car with only one working headlight — half the system works fine, and the other half is simply dark.",
              facts: "Checking the driver's output on both halves of the H-bridge while commanding each direction revealed one half of the H-bridge had failed — a classic driver IC fault, not a motor problem at all." },
            { type: "numbered", title: "Diagnosing the one-way robot", items: [
              { title: "What you do", desc: "Check the driver's output on both halves of the H-bridge while commanding each direction" },
              { title: "What it tells you", desc: "One half of the H-bridge had failed — a classic driver IC fault, not a motor problem at all" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, why should a motor never be connected straight to a logic pin?", choices: ["The driver exists specifically to protect the logic from the motor's real current", "Logic pins are physically incompatible with any motor wiring", "Motors only work with AC power, never a DC logic signal", "It's purely a cosmetic wiring convention"], answer: 0, explain: "The facts line explicitly states the driver protects the logic from the motor's real current — connecting directly risks damaging the logic pin.", why: ["", "The issue is current handling, not a physical incompatibility of the wiring itself", "Nothing in this card restricts motors to AC only", "The facts line frames this as a real protective necessity, not cosmetics"] },
              { q: "Per the H-bridge explanation, how does switching diagonal switch pairs affect the motor?", choices: ["It reverses current through the motor, reversing its direction", "It disconnects the motor entirely", "It increases the motor's supply voltage", "It has no effect on the motor at all"], answer: 0, explain: "The list states switching diagonal pairs reverses current, and the motor's direction, through the H-bridge.", why: ["", "Disconnection isn't described by diagonal-pair switching — braking (closing one side) is a separate, different action", "The H-bridge switches current direction, it doesn't change supply voltage", "The list explicitly ties diagonal switching to reversing direction — it has a clear effect"] },
              { q: "Per the H-bridge explanation, how does an H-bridge brake a motor quickly?", choices: ["Closing both switches on one side shorts the motor, slowing it quickly", "Opening all four switches simultaneously", "Reversing the supply polarity permanently", "Increasing the PWM duty cycle to 100%"], answer: 0, explain: "The list states closing both switches on one side shorts the motor, providing quick braking.", why: ["", "Opening all switches would coast the motor, not actively brake it", "Reversing polarity would drive the motor backward, not brake it", "Increasing duty cycle to 100% would drive the motor at full speed, not brake it"] },
              { q: "Per the driver fault signs, what does 'one direction works, the other doesn't' typically indicate?", choices: ["A blown half-bridge", "A healthy driver operating normally", "A motor with worn brushes", "A missing flyback diode"], answer: 0, explain: "The fault signs' insight line explicitly states a driver that only works one way has a blown half-bridge.", why: ["", "This is explicitly listed as a fault sign, not healthy behavior", "Brush wear is a motor-specific fault from an earlier card, not this driver-specific symptom", "A missing flyback diode is a protection issue covered on a different card, not this specific symptom"] },
              { q: "In the one-way robot scenario, what did checking both halves of the H-bridge reveal?", choices: ["One half of the H-bridge had failed — a classic driver IC fault, not a motor problem at all", "The motor's winding had failed", "The robot's battery was undercharged", "The wiring between the driver and motor had been reversed"], answer: 0, explain: "The scenario concludes one half of the H-bridge had failed — a driver fault, explicitly not a motor problem.", why: ["", "The scenario explicitly rules out a motor problem", "Battery charge isn't the fault identified in this scenario", "Reversed wiring is the fault from the earlier conveyor-motor scenario, not this one"] }
            ] }
          ]
        },
        {
          id: "motors-control",
          title: "PWM Speed Control & Protection",
          tag: "Control & Protection",
          blocks: [
            { type: "definition",
              plain: "PWM switches full voltage on and off rapidly — the ratio of on-time to off-time controls the motor's effective speed.",
              picture: "Like tapping a car's accelerator rapidly instead of pressing it down partway — the average effect is the same.",
              facts: "PWM is more efficient than a simple voltage-dropping resistor, since little energy is wasted as heat." },
            { type: "numbered", title: "Protecting Motor Circuits", items: [
              { title: "1. Flyback diode", desc: "Protects the driver from the voltage spike a motor generates when switched off" },
              { title: "2. Current limiting", desc: "Prevents stall current from destroying the driver or wiring" },
              { title: "3. Heat-sink the driver IC", desc: "Motor drivers dissipate real power — inadequate cooling shortens their life" },
              { title: "4. Isolate logic from motor supply", desc: "Keeps motor noise and voltage spikes away from sensitive control circuitry" }
            ]},
            { type: "numbered", title: "Testing Motors & Drivers on the Bench", items: [
              { title: "1. No-load current", desc: "Confirms the motor spins freely without excessive draw" },
              { title: "2. Stall current", desc: "Briefly holding the shaft confirms current stays within rated limits" },
              { title: "3. Driver output voltage", desc: "Confirms the driver is actually delivering what it's commanded to" },
              { title: "4. Direction test", desc: "Confirms both directions work equally, isolating a one-sided driver fault" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what does PWM actually control in a spinning motor?", choices: ["The ratio of on-time to off-time, controlling the motor's effective average speed", "The exact voltage level applied continuously", "The motor's physical rotor size", "The number of switches inside the driver"], answer: 0, explain: "The definition states PWM controls speed via the ratio of on-time to off-time — the motor's effective speed is an average of full-on and full-off.", why: ["", "PWM switches full voltage on and off — it isn't a continuous partial voltage", "PWM has nothing to do with a motor's physical rotor size", "The number of driver switches is fixed by the H-bridge design, unrelated to PWM's speed-control mechanism"] },
              { q: "Per the facts line, why is PWM more efficient than a voltage-dropping resistor for speed control?", choices: ["Little energy is wasted as heat, since switching fast beats dissipating energy", "PWM eliminates the need for a motor driver entirely", "A resistor is always more efficient than PWM", "PWM only works at a single fixed speed"], answer: 0, explain: "The facts line states PWM is more efficient since little energy is wasted as heat, compared to a resistor's approach of dissipating excess voltage.", why: ["", "PWM still requires a driver to actually switch the motor current", "The facts line explicitly says the opposite — PWM is the more efficient option", "PWM's whole purpose is variable speed control via adjustable duty cycle"] },
              { q: "Per the protecting-motor-circuits list, what does a flyback diode protect against?", choices: ["The voltage spike a motor generates when switched off", "Excessive heat from the driver IC", "Motor noise reaching the logic supply", "Stall current destroying the wiring"], answer: 0, explain: "The list states a flyback diode protects the driver from the voltage spike a motor generates when switched off.", why: ["", "That's the heat-sinking item's purpose, not the flyback diode's", "That's the isolation item's purpose, not the flyback diode's", "That's the current-limiting item's purpose, not the flyback diode's"] },
              { q: "Per the protecting-motor-circuits list, what does isolating logic from the motor supply accomplish?", choices: ["Keeps motor noise and voltage spikes away from sensitive control circuitry", "Prevents the motor from ever drawing stall current", "Eliminates the need for a flyback diode", "Increases the motor's rated torque"], answer: 0, explain: "The list states isolating logic from the motor supply keeps motor noise and voltage spikes away from sensitive control circuitry.", why: ["", "That's current limiting's purpose, not isolation's", "Isolation and the flyback diode are separate, complementary protections, not substitutes for each other", "Isolation is an electrical protection measure, unrelated to a motor's rated torque"] },
              { q: "Per the bench-testing list, why does a direction test specifically isolate a one-sided driver fault?", choices: ["It confirms both directions work equally, revealing a driver that only works one way", "It measures the motor's no-load current only", "It only tests the motor, never the driver", "It replaces the need for checking driver output voltage"], answer: 0, explain: "The list states the direction test confirms both directions work equally, isolating a one-sided driver fault — exactly the fault found in the one-way robot scenario.", why: ["", "No-load current is a separate, different test on this same list", "The direction test specifically exercises the driver's H-bridge, not just the motor alone", "Driver output voltage is checked as its own separate step on this list, not replaced by the direction test"] }
            ] }
          ]
        },
        {
          id: "motors-pcb-practical",
          title: "PCB Identification & Practical Exercise",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Spotting Motor Drive Circuits on a Real Board", items: [
              { title: "1. Larger IC with heat tabs", desc: "Motor driver ICs are built to shed heat, and it shows in the package" },
              { title: "2. Thick copper traces", desc: "Motor current needs wider tracks than the signal traces nearby" },
              { title: "3. Nearby flyback diodes", desc: "Placed close to the motor connector, protecting the driver" },
              { title: "4. Screw terminals or connectors", desc: "Motors are rarely soldered directly — expect a removable connection" }
            ]},
            { type: "numbered", title: "Practical Exercise: Test a Motor and Driver Circuit", items: [
              { title: "1. Measure no-load current", desc: "The motor's draw with nothing connected" },
              { title: "2. Briefly test stall current", desc: "Within its rated limit" },
              { title: "3. Confirm driver output voltage", desc: "In each direction" },
              { title: "4. Confirm both directions", desc: "Actually turn the motor" },
              { title: "5. Check for a flyback diode", desc: "Across the motor terminals" },
              { title: "6. Record all readings", desc: "Against the motor's datasheet" }
            ]},
            { type: "check", questions: [
              { q: "Per the PCB identification list, why do motor driver ICs often stand out with heat tabs?", choices: ["They're built to shed heat, and it shows in the package", "Heat tabs are purely decorative branding", "Every IC on a board has identical heat tabs", "Heat tabs indicate a failed component"], answer: 0, explain: "The list states motor driver ICs are built to shed heat, and it shows in the package with larger heat tabs.", why: ["", "Heat tabs serve a real thermal function, not decoration", "The list specifically calls this out as a distinguishing feature of motor driver ICs, not universal to every IC", "A heat tab is a design feature, not itself a sign of failure"] },
              { q: "Per the PCB identification list, why are thick copper traces a clue to spotting motor circuits?", choices: ["Motor current needs wider tracks than the signal traces nearby", "Thick traces are only used for aesthetic board design", "Thick traces indicate a firmware fault", "All traces on a board are the same thickness by design"], answer: 0, explain: "The list states motor current needs wider tracks than nearby signal traces, making thick copper a visual clue.", why: ["", "Trace width is functional, related to current capacity, not aesthetics", "Trace thickness is a PCB design/current property, unrelated to firmware", "The whole point of this clue is that trace thickness VARIES across the board"] },
              { q: "Per the practical exercise, what should be checked across the motor terminals?", choices: ["A flyback diode", "The motor's rated torque only", "The driver's part number", "The PCB's copper trace thickness"], answer: 0, explain: "Step 5 of the practical exercise specifically calls for checking for a flyback diode across the motor terminals.", why: ["", "Torque rating isn't the specific check named in step 5", "Part number lookup isn't the specific check named in step 5", "Trace thickness is a PCB-identification clue from a different list, not this specific practical-exercise step"] },
              { q: "Per the practical exercise, what's the very first measurement taken?", choices: ["No-load current", "Stall current", "Driver output voltage", "Flyback diode presence"], answer: 0, explain: "Step 1 of the practical exercise is measuring the motor's no-load current draw.", why: ["", "Stall current is step 2, after no-load current", "Driver output voltage is step 3, after no-load and stall current", "Flyback diode check is step 5, near the end of the sequence"] },
              { q: "Per the practical exercise, why should both directions be confirmed, not just one?", choices: ["The exercise explicitly warns never to assume the second direction works", "Only one direction ever needs testing on a healthy driver", "Testing both directions risks damaging the motor", "Direction testing is optional and rarely necessary"], answer: 0, explain: "The exercise's insight line explicitly states: test both directions — never assume the second one works.", why: ["", "The exercise explicitly requires testing BOTH directions, not just one", "Nothing in this exercise suggests direction testing risks damage", "The exercise lists this as a required step, not an optional one"] }
            ] }
          ]
        },
        {
          id: "motors-repair-reference",
          title: "Repair Exercise & Quick Reference",
          tag: "Repair & Reference",
          blocks: [
            { type: "definition",
              plain: "A motor spins freely when tested alone, but never turns when connected to its driver board.",
              picture: "Like a healthy engine bolted to a car with no fuel line connected — the engine isn't the problem.",
              facts: "The driver's output was never actually checked — the fault was assumed to be the motor, without testing the driver directly." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "The driver's output was never actually checked — the fault was assumed to be the motor" },
              { title: "How to prevent it", desc: "Test the driver's output directly before ever condemning the motor connected to it" }
            ]},
            { type: "table", title: "One line per motor type — how it moves, and how to control it", headers: ["Type", "Movement", "Control Signal", "Feedback"], rows: [
              ["Brushed DC", "Continuous rotation", "Voltage / PWM", "None (usually)"],
              ["Brushless DC", "Continuous rotation", "Commutated by driver", "Optional (Hall sensors)"],
              ["Stepper", "Fixed-angle steps", "Pulse sequence", "None (open loop)"],
              ["Servo", "Held position", "PWM pulse width", "Internal potentiometer"]
            ]},
            { type: "check", questions: [
              { q: "In the stalled-motor repair exercise, what was the actual root cause of the fault?", choices: ["The driver's output was never actually checked — the fault was wrongly assumed to be the motor", "The motor's bearings had seized", "The motor's winding had shorted", "The flyback diode was missing"], answer: 0, explain: "The scenario states the driver's output was never actually checked — the motor was wrongly blamed without testing the driver directly.", why: ["", "Seized bearings is the fault from the earlier fan-like motor scenario in a different module, not this one", "A shorted winding isn't the cause identified in this scenario", "A missing flyback diode isn't the cause identified in this scenario"] },
              { q: "Per the repair exercise's lesson, why does a good motor on a bad driver still not turn?", choices: ["The driver never delivers the current or signal the motor needs to move, even if the motor itself is fine", "A good motor can always turn regardless of what's driving it", "The motor automatically bypasses a faulty driver", "This scenario proves the motor was actually the fault"], answer: 0, explain: "The lesson explicitly states a good motor on a bad driver still won't turn — the driver is the necessary link between control and motion.", why: ["", "The whole scenario demonstrates the opposite — the motor spun fine ALONE, but not through the driver", "Nothing in this card describes a motor bypassing a faulty driver", "The scenario explicitly concludes the motor tested fine and the driver was the actual fault"] },
              { q: "Per the quick reference table, what type of feedback does a stepper motor use?", choices: ["None (open loop)", "Internal potentiometer", "Optional (Hall sensors)", "Continuous voltage feedback"], answer: 0, explain: "The table lists the stepper's feedback as 'None (open loop)' — it tracks position purely by counting steps sent.", why: ["", "That's the servo's feedback type, not the stepper's", "That's the brushless DC's feedback type, not the stepper's", "The table doesn't list this as any motor type's feedback mechanism"] },
              { q: "Per the quick reference table, what control signal does a servo use?", choices: ["PWM pulse width", "Voltage / PWM", "Commutated by driver", "Pulse sequence"], answer: 0, explain: "The table lists the servo's control signal as PWM pulse width — the pulse's width, not frequency, sets its commanded position.", why: ["", "That's the brushed DC's control signal, not the servo's", "That's the brushless DC's control signal, not the servo's", "That's the stepper's control signal, not the servo's"] },
              { q: "Per the quick reference table, how does a brushless DC (BLDC) motor move?", choices: ["Continuous rotation, commutated by a driver", "Fixed-angle steps via a pulse sequence", "Held position via PWM pulse width", "Continuous rotation via simple voltage/PWM only, with no driver"], answer: 0, explain: "The table lists BLDC's movement as continuous rotation, with commutation handled by a driver.", why: ["", "That describes the stepper's movement, not BLDC's", "That describes the servo's movement, not BLDC's", "The table specifically notes BLDC is 'Commutated by driver', unlike this option's claim of no driver"] }
            ] }
          ]
        },
        {
          id: "motors-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Identify DC, stepper, and servo motors and how each moves",
              "Explain why a motor driver sits between logic and motor",
              "Read an H-bridge's role in direction and speed control",
              "Test a motor and driver separately to isolate a fault",
              "Recognise the protection every motor circuit should have"
            ]},
            { type: "golden", text: "Test the motor and the driver separately — a fault in one looks identical to a fault in the other." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["Test the motor and the driver separately — a fault in one looks identical to a fault in the other", "Always assume a stalled motor means a failed motor", "Drivers never need heat-sinking", "A motor spinning freely on the bench proves the whole circuit is healthy"], answer: 0, explain: "The golden rule explicitly states testing motor and driver separately, since a fault in one can look identical to a fault in the other.", why: ["", "The stalled-motor scenario shows a healthy motor was wrongly assumed faulty — the driver was the real cause", "The protection list explicitly names heat-sinking the driver IC as necessary", "The stalled-motor scenario shows a motor spinning fine alone still didn't turn through a bad driver — the whole circuit wasn't proven healthy"] },
              { q: "Per the checklist, what motor types should you be able to identify and describe how each moves?", choices: ["DC, stepper, and servo motors", "Only DC motors", "Only stepper motors", "Only servo motors"], answer: 0, explain: "The checklist names identifying DC, stepper, and servo motors and how each moves as a core skill.", why: ["", "The checklist explicitly names all three motor families, not just DC", "The checklist explicitly names all three motor families, not just stepper", "The checklist explicitly names all three motor families, not just servo"] },
              { q: "Per the checklist, what should you be able to explain about motor drivers?", choices: ["Why a motor driver sits between logic and motor", "Why drivers are never necessary for small motors", "Why motors always run at a fixed, unchangeable speed", "Why steppers require a feedback sensor to move at all"], answer: 0, explain: "The checklist names explaining why a motor driver sits between logic and motor as a core skill.", why: ["", "This module explicitly teaches that a driver protects logic from motor current, not that it's unnecessary", "PWM speed control is explicitly taught as a way to vary motor speed", "This module explicitly teaches steppers move via pulse counting with no feedback sensor needed"] },
              { q: "Per the checklist, what role of the H-bridge should you be able to read?", choices: ["Its role in direction and speed control", "Its role in generating a sensor's calibration offset", "Its role in industrial ladder logic", "Its role in RS-485 termination"], answer: 0, explain: "The checklist names reading the H-bridge's role in direction and speed control as a core skill.", why: ["", "Sensor calibration belongs to a different module (Sensors & Actuators), not this one's H-bridge skill", "Ladder logic belongs to the PLC & Automation module, not this one", "RS-485 termination belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, how should a motor and its driver be tested when isolating a fault?", choices: ["Separately", "Only ever together, never apart", "Only the motor needs testing, never the driver", "Only the driver needs testing, never the motor"], answer: 0, explain: "The checklist names testing a motor and driver separately to isolate a fault as a core skill.", why: ["", "The stalled-motor scenario is exactly why testing only together can miss the real fault", "The stalled-motor scenario shows the driver, not just the motor, needed direct testing", "The one-way-robot scenario shows the motor also needed separate confirmation of health"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 11: INDUSTRIAL WIRING
    {
      id: "industrial-wiring",
      code: "MOD·11",
      icon: "🔗",
      color: "#ff5b8a",
      title: "Industrial Wiring",
      subtitle: "From a single component to a factory floor — the wiring that ties it all together.",
      cards: [
        {
          id: "wiring-overview",
          title: "The Five Skills of Industrial Wiring",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever noticed factory equipment plugs use far more prongs than your phone charger? Those extra prongs carry three-phase power — by the end of this module, you'll know exactly why." },
            { type: "table", title: "From a single wire to a whole control panel", headers: ["Skill", "What It Covers", "Key Idea"], rows: [
              ["Three-Phase Power", "How factory equipment is actually fed", "L1 L2 L3"],
              ["Wire & Protection", "Sizing and protecting every circuit", "Ampacity"],
              ["Terminals", "Reliable, repeatable connections", "Torque spec"],
              ["Control Circuits", "Contactors, starters, and ladder logic", "Ladder"],
              ["Earthing", "The safety path every system needs", "Ground"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what key idea is listed for Three-Phase Power?", choices: ["L1 L2 L3", "Ampacity", "Torque spec", "Ladder"], answer: 0, explain: "The table lists 'L1 L2 L3' as the key idea for Three-Phase Power — how factory equipment is actually fed.", why: ["", "Ampacity is the key idea for Wire & Protection, not Three-Phase Power", "Torque spec is the key idea for Terminals, not Three-Phase Power", "Ladder is the key idea for Control Circuits, not Three-Phase Power"] },
              { q: "Per the table, what does the Wire & Protection skill cover?", choices: ["Sizing and protecting every circuit", "How factory equipment is actually fed", "Reliable, repeatable connections", "Contactors, starters, and ladder logic"], answer: 0, explain: "The table describes Wire & Protection as sizing and protecting every circuit, with 'Ampacity' as the key idea.", why: ["", "That describes Three-Phase Power, not Wire & Protection", "That describes Terminals, not Wire & Protection", "That describes Control Circuits, not Wire & Protection"] },
              { q: "Per the table, what key idea is listed for Terminals?", choices: ["Torque spec", "L1 L2 L3", "Ampacity", "Ground"], answer: 0, explain: "The table lists 'Torque spec' as the key idea for Terminals — reliable, repeatable connections.", why: ["", "L1 L2 L3 is the key idea for Three-Phase Power, not Terminals", "Ampacity is the key idea for Wire & Protection, not Terminals", "Ground is the key idea for Earthing, not Terminals"] },
              { q: "Per the table, what does the Control Circuits skill cover?", choices: ["Contactors, starters, and ladder logic", "Sizing and protecting every circuit", "Reliable, repeatable connections", "The safety path every system needs"], answer: 0, explain: "The table describes Control Circuits as contactors, starters, and ladder logic, with 'Ladder' as the key idea.", why: ["", "That describes Wire & Protection, not Control Circuits", "That describes Terminals, not Control Circuits", "That describes Earthing, not Control Circuits"] },
              { q: "Per the table, what key idea is listed for Earthing?", choices: ["Ground", "Ladder", "Torque spec", "Ampacity"], answer: 0, explain: "The table lists 'Ground' as the key idea for Earthing — the safety path every system needs.", why: ["", "Ladder is the key idea for Control Circuits, not Earthing", "Torque spec is the key idea for Terminals, not Earthing", "Ampacity is the key idea for Wire & Protection, not Earthing"] }
            ] }
          ]
        },
        {
          id: "wiring-three-phase",
          title: "Three-Phase Power",
          tag: "Power Basics",
          blocks: [
            { type: "definition",
              plain: "Three-phase power delivers three AC supplies offset in timing, giving smoother power than a single phase.",
              picture: "Like three people pedaling a tandem bike in a staggered rhythm — power never fully dips to zero.",
              facts: "It's standard for motors and heavy industrial loads because it delivers far more power with less wasted current." },
            { type: "numbered", title: "Reading Three-Phase Wiring", items: [
              { title: "1. L1, L2, L3", desc: "The three live phases, each offset from the others" },
              { title: "2. Neutral", desc: "A return path present in some, not all, three-phase systems" },
              { title: "3. Star vs delta", desc: "Two ways to wire the three phases, giving different voltage options" },
              { title: "4. Phase sequence", desc: "The order phases arrive in — wrong sequence spins a motor backwards" }
            ]},
            { type: "definition",
              plain: "A three-phase motor runs, but noisily, and vibrates far more than it normally would.",
              picture: "Like a three-legged stool missing one leg — it can still sort of stand, but it wobbles badly doing it.",
              facts: "Measuring voltage across all three phases and finding one reading significantly lower than the others revealed a blown fuse had dropped one phase — the motor was limping along on the remaining two." },
            { type: "numbered", title: "Diagnosing the rough-running motor", items: [
              { title: "What you do", desc: "Measure voltage across all three phases and find one reading significantly lower than the others" },
              { title: "What it tells you", desc: "A blown fuse had dropped one phase — the motor was limping along on the remaining two" }
            ]},
            { type: "check", questions: [
              { q: "Why is three-phase power described as smoother than single-phase power?", choices: ["It delivers three AC supplies offset in timing, so power never fully dips to zero", "It runs at a much higher voltage than single-phase", "It uses only one live conductor instead of three", "It eliminates the need for any neutral conductor"], answer: 0, explain: "The definition states three-phase power's timing offset means power never fully dips to zero, unlike a single AC phase.", why: ["", "Smoothness comes from timing offset, not simply a higher voltage", "Three-phase uses three live conductors (L1, L2, L3), not one", "The reading list explicitly notes neutral is present in some, not all, three-phase systems — it isn't eliminated outright"] },
              { q: "Per the reading three-phase wiring list, what happens if the phase sequence is wrong?", choices: ["It spins a motor backwards", "It has no observable effect at all", "It permanently damages the neutral conductor", "It converts the supply from delta to star automatically"], answer: 0, explain: "The list explicitly states wrong phase sequence spins a motor backwards.", why: ["", "The list explicitly states there IS an observable effect — reversed motor direction", "Phase sequence and neutral conductor damage aren't linked in this list", "Star vs delta is a separate wiring configuration choice, not something sequence errors change"] },
              { q: "Per the reading three-phase wiring list, what's the difference between star and delta?", choices: ["Two ways to wire the three phases, giving different voltage options", "Star is always safer than delta", "Delta requires a neutral conductor and star never does", "They are simply two names for the identical wiring configuration"], answer: 0, explain: "The list states star vs delta are two ways to wire the three phases, giving different voltage options.", why: ["", "The list doesn't rank one configuration as inherently safer than the other", "Neutral presence is discussed as varying by system, not tied specifically to star vs delta in this list", "The list explicitly presents them as two distinct wiring approaches, not identical"] },
              { q: "In the rough-running motor scenario, what did measuring voltage across all three phases reveal?", choices: ["A blown fuse had dropped one phase — the motor was limping along on the remaining two", "All three phases were reading correctly", "The motor's winding had shorted internally", "The phase sequence had been wired backwards"], answer: 0, explain: "The scenario concludes a blown fuse had dropped one phase, leaving the motor running roughly on the remaining two.", why: ["", "The scenario explicitly found one phase reading significantly lower — not all three correct", "A shorted winding isn't the fault identified in this specific scenario", "Reversed phase sequence causes backward rotation, not the rough/noisy symptom described here"] },
              { q: "Per the scenario's insight, what does a rough-running three-phase motor often indicate?", choices: ["A missing phase", "A perfectly healthy motor under heavy load", "An incorrect star/delta configuration", "A firmware fault in the motor's controller"], answer: 0, explain: "The insight line explicitly states a rough-running three-phase motor often means a missing phase.", why: ["", "This is explicitly framed as a fault sign, not healthy heavy-load behavior", "Star/delta misconfiguration isn't the specific cause identified in this scenario", "Three-phase motors in this module are electromechanical, not firmware-controlled"] }
            ] }
          ]
        },
        {
          id: "wiring-selection",
          title: "Wire Gauge, Ampacity & Markings",
          tag: "Wire Selection",
          blocks: [
            { type: "definition",
              plain: "Ampacity is the maximum current a wire can safely carry continuously without overheating.",
              picture: "Like choosing a pipe wide enough for the water flow — too narrow, and pressure (heat) builds up.",
              facts: "A thicker wire (lower gauge number) carries more current — undersizing it is a fire risk, not just a fault." },
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "Voltage rating", desc: "The maximum voltage the insulation is rated to withstand safely" },
              { title: "Current rating", desc: "The continuous current the conductor can carry without overheating" },
              { title: "Insulation class", desc: "Determines chemical and abrasion resistance for the environment" },
              { title: "Temperature rating", desc: "The maximum operating temperature the cable is built to handle" }
            ]},
            { type: "numbered", title: "Reading Wire & Cable Markings", items: [
              { title: "1. Gauge", desc: "Printed directly on the jacket — e.g. 14 AWG or 2.5mm²" },
              { title: "2. Voltage rating", desc: "The maximum safe operating voltage, printed alongside the gauge" },
              { title: "3. Colour codes", desc: "Standardised colours identify phase, neutral, and earth conductors" },
              { title: "4. Conduit fill", desc: "How much of a conduit's cross-section the wires may safely occupy" }
            ]},
            { type: "check", questions: [
              { q: "What does ampacity actually measure?", choices: ["The maximum current a wire can safely carry continuously without overheating", "The maximum voltage a wire's insulation can withstand", "The physical length of a wire run", "The number of conductors bundled in one cable"], answer: 0, explain: "The definition states ampacity is the maximum current a wire can safely carry continuously without overheating.", why: ["", "That describes voltage rating, a separate spec on this same card", "Ampacity is about current capacity, not physical length", "Ampacity concerns current-carrying capacity, not conductor count"] },
              { q: "Per the facts line, why is undersized wire described as a fire risk, not just an electrical fault?", choices: ["A thicker wire carries more current — undersizing it can overheat and start a fire, not just malfunction", "Undersized wire always trips a breaker instantly with no other consequence", "Wire gauge has no relationship to fire risk at all", "Only wire voltage rating affects fire risk, never gauge"], answer: 0, explain: "The facts line explicitly states undersized wire doesn't just fail — it can start a fire, since it can't carry the required current without overheating.", why: ["", "The facts line explicitly frames this as more than a simple malfunction — it's a fire risk", "The facts line explicitly ties gauge (thickness) to fire risk", "Gauge, not just voltage rating, is explicitly named as the fire-risk factor here"] },
              { q: "Per the specifications list, what does insulation class determine?", choices: ["Chemical and abrasion resistance for the environment", "The maximum current the conductor can carry", "The maximum voltage the insulation withstands", "The wire's physical gauge number"], answer: 0, explain: "The specs list states insulation class determines chemical and abrasion resistance for the environment the cable is used in.", why: ["", "That's the current rating spec, not insulation class", "That's the voltage rating spec, not insulation class", "That's a separate marking (gauge), not insulation class"] },
              { q: "Per the reading wire markings list, what do standardised colour codes identify?", choices: ["Phase, neutral, and earth conductors", "The wire's exact manufacturer", "The wire's maximum operating temperature", "The conduit fill percentage"], answer: 0, explain: "The list states colour codes identify phase, neutral, and earth conductors.", why: ["", "Manufacturer isn't what colour coding identifies per this list", "Temperature rating is a separate spec, not what colour codes convey", "Conduit fill is a separate marking item, not what colour codes convey"] },
              { q: "Per the reading wire markings list, what does 'conduit fill' refer to?", choices: ["How much of a conduit's cross-section the wires may safely occupy", "The wire's maximum voltage rating", "The colour used to identify the earth conductor", "The gauge printed on the wire's jacket"], answer: 0, explain: "The list defines conduit fill as how much of a conduit's cross-section the wires may safely occupy.", why: ["", "That's the voltage rating item, not conduit fill", "That's part of the colour codes item, not conduit fill", "That's the gauge item, not conduit fill"] }
            ] }
          ]
        },
        {
          id: "wiring-protection-faults",
          title: "Circuit Protection Devices & Common Faults",
          tag: "Protection",
          blocks: [
            { type: "numbered", title: "Circuit Protection Devices", items: [
              { title: "1. MCB (breaker)", desc: "Trips on overcurrent, and can be manually reset afterward" },
              { title: "2. Fuse", desc: "A one-time sacrificial link that opens the circuit on overcurrent" },
              { title: "3. Overload relay", desc: "Protects a motor specifically from sustained overcurrent" },
              { title: "4. RCD / ELCB", desc: "Trips on a current leak to earth, protecting against shock" }
            ]},
            { type: "tip", text: "Healthy wiring shows intact insulation with no cracking or discolouration, tight terminals with no signs of arcing, and a breaker or fuse rated correctly for the load." },
            { type: "warning", title: "Wiring fault signs", items: [
              "Discoloured or brittle insulation from overheating",
              "Loose terminal showing signs of arcing or burn marks",
              "Breaker undersized or oversized for the actual load"
            ]},
            { type: "check", questions: [
              { q: "Per the protection devices list, what specifically does an overload relay protect against?", choices: ["A motor from sustained overcurrent", "A one-time overcurrent event on any circuit", "A current leak to earth", "A voltage spike from lightning"], answer: 0, explain: "The list states an overload relay protects a motor specifically from sustained overcurrent.", why: ["", "That describes a fuse's one-time sacrificial protection, not an overload relay's", "That describes an RCD/ELCB's job, not an overload relay's", "Lightning/surge protection isn't described by any device on this list"] },
              { q: "Per the protection devices list, what triggers an RCD / ELCB to trip?", choices: ["A current leak to earth", "Any overcurrent condition", "A loose terminal connection", "A wrong phase sequence"], answer: 0, explain: "The list states an RCD/ELCB trips on a current leak to earth, protecting against shock.", why: ["", "General overcurrent tripping describes an MCB or fuse, not specifically an RCD/ELCB", "A loose terminal isn't what triggers an RCD/ELCB", "Phase sequence issues aren't what triggers an RCD/ELCB"] },
              { q: "Per the protection devices list, what's the key difference between an MCB and a fuse?", choices: ["An MCB can be manually reset after tripping; a fuse is a one-time sacrificial link", "A fuse can be reset; an MCB must always be replaced", "They are functionally identical in every way", "Only a fuse protects against overcurrent"], answer: 0, explain: "The list states an MCB can be manually reset after tripping, while a fuse is a one-time sacrificial link that must be replaced.", why: ["", "This reverses the actual roles described in the list", "The list explicitly distinguishes them by reset behavior", "Both an MCB and a fuse are described as protecting against overcurrent"] },
              { q: "Per the fault signs, what does discoloured or brittle insulation indicate?", choices: ["Overheating", "Normal aging with no real concern", "A correctly rated breaker", "A properly torqued terminal"], answer: 0, explain: "The fault signs explicitly list discoloured or brittle insulation as a sign of overheating.", why: ["", "This is explicitly listed as a fault sign, not a benign aging process", "This is a wiring/insulation symptom, unrelated to breaker sizing correctness", "This is an insulation symptom, not a terminal-torque symptom"] },
              { q: "Per the fault signs' insight, what does discolouration on a terminal already tell you?", choices: ["That it ran hot", "That the wiring is definitely undersized", "That the terminal was recently installed", "Nothing useful without further testing"], answer: 0, explain: "The insight line states discolouration on a terminal already tells you it ran hot — a direct clue you can read at a glance.", why: ["", "Discolouration points to heat, not directly to a specific wire-sizing conclusion", "Fresh installation wouldn't typically show discolouration at all", "The insight explicitly frames discolouration as informative on its own, without needing further testing"] }
            ] }
          ]
        },
        {
          id: "wiring-terminals",
          title: "Terminal Blocks & Connectors",
          tag: "Terminals",
          blocks: [
            { type: "definition",
              plain: "A terminal block provides a secure, standardised point to join wires without permanently splicing them.",
              picture: "Like a row of labelled sockets, each holding one connection firmly and predictably.",
              facts: "Far more industrial faults trace back to a loose terminal than to a genuinely failed component." },
            { type: "numbered", title: "Classifying Industrial Connectors", items: [
              { title: "1. Ring terminal", desc: "Fully encircles a screw — won't slip out even if the screw loosens" },
              { title: "2. Spade / fork terminal", desc: "Quick to attach or remove, but can slide out if not tightened" },
              { title: "3. Ferrule", desc: "Protects stranded wire ends from fraying inside a terminal block" },
              { title: "4. DIN rail connector", desc: "Mounts on standard rail, common throughout control panels" }
            ]},
            { type: "numbered", title: "Making a Reliable Industrial Connection", items: [
              { title: "1. Correct strip length", desc: "Too little grip, too much exposed conductor risks a short" },
              { title: "2. Correct ferrule or lug", desc: "Matched to the wire gauge, never forced onto the wrong size" },
              { title: "3. Torque to spec", desc: "Under-tightened terminals loosen; over-tightened ones can crack" },
              { title: "4. Strain relief", desc: "Prevents cable movement from working a good connection loose" }
            ]},
            { type: "definition",
              plain: "A production line stops intermittently, with no consistent pattern to when or why.",
              picture: "Like a wobbly table leg that only fails when someone leans a certain way — fine most of the time, until it isn't.",
              facts: "Thermal-scanning the control panel under load revealed one terminal ran hot — never properly torqued during the original installation." },
            { type: "numbered", title: "Diagnosing the intermittent stoppage", items: [
              { title: "What you do", desc: "Thermal-scan the control panel under load, checking for any unusually warm terminal" },
              { title: "What it tells you", desc: "One terminal ran hot under load — never properly torqued during the original installation" }
            ]},
            { type: "check", questions: [
              { q: "Per the facts line, what do far more industrial faults trace back to than a genuinely failed component?", choices: ["A loose terminal", "A blown fuse", "A missing earth wire", "A wrong phase sequence"], answer: 0, explain: "The facts line explicitly states far more industrial faults trace back to a loose terminal than a genuinely failed component.", why: ["", "The facts line specifically names loose terminals, not blown fuses, as the more common cause", "The facts line specifically names loose terminals, not missing earths, as the more common cause", "The facts line specifically names loose terminals, not phase sequence, as the more common cause"] },
              { q: "Per the classifying connectors list, what makes a ring terminal more secure than a spade terminal?", choices: ["It fully encircles the screw, so it won't slip out even if the screw loosens", "It's the only connector type rated for any current at all", "It never requires a matching wire gauge", "It replaces the need for any terminal block entirely"], answer: 0, explain: "The list states a ring terminal fully encircles the screw, so it won't slip out even if the screw loosens — unlike a spade terminal.", why: ["", "Both connector types carry rated current — that's not the distinguishing factor here", "The reliable-connection list explicitly requires matching gauge to the correct ferrule/lug for any connector", "Ring terminals are a type of connection made within a terminal block system, not a replacement for it"] },
              { q: "Per the classifying connectors list, what does a ferrule protect against?", choices: ["Stranded wire ends fraying inside a terminal block", "Overcurrent on the whole circuit", "Voltage spikes from switching", "Incorrect phase sequence"], answer: 0, explain: "The list states a ferrule protects stranded wire ends from fraying inside a terminal block.", why: ["", "Overcurrent protection is the job of devices like MCBs and fuses, not a ferrule", "Voltage spike protection isn't a ferrule's job", "Phase sequence is unrelated to what a ferrule protects against"] },
              { q: "Per the reliable-connection list, why should terminals be torqued to spec rather than tightened by feel?", choices: ["Under-tightened terminals loosen; over-tightened ones can crack", "Torque specs are purely a legal formality with no real effect", "Any tightness is fine as long as the wire doesn't visibly move", "Torque only matters for ring terminals, not other connector types"], answer: 0, explain: "The list's insight line states torque to spec — not by feel, and not by force — since under-tightening loosens and over-tightening can crack the terminal.", why: ["", "The list frames this as a real physical necessity, not a formality", "The list explicitly warns against relying on visual/feel judgment alone", "The reliable-connection habits apply broadly, not only to one connector type"] },
              { q: "In the intermittent-line-stoppage scenario, what did thermal-scanning the panel under load reveal?", choices: ["One terminal ran hot — never properly torqued during the original installation", "A breaker was undersized for the load", "The phase sequence had been wired incorrectly", "A ferrule was missing on a stranded wire"], answer: 0, explain: "The scenario concludes one terminal ran hot, having never been properly torqued during the original installation.", why: ["", "Breaker sizing isn't the fault identified in this specific scenario", "Phase sequence isn't the fault identified in this specific scenario", "A missing ferrule isn't the fault identified in this specific scenario"] }
            ] }
          ]
        },
        {
          id: "wiring-control-circuits",
          title: "Contactors, Ladder Logic & Lockout/Tagout",
          tag: "Control Circuits",
          blocks: [
            { type: "definition",
              plain: "A contactor is a heavy-duty relay that switches motor-level current, controlled by a much smaller control signal.",
              picture: "Like a large valve operated by a small lever — a light touch controls a powerful flow.",
              facts: "A motor starter adds overload protection to a contactor, tripping before sustained overcurrent causes damage." },
            { type: "numbered", title: "Reading a Ladder Diagram", items: [
              { title: "1. Rungs", desc: "Each horizontal line represents one independent piece of control logic" },
              { title: "2. Power rails", desc: "Vertical lines at each side supply power to every rung" },
              { title: "3. Contacts", desc: "Symbols representing switches, sensors, or other conditions" },
              { title: "4. Coils", desc: "The output of a rung — usually a relay, contactor, or indicator" }
            ]},
            { type: "tip", text: "Doing lockout/tagout right means isolating every energy source before work begins, locking the isolator so it physically cannot be re-energised, and tagging it clearly with your name and the reason." },
            { type: "warning", title: "Lockout/tagout warning signs", items: [
              "Working on equipment with no lock applied at all",
              "Assuming a switch position without verifying it",
              "Someone else's lock removed without their knowledge"
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what does a contactor do?", choices: ["Switches motor-level current, controlled by a much smaller control signal", "Directly senses temperature changes", "Converts AC to DC", "Stores energy for backup power"], answer: 0, explain: "The definition states a contactor is a heavy-duty relay that switches motor-level current from a much smaller control signal.", why: ["", "Temperature sensing describes a sensor, not a contactor", "AC-to-DC conversion is rectification, unrelated to a contactor's job", "Energy storage describes a battery or capacitor, not a contactor"] },
              { q: "Per the facts line, what does a motor starter add to a plain contactor?", choices: ["Overload protection, tripping before sustained overcurrent causes damage", "A ladder logic program", "A three-phase power supply", "An RS-485 communication port"], answer: 0, explain: "The facts line states a motor starter adds overload protection to a contactor.", why: ["", "Ladder logic belongs to the PLC module, not a motor starter's specific addition", "A motor starter doesn't generate its own power supply", "Communication ports aren't part of a motor starter's described function"] },
              { q: "Per the reading-a-ladder-diagram list, what do the power rails represent?", choices: ["Vertical lines at each side that supply power to every rung", "Symbols representing switches or sensor conditions", "The output of a rung, usually a relay or contactor", "Independent pieces of control logic drawn horizontally"], answer: 0, explain: "The list describes power rails as the vertical lines at each side, supplying power to every rung.", why: ["", "That describes contacts, not power rails", "That describes coils, not power rails", "That describes rungs, not power rails"] },
              { q: "Per the reading-a-ladder-diagram list, what do coils represent?", choices: ["The output of a rung, usually a relay, contactor, or indicator", "Independent pieces of control logic, drawn as horizontal lines", "Vertical lines supplying power to every rung", "Symbols representing switches or sensor conditions"], answer: 0, explain: "The list describes coils as the output of a rung, usually a relay, contactor, or indicator.", why: ["", "That describes rungs, not coils", "That describes power rails, not coils", "That describes contacts, not coils"] },
              { q: "Per the lockout/tagout guidance, why should you never trust that equipment is off unless you locked it yourself?", choices: ["Because someone else's lock could be removed without your knowledge, or a switch position could be wrongly assumed", "Because tags are purely decorative and carry no real meaning", "Because isolating energy sources is optional if the equipment looks off", "Because only one energy source ever needs isolating on any equipment"], answer: 0, explain: "The warning signs explicitly list someone else's lock being removed without their knowledge, and assuming a switch position without verifying it — both are why you must apply your own lock.", why: ["", "The guidance frames tags as meaningful — naming who applied the lock and why", "The guidance explicitly requires isolating EVERY energy source before work begins", "Equipment can have multiple energy sources, and all of them need isolating"] }
            ] }
          ]
        },
        {
          id: "wiring-earthing-panel",
          title: "Earthing & Reading a Control Panel",
          tag: "Earthing & Panels",
          blocks: [
            { type: "definition",
              plain: "Earthing provides a low-resistance path for fault current, so a protection device trips before anyone gets hurt.",
              picture: "Like a safety rail guiding a fall along a harmless path instead of straight to the ground.",
              facts: "A missing or poor earth connection can leave a metal chassis live, with no fuse ever tripping to warn you." },
            { type: "numbered", title: "Reading a Control Panel", items: [
              { title: "1. Breakers & fuses", desc: "Usually along the top or one side, feeding everything below" },
              { title: "2. Contactors & relays", desc: "Grouped together, each labelled with the circuit they switch" },
              { title: "3. Terminal strips", desc: "Along the bottom or edge, where field wiring connects in" },
              { title: "4. Wiring labels", desc: "Each wire numbered to match the panel's own drawing" }
            ]},
            { type: "check", questions: [
              { q: "What does earthing actually accomplish, per the definition?", choices: ["Provides a low-resistance path for fault current, so a protection device trips before anyone gets hurt", "Increases the voltage available to a circuit", "Eliminates the need for any circuit breaker", "Only matters for three-phase systems, never single-phase"], answer: 0, explain: "The definition states earthing provides a low-resistance path for fault current so protection devices trip safely, before a person is hurt.", why: ["", "Earthing is a safety path, not a voltage-boosting measure", "Earthing works alongside protection devices like breakers, not instead of them", "Nothing in this card restricts earthing's importance to three-phase systems only"] },
              { q: "Per the facts line, what can a missing or poor earth connection leave behind?", choices: ["A metal chassis live, with no fuse ever tripping to warn you", "A slightly slower breaker trip time only", "No real consequence, since fuses always catch it anyway", "A permanently blown fuse"], answer: 0, explain: "The facts line explicitly warns a missing or poor earth can leave a chassis live with no fuse tripping — a serious, silent shock hazard.", why: ["", "The facts line describes a much more serious risk than a minor timing delay", "The facts line explicitly says NO fuse ever trips to warn you — the opposite of being caught", "A blown fuse would actually indicate the protection DID work — the facts line describes the opposite failure mode"] },
              { q: "Per the reading-a-control-panel list, where are breakers and fuses usually located?", choices: ["Along the top or one side, feeding everything below", "Along the bottom or edge only", "Scattered randomly with no consistent placement", "Inside the terminal strips themselves"], answer: 0, explain: "The list states breakers and fuses are usually along the top or one side, feeding everything below.", why: ["", "That describes terminal strips' typical location, not breakers/fuses", "The list describes a consistent, predictable layout convention, not random placement", "Terminal strips and breakers are described as separate panel zones, not nested inside each other"] },
              { q: "Per the reading-a-control-panel list, what do wiring labels do?", choices: ["Number each wire to match the panel's own drawing", "Indicate a wire's voltage rating only", "Replace the need for any panel drawing entirely", "Only appear on three-phase wiring, never single-phase"], answer: 0, explain: "The list states wiring labels number each wire to match the panel's own drawing.", why: ["", "Voltage rating is a separate wire-marking concept from earlier in this module, not what these labels convey", "The list frames labels as matching to the drawing, not replacing the need for it", "Nothing in this list restricts wiring labels to three-phase circuits only"] },
              { q: "Per the reading-a-control-panel list, what makes a well-labelled panel valuable?", choices: ["It's the electrician's own schematic, readable at a glance", "It removes the need for any lockout/tagout procedure", "It only matters for panels with three-phase power", "It has no practical value beyond appearance"], answer: 0, explain: "The list's insight line states a well-labelled panel is the electrician's own schematic — a real, practical diagnostic aid.", why: ["", "Panel labelling and lockout/tagout are separate, both-necessary safety practices", "Nothing in this list restricts labelling's value to three-phase panels only", "The insight line explicitly frames good labelling as valuable, not merely cosmetic"] }
            ] }
          ]
        },
        {
          id: "wiring-practical-repair",
          title: "Practical & Repair Exercises",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Practical Exercise: Wire a Terminal Block Correctly", items: [
              { title: "1. Strip each wire", desc: "To the correct length" },
              { title: "2. Fit the correct ferrule", desc: "For the wire gauge" },
              { title: "3. Insert each wire fully", desc: "Into its terminal" },
              { title: "4. Torque every terminal", desc: "To its rated specification" },
              { title: "5. Apply strain relief", desc: "To each cable" },
              { title: "6. Confirm every connection", desc: "Visually and physically secure" }
            ]},
            { type: "definition",
              plain: "A breaker trips randomly, sometimes hours apart, with no clear pattern to the load at the time.",
              picture: "Like a smoke alarm that goes off at random times, not because of smoke, but because of a frayed wire inside it.",
              facts: "A partially damaged cable was intermittently leaking current to earth under vibration — inspecting cable condition along its full run, not just the terminals, found it." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "A partially damaged cable was intermittently leaking current to earth under vibration" },
              { title: "How to prevent it", desc: "Inspect cable condition along its full run, not just the terminals at either end" }
            ]},
            { type: "check", questions: [
              { q: "Per the practical exercise, what should be done immediately after fitting the correct ferrule?", choices: ["Insert each wire fully into its terminal", "Apply strain relief to each cable", "Torque every terminal to its rated specification", "Confirm every connection is secure"], answer: 0, explain: "Step 3 is inserting each wire fully into its terminal, right after step 2's ferrule fitting.", why: ["", "Strain relief is step 5, later in the sequence", "Torquing is step 4, after fully inserting the wire", "Confirming security is step 6, the final step"] },
              { q: "Per the practical exercise, what's the very last step?", choices: ["Visually and physically confirm every connection is secure", "Strip each wire to the correct length", "Fit the correct ferrule for the wire gauge", "Torque every terminal to its rated specification"], answer: 0, explain: "Step 6, the final step, is visually and physically confirming every connection is secure.", why: ["", "That's step 1, the first step, not the last", "That's step 2, early in the sequence, not the last step", "That's step 4, before strain relief and the final confirmation"] },
              { q: "In the nuisance-trip repair exercise, what was the actual root cause?", choices: ["A partially damaged cable was intermittently leaking current to earth under vibration", "A terminal was never torqued during installation", "The breaker was undersized for the load", "A phase had been dropped due to a blown fuse"], answer: 0, explain: "The scenario concludes a partially damaged cable was intermittently leaking current to earth under vibration.", why: ["", "The loose-terminal fault is from a different scenario (the intermittent line stoppage), not this one", "Breaker sizing isn't the cause identified in this specific scenario", "A dropped phase is the cause from the rough-running-motor scenario, not this one"] },
              { q: "Per the repair exercise's lesson, why should cable be inspected along its full run, not just at the terminals?", choices: ["Because damage can occur anywhere along the cable, not only at the connection points", "Because terminals never fail in industrial wiring", "Because full-run inspection replaces the need for terminal torque checks", "Because cable damage is always visible from the terminals alone"], answer: 0, explain: "The lesson explicitly states to inspect cable condition along its full run, not just the terminals — since the actual damage was mid-cable, invisible from the ends.", why: ["", "This module's other scenario (the intermittent line stoppage) shows terminals absolutely can fail", "Terminal torque and full-cable inspection are separate, both-necessary checks", "The scenario's whole point is that the damage was NOT visible just from the terminals"] },
              { q: "Per the practical exercise, what determines how much a terminal should be tightened?", choices: ["Its rated torque specification", "Whatever feels tight enough by hand", "The color of the wire being terminated", "The length of the stripped conductor"], answer: 0, explain: "Step 4 explicitly calls for torquing every terminal to its rated specification, not by feel.", why: ["", "The terminals card explicitly warns against tightening by feel", "Wire color relates to phase/neutral/earth identification, not torque specification", "Strip length is a separate step (step 1), unrelated to torque value"] }
            ] }
          ]
        },
        {
          id: "wiring-reference",
          title: "Quick Reference: Wire Gauge & Protection",
          tag: "Reference",
          blocks: [
            { type: "table", title: "A fast lookup for everyday wiring decisions", headers: ["Gauge (AWG)", "Typical Rating", "Common Use", "Typical Protection"], rows: [
              ["18", "~10A", "Control wiring", "1–5A fuse"],
              ["14", "~15A", "Lighting circuits", "15A breaker"],
              ["12", "~20A", "General power outlets", "20A breaker"],
              ["10", "~30A", "Small motor circuits", "30A breaker / overload"]
            ]},
            { type: "check", questions: [
              { q: "Per the reference table, what is 18 AWG typically used for?", choices: ["Control wiring", "Lighting circuits", "General power outlets", "Small motor circuits"], answer: 0, explain: "The table lists 18 AWG's common use as control wiring, with a typical rating of ~10A.", why: ["", "That's 14 AWG's common use, not 18's", "That's 12 AWG's common use, not 18's", "That's 10 AWG's common use, not 18's"] },
              { q: "Per the reference table, what typical protection is listed for 14 AWG wire?", choices: ["15A breaker", "1–5A fuse", "20A breaker", "30A breaker / overload"], answer: 0, explain: "The table lists 14 AWG's typical protection as a 15A breaker, matching its ~15A rating.", why: ["", "That's 18 AWG's typical protection, not 14's", "That's 12 AWG's typical protection, not 14's", "That's 10 AWG's typical protection, not 14's"] },
              { q: "Per the reference table, what is 12 AWG's typical rating?", choices: ["~20A", "~10A", "~15A", "~30A"], answer: 0, explain: "The table lists 12 AWG's typical rating as ~20A, used for general power outlets.", why: ["", "That's 18 AWG's typical rating, not 12's", "That's 14 AWG's typical rating, not 12's", "That's 10 AWG's typical rating, not 12's"] },
              { q: "Per the reference table, what is 10 AWG commonly used for?", choices: ["Small motor circuits", "Control wiring", "Lighting circuits", "General power outlets"], answer: 0, explain: "The table lists 10 AWG's common use as small motor circuits, with ~30A typical rating.", why: ["", "That's 18 AWG's common use, not 10's", "That's 14 AWG's common use, not 10's", "That's 12 AWG's common use, not 10's"] },
              { q: "Per the reference table, what typical protection is listed for 10 AWG wire?", choices: ["30A breaker / overload", "1–5A fuse", "15A breaker", "20A breaker"], answer: 0, explain: "The table lists 10 AWG's typical protection as a 30A breaker or overload device.", why: ["", "That's 18 AWG's typical protection, not 10's", "That's 14 AWG's typical protection, not 10's", "That's 12 AWG's typical protection, not 10's"] }
            ] }
          ]
        },
        {
          id: "wiring-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Explain three-phase power and read its wiring labels",
              "Select the correct wire gauge and protection for a load",
              "Make a reliable, correctly torqued terminal connection",
              "Read a basic ladder diagram and locate a contactor's role",
              "Apply lockout/tagout correctly before working on equipment"
            ]},
            { type: "golden", text: "Check the terminals before you suspect the component — most faults live there." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["Check the terminals before you suspect the component — most faults live there", "Always suspect the motor before checking its wiring", "Lockout/tagout is optional if the equipment looks switched off", "Wire gauge never matters as long as a breaker is fitted"], answer: 0, explain: "The golden rule explicitly states to check the terminals before suspecting the component, since most faults live there.", why: ["", "The rough-running-motor scenario shows wiring, not the motor itself, was the real cause", "The lockout/tagout warning signs explicitly warn against assuming equipment is off without your own lock", "The wire-selection card explicitly warns that undersized wire is a fire risk, regardless of breaker presence"] },
              { q: "Per the checklist, what should you be able to explain about three-phase power?", choices: ["Three-phase power and how to read its wiring labels", "How to program a PLC's ladder logic", "How to calibrate a drifting sensor", "How to terminate an RS-485 network"], answer: 0, explain: "The checklist names explaining three-phase power and reading its wiring labels as a core skill.", why: ["", "PLC programming belongs to the PLC & Automation module, not this one", "Sensor calibration belongs to the Sensors & Actuators module, not this one", "RS-485 termination belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, what should you be able to select for a given load?", choices: ["The correct wire gauge and protection", "The correct motor driver IC", "The correct PLC scan time", "The correct Modbus address"], answer: 0, explain: "The checklist names selecting the correct wire gauge and protection for a load as a core skill.", why: ["", "Motor driver selection belongs to the Motors & Drives module, not this one", "PLC scan time belongs to the PLC & Automation module, not this one", "Modbus addressing belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, what kind of terminal connection should you be able to make?", choices: ["A reliable, correctly torqued connection", "A connection with no ferrule, ever", "A connection tightened only by feel", "A connection that skips strain relief"], answer: 0, explain: "The checklist names making a reliable, correctly torqued terminal connection as a core skill.", why: ["", "The connectors card explicitly names the ferrule as protecting stranded wire ends — it isn't to be skipped", "The reliable-connection list explicitly calls for torquing to spec, not by feel", "The reliable-connection list explicitly includes strain relief as a required step"] },
              { q: "Per the checklist, what should you be able to apply correctly before working on equipment?", choices: ["Lockout/tagout", "A ladder logic rewrite", "A phase sequence reversal", "A conduit fill recalculation"], answer: 0, explain: "The checklist names applying lockout/tagout correctly before working on equipment as this module's final skill.", why: ["", "Ladder logic rewriting isn't the safety procedure named in this checklist item", "Phase sequence reversal isn't a standard pre-work safety procedure named here", "Conduit fill recalculation isn't the safety procedure named in this checklist item"] }
            ] }
          ]
        }
      ]
    },

    // ============================================================ MODULE 12: PLC & AUTOMATION
    {
      id: "plc-automation",
      code: "MOD·12",
      icon: "🤖",
      color: "#4fa8ff",
      title: "PLC & Automation",
      subtitle: "The brain that replaced a wall of relays — and how to keep it running.",
      cards: [
        {
          id: "plc-overview",
          title: "The Five Skills of PLC & Automation",
          tag: "Overview",
          blocks: [
            { type: "intro", text: "Have you ever wondered how a factory line repeats the exact same sequence perfectly, thousands of times a day? That's a PLC quietly running the same logic, every single cycle — by the end of this module, you'll know how." },
            { type: "table", title: "From a wall of relays to a single programmable brain", headers: ["Skill", "What It Covers", "Key Idea"], rows: [
              ["The PLC", "A ruggedised computer for control", "Scan cycle"],
              ["Ladder Logic", "Control logic drawn like relay circuits", "Rungs"],
              ["I/O Modules", "How the PLC senses and switches", "Source / sink"],
              ["HMI", "The operator's window into the process", "Touchscreen"],
              ["Troubleshooting", "Isolating logic, I/O, or wiring", "Systematic"]
            ]},
            { type: "check", questions: [
              { q: "Per the table, what key idea is listed for the PLC itself?", choices: ["Scan cycle", "Rungs", "Source / sink", "Touchscreen"], answer: 0, explain: "The table lists 'Scan cycle' as the key idea for the PLC — a ruggedised computer for control.", why: ["", "Rungs is the key idea for Ladder Logic, not the PLC", "Source / sink is the key idea for I/O Modules, not the PLC", "Touchscreen is the key idea for HMI, not the PLC"] },
              { q: "Per the table, what does the Ladder Logic skill cover?", choices: ["Control logic drawn like relay circuits", "A ruggedised computer for control", "How the PLC senses and switches", "The operator's window into the process"], answer: 0, explain: "The table describes Ladder Logic as control logic drawn like relay circuits, with 'Rungs' as the key idea.", why: ["", "That describes the PLC itself, not Ladder Logic", "That describes I/O Modules, not Ladder Logic", "That describes HMI, not Ladder Logic"] },
              { q: "Per the table, what key idea is listed for I/O Modules?", choices: ["Source / sink", "Scan cycle", "Rungs", "Systematic"], answer: 0, explain: "The table lists 'Source / sink' as the key idea for I/O Modules — how the PLC senses and switches.", why: ["", "Scan cycle is the key idea for the PLC itself, not I/O Modules", "Rungs is the key idea for Ladder Logic, not I/O Modules", "Systematic is the key idea for Troubleshooting, not I/O Modules"] },
              { q: "Per the table, what does the HMI skill cover?", choices: ["The operator's window into the process", "Control logic drawn like relay circuits", "How the PLC senses and switches", "Isolating logic, I/O, or wiring"], answer: 0, explain: "The table describes HMI as the operator's window into the process, with 'Touchscreen' as the key idea.", why: ["", "That describes Ladder Logic, not HMI", "That describes I/O Modules, not HMI", "That describes Troubleshooting, not HMI"] },
              { q: "Per the table, what does the Troubleshooting skill cover?", choices: ["Isolating logic, I/O, or wiring", "A ruggedised computer for control", "Control logic drawn like relay circuits", "The operator's window into the process"], answer: 0, explain: "The table describes Troubleshooting as isolating logic, I/O, or wiring, with 'Systematic' as the key idea.", why: ["", "That describes the PLC itself, not Troubleshooting", "That describes Ladder Logic, not Troubleshooting", "That describes HMI, not Troubleshooting"] }
            ] }
          ]
        },
        {
          id: "plc-fundamentals",
          title: "What Is a PLC?",
          tag: "Fundamentals",
          blocks: [
            { type: "definition",
              plain: "A PLC (Programmable Logic Controller) is an industrial computer that reads inputs, runs logic, and drives outputs.",
              picture: "Like Module 11's wall of contactors and relays, replaced by one programmable brain doing the same job.",
              facts: "It repeats its scan cycle continuously — reading inputs, running logic, updating outputs — many times a second." },
            { type: "numbered", title: "Inside a PLC", items: [
              { title: "1. CPU module", desc: "Runs the program logic and manages the whole scan cycle" },
              { title: "2. Power supply module", desc: "Provides clean, regulated power to the whole PLC rack" },
              { title: "3. Input modules", desc: "Read the state of sensors, switches, and field devices" },
              { title: "4. Output modules", desc: "Drive relays, contactors, indicators, and other field devices" }
            ]},
            { type: "numbered", title: "Specifications That Matter", items: [
              { title: "I/O count", desc: "How many field inputs and outputs the PLC can actually handle" },
              { title: "Scan time", desc: "How quickly it completes one full read-logic-write cycle" },
              { title: "Memory", desc: "How large a program and how much data it can hold" },
              { title: "Communication protocols", desc: "Which networks it can talk to — Ethernet/IP, Modbus, and others" }
            ]},
            { type: "check", questions: [
              { q: "What three things does a PLC do, per the definition?", choices: ["Reads inputs, runs logic, and drives outputs", "Only reads inputs, with no logic or output capability", "Only stores data, with no control function", "Only communicates over a network, with no I/O"], answer: 0, explain: "The definition states a PLC reads inputs, runs logic, and drives outputs — a complete industrial control cycle.", why: ["", "The definition explicitly includes logic and output-driving, not just input reading", "The definition explicitly describes a control function, not just data storage", "The definition explicitly names I/O handling as core to what a PLC does"] },
              { q: "Per the facts line, how often does a PLC repeat its scan cycle?", choices: ["Continuously, many times a second", "Only once, at power-up", "Only when an operator manually triggers it", "Once per day, on a fixed schedule"], answer: 0, explain: "The facts line states the PLC repeats its scan cycle continuously, many times a second.", why: ["", "The facts line explicitly says continuously, not just once at power-up", "Nothing in this card describes a manual-trigger-only scan cycle", "The facts line explicitly says many times a second, not once a day"] },
              { q: "Per the 'Inside a PLC' list, what does the CPU module do?", choices: ["Runs the program logic and manages the whole scan cycle", "Reads the state of sensors and field devices", "Drives relays and contactors", "Provides clean, regulated power to the rack"], answer: 0, explain: "The list states the CPU module runs the program logic and manages the whole scan cycle.", why: ["", "That's the input modules' job, not the CPU module's", "That's the output modules' job, not the CPU module's", "That's the power supply module's job, not the CPU module's"] },
              { q: "Per the 'Inside a PLC' list, what do input modules do?", choices: ["Read the state of sensors, switches, and field devices", "Drive relays, contactors, and indicators", "Run the program logic", "Supply regulated power to the rack"], answer: 0, explain: "The list states input modules read the state of sensors, switches, and field devices.", why: ["", "That's the output modules' job, not the input modules'", "That's the CPU module's job, not the input modules'", "That's the power supply module's job, not the input modules'"] },
              { q: "Per the specifications list, what does scan time determine?", choices: ["How quickly the PLC completes one full read-logic-write cycle", "How many field inputs and outputs it can handle", "How large a program it can hold", "Which communication protocols it supports"], answer: 0, explain: "The specs list states scan time is how quickly the PLC completes one full read-logic-write cycle — deciding how fast it reacts to the real world.", why: ["", "That's the I/O count spec, not scan time", "That's the memory spec, not scan time", "That's the communication protocols spec, not scan time"] }
            ] }
          ]
        },
        {
          id: "plc-vs-relay",
          title: "PLC vs Relay Logic",
          tag: "PLC vs Relay",
          blocks: [
            { type: "table", title: "Same control job, two very different ways to build it", headers: ["Aspect", "Relay Logic (Module 11)", "PLC Logic"], rows: [
              ["Changing the logic", "Fixed wiring — changing logic means rewiring", "Logic lives in software — changes without rewiring"],
              ["Scale", "Easy to understand, one rung at a time", "One controller can replace a whole relay panel"],
              ["Timing", "No scan cycle — reacts instantly, always", "Runs on a scan cycle, not instantly continuous"]
            ]},
            { type: "definition",
              plain: "An automated line runs its sequence in reverse order, exactly backwards, every single cycle.",
              picture: "Like reading a to-do list from the bottom up — every task still gets done, just in the wrong order.",
              facts: "Checking the input wiring against the program's addressing before suspecting the logic itself revealed two sensor inputs had been wired to swapped terminals — the program had been correct all along." },
            { type: "numbered", title: "Diagnosing the reversed sequence", items: [
              { title: "What you do", desc: "Check the input wiring against the program's addressing before suspecting the logic itself" },
              { title: "What it tells you", desc: "Two sensor inputs had been wired to swapped terminals — the program had been correct all along" }
            ]},
            { type: "check", questions: [
              { q: "Per the comparison table, what's the key advantage of PLC logic over relay logic when the control sequence needs to change?", choices: ["Logic lives in software, so it can change without rewiring", "PLC logic reacts instantly, with no scan cycle at all", "PLC logic is always easier to understand, one rung at a time", "PLC logic requires no I/O wiring whatsoever"], answer: 0, explain: "The table states PLC logic lives in software, changing without the rewiring a fixed relay panel would require.", why: ["", "The table explicitly says PLC logic runs on a scan cycle, not instant continuous reaction — that's relay logic's advantage", "The table lists 'easy to understand, one rung at a time' under relay logic, not as a PLC-specific edge", "A PLC still requires field I/O wiring — the table never claims otherwise"] },
              { q: "Per the comparison table, what's relay logic's advantage in timing?", choices: ["No scan cycle — it reacts instantly, always", "It can be reprogrammed without any rewiring", "It replaces a whole relay panel with one controller", "It supports far more I/O points than a PLC"], answer: 0, explain: "The table lists relay logic's timing advantage as reacting instantly, always, with no scan cycle delay.", why: ["", "That's PLC logic's advantage (software-based changes), not relay logic's", "That describes what a PLC can do, not relay logic", "I/O point count isn't the comparison made in this specific table row"] },
              { q: "Per the insight line, what did moving logic into software actually change?", choices: ["It just moved the logic into software — the PLC didn't remove the underlying control logic itself", "It eliminated the need for any control logic at all", "It made wiring completely unnecessary", "It removed the concept of inputs and outputs entirely"], answer: 0, explain: "The insight line states the PLC didn't remove the logic — it just moved it into software, still performing the same fundamental control job.", why: ["", "Control logic is still very much present — it's just implemented differently", "Field wiring to I/O modules is still required, as covered elsewhere in this module", "PLCs still fundamentally read inputs and drive outputs"] },
              { q: "In the reversed-sequence scenario, what was the actual cause of the line running backwards?", choices: ["Two sensor inputs had been wired to swapped terminals — the program had been correct all along", "The ladder program's logic was written in the wrong order", "The PLC's scan cycle was running too slowly", "The HMI was displaying the wrong sequence step"], answer: 0, explain: "The scenario concludes two sensor inputs were wired to swapped terminals, and the program itself had been correct all along.", why: ["", "The scenario explicitly concludes the program was correct — it wasn't a logic-writing error", "Scan cycle speed isn't the fault identified in this specific scenario", "The HMI display isn't the fault identified in this specific scenario"] },
              { q: "Per the reversed-sequence scenario's lesson, what should be checked before blaming the program?", choices: ["The wiring against the addressing", "The PLC's memory capacity", "The communication protocol in use", "The HMI's touchscreen calibration"], answer: 0, explain: "The scenario's insight line explicitly states to check the wiring against the addressing before blaming the program.", why: ["", "Memory capacity isn't the check called for in this scenario", "Communication protocol isn't the check called for in this scenario", "HMI touchscreen calibration isn't the check called for in this scenario"] }
            ] }
          ]
        },
        {
          id: "plc-ladder-logic",
          title: "Reading Ladder Logic",
          tag: "Ladder Logic",
          blocks: [
            { type: "numbered", title: "Reading Ladder Logic", items: [
              { title: "1. Rungs execute top to bottom", desc: "Each scan, the PLC evaluates every rung in order" },
              { title: "2. Normally open contact", desc: "Passes logic 'true' only when its condition is active" },
              { title: "3. Normally closed contact", desc: "Passes logic 'true' only when its condition is inactive" },
              { title: "4. The scan cycle repeats", desc: "Outputs update at the end of each full pass through the program" }
            ]},
            { type: "numbered", title: "Common Ladder Logic Elements", items: [
              { title: "1. Timer", desc: "Delays an action, or times how long a condition has been true" },
              { title: "2. Counter", desc: "Tracks how many times an event has occurred" },
              { title: "3. Latch / unlatch", desc: "Holds an output on until a separate condition turns it off" },
              { title: "4. Comparison block", desc: "Compares two values — greater than, equal to, and similar checks" }
            ]},
            { type: "definition",
              plain: "A conveyor motor never starts, even though the start button is confirmed to be working correctly.",
              picture: "Like a car that won't start even with a good key — something else in the ignition chain is blocking it.",
              facts: "Opening the ladder program and checking every contact feeding the motor's output coil revealed an interlock contact from a separate safety sensor was open, blocking the rung from ever completing." },
            { type: "numbered", title: "Tracing the fault through the rung", items: [
              { title: "What you do", desc: "Open the ladder program and check every contact feeding the motor's output coil" },
              { title: "What it tells you", desc: "An interlock contact from a separate safety sensor was open, blocking the rung from ever completing" }
            ]},
            { type: "check", questions: [
              { q: "Per the reading-ladder-logic list, when does a normally open contact pass logic 'true'?", choices: ["Only when its condition is active", "Only when its condition is inactive", "Always, regardless of condition", "Never — it always passes 'false'"], answer: 0, explain: "The list states a normally open contact passes 'true' only when its condition is active.", why: ["", "That describes a normally closed contact, the opposite behavior", "The list ties this contact's state directly to its condition — it isn't always true", "The list explicitly says it CAN pass 'true', under the right condition"] },
              { q: "Per the reading-ladder-logic list, when does a normally closed contact pass logic 'true'?", choices: ["Only when its condition is inactive", "Only when its condition is active", "Always, regardless of condition", "Never — it always passes 'false'"], answer: 0, explain: "The list states a normally closed contact passes 'true' only when its condition is inactive — the reverse of a normally open contact.", why: ["", "That describes a normally open contact, the opposite behavior", "The list ties this contact's state directly to its condition — it isn't always true", "The list explicitly says it CAN pass 'true', under the right condition"] },
              { q: "Per the common ladder elements list, what does a latch/unlatch pair do?", choices: ["Holds an output on until a separate condition turns it off", "Compares two numeric values", "Tracks how many times an event has occurred", "Delays an action for a fixed time"], answer: 0, explain: "The list states latch/unlatch holds an output on until a separate condition turns it off.", why: ["", "That's the comparison block's job, not latch/unlatch's", "That's the counter's job, not latch/unlatch's", "That's the timer's job, not latch/unlatch's"] },
              { q: "Per the common ladder elements list, what does a counter do?", choices: ["Tracks how many times an event has occurred", "Delays an action or times a condition's duration", "Compares two values for greater-than or equal-to", "Holds an output on until unlatched"], answer: 0, explain: "The list states a counter tracks how many times an event has occurred.", why: ["", "That's the timer's job, not the counter's", "That's the comparison block's job, not the counter's", "That's the latch/unlatch's job, not the counter's"] },
              { q: "In the conveyor-motor scenario, what did checking every contact feeding the motor's output coil reveal?", choices: ["An interlock contact from a separate safety sensor was open, blocking the rung from ever completing", "The start button itself was faulty", "The motor's output coil had failed", "The PLC's scan cycle had stopped running"], answer: 0, explain: "The scenario concludes an interlock contact from a separate safety sensor was open, blocking the rung from ever completing — even though the start button worked fine.", why: ["", "The scenario explicitly confirms the start button was working correctly", "The output coil itself isn't identified as the fault — a blocking contact upstream was", "Nothing in this scenario suggests the scan cycle had stopped"] }
            ] }
          ]
        },
        {
          id: "plc-programming-mistakes",
          title: "Common Programming Mistakes",
          tag: "Programming",
          blocks: [
            { type: "tip", text: "Good practice means commenting every rung with what it actually does, testing each new rung in isolation before combining logic, and keeping addressing consistent with the wiring diagram." },
            { type: "warning", title: "Common ladder programming mistakes", items: [
              "Forgetting a reset condition on a latch",
              "Two rungs unintentionally fighting over one output",
              "Addressing that doesn't match the physical wiring"
            ]},
            { type: "check", questions: [
              { q: "Per the good practice guidance, why should each new rung be tested in isolation?", choices: ["Before combining logic, so a mistake is caught in just that rung, not lost in a larger program", "Because rungs can never be tested once combined with others", "Because isolated testing is required by law in every PLC installation", "Because it removes the need for any addressing consistency"], answer: 0, explain: "The guidance recommends testing each new rung in isolation before combining logic — catching mistakes early, in a smaller scope.", why: ["", "Nothing in this card says combined rungs can't be tested — isolation testing is simply the recommended first step", "No legal requirement is mentioned anywhere in this card", "Addressing consistency remains a separate, still-necessary good practice"] },
              { q: "Per the good practice guidance, what should comments on a rung do?", choices: ["Describe what the rung actually does", "Only ever describe the PLC's model number", "Replace the need for testing entirely", "Only appear on rungs with a timer or counter"], answer: 0, explain: "The guidance states rungs should be commented with what they actually do — the insight line adds that an uncommented rung is a mystery for the next technician.", why: ["", "Model number documentation isn't the purpose of rung comments here", "Comments and testing are separate, complementary good practices, not substitutes", "The guidance applies to commenting rungs generally, not only ones with specific elements"] },
              { q: "Per the common mistakes list, what happens if a latch is missing its reset condition?", choices: ["This is listed as a common programming mistake — the output would never turn off as intended", "Nothing — latches don't require a reset condition at all", "The PLC automatically supplies a default reset", "This only matters for counters, not latches"], answer: 0, explain: "The list explicitly names forgetting a reset condition on a latch as a common mistake, which would leave a latched output stuck on.", why: ["", "The list explicitly frames this as a real, common mistake worth avoiding", "Nothing in this card describes an automatic default reset being supplied", "This mistake is specifically about latches, per this list"] },
              { q: "Per the common mistakes list, what happens when two rungs unintentionally fight over one output?", choices: ["This is listed as a common programming mistake, causing unpredictable output behavior", "This is always intentional and never a mistake", "The PLC automatically resolves the conflict correctly every time", "This can only happen with timer elements, never plain contacts"], answer: 0, explain: "The list explicitly names two rungs fighting over one output as a common programming mistake.", why: ["", "The list frames this specifically as a mistake, not intentional design", "The list explicitly presents this as an unresolved, real problem worth avoiding, not something the PLC fixes automatically", "This mistake can occur with any two rungs sharing an output coil, not just timer-based ones"] },
              { q: "Per the common mistakes list, why does mismatched addressing cause real problems?", choices: ["It doesn't match the physical wiring, so the program can end up controlling or reading the wrong point entirely", "Addressing mismatches are purely cosmetic and have no functional effect", "Mismatched addressing only affects the HMI display, never the actual control logic", "The PLC automatically corrects any addressing mismatch on its own"], answer: 0, explain: "The list explicitly names addressing that doesn't match the physical wiring as a common mistake — exactly the type of error traced in the reversed-sequence scenario earlier in this module.", why: ["", "The list frames this as a real functional problem, not cosmetic", "This mismatch affects the actual control logic's connection to the physical world, not just a display", "Nothing in this card describes automatic correction of addressing mismatches"] }
            ] }
          ]
        },
        {
          id: "plc-io",
          title: "I/O Modules & Sourcing vs Sinking",
          tag: "I/O",
          blocks: [
            { type: "definition",
              plain: "Input modules convert field signals into data the CPU can read; output modules convert decisions back into signals.",
              picture: "Like the PLC's eyes and hands — inputs let it sense, outputs let it act.",
              facts: "A perfect program can still fail completely if the I/O wiring underneath it is wrong." },
            { type: "table", title: "Sourcing vs sinking I/O", headers: ["Aspect", "Sourcing (PNP)", "Sinking (NPN)"], rows: [
              ["Voltage supply", "The module supplies positive voltage to the device", "The device switches the connection to ground"],
              ["Common use", "Common in many modern sensor designs", "Still very common on older field equipment"],
              ["Current direction", "Current flows out of the PLC module", "Current flows into the PLC module"]
            ]},
            { type: "numbered", title: "Wiring a PLC Input or Output", items: [
              { title: "1. Confirm sourcing or sinking", desc: "Match the field device's type to the module's wiring style" },
              { title: "2. Confirm voltage level", desc: "Field devices commonly run at 24V DC — confirm before connecting" },
              { title: "3. Land the wire correctly", desc: "Match the terminal number to the program's address exactly" },
              { title: "4. Test before full power-up", desc: "Confirm one point works before trusting the whole system" }
            ]},
            { type: "tip", text: "Healthy I/O shows an input status LED matching the actual field device state, an output LED that lights exactly when the rung commands it, and field voltage measuring correctly at the terminal." },
            { type: "warning", title: "I/O fault signs", items: [
              "Input LED never changes, regardless of the field device",
              "Output LED lights, but the field device never responds",
              "Voltage present at the module, but not at the device"
            ]},
            { type: "check", questions: [
              { q: "Per the facts line, why can a 'perfect' ladder program still fail completely?", choices: ["If the I/O wiring underneath it is wrong, the program's correct logic never reaches the real world correctly", "PLCs cannot run programs that have ever been tested in isolation", "Perfect programs never actually exist in practice", "Scan time always causes perfect programs to fail eventually"], answer: 0, explain: "The facts line states a perfect program can still fail completely if the I/O wiring underneath it is wrong — logic alone isn't enough.", why: ["", "Isolation testing is explicitly recommended good practice, not a disqualifier", "The facts line doesn't make a claim about whether perfect programs exist — it's about wiring dependency", "Scan time isn't the failure mode described in this facts line"] },
              { q: "Per the sourcing vs sinking table, how does sourcing (PNP) supply voltage?", choices: ["The module supplies positive voltage to the device", "The device switches the connection to ground", "Current always flows into the PLC module", "It requires no common ground reference at all"], answer: 0, explain: "The table states sourcing (PNP) means the module supplies positive voltage to the device, with current flowing out of the module.", why: ["", "That describes sinking (NPN), not sourcing", "The table states current flows OUT of the module for sourcing, not into it", "This card doesn't claim sourcing eliminates the need for a common ground"] },
              { q: "Per the sourcing vs sinking table, how does sinking (NPN) work?", choices: ["The device switches the connection to ground, with current flowing into the PLC module", "The module supplies positive voltage to the device", "It's exclusively used in brand-new sensor designs, never older equipment", "Current flows out of the PLC module toward the device"], answer: 0, explain: "The table states sinking (NPN) means the device switches the connection to ground, with current flowing into the PLC module.", why: ["", "That describes sourcing (PNP), not sinking", "The table specifically notes sinking is still very common on OLDER field equipment", "The table states current flows INTO the module for sinking, not out of it"] },
              { q: "Per the wiring-a-PLC-I/O list, what voltage do field devices commonly run at?", choices: ["24V DC", "5V DC", "120V AC", "3.3V DC"], answer: 0, explain: "The list states field devices commonly run at 24V DC, and this should be confirmed before connecting.", why: ["", "5V DC isn't the voltage this list specifically names for field devices", "120V AC isn't the voltage this list specifically names for field devices", "3.3V DC isn't the voltage this list specifically names for field devices"] },
              { q: "Per the I/O fault signs, what does it mean if the output LED lights but the field device never responds?", choices: ["This is listed as a fault sign — the signal path from the module to the device is broken somewhere", "This is normal, healthy operation", "It means the PLC's scan cycle has stopped entirely", "It means the field device is definitely destroyed beyond repair"], answer: 0, explain: "The fault signs explicitly list an output LED lighting with no field device response as a sign that the signal stops somewhere between the module and the device.", why: ["", "This is explicitly listed as a fault sign, not healthy behavior", "A stopped scan cycle would affect the whole PLC, not just one output's field response", "The device may simply be disconnected or miswired — this fault sign alone doesn't confirm destruction"] }
            ] }
          ]
        },
        {
          id: "plc-hmi-sequences",
          title: "HMI, Sequences & Systematic Troubleshooting",
          tag: "HMI & Sequences",
          blocks: [
            { type: "definition",
              plain: "An HMI (Human-Machine Interface) is a screen that displays process data and lets an operator control the system.",
              picture: "Like a dashboard — showing what's happening inside, without needing to open the program itself.",
              facts: "It displays PLC data — it doesn't run the control logic itself, and rarely causes a logic fault on its own." },
            { type: "numbered", title: "Building an Automation Sequence", items: [
              { title: "1. Define the steps", desc: "Break the process into clear, ordered stages" },
              { title: "2. Add conditions", desc: "Each step only advances once its condition is truly met" },
              { title: "3. Add timers where needed", desc: "Some steps need to run for a set duration, not just a condition" },
              { title: "4. Add fault handling", desc: "Decide what the sequence does when something goes wrong" }
            ]},
            { type: "numbered", title: "Systematic PLC Troubleshooting", items: [
              { title: "1. Check I/O status LEDs", desc: "Confirms whether the PLC even sees the correct field state" },
              { title: "2. Check field wiring", desc: "Confirms the physical connection matches what the LED shows" },
              { title: "3. Check the program logic", desc: "Confirms the rung is doing what you expect with that input" },
              { title: "4. Check for fault codes", desc: "Many PLCs report their own diagnostic codes directly" }
            ]},
            { type: "check", questions: [
              { q: "Per the definition, what does an HMI actually do?", choices: ["Displays process data and lets an operator control the system, without running the control logic itself", "Runs the PLC's ladder logic instead of the CPU module", "Physically switches field devices directly, bypassing the PLC", "Stores the PLC's entire program permanently"], answer: 0, explain: "The definition states an HMI displays process data and lets an operator control the system — it doesn't run the control logic itself.", why: ["", "The facts line explicitly says the HMI doesn't run the control logic — the CPU module does", "The HMI is a display/control interface, not a direct field-device switch bypassing the PLC", "Program storage is the CPU/memory's job, not the HMI's, per this card"] },
              { q: "Per the facts line, why does an HMI rarely cause a control logic fault on its own?", choices: ["It displays PLC data — it doesn't run the control logic itself", "It has no connection to the PLC whatsoever", "It only works when the PLC is powered off", "HMIs are physically incapable of malfunctioning"], answer: 0, explain: "The facts line explains the HMI just displays PLC data without running the logic itself, so a fault there is unlikely to be a logic fault.", why: ["", "The HMI is explicitly connected to the PLC to display its data — it isn't disconnected", "Nothing in this card suggests the HMI only works with the PLC off", "The card doesn't claim HMIs never malfunction — it specifically addresses control-logic faults"] },
              { q: "Per the building-an-automation-sequence list, what happens if fault handling is left out?", choices: ["A sequence without fault handling eventually gets stuck", "Nothing — fault handling is entirely optional and has no consequence", "The PLC automatically adds fault handling by default", "Only the HMI is affected, never the actual sequence"], answer: 0, explain: "The list's insight line states a sequence without fault handling eventually gets stuck — it's a necessary part of a robust sequence.", why: ["", "The insight line explicitly states there IS a real consequence", "Nothing in this card describes the PLC auto-adding fault handling", "The insight line describes the sequence itself getting stuck, not just the HMI"] },
              { q: "Per the systematic PLC troubleshooting list, what should be checked first?", choices: ["I/O status LEDs", "The program logic", "Fault codes", "Field wiring"], answer: 0, explain: "Step 1 of systematic PLC troubleshooting is checking I/O status LEDs, working field-inward.", why: ["", "Program logic is checked third, per step 3, not first", "Fault codes are checked fourth, per step 4, not first", "Field wiring is checked second, per step 2, not first"] },
              { q: "Per the systematic PLC troubleshooting list, what comes after checking I/O status LEDs?", choices: ["Field wiring", "The program logic", "Fault codes", "The HMI's touchscreen calibration"], answer: 0, explain: "Step 2, right after status LEDs, is checking field wiring — confirming the physical connection matches what the LED shows.", why: ["", "Program logic is step 3, after field wiring, not immediately after LEDs", "Fault codes are step 4, the last step, not immediately after LEDs", "HMI calibration isn't part of this troubleshooting sequence at all"] }
            ] }
          ]
        },
        {
          id: "plc-panel-practical",
          title: "Reading a Panel & Practical Exercise",
          tag: "Practical",
          blocks: [
            { type: "numbered", title: "Reading a Real PLC Panel", items: [
              { title: "1. Status LEDs", desc: "Power, run, and fault indicators, usually on the CPU module" },
              { title: "2. Terminal labelling", desc: "Each I/O point numbered to match the program's addressing" },
              { title: "3. Module slots", desc: "Input, output, and communication modules, each in a defined slot" },
              { title: "4. Communication ports", desc: "Ethernet or serial ports linking the PLC to the HMI and network" }
            ]},
            { type: "numbered", title: "Practical Exercise: Trace an I/O Fault on a PLC", items: [
              { title: "1. Identify the input module status LED", desc: "For a given point" },
              { title: "2. Confirm field voltage", desc: "At the corresponding terminal" },
              { title: "3. Trace the address", desc: "Into the ladder program" },
              { title: "4. Identify every rung condition", desc: "Feeding the target output" },
              { title: "5. Confirm the output LED", desc: "Matches the rung's expected state" },
              { title: "6. Record where", desc: "The actual and expected states first diverge" }
            ]},
            { type: "check", questions: [
              { q: "Per the reading-a-panel list, where are status LEDs usually found?", choices: ["On the CPU module", "Only on the HMI screen", "Only on the power supply module", "Scattered randomly across every module"], answer: 0, explain: "The list states status LEDs — power, run, and fault indicators — are usually on the CPU module.", why: ["", "The HMI is a separate display device, not where these PLC-rack status LEDs live", "The list specifically names the CPU module, not the power supply module, for these LEDs", "The list describes a consistent, predictable location, not random placement"] },
              { q: "Per the reading-a-panel list, what does terminal labelling do?", choices: ["Numbers each I/O point to match the program's addressing", "Indicates the panel's manufacturing date", "Replaces the need for any status LEDs", "Only applies to communication ports, not I/O terminals"], answer: 0, explain: "The list states terminal labelling numbers each I/O point to match the program's addressing.", why: ["", "Manufacturing date isn't what terminal labelling conveys per this list", "Labelling and status LEDs are separate, complementary panel features", "The list specifically ties labelling to I/O points, not just communication ports"] },
              { q: "Per the practical exercise, what should be traced right after confirming field voltage at the terminal?", choices: ["The address into the ladder program", "Every rung condition feeding the output", "The output LED's match to the rung", "Where actual and expected states diverge"], answer: 0, explain: "Step 3, right after confirming field voltage (step 2), is tracing the address into the ladder program.", why: ["", "That's step 4, after tracing the address", "That's step 5, later in the sequence", "That's step 6, the final recording step"] },
              { q: "Per the practical exercise, what is the final recorded outcome of the exercise?", choices: ["Where the actual and expected states first diverge", "The input module's status LED color", "The PLC's total memory capacity", "The communication protocol in use"], answer: 0, explain: "Step 6, the final step, is recording where the actual and expected states first diverge — pinpointing exactly where the fault lives.", why: ["", "LED color isn't the specific recorded outcome of this exercise", "Memory capacity isn't part of this I/O fault-tracing exercise", "Communication protocol isn't part of this I/O fault-tracing exercise"] },
              { q: "Per the practical exercise's insight, in what order should you work when tracing an I/O fault?", choices: ["Field to logic, not logic to field", "Logic to field, not field to logic", "Randomly, in whatever order is convenient", "Only ever from the HMI screen, never the physical panel"], answer: 0, explain: "The exercise's insight line explicitly states to work field to logic, not logic to field.", why: ["", "This reverses the exercise's explicitly stated order", "The exercise gives a specific, deliberate order, not a random one", "The exercise's steps work from physical field points inward, not from the HMI alone"] }
            ] }
          ]
        },
        {
          id: "plc-repair-reference",
          title: "Repair Exercise & Ladder Symbol Reference",
          tag: "Repair & Reference",
          blocks: [
            { type: "definition",
              plain: "An automated sequence always halts at step four, every single cycle, without exception.",
              picture: "Like a kitchen timer set for an hour when the recipe only needed ten minutes — the step just never finishes on time.",
              facts: "Checking timer and counter presets specifically when a sequence stalls at a consistent step revealed a timer's preset value was left at its default, far longer than the process ever needed." },
            { type: "numbered", title: "What went wrong, and how to prevent it", items: [
              { title: "What went wrong", desc: "A timer's preset value was left at its default, far longer than the process ever needed" },
              { title: "How to prevent it", desc: "Check timer and counter presets specifically when a sequence stalls at a consistent step" }
            ]},
            { type: "table", title: "The symbols you'll read in almost every program", headers: ["Symbol", "Name", "Means", "Acts Like"], rows: [
              ["—| |—", "Normally open", "True when condition is active", "A switch that closes"],
              ["—|/|—", "Normally closed", "True when condition is inactive", "A switch that opens"],
              ["( )", "Output coil", "Turns a physical output on", "A relay coil"],
              ["(L) / (U)", "Latch / unlatch", "Holds an output until reset", "A self-holding relay"]
            ]},
            { type: "check", questions: [
              { q: "In the stuck-sequence repair exercise, what was the actual cause of the sequence stalling at the same step every time?", choices: ["A timer's preset value was left at its default, far longer than the process ever needed", "A sensor input was wired backwards", "The PLC's CPU module had failed", "An output coil had burned out"], answer: 0, explain: "The scenario concludes a timer's preset value was left at its default — far longer than the process actually needed.", why: ["", "Wiring reversal is the cause from the earlier reversed-sequence scenario, not this one", "CPU failure isn't the cause identified in this specific scenario", "A burned-out coil isn't the cause identified in this specific scenario"] },
              { q: "Per the repair exercise's lesson, when should timer and counter presets specifically be checked?", choices: ["When a sequence stalls at a consistent, repeatable step", "Only during the PLC's very first installation", "Never — presets are fixed and unchangeable once set", "Only when the HMI screen goes blank"], answer: 0, explain: "The lesson explicitly states to check timer and counter presets specifically when a sequence stalls at a consistent step.", why: ["", "The lesson applies any time this consistent-stall symptom appears, not only at first installation", "Presets can clearly be checked and adjusted, as this scenario demonstrates", "An HMI going blank isn't the symptom this specific lesson addresses"] },
              { q: "Per the ladder symbol reference table, what does the symbol —| |— represent?", choices: ["Normally open — true when its condition is active", "Normally closed — true when its condition is inactive", "An output coil that turns a physical output on", "A latch that holds an output until reset"], answer: 0, explain: "The table lists —| |— as 'Normally open', true when its condition is active, acting like a switch that closes.", why: ["", "That's the —|/|— symbol, not —| |—", "That's the ( ) symbol, not —| |—", "That's the (L) / (U) symbol, not —| |—"] },
              { q: "Per the ladder symbol reference table, what does the symbol ( ) represent, and what does it act like?", choices: ["Output coil — turns a physical output on, acting like a relay coil", "Normally open contact — acting like a switch that closes", "Normally closed contact — acting like a switch that opens", "Latch / unlatch — acting like a self-holding relay"], answer: 0, explain: "The table lists ( ) as 'Output coil', turning a physical output on, acting like a relay coil.", why: ["", "That's the —| |— symbol, not ( )", "That's the —|/|— symbol, not ( )", "That's the (L) / (U) symbol, not ( )"] },
              { q: "Per the ladder symbol reference table, what does (L) / (U) represent?", choices: ["Latch / unlatch — holds an output until reset, acting like a self-holding relay", "Output coil — turns a physical output on", "Normally open — true when its condition is active", "Normally closed — true when its condition is inactive"], answer: 0, explain: "The table lists (L) / (U) as 'Latch / unlatch', holding an output until reset, acting like a self-holding relay.", why: ["", "That's the ( ) symbol, not (L) / (U)", "That's the —| |— symbol, not (L) / (U)", "That's the —|/|— symbol, not (L) / (U)"] }
            ] }
          ]
        },
        {
          id: "plc-wrapup",
          title: "Module Wrap-Up",
          tag: "You Can Now…",
          blocks: [
            { type: "checklist", items: [
              "Explain what a PLC does during each scan cycle",
              "Read a ladder rung and identify what an output depends on",
              "Tell sourcing and sinking I/O apart, and wire each correctly",
              "Explain the HMI's role without confusing it with the PLC's logic",
              "Troubleshoot systematically from field wiring through to program logic"
            ]},
            { type: "golden", text: "Field first, then wiring, then logic — the fault is rarely where you look first." },
            { type: "check", questions: [
              { q: "What is the golden rule of this module?", choices: ["Field first, then wiring, then logic — the fault is rarely where you look first", "Always suspect the ladder program before checking any field device", "The HMI is where most control logic faults actually live", "Sourcing and sinking I/O can always be mixed on the same circuit safely"], answer: 0, explain: "The golden rule explicitly orders field, then wiring, then logic — since the fault is rarely where you first look.", why: ["", "The systematic troubleshooting list explicitly checks field wiring before the program logic", "The HMI card explicitly states it rarely causes a logic fault on its own", "The sourcing/sinking table explicitly distinguishes the two as different wiring styles that must be matched correctly, not mixed carelessly"] },
              { q: "Per the checklist, what should you be able to explain about the PLC's scan cycle?", choices: ["What a PLC does during each scan cycle", "How to calculate a transformer's turns ratio", "How to calibrate a drifting sensor", "How to terminate an RS-485 network"], answer: 0, explain: "The checklist names explaining what a PLC does during each scan cycle as a core skill.", why: ["", "Transformer turns ratio belongs to the Power Electronics module, not this one", "Sensor calibration belongs to the Sensors & Actuators module, not this one", "RS-485 termination belongs to the Industrial Communication module, not this one"] },
              { q: "Per the checklist, what should you be able to identify from a ladder rung?", choices: ["What an output depends on", "A motor's stall current rating", "A wire's ampacity rating", "A capacitor's ESR value"], answer: 0, explain: "The checklist names reading a ladder rung and identifying what an output depends on as a core skill.", why: ["", "Stall current belongs to the Motors & Drives module, not this one", "Ampacity belongs to the Industrial Wiring module, not this one", "ESR belongs to the Test & Measurement module, not this one"] },
              { q: "Per the checklist, what I/O wiring styles should you be able to tell apart and wire correctly?", choices: ["Sourcing and sinking", "Star and delta", "RS-232 and RS-485", "Half-wave and full-wave"], answer: 0, explain: "The checklist names telling sourcing and sinking I/O apart, and wiring each correctly, as a core skill.", why: ["", "Star and delta belong to the Industrial Wiring module, not this one", "RS-232 and RS-485 belong to the Industrial Communication module, not this one", "Half-wave and full-wave belong to the Power Electronics module, not this one"] },
              { q: "Per the checklist, what should you be able to troubleshoot systematically?", choices: ["From field wiring through to program logic", "Only ever the HMI screen, never the field wiring", "Only ever the program logic, skipping field wiring entirely", "Only the PLC's power supply module"], answer: 0, explain: "The checklist names troubleshooting systematically from field wiring through to program logic as this module's final skill.", why: ["", "The systematic troubleshooting list explicitly starts with I/O status LEDs and field wiring, not just the HMI", "The golden rule explicitly places field and wiring checks before logic, not skipping them", "This module's troubleshooting scope explicitly spans field wiring through program logic, not just the power supply"] }
            ] }
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
