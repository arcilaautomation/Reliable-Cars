// Page-level content: bottom line, picks, avoid list, defects, surveys, checklist, method.
// Sources: research/01-survey-data.md, research/02-systemic-defects.md and the segment files.
RC.meta = {
  asof: "September 26, 2026",
  lede: "The most dependable used vehicles from 2015–2025 share a pattern: a long-running, non-turbo engine with a conventional automatic, bought outside its first redesign year. Toyota and Lexus hold most of the top spots, but brand alone is a poor guide. Several of the worst engine problems of the decade hit Toyota, Honda and GM models with excellent reputations.",
  footnote: "Compiled September 26, 2026 from seven parallel research passes (roughly 800 searches and document reads), checked by a separate 107-agent verification run. The research notes behind every rating, with full source lists, are in the <code>research/</code> folder of the repository."
};

RC.bottom = [
  "If you want the lowest-risk used vehicle in each segment, start here: <b>Toyota Avalon or Camry</b> (sedan), <b>Toyota 4Runner or Lexus GX 460</b> (SUV), and <b>Toyota Tundra with the 5.7 V8, 2015–2021</b> (full-size truck). Each has above-average Consumer Reports ratings in nearly every year, repeat J.D. Power dependability awards, top-tier odds of reaching 250,000 miles, and no engine or transmission defect program in those years.",
  [
    "<b>Check the exact year and engine.</b> The 2022–2024 Tundra twin-turbo V6 has three engine recalls covering about 272,000 Toyota and Lexus vehicles. GM's 6.2L V8 (2021–2026) is under a new NHTSA investigation opened August 20, 2026, after engines failed even after the recall fix. Honda's 2016–2020 V6 in the Pilot, MDX and Ridgeline is under an open NHTSA probe with 3,012 bearing-failure reports.",
    "<b>Skip first-year redesigns.</b> In J.D. Power's 2025 study, all-new 2022 models averaged 241 problems per 100 vehicles versus 196 for carryover models. The 2019 RAV4, 2022 Tundra, 2023 HR-V and 2025 Equinox all fit the pattern.",
    "<b>2021–2023 builds carry extra risk.</b> Industry problem rates rose every year from MY2020 (186) to MY2023 (204). J.D. Power blames pandemic-era production.",
    "<b>Some reputations are wrong in both directions.</b> The Nissan Murano 2019–2024, Kia Forte 2020–2022 and Buick LaCrosse survey well above their brands. The Subaru Forester 2015–2018, Mazda3 2019–2021 and Honda Civic 1.5T 2016–2018 fall below theirs.",
    "<b>Some extended warranties still transfer to you.</b> Hyundai/Kia Theta II lifetime short-block, Subaru CVT 10 yr/100k, Mazda 2.5T cylinder head 10 yr/120k, Nissan VC-Turbo 10 yr/120k, VW water pump 8 yr/80k, and Mercedes M264 valves 15 yr/150k. Honda's 1.5T oil dilution, Ford's cam phaser and PowerShift programs, and most Nissan CVT extensions have expired.",
    "<b>Hybrids were out of scope</b>, but the Highlander Hybrid, Lexus RX 450h, NX 300h and Camry and Avalon Hybrids rate as well as or better than the gas versions listed here."
  ]
];

