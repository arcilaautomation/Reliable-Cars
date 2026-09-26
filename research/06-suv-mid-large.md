# 06 — Midsize, 3-Row and Full-Size SUVs, 2015–2025: Used-Buyer Reliability Report

Research date: 2026-09-26. Scope: midsize, 3-row and full-size SUVs sold in the US, model years 2015–2025. The main focus is non-hybrid versions, with one line on the hybrid where it matters.
Validation rule used throughout: a model gets a verdict only for a specific model, model year and powertrain. Brand reputation is never enough on its own.

## How to read this file

**Evidence grades**
- **A** means a primary source: an NHTSA recall, investigation or TSB document; a manufacturer bulletin; a J.D. Power award page or press release; a Consumer Reports page; or an iSeeCars study page.
- **B** means two or more independent quality outlets agree.
- **C** means a single secondary source, a class-action complaint (an allegation only) or a court record.
- **D** means forums, listicles and similar leads. D sources are never used to carry a conclusion.

**Consumer Reports (CR) data.** I read CR's public model-year reliability pages directly: `consumerreports.org/cars/{make}/{model}/{year}/reliability/`, fetched in September 2026. Each page shows CR's one-line verdict for that year. CR's detailed trouble-spot scores sit behind a paywall and were not read.
In this file the verdicts are shortened:
- **MM** = "much more reliable than other cars from the same model year"
- **M** = "more reliable"
- **Avg** = "about average"
- **L** = "less reliable"
- **LL** = "much less reliable"
- **n/d** = CR shows no verdict because it has too little data

Where a page showed CR's prediction for a newer model year instead of the requested year, the file says so.

**J.D. Power VDS.** The Vehicle Dependability Study surveys original owners of 3-year-old vehicles. For example, the 2026 VDS covers the 2023 model year.

**iSeeCars figures.** These are model-level. They blend all generations of a nameplate and do not separate model years.

**Verdict scale**
- Top pick
- Strong
- Mixed (buy specific years or engines only)
- Avoid

---

## 0. Cross-cutting evidence (used by many models)

### J.D. Power Vehicle Dependability Study: SUV segment winners
| VDS year (model year surveyed) | Midsize SUV | Upper Midsize SUV | Large SUV | Midsize Premium SUV | Upper Midsize Premium SUV |
|---|---|---|---|---|---|
| 2022 (2019 MY) | 2019 Kia Sorento; 2019 Hyundai Santa Fe (both listed under midsize SUV classes) | — | 2019 Chevrolet Suburban | 2019 Lexus RX | — |
| 2023 (2020 MY) | 2020 Chevrolet Blazer | 2020 Toyota Highlander | 2020 Chevrolet Tahoe | 2020 Lexus RX | 2020 BMW X5 |
| 2024 (2021 MY) | 2021 Toyota 4Runner | 2021 Chevrolet Traverse | 2021 Chevrolet Tahoe | 2021 Lexus RX | 2021 BMW X6 |
| 2025 (2022 MY) | 2022 Nissan Murano | 2022 GMC Acadia | 2022 Chevrolet Tahoe | 2022 Lexus GX | 2022 Cadillac XT6 |
| 2026 (2023 MY) | Nissan Murano | Toyota 4Runner / Buick Enclave (tie) | Chevrolet Tahoe (model-level award; segment label from prior years) | Lexus GX | Cadillac XT6 |

Sources, all grade A unless marked:
- J.D. Power award pages: https://www.jdpower.com/cars/ratings/dependability/2022 ; /2023 ; /2024 ; /2025
- J.D. Power 2026 press release (Feb 12, 2026): https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds
- 2026 segment labels come from Autoblog: https://www.autoblog.com/news/2026-j-d-power-study-reveals-the-most-dependable-cars-and-suvs (C for the segment labels)
- Toyota pressroom, for the 2024 RX award: https://pressroom.toyota.com/more-than-half-of-eligible-lexus-toyota-models-receive-segment-awards-in-j-d-power-2024-u-s-vehicle-dependability-study-results/

Context from the 2026 VDS:
- Industry average is 204 PP100 (problems per 100 vehicles), the highest since the 2022 redesign of the study.
- Gas vehicles averaged 198 PP100, hybrids 213, battery EVs 237 and plug-in hybrids 281.
- Premium brands averaged 217 PP100.
(A) https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds

