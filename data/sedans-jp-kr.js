// Japanese and Korean sedans, compacts and small cars. Source: research/03-sedans-jp-kr.md
RC.models.push(
{
  id: "toyota-avalon", seg: "sedan", cls: "Large sedan", name: "Toyota Avalon", v: "top",
  buy: "2016–2022 with the 3.5L V6",
  skip: "Nothing specific; check fuel pump and airbag recalls",
  gens: "XX40 2015–2018 (2GR-FE, 6-speed) · XX50 2019–2022 (2GR-FKS, 8-speed). Discontinued after 2022.",
  summary: { t: "The strongest sedan in the range. CR rates every year checked more or much more reliable, the 2022 was the single most dependable model in J.D. Power's 2025 study, and it ranks #2 among passenger cars for reaching 250,000 miles.", g: "A", u: "https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/" },
  faults: [
    { t: "2019–2022 use the UA80 8-speed named in a Dec 2025 class action (LeBoutheller v. Toyota). Allegation only; no recall or extension.", g: "C", u: "https://www.slashgear.com/2079253/toyota-eight-speed-transmission-class-action-lawsuit/" },
    { t: "Owner comments mention water-pump noise on 2015 cars (anecdote).", g: "D" }
  ],
  recalls: [
    { id: "20V682", t: "2018–2020: low-pressure fuel pump can fail (also 20V012)", g: "A", u: NH("20V682") },
    { id: "20V024", t: "2012–2018: airbag control unit (ZF-TRW)", g: "A", u: NH("20V024") }
  ],
  evidence: [
    { t: "CR: 2016, 2019, 2020, 2021 much more reliable; 2015, 2018, 2022 more reliable", g: "A", u: CR("toyota", "avalon", 2020) },
    { t: "J.D. Power 2025 VDS: 2022 Avalon was the Most Dependable Model overall", g: "A", u: JDP(2025) },
    { t: "iSeeCars: 18.9% reach 250k miles (2025), 23.2% (2026), #2 passenger car both years", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: [
    "Run the VIN for the fuel pump and airbag recalls",
    "On 2015–2018, look for coolant seepage at the water pump",
    "On 2019–2022, check 8-speed shift quality and fluid condition"
  ]
},
{
  id: "toyota-camry", seg: "sedan", cls: "Midsize sedan", name: "Toyota Camry", v: "top",
  buy: "2.5L four-cylinder: 2015–2017 and 2019–2024",
  skip: "2018 first-year (engine-replacement recall on some 2.5L cars, 8-speed reflashes)",
  gens: "XV50 2015–2017 (2.5L, 6-speed) · XV70 2018–2024 (2.5L Dynamic Force or 3.5 V6, 8-speed) · XV80 2025 (hybrid only)",
  summary: { t: "CR rates every year from 2015 to 2024 above average, and J.D. Power named it the most dependable midsize car for three straight model years (2021–2023). The one open question is a class-action allegation about the 8-speed.", g: "A", u: CR("toyota", "camry", 2024) },
  faults: [
    { t: "2018 2.5L: oversized pistons from two December 2017 shifts cause oil use and stalling. Recall 18V200 replaces the engine.", g: "A", u: NH("18V200") },
    { t: "2018–2019 8-speed shift shock and hesitation, fixed by ECM reflash T-SB-0330-17 and T-SB-0152-19.", g: "A", u: TSB("2020/MC-10173797-9999.pdf") },
    { t: "UA80 8-speed class action (Dec 2025) alleges overheating fluid; lead plaintiff's 2020 Camry needed a transmission at ~125k. Allegation only.", g: "C", u: "https://www.slashgear.com/2079253/toyota-eight-speed-transmission-class-action-lawsuit/" },
    { t: "2018–2019 brake vacuum pump vane can break and reduce brake assist.", g: "A", u: NH("21V890") }
  ],
  recalls: [
    { id: "18V200", t: "2018 2.5L: engine replacement (oversized pistons)", g: "A", u: NH("18V200") },
    { id: "20V682", t: "2018–2020: fuel pump (also 20V012, 25V028)", g: "A", u: NH("20V682") },
    { id: "23V865", t: "2020–2022: passenger occupant sensor", g: "A", u: NH("23V865") }
  ],
  evidence: [
    { t: "CR: more reliable 2015–2017 and 2019–2024; 2018 much more reliable", g: "A", u: CR("toyota", "camry", 2021) },
    { t: "J.D. Power Midsize Car winner for MY2021, MY2022, MY2023 (and MY2016)", g: "A", u: JDP(2024) },
    { t: "iSeeCars 2025: 9.0% reach 250k miles, 3.5× the car average", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: [
    "Run the VIN for 18V200, the fuel pump and vacuum pump recalls",
    "On 2018–2019, look for the reflash label under the hood",
    "From cold, check for a harsh Park-to-Reverse and hesitation from a rolling stop",
    "Check oil level and look for blue smoke on a 2018"
  ]
},
{
  id: "lexus-es", seg: "sedan", cls: "Midsize luxury sedan", name: "Lexus ES 350", v: "top",
  buy: "2015–2019; 2022",
  skip: "2020–2021 are about average (still fine)",
  gens: "XV60 2015–2018 (2GR-FE, 6-speed) · XZ10 2019+ (2GR-FKS, 8-speed)",
  summary: { t: "CR rates 2015–2019 and 2022 more reliable, and J.D. Power named the ES best in segment five times in the range. Lexus extended the fuel pump coverage to July 2036 or 150,000 miles.", g: "A", u: CR("lexus", "es", 2019) },
  faults: [
    { t: "Fuel pump recall on 2018–2020 ES 350, with a Lexus Customer Support Program on the pump to July 15, 2036 or 150k miles.", g: "A", u: TSB("2023/MC-10235219-9999.pdf") },
    { t: "Vacuum pump knock at idle (2019–2023), a minor TSB fix.", g: "A", u: TSB("2023/MC-10247804-9999.pdf") }
  ],
  recalls: [
    { id: "20V682", t: "2018–2020: low-pressure fuel pump", g: "A", u: NH("20V682") },
    { id: "19V288", t: "2019: knee airbag", g: "A", u: NH("19V288") }
  ],
  evidence: [
    { t: "CR: 2015, 2016, 2018, 2019, 2022 more reliable; 2020–2021 about average", g: "A", u: CR("lexus", "es", 2018) },
    { t: "J.D. Power segment winner for MY2015, 2016, 2017 (Most Dependable Model, 52 PP100), 2018 and 2021", g: "A", u: JDP(2020) }
  ],
  inspect: ["Confirm the fuel pump recall and CSP status by VIN", "On 2019+, check 8-speed shift quality", "Lexus certified pre-owned is worth the premium"]
},
{
  id: "toyota-corolla", seg: "sedan", cls: "Compact sedan", name: "Toyota Corolla", v: "top",
  buy: "2018–2022; 2015–2017 if Toyota's CVT campaign was done",
  skip: "Early-build 2019 hatchback (CVT recall); 2023 is only average",
  gens: "E170 2015–2019 (1.8L CVT) · E210 hatchback 2019+, sedan 2020+ (1.8L or 2.0L)",
  summary: { t: "Four J.D. Power Compact Car awards (MY2019, 2021, 2022, 2023) and CR ratings of more or much more reliable nearly every year. It lasts less often to 250,000 miles than a Camry or Civic, which likely reflects how owners use it.", g: "A", u: JDP(2025) },
  faults: [
    { t: "2014–2017 CVT software caused abnormal wear and limp mode (P2820). Service campaign JSD reprograms and inspects; 2018 was built with the fix.", g: "A", u: TSB("2018/MC-10145732-9999.pdf") },
    { t: "2019 hatchback built Aug–Oct 2018: torque-converter blades can detach (about 3,400 cars). Recall 18V901 replaces the CVT.", g: "A", u: NH("18V901") }
  ],
  recalls: [
    { id: "24V878", t: "2023–2024: steering intermediate shaft can crack", g: "A", u: NH("24V878") },
    { id: "20V024", t: "2011–2019: airbag control unit", g: "A", u: NH("20V024") },
    { id: "20V682", t: "2019 hatch, 2020 sedan: fuel pump", g: "A", u: NH("20V682") }
  ],
  evidence: [
    { t: "CR: 2019, 2021, 2024 much more reliable; 2015–2018, 2020, 2022 more; 2023 about average", g: "A", u: CR("toyota", "corolla", 2021) },
    { t: "J.D. Power Compact Car winner for MY2019, MY2021, MY2022, MY2023", g: "A", u: JDP(2025) },
    { t: "iSeeCars 2025: 3.2% reach 250k miles", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["On 2015–2017, confirm campaign JSD by VIN", "Scan for P2820 and CVT codes", "Feel for CVT shudder at 20–40 mph"]
},
{
  id: "honda-fit", seg: "sedan", cls: "Subcompact hatchback", name: "Honda Fit", v: "top",
  buy: "2016–2020",
  skip: "2015 first-year recalls",
  gens: "GK 2015–2020 (1.5L, CVT or manual)",
  summary: { t: "CR rates 2016–2019 more reliable and 2020 much more reliable, and names the 2020 Fit a Used Car Top Pick. No powertrain warranty extension was needed.", g: "A", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/" },
  faults: [{ t: "2015: CVT drive-pulley software and ignition-coil stall recalls (15V574, 15V559).", g: "A", u: NH("15V574") }],
  recalls: [
    { id: "26V332", t: "2018–2020: passenger seat weight sensor (letters July 2026; likely still open)", g: "A", u: NH("26V332") },
    { id: "20V314", t: "2018–2019: fuel pump (expanded by 23V858)", g: "A", u: NH("20V314") }
  ],
  evidence: [{ t: "CR: 2015 about average; 2016–2019 more reliable; 2020 much more reliable", g: "A", u: CR("honda", "fit", 2020) }],
  inspect: ["Run the VIN for 26V332 and the fuel pump recalls", "Feel for CVT shudder", "Check that the gauge display works"]
},
{
  id: "mazda-mx5", seg: "sedan", cls: "Sports car", name: "Mazda MX-5 Miata", v: "top",
  buy: "2019–2022",
  skip: "2016–2017 soft-top manuals built before Sept 6, 2016 without the transmission replacement",
  gens: "ND 2016+ (155 hp 2016–2018, 181 hp 2019+; RF hardtop 2017+)",
  summary: { t: "CR rates 2019 much more reliable and 2018 and 2021 more reliable; J.D. Power named the 2019 best in its segment and CR lists the 2021 as a Used Car Top Pick.", g: "A", u: CR("mazda", "mx-5-miata", 2019) },
  faults: [{ t: "2016–2017 soft tops built before Sept 6, 2016: grinding or lost 2nd/3rd gear. Mazda TSB 05-001/17 replaces the transmission.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-10123441-9999.pdf" }],
  recalls: [{ id: "24V695", t: "2016–2023: airbag software (deployment force)", g: "A", u: NH("24V695") }],
  evidence: [
    { t: "CR: 2019 much more reliable; 2016, 2018, 2021 more; 2017, 2023 about average", g: "A", u: CR("mazda", "mx-5-miata", 2021) },
    { t: "J.D. Power Compact Sporty winner for MY2019", g: "A", u: JDP(2022) }
  ],
  inspect: ["On 2016–2017 manuals, check the transmission serial or TSB record", "Check soft-top drains", "Ask about track or autocross use"]
},
{
  id: "mazda-6", seg: "sedan", cls: "Midsize sedan", name: "Mazda6", v: "strong",
  buy: "2.5L non-turbo: 2015–2016 and 2019–2020",
  skip: "2018 first-year refresh recalls; 2.5T has thin data",
  gens: "GJ/GL 2015–2021 (2.5L; 2.5T from 2018)",
  summary: { t: "CR rates 2015–2016 and 2019–2020 more reliable and picks the 2016 as its best used car under $10,000.", g: "A", u: "https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/" },
  recalls: [
    { id: "19V497", t: "2018–2019: engine control software can stall", g: "A", u: NH("19V497") },
    { id: "21V875", t: "2018: fuel pump impeller", g: "A", u: NH("21V875") }
  ],
  evidence: [{ t: "CR: 2015, 2016, 2019, 2020 more reliable; 2017, 2018, 2021 about average", g: "A", u: CR("mazda", "6", 2019) }],
  inspect: ["Run the VIN for 19V497 and 21V875", "Check the infotainment for freezes", "On a turbo, ask for short oil-change intervals"]
},
{
  id: "lexus-is", seg: "sedan", cls: "Compact luxury sedan", name: "Lexus IS", v: "strong",
  buy: "2021–2023; IS 350 2016–2020",
  skip: "Check the fuel pump recall on 2017–2019",
  gens: "XE30 2015–2020 · facelift 2021+ (2.0T, 3.5 V6)",
  summary: { t: "J.D. Power's Most Dependable Model in its 2026 study (MY2023) and a segment winner for MY2021; iSeeCars ranked it #1 passenger car for longevity in 2025. CR has too few responses to rate most years, so this stays one step below top.", g: "A", u: "https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/" },
  recalls: [{ id: "20V682", t: "2017 IS 200t, 2018–2019 IS 300/350: fuel pump (support program to 2036)", g: "A", u: NH("20V682") }],
  evidence: [
    { t: "J.D. Power Compact Premium winner MY2021 and MY2023 (MDM 2026)", g: "A", u: JDP(2024) },
    { t: "iSeeCars: 27.5% reach 250k (2025, #1 car); 17.5% (2026)", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["Fuel pump recall and CSP by VIN", "Tire and alignment wear on RWD cars", "Maintenance records"]
},
{
  id: "honda-accord", seg: "sedan", cls: "Midsize sedan", name: "Honda Accord", v: "strong",
  buy: "2017 (2.4L); 2020–2021 and 2023–2024 (1.5T)",
  skip: "2018–2019 first-year recalls; 2015–2016 2.4 CVT without SB 16-053",
  gens: "9th gen 2015–2017 (2.4L CVT, 3.5 V6) · 10th gen 2018–2022 (1.5T CVT, 2.0T 10-speed) · 11th gen 2023+",
  summary: { t: "CR rates 2020 more and 2021 much more reliable, but it has never won a J.D. Power segment award in the range. The 2018–2022 cars are part of an NHTSA investigation into sudden automatic braking.", g: "A", u: CR("honda", "accord", 2021) },
  faults: [
    { t: "2015–2016 2.4 CVT belt slip at highway speed (P1890). Honda SB 16-053 reprograms or replaces the transmission.", g: "A", u: TSB("2016/SB-10086143-2280.pdf") },
    { t: "2018–2020 A/C condenser leaks; Honda SB 21-018 extends it to 10 years from purchase, still active.", g: "A", u: TSB("2021/MC-10194961-0001.pdf") },
    { t: "NHTSA EA24-002: phantom automatic braking on about 3M Hondas including 2018–2022 Accords.", g: "A", u: "https://static.nhtsa.gov/odi/inv/2024/INOA-EA24002-11766P1.pdf" },
    { t: "The 1.5T Accord was never covered by Honda's oil-dilution extension.", g: "A", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines" }
  ],
  recalls: [
    { id: "26V332", t: "2016–2022: passenger seat weight sensor (May 2026; likely open)", g: "A", u: NH("26V332") },
    { id: "20V771", t: "2018–2020: body control software (wipers, defroster, lights)", g: "A", u: NH("20V771") },
    { id: "24V763", t: "2023–2024: high-pressure fuel pump can leak", g: "A", u: NH("24V763") }
  ],
  evidence: [{ t: "CR: 2016, 2017, 2020, 2023, 2024 more; 2021 much more; 2015, 2018, 2019, 2022 about average", g: "A", u: CR("honda", "accord", 2020) }],
  inspect: ["Run the VIN for 26V332, 20V771 and 24V763", "Test the A/C; a leaking condenser on 2018–2020 is covered", "On a 1.5T, check the dipstick for overfill or fuel smell", "Drive in traffic and note any false braking"]
},
{
  id: "honda-civic", seg: "sedan", cls: "Compact sedan", name: "Honda Civic", v: "strong",
  buy: "2.0L non-turbo 2016–2021; any 2022–2023",
  skip: "2016–2018 1.5T, especially from cold states; 2018 (CR below average)",
  gens: "9th gen 2015 · 10th gen 2016–2021 (2.0L, 1.5T) · 11th gen 2022+",
  summary: { t: "Long-lived (15% reach 250,000 miles in iSeeCars' 2026 study) but less consistent than the Corolla. The 2016–2018 1.5 turbo had fuel diluting the oil, and Honda's extended warranty for it has now expired.", g: "A", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines" },
  faults: [
    { t: "1.5T oil dilution (fuel in the oil), 2016–2018. Honda's 6-year extension has expired on every car.", g: "A", u: "https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines" },
    { t: "2016–2018 A/C condenser leaks; SB 19-091 covers it for 10 years from purchase, still active.", g: "A", u: TSB("2020/MC-10180616-0001.pdf") },
    { t: "2016 2.0L built Sept 2015–Feb 2016: missing piston circlip can seize the engine (16V074).", g: "A", u: NH("16V074") },
    { t: "2022–2025 steering gearbox friction makes steering heavy (24V744).", g: "A", u: NH("24V744") }
  ],
  recalls: [
    { id: "26V332", t: "2016–2022: passenger seat weight sensor (likely open)", g: "A", u: NH("26V332") },
    { id: "24V744", t: "2022–2025: steering gearbox", g: "A", u: NH("24V744") },
    { id: "23V858", t: "Fuel pump (Denso)", g: "A", u: NH("23V858") }
  ],
  evidence: [
    { t: "CR: 2015, 2022, 2023 more reliable; 2016, 2017, 2019–2021, 2024 about average; 2018 less", g: "A", u: CR("honda", "civic", 2022) },
    { t: "iSeeCars: 10.9% (2025) and 15.0% (2026) reach 250k miles", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" }
  ],
  inspect: ["On a 1.5T, check the dipstick for overfill or fuel smell", "Test the A/C", "Run the VIN for 16V074, 24V744 and 26V332"]
},
{
  id: "acura-ilx", seg: "sedan", cls: "Compact luxury sedan", name: "Acura ILX / Integra", v: "strong",
  buy: "ILX 2.4L 2016–2022; Integra 2023",
  skip: "Check steering and brake-module recalls on the Integra",
  gens: "ILX 2016–2022 (2.4L, 8-speed dual-clutch) · Integra 2023+ (1.5T)",
  summary: { t: "The ILX is a durability standout: 10.6% reach 250,000 miles in iSeeCars' 2025 study (#5 passenger car). CR has too few ILX responses to rate it; CR rates the 2023 Integra more reliable.", g: "A", u: "https://www.iseecars.com/longest-lasting-cars-study" },
  recalls: [
    { id: "24V744", t: "2023–2025 Integra: steering gearbox", g: "A", u: NH("24V744") },
    { id: "23V430", t: "2023 Integra: stability control modulator leak", g: "A", u: NH("23V430") }
  ],
  evidence: [{ t: "iSeeCars 2026: ILX 12.4% reach 250k (#8 car)", g: "B", u: "https://www.roadandtrack.com/news/a73741744/20-longest-lasting-cars-trucks-suvs-2026/" }],
  inspect: ["Smooth low-speed engagement on the ILX dual-clutch", "Steering effort and centering on the Integra"]
},
{
  id: "kia-forte", seg: "sedan", cls: "Compact sedan", name: "Kia Forte", v: "strong",
  buy: "2.0L with IVT automatic, 2020–2022",
  skip: "2017–2018 (CR below average; oil pump recall)",
  gens: "YD 2015–2018 · BD 2019–2024 (2.0L MPI, IVT)",
  summary: { t: "One of the few upgrades against brand reputation. CR rates 2020–2022 more reliable, and the 2020 won J.D. Power's Compact Car award. Check the anti-theft software, and remember Kia's 10-year powertrain warranty does not fully pass to second owners.", g: "A", u: JDP(2023) },
  faults: [
    { t: "2017–2018 2.0L: debris in the oil pump can damage the engine (21V260).", g: "A", u: NH("21V260") },
    { t: "No engine immobilizer on 2011–2021 Forte; get the free anti-theft software.", g: "A", u: "https://www.hyundaitheftsettlement.com/" },
    { t: "2010–2018 Forte engines are covered by the 15-year/150k Hyundai/Kia engine settlement.", g: "A", u: "https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation" }
  ],
  recalls: [{ id: "22V304", t: "2021–2022: steering column joint bolt", g: "A", u: NH("22V304") }],
  evidence: [
    { t: "CR: 2020, 2021, 2022 more reliable; 2017, 2018 less", g: "A", u: CR("kia", "forte", 2021) },
    { t: "J.D. Power Compact Car winner MY2020", g: "A", u: JDP(2023) }
  ],
  inspect: ["Confirm the anti-theft software by VIN", "Check oil consumption", "Watch for IVT hesitation"]
},
{
  id: "mazda-3", seg: "sedan", cls: "Compact sedan", name: "Mazda3", v: "mixed",
  buy: "2017–2018; 2022; 2024",
  skip: "2019–2021 (CR below average three years running; false-braking recall)",
  gens: "BM/BN 2015–2018 · BP 2019+",
  summary: { t: "CR rates the 2019, 2020 and 2021 less reliable, then 2022 much more reliable. Mazda's brand ranking hides these swings.", g: "A", u: CR("mazda", "3", 2020) },
  faults: [{ t: "2019–2020: Smart Brake Support can falsely detect obstacles and brake (19V907).", g: "A", u: NH("19V907") }],
  recalls: [
    { id: "19V907", t: "2019–2020: false automatic braking", g: "A", u: NH("19V907") },
    { id: "19V497", t: "2019: engine software can stall", g: "A", u: NH("19V497") }
  ],
  evidence: [{ t: "CR: 2017, 2018, 2024 more; 2022 much more; 2019–2021 less; 2015, 2016, 2023 about average", g: "A", u: CR("mazda", "3", 2022) }],
  inspect: ["Drive under overpasses and in traffic; note any false braking", "On 2014–2016 manuals, shift hard 2–3–4", "Check infotainment reboots"]
},
{
  id: "hyundai-elantra", seg: "sedan", cls: "Compact sedan", name: "Hyundai Elantra", v: "mixed",
  buy: "2.0L 2021–2024 (2022 and 2024 best)",
  skip: "2017–2018 (CR below average, no immobilizer); 2019–2020 without recall 21V301",
  gens: "MD 2015–2016 · AD 2017–2020 · CN7 2021+",
  summary: { t: "The newest generation surveys well. Earlier cars carry engine recalls and settlements, and Hyundai's 10-year powertrain warranty drops to 5 years/60k for second owners.", g: "A", u: "https://www.hyundaiusa.com/us/en/assurance/america-best-warranty" },
  faults: [
    { t: "2019–2020 2.0L: piston oil rings improperly heat-treated; oil use, bearing seizure, fire risk. Recall 21V301 inspects or replaces the engine.", g: "A", u: NH("21V301") },
    { t: "2014–2016 2.0 GDI: 15-year/150k engine settlement coverage.", g: "A", u: "https://autoservice.hyundaiusa.com/TXXM" }
  ],
  evidence: [{ t: "CR: 2019, 2021, 2022, 2024 more; 2017, 2018 less; 2016, 2020, 2023 about average", g: "A", u: CR("hyundai", "elantra", 2022) }],
  inspect: ["Run the VIN for 21V301 and the anti-theft campaign", "Check oil level between changes", "Remember: second owners get 5 yr/60k powertrain"]
},
{
  id: "subaru-impreza", seg: "sedan", cls: "Compact sedan", name: "Subaru Impreza", v: "mixed",
  buy: "2018; 2022–2023",
  skip: "2016–2017 (CR below average)",
  gens: "GJ 2015–2016 · GT 2017–2023 · GU 2024+ (hatch only)",
  summary: { t: "CR rates 2018 and 2023 more reliable and 2016–2017 less. Subaru's CVT coverage runs 10 years/100k miles for 2015–2020.", g: "A", u: TSB("2025/MC-11021247-0001.pdf") },
  recalls: [
    { id: "21V264", t: "2017–2019: ignition coils powered after shutoff (replaces 19V743)", g: "A", u: NH("21V264") },
    { id: "21V587", t: "2018–2020: low-pressure fuel pump", g: "A", u: NH("21V587") }
  ],
  evidence: [{ t: "CR: 2018, 2023 more; 2015, 2019, 2021 about average; 2016, 2017 less", g: "A", u: CR("subaru", "impreza", 2018) }],
  inspect: ["Confirm CVT coverage through a Subaru dealer", "Test the battery for parasitic drain", "Feel for CVT shudder"]
},
{
  id: "subaru-legacy", seg: "sedan", cls: "Midsize sedan", name: "Subaru Legacy", v: "mixed",
  buy: "2.5L 2022–2024; 2016–2019",
  skip: "2020–2021 (CVT chain-slip recalls; CR below average)",
  gens: "BN 2015–2019 · BW 2020+ (2.5L, 2.4T)",
  summary: { t: "The 2020–2021 CVT can let the chain slip; recalls reprogram it and replace damaged units.", g: "A", u: NH("22V485") },
  recalls: [{ id: "22V485", t: "2020–2021: CVT chain slip (replaces 21V955)", g: "A", u: NH("22V485") }],
  evidence: [{ t: "CR: 2022 more; 2016, 2018, 2019 about average; 2020, 2021 less", g: "A", u: CR("subaru", "legacy", 2022) }],
  inspect: ["Confirm 22V485 and the transmission inspection result", "Battery load test (2015–2020 settlement)"]
},
{
  id: "nissan-altima", seg: "sedan", cls: "Midsize sedan", name: "Nissan Altima", v: "mixed",
  buy: "2.5L 2021 and 2023",
  skip: "2019–2020, especially the 2.0 VC-Turbo; 2015–2016 CVT",
  gens: "L33 2015–2018 · L34 2019+ (2.5L, 2.0 VC-Turbo)",
  summary: { t: "An upgrade against Nissan's reputation for recent 2.5L cars: CR rates the 2021 and 2023 much more reliable. Early L34 cars and the variable-compression turbo are a different story.", g: "A", u: CR("nissan", "altima", 2021) },
  faults: [
    { t: "2019–2020 2.0 VC-Turbo: engine bearings can fail, breaching the block (25V437, letters Apr 2026).", g: "A", u: NH("25V437") },
    { t: "2013–2018 CVT failures led to 84-month/84k extensions, now expired.", g: "A", u: TSB("2023/MC-10246457-0001.pdf") }
  ],
  recalls: [
    { id: "25V437", t: "2019–2020 2.0T: engine bearing", g: "A", u: NH("25V437") },
    { id: "20V315", t: "2013–2018: hood latch corrosion", g: "A", u: NH("20V315") }
  ],
  evidence: [{ t: "CR: 2021, 2023 much more; 2017, 2022 about average; 2019, 2020 less", g: "A", u: CR("nissan", "altima", 2023) }],
  inspect: ["Avoid the 2.0 VC-Turbo", "Get CVT fluid records and feel for shudder at 20–45 mph", "Confirm the hood-latch recall"]
},
{
  id: "nissan-sentra", seg: "sedan", cls: "Compact sedan", name: "Nissan Sentra", v: "mixed",
  buy: "2022–2024",
  skip: "2015–2017 (CVT; extension expired)",
  gens: "B17 2015–2019 · B18 2020+",
  summary: { t: "CR rates 2022–2023 more reliable. The CVT's long-term record is unproven, and older cars' extended CVT coverage is gone.", g: "A", u: CR("nissan", "sentra", 2022) },
  recalls: [{ id: "23V581", t: "2020–2022: tie rods can bend or break", g: "A", u: NH("23V581") }],
  evidence: [{ t: "CR: 2022, 2023 more; 2018–2021 about average; 2016 less", g: "A", u: CR("nissan", "sentra", 2016) }],
  inspect: ["CVT fluid service records", "Shudder test at 20–45 mph", "Confirm 23V581"]
},
{
  id: "nissan-maxima", seg: "sedan", cls: "Large sedan", name: "Nissan Maxima", v: "mixed",
  buy: "2019–2023",
  skip: "2016–2018 unless the ABS fire recall is done",
  gens: "A36 2016–2023 (3.5 V6, CVT)",
  summary: { t: "CR rates 2016 and 2019 more reliable on small samples. 2016–2018 cars have an ABS actuator fire recall.", g: "A", u: NH("19V807") },
  recalls: [{ id: "19V807", t: "2016–2018: ABS actuator can leak and catch fire (park outside if ABS light is on)", g: "A", u: NH("19V807") }],
  inspect: ["Confirm 19V807", "CVT fluid history; highway pull for slip"]
},
{
  id: "infiniti-q50", seg: "sedan", cls: "Compact luxury sedan", name: "Infiniti Q50", v: "mixed",
  buy: "3.0t 2016–2018 with turbo coverage confirmed",
  skip: "3.0t without the turbo extension; steer-by-wire cars without 16V430",
  gens: "V37 2015–2024 (3.7 V6 2015, 2.0T 2016–2019, 3.0t 2016+)",
  summary: { t: "CR rates 2016–2018 more reliable, but Infiniti extended turbocharger coverage to 10 years/120k for oil-leaking turbos on the same years.", g: "A", u: TSB("2025/MC-11014069-0001.pdf") },
  recalls: [
    { id: "16V430", t: "2014–2016: steer-by-wire start-up error", g: "A", u: NH("16V430") },
    { id: "24V470", t: "2014–2018 RWD: driveshaft fatigue", g: "A", u: NH("24V470") }
  ],
  inspect: ["Exhaust smoke on a warm restart; scan for P0106", "Confirm the ECU is stock (tunes void the extension)"]
},
{
  id: "genesis-g70-g80", seg: "sedan", cls: "Luxury sedan", name: "Genesis G70 / G80", v: "mixed",
  buy: "G70 2020–2021",
  skip: "G80 2018; G70 2022; any car with open fire recalls",
  gens: "G70 2019+ · G80 2017–2020 and 2021+ (Hyundai Genesis 2015–2016)",
  summary: { t: "Several park-outside fire recalls (ABS module, starter solenoid, turbo oil line). CR rates the 2018 G80 and 2022 G70 less reliable.", g: "A", u: NH("24V107") },
  recalls: [
    { id: "21V160", t: "2015–2020 Genesis/G80: ABS module short, fire (21V161 for G70)", g: "A", u: NH("21V160") },
    { id: "24V107", t: "Starter solenoid water intrusion, fire", g: "A", u: NH("24V107") },
    { id: "26V229", t: "2021–2025 G80: fuel pipe leak (Apr 2026)", g: "A", u: NH("26V229") }
  ],
  inspect: ["Confirm every fire recall is closed", "Look for oil around the 3.3T turbos"]
},
{
  id: "acura-tlx", seg: "sedan", cls: "Midsize luxury sedan", name: "Acura TLX", v: "mixed",
  buy: "2.4L 2018–2020",
  skip: "2015 V6; any 2015–2020 V6 without engine recall 23V751",
  gens: "2015–2020 (2.4L 8-speed dual-clutch, 3.5 V6 ZF 9-speed) · 2021+ (2.0T, 3.0T Type S)",
  summary: { t: "The V6 carries a connecting-rod bearing recall that can end in a replaced engine, and the 2015 V6 had several 9-speed recalls. The four-cylinder avoids both.", g: "A", u: NH("23V751") },
  faults: [{ t: "2015–2020 V6: rod bearings can wear and seize (23V751: inspect, repair or replace the engine).", g: "A", u: NH("23V751") }],
  recalls: [
    { id: "23V751", t: "2015–2020 V6: connecting rod bearings", g: "A", u: NH("23V751") },
    { id: "14V779", t: "2015 V6 9-speed: park pawl", g: "A", u: NH("14V779") }
  ],
  evidence: [{ t: "CR: 2015, 2019, 2020 more; 2016–2018 about average", g: "A", u: CR("acura", "tlx", 2019) }],
  inspect: ["On a V6, demand proof 23V751 was inspected or done", "Listen for bottom-end knock"]
},
{
  id: "hyundai-accent", seg: "sedan", cls: "Subcompact", name: "Hyundai Accent", v: "mixed",
  buy: "2018–2022 (limited data)",
  skip: "2015–2017 (CR below average; can't take the anti-theft software)",
  gens: "RB 2015–2017 · HC 2018–2022",
  summary: { t: "Thin survey data. The 2015–2017 cars lack an immobilizer and can't get the software fix.", g: "A", u: "https://www.hyundaitheftsettlement.com/" },
  inspect: ["Anti-theft campaign status", "Second owners get 5 yr/60k powertrain"]
},
{
  id: "gr86-brz", seg: "sedan", cls: "Sports car", name: "Toyota GR86 / Subaru BRZ", v: "mixed",
  buy: "Street-driven cars with records",
  skip: "2022+ cars used on track",
  gens: "Gen 1 2015–2020 (FA20) · Gen 2 2022+ (FA24)",
  summary: { t: "Instrumented owner tests showed oil-pressure drops on track, and some FA24 engines have failed in track use. There is no recall or bulletin.", g: "B", u: "https://www.roadandtrack.com/news/a44362621/toyota-gr86-subaru-brz-fa24-potential-starvation-issue/" },
  inspect: ["Ask about track and autocross use", "Oil-change records", "Clutch condition"]
},
{
  id: "hyundai-sonata", seg: "sedan", cls: "Midsize sedan", name: "Hyundai Sonata", v: "avoid",
  buy: "2020 2.5L, after confirming fuel-tank recall 25V796",
  skip: "2015–2019 2.4L and 2.0T (Theta II engine); 2021–2023 (CR below average)",
  gens: "LF 2015–2019 · DN8 2020+",
  summary: { t: "Theta II engines have a record of connecting-rod bearing failures that led to a lifetime short-block warranty settlement. CR rates every year 2015–2019 and 2021–2023 less reliable.", g: "A", u: "https://www.kiaenginesettlement.com/Content/Documents/Order%20Granting%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf" },
  faults: [
    { t: "Theta II rod bearing failure (seizure, stall, fire). Lifetime short-block warranty for later private owners only if the KSDS software is installed.", g: "A", u: "https://static.oemdtc.com/NHTSA-PDFs/MC-10178174-0001.pdf" },
    { t: "2020–2023: fuel-tank check valve can let the tank swell and melt against the exhaust (25V796).", g: "A", u: NH("25V796") }
  ],
  evidence: [
    { t: "CR: 2015–2019 less reliable; 2020 more; 2021–2023 less", g: "A", u: CR("hyundai", "sonata", 2018) },
    { t: "2017–2018 Sonata on CR's 2024 avoid list", g: "B", u: "https://www.thecarconnection.com/news/1143629_used-cars-to-avoid-chevy-ford-top-consumer-reports-list" }
  ],
  inspect: ["Check KSDS and lifetime warranty status at hyundaiusa.com", "Cold-start knock test; scan for P1326", "Look for engine-replacement history"]
},
{
  id: "kia-optima", seg: "sedan", cls: "Midsize sedan", name: "Kia Optima / K5", v: "avoid",
  buy: "2020 Optima 2.4 (about average)",
  skip: "2016–2019 2.4L and 2.0T (Theta II); 2021–2023 K5 (CR below average; transmission recall)",
  gens: "Optima JF 2016–2020 · K5 2021+",
  summary: { t: "Same Theta II settlement as the Sonata; CR rates 2016–2019 less reliable. J.D. Power's award to the 2020 Optima conflicts with CR's longer-term data.", g: "A", u: CR("kia", "optima", 2018) },
  recalls: [
    { id: "22V760", t: "2021–2023 K5: transmission oil pump failsafe", g: "A", u: NH("22V760") },
    { id: "25V794", t: "2021–2024 K5: fuel tank check valve", g: "A", u: NH("25V794") }
  ],
  evidence: [{ t: "J.D. Power Midsize Car winner MY2018 and MY2020", g: "A", u: JDP(2023) }],
  inspect: ["KSDS and lifetime warranty check", "Cold-start knock; P1326", "Anti-theft software"]
},
{
  id: "nissan-versa", seg: "sedan", cls: "Subcompact", name: "Nissan Versa", v: "avoid",
  buy: "2020+ (limited data) or a manual",
  skip: "2015–2019 CVT (extended coverage has expired)",
  gens: "N17 2015–2019 (plus Versa Note) · N18 2020+",
  summary: { t: "CVT failures on 2012–2019 cars led to 84-month extensions that have now run out.", g: "A", u: TSB("2023/MC-10246457-0001.pdf") },
  recalls: [{ id: "20V112", t: "2020: fuel tank wall too thin", g: "A", u: NH("20V112") }],
  inspect: ["CVT fluid history and shudder test"]
}
);
