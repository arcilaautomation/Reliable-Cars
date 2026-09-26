# 05 — Compact & Subcompact SUVs/Crossovers, MY2015–2025: Used-Buyer Reliability Report

Prepared 2026-09-26 for a US used-vehicle shopper. Scope: the 40+ compact and subcompact nameplates listed in the brief. The main focus is the non-hybrid powertrains. A hybrid gets one line where its reliability differs materially.

---

## 0. How to read this file

### Method
1. **Consumer Reports year-by-year verdicts (Grade A).** For every model and year, I pulled CR's own reliability page at `https://www.consumerreports.org/cars/<make>/<model>/<year>/reliability`. The public part of each page gives a one-line verdict relative to the average vehicle of the same model year: "much more reliable", "more reliable", "about average", "less reliable" or "much less reliable". These pages are CR's own published data. CR updates them each year, so what you see here is the verdict as of Sept 2026. Where a page was paywalled or showed no verdict, the table says **n/a**.
2. **J.D. Power VDS segment winners (Grade A).** Source: J.D. Power's ratings pages, `jdpower.com/cars/ratings/dependability/<year>`, plus the 2025 and 2026 VDS press releases. VDS surveys owners of 3-year-old vehicles, so the 2026 VDS covers MY2023 and the 2018 VDS covers MY2015.
3. **iSeeCars own study pages (Grade A).** Two studies: *Longest-Lasting Cars 2025*, which gives the % chance of reaching 250k miles, and *Most Reliable Small & Compact SUVs 2026*, a 0–10 score. Both are **model-level (all years pooled), not year-specific**, so they carry less weight here than CR's year-level data.
4. **NHTSA recall records (Grade A).** Pulled from the NHTSA recalls API and from `static.nhtsa.gov` Part 573 reports. Manufacturer TSBs, warranty extensions and Customer Support Programs were filed with NHTSA and read from `static.nhtsa.gov` or exact mirrors (dot.report, oemdtc), also Grade A.
5. Class-action complaints count as **allegations (Grade C)**. Forums, CarComplaints and Reddit are leads only (Grade D) and never carry a conclusion.

### Verdict scale used below
- **Top pick**: specific model, years and engine with A-grade year-level reliability evidence and no unremedied major powertrain defect found in the falsification pass.
- **Strong**: good A-grade evidence, but with a documented, remedied or covered weak point, or thin data.
- **Mixed**: buy only the specific years or engines named.
- **Avoid**: A-grade below-average reliability across most years, or a serious unremedied defect.

### Limitations
- **CR's verdict is relative to the same model year.** It is a year-level verdict for the nameplate. CR does not break it out by engine on the public page, so where a specific engine has a documented defect, this report applies that defect on top of CR's verdict.
- **CR 2025 verdicts rest on a small, young sample.**
- **Two tool limits.** The session's WebSearch budget ran out partway through, and after that searches went through Exa. The NHTSA API was also read via Exa fetch, because the direct host was proxy-blocked.
- **CR's paid lists.** The "used cars to avoid" and "best used" lists are paywalled. Where I cite them, I note that I reached coverage of CR rather than CR itself.

### Quick verdict matrix (details and grades in each model section)

| Model | Best years / powertrain | Avoid / caution |
|---|---|---|
| Toyota RAV4 | **2021–2023 2.5L gas; 2016–2018 2.5L** | 2019 (first year, multiple recalls); early-build 2015 (torque-converter shudder) |
| Toyota Corolla Cross | **2022–2024 2.0L** | 2025 (CR "less reliable", thin data) |
| Toyota C-HR | 2020 (2018–2019 OK) | — |
| Honda CR-V | **2020–2022 1.5T; 2015–2016 2.4L**; 2024–2025 | 2017–2018 1.5T (oil dilution; extension expired) |
| Honda HR-V | 2019–2020 1.8L (CVT ext. still running on many) | 2023 (CR less) |
| Mazda CX-5 | **2023–2025 2.5L non-turbo**; 2015 | 2.5T (cylinder-head coolant-crack TSBs, class actions); 2018–19 (confirm cyl-deactivation recall) |
| Mazda CX-3 | 2018–2019 | — |
| Mazda CX-30 | 2020, 2024 (2.5 NA) | 2022, 2025; 2.5T caution |
| Mazda CX-50 | 2024–2025 NA (caution) | 2023 |
| Subaru Forester | 2022–2024 | 2015–2018, 2020 |
| Subaru Crosstrek | **2019–2024 2.0L** | 2015–2017 |
| Subaru Outback | 2023–2025 2.5L | 2018–2020 |
| Lexus NX | **NX 300h 2015–2021**; NX 2022–2023; NX 200t/300 = Strong w/ caution | 2024 (CR average only) |
| Lexus UX | 2019–2023 | — |
| Acura RDX | 2015 (V6), 2019, 2022 | 2018 |
| Nissan Rogue | 2019, 2021 (2.5L) | 2015–2016; 2022–2025 1.5 VC-Turbo unless recalls done |
| Nissan Rogue Sport | — | 2017–2020, 2022 |
| Nissan Kicks | 2022–2024 (2025 new gen promising) | 2019–2020 |
| Hyundai Tucson | 2021; 2024–2025 | 2016–2019 (esp. 1.6T DCT), 2022 |
| Hyundai Kona | 2023 (2020, 2022 avg) | 2018–2019, 2021, 2024 |
| Hyundai Venue | 2021–2022 | — |
| Kia Sportage | 2022; 2025 | 2015, 2017–2018, 2021 |
| Kia Seltos | 2022–2023; 2025 | 2021, 2024 |
| Kia Soul | 2023 (2021–2022 avg) | 2015–2020 |
| Chevy Equinox / GMC Terrain | 2022–2024 1.5T; 2019 | 2025 (new gen); 2015, 2017 |
| Chevy Trax / Trailblazer | Trax 2025; Trailblazer 2023–2024 | Trax 2017–2019; Trailblazer 2021 |
| Buick Encore / GX / Envision | Envision 2017, 2023; Encore GX 2024 | Encore 2015–2017; Encore GX 2020–2021, 2023 |
| Ford Escape | 2025 only (young data) | **2015–2024** |
| Ford Bronco Sport | 2024–2025 (open recall) | 2021–2022 |
| Ford EcoSport | — | 2020 |
| Jeep Cherokee / Compass / Renegade | Cherokee 2021; Compass 2020, 2023–24 | Cherokee 2015–2020; Compass 2017–19, 2022; Renegade 2017 |
| VW Tiguan | 2020, 2024 | 2018–2019, 2021–2023 |
| Mitsubishi Outlander / Sport | 2024 Outlander (thin) | insufficient CR data others |
| BMW X1 / X3 | X1 2021; X3 2021–2023 | X3 2016, 2019 |
| Mercedes GLC | 2020–2022 (avg) | 2016–2018, 2023 |
| Audi Q3 / Q5 | Q5 2020 | Q3 2018 (CR avoid list), 2021; Q5 2016, 2018, 2022 |

---

## 1. Cross-segment evidence (used in many sections)

### J.D. Power U.S. Vehicle Dependability Study segment winners (A)
Source pages: https://www.jdpower.com/cars/ratings/dependability/2018 through /2025. The 2026 release is at https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/.

| VDS year (MY surveyed) | Small SUV | Compact SUV | Small Premium SUV | Compact Premium SUV |
|---|---|---|---|---|
| 2018 (MY2015) | Hyundai Tucson | Chevrolet Equinox | Audi Q3 | Mercedes GLK |
| 2019 (MY2016) | VW Tiguan | Chevrolet Equinox | Audi Q3 | BMW X3 |
| 2020 (MY2017) | Buick Encore | Chevrolet Equinox | Mercedes GLA | Porsche Macan |
| 2021 (MY2018) | Kia Sportage | Buick Envision | Mercedes GLA | Porsche Macan |
| 2022 (MY2019) | Buick Encore | Buick Envision | Lexus UX | Lexus NX |
| 2023 (MY2020) | Toyota C-HR | Kia Sportage | BMW X2 | Lexus NX |
| 2024 (MY2021) | Buick Encore | Chevrolet Equinox | BMW X1 | Lexus NX |
| 2025 (MY2022) | Nissan Kicks | Toyota RAV4 | (none listed) | Mercedes GLC |
| 2026 (MY2023) | Subaru Crosstrek | Chevrolet Equinox | Lexus UX | BMW X4 (per Autoblog coverage) |

- **2026 VDS context.** The industry average was 204 PP100, the worst since the 2022 redesign. Gas vehicles came in at 198 PP100, hybrids at 213 and PHEVs at 281. The top-ranked brand was Lexus at 151, and Buick led mass-market brands at 160 (A). https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/
- **2025 VDS context.** The industry average was 202 PP100. Model-level winners included the Toyota RAV4, the Nissan Kicks and the Mercedes GLC (A). https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/
- **Caveat.** VDS measures problems reported by original owners during year 3, and infotainment dominates those counts. VDS winners are **not** evidence against a documented engine defect.

### iSeeCars (A)
- **Longest-Lasting SUVs 2025**, % chance of reaching 250k miles; the SUV average is 4.3%.

  | Model | Rank | Chance of 250k |
  |---|---|---|
  | Honda CR-V | #10 | 10.6% |
  | Toyota RAV4 Hybrid | #13 | 7.9% |
  | Toyota RAV4 | #16 | 7.3% |
  | Acura RDX | #17 | 7.2% |

  No other compact or subcompact SUV in scope made the above-average list. https://www.iseecars.com/longest-lasting-cars-study
- **Most Reliable Small & Compact SUVs 2026** (score out of 10; category average 7.4):

  | Model | Score |
  |---|---|
  | Subaru Outback | 8.0 |
  | Honda CR-V | 7.9 |
  | Mazda CX-5 | 7.9 |
  | Toyota RAV4 | 7.8 |
  | Ford Escape | 7.8 |
  | Subaru Forester | 7.6 |
  | Chevrolet Equinox | 7.2 |
  | Nissan Rogue | 7.2 |
  | Mitsubishi Outlander | 7.2 |

  The remaining ranked models, below average in this order, were GMC Terrain, Kia Sportage, Jeep Cherokee, VW Tiguan and Hyundai Tucson, which was last of 14. https://www.iseecars.com/most-reliable/most-reliable-small-suvs
  - These are model-level lifespan scores pooled across many years and generations. **They do not override year-level CR data or specific engine defects.**

### Consumer Reports "used cars to avoid" (coverage of CR, C)
The list itself is paywalled at https://www.consumerreports.org/cars/used-cars-to-avoid-buying-a4034931071/, so these entries come from coverage.
- **Feb-2025 list (67 vehicles), in-scope entries:**
  - 2021 Bronco Sport
  - 2021 Escape; 2021–2023 Escape Hybrid
  - 2024 Buick Encore GX
  - 2019 Hyundai Kona
  - 2024 Sportage Hybrid; 2023 Sportage PHEV
  - 2024 Mazda CX-50
  - 2015 Nissan Rogue
  - 2018 Audi Q3

  Source: https://www.guideautoweb.com/en/articles/77355/consumer-reports-lists-10-most-satisfying-new-models-and-67-used-vehicles-to-avoid/
- **Mar-2026 list (42 cars), in-scope entries:** 2025 Chevrolet Equinox and 2025 GMC Terrain. Of 20 compact SUVs, this pair ranked dead last, mainly on transmission issues. Ford had 6 entries on the list. https://www.jalopnik.com/2132008/used-chevy-models-avoid-buying-consumer-reports/
- **Note.** For 2024 CX-50 and 2024 Encore GX, CR's current year pages now read "about average" and "more reliable" respectively. CR's data changed between editions; see the contradiction log.

---
## 2. TOYOTA / LEXUS

### Toyota RAV4 — XA40 (2013–2018; 2.5L 2AR-FE + 6AT) and XA50 (2019–2025; 2.5L A25A-FKS + 8AT "Direct Shift")
- **Overall 2015–2025: Top pick.**
  - XA40 2016–2018: Top pick.
  - XA50 2021–2023: Top pick.
  - 2019–2020 XA50: Strong with recall checks.
  - 2024: Strong; CR rates it only "about average".
- **Best buys:**
  - 2021–2023 RAV4 2.5 gas. CR rates 2021 and 2023 "much more reliable" and 2022 "more reliable". J.D. Power named the 2022 RAV4 the Compact SUV segment winner in the 2025 VDS.
  - 2016–2018 2.5 gas; CR rates all three years "more reliable".
- **Avoid / caution:**
  - **2019** is the redesign year. It has 7 recalls, including engine-block porosity, cracked lower control arms, water intrusion into the power-steering gearbox, and the backup camera. There is also a TSB for low-speed hesitation. CR still rates the 2019 "more reliable", so treat 2019 as buyable only with every recall closed.
  - **Early-build 2015** (built before about Nov 2014) falls in the torque-converter shudder population.
