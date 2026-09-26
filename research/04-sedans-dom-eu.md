# 04 — Domestic, European & Remaining Luxury Sedans/Compacts, MY 2015–2025 (non-hybrid)

Research agent 4 of 7 · compiled 2026-09-26 · Reader: US used-car buyer

## 0. Method, grading, and caveats

**Grading (inline on every load-bearing claim):**
- **A** = primary: NHTSA campaign/Part 573/API record, manufacturer TSB / warranty-extension / settlement document, J.D. Power's own VDS release or award page, Consumer Reports' own pages, iSeeCars' own study page.
- **B** = 2+ independent quality outlets converging.
- **C** = single secondary source, RepairPal, or a class-action complaint (an allegation, not a finding).
- **D** = forums, Reddit, CarComplaints-style aggregators, listicles, dealer blogs. Leads only, never load-bearing.

**Validation rule applied:** every verdict is tied to a specific model, model year and powertrain. Brand reputation is never used as evidence. Brand-level data appears only as context and is labeled that way.

**Important caveats about the data:**
1. **Consumer Reports model-year pages.** I read CR's per-model-year reliability pages (e.g. `consumerreports.org/cars/buick/lacrosse/2017/reliability/`) through a web crawler. Each page's public headline sentence ("more / about as / less reliable than other cars from the same model year") is CR's own verdict (A). The crawl snapshots come from different dates (several are dated 2023-11-01), so a verdict may reflect an older annual survey than CR's current one. A CR verdict covers **all powertrains of that model year combined** unless stated otherwise. Where the page showed no verdict, it is marked **NA** (CR reported "No Detailed Data Available" or the headline was not captured).
2. **CR "Used Cars to Avoid" lists are paywalled.** I reached them only through coverage: TheStreet (Aug 2024 list), The Car Guide (Feb 2025 list), Jalopnik and SlashGear (Mar 2026 list, "42 Used Cars to Avoid"). Coverage of one CR edition by a single outlet is graded **C**. An entry that appears in two separately covered editions is graded **B**.
3. **J.D. Power VDS award pages** (A) list segment winners by study year. Study year N covers MY N−3. The 2026 VDS gave only 12 model awards, and none went to a car in this scope.
4. **iSeeCars 2025 Longest-Lasting study** (A) predicts the probability of reaching 250,000 miles for a model across all years. It measures durability and usage, not repair frequency.
5. **Tool limit.** The shared WebSearch quota (200 calls) ran out partway through. The remaining work used the Exa search/fetch tools, which also retrieved NHTSA API/PDF records and CR pages. Total for this agent: about 95 searches and fetches.

---

## 1. Cross-cutting evidence tables

### 1a. J.D. Power U.S. VDS segment awards in scope (A)
| VDS study (MY) | In-scope winner(s) | Source |
|---|---|---|
| 2018 VDS (MY2015) | **Chevrolet Malibu** (Midsize Car), **Dodge Challenger** (Midsize Sporty), **Buick LaCrosse** (Large Car) | jdpower.com/cars/ratings/dependability/2018 |
| 2019 VDS (MY2016) | **Chevrolet Sonic** (Small Car), **Buick Verano** (Compact Car), **Dodge Challenger** (Midsize Sporty), **BMW 5 Series Gran Turismo** (Midsize Premium Car), **Buick LaCrosse** (Large Car) | …/dependability/2019 |
| 2020 VDS (MY2017) | **Buick Regal** (Midsize Car), **Ford Mustang** (Midsize Sporty) | …/dependability/2020 |
| 2021 VDS (MY2018) | none in scope (Camaro, VW Beetle, Genesis G80, Kia Optima, Avalon won) | …/dependability/2021 |
| 2022 VDS (MY2019) | **Ford Mustang** (Midsize Sporty), **Lincoln MKZ** (Midsize Premium Car), **Chevrolet Impala** (Large Car); BMW 4 Series (Compact Premium, a sibling of the 3 Series) | …/dependability/2022; Cars.com relay (B) |
| 2023 VDS (MY2020) | none in scope (BMW 4 Series won Compact Premium Car, a sibling of the 3 Series) | …/dependability/2023; JDP 2023 press release |
| 2024 VDS (MY2021) | none in scope | …/dependability/2024 |
| 2025 VDS (MY2022) | **BMW 3 Series** (Compact Premium Car) | …/dependability/2025 |
| 2026 VDS (MY2023) | none in scope (only 12 awards given) | JDP 2026 press release |

Brand context only, not model evidence: Buick ranked #1 mass-market in the 2025 VDS (143 PP100) and 2026 VDS (160 PP100). Cadillac ranked #2 premium in both (169 and 175) (A).

### 1b. CR "Used Cars to Avoid" entries in scope (reached via coverage)
- **Aug 2024 edition (via TheStreet, C):** Audi A3 2019; Audi A6 2019; Chevrolet Cruze 2014; Chevrolet Malibu 2014; **Ford Mustang 2020**; **Mercedes C-Class 2018**; VW Jetta 2014, **2021**; **Volvo S60 2015, 2022**.
- **Feb 2025 edition (via The Car Guide, C):** **BMW 3 Series 2024**; **Mercedes C-Class 2015**; **Mercedes E-Class 2019**; **Audi A6 2019** (the A6 2019 appears in both editions, so **B**).
- **Mar 2026 edition ("42 Used Cars to Avoid"):** the Ford entries are all trucks and SUVs (Bronco Sport, Explorer, F-150 Hybrid, Expedition, Escape Hybrid) per Jalopnik (C). I could not reach the full list for the other in-scope makes.

