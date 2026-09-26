// Domestic, European and remaining luxury sedans. Source: research/04-sedans-dom-eu.md
RC.models.push(
{
  id: "buick-lacrosse", seg: "sedan", cls: "Large sedan", name: "Buick LaCrosse", v: "top",
  buy: "2015–2019 with the 3.6L V6",
  skip: "2.4L eAssist mild hybrid; early-build 2017 AWD",
  gens: "Gen 2 2010–2016 (3.6L LFX) · Gen 3 2017–2019 (3.6L LGX, 8-speed in 2017, 9-speed 2018–19)",
  summary: { t: "Best-documented domestic sedan in the range. Two straight J.D. Power Large Car awards (MY2015, MY2016), and Consumer Reports rates the 2017 more reliable than average. A targeted search for problems turned up recalls and service updates, but no class action.", g: "A", u: JDP(2019) },
  faults: [
    { t: "6T70 six-speed launch shudder or rough 2–3 shift on 2014–2016 cars. GM bulletin 18-NA-358 replaces the valve bodies.", g: "A", u: TSB("2021/MC-10212553-9999.pdf") },
    { t: "2018 stop/start software can cause rough running or a stall. Fixed by ECM reflash, GM Service Update N192266190.", g: "A", u: TSB("2019/MC-10166242-9999.pdf") },
    { t: "Shift-to-Park microswitch fault on Gen 3 cars (owner reports only).", g: "D" }
  ],
  recalls: [
    { id: "20V668", t: "2019: start/stop accumulator end-cap bolts", g: "A", u: NH("20V668") },
    { id: "18V576", t: "2018–2019: rear brake caliper piston coating", g: "A", u: NH("18V576") },
    { id: "16V651", t: "2014–2016: airbag sensing module software", g: "A", u: NH("16V651") }
  ],
  evidence: [
    { t: "J.D. Power VDS Large Car winner for MY2015 (2018 study) and MY2016 (2019 study)", g: "A", u: JDP(2018) },
    { t: "Consumer Reports: 2017 “more reliable than other cars”; 2015 and 2018 about average", g: "A", u: CR("buick", "lacrosse", 2017) }
  ],
  inspect: [
    "Run the VIN for 20V668, 18V576 and the 2018 stop/start reflash",
    "Feel for shudder pulling away (2015–16) and at highway cruise (2017 8-speed)",
    "Confirm stop/start restarts cleanly in traffic",
    "Check the water pump weep hole and coolant level"
  ]
},
{
  id: "chevy-impala", seg: "sedan", cls: "Large sedan", name: "Chevrolet Impala", v: "strong",
  buy: "2017–2020 with the 3.6L V6",
  skip: "2016 (CR below average); 2014 shift-cable recall",
  gens: "Gen 10 2014–2020 (3.6L V6 or 2.5L I4, 6T70 six-speed)",
  summary: { t: "The 2019 won J.D. Power's Large Car award, and CR rates every year from 2017 to 2020 about average. The one known weak point is a fixable transmission valve-body issue.", g: "A", u: JDP(2022) },
  faults: [
    { t: "6T70 transmission shudder or harsh 2–3 shift from valve-body wear. Bulletin 18-NA-358 lists 2014–2019 GM front-drive cars including the Impala.", g: "A", u: TSB("2021/MC-10212553-9999.pdf") },
    { t: "Spark-plug-tube oil seepage and cracked front catalytic-converter flange (low complaint counts).", g: "D" }
  ],
  recalls: [
    { id: "18V576", t: "2018–2019: rear brake calipers", g: "A", u: NH("18V576") },
    { id: "14V092", t: "2014: shift cable can detach", g: "A", u: NH("14V092") }
  ],
  evidence: [
    { t: "J.D. Power VDS Large Car winner for MY2019", g: "A", u: JDP(2022) },
    { t: "CR: 2017, 2018, 2019, 2020 about average; 2016 less reliable", g: "A", u: CR("chevrolet", "impala", 2018) }
  ],
  inspect: [
    "Pull away gently and cruise at 40–50 mph to feel for shudder",
    "Ask whether the transmission fluid has ever been changed",
    "Look for oil around the spark plug tubes and ticking from the front exhaust"
  ]
},
{
  id: "lincoln-mkz", seg: "sedan", cls: "Midsize luxury sedan", name: "Lincoln MKZ", v: "strong",
  buy: "2017–2020 3.0L twin-turbo V6, or a 2.0T built after April 8, 2019",
  skip: "2017–2019 2.0T built on or before April 8, 2019, unless a replacement engine is documented",
  gens: "2013–2020 (2.0T, 3.0TT V6 from 2017, 3.7 V6 to 2016)",
  summary: { t: "Good survey record, but only with the right engine. The 2019 won J.D. Power's Midsize Premium Car award and CR rates 2017–2018 more reliable than average. Those scores pool every engine, and the early 2.0T has a documented coolant-intrusion fault that Ford fixes with a new long block.", g: "A", u: TSB("2019/MC-10169807-0001.pdf") },
  faults: [
    { t: "2.0L EcoBoost coolant intrusion into the cylinders: white smoke, misfire, coolant loss. Ford TSB 19-2346, later 22-2229, prescribes a long-block replacement for 2017–2019 MKZ/Fusion built on or before April 8, 2019.", g: "A", u: TSB("2019/MC-10169807-0001.pdf") },
    { t: "3.7L V6 (2013–2016) has an internal water pump; a leak can contaminate the oil.", g: "D" }
  ],
  recalls: [
    { id: "23V162", t: "2013–2018: front brake hoses may rupture", g: "A", u: NH("23V162") },
    { id: "18V167", t: "2014–2018: steering wheel bolt may loosen", g: "A", u: NH("18V167") },
    { id: "19V632", t: "2013–2016: steering motor bolts corrode (salt states)", g: "A", u: NH("19V632") }
  ],
  evidence: [
    { t: "J.D. Power VDS Midsize Premium Car winner for MY2019", g: "A", u: JDP(2022) },
    { t: "CR: 2017 and 2018 more reliable; 2015 and 2019 about average", g: "A", u: CR("lincoln", "mkz", 2018) }
  ],
  inspect: [
    "Decode the engine and build date from the VIN and door-jamb sticker",
    "On a 2.0T, get a cooling-system pressure test and a borescope look for coolant in the cylinders",
    "Ask a Lincoln dealer for the service history to see if the engine was replaced",
    "Confirm the brake-hose and steering-bolt recalls are closed"
  ]
},
{
  id: "bmw-3", seg: "sedan", cls: "Compact luxury sedan", name: "BMW 3 Series", v: "strong",
  buy: "2020–2023 330i or M340i (2022 is the best year)",
  skip: "2015–2016 (N20/N55), 2018–2019, 2024; budget for the oil filter housing",
  gens: "F30 2012–2019 (N20/N55 to 2015, B46/B48/B58 2016+) · G20 2019+ (B46/B48 330i, B58 M340i)",
  summary: { t: "The G20 generation surveys far better than BMW's reputation. CR rates 2022 much more reliable and 2020 more reliable, and the 2022 won J.D. Power's Compact Premium Car award. Expect a known oil filter housing coolant leak that BMW addressed in a December 2025 service bulletin.", g: "A", u: CR("bmw", "3-series", 2022) },
  faults: [
    { t: "B46/B48/B58 oil filter housing gasket leaks coolant and oil, typically around 60k miles. BMW SIB 11 10 25 (Dec 2025); class action Eiger v. BMW filed Feb 2026. Owners report $1,500–4,000.", g: "A", u: TSB("2026/MC-11026946-0001.pdf") },
    { t: "2019–2020 330i counterbalance-shaft bearings may be installed wrong. Recall 19V732 replaces the engine.", g: "A", u: NH("19V732") },
    { t: "N20 timing-chain guide failure on 2012–2015 328i; class settlement in 2020.", g: "C" }
  ],
  recalls: [
    { id: "19V732", t: "2019–2020 330i: engine replacement for balance-shaft bearings", g: "A", u: NH("19V732") },
    { id: "24V608", t: "2012–2016 328i: electric water pump connector can short and burn", g: "A", u: NH("24V608") },
    { id: "24V527", t: "2014–2015: driver airbag inflator may rupture", g: "A", u: NH("24V527") }
  ],
  evidence: [
    { t: "CR: 2020 more reliable, 2021 about average, 2022 much more reliable, 2023 about average; 2015, 2016, 2018, 2019 less reliable", g: "A", u: CR("bmw", "3-series", 2020) },
    { t: "J.D. Power VDS Compact Premium Car winner for MY2022", g: "A", u: JDP(2025) },
    { t: "2024 3 Series on CR's Feb 2025 used-cars-to-avoid list", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" }
  ],
  inspect: [
    "Look for coolant or oil at the oil filter housing at the front of the engine",
    "Ask whether SIB 11 10 25 or a housing replacement has been done",
    "Run the VIN for 19V732; the fix is a new engine",
    "Budget roughly $1,000–2,000 a year for out-of-warranty upkeep"
  ]
},
{
  id: "audi-a4", seg: "sedan", cls: "Compact luxury sedan", name: "Audi A4", v: "strong",
  buy: "2019–2023 2.0T (B9)",
  skip: "2016–2018 (CR below average)",
  gens: "B8.5 2013–2016 · B9 2017–2025 (2.0T EA888, 7-speed S tronic)",
  summary: { t: "CR rates 2019 and 2023 much more reliable, and 2020 and 2022 more reliable. A pending class action alleges water-pump failures on 2018–2024 cars. It is an allegation and doesn't outweigh the survey data, but budget for the cooling system.", g: "A", u: CR("audi", "a4", 2019) },
  faults: [
    { t: "Water pump and thermostat module leaks; coolant can reach the vacuum system and cut boost. Class action Larr v. VWGoA covers 2018–2024 A4.", g: "C", u: "https://www.classaction.org/media/vwgoa-complaint.pdf" },
    { t: "S tronic mechatronic or clutch wear if fluid services are skipped ($2,000–5,000).", g: "D" }
  ],
  recalls: [
    { id: "21V874", t: "2017–2020: seat heater fault can disable the passenger airbag", g: "A", u: NH("21V874") }
  ],
  evidence: [
    { t: "CR: 2019 much more reliable, 2020 more, 2021 about average, 2022 more, 2023 much more; 2016–2018 less reliable", g: "A", u: CR("audi", "a4", 2023) }
  ],
  inspect: [
    "Check coolant level and look for pink crust at the water pump",
    "Scan for P0299 underboost codes",
    "Get S tronic fluid service records (about every 40k miles)",
    "Check whether the VW/Audi 8-year/80k water-pump extension still applies by VIN"
  ]
},
{
  id: "ford-mustang", seg: "sedan", cls: "Sports coupe", name: "Ford Mustang", v: "strong",
  buy: "GT 5.0 V8: 2015–2016 and 2018–2019",
  skip: "2020 (CR avoid list); 2017 (CR below average)",
  gens: "S550 2015–2023 (2.3T, 3.7 V6 to 2017, 5.0 V8; 6R80 auto to 2017, 10R80 from 2018) · S650 2024+",
  summary: { t: "J.D. Power awards for MY2017 and MY2019, CR rates 2019 more reliable, and iSeeCars finds it above average for longevity. The year matters: 2020 is on CR's avoid list.", g: "A", u: CR("ford", "mustang", 2019) },
  faults: [
    { t: "10R80 ten-speed harsh or delayed shifts (2018+). Ford TSBs and class action McCabe v. Ford.", g: "C", u: "https://www.classaction.org/media/mccabe-v-ford-motor-company.pdf" },
    { t: "MT82 manual gear clash and shift-fork breakage; class action El-Rifai v. Ford (2011–2019).", g: "C" },
    { t: "Ford's 5.0 oil-consumption bulletin names the F-150 only, not the Mustang.", g: "A", u: TSB("2019/MC-10169811-0001.pdf") }
  ],
  recalls: [
    { id: "25V614", t: "2015–2017: front seat-belt pretensioner cables corrode; final remedy due Dec 2026", g: "A", u: NH("25V614") },
    { id: "22V382", t: "2019–2020 5.0 manual: powertrain control fault", g: "A", u: NH("22V382") }
  ],
  evidence: [
    { t: "J.D. Power Midsize Sporty winner for MY2017 and MY2019", g: "A", u: JDP(2022) },
    { t: "CR: 2015, 2016, 2018 about average; 2019 more reliable; 2017 less reliable", g: "A", u: CR("ford", "mustang", 2019) },
    { t: "iSeeCars 2025: 3.2% reach 250k miles, 1.2× the car average", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "2020 Mustang on CR's 2024 used-cars-to-avoid list", g: "C", u: "https://www.thestreet.com/automotive/used-cars-to-avoid-buying-according-to-consumer-reports" }
  ],
  inspect: [
    "Check oil level on the dipstick and track consumption after purchase",
    "Test the 10-speed for harsh 2–3 and 4–5 shifts; ask about reflashes",
    "On a manual, check 2nd and 3rd for grinding when warm",
    "Look for track use, drag radials or tunes"
  ]
},
{
  id: "ford-fusion", seg: "sedan", cls: "Midsize sedan", name: "Ford Fusion", v: "mixed",
  buy: "2015–2019 with the 2.5L non-turbo",
  skip: "1.5T (all years); 2.0T built on or before April 8, 2019; 2020 (CR below average)",
  gens: "2013–2020 (2.5L, 1.5T, 2.0T, 2.7T Sport; 1.6T to 2016)",
  summary: { t: "The plain 2.5L is a sensible value buy: CR rates 2015–2019 about average and no class action targets it. Both EcoBoost turbos have manufacturer bulletins for coolant intrusion that end in a new engine.", g: "A", u: TSB("2020/MC-10174400-0001.pdf") },
  faults: [
    { t: "1.5L EcoBoost coolant intrusion. Ford TSB 20-2100 covers 2014–2019 Fusion built on or before June 10, 2019; remedy is a short block.", g: "A", u: TSB("2020/MC-10174400-0001.pdf") },
    { t: "2.0L EcoBoost coolant intrusion. TSB 19-2346/22-2229 covers 2017–2019 built on or before April 8, 2019; remedy is a long block.", g: "A", u: TSB("2019/MC-10169807-0001.pdf") },
    { t: "2.5L shifter-cable bushing can degrade so the car isn't really in Park.", g: "A", u: NH("19V362") }
  ],
  recalls: [
    { id: "19V362", t: "2013–2016 2.5L: shifter bushing (also 18V471)", g: "A", u: NH("19V362") },
    { id: "23V162", t: "2013–2018: front brake hoses may rupture", g: "A", u: NH("23V162") },
    { id: "18V167", t: "2014–2018: steering wheel bolt", g: "A", u: NH("18V167") }
  ],
  evidence: [
    { t: "CR: 2015–2019 about average; 2020 less reliable (all engines combined)", g: "A", u: CR("ford", "fusion", 2017) }
  ],
  inspect: [
    "Decode the engine from the VIN before anything else",
    "On a turbo, pressure-test the cooling system and borescope for coolant",
    "On a 2.5L, confirm the key only comes out in Park",
    "In salt states, check for loss of steering assist"
  ]
},
{
  id: "chrysler-300", seg: "sedan", cls: "Large sedan", name: "Chrysler 300 / Dodge Charger / Challenger", v: "strong",
  buy: "300 2017–2019 (3.6 V6 or 5.7 V8); Challenger 2015–2016",
  skip: "2018–2021 Charger/300 until airbag recall 24V198 is done",
  gens: "LX/LD/LA platform, through 2023 (3.6L Pentastar, 5.7/6.4 Hemi, 8-speed automatic)",
  summary: { t: "An old, well-proven platform. CR rates the 2017 300 more reliable than average, and the Challenger won J.D. Power awards for MY2015 and MY2016. Charger data is thin; it shares the 300's mechanicals. Pending valvetrain class actions keep this short of a top pick.", g: "C" },
  faults: [
    { t: "3.6 Pentastar rocker arm, lifter or cam wear causing tick and misfire; class action Maugain v. FCA (2014–2022). Reported bills $1,700–5,700.", g: "C", u: "https://www.cohenmilstein.com/wp-content/uploads/2023/10/Maugain-v.-FCA-First-Amended-Complaint-05182022.pdf" },
    { t: "5.7/6.4 Hemi lifter and cam failure (“Hemi tick”); class action Petro v. FCA covers 2014–2016 cars.", g: "C" }
  ],
  recalls: [
    { id: "24V198", t: "2018–2021 Charger and 300: side-curtain airbag inflator may rupture (about 285k cars)", g: "A", u: NH("24V198") },
    { id: "17V097", t: "2014–2017 AWD: front driveshaft bolts", g: "A", u: NH("17V097") },
    { id: "18V332", t: "Cruise control may not disengage", g: "A", u: NH("18V332") }
  ],
  evidence: [
    { t: "CR: 300 2017 more reliable; 2015 and 2019 about average", g: "A", u: CR("chrysler", "300", 2017) },
    { t: "J.D. Power Midsize Sporty winner: Challenger MY2015, MY2016", g: "A", u: JDP(2019) }
  ],
  inspect: [
    "Run the VIN for 24V198 on any 2018–2021 car",
    "Listen at cold start for valvetrain tick; scan for misfire codes",
    "Check for oil weeping at the oil filter housing in the engine valley"
  ]
},
{
  id: "buick-verano", seg: "sedan", cls: "Compact sedan", name: "Buick Verano", v: "strong",
  buy: "2015–2017 with the 2.4L",
  skip: "Limited data; check the park-lock recall",
  gens: "2012–2017 (2.4L, 2.0T)",
  summary: { t: "The 2016 won J.D. Power's Compact Car award and CR rates 2015 about average. The rumored 2.4L oil burning is not supported: GM's special coverage names only the Equinox and Terrain.", g: "A", u: JDP(2019) },
  faults: [
    { t: "GM's 2.4L oil-consumption coverage applies to 2010 and 2013 Equinox/Terrain, not the Verano. Still check the oil level.", g: "A", u: TSB("2020/MC-10171426-9999.pdf") }
  ],
  recalls: [
    { id: "16V502", t: "2016–2017: electronic park-lock lever", g: "A", u: NH("16V502") }
  ],
  evidence: [
    { t: "J.D. Power Compact Car winner for MY2016", g: "A", u: JDP(2019) },
    { t: "CR: 2015 about average", g: "A", u: CR("buick", "verano", 2015) }
  ],
  inspect: ["Compare the oil level with the last oil-change sticker", "Confirm the key comes out only in Park"]
},
{
  id: "cadillac-ct5", seg: "sedan", cls: "Midsize luxury sedan", name: "Cadillac CT5", v: "strong",
  buy: "2022–2023",
  skip: "2020–2021 unless recall 25V148 is done",
  gens: "2020+ (2.0T, 3.0TT, 10-speed automatic)",
  summary: { t: "CR rates 2022 more reliable and 2023 about average. The 2020–2021 cars carry a 10-speed valve wear recall; 2022 models were built with the fix.", g: "A", u: CR("cadillac", "ct5", 2022) },
  faults: [
    { t: "10-speed control valve wear can cause harsh shifts and, rarely, a momentary rear-wheel lock-up on 2020–2021 CT4/CT5.", g: "A", u: NH("25V148") }
  ],
  recalls: [
    { id: "25V148", t: "2020–2021 CT4/CT5: software detects valve wear and limits gears", g: "A", u: NH("25V148") },
    { id: "22V903", t: "2020–2023: daytime running light software", g: "A", u: NH("22V903") }
  ],
  evidence: [
    { t: "CR: 2020 less reliable, 2021 about average, 2022 more reliable, 2023 about average", g: "A", u: CR("cadillac", "ct5", 2022) }
  ],
  inspect: ["Confirm 25V148 by VIN on 2020–2021 cars", "Test for harsh downshifts at 40–60 mph", "Check that infotainment updates are current"]
},
{
  id: "chevy-malibu", seg: "sedan", cls: "Midsize sedan", name: "Chevrolet Malibu", v: "mixed",
  buy: "2015 (2.5L); 2023",
  skip: "2016–2018, 2020, 2022 (CR below average); 2014 (CR avoid list)",
  gens: "Gen 8 2013–2015 (2.5L, 2.0T) · Gen 9 2016–2025 (1.5T, 2.0T)",
  summary: { t: "The last Gen 8 car won J.D. Power's Midsize Car award, but CR rates most Gen 9 years below average.", g: "A", u: CR("chevrolet", "malibu", 2017) },
  faults: [
    { t: "“Shift to Park” message that won't let the car shut off (2016–2019). Class settlement; the claim window has closed.", g: "B", u: "https://gmauthority.com/blog/2021/08/lawsuit-filed-against-gm-over-shift-to-park-issue-in-chevy-malibu-blazer-traverse-and-volt/" },
    { t: "High-pressure fuel pump can detach and leak on 2016–2018.", g: "A", u: NH("18V358") }
  ],
  recalls: [
    { id: "18V358", t: "2016–2018: high-pressure fuel pump", g: "A", u: NH("18V358") },
    { id: "16V272", t: "2016: brake control module memory fault", g: "A", u: NH("16V272") }
  ],
  evidence: [
    { t: "J.D. Power Midsize Car winner for MY2015", g: "A", u: JDP(2018) },
    { t: "CR: 2016, 2017, 2018, 2020, 2022 less reliable; 2023 about average", g: "A", u: CR("chevrolet", "malibu", 2018) }
  ],
  inspect: ["Shift to Park and confirm the car shuts off with no message", "Run the VIN for 18V358", "Check start/stop operation"]
},
{
  id: "buick-regal", seg: "sedan", cls: "Midsize sedan", name: "Buick Regal", v: "mixed",
  buy: "2016; 2018–2020 Sportback/TourX 2.0T",
  skip: "2017 (sources disagree)",
  gens: "Gen 5 2011–2017 · Gen 6 2018–2020 (2.0T, 9-speed)",
  summary: { t: "Sources disagree on the 2017: it won J.D. Power's Midsize Car award, but CR rates it less reliable than average. CR rates 2016 and 2018–2019 about average.", g: "A", u: CR("buick", "regal", 2018) },
  recalls: [{ id: "18V576", t: "2018–2019: rear brake calipers", g: "A", u: NH("18V576") }],
  evidence: [
    { t: "J.D. Power Midsize Car winner MY2017", g: "A", u: JDP(2020) },
    { t: "CR 2017 less reliable; 2016, 2018, 2019 about average", g: "A", u: CR("buick", "regal", 2017) }
  ],
  inspect: ["Check 9-speed shift quality", "Test start/stop", "Confirm the caliper recall"]
},
{
  id: "mb-e", seg: "sedan", cls: "Midsize luxury sedan", name: "Mercedes-Benz E-Class", v: "mixed",
  buy: "2017–2018 E300; 2022 E350",
  skip: "2015, 2019–2020, and the 2024+ redesign; be wary of the E450's 48-volt system",
  gens: "W212 to 2016 · W213 2017–2023 (M274/M264 four-cylinder, M256 six) · W214 2024+",
  summary: { t: "CR rates the 2017–2018 more reliable and the 2022 much more reliable, but 2019 is on its avoid list. Mercedes has extended M264 engine valve coverage to 15 years/150k miles on 2018–2023 E300/E350, and the coverage transfers with the car.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-11027580-0001.pdf" },
  faults: [
    { t: "M264 exhaust valve guide and seat wear causing misfire; extended coverage 15 yr/150k (effective Jan 2026).", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-11027580-0001.pdf" },
    { t: "E450 48-volt starter-generator or DC-DC converter failure: no-start or power loss, $1,200–7,000.", g: "C" }
  ],
  evidence: [
    { t: "CR: 2017, 2018 more reliable; 2022 much more reliable; 2015, 2020 less reliable", g: "A", u: CR("mercedes-benz", "e-class", 2022) },
    { t: "2019 E-Class on CR's Feb 2025 avoid list", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" },
    { t: "iSeeCars 2025: 6.7% reach 250k miles, #11 passenger car", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Recall counts are high (19–20 on 2017–2018): check all by VIN", "Scan misfire history and confirm M264 coverage", "Check the air suspension for sag"]
},
{
  id: "mb-c", seg: "sedan", cls: "Compact luxury sedan", name: "Mercedes-Benz C-Class", v: "mixed",
  buy: "2021 C300; 2023–2024",
  skip: "2015–2020 (2015 and 2018 on CR avoid lists; 2019 much less reliable)",
  gens: "W205 2015–2021 (M274 to 2018, M264 2019+) · W206 2022+ (M254 with 48V)",
  summary: { t: "Most W205 years rate poorly with CR. The 2021 and 2024 rate more reliable, and 2019–2023 C300s get the 15-year/150k M264 valve coverage.", g: "A", u: CR("mercedes-benz", "c-class", 2021) },
  faults: [
    { t: "M264 exhaust valve wear; coverage extended to 15 yr/150k for 2019–2023 C300.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-11027580-0001.pdf" }
  ],
  recalls: [
    { id: "18V850", t: "2015–2016 C300: steering rack locknut", g: "A", u: NH("18V850") },
    { id: "21V961", t: "Fuel rail/injector leak, fire risk", g: "A", u: NH("21V961") },
    { id: "23V462", t: "2022–2023 C300: transmission harness can cut drive power", g: "A", u: NH("23V462") }
  ],
  evidence: [
    { t: "CR: 2016, 2017, 2020 less; 2019 much less; 2021 more; 2023 about average; 2024 more reliable", g: "A", u: CR("mercedes-benz", "c-class", 2019) }
  ],
  inspect: ["Check every recall by VIN", "On the W206, check the 48V system and infotainment", "Scan misfire history"]
},
{
  id: "bmw-5", seg: "sedan", cls: "Midsize luxury sedan", name: "BMW 5 Series", v: "mixed",
  buy: "2019 and 2023 530i/540i",
  skip: "Any 550i/M550i (N63 V8); 2016–2018; 2021–2022",
  gens: "F10 2011–2016 · G30 2017–2023 (B46/B48, B58, N63)",
  summary: { t: "CR's year-by-year verdicts swing: 2019 and 2023 more reliable, 2016–2018 and 2021–2022 less. The N63 V8 has a long record of oil consumption and timing chain trouble.", g: "A", u: CR("bmw", "5-series", 2019) },
  faults: [
    { t: "N63 V8 oil consumption, valve stem seals and timing chain.", g: "C" },
    { t: "Oil filter housing leak, as on the 3 Series (B46/B48/B58).", g: "A", u: TSB("2026/MC-11026946-0001.pdf") }
  ],
  evidence: [{ t: "CR: 2019, 2023 more reliable; 2020 about average; 2016–2018, 2021–2022 less", g: "A", u: CR("bmw", "5-series", 2023) }],
  inspect: ["Walk away from any N63 car", "Otherwise, check as for the 3 Series"]
},
{
  id: "audi-a3", seg: "sedan", cls: "Compact luxury sedan", name: "Audi A3", v: "mixed",
  buy: "2017–2018",
  skip: "2015; 2019 (CR avoid list)",
  gens: "8V 2015–2020 · 8Y 2022+",
  summary: { t: "CR rates 2018 more reliable and 2017 about average; 2015 is less reliable and 2019 is on the avoid list.", g: "A", u: CR("audi", "a3", 2018) },
  faults: [{ t: "EA888 water pump and thermostat leaks; the VW/Audi 8-year/80k extension has lapsed on most early cars.", g: "A", u: TSB("2022/MC-10214802-0001.pdf") }],
  evidence: [{ t: "CR: 2015 less; 2017 about average; 2018 more reliable", g: "A", u: CR("audi", "a3", 2017) }],
  inspect: ["Coolant level and pump leaks", "S tronic service records", "Open recalls"]
},
{
  id: "audi-a6", seg: "sedan", cls: "Midsize luxury sedan", name: "Audi A6", v: "mixed",
  buy: "2018; 2020–2022",
  skip: "2016; 2019 (on two CR avoid lists)",
  gens: "C7 2012–2018 · C8 2019+ (2.0T, 3.0T)",
  summary: { t: "The 2019 redesign appears on CR's avoid list in both 2024 and 2025. Later years settle to about average.", g: "B", u: "https://www.guideautoweb.com/en/articles/77355/" },
  faults: [{ t: "3.0T water pump failure alleged in class action Fiscina v. VW; repairs run $1,500–3,000+.", g: "C" }],
  evidence: [{ t: "CR: 2016 less; 2018, 2020, 2022 about average", g: "A", u: CR("audi", "a6", 2020) }],
  inspect: ["Coolant loss and pump weep", "MMI electronics", "Open recalls"]
},
{
  id: "volvo-s60", seg: "sedan", cls: "Compact luxury sedan", name: "Volvo S60", v: "mixed",
  buy: "2017; 2021; 2023",
  skip: "2015–2016 Drive-E T5/T6 (oil burning); 2019–2020; 2022",
  gens: "Gen 2 2011–2018 (Drive-E from 2015) · Gen 3 2019+",
  summary: { t: "Volvo's own technical journal calls for new pistons and rings on oil-burning 2015–2016 Drive-E engines. CR rates 2017, 2021 and 2023 about average.", g: "A", u: TSB("2017/MC-10146443-9999.pdf") },
  faults: [{ t: "Drive-E excessive oil consumption, 2015–2016 T5/T6. Volvo TJ 31216 replaces pistons, rings and rod bearings.", g: "A", u: TSB("2017/MC-10146443-9999.pdf") }],
  evidence: [
    { t: "CR: 2016, 2019, 2020 less reliable; 2017, 2021, 2023 about average", g: "A", u: CR("volvo", "s60", 2021) },
    { t: "2015 and 2022 S60 on CR's 2024 avoid list", g: "C", u: "https://www.thestreet.com/automotive/used-cars-to-avoid-buying-according-to-consumer-reports" }
  ],
  inspect: ["On 2015–2016, get the engine serial and piston-job records", "Run an oil-consumption check", "Test the Sensus screen"]
},
{
  id: "vw-golf", seg: "sedan", cls: "Compact hatchback", name: "Volkswagen Golf / GTI", v: "mixed",
  buy: "Mk8 GTI 2023+; Mk7 2019–2021",
  skip: "Mk7 2015–2018 (CR below average)",
  gens: "Mk7 2015–2021 · Mk8 GTI/R 2022+",
  summary: { t: "CR rates the GTI 2015, 2017 and 2018 less reliable, 2019 about average and 2023 more reliable.", g: "A", u: CR("volkswagen", "gti", 2023) },
  faults: [{ t: "EA888 water pump/thermostat housing; the settlement coverage has mostly expired.", g: "A", u: TSB("2022/MC-10214802-0001.pdf") }],
  recalls: [
    { id: "19V879", t: "2019 GTI: front wheel bearings (park until fixed)", g: "A", u: NH("19V879") },
    { id: "19V188", t: "2015–2019 Golf: rear coil springs can break", g: "A", u: NH("19V188") }
  ],
  evidence: [{ t: "CR GTI: 2015, 2017, 2018 less; 2019 about average; 2023 more reliable", g: "A", u: CR("volkswagen", "gti", 2019) }],
  inspect: ["Coolant loss", "DSG service every ~40k", "Full infotainment test on Mk8"]
},
{
  id: "vw-passat", seg: "sedan", cls: "Midsize sedan", name: "Volkswagen Passat", v: "mixed",
  buy: "2019–2022 (limited data)",
  skip: "2015–2017; 2015 TDI without emissions-fix records",
  gens: "NMS 2012–2022 (1.8T, 2.0T, 3.6 VR6 to 2018, TDI to 2015)",
  summary: { t: "CR rates 2015–2017 less reliable and 2019 about average; 2018 and 2020–2021 have no verdict.", g: "A", u: CR("volkswagen", "passat", 2019) },
  faults: [
    { t: "EA888 water pump and thermostat; VW's 8-year/80k extension no longer covers most 2015–2018 cars.", g: "A", u: TSB("2022/MC-10214802-0001.pdf") },
    { t: "2015 2.0 TDI “dieselgate” cars: buy only with both emissions-modification phases documented.", g: "A", u: "https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement" }
  ],
  evidence: [{ t: "CR: 2015, 2016, 2017 less reliable; 2019 about average", g: "A", u: CR("volkswagen", "passat", 2016) }],
  inspect: ["Coolant and water pump", "TDI emissions-fix paperwork", "VR6 timing-chain rattle"]
},
{
  id: "cadillac-ats-cts", seg: "sedan", cls: "Luxury sedan", name: "Cadillac ATS / CTS", v: "mixed",
  buy: "Limited data; pick a car with the CUE screen replaced",
  skip: "8-speed cars (2016–2019) without the fluid-flush fix",
  gens: "ATS 2013–2019 · CTS 2014–2019",
  summary: { t: "Too little year-by-year survey data for a firm verdict. Two documented weak points: cracking CUE touchscreens and 8-speed shudder.", g: "B", u: "https://gmauthority.com/blog/2019/09/class-action-lawsuit-filed-over-cracked-cadillac-cue-screens/" },
  faults: [
    { t: "CUE touchscreen delaminates or stops responding (2013–2017); GM bulletins replace the center stack.", g: "B", u: "https://gmauthority.com/blog/2019/09/class-action-lawsuit-filed-over-cracked-cadillac-cue-screens/" },
    { t: "8L45/8L90 torque-converter shudder (2016–2019); GM's fix is a fluid flush.", g: "C" }
  ],
  inspect: ["Look for bubbles or cracks in the CUE glass", "Cruise at 25–50 mph under light throttle and feel for shudder"]
},
{
  id: "chevy-sonic", seg: "sedan", cls: "Subcompact", name: "Chevrolet Sonic", v: "mixed",
  buy: "2016 (limited data)",
  skip: "1.4T without cooling-system records",
  gens: "2012–2020 (1.8L, 1.4T)",
  summary: { t: "The 2016 won J.D. Power's Small Car award, but data is thin. The 1.4T shares the Cruze's water pump and coolant weaknesses, and GM's extended coverage has lapsed.", g: "A", u: JDP(2019) },
  inspect: ["Coolant level and water pump weep hole", "PCV and valve cover leaks", "Misfire codes"]
},
{
  id: "chevy-cruze", seg: "sedan", cls: "Compact sedan", name: "Chevrolet Cruze", v: "avoid",
  buy: "If you must: 2019, or a 2017 with the piston bulletin work documented",
  skip: "2015–2016 Gen 1 1.4T; 2016–2018 Gen 2 1.4T without piston/ECM records; 2018",
  gens: "Gen 1 2011–2016 (1.4T, 1.8) · Gen 2 2016–2019 (1.4T, 1.6 diesel)",
  summary: { t: "GM's own bulletins tell dealers to replace all four pistons on cracked-piston 2016–2018 1.4T engines.", g: "A", u: TSB("2019/MC-10163888-9999.pdf") },
  faults: [
    { t: "Gen 2 1.4T cracked pistons: misfire (P0300) and low compression. GM 18-NA-171 replaces all four pistons; engine replacement if the cylinder walls are scored.", g: "A", u: TSB("2019/MC-10163888-9999.pdf") },
    { t: "Gen 1 1.4T water pump, coolant and PCV leaks; GM's 10-year/150k water pump coverage has lapsed.", g: "C" }
  ],
  evidence: [{ t: "CR: 2016, 2017 about average; 2018 less reliable", g: "A", u: CR("chevrolet", "cruze", 2018) }],
  inspect: ["Compression and leak-down test", "Scan misfire history", "Proof of the ECM calibration update"]
},
{
  id: "ford-focus", seg: "sedan", cls: "Compact", name: "Ford Focus", v: "avoid",
  buy: "Manual transmission only, with every recall done",
  skip: "Any PowerShift automatic (2015–2018); 1.0 EcoBoost 2016–2018",
  gens: "2012–2018 (2.0L with PowerShift dual-clutch or manual, 1.0T, ST, RS)",
  summary: { t: "The PowerShift dual-clutch automatic was the subject of a class settlement and extended warranties that have now expired. CR rates 2015, 2017 and 2018 less reliable.", g: "B", u: "https://www.cars.com/articles/ford-focus-fiesta-transmission-settlement-what-owners-should-know-420135/" },
  faults: [
    { t: "PowerShift clutch shudder, slipping and control-module failure. Clutch coverage (7 yr/100k) has expired.", g: "B", u: "https://www.cars.com/articles/ford-extends-warranty-on-more-focus-fiesta-transmissions-407553/" },
    { t: "Oil pump drive belt can fail, causing loss of oil pressure (2016–2018).", g: "A", u: NH("23V905") }
  ],
  recalls: [
    { id: "18V735", t: "2012–2018 2.0L: purge valve, stalling; re-repair 26V369 (June 2026)", g: "A", u: NH("18V735") },
    { id: "26V011", t: "2013–2018: engine block heater can short; remedy pending", g: "A", u: NH("26V011") },
    { id: "18V845", t: "1.0T manual: clutch can fracture (re-repair 26V376)", g: "A", u: NH("18V845") }
  ],
  evidence: [{ t: "CR: 2015, 2017, 2018 less reliable", g: "A", u: CR("ford", "focus", 2017) }],
  inspect: ["Walk away from the automatic", "Several recalls are recent or open: check all by VIN", "Don't plug in the block heater until 26V011 is fixed"]
},
{
  id: "ford-fiesta", seg: "sedan", cls: "Subcompact", name: "Ford Fiesta", v: "avoid",
  buy: "Manual or ST only",
  skip: "Any PowerShift automatic",
  gens: "2011–2019 (1.6L PowerShift or manual, 1.0T, ST 1.6T)",
  summary: { t: "Same PowerShift automatic as the Focus, with the same expired coverage.", g: "B", u: "https://www.cars.com/articles/ford-focus-fiesta-transmission-settlement-what-owners-should-know-420135/" },
  recalls: [{ id: "17V209", t: "2014–2015 Fiesta ST: cylinder head can crack if low on coolant", g: "A", u: NH("17V209") }],
  inspect: ["Automatic: walk away", "ST: confirm 17V209 and check the clutch"]
},
{
  id: "chrysler-200", seg: "sedan", cls: "Midsize sedan", name: "Chrysler 200", v: "avoid",
  buy: "Nothing stands out; 2016–2017 only with every transmission recall done",
  skip: "2015",
  gens: "2015–2017 (2.4L, 3.6L, ZF 9-speed)",
  summary: { t: "Several 9-speed transmission recalls, including a park pawl that can fail; CR rates 2015 less reliable.", g: "A", u: NH("15V090") },
  recalls: [
    { id: "15V090", t: "2015: park pawl can fail (rollaway)", g: "A", u: NH("15V090") },
    { id: "16V529", t: "9-speed may shift to neutral unexpectedly", g: "A", u: NH("16V529") }
  ],
  evidence: [{ t: "CR: 2015 less reliable; 2016 about average", g: "A", u: CR("chrysler", "200", 2015) }],
  inspect: ["Confirm all transmission recalls by VIN", "Drive for lurching, flare between gears and neutral drop-outs"]
},
{
  id: "vw-jetta", seg: "sedan", cls: "Compact sedan", name: "Volkswagen Jetta", v: "avoid",
  buy: "If you must: 2017 or 2020",
  skip: "2015–2016, 2019, 2021–2023",
  gens: "Mk6 2011–2018 · Mk7 2019+ (1.4T/1.5T, GLI 2.0T)",
  summary: { t: "CR rates most years less reliable, and the 2021 is on its avoid list.", g: "A", u: CR("volkswagen", "jetta", 2019) },
  recalls: [
    { id: "19V879", t: "2019 GLI: front wheel bearings", g: "A", u: NH("19V879") },
    { id: "18V904", t: "2019: rear coil springs", g: "A", u: NH("18V904") }
  ],
  evidence: [{ t: "CR: 2015, 2016, 2019, 2022, 2023 less reliable; 2017 and 2020 about average", g: "A", u: CR("volkswagen", "jetta", 2022) }],
  inspect: ["Coolant and water pump leaks", "Coil spring and wheel bearing recalls"]
}
);