- **Known failure points:**
  - **Engine block casting porosity** causing an internal or external coolant leak, overheating, stalling and possible oil-leak fire.
    - Recall 20V-064: 2019–2020 RAV4 and RAV4 Hybrid 2.5L, plus 2020 Camry, Avalon and ES300h.
    - Affected blocks were cast during a Sept-2019 cooling flow-meter fault. For RAV4 this means TMMC builds from Sep 12 to Nov 20, 2019.
    - Remedy: the dealer checks the casting serial and replaces the engine. (A) https://static.oemdtc.com/Recall/20V064/RMISC-20V064-0396.pdf ; NHTSA API record 20V064000.
  - **Coolant bypass ("flow shut-off") valve crack and leak.** Symptoms are an "Engine Maintenance Required" message, A/C problems, or code P2681.
    - Toyota **Customer Support Program 24TE04** covers 2019–2021 RAV4, RAV4 Hybrid and 2021 Prime.
      - Primary coverage ran to Nov 30, 2025 regardless of mileage.
      - Secondary coverage is **10 yr / 100k from first use**. (A) https://dot.report/bulletins/11012750
    - 2022–2023 RAV4 are **not** in 24TE04.
    - A class action, *Barrientos v. Toyota*, alleged the defect in 2019–2023 RAV4 and Corolla and was voluntarily dismissed in Nov 2024 (C). https://www.classaction.org/media/barrientos-et-al-v-toyota-motor-sales-usa-inc-et-al.pdf ; https://www.carcomplaints.com/news/2024/toyota-coolant-bypass-valve-lawsuit-dismissed.shtml
    - Typical cost quoted in NHTSA complaints reproduced in that complaint: $500–$1,000 (D).
  - **8AT low-speed hesitation/lurch, 2019.** TSB T-SB-0107-19 (Aug 2019) prescribes an ECM reflash plus a relearn drive. The TSB number is corroborated only by forum and CarComplaints sources; I did not read the TSB itself (C/D). https://www.rav4world.com/threads/after-getting-serviced-for-tsb-0107-19-transmission-lurching-issue-post-here.301187/
  - **XA40 torque-converter shudder** at 25–50 mph under light throttle.
    - Warranty Enhancement **ZH1** covers 2013–2015 RAV4 built late Nov 2012 to early Nov 2014 (433,200 vehicles). Secondary coverage is 8 yr / 150k from first use.
    - That window has now expired for essentially all affected cars, so a 2015 with shudder is now owner-paid.
    - (A) https://static.nhtsa.gov/odi/tsbs/2017/MC-10140600-9999.pdf
  - **RAV4 Hybrid 2019–2021 fuel tank takes only about 10 of 14.5 gal.**
    - Fix is a Customer Support Program (new tank and/or sender) with 8 yr / 100k coverage, plus a class settlement (C). https://www.torquenews.com/1083/toyota-rav4-hybrid-fuel-tank-issue-fixed-customer-support-program
    - The hybrid also shows higher 250k-mile odds than the gas RAV4 in iSeeCars: 7.9% vs 7.3% (A).
- **Significant recalls (A, NHTSA):**
  - 20V-064: engine block porosity.
  - 20V-286: 2019–2020 front lower control arm cracks.
  - 20V-373: 2019–2020 EPS gearbox water intrusion.
  - 20V-682: low-pressure fuel pump, 2019–2020 RAV4 (expansion of 20V-012).
  - 19V-576: 2019 backup camera.
  - 23V-734: 2013–2018 RAV4 replacement 12V battery can contact the hold-down, a fire risk.
  - 22V-519: 2022 passenger occupant classification sensor.
  - 24V-911: 2024 RAV4 caliper and hub bolts.
  - 25V-595: 2023–2025 instrument-panel software.
  - 25V-744: 2022–2026 Panoramic View Monitor camera software.
  - Source: NHTSA API https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=rav4&modelYear=2019 (and 2017, 2022, 2024).
