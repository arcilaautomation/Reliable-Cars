# 07 — Pickup Trucks, Model Years 2015–2025: Used-Buyer Reliability Findings

Research agent 7 of 7. Research date: 2026-09-26. Audience: US buyer shopping for a used pickup.

## 0. How to read this file

**Validation rule applied.** A truck only earns a positive verdict when the evidence is specific to the model, the model year and, where it matters, the engine. Brand reputation is never enough. A documented engine or transmission defect sinks the affected years even when the brand ranks well. The 2022–2024 Tundra is the clearest example.

**Grades** (shown inline as "(A)", "(B)" and so on, with the URL):
- **A = primary source.** Examples: NHTSA Part 573 recall reports, acknowledgement letters, ODI resumes and TSB PDFs; manufacturer bulletins and warranty-extension documents; J.D. Power's own pages and press releases; Consumer Reports' own pages; iSeeCars' own study page; court orders.
- **B = two or more independent quality outlets agreeing.**
- **C = one secondary source.** This includes a single trade-press story (for example PickupTruckTalk, "PUTT"), RepairPal, or a class-action complaint. A complaint is an allegation only.
- **D = forums, CarComplaints-style aggregators, vendor blogs and listicles.** These are leads only and are never load-bearing.

**Caveats about the sources**
1. **Consumer Reports (CR) model-year verdicts** ("more / less reliable than other cars from the same model year") come from CR's own reliability pages at consumerreports.org/cars/<make>/<model>/<year>/reliability/. I reached them through a crawler, and some snapshots are older than others. CR combines every engine in a model on one page; F-150 Hybrid is the exception, tracked separately from 2021. So a CR verdict is year-specific but usually not engine-specific. Where I rely on outside coverage of CR rather than CR itself, I say so.
2. **CR removes "recall-only" survey responses.** CR's Steven Elek said so to PUTT (C). CR scores can therefore understate trucks whose main defect was fixed by recall, such as the Tundra engine replacements.
3. **iSeeCars longevity figures describe past generations.** They are projections from odometer data on the fleet already on the road. A high Tundra percentage mostly reflects 2007–2021 V8 trucks and says nothing about the 2022+ twin-turbo V6. TFLcar made the same caveat (C).
4. **Search tooling.** The WebSearch budget (shared by the session) ran out partway through. The remaining searches used Exa search and fetch, which are logged in section 5.

---

## 1. Cross-model evidence tables

### 1a. J.D. Power Vehicle Dependability Study (VDS) segment award winners
Grade (A). Source: J.D. Power's own award pages, jdpower.com/cars/ratings/dependability/<study year>. The VDS surveys original owners of 3-year-old vehicles, so the model year is the study year minus 3.

