// Pickup trucks, midsize, full-size and heavy-duty. Source: research/07-trucks.md
RC.models.push(
{
  id: "toyota-tundra", seg: "truck", cls: "Full-size pickup", name: "Toyota Tundra", v: "top",
  buy: "2015–2021 with the 5.7L V8 (4.6L V8 also fine)",
  skip: "2022–2024 non-hybrid twin-turbo V6 without a documented replacement engine or recall clearance",
  gens: "2nd gen 2014–2021 (5.7 / 4.6 V8, 6-speed) · 3rd gen 2022+ (3.4 twin-turbo V6 and i-FORCE MAX hybrid, 10-speed)",
  summary: { t: "The best-documented truck in the study. CR rates every year 2015–2021 above average, J.D. Power named it best full-size pickup four times, and iSeeCars puts it near 30% for reaching 250,000 miles. The 2022+ redesign is the opposite: three engine recalls for machining debris in the main bearings.", g: "A", u: CR("toyota", "tundra", 2019) },
  faults: [
    { t: "2022–2023 V35A: machining debris on main bearings; recall 24V381 replaces the engine (more than 70,000 replaced).", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V381-6004.PDF" },
    { t: "Recall 25V767 extends it to 2022–2024 builds; recall 26V320 (May 2026) adds 43,566 2024 trucks. For these, dealers run inspection software and replace the engine only if it can't be cleared.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf" },
    { t: "The i-FORCE MAX hybrid is excluded from all three engine recalls, but CR's poor 2022–2024 ratings cover both versions.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf" },
    { t: "5.7 V8: secondary air-injection pump failure ($1,000–2,500) and cam-tower oil leak; no Toyota program covers 2015–2021.", g: "C" }
  ],
  recalls: [
    { id: "24V381", t: "2022–2023: engine replacement", g: "A", u: NH("24V381") },
    { id: "25V767", t: "2022–2024: engine inspection or replacement", g: "A", u: NH("25V767") },
    { id: "26V320", t: "2024 (built Feb–Aug 2024): engine inspection or replacement", g: "A", u: NH("26V320") },
    { id: "24V125", t: "2022–2024: 10-speed can creep in Neutral", g: "A", u: NH("24V125") }
  ],
  evidence: [
    { t: "CR: 2015–2017, 2020, 2021 more reliable; 2018–2019 much more; 2022 much less; 2023–2024 less; 2025 more", g: "A", u: CR("toyota", "tundra", 2022) },
    { t: "J.D. Power Large Light Duty winner MY2016, 2018, 2019, 2021", g: "A", u: JDP(2024) },
    { t: "iSeeCars 2025: 30.0% reach 250k, best non-heavy-duty truck", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "2022–2023 Tundra on CR's Feb 2025 used-cars-to-avoid list", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" }
  ],
  inspect: [
    "On 2022–2024, run the VIN for 24V381, 25V767, 26V320 and get the repair order",
    "Listen for knock under load and at cold start on any V6",
    "On 2015–2021, scan for air-injection codes P2440/P2442/P0418",
    "Look for oil at the back of the heads (cam-tower leak)",
    "Frame and brake lines in salt states; hitch wear from towing"
  ]
},
{
  id: "toyota-tacoma", seg: "truck", cls: "Midsize pickup", name: "Toyota Tacoma", v: "top",
  buy: "2018–2019 and 2021–2023 (3.5 V6 or 2.7L); 2015 with a clean frame",
  skip: "2016 first year of the generation; early-2024 automatics without transmission records",
  gens: "2nd gen to 2015 (4.0 V6, 2.7L) · 3rd gen 2016–2023 (3.5 V6, 2.7L, 6-speed) · 4th gen 2024+ (2.4 turbo, 8-speed)",
  summary: { t: "CR rates it above average in nine of eleven years, J.D. Power named it best midsize pickup five times, and it has about a 25% chance of reaching 250,000 miles. Known issues are fixable by recall or limited to specific years.", g: "A", u: CR("toyota", "tacoma", 2022) },
  faults: [
    { t: "2011–2017 frame corrosion in salt states; Toyota's program replaced frames for 12 years only if the rust-proofing inspection was done before it expired.", g: "A", u: TSB("2024/MC-10251755-9999.pdf") },
    { t: "2016–2017 rear differential oil leak can lead to seizure (17V285).", g: "A", u: NH("17V285") },
    { t: "2016–2017 6-speed gear hunting on grades, fixed by ECM reflash T-SB-0077-16.", g: "A", u: TSB("2016/MC-10132910-9999.pdf") },
    { t: "Early 2024 8-speed automatics: neutral drop-outs, some replaced under warranty; complaints faded after 2024.", g: "B", u: "https://www.thedrive.com/news/2024-toyota-tacoma-owners-keep-reporting-transmission-failures" }
  ],
  recalls: [
    { id: "24V152", t: "2022–2023: rear axle nuts can loosen (not 2024+)", g: "A", u: NH("24V152") },
    { id: "17V285", t: "2016–2017: rear differential leak", g: "A", u: NH("17V285") },
    { id: "25V058", t: "2024–2025 4WD: rear brake hoses", g: "A", u: NH("25V058") }
  ],
  evidence: [
    { t: "CR: more reliable 2015, 2017–2019, 2021, 2023–2025; 2022 much more; 2016, 2020 about average", g: "A", u: CR("toyota", "tacoma", 2021) },
    { t: "J.D. Power Midsize Pickup winner MY2015, 2020, 2021, 2022, 2023", g: "A", u: JDP(2025) },
    { t: "iSeeCars 2025: 25.3% reach 250k miles", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: [
    "Frame on 2015–2017: tap the rear rails and spring hangers; ask for K0D/ZKA paperwork",
    "Look for wetness at the rear differential seam",
    "On 2022–2023, confirm 24V152 and check the axle ends for gear oil",
    "On 2024, check for neutral drop-outs and ask about transmission replacement",
    "Test 4-high, 4-low and the rear locker"
  ]
},
{
  id: "nissan-frontier", seg: "truck", cls: "Midsize pickup", name: "Nissan Frontier", v: "strong",
  buy: "2015–2019 (4.0 V6); 2024–2025",
  skip: "2021–2023 (CR below average; two park-pawl rollaway recalls)",
  gens: "D40 2005–2021 (4.0 V6 to 2019; 3.8 V6 + 9-speed 2020–2021) · D41 2022+ (3.8 V6, 9-speed)",
  summary: { t: "Four straight J.D. Power Midsize Pickup awards (MY2016–2019) and above-average CR ratings, but iSeeCars finds only 5% reach 250,000 miles. The surveys and the longevity data disagree, so it stays one step below top.", g: "A", u: JDP(2021) },
  faults: [
    { t: "2020–2023 9-speed: park pawl or rod may not hold (22V457, 22V671).", g: "A", u: NH("22V671") },
    { t: "VQ40 timing-chain guide failures were 2005–2010 only; none found for 2015–2019.", g: "C" }
  ],
  evidence: [
    { t: "CR: 2015, 2017, 2019 more; 2020 average; 2021–2023 less; 2024 much more; 2025 more", g: "A", u: CR("nissan", "frontier", 2024) },
    { t: "iSeeCars 2025: 5.0% reach 250k, second-lowest pickup", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Frame and rear spring hangers for rust", "Timing-chain whine at 1,500–3,000 rpm", "On 9-speed trucks, confirm both park recalls and test Park on a hill"]
},
{
  id: "honda-ridgeline", seg: "truck", cls: "Midsize pickup", name: "Honda Ridgeline", v: "strong",
  buy: "2020–2021; 2023",
  skip: "2017–2019 (rod-bearing recall and open investigation); 2025",
  gens: "2nd gen 2017+ (3.5 V6; 6-speed to 2019, 9-speed 2020+)",
  summary: { t: "CR rates 2020, 2021 and 2023 more reliable and iSeeCars puts it above the truck average. The 2017–2019 trucks share the Pilot's connecting-rod bearing recall and NHTSA investigation.", g: "A", u: CR("honda", "ridgeline", 2021) },
  faults: [
    { t: "2017 and 2019: crank pins ground wrong, rod bearings wear (23V751); NHTSA PE25008 is looking at failures outside the recall.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf" },
    { t: "2020+ 9-speed harsh 1–2 shifts alleged in Moore v. American Honda.", g: "C" }
  ],
  recalls: [{ id: "26V365", t: "Salt-belt 2016+ Pilot/Passport/Ridgeline/MDX: rear subframe corrosion (June 2026)", g: "A", u: NH("26V365") }],
  evidence: [{ t: "CR: 2017 average; 2018–2019 less; 2020, 2021, 2023 more; 2022, 2024 average; 2025 less", g: "A", u: CR("honda", "ridgeline", 2020) }],
  inspect: ["On 2017–2019, confirm 23V751 and listen for bottom-end knock", "Cold 1–2 and 2–3 shift quality", "Rear subframe in salt states"]
},
{
  id: "ford-maverick", seg: "truck", cls: "Compact pickup", name: "Ford Maverick", v: "strong",
  buy: "2023–2025 (hybrid or 2.0T)",
  skip: "2022 (CR average, 28 recall entries)",
  gens: "2022+ (2.5 hybrid with eCVT, 2.0 EcoBoost with 8-speed)",
  summary: { t: "CR rates 2023–2025 more reliable. Its recalls have been battery and software fixes, not engine or transmission hardware.", g: "A", u: CR("ford", "maverick", 2024) },
  recalls: [
    { id: "25V019", t: "2022–2023: 12-volt battery, loss of power; replaced with AGM", g: "A", u: NH("25V019") },
    { id: "24V330", t: "2022–2024 hybrid: software could force Neutral", g: "A", u: NH("24V330") }
  ],
  inspect: ["Confirm the AGM battery or 25V019", "Brake pedal feel (CR's top owner complaint)", "Hybrid warning lights"]
},
{
  id: "ram-hd", seg: "truck", cls: "Heavy-duty pickup", name: "Ram 2500 / 3500", v: "strong",
  buy: "2021–2024 with the 6.7 Cummins",
  skip: "2019–2020 Cummins without recall 21V880; 2025 redesign",
  gens: "2019+ (6.7 Cummins, 6.4 Hemi gas)",
  summary: { t: "iSeeCars' top truck for longevity (39.7% reach 250,000 miles in 2025). The 2019–2020 Cummins had a fuel pump recall affecting about 222,400 trucks.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
  recalls: [{ id: "21V880", t: "2019–2020 Cummins: high-pressure fuel pump", g: "A", u: NH("21V880") }],
  inspect: ["Fuel pump records and water-in-fuel history", "DEF/DPF/EGR service; reject emissions “delete” tunes", "Fifth-wheel wear and frame rust"]
},
{
  id: "gm-hd", seg: "truck", cls: "Heavy-duty pickup", name: "Chevrolet Silverado HD / GMC Sierra HD", v: "strong",
  buy: "2017–2019 6.6 Duramax (L5P) or 6.6 gas; 2020–2022 with recall 24V797",
  skip: "2011–2016 LML Duramax without pump records",
  gens: "2015–2019 · 2020+ (6.6 Duramax L5P, 6.6 gas, 10-speed)",
  summary: { t: "J.D. Power named the Silverado HD best heavy-duty pickup six times. CR's 2026 ranking puts the Sierra 2500HD last for in-car electronics; the 2020–2022 diesel 10-speed has a wheel-lockup recall.", g: "A", u: JDP(2023) },
  recalls: [{ id: "24V797", t: "2020–2022: 10-speed valve wear can lock the rear wheels (software limits gears)", g: "A", u: NH("24V797") }],
  evidence: [{ t: "iSeeCars 2025: Sierra 2500HD 22.0%, Silverado 3500HD 17.4%, Silverado 2500HD 16.0%", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }],
  inspect: ["Confirm 24V797 on 2020–2022", "DPF regeneration history", "10-speed shift quality"]
},
{
  id: "ford-f150", seg: "truck", cls: "Full-size pickup", name: "Ford F-150", v: "mixed",
  buy: "2023–2024 with the 5.0 V8 or 2.7 EcoBoost; 2018–2020 5.0 with the oil-consumption fix",
  skip: "2021–2022 PowerBoost hybrid; 2017–2020 3.5 EcoBoost without cam phaser records; 2015–2017 6-speed until recall 26V237",
  gens: "13th gen 2015–2020 (2.7/3.5 EcoBoost, 5.0 V8, 3.3/3.5 V6) · 14th gen 2021+ (adds PowerBoost hybrid)",
  summary: { t: "CR rates every year from 2016 to 2022 below average; 2023–2024 reach average and CR says the F-150 has improved. Several engine and transmission problems are year-specific, and most of Ford's extended coverage has expired.", g: "A", u: CR("ford", "f-150", 2023) },
  faults: [
    { t: "2017–2020 3.5 EcoBoost cam phaser rattle on cold start; Ford's programs ended Jan 1, 2023, so a used buyer pays.", g: "A", u: TSB("2021/MC-10189763-0001.pdf") },
    { t: "2018–2020 5.0 oil consumption (more than 1 qt per 3,000 miles); TSB 19-2365 reflash.", g: "A", u: TSB("2019/MC-10169811-0001.pdf") },
    { t: "2015–2017 6-speed can suddenly downshift to 2nd with rear-wheel lockup: recall 26V237 (1.39M trucks, April 2026) after NHTSA EA26001.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf" },
    { t: "2021–2022 2.7/3.0 built May–Oct 2021: intake valves can fracture (24V635); Ford extended coverage to 10 yr/150k.", g: "A", u: NH("24V635") },
    { t: "2017–2020 10-speed harsh or delayed shifts, sometimes with shift-solenoid codes; Ford TSB 23-2123 reflashes or overhauls the valve body. Not a warranty extension.", g: "A", u: TSB("2023/MC-10234596-0002.pdf") },
    { t: "PowerBoost hybrid scored 4/100 with CR in 2022, the least reliable vehicle it rated.", g: "B", u: "https://www.edmunds.com/car-news/is-the-ford-150-hybrid-the-least-reliable-vehicle-you-can-buy.html" }
  ],
  recalls: [
    { id: "26V237", t: "2015–2017 6-speed: unexpected downshift", g: "A", u: NH("26V237") },
    { id: "23V896", t: "2021–2023 Max Trailer Tow: rear hub bolts (25V512 extends to 2023–2025)", g: "A", u: NH("23V896") },
    { id: "22V188", t: "2021: false low-pressure code shifts to Neutral", g: "A", u: NH("22V188") }
  ],
  evidence: [
    { t: "CR: 2015, 2023, 2024 average; 2016–2022, 2025 less", g: "A", u: CR("ford", "f-150", 2020) },
    { t: "iSeeCars 2025: 5.9% reach 250k miles, second-lowest truck", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
    { t: "Recall counts: 29 (2021), 23 (2022), 23 (2023), 10 (2024)", g: "A", u: CR("ford", "f-150", 2021) }
  ],
  inspect: ["Cold start after 6+ hours: listen for phaser rattle", "Check oil consumption on a 5.0", "On 2015–2017, confirm 26V237", "Max Tow trucks: listen for a rattle at the rear hub cap", "Look for aftermarket tunes"]
},
{
  id: "chevy-silverado", seg: "truck", cls: "Full-size pickup", name: "Chevrolet Silverado 1500 / GMC Sierra 1500", v: "mixed",
  buy: "2019–2021 or 2023–2024 with the 5.3L V8 and full oil-change records, or the 3.0 Duramax",
  skip: "Any 2021–2026 6.2L V8 (L87); 2015–2018 8-speed without the fluid exchange; 2023 2.7T without the engine program",
  gens: "K2XX 2014–2018 (4.3, 5.3, 6.2; 6/8-speed) · T1XX 2019+ (2.7T, 5.3, 6.2, 3.0 diesel; up to 10-speed)",
  summary: { t: "J.D. Power has named the Silverado or Sierra best full-size pickup three times, but CR rates every year 2015–2024 below average. The 6.2 V8 is under recall and a new NHTSA engineering analysis into engines failing after the fix.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf" },
  faults: [
    { t: "6.2 L87 rod/crank bearing failure, 2021–2024 (25V274); EA26005 (Aug 20, 2026) covers 997,743 2021–2026 vehicles, including 26 failures after a new engine.", g: "A", u: NH("25V274") },
    { t: "5.3 cylinder-deactivation lifter collapse; consolidated class action pending since 2021.", g: "C" },
    { t: "2015–2018 8-speed torque-converter shudder; GM bulletin 18-NA-355 exchanges the fluid.", g: "A", u: TSB("2020/MC-10174266-9999.pdf") },
    { t: "2023 2.7T: block can crack; GM replaced engines free until Mar 31, 2026.", g: "A", u: TSB("2024/MC-10252980-0001.pdf") },
    { t: "2014–2018 brake vacuum pump can lose assist (19V645); the extended coverage has expired.", g: "A", u: NH("19V645") }
  ],
  evidence: [
    { t: "CR: every year 2015–2024 less reliable; 2025 more (early data)", g: "A", u: CR("chevrolet", "silverado-1500", 2021) },
    { t: "J.D. Power Large Light Duty winner MY2015 Silverado, MY2020 Sierra, MY2022 Silverado LTD", g: "A", u: JDP(2025) },
    { t: "2019 Silverado and Sierra 1500 on CR's Feb 2025 avoid list", g: "C", u: "https://www.guideautoweb.com/en/articles/77355/" }
  ],
  inspect: ["Read the engine code: L84/L83 is 5.3, L87/L86 is 6.2", "Cold-start lifter tick and misfire history", "Light-throttle cruise for 8-speed shudder", "Brake pedal effort on K2XX", "Rocker panels and cab corners for rust"]
},
{
  id: "ram-1500", seg: "truck", cls: "Full-size pickup", name: "Ram 1500", v: "mixed",
  buy: "2023–2024 (3.6 eTorque or 5.7 Hemi)",
  skip: "2025 Hurricane six (first year); 2014–2019 EcoDiesel without the EGR recall and emissions fix; 2019–2022",
  gens: "DS 2015–2018 (and Classic to 2024) · DT 2019+ (3.6/5.7 eTorque, 3.0 EcoDiesel; 3.0 Hurricane I6 2025+)",
  summary: { t: "The 2023 is the standout: CR rates it much more reliable and J.D. Power's 2026 study ranks it #1 among full-size pickups. Most other years rate below average, and iSeeCars finds the Ram 1500 least likely of any pickup to reach 250,000 miles (3.5%).", g: "A", u: CR("ram", "1500", 2023) },
  faults: [
    { t: "EcoDiesel EGR cooler can crack and cause an intake fire (19V757, 2014–2019).", g: "A", u: NH("19V757") },
    { t: "Hemi lifter and cam wear (“Hemi tick”); class action Petro v. FCA; repair about $2,800–3,800.", g: "C" },
    { t: "2025 Hurricane engine software bulletins and two instrument cluster recalls; CR rates 2025 much less reliable.", g: "A", u: NH("25V826") }
  ],
  recalls: [
    { id: "22V904", t: "2019–2022: tailgate can open", g: "A", u: NH("22V904") },
    { id: "19V757", t: "2014–2019 EcoDiesel: EGR cooler fire", g: "A", u: NH("19V757") }
  ],
  evidence: [
    { t: "CR: 2015–2022 less; 2023 much more; 2024 average; 2025 much less", g: "A", u: CR("ram", "1500", 2025) },
    { t: "iSeeCars 2025: 3.5% reach 250k, lowest pickup", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Long cold idle and hot idle: listen for Hemi tick", "eTorque start-stop warnings", "On EcoDiesel, VB1 recall and emissions paperwork", "Tailgate latch recall"]
},
{
  id: "ford-super-duty", seg: "truck", cls: "Heavy-duty pickup", name: "Ford Super Duty (F-250 / F-350)", v: "mixed",
  buy: "7.3L gas V8; or a 6.7 diesel with fuel pump records",
  skip: "2020–2022 6.7 diesel without recall 24V957",
  gens: "2017+ (6.7 Power Stroke, 6.2 gas to 2022, 7.3 gas 2020+, 6.8 gas 2023+)",
  summary: { t: "Diesel fuel-pump (CP4) failures are the main risk; Ford's 2024 recall is software only. CR's 2026 ranking puts the F-250 second-worst among heavy-duty trucks for steering and suspension.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V957-5400.pdf" },
  recalls: [{ id: "24V957", t: "2020–2022 6.7 diesel: CP4 fuel pump, software", g: "A", u: NH("24V957") }],
  evidence: [{ t: "iSeeCars 2025: F-250 18.6%, F-350 18.3% reach 250k", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }],
  inspect: ["Fuel filter and water-separator history", "Front-end shimmy at highway speed", "Reject emissions “delete” tunes"]
},
{
  id: "nissan-titan", seg: "truck", cls: "Full-size pickup", name: "Nissan Titan", v: "mixed",
  buy: "2017–2019 5.6 V8 with the 7-speed (thin data)",
  skip: "2020+ until both park recalls are done",
  gens: "2016–2024 (5.6 V8; 7-speed to 2019, 9-speed 2020+; XD Cummins 2016–2019)",
  summary: { t: "CR has too few responses to rate most years; iSeeCars finds 9.9% reach 250,000 miles, below the truck average.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
  recalls: [{ id: "22V671", t: "2020–2023: 9-speed park rod can let the truck roll (also 22V457)", g: "A", u: NH("22V671") }],
  inspect: ["Park recalls completed", "Rear axle and differential"]
},
{
  id: "hyundai-santa-cruz", seg: "truck", cls: "Compact pickup", name: "Hyundai Santa Cruz", v: "mixed",
  buy: "2024–2025 (thin data)",
  skip: "2022 2.5T without recall 236",
  gens: "2022+ (2.5L 8-speed, 2.5T dual-clutch)",
  summary: { t: "CR rates 2022–2023 less reliable. The 2.5T dual-clutch has an oil pump problem handled by a recall and a 2026 coverage campaign.", g: "A", u: "https://autoservice.hyundaiusa.com/campaign236" },
  inspect: ["Dual-clutch judder from a stop", "Recall 236 and campaign LA12 records"]
},
{
  id: "ford-ranger", seg: "truck", cls: "Midsize pickup", name: "Ford Ranger", v: "mixed",
  buy: "2021",
  skip: "2019, 2022–2023, 2025",
  gens: "2019–2023 (2.3 EcoBoost, 10-speed) · 2024+ (2.3, 2.7 EcoBoost)",
  summary: { t: "CR rates every year except 2021 below average. A 2026 recall covers sun-visor wiring that can start an A-pillar fire on 140,201 2024–2026 trucks.", g: "A", u: "https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V238-6269.pdf" },
  recalls: [
    { id: "26V238", t: "2024–2026: sun-visor wiring fire", g: "A", u: NH("26V238") },
    { id: "19V366", t: "2019: shift cable bracket", g: "A", u: NH("19V366") }
  ],
  faults: [{ t: "2019–2023 10-speed harsh or delayed shifts; Ford TSB 23-2123.", g: "A", u: TSB("2023/MC-10234596-0002.pdf") }],
  inspect: ["10-speed shift quality from cold", "Check for tunes"]
},
{
  id: "chevy-colorado", seg: "truck", cls: "Midsize pickup", name: "Chevrolet Colorado / GMC Canyon", v: "avoid",
  buy: "If you must: 2016, 2018 or 2022",
  skip: "2023–2025; 2017–2019 V6 8-speed without the fluid exchange",
  gens: "2nd gen 2015–2022 (2.5L, 3.6 V6, 2.8 Duramax) · 3rd gen 2023+ (2.7T)",
  summary: { t: "CR rates most years below average and puts the Colorado/Canyon last among midsize pickups for 2026. The 2023 2.7T had a cracked-block engine replacement program.", g: "A", u: CR("chevrolet", "colorado", 2023) },
  faults: [
    { t: "2017–2019 V6 8-speed shudder; fluid exchange per GM 18-NA-355.", g: "A", u: TSB("2020/MC-10174266-9999.pdf") },
    { t: "2023 2.7T block cracks: engine replaced under program N232415060.", g: "A", u: TSB("2024/MC-10252980-0001.pdf") }
  ],
  evidence: [
    { t: "CR: 2015, 2017, 2019–2021, 2023, 2024 less; 2016, 2018, 2022 average", g: "A", u: CR("chevrolet", "colorado", 2019) },
    { t: "iSeeCars 2025: Colorado 7.0%, Canyon 8.4%", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Steady light-throttle shudder test", "Diesel DPF and DEF records", "On a 2023, VIN check for N232415060"]
},
{
  id: "jeep-gladiator", seg: "truck", cls: "Midsize pickup", name: "Jeep Gladiator", v: "avoid",
  buy: "Buy one for what it does, not for dependability",
  skip: "2020–2023",
  gens: "JT 2020+ (3.6 V6, 3.0 EcoDiesel 2021–2023)",
  summary: { t: "CR rates every year 2020–2023 less reliable, with steering the recurring trouble spot. Jeep extended steering-damper coverage to 8 years/90k for the “death wobble”.", g: "A", u: TSB("2024/MC-11010476-0001.pdf") },
  evidence: [{ t: "CR: 2020–2023 less reliable", g: "A", u: CR("jeep", "gladiator", 2021) }],
  inspect: ["Hit a bump at 45–60 mph and check for oscillation", "Track-bar bushings, tie-rod ends, damper", "Roof panel leaks"]
}
);