- **Evidence (A):**
  - CR year verdicts, from https://www.consumerreports.org/cars/toyota/rav4/2019/reliability and the matching pages for other years:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | more | more | more | more | more | more | **much more** | more | **much more** | avg | more (predicted) |

  - J.D. Power: 2025 VDS Compact SUV winner (2022 RAV4).
  - iSeeCars: RAV4 7.3% chance of 250k (#16 SUV); RAV4 Hybrid 7.9% (#13). Reliability score 7.8.
- **Inspection checklist:**
  - Run the VIN at nhtsa.gov and toyota.com/recall. Confirm 20V-064, 20V-286, 20V-373, 20V-682 and 23V-734 are closed.
  - Confirm CSP 24TE04 applies on 2019–2021.
  - Scan for P2681 or other coolant-bypass codes. Check for pink coolant crust at the rear of the engine and verify the reservoir level.
  - On 2019–2020, ask whether the block casting serial was inspected under 20V-064.
  - Test-drive rolling-stop re-acceleration to check for lurch.
  - On XA40, cruise at 25–50 mph at light throttle to feel for shudder.
  - Hybrid: fill from near-empty to confirm the tank takes about 14 gal.
  - Demand oil-change records at 5–10k-mile intervals.

### Toyota Corolla Cross — XG10 (2022–2025; 2.0L M20A-FKS + CVT with launch gear)
- **Verdict: Top pick for 2022–2024 2.0.** For 2025, Mixed; the data is thin.
- **Best:** 2022–2024. CR rates all three years "much more reliable" (A).
- **Caution:** 2025. CR rates it "less reliable", with owner comments centered on in-car electronics (A).
- **Known failure points:** No powertrain defect program found in the falsification pass. Documented items:
  - Front-passenger airbag instrument-panel perforation (recalls 23V-384 and 23V-864).
  - Idle stop-start not restarting during wiper use (TSB).
  - Hybrid only: loss of brake assist, 24V-708 (2023–2024 Corolla Cross Hybrid).
  - (A) https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V864-1152.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10236213-9999.pdf ; https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V708-2799.pdf
- **Evidence:**
  - CR: 2022 much more; 2023 much more; 2024 much more; 2025 less (A). https://www.consumerreports.org/cars/toyota/corolla-cross/2023/reliability
  - The model is young, so there is no iSeeCars 250k data yet.
- **Checklist:**
  - Confirm 23V-384 and 23V-864 are closed.
  - Check that stop-start restarts properly with the wipers on.
  - Keep CVT fluid service on record.
  - On 2025, test CarPlay and Android Auto.

### Toyota C-HR — 2018–2022 (US; 2.0L + CVT)
- **Verdict: Strong.** It is slow but mechanically simple.
- **Best year:** 2020, which CR rates "more reliable" and which won J.D. Power's 2023 VDS Small SUV award (A). 2018–2019 are OK; CR rates both "about average". 2021–2022 have no CR verdict (thin sample).
- **Recalls:** Only minor labeling campaigns were found; the 2019 load-label recall 19V-244 is one example (A).
- **Checklist:** Standard CVT and brake checks; confirm open campaigns by VIN.

### Lexus NX — AZ10 (2015–2021: NX 200t 2015–2017 and NX 300 2018–2021 with 2.0T 8AR-FTS + 6AT; NX 300h 2.5 hybrid) and AZ20 (2022+: NX 250 2.5, NX 350 2.4T T24A-FTS, NX 350h/450h+)
- **Verdict:**
  - **NX 300h 2015–2021: Top pick**, confirm CSP 24LE03 by VIN.
  - **NX 200t/NX 300 2.0T: Strong**, downgraded because of the valve-guide TSB.
  - **2022–2023 NX: Strong/Top-tier**.
  - **2024: Mixed**; CR rates it average.
- **Best:**
  - NX 300h 2015–2021.
  - NX 2022–2023. CR rates 2023 "much more reliable".
  - J.D. Power's Compact Premium SUV award went to the 2019, 2020 and 2021 NX (2022, 2023 and 2024 VDS) (A).
- **Known failure points:**
  - **8AR-FTS worn exhaust valve guides.** Symptoms: compression loss, misfire or air-fuel imbalance codes, and limp mode ("reduced engine power").
    - Toyota bulletin **L-SB-0007-21 Rev1 (2024)**: repair is **cylinder head replacement**, covered only within the 6 yr / 70k powertrain warranty. **No extension.**
    - Applies to 2015–2017 NX 200t and 2018–2021 NX 300 built before a stated engine serial number. (A) https://static.nhtsa.gov/odi/tsbs/2021/MC-10190467-9999.pdf ; https://oemdtc.com/tsb/11003637/
  - **8AR rocking/surge** at 30–70 mph: 2015–2017 NX 200t; fix is to replace the vacuum regulating valve (A). https://static.nhtsa.gov/odi/tsbs/2017/MC-10119435-9999.pdf
  - **NX 300h brake booster / pump internal leak** (codes C1391, C1252, C1253, C1256).
    - **CSP 24LE03** covers 2018–2021 NX300h built June 2017 to Sept 2021. Primary coverage ran to Jan 30, 2026; secondary is **10 yr / 150k**. (A) https://static.oemdtc.com/NHTSA-PDFs/MC-11014217-0001.pdf ; L-SB-0008-25 https://dot.report/bulletins/11014207
    - I did not confirm an equivalent program for 2015–2017 NX300h.
  - **NX 350 (2024):** a catalyst-efficiency code P0420 is fixed by an ECM reflash; it is emissions-warranty related (A). https://static.oemdtc.com/NHTSA-PDFs/MC-11021725-0001.pdf
- **Recalls (A):**
  - 20V-682 fuel pump (2018–2019 NX300).
  - 24V-911 caliper and hub bolts (2025 NX).
- **Evidence (CR, A):**

  | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
  |---|---|---|---|---|---|---|---|---|---|---|---|
  | CR verdict | much more | more | more | more | much more | much more | much more | more | much more | avg | more |

  Source: https://www.consumerreports.org/cars/lexus/nx/2019/reliability
- **Checklist:**
  - On 2.0T cars, ask for a **cylinder leak-down / compression test** during the PPI. Scan for P0300–P0304 and P11EA–P11EF or P219x history. Ask whether the head was already replaced under L-SB-0007-21.
  - NX300h: scan for C1391 or C1252, look for brake-warning history, and confirm 24LE03 eligibility by VIN.

### Lexus UX — 2019+ (UX 200 2.0 + CVT through 2022; UX 250h hybrid; UX 300h from 2025) — brief
- **Verdict: Strong.**
  - CR rates 2019 and 2021 "more reliable" and 2023 "much more reliable". CR's page shows 39 mpg EPA, which suggests the hybrid dominates the sample (A).
  - J.D. Power's Small Premium SUV award went to the 2019 UX (2022 VDS) and the 2023 UX (2026 VDS) (A).
- **Recalls:** 2019 UX200 is in the 20V-682 fuel-pump recall (A).
- **Checklist:** Close the recalls; hybrid system health check.

---

## 3. HONDA / ACURA

### Honda CR-V — RM (2012–2016; 2.4L K24; the 2015–2016 refresh has direct-injection "Earth Dreams" 2.4 + CVT), RW (2017–2022; 2.4 on 2017–2019 LX, 1.5T on the rest; Hybrid 2020–2022), RS (2023–2025; 1.5T; Hybrid)
- **Verdict:**
  - **2020–2022 1.5T: Top pick.**
  - **2015–2016 2.4: Top pick.**
  - 2019: Strong.
  - 2017–2018 1.5T: Mixed.
  - 2024–2025: Strong.
  - 2023: CR page paywalled, no verdict.
- **Best:**
  - 2020–2022 1.5T. CR rates all three "more reliable". These cars have the updated software, and A/C compressor seal coverage runs 10 yr from purchase.
  - 2015–2016 2.4L. CR rates both "more reliable".
  - 2017–2019 LX 2.4 avoids the 1.5T dilution issue entirely.
- **Caution:**
  - **2017–2018 1.5T in cold climates**, because of oil dilution.
  - **2018**: CR's only "about average" year.
- **Known failure points:**
  - **1.5T fuel-in-oil dilution** (rising oil level, fuel smell, misfire, cold-weather stalling).
    - Dec 2018 product update, 2017–2018 CR-V in 21 cold states: ECU/TCU software plus A/C control unit (A). https://static.nhtsa.gov/odi/tsbs/2018/MC-10152439-0001.pdf
    - **June 2019 warranty extension, 2017–2018 CR-V:** 6 years from purchase, unlimited miles, covering camshaft, rocker arms and spark plugs. Honda said 2019 CR-Vs were updated before sale (A, CR). https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines
    - **That extension has now expired on essentially every 2017–2018.**
    - A class action (*Wolf et al. v. American Honda*) alleges the defect continued in 2019–2023 CR-V. Honda denies it (C). https://www.classaction.org/news/class-action-alleges-honda-hid-engine-oil-dilution-defect-in-newer-cr-v-civic-accord-models ; https://storage.courtlistener.com/recap/gov.uscourts.mnd.199663/gov.uscourts.mnd.199663.24.0.pdf
  - **A/C compressor shaft seal leak**, 2017–2022 CR-V 1.5T. Honda **extended the warranty to 10 years from purchase, no mileage limit** (SB 23-040; 2024 revision) (A). https://static.nhtsa.gov/odi/tsbs/2023/MC-10237039-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2024/MC-10249629-0001.pdf
  - **2015 CR-V vibration** at idle, low speed, and 40–50 mph. TSB 15-046 (Nov 2015) provides a software fix and mount updates. The class action settled for outreach only (C). https://www.carcomplaints.com/news/2016/honda-tsb-15-046-2015-honda-cr-v-vibration.shtml ; https://topclassactions.com/lawsuit-settlements/closed-settlements/honda-cr-v-vibration-class-action-settlement/
    - The lead named 2015–2016; the TSB I found names the 2015 model. 2016 appears in forum complaints only (D).
- **Significant recalls (A, NHTSA API):**
  - 17V-442: 2017 fuel supply pipe.
  - 18V-663: 2017–2018 EPS magnet causes reverse assist at full lock.
  - 19V-865: 2019–2020 rear subframe bolts.
  - 22V-380: 2020 fuel-tank absorber clip causes a false fuel gauge.
  - 23V-158: 2017–2020 seat-belt buckle.
  - 20V-314 → 21V-215 → **23V-858**: fuel pump, 2013–2023 incl. CR-V.
  - 24V-064 and **26V-332** (May 2026, a new expansion): passenger seat-weight sensor on 2017–2022 CR-V.
  - 23V-524: label.
  - Source: https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=cr-v&modelYear=2017 (and 2020).
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | more | more | more | avg | more | more | more | more | n/a | more | more |

    Source: https://www.consumerreports.org/cars/honda/cr-v/2020/reliability
  - iSeeCars: #10 longest-lasting SUV at **10.6%** chance of 250k, the best compact SUV in scope. Reliability score 7.9 (#2 in the segment).
- **Checklist:**
  - Pull the dipstick: oil above the full mark or smelling of fuel is a warning sign.
  - Ask for records showing 5k-mile oil changes on 1.5T cars in cold climates.
  - Confirm the ECU/TCU update was done on 2017–2018.
  - Check A/C output. A leak at the compressor snout is covered to 10 yr under SB 23-040.
  - Close 23V-858 and 26V-332.
  - On 2015, check for idle vibration in D at a stop.
  - On 2019–2020, confirm 19V-865 (subframe bolts) is closed.

### Honda HR-V — 1st gen (2016–2022; 1.8L R18 + CVT), 2nd gen (2023–2025; 2.0L + CVT)
- **Verdict:**
  - 2019–2020: Strong. **Downgraded from Top-pick candidate** because of the CVT belt program; CR's rating is good.
  - 2016–2018 and 2021–2022: Mixed/OK.
  - 2023: avoid-leaning.
  - 2024: Strong.
- **Best:**
  - 2020, which CR rates "much more reliable".
  - 2019, rated "more reliable".
  - 2024, rated "more reliable".
- **Caution:** 2023, which CR rates "less reliable" (first year of the new generation).
- **Known failure points:**
  - **CVT belt premature deterioration**, 2016–2020 HR-V. The failure mode is belt or ring breakage leading to no-move.
    - Product Update 21-046 adds PCM software, new DTC P271E and a magnet inspection.
    - **Warranty Extension 21-047 covers the CVT to 7 yr from purchase / 150k**, but **only after the software update** has been done (A).
    - Many 2019–2020 cars are still inside the 7-year window in late 2026. https://static.nhtsa.gov/odi/tsbs/2021/MC-10191763-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10236086-0001.pdf
- **Recalls (A):**
  - Fuel pump 20V-314 / 21V-215 / 23V-858.
  - Seat-weight sensor 24V-064 / 26V-332 (2019–2021 HR-V).
- **Evidence (CR, A):**

  | Year | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
  |---|---|---|---|---|---|---|---|---|---|---|
  | CR verdict | avg | more | avg | more | **much more** | avg | avg | **less** | more | avg |

  Source: https://www.consumerreports.org/cars/honda/hr-v/2020/reliability
- **Checklist:**
  - **Confirm 21-046 was completed** (dealer iN VIN status), otherwise the extension does not apply.
  - Ask for the magnet-inspection result.
  - Check for a flashing "D" light or P271E.
  - Close the fuel-pump recalls.

### Acura RDX — TB (2013–2018; 3.5 V6 + 6AT), TC (2019+; 2.0T K20C4 + 10AT)
- **Verdict:**
  - 2015: Strong.
  - 2019 and 2022: Strong.
  - Other years: Mixed/average.
  - 2018: avoid-leaning.
- **Evidence:**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | more | avg | avg | **less** | more | avg | avg | more | avg | avg | avg |

    Source: https://www.consumerreports.org/cars/acura/rdx/2019/reliability
  - iSeeCars: #17 longest-lasting SUV, 7.2% (A).
- **2.0T lead:** No engine-specific warranty extension or recall for the 2019+ 2.0T was found in this pass (limited search). The recalls I found are Honda-wide: fuel pump 20V-314 / 21V-215 / 23V-858, belt buckle 23V-158, and seat-weight sensor 26V-332 on 2019–2024 RDX (A). https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2019
- **Checklist:**
  - Close the recalls.
  - On TB V6 cars, confirm timing-belt service (a scheduled item).
  - On 2.0T cars, check the oil level for dilution as on the CR-V 1.5T. This is an inference, not an evidenced defect.

---
## 4. MAZDA

### Mazda CX-5 — KE (2013–2016; 2.0/2.5 Skyactiv + 6AT) and KF (2017–2025; 2.5 NA with cylinder deactivation from 2018; 2.5T 2019+)
- **Verdict:**
  - **2023–2025 2.5 non-turbo: Top pick.**
  - 2015: Strong.
  - 2016–2022 non-turbo: Strong/average.
  - **2.5T, any year: Mixed/caution.**
- **Best:** 2023–2025 2.5 NA. CR rates 2023 and 2025 "much more reliable" and 2024 "more reliable".
- **Caution:**
  - **2.5T** (2019–2024 in the class actions below).
  - **2018–2019 NA**: confirm recall 19V-497 is closed.
- **Known failure points:**
  - **Cylinder-deactivation rocker arm dislodging**, 2018–2019 CX-5 (2.5 NA), 2018–2019 Mazda6 and 2019 Mazda3.
    - Symptoms: misfire, loss of power, stall.
    - Remedy is **recall 19V-497**, a PCM software reprogram; production software was corrected May 13, 2019 (A). https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V497-2476.PDF
  - **2.5T cylinder-head crack near the exhaust manifold**, causing coolant loss, overheating and possible engine failure.
    - Mazda TSBs 01-013/21, 01-007/22 and 01-002/23 are cited in the complaints. The fix modifies the exhaust manifold gasket and head design. **The repair is covered only within the powertrain warranty.**
    - Class actions: *Jarvis v. Mazda* (2019–2020 CX-5 2.5T, CX-9, Mazda6) and *Cauller v. Mazda* (2019–2024 CX-5 2.5T, 2022–2024 CX-50, 2021–2024 CX-30/Mazda3 2.5T, 2016–2023 CX-9) (C, allegations; TSB numbers as cited in the complaint). https://www.classaction.org/media/jarvis-et-al-v-mazda-motor-of-america-inc-et-al.pdf ; https://topclassactions.com/lawsuit-settlements/consumer-products/auto-news/mazda-class-action-claims-thousands-of-vehicles-have-engine-defect/
  - **Mazda Connect infotainment** reboot, freeze and boot-loop.
    - *Duffy v. Mazda* settlement covers 2016–2020 CX-5 and 2016–2021 CX-3, among others. It provides a 24-month extension on the CMU and software, running from Feb 17, 2025 for cars already out of warranty, plus reimbursement (settlement notice, A for terms). https://www.mazdainfotainmentsettlement.com/
- **Recalls (A):**
  - 16V-064: 2014–2016 fuel filler pipe.
  - 16V-203: 2014–2016 strut-to-knuckle bolts.
  - 16V-644: liftgate struts.
  - 20V-063: 2016 DRL.
  - 19V-497: as above.
- **Evidence (CR, A):**

  | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
  |---|---|---|---|---|---|---|---|---|---|---|---|
  | CR verdict | more | avg | avg | avg | avg | avg | avg | avg | **much more** | more | **much more** |

  Source: https://www.consumerreports.org/cars/mazda/cx-5/2023/reliability
  - iSeeCars reliability score 7.9, #3 in the segment.
- **Checklist:**
  - On 2.5T cars, look for **coolant loss, dried coolant at the rear of the head / exhaust manifold area, and overheating history**. Ask whether the TSB head or gasket repair was done.
  - Confirm 19V-497 on 2018–2019.
  - Test the infotainment for reboots.
  - Check the settlement LWE window.

### Mazda CX-3 — 2016–2021 (2.0 + 6AT)
- **Verdict: Strong.**
- **Evidence:**
  - CR: 2016 avg; 2017 avg; **2018 more; 2019 more**; 2020 avg (A). https://www.consumerreports.org/cars/mazda/cx-3/2019/reliability
- **Recalls:**
  - 16V-203 (2016 strut bolts) and 16V-644 (liftgate struts) (A).
  - A rear-view-camera recall, 23V-487, is cited in the Mazda infotainment settlement; I did not verify it separately.
- **Checklist:** Infotainment test (the Duffy settlement covers 2016–2021 CX-3); close the recalls.

### Mazda CX-30 — 2020+ (2.5 NA; 2.5T from 2021)
- **Verdict: Mixed.**
- **Best:** 2020 and 2024 NA, which CR rates "more reliable".
- **Caution:**
  - 2022 and 2025, which CR rates "less reliable".
  - 2.5T cars, which fall in the *Cauller* class definition for 2021–2024 (C).
- **Recalls (A):**
  - 20V-346: 2020 caliper bolts.
  - 20V-347: 2020 AWD EVAP vent hose.
  - 21V-086: 2020–2021 power liftgate.
  - Source: https://api.nhtsa.gov/recalls/recallsByVehicle?make=mazda&model=cx-30&modelYear=2020
- **Evidence:** CR: 2020 more; 2021 n/a (paywalled); 2022 less; 2023 avg; 2024 more; 2025 less (A).

### Mazda CX-50 — 2023+ (2.5 NA, 2.5T; Hybrid 2025)
- **Verdict: Mixed/caution.**
- **Evidence:**
  - CR: 2023 **less**; 2024 avg; 2025 avg (A).
  - CR's Feb-2025 avoid list included the 2024 CX-50 (coverage of CR, C). CR's current page reads "about average", which is newer data.
  - 2.5T cars fall in the *Cauller* class definition for 2022–2024 (C).
- **Checklist:** Prefer 2.5 NA; coolant checks on 2.5T.

---

## 5. SUBARU

### Subaru Forester — SJ (2014–2018; 2.5 FB25 + CVT; 2.0XT) and SK (2019–2024; 2.5 DI + CVT); SL 2025
- **Verdict:**
  - 2022–2024: Strong.
  - 2019 and 2021: Mixed.
  - **2015–2018 and 2020: Avoid-leaning** per CR's year data, even though the brand's reputation is good.
- **Best:** 2022–2024, which CR rates "more reliable".
- **Avoid / caution:**
  - 2015–2018 and 2020, which CR rates "less reliable".
  - The 2019 PCV recall population.
- **Known failure points:**
  - **CVT.** Subaru extended CVT powertrain coverage to **10 yr / 100k**:
    - 2016–2017 Forester 2.5 and 2.0T under SB 16-115-18 (A). https://static.nhtsa.gov/odi/tsbs/2018/MC-10146475-9999.pdf
    - 2018 Forester under SB 16-117-18 (A). https://static.nhtsa.gov/odi/tsbs/2018/MC-10150886-9999.pdf
    - 2019–2020 Forester 2.5 under **SB 16-155-25R** (May/July 2025). This bulletin also gives vehicles over 100k miles a one-year window to 6/30/2026 (A). https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-11019956-0001.pdf
    - Subaru states these extensions are "not in response to any specific condition".
  - **PCV valve separation** on 2019 Forester built Jul 4, 2018 to Mar 21, 2019 (33,383 units). Symptoms: white smoke and loss of power. **Recall 19V-856 (WUW-08)**: replace the PCV valve, and **replace the short block if the valve fragments aren't recovered** (A). https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V856-4949.PDF
  - **Thermo-control valve (TCV) failure**, 2019–2021 Forester (plus 2020–2021 Outback/Legacy and 2021 Crosstrek).
    - Symptoms: coolant-temp warnings, and all ADAS disabled.
    - The fix is a redesigned part under TSB 09-80-21, cited in the complaint (C). A class action is pending in D.N.J. (C). The ~$1,500 repair cost comes from an NHTSA complaint (D). https://storage.courtlistener.com/recap/gov.uscourts.njd.536996/gov.uscourts.njd.536996.1.0.pdf
  - **Battery drain.** A class settlement covering 2015–2020 Forester and Outback gave an extended battery warranty schedule; the claims deadline passed May 2023 (C). https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-battery-drain-class-action-settlement/
  - **Oil consumption (FB25).** The known settlement covered **2011–2014**, i.e. pre-2015. I found no A-grade program for 2015+, so the lead is refuted for the scope years (see the removed/downgraded section).
- **Recalls (A):**
  - 19V-065: 2019 EPS.
  - 19V-856: PCV.
  - 21V-263: 2019 rear stabilizer bolts.
  - 21V-587: 2018 Forester fuel pump.
  - Source: https://api.nhtsa.gov/recalls/recallsByVehicle?make=subaru&model=forester&modelYear=2019
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | **less** | **less** | **less** | **less** | avg | **less** | avg | more | more | more | avg |

    Source: https://www.consumerreports.org/cars/subaru/forester/2016/reliability
  - iSeeCars reliability score 7.6.
- **Checklist:**
  - Confirm the CVT extension on SubaruNet by VIN (Vehicle Coverage Inquiry).
  - On 2019, confirm WUW-08 was done and whether the short block was replaced.
  - Scan for TCV codes and check coolant-temp gauge behavior.
  - Battery and parasitic-draw test.
  - CVT judder test from a stop and at 20–40 mph light throttle.

### Subaru Crosstrek — GP (2013–2017; "XV Crosstrek" through 2015; 2.0 FB20 + CVT/5MT), GT (2018–2023; 2.0; 2.5 from 2021 on Sport/Limited), GU (2024+)
- **Verdict:**
  - **2019–2024 2.0: Top pick.**
  - 2018: Strong.
  - **2015–2017: Avoid-leaning.**
- **Best:**
  - 2019–2023, which CR rates "more reliable".
  - **2024**, rated "much more reliable".
  - 2025 is predicted "more reliable".
  - J.D. Power 2026 VDS Small SUV winner: the 2023 Crosstrek (A). https://www.prnewswire.com/news-releases/subaru-crosstrek-named-the-most-dependable-small-suv-in-jd-power-2026-us-vehicle-dependability-study-302688937.html
- **Avoid:** 2015 XV Crosstrek, 2016 and 2017, all rated "less reliable" by CR (A).
- **Known failure points:**
  - **CVT extensions** (A):
    - 2016–2017 under 16-115-18.
    - 2018 under 16-117-18.
    - **2019 Crosstrek 2.0 CVT (excluding hybrid) under 16-155-25R** (10 yr / 100k).
    - 2020+ Crosstrek is **not** listed in 16-155-25R.
  - **TCV:** 2021 Crosstrek is included in TSB 09-80-21 and the D.N.J. suit (C).
  - The PCV recall 19V-856 covers only the **2019 Crosstrek PHEV (37 units)**, not the gas Crosstrek (A). The NHTSA API summary wording is broader, but the Part 573 report clarifies this.
  - 21V-263: 2018–2019 Crosstrek rear stabilizer bolts (A).
  - Starlink head-unit settlement, 2018 Crosstrek: warranty extended to 5 yr / 100k (C). https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-starlink-class-action-settlement/
- **Evidence:**
  - CR: 2015 (XV) less; 2016 less; 2017 less; 2018 avg; 2019–2023 more; 2024 much more; 2025 more (A). https://www.consumerreports.org/cars/subaru/crosstrek/2021/reliability
  - CR names the Crosstrek its 2026 top subcompact SUV (coverage of CR, C).
- **Checklist:**
  - Confirm the CVT extension on 2019.
  - Scan for TCV-related codes (2021).
  - Check oil level between changes (FB20 consumption is a forum lead only, D).
  - Test infotainment on 2018–2019.

### Subaru Outback (included here) — BS (2015–2019; 2.5 FB25, 3.6R; CVT) and BT (2020–2025; 2.5 FB25; 2.4T FA24)
- **Verdict:**
  - 2023–2025: Strong.
  - 2015–2017 and 2021–2022: Mixed/average.
  - **2018–2020: Avoid-leaning.**
- **Evidence:**
  - CR: 2015–2017 avg; **2018, 2019, 2020 less**; 2021–2022 avg; 2023–2025 more (A). https://www.consumerreports.org/cars/subaru/outback/2020/reliability
  - iSeeCars ranks the Outback **#1** small/compact SUV at 8.0. That is model-level longevity and conflicts with CR for 2018–2020 (see the contradiction log).
- **Known failure points:**
  - **CVT chain slip.**
    - Recall 21V-955 (WRK-21) covers 2019–2020 Ascent and 2020 Legacy/Outback.
    - Recall **22V-485 (WRK-22)** expands it to 2020–2021 Outback/Legacy. Remedy: TCU reprogram, inspect for slip, and replace the CVT if slip is found.
    - After WRK-21, a one-time chain-slip CVT warranty of 10 yr / 100k applies to Ascent and 2020 turbo Outback/Legacy under SB 16-139-22 (A). https://static.nhtsa.gov/odi/tsbs/2022/MC-10216977-0001.pdf
  - **CVT warranty extensions** (A):
    - 2016–2018 Outback 2.5/3.6 under 16-115-18 and 16-117-18.
    - 2019 Outback 2.5 and 2020 Outback 2.4T under 16-155-25R.
  - **2020+ 11.6-in infotainment.**
    - Recall 20V-766: rear camera blank after the August 2020 OTA update (A).
    - The 2018 Starlink settlement covered 2018 models (C). A separate suit alleges 2019–2023 head units (C). https://www.classaction.org/news/starlink-class-action-alleges-2019-2023-subaru-models-equipped-with-defective-infotainment-systems
  - **TCV** on 2020–2021 Outback (C); battery drain on 2015–2020 (C).
- **Recalls (A):**
  - 19V-664: 2020 brake pedal bracket.
  - 21V-587: fuel pump.
  - 24V-227: 2020–2022 occupant detection sensor.
  - Source: https://api.nhtsa.gov/recalls/recallsByVehicle?make=subaru&model=outback&modelYear=2020
- **Checklist:**
  - Confirm WRK-21/22 and the CVT extension by VIN.
  - Infotainment stress test: reboot, camera, and responsiveness in the cold.
  - TCV scan.
  - Battery test.

---
## 6. NISSAN / MITSUBISHI

### Nissan Rogue — T32 (2014–2020; 2.5 QR25 + CVT) and T33 (2021+; 2.5 PR25DD in 2021; 1.5 VC-Turbo 3-cyl + CVT from 2022)
- **Verdict:**
  - 2019: Strong.
  - 2017–2018 and 2020–2021: Mixed/average.
  - **2015–2016: Avoid.**
  - **2022–2025 1.5 VC-Turbo: Avoid unless** recalls 25V-437 and 26V-080 are fully performed and the 10 yr / 120k engine extension is confirmed by VIN.
- **Best:**
  - 2019, which CR rates "more reliable".
  - 2021 2.5L, rated "about average", and before the VC-Turbo engine.
- **Avoid:** 2015 and 2016, both rated "less reliable". CR's Feb-2025 avoid list included the 2015 Rogue.
- **Known failure points:**
  - **CVT (JF016E), 2014–2018.** The *Stringer v. Nissan* settlement (final approval 3/23/2022) extended CVT coverage to **84 mo / 84k** (A, Nissan dealer bulletin). https://static.nhtsa.gov/odi/tsbs/2022/MC-10211969-0001.pdf
    - **That coverage is now expired for all.** Replacement cost is not sourced here.
  - **1.5 VC-Turbo engine bearing failure.**
    - **Recall 25V-437** (reported 6/27/2025; 443,899 units; opened from NHTSA investigation PE23-023). Covers "2021–2024 Rogue" with the 3-cyl 1.5 VC-T, plus 2019–2020 Altima and QX50/QX55. The bearings may have manufacturing defects; remedy is an ECM reprogram (A). https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=25V437000
      - NHTSA's summary says 2021. The 1.5 VC-T launched in the US Rogue for MY2022, so verify by VIN.
    - **Recall 26V-080** (reported 2/12/2026; 323,917 units). Covers 2023–2025 Rogue 1.5 VC-T: high oil temperature breaks down the oil and the bearings seize. Remedy: ECM reprogram, a DTC check and test drive, oil-pan debris inspection, and **engine replacement if needed** (A). https://api.nhtsa.gov/recalls/campaignNumber?campaignNumber=26V080000
    - Nissan then extended the **VC-Turbo long-block warranty to 120 mo / 120k** for the 2023–2025 Rogue (C: Autoblog, plus CarComplaints news as a D-level lead). https://www.autoblog.com/news/nissan-rogue-warranty-extension-vc-turbo-engine ; https://www.carcomplaints.com/news/2026/nissan-rogue-engine-warranty-extension-vc-turbo.shtml
    - A separate Feb-2026 throttle-body gear recall on 2024–2025 Rogue was reported by Wards; I did not capture its campaign number. https://www.wardsauto.com/news/nissan-recalls-642k-rogue-suvs-engine-damage-nhtsa-throttle-body/813421/
  - **AEB false activation ("phantom braking"), 2017–2018 Rogue.** NHTSA opened a defect petition review. The *Bereda v. Nissan* class action covers 2017–2019 Nissans with AEB (C). https://www.consumerreports.org/car-recalls-defects/nissan-rogue-braking-issue-prompts-nhtsa-investigation ; https://www.thedrive.com/news/37413/judge-allows-class-action-lawsuit-over-nissan-automatic-emergency-braking-issues-to-proceed
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | **less** | **less** | avg | avg | more | avg | avg | avg | avg | **much more** | **less** |

    Source: https://www.consumerreports.org/cars/nissan/rogue/2024/reliability
  - The 2024 "much more reliable" verdict conflicts with recall 26V-080; see the contradiction log.
  - iSeeCars reliability score 7.2.
- **Checklist:**
  - On VC-T cars, get **written dealer confirmation that 25V-437 and 26V-080 were completed**, plus the result of the oil-pan debris inspection. Confirm the 120k extension on the VIN.
  - Listen for a knock or rumble. Check the oil level and demand oil-change records at the proper interval.
  - On a T32, check for CVT judder, whine and a slipping flare.
  - Test AEB for false alerts.

### Nissan Rogue Sport — 2017–2022 (2.0 MR20 + CVT)
- **Verdict: Avoid.**
  - CR: 2017, 2018, 2019 and 2020 "less reliable"; 2021 average; 2022 "less reliable" (A). https://www.consumerreports.org/cars/nissan/rogue-sport/2019/reliability
  - It is not covered by the Stringer CVT settlement, which applies to the Rogue only (A, Nissan bulletin).
- **If buying anyway:** choose a 2021, and do a CVT inspection plus fluid history check.

### Nissan Kicks — 1st gen (2018–2024; 1.6 + CVT), 2nd gen (2025+; 2.0 + CVT)
- **Verdict:**
  - 2022–2024: Strong.
  - 2025: promising.
  - 2019–2020: avoid-leaning.
- **Best:**
  - 2022, 2023 and 2024, which CR rates "more reliable".
  - 2025, rated "much more reliable" (A).
  - J.D. Power 2025 VDS Small SUV winner: the 2022 Kicks (A). https://usa.nissannews.com/en-US/releases/nissan-kicks-and-murano-named-most-dependable-in-jd-power-2025-us-vehicle-dependability-study
- **Caution:** 2019 and 2020, which CR rates "less reliable". 2018 has no verdict.
- **Known failure points:** CVT judder and belt slip. Nissan bulletins NTB19-040, NTB20-060 (2018–2019 diagnostic logic) and NTB22-021A (2018–2022 Kicks) provide a valve body, a belt-and-pulley kit, or a CVT. These are **TSBs, not an extension** (A). https://static.nhtsa.gov/odi/tsbs/2023/MC-10232664-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2020/MC-10179616-0001.pdf
- **Checklist:**
  - Scan for P17F0 and P17F1 (judder).
  - Test from 0 to 30 mph under light throttle for judder.
  - Check CVT fluid-change history.

### Mitsubishi Outlander (3rd gen 2014–2020 2.4/3.0; 4th gen 2022+ 2.5 + CVT on the Rogue platform) and Outlander Sport (2011–2024; 2.0/2.4 + CVT) — brief
- **Verdict: Mixed, insufficient data.**
  - CR's public pages showed **no verdict** for the 2016, 2019 and 2022 Outlander or the 2016, 2019 and 2022 Outlander Sport. The 2024 Outlander is rated "more reliable" (A).
  - iSeeCars: Outlander 7.2, about average (A).
- **Checklist:** CVT inspection; recall check by VIN.

---

## 7. HYUNDAI / KIA

### Hyundai Tucson — LM (2015), TL (2016–2021; 2.0 Nu GDI; 1.6T + 7DCT 2016–2018; 2.4 Theta II GDI 2018–2021), NX4 (2022+; 2.5 Smartstream + 8AT)
- **Verdict:**
  - 2021: Strong.
  - 2024–2025: Strong.
  - 2020 and 2023: Mixed.
  - **2016–2019 and 2022: Avoid-leaning.**
- **Best:**
  - 2021, rated "more reliable".
  - 2024, rated "much more reliable".
  - 2025, rated "more reliable".
- **Avoid:**
  - 2016–2019, all "less reliable". This is especially true of the **2016–2018 1.6T with the 7-speed DCT**.
  - 2022, the first year of the NX4 generation, rated "less reliable".
- **Known failure points:**
  - **Engine bearing wear** (conn-rod), with a knock-sensor detection software requirement.
    - **Hyundai TXXM extension, 15 yr / 150k**, covers conn-rod-bearing failure on 2014–2015 and **2016–2021 Tucson 2.0 Nu GDI**. The KSDS software (Campaign 966/982) is generally required. From the Engine II settlement (A). https://autoservice.hyundaiusa.com/TXXM ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10240082-0001.pdf
    - **Theta II GDI settlement:** lifetime short-block warranty with KSDS for **2014, 2015, 2018 and pre-KSDS 2019 Tucson** Theta II 2.0/2.4 GDI (A). https://www.kiamedia.com/us/en/media/pressreleases/15457/hyundai-motor-america-and-kia-motors-america-resolve-engine-litigation ; https://static.oemdtc.com/NHTSA-PDFs/MC-10178174-0001.pdf
  - **7DCT on 2016 Tucson:** it may not move after repeated pedal applications in heat. **Recall 16V-628** is a TCM update (A).
  - **ABS/HECU internal corrosion causing an engine-compartment fire**, 2016–2021 Tucson. **Recall 20V-543** (NHTSA PE19-003): **park outside until repaired**. The fix is a fuse, plus ESC software on 2019–2021 (A). https://api.nhtsa.gov/recalls/recallsByVehicle?make=hyundai&model=tucson&modelYear=2016
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | avg | **less** | **less** | **less** | **less** | avg | more | **less** | avg | **much more** | more |

    Source: https://www.consumerreports.org/cars/hyundai/tucson/2018/reliability
  - iSeeCars: **last of 14** small/compact SUVs.
  - J.D. Power 2018 VDS Small SUV winner: the 2015 Tucson.
- **Checklist:**
  - **Confirm KSDS campaign 966/982 is complete** so the 15/150k or lifetime coverage applies.
  - Confirm 20V-543 is closed.
  - Listen for a lower-end knock at a warm idle and under load.
  - Test the 1.6T DCT for stop-and-go shudder and hesitation.

### Hyundai Kona — OS (2018–2023; 2.0 Nu MPI + 6AT; 1.6T + 7DCT), SX2 (2024+)
- **Verdict:**
  - 2023: Strong.
  - 2020, 2022 and 2025: Mixed.
  - **2018–2019, 2021 and 2024: Avoid.**
- **Known failure points:**
  - **2.0 Nu MPI piston oil rings not properly heat-treated**, causing engine damage, stalls and fire risk. **Recall 21V-301** covers 2019–2021 Kona (and Elantra and Veloster). Remedy: inspect or replace the engine, plus Piston Ring Noise Sensing System software (A). https://api.nhtsa.gov/recalls/recallsByVehicle?make=hyundai&model=kona&modelYear=2021
- **Evidence:**
  - CR: 2018 less; 2019 less; 2020 avg; 2021 less; 2022 avg; 2023 more; 2024 less; 2025 avg (A).
  - CR's Feb-2025 avoid list included the 2019 Kona (coverage of CR, C).
- **Checklist:**
  - Confirm 21V-301 and the PNSS software. Ask whether the engine was replaced.
  - Test the DCT on 1.6T cars.

### Hyundai Venue — 2020+ (1.6 + IVT) — brief
- **Verdict: Strong-leaning.**
  - CR: 2021 more; 2022 more; 2023 avg; 2024 avg; 2020 no verdict (A).

### Kia Sportage — SL (2011–2016), QL (2017–2022; 2.4 Theta II GDI; 2.0T 2017–2019), NQ5 (2023+; 2.5 + 8AT)
- **Verdict:**
  - 2022 and 2025: Strong.
  - 2019–2020 and 2023–2024: Mixed.
  - **2015, 2017–2018 and 2021: Avoid-leaning.**
- **Known failure points:**
  - **Theta II GDI conn-rod bearing failure.** The Kia settlement gives a **lifetime short-block warranty with the KSDS update** for 2011–2018 and pre-KSDS 2019 Sportage 2.0T/2.4 GDI (A). https://www.kiaenginesettlement.com/Content/Documents/Notice.pdf ; https://www.kiamedia.com/us/en/media/pressreleases/15457/hyundai-motor-america-and-kia-motors-america-resolve-engine-litigation
    - This partly de-risks the engine for 2015–2019 buyers, but only if KSDS is installed.
    - 2020–2022 cars were built with KSDS and are outside the class.
  - Hybrid/PHEV: CR's Feb-2025 avoid list included the 2024 Sportage Hybrid and the 2023 Sportage PHEV (coverage, C).
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | less | n/a | less | less | avg | avg | less | more | avg | avg | more |

    Source: https://www.consumerreports.org/cars/kia/sportage/2018/reliability
  - J.D. Power VDS winners: 2018 Sportage (Small SUV, 2021 VDS) and 2020 Sportage (Compact SUV, 2023 VDS). These conflict with CR; see the contradiction log.
  - iSeeCars: below average.
- **Checklist:**
  - **KSDS campaign completed** (Kia VIN lookup).
  - Warm-idle and cold-start knock check.
  - Oil-consumption history.

### Kia Seltos — 2021+ (2.0 Nu MPI + IVT; 1.6T + 7DCT, then 8AT)
- **Verdict:**
  - 2022–2023 and 2025: Strong/Mixed.
  - **2021 and 2024: Avoid-leaning.**
- **Known failure points:** **Recall 21V-259 (Kia SC209)**: 2021 Seltos and 2020–2021 Soul 2.0 Nu MPI piston oil rings not heat-treated. Remedy: inspect or replace the engine, plus PNSS software (A). https://api.nhtsa.gov/recalls/recallsByVehicle?make=kia&model=soul&modelYear=2020
- **Evidence:** CR: 2021 less; 2022 avg; 2023 avg; 2024 less; 2025 much more (A).

### Kia Soul — PS (2014–2019; 1.6 Gamma GDI, 2.0 Nu GDI, 1.6T 2017–2019), SK3 (2020–2025; 2.0 Nu MPI + IVT)
- **Verdict:**
  - 2023: Strong.
  - 2021–2022 and 2024: Mixed.
  - **2015–2020: Avoid.**
- **Known failure points:**
  - **2012–2019 Soul (1.6 GDI and 2.0 Nu GDI) conn-rod bearing failure.** The Kia/Hyundai Engine II settlement (Sept 2022) extended coverage to **15 yr / 150k** with KSDS (A). https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation
    - This confirms the lead that the "Soul 2.0 Nu and 1.6 engines fail".
  - **2020–2021 Soul 2.0 MPI piston rings:** recall **21V-259** (A).
- **Evidence:**
  - CR: 2015–2019 less; 2020 less (page text truncated at "le…", read as "less"); 2021 avg; 2022 avg; 2023 more; 2024 avg (A).
  - J.D. Power 2019 VDS Compact MPV winner: the 2016 Soul. This conflicts with CR.
- **Checklist:**
  - KSDS completed.
  - 21V-259 status and whether the engine was replaced.
  - Knock and oil-level check.

---
## 8. GM (Chevrolet / GMC / Buick)

### Chevrolet Equinox — 2nd gen (2010–2017; 2.4 LEA / 3.6 V6), 3rd gen (2018–2024; 1.5T LYX; 2.0T 2018–2020; 1.6 diesel 2018–2019), 4th gen (2025+; 1.5T)
- **Verdict:**
  - 2022–2024 1.5T: Strong.
  - 2019: Strong.
  - 2016, 2018 and 2020–2021: Mixed.
  - **2015 and 2017: avoid-leaning.**
  - **2025: Avoid.**
- **Best:**
  - 2022, 2023 and 2024, all rated "more reliable" by CR.
  - J.D. Power **Compact SUV winner for the 2021 Equinox (2024 VDS) and the 2023 Equinox (2026 VDS)** (A).
  - 2019, rated "more reliable".
- **Avoid:**
  - **2025**, the new generation, which CR rates "much less reliable". CR's Mar-2026 avoid list put it last of 20 compact SUVs, mainly on transmission/shifting, sensors and software (coverage, C).
  - 2015 and 2017, rated "less reliable".
- **Known failure points:**
  - **2.4 LEA oil consumption (piston rings).**
    - GM special coverage runs 7.5 yr / 120k (10 yr for 2010).
    - It covers **2010–2012, plus 2013 built before the May-2013 production change** (*Berman* settlement SCA N192291100). **MY2014–2017 are not covered** (A). https://static.nhtsa.gov/odi/tsbs/2020/MC-10171430-9999.pdf ; https://www.classaction.org/media/berman-et-al-v-general-motors-llc-final-settlement-approval-signed.pdf
    - The lead "2010–2017 2.4L oil consumption" is only partly supported: the documented program ends with early-2013 builds.
  - **1.5T LYX (2018+).** No GM special coverage or recall for internal failure was found. The documents that exist are GM's 2018 launch engine-exchange program (PIP5460) and a dealer-inventory leak test covering 8 vehicles. These are not a defect finding (A). https://static.nhtsa.gov/odi/tsbs/2017/MC-10113395-9999.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-10158887-9999.pdf
    - Coolant-loss complaints exist at forum level (D). **The lead is unsubstantiated at A or B grade.**
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | **less** | avg | **less** | avg | more | avg | avg | more | more | more | **much less** |

    Source: https://www.consumerreports.org/cars/chevrolet/equinox/2023/reliability
  - J.D. Power Compact SUV winners, by model year surveyed: 2015, 2016, 2017, 2021 and 2023 Equinox.
  - iSeeCars reliability score 7.2.
- **Checklist:**
  - On 2.4L cars, run an oil-consumption test (more than 1 qt per 2,000 mi is excessive). Check whether the pistons were already replaced.
  - On 1.5T cars, check coolant level and look for white smoke.
  - On 2025, check the transmission and electronics under warranty. The car is still under the factory powertrain warranty.

### GMC Terrain — mirrors the Equinox platform and engines (same generation years)
- **Verdict:** 2022–2024: Strong. 2019: Strong. **2025: Avoid.** 2015 and 2017: avoid-leaning.
- **Evidence:**
  - CR: 2015 less; 2016 avg; 2017 less; 2018 avg; 2019 more; 2020 avg; 2021 avg; 2022 more; 2023 more; 2024 more; **2025 much less** (A). https://www.consumerreports.org/cars/gmc/terrain/2025/reliability
  - The same 2.4L oil-consumption coverage applies as for the Equinox (A).

### Chevrolet Trax — 1st gen (2015–2022; 1.4T LUV + 6AT), 2nd gen (2024+; 1.2T 3-cyl + 6AT)
- **Verdict:**
  - 2025: Strong-leaning.
  - 2020–2021 and 2024: Mixed.
  - **2017–2019: Avoid.**
- **Evidence:** CR: 2015 n/a; 2017 less; 2018 less; 2019 less; 2020 avg; 2021 avg; 2024 avg; 2025 more (A). https://www.consumerreports.org/cars/chevrolet/trax/2018/reliability
- **Note:** I found no A-grade 1.4T defect program in this pass. The 1.4T PCV and coolant leaks are forum leads only (D).

### Chevrolet Trailblazer — 2021+ (1.2T 3-cyl CVT; 1.3T 3-cyl 9AT)
- **Verdict:** 2023–2024: Strong. 2022 and 2025: Mixed. **2021: Avoid.**
- **Evidence:** CR: 2021 less; 2022 avg; 2023 more; 2024 more; 2025 avg (A).

### Buick Encore (2013–2022; 1.4T), Encore GX (2020+; 1.2T/1.3T), Envision (2016–2020 2.5/2.0T; 2021+ 2.0T 9AT)
- **Encore verdict:** **2015–2017: Avoid.** 2019–2021: Mixed.
  - CR: 2015 **much less**; 2017 less; 2019 avg; 2021 avg (A).
  - J.D. Power Small SUV winners were the 2017, 2019 and 2021 Encore. These conflict with CR on 2017.
- **Encore GX verdict:** 2020, 2021 and 2023 **avoid-leaning**; 2024: Mixed/Strong.
  - CR: 2020 less; 2021 less; 2022 n/a; 2023 less (owner comments cite major transmission repairs); 2024 more (A).
  - CR's Feb-2025 list had the 2024 GX as "avoid"; the current page is newer.
- **Envision verdict:** 2017 and 2023: Strong. 2019 and 2021: Mixed.
  - CR: 2017 more; 2019 avg; 2021 avg; 2023 more (A).
  - J.D. Power Compact SUV winners were the 2018 and 2019 Envision.

---

## 9. FORD

### Ford Escape — 3rd gen (2013–2019; 2.5 NA, 1.6T 2013–2016, 2.0T, 1.5T 2017–2019) and 4th gen (2020+; 1.5T 3-cyl, 2.0T, 2.5 HEV/PHEV)
- **Verdict: Avoid for 2015–2024.** 2025: Mixed.
  - CR rates 2025 "more reliable", but the data is thin and the car has 10 recalls.
- **Evidence (A):**
  - CR year verdicts:

    | Year | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 |
    |---|---|---|---|---|---|---|---|---|---|---|---|
    | CR verdict | less | less | less | less | less | less | less | n/a | less | less | more |
    | NHTSA recall count per CR page | — | — | — | — | — | **24** | **18** | — | 13 | 10 | 10 |

    Source: https://www.consumerreports.org/cars/ford/escape/2020/reliability
  - CR's Feb-2025 avoid list included the 2021 Escape and the 2021–2023 Escape Hybrid (coverage, C).
  - iSeeCars gives the Escape a 7.8 reliability score, a model-level result that conflicts with CR; see the contradiction log.
- **Known failure points:**
  - **1.5L EcoBoost coolant intrusion into the cylinders**, 2017–2019 Escape built 9/17/2015 to 4/8/2019. Symptoms: coolant loss, white smoke, misfire.
    - Ford **CSP 19B37** was a PCM reprogram, in effect to 6/30/2021, later referenced to 11/30/2022.
    - Ford **CSP 21N12** is a **one-time short-block replacement within 7 yr / 84k** of warranty start; vehicles already past the limits were covered through 11/30/2022. 21N12 requires 19B37 first.
    - Most 2017–2019 cars are now outside 7 years (A). https://static.nhtsa.gov/odi/tsbs/2022/MC-10213732-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2019/MC-10169989-0001.pdf
    - A class action (*Miller v. Ford*, E.D. Cal.) alleges the same defect across the 2013–2019 Escape 1.5, 1.6 and 2.0 EcoBoost. Engine replacements quoted in it run $5,993–$8,270 (C). https://www.govinfo.gov/content/pkg/USCOURTS-caed-2_20-cv-01796/pdf/USCOURTS-caed-2_20-cv-01796-11.pdf
  - **1.6L GTDI cylinder-head overheating, crack and fire.** **Recall 17V-209 (17S09)** covers 2014 Escape built before 2/14/2014 and installs a coolant-level sensor (A). https://static.nhtsa.gov/odi/rcl/2017/RCLRPT-17V209-4095.pdf
  - **1.5L 3-cyl cracked fuel injector causing an underhood fire.** **Recall 25V-467 (25S76)**, reported 7/14/2025, covers 694,271 **2020–2022 Escape and 2021–2024 Bronco Sport**.
    - It replaces 22V-859, 24V-187 and 25V-165.
    - **The final remedy was "under development"** at filing. The interim fix is engine-control software. Confirm the current status by VIN (A). https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V467-9675.pdf ; https://www.ford.com/support/how-tos/recall/recalls-and-faqs/25s76-bronco-sport-2021-2024-and-escape-2020-2022-cracked-fuel-injector-and-underhood-fire-risk-recall/
  - **2.5L HEV/PHEV engine block or oil-pan breach and fire.** Ford recall **23S27** covers 2020–2023 Escape (and 2022–2023 Maverick). Remedy: PCM software on 2020–2022, **long-block replacement on 2023** (A, Ford). https://www.ford.com/support/how-tos/recall/recalls-and-faqs/23s27-escape-2020-2023-and-maverick-2022-2023-engine-failure-recall/
- **Checklist (if you must buy one):**
  - Run the VIN at ford.com/support and nhtsa.gov and close every open recall.
  - On 1.5 3-cyl cars, look for fuel smell and confirm the 25S76 final remedy.
  - On 2017–2019 1.5T cars, do a coolant pressure test, a combustion-gas test and a borescope inspection. Check whether 19B37 and 21N12 were done.
  - On hybrids, confirm 23S27.

### Ford Bronco Sport — 2021+ (1.5T 3-cyl; 2.0T)
- **Verdict:** **2021–2022: Avoid.** 2024–2025: Mixed.
  - CR rates 2024 "much more reliable" and 2025 "more reliable", but the **open 25V-467 injector-fire recall covers 2021–2024 1.5L**.
- **Evidence:**
  - CR: 2021 **much less** (16 recalls); 2022 less (15); 2023 n/a; 2024 much more (8); 2025 more (7) (A). https://www.consumerreports.org/cars/ford/bronco-sport/2021/reliability
  - CR's Feb-2025 avoid list included the 2021 Bronco Sport (C).
- **Checklist:** As for the Escape 1.5 (25S76 status).

### Ford EcoSport — 2018–2022 (1.0T 3-cyl FWD; 2.0 AWD) — brief
- **Verdict:** Mixed/avoid.
  - CR: 2018 avg; **2020 less**; 2022 n/a (A).

---

## 10. STELLANTIS (Jeep)

### Jeep Cherokee — KL (2014–2023; 2.4 Tigershark, 3.2 V6, 2.0T from 2019; ZF 9HP / 948TE 9-speed)
- **Verdict:** **2015–2020: Avoid.** 2021: Mixed.
- **Evidence:**
  - CR: 2015 less (11 recalls); 2016 less; 2017 less; 2018 less; 2019 less (11 recalls); 2020 less; 2021 avg (A). https://www.consumerreports.org/cars/jeep/cherokee/2017/reliability
  - iSeeCars: below average.
- **Known failure points:**
  - **9-speed automatic.**
    - **Recall 16V-529 (S55)**: 2014–2015 Cherokee built 11/5/2012 to 10/31/2014 (and 2015 Renegade). Insufficient harness crimps can cause an unexpected shift to neutral and loss of motive power. Remedy: PCM/TCM reflash and harness replacement (A). https://static.nhtsa.gov/odi/rcl/2016/RCLRPT-16V529-9669.PDF
    - Multiple shift-quality TSBs (21-014-13, 21-032-14) cover harsh 1-2/2-3 shifts and adaptation relearn (A). https://static.nhtsa.gov/odi/tsbs/2015/MC-10148614-9999.pdf
  - **2.4L Tigershark oil consumption.** FCA Customer Satisfaction Notification **W84** does a PCM/TCM reflash on the 2014 and 2016–2017 Cherokee, 2017 Compass and 2016–2017 Renegade AWD (270,667 vehicles). It notes that a low-oil condition can end in a stall (A). https://static.nhtsa.gov/odi/tsbs/2021/MC-10188788-9999.pdf
  - **Power Transfer Unit (PTU) broken input spline**, 2014–2017 Cherokee: warranty extension X89 (C, listed via aggregator). https://arfc.org/autos/jeep/cherokee/recalls/000059208001961994000000180/recall.aspx
- **Checklist:**
  - Check the oil level (2.4) and ask for a consumption history.
  - Road-test the 9-speed for harsh 1-2 and 2-3 shifts and flare. Confirm S55 on 2014–2015.
  - Check the PTU for fluid leaks and clunks on AWD cars.
  - Confirm W84 was performed.

### Jeep Compass — MP (2017–2025; 2.4 Tigershark; 2.0T from 2023)
- **Verdict:** **2017–2019 and 2022: Avoid.** 2020 and 2023–2024: Mixed.
- **Evidence:**
  - CR: 2017 less; 2018 less; 2019 less; 2020 avg; 2022 less; 2023 avg; 2024 avg (A).
  - The W84 oil-consumption reflash covers the 2017 Compass (A).

### Jeep Renegade — 2015–2023 (1.4T; 2.4; 1.3T 2019+)
- **Verdict:** **2015–2018: Avoid-leaning.** 2019: Mixed.
- **Evidence:**
  - CR: 2015 n/a; 2017 less; 2019 avg; 2021 n/a (A).
  - 16V-529 covers the 2015 Renegade 9-speed; W84 covers the 2016–2017 AWD 2.4 (A).

---

## 11. VOLKSWAGEN

### VW Tiguan — 1st gen (2009–2017; 2.0T) including the Tiguan Limited (2017–2018); 2nd gen (2018–2024; 2.0T EA888 + 8AT); 3rd gen (2025+)
- **Verdict:** 2020 and 2024: Mixed/Strong. **2015, 2018–2019 and 2021–2023: Avoid.**
- **Evidence:**
  - CR: 2015 less; 2018 less (13 recalls); 2019 less; **2020 more**; 2021 less; 2022 less; 2023 less; **2024 more**; 2025 n/a (A). https://www.consumerreports.org/cars/volkswagen/tiguan/2021/reliability
  - iSeeCars: below average.
  - J.D. Power 2019 VDS Small SUV winner: the 2016 Tiguan. This conflicts with CR.
- **Known failure points:**
  - **Primary water pump, thermostat and housing leaks** on the EA888. The settlement **extends warranty to 8 yr / 80k** (effective 6/10/2022; warranty key U55) for 2014–2021 VW including the Tiguan.
    - Proof of the maintenance schedule and correct coolant is required.
    - It includes **prorated** coverage for consequential engine damage (A). https://static.nhtsa.gov/odi/tsbs/2022/MC-10214800-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2022/MC-10214802-0001.pdf
  - CR owner trouble spots for the 2018 and 2021 Tiguan include "Engine Cooling" (A).
  - Recalls include 22V-176: 2021–2022 Tiguan rear suspension knuckle corrosion and cracking (A).
- **Checklist:**
  - Look for pink crust at the water pump and thermostat housing, below the intake on the passenger side.
  - Check the coolant level and ask for coolant-spec records, which the extension requires.
  - Close 22V-176.

---

## 12. LUXURY EURO (brief)

### BMW X1 — F48 (2016–2022), U11 (2023+)
- **Evidence:**
  - CR: 2018 avg; **2021 much more**; 2023 avg (A).
  - J.D. Power 2024 VDS Small Premium SUV winner: the 2021 X1 (A).
- **Verdict:** 2020–2022 X1: Strong, given luxury-level maintenance costs.

### BMW X3 — F25 (2011–2017), G01 (2018–2024), G45 (2025)
- **Evidence:**
  - CR: **2016 less; 2019 less** (10 recalls); 2021 more; **2023 much more** (A).
  - J.D. Power 2019 VDS Compact Premium SUV winner: the 2016 X3. This conflicts with CR.
- **Verdict:** 2021–2024 G01: Strong. 2016 and 2018–2019: avoid-leaning.

### Mercedes-Benz GLC — X253 (2016–2022), X254 (2023+)
- **Evidence:**
  - CR: 2016 less (12 recalls); 2018 less (15); 2020 avg (20 recalls); 2022 avg; 2023 less (12) (A).
  - J.D. Power 2025 VDS Compact Premium SUV winner: the 2022 GLC (A).
- **Verdict:** 2020–2022: Mixed. 2016–2018 and 2023: avoid-leaning.

### Audi Q3 — 8U (2015–2018), F3 (2019+); Audi Q5 — 8R (to 2017), FY (2018+)
- **Evidence:**
  - Q3 CR: 2016 avg; 2019 n/a; 2021 less. CR's Feb-2025 avoid list included the 2018 Q3 (C). J.D. Power Small Premium SUV winners were the 2015 and 2016 Q3 (A).
  - Q5 CR: 2016 less; 2018 less; **2020 more**; 2022 less (A).
- **Verdict:** Mixed. Q5 2020 is the one A-grade good year sampled.
- **Checklist (all Euro):** full dealer service history, a pre-purchase scan for stored codes, and oil and coolant leak inspection. Budget for higher repair costs.

---
## 13. SEGMENT RANKING — best buys (compact and subcompact SUVs, MY2015–2025)

"Weakest grade" is the grade of the weakest claim this ranking actually rests on. Caveats outside the ranking logic are listed but not graded as load-bearing.

| # | Buy | Rationale | Weakest grade |
|---|---|---|---|
| 1 | **Toyota RAV4 2021–2023, 2.5 gas (8AT)** | CR: 2021 and 2023 much more reliable, 2022 more. J.D. Power 2025 VDS Compact SUV winner (2022). iSeeCars 7.3% odds of 250k. No open powertrain defect. Coolant bypass valve on 2021 covered to 10 yr/100k under CSP 24TE04; 2022–23 are not covered (C allegation only). | A |
| 2 | **Honda CR-V 2020–2022, 1.5T** | CR more reliable every year. iSeeCars best in class: 10.6% odds of 250k, reliability 7.9. A/C seal covered 10 yr. Oil-dilution claims are allegation-level (C) and not load-bearing. | A |
| 3 | **Toyota Corolla Cross 2022–2024, 2.0** | CR much more reliable for all three years. Only airbag-panel and stop-start items found. Young model, so long-term data is limited. | A |
| 4 | **Lexus NX 300h 2015–2021 (hybrid)** | CR more or much more reliable every year. J.D. Power Compact Premium winner for MY2019–2021. Brake booster covered to 10 yr/150k (24LE03) on 2018–21. | A |
| 5 | **Mazda CX-5 2023–2025, 2.5 non-turbo** | CR much more / more / much more. iSeeCars 7.9. Avoids the 2.5T head-crack issue and the 2018–19 cylinder-deactivation recall. | A |
| 6 | **Subaru Crosstrek 2019–2024, 2.0** | CR more reliable 2019–2023, much more in 2024. J.D. Power 2026 VDS Small SUV winner (2023). 2019 CVT covered to 10 yr/100k. | A |
| 7 | **Toyota RAV4 2016–2018, 2.5 (6AT)** | CR more reliable. Simple naturally aspirated engine and 6AT. Post-ZH1 production. Close battery-tray recall 23V-734. | A |
| 8 | **Honda CR-V 2015–2016, 2.4** | CR more reliable. Naturally aspirated. Check for 2015 vibration (TSB 15-046). | A |
| 9 | **Lexus NX 2022–2023 (NX 250 / NX 350)** | CR more (2022) and much more (2023). | A |
| 10 | **Lexus UX 2019–2023** | CR more or much more. J.D. Power Small Premium winner twice. | A |
| 11 | **Honda HR-V 2019–2020, 1.8** | CR more / much more. The CVT belt extension (7 yr/150k) is still running on many cars once software update 21-046 is done. | A |
| 12 | **Subaru Forester 2022–2024** | CR more reliable. Check the thermo-control valve (TCV) on 2021-and-earlier cars. | A |
| 13 | **Chevy Equinox / GMC Terrain 2022–2024, 1.5T** | CR more reliable. J.D. Power Compact SUV winner (2021 and 2023 Equinox). Avoid the 2025 redesign. | A |
| 14 | **Nissan Kicks 2022–2024** | CR more reliable. J.D. Power 2025 VDS Small SUV winner (2022). CVT judder is handled by TSB only. | A |
| 15 | **Toyota C-HR 2020** | CR more reliable. J.D. Power 2023 VDS Small SUV winner. | A |
| 16 | **Mazda CX-3 2018–2019** | CR more reliable. | A |
| 17 | **Subaru Outback 2023–2025, 2.5** | CR more reliable. iSeeCars 8.0 (model-level). | A |
| 18 | **Hyundai Tucson 2024–2025 / 2021; Kia Sportage 2022, 2025** | CR much more / more. Confirm the KSDS software on 2021 Tucson and 2022 Sportage. | A |
| 19 | **BMW X3 2021–2023; X1 2021** | CR more / much more; J.D. Power winner (X1). Higher running costs. | A |
| 20 | **Acura RDX 2019 / 2022** | CR more reliable; iSeeCars 7.2% odds of 250k. | A |

## 14. AVOID LIST
Each entry is year-level, backed by A-grade CR data unless noted.

- **Ford Escape 2015–2024, all engines.**
  - CR rated every year less reliable.
  - 1.5T coolant intrusion (21N12, now expired).
  - 1.6T head crack and fire (17V-209).
  - 2020–22 1.5 injector fire, with the final remedy pending (25V-467).
  - 2020–23 hybrid engine breach (23S27).
  - 24 recalls on the 2020 model and 18 on the 2021.
- **Ford Bronco Sport 2021–2022.** CR much less / less; 25V-467.
- **Ford EcoSport 2020.** CR less.
- **Jeep Cherokee 2015–2020.** CR less; 9-speed recall S55 and TSBs; 2.4 oil consumption (W84).
- **Jeep Compass 2017–2019 and 2022.** CR less.
- **Jeep Renegade 2015–2018.** CR less (2017); 16V-529.
- **Nissan Rogue 2015–2016.** CR less; 2015 on CR's avoid list.
- **Nissan Rogue 2022–2025 1.5 VC-Turbo, unless** 25V-437 and 26V-080 are completed and the 120k extension is confirmed. Bearing seizure; engine replacement per recall.
- **Nissan Rogue Sport 2017–2020 and 2022.** CR less.
- **Nissan Kicks 2019–2020.** CR less.
- **Hyundai Tucson 2016–2019 (especially 2016–18 1.6T DCT) and 2022.** CR less; 20V-543 fire / park-outside recall.
- **Hyundai Kona 2018–2019, 2021 and 2024.** CR less; 21V-301 piston rings.
- **Kia Soul 2015–2020.** CR less; Engine II settlement; 21V-259.
- **Kia Sportage 2015, 2017–2018 and 2021.** CR less.
- **Kia Seltos 2021 and 2024.** CR less; 21V-259 (2021).
- **Chevy Equinox / GMC Terrain 2025.** CR much less; CR 2026 avoid list. Also 2015 and 2017 (CR less).
- **Chevy Trax 2017–2019; Trailblazer 2021.** CR less.
- **Buick Encore 2015–2017.** 2015 CR much less; 2017 less.
- **Buick Encore GX 2020–2021 and 2023.** CR less.
- **VW Tiguan 2015, 2018–2019 and 2021–2023.** CR less.
- **Subaru Forester 2015–2018 and 2020.** CR less.
- **Subaru Crosstrek 2015–2017.** CR less.
- **Subaru Outback 2018–2020.** CR less.
- **Mazda CX-50 2023.** CR less.
- **Mazda CX-30 2022 and 2025.** CR less.
- **Mazda 2.5T in any model** is caution, not a blanket avoid: head-crack TSBs, and class actions at C grade.
- **Honda HR-V 2023.** CR less.
- **Acura RDX 2018.** CR less.
- **Mercedes GLC 2016–2018 and 2023.** CR less.
- **Audi Q5 2016, 2018 and 2022.** CR less.
- **Audi Q3 2018 and 2021.** 2018 on CR's avoid list (C); 2021 CR less.
- **BMW X3 2016 and 2019.** CR less.

## 15. REMOVED / DOWNGRADED

| Item | Change | Reason |
|---|---|---|
| Lexus NX 200t / NX 300 (2.0T 8AR-FTS), 2015–2021 | Top pick → **Strong** | Toyota bulletin L-SB-0007-21 Rev1: worn exhaust valve guides cause limp mode and require **cylinder head replacement**, covered only within 6 yr/70k. CR data remains excellent. The hybrid NX 300h keeps Top pick. (A) |
| Honda HR-V 2019–2020 | Candidate Top pick → **Strong** | Honda CVT belt deterioration program (21-046/21-047) documents a defect. The 7 yr/150k extension mitigates it. (A) |
| Mazda CX-5 2.5T (2019–2024) | Excluded from Top pick | Head-crack coolant-leak TSBs (cited in complaints) plus two class actions (C). The CX-5 2.5 NA is unaffected. |
| Toyota RAV4 2019 | Not a best buy | First-year recall cluster (20V-064/286/373, 19V-576) and hesitation TSB, although CR still rates it "more reliable". Prefer 2021–2023. |
| Toyota RAV4 2015 (early builds) | Not a best buy | Torque-converter shudder program ZH1; coverage now expired. Prefer 2016–2018. |
| Honda CR-V 2017–2018 1.5T | Downgraded to Mixed | Oil dilution; the 6-year extension has expired. CR rates 2018 only average. |
| Nissan Rogue 2024 | Downgraded despite CR "much more reliable" | 26V-080 VC-T bearing seizure recall covers 2023–2025 (A). The CR survey likely predates mileage-dependent failures. |
| Subaru Forester 2015–2018 | Downgraded vs. brand reputation | CR less reliable every year (A). The **FB25 oil-consumption lead is refuted for 2015+**: the known settlement covered 2011–2014 only, and no A-grade 2015+ program was found. |
| Kia Sportage 2020 | Not promoted despite J.D. Power 2023 VDS win | CR rates it average only. |
| Toyota Corolla Cross 2025 | Excluded | CR less reliable; thin data. |
| Chevrolet Equinox 2.4 "oil consumption 2010–2017" lead | Narrowed | The A-grade GM program covers 2010–2012 and pre-May-2013 builds only. For 2015–2017, the CR "less reliable" years (2015, 2017) remain the operative evidence. |
| Equinox 1.5T coolant-loss lead | Unsubstantiated | No A or B evidence found. Not used to downgrade. |
| RAV4 "2019+ 2.5L Dynamic Force complaints" lead | Partly substantiated | Real issues are block porosity (a small production window) and the coolant bypass valve (CSP 24TE04). No broad engine-failure program found. |
| RAV4 "2019 fuel tank" lead | Reassigned | The documented fill defect is the **RAV4 Hybrid** 2019–2021 (CSP). No gas-RAV4 program was found. |

## 16. CONTRADICTION LOG

1. **CR 2021 CX-5.** A secondary search summary said CR called the 2021 CX-5 the most reliable compact SUV of the past five years, with a score of 83/100. That was unverified and I could not trace it to CR. CR's current 2021 page says "about average".
   - **Resolution:** use CR's current page (A). CR re-scores used years annually.
2. **CR's Feb-2025 avoid list vs. current pages.** The list named the 2024 CX-50 and 2024 Encore GX (coverage, C). Current CR pages rate the 2024 CX-50 average and the 2024 Encore GX "more reliable".
   - **Resolution:** the newer CR data governs, but these years carry "Mixed".
3. **Equinox, J.D. Power vs. CR.** J.D. Power VDS named the 2015, 2016 and 2017 Equinox Compact SUV winners. CR rates 2015 and 2017 "less reliable".
   - **Resolution:** the two measure different things (3-year owner problem counts vs. CR's multi-year survey of severity-weighted trouble spots). CR year data is weighted more for used buying. Verdict: Mixed.
4. **Sportage, J.D. Power vs. CR.** J.D. Power named the 2018 Sportage (Small) and 2020 Sportage (Compact) winners. CR rates 2018 less and 2020 average. Resolution as in item 3.
5. **Encore and Soul, J.D. Power vs. CR.** J.D. Power named the 2017 Encore (Small SUV) and 2016 Soul (Compact MPV) winners. CR rates both "less". Resolution as in item 3.
6. **Tiguan and X3, J.D. Power vs. CR.** J.D. Power named the 2016 Tiguan and 2016 X3 winners. CR rates the 2015 Tiguan and 2016 X3 "less".
7. **iSeeCars vs. CR on Outback and Escape.** iSeeCars ranks the Outback #1 (8.0) and the Escape #5 (7.8) for small/compact SUV longevity. CR rates Outback 2018–2020 and Escape 2015–2024 below average.
   - **Resolution:** iSeeCars pools all model years (including pre-2015) into a lifespan probability. It does not capture year-specific defect rates.
8. **Nissan Rogue 2024.** CR rates it "much more reliable", yet NHTSA 26V-080 covers 2023–2025 VC-T bearing seizure and Nissan extended the engine warranty to 120k.
   - **Resolution:** the recall evidence (A) is a specific engine defect and overrides a young survey sample.
9. **RAV4 2019.** CarComplaints and forums call it the worst year (D). CR rates it "more reliable" (A), but it has the most recalls.
   - **Resolution:** treat it as buyable only with recalls closed; prefer 2021–2023.
10. **Lexus NX 2.0T.** CR rates it much more reliable, while Toyota's valve-guide TSB exists.
    - **Resolution:** there is a failure mode, but its frequency is unknown. Keep "Strong" and require a compression/leak-down test.
11. **Nissan VC-T recall 25V-437.** It lists "2021–2024 Rogue" with the 1.5 VC-T, but the US 2021 Rogue used the 2.5L; the VC-T arrived for MY2022.
    - **Resolution:** verify by VIN.
12. **Subaru PCV recall 19V-856.** The NHTSA API summary says "2019 Crosstrek, Forester, and Ascent". The Part 573 report shows Crosstrek = **PHEV only (37 units)**.
    - **Resolution:** the Part 573 report governs.
13. **Hyundai Tucson.** iSeeCars ranks it last of 14 on model-level longevity, while CR rates the 2024 Tucson much more reliable. This is a generation and time difference; both are true within scope.

## 17. FALSIFICATION PASS LOG (every Top pick)

| Top pick | Query / fetch run | Found | Effect |
|---|---|---|---|
| RAV4 2021–2023 gas | NHTSA API recalls for 2019, 2022 and 2024. Exa searches: "Toyota RAV4 2019-2023 2.5L engine cylinder head crack coolant leak class action… 2021 2022 problems engine transmission"; "RAV4 transmission hesitation TSB"; "24TE04" | 24TE04 CSP (2019–21); Barrientos class action (2019–23, dismissed); 20V-064 limited to fall-2019 blocks; 22V-519 OCS (2022); 24V-911 (2024) | **Kept** Top pick. Caveat: 2022–23 coolant bypass valve not covered. |
| RAV4 2016–2018 | NHTSA API 2017; Exa: "2013-2018 Toyota RAV4 torque converter shudder warranty extension…" | ZH1 covers 2013–2015 only (built before Nov 2014); 23V-734 battery tray | **Kept**; 2015 excluded. |
| CR-V 2020–2022 1.5T | NHTSA API 2017 and 2020; CR warranty-extension article; Exa: "Honda CR-V 2020 2021 2022 1.5 turbo problems oil dilution still, AC condenser leak class action, engine failure, warranty extension" | A/C seal extension 10 yr (2017–22); Wolf class action (C) alleges dilution on 2019–23; 19V-865 subframe bolts (2019–20); fuel pump 23V-858; 26V-332 | **Kept**. Allegation not load-bearing; checklist adds oil-level checks. |
| CR-V 2015–2016 2.4 | Search: "2015 2016 Honda CR-V vibration at idle class action settlement software update TSB" | TSB 15-046 vibration (2015); outreach-only settlement | **Kept**, with a vibration check. |
| Corolla Cross 2022–2024 | Exa: "Toyota Corolla Cross 2022 2023 2024 problems recall engine CVT class action warranty extension" | 23V-384 / 23V-864 airbag panel; stop-start TSB; hybrid 24V-708 | **Kept**. No powertrain defect found. |
| Lexus NX (all) | Exa: "Lexus NX 200t NX 300 2.0 turbo 8AR-FTS problems engine failure recall warranty enhancement; NX 350 2.4T recall"; "Lexus NX 300h 2015-2021 hybrid problems recall…" | L-SB-0007-21 valve guides (2.0T); 24LE03 brake booster CSP (NX300h 2018–21); NX350 P0420 reflash | **2.0T downgraded**; NX 300h **kept** (booster covered). |
| Mazda CX-5 2023–2025 NA | Exa: "Mazda CX-5 2019-2024 2.5L cylinder deactivation valve problems engine failure class action, CX-5 infotainment ghost touch, Mazda warranty extension"; NHTSA API 2016 | 19V-497 (2018–19); 2.5T head crack (TSBs, class actions); Duffy infotainment settlement (2016–2020) | **Kept** for 2023–2025 NA. 2.5T excluded. |
| Crosstrek 2019–2024 | Exa: "Subaru Crosstrek 2019-2023 problems engine oil consumption CVT failure class action recall"; Subaru SB PDFs | CVT extension on 2019 (positive); TCV class action (C) includes 2021; 19V-856 applies only to the PHEV; 21V-263 stabilizer bolts | **Kept**. Checklist adds a TCV scan. |
| HR-V 2019–2020 (candidate) | Exa: "Honda HR-V 2016-2022 1.8L CVT problems judder recall warranty extension class action" | CVT belt product update and 7/150 extension | **Downgraded** to Strong. |
| Kicks 2022–2024 (candidate) | Exa: "Nissan Kicks 2018-2024 problems CVT failure warranty extension recall class action…" | CVT judder TSBs NTB19-040 / NTB20-060 / NTB22-021A; no extension | Kept at **Strong**, not Top pick. |

## 18. SOURCE LIST (with grades)

### Grade A — primary
**Consumer Reports year pages** follow the pattern `https://www.consumerreports.org/cars/<make>/<model>/<year>/reliability`. All were fetched Sept 2026. Examples:
- https://www.consumerreports.org/cars/toyota/rav4/2019/reliability
- https://www.consumerreports.org/cars/honda/cr-v/2020/reliability
- https://www.consumerreports.org/cars/mazda/cx-5/2023/reliability
- https://www.consumerreports.org/cars/subaru/forester/2016/reliability
- https://www.consumerreports.org/cars/nissan/rogue/2024/reliability
- https://www.consumerreports.org/cars/ford/escape/2020/reliability
- https://www.consumerreports.org/cars/chevrolet/equinox/2025/reliability
- https://www.consumerreports.org/cars/lexus/nx/2019/reliability

The same pattern was used for every model and year listed in the tables above.

**Other Consumer Reports:**
- https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines

**J.D. Power:**
- https://www.jdpower.com/cars/ratings/dependability/2018 (and /2019, /2020, /2021, /2022, /2023, /2024, /2025)
- https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/
- https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/

**iSeeCars:**
- https://www.iseecars.com/longest-lasting-cars-study
- https://www.iseecars.com/most-reliable/most-reliable-small-suvs

**NHTSA recalls API** (queried via fetch):
- recallsByVehicle for RAV4 2017/2019/2022/2024; CR-V 2017/2020; Forester 2019; Outback 2020; Kia Soul 2020; Tucson 2016; Kona 2019/2021; CX-5 2016; CX-30 2020; RDX 2019
- campaignNumber 25V437000 and 26V080000
- Base: https://api.nhtsa.gov/recalls/

**NHTSA Part 573 reports / acknowledgments:**
- https://static.oemdtc.com/Recall/20V064/RMISC-20V064-0396.pdf
- https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V856-4949.PDF
- https://static.nhtsa.gov/odi/rcl/2019/RCRIT-19V856-4324.pdf
- https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V497-2476.PDF
- https://static.nhtsa.gov/odi/rcl/2017/RCLRPT-17V209-4095.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V467-9675.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V187-1027.pdf
- https://static.nhtsa.gov/odi/rcl/2025/RCAK-25V165-7284.pdf
- https://static.nhtsa.gov/odi/rcl/2016/RCLRPT-16V529-9669.PDF
- https://static.nhtsa.gov/odi/rcl/2023/RCAK-23V864-1152.pdf
- https://static.nhtsa.gov/odi/rcl/2024/RCAK-24V708-2799.pdf

**Manufacturer TSBs, warranty extensions and programs** (on static.nhtsa.gov or exact mirrors):
- Toyota:
  - CSP 24TE04 https://dot.report/bulletins/11012750
  - ZH1 https://static.nhtsa.gov/odi/tsbs/2017/MC-10140600-9999.pdf
  - Stop-start TSB https://static.nhtsa.gov/odi/tsbs/2023/MC-10236213-9999.pdf
- Lexus:
  - L-SB-0007-21 https://static.nhtsa.gov/odi/tsbs/2021/MC-10190467-9999.pdf and https://oemdtc.com/tsb/11003637/
  - 8AR surge https://static.nhtsa.gov/odi/tsbs/2017/MC-10119435-9999.pdf
  - 24LE03 https://static.oemdtc.com/NHTSA-PDFs/MC-11014217-0001.pdf
  - L-SB-0008-25 https://dot.report/bulletins/11014207
  - NX350 https://static.oemdtc.com/NHTSA-PDFs/MC-11021725-0001.pdf
- Honda:
  - 2018 dilution product update https://static.nhtsa.gov/odi/tsbs/2018/MC-10152439-0001.pdf
  - A/C seal extension https://static.nhtsa.gov/odi/tsbs/2023/MC-10237039-0001.pdf and https://static.nhtsa.gov/odi/tsbs/2024/MC-10249629-0001.pdf
  - HR-V CVT https://static.nhtsa.gov/odi/tsbs/2021/MC-10191763-0001.pdf and https://static.nhtsa.gov/odi/tsbs/2023/MC-10236086-0001.pdf
- Subaru:
  - https://static.nhtsa.gov/odi/tsbs/2018/MC-10146475-9999.pdf
  - https://static.nhtsa.gov/odi/tsbs/2018/MC-10150886-9999.pdf
  - https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf
  - https://static.oemdtc.com/NHTSA-PDFs/MC-11019956-0001.pdf
  - https://static.nhtsa.gov/odi/tsbs/2022/MC-10216977-0001.pdf
- Nissan:
  - CVT settlement https://static.nhtsa.gov/odi/tsbs/2022/MC-10211969-0001.pdf
  - Kicks CVT https://static.nhtsa.gov/odi/tsbs/2023/MC-10232664-0001.pdf and https://static.nhtsa.gov/odi/tsbs/2020/MC-10179616-0001.pdf
- Hyundai / Kia:
  - https://autoservice.hyundaiusa.com/TXXM
  - https://static.nhtsa.gov/odi/tsbs/2023/MC-10240082-0001.pdf
  - https://static.oemdtc.com/NHTSA-PDFs/MC-10178174-0001.pdf
  - https://www.kiamedia.com/us/en/media/pressreleases/15457/hyundai-motor-america-and-kia-motors-america-resolve-engine-litigation
  - https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation
  - https://www.kiaenginesettlement.com/Content/Documents/Notice.pdf
- GM:
  - https://static.nhtsa.gov/odi/tsbs/2020/MC-10171430-9999.pdf
  - https://static.nhtsa.gov/odi/tsbs/2015/SB-10058791-5041.pdf
  - https://static.nhtsa.gov/odi/tsbs/2017/MC-10113395-9999.pdf
  - https://static.oemdtc.com/NHTSA-PDFs/MC-10158887-9999.pdf
  - Berman final approval: https://www.classaction.org/media/berman-et-al-v-general-motors-llc-final-settlement-approval-signed.pdf (court order)
- Ford:
  - 21N12 https://static.nhtsa.gov/odi/tsbs/2022/MC-10213732-0001.pdf
  - 19B37 https://static.nhtsa.gov/odi/tsbs/2019/MC-10169989-0001.pdf
  - 25S76 https://www.ford.com/support/how-tos/recall/recalls-and-faqs/25s76-bronco-sport-2021-2024-and-escape-2020-2022-cracked-fuel-injector-and-underhood-fire-risk-recall/
  - 23S27 https://www.ford.com/support/how-tos/recall/recalls-and-faqs/23s27-escape-2020-2023-and-maverick-2022-2023-engine-failure-recall/
- FCA / Jeep:
  - W84 https://static.nhtsa.gov/odi/tsbs/2021/MC-10188788-9999.pdf
  - S55-related TSB https://static.nhtsa.gov/odi/tsbs/2016/MC-10121858-9999.pdf
  - 9-speed adaptation TSB https://static.nhtsa.gov/odi/tsbs/2015/MC-10148614-9999.pdf
- VW:
  - https://static.nhtsa.gov/odi/tsbs/2022/MC-10214800-0001.pdf
  - https://static.nhtsa.gov/odi/tsbs/2022/MC-10214802-0001.pdf
- Mazda:
  - Duffy settlement https://www.mazdainfotainmentsettlement.com/ (settlement terms)
- Subaru press:
  - https://www.prnewswire.com/news-releases/subaru-crosstrek-named-the-most-dependable-small-suv-in-jd-power-2026-us-vehicle-dependability-study-302688937.html (J.D. Power award)
- Nissan press:
  - https://usa.nissannews.com/en-US/releases/nissan-kicks-and-murano-named-most-dependable-in-jd-power-2025-us-vehicle-dependability-study

### Grade B / C — secondary; single outlet or allegation
- Autoblog, 2026 J.D. Power segment winners, used for the Compact Premium winner (BMW X4) (C): https://www.autoblog.com/news/2026-j-d-power-study-reveals-the-most-dependable-cars-and-suvs
- Autoblog, Nissan VC-T 10-year extension (C): https://www.autoblog.com/news/nissan-rogue-warranty-extension-vc-turbo-engine
- Wards, Rogue throttle-body and engine recalls (C): https://www.wardsauto.com/news/nissan-recalls-642k-rogue-suvs-engine-damage-nhtsa-throttle-body/813421/
- The Car Guide, coverage of CR's Feb-2025 avoid list (C): https://www.guideautoweb.com/en/articles/77355/consumer-reports-lists-10-most-satisfying-new-models-and-67-used-vehicles-to-avoid/
- Jalopnik, coverage of CR's Mar-2026 avoid list (C): https://www.jalopnik.com/2132008/used-chevy-models-avoid-buying-consumer-reports/
- SlashGear, coverage of CR's avoid list (C): https://www.slashgear.com/2152128/used-cars-to-avoid-consumer-reports-most-surprising-models/
- Torque News, RAV4 Hybrid fuel tank (C): https://www.torquenews.com/1083/toyota-rav4-hybrid-fuel-tank-issue-fixed-customer-support-program
- The Drive, Nissan AEB class action (C): https://www.thedrive.com/news/37413/judge-allows-class-action-lawsuit-over-nissan-automatic-emergency-braking-issues-to-proceed
- CR article on the Rogue braking investigation (A; cited for existence): https://www.consumerreports.org/car-recalls-defects/nissan-rogue-braking-issue-prompts-nhtsa-investigation
- Class-action complaints and news (C, allegations):
  - Barrientos v. Toyota https://www.classaction.org/media/barrientos-et-al-v-toyota-motor-sales-usa-inc-et-al.pdf
  - Wolf v. Honda https://www.classaction.org/news/class-action-alleges-honda-hid-engine-oil-dilution-defect-in-newer-cr-v-civic-accord-models ; https://storage.courtlistener.com/recap/gov.uscourts.mnd.199663/gov.uscourts.mnd.199663.24.0.pdf
  - Jarvis v. Mazda https://www.classaction.org/media/jarvis-et-al-v-mazda-motor-of-america-inc-et-al.pdf
  - Cauller v. Mazda https://topclassactions.com/lawsuit-settlements/consumer-products/auto-news/mazda-class-action-claims-thousands-of-vehicles-have-engine-defect/
  - Subaru TCV (D.N.J.) https://storage.courtlistener.com/recap/gov.uscourts.njd.536996/gov.uscourts.njd.536996.1.0.pdf
  - Miller v. Ford https://www.classaction.org/media/miller-v-ford-motor-company.pdf ; https://www.govinfo.gov/content/pkg/USCOURTS-caed-2_20-cv-01796/pdf/USCOURTS-caed-2_20-cv-01796-11.pdf
  - Subaru Starlink https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-starlink-class-action-settlement/ ; https://www.classaction.org/news/starlink-class-action-alleges-2019-2023-subaru-models-equipped-with-defective-infotainment-systems
  - Subaru battery https://topclassactions.com/lawsuit-settlements/closed-settlements/subaru-battery-drain-class-action-settlement/
  - Honda CR-V vibration https://topclassactions.com/lawsuit-settlements/closed-settlements/honda-cr-v-vibration-class-action-settlement/
- Aggregator listing the Jeep X89 PTU extension (C): https://arfc.org/autos/jeep/cherokee/recalls/000059208001961994000000180/recall.aspx

### Grade D — leads only; not load-bearing
- CarComplaints news and pages:
  - https://www.carcomplaints.com/news/2024/toyota-coolant-bypass-valve-lawsuit-dismissed.shtml
  - https://www.carcomplaints.com/news/2016/honda-tsb-15-046-2015-honda-cr-v-vibration.shtml
  - https://www.carcomplaints.com/news/2026/nissan-rogue-engine-warranty-extension-vc-turbo.shtml
  - https://www.carcomplaints.com/Toyota/RAV4/2019/transmission/hesitates_and_lurches_at_slower_speeds.shtml
- Forums:
  - rav4world T-SB-0107-19 thread https://www.rav4world.com/threads/after-getting-serviced-for-tsb-0107-19-transmission-lurching-issue-post-here.301187/
- Listicles and blogs viewed only for leads: carbuzz, topspeed, caredge.