| VDS study (model year) | Midsize Pickup | Large Light Duty Pickup | Large Heavy Duty Pickup |
|---|---|---|---|
| 2018 (2015 MY) | 2015 Toyota Tacoma | 2015 Chevrolet Silverado 1500 | not listed |
| 2019 (2016 MY) | 2016 Nissan Frontier | 2016 Toyota Tundra 2WD | not listed |
| 2020 (2017 MY) | 2017 Nissan Frontier | 2017 Ford F-150 | 2017 Chevrolet Silverado 2500HD |
| 2021 (2018 MY) | 2018 Nissan Frontier | 2018 Toyota Tundra 4WD | 2018 Chevrolet Silverado 2500HD |
| 2022 (2019 MY) | 2019 Nissan Frontier | 2019 Toyota Tundra 4WD | 2019 Chevrolet Silverado 2500HD |
| 2023 (2020 MY) | 2020 Toyota Tacoma 4WD | 2020 GMC Sierra 1500 | 2020 Chevrolet Silverado 2500HD |
| 2024 (2021 MY) | 2021 Toyota Tacoma 2WD | 2021 Toyota Tundra 2WD | 2021 Ford Super Duty F-250 SRW |
| 2025 (2022 MY) | 2022 Toyota Tacoma 2WD | 2022 Chevrolet Silverado 1500 LTD (the carry-over pre-refresh truck) | 2022 Chevrolet Silverado 2500HD |
| 2026 (2023 MY) | Toyota Tacoma (model-level award) | Ram 1500 (#1; +13 points, up from 4th) | not found |

Sources for the table:
- 2018–2025 rows: https://www.jdpower.com/cars/ratings/dependability/2018 and the matching /2019, /2020, /2021, /2022, /2023, /2024 and /2025 pages (A).
- 2026 row: the J.D. Power press release of 12 Feb 2026 lists the Tacoma among Toyota's eight model-level awards and gives an industry average of 204 PP100 (A), https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/. Ram 1500 as #1 comes from the Stellantis release (manufacturer claim, C), https://www.stellantisfleet.com/news-and-events/stellantis-news/ram-1500-earns-no-1-ranking-in-jd-power-2026-us-vehicle-dependability-study-leading-large-light-duty-pickup-segment.html.
- PUTT's reading of the 2026 segment order (C): 1 Ram 1500, 2 Silverado 1500, 3 (tie) Sierra and F-150; Tundra not placed, meaning below the segment average. https://pickuptrucktalk.com/2026/02/most-reliable-2026-truck-is-ram-1500-chevy-silverado-next-toyota-misses-out-jd-power-study/

### 1b. Consumer Reports year-by-year verdict matrix
Grade (A). Source: CR's own model-year reliability pages at https://www.consumerreports.org/cars/<make>/<model>/<year>/reliability/.

Key: **MM** = much more reliable than other cars of the same model year; **M+** = more reliable; **Avg** = about average; **L** = less reliable; **LL** = much less reliable; **n/a** = no verdict in the crawled snapshot or not sold that year; **pred** = only a prediction was shown.

| Model | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Toyota Tacoma | M+ | Avg | M+ | M+ | M+ | Avg | M+ | MM | M+ | M+ | M+ |
| Toyota Tundra | M+ | M+ | M+ | MM | MM | M+ | M+ | **LL** | L | L | M+ |
| Nissan Frontier | M+ | n/a | M+ | n/a | M+ | Avg | L | L | L | MM | M+ |
| Honda Ridgeline | – | – | Avg | L | L | M+ | M+ | Avg | M+ | Avg | L |
| Ford Ranger | – | – | – | – | L | L | Avg | L | L | pred (M+) | L |
| Ford Maverick | – | – | – | – | – | – | – | Avg | M+ | M+ | M+ |
| Chevrolet Colorado | L | Avg | L | Avg | L | L | L | Avg | L | L | pred (LL) |
| Jeep Gladiator | – | – | – | – | – | L | L | L | L | n/a | n/a |
| Hyundai Santa Cruz | – | – | – | – | – | – | – | L | L | n/a | n/a |
| Ford F-150 (gas; all engines) | Avg | L | L | L | L | L | L | L | Avg | Avg | L |
| Chevrolet Silverado 1500 | L | L | L | L | L | L | L | pred (L) | L | L | M+ |
| Ram 1500 (DS/DT pages) | L | L | pred | L | L | L | L | L | **MM** | Avg | **LL** |
| Nissan Titan | n/a | n/a | n/a | Avg | n/a | n/a | n/a | n/a | – | – | – |

- Santa Cruz 2024–2025 and Tundra 2011–2012/2014–2021 also appear on CR's March 2026 "Most Reliable Used Pickup Trucks" list. That list is paywalled; the years come from Jalopnik's coverage of it (C, coverage of CR): https://www.jalopnik.com/2114022/most-reliable-used-pickup-trucks-consumer-reports/.
- Years recommended on that CR list, per Jalopnik: **Maverick 2023–2025** (skip 2022); **Ridgeline 2009, 2013, 2020–2021, 2023**; **Santa Cruz 2024–2025**; **Frontier 2015–2019, 2024–2025**; **Tacoma 2011, 2013–2015, 2017–2019, 2021–2025**. Jalopnik adds that 2011–2012 and 2014–2021 Tundras are "just more reliable than the Tacoma."
- Where the two overlap, CR's own pages confirm these years.
- CR's intro page for the list (A) says of the Detroit trio: "the Chevrolet Silverado, Ford F-Series, and Ram—haven't proved to be the most reliable options among used vehicles." https://www.consumerreports.org/cars/pickup-trucks/most-reliable-used-pickup-trucks-a7737894754/

CR's 2026 Automotive Report Card press release, 4 Dec 2025 (A), https://www.consumerreports.org/media-room/press-releases/2025/12/consumer-reports-releases-its-2026-automotive-brand-report-card-the-comprehensive-analysis-of-vehicle-quality-to-help-guide-car-shoppers-amid-steep-prices/:
- Toyota is #1 for reliability, helped by "improved reliability of the Camry, Tacoma, and Tundra."
- "The F-150, F-150 Hybrid, and F-150 Lightning have improved from below-average to average."
- Ram ranks 25th, and the "Ram 1500 [is] among the least reliable vehicles."
- GMC is 23rd and Jeep 24th.
- Hybrids average about 15% fewer problems than gas-only cars.

CR 2026 segment ordering as reported by PUTT (C, coverage of CR):
- **Full-size, worst to best:** Ram 1500, Silverado 1500, Tundra (up from last place in 2025), Sierra 1500, F-150. https://pickuptrucktalk.com/2025/12/consumer-reports-least-reliable-full-size-trucks-for-2026/
- **Midsize, worst to best:** Colorado/Canyon, Gladiator, Ranger, Ridgeline, Frontier (above average), Tacoma (top). https://pickuptrucktalk.com/2025/12/consumer-reports-least-reliable-midsize-trucks-for-2026/
- **Heavy-duty, worst to best:** Sierra 2500HD, F-250, Ram 2500 (middle); the Silverado 2500HD is implied best. https://pickuptrucktalk.com/2026/07/consumer-reports-least-reliable-heavy-duty-trucks-for-2026/

### 1c. iSeeCars: percentage chance of reaching 250,000 miles

**2025 study, full truck table** (A), from iSeeCars' own page https://www.iseecars.com/longest-lasting-cars-study. The overall average for all vehicles is 4.8%; the truck average (heavy-duty included) is 13.0%.

| Rank | Truck | % | Rank | Truck | % |
|---|---|---|---|---|---|
| 1 | Ram 3500 | 39.7 | 11 | Honda Ridgeline | 14.7 |
| 2 | Toyota Tundra | 30.0 | — | *Truck average* | *13.0* |
| 3 | Ford F-450 Super Duty | 28.5 | 12 | Chevrolet Silverado 1500 | 12.9 |
| 4 | Toyota Tacoma | 25.3 | 13 | GMC Sierra 1500 | 10.8 |
| 5 | GMC Sierra 2500HD | 22.0 | 14 | Nissan Titan | 9.9 |
| 6 | Ford F-250 Super Duty | 18.6 | 15 | GMC Canyon | 8.4 |
| 7 | Ford F-350 Super Duty | 18.3 | 16 | Chevrolet Colorado | 7.0 |
| 8 | Chevrolet Silverado 3500HD | 17.4 | 17 | Ford F-150 | 5.9 |
| 9 | Ram 2500 | 17.3 | 18 | Nissan Frontier | 5.0 |
| 10 | Chevrolet Silverado 2500HD | 16.0 | 19 | Ram 1500 | 3.5 |

**2024 study, for comparison** (A, iSeeCars text syndicated through WBOY), https://www.wboy.com/automotive/the-longest-lasting-cars-trucks-and-suvs-to-reach-250000-miles-and-beyond-2/. Truck average 19.4%.
- Ram 3500 42.6; Tundra 36.6; Silverado 2500HD 29.6; Sierra 2500HD 29.1; Silverado 3500HD 28.7; F-350 28.3; F-250 27.4; Ram 2500 27.2; Tacoma 26.7; Sierra 3500HD 26.0; Ridgeline 25.8.
- Below average: Silverado 1500 18.8; Sierra 1500 16.1; F-150 15.8; Titan 14.8; Ram 1500 11.5; Canyon 11.2; Colorado 10.4; Frontier 9.6.
- The method changed between editions (the truck average fell from 19.4% to 13.0%). Compare ranks, not absolute percentages, across years.

**2026 study, September 2026, partial figures only (C, coverage):**
- Sequoia 42.3% is #1 overall. Ram 3500 is the top truck at 31.9%. Sierra 3500HD 26.2%; F-350 15.1%; Ridgeline 13.7%.
- The coverage **conflicts** on Tacoma versus Tundra (28.2% vs 25.0%). TFLcar has the Tacoma higher; Forbes has the Tundra higher. See the contradiction log.
- Sources: https://tflcar.com/2026/09/vehicles-most-likely-to-make-250000-miles-study/ ; https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/ ; https://stickshifting.com/the-20-longest-lasting-cars-trucks-and-suvs-of-2026

---
## 2. Midsize and compact pickups

### Toyota Tacoma — 2nd gen (2015; 2.7 4-cyl 2TR, 4.0 V6 1GR, 5-speed auto); 3rd gen (2016–2023; 2.7 2TR, 3.5 V6 2GR-FKS, 6-speed AC60 automatic or 6-speed manual); 4th gen (2024+; 2.4 turbo "i-FORCE" with 8-speed auto or 6-speed manual; 2.4T hybrid "i-FORCE MAX")

**Verdicts by generation and engine**
- **2015, 2nd gen, 4.0 V6 or 2.7 I4: Top pick, but a frame inspection is mandatory.**
  - CR rates 2015 more reliable (A).
  - 2015 Tacoma won J.D. Power's 2018 VDS Midsize award (A).
  - Toyota ran a frame-corrosion program for 2011–2017 Tacomas, described in the failure points below.
- **2016, 3rd gen, first model year: approach with caution.**
  - CR rates it only average, the one weak year of the generation apart from 2020 (A).
  - It carries a shift-quality TSB, the rear-differential leak recall, and a crankshaft-position-sensor recall.
- **2017, 3rd gen: Strong**, provided the recall work (differential leak recall 17V-285) and the transmission reflash TSB (T-SB-0077-16) are documented. CR rates 2017 more reliable (A).
- **2018–2019 and 2021–2023, 3rd gen, 3.5 V6 or 2.7 I4: Top pick.**
  - CR: 2018 M+, 2019 M+, 2021 M+, 2022 MM, 2023 M+ (A).
  - J.D. Power Midsize awards went to the 2020 4WD, 2021 2WD and 2022 2WD, and the 2026 study (2023 MY) gave the Tacoma a model-level award (A).
  - iSeeCars puts the Tacoma at 25.3% chance of 250k miles, second-best non-HD truck (A).
- **2020, 3rd gen: Strong.** CR rates it average (A), but J.D. Power gave the 2020 Tacoma 4WD its segment award (A).
- **2024–2025, 4th gen, 2.4T: Strong, with limited long-term data.**
  - CR rates both 2024 and 2025 more reliable (A).
  - Early-production 2024 automatic-transmission failures are documented, and some trucks got replacement transmissions under warranty (B).
  - CR's 2026 midsize ranking puts the Tacoma back on top (C, coverage of CR).
- **2024+ i-FORCE MAX hybrid: unproven.** No hybrid-specific failure pattern was found, and no data isolates it. Treat it as Mixed until CR data separates it.

**Best buys**
- 2018–2019 and 2021–2023 Tacoma with the 3.5 V6 (6-speed automatic or manual), or with the 2.7 I4 if you don't tow much.
- A 2015 Tacoma with a clean frame and a documented K0D frame treatment, if in a cold-climate state.

**Years or powertrains to approach with caution**
- **2016:** first year of the 3rd gen; CR average; shift hunting (fixed by ECM reflash); rear-differential leak recall; crank-sensor recall.
- **Early 2024 automatics:** check that the transmission TSB work or a transmission replacement is documented.
- **Any 2011–2017 truck from the salt belt:** see the frame program below.

**Known failure points**

| Component | Years | Symptom | Remedy / cost | Grade and source |
|---|---|---|---|---|
| Frame corrosion (perforation) | 2011–2017 (built late June 2010 to early June 2017; about 302,470 trucks) | More-than-normal frame rust in salt states | LSC K0D: free inspection and corrosion-resistant compound in cold-climate states (DC, CT, DE, IL, IN, KY, MA, MD, ME, MI, MN, NH, NJ, NY, OH, PA, RI, VA, VT, WI, WV). CSP ZKA: frame replacement for **12 years from first use**, but only if K0D was done before it expired (about Dec 2021 to Apr 30 2023, by region). | (A) https://static.nhtsa.gov/odi/tsbs/2024/MC-10251755-9999.pdf |
| Frame class-action settlement | 2005–2010 only (does **not** cover 2015) | — | — | (C) topclassactions |
| Rear differential oil leak (BD20D carrier) | 2016–2017, built mid-Aug 2015 to late Mar 2017; TRD Pro and TRD Off-Road excluded | Oil leak, noise, reduced propulsion, possible seizure | Recall **17V-285**: retighten, or new gasket and nuts, or new carrier. About 228,000 trucks; Toyota logged 40 field reports and 355 warranty claims. | (A) https://static.nhtsa.gov/odi/rcl/2017/RMISC-17V285-9745.pdf |
| AC60 6-speed shift quality: delayed engagement, harsh 1–2, "busy" hunting on grades, flare | 2016–2017, 2GR engine | Gear hunting | T-SB-0077-16 ECM reflash, covered by the 8-year/80,000-mile federal emissions warranty | (A) https://static.nhtsa.gov/odi/tsbs/2016/MC-10132910-9999.pdf |
| Wide-open-throttle stumble at altitude | 2016–2018, 2GR | Hesitation | TSB 0062-18 reflash | (C) https://pickuptrucktalk.com/2019/02/toyota-tacoma-engine-transmission-issues/ |
| Crankshaft position sensor | 2016–2017 V6 | Stall or no-start | Recall of about 32,000 trucks | (C) same PUTT article; campaign number not verified |
| Other 2GR-FKS TSBs (idle surge with steering input, belt chirp, fuel-pump chirp, knocking-noise TSB covering 2016–2023, O2 sensor weld) | 2016–2023 | Minor | TSB repairs | (D) CarComplaints TSB index |
| Rear axle: welding debris lets retaining nuts loosen and the axle shaft separate | 2022–2023 (381,199 trucks) | Vibration, noise, gear-oil leak | Recall **24V-152**: inspect and retighten, repair damage | (A) https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V152-8115.pdf |
| 8-speed automatic early failures (neutral drop-outs, stuck in gear) | 2024 early build | Failures under 1,000 miles in some cases; 13 NHTSA complaints by August 2024 | TSB for a stuck pressure-control solenoid or torque-converter-clutch actuator; transmission replaced under warranty (2–4 month waits); manual-shifter retainer TSB | (B) https://www.thedrive.com/news/2024-toyota-tacoma-owners-keep-reporting-transmission-failures ; PUTT https://pickuptrucktalk.com/2026/03/2024-2026-toyota-tacoma-known-problems-transmission-engine-small-gripes/ (reports the complaints faded after 2024) |
| Rear brake hose damaged by packed mud | 2024–2025 4WD (106,061 trucks) | Brake-fluid leak | Recall **25V-058**: replace both rear hoses | (A) https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V058-3436.pdf |
| Other 4th-gen recalls: instrument cluster display (Toyota-wide, 591,377 vehicles), weight label, 2025 driveshaft (5,960) | 2024–2025 | — | Recall | (C) PUTT, above |
| 2.4T engine | 2024+ | **No engine-hardware recall or failure pattern found** as of March 2026. Concerns about long-term durability are speculative. | — | (C) PUTT, above |

**Recalls to verify by VIN:** 17V-285, 24V-152, 25V-058, and the K0D/ZKA frame program.

**Supporting evidence (A):**
- CR matrix, section 1b.
- J.D. Power VDS Midsize wins: 2015, 2020, 2021, 2022 and 2023 MY.
- iSeeCars: 25.3% (2025), 26.7% (2024).
- CR's 2024 Tacoma page records owner comments about an early transmission replacement and an electric power-steering rack failure, but the net verdict is still more reliable: https://www.consumerreports.org/cars/toyota/tacoma/2024/reliability/

**Inspection checklist**
- **Frame (2015–2017 especially).** Use a pick or hammer on the rear frame rails, spring hangers, crossmembers and inside the boxed sections. Ask for the K0D/ZKA paperwork.
- **Rear differential.** Look for wetness at the carrier-to-housing seam; confirm 17V-285 was done on 2016–2017.
- **2022–2023:** confirm 24V-152 was done and check the rear axle ends for gear oil.
- **Transmission.** On 2016–2017 AC60, test-drive at 50–65 mph on a grade to check for hunting. On 2024, check for neutral drop-outs and harsh or delayed shifts, and ask about transmission replacement history.
- **4WD.** Test 4-high and 4-low engagement and the rear locker, if fitted.
- **Towing and modifications.** Look for evidence of heavy towing (hitch wear, trailer wiring). Check whether lift kits, oversized tires or a tune are fitted; they can complicate warranty claims.

### Nissan Frontier — D40 (2015–2019: 4.0 V6 VQ40 with 5-speed auto or 6-speed manual, or 2.5 I4; 2020–2021: 3.8 V6 VQ38 with 9-speed auto); D41 (2022+: 3.8 V6 VQ38 with JATCO 9-speed auto)

**Verdicts**
- **2015–2019, 4.0 V6 or 2.5 I4: Top pick on reliability evidence, with a longevity caveat.**
  - CR: 2015 M+, 2017 M+, 2019 M+ (A).
  - J.D. Power Midsize award four years running for the 2016, 2017, 2018 and 2019 Frontier (A).
  - The contradiction: iSeeCars puts the Frontier at only 5.0% (2025) or 9.6% (2024) chance of 250k miles, second-lowest of all pickups (A). See the contradiction log.
- **2020–2021, VQ38 plus 9-speed: Mixed.** CR 2020 average, 2021 less (A). Two park-pawl rollaway recalls (22V-457 and 22V-671) apply.
- **2022–2023, D41: approach with caution.** CR rates 2022 and 2023 less reliable (A), and both park recalls apply.
- **2024–2025, D41: Strong to Top pick, but newer with limited long-term data.** CR 2024 MM, 2025 M+ (A). CR's used list includes 2024–2025 (C, coverage). CR's 2026 midsize ranking calls the Frontier "above average" (C, coverage).

**Best buys:** 2016–2019 4.0 V6 (5-speed automatic), or 2024–2025 3.8 V6.

**Avoid or caution:**
- 2021–2023: CR below average.
- Any 2020–2023 without both park recalls done.

**Known failure points**

| Component | Years | Remedy | Grade and source |
|---|---|---|---|
| 9-speed park pawl may not engage (pawl edge contacts case boss) → rollaway | 2020–2022 Titan (56,189) and 2020–2022 Frontier (123,987) | Recall **22V-457** | (A) https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V457-8494.pdf |
| 9-speed parking rod/wedge friction → rollaway | 2020–2023 Titan (58,767); 2020–2021 Frontier (52,216); 2022–2023 Frontier (92,240) | Recall **22V-671** (R22A9/R22B1): TCM (and sometimes ECM) reprogram. A plant audit found the condition in 11 of 83 trucks. | (A) https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V671-7110.pdf ; https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V671-5060.pdf |
| VQ40 timing-chain guide/tensioner whine and failure | **2005–2010 only** | Class actions: Falco v. Nissan settlement 2017; Canada class certified 2022. Repair about $1,360–1,625. | (C) https://topclassactions.com/lawsuit-settlements/lawsuit-news/nissan-agrees-settle-timing-chain-defect-class-action-lawsuit/ ; https://www.carcomplaints.com/news/2022/nissan-canada-timing-chain-class-action-lawsuit-certified.shtml. **Not found for 2015–2019.** |

**Inspection checklist**
- **Frame and underbody rust.** The D40 is an older design; check the frame rails and the rear leaf-spring hangers.
- **VQ40 timing chain.** Listen for a whine at 1,500–3,000 rpm, even though the documented cases are older years.
- **9-speed trucks (2020+).** Confirm both park recalls, and test that Park holds on an incline.
- **Pro-4X.** Check the electronic locker.

### Honda Ridgeline — 2nd gen (2017+: 3.5 V6 J35; 6-speed auto 2017–2019; ZF-based 9-speed auto 2020+)

**Verdicts**
- **2017–2019: approach with caution.**
  - CR: 2017 average, 2018 less, 2019 less (A).
  - The 2017 and 2019 were included in connecting-rod bearing recall **23V-751** (A).
  - NHTSA opened **PE25008** on 20 Aug 2025. It covers rod-bearing failures in 2017–2019 Ridgelines and other J35 vehicles that fall *outside* the recall: 414 reports to NHTSA plus 2,598 reports to the manufacturer, across a population of 1,410,806 vehicles (A).
- **2020–2023: Strong.**
  - CR: 2020 M+, 2021 M+, 2022 Avg, 2023 M+ (A). CR's used list includes 2020–2021 and 2023 (C, coverage).
  - iSeeCars: 14.7% chance of 250k (2025), above the truck average (A).
  - Caveat: the ZF 9HP harsh-shift class action (C, allegation only).
- **2024: Strong-minus.** CR average (A).
- **2025: Mixed.** CR less reliable (A). PUTT reports CR flagged build quality as below average (C).

**Best buys:** 2020–2021 and 2023. **Caution:** 2017–2019 and 2025.

**Known failure points**

| Component | Years | Remedy | Grade and source |
|---|---|---|---|
| Crank pins improperly ground (convex) → rod-bearing wear and seizure | 2017 and 2019 Ridgeline (part of 248,999 Honda/Acura vehicles) | Recall **23V-751**: inspect bearings; repair or replace the engine | (A) https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V751-5416.pdf ; Honda release https://hondanews.com/en-US/honda-corporate/releases/release-ce25b2bdc6167d48c9de61f4f90293c5-2015-2020-multi-model-connecting-rod-recall |
| Rod-bearing failures **outside** 23V-751 | 2017–2019 Ridgeline (and other J35 models) | Investigation **PE25008** (open). The prior Recall Query RQ24013 was closed after finding the recall scope correct. | (A) https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf ; https://static.nhtsa.gov/odi/inv/2024/INCLA-RQ24013-85911.pdf |
| ZF 9HP harsh, delayed or "banging" 1–2 shifts | 2020+ Ridgeline (and other Honda 9-speed models) | Moore v. American Honda, N.D. Cal. 5:23-cv-05011-BLF; motion to dismiss partly granted and partly denied, July 2024. One plaintiff owns a 2022 Ridgeline. | (C, allegation) https://www.hondatransmissionlawsuit.com/ ; https://www.classaction.org/media/moore-et-al-v-american-honda-motor-co-et-al.pdf |

**Inspection checklist**
- **2017–2019:** run a VIN check for 23V-751 and listen for a bottom-end knock.
- **2020+:** check cold-start 1–2 and 2–3 shift quality, and ask about TCM software updates.
- **AWD:** the rear drive unit fluid needs changing on schedule.
- **Unibody:** check for towing overload beyond the 5,000 lb rating.

### Ford Ranger — 2019–2023 (2.3 EcoBoost, 10-speed 10R60); new generation 2024+ (2.3 EcoBoost; 2.7 EcoBoost in Raptor/Lariat options, 10-speed)

**Verdicts**
- **2019–2023: Mixed.**
  - CR: 2019 L, 2020 L, 2021 Avg, 2022 L, 2023 L (A).
  - iSeeCars has no Ranger figure.
- **2024+: Mixed and unproven.**
  - CR 2025 less reliable (A).
  - PUTT reports CR's 2026 prediction as below average (C).
  - A sun-visor wiring fire recall applies.

**Best buy:** 2021, the only year CR rates average.

**Avoid or caution:** 2019 (first year), 2022–2023, 2025.

**Known failure points and recalls**
- **26V-238** (14 Apr 2026): 140,201 2024–2026 Rangers built 9 Dec 2022 to 28 Dec 2025.
  - Sun-visor or headliner wiring can short, and repeated body-control-module restarts can build up soot until it ignites in the A-pillar.
  - Remedy: body-control-module software for all trucks; harness inspection and replacement where trouble code B14AA has been logged.
  - Remedy letters were scheduled for August 2026 (A). https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V238-6269.pdf
- **19V-366:** 2019 Rangers built 5–13 March 2019 may have loose shift-cable bracket fasteners, so the transmission may not be in Park when the shifter says it is (A). https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V366-1915.PDF
- **10R60 shift quality:** included in the broad 10R80 and Ford 10-speed class action (McCabe v. Ford, S.D. Fla. 1:23-cv-22572, covering 2017-to-present 10-speed Fords including Ranger) (C, allegation).

**Inspection checklist**
- 10-speed shift quality from cold.
- 2.3 EcoBoost: coolant level and any overheating history (leads only; not verified).
- 2024+: confirm 26V-238 was done.
- Check for aftermarket tunes.

### Chevrolet Colorado / GMC Canyon — 2nd gen (2015–2022: 2.5 I4, 3.6 V6 LGZ, 2.8 Duramax diesel LWN; 6-speed auto, 8-speed 8L45 on V6 from 2017); 3rd gen (2023+: 2.7 turbo L2R/L3B, 8-speed)

**Verdicts**
- **2015–2022: Mixed, leaning weak.**
  - CR: 2015 L, 2016 Avg, 2017 L, 2018 Avg, 2019 L, 2020 L, 2021 L, 2022 Avg (A).
  - iSeeCars: Colorado 7.0%, Canyon 8.4%, both below the truck average (A).
  - No J.D. Power Midsize wins in 2015–2023.
- **2023+: Avoid for now.**
  - CR: 2023 L, 2024 L, 2025 prediction "much less reliable" (A).
  - CR's 2026 midsize ranking puts Colorado/Canyon at the bottom, dinged on powertrain and brakes (C, coverage).
  - A 2023 engine-block casting defect program applies (below).

**Best buys, if you must:** 2016, 2018 or 2022, ideally the 2.5 with the 6-speed automatic or the V6 with a documented fluid exchange; the 2.8 diesel only with complete emissions-system records. Evidence cannot separate engines within a year, so this is a Mixed, not a recommended, pick.

**Known failure points**
- **8L45 torque-converter clutch shudder (2017–2019 Colorado/Canyon V6).** GM TSB 18-NA-355: the factory transmission fluid absorbs moisture; the fix is a full fluid exchange with Mobil 1 LV ATF HP (A). https://static.nhtsa.gov/odi/tsbs/2020/MC-10174266-9999.pdf
- **2.8 Duramax.** GM emission recall 17337: 2016–2018 Colorado/Canyon diesel particulate-sensor diagnostics reflash (A, via the dot.report mirror of the GM bulletin). DPF/EGR failure patterns are forum-level only (D).
- **2.7T L3B block cracks (2023 Colorado, Silverado 1500, Sierra 1500).** Customer Satisfaction Program N232415060: a "hot core pin" casting defect in the main oil gallery can crack the block. Dealers **replace the engine**, free until 31 March 2026, after which normal warranty applies (A). https://static.nhtsa.gov/odi/tsbs/2024/MC-10252980-0001.pdf
- **2.7T highway shudder or surge (2023–2025).** Preliminary Information PIP6060 lists causes: EVAP canister flooded with fuel, chafed harness, failed fine oil separator (A). https://static.nhtsa.gov/odi/tsbs/2025/MC-11018484-0001.pdf
- **2.7T emission recall N232427950:** injector replacement on about 232 trucks (minor) (A).

**Inspection checklist**
- Test at a steady 25–80 mph under light throttle for shudder, and ask for fluid-exchange records.
- Diesel: DPF regeneration history, DEF system, soot codes.
- 2023: run the VIN against N232415060 and confirm an engine replacement if listed.
- Check the frame, especially the ZR2/AT4X off-road trims.

### Jeep Gladiator — JT (2020+; 3.6 Pentastar V6 with 8-speed auto or 6-speed manual; 3.0 EcoDiesel 2021–2023)

**Verdict: Avoid-leaning Mixed.**
- CR rates 2020, 2021, 2022 and 2023 all less reliable, with steering as the recurring trouble spot (A).
- Jeep is last in CR's 2026 brand ranking (A).
- iSeeCars has no Gladiator figure.

**Known failure points**
- **Steering "shimmy" or "death wobble."** Warranty extension **XF1** (TSB 19-002-24 revision, Nov 2024): on 2020 Gladiators built on or before 11 Aug 2020 (plus Wrangler JL and JK), air trapped in the steering damper causes a shimmy after bumps. The damper is replaced, and coverage is **extended to 8 years/90,000 miles** (A). https://static.nhtsa.gov/odi/tsbs/2024/MC-11010476-0001.pdf
- **Steering wander, pull and excess play.** TSB 08-074-20 REV C (2018–2020 JL, 2020 JT): replace the steering gear and update the electro-hydraulic power-steering software. The TSB states it "will NOT correct a sustained steering shake," and lifted trucks beyond alignment spec may not be fixed (A). https://static.nhtsa.gov/odi/tsbs/2020/MC-10183094-9999.pdf
- **Frame and suspension weld recalls:** the documented weld recalls are for the **Wrangler** (18V-675 track-bar bracket on 2018–2019 JL; 20V-042 front-axle lower-control-arm bracket on 2020 Wrangler). **No Gladiator weld recall was found**, so the brief's lead is not verified for the Gladiator (A for the Wrangler documents). https://static.nhtsa.gov/odi/rcl/2018/RCLRPT-18V675-1532.PDF ; https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V042-9046.PDF

**Inspection checklist**
- Hit a bump at 45–60 mph and check for oscillation.
- Inspect the track-bar bushings, tie-rod ends and steering damper.
- Check lift and tire size against factory spec.
- Water leaks through roof panels.
- Auto start-stop auxiliary battery (CR owner comment).

### Ford Maverick — 2022+ (2.5 hybrid with eCVT; 2.0 EcoBoost with 8-speed)

**Verdicts**
- **2023–2025: Strong.**
  - CR: 2023 M+, 2024 M+, 2025 M+ (A).
  - CR's used list says "skip the 2022" and names brakes as the most frequent owner complaint (C, coverage).
  - CR's 2025 survey scored it above average (C).
- **2022: Mixed.**
  - CR average (A), with 28 recall entries on CR's 2022 page (A).
  - A 12-volt battery loss-of-power recall applies.

The data cannot split hybrid from 2.0T. The hybrid benefits from Toyota-style eCVT simplicity (inference only), but the 2.0T has no documented engine defect either.

**Known failure points and recalls**
- **24V-267 → 25V-019 (12-volt battery, loss of motive power).** 24V-267 covered 456,565 2021–2024 Bronco Sport and 2022–2023 Maverick with a software fix. After NHTSA's Recall Query RQ24014, 25V-019 (272,817 vehicles) replaced batteries from supplier Camel with AGM batteries. The Maverick switched to AGM in production in late 2022 (A, mirror of NHTSA's closing resume). https://www.carcomplaints.com/Ford/Maverick_Hybrid/2022/investigations/loss-of-motive-power-rq24014.shtml
- **24V-330 / 25V-881 (hybrid only).** Service software released in January 2024 could force the truck into Neutral and then limp mode. About 8,941 2022–2024 Maverick hybrids, plus 86 added later. The fix is a software update (A). https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V330-4801.PDF