RC.picks = {
  sedan: { title: "Sedans", items: [
    { name: "Toyota Avalon", spec: "2016–2022 · 3.5L V6", why: "CR more or much more reliable every year; J.D. Power's most dependable model of 2025; #2 car for 250k miles.", g: "A", u: CR("toyota", "avalon", 2020) },
    { name: "Toyota Camry", spec: "2019–2024 or 2015–2017 · 2.5L", why: "CR above average every year; J.D. Power midsize winner for MY2021–2023.", g: "A", u: CR("toyota", "camry", 2021) },
    { name: "Lexus ES 350", spec: "2015–2019 · 3.5L V6", why: "CR more reliable each year; five J.D. Power segment awards; fuel pump covered to 2036.", g: "A", u: CR("lexus", "es", 2018) },
    { name: "Toyota Corolla", spec: "2018–2022 · 1.8L / 2.0L", why: "Four J.D. Power compact awards; CR much more reliable in 2019 and 2021.", g: "A", u: JDP(2025) },
    { name: "Honda Fit", spec: "2016–2020 · 1.5L", why: "CR more reliable every year, much more in 2020; a CR Used Car Top Pick.", g: "A", u: CR("honda", "fit", 2020) },
    { name: "Mazda MX-5 Miata", spec: "2019–2022 · 2.0L", why: "CR much more reliable in 2019; J.D. Power sporty-car winner.", g: "A", u: CR("mazda", "mx-5-miata", 2019) },
    { name: "Buick LaCrosse", spec: "2015–2019 · 3.6L V6", why: "Two J.D. Power large-car awards; CR 2017 more reliable; no class action.", g: "A", u: JDP(2019) },
    { name: "Mazda6", spec: "2015–16 or 2019–20 · 2.5L", why: "CR more reliable in these years; CR's pick under $10,000.", g: "A", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/" }
  ]},
  suv: { title: "SUVs", items: [
    { name: "Toyota 4Runner", spec: "2015–2024 · 4.0L V6", why: "CR above average every year sampled; about 33% reach 250k miles; no engine or transmission campaign.", g: "A", u: CR("toyota", "4runner", 2021) },
    { name: "Lexus GX 460", spec: "2015–2023 · 4.6L V8", why: "CR more or much more reliable; J.D. Power segment winner five times.", g: "A", u: CR("lexus", "gx", 2020) },
    { name: "Toyota RAV4", spec: "2021–2023 or 2016–2018 · 2.5L", why: "CR much more reliable in 2021 and 2023; J.D. Power compact SUV winner (2022).", g: "A", u: CR("toyota", "rav4", 2021) },
    { name: "Honda CR-V", spec: "2020–2022 1.5T or 2015–2016 2.4L", why: "CR more reliable; best compact SUV for reaching 250k miles.", g: "A", u: CR("honda", "cr-v", 2020) },
    { name: "Lexus RX 350", spec: "2016–2022 · 3.5L V6", why: "J.D. Power segment winner MY2019–2021; CR much more reliable in 2022.", g: "A", u: JDP(2024) },
    { name: "Toyota Sequoia", spec: "2015–2022 · 5.7L V8", why: "#1 of all vehicles for reaching 250k miles (42.3%). CR has too little data.", g: "B", u: "https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/" },
    { name: "Subaru Crosstrek", spec: "2019–2024 · 2.0L", why: "CR more reliable every year, much more in 2024; J.D. Power small SUV winner (2023).", g: "A", u: CR("subaru", "crosstrek", 2024) },
    { name: "Toyota Corolla Cross", spec: "2022–2024 · 2.0L", why: "CR much more reliable in all three years; no powertrain defect found.", g: "A", u: CR("toyota", "corolla-cross", 2023) }
  ]},
  truck: { title: "Trucks", items: [
    { name: "Toyota Tundra", spec: "2015–2021 · 5.7L V8", why: "CR above average all seven years; four J.D. Power awards; roughly 25–30% reach 250k miles.", g: "A", u: CR("toyota", "tundra", 2019) },
    { name: "Toyota Tacoma", spec: "2018–2019, 2021–2023 · 3.5L V6 or 2.7L", why: "CR above average; five J.D. Power midsize awards; 25% reach 250k miles.", g: "A", u: CR("toyota", "tacoma", 2022) },
    { name: "Nissan Frontier", spec: "2015–2019 · 4.0L V6; or 2024–2025", why: "Four straight J.D. Power midsize awards and CR above average. Low odds of reaching 250k miles.", g: "A", u: JDP(2021) },
    { name: "Honda Ridgeline", spec: "2020–2021, 2023 · 3.5L V6", why: "CR more reliable; outside the V6 bearing recall and investigation years.", g: "A", u: CR("honda", "ridgeline", 2021) },
    { name: "Ford Maverick", spec: "2023–2025 · hybrid or 2.0T", why: "CR more reliable three years running; recalls were battery and software fixes.", g: "A", u: CR("ford", "maverick", 2024) },
    { name: "Ram 2500 / 3500", spec: "2021–2024 · 6.7L Cummins", why: "iSeeCars' top truck for reaching 250k miles; built after the fuel pump recall window.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { name: "Ram 1500", spec: "2023 only · 3.6L or 5.7L", why: "CR much more reliable for 2023 and J.D. Power's #1 full-size pickup, but other years rate poorly.", g: "A", u: CR("ram", "1500", 2023) }
  ]}
};

RC.avoid = [
  { name: "Toyota Tundra, non-hybrid V6", yrs: "2022–2024", why: "Three engine recalls for machining debris on the main bearings (24V381, 25V767, 26V320). Only buy with a documented replacement engine.", g: "A", u: NH("25V767") },
  { name: "GM 6.2L V8 (L87): Silverado, Sierra, Tahoe, Suburban, Yukon, Escalade", yrs: "2021–2026", why: "Recall 25V274, then NHTSA EA26005 into 997,743 vehicles after engines failed even after the fix.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf" },
  { name: "Honda Pilot, Acura MDX, Honda Ridgeline V6", yrs: "2016–2020", why: "Rod-bearing recall 23V751 plus open NHTSA investigation PE25008 (3,012 reports). CR rates every Pilot year 2015–2020 below average.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf" },
  { name: "Hyundai Sonata, Santa Fe Sport; Kia Optima, Sorento (Theta II 2.4 / 2.0T)", yrs: "2015–2019", why: "Connecting-rod bearing failures and a $210M NHTSA fine. The lifetime engine warranty applies only if the knock-sensor software is installed.", g: "A", u: "https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall" },
  { name: "Nissan Rogue 1.5 and Altima 2.0 VC-Turbo", yrs: "2019–2025", why: "Engine bearing seizure recalls 25V437 and 26V080. Buy only with both done and the 10-year/120k extension confirmed.", g: "A", u: NH("26V080") },
  { name: "Nissan CVT models: Sentra, Versa, Rogue, Altima, Pathfinder", yrs: "2015–2017", why: "CVT failures led to 84-month extensions that have now expired.", g: "A", u: TSB("2023/MC-10246457-0001.pdf") },
  { name: "Ford Escape, all engines", yrs: "2015–2024", why: "CR below average every year; engine coolant intrusion, injector fire and hybrid engine breach recalls.", g: "A", u: CR("ford", "escape", 2020) },
  { name: "Ford Explorer and Lincoln Aviator", yrs: "2020–2022", why: "CR much less reliable in 2020 (35 recalls); rear axle bolt fixed only after four recalls.", g: "A", u: NH("23V675") },
  { name: "Ford Focus and Fiesta with the PowerShift automatic", yrs: "2015–2018", why: "Dual-clutch shudder and failure; the extended clutch coverage has expired.", g: "B", u: "https://www.cars.com/articles/ford-focus-fiesta-transmission-settlement-what-owners-should-know-420135/" },
  { name: "Lexus LX 600; Lexus GX 550", yrs: "2022–2024; 2024", why: "Same recalled twin-turbo V6 as the Tundra.", g: "A", u: NH("25V767") },
  { name: "Jeep Cherokee; Grand Cherokee; Wrangler; Gladiator", yrs: "2015–2020; 2022–23; 2016, 2018–19; 2020–23", why: "CR below average nearly every year; Jeep ranked last among brands.", g: "A", u: CR("jeep", "cherokee", 2017) },
  { name: "Ram 1500 Hurricane six; EcoDiesel", yrs: "2025; 2014–2019", why: "CR much less reliable for 2025; EcoDiesel EGR cooler fire recall 19V757.", g: "A", u: NH("19V757") },
  { name: "Chevrolet Colorado and GMC Canyon", yrs: "2023–2025", why: "Last among midsize pickups in CR's 2026 ranking; 2023 2.7T cracked-block engine program.", g: "A", u: CR("chevrolet", "colorado", 2023) },
  { name: "Chevrolet Cruze 1.4T", yrs: "2016–2018", why: "GM bulletins replace all four pistons on cracked-piston engines.", g: "A", u: TSB("2019/MC-10163888-9999.pdf") },
  { name: "Mazda CX-90", yrs: "2024", why: "CR much less reliable with 11 recalls, several for loss of drive power.", g: "A", u: CR("mazda", "cx-90", 2024) },
  { name: "Subaru Ascent; Forester; Outback", yrs: "2019; 2015–2018; 2018–2020", why: "CR below average; Ascent CVT chain and heater fire recalls.", g: "A", u: CR("subaru", "forester", 2016) },
  { name: "Kia Soul; Hyundai Tucson", yrs: "2015–2020; 2016–2019", why: "Engine bearing settlements and CR below average; Tucson ABS fire recall.", g: "A", u: CR("hyundai", "tucson", 2018) },
  { name: "Volkswagen Jetta, Tiguan; Mercedes C-Class", yrs: "most years; 2015–2020", why: "CR below average in most years sampled.", g: "A", u: CR("volkswagen", "jetta", 2022) }
];

RC.legend = [
  { v: "top", t: "Many above-average survey years, no unremedied major defect in the named years" },
  { v: "strong", t: "Good in the named years and engines; a known weak point is fixed or covered, or data is thin" },
  { v: "mixed", t: "Only the named years or engines are worth buying" },
  { v: "avoid", t: "Most years rate below average or carry a serious defect" }
];

RC.defects = [
  { name: "Twin-turbo V6 (V35A) main bearing debris", who: "Toyota Tundra (non-hybrid), Lexus LX 600, GX 550", yrs: "2022–2024", remedy: "24V381: new engine. 25V767 and 26V320: inspection software, new engine if not cleared.", status: "About 272,000 vehicles; 70,000+ engines replaced. Hybrid is excluded.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf" },
  { name: "6.2L V8 (L87) rod and crank failure", who: "Silverado/Sierra 1500, Tahoe, Suburban, Yukon, Escalade", yrs: "2021–2026", remedy: "25V274: inspect, then new engine or thicker oil.", status: "NHTSA EA26005 opened Aug 20, 2026 (997,743 vehicles); failures after the fix.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf" },
  { name: "Honda 3.5L V6 (J35) rod bearings", who: "Pilot, MDX, Ridgeline, Odyssey, TLX V6", yrs: "2015–2020", remedy: "23V751: inspect, repair or replace engine.", status: "PE25008 open (1.41M vehicles, 3,012 reports); no expanded recall.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf" },
  { name: "Theta II 2.4 / 2.0T rod bearings", who: "Sonata, Optima, Santa Fe Sport, Sorento, Sportage, Tucson", yrs: "2011–2019", remedy: "Lifetime short-block warranty once knock-sensor (KSDS) software is installed.", status: "Active; transfers to later private owners.", g: "A", u: "https://www.kiaenginesettlement.com/Content/Documents/Order%20Granting%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf" },
  { name: "Nu 2.0 / Gamma 1.6 engine bearings", who: "Elantra, Forte, Soul, Tucson 2.0 and others", yrs: "2010–2021", remedy: "15 yr/150k coverage with KSDS software.", status: "Active; runs out year by year.", g: "A", u: "https://autoservice.hyundaiusa.com/TXXM" },
  { name: "Hyundai/Kia ABS module fire", who: "Many Hyundai and Kia models", yrs: "2010–2019", remedy: "23V651 (Hyundai), 23V652 (Kia): new fuse. Park outside until done.", status: "Open on unrepaired VINs.", g: "A", u: NH("23V651") },
  { name: "Hyundai/Kia missing immobilizer", who: "Keyed-ignition Hyundai and Kia", yrs: "2011–2022", remedy: "Free software, ignition protector or steering lock.", status: "$145M settlement payouts paused by a Supreme Court petition.", g: "A", u: "https://www.hyundaitheftsettlement.com/" },
  { name: "Nissan VC-Turbo bearing seizure", who: "Rogue 1.5T, Altima 2.0T, Infiniti QX50/QX55", yrs: "2019–2025", remedy: "25V437, 26V080: reflash, debris check, engine if needed. 10 yr/120k long block.", status: "Active.", g: "A", u: NH("26V080") },
  { name: "Nissan CVT failures", who: "Rogue, Altima, Sentra, Versa, Pathfinder, Murano, Maxima", yrs: "2012–2018", remedy: "Extended to 84 months/84k.", status: "Expired on nearly every car.", g: "A", u: TSB("2023/MC-10246457-0001.pdf") },
  { name: "Subaru CVT coverage", who: "Legacy, Outback, Forester, Impreza, Crosstrek, WRX, Ascent", yrs: "2010–2020", remedy: "10 yr/100k; 2019–2020 added May 2025.", status: "2017–2020 still active; the window for cars already past 100k closed June 30, 2026.", g: "A", u: TSB("2025/MC-11021247-0001.pdf") },
  { name: "Honda 1.5T oil dilution", who: "Civic 1.5T, CR-V 1.5T (not Accord)", yrs: "2016–2018", remedy: "Software plus 6 yr/unlimited-mile parts extension.", status: "Expired.", g: "B", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines" },
  { name: "Honda 6-speed torque converter", who: "Pilot, Ridgeline", yrs: "2017–2019", remedy: "TSB 23-078: 8 yr/150k.", status: "Active on later years.", g: "A", u: TSB("2023/MC-10241879-0001.pdf") },
  { name: "Honda rear subframe corrosion", who: "Pilot, Passport, Ridgeline, MDX (salt states)", yrs: "2014–2023", remedy: "26V365: reinforcement kit.", status: "New recall, June 2026.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V365-6590.pdf" },
  { name: "Denso low-pressure fuel pump", who: "Toyota, Lexus, Honda, Acura, Mazda", yrs: "2013–2020", remedy: "Pump replaced (20V012/20V682, 23V858, 21V875).", status: "Lexus support program to 2036.", g: "A", u: NH("20V682") },
  { name: "Ford EcoBoost coolant intrusion", who: "Escape, Fusion, MKZ, Edge (1.5, 1.6, 2.0)", yrs: "2013–2019", remedy: "One-time short block (21N12, 7 yr/84k); long block per TSB 22-2229.", status: "Mostly aged out.", g: "A", u: TSB("2022/MC-10213732-0001.pdf") },
  { name: "Ford 2.7/3.0 intake valve fracture", who: "F-150, Bronco, Edge, Explorer, Aviator", yrs: "2021–2022", remedy: "24V635: engine test, replace if failed; 10 yr/150k.", status: "Open recall.", g: "A", u: NH("24V635") },
  { name: "Ford F-150 6-speed sudden downshift", who: "F-150 with 6R80", yrs: "2015–2017", remedy: "26V237 (April 2026): PCM calibration.", status: "1.39M trucks; after NHTSA EA26001.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf" },
  { name: "Ford 10R80 10-speed harsh or delayed shifts", who: "F-150, Expedition, Navigator, Mustang, Ranger", yrs: "2017–2023", remedy: "TSB 23-2123: reflash and relearn, or valve body overhaul.", status: "Bulletin only; no recall or extension. Class action pending.", g: "A", u: TSB("2023/MC-10234596-0002.pdf") },
  { name: "Ford 3.5 EcoBoost cam phasers", who: "F-150, Expedition, Navigator", yrs: "2017–2020", remedy: "Reflash and prorated phaser replacement.", status: "Ended Jan 1, 2023.", g: "A", u: TSB("2021/MC-10189763-0001.pdf") },
  { name: "Ford PowerShift dual-clutch", who: "Focus, Fiesta", yrs: "2011–2016", remedy: "Settlement; 7 yr/100k clutch coverage.", status: "Expired.", g: "B", u: "https://www.cars.com/articles/ford-focus-fiesta-transmission-settlement-what-owners-should-know-420135/" },
  { name: "GM 8-speed shudder", who: "Silverado, Sierra, Tahoe, Yukon, Colorado, Cadillacs", yrs: "2015–2019", remedy: "Fluid exchange (TSB 18-NA-355).", status: "Class certification vacated June 2025.", g: "A", u: TSB("2020/MC-10174266-9999.pdf") },
  { name: "GM 10-speed valve wear, rear-wheel lockup", who: "Diesel Silverado/Sierra HD and 1500, some SUVs", yrs: "2020–2022", remedy: "24V797: software limits gears.", status: "Recall; class action filed Apr 2026.", g: "A", u: NH("24V797") },
  { name: "GM V8 lifter collapse (AFM/DFM)", who: "5.3 and 6.2 trucks and SUVs", yrs: "2014–2021+", remedy: "None.", status: "Litigation; no recall.", g: "C" },
  { name: "Hemi lifter and cam wear (“Hemi tick”)", who: "Ram, Durango, Grand Cherokee, Charger, Challenger, 300", yrs: "2014+", remedy: "None.", status: "Litigation weakened; no recall.", g: "C" },
  { name: "Mazda 2.5T cylinder head crack", who: "CX-9, CX-5, Mazda6", yrs: "2016–2020", remedy: "CSP11: 10 yr/120k.", status: "Active.", g: "A", u: TSB("2024/MC-11011136-0001.pdf") },
  { name: "VW/Audi 2.0T water pump", who: "Jetta, Golf, GTI, Passat, Tiguan, Atlas, Arteon, Audi", yrs: "2014–2021", remedy: "8 yr/80k with coolant-maintenance proof.", status: "Active for later years.", g: "A", u: TSB("2022/MC-10214802-0001.pdf") },
  { name: "Jeep steering “death wobble”", who: "Wrangler JL, Gladiator", yrs: "2018–2020", remedy: "Damper replaced; covered 8 yr/90k.", status: "Expiring 2026–2028.", g: "A", u: TSB("2024/MC-11010476-0001.pdf") },
  { name: "ARC airbag inflators", who: "About 49M vehicles, 13 automakers", yrs: "to mid-2018 builds", remedy: "Lot-specific recalls only.", status: "No final NHTSA decision as of mid-2026.", g: "C" }
];

RC.surveys = {
  intro: "Four large datasets were cross-checked for every model. They measure different things, and they disagree often enough that none should be used alone. Consumer Reports' year-by-year verdicts carry the most weight here because they are severity-weighted and cover every year of a car's life.",
  panels: [
    {
      title: "J.D. Power 2026: problems per 100 vehicles (MY2023)",
      text: "Original owners, three years in. Lower is better; the line marks the 204 industry average. Infotainment complaints count the same as mechanical failures.",
      avg: 204, avgLabel: "Industry 204",
      bars: [
        { k: "Lexus", v: 151 }, { k: "Buick", v: 160 }, { k: "Cadillac", v: 175 }, { k: "Chevrolet", v: 178 },
        { k: "Subaru", v: 181 }, { k: "Toyota", v: 185 }, { k: "Kia", v: 193 }, { k: "Nissan", v: 194 },
        { k: "Hyundai", v: 198 }, { k: "Mazda", v: 210 }, { k: "Honda", v: 211 }, { k: "Ram", v: 216 },
        { k: "Ford", v: 228 }, { k: "GMC", v: 229 }, { k: "Jeep", v: 267 }, { k: "Volkswagen", v: 301 }
      ],
      note: { t: "Brand values via Cars.com coverage; top and bottom confirmed in J.D. Power's release", g: "B", u: "https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/" }
    },
    {
      title: "iSeeCars 2025: chance of reaching 250,000 miles",
      text: "Share of each model projected to reach 250k miles, pooled across all generations. The line marks the 4.8% average; hybrids are left out. This is the last edition with a complete public table. The September 2026 edition supersedes it (see note).",
      avg: 4.8, avgLabel: "Average 4.8%", unit: "%",
      bars: [
        { k: "Sequoia", v: 39.1 }, { k: "4Runner", v: 32.9 }, { k: "Tundra", v: 30.0 }, { k: "Lexus IS", v: 27.5 },
        { k: "Tacoma", v: 25.3 }, { k: "Avalon", v: 18.9 }, { k: "Lexus GX", v: 18.3 }, { k: "Ridgeline", v: 14.7 },
        { k: "Pilot", v: 13.1 }, { k: "Silverado 1500", v: 12.9 }, { k: "Suburban", v: 11.8 }, { k: "Civic", v: 10.9 },
        { k: "CR-V", v: 10.6 }, { k: "Camry", v: 9.0 }, { k: "F-150", v: 5.9 }, { k: "Ram 1500", v: 3.5 }, { k: "Corolla", v: 3.2 }
      ],
      note: { t: "September 2026 edition: Sequoia 42.3%, Lexus LS 38.8%, 4Runner 33.1%, Tundra and Tacoma 28.2% and 25.0% (outlets disagree on which is which), average 5.4%. Only partial tables were published.", g: "B", u: "https://www.roadandtrack.com/news/a73741744/20-longest-lasting-cars-trucks-suvs-2026/" }
    },
    {
      title: "Consumer Reports brand rankings, December 2025",
      list: [
        { t: "Used cars, MY2016–2021: 1 Lexus (77), 2 Toyota (73), 3 Mazda, 4 Honda, 5 Acura … 24 Ram, 25 Jeep, 26 Tesla (31)", g: "A", u: "https://www.consumerreports.org/cars/which-brands-make-the-best-used-cars-a2811658468/" },
        { t: "New-car predicted reliability: Toyota 66, Subaru 63, Lexus 60, Honda 59, BMW 58, Nissan 57 … Chrysler 31, GMC 31, Jeep 28, Ram 26", g: "B", u: "https://www.cars.com/articles/toyota-again-tops-consumer-reports-annual-auto-reliability-survey-519312/" },
        { t: "Mazda is 3rd for used cars but 14th for new, dragged down by the 2024+ CX-70 and CX-90", g: "A", u: "https://www.consumerreports.org/cars/which-brands-make-the-best-used-cars-a2811658468/" }
      ]
    },
    {
      title: "Where the surveys disagree",
      list: [
        { t: "Six J.D. Power segment winners appear on CR's used-cars-to-avoid lists for the same model year: 2015 Traverse, 2016 Town & Country, 2017 Tahoe, 2017 Encore, 2021 Tahoe, 2021 F-250. All are GM, Ford or Chrysler products.", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" },
        { t: "No Toyota or Lexus segment winner appears on a CR avoid list for the same year.", g: "C" },
        { t: "Honda won no J.D. Power segment awards from 2018 to 2026, yet ranks 4th with CR for both new and used cars. J.D. Power counts phone-pairing gripes the same as engine failures.", g: "A", u: "https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/" },
        { t: "iSeeCars pools every generation, so its Tundra, Sequoia and 4Runner figures say nothing about the 2022+ turbo redesigns.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
      ]
    }
  ]
};

RC.checklist = [
  { title: "Run the VIN", items: [
    { t: "Check open recalls at nhtsa.gov/recalls. It won't show warranty extensions, service campaigns or brand-new recalls.", g: "A", u: "https://www.nhtsa.gov/recalls" },
    "Check the maker's own site too (toyota.com/recall, recalls.honda.com, Hyundai and Kia campaign lookup, mazdarecallinfo.com)",
    "Ask a franchised dealer for a VIN printout of warranty extensions and service campaigns; these never appear on NHTSA",
    { t: "Check NMVTIS for salvage and flood title brands. Hurricanes Ian, Helene and Milton damaged up to 616,000 cars.", g: "B", u: "https://vehiclehistory.bja.ojp.gov/nmvtis_consumers" },
    { t: "Used-car dealers can legally sell cars with open recalls. A “certified” label doesn't mean recalls were fixed.", g: "A", u: "https://www.ftc.gov/system/files/documents/cases/161216_six_auto_recall_cases_statement_of_the_commission_1_0.pdf" }
  ]},
  { title: "Inspect the car", items: [
    { t: "Pay for an independent pre-purchase inspection ($100–150), even on a certified car. Walk away if the seller refuses.", g: "A", u: "https://consumer.ftc.gov/articles/buying-used-car-dealer" },
    "Start the engine cold (not driven for at least an hour) and listen: knock (bearings), tick (lifters), 2–5 second rattle (cam phasers)",
    { t: "Scan OBD-II readiness monitors. Several “Not Ready” monitors can mean codes were just cleared.", g: "A", u: "https://www.nyvip3.com/OBDII/ReadyVSNotReady" },
    "Pull the dipstick: overfull or fuel-smelling oil (Honda 1.5T), milky oil (coolant intrusion), or low oil between changes",
    "Look for flood signs: silt under carpets, rusty seat rails, musty smell, fogged lights",
    "In salt states, tap the frame rails, subframe and brake lines, especially on trucks and 4x4s"
  ]},
  { title: "Ask for records", items: [
    "Oil-change history at 5,000–7,500 mile intervals, especially for turbo engines and the recalled V6s and V8s",
    "Proof of any engine replacement under a recall, not just “recall closed”",
    "Coolant records on VW/Audi (required for the water pump extension) and fluid services on CVTs and dual-clutches",
    { t: "Hyundai's 10-year powertrain warranty drops to 5 years/60k for second owners; the Theta II lifetime coverage does transfer.", g: "A", u: "https://www.hyundaiusa.com/us/en/assurance/america-best-warranty" },
    "Evidence of towing, lifts, big tires or engine tunes on trucks; tunes can void extended coverage"
  ]}
];

RC.method = {
  intro: "Each rating is tied to a specific model, model year and engine, never to brand reputation. Seven research passes ran in parallel: survey datasets, cross-model defects, and five vehicle segments. Each pass had to cite a source and grade for every claim. Each also ran targeted searches for recalls, lawsuits, investigations and warranty extensions on its own top picks before rating them.",
  grades: [
    { g: "A", t: "Primary source: NHTSA recall or investigation document, manufacturer bulletin or warranty letter, court record, or the survey publisher's own page" },
    { g: "B", t: "Two or more independent quality outlets agree (Car and Driver, Edmunds, Reuters, KBB, Automotive News and similar)" },
    { g: "C", t: "One secondary source, or a class-action complaint, which is an allegation, not proof" },
    { g: "D", t: "Forums, complaint aggregators, listicles. Used only as leads; no rating rests on one" }
  ],
  confidence: [
    "<b>High for the top picks.</b> Each rests on at least two A-grade sources, usually Consumer Reports' year-by-year verdicts plus J.D. Power awards or iSeeCars longevity data. Each survived a targeted search for recalls, lawsuits and warranty extensions.",
    "<b>Moderate for 2023–2025 model years.</b> Survey samples are small and young, and failures that appear after 60,000 miles don't show yet. CR rated the 2024 Nissan Rogue much more reliable before recall 26V080 for engine bearing seizure.",
    "<b>What would change these ratings:</b> the outcome of NHTSA's GM 6.2L investigation (EA26005) and Honda V6 investigation (PE25008); how Toyota's inspection-first remedy for recall 26V320 holds up; any evidence from the Toyota 8-speed class action; and Consumer Reports' next annual survey, due around December 2026.",
    "<b>Known limits.</b> Consumer Reports year verdicts were read from its public model pages, and a few snapshots date from November 2023; CR's full trouble-spot data is paywalled. CR's used-cars-to-avoid lists were reached through news coverage."
  ],
  notRated: "Not rated because the evidence was too thin: Toyota Yaris, Kia Rio, Subaru WRX, Chevrolet Spark, Lincoln Continental, VW Arteon, Kia Stinger, Volvo S90, Mitsubishi Outlander and Outlander Sport, Ford EcoSport, Nissan Titan XD.",
  contradictions: [
    { t: "J.D. Power awards vs Consumer Reports avoid lists for the same model year (2015 Traverse, 2017 and 2021 Tahoe, 2017 Encore, 2016 Town & Country, 2021 F-250). CR's severity-weighted, multi-year data governs for used buying.", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" },
    { t: "Hyundai Sonata 2019 and Kia Optima 2020 won J.D. Power awards, but CR rates them below average and the Theta II settlement covers the engines. The documented engine defect governs.", g: "A", u: JDP(2022) },
    { t: "Nissan Frontier 2015–2019: strong CR and J.D. Power records, but iSeeCars finds only 5.0% reach 250k miles. Kept at Strong, not Top.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "Nissan Rogue 2024: CR much more reliable, but covered by bearing-seizure recall 26V080. The recall governs.", g: "A", u: NH("26V080") },
    { t: "Subaru Outback: iSeeCars' top small-SUV score vs CR below average for 2018–2020. iSeeCars pools older generations; CR's year data governs.", g: "A", u: CR("subaru", "outback", 2020) },
    { t: "Mercedes E-Class: #11 passenger car for longevity vs CR below average for 2015, 2019 and 2020. Longevity reflects use, not repair frequency.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "iSeeCars 2026 coverage swaps Tacoma and Tundra (28.2% vs 25.0%) between outlets. Unresolved; the complete 2025 table is used.", g: "C" },
    { t: "Ford F-150 2015–2017 downshift: one research pass found no remedy yet under NHTSA EA26001; another found recall 26V237 filed April 14, 2026. The Part 573 recall filing is used.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf" },
    { t: "CR's February 2025 avoid list named the 2024 Mazda CX-50 and Buick Encore GX; CR's current pages rate them average and more reliable. Newer data governs; both stay Pick carefully.", g: "C" },
    { t: "V35A recall total: headlines say 250,000 or 270,000; the three Part 573 filings sum to 272,349.", g: "A", u: NH("24V381") },
    { t: "Ford cam phaser program end date: one reading of the Ford document gave September 1, 2022; the verification run found January 1, 2023, which matches the research passes.", g: "A", u: TSB("2021/MC-10189763-0001.pdf") }
  ],
  falsification: [
    { t: "Toyota Tundra 2015–2021: searched engine and transmission recalls, class actions and extensions. Found none; air-injection pump programs cover only 2007–2013. Kept as a top pick.", g: "A" },
    { t: "Toyota Tacoma: found the 2011–2017 frame rust program (affects 2015), the 2016–2017 differential recall and the 2022–2023 axle recall. Kept, with a frame check on 2015.", g: "A", u: TSB("2024/MC-10251755-9999.pdf") },
    { t: "Toyota 4Runner and Lexus GX 460: only the Denso fuel pump recall and a GX suspension-lean bulletin. Kept.", g: "A" },
    { t: "Toyota Camry, Avalon, Lexus ES: found the UA80 8-speed class action (allegation, no recall or extension) and the 2018 Camry piston recall. Kept, 2018 Camry excluded.", g: "C", u: "https://www.slashgear.com/2079253/toyota-eight-speed-transmission-class-action-lawsuit/" },
    { t: "Toyota RAV4: found porous 2019–2020 engine blocks and a coolant-valve program; a class action was dismissed. Kept, 2019 excluded.", g: "A", u: NH("20V064") },
    { t: "Honda CR-V 2020–2022: found an oil-dilution class action (allegation) and an A/C seal extension. Kept.", g: "C" },
    { t: "Buick LaCrosse: recalls and service updates only; no class action. Kept.", g: "A" },
    { t: "Downgraded after the search: Lexus NX 2.0T (valve-guide bulletin), Honda HR-V (CVT belt program), Lincoln MKZ 2.0T (coolant intrusion), Chrysler 300 (airbag recall), Toyota Highlander 2017–2022 V6 (8-speed whine), Honda Pilot and Ridgeline V6 (bearing investigation), Tundra 2022–2024 (engine recalls).", g: "A" },
    { t: "Separate verification run (107 agents, each claim voted on by three verifiers): confirmed the three Tundra/LX/GX engine recalls and the June 2026 switch to inspection-first remedies, the Hyundai/Kia 15-year/150k engine settlement, the expired Nissan CVT and Ford cam phaser programs, Subaru's 2019–2020 CVT extension, Ford 10-speed bulletin 23-2123, J.D. Power's 2026 winners and CR's used top picks. It voted down the 2025 iSeeCars figures only because the September 2026 edition replaced them, not because they were wrong.", g: "A" },
    { t: "The verification run found the same GM 6.2L investigation figures (997,743 vehicles, 499 failures after the fix, 6,953 GM-reported complaints) in trade coverage, but did not carry those claims or the Honda 1.5T and GM lifter items through its vote. Those rest on the NHTSA and Consumer Reports documents cited in each model entry.", g: "B", u: "https://truckdaily.com/features/nhtsa-ea26005-gm-62-l87/" },
    { t: "Checked and refuted: “2019 RAV4 fuel tank” is a Hybrid issue; the Tacoma axle recall is 2022–2023, not 2024+; no Gladiator frame-weld recall exists; the 2023+ Sequoia is not in the V6 engine recalls; the Buick Verano is not in GM's oil-consumption program.", g: "A" }
  ]
};

RC.sources = [
  { t: "J.D. Power 2026 U.S. Vehicle Dependability Study", u: "https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/", g: "A" },
  { t: "J.D. Power 2025 U.S. Vehicle Dependability Study", u: "https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/", g: "A" },
  { t: "J.D. Power dependability award pages, 2018–2025", u: "https://www.jdpower.com/cars/ratings/dependability/2025", g: "A" },
  { t: "Consumer Reports: Who Makes the Most Reliable New Cars (Dec 2025)", u: "https://www.consumerreports.org/cars/car-reliability-owner-satisfaction/who-makes-the-most-reliable-cars-a7824554938/", g: "A" },
  { t: "Consumer Reports: Which Brands Have the Best Long-Term Reliability", u: "https://www.consumerreports.org/cars/which-brands-make-the-best-used-cars-a2811658468/", g: "A" },
  { t: "Consumer Reports: Used Car 10 Top Picks (July 2026)", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/", g: "A" },
  { t: "Consumer Reports: Used Cars to Avoid (list paywalled)", u: "https://www.consumerreports.org/cars/used-cars-to-avoid-buying-a4034931071/", g: "A" },
  { t: "Consumer Reports: 2026 Automotive Brand Report Card", u: "https://www.consumerreports.org/media-room/press-releases/2025/12/consumer-reports-releases-its-2026-automotive-brand-report-card-the-comprehensive-analysis-of-vehicle-quality-to-help-guide-car-shoppers-amid-steep-prices/", g: "A" },
  { t: "Consumer Reports model-year reliability pages (about 400 read)", u: "https://www.consumerreports.org/cars/toyota/camry/2021/reliability/", g: "A" },
  { t: "iSeeCars Longest-Lasting Cars study", u: "https://www.iseecars.com/longest-lasting-cars-study", g: "A" },
  { t: "Road & Track on the iSeeCars 2026 study", u: "https://www.roadandtrack.com/news/a73741744/20-longest-lasting-cars-trucks-suvs-2026/", g: "B" },
  { t: "Guide Auto on CR's 67 used cars to avoid (Feb 2025)", u: "https://www.guideautoweb.com/en/articles/77355/", g: "C" },
  { t: "NHTSA EA26005: GM 6.2L V8 engine failures", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf", g: "A" },
  { t: "NHTSA PE25008: Honda 3.5L V6 rod bearings", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf", g: "A" },
  { t: "NHTSA 26V320: Toyota Tundra engine (third recall)", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf", g: "A" },
  { t: "NHTSA 25V767: Tundra, LX, GX engine", u: "https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf", g: "A" },
  { t: "NHTSA 24V381: Tundra and LX 600 engine replacement", u: "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V381-6004.PDF", g: "A" },
  { t: "NHTSA 26V237: F-150 6R80 downshift", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf", g: "A" },
  { t: "NHTSA consent orders: Hyundai and Kia Theta II", u: "https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall", g: "A" },
  { t: "Kia/Hyundai Theta II settlement final approval", u: "https://www.kiaenginesettlement.com/Content/Documents/Order%20Granting%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf", g: "A" },
  { t: "Hyundai engine coverage (TXXM)", u: "https://autoservice.hyundaiusa.com/TXXM", g: "A" },
  { t: "Subaru CVT extension 16-155-25R (2025)", u: "https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf", g: "A" },
  { t: "Nissan CVT extension bulletin (2023)", u: "https://static.nhtsa.gov/odi/tsbs/2023/MC-10246457-0001.pdf", g: "A" },
  { t: "Mazda CSP11 cylinder head coverage", u: "https://static.nhtsa.gov/odi/tsbs/2024/MC-11011136-0001.pdf", g: "A" },
  { t: "Ford 2.0L EcoBoost coolant intrusion TSB 19-2346", u: "https://static.nhtsa.gov/odi/tsbs/2019/MC-10169807-0001.pdf", g: "A" },
  { t: "Ford 3.5 EcoBoost cam phaser program", u: "https://static.nhtsa.gov/odi/tsbs/2021/MC-10189763-0001.pdf", g: "A" },
  { t: "Toyota Tacoma frame corrosion program", u: "https://static.nhtsa.gov/odi/tsbs/2024/MC-10251755-9999.pdf", g: "A" },
  { t: "Honda oil dilution warranty extension (CR)", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines", g: "A" },
  { t: "FTC statement on used cars with open recalls", u: "https://www.ftc.gov/system/files/documents/cases/161216_six_auto_recall_cases_statement_of_the_commission_1_0.pdf", g: "A" },
  { t: "FTC: Buying a used car from a dealer", u: "https://consumer.ftc.gov/articles/buying-used-car-dealer", g: "A" },
  { t: "NMVTIS title check", u: "https://vehiclehistory.bja.ojp.gov/nmvtis_consumers", g: "A" },
  { t: "The Drive: Toyota won't replace every recalled Tundra V6", u: "https://www.thedrive.com/news/toyota-wont-replace-every-recalled-tundra-v6-and-some-owners-are-fed-up", g: "B" },
  { t: "Cars.com: J.D. Power 2026 full brand list", u: "https://www.cars.com/articles/tech-powertrain-glitches-drive-low-scores-in-j-d-power-dependability-study-521710/", g: "B" }
];
