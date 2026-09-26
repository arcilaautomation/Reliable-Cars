# 02 — Systemic powertrain & safety defects, US vehicles MY2015–2025 (used-buyer view)

Research agent 02 of 7. Research date: 2026-09-26. Scope: multi-model engine, transmission, and safety defects a US used-car buyer (sedan/compact, SUV/crossover, pickup) should know about, plus buyer tools. Hybrids/EVs are out of scope as a category; plug-in items appear only where the user named them.

**Grading key.** A = primary source (NHTSA recall or investigation document, manufacturer TSB, warranty letter or press release, court or settlement document, government agency). B = two or more independent quality outlets agree. C = one secondary source, or a class-action complaint (an allegation, not proof). D = forum, listicle, dealer or law-firm blog; treat as a lead only.

**Method note.** WebFetch could not reach static.nhtsa.gov, pressroom.toyota.com or thedrive.com because the egress proxy blocked them. I read those documents through the Exa fetch tool. The session's WebSearch budget ran out partway through, so the rest of the research used Exa search. I made about 105 searches and fetches in total.

---

## 0. Summary table

| # | Defect | Makes / models | Model years (engines) | Severity | Remedy / extension | Status as of Sept 2026 | Grade |
|---|---|---|---|---|---|---|---|
| 1 | V35A 3.4L twin-turbo V6 main-bearing failure (machining debris) | Toyota Tundra (non-hybrid), Lexus LX 600, Lexus GX 550 | 2022–2024 Tundra; 2022–2024 LX; 2024 GX | **Critical**: stall or loss of power at speed | 24V-381: engine replacement. 25V-767: dealer inspection software, engine replaced if the bearing can't be cleared. 26V-320: remedy under development | Three recalls totaling about 272k vehicles. More than 70k engines replaced. Remedy for 25V-767 and 26V-320 still being rolled out | A |
| 2 | L87 6.2L V8 rod/crank failure | Silverado/Sierra 1500, Tahoe, Suburban, Yukon/XL, Escalade/ESV | 2021–2024 (built 3/1/2021–5/31/2024) | **Critical** | 25V-274: inspect, then replace the engine or switch to 0W-40 oil | **NHTSA EA26005 opened 8/20/2026** covering 997,743 MY2021–2026 L87 vehicles: remedy adequacy plus failures outside the recall range | A |
| 3 | Honda/Acura J35 3.5L V6 rod-bearing failure | Pilot, Odyssey, Ridgeline, MDX, TLX V6 | Recall 23V-751 covers subsets of 2015–2020. PE25008 covers 2016–2020 Pilot/MDX, 2018–2020 TLX/Odyssey, 2017–2019 Ridgeline | **Critical** (engine seizure, fire risk) | 23V-751: inspect, repair or replace the engine | **PE25008 open** since 8/20/2025 (1.41M vehicles; 3,012 reports). No expanded recall found | A |
| 4 | Hyundai/Kia Theta II GDI 2.0T/2.4 rod bearing | Sonata, Santa Fe Sport, Tucson, Optima, Sorento, Sportage | 2011–2019 | **Critical** (seizure, fire) | Recalls 15V-568, 17V-226, 17V-224 and others. **Lifetime short-block warranty** after the KSDS update | Settlement final 2021. Lifetime coverage still in force for individual owners | A |
| 5 | Hyundai/Kia Nu 2.0 GDI, Gamma 1.6 GDI, Theta II MPI | Elantra/GT, Tucson, Veloster, Forte, Soul, Sorento/Sportage MPI, Sonata/Optima hybrids | 2010–2021 depending on model | High | **15 yr/150k** from original delivery (KSDS required). Transfers to later personal owners | Judgment April 2024. Coverage running out model year by model year | A |
| 6 | Kia 2.0 Nu MPI piston oil ring | Kia Seltos, Soul | 2021–2023 | High (seizure, fire) | 25V-099: inspection, PNSS software, engine replacement if flagged | Open recall; remedy available | A |
| 7 | Hyundai/Kia ABS/HECU module fire | Many Hyundai and Kia models | 2010–2019 | **Critical** ("park outside") | 23V-651 (Hyundai) and 23V-652 (Kia): fuse replacement | Open for unrepaired VINs | A |
| 8 | Hyundai/Kia missing immobilizer (theft) | Keyed-ignition Hyundai/Kia | 2011–2022 | High (theft, insurance) | Software upgrade, zinc ignition-cylinder protector, steering-lock reimbursement | $145M class settlement payouts paused by a Supreme Court petition (May 2026). Multistate AG settlement December 2025 | A/B |
| 9 | Nissan Jatco CVT failures | Rogue, Pathfinder, QX60, Altima, Sentra, Versa/Note, Juke, Murano, Maxima | 2012–2018 (various) | High (costly) | Settlement extensions to 84 mo/84k (QX60 96/96k) | **Mostly expired by 2026** | A |
| 10 | Nissan VC-Turbo bearing failure | Rogue 1.5T (3-cyl), Altima 2.0 VC-T, QX50, QX55 | 2019–2025 | **Critical** | 25V-437 and 26V-080: oil-pan debris inspection, repair or replace, ECM reflash. **10 yr/120k long-block extension** | Active | A |
| 11 | Subaru CVT | Legacy, Outback, Forester, Impreza, Crosstrek, WRX, Ascent | 2010–2020 | Medium–High | 10 yr/100k CVT extensions (2010–2015, 2016–2017, 2018, **2019–2020 added May 2025**) | 2010–2015 expired. 2016 expiring 2026. 2017–2020 still active | A |
| 12 | Subaru battery drain | Outback, Forester, Legacy, WRX, Ascent | 2015–2020 (Ascent 2019–2020) | Low–Medium | Battery warranty schedule running to 8 yr/100k (pro-rated) | Final approval Jan 2023 | B |
| 13 | Honda 1.5T oil dilution | Civic 1.5T, CR-V 1.5T | 2016–2018 Civic, 2017–2018 CR-V | Medium | Software update plus 6 yr/unlimited-mile powertrain parts extension | **Expired** (2024 at latest). Accord 1.5T was not covered | B |
| 14 | Honda 6AT torque converter | Pilot 6AT, Ridgeline | 2017–2018 Pilot, 2017–2019 Ridgeline | Medium | TSB 23-078: 8 yr/150k torque converter | Active for later model years (a 10-yr increase is unverified) | A |
| 15 | Honda ZF 9-speed (9HP) | Pilot 9AT, Odyssey, Passport, Ridgeline | 2016–2022 Pilot, 2018–2019 Odyssey, 2019+ Passport, 2020+ Ridgeline | Medium (drivability) | Software updates; no extension found | Class action (Moore v. AHM, N.D. Cal., 2024) pending | C |
| 16 | Toyota/Lexus, Honda/Acura, Mazda Denso low-pressure fuel pump | Many | Toyota 2013–2020; Honda 2017–2020; Mazda 2018–2020 | High (stall) | Pump replacement | Recalls 20V-012/20V-682 (Toyota), 20V-314/21V-215/23V-858 (Honda, 2.54M), 21V-875 (Mazda) | A |
| 17 | Ford 1.5/1.6/2.0 EcoBoost coolant intrusion | Escape, Fusion, Edge, MKC, MKZ | 2013–2019 | High (engine loss) | CSP 21N12: one-time short-block repair, 7 yr/84k (2017–2019 Escape/Fusion 1.5L), transfers | Miller v. Ford class action pending. CSP ending for 2019 MY | A/C |
| 18 | Ford 2.7/3.0 EcoBoost intake valve fracture | Bronco, F-150, Edge, Explorer, Nautilus, Aviator | 2021–2022 | **Critical** | 24V-635: engine cycle test, replace engine as needed | Open recall | A |
| 19 | Ford DPS6 PowerShift | Focus, Fiesta | 2011–2016 | Medium–High | Vargas settlement; 7 yr/100k clutch window | Closed and expired | B |
| 20 | Ford Explorer rear axle bolt | Explorer (and PIU) | 2020–2022 | High (rollaway, loss of drive) | 22V-255 (software) → 23V-675 (bushing and bolt) → 25V-166 (botched remedy). CSP 24N01 6 yr/150k | Open for unrepaired VINs | A |
| 21 | Ford F-150 rear axle hub bolt (Max Trailer Tow, 9.75" HD axle) | F-150 | 2021–2023 (23V-896); 2023–2025 (25V-512) | High | Axle shaft replacement | Owner notification phased to May 2026 | A |
| 22 | Ford F-150 6R80 unexpected downshift | F-150 6R80 | 2015–2017 | High | None yet | **NHTSA EA26001 open** (1.27M) | A |
| 23 | Ford 10R80 harsh/erratic shift | F-150, Expedition, Mustang, Ranger, Navigator | 2017+ | Medium | TSBs; no recall | Class action survived a motion to dismiss Feb 2026 | C/D |
| 24 | Ford 3.5 EcoBoost cam phaser rattle | F-150 3.5 EB | 2017–2020 | Medium | CSP 21N03 / 21B10 | **Ended Jan 1, 2023** | C |
| 25 | GM 8L90/8L45 shudder and harsh shift | Silverado/Sierra, Tahoe/Yukon, Colorado/Canyon, Camaro, Corvette, Cadillacs | 2015–2019 | Medium | Fluid flush TSBs; no extension | 6th Cir. en banc **vacated class certification** June 2025 | A |
| 26 | GM 10L80/10L90/10L1000 valve-body wear, rear-wheel lockup | Diesel Silverado/Sierra, 2021 diesel SUVs, 2022 gas SUVs | 2020–2022 | High | 24V-797 (461,839), 26V-085 (43,732) | New class action April 2026 | A/C |
| 27 | GM AFM/DFM lifter collapse | 5.3/6.0/6.2 V8 trucks and SUVs | ~2014–2021+ | High (costly) | None | Harrison v. GM: no class certified, no recall | C |
| 28 | Stellantis 5.7/6.4 HEMI lifter/cam ("Hemi tick") | Ram, Durango, Grand Cherokee, Charger/Challenger/300 | 2014+ | High (costly) | None | Litigation weak; no recall | D |
| 29 | FCA 3.0 EcoDiesel | Ram 1500, Grand Cherokee | 2014–2016 (emissions); 2014–2019 (EGR fire) | Medium/High | Emissions fix plus 10 yr/120k extension; EGR cooler recalls | Emissions extension expiring about 2026 | A |
| 30 | Jeep "death wobble" | Wrangler JL, Gladiator | 2018–2020 JL, 2020 Gladiator | Medium–High | Steering damper covered up to 8 yr/90k | Expiring 2026–2028 | B |
| 31 | ZF 9-speed (FCA 948TE) | Cherokee, Renegade, 200, ProMaster City | 2014–2015 | Medium | 6 yr/100k extension | Expired | C |
| 32 | Jeep 4xe high-voltage battery fire | Wrangler 4xe, Grand Cherokee 4xe | 2020–2026 | **Critical** (park outside) | 25V-741 (third recall) | Remedy began rolling out Dec 2025 (Wrangler first) | A/D |
| 33 | Ram/Wagoneer eTorque stall | Ram 1500 5.7 eTorque, Wagoneer | 2019–2022 | High | 19V-142, 23V-265; PE24018 | PE24018 status unknown | A |
| 34 | Mazda 2.5T cylinder-head crack (coolant leak) | CX-9, CX-5, Mazda6 | 2016–2020 | High | **CSP11: 10 yr/120k** | Active | A |
| 35 | Mazda cylinder-deactivation rocker arm | CX-5, Mazda3, Mazda6 | 2018–2019 | High (stall) | 19V-497 software | Recall | A |
| 36 | VW 2.0 TDI "Dieselgate" | VW TDI | 2009–2015 | Medium (emissions) | Buyback or fix; Gen3 2015: 11 yr/162k emissions warranty, **fully transferable** | Expiring 2026 | A |
| 37 | VW 2.0T water pump/thermostat housing | Arteon, Atlas, Beetle, Golf family, GTI, Jetta, Passat, Tiguan | 2014–2021 | Medium | 8 yr/80k, transferable, requires coolant-maintenance proof | Active for later years | A |
| 38 | ARC toroidal inflators | 13 OEMs; about 49M vehicles | 2000–mid-2018 builds | **Critical** (rare) | Lot recalls only | NHTSA initial decision 2023/2024, paused Dec 2024; **no final decision as of mid-2026** | A/C |
| 39 | Takata PSAN stragglers | e.g. 2013–2016 Acura ILX, 2007–2016 RDX, 2011–2015 CR-Z | ≤2016 | **Critical** | Inflator replacement | Any unrepaired VIN is urgent | A |
| 40 | Honda rear subframe corrosion (salt belt) | Pilot, Ridgeline, Passport, MDX (and others) | 2014–2023 (varies) | High | 26V-365: reinforcement kit | New June 2026 recall | A |
| 41 | Toyota Grand Highlander / Lexus TX curtain airbag | Grand Highlander (incl. hybrid), TX 350/500h/550h+ | 2024 | High (FMVSS 226 noncompliance) | Anchoring redesign | Recall 24V-461 (145,254) | A |
| 42 | Toyota 4th-gen Tacoma recalls | Tacoma | 2024–2025 | Medium | Brake hoses, shock reservoirs (48k, Aug 2026), CV joint (2025) | Open | A |

---

## 1. Toyota / Lexus

### 1.1 V35A-FTS 3.4L twin-turbo V6 (Tundra i-FORCE, LX 600, GX 550): main-bearing failure (Critical)

**Failure mode.** Machining debris ("swarf") left in the engine during manufacturing can stick to the crankshaft main bearings. Toyota's Part 573 reports focus on the #1 main bearing. Under sustained high load the bearing fatigues. Symptoms are knocking, rough running, no-start, and stall or loss of motive power, sometimes at speed (A). NHTSA 25V-767 ack: https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf. 26V-320 Part 573: https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf.

**Recall 1: 24V-381** (filed May 30, 2024; Toyota 24TA07/24TB07, Lexus 24LA04/24LB04). 102,092 vehicles: 2022–2023 Tundra (about 98,600) and 2022–2023 LX 600. **Remedy: full engine assembly replacement, free** (13.6 flat-rate hours). The rollout was phased from December 2024 through May 2025 for Tundra and to September 2025 for LX. The Toyota bulletin notes the vehicle is "Salvage Title Eligible", meaning the remedy still applies on salvage-titled trucks (A).
- https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V381-9859.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V381-0422.pdf
- Lexus LX dealer bulletin with phase dates: https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V381-5346.pdf

**Recall 2: 25V-767** (filed Nov 6, 2025; Toyota 25TA14/25TB14, Lexus 25LA07/25LB07). 126,691 vehicles: 2022–2024 Tundra (113,079), 2022–2024 LX (9,895), and 2024 GX (3,717). Interim owner letters went out December 22, 2025 (A) (Toyota press release: https://pressroom.toyota.com/toyota-recalls-certain-toyota-tundra-and-lexus-gx-and-lx-vehicles/).
- **Remedy (NHTSA document updated June 15, 2026):** dealers run inspection software that reads the resonant frequency of the front of the crankshaft and collects vehicle drive data. If the software cannot confirm the #1 main bearing is free of abnormal wear, **the engine is replaced**. If there is not enough drive data, the engine is also replaced (B: The Drive quotes the NHTSA text and a Toyota spokesperson; CarBuzz and TFL agree).
  - https://www.thedrive.com/news/toyota-wont-replace-every-recalled-tundra-v6-and-some-owners-are-fed-up
  - https://carbuzz.com/toyota-tundra-recall-inspections-over-replacement/
  - https://tfltruck.com/2026/06/toyota-tundra-engine-recall-update-news/
- Toyota says trucks from the first recall still get new engines, and **more than 70,000 V35As had been replaced by June 2026**. A #1 main-bearing design change went into production and into replacement engines starting July 2024 (C: Toyota spokesperson quoted in The Drive).

**Recall 3: 26V-320** (filed May 20, 2026; same Toyota codes 25TA14/25TB14). 43,566 2024 Tundras with engines built at TMMAL (Alabama) between Feb 7 and Aug 5, 2024. Toyota's field teardown found the same #1-bearing wear pattern on these engines. At filing it had 30 field technical reports and 360 warranty claims. **Remedy under development.** Owner letters were due by July 20, 2026 (A) (https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf; ack https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V320-8328.pdf). Toyota says later engines have "an improved main bearing, and Toyota continues to monitor the effectiveness of this improvement" (A).

**Total:** 102,092 + 126,691 + 43,566 = **272,349** recalled vehicles (my sum from the A-grade Part 573s).

**i-FORCE MAX hybrid.** Toyota's 24V-381 report says other V35A configurations have "different pressure on the main bearings", and that the hybrid versions keep some motive power if the engine fails (A). CarBuzz says the hybrid is not affected by the recall (C). I found no recall of the hybrid V35A for bearing debris.

**Out-of-pocket cost.** A reported $25,000 engine swap outside warranty (D, cherishyourcar.com). Toyota's warranty time for the job is 13.6 hours (A).

**How a buyer checks.** Enter the VIN at Toyota.com/recall, Lexus.com/recall or nhtsa.gov/recalls, and ask a dealer for the campaign status in TIS. Toyota's TIS shows "24TA07 Remedy – Remedy Available", or "24TB07 Interim – Remedy Not Available" while a recall is still in its interim phase (A, bulletin above). If the recall shows as closed, ask for the repair order showing an **engine replacement**, or for 25V-767 the inspection-software result. A 2022–2024 Tundra with an **open** 25V-767 or 26V-320 recall should be priced as carrying engine-failure risk until the remedy is done.

### 1.2 Denso low-pressure fuel pump (Toyota/Lexus) (High)
- **20V-012** (Jan 13, 2020): 695,541 vehicles, 2018–2019 Toyota and Lexus. Amended March 4, 2020 to about 1,433,050 vehicles, including 2014–2015 4Runner, 2018–2019 Camry, Highlander, Sequoia, Tacoma, Tundra, Corolla and Avalon, 2017–2019 Sienna, and 2014–2015 Land Cruiser. Lexus accounted for about 397,890 of these (A). https://static.nhtsa.gov/odi/rcl/2020/RMISC-20V012-4705.pdf ; https://static.nhtsa.gov/odi/rcl/2020/RCMN-20V012-6556.pdf
- **20V-682** (Nov 4, 2020): expansion covering 1,517,721 more vehicles, e.g. 2018–2019 4Runner and 2019–2020 Avalon (A). https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V682-3280.PDF
- **Failure:** low-density impellers exposed to solvent drying absorb fuel, swell, and jam the pump. The engine runs rough, then stalls and won't restart. Hybrids other than the LS500h/LC500h go into fail-safe and got a customer-satisfaction campaign instead (A).
- **Check:** VIN lookup. An unrepaired pump is a stall risk.

### 1.3 2024 Grand Highlander / Lexus TX curtain airbag (stop-sale 2024) (High)
Noncompliance report **24V-461** (June 20, 2024) covers 145,254 MY2024 vehicles: Grand Highlander 76,686, Grand Highlander Hybrid 34,980, TX350 27,706, TX500h 5,436 and TX550h+ 446. With the driver's window down, the front of the left curtain airbag could deploy partly outside the window. The vehicle failed an NHTSA contract-lab FMVSS 226 ejection test on May 9, 2024 (A) (https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V461-5298.pdf). The anchoring was redesigned and sales resumed in fall 2024 (B: https://www.cbtnews.com/toyota-recalls-145000-grand-highlander-and-lexus-tx-vehicles-over-airbag-deployment-issues/ ; https://www.thelemonfirm.com/2024/10/02/toyota-and-lexus-resume-sales-for-2024-grand-highlander-and-tx-after-airbag-issue/). **Check:** confirm the recall is closed for the VIN.

### 1.4 Tacoma
- **Rear-axle recall 24V-152 covers the *previous* generation, 2022–2023 Tacoma** (381,199 vehicles), not 2024+. Welding debris on the axle ends can let retaining nuts loosen, so the axle shaft could separate. Remedy: inspect, retighten, and repair or replace parts (A) (https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V152-8115.pdf).
- **4th-gen (2024–2025) Tacoma recalls:**
  - Rear brake hoses that mud can damage. First about 106k 4WD trucks, expanded to about 222k in Feb/July 2025 (A) (https://pressroom.toyota.com/toyota-recalls-certain-2024-2025my-toyota-tacoma-4-wheel-drive-trucks/).
  - TRD Off-Road shock oil reservoirs that can corrode and detach. About 48k vehicles, announced Aug 6, 2026, owner letters by early Oct 2026 (A) (https://pressroom.toyota.com/toyota-recalls-certain-model-year-2024-2025-tacoma-vehicles/).
  - 2025 Tacoma front driveshaft CV joint (A per Toyota press listing; details not fetched).
- 8-speed complaints (neutral drops, stuck in gear) are reported on NHTSA and in forums, and a TSB exists for some 2024s. There is no recall or investigation (C/D) (https://pickuptrucktalk.com/2026/03/2024-2026-toyota-tacoma-known-problems-transmission-engine-small-gripes/).

### 1.5 Toyota 2.0/2.5 Dynamic Force oil consumption
My falsification searches found **no NHTSA recall, investigation or Toyota warranty extension** for oil consumption in the Dynamic Force 2.0 (M20A) or 2.5 (A25A) engines. See §13.

---

## 2. Honda / Acura

### 2.1 J35 3.5L V6 connecting-rod bearing (Critical; open investigation)
- **Recall 23V-751** (Nov 13, 2023; Honda XG1, Acura GG0 and others) covers 248,999 vehicles: 2015–2020 TLX V6, 2016–2020 MDX, 2016 and 2018–2019 Pilot, 2017 and 2019 Ridgeline, and 2018–2019 Odyssey. Crank pins were ground to a crown or convex shape because equipment was set wrong, so rod bearings wear and seize. The engine may stall or fail to start, and fire is possible. **Remedy:** inspect, then repair (bearings or crankshaft) or replace the engine. Parts arrived spring 2024 into 2025 (A).
  - https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V751-1498.pdf
  - https://hondanews.com/en-US/honda-corporate/releases/release-ce25b2bdc6167d48c9de61f4f90293c5-2015-2020-multi-model-connecting-rod-recall
  - Remedy notice: https://static.nhtsa.gov/odi/rcl/2023/RCONL-23V751-9092.pdf
- **RQ24013** opened Nov 8, 2024 over failures in vehicles outside the recall. It closed Aug 20, 2025 after NHTSA concluded Honda had scoped 23V-751 correctly (A) (https://static.nhtsa.gov/odi/inv/2024/INCLA-RQ24013-85911.pdf).
- **PE25008** opened Aug 20, 2025. It covers **1,410,806 vehicles**: 2016–2020 Pilot and MDX, 2018–2020 TLX and Odyssey, and 2017–2019 Ridgeline. There are 414 ODI reports and 2,598 manufacturer reports (3,012 total), 4–7 crash/fire reports, and **no link to the 23V-751 crankshaft defect** (A) (https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf). The investigation still showed as open in the latest listing I found (C: https://oemdtc.com/investigation/?number=PE25008). My searches through September 2026 found no expanded recall.
- **Buyer implication.** A 2016–2020 J35Y6 vehicle (Pilot, MDX, Odyssey, Ridgeline, TLX V6) carries rod-bearing risk. Check that 23V-751 is closed if the VIN is covered. For uncovered VINs, get a cold-start listen, check oil level and history, and consider an oil analysis. The 2023+ Pilot uses the J35Y8, which is not in these actions (C: autoevolution).

### 2.2 1.5L turbo oil dilution (Civic, CR-V) (Medium; extension expired)
In early 2019 Honda released a software update, then **extended the powertrain warranty (camshafts, rocker arms, spark plugs) to 6 years/unlimited miles** for 2016–2018 Civic 1.5T and 2017–2018 CR-V 1.5T in all 50 states. Symptoms are a rising oil level on the dipstick, fuel smell, and hesitation, and the problem is worst in extreme cold (B).
- https://www.wardsauto.com/news/archive-wards-honda-extends-warranty-to-address-1-5l-gas-oil-dilution-problem/793295/
- https://www.cars.com/articles/honda-extends-warranty-on-cr-v-civic-for-1-5-liter-turbo-oil-issue-402938/
- https://www.carcomplaints.com/news/2019/honda-civic-cr-v-oil-dilution-warranties-extended.shtml

**Status:** 6 years from a 2018 in-service date ended in 2024, so the extension is **expired**. **2018+ Accord 1.5T was not included** in this extension (B, by absence from every source above). Buyer check: confirm the software update was done (dealer VIN history), and check the dipstick level and for fuel smell in the oil.

### 2.3 Transmissions
- **6-speed automatic torque converter (Pilot/Ridgeline).** Service Bulletin **23-078** (Aug 31, 2023) extends torque-converter coverage to **8 yr/150k from original purchase** for 2017–2018 Pilot 6AT and 2017–2019 Ridgeline. The failure is a cracked lock-up piston that sets DTC P0741 and causes shudder. The fix is torque-converter replacement (7.2–7.6 flat-rate hours) (A) (https://static.nhtsa.gov/odi/tsbs/2023/MC-10241879-0001.pdf). Status: a 2019 Ridgeline is covered to about 2027. A claim that this was raised to 10 yr/150k in April 2025 is **unverified** (D; see contradiction log).
- **ZF 9HP 9-speed** (2016–2022 Pilot upper trims, 2018–2019 Odyssey 9AT, 2019+ Passport, 2020+ Ridgeline). Complaints are harsh, delayed or erratic shifts and judder. A class action filed September 2024 in N.D. Cal. (Moore et al. v. American Honda) alleges TCM/PCM calibration defects (C: allegation) (https://www.carcomplaints.com/news/2024/honda-9-speed-transmission-lawsuit.shtml). **No Honda warranty extension or recall found.**

### 2.4 Denso fuel pumps (Honda/Acura)
**23V-858** (Dec 18, 2023) expanded 20V-314 and 21V-215 to **2,539,902 vehicles**: 2018–2020 Accord, Civic (all body styles), Civic Type R, CR-V, HR-V, Odyssey, Ridgeline and Acura ILX, MDX, RDX, RLX, TLX; 2019–2020 Insight and Passport; 2020 CR-V Hybrid; 2018–2019 Fit and Clarity PHEV; 2017–2020 Accord Hybrid and NSX. Remedy: fuel-pump module replacement (A) (https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V858-9680.pdf).

### 2.5 Infotainment
The **Conti v. AHM** settlement covers 2018–2019 Odyssey, 2019 Pilot and 2019 Passport. It added 2 yr/24k to cover head-unit symptoms (crackling, no audio, "network loss", display faults) up to **5 yr/60k from purchase**, transferable. The related Acura RDX 2019–2020 settlement (Banh) covers up to 6 yr/74k (A) (https://www.settlement-claims.com/infotainment/HondaFrequentlyAskedQuestions.html ; https://www.settlement-claims.com/infotainment/acurasettlementbenefits.html). Status: **expired** for Honda, expiring or expired for 2020 RDX.

### 2.6 New June 2026: rear subframe corrosion (salt belt) (High)
**26V-365** (June 4, 2026; Honda AOU/AOT) covers **880,514 vehicles**, including 2016–2022 Pilot (463,253), 2017–2023 Ridgeline (110,070), 2019–2023 Passport (89,674) and 2014–2020 Acura MDX. The recall is limited to vehicles sold in salt-belt states (CT, DE, IL, IN, IA, KY, ME, MD, MA, MI, MN, MO, NH, NJ, NY, OH, PA, RI, VT, VA, WV, DC, WI). Poor paint adhesion near the rear subframe arm-bracket weld lets corrosion thin the metal until it fractures. Remedy: inspection plus a subframe reinforcement kit. Owner letters were due about July 7, 2026 (A) (https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V365-6590.pdf). **Buyer note:** any Pilot, Passport or Ridgeline from a salt state should have this recall closed or at least inspected.

---

## 3. Hyundai / Kia

### 3.1 Theta II GDI (2.0T/2.4) (Critical history; lifetime warranty in force)
- **Recalls.** 15V-568 covers 2011–2012 Sonata built at HMMA, where machining debris restricts oil to the rod bearings. 17V-226 covers 2013–2014 Sonata and Santa Fe Sport. Kia's 17V-224 covers 2011–2014 Optima, 2012–2014 Sorento and 2011–2013 Sportage. **NHTSA consent orders (Nov 27, 2020)** fined Hyundai $140M and Kia $70M ($210M combined) for untimely recalls of more than 1.6M vehicles (A).
  - https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall
  - Hyundai consent order: https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/rq17-004_hyundai_consent_order_executed_11272020.pdf
  - Kia consent order: https://www.nhtsa.gov/sites/nhtsa.gov/files/documents/rq17-003_kia_consent_order_executed_11272020.pdf
- **Settlement** (In re Hyundai and Kia Engine Litigation / Flaherty; C.D. Cal.; Hyundai judgment June 10, 2021). Class vehicles are 2011–2019 Sonata, 2013–2019 Santa Fe Sport, 2014–2015 and 2018–2019 Tucson, 2011–2019 Optima, 2012–2019 Sorento and 2012–2019 Sportage with genuine Theta II GDI engines.
  - **Lifetime warranty** on the short block (block, crank and bearings, rods and bearings, pistons) for bearing wear or damage, **irrespective of mileage, duration of ownership or prior repairs**.
  - Conditions: the vehicle is owned by an individual consumer, the KSDS knock-sensor software is installed, and there is no "exceptional neglect". CAS says the lifetime warranty follows the vehicle (A) (https://hma-thetasettlement.com/ ; https://www.autosafety.org/hyundai-kia2-0-and2-4l-gdi-class-action-settlements/).
- **Status 2026:** lifetime coverage is still in force. Cash-claim deadlines have passed (Hyundai: Aug 9, 2021).
- **Buyer check:** Hyundai's campaign lookup (https://autoservice.hyundaiusa.com/campaignhome) shows whether KSDS (campaign 953) was installed (A, CAS). Kia: dealer or Kia Consumer Affairs. **If KSDS was never installed, have a dealer install it before any failure.** Keep oil-change records to rebut any "exceptional neglect" claim.

### 3.2 Nu 2.0 GDI / Gamma 1.6 GDI / Theta II MPI ("Engine Litigation II") (High)
**Hyundai class vehicles:** 2011–2015 Sonata Hybrid (2.4 MPI), 2016–2019 Sonata Hybrid/PHEV (Nu 2.0 GDI), 2010–2012 Santa Fe (2.4 MPI), 2010–2013 Tucson (2.4 MPI), 2014–2021 Tucson (Nu 2.0 GDI), 2014 Elantra Coupe, 2014–2016 Elantra, 2014–2020 Elantra GT (Nu 2.0), and 2012–2017 Veloster (Gamma 1.6 GDI). Judgment entered April 26, 2024 (A) (https://www.hma-e2settlement.com/).

**Kia class vehicles:** Forte 2010–2013 (2.4 MPI) and 2014–2018 (Nu 2.0); Forte Koup 2010–2013 and 2014–2016; Optima Hybrid 2011–2016 (2.4 MPI) and 2017–2020 HEV/PHEV (Nu 2.0); Sorento 2011–2013 (2.4 MPI); Soul 2012–2016 (Gamma 1.6) and 2014–2019 (Nu 2.0); Sportage 2011–2013 (2.4 MPI) (A) (https://kiaengineclasssettlement.com/Home/FAQ).

**Benefit:** Powertrain warranty extended to **15 years/150,000 miles from original retail delivery** for short-block and long-block damage caused by connecting-rod-bearing failure. It covers parts, labor and diagnosis. It **persists through transfers to later personal-use owners** (not dealers or auctions). The KSDS update must be installed before the failure, except for vehicles already recalled under 20V-746/21V-727 (Hyundai) or 20V-750/21V-844 (Kia). It can be denied for exceptional neglect (A).

**Status:** active. A 2012 vehicle's 15 years run out in 2027. Most cash claims closed July 8, 2024.

### 3.3 Kia Seltos/Soul 2.0 Nu MPI piston oil ring (2021–2023) (High)
**25V-099** (Feb 17, 2025; Kia SC336) covers 137,256 vehicles: Seltos (53,635) and Soul (83,621) built July 2, 2020 to July 1, 2022 (Seltos) or April 19, 2022 (Soul). A supplier's piston oil ring scores the cylinder wall. The result is oil consumption, knocking, an oil-pressure light, then seizure, and in some cases a hole in the block and fire. Kia's data showed 809 stall allegations and 4 fires. **Remedy:** engine vibration inspection, engine replacement if it fails, plus the **Piston-ring Noise Sensing System (PNSS)** software. If PNSS later sets DTC P1327, the engine is replaced. Kia reimburses earlier repairs (A).
- https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V099-7174.PDF
- https://static.nhtsa.gov/odi/rcl/2025/RCMN-25V099-1321.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RMISC-25V099-1408.pdf

### 3.4 Smartstream 1.6T / 2.5
Oil consumption on 2021–early-2023 2.5 engines, injector leaks and ITMM thermal-module failures appear only in single-outlet or listicle reporting (C/D) (https://www.jalopnik.com/2226803/is-hyundai-smartstream-block-reliable/). A claimed 2025 recall **25V-212** for loose connecting-rod bolts on 2025–2026 Santa Fe, Tucson, Sorento and K4 is **unverified** by me (C/D). I found **no NHTSA investigation and no broad Smartstream warranty extension**.

### 3.5 ABS/HECU module fire, "park outside" (Critical)
- **Hyundai 23V-651** (Sept 22, 2023; Hyundai campaign 251) covers 1,642,551 vehicles: 2011–2015 Elantra, Genesis Coupe and Sonata Hybrid; 2012–2015 Accent, Azera and Veloster; 2013–2015 Elantra Coupe and Santa Fe; 2014–2015 Equus; 2010–2012 Veracruz; 2010–2013 Tucson; 2015 Tucson Fuel Cell; and 2013 Santa Fe Sport. The ABS module can leak brake fluid internally and short, causing an under-hood fire whether parked or driving. **Park outside until repaired.** Remedy: ABS fuse replacement (A) (https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V651-3906.pdf).
- **Kia 23V-652** covers about 1.73M vehicles: 2010–2019 Borrego, 2014–2016 Cadenza, 2010–2013 Forte/Koup/Sportage, 2015–2018 K900, 2011–2015 Optima, 2011–2013 Optima Hybrid and Soul, 2012–2017 Rio, 2011–2014 Sorento, and 2010–2011 Rondo. The remedy is a new HECU fuse (A for the recall number: https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V652-7830.pdf). The model list comes from https://www.autoevolution.com/news/17-million-kia-vehicles-recalled-over-fire-risk-from-hecu-electrical-short-221852.html (C).
- **Buyer check:** VIN lookup. Any unrepaired VIN is disqualifying until the fix is done.

### 3.6 Anti-theft / missing immobilizer (2011–2022) (High, affects insurance)
- In 2015 only 26% of Hyundai/Kia series had a standard passive immobilizer, against 96% for all other makers (A: HLDI) (https://www.iihs.org/media/d2c7da66-9ce8-4c61-b129-5d5732707ef1/Cpu9CA/HLDI%20Research/Bulletins/hldi_bulletin_42-07.pdf).
- HLDI (May 2025): vehicles with the software upgrade had **46% lower theft claim frequency** than unupgraded ones, but vandalism claims rose on upgraded cars, probably from failed theft attempts (A).
- **Class settlement ($145M common fund).** Final approval Oct 1, 2024. **Ninth Circuit affirmed Jan 8, 2026.** An objector petitioned the **U.S. Supreme Court on May 26, 2026**, which pauses distribution; class counsel expects a cert decision in **October 2026**. Relief includes the free software upgrade, and up to $300 for steering locks or alarms on vehicles that can't take the upgrade (A: class counsel FAQ https://www.hbsslaw.com/hyundai-kia-usb-car-theft-defect/faq).
- **Multistate AG settlement (Dec 16, 2025; 36 AGs)** (A: https://www.atg.wa.gov/news/news-releases/states-settle-hyundai-kia-over-failure-equip-vehicles-anti-theft-technology):
  - free **zinc-reinforced ignition-cylinder protectors**, including for vehicles that previously qualified only for software;
  - up to $4.5M in restitution for thefts on or after April 29, 2025 on software-updated cars;
  - immobilizers on all future US vehicles.
- **Insurance.** In 2023 State Farm and Progressive stopped writing some affected models in certain cities, such as Denver and St. Louis (B) (https://www.cnn.com/2023/01/27/business/progressive-state-farm-hyundai-kia/index.html ; https://abcnews.com/US/kia-hyundai-models-insurers-refusing-cover-high-theft/story?id=96766632).
- **Buyer check:**
  - does the car have a turn-key ignition (no push-button start)?
  - is there a theft-deterrent window sticker or a dealer record of the software upgrade?
  - has the zinc protector been installed?
  - get an insurance quote *before* buying.

---

## 4. Nissan / Infiniti

### 4.1 Jatco CVT (High; warranty extensions largely expired)

| Settlement / program | Vehicles | Extension | Status Sept 2026 | Grade |
|---|---|---|---|---|
| Stringer, Altima and Juke settlements (Martinez etc.) | 2012–2017 Versa, 2014–2017 Versa Note, 2013–2017 Sentra, 2013–2016 Altima, 2013–2017 Juke | 60/60 → **84 mo/84k** | Expired | A (https://bbbprograms.org/programs/dr/class-action/nissan-cvt ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10246457-0001.pdf) |
| Rogue/Pathfinder/QX60 settlement (effective May 23, 2022; extension began June 1, 2022) | 2014–2018 Rogue, 2015–2018 Pathfinder, 2015–2018 QX60 | 84 mo/84k (QX60: **96 mo/96k**) | Expired except late-2018 QX60 | A (https://assets.bbbprograms.org/docs/default-source/arbitration-under-class-action-settlements/nissan-infinity-transmission-class-action.pdf) |
| Beaver v. Nissan (M.D. Tenn.; fairness hearing July 18, 2025) | 2015–2018 Murano, 2016–2018 Maxima | 84 mo/84k; reimbursement; $1,500 voucher | Effectively expired for most by 2026 | C (https://www.carcomplaints.com/news/2025/nissan-cvt-class-action-lawsuit-settlement.shtml) |

Failure modes are judder, whine, limp mode and failure. Coverage in these extensions includes the valve body, torque converter and TCM. **No Nissan extension found for 2019+ CVTs.** Litigation on newer models is pending (D). **Buyer check:** ask a Nissan dealer for the VIN's warranty and repair history, including any CVT replacements, and budget for CVT risk on high-mileage 2013–2018 Nissans.

### 4.2 VC-Turbo engine bearings (Critical; active)
- **25V-437** (June 27, 2025) covers **443,899 vehicles**: 2021–2024 Rogue (1.5L 3-cyl KR15DDT), 2019–2020 Altima (2.0 VC-T), 2019–2022 QX50 and 2022 QX55. Manufacturing defects in main, A-, C- and L-link bearings can cause engine failure. **Remedy:** inspect the oil pan for metal. If found, repair or replace the engine. If clean, the 1.5 gets a new oil pan gasket, oil and an ECM reprogram, and the 2.0 gets fresh oil (A) (https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V437-0399.pdf ; B corroboration https://carbuzz.com/nissan-vc-turbo-engine-massive-recall/).
- **26V-080** (Feb 11, 2026; Nissan R25E2/R25E3) covers **323,917 2023–2025 Rogue 1.5** built Oct 4, 2022 to Nov 18, 2024. High oil temperature degrades lubrication and causes bearing seizure. Rare block breaches can cause fire. Nissan had 690 related warranty claims. Owner letters were due March 27, 2026 (A) (https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V080-7320.pdf ; https://tflcar.com/2026/02/nissan-rogue-engine-recalls-news/).
- **Warranty extension:** long-block warranty of **10 yr/120k** for recall-subject 2019–2020 Altima and 2021–2024 Rogue VC-Turbo engines (campaigns R25A8/R25A9/R25B1). The recall must be completed first. This is not a recall and no dealer visit is required (A) (https://www.nissanassist.com/campaigns/engine-bearing-warranty-extension-my19-20-altima/).

---

## 5. Subaru

### 5.1 CVT extensions (A)
Each bulletin extends New Car Limited Powertrain Warranty coverage on the CVT from 5 yr/60k to **10 yr/100k**:
- **2010–2015** Legacy/Outback, 2012–2015 Impreza, 2013–2015 Crosstrek, 2014–2015 Forester, 2015 WRX. **Expired.**
- **2016–2017** Legacy/Outback, Impreza, Crosstrek, Forester, WRX (TSB 16-115-18, Sept 2018). 2016 models expire in 2026 (B/A) (https://www.carcomplaints.com/news/2017/subaru-transmission-warranty-extension.shtml).
- **2018** Legacy/Outback 2.5 and 3.6, Impreza, Crosstrek, Forester 2.5 and 2.0T, WRX (TSB 16-117-18) (A) (https://static.nhtsa.gov/odi/tsbs/2018/MC-10150931-9999.pdf).
- **New in May 2025 (TSB 16-155-25R, revised July 14, 2025):** 2019 Legacy/Outback 2.5, 2020 Legacy/Outback 2.4T, 2019–2020 Impreza 2.0, 2019 Crosstrek 2.0 (not hybrid), 2019–2020 Forester 2.5, and **2019–2020 Ascent** (A) (https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf).

Coverage applies only to OE or Subaru-remanufactured CVTs, **not salvage-yard, rebuilt-salvage or third-party-rebuilt units** (A). **Check:** a Subaru dealer "Vehicle Coverage Inquiry" by VIN.

### 5.2 Battery drain (2015–2020) (B)
In re Subaru Battery Drain Products Liability Litigation (D.N.J.) covers 2015–2020 Outback, Forester, Legacy and WRX and 2019–2020 Ascent. Final approval Jan 25, 2023 (C for the date). It provided a charging-logic software update and an extended battery warranty:
- first replacement: 100% covered to 5 yr/60k, 50% beyond;
- later replacements: 100% to 5/60k, 80% to 7/84k, 60% to 8/100k.

Sources: https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-battery-drain-class-action-settlement/ ; https://www.torquenews.com/1084/subaru-battery-drain-lawsuit-how-final-settlement-affects-owners-now

### 5.3 FB20/FB25 oil consumption
The Yaeger v. Subaru settlement (final Aug 31, 2016) covers **2011–2014** Forester, 2013–2014 Legacy/Outback, 2012–2013 Impreza and 2013 XV Crosstrek. Excess oil consumption repairs were covered to 8 yr/100k (B/C). **This is outside the 2015+ window, and coverage has expired.** I found nothing systemic for 2015+ FB engines.

---

## 6. Ford / Lincoln

### 6.1 Recall volume
- **2025: a record 152–153 recalls covering about 12.9M vehicles**, more vehicles than the next nine automakers combined (B) (https://www.cbsnews.com/detroit/news/ford-leads-automakers-153-recalls-2025/ ; https://www.cbtnews.com/ford-posts-record-152-recalls-in-2025-but-says-vehicle-quality-is-improving/ ; https://www.carscoops.com/2025/12/ford-2025-record-recalls-scale/).
- 2024 had already set a record, reported as 89 recalls, above GM's 77 in 2014 (C; counts vary).
- Motor1 reports 11.2M vehicles recalled so far in 2026 (C) (https://www.motor1.com/news/789583/ford-2026-recalls-list-models-affected/).
- **Buyer implication:** on any 2020+ Ford, run the VIN and expect several open recalls.

### 6.2 Explorer/Aviator 2020–2022 (CD6 platform) rear axle bolt (High)
- **22V-255 (22S27):** PCM software that applies the electronic parking brake when Park is selected. Police variants got a new bushing.
- NHTSA opened **RQ23-002** to review whether that remedy was adequate.
- **23V-675 (23S55; Oct 6, 2023)** covers 238,364 2020–2022 Explorers: 2.3 RWD, 3.0 ST, 3.3 hybrid, 3.0 PHEV and police versions. It replaces the subframe bushing and rear axle bolt, and the axle cover if damaged. Ford's stated cause: "joint design not robust to peak axle input torques". Ford knew of 396 bolt failures, fewer than 5% resulting in rollaway or loss of drive (A).
  - https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V675-9899.pdf
  - https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V675-3320.PDF
  - https://static.nhtsa.gov/odi/rcl/2023/RMISC-23V675-6941.pdf
- **25V-166 (25S22; Mar 14, 2025):** 4,247 Explorers recorded as repaired under 23S16 or 22S27 that did not actually get the correct software (A) (https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V166-9795.PDF).
- **Customer Satisfaction Program 24N01:** 309,126 other 2020–2022 Explorers get a one-time repair if the bolt fractures, **6 yr/150k**, transferring automatically (A) (https://static.nhtsa.gov/odi/tsbs/2024/MC-11009831-0001.pdf).
- **Aviator:** I found no Aviator recall for this issue. Lawyers allege that 2021–2022 Aviators share the design (D).
- **Buyer check:** clunk or grind on launch. Ask for a Ford OASIS printout showing 23S55 or 24N01 completed.

### 6.3 F-150 rear axle hub bolts (Max Trailer Tow, 9.75" HD 3/4-float axle) (High)
- **23V-896:** 112,965 2021–2023 F-150s. **25V-512 (25S82):** 103,174 2023–2025 F-150s built Jan 2, 2023 to May 21, 2025.
- Hub bolts fatigue and break. Symptoms are clicking, then rattling. The hub splines strip, causing loss of drive or rollaway in Park.
- Remedy: new-design rear axle shafts (larger spline contact, M24 stud and nut). Owner notification was phased from Aug 18, 2025 to May 22, 2026 (A for 23V-896: https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V896-5442.pdf; B/C for 25V-512 details: https://tfltruck.com/2025/08/ford-f-150-rear-axle-hub-bolt-recall-new/).

### 6.4 F-150 transmissions
- **EA26001 (opened Jan 30, 2026; from PE25002 opened Mar 21, 2025)** covers 1,270,970 2015–2017 F-150s. NHTSA **limited the investigation to the 6R80 transmission**. The complaint is unexpected downshifts, often with rear-wheel lockup: 329 VOQs, 43% reporting lockup. NHTSA is comparing this to the 2011–2014 F-150 output-shaft-speed-sensor lead-frame recalls 16V-248, 19V-075, 19V-433 and 24V-444. No recall yet (A) (https://static.nhtsa.gov/odi/inv/2026/INOA-EA26001-10007.pdf).
- **10R80 (2017+ F-150, Expedition, Navigator, Mustang, Ranger):** complaints of harsh or erratic shifting. **No recall, no NHTSA defect investigation found for 10R80 harsh shift, no settlement.** A US class action over 2017–2020 F-150s survived a motion to dismiss on its Massachusetts claim on Feb 3, 2026 (D: https://lemonmyvehicle.com/blog/ford-f-150-transmission-lawsuit/). A Canadian class action was filed in B.C. (C: https://www.charneylawyers.com/ford-10r80-10-speed-transmission-class-action/home).

### 6.5 EcoBoost engines
- **2.7L/3.0L Nano EcoBoost intake-valve fracture: 24V-635 (Ford 24S55).** 90,736 2021–2022 Bronco, F-150, Edge, Explorer, Nautilus and Aviator. Silchrome Lite valves with grinding burn and excess hardness break and fall into the cylinder, causing catastrophic engine failure. NHTSA opened its investigation Jan 25, 2022. **Remedy:** engine cycle test, replace engine as needed (A) (https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V635-2546.pdf ; https://www.ford.com/support/how-tos/recall/recalls-and-faqs/24s55-bronco-edge-explorer-f-150-2021-2022-engine-intake-valves-recall/).
- **3.5L EcoBoost cam phaser rattle (2017–2020 F-150).** PCM reprogram program 21B10 (through Mar 31, 2022) and extended coverage program **21N03, which ended Jan 1, 2023** (C: search-summary only; underlying TSB https://static.nhtsa.gov/odi/tsbs/2021/MC-10189763-0001.pdf not fetched). The symptom is a cold-start rattle of a few seconds. Replacement means all four VCT units. **No coverage now.**
- **1.5/1.6/2.0 EcoBoost coolant intrusion (open-deck block).** Coolant gets into the cylinders, causing misfire codes P0300–P0304/P0316, white smoke and low coolant. **CSP 21N12** (June 2022) covers 2017–2019 Escape and Fusion 1.5L (Escape built Sept 17, 2015 to Apr 8, 2019; Fusion Oct 2015 to June 2019) with a **one-time short-block replacement to 7 yr/84k**, transferring automatically (A) (https://static.nhtsa.gov/odi/tsbs/2022/MC-10213732-0001.pdf). The consolidated **Miller v. Ford** (E.D. Cal. 2:20-cv-01796) covers 2013–2019 Escape and Fusion, 2015–2018 Edge and 2016/17–2019 MKC/MKZ with 1.5, 1.6 or 2.0 EcoBoost engines. It is pending with no class certified (C: allegation) (https://www.fordecoboostlawsuit.com/ ; https://www.carcomplaints.com/news/2025/ford-ecoboost-lawsuit-15l-16l-20l-engines.shtml). **Buyer check:** a coolant-level history, a combustion-gas (block) test, and scanning for misfire codes. Walk away from a car with unexplained coolant loss.
- **5.0L "Coyote" oil consumption (2018–2020 F-150).** TSB 19-2365 (Dec 2019) covers consumption over 1 qt per 3,000 miles, caused by high intake vacuum during deceleration fuel shut-off. The fix is a PCM reflash plus a new dipstick with a wider (2-quart) normal range (A) (https://static.nhtsa.gov/odi/tsbs/2019/MC-10169811-0001.pdf). This was covered under the normal warranty only.
- **3.3L V6:** no systemic defect surfaced in my searches (not studied in depth; research gap).

### 6.6 DPS6 PowerShift (2011–2016 Fiesta, 2012–2016 Focus)
**Vargas v. Ford** (C.D. Cal.): final approval Mar 5, 2020, effective Apr 7, 2020, about 1.9M class members. Benefits included buybacks through arbitration (valued at $15,000+), cash for clutch and TCM replacements, and reimbursement for repairs within **7 yr/100k** of sale (B) (https://bergermontague.com/cases/vargas-et-al-v-ford-motor-co/ ; https://topclassactions.com/lawsuit-settlements/closed-settlements/ford-powershift-transmission-class-action-settlement/). **Expired.** Buyer advice: a 2015–2016 Focus or Fiesta automatic carries shudder and clutch risk with no coverage.

---

## 7. General Motors

### 7.1 L87 6.2L V8 (Critical; escalating investigation)
- **Recall 25V-274** (Part 573 dated May 8, 2025; GM N252494000/N252494002) covers **597,571 vehicles** with L87 engines built **Mar 1, 2021 to May 31, 2024**: 2021–2024 Silverado 1500 (107,244), Sierra 1500 (153,637), Tahoe (44,814), Suburban (22,169), Yukon (82,841), Yukon XL (60,926), Escalade (79,673) and Escalade ESV (46,267). Cause: connecting-rod and/or crankshaft manufacturing defects from a supplier. Estimated defect rate 3% (A) (https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V274-1938.PDF ; dealer bulletin https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V274-5347.pdf).
- **Remedy:** a VIN-specific inspection. The engine is replaced if it fails; if it passes, GM switches it from 0W-20 to **0W-40** oil and fits a new oil cap (A: NHTSA EA26005 resume describes the two paths; B for 0W-40 detail: https://www.theautopian.com/it-took-gm-more-than-28000-failed-v8s-before-recalling-its-l87-engines-now-the-feds-are-investigating-after-6000-fixed-engines-also-failed/ ; https://gmauthority.com/blog/2026/01/nhtsa-investigating-post-recall-gm-6-2l-l87-engine-failures/).
- **Investigations (A):**
  - **PE25001** (Jan 2025, about 877k) led to the recall.
  - **EA25007** (Oct 23, 2025) covers **286,051 vehicles outside the recall range**: 2019–2021 and 2024 MYs, 173 reports (https://static.nhtsa.gov/odi/inv/2025/INOA-EA25007-23191.pdf).
  - **RQ26001** (Jan 16, 2026) assesses remedy effectiveness; 139 reports as of Feb 17, 2026 (https://static.nhtsa.gov/odi/inv/2026/INIM-RQ26001-10012.pdf).
  - **EA26005 (Aug 20, 2026)** expands to **997,743 MY2021–2026 L87 vehicles**. It cites 499 post-remedy failure complaints (473 after the oil change, **26 after a full engine replacement**) plus 191 failures in engines built after the recall window. **GM itself reported 6,953 post-remedy failure complaints** (https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf).
- **No new recall and no GM extended warranty found** as of Aug 31, 2026 (B: https://gmauthority.com/blog/2026/08/gm-6-2l-l87-engine-post-recall-failures-piling-up-nhtsa-investigation-shows/ ; https://carbuzz.com/gm-l87-v8-engine-failure-nhtsa-investigation-august-2026/).
- **Buyer implication:** treat any 2019–2026 6.2L L87 truck or SUV as carrying elevated engine risk, even when the recall shows as "complete". A replacement engine does not guarantee safety either (26 failures after replacement). Ask for the recall repair order (inspection result and oil change versus engine swap). Budget heavily, or prefer the 5.3L (with lifter caveats, §7.3) or the 3.0 Duramax (with 10-speed caveats, §7.2).

### 7.2 Transmissions
- **8L90/8L45 (2015–2019):** torque-converter shudder (blamed on ATF moisture sensitivity) and harsh shifts. In **Speerly v. GM** the district court certified 26 state subclasses covering about 800,000 buyers. The **Sixth Circuit en banc vacated that certification on June 27, 2025**, and the opinion notes GM had repaired the shudder in 252,059 8L transmissions. The case is back in district court. A separate putative class for 2020–2022 is pending. **No settlement or extension** (A) (https://law.justia.com/cases/federal/appellate-courts/ca6/23-1940/23-1940-2025-06-27.html ; https://www.uschamber.com/assets/documents/Opinion-En-Banc-Speerly-v.-General-Motors-Sixth-Circuit_2025-06-27-185254_dltq.pdf). **Buyer check:** light-throttle shudder at 25–50 mph and whether the Mobil 1 LV ATF HP fluid exchange was done (the fluid-exchange TSB is widely reported; I did not fetch it).
- **10-speed (10L80/10L90/Allison 10L1000):**
  - **24V-797** (Oct 31, 2024) covers 461,839 **diesel-equipped** vehicles: 2020–2022 Silverado/Sierra 1500 3.0 Duramax built before Mar 21, 2022, 2020–2022 Silverado/Sierra 2500/3500 diesel, and 2021 Tahoe, Suburban, Yukon, Yukon XL, Escalade and ESV diesel. A worn transmission control valve causes harsh shifts and rare momentary rear-wheel lockup (A) (https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V797-7588.PDF).
  - **26V-085** covers 43,732 2022 gas-engine Tahoe, Suburban, Yukon/XL and Escalade/ESV with the 10-speed and electronic range select, built May–July 2022 (A/B) (https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V085-3557.pdf ; https://tfltruck.com/2026/02/gm-recall-transmission-control-valve-full-size-suvs/).
  - A new class action was filed in N.D. Cal. in April 2026 (C) (https://gmauthority.com/blog/2026/05/gm-hit-with-10-speed-transmission-class-action-lawsuit-in-california/).

### 7.3 AFM/DFM lifter failures (5.3/6.0/6.2 V8)
**Harrison v. GM** (E.D. Mich., filed Dec 2021) covers about 2014–2021+ trucks and SUVs with the L84, L87, L96 and similar. It alleges lightweight or misfit lifters collapse, causing tick, misfire and cam damage. **No class certified and no recall.** The class-certification motion slipped into 2026 (C: https://gmauthority.com/blog/2025/12/gm-v8-engine-lifters-lawsuit-aims-for-class-action-status/). **No NHTSA lifter investigation found.** Typical symptoms are ticking and cylinder-specific misfire with P0300-series codes. Repair means lifters, VLOM/AFM hardware and often a camshaft, commonly several thousand dollars (D; unsourced cost).

### 7.4 1.4T / 1.5T / 2.7T
- 1.5T LYX/LFV (Equinox, Malibu): TSB-level issues only: PCV and crankcase-pressure oil leaks, turbo oil-feed leaks, charge-air-cooler icing, and a 2016–2017 Malibu low-speed pre-ignition program (A for TSB existence: https://static.nhtsa.gov/odi/tsbs/2020/MC-10172817-9999.pdf ; C/D otherwise). **No recall or investigation found.**
- 2.7L TurboMax (L3B): reports of a small cracked-block recall on a few 2023 units and a 2024 injector program (D). Not systemic by the evidence I found.

---

## 8. Stellantis (Chrysler / Dodge / Jeep / Ram)

- **5.7/6.4 HEMI lifter and cam ("Hemi tick"), 2014+:** a 2022 class action covers Ram 1500–3500, Durango, Grand Cherokee and the 300, Charger and Challenger. It alleges MDS lifters shed metal (C: allegation) (https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml). A report that class claims were dismissed so only named plaintiffs proceed comes only from forums (D). **No recall, no investigation, no extension.**
- **3.0 EcoDiesel (Ram 1500, Grand Cherokee):**
  - The **2014–2016 emissions settlement** provided an Approved Emissions Modification and an **extended warranty** equal to the greater of 10 yr/120k from initial sale or 4 yr/48k from the AEM. Mopar's VIN lookup shows AEM status and extended-warranty applicability (A: https://www.mopar.com/en-us/my-vehicle/recalls/eco-diesel-warranty.html). Payments were $2,460–$3,075 for current owners (B/C). **2016 models reach 10 years in 2026.**
  - EGR cooler fire recall **20V-699** covers 2014–2019 Grand Cherokee EcoDiesel (A) (https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V699-8227.PDF). A related Ram 1500 EGR recall was issued in 2019 (C).
- **ZF 9HP (948TE) 9-speed:** the Granillo settlement covers 2014–2015 Cherokee and 2015 Renegade, 200 and ProMaster City. Extension to **6 yr/100k**, now **expired**. Fairness hearing Feb 13, 2019 (C) (https://www.carcomplaints.com/news/2018/chrysler-9-speed-transmission-lawsuit.shtml).
- **Jeep "death wobble":** the settlement covers 2018–2020 Wrangler JL and 2020 Gladiator. Warranty on the **front suspension steering damper extended "up to 8 years or 90,000 miles"**, plus reimbursement at fcarecallreimbursement.com. Final approval June 2023 (B: https://www.kbb.com/car-news/jeep-wrangler-owners-death-wobble-lawsuit-settlement-may-bring-extended-warranties ; https://www.thedrive.com/news/jeep-agrees-to-settlement-over-wrangler-gladiator-death-wobble; the final approval date is C). A replaced damper does not fix worn track bars or ball joints (D).
- **Wrangler 4xe / Grand Cherokee 4xe battery fire** (plug-in, included because the user named it): the **third** recall, **25V-741 / FCA 68C**, covers about 320,065 2020–2025 Wrangler 4xe and 2022–2026 Grand Cherokee 4xe. Separator-damaged cells can short and ignite. **Park outside and do not charge until remedied** (B: https://moparinsiders.com/jeep-recalls-320065-4xe-phevs-over-battery-fire-risk/ ; NHTSA press release https://www.nhtsa.gov/press-releases/park-outside-recall-jeep-wrangler-phev). Forum owners reported on Dec 16, 2025 that a diagnostic-plus-battery-replacement remedy was available for Wranglers, not yet Grand Cherokees (D) (https://www.jlwranglerforums.com/forum/threads/safety-recall-68c-25v-741-fix-available-for-high-voltage-battery-in-4xe-phev.161162/).
- **Ram 1500 / Wagoneer eTorque:**
  - 19V-142: 48V battery cable terminal fire risk on 2019 Ram (A) (https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V142-0615.pdf).
  - 23V-265: 2021 Ram 1500 5.7 eTorque PCM stall (A) (https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V265-2735.PDF).
  - **PE24018** (July 19, 2024) covers about 150k 2022 Ram 1500 5.7 eTorque and 2022 Wagoneer for engine shutdown with intermittent restart; 80 complaints (A) (https://static.nhtsa.gov/odi/inv/2024/INOA-PE24018-15183.pdf). Current status unknown (research gap).
- **Durango:** nothing Durango-specific beyond the HEMI and ARC exposure was researched (gap).

---

## 9. Mazda (proportional: few systemic defects, but not zero)

- **CSP11, SKYACTIV-G 2.5T cylinder-head crack and coolant leak:**
  - Covers 2016–2020 CX-9, 2019–2020 CX-5 and 2018–2020 Mazda6 turbo built before June 9, 2020 (CX-5, CX-9) or Mar 25, 2020 (Mazda6).
  - Cracks form at an exhaust-manifold stud hole or flange and leak coolant. A new head plus a revised gasket takes 10.9–11.3 hours; if DTC P111A (overheat) or milky oil is present, a partial engine is required.
  - **Warranty extended to 10 yr/120k** from the warranty start date, with reimbursement (claims closed May 15, 2025) (A).
  - Sources: https://static.nhtsa.gov/odi/tsbs/2024/MC-11011136-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2025/MC-11012343-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10232269-0001.pdf
  - Jarvis v. Mazda class action (C) (https://www.classaction.org/news/mazda-coolant-leak-lawsuit-says-defect-can-cause-engine-overheating-failure).
  - **Buyer check:** coolant level history, a sweet smell, and dealer confirmation of CSP11 eligibility.
- **19V-497, cylinder-deactivation software:** 2018–2019 CX-5, 2019 Mazda3 and 2018–2019 Mazda6. The rocker arm can dislodge when switching from deactivation back to all cylinders, causing misfire and stall without restart. Remedy: PCM reprogram (A) (https://static.nhtsa.gov/odi/rcl/2019/RCONL-19V497-7677.pdf).
- **Service bulletin SA-037-23 (July 2023)** added a new service cylinder-head assembly for 2.5L cylinder-deactivation engines: 2018–2023 CX-5, 2018–2021 Mazda6, 2019–2023 Mazda3 and 2020–2023 CX-30. Its keywords include burnt valves, low compression and valve-guide wear (A for the bulletin: https://oemdtc.com/tsb/10238700/). This is **not proof of a systemic defect**, but it shows head replacements are common enough to warrant a service assembly.
- **21V-875, Denso fuel pump:** 121,038 vehicles: 2018–2019 CX-5, CX-9 and MX-5; 2018 Mazda6 and Mazda3; 2019 CX-3; 2019–2020 Mazda2 (A) (https://static.nhtsa.gov/odi/rcl/2021/RCAK-21V875-2835.pdf). A related warranty-extension program, CSP12 ("WARR EXT"), exists for Denso pumps. **Its terms are not verified** (A for existence: https://static.oemdtc.com/NHTSA-PDFs/MC-11011341-0001.pdf).
- **25V-357 (7525E):** 171,412 2024–2025 Mazda3 and CX-30. If the ignition is left ON until the battery is fully drained, the airbag sensor stores a fault and **the airbags won't deploy** (A) (https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V357-7814.pdf).
- 17V-745: 144 2018 Mazda3s with wrong exhaust valve springs (A; trivial).

---

## 10. Volkswagen

- **2.0 TDI "Dieselgate":** owners chose a buyback or the Approved Emissions Modification.
  - **Gen 3 (2015 Golf, SportWagen, Jetta, Beetle, Passat TDI):** the extended emissions warranty is the greater of **11 yr/162k from in-service** or 5 yr/60k from the Phase 2 fix. It covers the aftertreatment, fuel and EGR systems, the turbo, and the **engine long block**, and is **fully transferable** (A) (https://www.vwcourtsettlement.com/en/docs/emissions/Gen3_Emissions_Modification_Disclosure_Volkswagen.pdf ; https://vwcourtsettlement.com/wp-content/uploads/2018/04/Approved-Emissions-Modification-Notice-Volkswagen-Generation-3-TDI-Vehicles-Phase-2.pdf).
  - Gen 1 (2009–2014): 10 yr/120k (auto) (A) (https://static.oemdtc.com/NHTSA-PDFs/MC-10164246-0001.pdf).
  - **Status:** for a 2015 TDI, 11 years from in-service ends roughly in 2026. Check the VIN in VW's diesel lookup or ElsaPro "Enhanced Coverage".
- **2.0T EA888 water pump / thermostat housing:** for **2014–2021** Arteon, Atlas, Beetle, Golf family, GTI, Jetta, Passat and Tiguan, the extension is **8 yr/80k**. It covers the pump, thermostat and housing, plus pro-rated engine damage. It **transfers (except for commercial resale)** and requires proof of correct coolant maintenance (A: NHTSA RQ23-007 file quoting VW's policy, https://static.nhtsa.gov/odi/inv/2023/INRD-RQ23007-20175.pdf). The earlier 2008–2014 settlement gave 10 yr/100k, now expired (A) (https://static.nhtsa.gov/odi/tsbs/2019/MC-10169141-0001.pdf).
- BMW and Mercedes: not researched; no major multi-model 2015–2025 powertrain settlement surfaced incidentally, but this was not tested.

---

## 11. Airbag inflators

- **Takata PSAN.** NHTSA's phased remedy program required all remaining vehicles to be covered by Dec 31, 2018, and like-for-like parts by Dec 31, 2019 (A) (https://www.nhtsa.gov/vehicle-safety/takata-recall-spotlight). The "do not drive" list is mostly pre-2015 (A) (https://www.nhtsa.gov/takata-recall-spotlight/do-not-drive-warning). **Stragglers in the 2015–2016 model years:** Honda 16V-061 covers **2013–2016 Acura ILX, 2007–2016 Acura RDX and 2011–2015 Honda CR-Z** (A) (https://static.nhtsa.gov/odi/rcl/2015/RCMN-15V370-3329.pdf). Other brands' 2015–2017 inclusions should be checked by VIN.
- **ARC hybrid toroidal inflators.** NHTSA's initial decision (Sept 5, 2023) and **supplemental initial decision (Aug 5, 2024)** found that about 51M inflators built from 2000 to June 2018, in about 49M vehicles from 13 OEMs, are defective. The 13 are BMW, FCA, Ford, GM, Hyundai, JLR, Kia, Maserati, Mercedes, Porsche, Tesla, Toyota and VW. The record shows 7 US field ruptures and 1–2 deaths in North America (A) (https://www.federalregister.gov/documents/2024/08/05/2024-17251/supplemental-initial-decision-that-certain-frontal-driver-and-passenger-air-bag-inflators).
  - **On Dec 18, 2024 NHTSA paused**, saying more investigation was needed after industry comments (B: AP via https://www.ttnews.com/articles/nhtsa-retreats-air-bag-recall ; https://www.repairerdrivennews.com/2024/12/23/nhtsa-pauses-air-bag-recall-after-comments-raise-technical-engineering-differences/).
  - **As of mid-2026 there is no final decision.** MDL 3051 (N.D. Ga.) has about 24 cases (C) (https://openclassactions.com/investigations/arc-airbag-inflator-mdl-lawsuit.php).
  - Only lot-based OEM recalls exist, e.g. GM's roughly 1M-vehicle 2024 recall of certain 2014–2017 SUVs (C). **Buyer action:** VIN lookup only; there is no general fix.

---

## 12. Buyer tools & inspection

### 12.1 Recalls by VIN
**nhtsa.gov/recalls** accepts a VIN or plate (A) (https://www.nhtsa.gov/recalls). It shows unrepaired recalls from covered manufacturers. It **does not** show:
- repaired recalls;
- very new recalls whose VINs are not loaded yet;
- recalls more than 15 years old (unless the maker offers more);
- small or ultra-luxury makers;
- **non-safety customer-satisfaction campaigns and warranty extensions**.

So check the manufacturer's site as well:
- Toyota.com/recall and Lexus.com/recall
- recalls.honda.com and recalls.acura.com
- Hyundai autoservice.hyundaiusa.com/campaignhome (shows KSDS/953)
- Kia ksupport
- mazdarecallinfo.com
- Mopar EcoDiesel VIN lookup
- VW diesel lookup
- Ford and GM owner sites

### 12.2 Warranty extensions and customer satisfaction programs
These do **not** appear on NHTSA. Ask the dealer for a VIN printout from the maker's warranty system: Toyota TIS, Honda iN "VIN status", Ford OASIS, GM IVH/GWM, Subaru Vehicle Coverage Inquiry, VW ElsaPro "Enhanced Coverage", Mazda warranty inquiry. Each bulletin cited above names its system (A).

Key programs to ask about:
- Hyundai/Kia KSDS (lifetime or 15/150)
- Nissan VC-Turbo 10/120
- Subaru CVT 10/100
- Mazda CSP11
- Honda TSB 23-078
- Ford CSP 21N12 / 24N01
- VW water pump 8/80
- FCA EcoDiesel extension

### 12.3 Title brands and flood cars
- **NMVTIS** (https://vehiclehistory.bja.ojp.gov/nmvtis_consumers) collects state title brands ("junk", "salvage", "flood") plus insurer and salvage-yard reports. It exists so a brand can't be "washed" by retitling in another state (A).
- **NICB VINCheck** shows insurer total-loss or flood claims, but **uninsured flood cars leave no record** (B via NICB statements in https://www.foxbusiness.com/lifestyle/hurricane-ian-insurance-crime-experts-warning-car-buyers-flood-damaged-vehicles).
- **Scale:**
  - Harvey (2017): >422,000 vehicles damaged (NICB).
  - Irma (2017): >215,000 (NICB).
  - **Ian (2022): up to 358,000** (Carfax).
  - **Helene (2024): up to 138,000**: FL 60.7k, SC 27.5k, NC 22.9k, GA 16.8k, TN 4.9k, VA 4.9k.
  - **Milton (2024): up to 120,000.**
  - 2024 season total: about 347,000.
  - Carfax says flooded cars often resurface in non-coastal states such as KY, IL and TN (B: Carfax press releases https://www.prnewswire.com/news-releases/carfax-347-000-cars-flood-damaged-in-2024-hurricanes-302284543.html ; https://www.prnewswire.com/news-releases/carfax-up-to-138-000-cars-flood-damaged-by-hurricane-helene-302278662.html ; https://www.prnewswire.com/news-releases/carfax-up-to-89-000-cars-damaged-in-summer-flooding-302255799.html ; NICB via Fox Business).
- **Physical flood signs:** silt or mud under the carpet and dash, rust on seat rails and screws, musty or mildew smell, fogged lights, erratic electronics (B: NICB and Edmunds).

### 12.4 Open recalls at used-car dealers
**Federal law requires new cars to be recall-free but does not prohibit dealers from selling *used* cars with open recalls** (A: FTC Commission statement, Dec 2016, https://www.ftc.gov/system/files/documents/cases/161216_six_auto_recall_cases_statement_of_the_commission_1_0.pdf). The FTC's consent orders with GM, CarMax, Lithia, Koons, Asbury and West-Herr bar those companies from advertising cars as "safe" or "rigorously inspected" unless the cars are recall-free or the dealer discloses open recalls and explains how to check. The CarMax order also requires written notice of an open recall before sale (A) (https://www.ftc.gov/news-events/news/press-releases/2017/03/ftc-approves-final-orders-settling-charges-used-auto-dealers-touted-inspections-without-disclosing ; https://www.ftc.gov/system/files/documents/cases/161214carmaxacco.pdf). The practical rule: **run the VIN yourself; a "certified" or "inspected" label does not mean recalls were repaired.** An open recall is still repaired free by any franchised dealer of that brand, whoever owns the car.

### 12.5 FTC Used Car Rule / Buyers Guide
Dealers selling more than five used cars in 12 months must post a Buyers Guide showing "As Is" versus warranty terms. The rule applies in all states except Maine and Wisconsin, which have their own forms. The Guide advises an independent inspection and a history report and points to ftc.gov/usedcars for recall checks, and it is part of the sale contract (A) (https://www.ftc.gov/business-guidance/resources/dealers-guide-used-car-rule). The FTC tells consumers that a **vehicle history report is not a substitute for an independent mechanical inspection**, to get the PPI in writing with the VIN, and to walk away if the dealer refuses an inspection (A) (https://consumer.ftc.gov/articles/buying-used-car-dealer).

### 12.6 Pre-purchase inspection best practice
- **Independent PPI, about $100–$150**, even on a CPO car. Get a written report with repair estimates to use in negotiation (A: FTC; B/C: Consumer Reports, updated Mar 20, 2026, https://www.consumerreports.org/cars/how-to-inspect-a-used-car-a1377126659/ ; Edmunds https://www.edmunds.com/car-buying/what-to-look-for-when-buying-a-used-car.html).
- **Cold start.** Inspect with a cold engine (CR says not driven for at least an hour). Check that all warning lamps illuminate with key-on and then go out after start, and listen for hard starting and rough idle. For the defects above specifically, listen for:
  - rod or main knock: V35A, L87, J35, Theta II, VC-Turbo;
  - lifter tick: GM AFM/DFM, HEMI;
  - cam-phaser rattle: 3.5 EcoBoost.

  Also look for milky or foamy oil (coolant intrusion) and white smoke (1.5 EcoBoost, Mazda 2.5T) (B: CR plus defect sources).
- **OBD-II scan including readiness monitors.** Clearing codes or disconnecting the battery resets monitors to "Not Ready" until a full drive cycle completes. Several "Not Ready" monitors on a used car is a red flag for recently erased faults. For reference, New York's inspection program fails 2001+ vehicles with more than one non-continuous monitor Not Ready (A: https://www.nyvip3.com/OBDII/ReadyVSNotReady ; https://static.azdeq.gov/vei/obd_readiness_fs.pdf ; https://dep.nj.gov/stopthesoot/obd-ii-information-and-assistance/). Some Honda and Ford models blink the MIL at key-on to show readiness status (A: Ohio EPA guide, https://pdf4pro.com/view/obd-readiness-ohio-epa-home-440b26.html).
- **Service records** matter more for engines with maintenance-conditioned coverage:
  - Hyundai/Kia "exceptional neglect";
  - VW water pump (proof of correct coolant);
  - Subaru CVT (OE or Subaru-reman unit only).
- **Oil level and consumption history:** Honda 1.5T (level rising means fuel dilution), Ford 5.0 (1 qt/3,000 mi), Kia 2.0 MPI piston ring, Subaru 2011–2014 FB.

---

## 13. Falsification pass (Toyota, Lexus, Honda, Mazda)

| Search | What I found | Outcome |
|---|---|---|
| "Toyota engine recall 2024/2025/2026" (Exa and WebSearch) | Only the V35A series (24V-381, 25V-767, 26V-320). Also 24V-587, a Lexus UX300h engine-room harness recall that can cause loss of motive power (small population, hybrid) | V35A is Toyota's main systemic engine issue. **No Dynamic Force 2.0/2.5 recall or investigation found.** |
| "Toyota fuel pump recall 2020" | 20V-012 (1.43M after amendment) and 20V-682 (+1.52M) | Confirmed; substantive and multi-model |
| "Lexus engine failure recall" | LX 600 and GX 550 in the V35A recalls; LX in 24V-381 with phased engine swaps to Sept 2025 | Confirmed |
| Tacoma 2024+ | Brake hoses (~222k), shock reservoirs (~48k, Aug 2026), CV joint (2025), cluster display. The "rear axle recall" is the **2022–2023** Tacoma (24V-152) | The premise that 2024+ Tacoma had a rear-axle recall is **not supported** |
| "Honda engine recall 2023/2024/2025" | 23V-751 (J35) and PE25008 (1.41M, open). No new Honda engine recall in 2024–2026. **26V-365 subframe corrosion (880k, June 2026)** is a notable non-powertrain recall | J35 is a live risk; subframe is new |
| Honda transmissions | TSB 23-078 torque-converter extension (6AT); ZF 9HP class action (allegation only) | Substantive (6AT); unresolved (9AT) |
| "Mazda engine recall" and "Mazda engine failure warranty" | 19V-497 (rocker arm), 21V-875 (fuel pump), **CSP11 2.5T cracked head 10/120**, SA-037-23 service head for 2.5 cylinder-deactivation engines, Jarvis class action | Mazda is **not** defect-free: the 2.5T head crack is a real, manufacturer-acknowledged issue. Overall the systemic list is short |
| Mazda infotainment / 2.5T oil consumption | TSB for 2.5T valve-seal part-number error (2021–2022) (A: https://static.nhtsa.gov/odi/tsbs/2024/MC-11000679-0001.pdf); no class settlement found | Minor |

---

## 14. Contradiction log

1. **Hyundai vs Kia ABS recall numbers.** LemonAuto labels Kia 23V-651 and Hyundai 23V-652. The NHTSA acknowledgment shows **23V-651 = Hyundai (1,642,551)**, so Kia = 23V-652. I used NHTSA.
2. **L87 recall population.** Part 573: 597,571. Secondary sites: 597,630 or "~600k". I used 597,571 (A).
3. **V35A total.** CarBuzz headline says "250,000 trucks". The Drive says ">270,000". The sum of Part 573s is 272,349. I used 272,349.
4. **Toyota Denso counts.** 20V-012 was 695,541 at filing (Part 573), described as "564,300" in the Toyota dealer FAQ, then amended to about 1.43M (Mar 2020). 20V-682 lists 1,517,721 more. Whether the 1.43M amendment and the 20V-682 total overlap is unclear, so I did not quote a grand total.
5. **Honda 6AT torque-converter extension.** TSB 23-078 says 8 yr/150k (A). A search summary claims it was raised to 10 yr/150k in April 2025 (unverified D). I report 8/150 as confirmed.
6. **Ford recall count.** 2025: 152 (cbtnews) vs 153 (CBS Detroit). The 2024 figure is given as 89 in one summary; other outlets differ.
7. **F-150 downshift investigation.** Secondary coverage links it to the 10-speed. NHTSA's EA26001 resume says it is **limited to the 6R80**.
8. **GM 24V-797 scope.** A repair-shop blog described 2019–2024 trucks broadly. The NHTSA Part 573 shows **diesel-equipped** 2020–2022 (plus 2021 diesel SUVs), 461,839 vehicles.
9. **Nissan VC-Turbo count.** Part 573: 443,899. One headline says "480,000".
10. **Hyundai E2 approval date.** A secondary summary says Sept 8, 2023. The Hyundai settlement site says judgment was entered **April 26, 2024**. I used the settlement site.
11. **Premise corrections.** The Honda 1.5T extension did not include the 2018+ Accord. The Subaru 2016–2017 bulletin is 16-115-18, not 16-114. The Ford 5.0 TSB is 19-2365, not 19-2346.
12. **GM L87 oil.** The recall "passes inspection" path uses 0W-40 (secondary sources, consistent with NHTSA's "oil viscosity change"). The GM dealer parts list shows 0W-20 Dexos, apparently for the engine-replacement path. Not fully reconciled.
13. **Kia E2 extended-warranty start.** "From the date of original retail delivery" (settlement site) is consistent with the Hyundai site.

---

## 15. Research gaps
- Ford 3.3L V6, the Durango specifically, and BMW/Mercedes were not investigated in depth.
- The current status of PE24018 (Ram eTorque) and whether EA25007 (GM L87) was merged into EA26005 are unknown.
- The terms of Mazda CSP12 (fuel-pump warranty extension) are not verified.
- The 4xe 25V-741 remedy status for the Grand Cherokee 4xe is unknown (the Wrangler status comes from a forum).
- Repair costs are mostly unsourced. Only manufacturer flat-rate labor hours are primary: V35A 13.6 h; Honda torque converter 7.2–7.6 h; Mazda 2.5T head 10.9–11.3 h; Kia engine 8+ h.

---

## 16. Source list (URL, grade)

**NHTSA recall and investigation documents (A)**
- https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V381-9859.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V381-0422.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCMN-24V381-5346.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V381-6746.PDF
- https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V767-5381.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V767-6304.pdf
- https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V320-0076.pdf ; https://static.nhtsa.gov/odi/rcl/2026/RCAK-26V320-8328.pdf
- https://static.nhtsa.gov/odi/rcl/2020/RMISC-20V012-4705.pdf ; https://static.nhtsa.gov/odi/rcl/2020/RCMN-20V012-6556.pdf ; https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V682-3280.PDF
- https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V461-5298.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V152-8115.pdf
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V751-1498.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCONL-23V751-9092.pdf ; https://static.nhtsa.gov/odi/inv/2024/INCLA-RQ24013-85911.pdf ; https://static.nhtsa.gov/odi/inv/2025/INOA-PE25008-18189.pdf
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V858-9680.pdf
- https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V365-6590.pdf
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V651-3906.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V652-7830.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V099-7174.PDF ; https://static.nhtsa.gov/odi/rcl/2025/RCMN-25V099-1321.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RMISC-25V099-1408.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V099-1663.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V437-0399.pdf ; https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V080-7320.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V274-1938.PDF ; https://static.nhtsa.gov/odi/rcl/2025/RCRIT-25V274-5347.pdf ; https://static.nhtsa.gov/odi/inv/2025/INOA-EA25007-23191.pdf ; https://static.nhtsa.gov/odi/inv/2026/INIM-RQ26001-10012.pdf ; https://static.nhtsa.gov/odi/inv/2026/INOA-EA26005-17015.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RCLRPT-24V797-7588.PDF ; https://static.nhtsa.gov/odi/rcl/2026/RCLRPT-26V085-3557.pdf
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V675-9899.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V675-3320.PDF ; https://static.nhtsa.gov/odi/rcl/2023/RMISC-23V675-6941.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCMN-23V675-7670.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V166-9795.PDF
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V896-5442.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RMISC-24V635-2546.pdf
- https://static.nhtsa.gov/odi/inv/2026/INOA-EA26001-10007.pdf
- https://static.nhtsa.gov/odi/inv/2024/INOA-PE24018-15183.pdf ; https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V265-2735.PDF ; https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V142-0615.pdf
- https://static.nhtsa.gov/odi/rcl/2020/RCLRPT-20V699-8227.PDF
- https://static.nhtsa.gov/odi/rcl/2021/RCAK-21V875-2835.pdf ; https://static.nhtsa.gov/odi/rcl/2019/RCONL-19V497-7677.pdf ; https://static.nhtsa.gov/odi/rcl/2025/RCLRPT-25V357-7814.pdf ; https://static.nhtsa.gov/odi/rcl/2017/RCAK-17V745-2900.pdf
- https://static.nhtsa.gov/odi/rcl/2015/RCMN-15V370-3329.pdf
- https://static.nhtsa.gov/odi/inv/2023/INRD-RQ23007-20175.pdf

**Manufacturer bulletins, TSBs, letters and press releases (A)**
- Toyota: https://pressroom.toyota.com/toyota-recalls-certain-toyota-tundra-and-lexus-gx-and-lx-vehicles/ ; https://pressroom.toyota.com/toyota-recalls-certain-2024-2025my-toyota-tacoma-4-wheel-drive-trucks/ ; https://pressroom.toyota.com/toyota-recalls-certain-model-year-2024-2025-tacoma-vehicles/
- Honda: https://static.nhtsa.gov/odi/tsbs/2023/MC-10241879-0001.pdf (TSB 23-078) ; https://hondanews.com/en-US/honda-corporate/releases/release-ce25b2bdc6167d48c9de61f4f90293c5-2015-2020-multi-model-connecting-rod-recall
- Subaru: https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2018/MC-10150931-9999.pdf
- Nissan: https://www.nissanassist.com/campaigns/engine-bearing-warranty-extension-my19-20-altima/ ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10246457-0001.pdf
- Ford: https://static.nhtsa.gov/odi/tsbs/2022/MC-10213732-0001.pdf (CSP 21N12) ; https://static.nhtsa.gov/odi/tsbs/2024/MC-11009831-0001.pdf (CSP 24N01) ; https://static.nhtsa.gov/odi/tsbs/2019/MC-10169811-0001.pdf (TSB 19-2365) ; https://www.ford.com/support/how-tos/recall/recalls-and-faqs/24s55-bronco-edge-explorer-f-150-2021-2022-engine-intake-valves-recall/
- Mazda: https://static.nhtsa.gov/odi/tsbs/2024/MC-11011136-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2025/MC-11012343-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10232269-0001.pdf ; https://oemdtc.com/tsb/10238700/ ; https://news.mazdausa.com/2025-06-06-STATEMENT-ON-SAFETY-RECALL-7525E ; https://static.oemdtc.com/NHTSA-PDFs/MC-11011341-0001.pdf
- Stellantis: https://www.mopar.com/en-us/my-vehicle/recalls/eco-diesel-warranty.html
- VW: https://www.vwcourtsettlement.com/en/docs/emissions/Gen3_Emissions_Modification_Disclosure_Volkswagen.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-10164246-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2019/MC-10169141-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2019/MC-10169142-0001.pdf

**Court, settlement and government sources (A)**
- https://hma-thetasettlement.com/ ; https://www.hma-e2settlement.com/ ; https://kiaengineclasssettlement.com/Home/FAQ ; https://www.autosafety.org/hyundai-kia2-0-and2-4l-gdi-class-action-settlements/
- https://www.nhtsa.gov/press-releases/nhtsa-announces-consent-orders-hyundai-and-kia-over-theta-ii-recall (plus the Hyundai and Kia consent-order PDFs linked in §3.1)
- https://www.hbsslaw.com/hyundai-kia-usb-car-theft-defect/faq (class counsel; A/B) ; https://www.atg.wa.gov/news/news-releases/states-settle-hyundai-kia-over-failure-equip-vehicles-anti-theft-technology
- https://www.iihs.org/media/d2c7da66-9ce8-4c61-b129-5d5732707ef1/Cpu9CA/HLDI%20Research/Bulletins/hldi_bulletin_42-07.pdf
- https://bbbprograms.org/programs/dr/class-action/nissan-cvt ; https://assets.bbbprograms.org/docs/default-source/arbitration-under-class-action-settlements/nissan-infinity-transmission-class-action.pdf
- https://www.settlement-claims.com/infotainment/HondaFrequentlyAskedQuestions.html ; https://www.settlement-claims.com/infotainment/acurasettlementbenefits.html
- https://law.justia.com/cases/federal/appellate-courts/ca6/23-1940/23-1940-2025-06-27.html
- https://www.federalregister.gov/documents/2024/08/05/2024-17251/supplemental-initial-decision-that-certain-frontal-driver-and-passenger-air-bag-inflators
- https://www.nhtsa.gov/vehicle-safety/takata-recall-spotlight ; https://www.nhtsa.gov/takata-recall-spotlight/do-not-drive-warning ; https://www.nhtsa.gov/recalls ; https://www.nhtsa.gov/press-releases/park-outside-recall-jeep-wrangler-phev
- https://www.ftc.gov/business-guidance/resources/dealers-guide-used-car-rule ; https://consumer.ftc.gov/articles/buying-used-car-dealer ; https://www.ftc.gov/system/files/documents/cases/161216_six_auto_recall_cases_statement_of_the_commission_1_0.pdf ; https://www.ftc.gov/news-events/news/press-releases/2017/03/ftc-approves-final-orders-settling-charges-used-auto-dealers-touted-inspections-without-disclosing ; https://www.ftc.gov/system/files/documents/cases/161214carmaxacco.pdf
- https://vehiclehistory.bja.ojp.gov/nmvtis_consumers
- https://www.nyvip3.com/OBDII/ReadyVSNotReady ; https://static.azdeq.gov/vei/obd_readiness_fs.pdf ; https://dep.nj.gov/stopthesoot/obd-ii-information-and-assistance/

**Quality outlets (B when two or more agree)**
- The Drive: https://www.thedrive.com/news/toyota-wont-replace-every-recalled-tundra-v6-and-some-owners-are-fed-up ; https://www.thedrive.com/news/jeep-agrees-to-settlement-over-wrangler-gladiator-death-wobble
- CarBuzz: https://carbuzz.com/toyota-tundra-v6-recall-spans-250000-trucks/ ; https://carbuzz.com/gm-l87-v8-engine-failure-nhtsa-investigation-august-2026/ ; https://carbuzz.com/nissan-vc-turbo-engine-massive-recall/
- TFL: https://tfltruck.com/2026/06/toyota-tundra-engine-recall-update-news/ ; https://tflcar.com/2026/02/nissan-rogue-engine-recalls-news/ ; https://tfltruck.com/2025/08/ford-f-150-rear-axle-hub-bolt-recall-new/
- GM Authority: https://gmauthority.com/blog/2026/08/gm-6-2l-l87-engine-post-recall-failures-piling-up-nhtsa-investigation-shows/ ; https://gmauthority.com/blog/2026/01/nhtsa-investigating-post-recall-gm-6-2l-l87-engine-failures/ ; https://gmauthority.com/blog/2025/12/gm-v8-engine-lifters-lawsuit-aims-for-class-action-status/ ; https://gmauthority.com/blog/2026/05/gm-hit-with-10-speed-transmission-class-action-lawsuit-in-california/
- The Autopian: https://www.theautopian.com/it-took-gm-more-than-28000-failed-v8s-before-recalling-its-l87-engines-now-the-feds-are-investigating-after-6000-fixed-engines-also-failed/
- Honda 1.5T: https://www.wardsauto.com/news/archive-wards-honda-extends-warranty-to-address-1-5l-gas-oil-dilution-problem/793295/ ; https://www.cars.com/articles/honda-extends-warranty-on-cr-v-civic-for-1-5-liter-turbo-oil-issue-402938/
- Ford recall volume: https://www.cbsnews.com/detroit/news/ford-leads-automakers-153-recalls-2025/ ; https://www.cbtnews.com/ford-posts-record-152-recalls-in-2025-but-says-vehicle-quality-is-improving/ ; https://www.carscoops.com/2025/12/ford-2025-record-recalls-scale/
- Hyundai/Kia insurance and theft: https://www.cnn.com/2023/01/27/business/progressive-state-farm-hyundai-kia/index.html ; https://abcnews.com/US/kia-hyundai-models-insurers-refusing-cover-high-theft/story?id=96766632
- Jeep death wobble: https://www.kbb.com/car-news/jeep-wrangler-owners-death-wobble-lawsuit-settlement-may-bring-extended-warranties
- ARC: https://www.ttnews.com/articles/nhtsa-retreats-air-bag-recall ; https://www.repairerdrivennews.com/2024/12/23/nhtsa-pauses-air-bag-recall-after-comments-raise-technical-engineering-differences/ ; https://apnews.com/article/arc-air-bag-inflator-deaths-rupture-recall-70f0d5341e7999bfece4b80ee515f5fa
- Flood: https://www.prnewswire.com/news-releases/carfax-347-000-cars-flood-damaged-in-2024-hurricanes-302284543.html ; https://www.prnewswire.com/news-releases/carfax-up-to-138-000-cars-flood-damaged-by-hurricane-helene-302278662.html ; https://www.foxbusiness.com/lifestyle/hurricane-ian-insurance-crime-experts-warning-car-buyers-flood-damaged-vehicles
- Inspection: https://www.consumerreports.org/cars/how-to-inspect-a-used-car-a1377126659/ ; https://www.edmunds.com/car-buying/what-to-look-for-when-buying-a-used-car.html
- Other: https://www.cbtnews.com/toyota-recalls-145000-grand-highlander-and-lexus-tx-vehicles-over-airbag-deployment-issues/ ; https://moparinsiders.com/jeep-recalls-320065-4xe-phevs-over-battery-fire-risk/ ; https://bergermontague.com/cases/vargas-et-al-v-ford-motor-co/ ; https://topclassactions.com/lawsuit-settlements/closed-settlements/ford-powershift-transmission-class-action-settlement/ ; https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-battery-drain-class-action-settlement/

**Single secondary or class-action complaints (C)**
- https://www.carcomplaints.com/news/2024/honda-9-speed-transmission-lawsuit.shtml (complaint summary)
- https://www.carcomplaints.com/news/2025/nissan-cvt-class-action-lawsuit-settlement.shtml
- https://www.fordecoboostlawsuit.com/ ; https://www.carcomplaints.com/news/2025/ford-ecoboost-lawsuit-15l-16l-20l-engines.shtml
- https://www.classaction.org/news/mazda-coolant-leak-lawsuit-says-defect-can-cause-engine-overheating-failure
- https://www.carcomplaints.com/news/2024/hemi-tick-lawsuit-includes-57-liter-and-64-liter-engines-.shtml
- https://www.carcomplaints.com/news/2018/chrysler-9-speed-transmission-lawsuit.shtml
- https://openclassactions.com/investigations/arc-airbag-inflator-mdl-lawsuit.php
- https://www.charneylawyers.com/ford-10r80-10-speed-transmission-class-action/home
- https://pickuptrucktalk.com/2026/05/second-toyota-tundra-engine-recall-postponed-again-because-company-incredibly-still-doesnt-have-a-fix-after-4-years/ ; https://pickuptrucktalk.com/2026/03/2024-2026-toyota-tacoma-known-problems-transmission-engine-small-gripes/
- https://www.jalopnik.com/2226803/is-hyundai-smartstream-block-reliable/
- https://www.autoevolution.com/news/17-million-kia-vehicles-recalled-over-fire-risk-from-hecu-electrical-short-221852.html
- https://www.motor1.com/news/789583/ford-2026-recalls-list-models-affected/
- https://oemdtc.com/investigation/?number=PE25008

**Leads only (D)**
- https://www.jlwranglerforums.com/forum/threads/safety-recall-68c-25v-741-fix-available-for-high-voltage-battery-in-4xe-phev.161162/
- https://lemonmyvehicle.com/blog/ford-f-150-transmission-lawsuit/
- https://www.cherishyourcar.com/toyota-tundra-engine-recall/
- https://www.lemonauto.com/hyundai-kia-recall-23v651000-23v652000.html (recall numbers wrong; see contradiction 1)
- https://us.ok.com/ask_news_cars/hyundai-smartstream-2-5l-engine-known-issues-recalls/
- https://drvin.ai/tools/inspection-checklist
- Forum threads at piloteers.org, ridgelineownersclub.com, hellcatforums.com and tundras.com
