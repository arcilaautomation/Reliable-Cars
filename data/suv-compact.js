// Compact and subcompact SUVs and crossovers. Source: research/05-suv-compact.md
RC.models.push(
{
  id: "toyota-rav4", seg: "suv", cls: "Compact SUV", name: "Toyota RAV4", v: "top",
  buy: "2.5L gas: 2021–2023 and 2016–2018",
  skip: "2019 first year (seven recalls); early-build 2015 (torque-converter shudder)",
  gens: "XA40 2013–2018 (2.5L, 6-speed) · XA50 2019+ (2.5L Dynamic Force, 8-speed)",
  summary: { t: "CR rates every year from 2015 to 2023 above average, with 2021 and 2023 much more reliable, and J.D. Power named the 2022 best compact SUV. Weak points are limited to a small batch of porous 2019–2020 engine blocks and a coolant valve Toyota covers for 10 years on 2019–2021 cars.", g: "A", u: CR("toyota", "rav4", 2021) },
  faults: [
    { t: "Engine block casting porosity on 2019–2020 blocks cast Sept–Nov 2019; recall 20V064 replaces the engine.", g: "A", u: NH("20V064") },
    { t: "Coolant bypass valve cracks (“Engine Maintenance Required”, P2681). Toyota program 24TE04 covers 2019–2021 for 10 yr/100k; 2022–2023 are not covered.", g: "A", u: "https://dot.report/bulletins/11012750" },
    { t: "2013–2015 torque-converter shudder at 25–50 mph; Toyota's ZH1 coverage has expired.", g: "A", u: TSB("2017/MC-10140600-9999.pdf") },
    { t: "The 2019–2021 fuel tank that only takes about 10 gallons is a RAV4 Hybrid issue, not the gas model.", g: "C", u: "https://www.torquenews.com/1083/toyota-rav4-hybrid-fuel-tank-issue-fixed-customer-support-program" }
  ],
  recalls: [
    { id: "20V064", t: "2019–2020: engine block porosity", g: "A", u: NH("20V064") },
    { id: "20V286", t: "2019–2020: front lower control arms can crack", g: "A", u: NH("20V286") },
    { id: "23V734", t: "2013–2018: replacement battery can short against hold-down", g: "A", u: NH("23V734") }
  ],
  evidence: [
    { t: "CR: 2015–2020 and 2022 more reliable; 2021 and 2023 much more; 2024 about average", g: "A", u: CR("toyota", "rav4", 2023) },
    { t: "J.D. Power Compact SUV winner MY2022", g: "A", u: JDP(2025) },
    { t: "iSeeCars 2025: 7.3% reach 250k miles (Hybrid 7.9%)", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: [
    "Run the VIN for 20V064, 20V286 and 23V734",
    "Scan for P2681; look for pink coolant crust at the back of the engine",
    "On XA40, cruise at 25–50 mph at light throttle to feel for shudder",
    "Ask for oil-change records at 5–10k mile intervals"
  ]
},
{
  id: "honda-crv", seg: "suv", cls: "Compact SUV", name: "Honda CR-V", v: "top",
  buy: "1.5T 2020–2022; 2.4L 2015–2016 (and 2017–2019 LX 2.4)",
  skip: "2017–2018 1.5T, especially from cold states (oil dilution; extension expired)",
  gens: "RM 2012–2016 (2.4L) · RW 2017–2022 (2.4L LX, 1.5T) · RS 2023+ (1.5T)",
  summary: { t: "CR rates every year except 2018 more reliable, and iSeeCars puts it first among compact SUVs for reaching 250,000 miles. The 2017–2018 1.5 turbo let fuel into the oil; Honda's extended coverage for it has expired.", g: "A", u: CR("honda", "cr-v", 2020) },
  faults: [
    { t: "1.5T oil dilution on 2017–2018; Honda's 6-year extension has expired. A class action alleges it continued on 2019–2023 (Honda denies it).", g: "A", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines" },
    { t: "A/C compressor seal leak on 2017–2022 1.5T; Honda extended coverage to 10 years from purchase (SB 23-040).", g: "A", u: TSB("2023/MC-10237039-0001.pdf") },
    { t: "2015 vibration at idle and 40–50 mph, fixed by TSB 15-046 software and mounts.", g: "C" }
  ],
  recalls: [
    { id: "26V332", t: "2017–2022: passenger seat weight sensor (May 2026; likely open)", g: "A", u: NH("26V332") },
    { id: "19V865", t: "2019–2020: rear subframe bolts", g: "A", u: NH("19V865") },
    { id: "23V858", t: "Fuel pump (Denso)", g: "A", u: NH("23V858") }
  ],
  evidence: [
    { t: "CR: more reliable 2015–2017 and 2019–2022, 2024–2025; 2018 about average", g: "A", u: CR("honda", "cr-v", 2021) },
    { t: "iSeeCars 2025: 10.6% reach 250k, best compact SUV in scope", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Pull the dipstick: overfull or fuel smell is a warning on a 1.5T", "Check A/C output; a compressor leak is covered", "Confirm 26V332, 19V865 and 23V858"]
},
{
  id: "toyota-corolla-cross", seg: "suv", cls: "Subcompact SUV", name: "Toyota Corolla Cross", v: "top",
  buy: "2022–2024 (2.0L)",
  skip: "2025 (CR below average on electronics; thin data)",
  gens: "XG10 2022+ (2.0L, CVT with launch gear)",
  summary: { t: "CR rates all three of its first model years much more reliable. The search for problems found only airbag-panel recalls and a stop-start bulletin.", g: "A", u: CR("toyota", "corolla-cross", 2023) },
  recalls: [{ id: "23V864", t: "Passenger airbag panel perforation (also 23V384)", g: "A", u: NH("23V864") }],
  evidence: [{ t: "CR: 2022, 2023, 2024 much more reliable; 2025 less", g: "A", u: CR("toyota", "corolla-cross", 2022) }],
  inspect: ["Confirm the airbag recalls", "Check stop-start restarts with the wipers on", "Keep CVT fluid records"]
},
{
  id: "lexus-nx", seg: "suv", cls: "Compact luxury SUV", name: "Lexus NX", v: "top",
  buy: "NX 300h hybrid 2015–2021; NX 250/350 2022–2023",
  skip: "NX 200t/300 2.0T without a compression test (valve-guide wear)",
  gens: "AZ10 2015–2021 (2.0T, 300h hybrid) · AZ20 2022+ (2.5L, 2.4T, hybrids)",
  summary: { t: "CR rates every year 2015–2023 more or much more reliable, and J.D. Power named it best in segment for MY2019–2021. The 2.0 turbo has a Toyota bulletin for worn exhaust valve guides that ends in a new cylinder head, covered only within the 6-year/70k warranty.", g: "A", u: TSB("2021/MC-10190467-9999.pdf") },
  faults: [
    { t: "2.0T (8AR-FTS) exhaust valve guides wear: misfire and limp mode. Toyota bulletin L-SB-0007-21 replaces the head; no extension.", g: "A", u: TSB("2021/MC-10190467-9999.pdf") },
    { t: "NX 300h brake booster leak; program 24LE03 covers 2018–2021 for 10 yr/150k.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-11014217-0001.pdf" }
  ],
  evidence: [
    { t: "CR: 2015, 2019–2021, 2023 much more reliable; 2016–2018, 2022 more; 2024 about average", g: "A", u: CR("lexus", "nx", 2019) },
    { t: "J.D. Power Compact Premium SUV winner MY2019, 2020, 2021", g: "A", u: JDP(2024) }
  ],
  inspect: ["On a 2.0T, get a compression or leak-down test and ask whether the head was replaced", "On a 300h, scan for brake codes C1391/C1252", "Fuel pump recall on 2018–2019 NX 300"]
},
{
  id: "subaru-crosstrek", seg: "suv", cls: "Subcompact SUV", name: "Subaru Crosstrek", v: "top",
  buy: "2019–2024 (2.0L)",
  skip: "2015–2017 (CR below average)",
  gens: "GP 2013–2017 · GT 2018–2023 (2.0L; 2.5L from 2021) · GU 2024+",
  summary: { t: "CR rates 2019–2023 more reliable and 2024 much more reliable, and the 2023 won J.D. Power's Small SUV award. Subaru added the 2019 CVT to its 10-year/100k extended coverage in 2025.", g: "A", u: CR("subaru", "crosstrek", 2021) },
  faults: [
    { t: "Thermostat control valve failure on 2021 (coolant warnings, driver aids off); class action pending.", g: "C" },
    { t: "CVT coverage 10 yr/100k on 2016–2019 Crosstrek; 2020+ not listed.", g: "A", u: TSB("2025/MC-11021247-0001.pdf") }
  ],
  recalls: [{ id: "21V263", t: "2018–2019: rear stabilizer bolts", g: "A", u: NH("21V263") }],
  evidence: [
    { t: "CR: 2015–2017 less; 2018 about average; 2019–2023 more; 2024 much more", g: "A", u: CR("subaru", "crosstrek", 2024) },
    { t: "J.D. Power Small SUV winner MY2023", g: "A", u: "https://www.prnewswire.com/news-releases/subaru-crosstrek-named-the-most-dependable-small-suv-in-jd-power-2026-us-vehicle-dependability-study-302688937.html" }
  ],
  inspect: ["Confirm CVT coverage through a Subaru dealer", "Scan for thermostat-valve codes on 2021", "Battery drain test"]
},
{
  id: "mazda-cx5", seg: "suv", cls: "Compact SUV", name: "Mazda CX-5", v: "strong",
  buy: "2.5L non-turbo 2023–2025; 2015",
  skip: "2.5 turbo (cylinder head cracks); 2018–2019 until recall 19V497 is done",
  gens: "KE 2013–2016 · KF 2017–2025 (2.5L, 2.5T from 2019)",
  summary: { t: "CR rates 2023 and 2025 much more reliable and 2024 more reliable; 2016–2022 are average. The turbo engine has bulletins for a cylinder head that cracks and leaks coolant, and Mazda's 10-year coverage on it is limited.", g: "A", u: CR("mazda", "cx-5", 2023) },
  faults: [
    { t: "2018–2019 cylinder-deactivation rocker arm can dislodge: misfire, stall. Recall 19V497 reprograms the engine computer.", g: "A", u: NH("19V497") },
    { t: "2.5T cylinder head crack near the exhaust manifold: coolant loss, overheating. Mazda bulletins and two class actions.", g: "C", u: "https://www.classaction.org/media/jarvis-et-al-v-mazda-motor-of-america-inc-et-al.pdf" },
    { t: "Mazda Connect infotainment reboots; a settlement extends coverage for 2016–2020 CX-5.", g: "A", u: "https://www.mazdainfotainmentsettlement.com/" }
  ],
  evidence: [
    { t: "CR: 2015 more; 2016–2022 about average; 2023, 2025 much more; 2024 more", g: "A", u: CR("mazda", "cx-5", 2025) },
    { t: "CR Used Car Top Pick (May 2025): 2018 CX-5", g: "B" }
  ],
  inspect: ["On a 2.5T, look for dried coolant at the back of the head and ask about overheating", "Confirm 19V497 on 2018–2019", "Test infotainment for reboots"]
},
{
  id: "honda-hrv", seg: "suv", cls: "Subcompact SUV", name: "Honda HR-V", v: "strong",
  buy: "2019–2020; 2024",
  skip: "2023 first year of the new generation (CR below average)",
  gens: "1st gen 2016–2022 (1.8L CVT) · 2nd gen 2023+ (2.0L CVT)",
  summary: { t: "CR rates 2020 much more reliable. The 2016–2020 CVT belt can wear early; Honda's fix is software plus a 7-year/150k extension that only applies once the update is done.", g: "A", u: TSB("2021/MC-10191763-0001.pdf") },
  faults: [{ t: "2016–2020 CVT belt deterioration; Product Update 21-046 and Warranty Extension 21-047 (7 yr/150k after the update).", g: "A", u: TSB("2021/MC-10191763-0001.pdf") }],
  evidence: [
    { t: "CR: 2017, 2019, 2024 more; 2020 much more; 2016, 2018, 2021, 2022, 2025 about average; 2023 less", g: "A", u: CR("honda", "hr-v", 2020) },
    { t: "iSeeCars 2026: 17.6% reach 250k miles", g: "C" }
  ],
  inspect: ["Confirm update 21-046 was done, or the extension doesn't apply", "Check for a flashing D light or P271E"]
},
{
  id: "lexus-ux", seg: "suv", cls: "Subcompact luxury SUV", name: "Lexus UX", v: "strong",
  buy: "2019–2023",
  skip: "Fuel pump recall on 2019 UX 200",
  gens: "2019+ (UX 200 2.0L to 2022; UX 250h hybrid)",
  summary: { t: "CR rates 2019 and 2021 more reliable and 2023 much more reliable; J.D. Power named the 2019 and 2023 best in segment. CR's sample leans hybrid.", g: "A", u: CR("lexus", "ux", 2023) },
  inspect: ["Close the fuel pump recall", "Hybrid system health check"]
},
{
  id: "toyota-chr", seg: "suv", cls: "Subcompact SUV", name: "Toyota C-HR", v: "strong",
  buy: "2020; 2018–2019",
  skip: "2021–2022 have no CR data",
  gens: "2018–2022 (2.0L, CVT)",
  summary: { t: "Slow but simple. CR rates 2020 more reliable and the 2020 won J.D. Power's Small SUV award.", g: "A", u: JDP(2023) },
  inspect: ["Standard CVT and brake checks"]
},
{
  id: "mazda-cx3", seg: "suv", cls: "Subcompact SUV", name: "Mazda CX-3", v: "strong",
  buy: "2018–2019",
  skip: "Test infotainment",
  gens: "2016–2021 (2.0L, 6-speed automatic)",
  summary: { t: "CR rates 2018 and 2019 more reliable; the rest are average.", g: "A", u: CR("mazda", "cx-3", 2019) },
  inspect: ["Infotainment test (settlement covers 2016–2021)", "Close recalls"]
},
{
  id: "nissan-kicks", seg: "suv", cls: "Subcompact SUV", name: "Nissan Kicks", v: "strong",
  buy: "2022–2024",
  skip: "2019–2020 (CR below average)",
  gens: "1st gen 2018–2024 (1.6L CVT) · 2nd gen 2025+",
  summary: { t: "CR rates 2022–2024 more reliable and J.D. Power named the 2022 best small SUV. CVT judder is handled by dealer bulletins, not an extended warranty.", g: "A", u: JDP(2025) },
  faults: [{ t: "CVT judder and belt slip; bulletins NTB19-040, NTB20-060, NTB22-021A replace parts or the CVT (no extension).", g: "A", u: TSB("2023/MC-10232664-0001.pdf") }],
  inspect: ["Scan for P17F0/P17F1", "Light-throttle 0–30 mph judder test"]
},
{
  id: "hyundai-venue", seg: "suv", cls: "Subcompact SUV", name: "Hyundai Venue", v: "strong",
  buy: "2021–2022",
  skip: "Second owners get 5 yr/60k powertrain",
  gens: "2020+ (1.6L, IVT)",
  summary: { t: "CR rates 2021–2022 more reliable and 2023–2024 about average.", g: "A", u: CR("hyundai", "venue", 2021) },
  inspect: ["Standard checks; confirm powertrain warranty terms"]
},
{
  id: "chevy-equinox", seg: "suv", cls: "Compact SUV", name: "Chevrolet Equinox / GMC Terrain", v: "mixed",
  buy: "1.5T 2022–2024; 2019",
  skip: "2025 redesign (CR much below average); 2015 and 2017",
  gens: "2010–2017 (2.4L, 3.6 V6) · 2018–2024 (1.5T, 2.0T) · 2025+",
  summary: { t: "J.D. Power has named the Equinox best compact SUV five times, but CR rates 2015 and 2017 below average and puts the 2025 redesign last among 20 compact SUVs. The 2022–2024 are the years both agree on.", g: "A", u: CR("chevrolet", "equinox", 2023) },
  faults: [
    { t: "2.4L oil consumption: GM's coverage ends with early-2013 builds, so 2015–2017 are not covered.", g: "A", u: TSB("2020/MC-10171430-9999.pdf") },
    { t: "1.5T coolant-loss reports are forum-level only; no GM program found.", g: "D" }
  ],
  evidence: [
    { t: "CR: 2019, 2022, 2023, 2024 more; 2015, 2017 less; 2025 much less", g: "A", u: CR("chevrolet", "equinox", 2025) },
    { t: "J.D. Power Compact SUV winner MY2015, 2016, 2017, 2021, 2023", g: "A", u: JDP(2024) },
    { t: "CR Used Car Top Pick (July 2026): 2019 Equinox", g: "A", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/" }
  ],
  inspect: ["On a 2.4L, run an oil-consumption test", "On a 1.5T, check coolant level and look for white smoke"]
},
{
  id: "subaru-forester", seg: "suv", cls: "Compact SUV", name: "Subaru Forester", v: "mixed",
  buy: "2022–2024",
  skip: "2015–2018 and 2020 (CR below average); 2019 without PCV recall",
  gens: "SJ 2014–2018 · SK 2019–2024 · SL 2025",
  summary: { t: "Subaru's brand reputation doesn't carry over to every Forester year: CR rates 2015–2018 and 2020 less reliable. CVT coverage runs 10 years/100k on 2016–2020.", g: "A", u: CR("subaru", "forester", 2016) },
  faults: [
    { t: "2019 PCV valve can break apart: white smoke, power loss. Recall 19V856 replaces the short block if fragments aren't found.", g: "A", u: NH("19V856") },
    { t: "Thermostat control valve failure, 2019–2021 (class action pending).", g: "C" },
    { t: "The FB25 oil-consumption settlement covered 2011–2014, not the 2015+ cars.", g: "C" }
  ],
  evidence: [{ t: "CR: 2015–2018 less; 2019, 2021 about average; 2020 less; 2022–2024 more", g: "A", u: CR("subaru", "forester", 2023) }],
  inspect: ["Confirm CVT coverage", "On 2019, confirm recall WUW-08 and whether the short block was replaced", "Battery drain test"]
},
{
  id: "subaru-outback", seg: "suv", cls: "Midsize wagon/SUV", name: "Subaru Outback", v: "mixed",
  buy: "2.5L 2023–2025",
  skip: "2018–2020 (CR below average); 2020–2021 without CVT chain-slip recall",
  gens: "BS 2015–2019 (2.5L, 3.6R) · BT 2020+ (2.5L, 2.4T)",
  summary: { t: "iSeeCars scores the Outback highest in its class for longevity, but that pools older generations. CR rates 2018–2020 less reliable and 2023–2025 more reliable.", g: "A", u: CR("subaru", "outback", 2020) },
  recalls: [{ id: "22V485", t: "2020–2021: CVT chain slip", g: "A", u: NH("22V485") }],
  evidence: [{ t: "CR: 2015–2017 about average; 2018–2020 less; 2021–2022 about average; 2023–2025 more", g: "A", u: CR("subaru", "outback", 2023) }],
  inspect: ["Confirm 22V485 and the CVT extension", "Stress-test the 11.6-inch screen", "Battery test"]
},
{
  id: "acura-rdx", seg: "suv", cls: "Compact luxury SUV", name: "Acura RDX", v: "mixed",
  buy: "2015 V6; 2019; 2022",
  skip: "2018 (CR below average)",
  gens: "TB 2013–2018 (3.5 V6) · TC 2019+ (2.0T, 10-speed)",
  summary: { t: "CR's year-by-year ratings swing between average and more reliable; iSeeCars gives it a 7.2% chance of reaching 250,000 miles.", g: "A", u: CR("acura", "rdx", 2019) },
  inspect: ["Close Honda-wide recalls (fuel pump, 26V332)", "Timing belt service on the V6"]
},
{
  id: "mazda-cx30-cx50", seg: "suv", cls: "Subcompact SUV", name: "Mazda CX-30 / CX-50", v: "mixed",
  buy: "CX-30 2.5 non-turbo 2020 and 2024; CX-50 2024–2025 non-turbo",
  skip: "CX-30 2022, 2025; CX-50 2023; turbo models",
  gens: "CX-30 2020+ · CX-50 2023+",
  summary: { t: "Year-to-year CR ratings swing: CX-30 2020 and 2024 more reliable, 2022 and 2025 less; CX-50 2023 less.", g: "A", u: CR("mazda", "cx-30", 2024) },
  inspect: ["Prefer the non-turbo 2.5", "Coolant checks on turbo models"]
},
{
  id: "hyundai-tucson", seg: "suv", cls: "Compact SUV", name: "Hyundai Tucson", v: "mixed",
  buy: "2021; 2024–2025",
  skip: "2016–2019 (especially the 1.6T dual-clutch); 2022 first year",
  gens: "TL 2016–2021 (2.0L, 1.6T DCT, 2.4L) · NX4 2022+",
  summary: { t: "CR rates 2016–2019 and 2022 less reliable, but 2024 much more reliable. Older 2.0 engines carry 15-year/150k engine coverage once the knock-sensor software is installed.", g: "A", u: CR("hyundai", "tucson", 2018) },
  faults: [
    { t: "ABS module corrosion can cause an engine-compartment fire on 2016–2021; recall 20V543 (park outside until fixed).", g: "A", u: NH("20V543") },
    { t: "2016–2021 2.0L rod bearing coverage 15 yr/150k with KSDS software.", g: "A", u: "https://autoservice.hyundaiusa.com/TXXM" }
  ],
  evidence: [{ t: "CR: 2016–2019 less; 2021 more; 2022 less; 2024 much more; 2025 more", g: "A", u: CR("hyundai", "tucson", 2024) }],
  inspect: ["Confirm KSDS campaign 966/982 and recall 20V543", "Listen for bottom-end knock", "Test the 1.6T DCT in stop-and-go"]
},
{
  id: "kia-sportage", seg: "suv", cls: "Compact SUV", name: "Kia Sportage", v: "mixed",
  buy: "2022; 2025",
  skip: "2015, 2017–2018, 2021 (CR below average)",
  gens: "SL 2011–2016 · QL 2017–2022 (2.4L, 2.0T) · NQ5 2023+",
  summary: { t: "J.D. Power awards for MY2018 and MY2020 conflict with CR, which rates 2018 less reliable. Theta II engines through 2019 get a lifetime short-block warranty only with the KSDS update.", g: "A", u: CR("kia", "sportage", 2018) },
  evidence: [{ t: "CR: 2015, 2017, 2018, 2021 less; 2019, 2020, 2023, 2024 average; 2022, 2025 more", g: "A", u: CR("kia", "sportage", 2022) }],
  inspect: ["Confirm the KSDS campaign by VIN", "Cold-start knock check"]
},
{
  id: "kia-seltos", seg: "suv", cls: "Subcompact SUV", name: "Kia Seltos", v: "mixed",
  buy: "2022–2023; 2025",
  skip: "2021 (piston ring recall); 2024",
  gens: "2021+ (2.0L IVT, 1.6T)",
  summary: { t: "The 2021 2.0L is in a recall for piston rings that weren't heat-treated properly.", g: "A", u: NH("21V259") },
  recalls: [{ id: "21V259", t: "2021 Seltos, 2020–2021 Soul: piston oil rings", g: "A", u: NH("21V259") }],
  inspect: ["Confirm 21V259 and whether the engine was replaced"]
},
{
  id: "hyundai-kona", seg: "suv", cls: "Subcompact SUV", name: "Hyundai Kona", v: "mixed",
  buy: "2023",
  skip: "2018–2019, 2021, 2024 (CR below average)",
  gens: "OS 2018–2023 (2.0L, 1.6T DCT) · SX2 2024+",
  summary: { t: "2019–2021 2.0L engines are in a piston-ring recall; CR rates four of its eight years less reliable.", g: "A", u: NH("21V301") },
  recalls: [{ id: "21V301", t: "2019–2021: piston oil rings", g: "A", u: NH("21V301") }],
  inspect: ["Confirm 21V301 and the noise-sensing software", "Test the DCT on 1.6T cars"]
},
{
  id: "kia-soul", seg: "suv", cls: "Subcompact", name: "Kia Soul", v: "mixed",
  buy: "2023",
  skip: "2015–2020",
  gens: "PS 2014–2019 · SK3 2020+",
  summary: { t: "2012–2019 Soul engines had connecting-rod bearing failures that led to 15-year/150k coverage; CR rates 2015–2020 less reliable.", g: "A", u: "https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation" },
  inspect: ["KSDS completed", "21V259 status on 2020–2021"]
},
{
  id: "chevy-trax-trailblazer", seg: "suv", cls: "Subcompact SUV", name: "Chevrolet Trax / Trailblazer", v: "mixed",
  buy: "Trax 2025; Trailblazer 2023–2024",
  skip: "Trax 2017–2019; Trailblazer 2021",
  gens: "Trax 2015–2022 (1.4T), 2024+ (1.2T) · Trailblazer 2021+",
  summary: { t: "CR rates Trax 2017–2019 and Trailblazer 2021 less reliable; the newer years recover.", g: "A", u: CR("chevrolet", "trax", 2018) },
  inspect: ["Standard checks; look for coolant leaks on the 1.4T"]
},
{
  id: "buick-encore", seg: "suv", cls: "Subcompact SUV", name: "Buick Encore / Encore GX / Envision", v: "mixed",
  buy: "Envision 2017, 2023; Encore GX 2024",
  skip: "Encore 2015–2017; Encore GX 2020–2021, 2023",
  gens: "Encore 2013–2022 · Encore GX 2020+ · Envision 2016+",
  summary: { t: "J.D. Power awards to the 2017 Encore conflict with CR, which rates 2015 much less and 2017 less reliable.", g: "A", u: CR("buick", "encore", 2017) },
  inspect: ["On the Encore GX, check transmission behavior"]
},
{
  id: "bmw-x1-x3", seg: "suv", cls: "Compact luxury SUV", name: "BMW X1 / X3", v: "mixed",
  buy: "X3 2021–2023; X1 2021",
  skip: "X3 2016, 2018–2019",
  gens: "X1 F48 2016–2022 · X3 G01 2018–2024",
  summary: { t: "CR rates the 2021 X1 and 2023 X3 much more reliable; the 2021 X1 won J.D. Power's segment award. Budget for BMW running costs and the oil filter housing leak.", g: "A", u: CR("bmw", "x3", 2023) },
  inspect: ["Oil filter housing leak check", "Full dealer service history"]
},
{
  id: "mb-glc", seg: "suv", cls: "Compact luxury SUV", name: "Mercedes-Benz GLC", v: "mixed",
  buy: "2020–2022",
  skip: "2016–2018; 2023",
  gens: "X253 2016–2022 · X254 2023+",
  summary: { t: "CR rates 2020 and 2022 about average and other years less reliable; recall counts are high (20 on the 2020).", g: "A", u: CR("mercedes-benz", "glc", 2020) },
  inspect: ["Check every recall by VIN", "Full dealer service history"]
},
{
  id: "audi-q3-q5", seg: "suv", cls: "Compact luxury SUV", name: "Audi Q3 / Q5", v: "mixed",
  buy: "Q5 2020",
  skip: "Q3 2018, 2021; Q5 2016, 2018, 2022",
  gens: "Q3 2015–2018, 2019+ · Q5 to 2017, 2018+",
  summary: { t: "Only one year sampled (the 2020 Q5) rates above average with CR.", g: "A", u: CR("audi", "q5", 2020) },
  inspect: ["Coolant and water pump check", "Stored codes scan"]
},
{
  id: "ford-bronco-sport", seg: "suv", cls: "Compact SUV", name: "Ford Bronco Sport", v: "mixed",
  buy: "2024–2025, after the fuel-injector recall is complete",
  skip: "2021–2022",
  gens: "2021+ (1.5T three-cylinder, 2.0T)",
  summary: { t: "CR rates the 2021 much less reliable and the 2024 much more reliable. An open recall covers cracked fuel injectors and underhood fire risk on 2021–2024 1.5L models.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V467-9675.pdf" },
  recalls: [{ id: "25V467", t: "2021–2024 1.5L: cracked fuel injector, underhood fire; final remedy was pending", g: "A", u: NH("25V467") }],
  evidence: [{ t: "CR: 2021 much less; 2022 less; 2024 much more; 2025 more", g: "A", u: CR("ford", "bronco-sport", 2021) }],
  inspect: ["Confirm the final 25S76 remedy by VIN", "Check for fuel smell"]
},
{
  id: "nissan-rogue", seg: "suv", cls: "Compact SUV", name: "Nissan Rogue", v: "mixed",
  buy: "2019; 2021 (2.5L)",
  skip: "2015–2016; 2022–2025 1.5 VC-Turbo unless both bearing recalls are done",
  gens: "T32 2014–2020 (2.5L CVT) · T33 2021+ (2.5L in 2021; 1.5 VC-Turbo three-cylinder from 2022)",
  summary: { t: "The 1.5 VC-Turbo has two engine-bearing recalls, the second of which can replace the engine, plus a 10-year/120k long-block extension. CR's 2024 “much more reliable” rating predates these failures.", g: "A", u: NH("26V080") },
  faults: [
    { t: "1.5 VC-Turbo bearing seizure. Recall 25V437 (443,899 vehicles) and 26V080 (323,917 2023–2025 Rogues; engine replacement if needed).", g: "A", u: NH("26V080") },
    { t: "2014–2018 CVT: 84-month/84k extension, now expired.", g: "A", u: TSB("2022/MC-10211969-0001.pdf") }
  ],
  evidence: [{ t: "CR: 2015, 2016 less; 2019 more; 2024 much more; 2025 less; others about average", g: "A", u: CR("nissan", "rogue", 2024) }],
  inspect: ["Get written confirmation 25V437 and 26V080 are done, with the oil-pan inspection result", "Confirm the 120k engine extension by VIN", "CVT judder test on T32"]
},
{
  id: "nissan-rogue-sport", seg: "suv", cls: "Subcompact SUV", name: "Nissan Rogue Sport", v: "avoid",
  buy: "If you must: 2021",
  skip: "2017–2020, 2022",
  gens: "2017–2022 (2.0L, CVT)",
  summary: { t: "CR rates five of its six years less reliable, and the Rogue CVT settlement doesn't cover it.", g: "A", u: CR("nissan", "rogue-sport", 2019) },
  inspect: ["CVT inspection and fluid history"]
},
{
  id: "ford-escape", seg: "suv", cls: "Compact SUV", name: "Ford Escape", v: "avoid",
  buy: "Nothing in 2015–2024; the 2025 has thin data",
  skip: "2015–2024, all engines",
  gens: "3rd gen 2013–2019 (1.6T, 2.0T, 1.5T, 2.5L) · 4th gen 2020+ (1.5T three-cylinder, 2.0T, hybrids)",
  summary: { t: "CR rates every year from 2015 to 2024 below average. Every engine family has an engine-damage program or fire recall, and the 2020 model has 24 recalls.", g: "A", u: CR("ford", "escape", 2020) },
  faults: [
    { t: "2017–2019 1.5T coolant intrusion; Ford's one-time short-block program (21N12) runs 7 yr/84k, now expired for most.", g: "A", u: TSB("2022/MC-10213732-0001.pdf") },
    { t: "2020–2022 1.5L three-cylinder: cracked fuel injector, underhood fire (25V467).", g: "A", u: NH("25V467") },
    { t: "2020–2023 hybrid: engine block or oil pan breach and fire (Ford 23S27).", g: "A", u: "https://www.ford.com/support/how-tos/recall/recalls-and-faqs/23s27-escape-2020-2023-and-maverick-2022-2023-engine-failure-recall/" }
  ],
  evidence: [{ t: "CR: less reliable every year 2015–2021 and 2023–2024", g: "A", u: CR("ford", "escape", 2021) }],
  inspect: ["If you must: close every recall, pressure-test the cooling system and borescope a 1.5T"]
},
{
  id: "jeep-cherokee", seg: "suv", cls: "Compact SUV", name: "Jeep Cherokee / Compass / Renegade", v: "avoid",
  buy: "Cherokee 2021; Compass 2020, 2023–2024",
  skip: "Cherokee 2015–2020; Compass 2017–2019, 2022; Renegade 2015–2018",
  gens: "Cherokee KL 2014–2023 · Compass MP 2017+ · Renegade 2015–2023 (9-speed automatic)",
  summary: { t: "CR rates the Cherokee less reliable every year 2015–2020. The 9-speed had a shift-to-neutral recall, and the 2.4L has an oil-consumption reflash program.", g: "A", u: CR("jeep", "cherokee", 2017) },
  faults: [
    { t: "9-speed can shift to neutral unexpectedly (16V529, 2014–2015 Cherokee and 2015 Renegade).", g: "A", u: NH("16V529") },
    { t: "2.4L Tigershark oil consumption; FCA program W84 reflashes 270,667 vehicles.", g: "A", u: TSB("2021/MC-10188788-9999.pdf") }
  ],
  inspect: ["Check oil level and consumption", "Drive for harsh 1–2 and 2–3 shifts", "Check the AWD transfer unit for leaks"]
},
{
  id: "vw-tiguan", seg: "suv", cls: "Compact SUV", name: "Volkswagen Tiguan", v: "avoid",
  buy: "2020 or 2024",
  skip: "2015, 2018–2019, 2021–2023",
  gens: "1st gen to 2017 (Limited to 2018) · 2nd gen 2018–2024 · 3rd gen 2025+",
  summary: { t: "CR rates six of the eight years sampled less reliable, with engine cooling a recurring trouble spot.", g: "A", u: CR("volkswagen", "tiguan", 2021) },
  faults: [{ t: "Water pump and thermostat housing leaks; VW's 8-year/80k extension requires coolant-spec records.", g: "A", u: TSB("2022/MC-10214802-0001.pdf") }],
  recalls: [{ id: "22V176", t: "2021–2022: rear suspension knuckle corrosion", g: "A", u: NH("22V176") }],
  inspect: ["Pink crust at the water pump", "Coolant-spec records", "Close 22V176"]
}
);
