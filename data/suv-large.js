// Midsize, three-row and full-size SUVs. Source: research/06-suv-mid-large.md
RC.models.push(
{
  id: "lexus-gx", seg: "suv", cls: "Midsize luxury SUV", name: "Lexus GX", v: "top",
  buy: "GX 460 2015–2023 (4.6L V8)",
  skip: "2024 GX 550 unless the engine recall remedy is documented",
  gens: "GX 460 2010–2023 (4.6 V8, 6-speed) · GX 550 2024+ (3.4 twin-turbo V6, 10-speed)",
  summary: { t: "CR rates every GX 460 year sampled more or much more reliable, J.D. Power named the 2022 and 2023 best in segment, and iSeeCars gives it a 23% chance of reaching 250,000 miles. The 2024 redesign shares the recalled twin-turbo V6.", g: "A", u: CR("lexus", "gx", 2020) },
  faults: [
    { t: "Suspension (KDSS) lean to the right; TSB replaces a front spring under warranty.", g: "A", u: TSB("2021/MC-10201347-9999.pdf") },
    { t: "Secondary air injection pump and valves fail from moisture; Lexus coverage only reached 2013 models.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-10131778-9999.pdf" },
    { t: "2024 GX 550: machining debris can cause main-bearing failure (recall 25V767).", g: "A", u: NH("25V767") }
  ],
  recalls: [
    { id: "20V682", t: "2018–2019: fuel pump", g: "A", u: NH("20V682") },
    { id: "25V767", t: "2024 GX 550: engine debris, bearing failure", g: "A", u: NH("25V767") }
  ],
  evidence: [
    { t: "CR: 2016, 2023 more reliable; 2020 much more; 2024, 2025 less", g: "A", u: CR("lexus", "gx", 2023) },
    { t: "J.D. Power Midsize Premium SUV winner MY2016, 2017, 2018, 2022, 2023", g: "A", u: JDP(2025) },
    { t: "iSeeCars: 18.3% (2025) and 23.3% (2026) reach 250k", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Scan for air-injection codes P2440–P2445", "Check rear air-suspension leveling and KDSS lean", "Frame rust", "Confirm the fuel pump recall"]
},
{
  id: "toyota-4runner", seg: "suv", cls: "Midsize SUV", name: "Toyota 4Runner", v: "top",
  buy: "2015–2024 (4.0L V6); strongest data 2021–2024",
  skip: "Heavily modified or rusty trucks; 2025 redesign is promising but new",
  gens: "5th gen N280 2010–2024 (4.0 V6, 5-speed) · 6th gen 2025+ (2.4 turbo, 8-speed)",
  summary: { t: "CR rates every year sampled more or much more reliable, J.D. Power named the 2021 and 2023 best in segment, and it has about a one-in-three chance of reaching 250,000 miles. No engine or transmission campaign was found for 2015–2024.", g: "A", u: CR("toyota", "4runner", 2021) },
  faults: [
    { t: "No engine or transmission defect program found for 2015–2024. The fuel pump recall on 2018–2019 is the main open item to check.", g: "A", u: NH("20V682") },
    { t: "2025: blank instrument cluster at startup (25V595, software) and owner reports of a 1–2 shift clunk.", g: "C" }
  ],
  recalls: [{ id: "20V682", t: "2018–2019: fuel pump (also 20V012)", g: "A", u: NH("20V682") }],
  evidence: [
    { t: "CR: 2015, 2017, 2019, 2023 more reliable; 2021, 2024, 2025 much more", g: "A", u: CR("toyota", "4runner", 2024) },
    { t: "J.D. Power Midsize SUV winner MY2017, MY2021; tied Upper Midsize MY2023", g: "A", u: JDP(2024) },
    { t: "iSeeCars: 32.9% (2025) and 33.1% (2026) reach 250k", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Frame, control-arm mounts and brake lines for rust", "Torque-converter shudder at 25–45 mph", "Signs of off-road abuse: skid plate damage, lifts, big tires", "Front brake wear on 2023–2024"]
},
{
  id: "toyota-sequoia", seg: "suv", cls: "Full-size SUV", name: "Toyota Sequoia", v: "top",
  buy: "2015–2022 (5.7L V8)",
  skip: "2023–2024 redesign (CR below average, several recalls)",
  gens: "XK60 2008–2022 (5.7 V8, 6-speed) · 3rd gen 2023+ (3.4 twin-turbo hybrid, 10-speed)",
  summary: { t: "The longevity leader of every vehicle iSeeCars tracks: 42.3% reach 250,000 miles in its September 2026 study. CR has too few responses to rate the 5.7 V8 years. The 2023+ hybrid is not in the twin-turbo V6 engine recalls, which cover gas-only engines.", g: "B", u: "https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/" },
  faults: [{ t: "Secondary air-injection pumps and valves fail; Toyota's coverage ended with 2013 models.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-10132382-9999.pdf" }],
  recalls: [{ id: "20V682", t: "2018–2020: fuel pump", g: "A", u: NH("20V682") }],
  evidence: [
    { t: "iSeeCars 2025: 39.1% reach 250k, #1 of all vehicles", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "CR: 2024 less reliable (new generation); 2015–2022 not enough data", g: "A", u: CR("toyota", "sequoia", 2024) }
  ],
  inspect: ["Scan for air-injection codes P2440–P2445 and P0418", "Frame rust", "Water pump and timing cover seepage"]
},
{
  id: "lexus-rx", seg: "suv", cls: "Midsize luxury SUV", name: "Lexus RX", v: "top",
  buy: "RX 350 / RX 450h 2016–2022 (best 2019–2022)",
  skip: "2023 first year of the new generation (about average)",
  gens: "AL20 2016–2022 (3.5 V6, 8-speed; 450h hybrid) · AL30 2023+ (2.4 turbo, hybrids)",
  summary: { t: "J.D. Power named the RX best in segment for MY2019–2021 and CR rates 2022 much more reliable. 2016–2018 cars have a cam-housing oil leak that is now out of powertrain warranty.", g: "A", u: JDP(2024) },
  faults: [{ t: "2016–2018 oil leak from the cam sensor bolt holes; TSB replaces the cam housing, and the 6-year/70k coverage has expired.", g: "A", u: TSB("2018/MC-10143945-9999.pdf") }],
  recalls: [{ id: "20V682", t: "2017–2020: fuel pump", g: "A", u: NH("20V682") }],
  evidence: [
    { t: "CR: 2016 more; 2022 much more; 2023 about average; 2024 more", g: "A", u: CR("lexus", "rx", 2022) },
    { t: "iSeeCars: RX 10.7%; RX Hybrid 17.0% (2025), 28.9% (2026)", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Look for oil seepage at the cam housings", "Confirm the fuel pump recall", "Hybrid battery cooling fan and filter"]
},
{
  id: "toyota-highlander", seg: "suv", cls: "Three-row SUV", name: "Toyota Highlander", v: "strong",
  buy: "V6 2015–2019 (CR's 2018 Top Pick); 2021 and 2023–2024; Hybrid 2020–2024",
  skip: "2020 first year of the generation; any 2017–2022 V6 with a transmission whine",
  gens: "XU50 2014–2019 (3.5 V6; 8-speed from 2017) · XU70 2020+ (3.5 V6 to 2022, 2.4 turbo 2023+, hybrid)",
  summary: { t: "CR rates most years more reliable and names the 2018 its best used three-row SUV under $20,000; the 2020 won J.D. Power's Upper Midsize SUV award. The 8-speed used from 2017 has a narrow whine bulletin and a broader class-action allegation.", g: "A", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/" },
  faults: [
    { t: "8-speed whine or grind; TSB T-SB-0008-21 replaces the transaxle on 2021 units in a serial range.", g: "A", u: TSB("2021/MC-10188917-9999.pdf") },
    { t: "Broader 2017–2022 whine complaints and $7,000–12,000 repair quotes are forum and lawsuit claims only.", g: "C", u: "https://www.classaction.org/media/leboutheller-v-toyota-motor-sales-usa-inc-et-al-complaint.pdf" }
  ],
  recalls: [{ id: "20V682", t: "2017–2019: fuel pump", g: "A", u: NH("20V682") }],
  evidence: [
    { t: "CR: 2015, 2017, 2019, 2021, 2023, 2024 more reliable; 2020 about average", g: "A", u: CR("toyota", "highlander", 2023) },
    { t: "J.D. Power Upper Midsize SUV winner MY2020", g: "A", u: JDP(2023) },
    { t: "iSeeCars 2025: gas 12.7%; Hybrid 31.0% reach 250k", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["On 2017–2022 V6, listen for a rising whine at 20–50 mph as it warms", "On a 2021, check the transmission serial against the TSB", "Check that the second-row recliner locks"]
},
{
  id: "toyota-land-cruiser", seg: "suv", cls: "Full-size SUV", name: "Toyota Land Cruiser / Lexus LX 570", v: "strong",
  buy: "2016–2021 (5.7L V8)",
  skip: "Lexus LX 600 2022–2024 unless the engine recall is documented",
  gens: "200-series 2008–2021 (5.7 V8, 8-speed from 2016) · 250-series 2024+ (2.4 hybrid) · LX 600 2022+ (3.4 twin-turbo)",
  summary: { t: "Nothing negative turned up beyond the fuel pump recall, and iSeeCars scores it highest among large SUVs. It stays one step below top only because CR lacks data.", g: "A", u: "https://www.iseecars.com/most-reliable/most-reliable-suvs" },
  recalls: [
    { id: "20V682", t: "2018–2019: fuel pump", g: "A", u: NH("20V682") },
    { id: "24V381", t: "2022–2023 LX 600: engine replacement for machining debris", g: "A", u: NH("24V381") }
  ],
  inspect: ["Suspension (KDSS or AHC) leaks", "Air-injection codes", "Frame rust", "On an LX 600, engine replacement documentation"]
},
{
  id: "honda-passport", seg: "suv", cls: "Midsize SUV", name: "Honda Passport", v: "strong",
  buy: "2021–2025",
  skip: "2019 first year (about average)",
  gens: "2019–2025 (3.5 V6, 9-speed)",
  summary: { t: "CR rates 2021 more reliable. It uses the same V6 family as the Pilot but is not named in NHTSA's 2016–2020 rod-bearing investigation; that absence is not proof it's unaffected.", g: "A", u: CR("honda", "passport", 2021) },
  recalls: [{ id: "26V365", t: "Salt-belt Pilot/Passport/Ridgeline/MDX: rear subframe corrosion (June 2026)", g: "A", u: NH("26V365") }],
  inspect: ["Same engine checks as the Pilot", "In salt states, inspect the rear subframe"]
},
{
  id: "nissan-murano", seg: "suv", cls: "Midsize SUV", name: "Nissan Murano", v: "strong",
  buy: "2019–2024 (3.5 V6)",
  skip: "2025 redesign with the VC-Turbo engine (unproven)",
  gens: "Z52 2015–2024 (3.5 V6, CVT) · 4th gen 2025+ (2.0 VC-Turbo, 9-speed)",
  summary: { t: "An upgrade against Nissan's CVT reputation: CR rates 2022 much more reliable and J.D. Power named the 2022 and 2023 best midsize SUVs. The CVT remains an aging risk out of warranty.", g: "A", u: JDP(2025) },
  evidence: [{ t: "CR: 2016 more; 2019 about average; 2022 much more", g: "A", u: CR("nissan", "murano", 2022) }],
  inspect: ["CVT behavior and fluid records"]
},
{
  id: "nissan-armada", seg: "suv", cls: "Full-size SUV", name: "Nissan Armada", v: "strong",
  buy: "2017–2024 (5.6L V8)",
  skip: "2025 redesign (no data)",
  gens: "Y62 2017–2024 (5.6 V8, 7-speed) · 2025+ (3.5 twin-turbo)",
  summary: { t: "Limited data, but iSeeCars finds 5.8% reach 250,000 miles, above the SUV average, and no engine recall was found.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
  inspect: ["Timing chain and water pump noise", "Exhaust manifold rust", "7-speed shift quality"]
},
{
  id: "honda-pilot", seg: "suv", cls: "Three-row SUV", name: "Honda Pilot / Acura MDX", v: "mixed",
  buy: "Pilot 2021–2022; MDX 2014–2015",
  skip: "Pilot and MDX 2016–2020 (open rod-bearing investigation); 2023+ Pilot until the stall recall is done",
  gens: "Pilot 3rd gen 2016–2022 (3.5 V6, 6- or 9-speed), 4th gen 2023+ · MDX 2014–2020, 2022+",
  summary: { t: "CR rates every Pilot year from 2015 to 2020 less reliable. A connecting-rod bearing recall covers select 2016–2020 V6s, and NHTSA has a separate open investigation into 1.41M vehicles with 3,012 bearing-failure reports.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf" },
  faults: [
    { t: "3.5 V6 crank-pin grinding defect wears rod bearings (23V751, 248,999 vehicles).", g: "A", u: NH("23V751") },
    { t: "NHTSA PE25008 (Aug 2025): bearing failures outside the recall on 2016–2020 Pilot and MDX; no expanded recall found as of Sept 2026.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf" },
    { t: "2023–2025 Pilot: engine software can stall (25V031).", g: "A", u: NH("25V031") }
  ],
  evidence: [{ t: "CR Pilot: 2015–2020 less; 2021 more; 2022 much more; 2023–2024 about average; 2025 less", g: "A", u: CR("honda", "pilot", 2022) }],
  inspect: ["On 2016–2020, confirm 23V751 and listen for rod knock at cold start", "Ask about oil-change intervals", "Check 9-speed shift quality"]
},
{
  id: "toyota-grand-highlander", seg: "suv", cls: "Three-row SUV", name: "Toyota Grand Highlander", v: "mixed",
  buy: "2025",
  skip: "2024 until the curtain airbag recall is done",
  gens: "2024+ (2.4 turbo, 2.5 hybrid, Hybrid Max)",
  summary: { t: "CR rates 2025 much more reliable on one year of data. The 2024 was under a stop-sale for a curtain airbag defect.", g: "A", u: CR("toyota", "grand-highlander", 2025) },
  recalls: [{ id: "24V461", t: "2024 Grand Highlander and Lexus TX: curtain airbag", g: "A", u: NH("24V461") }],
  inspect: ["Airbag recall closed", "Hesitation on the 2.4 turbo"]
},
{
  id: "mazda-cx9", seg: "suv", cls: "Three-row SUV", name: "Mazda CX-9", v: "mixed",
  buy: "2021–2023, or a 2016–2020 with the cylinder head already replaced",
  skip: "2015 (Ford-built 3.7 V6)",
  gens: "2015 (3.7 V6) · 2nd gen 2016–2023 (2.5 turbo)",
  summary: { t: "Cylinder heads crack and leak coolant on 2016–2020 cars built before June 9, 2020. Mazda's CSP11 program extends that repair to 10 years/120k miles. CR rates 2018, 2021 and 2023 less reliable.", g: "A", u: TSB("2024/MC-11011136-0001.pdf") },
  evidence: [{ t: "CR: 2016 about average; 2018, 2021, 2023 less", g: "A", u: CR("mazda", "cx-9", 2021) }],
  inspect: ["Coolant crust on the exhaust side of the head", "Milky oil", "Check CSP11 eligibility by VIN"]
},
{
  id: "kia-telluride", seg: "suv", cls: "Three-row SUV", name: "Kia Telluride", v: "mixed",
  buy: "2021–2022 with every recall closed",
  skip: "2020, 2023–2024 (CR below average)",
  gens: "2020+ (3.8 V6, 8-speed)",
  summary: { t: "No engine or transmission program, but CR rates it less reliable, and a seat-motor fire recall covering 462,869 vehicles was reissued in July 2026 with a new fix.", g: "A", u: "https://www.nhtsa.gov/press-releases/park-outside-recall-kia-tellurides" },
  recalls: [{ id: "22V626", t: "2020–2022: tow-hitch wiring fire", g: "A", u: NH("22V626") }],
  evidence: [{ t: "CR: 2020, 2023, 2024 less reliable", g: "A", u: CR("kia", "telluride", 2023) }],
  inspect: ["Seat-motor recall SC316 and the 2026 re-recall", "Driveshaft rollaway recall", "Park on a slope and test"]
},
{
  id: "hyundai-palisade", seg: "suv", cls: "Three-row SUV", name: "Hyundai Palisade", v: "mixed",
  buy: "2021–2022",
  skip: "2020, 2023",
  gens: "2020–2025 (3.8 V6)",
  summary: { t: "CR rates 2021–2022 about average and 2020 and 2023 less. A 2025 recall covers seat-belt buckles that may not latch on 568,580 vehicles.", g: "A", u: CR("hyundai", "palisade", 2021) },
  recalls: [{ id: "22V633", t: "2020–2022: tow-hitch wiring fire", g: "A", u: NH("22V633") }],
  inspect: ["Test every seat-belt buckle", "Tow-hitch module recall"]
},
{
  id: "kia-sorento", seg: "suv", cls: "Midsize SUV", name: "Kia Sorento / Hyundai Santa Fe", v: "mixed",
  buy: "Sorento 2016–2020 3.3 V6; Santa Fe 2019–2020 2.4",
  skip: "Theta II 2.4 and 2.0T (Santa Fe Sport 2015–2018, Sorento 2016–2019); 2021–2022 2.5T dual-clutch without the recall",
  gens: "Sorento 2016–2020, 2021+ · Santa Fe Sport 2013–2018, Santa Fe 2019–2023, 2024+",
  summary: { t: "NHTSA fined Hyundai and Kia $210M over slow Theta II engine recalls. The 2021–2022 2.5 turbo dual-clutch can lose drive completely after an oil pump fault.", g: "A", u: "https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall" },
  recalls: [
    { id: "22V760", t: "2021–2022 Sorento 2.5T: transmission oil pump (loss of drive)", g: "A", u: NH("22V760") },
    { id: "22V746", t: "2021–2022 Santa Fe 2.5T: same fault", g: "A", u: NH("22V746") }
  ],
  evidence: [{ t: "CR Sorento: 2016, 2019, 2021, 2023 less reliable", g: "A", u: CR("kia", "sorento", 2019) }],
  inspect: ["Identify the engine from the VIN", "Dealer proof of KSDS and Theta II recalls", "Cold-start knock"]
},
{
  id: "chevy-tahoe", seg: "suv", cls: "Full-size SUV", name: "Chevrolet Tahoe / Suburban · GMC Yukon · Escalade", v: "mixed",
  buy: "2021–2024 5.3L V8 with lifter records; 2019–2020 5.3L with service history",
  skip: "Any 2021–2026 6.2L V8 (L87), including every 2021+ gas Escalade, while NHTSA's investigation is open",
  gens: "K2XX 2015–2020 (5.3/6.2, 6/8/10-speed) · T1XX 2021+ (5.3 L84, 6.2 L87, 3.0 diesel, 10-speed)",
  summary: { t: "J.D. Power has named the Tahoe the most dependable large SUV six times, but CR rates the 2021 much less reliable. The 6.2 V8 was recalled for bearing failures, and NHTSA opened an engineering analysis on Aug 20, 2026 after engines failed even after the recall fix.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf" },
  faults: [
    { t: "6.2 L87 bearing and crankshaft failures, 2021–2024 (recall 25V274, 597,571 vehicles).", g: "A", u: NH("25V274") },
    { t: "NHTSA EA26005 covers 997,743 2021–2026 L87s: 499 failures after the fix reported to NHTSA; GM reports 6,953.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf" },
    { t: "5.3/6.2 cylinder-deactivation lifter collapse (class action Harrison v. GM; repairs ~$3,300).", g: "C" },
    { t: "2015–2019 8-speed shudder: GM flushed in new fluid on 252,059 transmissions.", g: "C", u: "https://caselaw.findlaw.com/court/us-6th-circuit/117435962.html" }
  ],
  evidence: [
    { t: "CR Tahoe: 2016, 2019, 2023 less; 2021 much less", g: "A", u: CR("chevrolet", "tahoe", 2021) },
    { t: "J.D. Power Large SUV winner (Tahoe) MY2017, 2018, 2020–2023", g: "A", u: JDP(2024) },
    { t: "2015, 2017, 2021 Tahoe on CR used-cars-to-avoid lists", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" },
    { t: "iSeeCars 2025: Suburban 11.8%, Yukon XL 9.0%, Tahoe 7.7% reach 250k", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Read the engine code on the glovebox RPO label: L84/L83 is 5.3, L87/L86 is 6.2", "Cold-start ticking and misfire codes P0300–P0308 (lifters)", "On 2015–2019 8-speeds, feel for shudder at 25–50 mph", "On an L87, get the 25V274 remedy printout"]
},
{
  id: "chevy-traverse", seg: "suv", cls: "Three-row SUV", name: "Chevrolet Traverse / Blazer / GMC Acadia", v: "mixed",
  buy: "Traverse 2021–2023; Blazer 2022; Acadia 2020–2023",
  skip: "Acadia 2024–2025 (among CR's least reliable); Traverse 2015, 2018",
  gens: "Traverse 2018–2023 (3.6 V6, 9-speed), 2024+ (2.5T) · Blazer 2019+ · Acadia 2017–2023, 2024+",
  summary: { t: "CR rates the 2022 Traverse more reliable and J.D. Power named the 2021 best in segment. A shifter harness fault can leave the car unable to recognize Park.", g: "A", u: TSB("2024/MC-10251901-0001.pdf") },
  evidence: [
    { t: "CR Traverse: 2016, 2018, 2020, 2024 less; 2022 more", g: "A", u: CR("chevrolet", "traverse", 2022) },
    { t: "2015 Traverse on CR's Feb 2025 avoid list, despite a J.D. Power award", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" }
  ],
  inspect: ["Shift to Park and shut down 10 times; watch for the Shift to Park message", "9-speed shift quality"]
},
{
  id: "ford-expedition", seg: "suv", cls: "Full-size SUV", name: "Ford Expedition / Lincoln Navigator", v: "mixed",
  buy: "2019–2020 with cam phasers replaced; 2021–2024 with care",
  skip: "2018 (CR much below average, 14 recalls)",
  gens: "2015–2017 (3.5 twin-turbo, 6-speed) · 2018+ (3.5 twin-turbo, 10-speed)",
  summary: { t: "2018–2020 3.5 twin-turbos have cam phasers that rattle on cold start. Ford's prorated replacement program expired in January 2023. CR rates every year sampled below average.", g: "A", u: TSB("2022/MC-10209366-0001.pdf") },
  faults: [{ t: "2018–2021 10-speed harsh or delayed shifts; Ford TSB 23-2123 reflashes or overhauls the valve body (no extended coverage).", g: "A", u: TSB("2023/MC-10234596-0002.pdf") }],
  evidence: [{ t: "CR: 2016, 2020, 2022, 2024 less; 2018 much less", g: "A", u: CR("ford", "expedition", 2020) }],
  inspect: ["Cold start after 6+ hours: listen for a 2–5 second rattle", "Scan for P164C", "10-speed shift quality"]
},
{
  id: "ford-bronco", seg: "suv", cls: "Midsize SUV", name: "Ford Bronco / Edge", v: "mixed",
  buy: "Edge 2016 or 2022; Bronco with the intake-valve check documented",
  skip: "2021–2022 Bronco 2.7/3.0 built May–Oct 2021 without recall 24V635",
  gens: "Bronco 2021+ (2.3T, 2.7TT, 3.0 Raptor) · Edge 2015–2024",
  summary: { t: "Some 2.7 and 3.0 engines got intake valves that were too hard and can fracture. The recall inspects them and replaces failing engines. CR rates the 2022 and 2024 Bronco below average.", g: "A", u: NH("24V635") },
  recalls: [{ id: "24V635", t: "2021–2022 Nano V6: intake valves", g: "A", u: NH("24V635") }],
  inspect: ["Recall 24V635 evidence", "Roof and door leaks", "On an Edge 3.5, check coolant loss"]
},
{
  id: "nissan-pathfinder", seg: "suv", cls: "Three-row SUV", name: "Nissan Pathfinder", v: "mixed",
  buy: "2019–2020",
  skip: "2015–2016 (CVT, coverage expired); 2022+ (CR below average)",
  gens: "R52 2013–2020 (3.5 V6, CVT) · R53 2022+ (9-speed)",
  summary: { t: "The CVT extension to 7 years/84k miles on 2015–2018 cars has aged out on every vehicle.", g: "A", u: TSB("2022/MC-10218703-0001.pdf") },
  evidence: [{ t: "CR: 2015, 2017, 2022, 2024 less; 2019 about average", g: "A", u: CR("nissan", "pathfinder", 2019) }],
  inspect: ["CVT whine and judder at 20–40 mph", "CVT fluid service evidence"]
},
{
  id: "dodge-durango", seg: "suv", cls: "Three-row SUV", name: "Dodge Durango", v: "mixed",
  buy: "2016–2019 (3.6 V6)",
  skip: "2022 (CR below average)",
  gens: "WD 2014+ (3.6 V6, 5.7 V8, 6.4 SRT)",
  summary: { t: "CR rates 2016 and 2019 about average. Hemi lifter and Pentastar rocker arm class actions apply (allegations).", g: "A", u: CR("dodge", "durango", 2019) },
  inspect: ["Listen for Hemi tick or Pentastar rocker tick", "Misfire codes"]
},
{
  id: "vw-atlas", seg: "suv", cls: "Three-row SUV", name: "Volkswagen Atlas", v: "mixed",
  buy: "2020–2022",
  skip: "2018 (CR below average, 16 recalls); 2024",
  gens: "2018+ (2.0T; 3.6 VR6 through 2023)",
  summary: { t: "A wiring fault can switch off the passenger airbag with someone in the seat; two recalls cover 2018–2024.", g: "A", u: NH("24V464") },
  recalls: [{ id: "24V464", t: "2020–2024: passenger occupant detection mat", g: "A", u: NH("24V464") }],
  inspect: ["Watch the PASSENGER AIRBAG OFF light with an adult seated"]
},
{
  id: "luxury-large-euro", seg: "suv", cls: "Midsize luxury SUV", name: "BMW X5 / Mercedes GLE / Audi Q7", v: "mixed",
  buy: "BMW X5 2021–2023; Mercedes GLE 2017; Audi Q7 2023",
  skip: "Mercedes GLE 2020 (36 recalls); Audi Q7 2017; X5 2019",
  gens: "X5 G05 2019+ · GLE W167 2020+ · Q7 4M 2017+",
  summary: { t: "CR rates the 2022 X5 much more reliable; the 2020 GLE much less reliable, with 36 recalls.", g: "A", u: CR("bmw", "x5", 2022) },
  inspect: ["Full dealer service history", "Air suspension", "All recalls by VIN"]
},
{
  id: "ford-explorer", seg: "suv", cls: "Three-row SUV", name: "Ford Explorer / Lincoln Aviator", v: "avoid",
  buy: "Nothing stands out; 2017–2019 and 2023+ are mixed",
  skip: "2020–2022 and 2016; 2020 Aviator",
  gens: "U502 2011–2019 (3.5 V6, 2.3T, 3.5TT) · U625 2020+ (2.3T, 3.0T, 10-speed)",
  summary: { t: "CR rates the 2020 much less reliable, with 35 recalls. The rear axle mounting bolt can break and disconnect the driveshaft; Ford needed four recalls to fix it.", g: "A", u: NH("23V675") },
  faults: [
    { t: "2020–2022 rear axle bolt fatigue: loss of drive or rollaway. Recalls 22V255, 23V199, 23V675, 25V166.", g: "A", u: NH("23V675") },
    { t: "3.5 V6 internal water pump can leak coolant into the oil (class action Roe v. Ford; engine up to $8,500).", g: "C" }
  ],
  evidence: [{ t: "CR: 2016, 2018, 2022, 2024 less; 2020 much less", g: "A", u: CR("ford", "explorer", 2020) }],
  inspect: ["Confirm 23S55 hardware and 25S22 software", "Listen for rear axle clunk on launch", "On a 3.5 V6, check for milky oil"]
},
{
  id: "jeep-grand-cherokee", seg: "suv", cls: "Midsize SUV", name: "Jeep Grand Cherokee", v: "avoid",
  buy: "Nothing stands out",
  skip: "2022–2023 WL; any 4xe plug-in; WK2 2015–2021 is below average",
  gens: "WK2 2011–2021 · WL 2022+ (Grand Cherokee L 2021+)",
  summary: { t: "CR rates every year sampled less reliable and ranks Jeep last among brands. The WL's rear coil springs can detach; the recall had to be reissued in 2026 for faulty repairs.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V051-3975.pdf" },
  recalls: [
    { id: "23V413", t: "2021–2023: rear coil springs can detach", g: "A", u: NH("23V413") },
    { id: "26V051", t: "Re-recall of faulty 23V413 repairs", g: "A", u: NH("26V051") }
  ],
  evidence: [{ t: "CR: 2015, 2018, 2020, 2022, 2024 less reliable", g: "A", u: CR("jeep", "grand-cherokee", 2022) }],
  inspect: ["Confirm 64A and 26V051", "Hemi or Pentastar tick", "Air suspension and electrical faults"]
},
{
  id: "jeep-wrangler", seg: "suv", cls: "Off-road SUV", name: "Jeep Wrangler", v: "avoid",
  buy: "Buy one for what it does, not for dependability",
  skip: "2016 JK; 2018–2019 JL",
  gens: "JK 2007–2018 · JL 2018+ (3.6 V6, 2.0T, 4xe)",
  summary: { t: "CR rates the 2016 much less reliable and later years less; the JL's “death wobble” led FCA to replace steering dampers on about 192,000 2018–2019 Wranglers.", g: "A", u: TSB("2020/MC-10175528-9999.pdf") },
  evidence: [{ t: "CR: 2016 much less; 2018, 2020, 2023 less", g: "A", u: CR("jeep", "wrangler", 2018) }],
  inspect: ["Highway test over expansion joints above 55 mph", "Steering damper, track bar and ball joints", "Frame welds on 2018–2019"]
},
{
  id: "subaru-ascent", seg: "suv", cls: "Three-row SUV", name: "Subaru Ascent", v: "avoid",
  buy: "If you must: 2020+ with every recall closed",
  skip: "2019",
  gens: "2019+ (2.4 turbo, CVT)",
  summary: { t: "CR rates every year it has data for less reliable. The 2019 had two CVT chain recalls and a heater fire recall.", g: "A", u: CR("subaru", "ascent", 2019) },
  recalls: [
    { id: "19V855", t: "2019: CVT chain tension", g: "A", u: NH("19V855") },
    { id: "22V907", t: "2019–2022: heater ground bolt, fire", g: "A", u: NH("22V907") }
  ],
  inspect: ["WRK-21, WUV-07 and WRL-22 closed", "CVT judder"]
},
{
  id: "mazda-cx90", seg: "suv", cls: "Three-row SUV", name: "Mazda CX-90", v: "avoid",
  buy: "Nothing yet",
  skip: "2024; 2025 is borderline",
  gens: "2024+ (3.3 turbo inline-6 mild hybrid, 2.5 PHEV)",
  summary: { t: "CR rates 2024 much less reliable, with 11 recalls including several that cut drive power, and lists the CX-90 among its 10 least reliable 2026 models.", g: "A", u: CR("mazda", "cx-90", 2024) },
  recalls: [
    { id: "24V815", t: "Loss of drive power", g: "A", u: NH("24V815") },
    { id: "25V568", t: "Inaccurate fuel gauge", g: "A", u: NH("25V568") }
  ],
  inspect: ["Every recall closed", "Stored hybrid-system codes"]
}
);