**Inspection checklist**
- Confirm AGM battery or 25V-019 completion on 2022–2023.
- Brake feel and pedal (CR's top complaint).
- Hybrid: 12-volt and high-voltage warnings.
- 2.0T: check for oil leaks and any tune.

### Hyundai Santa Cruz — 2022+ (2.5 I4 with 8-speed auto; 2.5T with 8-speed wet dual-clutch)

**Verdicts**
- **2022–2023: Mixed.** CR rates both less reliable (A).
- **2024–2025: Strong, but thin data.** They appear on CR's used list (C, coverage of CR).

**Known failure points and recalls**
- **Recall 236 (8-speed wet DCT, 2.5T; 2021–2022 Hyundai models including the 2022 Santa Cruz).** TCU software gives a proper "fail-safe"; dealers inspect and replace the transmission if needed (A). https://autoservice.hyundaiusa.com/campaign236
- **TSB, May 2023:** DCT replacement for high-pressure electric oil pump trouble codes on 2022 Santa Cruz 2.5T built 22 Jun 2021 to 13 Jun 2022 (A). https://static.nhtsa.gov/odi/tsbs/2023/MC-10237182-0001.pdf
- **Limited Coverage Campaign LA12 (2026):** 2022–2024 Santa Cruz DCT high-pressure oil pump, TCU logic update (A). https://static.nhtsa.gov/odi/tsbs/2026/MC-11030324-0001.pdf
- **22V-197:** cracked turbo oil-supply pipe, 16 units (A, minor).

**Inspection checklist**
- 2.5T DCT: judder or hesitation from a stop, and a record of Recall 236 / LA12.
- Tonneau and bed drain leaks.
- Infotainment.

---
## 3. Full-size light-duty pickups

### Toyota Tundra — 2nd gen (2014–2021: 5.7 V8 3UR-FE, 4.6 V8 1UR-FE through 2019; 6-speed auto); 3rd gen (2022+: 3.4 twin-turbo V6 "i-FORCE" V35A-FTS, and the hybrid "i-FORCE MAX" on the same engine; 10-speed auto)

**Verdicts**
- **2015–2021, 5.7 V8 (and 4.6 V8): TOP PICK among full-size trucks.**
  - CR: 2015 M+, 2016 M+, 2017 M+, 2018 MM, 2019 MM, 2020 M+, 2021 M+ (A).
  - J.D. Power Large Light Duty award for the 2016, 2018, 2019 and 2021 Tundra (A).
  - iSeeCars: 30.0% (2025) and 36.6% (2024), best non-HD truck (A).
  - CR's used-truck list names 2014–2021 (C, coverage).
- **2022–2024 non-hybrid i-FORCE V35A: AVOID unless the recall remedy is documented.** Downgraded; see section 5.3.
  - CR: 2022 much less, 2023 less, 2024 less (A).
  - Three engine-debris recalls: **24V-381, 25V-767, 26V-320** (A).
  - Tundra failed to place in J.D. Power's 2026 VDS for the 2023 model year, meaning below the segment average (C).
- **2022–2024 i-FORCE MAX hybrid: Mixed.**
  - Explicitly **outside** all three engine recalls, because Toyota says its V35A configuration puts different pressure on the main bearings (A).
  - The hybrid still shares the 10-speed brake-clutch software recall (24V-125) and the wastegate TSB family, and CR's poor 2022–2024 verdicts cover both powertrains.
- **2025, V35A with the improved #1 main bearing: Mixed to Strong, provisional.**
  - CR 2025 more reliable (A).
  - Toyota says engines built after the 26V-320 window use an "improved main bearing, and Toyota continues to monitor the effectiveness of this improvement" (A).

**Best buys**
- 2015–2021 Tundra 5.7 V8. The 2018–2019 years have the strongest CR scores.
- A 2022–2024 non-hybrid can be acceptable **only** with a dealer-documented **replacement engine**. Toyota says replacement engines carry the July-2024 bearing design (B).
- A 2025 is a provisional option.

**Avoid:** a 2022–2024 non-hybrid Tundra with an open 24V-381, 25V-767 or 26V-320 recall, or one that only "passed inspection" and has any knock or rough running.

**The V35A engine recall timeline**

| Recall | Filed | Scope | Remedy | Grade and source |
|---|---|---|---|---|
| **24V-381** | 30 May 2024 | 102,092 vehicles: 2022–2023 Tundra (built 2 Nov 2021 to 13 Feb 2023; about 98,600) plus LX600. Machining debris can adhere to the main bearings → knock, rough running, no-start or stall. Hybrid excluded. | **Engine replaced** (engine includes turbos, intercooler and fuel system; about 13.5 hours labor). More than 70,000 engines replaced. | (A) https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V381-6004.PDF ; https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V381-0274.pdf |
| **25V-767** | 6 Nov 2025 | 126,691 vehicles, of which 113,079 are 2022–2024 Tundra built 22 Nov 2021 to 14 Feb 2024; also 2022–2024 LX and 2024 GX. Expands 24V-381. | At filing: "remedy is currently under development." Final remedy is an inspection (below). | (A) https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf ; build range as reported by Pulscar (D) |
| **26V-320** | 20 May 2026 | 43,566 2024 Tundra built 7 Feb to 5 Aug 2024 (engines from the Alabama plant). Engines built later have the "improved main bearing." | Inspection-first remedy (below) | (A) https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf |

**How the remedy for 25V-767 and 26V-320 works** (updated 15 June 2026):
- Dealers run "inspection software" that reads the resonant frequency of the crankshaft nose to judge the #1 main bearing, and they also collect the truck's drive data.
- If the software cannot confirm the bearing is free of abnormal wear, or if there is not enough drive data, the engine is replaced.
- Trucks covered by 24V-381 still get a new engine.
- Owners are unhappy about the change, and about 270,000 V35A vehicles have been recalled worldwide (B). https://www.thedrive.com/news/toyota-wont-replace-every-recalled-tundra-v6-and-some-owners-are-fed-up ; https://tfltruck.com/2026/06/toyota-tundra-engine-recall-update-news/

**Other failure points**

| Component | Years | Symptom | Remedy / cost | Grade and source |
|---|---|---|---|---|
| Out-of-warranty cost of V35A engine failure | 2022–2024 | — | Owner-quoted **$14,000–30,000** | (D) Pulscar https://www.pulscar.io/blog/toyota-tundra-problems-by-mileage |
| Turbo wastegate actuator faults (trouble codes P0243/P0247, P25B3–P25B6 stuck open/closed) | 2022+ | Check-engine light, low boost | Toyota "T-TT-0681-22 Rev" bulletin (mirrored). Because the actuator is part of the turbo, a failure means replacing the turbo. | (C) https://www.carcomplaints.com/Toyota/Tundra/2022/tsbs/tsb-t-tt-0681-22-rev.shtml ; go-parts (D) |
| 10-speed brake clutch doesn't release in Neutral → creep up to about 4 mph | 2022–2024 Tundra and Tundra Hybrid | — | Recall **24V-125**: TCM software | (A) https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V125-8877.PDF |
| Plastic fuel tube chafes brake lines | 2022–2023 (168,179 trucks) | — | Recall **23V-566** | (D; cites the Part 573 report) Pulscar |
| Secondary air-injection pump and air switching valve (moisture or ice) | 5.7 V8 (all years) | Check-engine light, codes P2440/P2442/P0418, limp mode | Programs covered 2007–2010 (ZTQ), 2011 (ZG6, 10 years/150,000 miles) and 2012–2013 (LSC D0E, expired 31 May 2016). **None cover 2015–2021.** Repair about $1,000–2,500. | (A) program documents: https://static.oemdtc.com/NHTSA-PDFs/MC-10132382-9999.pdf ; cost (D) |
| Cam-tower oil leak (3UR) | 2007–2021 | Oil weeping down the back of the engine | Reseal behind the timing cover; about $2,000–3,500 ($2,300–5,600 in owner reports). No Toyota program. | (D) ampauto, Pulscar |
| Frame rust (2nd gen) | Only the 2007–2008 program existed (ZH7, expired) | — | — | (D; cites Toyota letters) Pulscar |

**Supporting evidence**
- CR matrix (A) and J.D. Power table (A), section 1.
- iSeeCars (A); 2026 coverage conflicts (C).
- CR's Elek quote to PUTT: CR removes recall-only responses, so the 2022 Tundra's worst score reflects **non-recall** problems (C). https://pickuptrucktalk.com/2025/12/improved-toyota-tundra-scores-help-toyota-reclaims-consumer-reports-reliability-crown-despite-engine-failure-recalls/

**Inspection checklist**
- **2022–2024:** run the VIN for 24V-381, 25V-767 and 26V-320. Ask for the repair order showing the engine replacement or the inspection result. Listen for knock under load and on cold start.
- **All 3rd gen:** check for wastegate or boost trouble codes, 10-speed shift quality, and 23V-566 completion.
- **2015–2021:** scan for air-injection codes; look for cam-tower leaks at the rear of the heads; check the frame and brake lines in salt states.
- **All Tundras:** inspect tow-hitch and receiver wear and check the transmission fluid condition on trucks that towed.

### Ford F-150 — 13th gen (2015–2020: 2.7 EcoBoost; 3.5 EcoBoost; 5.0 V8; 3.5 V6 2015–2017; 3.3 V6 2018–2020; 3.0 Power Stroke diesel 2018–2020; 6-speed 6R80 on 2015–2017 and some 2017, 10-speed 10R80 from 2017/2018); 14th gen (2021+: 2.7 and 3.5 EcoBoost, 5.0, 3.3 V6, 3.5 PowerBoost hybrid, 3.0 diesel 2021; 10R80)

**Verdict for the whole period: Mixed. Buy only specific years and engines.**
- CR: 2015 Avg, 2016–2022 L, 2023 Avg, 2024 Avg, 2025 L (A).
- CR's 2026 report card: the F-150 improved to average (A). PUTT reports the F-150 at the top of CR's 2026 full-size ranking (C).
- J.D. Power: 2017 F-150 won Large Light Duty (A); the F-150 tied 3rd in the 2026 VDS (C).
- iSeeCars: 5.9% (2025), second-lowest of all trucks; 15.8% in 2024 (A).

**Best buys (Mixed-positive)**
- 2023–2024 F-150 with the 5.0 V8 or the 2.7 EcoBoost built after October 2021. CR rates these years average (A). Confirm recalls first.
- 2018–2020 5.0, provided oil-consumption TSB 19-2365 is done and consumption is verified normal.

**Avoid or caution**
- **2021–2022 PowerBoost hybrid.** CR gave it 4 out of 100 in 2022 and named it the least reliable vehicle; the 2021 was worst in "Transmission Major" (B, Edmunds reporting CR data). https://www.edmunds.com/car-news/is-the-ford-150-hybrid-the-least-reliable-vehicle-you-can-buy.html
- **2017–2020 3.5 EcoBoost** without phaser records.
- **2015–2017 6R80 trucks** until recall 26V-237 is done.
- **2021–2022 2.7 EcoBoost built May–October 2021** unless the engine test for 24V-635 is done. These trucks carry a 10-year/150,000-mile extended warranty for this defect, which reduces the risk.

**Known failure points**

| Component | Years and engine | Symptom | Remedy / cost | Grade and source |
|---|---|---|---|---|
| Cam phasers (VCT) | 2011–2015 3.5 EcoBoost built on or before 29 May 2015 | 2–5 second rattle after a cold soak | TSB 18-2305: replace all 4 VCT units plus the primary timing chain (9.0–9.2 labor hours) | (A) https://static.nhtsa.gov/odi/tsbs/2018/MC-10148706-9999.pdf |
| Cam phasers | 2017–2020 3.5 EcoBoost (Dearborn and Kansas City builds, March/April 2016 to 30 Nov 2019; not Raptor) | Cold-start rattle or warm-idle knock | Customer Satisfaction Program 21B10 PCM reflash (ended 31 Jul 2022); pro-rated phaser replacement under 21N03 (ended **1 Jan 2023**); 21N08 to revert the calibration if it caused shudder. **All programs have expired; a used buyer pays.** Ford says the noise does not affect safety or emissions. | (A) https://static.nhtsa.gov/odi/tsbs/2021/MC-10189763-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2021/MC-10201643-0001.pdf |
| Cam phasers | 2021+ 2.7/3.5 | Some rattle reports | Updated "cap-over-spring" phasers (TSB 22-2200 / 23-2143 as cited by a vendor) | (D) vendor blog and forums |
| 5.0 oil consumption | 2018–2020 | More than 1 quart per 3,000 miles | TSB 19-2365: PCM reflash (reduces manifold vacuum when coasting with fuel cut off), new dipstick, oil change. Effectiveness mixed (D). | (A) https://static.nhtsa.gov/odi/tsbs/2019/MC-10169811-0001.pdf |
| 6R80 unexpected downshift (6th to 2nd) with rear-wheel lockup | 2015–2017, 6-speed automatic (1,392,935 trucks built 12 Mar 2014 to 18 Aug 2017) | Sudden deceleration or skid | Recall **26V-237** (14 Apr 2026): PCM calibration. NHTSA's Engineering Analysis **EA26001** (opened 30 Jan 2026): 329 owner complaints; 43% reported at least one wheel lockup; 114 had lead-frame or valve-body replacement. Earlier 2011–2014 recalls 16V-248, 19V-075, 19V-433 and 24V-444 addressed a different sensor failure. | (A) https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf ; https://static.nhtsa.gov/odi/inv/2026/INOA-EA26001-10007.pdf |
| 10R80 harsh or erratic shifting | 2017–2020 (plus later years in other suits) | Clunks, harsh 1–2 and 2–3 | O'Connor v. Ford (N.D. Ill. 1:19-cv-05045): motion to dismiss partly granted and partly denied. McCabe v. Ford (S.D. Fla. 1:23-cv-22572). | (C, allegation) https://www.govinfo.gov/content/pkg/USCOURTS-ilnd-1_19-cv-05045/pdf/USCOURTS-ilnd-1_19-cv-05045-2.pdf |
| 10R80 false low-pressure code → Neutral | 2021, 3.5/2.7/5.0 without auto start-stop, built 28 Jul to 20 Dec 2021 | Truck coasts in Neutral | Recall **22V-188**: PCM update | (A) https://static.nhtsa.gov/odi/rcl/2022/RCLRPT-22V188-8945.PDF |
| "Nano" 2.7/3.0 EcoBoost intake-valve fracture | 2021–2022, built May–Oct 2021 (90,736 vehicles across F-150, Bronco and others) | Sudden engine failure, mostly under 20,000 miles | Recall **24V-635**: engine-cycle test; engine replaced if it fails. Plus Customer Satisfaction Program **24N12** extended warranty, **10 years/150,000 miles**. NHTSA EA23002 counted 936 engine exchanges. | (A) CR 2022 F-150 recall list; mirrored ODI closing resume https://www.carcomplaints.com/Ford/F-150_Hybrid/2021/investigations/loss-of-motive-power-ea23002.shtml |
| Rear axle hub bolt fatigue → spline wear → roll-away in Park or loss of drive | 2021–2023 with the Max Trailer Tow package and 9.75-inch ¾-float axle (112,965 trucks built 28 Jan 2020 to 25 Dec 2022) | Click or rattle from the wheel center cap | Recall **23V-896** (Ford 23S65): both rear half-shafts and hubs replaced; final parts available from Q1 2025 | (A) https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V896-5481.PDF ; https://static.nhtsa.gov/odi/rcl/2023/RCMN-23V896-6808.pdf |
| Same defect, expansion | 2023–2025 (103,174 trucks) | — | Recall **25V-512**: replace axle shafts | (A) https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V512-5387.pdf |
| Underbody insulators contact the aluminum driveshaft → possible fracture | 2021–2022 (58,203) | — | Recall **22V-623** | (A, CR recall list) |
| PowerBoost hybrid drive unit trouble codes P0A1A/P1A0E | 2021 | Check-engine light, motor performance | TSB 21-2072 | (C) dot.report mirror |

**Recall volume.** CR's pages show 29 recalls for the 2021 F-150, 23 for 2022, 23 for 2023, 10 for 2024 and 15 for 2025 (A).

**Inspection checklist**
- **EcoBoost:** cold-start the truck after at least 6 hours and listen for phaser rattle. Check for oil leaks at the timing cover and the coolant level.
- **2021–2022 2.7:** VIN check for 24V-635 and 24N12.
- **5.0:** check oil consumption and look for plug fouling.
- **Transmission:** 1–2 and 2–3 shift quality, harsh downshifts at low speed; on 2015–2017, confirm 26V-237.
- **Max Tow trucks:** listen for a rattle from the hub cap; confirm 23V-896 or 25V-512.
- **PowerBoost:** high-voltage warnings and the Pro Power generator function.
- **Tunes:** check for aftermarket tunes, common on EcoBoosts, which can affect warranty.

### Chevrolet Silverado 1500 / GMC Sierra 1500 — K2XX (2014–2018: 4.3 V6, 5.3 V8 L83, 6.2 V8 L86; 6-speed 6L80, 8-speed 8L90 on 6.2 and some 5.3 from 2016–2017); T1XX (2019+: 2.7T L3B, 5.3 L84 with Dynamic Fuel Management, 6.2 L87, 3.0 Duramax LM2/LZ0, 4.3 LV3 2019; 6/8/10-speed automatics). The 2019 "Silverado LD" and 2022 "Silverado LTD" carry-over versions reused the K2XX and pre-refresh T1XX respectively.

**Verdict: Mixed. Buy specific engines only. Avoid the 6.2 L87 (2021–2026).**
- CR rates **every year 2015–2024 less reliable**; the 2025 is more reliable on early data (A).
- J.D. Power is more favorable: Large Light Duty awards for the 2015 Silverado, 2020 Sierra and 2022 Silverado LTD; 2nd place in the 2026 study (A for awards, C for the 2026 order).
- iSeeCars: Silverado 12.9%, Sierra 10.8%, about the truck average (A).

**Best buys (Mixed)**
- 2019–2021 or 2023–2024 Silverado/Sierra with the **5.3 L84** and complete oil-change records, or with the **3.0 Duramax** (2023+ LZ0, or 2020–2022 LM2 with the coolant-control-valve work done).
- K2XX 5.3 with the 6-speed 6L80.

None of these reaches Strong on the CR evidence.

**Avoid**
- **6.2 L87, 2021–2026.** Recall 25V-274 plus NHTSA's Engineering Analysis EA26005.
- **2014–2018 8L90** trucks with shudder and no fluid-exchange record.
- **2023 2.7T** unless the program N232415060 engine replacement is done or the truck is cleared.

**Known failure points**

| Component | Years and engine | Symptom | Remedy / cost | Grade and source |
|---|---|---|---|---|
| **6.2 L87: rod/crank sediment and out-of-spec crankshaft → bearing failure** | 2021–2024, engines built 1 Mar 2021 to 31 May 2024 (597,571 vehicles: Silverado 107,244; Sierra 153,637; plus SUVs) | Knock, loss of power, stall | Recall **25V-274**: inspect; engine replaced if it fails; if it passes, 0W-40 oil, new fill cap and updated manual | (A) https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V274-1938.PDF |
| **6.2 L87: failures after the remedy** | 2021–**2026** | — | Recall Query RQ26001 (Jan 2026) → Engineering Analysis **EA26005** (20 Aug 2026) covering **997,743 vehicles**. NHTSA counts 690 complaints: 473 failures after the oil remedy, **26 after a new engine**, and 191 from engines built after the recall window. GM itself logged 6,953 complaints (6,050 after removing duplicates). | (B) https://www.gm-trucks.com/nhtsa-gm-62l-v8-engine-investigation-expands/ ; https://carbuzz.com/gm-l87-v8-engine-failure-nhtsa-investigation-august-2026/ (cites Car and Driver) |
| 5.3 L84 / 6.2 lifters (cylinder deactivation, AFM/DFM) | 2019+ (earlier AFM engines too) | Tick, misfire, collapsed lifter | GM bulletin 15-06-01-002H: inspect the camshaft; replace lifters and the lifter oil manifold. Consolidated class action pending in E.D. Mich. since Dec 2021 (judge refused to split it in Mar 2026). | (C) bulletin cited by GM Authority/PUTT; lawsuit https://pickuptrucktalk.com/2026/03/federal-judge-denies-motion-to-split-gm-lifter-lawsuit-over-afm-dfm-keeping-silverado-and-sierra-v8-class-action-intact/ |
| 8L90/8L45 torque-converter clutch shudder | 2015–2018 Silverado/Sierra with 8-speed | Shudder at 25–80 mph on light throttle | TSB 18-NA-355: full fluid exchange with Mobil 1 LV ATF HP | (A) https://static.nhtsa.gov/odi/tsbs/2020/MC-10174266-9999.pdf |
| 8-speed class action (Speerly v. GM) | 2015–2019 | — | Class certification **vacated** 9–7 by the Sixth Circuit sitting en banc, 27 June 2025 | (B) https://www.tuckerellis.com/alerts/sixth-circuit-vacates-class-certification-in-gm-transmission-defect-litigation-emphasizes-rigorous-element-by-element-analysis-under-rule-23/ ; https://www.insideclassactions.com/2025/07/09/en-banc-sixth-circuit-criticizes-certification-of-multi-state-class/ |
| Brake vacuum pump output drops (oil sludge on its screen) → reduced brake assist | 2014–2018 K2XX (3,456,111 vehicles including SUVs; Sierra 1500: 696,225) | Hard pedal, "Service brake assist" message | Recall **19V-645** (and 20V-603 for 2018): brake-module recalibration. Special Coverage N182202780 (6 years/72,000 miles) has **expired**. | (A) https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V645-3639.PDF ; https://static.nhtsa.gov/odi/tsbs/2019/MC-10160089-9999.pdf |
| 2.7T L3B block cracks | 2023 | Coolant/oil issues | Program N232415060: **engine replaced**; free until 31 Mar 2026 | (A) https://static.nhtsa.gov/odi/tsbs/2024/MC-10252980-0001.pdf |
| 2.7T highway shudder or surge | 2023–2025 | — | PIP6060 diagnostics | (A) https://static.nhtsa.gov/odi/tsbs/2025/MC-11018484-0001.pdf |
| 3.0 Duramax LM2 coolant control valve | 2021–2023 | Check-engine light, overheating | Special Coverage N252508340, **2023 model year only**, 15 years/150,000 miles | (C) PUTT https://pickuptrucktalk.com/2026/05/2021-2026-chevy-silverado-1500-known-problems-engine-failures-lifters-transmission-issues-and-recalls/ |
| 3.0 Duramax crankshaft thrust-bearing failure | Recent (reported Oct 2025) | Engine failure | Test via GM bulletin; no recall | (C) same PUTT article |
| 3.0 Duramax oil-pump belt ("wet" belt running in oil) | All | — | Replacement due around 200,000 miles; requires removing the transmission | (C) same PUTT article |

**Inspection checklist**
- **Every 2021+ 6.2:** VIN check for 25V-274 and the inspection result. Treat any knock or crankshaft/camshaft correlation codes as disqualifying.
- **5.3/6.2 cold start:** listen for lifter tick; scan for misfire history. Some owners disable DFM or AFM; check for tunes, which can affect warranty.
- **8-speed trucks:** light-throttle cruise test for shudder; ask for the TSB fluid-exchange invoice.
- **K2XX:** check brake-pedal effort and confirm 19V-645.
- **Duramax:** coolant-control-valve codes, DEF/DPF regeneration history, and records for the oil-pump belt.
- **Rust:** rocker panels and cab corners on K2XX, and brake lines.

### Ram 1500 — DS (2015–2018, sold as "Ram 1500 Classic" 2019–2024: 3.6 Pentastar V6, 5.7 HEMI, 3.0 EcoDiesel Gen 2 2014–2019; 8-speed ZF 8HP); DT (2019+: 3.6 eTorque mild hybrid, 5.7 HEMI with or without eTorque, 3.0 EcoDiesel Gen 3 2020–2023; 2025+ 3.0 Hurricane twin-turbo I6 in standard-output "SO" and high-output "HO" tunes; 5.7 HEMI returns for 2026)

**Verdicts**
- **DS 2015–2018 and Classic: Mixed, leaning weak.**
  - CR: 2015, 2016 and 2018 less reliable (A).
  - iSeeCars: Ram 1500 3.5%, the **lowest of all pickups** (A).
  - The 3.6 V6 with the 8HP is the simplest combination, but no evidence isolates it.
- **DT 2019–2022: Mixed.**
  - CR rates all four years less reliable; the 2019 shows 29 recalls (A).
- **DT 2023: Strong (with caveats).**
  - CR **much more reliable** (A).
  - J.D. Power 2026 VDS: Ram 1500 #1 in Large Light Duty (C, manufacturer claim consistent with J.D. Power coverage).
- **DT 2024: Mixed-plus.** CR average (A).
- **2025, Hurricane I6, first year: AVOID for now.**
  - CR **much less reliable** (A).
  - Multiple instrument-cluster recalls and Hurricane powertrain software TSBs.
- **Gen 2 EcoDiesel (2014–2019): AVOID** unless both the recall and the emissions fix are documented.
- **Gen 3 EcoDiesel (2020–2023):** limited evidence. Fuel-pump claims are forum-level (D). Rate Mixed.

**Best buys:** 2023–2024 DT with the 3.6 eTorque or the 5.7 HEMI.

**Avoid:** 2025 Hurricane; 2014–2019 EcoDiesel without VB1 and the emissions fix; any HEMI with persistent tick or misfire.

**Known failure points**

| Component | Years and engine | Symptom | Remedy / cost | Grade and source |
|---|---|---|---|---|
| HEMI roller lifter and camshaft lobe wear ("Hemi tick") | 5.7 and 6.4, 2014+ | Tick, misfire, metal in the oil | FCA STAR Case S1709000010 (2017) describes cam lobe and lifter roller wear. Class action Petro v. FCA (D. Del. 1:22-cv-00621): nationwide claims dismissed, some claims survive (Sept 2024). Cam and lifter repair about **$2,762–3,770** per RepairPal. | (C) https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml ; cost (C) via MotorBiscuit |
| Exhaust manifold bolts on cylinders 7/8 (a *different* cold-start tick) | 5.7 | Tick that fades as the engine warms | Bolt or stud repair | (D) |
| eTorque 48-volt battery and belt-driven motor-generator | 2019+ DT | Stalls at stops, start-stop faults | TSB 08-074-20 REV A (motor-generator noise); about $800–2,000 | (D) au7o |
| **EcoDiesel EGR cooler cracks → combustion in the intake manifold, fire** | 2014–2019 DS and Classic EcoDiesel (about 158,241) | Coolant loss; codes P0299/P2D2F | Recall **19V-757** (VB1): new EGR cooler, intake manifold if perforated. FCA data: 8,909 warranty EGR-cooler replacements. Class settlement Crawford v. FCA (E.D. Mich. 2:20-cv-12341, preliminary approval Sept 2025): 5-year warranty extension from the VB1 repair, and $3,000 for trucks that caught fire. | (A) https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V757-5258.pdf ; https://storage.courtlistener.com/recap/gov.uscourts.mied.348893/gov.uscourts.mied.348893.125.0.pdf |
| EcoDiesel emissions defeat-device settlement | 2014–2016 | — | Emissions software fix (AEM) plus an extended warranty: the greater of 10 years/120,000 miles from sale or 4 years/48,000 miles from the fix | (A) https://www.ecodieselsettlement.com/ |
| Tailgate striker misalignment → tailgate opens | 2019–2022 DT and HD (about 1,234,650) | — | Recall **22V-904** (ZB8): adjust | (A) https://static.nhtsa.gov/odi/rcl/2022/RCRIT-22V904-9676.pdf |
| Instrument cluster goes blank or fails | 2025–2026 Ram 1500 and HD | No gear or warning display | Recalls **25V-826** (72,509) and **26V-225** (65,348); software update or cluster replacement | (A) https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V826-8069.pdf ; https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V225-7641.pdf |
| Wrong "Inflate to 50 psi" message | 2025 Ram 1500 (10,396) | — | Recall **25V-231** | (A) https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V231-5472.pdf |
| Hurricane standard-output engine software | 2025 | Oil-pressure-control code P06DD, "Excessive Oil – Service Vehicle" message, stall at stops, cold-start misfires, low fuel-rail pressure | TSB 18-031-25 REV C (Rapid Service Update 25-220): PCM flash | (A) https://static.nhtsa.gov/odi/tsbs/2025/MC-11019620-0001.pdf ; dot.report mirror of the REV C |
| Hurricane high-output hardware | 2025 (built 16 Sep 2024 to 7 Jun 2025; and 1 Jun 2024 to 3 Mar 2025) | Misfire/lean/no-start; boost codes | TSBs: EVAP purge-hose latch; wastegate rod retention clips | (A, TSBs mirrored from NHTSA) |

**Inspection checklist**
- **HEMI:** a long cold-start idle and a hot-idle listen; scan misfire counters; ask for oil-change intervals.
- **eTorque:** warning messages and start-stop function.
- **EcoDiesel:** VIN check for VB1, check coolant level, ask for the emissions-fix and DEF/DPF records.
- **DT:** tailgate latch (22V-904), air suspension (if equipped), and all screens and electronics.
- **2025:** cluster recalls and Hurricane TSBs.
- **Tunes:** check for aftermarket tunes, common on EcoDiesel.

### Nissan Titan — 2nd gen (2016–2024: 5.6 V8 Endurance; 7-speed auto through 2019, 9-speed auto 2020+; Titan XD with 5.0 Cummins diesel 2016–2019)

**Verdict: Mixed, because data is thin.**
- CR: 2018 average; other years have no verdict for lack of data (A).
- iSeeCars: 9.9% (2025), 14.8% (2024), below the truck average (A).
- The 2020–2023 Titan is in both 9-speed park-pawl recalls, **22V-457** and **22V-671** (A; see Frontier).
- The Titan XD Cummins has no evidence either way in this research.

**Best buy:** 2017–2019 5.6 V8 with the 7-speed, if you accept thin data. **Caution:** 2020+ until both park recalls are confirmed.

**Inspection checklist:** park-recall completion; rear axle and differential; for the XD diesel, emissions and DEF.

---
## 4. Heavy-duty pickups (short section)

The main question with heavy-duty trucks is the diesel fuel system, in particular the **Bosch CP4 high-pressure fuel pump**. When a CP4 fails it sheds metal into the whole fuel system; a class-action complaint puts the resulting repair at $10,000 or more (C, allegation).

### Ford Super Duty (F-250/F-350): 6.7 Power Stroke diesel, 6.2 gas V8 (through 2022), 7.3 "Godzilla" gas V8 (2020+), 6.8 gas V8 (2023+)

**CP4 fuel pump**
- **Recall 24V-957** (Ford 24S78, December 2024) covers 2020–2022 6.7 diesels with the CP4 "RP7" pump. Ford blamed aged biodiesel and reported 3,070 warranty reports and 498 field reports. The remedy is **PCM software only** (a change to the fuel-system cooling strategy). Ford switched production to the "RP8" pump on 23 Aug 2021 (A). https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V957-5400.pdf
- The recall covers about 295,449 trucks (C, Diesel Army). https://www.dieselarmy.com/news/ford-recalls-295449-6-7l-diesel-super-duty-trucks-over-cp4-issue/
- A separate class action on CP4-equipped 2011-onward 6.7 trucks (E.D. Mich. 2:19-cv-12365) survived Ford's motion to dismiss in March 2023 (C, allegation). https://storage.courtlistener.com/recap/gov.uscourts.mied.340794/gov.uscourts.mied.340794.85.0.pdf
- Whether Ford dropped the CP4 for 2023+ is **unresolved**; see the contradiction log.

**Other evidence**
- J.D. Power: the 2021 F-250 SRW won Large Heavy Duty (A).
- iSeeCars 2025: F-250 18.6%, F-350 18.3%, F-450 28.5% (A).
- CR 2026: the F-250 is second-worst among heavy-duty trucks, with steering and suspension ("death wobble") the recurring trouble spots; CR's history shows improvement for 2025 (C, coverage).
- PUTT ranks the Super Duty the most reliable heavy-duty truck overall, calls the 2023+ 3rd-gen 6.7 "the most reliable iteration so far," and reports recalls for improperly hardened rear axle shafts and gas-engine fuel pumps (C). https://pickuptrucktalk.com/2026/07/most-reliable-heavy-duty-truck-ranked-the-winner-may-surprise-you/
- **7.3 Godzilla:** no documented systemic defect was found in this research, so there is not enough evidence to rate it.

**Verdict: Mixed.** A 7.3 gas truck avoids diesel fuel-system risk. On any 2011–2022 6.7 diesel, check fuel-filter water-separator history and whether the pump has been replaced.

### Chevrolet Silverado / GMC Sierra 2500HD and 3500HD: 6.6 Duramax L5P diesel (2017+), 6.6 gas L8T (2020+)

- **J.D. Power Large Heavy Duty awards:** Silverado 2500HD for the 2017, 2018, 2019, 2020 and 2022 model years (A).
- **iSeeCars 2025:** Sierra 2500HD 22.0%, Silverado 2500HD 16.0%, Silverado 3500HD 17.4% (A).
- **CR 2026:** the Sierra 2500HD is the least reliable heavy-duty truck, with in-car electronics the weak spot, while the Silverado HD improved (C, coverage).
- **10-speed valve-body wear → momentary rear-wheel lockup:** recall **24V-797** (N242454440) covers **461,839** 2020–2022 heavy-duty diesel trucks and SUVs. The remedy is TCM software that detects wear and limits the transmission to 5th gear. A later recall, 26V-085, added 43,732 2022 SUVs (A). https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V797-7588.PDF
- **LML Duramax (2011–2016) CP4:** a $50 million class settlement received final approval on 6 May 2025 (A-grade court record via class counsel). https://www.hbsslaw.com/cases/cp4-fuel-pump-defect-gm-ford
- **L5P:** DPF trouble-code guidance in bulletin PIP5936 (A). The L5P uses a different pump family; no recall was found.

**Verdict: Strong-to-Mixed.** The best buy is the 2017–2019 L5P or 6.6 gas; for 2020–2022 diesels, confirm 24V-797 was done.

### Ram 2500/3500: 6.7 Cummins; 6.4 HEMI gas

- **Recall 21V-880** (Y78, November 2021) covers about **222,400** 2019–2020 Ram 2500/3500/4500/5500 Cummins trucks built 11 Oct 2018 to 13 Nov 2020. The high-pressure fuel pump can fail early; the remedy is a new pump design (PCM calibration labelled "CP3.3") plus fuel-system inspection and replacement. FCA counted 6,399 warranty claims (A). https://static.nhtsa.gov/odi/rcl/2021/RCLRPT-21V880-8784.PDF ; https://static.nhtsa.gov/odi/rcl/2021/RCRIT-21V880-9525.pdf
- **iSeeCars:** Ram 3500 is the #1 truck at 39.7% (2025) and 31.9% (2026) (A, and C for 2026).
- **CR 2026:** the Ram 2500 sits in the middle; 2025 introduced a new high-output Cummins with a new 8-speed transmission, and early engines were recalled for excessive valvetrain lash (C, coverage).
- **HEMI tick litigation** also names the 2014–2022 Ram 2500/3500 (C, allegation).

**Verdict: Strong for a 2021–2024 Cummins** (built after the recall window; the Cummins returned to the CP3 pump, C). **Caution:** 2019–2020 without 21V-880 done, and the 2025 redesign.

**Heavy-duty inspection checklist**
- Fuel-pump replacement records.
- Water-in-fuel history.
- DEF/DPF/EGR service and regeneration frequency.
- Aftermarket "delete" tunes. These are illegal, void the emissions warranty and can fail inspection.
- Fifth-wheel or gooseneck wear.
- Front-end shimmy (Super Duty).
- 10-speed shift quality (GM).
- Frame and brake-line rust.

---

## 5. Segment rankings, avoid list, downgrades, contradictions, falsification

### 5.1 Segment ranking of best buys

The last column is the weakest grade among the claims each ranking depends on.

**Midsize and compact**

| # | Pick (model, years, powertrain) | One-line rationale | Weakest load-bearing grade |
|---|---|---|---|
| 1 | **Toyota Tacoma 2018–2019 and 2021–2023, 3.5 V6 (or 2.7 I4)** | CR M+/MM every year; J.D. Power Midsize wins for 2020–2022 MY; iSeeCars about 25%; only recall-fixable issues (24V-152 on 2022–2023) | A |
| 2 | **Toyota Tacoma 2015, 4.0 V6** | CR M+; J.D. Power 2015 MY winner; **frame-program check required** (K0D/ZKA) | A |
| 3 | **Nissan Frontier 2015–2019, 4.0 V6** | CR M+ (2015, 2017, 2019); four straight J.D. Power Midsize wins; no engine or transmission defect found for these years. **Caveat: iSeeCars longevity only 5%.** | A (the longevity contradiction is also A) |
| 4 | **Nissan Frontier 2024–2025, 3.8 V6 / 9-speed** | CR 2024 MM, 2025 M+; on CR's used list; the park recalls end with 2023. Limited mileage history. | A |
| 5 | **Honda Ridgeline 2020–2021 and 2023, 3.5 V6 / 9-speed** | CR M+ (2020, 2021, 2023); iSeeCars 14.7%; outside the rod-bearing recall and investigation; 9HP shift class action pending | C (class action is an allegation) |
| 6 | **Ford Maverick 2023–2025, hybrid or 2.0T** | CR M+ three years running; recalls are software or battery fixes | A |
| 7 | **Toyota Tacoma 2024–2025, 2.4T** | CR M+ both years and #1 midsize for 2026, but early 2024 transmission failures and a new engine | B |
| 8 | **Hyundai Santa Cruz 2024–2025** | On CR's used list (coverage only); DCT software campaign LA12 | C |

Mixed, buy only with records: Tacoma 2016–2017 and 2020; Ranger 2021; Colorado/Canyon 2016, 2018, 2022; Frontier 2020.

**Full-size light duty**

| # | Pick | Rationale | Weakest grade |
|---|---|---|---|
| 1 | **Toyota Tundra 2015–2021, 5.7 V8 (4.6 V8 acceptable)** | CR M+/MM all seven years; J.D. Power Large Light Duty wins for 2016, 2018, 2019 and 2021; iSeeCars 30–37%; no engine or transmission recall; known costs are the air-injection pump and cam-tower leak | A |
| 2 | **Ram 1500 2023 DT, 3.6 eTorque or 5.7** | CR MM for 2023; J.D. Power 2026 #1 (2023 MY). HEMI-tick risk (C) and poor iSeeCars longevity (A) cap it at Strong-minus. | C |
| 3 | **Ford F-150 2023–2024, 5.0 V8 or 2.7 EcoBoost** | CR average both years; F-150 tops CR's 2026 full-size ranking; confirm 25V-512 on Max Tow trucks | A for the CR verdict / C for the ranking |
| 4 | **Chevrolet Silverado / GMC Sierra 1500 2019–2024, 5.3 L84 or 3.0 Duramax (not 6.2)** | Strong J.D. Power record but CR less reliable every year; lifter class action pending; the Duramax has cost items | A for CR (negative) — **Mixed only** |
| 5 | **Toyota Tundra 2025 (V35A with improved bearing) or 2022–2024 with documented engine replacement** | CR 2025 M+; Toyota "continues to monitor"; long-term data unproven | A / B |

**Heavy duty (brief):** 1. Ram 2500/3500 2021–2024 6.7 Cummins; 2. Silverado/Sierra 2500HD 2017–2019 L5P or 6.6 gas (2020–2022 with 24V-797 done); 3. Super Duty 7.3 gas, or a 6.7 diesel with pump records. All B/C-level evidence.

### 5.2 Avoid list

| Truck | Why | Grade |
|---|---|---|
| **Toyota Tundra 2022–2024, non-hybrid V35A, without documented engine replacement or clearance** | Recalls 24V-381, 25V-767 and 26V-320 (main-bearing debris); CR 2022 LL, 2023–2024 L | A |
| **Chevrolet Silverado / GMC Sierra 1500 with the 6.2 L87, 2021–2026** | Recall 25V-274 covers about 600,000 vehicles; EA26005 covers 997,743 with failures after the remedy, including after new engines | A / B |
| **Ford F-150 PowerBoost hybrid 2021–2022** | CR score 4/100 in 2022 | B |
| **Ram 1500 2025, Hurricane I6** | CR LL; cluster recalls; engine-software TSBs | A |
| **Ram 1500 EcoDiesel 2014–2019** without VB1 and the emissions fix | EGR-cooler fire recall 19V-757; emissions settlement | A |
| **Chevrolet Colorado / GMC Canyon 2023–2025** | CR L/L/pred-LL; worst in CR's 2026 midsize ranking; 2023 2.7T block-crack engine program | A |
| **Jeep Gladiator 2020–2023** | CR less reliable every year; steering shimmy (damper warranty extension) | A |
| **Nissan Frontier 2021–2023** | CR less reliable; two 9-speed park recalls | A |
| **Honda Ridgeline 2017–2019** | Rod-bearing recall 23V-751 (2017 and 2019) plus open investigation PE25008; CR 2018–2019 less reliable | A |
| **Ford F-150 2015–2017 with 6R80**, until 26V-237 is done | Unexpected downshift and rear-wheel lockup; EA26001 | A |
| **Ford F-150 2017–2020 3.5 EcoBoost** without phaser records (caution, not strict avoid) | Rattle-program coverage expired Jan 2023 | A |
| **Ram 2500/3500 2019–2020 Cummins** without 21V-880 | CP4-type pump failure | A |
| **Hyundai Santa Cruz 2022 2.5T** without Recall 236 | DCT oil-pump failures | A |

### 5.3 Removed or downgraded despite reputation

1. **Toyota Tundra 2022–2024: downgraded from the brand's "Top pick" halo to Avoid unless remedied.**
   - The 2015–2021 V8 Tundra is the best-evidenced full-size truck in this whole study. The 3rd-gen V35A fails the model-year and powertrain test: three recalls totalling about 270,000 V35A vehicles worldwide, a remedy that changed from engine replacement to software inspection, CR 2022 much less reliable, and no J.D. Power placing for the 2023 model year.
   - Brand strength does not transfer. Toyota was CR's #1 brand for 2026, yet the Tundra line has to be judged by year and engine.
   - The i-FORCE MAX hybrid is excluded from the engine recalls, but CR's poor verdicts for 2022–2024 cover both powertrains, so it is only "Mixed."
2. **Honda Ridgeline 2017–2019: downgraded.** A Honda V6 with a strong reputation, but a rod-bearing recall plus an open NHTSA investigation of failures *outside* the recall.
3. **GM 6.2 L87: downgraded from the "premium engine" choice to Avoid** on the Silverado/Sierra 1500, 2021–2026.
4. **Frontier 2021–2023: downgraded** relative to the Frontier's excellent 2015–2019 record. The 9-speed park recalls and CR's L verdicts break the streak until 2024.
5. **Tacoma 2024 (first year of the 4th gen): kept at Strong, not Top.** Despite the Tacoma name, it had early transmission failures and brake-hose and cluster recalls. CR's M+ rating supports Strong.
6. **Silverado/Sierra 1500: J.D. Power reputation not enough.** Repeated J.D. Power Large Light Duty wins, but CR has rated every 2015–2024 year less reliable. The truck is kept at Mixed and is not promoted.

### 5.4 Contradiction log

| # | Conflict | Sources | Resolution |
|---|---|---|---|
| 1 | iSeeCars 2026: Tacoma 28.2% and Tundra 25.0%, or the reverse? | TFLcar vs Forbes (both coverage) | Unresolved; the full 2026 table could not be retrieved (iseecars.com was blocked, and the crawler returned the 2025 page). The 2025 full table is used (A). |
| 2 | Frontier 2015–2019: excellent CR and J.D. Power results, but iSeeCars longevity only 5.0–9.6% (second-lowest) | CR (A), J.D. Power (A) vs iSeeCars (A) | These measure different things: problem rates over 3 years versus the share of trucks surviving to 250k. Possible explanations include buyer and usage mix, fewer heavy-use miles, or older-generation data (inference). I kept Top pick on reliability and flagged the longevity weakness. |
| 3 | Ram 1500: J.D. Power 2026 #1 and CR 2023 MM, versus CR calling the Ram 1500 among the least reliable vehicles and iSeeCars 3.5% (lowest) | J.D. Power/CR year pages vs CR brand release and iSeeCars | Different model years. The 2023 DT is good; 2019–2022 and 2025 are poor. iSeeCars reflects older generations. |
| 4 | F-150 2017: J.D. Power Large Light Duty winner, but CR less reliable | J.D. Power (A) vs CR (A) | The surveys differ (J.D. Power counts problems per 100 vehicles at 3 years; CR uses member surveys weighted toward serious problems). Rated Mixed. |
| 5 | Silverado: J.D. Power wins (2015, 2020 Sierra, 2022 LTD, 2026 2nd) vs CR less reliable every year | same | Rated Mixed. The L87 engine defect decides the 6.2. |
| 6 | Tundra 2025: CR M+, yet 26V-320 shows defect periods continuing into August 2024 builds | CR (A) vs NHTSA (A) | CR strips out recall-only responses (C). Rated Provisional/Mixed. |
| 7 | J.D. Power 2025 VDS: a search summary claimed the Tundra got a model-level award, but J.D. Power's own page lists the 2022 Silverado 1500 LTD as the Large Light Duty winner | Search snippet vs jdpower.com (A) | J.D. Power's own page used. |
| 8 | Ford CP4 on the 2023+ 6.7 Power Stroke: FourWheelTrends (D) says Ford switched to a new "DCR" pump in 2023; PUTT (C) says the CP4.2 remains a potential weakness | D vs C | Unresolved; no primary Ford document found. Buyers should check the pump type by part number. |
| 9 | Frontier years on CR's used list: Jalopnik's text says reliable "since its 2022 redesign" yet lists only 2024–2025 | Jalopnik (C) vs CR pages (A: 2022–2023 L) | CR's own pages used: 2022–2023 are below average. |
| 10 | 2024 Tacoma transmissions: The Drive reports repeated failures; PUTT says complaints faded; CR M+ | B vs C vs A | Consistent with an early-build problem. Kept at Strong. |
| 11 | "Gladiator frame weld recall" lead | Brief vs NHTSA | Only **Wrangler** weld recalls found (18V-675, 20V-042) and a 2019 NHTSA probe of Wrangler frames. **Not verified for the Gladiator.** |
| 12 | The iSeeCars method changed from 2024 to 2025 (truck average 19.4% → 13.0%; F-150 15.8% → 5.9%; Ridgeline 25.8% → 14.7%) | iSeeCars (A) | Use relative rank, not absolute percentages, across editions. |

### 5.5 Falsification pass log (every Top pick)

Budget note: the WebSearch tool hit its session cap (200 calls) partway through, so later falsification searches used Exa semantic search.

1. **Toyota Tundra 2015–2021, 5.7 V8**
   - **Searched (Exa):** "Toyota Tundra 2014-2021 5.7 V8 problems recall engine failure transmission failure class action warranty extension."
   - **Found:**
     - No engine or transmission recall and no class action for 2014–2021.
     - The air-injection pump programs apply only to 2007–2013 (ZTQ, ZG6, LSC D0E, the last expiring 31 May 2016).
     - The cam-tower leak has no program; it costs about $2,000–5,600 (D).
     - The frame program was 2007–2008 only.
     - The 2022+ recalls (24V-125, 23V-566, V35A) do not apply.
   - **Also checked:** WebSearch "Tundra i-FORCE MAX hybrid problems wastegate turbo recall" (3rd gen only).
   - **Result: Top pick survives.**
2. **Toyota Tacoma 2018–2019 / 2021–2023 (and 2015)**
   - **Searched:** WebSearch "3rd gen Tacoma 2016 2017 transmission gear hunting TSB 6-speed automatic ECU reflash rear differential leak TSB"; Exa "Toyota Tacoma 2016-2023 class action lawsuit transmission OR engine OR rear differential OR frame; 2.7 3.5 2GR-FKS engine failure Tacoma warranty extension"; WebSearch "Toyota Tacoma frame rust settlement years covered…".
   - **Found:**
     - The shift TSB and differential recall affect 2016–2017 only.
     - **Frame program K0D/ZKA covers 2011–2017** (so it touches the 2015 pick and 2016–2017).
     - Recall 24V-152 (2022–2023 rear axle) is fixable by recall.
     - Only minor 2GR TSBs.
     - No Tacoma engine or transmission class action was found; the UA80 transmission suit concerns other Toyota models.
   - **Result: Top pick survives**, with a frame check on 2015 and 24V-152 completion on 2022–2023.
3. **Nissan Frontier 2015–2019 4.0 V6, and 2024–2025**
   - **Searched (Exa):** "Nissan Frontier 2015-2019 4.0 VQ40 problems timing chain guide recall class action; 2024 2025 Frontier problems recall."
   - **Found:**
     - The VQ40 timing-chain class actions and TSBs cover 2005–2010.
     - The 9-speed park recalls cover 2020–2023 only.
     - Nothing systemic for 2015–2019 or 2024–2025.
   - **Contradiction:** the low iSeeCars longevity figure (logged above).
   - **Result: Top pick survives on reliability, with a flag.**
4. **Honda Ridgeline 2020–2023** (ranked Strong, but tested)
   - **Searched (Exa):** "Honda Ridgeline 2020 2021 2022 2023 9-speed transmission problems recall engine failure class action."
   - **Found:** the Moore v. Honda 9HP shift class action (C); the rod-bearing recall and investigation do not cover 2020+.
   - **Result: Strong, not Top.**
5. **Ford Maverick 2023–2025** (Strong)
   - **Searched (Exa):** "Ford Maverick hybrid recall loss of motive power NHTSA 2022 2023 2024 Maverick recalls list."
   - **Found:** the 12-volt battery recalls (2022–2023; fixed with AGM batteries) and the hybrid software recall (small population). No hardware engine or transmission defect found.
   - **Result: Strong survives.**
6. **Earlier leads the brief asked me to verify or refute**
   - **Verified:** Tundra V35A recalls (three waves); 2024 Tacoma brake-hose recall and early transmission failures; 3rd-gen Tacoma hunting TSB and differential recall; F-150 phaser (2017–2020) with programs expired; F-150 5.0 oil consumption 2018–2020; F-150 2021–2023 hub-bolt recall plus the 2023–2025 expansion; GM lifter litigation; GM L87 recall plus EA26005; GM 8-speed shudder TSB; HEMI tick litigation; EcoDiesel EGR/emissions; Ram DT tailgate recall; Ridgeline J35 recall; Frontier 9-speed recalls; Gladiator steering damper extension; Maverick hybrid recalls.
   - **Refined:** the Tacoma rear-axle recall is 2022–2023 (24V-152), not 2024.
   - **Not verified:** a Gladiator frame-weld recall (Wrangler only).
   - **Colorado 2.8 Duramax:** only emission-software recall 17337 was found. DPF/EGR failure patterns are forum-level (D), so not load-bearing.

---

## 6. Full source list (grade — URL)

**J.D. Power**
- (A) https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/
- (A) https://www.jdpower.com/cars/ratings/dependability/2025
- (A) https://www.jdpower.com/cars/ratings/dependability/2024
- (A) https://www.jdpower.com/cars/ratings/dependability/2023
- (A) https://www.jdpower.com/cars/ratings/dependability/2022
- (A) https://www.jdpower.com/cars/ratings/dependability/2021
- (A) https://www.jdpower.com/cars/ratings/dependability/2020
- (A) https://www.jdpower.com/cars/ratings/dependability/2019
- (A) https://www.jdpower.com/cars/ratings/dependability/2018
- (C) https://www.stellantisfleet.com/news-and-events/stellantis-news/ram-1500-earns-no-1-ranking-in-jd-power-2026-us-vehicle-dependability-study-leading-large-light-duty-pickup-segment.html
- (C) https://www.carpro.com/blog/j.d.-power-2026-vehicle-dependability-study-results

**Consumer Reports (own pages)**
- (A) https://www.consumerreports.org/media-room/press-releases/2025/12/consumer-reports-releases-its-2026-automotive-brand-report-card-the-comprehensive-analysis-of-vehicle-quality-to-help-guide-car-shoppers-amid-steep-prices/
- (A) https://www.consumerreports.org/cars/pickup-trucks/most-reliable-used-pickup-trucks-a7737894754/ (paywalled list; intro only)
- (A) Model-year reliability pages, pattern https://www.consumerreports.org/cars/<make>/<model>/<year>/reliability/, fetched for:
  - toyota/tacoma 2015–2025
  - toyota/tundra 2015–2025
  - ford/f-150 2015–2025
  - chevrolet/silverado-1500 2015–2025
  - ram/1500 2015–2025
  - chevrolet/colorado 2015–2025
  - ford/ranger 2019–2025
  - ford/maverick 2022–2025
  - nissan/frontier 2015, 2017, 2019–2025
  - honda/ridgeline 2017–2025
  - jeep/gladiator 2020–2023
  - nissan/titan 2018, 2020–2022
  - hyundai/santa-cruz 2022–2023
  - Example: https://www.consumerreports.org/cars/toyota/tundra/2022/reliability/

**Coverage of CR data**
- (C) https://www.jalopnik.com/2114022/most-reliable-used-pickup-trucks-consumer-reports/
- (C) https://pickuptrucktalk.com/2025/12/consumer-reports-least-reliable-full-size-trucks-for-2026/
- (C) https://pickuptrucktalk.com/2025/12/consumer-reports-least-reliable-midsize-trucks-for-2026/
- (C) https://pickuptrucktalk.com/2026/07/consumer-reports-least-reliable-heavy-duty-trucks-for-2026/
- (C) https://pickuptrucktalk.com/2025/12/improved-toyota-tundra-scores-help-toyota-reclaims-consumer-reports-reliability-crown-despite-engine-failure-recalls/
- (B, Edmunds reporting CR data) https://www.edmunds.com/car-news/is-the-ford-150-hybrid-the-least-reliable-vehicle-you-can-buy.html

**iSeeCars**
- (A) https://www.iseecars.com/longest-lasting-cars-study (2025 edition as crawled)
- (A, syndicated iSeeCars text) https://www.wboy.com/automotive/the-longest-lasting-cars-trucks-and-suvs-to-reach-250000-miles-and-beyond-2/
- (C) https://tflcar.com/2026/09/vehicles-most-likely-to-make-250000-miles-study/
- (C) https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/
- (C) https://stickshifting.com/the-20-longest-lasting-cars-trucks-and-suvs-of-2026
- (C) https://www.detroitnews.com/story/business/autos/2026/07/08/the-best-trucks-for-longevity-rated-most-likely-to-reach-250k-miles/90849777007/

**NHTSA recall and investigation documents (all A)**

*Toyota*
- Tundra 24V-381: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V381-6004.PDF ; https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V381-0274.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCRIT-24V381-9130.pdf
- Tundra 25V-767: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf
- Tundra 26V-320: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf
- Tundra 24V-125: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V125-8877.PDF
- Tacoma 17V-285: https://static.nhtsa.gov/odi/rcl/2017/RMISC-17V285-9745.pdf ; https://static.nhtsa.gov/odi/rcl/2017/RCONL-17V285-9890.pdf ; https://static.nhtsa.gov/odi/rcl/2017/RCMN-17V285-1424.pdf
- Tacoma 24V-152: https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V152-8115.pdf
- Tacoma 25V-058: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V058-3436.pdf

*GM*
- 25V-274: https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V274-1938.PDF
- 24V-797: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V797-7588.PDF
- 19V-645: https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V645-3639.PDF ; https://static.nhtsa.gov/odi/rcl/2019/RCAK-19V645-5441.pdf
- 20V-603: https://static.nhtsa.gov/odi/rcl/2020/RMISC-20V603-9655.pdf
- PE18-012: https://static.nhtsa.gov/odi/inv/2018/INIM-PE18012-74378.pdf

*Ford*
- 23V-896: https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V896-5481.PDF ; https://static.nhtsa.gov/odi/rcl/2023/RCMN-23V896-6808.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V896-5442.pdf
- 25V-512: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V512-5387.pdf
- 26V-237: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V237-6816.pdf
- EA26001: https://static.nhtsa.gov/odi/inv/2026/INOA-EA26001-10007.pdf
- 24V-444: https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V444-8849.pdf
- 22V-188: https://static.nhtsa.gov/odi/rcl/2022/RCLRPT-22V188-8945.PDF ; https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V188-3445.pdf
- 24V-330: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V330-4801.PDF ; https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V330-2971.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCONL-24V330-9969.pdf
- 25V-881: https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V881-0526.pdf
- 24V-957: https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V957-5400.pdf
- 26V-238: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V238-6269.pdf ; https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V238-6079.pdf
- 19V-366: https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V366-1915.PDF
- 24V-848: https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V848-6116.pdf

*Stellantis (Ram / Jeep)*
- 19V-757: https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V757-5258.pdf ; https://static.nhtsa.gov/odi/rcl/2019/RCONL-19V757-6556.pdf
- 21V-880: https://static.nhtsa.gov/odi/rcl/2021/RCLRPT-21V880-8784.PDF ; https://static.nhtsa.gov/odi/rcl/2021/RCRIT-21V880-9525.pdf ; https://static.nhtsa.gov/odi/rcl/2021/RIONL-21V880-5434.pdf
- 22V-904: https://static.nhtsa.gov/odi/rcl/2022/RCRIT-22V904-9676.pdf
- 25V-826: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V826-8069.pdf
- 26V-225: https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V225-7641.pdf
- 25V-231: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V231-5472.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V231-9989.pdf
- 18V-675: https://static.nhtsa.gov/odi/rcl/2018/RCLRPT-18V675-1532.PDF ; https://static.nhtsa.gov/odi/rcl/2018/RCRIT-18V675-4839.pdf
- 20V-042: https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V042-9046.PDF

*Nissan*
- 22V-457: https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V457-8494.pdf
- 22V-671: https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V671-7110.pdf ; https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V671-5060.pdf ; https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V671-4083.pdf ; https://static.nhtsa.gov/odi/rcl/2022/RCRIT-22V671-3473.pdf

*Honda*
- 23V-751: https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V751-5416.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V751-8790.pdf
- PE25008: https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf ; https://static.nhtsa.gov/odi/inv/2025/INIM-PE25008-18816.pdf
- RQ24013 (closed): https://static.nhtsa.gov/odi/inv/2024/INCLA-RQ24013-85911.pdf

*Hyundai*
- 22V-197: https://static.nhtsa.gov/odi/rcl/2022/RCAK-22V197-6376.pdf

**Manufacturer TSBs, warranty extensions and programs (A unless noted)**

*Toyota*
- T-SB-0077-16: https://static.nhtsa.gov/odi/tsbs/2016/MC-10132910-9999.pdf
- Tacoma LSC K0D / CSP ZKA frame program: https://static.nhtsa.gov/odi/tsbs/2024/MC-10251755-9999.pdf
- Warranty Enhancement ZG6 (air-injection pumps): https://static.oemdtc.com/NHTSA-PDFs/MC-10132382-9999.pdf
- CSP ZTQ (air-injection pumps): http://media.fixed-ops.com/Toy_Campaigns/ZTQ.pdf

*Ford*
- TSB 18-2305: https://static.nhtsa.gov/odi/tsbs/2018/MC-10148706-9999.pdf
- CSP 21B10: https://static.nhtsa.gov/odi/tsbs/2021/MC-10189763-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2021/MC-10201643-0001.pdf
- TSB 19-2365: https://static.nhtsa.gov/odi/tsbs/2019/MC-10169811-0001.pdf

*GM*
- TSB 18-NA-355: https://static.nhtsa.gov/odi/tsbs/2020/MC-10174266-9999.pdf
- Program N232415060 (2.7T block): https://static.nhtsa.gov/odi/tsbs/2024/MC-10252980-0001.pdf
- Emission recall N232427950: https://static.nhtsa.gov/odi/tsbs/2024/MC-10248331-0001.pdf
- PIP6060: https://static.nhtsa.gov/odi/tsbs/2025/MC-11018484-0001.pdf
- PIP5936: https://static.nhtsa.gov/odi/tsbs/2023/MC-10240794-9999.pdf
- Special Coverage N182202780: https://static.nhtsa.gov/odi/tsbs/2019/MC-10160089-9999.pdf
- Emission recall 17337 (C, mirror): https://dot.report/bulletins/10137159

*Stellantis*
- Jeep XF1 steering damper extension: https://static.nhtsa.gov/odi/tsbs/2024/MC-11010476-0001.pdf
- Jeep TSB 08-074-20: https://static.nhtsa.gov/odi/tsbs/2020/MC-10183094-9999.pdf
- Ram Hurricane TSB 18-031-25: https://static.nhtsa.gov/odi/tsbs/2025/MC-11019620-0001.pdf
- Ram TSBs (NHTSA mirror): https://static.oemdtc.com/NHTSA-PDFs/MC-11024560-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-11022171-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-11017151-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-11032821-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-11020840-0001.pdf

*Hyundai*
- Recall 236: https://autoservice.hyundaiusa.com/campaign236
- DCT replacement TSB: https://static.nhtsa.gov/odi/tsbs/2023/MC-10237182-0001.pdf
- LA12: https://static.nhtsa.gov/odi/tsbs/2026/MC-11030324-0001.pdf

*Settlements*
- EcoDiesel emissions settlement: https://www.ecodieselsettlement.com/

**Court records and class actions** (grade C as allegations unless a court order; court orders A)
- (A order) https://storage.courtlistener.com/recap/gov.uscourts.mied.348893/gov.uscourts.mied.348893.125.0.pdf (Crawford v. FCA, EGR settlement preliminary approval)
- (C) https://www.classaction.org/media/crawford-v-fca-us-llc-notice.pdf
- (A order) https://storage.courtlistener.com/recap/gov.uscourts.mied.340794/gov.uscourts.mied.340794.85.0.pdf (Ford CP4; motion to dismiss mostly denied)
- (C) https://www.hbsslaw.com/cases/cp4-fuel-pump-defect-gm-ford (GM CP4 $50M settlement, final approval 6 May 2025)
- (A order) https://www.govinfo.gov/content/pkg/USCOURTS-ilnd-1_19-cv-05045/pdf/USCOURTS-ilnd-1_19-cv-05045-2.pdf (10R80)
- (C) https://www.classaction.org/media/o-connor-v-ford-motor-company.pdf
- (C) https://casefilingsalert.com/wp-content/uploads/2023/10/Ford-Charged-re-Defective-Transmission.pdf (McCabe v. Ford)
- (B) https://www.tuckerellis.com/alerts/sixth-circuit-vacates-class-certification-in-gm-transmission-defect-litigation-emphasizes-rigorous-element-by-element-analysis-under-rule-23/
- (B) https://www.insideclassactions.com/2025/07/09/en-banc-sixth-circuit-criticizes-certification-of-multi-state-class/
- (B) https://www.ballardspahr.com/insights/alerts-and-articles/2025/07/one-size-fits-none-sixth-circuit-demands-state-by-state-analysis-in-auto-defect-class-actions
- (C) https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml (Petro v. FCA)
- (C) https://www.hondatransmissionlawsuit.com/
- (C) https://www.classaction.org/media/moore-et-al-v-american-honda-motor-co-et-al.pdf
- (C) https://pickuptrucktalk.com/2026/03/federal-judge-denies-motion-to-split-gm-lifter-lawsuit-over-afm-dfm-keeping-silverado-and-sierra-v8-class-action-intact/
- (C) https://topclassactions.com/lawsuit-settlements/lawsuit-news/nissan-agrees-settle-timing-chain-defect-class-action-lawsuit/
- (C) https://www.carcomplaints.com/news/2022/nissan-canada-timing-chain-class-action-lawsuit-certified.shtml
- (C) https://storage.courtlistener.com/recap/gov.uscourts.mad.184388.1.0.pdf (VQ40 complaint, 2005–2010)
- (C) https://topclassactions.com/lawsuit-settlements/lawsuit-news/toyota-settles-rust-prone-truck-frame-class-action-lawsuit/

**Trade press**
- The Drive:
  - (B with TFL) https://www.thedrive.com/news/toyota-wont-replace-every-recalled-tundra-v6-and-some-owners-are-fed-up
  - (B with Autoblog/PUTT) https://www.thedrive.com/news/2024-toyota-tacoma-owners-keep-reporting-transmission-failures
  - (C) https://www.thedrive.com/news/new-2024-2025-toyota-tacoma-brake-recall-dents-the-trucks-off-road-creds
  - (C) https://www.thedrive.com/news/29962/nhtsa-opens-investigation-on-2018-2019-jeep-wrangler-over-faulty-frame-welds
- TFLtruck:
  - (B with The Drive) https://tfltruck.com/2026/06/toyota-tundra-engine-recall-update-news/
  - (C) https://tfltruck.com/2025/02/toyota-tacoma-recall-rear-brake-hose-leak-news/
- PickupTruckTalk (PUTT), each C:
  - https://pickuptrucktalk.com/2026/05/second-toyota-tundra-engine-recall-postponed-again-because-company-incredibly-still-doesnt-have-a-fix-after-4-years/
  - https://pickuptrucktalk.com/2026/06/looks-like-toyota-might-have-been-right-tundra-engine-teardown-finds-manufacturing-debris/
  - https://pickuptrucktalk.com/2026/03/2024-2026-toyota-tacoma-known-problems-transmission-engine-small-gripes/
  - https://pickuptrucktalk.com/2019/02/toyota-tacoma-engine-transmission-issues/
  - https://pickuptrucktalk.com/2026/05/2021-2026-chevy-silverado-1500-known-problems-engine-failures-lifters-transmission-issues-and-recalls/
  - https://pickuptrucktalk.com/2026/02/most-reliable-2026-truck-is-ram-1500-chevy-silverado-next-toyota-misses-out-jd-power-study/
  - https://pickuptrucktalk.com/2026/07/most-reliable-heavy-duty-truck-ranked-the-winner-may-surprise-you/
- GM-Trucks.com and CarBuzz, together B on EA26005:
  - https://www.gm-trucks.com/nhtsa-gm-62l-v8-engine-investigation-expands/
  - https://carbuzz.com/gm-l87-v8-engine-failure-nhtsa-investigation-august-2026/
- Other trade press, each C:
  - https://www.dieselarmy.com/news/ford-recalls-295449-6-7l-diesel-super-duty-trucks-over-cp4-issue/
  - https://www.cbsnews.com/news/toyota-recall-tacoma-trucks-rear-axle-defect-2024/
  - https://www.autoevolution.com/news/toyota-recalls-228000-tacoma-pickups-over-potential-rear-differential-oil-leak-117312.html
  - https://www.worktruckonline.com/news/study-shows-which-trucks-will-last-over-250k-miles
  - https://www.slashgear.com/2079043/longest-lasting-pickup-truck-iseecars-not-chevy-ford/
  - https://www.motorbiscuit.com/warns-ram-1500-owners-hemi-tick/ (RepairPal cost quote)

**Leads only (D, not load-bearing)**
- https://www.pulscar.io/blog/toyota-tundra-problems-by-mileage
- https://www.go-parts.com/garage/turbocharger-toyota-sequoia-toyota-tundra-lexus-lx600-2022-2025
- https://www.carcomplaints.com/Toyota/Tundra/2022/tsbs/tsb-t-tt-0681-22-rev.shtml (mirror of a Toyota TSB)
- https://www.carcomplaints.com/Toyota/Tacoma/2017/tsbs/index.shtml
- https://www.carcomplaints.com/Ford/Maverick_Hybrid/2022/investigations/loss-of-motive-power-rq24014.shtml (mirror of an NHTSA ODI resume)
- https://www.carcomplaints.com/Ford/F-150_Hybrid/2021/investigations/loss-of-motive-power-ea23002.shtml (mirror of an NHTSA ODI resume)
- https://au7o.io/known-issues/ram-1500?year=2021
- https://www.ampauto.io/symptoms/toyota-3ur-fe-cam-tower-leak-tsb
- https://www.ampauto.io/symptoms/ram-hemi-mds-lifter-failure-class-action
- https://toyota.guide/toyota-tundra-secondary-air-injection-pump-recall/
- https://www.fastlaneturbo.com/blogs/news/2015-2023-ford-f-150-ecoboost-cam-phaser-problems-a-comprehensive-guide-to-symptoms-solutions
- https://fourwheeltrends.com/the-10000-failure-lurking-in-ford-super-duty-diesels/
- https://dot.report/bulletins/10194429
- https://dot.report/bulletins/11024560
- https://dot.report/bulletins/11032821
- https://www.ramforum.com/threads/does-the-5th-gen-5-7l-have-the-dreaded-mds-lifter-issue.166285/