### 1c. iSeeCars 2025 Longest-Lasting Passenger Cars (A)
The average passenger car has a **2.6%** chance of reaching 250,000 miles. The only in-scope models on the above-average list are the **Mercedes-Benz E-Class, 6.7% (#11, 2.6×)**, and the **Ford Mustang, 3.2% (#17, 1.2×)**. No other domestic or European sedan in this scope made the list.

### 1d. CR brand context (A, new-car predicted reliability, Dec 2025)
BMW ranked #5 overall. Buick ranked #8 and was the top domestic brand. The European average score was 50, domestic 41. Context only.

---

## 2. Model-by-model findings

### Chevrolet Malibu: Gen 8 (2013–2015; 2.5L I4, 2.0T) and Gen 9 (2016–2025; 1.5T, 2.0T)
- **Verdict.** Gen 8, **2015 2.5L: Strong (budget).** Gen 9, **2016–2022: Mixed leaning Avoid.** Gen 9, **2023–2025: Mixed.**
- **Best to buy:** 2015 Malibu 2.5L (JDP 2018 VDS Midsize Car award (A); CR 2015 "about average" (A)). In Gen 9, 2023 has CR "about average" (A).
- **Avoid or be careful:** 2016, 2017, 2018, 2020 and 2022 are each rated by CR as "less reliable than other cars from the same model year" (A). 2014 is on CR's avoid list (C).
- **Known failure points:**
  - "Shift to Park" message that prevents shut-off, on 2016–2019 Malibu (plus Volt, Traverse and Blazer). A class action was filed and a settlement reached ($500 per class vehicle, plus $375 for out-of-pocket repairs; the claim window has closed). Existence of the suit is **B** (GM Authority, ClassAction.org); settlement terms are **C**. Practical fix: shifter microswitch or harness repair (D).
  - High-pressure fuel pump can detach, causing a fuel leak, on 2016–2018 Malibu. **Recall 18V358** (A).
- **Recalls (A):** 18V358 (HPFP); 16V781 (2016 side airbag tear); 16V272 (2016 EBCM memory chip failure causing ABS/ESC loss); 18V400 (2016–2018 passenger presence sensor after service); 16V502 (electronic park-lock lever); 20V668 (2018 Malibu start/stop accumulator bolts); 18V576 (2018 rear caliper piston coating).
- **Evidence:** JDP 2018 VDS award for the 2015 model (A); CR per-year verdicts above (A).
- **Inspection checklist:** Shift to Park and confirm the car shuts off with no message. Confirm HPFP recall 18V358 and airbag recalls are closed by VIN. Check that start/stop works. Scan for stored codes. On 2019+ cars, drive at low speed and check for CVT judder (the CVT spec was not re-verified in this pass).

### Chevrolet Cruze: Gen 1 (2011–2016 incl. 2016 "Limited"; 1.4T LUV, 1.8) and Gen 2 (2016–2019; 1.4T LE2, 1.6 diesel)
- **Verdict.** **Gen 1: Avoid.** **Gen 2 2016–2018: Mixed leaning Avoid.** **Gen 2 2019: Mixed.**
- **Best to buy (if you must):** a 2019, or a 2017 (CR "about average") with proof the piston/ECM bulletin work was done (A).
- **Avoid:** 2014 (CR avoid list, C). 2018 is CR "less reliable" (A). Any Gen 1 1.4T carries water-pump, coolant and PCV issues; GM's water-pump special coverage 14371 (2011–2014 Cruze, 2012–2014 Sonic, 10 yr/150k) has now aged out (C, OEM bulletin mirror).
- **Known failure points:**
  - **Gen 2 1.4L LE2 damaged or cracked pistons**, causing P0300 misfire and low compression. GM PIP5490 (2016–2017), PIP5490D (2016–2018) and bulletin **18-NA-171** (2016–2018 Cruze, Encore, Trax) say to replace **all four pistons** and fill with current dexos oil, and note that "a calibration has been released [for Cruze] to reduce the possibility of a cracked piston" (A). Engine replacement is required if the cylinder walls are scuffed (A).
  - Coolant leaks from the thermostat housing and turbo coolant lines on the 1.4T (D, lead only).
- **Recalls (A):** 18V304 (2016–2018 Cruze LS with inflator kit: fuel-tank vapor-sensor lock ring); 17V057 (2016–2017 front seat-back weld); 16V498 (headlamp aim label); 16V502 (park-lock lever, 2011–2016 service parts); 20V668 (2018–2019 start/stop accumulator).
- **Evidence:** CR 2016 and 2017 "about average", 2018 "less reliable" (A); GM bulletins (A).
- **Inspection checklist:** Compression and leak-down test on the 1.4T. Scan misfire history (P0300–P0304). Confirm the ECM calibration update and the dexos oil record. Check the coolant level and look for crusty residue at the thermostat housing and water outlet. Check for PCV and valve-cover whistle or oil leaks.

### Chevrolet Impala: Gen 10 (2014–2020; 3.6L V6 LFX, 2.5L I4; 6T70 automatic)
- **Verdict: Strong** for **2017–2020 3.6L V6**. Mixed for 2014–2016.
- **Best:** 2017–2020 3.6L. CR rates 2017, 2018, 2019 and 2020 "about average" (A). The 2019 won the JDP 2022 VDS Large Car award (A).
- **Caution:** 2016 is CR "less reliable" (A). 2014 has shift-cable recall **14V092** (A).
- **Known failure points:**
  - 6T70 launch shudder or a 2–3/3–2 shift disturbance from valve-body debris or scoring. GM bulletin **18-NA-358** covers 2014–2019 GM front-drive 6T70/6T75/6T80 applications, including LaCrosse, Regal, Impala and Malibu (A; the model-year table in the PDF is garbled). The fix is replacing both valve bodies.
  - Torque-converter seal leak (20-NA-023) and no reverse/no 3rd on 2016 (16-NA-013), both via a third-party parse of GM bulletins (C).
  - NHTSA owner complaints for the 2017 model: about 12 powertrain and 15 engine complaints (spark-plug-tube porosity, cracked cat flange). **D**, low counts.
- **Recalls (A):** 18V576 (2018–2019 rear calipers); 14V092 (2014 shift cable).
- **Evidence:** JDP 2022 VDS award (A); CR "about average" for 2015 and 2017–2020 (A).
- **Inspection checklist:** Drive from a stop and through the 2–3 shift for shudder. Check the transmission fluid condition and ask whether it has been changed. Look for oil at the spark-plug tubes and cold-start misfire codes. Check the front bank catalytic-converter flange for cracks or exhaust leaks. Check rear shocks and steering clunks.

### Chevrolet Sonic / Spark (brief)
- **Sonic (2012–2020): Mixed, limited evidence.** The 2016 Sonic won the JDP 2019 VDS Small Car award (A). The 1.4T shares the Cruze Gen 1 water-pump and coolant weaknesses; special coverage 14371 covered 2012–2014 Sonic and has lapsed (C).
- **Spark (2013–2022):** insufficient model-year evidence gathered. No verdict.
- **Checklist (Sonic 1.4T):** coolant level, water-pump weep hole, PCV and valve-cover leaks, misfire codes.

### Buick LaCrosse: Gen 2 (2010–2016; 3.6L LFX, 2.4 eAssist) and Gen 3 (2017–2019; 3.6L LGX with 8-speed in 2017 and 9-speed in 2018–19; 2.5 eAssist is out of scope)
- **Verdict: Top pick in this scope** for **2015–2016 3.6L** and **2017–2019 3.6L**.
- **Best:** 2015 and 2016. Both won the J.D. Power Large Car award, in the 2018 and 2019 VDS respectively (A). CR rates 2015 "about average" (A). **2017 is CR "more reliable than other cars"** (A). 2018 is CR "about average" (A). CR's 2016 and 2019 headlines were not captured (NA).
- **Caution:** 2017 AWD had a propshaft stop-delivery, GM recall 16069, early build (A). Avoid the 2.4 eAssist mild hybrid, whose battery and generator are aging (D). 2010 3.0L timing chain (D; outside scope).
- **Known failure points:**
  - 6T70 shudder bulletin 18-NA-358 covers 2014–2016 LaCrosse (A).
  - 2018 stop/start software issue causing rough running, reduced power or stall: GM Service Update **N192266190** (ECM reflash) (A).
  - 2017 dealer-inventory transmission cooler-line seal: Service Update 17176 (A; dealer stock only).
  - Shift-to-Park microswitch on Gen 3 (D).
- **Recalls (A):** 16V651 and its follow-up (2014–2016 air-bag SDM software; GM 16007/17287); **20V668** (2019 start/stop accumulator bolts); **18V576** (2018–2019 rear calipers).
- **Evidence:** two consecutive JDP large-car awards and CR average or better (A). The falsification search found no class action specific to the LaCrosse.
- **Inspection checklist:** Confirm the recalls and the N192266190 reflash by VIN. Test start/stop re-starts. Check for 6T70 shudder (2015–16), 8-speed highway shudder (2017) and 9-speed shift quality (2018–19). Check whether the HVAC blend doors match temperature side to side (D). Test the infotainment screen. Look for water-pump weep.

### Buick Regal: Gen 5 (2011–2017; 2.0T, 2.4) and Gen 6 (2018–2020 Sportback/TourX; 2.0T with 9-speed)
- **Verdict: Mixed (acceptable).**
- **Evidence conflict:** the 2017 Regal won the JDP 2020 VDS Midsize Car award (A), but CR rates 2017 "less reliable" (A). CR rates 2016, 2018 and 2019 "about average" (A).
- **Best:** 2018–2020 Sportback or TourX 2.0T (CR average), 2016 (CR average).
- **Recalls:** 18V576 (2018–2019 rear calipers) (A).
- **Checklist:** 9-speed shift quality, 6T70 shudder on earlier cars, start/stop, confirm the recall is closed.

### Buick Verano (2012–2017; 2.4L LEA, 2.0T)
- **Verdict: Strong, limited evidence**, for **2015–2017 2.4L**.
- **Evidence:** the 2016 Verano won the JDP 2019 VDS Compact Car award (A). CR rates 2015 "about average" (A).
- **Claim checked and not supported:** GM's 2.4L oil-consumption special coverage N192291100 covers **only 2013 Equinox and Terrain** (and an earlier coverage covered 2010), **not the Verano** (A). Do not assume the Verano burns oil. Still run an oil-consumption check.
- **Recalls:** 16V502 (2016–2017 Verano electronic park-lock lever) (A).
- **Checklist:** oil level versus the last-change sticker, park-lock and key removal, start-up rattle.

### Cadillac ATS (2013–2019) / CTS (2014–2019)
- **Verdict: Mixed, insufficient model-year evidence.** CR headlines for 2015 and 2017 ATS/CTS were NA. There are no JDP awards.
- **Known failure points:**
  - **CUE touchscreen delamination, cracking or unresponsiveness**, 2013–2017 ATS/CTS/XTS/SRX. Class action *Gruchacz v. GM* (D.N.J.) survived a motion to dismiss. GM TSBs from Dec 2014 and Aug 2017 advise replacing the integrated center stack. Existence **B** (GM Authority, CarComplaints, Digital Trends); allegations **C**.
  - **8L45/8L90 8-speed shudder** on 2016–2019 ATS/CTS. A class action alleges torque-converter shudder; GM's "Mod1a" fluid-flush remedy is cited (**C**). Coverage conflicts on certification status (C).
- **Checklist:** inspect the CUE glass for bubbles or spider-webbing. At 25–50 mph under light throttle, check for a "rumble-strip" shudder and ask for proof of the fluid flush. Look for coolant leaks on the 2.0T LTG (D).

### Cadillac CT4 (2020–) / CT5 (2020–)
- **Verdict.** **CT5 2022–2023: Strong, limited data.** CT4/CT5 **2020–2021 with the 10-speed: Mixed.** CT4: insufficient data.
- **Evidence (A):** CR rates the CT5 2020 "less reliable", 2021 "about average", **2022 "more reliable"**, and 2023 "about average".
- **Known failure point:** the 10-speed transmission control valve can wear, causing harsh shifts and, rarely, a **momentary wheel lock-up**. **Recall 25V148** covers 2020–2021 CT4/CT5 (and CT6 and Camaro). The remedy is software that detects the wear and limits the car to 5th gear. GM says 2022 CT4/CT5 were built with the new software (A). Related GM bulletin 21-NA-275 (valve-body replacement for rear-wheel lock-up or ABS events) (A).
- **Other recalls (A):** 22V903 (2020–2023 CT4/CT5 DRL software).
- **Checklist:** confirm 25V148 is done. Test for harsh 8-7 or 8-6 downshifts at 40–60 mph. Check that OTA and infotainment updates are current.

### Ford Fusion (2013–2020; 2.5L I4 with 6F35, 1.5T, 2.0T, 2.7T Sport, 1.6T to 2016; hybrids out of scope)
- **Verdict.** **2.5L (non-turbo) 2015–2019: Strong (value).** **1.5 EcoBoost: Avoid.** **2.0 EcoBoost 2017–2019 built on or before 8-Apr-2019: Avoid** unless there is documentation of a replaced long block. 2.7 Sport: insufficient data. 2020 model: Mixed.
- **Evidence:** CR rates 2015, 2016, 2017, 2018 and 2019 "about average" and **2020 "less reliable"** (A). These verdicts cover all engines combined.
- **Known failure points:**
  - **1.5L EcoBoost coolant intrusion** (low coolant, white smoke, misfire). Ford **TSB 20-2100** (supersedes 19-2375) and **SSM 48106** cover **2014–2019 Fusion built on or before 10-Jun-2019**. The remedy is a **short block** replacement (A).
  - **2.0L EcoBoost coolant intrusion.** Ford **TSB 19-2346 → 22-2133 → 22-2229** covers **2017–2019 Fusion and MKZ built on or before 8-Apr-2019** (engine base part number 910). The remedy is a **long block** replacement, roughly 12.9–14.9 labor hours (A). SSM 50439 lists long-block kits for 2017–2020 Fusion/MKZ (A).
  - 2.5L shifter-cable bushing degradation, where the transmission may not actually be in Park. **Recalls 18V471 and 19V362** (2013–2016, 2.5L with 6F35) (A).
  - 1.6L EcoBoost: manual clutch fracture on 2013–2014 Fusion (**18V169**) and coolant/cylinder-head overheating (**17V209**) (A). These years are outside scope.
- **Recalls (A):** 15V250 and 19V632 (2013–2016 electric power-steering motor bolts corroding in salt states); **18V167** (2014–2018 steering-wheel bolt); **23V162** (2013–2018 front brake hoses may rupture); 17V427 (2017 2.0L torque-converter weld studs); 20V177 and 23V775 (door latches, hot-climate states); 16V875 and 19V590 (2015 seat-belt anchor cable).
- **Checklist:** decode the engine from the VIN. If it is a 1.5T or 2.0T, do a cooling-system pressure test and a borescope check for coolant in the cylinders, and get the Ford/Lincoln service history to see whether the engine was replaced. On the 2.5L, confirm 18V471/19V362 are done and check that the key only comes out in Park. Confirm the brake-hose and steering-bolt recalls. Check for steering assist loss in salt-belt cars.

### Ford Focus (2012–2018; 2.0L GDI with 6-speed PowerShift DPS6 dual-clutch or manual, 1.0L EcoBoost, ST 2.0T, RS 2.3T)
- **Verdict. Avoid** any **PowerShift automatic**, 2015–2018. Manual 2.0L: Mixed. Focus ST (manual): Mixed, limited data. Focus RS: insufficient verified data.
- **Evidence:** CR rates 2015, 2017 and 2018 "less reliable" (A); 2016's headline was not captured.
- **Known failure points:**
  - **DPS6 PowerShift** clutch shudder, slipping and hesitation, plus TCM failure. Ford extended the clutch warranty to **7 yr/100k** and the TCM to **10 yr/150k** on about 560,000 cars, and reimbursed owners of 2014–2016 Focus and 2014–2015 Fiesta. The 2017 class settlement (2012–2016 Focus, 2011–2016 Fiesta) paid up to $2,325 or offered a repurchase (**B**: Detroit News, TT News, Cars.com). **By 2026 the clutch extension has expired on essentially every car, and the TCM extension is expiring.**
  - **Canister purge valve** failure: stalling, fuel-tank deformation. **18V735** (2012–2018 2.0L). Improperly repaired cars were re-recalled under **26V369** (June 2026) (A).
  - **1.0L EcoBoost with manual**: clutch may fracture, with a fire risk. **18V169 and 18V845** (2015–2018); re-repair **26V376** (June 2026) (A).
  - **Oil-pump drive belt or tensioner failure** causing loss of oil pressure and engine failure. **23V905** (2016–2018 Focus, 2018–2022 EcoSport); owner letters Aug 2025. The NHTSA summary does not name the engine, so check by VIN (A).
  - **Engine block heater** may crack and short, with a fire risk. **26V011 and 26V012** (2013–2018 Focus 2.0L / 2016–2018 Focus). Final remedy pending; don't plug in until fixed (A, Jan 2026).
- **Other recalls (A):** 17V052 (2016 floor-pan apron welds); 16V698 (hatch latch on manual cars).
- **Checklist:** avoid the automatic outright. On a manual, check clutch take-up and for slipping and fluid leaks. Confirm every recall by VIN; several are recent or still open (26V011/012/369/376, 23V905). Keep the fuel tank at least half full until 18V735 is verified.

### Ford Fiesta (2011–2019; 1.6L with DPS6 or manual, 1.0T, ST 1.6T)
- **Verdict. Avoid** the PowerShift automatic. Manual and ST: Mixed.
- **Evidence:** CR rates 2018 "about average" (A); 2016 NA.
- **Known failure points:** DPS6, as for the Focus (B). **17V209**: 2014–2015 Fiesta ST 1.6L GTDI cylinder head can crack if run low on coolant; the fix adds a coolant-level sensor (A).
- **Recalls (A):** 15V005 (2014–2015 fuel pump); **20V177 and 23V775** (door latches, hot-climate states).
- **Checklist:** automatic, walk away. ST: confirm 17V209, check coolant, check clutch.

### Ford Mustang: S550 (2015–2023; 2.3L EcoBoost, 3.7 V6 to 2017, 5.0 Coyote Gen 2 2015–17 / Gen 3 2018–20 / Gen 4 2021–23; 6R80 auto to 2017, 10R80 from 2018, MT82 manual) and S650 (2024+)
- **Verdict. Strong** for **GT 5.0 2015–2016** (6R80 automatic preferred) and **2018–2019**. **2017: Mixed.** **2020: Avoid.** 2021–2023: Mixed-positive. S650 2024+: insufficient data.
- **Evidence:** the 2017 Mustang won the JDP 2020 VDS Midsize Sporty award and the 2019 won the 2022 VDS award (A). CR rates 2015, 2016 and 2018 "about average", **2017 "less reliable"**, **2019 "more reliable"**, and 2021–2022 "about average" (A). **2020 is on CR's avoid list** (C). iSeeCars: 3.2% chance of reaching 250k, 1.2× the car average (A).
- **Known failure points:**
  - **10R80 10-speed harsh or delayed shifts.** Ford TSBs 25-2126 (2018–2020) and 24-2254 (2021–2022), via a Mustang fan-club summary (C). Class action *McCabe v. Ford* (C, allegation).
  - **MT82 manual** gear clash and broken 1-2 and 3-4 shift forks. TSBs 18-2175 and 18-2267, cited in class action *El-Rifai v. Ford* covering 2011–2019 (C).
  - **5.0 oil consumption.** Ford **TSB 19-2365 covers 2018–2020 F-150 5.0 only** (A). The Mustang is **not** named, so for the Mustang this is C/D.
  - Oil-pump gear delamination on Gen 3/4 Coyote engines: D (single guide site). Lead only.
- **Recalls (A):** 16V779 (2015–2017 oil-cooler tube; Ford's dealer bulletin is for GT350/GT350R); **25V614** (2015–2017 front seat-belt anchor pretensioner cables corrode; interim letters Oct 2025, **final remedy expected Dec 2026, so this is open**); 22V082 and 25V572 (rear camera); 20V263 (2019–2020 "not in Park" chime); 19V076 and 26V372 (2019 blank instrument cluster, re-repair 2026); 22V382 (2019–2020 5.0 manual PCM fault). 18V-213 (10R80 park pawl roll pin) and 25V455 (2021–2022 fuel pump) come via a secondary summary (C).
- **Checklist:** check the oil level and dipstick at purchase and track consumption. Test the 10R80 for harsh engagement and 2-3 and 4-5 shifts, and ask about TSB reflashes. On the MT82, check 2nd and 3rd for grinding when warm. Confirm 25V614 status in salt-belt cars. Look for signs of track use or modification.

### Dodge Charger (LD, 2011–2023) / Challenger (LA, 2008–2023) / Chrysler 300 (LX, 2011–2023): 3.6L Pentastar, 5.7L and 6.4L Hemi, ZF-licensed 8-speed
- **Verdict. Strong, conditional**, for **Chrysler 300 3.6/5.7 2017–2019**, **Challenger 2015–2016** (and 2022, CR average), and the **Charger** (inferred from the mechanically identical 300 because Charger-specific CR data is NA).
- **Evidence:** the 2015 and 2016 Challenger each won the J.D. Power Midsize Sporty award (2018 and 2019 VDS) (A). CR rates the 300 2015 "about average", **2017 "more reliable"**, and 2019 "about average" (A). Challenger 2022 "about average" (A). Charger 2015/17/19/21/23: CR NA.
- **Known failure points:**
  - **Side-curtain airbag inflator may rupture.** **Recall 24V198** covers 2018–2021 Charger (217,802) and 300 (67,180) built 5-Jul-2018 to May-2021. The remedy replaces both side curtains (A).
  - **3.6 Pentastar valvetrain** (rocker arm, lifter, camshaft) failure causing ticking and misfire. Class action *Maugain v. FCA* covers 2014–2022 Charger, Challenger and 300 among others; reported repair bills are $1,700–$5,700 (**C**, allegation).
  - **5.7 and 6.4 Hemi MDS lifter and cam failure** ("Hemi tick"). Class action *Petro v. FCA* (D. Del.) covers 2014–2016 300, Challenger and Charger. It cites FCA STAR Case S1709000010 (**C**).
  - Pentastar oil filter housing and cooler leak: common on the plastic 2011–2013 unit, redesigned in 2014 (D; $400–1,200 repair per shop blogs, D).
- **Recalls (A):** 24V198; 18V332 (cruise control may not disengage; 2014–2018 LX/LD, 2015–2018 Challenger); **17V097** (2014–2017 AWD front driveshaft bolts); 16V043 (jack/sill); 15V461 (2015 Uconnect cybersecurity); 18V281 (police AWD V8 driveshaft).
- **Checklist:** confirm 24V198 by VIN (sold 2018–2021 cars must have it done). Listen at cold start for valvetrain tick, check for misfire codes and look at the oil condition. On AWD cars, confirm 17V097. Check the oil filter housing for weeping at the back of the valley. On Hemi cars, ask about oil-change intervals and listen for lifter tick at idle.

### Chrysler 200 (2015–2017; 2.4 Tigershark, 3.6 Pentastar; ZF 9-speed 948TE)
- **Verdict. Avoid 2015.** 2016–2017: Mixed (only if every recall is done).
- **Evidence:** CR rates 2015 "less reliable" and 2016 "about average" (A); 2017 NA.
- **Known failure points (A):** **15V090** (2015 9-speed park pawl contaminated or park rod broken, rollaway risk; transmission replaced if found); **16V529** (9-speed sensor-cluster crimps, may unexpectedly shift to neutral); **15V470** (power distribution center connector, stall); 14V480 (door harness wire gauge, fire); 14V392 (rear shock weld); 16V114 (occupant classification after service); 18V332 (cruise control). Pentastar valvetrain class action includes the 2014–2017 200 (C).
- **Checklist:** confirm all transmission recalls by VIN. Road test for lurching and flare between gears, delayed engagement, and neutral drop-outs.

### Volkswagen Jetta: Mk6 (2011–2018; 1.4T, 1.8T, 2.0 TDI to 2015, GLI 2.0T) and Mk7 (2019–; 1.4T/1.5T, GLI 2.0T)
- **Verdict. Avoid** most years. 2017 and 2020: Mixed.
- **Evidence:** CR rates 2015 and 2016 "less reliable", 2017 "about average", **2019 "less reliable"**, 2020 "about average", and **2022–2023 "less reliable"** (A). **2021** is on CR's avoid list (C). 2014 is also on the list (C).
- **Known failure points:**
  - **EA888 1.8T/2.0T water pump and thermostat housing leak.** VW's class settlement extended coverage to **8 yr/80k** from the in-service date, effective 10-Jun-2022 (VW dealer FAQ, Warranty Policy Bulletin VWP-22-06) (A). The covered-model list (Jetta, Golf, Passat, Arteon, Atlas, Tiguan, Beetle, Audi A3/A4 allroad/A5/A6/Q3/Q5/Q7) comes via secondary summaries (C). **Most 2015–2018 cars are now outside the 8-year window**, so the buyer pays.
  - **2015 2.0 TDI (Generation 3):** "dieselgate" cars. They were bought back or received an EPA/CARB-approved two-phase emissions modification with extended emissions warranty coverage. Diesel exhaust fluid use may rise 1–14% (A, VW settlement disclosure booklet). The EPA says the cars remain legal to resell (Edmunds relay, C). Buy only with both modification phases documented.
- **Recalls (A, 2019 Jetta):** 18V904 and 19V188 (rear coil springs fracture); **19V879** (2019 GLI front wheel bearings; park until fixed); 19V110 (wrong driver airbag after service); 18V671 (LED headlamp aim); 18V824 (key warning); 19V679 (repurchase of certain internal-evaluation vehicles).
- **Checklist:** coolant level and pink crust at the pump/thermostat housing. Check whether the 8-yr/80k extension still applies by VIN. On a TDI, get proof of both modification phases. Confirm the coil-spring and wheel-bearing recalls. Check DSG service history on the GLI.

### Volkswagen Passat: NMS (2012–2019, 2020–2022 refresh; 1.8T, 2.0T, 3.6 VR6 to 2018, 2.0 TDI to 2015)
- **Verdict. Avoid** 2015–2017. **2019–2022: Mixed.**
- **Evidence:** CR rates 2015, 2016 and 2017 "less reliable" and 2019 "about average" (A); 2018, 2020 and 2021 NA.
- **Known failure points:** EA888 water pump and thermostat (settlement; see Jetta) (A). 2012–2015 TDI dieselgate (A).
- **Checklist:** as for the Jetta. On the VR6, check for timing-chain rattle and water-pump leaks (D).

### Volkswagen Golf / GTI: Mk7 (2015–2021) and Mk8 GTI/R (2022–)
- **Verdict.** **Mk7 2015–2018: Avoid.** Mk7 2019–2021: Mixed. **Mk8 GTI 2023+: Mixed-positive, limited data.**
- **Evidence:** CR rates GTI 2015, 2017 and 2018 "less reliable", 2019 "about average", and **2023 "more reliable"** (A). Golf: 2016 "less reliable", 2018 "about average" (A).
- **Known failure points:** water pump and thermostat housing (settlement, now mostly expired) (A). **19V879** (2019 GTI front wheel bearings, park-it); **19V188** (2015–2019 Golf rear springs) (A). Mk8 infotainment glitches (D).
- **Checklist:** coolant loss, DSG service records every 40k (D), wheel-bearing recall, a full infotainment test on Mk8.

### Volkswagen Arteon (2019–2023; 2.0T)
- **Verdict: Mixed, insufficient data.** CR 2019 NA. Named in the water-pump settlement list (C). One recall on the 2019 model per CR (A).
- **Checklist:** coolant and water pump, DSG service, 4Motion haldex service.

### BMW 3 Series: F30 (2012–2019; 320i/328i N20 to 2015, 330i B46/B48 2016+, 335i N55 to 2015, 340i B58 2016+) and G20 (2019–; 330i B46/B48, M340i B58)
- **Verdict.** **G20 2020–2023 330i/M340i: Strong** (best year 2022). **F30 2017 330i/340i: Mixed-positive.** **2015–2016 (N20 328i, N55 335i): Avoid-lean.** **2018–2019: Mixed/Avoid.** **2024: Avoid** (CR list).
- **Evidence:** the 2022 3 Series won the JDP 2025 VDS Compact Premium Car award (A). CR rates 2015, 2016, 2018 and 2019 "less reliable", **2017 "more reliable"**, **2020 "more reliable"**, 2021 "about average", **2022 "much more reliable"**, and 2023 "about average" (A). The 2024 3 Series is on CR's 2025 avoid list (C). Adjacent evidence: the 4 Series, which shares these powertrains, won the JDP 2022 and 2023 VDS awards for MY2019 and MY2020 (A).
- **Known failure points:**
  - **N20 timing-chain guide failure** (2012–2015 320i/328i, and 428i/528i). Class settlement Dec 2020 with component coverage for the timing and oil-pump drive chain modules (**C**, TopClassActions/CarComplaints).
  - **N20 electric water pump connector short, fire risk.** **Recall 24V608** (2012–2016 328i, 528i etc.; letters Mar 2025) (A). A separate BMW electric coolant-pump class settlement extended coverage to 7 yr/84k (D.N.J. 2:17-cv-12979, final-approval opinion) (A). The model list was not captured.
  - **B46/B48/B58 oil filter housing coolant leak.** BMW **SIB 11 10 25** (Dec 2025) calls for replacing the gaskets and a redesigned bushing on G20/G22 B46/B48 cars (A). Class action *Eiger v. BMW NA* (D.N.J., Feb 2026) covers 2014–2021 3, 4, 5 Series etc. (existence **B**: CarComplaints and Autoblog; allegations C). Owner-reported cost **$1,500–$4,000**, typically at about 60k miles (C).
  - **2019–2020 330i counterbalance-shaft needle bearings** may be improperly installed, causing severe engine damage. **Recall 19V732**; remedy is **engine replacement** (A).
- **Other recalls (A):** 24V288 (2014–2015 head-airbag inflator weld); **24V527** (2014–2015 driver airbag inflator may explode); 19V912 (2019–2020 330i rear pretensioners); 20V164 (seat-belt buckle sensors); 19V850 (2020 headlight control units); 21V096 and 19V684 (camera); 19V755 (trunk release).
- **Out-of-warranty cost burden (C):** oil filter housing gasket and housing about $1,500–4,000. Expect valve-cover and oil-pan gasket leaks from about 60–100k miles (D). Budget roughly $1,000–2,000 a year after warranty (C/D).
- **Checklist:** coolant level plus coolant or oil at the oil filter housing. Ask whether SIB 11 10 25 or a housing replacement has been done. On a 2015 N20, get timing-chain records and listen for cold-start chain whine. Confirm 19V732, 24V608 and 24V527 by VIN. Check for oil-pan and valve-cover leaks, and check the run-flat tires.

### BMW 5 Series: F10 (2011–2016; 528i N20, 535i N55, 550i N63) and G30 (2017–2023; 530i B46/B48, 540i B58, M550i N63)
- **Verdict. Mixed.** Best years: **2019 and 2023 530i/540i**. **Avoid the 550i/M550i with the N63 V8.** Avoid 2016–2018 and 2021–2022.
- **Evidence:** CR rates 2016, 2017 and 2018 "less reliable", **2019 "more reliable"**, 2020 "about average", **2021–2022 "less reliable"**, and **2023 "more reliable"** (A). The 2016 5 Series *Gran Turismo* won the JDP 2019 VDS award (A); it is a different body style from the sedan.
- **Known failure points:** N63 oil consumption, valve stem seals and timing chain; BMW ran a "Customer Care Package" (C/D). N20 in the 528i: same as the 3 Series. B-series oil filter housing class action and SIB, as for the 3 Series.
- **Out-of-warranty cost burden (C/D):** an N63 valve-stem-seal plus timing job runs to many thousands. Air suspension (if equipped) and oil leaks are common.
- **Checklist:** avoid the N63. Otherwise, as for the 3 Series.

### Mercedes-Benz C-Class: W205 (2015–2021; C300 M274 2.0T to 2018, M264 2019+) and W206 (2022+; M254 with 48V)
- **Verdict.** **2015–2020: Avoid** (2015 and 2018 are on CR avoid lists; 2019 CR "much less reliable"). **2021 C300: Mixed-positive.** **2023–2024: Mixed-positive.**
- **Evidence:** CR rates 2016 and 2017 "less reliable", **2019 "much less reliable"**, 2020 "less reliable", **2021 "more reliable"**, 2023 "about average", and **2024 "more reliable"** (A). **2015** is on the 2025 avoid list and **2018** on the 2024 avoid list (C each). 2022 NA.
- **Known failure points:**
  - **M264 exhaust valve guide and seat wear**, causing misfire. **Mercedes-Benz USA extended coverage to 15 yr/150k miles** (from 4/50) for **2019–2023 C300** (and E300/E350, GLC300, GLE350), effective 9-Jan-2026. It transfers with ownership (A, MBUSA dealer notice and owner letter via NHTSA). This is a genuine protection for used buyers of 2019–2023 C300s.
  - M274 (2015–2018 C300) camshaft adjuster, timing chain and oil-leak reports (C/D).
- **Recalls (A):** **18V850** (2015–2016 C300 steering-rack locknut; steering may stick); **21V961** (fuel rail and injector leak, fire; 2016 and 2019 C300 among others); 21V197 (roof panel bonding after a prior repair); 17V627 (front airbag, broad list); **23V462** (2022–2023 C300 transmission harness length can cause loss of drive power); 22V678 (2022 C300 trunk moisture shorting the signal acquisition module); 22V189.
- **Out-of-warranty cost burden (C/D):** 48V system repairs on W206 run into the thousands. Budget for German-luxury labor rates.
- **Checklist:** confirm recalls by VIN, including the high-count 2016–2017 campaigns. Scan misfire history and check M264 extended-warranty eligibility. On W206, check the 48V system and infotainment. Check for oil leaks on the M274.

### Mercedes-Benz E-Class: W212 (to 2016), W213 (2017–2023; E300 M274/M264, E350 M264, E450 M256 with 48V) and W214 (2024+)
- **Verdict. Mixed.** Best: **2017–2018 E300** and **2022 E350** (both covered by the M264 extension where applicable). **Avoid 2015, 2019–2020 and W214 2024+.**
- **Evidence:** CR rates 2015 "less reliable", 2016 "about average", **2017 and 2018 "more reliable"**, 2020 "less reliable", 2021 "about average", **2022 "much more reliable"**, and 2023 "about average" (A). **2019** is on the 2025 avoid list (C). Coverage says CR put the **2026 E-Class last** among luxury cars (qz.com relay, C). iSeeCars rates the E-Class the #11 longest-lasting passenger car at 6.7% (A). Caution: the 2017–2018 models have **19–20 recalls** each (A, CR page counts).
- **Known failure points:** M264 exhaust valve extension, **15 yr/150k for 2018–2023 E300/E350** (A). **E450 M256 48V integrated starter-generator / DC-DC converter failure** causing no-start and power loss, a $1,200–$7,000 repair with a class action reported (C/D; Carlyle, au7o, Carchecker).
- **Checklist:** confirm recalls by VIN (the counts are high). Test the E450's 48V system (start/stop, "hybrid system" warnings). Check the air suspension for sag. Scan misfire history.

### Audi A3: 8V (2015–2020; 1.8T/2.0T) and 8Y (2022+)
- **Verdict. Mixed.** Best: **2017–2018** (CR "about average" and "more reliable"). **Avoid 2015 and 2019.**
- **Evidence:** CR rates 2015 "less reliable", 2017 "about average", **2018 "more reliable"** (A). 2019 is on CR's avoid list (C). 2020 and 2022 NA.
- **Known failure points:** EA888 water pump and thermostat (settlement; A3 listed) (A/C).
- **Checklist:** coolant, DSG service, recalls.

### Audi A4: B8.5 (2013–2016) and B9 (2017–2025; 2.0T EA888 Gen 3/3B, 7-speed S tronic)
- **Verdict. Strong** for **B9 2019–2023 2.0T**, with a cooling-system budget. **Avoid 2016–2018.**
- **Evidence (A):** CR rates 2016, 2017 and 2018 "less reliable", **2019 "much more reliable"**, **2020 "more reliable"**, 2021 "about average", **2022 "more reliable"**, and **2023 "much more reliable"**.
- **Known failure points:**
  - **Water pump and coolant module leak**, including coolant migrating into the vacuum system and causing turbo underboost. VW/Audi settlement 8 yr/80k (A for the extension terms). New class action *Larr et al. v. VWGoA* alleges a water-pump defect in **2018–2024 A4** (and A5, S5, RS5, SQ5), citing Audi TSBs from 2020 and 2023 (**C**). Owner-reported repair bills range from about $2,100 at independent shops to $7,900 at dealers when the vacuum system is contaminated (D).
  - **Recall 21V874** (2017–2020 A4: seat-heater cable fault may disable the passenger airbag; expansion of 19V547) (A).
  - S tronic DL382 mechatronic or clutch wear if fluid services are skipped, $2,000–5,000 (D).
- **Out-of-warranty cost burden (C/D):** water pump and thermostat module $700–1,500 at an independent shop; S tronic fluid service $350–600 every ~40k miles; carbon cleaning $500–800.
- **Checklist:** coolant level and crust at the pump. Check the vacuum lines and solenoids for coolant. Scan for P0299. Get S tronic fluid records. Confirm 21V874.

### Audi A6: C7 (2012–2018; 2.0T, 3.0T supercharged) and C8 (2019+; 2.0T, 3.0T)
- **Verdict. Mixed.** 2018 and 2020–2022 are "about average". **Avoid 2016 and 2019.**
- **Evidence:** CR rates 2016 "less reliable", 2018, 2020 and 2022 "about average" (A). **2019** is on both the 2024 and 2025 avoid lists (**B**).
- **Known failure points:** **3.0T water pump** failure, alleged in class action *Fiscina v. VW* (2013–2022 A6/A7/S4/Q5/Q7 etc.) (**C**). 2.0T coolant pump recall 18V-229 on 2012–2015 A6, cited in a complaint (C).
- **Out-of-warranty cost burden:** 3.0T water pump repairs of $1,500–3,000+ (C/D).
- **Checklist:** coolant loss, pump weep, recalls, electronics (MMI).

### Volvo S60: Gen 2 (2011–2018; Drive-E T5/T6 from 2015) and Gen 3 (2019+) / S90 (2017+)
- **Verdict. S60: Mixed.** **Avoid 2015–2016 Drive-E, 2019–2020 and 2022.** 2017, 2021 and 2023 are "about average". **S90: Mixed, limited data** (2018 "about average").
- **Evidence:** CR rates the S60 2016 "less reliable", 2017 "about average", **2019–2020 "less reliable"**, 2021 "about average", and 2023 "about average" (A). **2015 and 2022** are on CR's avoid list (C). S90 2018 "about average"; 2020 NA (A).
- **Known failure points:** **Drive-E excessive oil consumption**, 2015–2016 S60/S80/V60/XC60 with B4204T11/T12 engines. Volvo Technical Journal **TJ 31216** (updated to 31216.4.0 in 2017) calls for **new pistons and rings** (plus connecting-rod bearings); engines were modified from serial 1501327 (A). A related class action was voluntarily dismissed in May 2023 after a private settlement (C).
- **Out-of-warranty cost burden (C):** a piston and ring job costs thousands; an engine replacement is more than $10,000 (C).
- **Checklist:** on a 2015–2016 T5/T6, get the engine serial number and piston-job records, and run an oil-consumption test. On Gen 3, test the Sensus infotainment and check recalls.

### Lincoln MKZ (2013–2020; 2.0T, 3.0TT V6 2017+, 3.7 V6 to 2016; hybrid out of scope)
- **Verdict. Strong, powertrain-conditional:** **2017–2020 3.0TT V6**, or **2.0T built after 8-Apr-2019** (most 2020s) or with a documented TSB long-block replacement. **2017–2019 2.0T built on or before 8-Apr-2019 without that documentation: Avoid.**
- **Evidence:** the 2019 MKZ won the JDP 2022 VDS Midsize Premium Car award (A, and Cars.com relay). CR rates 2015 "about average", **2017 and 2018 "more reliable"**, and 2019 "about average" (A). These verdicts combine all powertrains, including the hybrid.
- **Known failure points:** **2.0L coolant intrusion**, Ford **TSB 19-2346 / 22-2133 / 22-2229** (2017–2019 MKZ built on or before 8-Apr-2019), long-block replacement (A). 3.7 V6 internal water pump (2013–2016), where a leak can damage the engine (D).
- **Recalls (A):** **18V167** (2014–2018 steering-wheel bolt); **23V162** (2013–2018 front brake hoses); 15V250 and 19V632 (2013–2016 steering motor bolts); 16V875 and 19V590 (2013–2015 seat-belt anchor cable); 20V177 and 23V775 (2014–2016 door latches); 17V427 (2017 2.0L torque converter).
- **Checklist:** decode the engine and build date. On a 2.0T, do a cooling-system pressure test and borescope, and get Lincoln service records (look for the TSB long block). Confirm the brake-hose and steering-bolt recalls.

### Lincoln Continental (2017–2020; 2.7TT, 3.0TT, 3.7)
- **Verdict: Mixed, insufficient data.** CR rates 2018 "about average"; 2017 NA (A).
- **Checklist:** recalls, a full electronics check (seats, doors), cooling system.

### Kia Stinger (brief; 2018–2023; 2.0T, 2.5T, 3.3TT)
- **Verdict: Mixed, insufficient model-year reliability data.** CR 2018 and 2020 NA.
- **Recalls:** **20V518** (2018–2021 anti-lock brake unit (HECU) engine-compartment fire; new 25A fuses) (A, Part 573). **24V169** (3.3TT left turbo oil-feed pipe may leak, fire risk) and **23V634** (2018–2021 high-pressure fuel pump plunger sticking, loss of drive power) (C/B: Motor1, Sep 2026 buying guide, plus aggregators).
- **Checklist:** confirm all three recalls. Check both turbos for whine or oil mist, and brake judder (D).

---

## 3. Deliverables

### (1) Segment ranking: genuinely reliable picks in scope
Grade shown is the **weakest load-bearing claim** behind each pick.

| # | Model · years · powertrain | Rating | One-line rationale | Weakest grade |
|---|---|---|---|---|
| 1 | **Buick LaCrosse 2015–2019, 3.6L V6** | Top pick | Two J.D. Power Large Car awards (MY2015, MY2016); CR 2017 "more reliable", 2015/2018 "about average"; falsification found only recalls and service updates, no class action | A |
| 2 | **Lincoln MKZ 2017–2020, 3.0TT V6 (or 2.0T built after 8-Apr-2019)** | Strong | J.D. Power award (MY2019); CR 2017–2018 "more reliable"; the pre-Apr-2019 2.0T is excluded because of Ford's coolant-intrusion TSB | A |
| 3 | **Chevrolet Impala 2017–2020, 3.6L V6** | Strong | J.D. Power Large Car award (MY2019); CR "about average" 2017–2020; the 6T70 shudder bulletin is a known, fixable item | A |
| 4 | **BMW 3 Series 2020–2023, 330i (B46/B48) / M340i (B58), best 2022** | Strong | CR 2020 "more", 2022 "much more reliable"; J.D. Power award (MY2022); budget $1.5–4k for the oil filter housing (SIB + class action) | B (class action existence) / A otherwise |
| 5 | **Audi A4 2019–2023, 2.0T (B9)** | Strong | CR 2019 and 2023 "much more reliable", 2020 and 2022 "more reliable"; cooling-module class action pending | C (allegation; does not reverse the pick) |
| 6 | **Ford Mustang GT 5.0, 2015–2016 and 2018–2019** | Strong | J.D. Power awards (MY2017, MY2019); CR 2019 "more reliable"; iSeeCars above average; check the 10R80/MT82 bulletins | A |
| 7 | **Ford Fusion 2.5L I4, 2015–2019** | Strong (value) | CR "about average" 2015–2019; simple naturally aspirated engine; shifter-bushing recalls 18V471/19V362 must be done | A |
| 8 | **Chrysler 300 3.6/5.7, 2017–2019; Dodge Challenger 2015–2016; Charger by platform** | Strong (conditional) | CR 300 2017 "more reliable"; J.D. Power Challenger awards (MY2015, MY2016); airbag recall 24V198 and valvetrain class actions | C (class actions) |
| 9 | **Buick Verano 2015–2017, 2.4L** | Strong (limited) | J.D. Power Compact Car award (MY2016); CR 2015 "about average" | A |
| 10 | **Cadillac CT5 2022–2023, 2.0T/3.0TT** | Strong (limited) | CR 2022 "more reliable"; 2022 built with the 10-speed wear-detection software (recall 25V148 fix) | A |
| 11 | **Mercedes E-Class 2017–2018 E300 / 2022 E350** | Mixed-positive | CR "more" or "much more reliable" in those years; M264 15/150 extension; high recall counts | A |
| 12 | **Mercedes C300 2021 / 2024** | Mixed-positive | CR "more reliable" in 2021 and 2024; M264 extension covers 2021 | A |
| 13 | **Buick Regal 2018–2020, 2.0T** | Mixed (acceptable) | CR "about average" | A |

### (2) Avoid list
- **Ford Focus 2012–2018 and Fiesta 2011–2019 with the PowerShift DPS6 automatic.** Clutch warranty extensions have expired and CR is "less reliable" (Focus 2015/17/18) (A/B).
- **Ford Fusion 1.5 EcoBoost** (2014–2019, built on or before 10-Jun-2019) and **Fusion/MKZ 2.0 EcoBoost** (2017–2019, built on or before 8-Apr-2019), unless a replaced engine is documented (A).
- **Ford Focus 1.0 EcoBoost 2016–2018** (clutch-fracture and oil-pump-belt recalls with re-repairs in 2026) (A).
- **Chevrolet Cruze Gen 1 (2015–2016 1.4T)** and **Gen 2 2016–2018 1.4T** without proof of the piston/ECM bulletin work (A for the bulletins); **Cruze 2018** (CR "less reliable").
- **Chevrolet Malibu 2016–2018, 2020, 2022** (CR "less reliable"; shift-to-park) (A/B).
- **Chrysler 200 2015** (9-speed recalls; CR "less reliable") (A).
- **VW Jetta 2015–2016, 2019, 2021–2023; Passat 2015–2017; Golf/GTI Mk7 2015–2018** (CR; water-pump coverage expired) (A). **2015 2.0 TDI** without documented emissions-modification phases.
- **BMW 3 Series 2015–2016 N20 328i / N55 335i, 2018–2019, 2024; any N63 550i/M550i; 5 Series 2016–2018 and 2021–2022** (A/C).
- **Mercedes C-Class 2015–2020** (esp. 2015, 2018, 2019); **E-Class 2015, 2019–2020, and W214 2024+** (A/C).
- **Audi A3 2015 and 2019; A4 2016–2018; A6 2016 and 2019** (A/B/C).
- **Volvo S60 2015–2016 Drive-E T5/T6, 2019–2020, 2022** (A/C).
- **Ford Mustang 2020** (CR avoid list, C) and caution on **2017** (CR "less reliable").
- **Cadillac CT4/CT5 2020–2021 with the 10-speed** if recall 25V148 is not done (A).

### (3) Removed / downgraded
- **Buick Verano 2.4 "oil burner"**: removed as an avoid reason. GM's 2.4L oil-consumption special coverage applies only to 2010 and 2013 Equinox/Terrain (A). Verano retained as Strong (limited).
- **Mustang 5.0 oil consumption**: downgraded for the Mustang because TSB 19-2365 names only the 2018–2020 F-150 (A). Mustang-specific evidence is C/D.
- **Lincoln MKZ**: downgraded from Top pick to powertrain-conditional Strong because of the 2.0T coolant-intrusion TSB (A).
- **Ford Fusion 2.0 EcoBoost**: downgraded to Avoid (A).
- **Chrysler 300 / Charger**: downgraded from possible Top pick to Strong-conditional because of the 24V198 airbag recall (A) and the Pentastar/Hemi valvetrain class actions (C).
- **Audi A4 B9**: held at Strong but flagged, given the 2018–2024 water-pump class action (C).
- **BMW B46/B48/B58 "trouble-free" reputation**: downgraded by SIB 11 10 25 (A) and the Eiger class action (B). The 3 Series pick keeps Strong with a repair budget.
- **Chevrolet Impala 2016**: removed from the pick range (CR "less reliable").
- **VW/Audi water-pump 8/80 extension**: no longer protects most 2015–2018 cars in 2026.
- **Mustang oil-pump-gear failure** and **Mercedes M274 wrist-pin failure**: kept as D-grade leads only, not load-bearing.
- **GM 8-speed shudder class action**: status contested in coverage; not load-bearing.
- **Chevrolet Spark, Lincoln Continental, VW Arteon, Kia Stinger, Cadillac ATS/CTS/CT4**: no verdict beyond Mixed because model-year data is insufficient.

### (4) Contradiction log
1. **Buick Regal 2017.** J.D. Power 2020 VDS Midsize Car award (A) vs CR 2017 "less reliable" (A). Resolution: Mixed; prefer 2018–2020 (CR "about average").
2. **Ford Mustang 2017.** J.D. Power award (A) vs CR "less reliable" (A). Resolution: the pick is limited to 2015–2016 and 2018–2019.
3. **Lincoln MKZ 2017–2019.** CR "more reliable" (2017–2018) and J.D. Power 2019 award vs Ford's 2.0T long-block TSB (A). Resolution: CR and J.D. Power aggregate all powertrains (including the hybrid), so the pick is split by powertrain and build date.
4. **Chevrolet Impala.** J.D. Power 2019 award vs GM bulletin 18-NA-358 listing the 2019 Impala for 6T70 shudder, and CR 2016 "less reliable". Resolution: Strong for 2017–2020 with a transmission inspection.
5. **BMW 3 Series.** CR 2022 "much more reliable" and the J.D. Power MY2022 award vs the 2024 3 Series on CR's avoid list, the 2019 first-year G20 "less reliable", and the oil-filter-housing class action. Resolution: year-specific pick of 2020–2023.
6. **Mercedes E-Class.** iSeeCars top-11 longevity (A) vs CR "less reliable" or avoid for 2015, 2019 and 2020. Resolution: iSeeCars measures lifespan and mileage accumulation, not repair incidence; use CR by year.
7. **Audi A4 B9.** CR "much more reliable" (2019, 2023) vs the *Larr* water-pump class action (2018–2024). Resolution: Strong with a cooling-system inspection; the allegation does not override survey data.
8. **Cadillac.** J.D. Power brand #2 premium (2025, 2026) vs CT5 2020 "less reliable" and the ATS/CTS CUE and 8-speed issues. Resolution: brand rank not used; CT5 judged by year.
9. **Chrysler 200 2016.** CR "about average" vs the 9-speed recall history. Resolution: 2015 Avoid; 2016–2017 Mixed only with recalls done.
10. **BMW brand CR #5 (2025)** vs the 2024 3 Series on CR's avoid list. Brand rank not used.
11. **Chevrolet Malibu.** J.D. Power MY2015 award vs CR "less reliable" in most Gen 9 years. These are different generations and are handled separately.

### (5) Falsification-pass log (every Top pick and Strong pick)
| Pick | What I searched (tool) | What I found | Effect |
|---|---|---|---|
| Buick LaCrosse 2015–2019 3.6 | "Buick LaCrosse 2017 2018 2019 problems recalls engine transmission failure complaints 3.6 V6 9-speed" (Exa); earlier "used Buick LaCrosse 2015-2019 reliability…" (Exa) | Recalls 20V668 and 18V576; GM Service Update N192266190 (2018 stop/start stall reflash); SU 17176 (2017 dealer-stock transmission cooler seal); 2017 AWD propshaft stop-delivery; 7 NHTSA complaints for 2019; **no class action** | Survives as Top pick |
| Chevrolet Impala 2017–2020 3.6 | "Chevrolet Impala 2017-2020 3.6 V6 problems engine failure transmission failure class action recall" (Exa); earlier WebSearch "Impala 2014-2020 3.6 V6 used reliability problems recalls" | 18-NA-358 (6T70 shudder), 20-NA-023, 16-NA-013 (C parse); NHTSA complaints about spark-plug-tube porosity and cat flanges (D; 12–15 complaints); no class action; recall 18V576 | Survives (Strong); 2016 excluded |
| Lincoln MKZ 2017–2020 | "Lincoln MKZ 2017-2020 used reliability 2.0 EcoBoost 3.0 twin turbo problems 3.7…" (WebSearch); "Ford TSB 2.0L EcoBoost coolant intrusion… Fusion MKZ" (Exa) | **TSB 19-2346 / 22-2133 / 22-2229: 2.0L coolant intrusion, long block**; SSM 50439 | Downgraded to powertrain-conditional |
| BMW 3 Series 2020–2023 | "BMW 330i M340i G20 2020-2023 problems B48 B58 engine failure recall class action oil filter housing coolant leak" (Exa); NHTSA API 2020 330i | **SIB 11 10 25** (Dec 2025); **Eiger v. BMW** (Feb 2026); coolant-pump settlement 7/84; **19V732** engine-replacement recall | Survives with repair budget |
| Audi A4 2019–2023 | "Audi A4 B9 2.0 TFSI 2019-2023 problems water pump failure oil consumption S tronic transmission recall class action" (Exa); NHTSA API 2017 A4 | **Larr v. VWGoA** (2018–2024 A4 water pump, C); Audi TSBs cited; owner costs $2.1k–7.9k (D); 21V874 | Survives, flagged |
| Ford Mustang GT 5.0 | "2018-2023 Ford Mustang GT 5.0 problems engine failure oil consumption 10-speed transmission class action recall" (Exa); WebSearch "Mustang 5.0 Coyote Gen 3 oil consumption TSB OR 10R80 class action"; NHTSA API 2016 and 2019 | 10R80 class action (*McCabe*, C); MT82 class action (*El-Rifai*, C); TSB 19-2365 is F-150 only (A); oil-pump gear (D); open recall 25V614 | Survives with year limits (2015–16, 2018–19) |
| Ford Fusion 2.5 | "Ford Fusion 2.5L 2015-2019 problems 6F35 transmission failure engine recall class action shifter" (Exa); NHTSA API 2015 and 2017 | 18V471 and 19V362 shifter-bushing Part 573s; HF35 TSB applies to hybrids only; no 2.5L class action found | Survives |
| Chrysler 300 / Challenger / Charger | "Chrysler 300 Dodge Charger 2015-2023 3.6 Pentastar 5.7 Hemi problems engine failure transmission class action recall airbag 24V198" (Exa); WebSearch "Hemi 5.7 lifter failure class action…"; NHTSA API 2016 Charger | **24V198** Part 573 (~285k units); *Maugain* (Pentastar valvetrain, C); *Petro* (Hemi MDS, C) | Downgraded to Strong-conditional |
| Buick Verano 2015–2017 | WebSearch "GM 2.4L Ecotec oil consumption special coverage… Verano"; fetched GM special coverage N192291100 | The coverage **excludes** the Verano; no Verano-specific defect found | Survives (limited) |
| Cadillac CT5 2022–2023 | "Cadillac CT5 2021 2022 2023 2.0T problems recall transmission 10-speed…" (Exa) | Recall 25V148 (2020–2021 10-speed wear; 2022+ built with the fix); 21-NA-275; 22V903 DRL | Survives for 2022–2023 only |
| Mercedes E/C picks (Mixed-positive) | "Mercedes E-Class W213… 48V… M256 M274" (Exa); "Mercedes-Benz USA M264… warranty extension" (Exa) | M264 15/150 extension (A); 48V ISG issues on the E450 (C/D) | Kept as Mixed-positive; E450 caution |

### (6) Source list

**J.D. Power (A)**
- 2026 VDS release: https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/
- 2025 VDS release: https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds
- 2024 VDS release: https://www.jdpower.com/business/press-releases/2024-us-vehicle-dependability-study-vds
- 2023 VDS release: https://www.jdpower.com/business/press-releases/2023-us-vehicle-dependability-studyvds/
- 2021 VDS release: https://www.jdpower.com/business/press-releases/2021-us-vehicle-dependability-study-vds
- Award pages by study year: https://www.jdpower.com/cars/ratings/dependability/2018 · /2019 · /2020 · /2021 · /2022 · /2023 · /2024 · /2025
- Cars.com relay of the 2022 VDS segment winners (B): https://www.cars.com/articles/what-are-the-most-reliable-2019-model-year-vehicles-446870/
- Carscoops, 2023 VDS (B): https://www.carscoops.com/2023/02/the-most-dependable-brands-and-models-in-j-d-powers-2023-study/

**Consumer Reports (A = CR's own page; C = coverage)**
- Per-model-year reliability pages, pattern `https://www.consumerreports.org/cars/{make}/{model}/{year}/reliability/`. Pages read:
  - Chevrolet: Impala 2015–2020; Malibu 2015–2023; Cruze 2015–2019
  - Buick: LaCrosse 2015–2019; Regal 2016–2019; Verano 2015–2016
  - Ford: Fusion 2015–2020; Focus 2015–2018; Fiesta 2016, 2018; Mustang 2015–2019, 2021, 2022, 2024
  - Dodge Charger 2015/17/19/21/23; Challenger 2016/19/22; Chrysler 300 2015/17/19/21; Chrysler 200 2015–2017
  - BMW 3 Series 2015–2023; 5 Series 2016–2023
  - Mercedes-Benz C-Class 2016–2017, 2019–2024; E-Class 2015–2018, 2020–2023
  - Audi A3 2015/17/18/20/22; A4 2016–2023; A6 2016/18/20/22
  - Volkswagen Jetta 2015–2020, 2022–2023; Passat 2015–2021; GTI 2015/17/18/19/22/23; Golf 2016, 2018; Arteon 2019
  - Volvo S60 2016/17/19/20/21/23; S90 2018, 2020
  - Cadillac ATS 2015, 2017; CTS 2015, 2017; CT4 2021; CT5 2020–2023
  - Lincoln MKZ 2015, 2017–2019; Continental 2017–2018
  - Kia Stinger 2018, 2020
- CR brand reliability (Dec 2025): https://www.consumerreports.org/cars/car-reliability-owner-satisfaction/who-makes-the-most-reliable-cars-a7824554938/
- CR "42 Used Cars to Avoid" (paywalled; headline only): https://www.consumerreports.org/cars/used-cars-to-avoid-buying-a4034931071/
- CR Best Used Cars / 10 Top Picks (context): https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/
- TheStreet relay of the CR 2024 avoid list (C): https://www.thestreet.com/automotive/used-cars-to-avoid-buying-according-to-consumer-reports
- The Car Guide relay of the CR 2025 avoid list (C): https://www.guideautoweb.com/en/articles/77355/consumer-reports-lists-10-most-satisfying-new-models-and-67-used-vehicles-to-avoid/
- Jalopnik relay of the CR 2026 avoid list (Ford entries) (C): https://www.jalopnik.com/2103651/used-ford-models-avoid-buying-consumer-reports/
- SlashGear relay of the CR 2026 avoid list (C): https://www.slashgear.com/2152128/used-cars-to-avoid-consumer-reports-most-surprising-models/

**iSeeCars (A)**
- https://www.iseecars.com/longest-lasting-cars-study

**NHTSA recall API and Part 573 records (A)**
- Recall API queries (pattern `https://api.nhtsa.gov/recalls/recallsByVehicle?make=…&model=…&modelYear=…`): Chevrolet Cruze 2016; Ford Fusion 2015, 2017; Ford Focus 2016; Ford Fiesta 2015; Ford Mustang 2016, 2019; Dodge Charger 2016; Chrysler 200 2015; BMW 330i 2020; BMW 328i 2015; Mercedes-Benz C300 2016, 2022; Audi A4 2017; VW Jetta 2019; Chevrolet Malibu 2016
- 24V198 Part 573: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V198-1964.PDF
- 24V198 acknowledgment letter: https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V198-2036.pdf
- 24V198 dealer bulletin: https://static.nhtsa.gov/odi/rcl/2024/RCRIT-24V198-9694.pdf
- 25V148 GM dealer bulletin: https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V148-0762.pdf
- 25V148 Part 573: https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V148-9249.PDF
- 22V903 Part 573: https://static.nhtsa.gov/odi/rcl/2022/RCLRPT-22V903-5558.PDF
- 19V362 dealer bulletins: https://static.nhtsa.gov/odi/rcl/2019/RCMN-19V362-9180.pdf · https://static.nhtsa.gov/odi/rcl/2019/RCMN-19V362-9333.pdf
- 19V362 Part 573: https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V362-7298.PDF
- 18V471 Part 573: https://static.nhtsa.gov/odi/rcl/2018/RCLRPT-18V471-1223.PDF
- 16V779 dealer bulletin: https://static.nhtsa.gov/odi/rcl/2016/RCMN-16V779-1269.pdf
- 20V518 Part 573: https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V518-4450.PDF
- 20V668 via ARFC record (C relay of NHTSA): https://arfc.org/autos/buick/lacrosse/recalls/000106607004229153000000180/recall.aspx

**Manufacturer TSBs, extensions and settlement documents (A)**
- Ford TSB 20-2100 (1.5L coolant intrusion): https://static.nhtsa.gov/odi/tsbs/2020/MC-10174400-0001.pdf
- Ford SSM 48106: https://static.nhtsa.gov/odi/tsbs/2019/MC-10163592-0001.pdf
- Ford TSB 19-2346 (2.0L coolant intrusion): https://static.nhtsa.gov/odi/tsbs/2019/MC-10169807-0001.pdf
- Ford TSB 19-2208: https://static.nhtsa.gov/odi/tsbs/2019/MC-10162071-0001.pdf
- Ford TSB 22-2133 (mirror): https://static.oemdtc.com/TSB/MC-10210391-0001.pdf
- Ford TSB 22-2229 (mirror): https://static.oemdtc.com/TSB/MC-10214126-0001.pdf
- Ford SSM 50439: https://static.nhtsa.gov/odi/tsbs/2022/MC-10207136-0001.pdf
- Ford TSB 19-2365 (F-150 5.0 oil consumption): https://static.nhtsa.gov/odi/tsbs/2019/MC-10169811-0001.pdf
- Ford TSB 16-0105 (HF35 hybrid transmission, context): https://static.nhtsa.gov/odi/tsbs/2016/SB-10092366-5448.pdf
- GM PIP5490D (LE2 pistons): https://static.nhtsa.gov/odi/tsbs/2018/MC-10137176-9999.pdf
- GM 18-NA-171: https://static.nhtsa.gov/odi/tsbs/2019/MC-10163888-9999.pdf
- GM PIP5490 (2016): https://static.nhtsa.gov/odi/tsbs/2016/MC-10099861-2280.pdf
- GM PIP5490A (mirror): https://static.oemdtc.com/NHTSA-PDFs/MC-10113882-9999.pdf
- GM 18-NA-358 (6T70 shudder): https://static.nhtsa.gov/odi/tsbs/2021/MC-10212553-9999.pdf
- GM Service Update N192266190: https://static.nhtsa.gov/odi/tsbs/2019/MC-10166242-9999.pdf
- GM Service Update 17176: https://static.nhtsa.gov/odi/tsbs/2017/MC-10158902-9999.pdf
- GM 2017 LaCrosse AWD stop-delivery (mirror): https://static.oemdtc.com/NHTSA-PDFs/MC-10130669-9999.pdf
- GM 21-NA-275: https://static.nhtsa.gov/odi/tsbs/2022/MC-10214216-9999.pdf
- GM Special Coverage N192291100 (2.4L oil consumption): https://static.nhtsa.gov/odi/tsbs/2020/MC-10171426-9999.pdf
- VW water-pump settlement / warranty extension dealer FAQ: https://static.nhtsa.gov/odi/tsbs/2022/MC-10214802-0001.pdf
- VW Gen 3 TDI emissions-modification disclosure: https://www.vwdiesellookup.com/pdf/VWCourtSettlement_Emissions_Disclosure_Gen3_Final.pdf
- Volvo TJ 31216: https://static.nhtsa.gov/odi/tsbs/2016/SB-10075244-5448.pdf
- Volvo TJ 31216.4.0: https://static.nhtsa.gov/odi/tsbs/2017/MC-10146443-9999.pdf
- BMW SIB 11 10 25 (oil filter housing): https://static.nhtsa.gov/odi/tsbs/2026/MC-11026946-0001.pdf
- BMW emissions recall 24E-A01 (context): https://static.nhtsa.gov/odi/tsbs/2024/MC-11002676-0001.pdf
- BMW coolant-pump settlement final approval (D.N.J.): https://www.govinfo.gov/content/pkg/USCOURTS-njd-2_17-cv-12979/pdf/USCOURTS-njd-2_17-cv-12979-0.pdf
- Mercedes-Benz USA M264 extended warranty (mirror): https://static.oemdtc.com/NHTSA-PDFs/MC-11027580-0001.pdf
- MBUSA owner letter summary (C relay): https://dot.report/bulletins/11028003

**Quality outlets (B when two or more agree)**
- Detroit News on the DPS6 extension: https://eu.detroitnews.com/story/business/autos/ford/2019/08/14/ford-extends-clutch-warranty-560-k-focus-fiesta-vehicles/2006165001/
- TT News on the DPS6 extension: https://www.ttnews.com/articles/ford-extends-transmission-warranty-560000-fiestas-focuses
- Cars.com on the Focus/Fiesta settlement: https://www.cars.com/articles/ford-focus-fiesta-transmission-settlement-what-owners-should-know-420135/
- Cars.com on the extended Focus/Fiesta warranty: https://www.cars.com/articles/ford-extends-warranty-on-more-focus-fiesta-transmissions-407553/
- GM Authority on the shift-to-park lawsuit: https://gmauthority.com/blog/2021/08/lawsuit-filed-against-gm-over-shift-to-park-issue-in-chevy-malibu-blazer-traverse-and-volt/
- GM Authority on the Cadillac CUE lawsuit: https://gmauthority.com/blog/2019/09/class-action-lawsuit-filed-over-cracked-cadillac-cue-screens/
- Autoblog on the BMW oil filter housing lawsuit: https://www.autoblog.com/news/bmw-lawsuit-faulty-oil-filter-housings
- Motor1 Kia Stinger buying guide (Sep 2026): https://www.motor1.com/reviews/808251/kia-stinger-buying-guide/
- Edmunds VW diesel settlement FAQ: https://www.edmunds.com/car-buying/faq-volkswagen-diesel-emissions-settlement.html
- Digital Trends on the CUE lawsuit: https://www.digitaltrends.com/cars/a-class-action-lawsuit-has-been-filed-against-cadillac-parent-general-motors-over-issues-with-its-cue-screens/

**Class-action complaints and legal coverage (C)**
- Shift-to-park settlement: https://www.classaction.org/news/general-motors-settlement-resolves-lawsuits-over-alleged-shift-to-park-defect-in-certain-gmc-acadia-chevy-vehicles
- *McCabe v. Ford* (10R80): https://www.classaction.org/media/mccabe-v-ford-motor-company.pdf
- 10R80 lawsuit coverage: https://www.classaction.org/blog/class-action-filed-over-ford-10r80-automatic-transmission-problems-linked-to-clunky-harsh-shifting
- *El-Rifai v. Ford* (MT82): https://www.courthousenews.com/wp-content/uploads/2019/11/Ford-Mustangs.pdf
- *Lyman v. Ford* (5.0 oil consumption): https://www.classaction.org/media/lyman-et-al-v-ford-motor-company.pdf
- *Maugain v. FCA* (Pentastar): https://www.cohenmilstein.com/wp-content/uploads/2023/10/Maugain-v.-FCA-First-Amended-Complaint-05182022.pdf
- *Petro v. FCA* (Hemi): https://www.carcomplaints.com/news/2022/chrysler-hemi-engine-ticking-noise-lawsuit.shtml
- *Larr v. VWGoA* (Audi water pump): https://www.classaction.org/media/vwgoa-complaint.pdf
- *Fiscina v. VW* (Audi 3.0T water pump): https://storage.courtlistener.com/recap/gov.uscourts.njd.502471/gov.uscourts.njd.502471.1.0.pdf
- BMW oil filter housing lawsuit: https://www.carcomplaints.com/news/2026/bmw-oil-filter-housing-lawsuit-b46-b48-b58-engines.shtml
- BMW N20 timing-chain settlement: https://topclassactions.com/lawsuit-settlements/closed-settlements/bmw-timing-chain-class-action-settlement/
- GM 8-speed transmission lawsuits: https://www.classaction.org/gm-8-speed-transmission-defect-lawsuits
- Volvo oil consumption lawsuit: https://www.carcomplaints.com/news/2022/volvo-oil-consumption-class-action-blames-piston-rings.shtml
- Cadillac CUE lawsuit: https://www.carcomplaints.com/news/2022/cadillac-cue-class-action-lawsuit-survives-motion-to-dismiss.shtml
- VW/Audi water-pump settlement: https://topclassactions.com/lawsuit-settlements/closed-settlements/volkswagen-audi-defective-water-pumps-class-action-settlement/
- EPA VW Clean Air Act settlement (A): https://www.epa.gov/enforcement/volkswagen-clean-air-act-civil-settlement

**Secondary guides, aggregators and forums (C/D, leads only)**
- Transmission Audit, Impala 2014–2020: https://transmissionaudit.com/cars/chevrolet/impala-2014-2020/
- ProblemsByVin, 2017 Impala powertrain: https://problemsbyvin.com/2017-chevrolet-impala/powertrain-problems/
- ProblemsByVin, 2017 Impala engine: https://problemsbyvin.com/2017-chevrolet-impala/engine-problems/
- Vehicleflaws, 2019 LaCrosse: https://vehicleflaws.com/vehicle/buick/lacrosse/2019
- Buick Owners Group LaCrosse buyer's guide: https://buickforums.com/buick-buyers-guide/buick-lacrosse-buyer-guide.html
- AutoTrader.ca LaCrosse used review: https://www.autotrader.ca/editorial/expert-reviews/buick/lacrosse/used-vehicle-review-buick-lacrosse-2010-2016/
- Mustang Fan Club 2018–2023 diagnostic guide: https://mustangfanclub.com/2018-2023-mustang-check-engine-light-codes/
- Oil-pump-gear guide: https://idycar.com/guides/ford-tg/mustang-gt-2018-2023-oil-pump-gear-failure
- Carcasefile, Audi A4 2017–2024: https://carcasefile.com/vehicles/audi-a4-2017-2024/
- Carchecker, A4 B9: https://www.carchecker.pro/reports/audi_a4_b9_2.0_tfsi.html
- Audizine coolant-migration thread: https://www.audizine.com/threads/coolant-migration-extended-warranty-info.994351/
- Carlyle, E-Class costs: https://carlyle.vin/maintenance/mercedes-benz/e-class
- Carchecker, E350 W213: https://www.carchecker.pro/reports/mercedes_e350_w213.html
- Au7o, 2023 E-Class: https://au7o.io/known-issues/mercedes-benz-e-class?year=2023
- The Weekly Driver, Stinger: https://theweeklydriver.com/reliability/kia/stinger/2018-2023/
- Au7o, Stinger: https://au7o.io/known-issues/kia-stinger
- What-breaks, Stinger CK: https://what-breaks.com/kia/stinger-ck
- Go-Parts, Pentastar oil cooler: https://www.go-parts.com/garage/engine-oil-filter-adapter-chrysler-pacifica-chrysler-200-chrysler-300-2014-2026
- CarGurus Charger buying guide: https://www.cargurus.com/research/articles/dodge-charger-buying-guide
- Cherish Your Car, Cruze engine problems: https://www.cherishyourcar.com/chevy-cruze-engine-problems/
- Carwikihub, C300 W205: https://carwikihub.com/mercedes-c300-w205-buyer-guide-problems-reliability/
- Vehicleflaws, 2018 330i OFH complaint: https://vehicleflaws.com/complaint/11562328
- FIXD, LaCrosse years: https://www.fixdapp.com/car-reviews/best-worst-years-of-buick-lacrosse-graphs-owner-surveys/
- qz.com on CR 2026 sedans: https://qz.com/2026-sedan-suv-updates-consumer-reports