### iSeeCars longevity: chance of reaching 250,000 miles (model-level)
| Model | 2025 study (A) | 2026 study, Sept 2026 (B) |
|---|---|---|
| Toyota Sequoia | 39.1% (#1 overall) | 42.3% (#1) |
| Toyota 4Runner | 32.9% | 33.1% |
| Toyota Highlander Hybrid | 31.0% | 20.7% |
| Lexus GX | 18.3% | 23.3% |
| Lexus RX Hybrid | 17.0% | 28.9% |
| Honda Pilot | 13.1% | not reported in coverage |
| Toyota Highlander | 12.7% | not reported |
| Chevrolet Suburban | 11.8% | 11.6% |
| Lexus RX | 10.7% | not reported |
| Acura MDX | 9.1% | not reported |
| GMC Yukon XL / Yukon / Chevrolet Tahoe | 9.0 / 7.8 / 7.7% | not reported |
| Cadillac Escalade ESV | 6.8% | not reported |
| Nissan Armada | 5.8% | not reported |
| Jeep Wrangler Unlimited | 4.5% | not reported |
| Average | SUV average 4.3%; all vehicles 4.8% | all vehicles 5.4% |

Notes on the iSeeCars data:
- Land Cruiser, Expedition, Explorer, Telluride and Palisade do not appear on either longevity list.
- The 2025 figures come from iSeeCars' own study page: https://www.iseecars.com/longest-lasting-cars-study
- When fetched, that page still showed the 2025 edition. The 2026 figures come from Forbes (2026-09-16) https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/ and autoevolution (2026-09-19) https://www.autoevolution.com/news/the-toyota-sequoia-has-the-best-odds-of-hitting-250000-miles-275789.html
- Caveat: these are model-level figures across all generations. They measure how long owners keep driving a model, not problems per year. They say nothing about 2023+ turbo or hybrid generations.

### iSeeCars "Most Reliable SUVs 2026" scores
These are iSeeCars' own ratings, model-level, out of 10 (A): https://www.iseecars.com/most-reliable/most-reliable-suvs
- Midsize: #1 Toyota 4Runner, 8.1.
- Large: Toyota Land Cruiser 8.5; Toyota Sequoia 8.1; GMC Yukon 7.3; Chevrolet Suburban 7.2; GMC Yukon XL 7.2.
- Luxury large: Mercedes G-Class 8.8; Lexus LX 570 8.5; Lexus LX 600 8.5; Cadillac Escalade ESV 7.4.
- 3-row (one list): Land Cruiser 8.5; Sequoia 8.1; Highlander 7.7; Pilot 7.6; Explorer 7.3; Mazda CX-9 7.3.
- 3-row (a second list): Yukon 7.3; Nissan Pathfinder 7.2.

### Consumer Reports 2026 Automotive Report Card (Dec 4, 2025) (A)
- Toyota ranked #1 for reliability, helped by "a solid initial showing for the redesigned 4Runner."
- Mazda's CX-70 and CX-90, both conventional and PHEV versions, all score below or well below average.
- The GMC Acadia (redesigned for 2025) is among the least reliable vehicles.
- The Buick Enclave scores below average.
- The Jeep Grand Cherokee PHEV is among the least reliable.
- The Mercedes GLS is at the bottom of its category.
- Jeep ranks last among brands.
- Hybrids average about 15% fewer problems than gas-only models.

Sources:
- https://www.consumerreports.org/media-room/press-releases/2025/12/consumer-reports-releases-its-2026-automotive-brand-report-card-the-comprehensive-analysis-of-vehicle-quality-to-help-guide-car-shoppers-amid-steep-prices/
- CR's "10 Least Reliable Cars of 2026" gives the Mazda CX-90 a predicted reliability of 23/100: https://www.consumerreports.org/cars/car-reliability-owner-satisfaction/10-least-reliable-cars-a2967595976/

CR's "used cars to avoid" list is paywalled. According to SlashGear's coverage (C), it names:
- 2021 Tahoe and Suburban
- 2021 Yukon and Yukon XL
- 2020 Explorer
- 2016, 2019, 2021 and 2022 Wrangler

https://www.slashgear.com/2152128/used-cars-to-avoid-consumer-reports-most-surprising-models/

### Denso low-pressure fuel pump recall: many Toyota and Lexus SUVs
- Recalls 20V-012 (Jan 2020, later amended) and 20V-682 (Nov 2020, 1,517,721 vehicles).
- Covered SUVs include:
  - 2014–2015 and 2018–2019 4Runner
  - 2017–2019 Highlander
  - 2014–2015 and 2018–2019 Land Cruiser
  - 2018–2020 Sequoia
  - 2018–2019 GX460
  - 2014–2015 and 2018–2019 LX570
  - 2017–2020 RX350 / RX350L
- Failure mode: the impeller deforms, which can cause a stall or no-start.
- Fix: the fuel pump is replaced free.
- (A) https://static.nhtsa.gov/odi/rcl/2020/RCAK-20V682-2302.pdf ; https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V012-6185.PDF
- Buyer action: confirm by VIN that the recall is closed.

---

## 1. TOYOTA

### Toyota 4Runner — 5th gen N280 (2015–2024, 4.0 V6 1GR-FE + 5-speed A750); 6th gen N500 (2025+, 2.4 turbo i-FORCE / i-FORCE MAX hybrid + 8-speed)

**Verdict**
- 2015–2024: **Top pick.**
- 2025+: **Strong (provisional).** The generation is new, but the early data is excellent.

**Best buys**
- 2015–2024 4.0 V6, all trims.
- Strongest data: 2021–2024. CR rates 2021 and 2024 MM. J.D. Power gave the 2021 model its 2024 VDS Midsize SUV award, and the 2023 model shared the 2026 Upper Midsize SUV award.

**Caution**
- 2018–2019 build dates: the Denso fuel pump recall must be closed.
- In salt states, frame and underbody rust.
- 2025 early production: see below.

**Known failure points**
- No engine or transmission defect campaign, class action or warranty extension was found for 2015–2024 (see the falsification log).
- Denso fuel pump, 2018–2019, recalls 20V-012 and 20V-682 (A): https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V682-3280.PDF
- 2025–26:
  - Recall 25V-595: the digital instrument cluster may go blank at startup; fixed with a software update or over the air.
  - Recall 26V-282: incorrect load-capacity labels on 2026 models.
  - TSB-0006-26: front brake squeal.
  - Owners report a 1–2 upshift clunk on forums; there is no TSB.
  - (C) https://pickuptrucktalk.com/2026/08/2025-2026-toyota-4runner-known-problems-transmission-clunks-wrong-labels-instrument-panel-shutoffs/
- 2025+ transmission: the 4Runner shares its platform and powertrain with the 2024+ Tacoma. A class action alleges defects in the Tacoma's 8-speed automatic (limp mode, harsh engagement). That suit covers the Tacoma, not the 4Runner. (C, allegation) https://www.beasleyallen.com/article/class-action-filed-toyota-transmission-troubles/

**Evidence**
- CR (A): 2015 M, 2017 M, 2019 M, 2021 MM, 2023 M, 2024 MM, 2025 MM. Example page: https://www.consumerreports.org/cars/toyota/4runner/2021/reliability/
- CR 2026 report card calls it a "solid initial showing" for the 2025 model (A).
- J.D. Power: 2024 VDS Midsize SUV award for the 2021 model; 2026 VDS Upper Midsize SUV award, tied, for the 2023 model (A).
- iSeeCars: 32.9% chance of 250k miles (2025) and 33.1% (2026); #1 midsize SUV for reliability at 8.1 (A/B).

**Inspection checklist**
1. Frame, rear control-arm mounts and brake lines for rust.
2. Run a VIN recall check (Denso pump on 2018–19).
3. A750 transmission: look for fluid-change records, and feel for torque-converter shudder at 25–45 mph.
4. Front brake pad and rotor wear; CR owner comments flag premature brake wear on 2023–24.
5. Evidence of off-road abuse: skid-plate damage, lift kits, oversized tires.
6. On 2025+: cluster software updated, and whether the 1–2 shift clunk is present.

### Toyota Highlander — 3rd gen XU50 (2015–2019); 4th gen XU70 (2020–2025)

Powertrains:
- 2015–2016: 3.5 V6 2GR-FE + 6-speed.
- 2017–2019: 2GR-FKS + UA80 8-speed.
- 2020–2022: V6 + UA80 8-speed.
- 2023+: 2.4 turbo T24A-FTS + 8-speed.
- Hybrid (2020+): 2.5 A25A-FXS.

**Verdict:** **Strong** overall.
- **Top pick:** Highlander Hybrid 2020–2024, and the 2015–2016 V6 with the 6-speed.
- **Strong:** 2017–2022 V6 (UA80) and the 2023–2024 2.4 turbo.

**Best buys**
- 2020–2024 Hybrid. CR rated 2021 M. iSeeCars puts the Highlander Hybrid at 31.0% (2025) and 20.7% (2026).
- 2015–2016 V6 with the 6-speed. CR rated 2015 M, and it avoids the UA80 transmission.
- 2021 and 2023–2024 gas. CR rated each M.

**Caution**
- 2017–2022 V6 with the UA80: listen for a transmission whine.
- 2020: CR rated this first year of the generation Avg.
- 2021 units in the TSB serial range (see below).

**Known failure points**
- **UA80 8-speed whine or grind.** TSB T-SB-0008-21 covers certain 2021 Highlanders in a specific transmission-serial range. The cause is the front carrier pinion shafts, and the fix is replacing the transaxle under the 5-year/60,000-mile powertrain warranty (A): https://static.nhtsa.gov/odi/tsbs/2021/MC-10188917-9999.pdf
  - Broader whine and harsh-shift complaints on 2017–2022 models, and repair costs of $7,000–$12,000, come only from forums, lawyers and Torque News (C/D).
  - A class action, LeBoutheller v. Toyota, alleges defects in the UA80 (C): https://www.classaction.org/media/leboutheller-v-toyota-motor-sales-usa-inc-et-al-complaint.pdf
- **2020–2021 Hybrid fuel tank.** The tank will not fill to its rated 17.1 gallons; in practice about 14.2 gallons are usable. A TSB replaces the tank, bracket and sender under the 3-year/36,000-mile basic warranty (A): https://static.oemdtc.com/NHTSA-PDFs/MC-10209005-9999.pdf
  - Class action: Prince v. Toyota, 2:22-cv-01682 (D.N.J.) (C).
- **4th-gen recalls.** 2nd-row seat recliner (2021–24); spiral cable 23V-610; occupant sensor (OCS), 2021; ECU stall with stop/start, 2020; front bumper cover, 2020–23 (C): https://pickuptrucktalk.com/2026/07/2020-2026-toyota-highlander-known-problems-loose-2nd-row-seats-ecu-stalls-transmission-whining/
- **2.4 turbo hesitation.** Addressed by ECM reflash TSBs (C/D).
- **Denso fuel pump.** 2017–2019 (A).

**Evidence**
- CR (A): 2015 M, 2017 M, 2019 M, 2020 Avg, 2021 M, 2023 M, 2024 M; Highlander Hybrid 2021 M.
- J.D. Power 2023 VDS: Upper Midsize SUV award for the 2020 Highlander (A).
- iSeeCars: gas Highlander 12.7% (2025); reliability 7.7 (A).

**Inspection checklist**
1. On a 2017–2022 V6, drive at 20–50 mph and listen for a rising whine as the vehicle warms up.
2. Check transmission service history.
3. On a 2021, look up the transmission serial number against TSB T-SB-0008-21.
4. On a Hybrid, fill the tank to click-off and note the gallons.
5. Check that the 2nd-row recliner locks.
6. Confirm recall closures: Denso pump, spiral cable, OCS.
7. On a 2.4 turbo, check for hesitation from a stop and whether the ECM update was done.

### Toyota Grand Highlander (2024+, 2.4 turbo, 2.5 hybrid, 2.4 Hybrid MAX)

**Verdict**
- 2024: **Mixed.**
- 2025: **Strong (provisional).**

**Evidence**
- CR (A): 2024 Avg, with 4 recalls; 2025 MM.
- 2024 Grand Highlander and Lexus TX: driver's curtain airbag recall and stop-sale covering about 145,000 vehicles (recall 24V-461). The front of the curtain may not stay inside the vehicle if the window is down (B: Green Car Reports, Cars.com): https://www.greencarreports.com/news/1143598_2024-toyota-grand-highlander-and-lexus-tx-hybrids-recalled-stop-sale-issued

**Best buy:** 2025, with all recalls confirmed closed.

**Inspection checklist**
1. Airbag recall closed.
2. 2.4 turbo: check for hesitation.
3. Infotainment and camera software up to date.

### Toyota Sequoia — 2nd gen XK60 (2008–2022; in scope 2015–2022, 5.7 V8 3UR-FE + 6-speed); 3rd gen (2023+, i-FORCE MAX 3.4 twin-turbo V35A hybrid + 10-speed)

**Verdict**
- 2015–2022: **Top pick.** Caveat: CR does not have enough data to rate it.
- 2023+: **Mixed** (early generation).

**Best buys:** 2015–2022 5.7 V8. On 2018–2020 models, confirm the Denso pump recall is done.

**Caution: 2023–2024**
- CR rated 2024 L.
- Recalls:
  - Tow-hitch cover can detach, 2023–24, about 43,400 vehicles (A): https://pressroom.toyota.com/toyota-recalls-certain-2023-and-2024-sequoia-vehicles/
  - 14-inch display shows a black or green screen, including the backup camera, 2023–25; about 394,000 Tundra and Sequoia (A): https://pressroom.toyota.com/toyota-recalls-certain-tundra-tundra-hev-and-sequoia-models/
  - Spare-tire carrier chain on 2023 models (C).
- Transmission can creep in Neutral; fixed with software (C).

**Lead refuted: Sequoia and the V35A engine recalls.** The V35A engine-debris (main bearing) recalls cover gas-only engines:
- 24V-381: 2022–23 Tundra and LX600.
- 25V-767: 2022–24 Tundra, 2022–24 LX and 2024 GX, 126,691 vehicles.
- A third recall in May 2026: 43,566 more Tundras.
Toyota's press release says "conventional gas models only." No Sequoia hybrid engine recall was found as of June–September 2026. There are isolated owner reports on forums and NHTSA (C/D).
(A) https://pressroom.toyota.com/toyota-recalls-certain-toyota-tundra-and-lexus-gx-and-lx-vehicles/ ; (C) https://pickuptrucktalk.com/2026/06/2023-2026-toyota-sequoia-known-problems-engine-concerns-transmission-creep-and-recalls/ ; (B) https://www.theautopian.com/toyota-just-recalled-another-43566-tundra-trucks-over-engine-problems/
The Sequoia hybrid shares the V35A engine family, so buy only with warranty coverage and monitor for a future campaign.

**Known failure points (2nd gen)**
- Secondary air-injection (AI) pumps and valves are prone to moisture damage.
- Toyota's warranty enhancements for this (ZTQ, ZG6, and LSC D0E) cover only 2007–2013 models, so a 2015+ owner pays out of pocket (A): https://static.oemdtc.com/NHTSA-PDFs/MC-10132382-9999.pdf
- Denso pump on 2018–2020 (A).

**Evidence**
- iSeeCars longevity: 39.1% (2025, A) and 42.3% (2026, B). Both rank the Sequoia #1 of all vehicles.
- iSeeCars reliability 8.1 (A).
- CR: n/d for 2018 and 2023; 2024 L.

**Inspection checklist (2015–2022)**
1. Scan for AI-pump codes P2440–P2445 and P0418.
2. Frame rust.
3. Timing-cover and water-pump seep.
4. Denso recall closed.

**Inspection checklist (2023+)**
1. VIN check for all recalls.
2. Any "Hybrid System Malfunction" history.
3. Transmission behaviour in Neutral.
4. Display recall done.
5. Remaining hybrid warranty: 8 years/100,000 miles on hybrid components.

### Toyota Land Cruiser — 200-series URJ200 (2015–2021, 5.7 V8 + 8-speed from 2016); 250-series (2024+, 2.4 i-FORCE MAX hybrid)

**Verdict**
- 2016–2021: **Strong**, close to Top pick. Evidence is thin because CR lacks data, but nothing negative was found.
- 2024+: **Mixed / provisional.**

**Evidence**
- iSeeCars reliability 8.5, #1 large SUV and #1 3-row (A). The Land Cruiser does not appear on the iSeeCars longevity lists.
- CR: 2019 n/d; 2024 (250-series) Avg with 4 recalls (A).
- Falsification check (below) found only the Denso fuel pump recall: 2014–2015 and 2018–2019 (A).

**Inspection checklist**
1. Denso recall closed.
2. KDSS or AHC suspension leaks.
3. AI-pump codes.
4. Frame rust.
5. On a 250-series: recall status and hybrid warranty.

### Toyota Venza (brief)
- 2021–2024 (hybrid only): CR 2021 M (A). **Strong.**
- 2015 (1st generation) was not researched.

---

## 2. LEXUS

### Lexus RX — 4th gen AL20 (2016–2022, RX350 3.5 V6 2GR-FKS + 8-speed; RX450h hybrid); 5th gen AL30 (2023+, RX350 2.4 turbo, RX350h, RX500h)

**Verdict**
- 2016–2022: **Top pick.**
- 2023+: **Strong.**

**Best buys**
- 2019–2022 RX350 and RX450h. J.D. Power gave the RX its Midsize Premium SUV award for the 2019, 2020 and 2021 model years, in the 2022, 2023 and 2024 studies (A). CR rated 2022 MM.

**Caution**
- 2016–2018 engine oil leak from the cam-sensor bolt holes. The TSB fix replaces the cam housing and was covered under the 6-year/70,000-mile powertrain warranty, which has now expired for these years (A): https://static.nhtsa.gov/odi/tsbs/2018/MC-10143945-9999.pdf
- 2017–2020: Denso fuel pump recall (A).
- 2023: CR rated this first year of the new generation Avg.
- The LeBoutheller class action alleges defects in the UA80 transmission of 2023+ RX350s (C, allegation).

**Evidence**
- CR (A): 2016 M, 2022 MM, 2023 Avg, 2024 M.
- iSeeCars longevity: RX 10.7% (2025); RX Hybrid 17.0% (2025) and 28.9% (2026) (A/B).

**Inspection checklist**
1. Oil seepage at the cam housings.
2. Denso recall closed.
3. On a hybrid, the health of the hybrid battery cooling fan and filter.
4. Infotainment: the touchpad on 2016–2019.

### Lexus GX — GX460 (2015–2023, 4.6 V8 1UR-FE + 6-speed); GX550 (2024+, 3.4 twin-turbo V35A + 10-speed)

**Verdict**
- GX460 2015–2023: **Top pick.**
- GX550 2024: **Avoid** unless the 25V-767 engine remedy is documented as done.
- GX550 2025: **Mixed.**

**Best buys:** GX460 2015–2023, with the strongest data for 2020–2023.
- CR: 2020 MM, 2023 M.
- J.D. Power Midsize Premium SUV award for the 2022 and 2023 GX, in the 2025 and 2026 studies (A).

**Known failure points**
- **GX460**
  - KDSS vehicles can lean to the right. The TSB, which covers 2010–2021, replaces the front-left spring under the 4-year/50,000-mile basic warranty (A): https://static.nhtsa.gov/odi/tsbs/2021/MC-10201347-9999.pdf
  - AI pump and switching valves fail from moisture. Lexus warranty enhancement ZLH covers only 2010–2013 models (A): https://static.oemdtc.com/NHTSA-PDFs/MC-10131778-9999.pdf
  - Denso pump recall on 2018–2019 (A).
- **GX550**
  - Recall 25V-767 (Nov 2025) includes 3,717 gas 2024 GX550s. Machining debris can cause main-bearing failure: knocking, stalling, loss of motive power (A): https://pressroom.toyota.com/toyota-recalls-certain-toyota-tundra-and-lexus-gx-and-lx-vehicles/
  - CR: 2024 L, 2025 L (A).

**Evidence**
- CR (A): 2016 M, 2020 MM, 2023 M, 2024 L, 2025 L.
- iSeeCars longevity 18.3% (2025) and 23.3% (2026) (A/B); luxury large SUV reliability 8.0 (A).

**Inspection checklist (GX460)**
1. Scan for AI-pump codes.
2. Rear air-suspension leveling.
3. Check for KDSS lean.
4. Frame rust.
5. Denso recall closed.

**Inspection checklist (GX550)**
1. Get a dealer printout showing the 25V-767 remedy, whether inspection or engine replacement.
2. Any engine knock history.

### Lexus LX — LX570 (2016–2021, 5.7 V8); LX600 (2022+, V35A twin-turbo)

**Verdict**
- LX570: **Strong.** It rests on thin data, but no negative evidence was found.
- LX600 2022–2024: **Avoid** unless the engine recall is documented as complete.

**Evidence**
- iSeeCars reliability: LX570 8.5, LX600 8.5 (A). These are model-level scores and predate most of the recalls.
- CR: LX 2019 n/d.
- LX600 is covered by two engine-debris recalls: 24V-381 (2022–2023 LX600, 3,524 vehicles, engine replacement) and 25V-767 (2022–2024 LX, 9,895 vehicles) (A).

**Inspection checklist**
1. LX570: Denso recall; AHC hydraulic suspension; AI-pump codes.
2. LX600: engine replacement documentation.

### Lexus TX (brief; 2024+, shares its platform with the Grand Highlander)
- CR 2024 Avg (A). Included in the 2024 curtain-airbag stop-sale (B).
- **Mixed / provisional.** Prefer 2025 with recalls closed.

---

## 3. HONDA / ACURA

### Honda Pilot — 2015 (2nd gen, 3.5 + 6-speed on most trims); 3rd gen (2016–2022, J35Y6 V6 + 6-speed or ZF 9-speed on upper trims); 4th gen (2023+, J35Y8 + 10-speed)

**Verdict**
- 2016–2020: **Mixed, lean Avoid.**
- 2021–2022: **Strong.**
- 2023+: **Mixed.** Reliability is average and the 2025 model is below average.

**Best buys:** 2021–2022 Pilot. CR rated 2021 M and 2022 MM. These years fall outside the population of NHTSA's rod-bearing probe.

**Avoid or caution: 2016–2020.** CR rated every year from 2015 through 2020 L (A). There are two engine actions:
- **Recall 23V-751 (Nov 2023):** 248,999 vehicles across Pilot, Odyssey, Ridgeline, MDX and TLX with 3.5 V6 engines, select 2016–2020 years. A crank-pin grinding defect wears the connecting-rod bearings and can seize the engine (A): https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V751-3696.PDF
- **NHTSA Preliminary Evaluation PE25008 (opened 2025-08-20):** 1,410,806 vehicles, including 2016–2020 Pilot and 2016–2020 MDX. It covers rod-bearing failures outside the recall, not caused by the recalled crank defect. There are 3,012 reports (414 to NHTSA, 2,598 to Honda) and 7 crashes (A): https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf
- As of September 2026 searches, no expanded recall was found.

**Other known failure points**
- **2016–2018 ZF 9-speed:** rough or delayed shifts, addressed by software updates. Source quality is C/D (forums and lawyer sites).
- **2023–2025:** recall 25V-031 (Jan 2025), 294,612 vehicles including the 2023–2025 Pilot. An FI-ECU software error can stall the engine or cut power; the fix is a reflash (A): https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V031-9774.pdf ; (B) https://www.caranddriver.com/news/a63620082/honda-pilot-acura-mdx-tlx-stalling-engines-recall/

**Evidence**
- CR (A): 2015 L, 2016 L, 2017 L, 2018 L, 2019 L, 2020 L, 2021 M, 2022 MM, 2023 Avg, 2024 Avg, 2025 L.
- iSeeCars: 13.1% longevity (2025); reliability 7.6 (A). This is model-level; see the contradiction log.

**Inspection checklist**
1. On a 2016–2020, VIN check for 23V-751. Run a cold-start listen for rod knock.
2. Check oil-change intervals; long intervals raise risk for this engine.
3. Look for any history of a VCM (cylinder-deactivation) misfire.
4. On 9-speed trims, test shift quality.
5. On a 2023–2025, confirm the 25V-031 reflash.

### Honda Passport (2019–2025, J35Y6 + 9-speed)

**Verdict:** **Strong** for 2021–2025.

**Evidence**
- CR: 2019 Avg; 2021 M; CR predicts the 2026 model (new generation) will be about average (A).
- The Passport is not named in the PE25008 population, even though it uses the same J35Y6 engine family. This absence is noted, not treated as clearance.

**Inspection checklist:** same engine checks as the Pilot, plus a VIN recall check.

### Acura MDX — 3rd gen (2014–2020: 3.5 V6, 6-speed in 2014–2015, ZF 9-speed 2016–2020); 4th gen (2022+: 3.5 + 10-speed; Type S 3.0 turbo)

**Verdict**
- 2014–2015: **Strong.**
- 2016–2020: **Mixed.** These years are inside PE25008.
- 2022+: **Mixed.**

**Evidence**
- CR (A): 2015 M, 2017 M, 2019 L, 2020 Avg, 2022 L. CR predicts the 2025 model will be about average, based on 2022–2024 data.
- iSeeCars longevity 9.1% (2025) (A).
- 2022–2025 MDX Type S is included in recall 25V-031 (A).

**Inspection checklist:** same as the Pilot. For a Sport Hybrid (2017–2020), also check the dual-clutch transmission (7DCT) behaviour.

---

## 4. MAZDA

### Mazda CX-9 — 2015 (1st gen, Ford-built 3.7 V6); 2nd gen (2016–2023, 2.5 turbo Skyactiv-G + 6-speed)

**Verdict**
- 2016–2023: **Mixed.**
- 2015: **Avoid.**

**Best buys**
- 2021–2023, built after June 9, 2020, which is after the cylinder-head design change.
- Or a 2016–2020 whose cylinder head has already been replaced under the extended coverage.
- Note that CR still rates 2021 and 2023 L.

**Known failure points**
- **Cylinder-head cracks.** Coolant leaks at the cylinder head around the exhaust manifold on 2016–2020 CX-9s with VIN below JM3TC******422801 (built before June 9, 2020).
  - TSB 01-002/23 replaces the head with a redesigned head and gasket. If coolant has reached the oil, a partial engine replacement is needed at about 9.6–10.9 labor hours.
  - Customer Service Program CSP11 (Oct 2024) extends coverage for this repair to 10 years/120,000 miles, with reimbursement for past repairs.
  - (A) https://static.nhtsa.gov/odi/tsbs/2023/MC-10232269-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2024/MC-11011136-0001.pdf
- **2015 (3.7 V6).** This is Ford's "Cyclone" V6 with a water pump inside the engine, driven by the timing chain. A class action alleges the pump fails and dumps coolant into the oil, destroying the engine (C, allegation; see Ford Explorer below).

**Evidence**
- CR (A): 2016 Avg, 2018 L, 2021 L, 2023 L.
- iSeeCars reliability 7.3 (A).

**Inspection checklist**
1. Look for coolant crust at the exhaust-manifold side of the head.
2. Check the coolant level history.
3. Look for milky oil.
4. VIN check for CSP11 eligibility and whether the head has been replaced.
5. Infotainment screen: "ghost touch" reports (D).

### Mazda CX-90 (2024+, 3.3 turbo inline-6 mild hybrid, 2.5 PHEV)

**Verdict:** **Avoid 2024. Mixed-to-Avoid 2025.**

**Evidence**
- CR (A): 2024 LL with 11 recalls; 2025 L, with "engine major" listed as a trouble spot. Predicted reliability is 23/100, among CR's 10 least reliable for 2026.

**Recalls (A)**
- 23V-719: 2024 PHEV engine and motor shutdown.
- 24V-022: false automatic emergency braking.
- 24V-814 (Mazda 7124J): dash electrical supply unit fault, 80,915 vehicles. Defroster, seat-belt warning and PHEV battery cooling may not work.
- 24V-815: loss of drive power, 31,488 vehicles.
- 24V-816: engine may not restart after auto stop, 38,926 vehicles.
- 24V-817: PHEV inverter loss of power, 14,902 vehicles.
- 25V-568: inaccurate fuel gauge, 104,854 vehicles, which can lead to running out of fuel.
- Mazda recall bulletin: https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V814-3068.pdf

**Inspection checklist (if buying anyway)**
1. Every recall closed.
2. Hybrid or 48V battery replacement history.
3. Stored hybrid-system DTCs.

---

## 5. SUBARU

### Subaru Ascent (2019+, 2.4 turbo + CVT)

**Verdict**
- 2019: **Avoid.**
- 2020–2025: **Mixed.** CR rates every year it has data for below average.

**Evidence**
- CR (A): 2019 L with 9 recalls; 2020 L; 2022 L; 2024 L.

**Known failure points (A)**
- **CVT chain tension, recall 19V-855 (WUV-07).** 2019 models, 76,842 vehicles. A hydraulic sensor harness can mis-read pressure and let the drive chain lose tension: https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V855-4223.pdf
- **CVT chain slip, recall WRK-21.** 2019–2020 models: the transmission control module is reprogrammed and the CVT replaced if chain slip is confirmed. TSB 16-139-22 then extends CVT coverage for chain slip only to 10 years/100,000 miles, one repair: https://static.nhtsa.gov/odi/tsbs/2022/MC-10216977-0001.pdf
- **Fire risk, recall 22V-907 (WRL-22).** 2019–2022 models, 271,694 vehicles. The ground bolt on the auxiliary (PTC) heater may be loose and can melt. Owners were told to park away from structures until repaired: https://static.nhtsa.gov/odi/rcl/2022/RCRIT-22V907-9194.pdf
- **Missed welds.** 293 2019 Ascents had missed B-pillar spot welds; those found affected were destroyed and replaced (B: IEEE Spectrum, Torque News).

**Inspection checklist**
1. WRK-21, WUV-07 and WRL-22 all closed.
2. CVT behaviour: judder, and any chain-slip history.
3. On a 2019–2020, confirm the 10-year/100,000-mile chain-slip coverage has not already been used.

---

## 6. KIA / HYUNDAI

### Kia Telluride (1st gen 2020–2026, 3.8 V6 Lambda II + 8-speed)

**Verdict:** **Mixed.** No engine or transmission defect campaign was found, but CR rates it below average and it has had repeated fire and rollaway recalls.

**Best buys:** 2021–2022. CR's current prediction is about average, based on 2022–2024 data. Buy only with every recall closed, including the July 2026 fuse remedy.

**Recalls (A unless marked)**
- **Seat motor fire, "park outside" recall, 2020–2024, 462,869 vehicles.**
  - Kia recall SC316 (June 2024) added a bracket and replaced the seat slide knob.
  - It was re-recalled on July 9, 2026 with a new remedy, an electronic fuse. NHTSA notes an improper earlier repair can itself cause overheating. Kia knew of 7 seat fires and 11 melted motors.
  - https://www.nhtsa.gov/press-releases/park-outside-recall-kia-tellurides ; https://www.nhtsa.gov/press-releases/kia-telluride-recall-fire-risk
- **Tow-hitch wiring harness fire, 22V-626 (SC247), 2020–2022:** https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V626-7113.pdf
- **Rollaway:** the intermediate shaft and right front driveshaft may not be fully engaged, 2020–2024, about 427,000 vehicles (B: NPR https://npr.org/2024/04/01/1241954949/kia-recall-telluride-suvs).

**Evidence**
- CR (A): 2020 L, 2023 L, 2024 L. The 2021 and 2022 pages showed only the 2025 prediction (Avg).

**Inspection checklist**
1. VIN check for SC316, the 2026 re-recall, SC247 and the driveshaft recall.
2. Inspect the power-seat switch trim for damage.
3. Tow-hitch module.
4. Brake and parking behaviour on a slope.

### Hyundai Palisade (1st gen 2020–2025, 3.8 V6)

**Verdict:** **Mixed.**

**Best buys:** 2021–2022. CR rated both Avg.

**Recalls**
- Tow-hitch harness fire, 22V-633, 2020–2022 (A): https://static.nhtsa.gov/odi/rcl/2022/RCAK-22V633-7960.pdf
- Seat-belt buckles may not latch, 2020–2025, 568,580 vehicles, Sept 2025 (B: Motor1 https://www.motor1.com/news/772755/hyundai-palisade-seat-belt-buckle-recall/).

**Evidence:** CR (A): 2020 L, 2021 Avg, 2022 Avg, 2023 L.

**Inspection checklist**
1. Recalls closed.
2. Test every seat-belt buckle in the cold.
3. Tow-hitch module.

### Kia Sorento — 3rd gen (2016–2020: 2.4 GDI and 2.0 turbo "Theta II", or 3.3 V6); 4th gen (2021+: 2.5, 2.5 turbo + 8-speed wet dual-clutch transmission, hybrid, PHEV)

**Verdict:** **Mixed.**
- 2016–2020 Theta II 2.4 or 2.0 turbo: **Avoid**, unless the Knock Sensor Detection System (KSDS) software update and settlement warranty coverage are verified.
- 2021–2022 2.5 turbo with the dual-clutch: **Avoid** unless recall 22V-760 is completed.

**Best buys:** 2016–2020 with the 3.3 V6. Evidence for this is limited; CR rates the model L overall.

**Known failure points**
- **Theta II engines.** Connecting-rod bearing failure and engine fires.
  - NHTSA consent orders (Nov 27, 2020) fined Hyundai and Kia $210 million for untimely recalls covering more than 1.6 million Theta II vehicles (A): https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall
  - The class settlement covers 2012–2019 Sorento and 2013–2019 Santa Fe Sport with Theta II direct-injection engines. It provides KSDS software and extended or lifetime engine coverage that is conditional on the KSDS update (C, class counsel): https://www.hbsslaw.com/cases/hyundai-kia-engine-I-fire-hazard-theta-II-GDI
- **2021–2022 2.5 turbo dual-clutch, recall 22V-760 (Kia SC250).** 65,612 Sorentos. A solder defect in the electric oil pump gives a warning, 20–30 seconds of normal driving, then complete loss of drive. Fix: inspect or replace the transmission and update software (A): https://static.nhtsa.gov/odi/rcl/2022/RCLRPT-22V760-3227.PDF

**Evidence**
- CR (A): 2016 L, 2019 L, 2021 L (major transmission trouble spot shown), 2023 L.
- J.D. Power 2022 VDS gave the 2019 Sorento a midsize SUV award (A). This conflicts with CR; see the contradiction log.

**Inspection checklist**
1. Identify the engine code.
2. Get dealer proof of the KSDS update and Theta II recall completion.
3. On a 2021–22 2.5 turbo, VIN check for SC250.
4. Look for any "stop safely" transmission history.

### Hyundai Santa Fe / Santa Fe Sport / Santa Fe XL
Generations in scope:
- 2013–2018 Santa Fe Sport: 2-row, 2.4 GDI or 2.0 turbo Theta II.
- 2013–2019 Santa Fe (renamed Santa Fe XL in 2017–2019): 3-row, 3.3 V6.
- 2019–2023 Santa Fe (4th gen): 2.4, 2.0 turbo, then 2.5 and 2.5 turbo with an 8-speed dual-clutch from 2021.
- 2024+ Santa Fe (5th gen).

**Verdict:** **Mixed / Avoid specific engines.**
- **Avoid:** 2015–2018 Santa Fe Sport with Theta II engines, unless KSDS and settlement coverage are proven. Also avoid 2021–2022 2.5 turbo dual-clutch cars without the recall remedy.
- **Best buy:** 2019–2020 with the 2.4. CR rated 2019 Avg and J.D. Power gave it a 2022 VDS award. Verify by VIN whether the settlement covers it.

**Known failure points**
- Theta II engines, as for the Sorento above (A/C).
- **2021–2022 Santa Fe 2.5 turbo dual-clutch, recall 22V-746 (Hyundai 236).** Built 11/20/2020–5/03/2022. Same failure as the Kia: electric oil pump fault leading to loss of drive, 229 incidents. Fix: software update, plus a new transmission if DTC P1C2D03 is stored (A): https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V746-7969.pdf

**Evidence:** CR (A): 2016 L, 2019 Avg, 2021 L, 2024 L.

**Inspection checklist**
1. Confirm the engine type by VIN.
2. KSDS and recall printout.
3. Dual-clutch recall done.
4. Cold-start knock.
5. Oil consumption.

---

## 7. NISSAN

### Nissan Pathfinder — R52 (2013–2020, 3.5 V6 + CVT); R53 (2022+, 3.5 V6 + ZF 9-speed; there was no 2021 model year)

**Verdict**
- 2015–2016: **Avoid.**
- 2017–2020: **Mixed.**
- 2022+: **Mixed.** CR rates it below average.

**Known failure points**
- **CVT judder and failure (R52).** Under the Stringer v. Nissan settlement, final approval March 23, 2022, Nissan extended CVT coverage on 2015–2018 Pathfinders from 5 years/60,000 miles to 7 years/84,000 miles. Coverage included the valve body, torque converter and transmission control module (TCM). (A: Nissan bulletin on NHTSA) https://static.nhtsa.gov/odi/tsbs/2022/MC-10218703-0001.pdf ; https://roguepathfinderqx60cvtsettlement.com/
- By 2025, every 2015–2018 Pathfinder had aged out of this coverage, so there is none left today.

**Evidence**
- CR (A): 2015 L, 2017 L, 2019 Avg, 2022 L, 2024 L.
- iSeeCars 3-row reliability score 7.2 (A).

**Inspection checklist**
1. CVT: listen for whine, feel for judder at 20–40 mph.
2. Look for evidence of CVT fluid service.
3. Ask for records of any TCM reflash.
4. On the 9-speed R53, check shift quality and recalls.

### Nissan Murano — 3rd gen Z52 (2015–2024, 3.5 V6 + CVT); 4th gen (2025+, 2.0 VC-Turbo KR20DDET + 9-speed)

**Verdict**
- 2019–2024: **Strong.**
- 2015–2018: **Mixed.**
- 2025: **Mixed / provisional.**

**Evidence**
- CR (A): 2016 M, 2019 Avg, 2022 MM.
- J.D. Power VDS Midsize SUV award for the 2022 model (2025 study) and the 2023 model (2026 study) (A).

**Caution**
- The CVT is an inherent out-of-warranty risk.
- 2025 uses the VC-Turbo engine family. Nissan recall 25V-437 (June 2025) covers bearing failures in the 1.5 and 2.0 VC-Turbo in the Rogue, Altima, QX50 and QX55. The recall states that no other models are affected, so the Murano is not included. Treat the 2025 Murano as unproven. (A) https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V437-3628.pdf

**Inspection checklist**
1. CVT behaviour and fluid service.
2. On a 2025, VIN recall check, and ask whether the dealer did an oil-pan debris inspection.

### Nissan Armada — Y62 (2017–2024, 5.6 V8 VK56 + 7-speed); 2025+ (3.5 twin-turbo VR35DDTT + 9-speed)

**Verdict**
- 2017–2024: **Strong (provisional).** Data is limited.
- 2025+: **not rated.** There is not enough data.

**Evidence**
- iSeeCars longevity 5.8% (2025), above the 4.3% SUV average (A).
- CR: n/d for 2018, 2021 and 2025.
- No engine recall was found for the VR35DDTT in the 2025 Armada.

**Inspection checklist**
1. Timing-chain and water-pump noise.
2. Rust on the exhaust manifolds.
3. 7-speed shift quality.
4. Brakes (heavy vehicle).

---

## 8. FORD / LINCOLN

### Ford Explorer — 5th gen U502 (2011–2019: 3.5 V6, 2.3 turbo, 3.5 twin-turbo); 6th gen U625 (2020+: 2.3 turbo, 3.0 turbo, 3.3 hybrid, 10-speed 10R60)

**Verdict**
- 2020–2022: **Avoid.**
- 2016: **Avoid.**
- 2017–2019 and 2023+: **Mixed.**

**Known failure points**
- **Rear axle mounting bolt, 2020–2022.** The rear axle's horizontal mounting bolt can fatigue-fracture, disconnecting the driveshaft. The result is loss of drive, or rollaway if the vehicle is in Park without the parking brake. Ford says "the joint design is not robust."
  - Recalls 22V-255 (22S27) and 23V-199 (23S16) added software that sets the electronic parking brake in Park.
  - Recall 23V-675 (23S55), 238,364 vehicles, replaced the subframe bushing and bolt.
  - Recall 25V-166 (25S22), 4,247 vehicles, covers cars where the software remedy was recorded as done but never actually installed.
  - (A) https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V675-7191.PDF ; https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V166-9088.PDF
- **3.5 V6 internal water pump (2011–2019).** The pump sits inside the engine and is driven by the timing chain. Roe v. Ford (E.D. Mich. 2:18-cv-12528) alleges the pump fails, coolant enters the oil and the engine is destroyed. The complaint cites more than $1,500 to replace the pump and up to $8,500 for an engine (C, allegation; outcome not verified): https://www.courthousenews.com/wp-content/uploads/2018/08/FordPumps.pdf

**Evidence**
- CR (A): 2016 L with 15 recalls; 2018 L; 2020 LL with 35 recalls; 2022 L with 25 recalls; 2024 L with 10 recalls. CR's used-car avoid list, as covered by SlashGear, includes the 2020 (C).
- iSeeCars reliability 7.3 on its 3-row list (A). This conflicts with CR; see the contradiction log.

**Inspection checklist**
1. On a 2020–22, VIN check for 23S55 hardware and 25S22 software, plus all remaining recalls.
2. Listen for clunk or grind from the rear axle on launch.
3. On a 3.5 V6, check the coolant level trend and for milky oil. Ask for water-pump replacement records.
4. Exhaust odor in the cabin: a known complaint, D-level only in this pass.

### Ford Edge (2015–2024: 2.0 turbo, 3.5 V6 2015–2018, 2.7 twin-turbo ST/Sport)

**Verdict:** **Mixed.**

**Evidence**
- CR (A): 2016 Avg, 2019 L, 2022 Avg.
- The 3.5 V6 is included in the Roe v. Ford water-pump allegation (C).
- The 2.7 Nano engine intake-valve recall (below) was traced to 2021–2022 Ford and Lincoln Nano engines. Check any 2.7 ST by VIN.

**Inspection checklist**
1. Coolant loss.
2. Water pump on the 3.5.
3. Recalls.

### Ford Expedition / Lincoln Navigator — 2015–2017 (3.5 twin-turbo + 6-speed); 4th gen (2018+, 3.5 twin-turbo + 10R80 10-speed)

**Verdict**
- 2018: **Avoid.**
- 2019–2020: **Mixed.** Check the cam phasers.
- 2021–2024: **Mixed.** CR still rates it below average.

**Known failure points**
- **Cam phasers (VCT units), 3.5 twin-turbo.** Affects 2018–2020 Expedition and Navigator built on or before Nov 30, 2019. Symptom: a rattle on cold start or a knock at hot idle.
  - Ford Customer Satisfaction Program 21B10 reflashed the engine computer. Program 21N03 paid for one prorated replacement of all four phasers: 100% under 70,000 miles, 66% at 70–80k, 33% at 80–90k.
  - That coverage expired January 1, 2023.
  - TSB 23-2143 (May 2023) replaces all four VCT units at about 9.8 hours of labor.
  - (A) https://static.nhtsa.gov/odi/tsbs/2022/MC-10209366-0001.pdf
- **10R80 harsh or erratic shifting.** CR lists "transmission major" as a trouble spot on the 2020 Expedition (A, CR page). Class-action material was not verified in this pass.

**Evidence**
- CR (A): Expedition 2016 L, 2018 LL with 14 recalls, 2020 L, 2022 L, 2024 L; Navigator 2019 L.
- Not on the iSeeCars longevity lists.

**Inspection checklist**
1. Cold start after the engine has sat 6+ hours: listen for a 2–5 second rattle.
2. Look for code P164C or auto start-stop that does not restart.
3. 10-speed shift quality from 1 through 4.
4. Recall check.
5. On a Navigator, air-suspension function.

### Ford Bronco (2021+: 2.3 turbo, 2.7 twin-turbo, 3.0 Raptor)

**Verdict:** **Mixed.** Avoid 2021–2022 2.7 cars built May–October 2021 unless recall 24V-635 is completed.

**Known failure points**
- **Intake valves, recall 24V-635 (Ford 24S55).** 2021–2022 Broncos with 2.7 or 3.0 Nano engines built May 1–October 30, 2021: 15,835 Broncos, and the campaign also covers other Ford and Lincoln Nano-engine vehicles.
  - Cause: intake valves harder than specification from the supplier's grinding process. A valve can fracture and destroy the engine.
  - Remedy: the dealer counts engine cycles or runs high-rpm cycles, and replaces the engine if it fails the check.
  - This followed NHTSA Defect Petition DP22-001, Preliminary Evaluation PE22-007 and Engineering Analysis EA23-002. Ford reports 811 warranty claims.
  - (A) https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V635-5852.PDF ; https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V635-2546.pdf

**Evidence:** CR (A): 2021 Avg with 20 recalls; 2022 L with 23 recalls; 2024 L with 16 recalls.

**Inspection checklist**
1. VIN recall check; there are many recalls.
2. Roof, top and door leaks.
3. Evidence of the engine-cycle check or an engine replacement.
4. On manual cars, clutch condition.

### Lincoln Aviator (2020+, brief)

**Verdict:** **Avoid 2020. Mixed for 2023+.**

**Evidence:** CR (A): 2020 LL with 30 recalls; 2023 Avg with 16 recalls. It shares its platform with the 2020+ Explorer.

---

## 9. GENERAL MOTORS

### Chevrolet Tahoe / Suburban, GMC Yukon / Yukon XL, Cadillac Escalade

Generations:
- K2XX (2015–2020): 5.3 V8 L83 with Active Fuel Management (AFM, cylinder deactivation) or 6.2 V8 L86. Transmissions: 6-speed 6L80, 8-speed 8L90, or 10-speed 10L80 depending on year and engine.
- T1XX (2021+): 5.3 V8 L84 or 6.2 V8 L87, both with Dynamic Fuel Management (DFM); 3.0 Duramax diesel; 10-speed 10L80.

**Verdict:** **Mixed.**
- **Avoid:** any 2021–2026 6.2 L87 until NHTSA's engineering analysis EA26005 is resolved.
- **Caution:** 5.3 lifter failures on both AFM and DFM engines.
- **Best buys:**
  - 2021–2024 5.3 L84 Tahoe or Suburban, with evidence of lifter health. J.D. Power gave the Tahoe its Large SUV award for the 2021, 2022 and 2023 model years, but CR rates these years L or LL.
  - Or a 2019–2020 K2XX 5.3 with documented service. J.D. Power gave awards to the 2019 Suburban and 2020 Tahoe, but CR rates 2019 L.

**Known failure points**
- **6.2 L87 engine failure, recall 25V-274.**
  - Covers 2021–2024 Escalade/ESV, Tahoe, Suburban, Yukon/XL and Silverado/Sierra 1500 with engines built March 1, 2021–May 31, 2024: 597,571 vehicles.
  - Causes: sediment damaging the rod bearings, and crankshafts out of specification.
  - Remedy: an inspection, then either a switch to thicker oil or an engine replacement.
  - (A) https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V274-5347.pdf
- **NHTSA EA26005, opened August 20, 2026.**
  - Covers 997,743 vehicles, 2021–2026 model years with the L87.
  - Engines are failing after the recall remedy: 499 complaints to NHTSA (473 after the oil change, 26 after an engine replacement). GM itself reports 6,953 post-remedy failure complaints.
  - A further 191 failures are in engines built after May 2024, outside the recall window.
  - (A) https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf
  - Earlier investigation: PE25001 (Jan 2025), 877,710 vehicles (B: GM Authority https://gmauthority.com/blog/2025/01/nhtsa-opens-investigation-regarding-gm-6-2l-v8-engine-failures/).
- **AFM/DFM lifter failure (5.3 and 6.2, 2014–2021+).** Harrison v. GM (E.D. Mich. 2:21-cv-12927) alleges collapsed lifters, bent pushrods and misfires. The complaint cites lifter repairs around $3,300 and engine replacements over $10,000 (C, allegation): https://www.classaction.org/media/harrison-et-al-v-general-motors-llc.pdf
- **8L90/8L45 8-speed shudder and harsh shifts (2015–2019 model years).** In Speerly v. GM (6th Cir. en banc, June 27, 2025), the court vacated certification of a class of about 800,000 buyers. The opinion recites the case record:
  - Fluid that absorbs moisture caused shudder. GM's moisture-resistant "Mod1a" fluid (Dec 2018) fixed most cases when dealers flushed it in.
  - GM repaired the shudder in 252,059 of these transmissions and issued about 60 TSBs for harsh shifting.
  - The record says harsh shifting "could not be resolved without a major redesign," which came with the second-generation 8-speed for 2022.
  - (C: court record, not adjudicated findings) https://caselaw.findlaw.com/court/us-6th-circuit/117435962.html

**Evidence**
- CR (A): Tahoe 2016 L, 2019 L, 2021 LL with 16 recalls, 2023 L; Suburban 2018 L ("transmission major" shown), 2022 L; Yukon 2018 L, 2022 L; Escalade n/d for 2018 and 2022.
- J.D. Power Large SUV award (A): 2019 Suburban; 2020, 2021, 2022 and 2023 Tahoe.
- iSeeCars longevity (A): Suburban 11.8% (11.6% in 2026), Yukon XL 9.0%, Yukon 7.8%, Tahoe 7.7%, Escalade ESV 6.8%. Reliability scores: Yukon 7.3, Suburban 7.2.

**Inspection checklist**
1. Identify the engine code from the glovebox RPO label: L84 or L83 is the 5.3, L87 or L86 is the 6.2.
2. For an L87, get a dealer printout of the 25V-274 remedy and whether it was an oil change or a new engine. Understand that the post-remedy risk is still under investigation.
3. Cold-start and idle ticking, and misfire codes P0300–P0308, which point to lifters.
4. On 2015–2019 8-speed cars, shudder at 25–50 mph in light throttle; ask for proof of the Mod1a fluid flush.
5. Air-conditioning condenser leaks.
6. On a Denali or Escalade with Magnetic Ride or air suspension, check the dampers and air system.

### Chevrolet Traverse — 1st gen (2009–2017, 3.6 V6 + 6-speed); 2nd gen (2018–2023, 3.6 LFY + 9-speed 9T65); 3rd gen (2024+, 2.5 turbo)

**Verdict**
- 2021–2023: **Strong.**
- 2015–2020: **Mixed.**
- 2024+: **Mixed.**

**Evidence**
- CR (A): 2016 L, 2018 L, 2020 L, 2022 M, 2024 L.
- J.D. Power 2024 VDS Upper Midsize SUV award for the 2021 Traverse (A).
- **"Shift to Park" message** (the vehicle does not recognise Park and will not shut off; DTC B000A). TSB 19-NA-206 covers 2018–2019 Traverse, 2017–2019 Acadia and 2019 Blazer. Fix: a new shifter harness and in-line jumper (A): https://static.nhtsa.gov/odi/tsbs/2024/MC-10251901-0001.pdf
- A settlement in Jefferson & Riley v. GM (Ohio and Tennessee buyers only) pays $500 plus up to $375 (C): https://stplawsuit.com/

**Inspection checklist**
1. Cycle into Park and shut down 10 times; watch for the Shift-to-Park message.
2. 9-speed shift quality.
3. Infotainment freezes; CR owner comments flag this on the 2024.

### Chevrolet Blazer (2019+, 2.5, 2.0 turbo, 3.6 V6)

**Verdict:** **Mixed.**

**Evidence**
- CR (A): 2019 L, 2022 Avg.
- J.D. Power 2023 VDS Midsize SUV award for the 2020 Blazer (A).
- The 2019 is covered by the Shift-to-Park TSB (A).

### GMC Acadia — 2nd gen (2017–2023: 2.5, 2.0 turbo, 3.6); 3rd gen (2024+, 2.5 turbo)

**Verdict**
- 2020–2023: **Mixed.**
- 2024–2025: **Avoid.** CR lists it among the least reliable vehicles.

**Evidence**
- CR (A): 2020 L, 2022 Avg. The CR 2026 report card lists the redesigned Acadia among the least reliable.
- J.D. Power 2025 VDS Upper Midsize SUV award for the 2022 Acadia (A).
- 2017–2019 models are covered by the Shift-to-Park TSB (A).

---

## 10. STELLANTIS (JEEP / DODGE)

### Jeep Grand Cherokee — WK2 (2011–2021: 3.6 V6, 5.7 V8, 3.0 EcoDiesel, SRT); WL (2022+: 3.6 V6, 5.7 V8, 4xe plug-in hybrid; 3-row Grand Cherokee L from 2021)

**Verdict**
- WK2: **Mixed-to-Avoid.**
- WL 2022–2023: **Avoid.**
- 4xe: **Avoid.**

**Known failure points**
- **WL rear coil springs.** Springs may be incorrectly installed and can detach while driving.
  - Recall 23V-413 (FCA 64A): 331,401 2022–23 Grand Cherokee and 2021–23 Grand Cherokee L.
  - Re-recall 26V-051 (January 2026): 80,620 vehicles that were repaired incorrectly under 64A or never completed it. FCA cites 284 warranty claims. Vehicles with air suspension are excluded.
  - (A) https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V051-3975.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V413-2769.pdf
- **5.7 HEMI "tick".** A suit alleges lifter and camshaft failures on the 5.7 and 6.4 HEMI, covering 2014–2022 Grand Cherokee and 2014–2021 Durango. Nationwide class claims were dismissed in September 2024; state-level claims continue. FCA service bulletin (STAR case S1709000010) addresses cam lobe and lifter roller wear (C): https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml
- **3.6 Pentastar rocker arms and lifters.** Maugain v. FCA alleges failures on 2014–2015 Grand Cherokee (and Durango and Wrangler). The complaint cites repairs of about $1,700–$2,200 (C).

**Evidence**
- CR (A): 2015 L, 2018 L, 2020 L, 2022 L with 23 recalls, 2024 L with 18 recalls. CR also lists the Grand Cherokee PHEV among the least reliable, and Jeep ranks last among brands.

**Inspection checklist**
1. On a WL, VIN check for 64A and 26V-051.
2. On a HEMI, listen for tick and check for misfires.
3. On a Pentastar, listen for a tick from the rocker arms.
4. Air suspension on WK2 Overland and Summit trims.
5. Electrical faults.

### Jeep Wrangler — JK (2007–2018; in scope 2015–2018, 3.6 V6); JL (2018+, 3.6 V6, 2.0 turbo, 4xe)

**Verdict:** **Mixed / Avoid for reliability.** Buy one for its purpose, not for dependability.
- **Avoid:** 2016 JK (CR LL) and 2018–2019 JL.

**Known failure points**
- **JL "death wobble."** Sustained steering shimmy above 55 mph after a bump, especially below 40°F.
  - FCA Customer Satisfaction Notification V41 (August 2019) gave about 192,000 2018–2019 JLs a free upgraded steering damper (A): https://static.nhtsa.gov/odi/tsbs/2020/MC-10175528-9999.pdf
  - The Reynolds v. FCA settlement (preliminarily approved January 2023) adds an 8-year/90,000-mile warranty on the steering damper for 2018–2020 Wrangler and 2020 Gladiator (C): https://www.carcomplaints.com/news/2023/jeep-death-wobble-lawsuit-settlement-steering-dampers.shtml
  - NHTSA also opened Defect Petition DP18-004, then Preliminary Evaluation PE19-012, into frame welds and steering on 2018–2019 JLs. This is recited in the court opinion (C).
- CR's used-car avoid list, as covered by SlashGear, includes the 2016, 2019, 2021 and 2022 Wrangler (C).

**Evidence**
- CR (A): 2016 LL, 2018 L with 14 recalls, 2020 L, 2023 L.
- iSeeCars: Wrangler Unlimited 4.5% longevity, just above the 4.3% SUV average (A).

**Inspection checklist**
1. Highway test over expansion joints.
2. Steering damper, track bar and ball joints.
3. Frame welds on a 2018–2019.
4. Leaks.
5. On manual cars, clutch.
6. On 4xe, the battery recalls.

### Dodge Durango (WD, 2014+: 3.6 V6, 5.7 V8, 6.4 SRT)

**Verdict:** **Mixed.**

**Best buys:** 2016–2019 3.6. CR rated both years Avg.

**Evidence**
- CR (A): 2016 Avg, 2019 Avg, 2022 L.
- The HEMI tick and Pentastar rocker allegations above apply (C).

**Inspection checklist:** same engine checks as the Grand Cherokee.

---

## 11. VOLKSWAGEN

### Volkswagen Atlas / Atlas Cross Sport (2018+: 2.0 turbo, 3.6 VR6 through 2023, 2.0 turbo only from 2024)

**Verdict**
- 2018: **Avoid.**
- 2020–2022: **Mixed.** CR rates these about average.
- 2024: **Mixed.** CR rates it below average.

**Known failure points (A)**
- **Passenger airbag may be switched off.** A wiring fault in the passenger occupant detection system (PODS) can disable the passenger airbag while the seat is occupied.
  - 2023 recall: 143,053 2018–2021 Atlas and 2020 Atlas Cross Sport. NHTSA advised owners not to let anyone sit in the front passenger seat until repaired: https://www.nhtsa.gov/press-releases/vw-recall-faulty-front-passenger-detection-system
  - Recall 24V-464: 271,330 2021–2024 Atlas and 2020–2024 Atlas Cross Sport. The sensor mat and harness are replaced: https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V464-6990.pdf

**Evidence:** CR (A): 2018 L with 16 recalls, 2020 Avg, 2022 Avg, 2024 L.

**Inspection checklist**
1. Airbag warning and "PASSENGER AIRBAG OFF" light behaviour with an adult in the seat.
2. PODS recalls closed.
3. Water pump and coolant leaks (D-level lead).

---

## 12. LUXURY (brief)

### Cadillac Escalade (2015+)
**Verdict:** **Avoid 2021+ with the 6.2 L87** (all 2021+ gas Escalades) until EA26005 is resolved. **Mixed** for 2015–2020.
- CR: n/d.
- iSeeCars: Escalade ESV 6.8% longevity; reliability 7.4 (A).
- See the GM section for the L87 and 8L90 details.

### Lincoln Navigator
See Expedition: cam phasers on 2018–2020 and CR 2019 L (A). **Mixed.**

### BMW X5 — F15 (2014–2018); G05 (2019+)
**Verdict:** **Mixed.** Prefer 2021–2023 G05.
- CR (A): 2016 L, 2019 L with 13 recalls, 2022 MM.
- J.D. Power 2023 VDS Upper Midsize Premium SUV award for the 2020 X5 (A).
- Not researched in depth. The case for a strong verdict on the 2022 was not stress-tested.

### Mercedes GLE — W166 (2016–2019); W167 (2020+)
**Verdict:** **Mixed.** Avoid 2020.
- CR (A): 2017 M, 2020 LL with 36 recalls, 2023 Avg.
- CR 2026 report card: Mercedes ranks lowest of the European brands, and the GLS sits at the bottom of its category (A).

### Audi Q7 — 4M (2017+)
**Verdict:** **Mixed.** Avoid 2017.
- CR (A): 2017 L, 2020 L, 2023 Avg.
- Owner reports of oil consumption on the 2017 are D/C-level only (Jalopnik, NHTSA owner complaints).

---

## (1) SEGMENT RANKING — best used buys, midsize, 3-row and full-size SUVs, 2015–2025

Each entry gives the model, years and engine; why it ranks there; and the grade of the weakest load-bearing claim.

| # | Buy | Why | Weakest grade |
|---|---|---|---|
| 1 | **Lexus GX460 2015–2023, 4.6 V8** | CR M or MM every year sampled; J.D. Power Midsize Premium SUV award for the 2022 and 2023 models; iSeeCars 18.3% → 23.3%; falsification found only a KDSS TSB and the Denso pump recall | A |
| 2 | **Toyota 4Runner 2015–2024, 4.0 V6** | CR M or MM every year (MM for 2021 and 2024); J.D. Power awards for the 2021 and 2023 models; iSeeCars 32.9–33.1%; no engine or transmission campaigns | A |
| 3 | **Toyota Sequoia 2015–2022, 5.7 V8** | iSeeCars #1 for longevity (39.1% → 42.3%); reliability score 8.1; falsification clean except the Denso pump. CR has too little data, and longevity is model-level | A for longevity (the 2026 figure is B) |
| 4 | **Lexus RX350 / RX450h 2016–2022** | CR M (2016), MM (2022); J.D. Power Midsize Premium SUV award for the 2019, 2020 and 2021 models; RX Hybrid 17–28.9% longevity | A |
| 5 | **Toyota Highlander Hybrid 2020–2024** | CR M (2021); iSeeCars 31.0% / 20.7%; hybrid system clean apart from the fuel-tank TSB (C for the class action) | A |
| 6 | **Toyota Highlander 2015–2016 V6 (6-speed); 2021 and 2023–2024 gas** | CR M; J.D. Power Upper Midsize SUV award for the 2020 model; the 6-speed avoids the UA80 8-speed | A. The UA80 risk on 2017–2022 is C/A: the TSB is narrow, the class action is an allegation |
| 7 | **Toyota Land Cruiser 2016–2021 / Lexus LX570 2016–2021, 5.7 V8** | iSeeCars reliability 8.5 (#1 large SUV); falsification clean. Thin data: no CR verdict and not on the longevity list | A, but thin |
| 8 | **Honda Pilot 2021–2022, 3.5 V6** | CR M (2021), MM (2022); outside the PE25008 years (2016–2020) and the 25V-031 years (2023+) | A |
| 9 | **Nissan Murano 2019–2024, 3.5 V6 CVT (2-row)** | CR Avg (2019), MM (2022); J.D. Power Midsize SUV award for the 2022 and 2023 models | A. The CVT is an inherent aging risk |
| 10 | **Toyota Grand Highlander 2025** | CR MM, but only one year of data; the 2024 airbag recall is closed on 2025 builds | A, provisional |
| 11 | **Honda Passport 2021–2025** | CR M (2021); not named in PE25008 | A |
| 12 | **Chevrolet Traverse 2021–2023, 3.6** | CR M (2022); J.D. Power Upper Midsize SUV award for the 2021 model | A |
| 13 | **Acura MDX 2014–2015, 3.5 + 6-speed** | CR M (2015); predates the 9-speed and the PE25008 years | A |

## (2) AVOID LIST

| Avoid | Reason | Grade |
|---|---|---|
| **2021–2026 GM 6.2 V8 L87** (Tahoe, Suburban, Yukon, Yukon XL, Escalade) | Recall 25V-274; NHTSA EA26005 on engines failing after the remedy (6,953 complaints reported by GM) and failures in engines built after the recall window | A |
| **Lexus LX600 2022–2024, GX550 2024 (gas V35A)**, unless the engine remedy is documented | Recalls 24V-381 and 25V-767 for machining debris causing main-bearing failure; CR rates the 2024 GX L | A |
| **Ford Explorer 2020–2022** (and 2016) | CR LL (2020) and L; 35 and 25 recalls; rear axle bolt recalls including a re-recall | A |
| **Mazda CX-90 2024** (2025 is borderline) | CR LL; 11 recalls including several loss-of-drive-power software faults; predicted reliability 23/100 | A |
| **Ford Expedition / Lincoln Navigator 2018** | CR LL; 14 recalls; cam-phaser program has expired | A |
| **Jeep Grand Cherokee WL 2022–2023 and any 4xe** | CR L with 23 recalls; coil-spring recall re-issued after faulty repairs; CR lists the PHEV among the least reliable | A |
| **Jeep Wrangler 2016 JK; 2018–2019 JL** | CR LL (2016) and L; death wobble; 14 recalls on the 2018 | A |
| **Subaru Ascent 2019** | CR L with 9 recalls; two CVT chain recalls; missed-weld recall; heater fire recall | A |
| **Hyundai Santa Fe Sport 2015–2018 and Kia Sorento 2016–2019 with Theta II 2.4 direct-injection or 2.0 turbo**, without KSDS and recall proof | Connecting-rod bearing failure and fires; NHTSA $210M consent orders | A (settlement terms C) |
| **Kia Sorento 2021–2022 and Hyundai Santa Fe 2021–2022 with 2.5 turbo + dual-clutch**, without the recall remedy | Electric oil pump fault causes total loss of drive; recalls 22V-760 and 22V-746 | A |
| **Honda Pilot 2016–2020 / Acura MDX 2016–2020** (caution rather than absolute avoid) | CR L every year; recall 23V-751; open investigation PE25008 into rod-bearing failures (3,012 reports) | A |
| **Lincoln Aviator 2020; Mercedes GLE 2020** | CR LL; 30 and 36 recalls | A |
| **Nissan Pathfinder 2015–2016** | CR L; CVT coverage has expired | A |
| **GMC Acadia 2024–2025** | Among CR's least reliable vehicles | A |
| **Ford Bronco 2021–2022 2.7 or 3.0 Nano built May–October 2021**, without the 24V-635 remedy | Intake valves can fracture and destroy the engine | A |
| **Volkswagen Atlas 2018** | CR L with 16 recalls, including the passenger airbag sensor | A |
| **Mazda CX-9 2015 (3.7 V6)** | Internal water-pump design; class-action allegation | C |

## (3) REMOVED / DOWNGRADED (brand reputation overridden by model-year evidence)

1. **Toyota Sequoia 2023+:** downgraded to Mixed. CR rates 2024 L and there are several recalls. The lead that the Sequoia's V35A engine has been recalled was **refuted**: the debris recalls cover gas engines only. It is still an early generation that shares the engine family.
2. **Lexus GX550 (2024) and LX600 (2022–2024):** downgraded from "Lexus = reliable" to Avoid until the engine remedy is documented.
3. **Honda Pilot 2016–2020 and Acura MDX 2016–2020:** Honda's reputation and the Pilot's 13.1% iSeeCars longevity are overridden by CR rating every year L, the 23V-751 recall and the open PE25008 investigation.
4. **Chevrolet Tahoe 2021+:** four J.D. Power Large SUV awards are overridden by CR's LL and L ratings and, for the 6.2, the recall and open EA26005 investigation.
5. **Kia Telluride:** a critics' favourite, downgraded to Mixed. CR rates it L for 2020, 2023 and 2024, and a seat-motor fire recall has been re-issued (July 2026).
6. **Mazda CX-9 (2016–2023):** a strong-reputation model downgraded to Mixed. CR rates 2018, 2021 and 2023 L, and cylinder-head cracks led to a 10-year/120,000-mile extended coverage program.
7. **Toyota Highlander 2017–2022 V6:** downgraded from Top to Strong because of the UA80 8-speed whine (narrow TSB, broader allegations) and CR's Avg for 2020.
8. **Hyundai/Kia 2019 Santa Fe and Sorento:** not upgraded despite J.D. Power awards, because CR rates the 2019 Sorento L and the Theta II history weighs against them.
9. **Upgraded against brand reputation: Nissan Murano 2019–2024.** CR rates 2022 MM and J.D. Power named it the best Midsize SUV twice, despite Nissan's CVT reputation.
10. **Removed: Toyota Land Cruiser 200 as a "Top pick."** Held at Strong because the data is thin: no CR verdict and not on the longevity list.

## (4) CONTRADICTION LOG

| # | Conflict | How it was handled |
|---|---|---|
| 1 | J.D. Power gave the Tahoe its Large SUV award for the 2020, 2021, 2022 and 2023 models (A), but CR rates the 2021 Tahoe LL and the 2023 L (A). The 6.2 L87 is also under recall and investigation (A). | The two measure different things. J.D. Power counts problems per 100 vehicles among original owners across all engines, mostly the 5.3. CR weights problem severity. The L87 failures are engine-specific. The report splits 5.3 from 6.2 and rates the model Mixed. |
| 2 | iSeeCars gives the Honda Pilot 13.1% longevity and a 7.6 reliability score, but CR rates every year 2015–2020 L and NHTSA has opened PE25008 on 2016–2020. | iSeeCars scores are model-level and blend generations. Year-level CR data and the NHTSA probe were given more weight. |
| 3 | J.D. Power gave the 2019 Kia Sorento and 2019 Hyundai Santa Fe awards, but CR rates the 2019 Sorento L and the 2019 Santa Fe Avg, and the Theta II engines have a consent-order history. | Engine-specific risk (Theta II) was given priority. Neither was upgraded. |
| 4 | iSeeCars gives the Explorer a 7.3 reliability score and places it on its 3-row list, but CR rates the 2020 LL and the 2022 and 2024 L, with 35, 25 and 10 recalls. | CR's per-year data and NHTSA recalls were given more weight. |
| 5 | iSeeCars ranks the Sequoia #1 for longevity, but CR rates the 2024 Sequoia L. | Different generations. The longevity data reflects the 5.7 V8 generation, so the verdict is split by generation. |
| 6 | Toyota's UA80 TSB is narrow (2021 Highlanders in one serial range), while forums and a class action allege broad 2017–2022 failures. | Both are reported. The widespread-failure claim is graded C/D; the TSB is graded A. |
| 7 | The CX-9 has a good reputation and a 7.3 iSeeCars score, but CR rates 2018, 2021 and 2023 L. | CR was given more weight. The head-crack campaign is graded A. |
| 8 | Nissan's CVT reputation versus CR's MM for the 2022 Murano and two J.D. Power awards. | The evidence was given more weight; the Murano is rated Strong. |
| 9 | J.D. Power's 2026 GX award (for the 2023 GX460) versus CR's L for the 2024 GX. | Different generations (GX460 versus GX550); no real conflict. |
| 10 | Car and Driver (2026-09-13) repeated the 2025 iSeeCars figures (Sequoia 39.1%), while Forbes and autoevolution in September 2026 report a new study (Sequoia 42.3%). The iSeeCars page, as fetched, still showed 2025. | Both editions are reported. The 2026 figures are graded B (two outlets). |
| 11 | The Honda Passport uses the J35Y6 engine family but is not named in PE25008. | The Passport is kept at Strong but flagged as uncertain. |
| 12 | CR's CX-9 verdicts for 2021–2023 are L even though those cars were built after the head-crack fix. | CR's verdict was not overridden. The CX-9 stays Mixed. |

## (5) FALSIFICATION PASS LOG (for each Top pick; Exa searches run 2026-09-26, because the WebSearch session budget was used up partway through)

| Top pick | Search run | What was found | Effect on verdict |
|---|---|---|---|
| Toyota 4Runner 2015–2024 | "Toyota 4Runner 2015-2024 problems recall engine failure transmission failure class action warranty extension" | Only the Denso fuel pump recall (20V-012; 2014–15 and 2018–19 4Runner). A class action over the 8-speed in the 2024+ Tacoma, which is relevant only to the 2025+ 4Runner. No engine or A750 campaign. | Stays Top for 2015–2024. 2025+ held at Strong (provisional). |
| Lexus GX460 2015–2023 | "Lexus GX460 2015-2023 problems recall engine failure transmission failure class action warranty extension KDSS air suspension" | KDSS lean TSB (covered by warranty); AI-pump warranty enhancement only for 2010–2013; Denso pump on 2018–19. Nothing on the engine or transmission. | Stays Top. |
| Toyota Sequoia 2015–2022 | "Toyota Sequoia 2015-2022 5.7 V8 problems recall engine failure transmission failure class action warranty extension" | AI-pump programs only for 2007–2013; Denso pump on 2018–2020. No 5.7 or 6-speed campaign. | Stays Top, with the CR data gap noted. |
| Lexus RX 2016–2022 | "Lexus RX 350 2016-2022 problems recall engine failure transmission class action warranty extension 2GR-FKS oil leak timing cover" | 2016–2018 cam-housing oil leak TSB; Denso pump; the UA80 class action alleges defects only on 2023+ RX350s. | Stays Top for 2016–2022, with an oil-leak inspection item. |
| Toyota Highlander Hybrid 2020–2024 | "Toyota Highlander Hybrid 2020-2024 problems recall hybrid system failure inverter class action warranty extension fuel tank" | Fuel-tank refill TSB and the Prince v. Toyota class action (usable capacity); an instrument-panel software recall (25TB08). No hybrid-system or inverter recall. | Stays Top. |
| Toyota Highlander 2015–2016 V6 | "Toyota Highlander 2023 2024 2.4L turbo problems recall; Highlander 2017-2019 V6 8-speed issues" and "Toyota UA80 8-speed transmission class action Highlander 2017-2022 …" | Transmission issues are concentrated on the UA80 (2017+). For 2015–16, only the 2GR timing-cover oil seep (D) turned up. | Top for the 2015–16 6-speed. |
| Land Cruiser 200 / LX570 (held at Strong) | "Toyota Land Cruiser 200 2016-2021 Lexus LX570 problems recall engine failure transmission class action warranty extension" | Only the Denso pump recalls. | Strong. Not raised to Top because the evidence is thin. |

## (6) FULL SOURCE LIST

### Grade A: Consumer Reports' own pages (fetched September 2026)
Each is a model-year reliability page:
`https://www.consumerreports.org/cars/{make}/{model}/{year}/reliability/`

Pages used:
- toyota/4runner: 2015, 2017, 2019, 2021, 2023, 2024, 2025
- toyota/highlander: 2015, 2017, 2019, 2020, 2021, 2023, 2024
- toyota/highlander-hybrid: 2021
- toyota/grand-highlander: 2024, 2025
- toyota/sequoia: 2018, 2023, 2024
- toyota/land-cruiser: 2019, 2024
- toyota/venza: 2021
- lexus/rx: 2016, 2019, 2022, 2023, 2024
- lexus/gx: 2016, 2020, 2023, 2024, 2025
- lexus/lx: 2019
- lexus/tx: 2024
- honda/pilot: 2015–2025
- honda/passport: 2019, 2021, 2023
- acura/mdx: 2015, 2017, 2019, 2020, 2022, 2024
- mazda/cx-9: 2016, 2018, 2021, 2023
- mazda/cx-90: 2024, 2025
- subaru/ascent: 2019, 2020, 2022, 2024
- kia/telluride: 2020–2024
- hyundai/palisade: 2020–2024
- kia/sorento: 2016, 2019, 2021, 2023
- hyundai/santa-fe: 2016, 2017, 2019, 2021, 2024
- nissan/pathfinder: 2015, 2017, 2019, 2022, 2024
- nissan/murano: 2016, 2019, 2022
- nissan/armada: 2018, 2021, 2025
- ford/explorer: 2016, 2018, 2020, 2022, 2024
- ford/expedition: 2016, 2018, 2020, 2022, 2024
- ford/edge: 2016, 2019, 2022
- ford/bronco: 2021, 2022, 2024
- chevrolet/tahoe: 2016, 2019, 2021, 2023
- chevrolet/suburban: 2018, 2022
- gmc/yukon: 2018, 2022
- cadillac/escalade: 2018, 2022
- chevrolet/traverse: 2016, 2018, 2020, 2022, 2024
- chevrolet/blazer: 2019, 2022
- gmc/acadia: 2017, 2020, 2022
- jeep/grand-cherokee: 2015, 2018, 2020, 2022, 2024
- jeep/wrangler: 2016, 2018, 2020, 2023
- dodge/durango: 2016, 2019, 2022
- volkswagen/atlas: 2018, 2020, 2022, 2024
- bmw/x5: 2016, 2019, 2022
- mercedes-benz/gle: 2017, 2020, 2023
- audi/q7: 2017, 2020, 2023
- lincoln/aviator: 2020, 2023
- lincoln/navigator: 2019

Other CR pages:
- 2026 Report Card press release: https://www.consumerreports.org/media-room/press-releases/2025/12/consumer-reports-releases-its-2026-automotive-brand-report-card-the-comprehensive-analysis-of-vehicle-quality-to-help-guide-car-shoppers-amid-steep-prices/
- 10 Least Reliable Cars of 2026: https://www.consumerreports.org/cars/car-reliability-owner-satisfaction/10-least-reliable-cars-a2967595976/
- Used cars to avoid (paywalled; list content via SlashGear, C): https://www.consumerreports.org/cars/used-cars-to-avoid-buying-a4034931071/

### Grade A: J.D. Power
- https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds
- https://www.jdpower.com/cars/ratings/dependability/2025
- https://www.jdpower.com/cars/ratings/dependability/2024
- https://www.jdpower.com/cars/ratings/dependability/2023
- https://www.jdpower.com/cars/ratings/dependability/2022
- Toyota pressroom on the 2024 VDS awards: https://pressroom.toyota.com/more-than-half-of-eligible-lexus-toyota-models-receive-segment-awards-in-j-d-power-2024-u-s-vehicle-dependability-study-results/

### Grade A: iSeeCars
- https://www.iseecars.com/longest-lasting-cars-study (2025 edition)
- https://www.iseecars.com/most-reliable/most-reliable-suvs

### Grade A: NHTSA and manufacturer documents
**GM**
- 25V-274: https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V274-5347.pdf
- EA26005: https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf
- Shift-to-Park TSB 19-NA-206: https://static.nhtsa.gov/odi/tsbs/2024/MC-10251901-0001.pdf

**Toyota / Lexus**
- V35A recall press release: https://pressroom.toyota.com/toyota-recalls-certain-toyota-tundra-and-lexus-gx-and-lx-vehicles/
- Sequoia tow-hitch recall: https://pressroom.toyota.com/toyota-recalls-certain-2023-and-2024-sequoia-vehicles/
- Tundra/Sequoia display recall: https://pressroom.toyota.com/toyota-recalls-certain-tundra-tundra-hev-and-sequoia-models/
- Denso 20V-682: https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V682-3280.PDF ; https://static.nhtsa.gov/odi/rcl/2020/RCAK-20V682-2302.pdf
- Denso 20V-012: https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V012-6185.PDF
- UA80 TSB T-SB-0008-21: https://static.nhtsa.gov/odi/tsbs/2021/MC-10188917-9999.pdf
- Highlander Hybrid fuel-tank TSB: https://static.oemdtc.com/NHTSA-PDFs/MC-10209005-9999.pdf
- GX460 KDSS TSB: https://static.nhtsa.gov/odi/tsbs/2021/MC-10201347-9999.pdf
- GX460 ZLH warranty enhancement: https://static.oemdtc.com/NHTSA-PDFs/MC-10131778-9999.pdf
- Tundra/Sequoia AI-pump ZG6: https://static.oemdtc.com/NHTSA-PDFs/MC-10132382-9999.pdf
- RX350 cam-housing TSB: https://static.nhtsa.gov/odi/tsbs/2018/MC-10143945-9999.pdf

**Honda**
- 23V-751: https://static.nhtsa.gov/odi/rcl/2023/RCRIT-23V751-3696.PDF
- PE25008: https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf
- 25V-031: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V031-9774.pdf

**Kia / Hyundai**
- Telluride NHTSA alerts: https://www.nhtsa.gov/press-releases/park-outside-recall-kia-tellurides ; https://www.nhtsa.gov/press-releases/kia-telluride-recall-fire-risk
- 22V-626: https://static.nhtsa.gov/odi/rcl/2022/RMISC-22V626-7113.pdf
- 22V-633: https://static.nhtsa.gov/odi/rcl/2022/RCAK-22V633-7960.pdf
- 22V-760: https://static.nhtsa.gov/odi/rcl/2022/RCLRPT-22V760-3227.PDF
- 22V-746: https://static.nhtsa.gov/odi/rcl/2022/RCMN-22V746-7969.pdf
- Theta II consent orders: https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall
- Engine II settlement sites: https://www.hma-e2settlement.com/ ; https://kiaengineclasssettlement.com/

**Subaru**
- 19V-855: https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V855-4223.pdf
- WRK-21 extension TSB: https://static.nhtsa.gov/odi/tsbs/2022/MC-10216977-0001.pdf
- 22V-907: https://static.nhtsa.gov/odi/rcl/2022/RCRIT-22V907-9194.pdf

**Ford**
- 23V-675: https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V675-7191.PDF
- 25V-166: https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V166-9088.PDF
- CSP 21N03: https://static.nhtsa.gov/odi/tsbs/2022/MC-10209366-0001.pdf
- 24V-635: https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V635-5852.PDF ; https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V635-2546.pdf

**Stellantis**
- 26V-051: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V051-3975.pdf
- 23V-413: https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V413-2769.pdf
- Jeep CSN V41: https://static.nhtsa.gov/odi/tsbs/2020/MC-10175528-9999.pdf

**Nissan**
- CVT extension bulletin: https://static.nhtsa.gov/odi/tsbs/2022/MC-10218703-0001.pdf
- Settlement site: https://roguepathfinderqx60cvtsettlement.com/
- 25V-437: https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V437-3628.pdf

**Mazda**
- CX-9 TSB 01-002/23: https://static.nhtsa.gov/odi/tsbs/2023/MC-10232269-0001.pdf
- CSP11: https://static.nhtsa.gov/odi/tsbs/2024/MC-11011136-0001.pdf
- CX-90 recall bulletin: https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V814-3068.pdf

**Volkswagen**
- NHTSA PODS alert: https://www.nhtsa.gov/press-releases/vw-recall-faulty-front-passenger-detection-system
- 24V-464: https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V464-6990.pdf

### Grade B (two or more quality outlets) and supporting outlet coverage
- Forbes on iSeeCars 2026: https://www.forbes.com/sites/jimgorzelany/2026/09/16/heres-which-new-vehicles-data-shows-are-most-likely-to-run-for-over-250000-miles/
- autoevolution on iSeeCars 2026: https://www.autoevolution.com/news/the-toyota-sequoia-has-the-best-odds-of-hitting-250000-miles-275789.html
- Autoblog on the 2026 VDS: https://www.autoblog.com/news/2026-j-d-power-study-reveals-the-most-dependable-cars-and-suvs
- Autoblog on CR 2026: https://www.autoblog.com/carbuying/the-winners-and-losers-of-consumer-reports-2026-rankings
- CarPro on the 2026 VDS: https://www.carpro.com/blog/j.d.-power-2026-vehicle-dependability-study-results
- The Autopian on the V35A third recall: https://www.theautopian.com/toyota-just-recalled-another-43566-tundra-trucks-over-engine-problems/
- CarBuzz on V35A: https://carbuzz.com/toyota-v35fa-twin-turbo-v6-engine-recall-history/
- CarBuzz on Honda PE: https://carbuzz.com/honda-struggling-to-sort-out-v6-engine-problems/
- Car and Driver on 25V-031: https://www.caranddriver.com/news/a63620082/honda-pilot-acura-mdx-tlx-stalling-engines-recall/
- Green Car Reports on the Grand Highlander/TX recall: https://www.greencarreports.com/news/1143598_2024-toyota-grand-highlander-and-lexus-tx-hybrids-recalled-stop-sale-issued
- Motor1 on the Palisade seat belts: https://www.motor1.com/news/772755/hyundai-palisade-seat-belt-buckle-recall/
- NPR on the Telluride rollaway recall: https://npr.org/2024/04/01/1241954949/kia-recall-telluride-suvs
- GM Authority on PE25001: https://gmauthority.com/blog/2025/01/nhtsa-opens-investigation-regarding-gm-6-2l-v8-engine-failures/

### Grade C (single secondary source, class actions, court records)
- PickupTruckTalk, 4Runner 2025–26: https://pickuptrucktalk.com/2026/08/2025-2026-toyota-4runner-known-problems-transmission-clunks-wrong-labels-instrument-panel-shutoffs/
- PickupTruckTalk, Highlander 2020–26: https://pickuptrucktalk.com/2026/07/2020-2026-toyota-highlander-known-problems-loose-2nd-row-seats-ecu-stalls-transmission-whining/
- PickupTruckTalk, Sequoia 2023–26: https://pickuptrucktalk.com/2026/06/2023-2026-toyota-sequoia-known-problems-engine-concerns-transmission-creep-and-recalls/
- PickupTruckTalk, Tundra second recall: https://pickuptrucktalk.com/2025/12/second-toyota-tundra-engine-failure-recall-issued-due-to-thousands-of-failures-two-fixes-confirmed/
- Speerly v. GM (6th Cir. 2025): https://caselaw.findlaw.com/court/us-6th-circuit/117435962.html
- Harrison v. GM complaint: https://www.classaction.org/media/harrison-et-al-v-general-motors-llc.pdf
- Roe v. Ford complaint: https://www.courthousenews.com/wp-content/uploads/2018/08/FordPumps.pdf
- LeBoutheller v. Toyota complaint: https://www.classaction.org/media/leboutheller-v-toyota-motor-sales-usa-inc-et-al-complaint.pdf
- Beasley Allen on the Tacoma 8-speed suit: https://www.beasleyallen.com/article/class-action-filed-toyota-transmission-troubles/
- Maugain v. FCA complaint: https://www.classaction.org/media/maugain-et-al-v-fca-us-llc.pdf
- HEMI tick suit status: https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml
- Jeep damper settlement: https://www.carcomplaints.com/news/2023/jeep-death-wobble-lawsuit-settlement-steering-dampers.shtml
- Theta II settlement (class counsel): https://www.hbsslaw.com/cases/hyundai-kia-engine-I-fire-hazard-theta-II-GDI
- Shift-to-Park settlement: https://stplawsuit.com/
- Highlander fuel-tank suit: https://topclassactions.com/lawsuit-settlements/lawsuit-news/toyota-class-action-alleges-highlander-fuel-tanks-dont-fill-all-the-way/
- SlashGear, coverage of CR's avoid list: https://www.slashgear.com/2152128/used-cars-to-avoid-consumer-reports-most-surprising-models/
- Jalopnik, least reliable used SUVs: https://www.jalopnik.com/2102453/least-reliable-used-suvs-avoid/

### Grade D (leads only, not load-bearing)
- Owner forums: toyotanation, piloteers, ascentforums, 4runner6g
- Torque News
- Lemon-law firm blogs
- CarComplaints complaint counts
- Go-Parts, cherishyourcar and similar guides

### Research limitations
- CR detail (the trouble-spot scores) is paywalled; only the one-line verdicts were used. Some CR pages returned the current-model prediction rather than the requested year; this is noted where it happened.
- The WebSearch session budget ran out partway through, so the rest of the research used Exa search and fetch.
- Not researched in depth:
  - Durango and Grand Cherokee transmission issues
  - 2011–2019 Explorer exhaust odor
  - 10R80 and 10R60 class actions
  - European-model specifics
  - Land Cruiser 250 recalls
  - 2025+ Armada and Murano field data
- No repair-cost data was taken from RepairPal. The only costs quoted come from TSB labor times and class-action complaints, and are marked C.
