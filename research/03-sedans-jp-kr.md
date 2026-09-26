# 03 — Japanese & Korean Sedans/Compacts (non-hybrid), US used market, MY 2015–2025

Research agent 03. Compiled 2026-09-26. Reader: a US buyer shopping for a used car.

## How to read this file

**Validation rule applied:** a model/year/powertrain passes only when evidence at that level supports it. Brand reputation earns nothing by itself. A documented engine or transmission defect sinks those years even for a top brand, and a weak brand can still field a good specific car.

**Grades (inline):**
- **A** = primary source: NHTSA recall/campaign data (pulled from NHTSA's recalls API, `api.nhtsa.gov/recalls/recallsByVehicle`), manufacturer service bulletins and warranty-extension notices (mostly as filed on static.nhtsa.gov), court settlement documents, J.D. Power's own pages and releases, Consumer Reports' own pages, and iSeeCars' own study page.
- **B** = two or more independent quality outlets say the same thing.
- **C** = a single secondary source, or a class-action *allegation*.
- **D** = forums, CarComplaints, dealer or warranty-seller blogs. These are leads only and never carry a conclusion.

**CR model-year verdicts.** Each CR reliability page states "X is more / much more / about average / less reliable than other cars from the same model year". I read these pages directly (A). Some pages came from a cache stamped 2023-11-01 and are marked **(c23)**. CR re-scores every year, so a (c23) verdict may have moved slightly since. "NA" means CR shows no verdict because its sample was too small.

**What changed recently that a buyer must check by VIN:**
- **Honda 26V-332 (May 2026):** front-passenger seat-weight sensor recall covering 2016–2022 Civic/Accord, 2018–2020 Fit and 2018–2021/2023 TLX. Owner letters went out 7 July 2026, so many used cars will still have it open. (A)
- **Hyundai 25V-796 / Kia 25V-794 (Nov 2025):** a damaged fuel-tank check valve can let the tank swell and melt against the exhaust. Covers 2020–2023 Sonata and 2021–2024 K5. (A)
- **Nissan 25V-437 (letters April 2026):** VC-Turbo engine-bearing recall that includes the 2019–2020 Altima 2.0T. (A)
- **Genesis 26V-229 (April 2026):** fuel-pipe leak on 2021–2025 G80. (A)

---

## CROSS-CUTTING PROGRAMS (they affect several models below)

1. **Hyundai/Kia Theta II GDI (2.0T/2.4) settlement.** Covers 2011–2019 Sonata and 2011–2019 Optima (2019 only if built before KSDS went into production). It extends the **short-block warranty for life**, and the coverage passes to later private owners but not to dealers or auction houses. It applies only once the free **KSDS** knock-sensor software (Hyundai campaign 953/966, Kia equivalent) is installed. Final approval order: [kiaenginesettlement.com order](https://www.kiaenginesettlement.com/Content/Documents/Order%20Granting%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf) (A). Hyundai's list of class vehicles: [NHTSA MC-10178174](https://static.oemdtc.com/NHTSA-PDFs/MC-10178174-0001.pdf) (A). Related recalls: 15V-568 (2011–12 Sonata), 17V-226 (2013–14 Sonata), 17V-224 (2011–14 Optima), and 18V-907, a fuel-pipe recall on Kias whose engines were already replaced (A). **No Theta II engine recall covers 2015–2019 Sonata or 2016–2019 Optima. Those cars rely on the settlement warranty.** The 2015 Sonata and 2016 Optima recall lists were confirmed through the NHTSA API (A).
2. **Hyundai/Kia "Engine II" settlement (2022).** Extends coverage to **15 years / 150,000 miles** for connecting-rod-bearing damage, KSDS required. Covers 2014–2016 Elantra with the Nu 2.0 GDI, 2014–2020 Elantra GT, 2010–2018 Forte and 2010–2016 Forte Koup, plus the hybrid and other listed models. Sources: [Kia release](https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation) (A), [Hyundai TXXM page](https://autoservice.hyundaiusa.com/TXXM) (A), [NHTSA MC-10240082](https://static.nhtsa.gov/odi/tsbs/2023/MC-10240082-0001.pdf) (A).
3. **Hyundai/Kia anti-theft (turn-key cars with no engine immobilizer).** Hyundai: 2011–2022 Accent and Elantra, 2011–2019 Sonata. Kia: 2011–2021 Forte, 2021–2022 K5, 2011–2020 Optima, 2011–2021 Rio. Fixes are a free software upgrade (Hyundai campaign 993, which adds window decals) or, on cars that can't take the software, an ignition-cylinder protector or steering lock. Final approval came 1 Oct 2024, but appeals were pending when last checked. Sources: [hyundaitheftsettlement.com](https://www.hyundaitheftsettlement.com/) (A), [Hyundai dealer bulletin, NHTSA MC-10251282](https://static.nhtsa.gov/odi/tsbs/2024/MC-10251282-0001.pdf) (A), [court order](https://angeion-public.s3.amazonaws.com/www.kiatheftsettlement.com/docs/Order%20Regarding%20Motion%20for%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf) (A).
4. **Hyundai (and likely Kia/Genesis) powertrain warranty does not transfer in full.** Hyundai's 10-year/100k powertrain warranty is for the original owner only. Later owners get **5 years/60k from the in-service date**. [Hyundai warranty page](https://www.hyundaiusa.com/us/en/assurance/america-best-warranty) (A). Kia and Genesis terms were **not independently verified** here.
5. **Nissan CVT extensions to 84 months / 84,000 miles.** Covers 2013–2016 Altima, 2013–2017 Sentra, 2012–2017 Versa and 2014–2017 Versa Note ([May 2020 bulletin](https://static.nhtsa.gov/odi/tsbs/2020/MC-10176204-0001.pdf), A), and 2017–2018 Altima plus 2018–2019 Sentra, Versa and Versa Note ([2023 bulletin](https://static.nhtsa.gov/odi/tsbs/2023/MC-10246457-0001.pdf), A). Nissan's own words: "CVT warranty coverage on all other Nissan models remains 60 months/60,000 miles" ([2022 notice](https://static.nhtsa.gov/odi/tsbs/2022/MC-10229597-0001.pdf), A). **By late 2026 almost every covered car is past 84 months.** No extension was found for the 2019+ Altima, 2020+ Sentra or Versa, or the Maxima.
6. **Subaru CVT extensions to 10 years / 100,000 miles.** 2015 Legacy/Impreza/WRX CVT (bulletin 16-107-17), 2016–2017 (16-115-18), 2018 (16-117-18), and 2019–2020 Impreza plus 2019–2020 Legacy non-turbo (**16-155-25R, issued May 2025**). Sources: [16-107-17](https://static.nhtsa.gov/odi/tsbs/2017/MC-10117538-9999.pdf), [16-115-18](https://static.nhtsa.gov/odi/tsbs/2018/MC-10146475-9999.pdf), [16-155-25R](https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf) (all A). The 2018 bulletin number comes from a TSB index plus forum threads (C).
7. **Subaru battery-drain settlement.** Covers 2015–2020 Legacy and WRX, plus Outback and Forester. [subarubatterysettlement.com notice](https://www.subarubatterysettlement.com/) (A).
8. **Honda fuel pump (Denso).** Recall 23V-858 expands 20V-314 and 21V-215 and covers 2013–2023 Accord and Civic, ILX, TLX and 2018–2019 Fit (A). **Toyota/Lexus fuel pump** recalls 20V-012 and 20V-682 cover 2018–2020 Camry, 2019–2020 Avalon, 2019 Corolla Hatchback, 2020 Corolla, 2018–2020 ES 350 and some IS (A). A court-approved Denso settlement (20 Dec 2022) set up a Lexus **Customer Support Program on the low-pressure pump until 15 July 2036 or 150,000 miles**: [Lexus CSP, NHTSA MC-10235219](https://static.nhtsa.gov/odi/tsbs/2023/MC-10235219-9999.pdf) (A). Toyota-brand CSP terms were not confirmed separately (the Toyota settlement site is referenced there).
9. **Honda AEB "phantom braking" probe.** NHTSA opened PE22-003, then upgraded it to **EA24-002 (April 2024)**. It covers about 3 million vehicles, including the 2018–2022 Accord, with 1,294 complaints, 31 crashes and 58 injuries. [NHTSA EA24-002](https://static.nhtsa.gov/odi/inv/2024/INOA-EA24002-11766P1.pdf) (A); [Car and Driver](https://www.caranddriver.com/news/a60526893/nhtsa-honda-accord-cr-v-emergency-braking-investigation/) + [Ars Technica](https://arstechnica.com/cars/2024/04/feds-expand-investigation-into-hondas-automatic-emergency-braking-system/) (B). Status as of 2026 was **not confirmed**.

---
## MODEL-BY-MODEL

### Toyota Camry — XV50 2015–2017; XV70 2018–2024; XV80 2025 (hybrid-only → out of non-hybrid scope)
- **Verdict:** 2015–2017 2.5L → **Top pick**. 2019–2024 2.5L → **Top pick**. 2018 → **Strong** (first-year recall cluster). V6 3.5 (2GR-FKS) 2018–2024 → **Strong**.
- **Best buys:** 2.5L I4 (A25A-FKS) 2019–2024; 2.5L (2AR-FE, 6-spd auto) 2015–2017.
- **Caution:** 2018 (first year of the Dynamic Force engine and UA80 8-speed).
- **Known failure points:**
  - **2018 2.5L oversized pistons.** Recall **18V-200** replaces the engine in affected cars. Pistons from Dec 18–19, 2017 shifts cause oil use, smoke, rough running and possible stall ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=camry&modelYear=2018); [Toyota chronology](https://static.oemdtc.com/Recall/18V200/RMISC-18V200-0702.pdf)) (A).
  - **2018 8-speed drivability.** Shift shock and hesitation are addressed by ECM reflashes **T-SB-0330-17** ([link](https://static.nhtsa.gov/odi/tsbs/2017/MC-10140595-9999.pdf)) and **T-SB-0152-19** (2018–2019, [link](https://static.nhtsa.gov/odi/tsbs/2020/MC-10173797-9999.pdf)). **T-SB-0010-18** records a mid-2018 B1-clutch hardware change and requires matching software ([link](https://static.nhtsa.gov/odi/tsbs/2020/MC-10185789-9999.pdf)) (A). These are software/drivability items, not a documented mechanical failure pattern.
  - **UA80 8-speed class action.** *LeBoutheller v. Toyota* (E.D. Tex., Dec 2025) alleges overheating fluid and torque-converter/software defects. The lead plaintiff is a 2020 Camry that needed a transmission at about 125k miles. It is an **allegation (C)**; the suit's existence is B ([CarComplaints](https://www.carcomplaints.com/news/2025/toyota-ua80-transmission-problems.shtml) D, [SlashGear](https://www.slashgear.com/2079253/toyota-eight-speed-transmission-class-action-lawsuit/), [Autoblog on a NJ suit](https://www.autoblog.com/news/toyota-transmission-lawsuit-new-jersey)). No recall and no warranty extension exist.
  - **A25A-family minor TSBs.**
    - 2020 electric water pump leak with MIL (T-TT-0614-20, [link](https://static.nhtsa.gov/odi/tsbs/2020/MC-10176705-9999.pdf)).
    - "Engine Maintenance Required" message from the coolant bypass valve, 2018–2021 ([link](https://static.oemdtc.com/NHTSA-PDFs/MC-11020668-0001.pdf)).
    - Milky oil or low-oil-pressure warning after short trips in extreme cold, 2018–2024 ([link](https://oemdtc.com/tsb/10252251/)) (A).
    - No engine-failure extension exists for the A25A.
  - **Brake vacuum pump.** 18V-211 (2018) and 21V-890 (2018–2019): the vane cap can break and cut brake assist (A).
- **Recalls to confirm closed:**
  - 18V-200 (2018 2.5L engine)
  - 18V-108 (2018 V6 fuel pipe)
  - 18V-211 and 21V-890 (brake assist)
  - 20V-012 / 20V-682 / 25V-028 (fuel pump)
  - 23V-865 (2020–2022 passenger occupant-classification sensor)
  - All A, from the [NHTSA 2018 list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=camry&modelYear=2018) and the [2022 list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=CAMRY&modelYear=2022).
- **Evidence:**
  - CR, from the model-year pages: 2015/2016/2017 more reliable; 2018 **much more** (c23); 2019, 2020 (c23), 2021, 2022, 2023 (c23) and 2024 more reliable ([CR 2018](https://www.consumerreports.org/cars/toyota/camry/2018/reliability/), [2024](https://www.consumerreports.org/cars/toyota/camry/2024/reliability/)) (A).
  - J.D. Power VDS midsize-car winner three studies running: **2024 VDS (2021 Camry)**, **2025 VDS (2022)** and **2026 VDS (2023)** ([JDP 2024](https://www.jdpower.com/cars/ratings/dependability/2024), [JDP 2025](https://www.jdpower.com/cars/ratings/dependability/2025), [2026 PR](https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/)) (A).
  - iSeeCars 2025: Camry 9.0% chance of reaching 250k (3.5× the car average) ([iSeeCars](https://www.iseecars.com/longest-lasting-cars-study)) (A). The 2026 study places the gas Camry 12th among passenger cars ([Autoblog summary](https://www.autoblog.com/features/longest-lasting-toyota-sedan-isnt-the-camry-or-corolla), C).
- **Hybrid note:** the Camry Hybrid ranks above the gas car for longevity (iSeeCars 2025: 10.2% vs 9.0%; 2026: 11.5%) (A/B).
- **Inspection checklist:**
  - Run the VIN on NHTSA and toyota.com for 18V-200, the fuel-pump recalls, the vacuum-pump recalls and 23V-865.
  - On a 2018–2019, ask for proof the T-SB-0330-17 and T-SB-0152-19 reflashes were done (label under the hood).
  - Road test from cold: harsh Park→Reverse, 3→1 downshift clunk, hesitation from a rolling stop.
  - Check ATF condition (the UA80 is sealed; burnt smell or dark fluid is a red flag).
  - For 2018 2.5L cars, check the oil level and look for blue smoke.
  - Look for coolant at the electric water pump on 2020s.

### Toyota Corolla — E170 2015–2019 (sedan); Corolla iM 2017–2018; E210 Hatchback 2019+; E210 sedan 2020–2025
- **Verdict:** 2018–2022 → **Top pick**. 2015–2017 → **Top pick once campaign JSD is verified**, otherwise Strong. 2023–2025 → **Strong**.
- **Best buys:** 1.8L 2ZR-FE CVT, 2018–2019 sedan; 1.8L or 2.0L M20A-FKS, 2020–2022.
- **Caution:**
  - 2014–2017 CVT software campaign (below).
  - Early-build 2019 Corolla Hatchback torque-converter recall.
  - 2023–2024 steering-shaft recall.
- **Known failure points:**
  - **2014–2017 Corolla CVT.** Special Service Campaign **J0D → JSD** (about 1.3M vehicles): improper CVT programming causes abnormal wear and limp mode (P2820). The fix is new software plus a solenoid-valve inspection, with CVT replacement if damaged. 2018 models were built with the fix ([JSD notice](https://static.nhtsa.gov/odi/tsbs/2018/MC-10145732-9999.pdf)) (A).
  - **2019 Corolla Hatchback (built Aug–Oct 2018, about 3,400 cars).** Torque-converter impeller blades can detach, risking loss of power. Recall **18V-901** replaces the CVT ([Toyota DIR](https://static.oemdtc.com/Recall/18V901/RMISC-18V901-3864.pdf)) (A).
  - **2011–2019 Corolla airbag ECU (ZF-TRW).** Recall **20V-024**, from NHTSA EA19-001 (A).
  - **2023–2024 steering intermediate shaft** can crack. Recall **24V-878** ([NHTSA 2023 list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=COROLLA&modelYear=2023)) (A). Also 23V-480 / 25V-040 (spiral cable) (A).
  - **M20A** shares the coolant-bypass-valve and cold-weather milky-oil TSBs listed under Camry (A).
- **Evidence:**
  - CR: 2015 (c23), 2016, 2017 (c23), 2018 (c23) more reliable; 2019 **much more**; 2020 more; 2021 **much more**; 2022 more; 2023 about average; 2024 much more (A).
  - J.D. Power compact-car winner: 2022 VDS (2019 Corolla), 2024 VDS (2021 Corolla Hatchback), 2025 VDS (2022 Corolla), 2026 VDS (2023 Corolla) ([JDP 2022 release](https://www.businesswire.com/news/home/20220210005117/en/Korean-Auto-Manufacturers-Lead-the-Way-in-Vehicle-Dependability-J.D.-Power-Finds), [JDP 2024](https://www.jdpower.com/cars/ratings/dependability/2024), [JDP 2025](https://www.jdpower.com/cars/ratings/dependability/2025), [2026 PR](https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/)) (A).
  - iSeeCars 2025: Corolla 3.2%, only 1.2× the car average (A). Longevity odds are modest next to Civic/Camry, likely reflecting how Corollas are used and retired.
  - CR Used Car Top Pick under $15k: Corolla ([dealerbar summary of CR](https://dealerbar.com/2026/04/03/10-best-used-cars-for-2026-according-to-consumer-reports/), C).
- **Hybrid note:** the Corolla Hybrid 2020+ is a CR Used Top Pick ([CR](https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/), A) and at least as reliable as the gas car.
- **Inspection checklist:**
  - VIN check for JSD (2015–2017), 20V-024, fuel pump 20V-682 (2019 hatch, 2020 sedan), 18V-901 (2019 hatch) and 24V-878 (2023–2024).
  - Scan for P2820 and CVT DTCs.
  - Test drive for CVT shudder or flare at 20–40 mph.
  - Ask for CVT fluid service history once past 60k.

### Toyota Avalon — XX40 2015–2018; XX50 2019–2022 (discontinued after 2022)
- **Verdict:** 2015–2022 V6 → **Top pick**.
- **Best buys:** 3.5L V6. 2015–2018 have the 2GR-FE with 6-spd auto; 2019–2022 have the 2GR-FKS with UA80 8-spd.
- **Caution:** 2019–2022 fall within the UA80 allegation (C); no recall or extension exists.
- **Known failure points:**
  - 20V-024 airbag ECU (2012–2018 Avalon) (A).
  - 18V-685 airbag ECU software (2019 Avalon) (A).
  - Fuel pump 20V-012 / 20V-682 (2018–2020) (A).
  - 23V-865 OCS (2020–2021) (A).
  - CR owner comments mention water-pump noise on 2015 (anecdote, not load-bearing).
  - Sources: [NHTSA 2019 list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=avalon&modelYear=2019); [20V-024 via Corolla list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=corolla&modelYear=2019).
- **Evidence:**
  - CR: 2015 more; 2016 **much more**; 2018 more (c23); 2019 much more (c23); 2020 **much more**; 2021 much more; 2022 more (c23) (A).
  - **Top model overall in the J.D. Power 2025 VDS** (2022 Avalon; large-car award) ([JDP 2025 PR](https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/), [ratings](https://www.jdpower.com/cars/ratings/dependability/2025)) (A).
  - iSeeCars 2025: **18.9%**, #2 passenger car (A). iSeeCars 2026: **23.2%**, #2 passenger car ([Road & Track](https://www.roadandtrack.com/news/a73741744/20-longest-lasting-cars-trucks-suvs-2026/), [AutoGuide](https://www.autoguide.com/auto/top-10/top-10-longest-lasting-cars-sedans-and-hatchbacks-you-can-keep-44638780), B).
- **Hybrid note:** the Avalon Hybrid is also top-tier (iSeeCars 2026: 17.4%) (B).
- **Inspection checklist:**
  - VIN check for 20V-024 (2015–2018), fuel pump and 23V-865.
  - On 2015–2018 2GR-FE cars, look for coolant seepage at the water pump.
  - On 2019–2022, check 8-speed shift quality and ATF condition.
  - Get timing-chain-era maintenance records (oil-change intervals).

### Honda Civic — 9th gen 2015; 10th gen 2016–2021 (FC sedan/FK hatch); 11th gen 2022–2025
- **Verdict:**
  - 2015 1.8L → **Strong**.
  - 2016–2018 **1.5T** → **Mixed**.
  - 2016–2021 **2.0L** → **Strong**.
  - 2019–2021 1.5T → Strong−.
  - 2022–2023 → **Strong**.
  - 2024–2025 → Strong (CR average for 2024).
- **Best buys:** 2.0L NA (LX/Sport) 2019–2021; 2022–2023 2.0L or 1.5T.
- **Caution:** 1.5T 2016–2018 (oil dilution); 2016–2018 A/C condenser; 2016 2.0L built Sep 2015–Feb 2016 (piston circlip recall).
- **Known failure points:**
  - **1.5T oil dilution (fuel in the oil).** Honda added a 21-state cold-weather software update (SB 18-137, [link](https://static.nhtsa.gov/odi/tsbs/2018/MC-10152439-0001.pdf), A), then a nationwide warranty extension to **6 years, unlimited miles**, for 2016–2018 Civic 1.5T and 2017–2018 CR-V. It covers the camshaft, rocker arms and spark plugs ([CR June 2019](https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines), A; [WardsAuto](https://www.wardsauto.com/news/archive-wards-honda-extends-warranty-to-address-1-5l-gas-oil-dilution-problem/793295/) B). **That extension has now expired for every car** (6 years from purchase ends 2022–2024).
  - **A/C condenser leaks, 2016–2018 Civic.** SB **19-091** extends the condenser to **10 years from purchase, unlimited miles** ([link](https://static.nhtsa.gov/odi/tsbs/2020/MC-10180616-0001.pdf), A). It is **still active into 2026–2028**. The class action was dismissed and the dismissal upheld ([Bloomberg Law](https://news.bloomberglaw.com/litigation/hondas-win-upheld-in-civic-air-conditioning-class-action-suit), C).
  - **2016 Civic 2.0L built Sep 22 2015–Feb 3 2016.** A missing piston wrist-pin circlip can let the pin drift and seize the engine. Recall **16V-074** ([NHTSA 2016](https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=civic&modelYear=2016)) (A).
  - **2014–2015 Civic CVT.** Drive-pulley shaft software recall **15V-574** ([Honda statement](https://hondanews.com/en-US/releases/statement-by-american-honda-regarding-cvt-drive-pulley-shaft-recall-2014-2015-civic-and-2015-honda-fit?query=recall)) (A).
  - **2022–2025 steering gearbox.** Excess friction makes steering hard. Recall **24V-744** (NHTSA EA23-003) re-greases and replaces the worm spring (A). Also **23V-704**, which covers 2022–2024 cars that got a misassembled replacement steering rack (A).
  - **Occupant-classification sensor.** 24V-064 (2020–2022) and the **26V-332** expansion (2016–2022 Civic) (A).
  - Fuel pump 23V-858 (A). 2023 Civic VSA modulator 23V-430 (A). 2025 Civic high-pressure fuel pump 24V-763 (A).
- **Evidence:**
  - CR: 2015 more; 2016 avg; 2017 avg; **2018 less** (c23); 2019 avg; 2020 avg; 2021 avg (c23); 2022 more (c23); 2023 more (c23); 2024 avg (c23) (A).
  - iSeeCars 2025: Civic 10.9% (#4 passenger car) (A). iSeeCars 2026: Civic sedan 15.0%, hatch 13.2% (B).
  - J.D. Power 2026 VDS: SlashGear says Civic won compact car, but J.D. Power's release names **Corolla** (see contradiction log).
- **Inspection checklist:**
  - On any 1.5T (especially 2016–2018 from cold states): pull the dipstick — a level above the full mark or a fuel smell means dilution. Check spark-plug and camshaft history and cold-start idle quality.
  - Test the A/C. On 2016–2018, a leaking condenser is covered by SB 19-091 until 10 years from the original purchase.
  - VIN check for 16V-074 (2016 2.0L), 23V-858, 24V-744 (2022+) and **26V-332**.
  - On CVT cars, check for shudder.

### Honda Accord — 9th gen 2015–2017; 10th gen 2018–2022; 11th gen 2023–2025
- **Verdict:**
  - 2016–2017 2.4L → **Strong** (2016 needs SB 16-053 verified).
  - 2015 → Mixed/Strong.
  - 2018–2019 1.5T/2.0T → **Strong−**.
  - 2020–2021 → **Strong**.
  - 2022 → Strong.
  - 2023–2024 1.5T → **Strong**.
- **Best buys:** 2.4L CVT 2017; 1.5T CVT 2020–2021; 1.5T 2023–2024.
- **Caution:** 2015–2016 2.4 CVT (belt-slip product update); 2018–2019 (first-year recall list, AEB probe, anecdotal 10-speed complaints).
- **Known failure points:**
  - **2015–2016 Accord L4 CVT.** A bad learned value lets the belt slip at highway speed (DTC P1890). Product update **SB 16-053**: software, or a new transmission if P1890 is already set ([link](https://static.nhtsa.gov/odi/tsbs/2016/SB-10086143-2280.pdf)) (A).
  - **2018–2020 A/C condenser corrosion leaks.** SB **21-018** extends the condenser to **10 years from purchase, unlimited miles**, and it is still active ([link](https://static.nhtsa.gov/odi/tsbs/2021/MC-10194961-0001.pdf)) (A).
  - **2018–2020 BCM software.** Wipers, defroster, camera or lights can malfunction. Recall **20V-771** (A). Also 18V-629 camera (2018) and 23V-158 buckle (2018–2019) (A).
  - **1.5T oil dilution in the Accord.** Honda's extension **did not include the Accord** (A, from the CR article's scope). CR owner comments on 2018s mention fuel-injector replacement and one head-gasket job (anecdotes, C/D).
  - **2.0T 10-speed.** Only owner anecdotes and D-grade sites allege shudder or failures. No recall, extension or TSB for failures was found. CR 2018 owner comments mention rough downshifts (anecdote) ([CR 2018](https://www.consumerreports.org/cars/honda/accord/2018/reliability/)).
  - **2021 Accord Sport CVT with an improperly hardened pulley.** Product update SB **22-052** covered only 75 Accord + CR-V units ([SB](https://static.nhtsa.gov/odi/tsbs/2022/MC-10227774-0001.pdf), [memo](https://static.nhtsa.gov/odi/tsbs/2022/MC-10227777-0001.pdf)) (A). Minor in population, but check the VIN.
  - **AEB phantom braking.** EA24-002 covers the 2018–2022 Accord (A).
  - **2023–2024 high-pressure fuel pump can crack and leak.** Recall **24V-763**. Also the driver's-seat frame recalls **24V-859 / 26V-054** (A).
  - 2016 and older: battery-sensor fire risk, recall 17V-418 (2013–2016) (A). V6 fuel pump 19V-060 (2015–2017 V6) (A).
- **Evidence:**
  - CR: 2015 avg (c23); 2016 more; 2017 more; 2018 avg; 2019 avg; 2020 more; 2021 **much more**; 2022 avg; 2023 more; 2024 more (A).
  - iSeeCars 2025: Accord 8.8% (#9 passenger car) (A).
- **Hybrid note:** the Accord Hybrid rates **better** for longevity (iSeeCars 2026: 18.5%, #3 passenger car) (B).
- **Inspection checklist:**
  - VIN check for SB 16-053 (2015–2016), 20V-771, 23V-858, 24V-763 (2023+) and **26V-332**.
  - Test the A/C. Condenser leaks on 2018–2020 are covered under SB 21-018.
  - On a 2.0T, drive with cold and warm fluid and feel for 3→2 clunks or shudder. Ask for ATF-change records.
  - On a 1.5T, check the oil level for overfill or fuel smell.
  - Test AEB in traffic for false activations and ask for CMBS software update records.

### Mazda3 — BM/BN 2015–2018; BP 2019–2025
- **Verdict:** 2017–2018 → **Strong**. 2015–2016 → Mixed/Strong. **2019–2021 → Mixed (downgraded)**. 2022 → **Strong** (CR much more). 2023 → avg. 2024 → Strong.
- **Best buys:** 2.0/2.5 Skyactiv NA automatic 2017–2018; 2.5 NA 2022 and 2024.
- **Caution:** 2019–2021 (CR less reliable; false-braking recall); 2014–2016 6-speed manual (hard-shift TSB).
- **Known failure points:**
  - **2019–2020 Mazda3 Smart Brake Support falsely detecting obstacles and braking.** Recall **19V-907** (35,390 units built Sep 25 2018–Oct 23 2019) ([NHTSA report](https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V907-6397.PDF)) (A). The class action *Miyares v. Mazda* (S.D. Fla., 2019) alleges wider SCBS/SBS false activation across 2018–2020 Mazdas ([classaction.org](https://www.classaction.org/news/class-action-alleges-smart-city-brake-support-smart-brake-support-systems-in-2018-2020-mazda-vehicles-are-defective), C).
  - **2019 PCM stall software.** Recall 19V-497 (A).
  - **2014–2016 fuel-tank leaks.** Recalls 15V-621, 16V-684, 16V-685 (A). 2014–2016 parking-brake corrosion 17V-393 (A). 2016–2018 wiper relay 19V-272 (A). 2014–2018 camera 23V-487 (A). Source: [NHTSA 2016 list](https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MAZDA3&modelYear=2016).
  - **2014–2016 6-speed manual hard shifting or popping out of 3rd.** TSBs 05-001/15 and 05-002/17 replace clutch hubs and synchro parts ([TSB](https://static.nhtsa.gov/odi/tsbs/2017/MC-10120354-9999.pdf)) (A).
  - 2018 Mazda3 fuel pump, recall 21V-875 (A).
- **Evidence:**
  - CR: 2015 avg; 2016 avg; 2017 more; 2018 more; **2019 less; 2020 less; 2021 less (c23)**; 2022 **much more**; 2023 avg (c23); 2024 more (A).
  - iSeeCars 2026 reliability ratings list the Mazda3 among the top small cars (7.7–7.9/10) ([iSeeCars ratings](https://www.iseecars.com/most-reliable/most-reliable-sedans), A-methodology but a scoring product; supportive only).
- **Inspection checklist:**
  - VIN check for 19V-907 and 19V-497 (2019–2020) and the fuel-tank recalls (2014–2016).
  - Drive in traffic and under overpasses; note any unexplained AEB events.
  - On a manual, shift aggressively 2–3–4.
  - Check infotainment for reboots (a CR trouble spot).

### Mazda6 — GJ/GL 2015–2021 (major refresh 2018; 2.5T added 2018)
- **Verdict:** **Strong**. Best evidence is for the 2.5 NA in 2015–2016 and 2019–2020.
- **Best buys:** 2.5L NA 6-speed auto 2015–2016 and 2019–2020.
- **Caution:** 2018 first-year refresh (PCM-stall and fuel-pump recalls); 2.5T has limited evidence; 2014–2016 6-speed manual TSB.
- **Known failure points:**
  - 2018–2019 PCM stall 19V-497 (A).
  - 2018 fuel pump impeller 21V-875 (A).
  - 2014–2015 parking-brake corrosion 17V-393 (A).
  - Manual-transmission TSBs as for the Mazda3 (A).
  - CR owner comments cite infotainment reboots (anecdote).
- **Evidence:**
  - CR: 2015 more (c23); 2016 more; 2017 avg; 2018 avg; 2019 more; 2020 more; 2021 avg (A).
  - **CR Used Car Top Pick (under $10k): 2016 Mazda6** ([CR 10 Top Picks](https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/), A).
- **Inspection checklist:**
  - VIN check for 19V-497 and 21V-875.
  - Look for infotainment freezes.
  - On a turbo, ask for oil-change records at ≤5k-mile intervals (a general turbo-GDI precaution, not a sourced defect).

### Lexus ES — XV60 ES 350 2015–2018; XZ10 ES 350 2019–2025 (ES 250 AWD 2021+)
- **Verdict:** ES 350 2015–2019 → **Top pick**. 2020–2021 → **Strong** (CR avg). 2022 → Top/Strong (CR more).
- **Best buys:** ES 350 V6 6-spd (2GR-FE) 2015–2018; ES 350 2GR-FKS 2019 and 2022.
- **Caution:** 2019+ falls within the UA80 allegation (C). ES 250 AWD data is thin.
- **Known failure points:**
  - Fuel pump recalls 20V-012 / 20V-682 on the 2018–2020 ES 350. The **Lexus CSP covers the low-pressure pump to 15 July 2036 / 150k** after the settlement ([CSP](https://static.nhtsa.gov/odi/tsbs/2023/MC-10235219-9999.pdf)) (A).
  - 2019 knee-airbag recall 19V-288 (A).
  - **Vacuum-pump knock at idle** TSB (2019–2023 ES 350, 2018–2023 IS) ([TSB](https://static.nhtsa.gov/odi/tsbs/2023/MC-10247804-9999.pdf)) (A). Minor.
  - 23V-865 OCS (2020–2021 ES 350/ES 250) (A).
- **Evidence:**
  - CR: 2015 more; 2016 more; 2018 more; 2019 more; 2020 avg (c23); 2021 avg; 2022 more (c23) (A).
  - **J.D. Power 2024 VDS midsize premium car winner: 2021 ES** ([JDP 2024](https://www.jdpower.com/cars/ratings/dependability/2024)) (A). The 2022 VDS ranked the 2019 ES #2 midsize premium ([JDP 2022](https://www.businesswire.com/news/home/20220210005117/en/Korean-Auto-Manufacturers-Lead-the-Way-in-Vehicle-Dependability-J.D.-Power-Finds)) (A).
  - iSeeCars 2025: ES 6.5% (2.5× car average) (A). Lexus ranked highest brand in the 2026 VDS (A).
- **Hybrid note:** the ES 300h rates better for longevity (iSeeCars 2025: 7.5% vs 6.5%) (A).
- **Inspection checklist:**
  - VIN check for the fuel pump recall and CSP status, and 23V-865.
  - On 2019+, check 8-speed shift quality.
  - Listen for vacuum-pump knock at idle.
  - Get maintenance records. Lexus CPO is worth considering.

### Lexus IS — XE30 2015–2020 (IS 200t/300 2.0T, IS 250/300 AWD V6, IS 350); facelift 2021–2025
- **Verdict:** **Strong**. The evidence is at model level, not powertrain level: J.D. Power and iSeeCars don't split by engine, and CR is mostly NA.
- **Best buys:** IS 300/350 V6 2021–2023 (J.D. Power award years) and IS 350 2016–2020.
- **Caution:** 2017 IS 200t and 2018–2019 IS 300/350 fuel-pump recalls (confirm closed).
- **Known failure points:**
  - Fuel pump 20V-012/20V-682 (2017 IS 200t; 2018–2019 IS 300/350) with CSP to 2036 (A).
  - Vacuum-pump knock TSB (2018–2023 IS 300/350) (A).
  - Older IS 250/350 dashboard/trim CSP (pre-2014 models, mostly out of scope) ([NHTSA](https://static.nhtsa.gov/odi/tsbs/2019/MC-10153249-9999.pdf)) (A).
- **Evidence:**
  - CR: 2016 avg; 2021 NA (A).
  - **J.D. Power compact premium car winner: 2024 VDS (2021 IS) and 2026 VDS (2023 IS), and the 2026 VDS's top-ranked model overall** (A).
  - iSeeCars 2025: **#1 passenger car, 27.5%** (A). iSeeCars 2026: 17.5% (#4) (B).
- **Inspection checklist:** VIN check for fuel pump/CSP; RWD tire and alignment wear; vacuum-pump noise; maintenance records.

### Acura TLX — UB1-4 2015–2020 (2.4L 8-spd DCT; 3.5L V6 ZF 9-spd); UB5 2021–2025 (2.0T 10AT; Type S 3.0T)
- **Verdict:**
  - 2.4L 2018–2020 → **Strong**.
  - V6 2015 → **Avoid unless the recall work is documented**.
  - V6 2016–2020 → **Mixed**. Buy only with 23V-751 inspection or repair documented.
  - 2021+ → Mixed (CR NA; several recalls).
- **Best buys:** 2.4L 8DCT 2018–2020; V6 2019–2020 with 23V-751 completed.
- **Caution:** 2015 V6 early 9-speed; every 2015–2020 V6 (connecting-rod bearing recall).
- **Known failure points:**
  - **2015–2020 TLX V6 connecting-rod bearings.** A manufacturing error lets the bearing wear and seize, damaging the engine. Recall **23V-751**: inspect, repair or replace the engine ([NHTSA 2015 TLX](https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=TLX&modelYear=2015)) (A).
  - **2015 TLX V6 ZF 9-speed.**
    - Park-pawl recall **14V-779** (transmission replaced if needed) (A).
    - Harness-crimp failsafe-to-neutral recall **16V-640** (about 8,300 cars) ([Acura statement](https://static.nhtsa.gov/odi/rcl/2016/RCSB-16V640-1441.pdf)) (A).
    - SB **15-040**: firm 2–3 upshift; TCM update, then transmission replacement if the problem persists ([SB](https://static.oemdtc.com/NHTSA-PDFs/MC-10179874-0001.pdf)) (A).
    - 2015–16 V6 shift-quality software ([SB](https://static.nhtsa.gov/odi/tsbs/2016/SB-10084004-2280.pdf)) (A).
    - Edmunds' long-term test car showed abrupt low-gear shifts ([Edmunds LT forum](https://forums.edmunds.com/discussion/36786/acura/tlx/transmission-makes-abrupt-upshifts-2015-acura-tlx-sh-awd-long-term-road-test), C).
  - V6 fuel pump 19V-060 (2015–2019 TLX V6) (A). Fuel pump 23V-858 (A).
  - 2021–2023 fuel-tank weld leak **24V-950**; 2021–2025 brake-pedal pivot **25V-391**; OCS **26V-332** (2018–2021, 2023) (A) ([NHTSA 2021 TLX](https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=TLX&modelYear=2021)).
- **Evidence:** CR: 2015 more; 2016 avg; 2017 avg; 2018 avg (c23); 2019 more (c23); 2020 more (c23); 2021 NA (A).
- **Inspection checklist:**
  - **V6: demand proof 23V-751 was inspected or remedied.** Listen for bottom-end knock and check for an oil-pressure warning.
  - VIN check for 14V-779 and 16V-640 (2015), 19V-060, 24V-950 and 25V-391.
  - On the DCT, check low-speed creep for judder.
  - On the 9AT, confirm the latest TCM software.

### Acura ILX (2016–2022) / Integra (2023–2025)
- **Verdict:** ILX 2.4L 8DCT 2016–2022 → **Strong** (longevity evidence, but CR NA). Integra 2023+ 1.5T → **Strong**.
- **Known failure points:**
  - ILX: fuel pump 23V-858 (A).
  - Integra: steering gearbox **24V-744** (2023–2025) and VSA modulator leak **23V-430** (2023) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=INTEGRA&modelYear=2023)) (A); driver's-seat frame 24V-859 / 26V-054 (2024 Integra) (A).
  - Integra's 1.5T shares the Civic engine family. No Integra oil-dilution extension was found.
- **Evidence:**
  - ILX: iSeeCars 2025 **10.6%** (#5 passenger car) (A); iSeeCars 2026 **12.4%** (#8) (B); CR 2016/2019 NA (A).
  - Integra: CR 2023 more (c23) (A).
- **Inspection checklist:** VIN check for 23V-858 / 24V-744 / 23V-430. On the DCT (ILX), check smooth low-speed engagement. On the Integra, check steering effort and self-centering.

### Subaru Impreza — GJ 2015–2016; GT 2017–2023; GU 2024–2025 (hatch only)
- **Verdict:** 2015–2016 → **Mixed**. 2017 → **Mixed**. 2018 → Strong. 2019–2021 → Strong−/avg. 2022–2023 → **Strong**.
- **Best buys:** 2.0L CVT 2018 and 2020–2023. The 2019–2020 CVT carries 10yr/100k coverage.
- **Caution:** 2016–2017 (CR less reliable); 2017–2019 ignition-coil recall.
- **Known failure points:**
  - **2017–2019 Impreza ECM keeps powering the ignition coils after shutoff**, causing shorts and possible stalls. Recalls **19V-743 → 21V-264** replace the coils and, if needed, the front exhaust pipe (A).
  - Low-pressure fuel pump 20V-218 (2019) and 21V-587 (2018–2020) (A) ([NHTSA 2019](https://api.nhtsa.gov/recalls/recallsByVehicle?make=SUBARU&model=IMPREZA&modelYear=2019)).
  - CVT extended to 10yr/100k for 2015 through 2020 (see Cross-cutting #6) (A).
- **Evidence:**
  - CR: 2015 avg (c23); 2016 **less**; 2017 **less**; 2018 more; 2019 avg; 2021 avg; 2023 more (A).
  - J.D. Power 2025 VDS: 2022 Impreza rated at or above the compact-car segment average (per [MoneyTalksNews coverage](https://www.moneytalksnews.com/slideshows/the-most-dependable-cars/), C).
- **Inspection checklist:**
  - VIN check for 21V-264 and the fuel-pump recalls.
  - Confirm CVT extension eligibility (10yr/100k from in-service) through a Subaru dealer's Vehicle Coverage Inquiry.
  - Watch for CVT shudder.
  - Check battery and parasitic draw (a Subaru pattern on other models).

### Subaru Legacy — BN 2015–2019; BW 2020–2025
- **Verdict:** 2015–2019 2.5 → **Mixed/Strong−** (CR avg; CVT covered 10/100). **2020–2021 → Mixed/caution (downgraded).** 2022+ 2.5 → **Strong**.
- **Best buys:** 2.5L CVT 2022–2024; 2.5L 2016–2019.
- **Caution:** 2020–2021 (CVT chain-slip recalls, CR less); 2.4T turbo 2020–2021.
- **Known failure points:**
  - **2020–2021 Legacy/Outback TCU lets the clutch engage before the chain is clamped**, so the chain can slip or break and drive is lost. Recalls **21V-955 → 22V-485**: reprogram, inspect, and replace the CVT if slip damage is found (A). For turbo cars covered by WRK-21, Subaru extended chain-slip coverage to 10yr/100k, **once only** ([Subaru bulletin](https://static.oemdtc.com/NHTSA-PDFs/MC-10216977-0001.pdf)) (A).
  - 2020 brake-pedal bracket bolt 19V-664 (A).
  - 2020 Starlink OTA update wiped the rear camera, recall 20V-766 (A).
  - 2020–2022 ODS sensor 24V-227 (A).
  - Fuel pump 21V-587 (2018–2020) (A) ([NHTSA 2020](https://api.nhtsa.gov/recalls/recallsByVehicle?make=SUBARU&model=LEGACY&modelYear=2020)).
  - Battery-drain settlement covers 2015–2020 (A).
- **Evidence:** CR: 2016 avg (c23); 2018 avg; 2019 avg; **2020 less (c23); 2021 less (c23)**; 2022 more (A).
- **Inspection checklist:**
  - VIN check for 21V-955 / 22V-485 completion and ask for the TCU inspection result.
  - Confirm CVT extension eligibility.
  - Load-test the battery.
  - Check the head unit for freezing (the big-screen system).

### Subaru WRX (brief) — VA 2015–2021 (FA20DIT); VB 2022+ (FA24DIT)
- **Verdict:** **Mixed**, and evidence-limited (CR NA). Modified or abused examples are common.
- **Known failure points:**
  - 2015–2018 WRX CVT covered to 10yr/100k (A).
  - Battery-drain settlement 2015–2020 (A).
  - Fuel pump 21V-587 (2018–2019 WRX) (A).
- **Checklist:** stock-ECU verification (the Subaru warranty excludes tunes), compression/leak-down, clutch slip, and CVT coverage on SPT (CVT) cars.

### Hyundai Elantra — MD/UD 2015–2016; AD 2017–2020; CN7 2021–2025
- **Verdict:**
  - 2015–2016 1.8 → Mixed. 2.0 GDI 2014–2016 → **Mixed** (Engine II 15yr/150k coverage).
  - **2017–2018 → Avoid/Mixed** (CR less; theft).
  - 2019–2020 2.0 MPI → **Mixed** (piston-ring recall; CR 2019 more, 2020 avg).
  - **2021–2024 2.0 → Strong** (2023 avg).
- **Best buys:** 2.0L MPI with IVT, 2022 and 2024. For 2021–2022 cars, confirm the anti-theft software.
- **Known failure points:**
  - **2019–2020 Elantra 2.0L Nu MPI piston oil rings improperly heat-treated.** Leads to oil consumption, possible bearing seizure and fire. Recall **21V-301**: inspect, replace the engine, and add PNSS noise-sensing software ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=hyundai&model=elantra&modelYear=2020)) (A).
  - **Engine II settlement** covers 2014–2016 Elantra 2.0 GDI (A).
  - **Anti-theft**: 2011–2022 Elantra (A).
  - 2017: EPS connector 17V-213, brake booster 17V-063 (A). 2020: ball-joint fasteners 19V-721, lug nuts 19V-720 (A).
- **Evidence:**
  - CR: 2016 avg; **2017 less; 2018 less**; 2019 more (c23); 2020 avg; 2021 more; 2022 more (c23); 2023 avg; 2024 more (c23) (A).
  - J.D. Power 2022 VDS: 2019 Elantra ranked #3 compact car (A).
- **Inspection checklist:**
  - VIN check for 21V-301 and PNSS, Engine II eligibility (2014–2016 GDI), and anti-theft campaign 993 decals.
  - **Powertrain warranty is 5yr/60k for second owners** (A).
  - Check oil level and consumption between changes.
  - Listen for knock or tapping.

### Hyundai Sonata — LF 2015–2019; DN8 2020–2025
- **Verdict:** **2015–2019 2.4/2.0T (Theta II) → Avoid** for most buyers. Exception: KSDS installed **and** lifetime-warranty eligibility confirmed, with the downtime risk accepted. **2020 → Mixed**. **2021–2023 → Mixed/caution** (CR less).
- **Best buys:** 2020 2.5L (CR more), after confirming the 25V-796 fuel-tank recall.
- **Known failure points:**
  - **Theta II connecting-rod-bearing failure** (seizure, stall, fire). Lifetime short-block warranty with KSDS (Cross-cutting #1) (A). CR owners report engine replacements and heavy oil burning on 2015/2016 Sonatas ([CR 2016](https://www.consumerreports.org/cars/hyundai/sonata/2016/reliability/), anecdote).
  - 2015 Sonata early production: caliper fracture 14V-368 (park-it), steering harness 14V-325, 1.6T axle shaft 14V-784 (A). 2015–2016 panoramic-roof panel detachment 16V-726 (A). 2015–2017 turn signal 21V-749 (A).
  - **2020–2023 Sonata fuel-tank check valve.** A damaged valve can let the tank expand and melt against the exhaust. Recall **25V-796** (letters March 2026) ([NHTSA 2020](https://api.nhtsa.gov/recalls/recallsByVehicle?make=HYUNDAI&model=SONATA&modelYear=2020)) (A).
  - Anti-theft: 2011–2019 Sonata (A).
- **Evidence:**
  - CR: **2015 less (c23); 2016 less; 2017 less (c23); 2018 less; 2019 less (c23)**; 2020 more (c23); 2021 less; 2022 less; 2023 less (all c23) (A).
  - J.D. Power **2022 VDS midsize-car winner: 2019 Sonata** (A). See the contradiction log.
  - CR's 2024 list of used cars to avoid included the 2017–2018 Sonata ([The Car Connection](https://www.thecarconnection.com/news/1143629_used-cars-to-avoid-chevy-ford-top-consumer-reports-list) + [TorqueNews](https://www.torquenews.com/14093/used-cars-avoid-warns-consumer-reports), B).
- **Hybrid note:** the 2011–2015 Sonata Hybrid (Theta II MPI) and 2016–2019 Hybrid/PHEV (Nu 2.0 GDI) fall under the Engine II 15/150 coverage (A).
- **Inspection checklist:**
  - VIN check at hyundaiusa.com for KSDS (campaign 953/966) and the lifetime warranty (TXXI). Look for engine-replacement history (and Kia 18V-907-style fuel-pipe checks).
  - Cold-start knock test.
  - Scan for DTC P1326.
  - 2020+: VIN check for 25V-796.
  - Anti-theft decals.

### Kia Forte — YD 2015–2018; BD 2019–2024
- **Verdict:**
  - 2015–2016 → Mixed (2.0 GDI has Engine II coverage).
  - **2017–2018 → Avoid/Mixed** (CR less; 2.0 MPI oil-pump recall).
  - **2019–2024 2.0 MPI/IVT → Strong** (upgraded against the Kia reputation).
  - GT 1.6T → evidence-limited.
- **Best buys:** 2.0L IVT 2020–2022.
- **Known failure points:**
  - **2017–2018 Forte 2.0L Nu MPI.** Foreign particles can stick in the oil pump and damage the engine. Recall **21V-260** (A). Kia's own claim data: 2017–2018 engine-replacement claims 0.15%, 2019–2021 0.02% ([Kia chronology](https://static.nhtsa.gov/odi/rcl/2021/RMISC-21V260-7298.pdf)) (A).
  - Engine II settlement: 2010–2018 Forte (A).
  - 2017–2018 ACU cover can deactivate airbags, recall 22V-031 (A).
  - 2021–2022 steering-column u-joint bolt 22V-304 (A).
  - 2021 OCS 21V-164 (A).
  - Anti-theft: 2011–2021 Forte (A).
- **Evidence:**
  - CR: 2016 avg; **2017 less; 2018 less (c23)**; 2019 NA; 2020 more; 2021 more (c23); 2022 more (A).
  - **J.D. Power 2023 VDS compact-car winner: 2020 Forte** ([JDP 2023](https://www.jdpower.com/cars/ratings/dependability/2023)) (A).
  - J.D. Power 2025 VDS: 2022 Forte rated at or above average (C).
- **Inspection checklist:** VIN check for 21V-260 (2017–18), 22V-304 and anti-theft software; powertrain warranty transfer terms (verify with Kia); oil consumption; IVT behavior.

### Kia Optima (JF 2016–2020) / K5 (DL3 2021–2025)
- **Verdict:** **Optima 2016–2019 2.4/2.0T/1.6T → Avoid** (Theta II on the 2.4/2.0T; CR less every year). 2020 Optima 2.4 → **Mixed** (CR avg; J.D. Power award). **K5 2021–2023 → Mixed/caution** (CR less 2022–2023; transmission recall).
- **Known failure points:**
  - Theta II lifetime settlement (2011–2019 Optima) (A).
  - 2016 Optima 2.4 right driveshaft crack, recall 16V-705 (A).
  - 2016–2018 trunk latch 23V-594 (A).
  - **2021–2023 K5.** The failsafe limited-mobility mode may not engage when the transmission oil pump malfunctions, so drive can be lost. Recall **22V-760**: inspect or replace the transmission and update the TCU (A).
  - 2021–2022 K5 2.5T fuel-pipe leak 21V-519 (A).
  - 2021–2023 curtain airbags 23V-149 (A).
  - **2021–2024 K5 fuel-tank check valve 25V-794** (A) ([NHTSA K5 2021](https://api.nhtsa.gov/recalls/recallsByVehicle?make=KIA&model=K5&modelYear=2021)).
  - Anti-theft: 2011–2020 Optima, 2021–2022 K5 (A).
- **Evidence:**
  - CR: Optima **2016 less (c23), 2017 less (c23), 2018 less, 2019 less**, 2020 avg; K5 2021 NA, **2022 less, 2023 less** (c23) (A).
  - J.D. Power 2023 VDS midsize-car winner: **2020 Optima** (A).
- **Hybrid note:** the Optima Hybrid (2011–2020) is in the Engine II settlement (A).
- **Inspection checklist:** KSDS/lifetime-warranty VIN check (2016–2019), 22V-760 / 25V-794 on K5, anti-theft software, cold-start knock, P1326.

### Nissan Sentra — B17 2015–2019; B18 2020–2025
- **Verdict:** **2015–2017 → Avoid** (CVT; extension expired; CR 2016 less). 2018–2019 → Mixed (CR avg; 84/84 extension nearly or fully expired). 2020–2021 → Mixed. **2022–2024 → Strong−** (CR more). The long-term durability of the CVT is unproven.
- **Known failure points:**
  - **CVT (JATCO) judder, hesitation or failure**, alleged in class actions that ended in settlements with 84-month/84k extensions for 2013–2017 and 2018–2019 (A). A cost of about $3,500+ is quoted only by a warranty-seller blog (D).
  - **2020–2022 Sentra tie rods can bend or break.** Recall **23V-581**, replacing 21V-461 (A) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=SENTRA&modelYear=2020)).
  - 2019–2021 camera harness 23V-628 (A).
- **Evidence:** CR: **2016 less (c23)**; 2018 avg; 2019 avg; 2020 avg; 2021 avg (c23); 2022 more; 2023 more (A).
- **Inspection checklist:** CVT fluid-service records (Nissan NS-2/NS-3), shudder test at 20–45 mph, CVT DTC scan, 23V-581 completion, and a VIN check of CVT coverage.

### Nissan Altima — L33 2015–2018; L34 2019–2025
- **Verdict:**
  - 2015–2016 → **Mixed/Avoid** (CVT; extension expired).
  - 2017–2018 → **Mixed** (CR avg).
  - **2019–2020 → Avoid** (CR less; the **2.0 VC-Turbo** has an engine-bearing recall).
  - **2021–2024 2.5L → Strong (upgraded)** (CR much more reliable 2021 and 2023; avg 2022).
- **Known failure points:**
  - CVT extensions: 2013–2016 and 2017–2018 at 84/84 (A).
  - **2013–2018 Altima secondary hood latch can corrode**, so the hood may open while driving. Recall **20V-315** (plus 16V-029) (A).
  - 2015–2017 rear doors can open when the window is lowered: 17V-040, then 18V-915 (A).
  - **2019–2020 Altima VC-Turbo 2.0 engine bearings** can fail, breaching the block and risking fire. Recall **25V-437** (ECM reprogram; NHTSA PE23-023; letters April 2026) (A).
  - 2019 fuel leaks 18V-922 and 19V-316 (A). 2019–2020 Continental tires 21V-169 (A).
  - Sources: [NHTSA 2019](https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=ALTIMA&modelYear=2019), [2016](https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=ALTIMA&modelYear=2016).
- **Evidence:**
  - CR: 2016 avg (c23); 2017 avg; 2018 avg (c23); **2019 less; 2020 less (c23)**; 2021 **much more** (c23); 2022 avg; 2023 **much more** (A).
  - iSeeCars 2025: Altima 3.5% (1.4× the car average; #15) (A).
  - J.D. Power 2025 VDS: 2022 Altima rated at or above average (C).
- **Inspection checklist:**
  - **Avoid the 2.0 VC-Turbo** unless 25V-437 is done, and even then weigh the risk.
  - CVT service records and a shudder test.
  - Hood-latch recall completion.
  - On 2.5 AWD cars, check the transfer unit for leaks.

### Nissan Maxima — A36 2016–2023
- **Verdict:** **Mixed→Strong**. CR rates 2016 and 2019 more reliable, but notes thin samples. 2016–2018 cars need the ABS-fire recall completed.
- **Known failure points:**
  - **2016–2018 Maxima ABS actuator can leak fluid onto its circuit board**, risking fire (park outside if the ABS light stays on). Recalls **16V-636 → 18V-601 → 19V-807** (A) ([NHTSA 2016](https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=MAXIMA&modelYear=2016)).
  - 2016 fuel-sender o-ring 15V-486 (A). 2016 ABS o-ring 16V-193 (A).
  - CVT: no extension (60/60 only) (A).
- **Evidence:**
  - CR: 2016 more (c23); 2019 more (c23); 2021 NA (A).
  - U.S. News named the 2023 Maxima its "Most Reliable Used Car" of 2026 ([U.S. News](https://cars.usnews.com/cars-trucks/advice/most-reliable-used-cars), C).
- **Checklist:** ABS recall 19V-807 completed, CVT fluid history, a highway pull for CVT slip.

### Infiniti Q50 — V37 2015–2024 (2.0T 2016–2019; 3.0t VR30DDTT 2016–2024; 3.7 V6 2015)
- **Verdict:** **Mixed**. CR rates 2016–2018 more reliable despite a thin sample. Buy 3.0t 2016–2018 only with turbo-extension coverage confirmed, and confirm the DAS and driveshaft recalls.
- **Known failure points:**
  - **3.0t turbocharger bearing internal oil leak** (white smoke, P0106, power loss). **Emission warranty extension to 10yr/120k** for 2016–2018 Q50 (**MY18.5 excluded**) and 2017–2018 Q60 (Feb 2025) ([bulletin](https://static.nhtsa.gov/odi/tsbs/2025/MC-11014069-0001.pdf)) (A). A 2016 car is already near 10 years.
  - **Direct Adaptive Steering (steer-by-wire) start-up error** alters steering response. Recall **16V-430** (2014–2016 software) (A).
  - **2014–2018 RWD driveshaft fatigue.** Recall **24V-470** (A).
  - 2016–2018 2.0T fuel-pump control module software 17V-476 (A). OCS 16V-244 (A).
  - Sources: [NHTSA 2016](https://api.nhtsa.gov/recalls/recallsByVehicle?make=INFINITI&model=Q50&modelYear=2016).
- **Evidence:**
  - CR: 2016 more; 2017 more; 2018 more; 2019/2020 NA (A).
  - J.D. Power 2022 VDS: 2019 Q50 ranked #2 compact premium car (A).
- **Checklist:** VIN check for the turbo extension (P4A05/06), 16V-430 and 24V-470; exhaust smoke on warm restart; scan for P0106; stock-ECU check (the extension excludes tunes).

### Genesis G70 (IK 2019–2025) / G80 (2015–2016 Hyundai Genesis → G80 DH 2017–2020; RG3 2021–2025)
- **Verdict:** **Mixed**. Fire-risk recalls are numerous. CR: G80 2018 less, G70 2020–2021 average, G70 2022 less.
- **Known failure points:**
  - **ABS module short-circuit fire** ("park outside" recalls): **21V-160** (2015–16 Genesis, 2017–20 G80) and **21V-161** (2019–21 G70) (A).
  - **Starter-solenoid water intrusion fire.** Recall **24V-107** (2015–16 Genesis, 2017–19 G80, 2019 G70; park outside) (A).
  - **3.3T left turbo oil feed pipe leak (fire).** Recall **24V-191** (2018–20 G80, 2019–22 G70; supersedes 19V-538) (A).
  - 2019–2023 G70 (2.0T) fuel pump 24V-528 (A).
  - 2021 G80 2.5T fuel tube 21V-208; 2021–23 pretensioner 23V-094; 2021–22 fuel pump 23V-630; **2021–2025 fuel pipe 26V-229** (A).
  - Sources: [NHTSA G70 2019](https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G70&modelYear=2019), [G80 2018](https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G80&modelYear=2018), [G80 2021](https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G80&modelYear=2021).
- **Evidence:**
  - CR: G70 2019 NA, 2020 avg, 2021 avg, **2022 less (c23)**; G80 **2018 less**, 2021 NA (A).
  - Genesis was the highest-ranked brand in the J.D. Power 2022 VDS ([JDP 2022](https://www.jdpower.com/cars/ratings/dependability/2022), A).
- **Checklist:**
  - Complete list of fire recalls closed (21V-160/161, 24V-107, 24V-191).
  - Oil-leak inspection around the turbos on the 3.3T.
  - Genesis warranty transfer terms for second owners (not verified here; confirm with Genesis).

### Mazda MX-5 Miata — ND 2016–2025 (155 hp 2016–2018; 181 hp 2019+; RF 2017+)
- **Verdict:** **2019–2022 → Top pick**. 2016–early 2017 soft top with manual → **Strong, only with the transmission TSB status confirmed**. 2023 → Strong (CR avg).
- **Known failure points:**
  - **2016–2017 MX-5 soft top built before 6 Sep 2016.** Grinding or no 2nd/3rd gear. **Mazda TSB 05-001/17** replaces the transmission with a strengthened unit (serial 6TJ0701679 and later) ([TSB](https://static.oemdtc.com/NHTSA-PDFs/MC-10123441-9999.pdf)) (A). Forum reports of stripped 2nd gear on autocrossed 2016s (D, lead only).
  - 2016–2019 automatic TCM unexpected downshift 19V-072 (A).
  - **2016–2023 airbag SAS software (excess deployment force) 24V-695** (A).
  - 2016 skid plate 19V-496 (A).
  - 2018–2019 MX-5 fuel pump 21V-875 (A).
  - Source: [NHTSA 2016](https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MX-5&modelYear=2016).
- **Evidence:**
  - CR: 2016 more (c23); 2017 avg; 2018 more; 2019 **much more**; 2021 more; 2023 avg (A).
  - **J.D. Power 2022 VDS compact sporty car winner: 2019 MX-5** (A).
  - **CR Used Car Top Pick (sports car): 2021 MX-5** ([Quartz summary of CR June 2026](https://qz.com/best-used-cars-june-2026-consumer-reports), C; CR page [10 Top Picks](https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/), A).
- **Checklist:**
  - Transmission serial or TSB record on 2016–17 manuals.
  - VIN check for 24V-695.
  - Soft-top drains and leaks.
  - Track/autocross history and clutch wear.

### Toyota GR86 / Subaru BRZ (brief) — 1st gen 2015–2020 (FA20); 2nd gen 2022–2025 (FA24)
- **Verdict:** **Mixed**. Fine for street use as far as the evidence shows. Documented oil-pressure drops during track use.
- **Evidence and failure points:**
  - Reported FA24 bearing failures in track or autocross use. Explanations are excess RTV sealant blocking the oil pickup, and oil-pressure drops in sustained right-hand corners ([Road & Track](https://www.roadandtrack.com/news/a44362621/toyota-gr86-subaru-brz-fa24-potential-starvation-issue/), [The Drive](https://www.thedrive.com/news/2022-subaru-brz-owners-instrumented-testing-shows-big-oil-pressure-drops-on-track), [Hagerty](https://www.hagerty.com/media/news/fa24-engine-failures-dont-daunt-the-brz-and-gr86-faithful/), [R&T RTV](https://www.roadandtrack.com/news/a41519858/gr86-brz-excessive-rtv-oil-pickup-update/)) (B).
  - No TSB or recall as of that 2022–2023 reporting. Subaru disputes a defect (B).
  - 2022 recall is only 23V-609, rear turn signals (A).
  - 2018–2019 BRZ/86 fuel pump 21V-587 (A).
  - CR data NA.
- **Checklist:** track history, oil-analysis or pan-drop evidence, 5W-30 vs 5W-40 service history, clutch condition.

### Toyota Yaris — XP130 hatch 2015–2018; Mazda2-based Yaris iA/Yaris sedan 2016–2020 and hatch 2020
- **Verdict:** **Mixed, evidence-limited.** CR NA. Few recalls. Mechanically simple.
- **Recalls:** 2019–2020 Yaris low-pressure fuel pump **21V-617** (A) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=YARIS&modelYear=2019)).
- **Checklist:** VIN recall check; the 2015–2018 hatch uses an older 4-speed auto (this generation detail was not sourced here), so look for flare or slip.

### Honda Fit — GK 2015–2020
- **Verdict:** **2016–2020 → Top pick**. 2015 → **Strong** (first-year recalls).
- **Known failure points:**
  - **2015 Fit.** CVT drive-pulley shaft software recall **15V-574**; ignition-coil stall recall **15V-559**; curtain-airbag grab-handle bracket 15V-697; A-pillar cover 14V-563 (A) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=HONDA&model=FIT&modelYear=2015)).
  - 2018–2020 Fit OCS **26V-332** (A). 2018–2019 Fit fuel pump 20V-314 / 23V-858 (A).
  - **No Fit CVT warranty extension** was found. Honda's CVT-belt extension to 7yr/150k covers the platform-mate **HR-V (2016–2020)** only ([SB 21-047](https://static.nhtsa.gov/odi/tsbs/2021/MC-10191761-0001.pdf), A).
- **Evidence:**
  - CR: 2015 avg; 2016 more; 2017 more; 2018 more; 2019 more; **2020 much more** (A).
  - **CR Used Car Top Pick under $15k: 2020 Fit** ([CR](https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/), A).
- **Checklist:** VIN check for 26V-332 and the fuel pump recalls; CVT shudder; check the dash display (CR owner comments mention a blank gauge display).

### Hyundai Accent — RB 2015–2017; HC 2018–2022
- **Verdict:** 2015–2017 → **Avoid/Mixed**. CR 2016 less, and these cars **cannot take the anti-theft software** (steering lock or ignition protector only). 2018–2022 → **Mixed, evidence-limited** (CR NA; theft software eligible).
- **Recalls:** 2018–2020 trunk latch 21V-619 (A) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=HYUNDAI&model=ACCENT&modelYear=2018)). Anti-theft campaigns 993 and 9A5 (A).
- **Checklist:** anti-theft decal or campaign completion; second-owner 5/60 powertrain terms (A); oil records.

### Kia Rio — UB 2015–2017; YB 2018–2023
- **Verdict:** **Mixed, evidence-limited** (CR NA). Anti-theft applies to 2011–2021.
- **Recalls:** 2018–2019 Rio sedan trunk latch 21V-622 (A); 2021–2022 steering-column bolt 22V-304 (A); 2016–2017 trunk latch 23V-594 (A).
- **Checklist:** anti-theft status; VIN recall check.

### Nissan Versa — N17 sedan 2015–2019 and Versa Note E12 2015–2019; N18 2020–2025
- **Verdict:** **2015–2019 CVT → Avoid** (CVT extensions expired). 2020+ → **Mixed, evidence-limited** (CR NA).
- **Recalls:** 2020 Versa fuel-tank wall thin, **20V-112** (A); 2020–2021 turn-signal bulbs 21V-471 (A) ([NHTSA](https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=VERSA&modelYear=2020)).
- **Checklist:** CVT fluid history; shudder test. A manual-transmission Versa, if available, avoids the CVT risk (a general point, not a sourced defect).

---
## (1) SEGMENT RANKING — best buys in scope (model + years + engine)

The last column is the grade of the weakest load-bearing claim behind the pick.

| # | Model / years / powertrain | One-line rationale | Weakest load-bearing grade |
|---|---|---|---|
| 1 | **Toyota Avalon 3.5 V6, 2016–2022** | CR more / much more reliable every year checked; J.D. Power 2025 top model overall (2022); iSeeCars #2 passenger car in both 2025 and 2026 | A (2026 iSeeCars figure is B) |
| 2 | **Toyota Camry 2.5L, 2019–2024** | CR more reliable every year; J.D. Power midsize winner for 2021, 2022 and 2023 MYs; only UA80 *allegation* outstanding | A (UA80 risk is C) |
| 3 | **Lexus ES 350 V6, 2015–2019** | CR more reliable 2015–2019; J.D. Power #2 midsize premium (2019); fuel-pump CSP runs to 2036 | A |
| 4 | **Toyota Corolla 1.8/2.0, 2018–2022** | CR more / much more reliable; J.D. Power compact winner for 2019, 2021 (hatch), 2022 and 2023 MYs; the 2014–17 CVT campaign doesn't apply | A |
| 5 | **Honda Fit 1.5, 2016–2020** | CR more / much more reliable 2016–2020; CR Used Top Pick; no powertrain extension needed | A |
| 6 | **Toyota Camry 2.5L, 2015–2017** | CR more reliable all three years; low recall count | A |
| 7 | **Mazda MX-5, 2019–2022** | CR much more / more reliable; J.D. Power 2022 compact sporty winner (2019); CR Used Top Pick | A |
| 8 | **Toyota Corolla 1.8, 2015–2017 (campaign JSD done)** | CR more reliable; the CVT campaign fixed a known software wear issue | A |
| 9 | **Lexus ES 350, 2022** (2020–2021 ≈ avg) | CR more reliable 2022; J.D. Power midsize premium winner (2021) | A |
| 10 | **Mazda6 2.5 NA, 2015–2016 & 2019–2020** | CR more reliable in those years; CR Used Top Pick (2016) | A |
| 11 | **Lexus IS (all engines), 2021–2023** | J.D. Power compact premium winner (2021, 2023) and 2026 top model; iSeeCars #1/#4. Evidence is model-level only | A (not powertrain-specific) |
| 12 | **Honda Accord 2.4, 2017 / 1.5T, 2020–2021 & 2023–2024** | CR more / much more reliable; condenser covered under SB 21-018; watch for the open AEB investigation | A |
| 13 | **Honda Civic 2.0 NA, 2019–2021; any 2022–2023** | CR average (10th gen) or more reliable (2022–23); iSeeCars 15.0% (2026); steering recall 24V-744 on 2022+ | A |
| 14 | **Acura ILX 2.4, 2016–2022** | iSeeCars 10.6% and 12.4% (#5 and #8 passenger car); CR sample NA | A / B |
| 15 | **Kia Forte 2.0 IVT, 2020–2022** | CR more reliable 2020–22; J.D. Power compact winner (2020); minus: anti-theft (2020–21) and second-owner warranty terms | A |
| 16 | **Mazda3 2.5 NA, 2017–2018 / 2022 / 2024** | CR more or much more reliable in these years only | A |
| 17 | **Hyundai Elantra 2.0, 2022 & 2024** | CR more reliable; confirm anti-theft software on the 2022 | A |
| 18 | **Acura Integra 1.5T, 2023** | CR more reliable; confirm steering (24V-744) and VSA (23V-430) recalls | A |
| 19 | **Subaru Impreza 2.0, 2018 & 2022–2023** | CR more reliable; CVT covered 10/100 through 2020 MY | A |
| 20 | **Nissan Altima 2.5, 2021 & 2023** | CR much more reliable (upgrade against brand reputation); CVT long-term data still thin; no extension | A (durability caveat is inference) |
| 21 | **Acura TLX 2.4 DCT, 2018–2020** | CR avg / more reliable; the 4-cyl is outside the V6 bearing recall | A |

## (2) AVOID LIST (specific model / years / powertrain)

| Model / years / powertrain | Why | Grade |
|---|---|---|
| Hyundai Sonata 2015–2019, 2.4 GDI / 2.0T (Theta II) | Connecting-rod-bearing failures led to a lifetime short-block settlement; CR less reliable every year. Exception only if KSDS is done and the warranty is verified | A |
| Kia Optima 2016–2019, 2.4 GDI / 2.0T | Same Theta II settlement; CR less reliable 2016–2019 | A |
| Nissan Altima 2019–2020, **2.0 VC-Turbo** (and 2019–2020 overall) | Engine-bearing recall 25V-437 (block breach and fire risk); CR less reliable 2019–2020 | A |
| Nissan Sentra 2015–2017; Versa / Versa Note 2015–2019; Altima 2015–2016 | CVT failures (settlements); 84/84 coverage has expired; CR 2016 Sentra less reliable | A |
| Acura TLX **2015 V6** (and any 2015–2020 V6 without the 23V-751 remedy) | Park-pawl recall, neutral-failsafe recall, 9-speed shift SBs, plus the connecting-rod-bearing engine recall | A |
| Hyundai Elantra 2017–2018 | CR less reliable; no immobilizer (theft) | A |
| Kia Forte 2017–2018 (2.0 MPI) | CR less reliable; oil-pump engine-damage recall 21V-260 | A |
| Hyundai Accent 2015–2017 | CR 2016 less reliable; no immobilizer and not eligible for the anti-theft software | A |
| Kia K5 2021–2023 (caution rather than strict avoid) | CR less reliable 2022–23; transmission oil-pump failsafe recall 22V-760; fuel-tank check-valve recall | A |
| Hyundai Sonata 2021–2023 (caution) | CR less reliable; fuel-tank melt recall 25V-796 | A |
| Subaru Legacy 2020–2021 (caution) | CR less reliable; CVT chain-slip recalls 21V-955 / 22V-485 | A |
| Mazda3 2019–2021 (caution) | CR less reliable three years running; false-braking recall 19V-907 | A |
| Genesis G80 2017–2020 (caution) | CR 2018 less reliable; ABS-module and starter-solenoid fire recalls (park outside); 3.3T oil-line fire recall | A |
| Infiniti Q50 2016–2018 3.0t without verified turbo coverage (caution) | Turbo bearing oil leak; the 10yr/120k extension is running out | A |
| Honda Civic 2016–2018 1.5T from cold-climate states (caution) | Oil dilution; the extension has expired; CR 2018 less reliable | A |
| GR86 / BRZ 2022+ used on track (caution) | Documented oil-pressure drops and bearing failures in track use; no recall or TSB | B |

## (3) REMOVED / DOWNGRADED (good reputation, evidence says otherwise)

- **Honda Civic 1.5T 2016–2018:** Honda's reputation says Top, but the evidence puts it at **Mixed**. Oil dilution needed a nationwide warranty extension (now expired). CR: 2018 less reliable, 2016–17 average. The A/C condenser needed its own 10-year extension (A).
- **Honda Accord 2018–2019:** Downgraded to **Strong−**. CR rates both years average; first-year BCM, camera and buckle recalls; the Accord is inside NHTSA's upgraded AEB engineering analysis (EA24-002); the 1.5T had no oil-dilution coverage (A). Reports of 10-speed failures are anecdotal only (D) and were **not** used to downgrade.
- **Mazda3 2019–2021:** Mazda ranked #2 mass-market brand in the 2025 VDS, but CR rates the 2019, 2020 and 2021 Mazda3 less reliable, and there is the false-braking recall. Downgraded to **Mixed** (A). The 2022 and 2024 recover.
- **Toyota Camry 2018:** Moved from Top to **Strong** because of a first-year recall cluster (engine replacement for oversized pistons, brake-assist vacuum pump twice, fuel pump) and 8-speed drivability TSBs, even though CR rates it "much more reliable" (c23) (A).
- **Toyota Corolla 2023:** **Strong**, not Top. CR average, plus the steering intermediate-shaft recall 24V-878 (A).
- **Lexus ES 2020–2021:** **Strong**. CR average (even though J.D. Power gave the 2021 a segment award) (A).
- **Acura TLX V6 2015–2020:** Acura's reputation doesn't hold here. The connecting-rod-bearing engine recall and the 2015 9-speed recalls/SBs put it at **Mixed / Avoid for 2015** (A).
- **Subaru Legacy 2020–2021 and Impreza 2016–2017:** Downgraded on CR "less reliable" verdicts and, for the Legacy, CVT chain-slip recalls (A).
- **Genesis (the 2022 J.D. Power top brand):** G80 2018 and G70 2022 rated less reliable by CR, plus many fire recalls. **Mixed** (A).
- **Upgraded against brand reputation (for contrast):** Nissan Altima 2.5 2021/2023 (CR much more reliable), Kia Forte 2020–2022 (CR more reliable plus a J.D. Power award), Nissan Maxima 2016/2019 (CR more reliable, thin sample).

## (4) CONTRADICTION LOG

1. **2026 VDS compact-car winner.** J.D. Power's own release lists model awards for Toyota **Corolla**, Camry and Lexus IS, and Autoblog agrees ([Autoblog](https://www.autoblog.com/news/2026-j-d-power-study-reveals-the-most-dependable-cars-and-suvs)). SlashGear says the **Civic** won ([SlashGear](https://www.slashgear.com/2124626/jd-power-most-dependable-midsize-car-of-2026/)). **Resolved: Corolla.** The primary source outranks a single secondary.
2. **2025 VDS compact-car order.** MoneyTalksNews lists "Subaru Impreza, Kia Forte, Toyota Corolla" as if ranked, but J.D. Power's award page names the **Corolla** as winner. The MoneyTalksNews order looks reversed. Only the claim that the Impreza and Forte finished "at or above average" is kept, graded C.
3. **J.D. Power awards to the 2019 Sonata (2022 VDS) and 2020 Optima (2023 VDS) vs. CR "less reliable" and the Theta II history.** VDS surveys original owners over months 12–36, and problems are dominated by infotainment. Bearing failures tend to show up later and at higher mileage. **Resolution:** the documented engine defect and CR's multi-year verdicts outweigh one three-year dependability award. The 2020 Optima is rated Mixed, not Avoid, because CR rates it average and it isn't in the settlement class.
4. **Nissan reputation vs. CR.** CR rates the 2021 and 2023 Altima "much more reliable". The CVT settlements are real but cover 2013–2019 cars. **Resolution:** upgrade the 2.5L 2021–2024 with a durability caveat, since CR's recent-year data is early-life.
5. **Infiniti Q50: CR "more reliable" (2016–2018) vs. Infiniti's own turbo warranty extension for the same years.** Both are true. CR's pages note small samples, and the extension shows a real component defect with a narrow symptom. Rated **Mixed**.
6. **Acura TLX: CR 2015 "more reliable" vs. multiple 9-speed recalls/SBs and the V6 bearing recall.** The CR verdict is current survey data (older cars with fixes applied). The bearing recall (23V-751, 2023) postdates much of the early narrative. The recall evidence governs the V6.
7. **UA80 lawsuit vehicle list.** CarComplaints lists "2017–2024 Camry", but the 2017 Camry (XV50) used a 6-speed. The UA80 arrived with the 2018 XV70. This is probably a coverage or complaint error; **2015–2017 Camrys are not UA80 cars.** The generation detail comes from domain knowledge and is not separately sourced.
8. **iSeeCars 2025 vs. 2026.** Lexus IS fell from 27.5% (#1) to 17.5%; the Civic rose from 10.9% to 15.0%; the passenger-car average moved from 2.6% to 3.4%. Treat these as directional signals, not fixed ranks.
9. **Honda on oil dilution:** Honda called it "extremely rare, especially outside extremely cold weather", while CR heard from owners in CA and TX. Both are reported by CR (A); the warranty extension was nationwide.
10. **Mazda false braking:** the recall (19V-907) covers only 35,390 2019–2020 Mazda3s, while the class action alleges wider 2018–2020 Mazda SCBS/SBS false activation. Only the recall is treated as established fact.
11. **FA24 (GR86/BRZ):** Subaru says the oil-pressure variation is normal in road use, while instrumented owner tests show drops to about 20 psi on track (B). Street use is unresolved; track use is flagged.
12. **CR cached pages (c23) vs. current CR data.** Some verdicts come from a November 2023 snapshot, and later surveys may differ by a notch.

## (5) FALSIFICATION PASS LOG (every Top pick)

| Top pick | Searches / queries run | What was found | Outcome |
|---|---|---|---|
| Toyota Avalon 2016–2022 V6 | NHTSA recall API (2019 Avalon; 2019 Corolla list for 20V-024); Exa: "Lexus ES 350 2016-2021 problems class action engine failure transmission warranty extension recall 2GR-FKS … Avalon"; Exa: Toyota UA80 class action | Airbag ECU 20V-024 (2012–18), 18V-685 (2019); fuel pump 20V-012 / 20V-682; UA80 allegation names 2019–2022 Avalon (C); no engine/transmission recall or extension | **Survives** (check recalls; UA80 is only an allegation) |
| Toyota Camry 2.5 2019–2024 | NHTSA API (2018, 2022); Exa: "A25A-FKS … problems oil consumption water pump TSB"; WebSearch/Exa: UA80 class action; Exa: 2018 Camry shift TSBs | UA80 class action (C); A25A TSBs (water pump 2020, bypass valve, cold milky oil) (A); fuel pump; OCS | **Survives** |
| Toyota Camry 2.5 2015–2017 | CR recall counts (1/2/3); UA80 search (not applicable to the 6AT) | No powertrain recall or extension found | **Survives** |
| Toyota Corolla 2018–2022 | NHTSA API (2019, 2020, 2023); Exa: "Toyota Corolla CVT class action lawsuit … warranty extension" | JSD campaign (2014–2017 only); 18V-901 (2019 hatch early build); 20V-024 airbag ECU; fuel pump 20V-682; 24V-878 (2023–24) | **Survives** (2019 hatch: check 18V-901) |
| Lexus ES 350 2015–2019 | NHTSA API (ES 2019); Exa Lexus/Avalon query; Toyota UA80 search | Fuel pump plus CSP to 2036; knee airbag 19V-288; vacuum-pump knock TSB; UA80 allegation (2019+) | **Survives** |
| Honda Fit 2016–2020 | NHTSA API (2015 Fit); Exa: "Honda Fit 2015-2020 CVT problems judder class action warranty extension …" | 2015 CVT software 15V-574 and coils 15V-559 (so 2015 is excluded from Top); HR-V (not Fit) CVT extension; 26V-332 OCS on 2018–2020 | **Survives for 2016–2020** |
| Mazda MX-5 2019–2022 | NHTSA API (2016 MX-5); Exa: "MX-5 ND 2016 2017 manual transmission failure … service bulletin or class action" | TSB 05-001/17 (2016–17 built before 9/6/2016 only); 19V-072 (automatic, through 2019); 24V-695 airbag software (2016–2023) | **Survives for 2019–2022** |

(Strong-rated but not Top: the Accord was also falsification-checked. Exa "2016 2017 Accord 2.4 CVT judder warranty extension" found SB 16-053, which covers 2015–2016 only (A). That is why 2016 carries a verification caveat and 2017 is preferred.)

## (6) FULL SOURCE LIST (URL — grade)

**Primary: NHTSA recalls API (A)**
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=civic&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=civic&modelYear=2022 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=honda&model=accord&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HONDA&model=ACCORD&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HONDA&model=ACCORD&modelYear=2023 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HONDA&model=FIT&modelYear=2015 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=TLX&modelYear=2015 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=TLX&modelYear=2021 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=ACURA&model=INTEGRA&modelYear=2023 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=camry&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=CAMRY&modelYear=2022 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=corolla&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=COROLLA&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=COROLLA&modelYear=2023 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=toyota&model=avalon&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=LEXUS&model=ES&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=YARIS&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=TOYOTA&model=GR86&modelYear=2022 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=hyundai&model=sonata&modelYear=2015 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HYUNDAI&model=SONATA&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=hyundai&model=elantra&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HYUNDAI&model=ELANTRA&modelYear=2017 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=HYUNDAI&model=ACCENT&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=kia&model=optima&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=KIA&model=K5&modelYear=2021 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=KIA&model=FORTE&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=KIA&model=FORTE&modelYear=2021 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=KIA&model=RIO&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MAZDA3&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MAZDA3&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MAZDA6&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=MAZDA&model=MX-5&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=SUBARU&model=IMPREZA&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=SUBARU&model=LEGACY&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=ALTIMA&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=ALTIMA&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=SENTRA&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=MAXIMA&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=NISSAN&model=VERSA&modelYear=2020 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=INFINITI&model=Q50&modelYear=2015 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=INFINITI&model=Q50&modelYear=2016 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G70&modelYear=2019 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G80&modelYear=2018 — A
- https://api.nhtsa.gov/recalls/recallsByVehicle?make=GENESIS&model=G80&modelYear=2021 — A

**Primary: manufacturer bulletins, recall filings and investigations (A)**
- Honda: https://static.nhtsa.gov/odi/tsbs/2018/MC-10152439-0001.pdf (SB 18-137) — A
- Honda: https://static.nhtsa.gov/odi/tsbs/2020/MC-10180616-0001.pdf (SB 19-091 Civic condenser) — A
- Honda: https://static.nhtsa.gov/odi/tsbs/2021/MC-10194961-0001.pdf (SB 21-018 Accord condenser) — A
- Honda: https://static.oemdtc.com/TSB/MC-10199343-0001.pdf (Accord condenser owner letter) — A
- Honda: https://static.nhtsa.gov/odi/tsbs/2022/MC-10227774-0001.pdf and https://static.nhtsa.gov/odi/tsbs/2022/MC-10227777-0001.pdf (SB 22-052) — A
- Honda: https://static.nhtsa.gov/odi/tsbs/2016/SB-10086143-2280.pdf (SB 16-053 Accord CVT) — A
- Honda: https://static.nhtsa.gov/odi/tsbs/2021/MC-10191761-0001.pdf (SB 21-047 HR-V CVT) — A
- Honda: https://hondanews.com/en-US/releases/statement-by-american-honda-regarding-cvt-drive-pulley-shaft-recall-2014-2015-civic-and-2015-honda-fit?query=recall — A
- Acura: https://static.nhtsa.gov/odi/rcl/2016/RCSB-16V640-1441.pdf — A
- Acura: https://static.oemdtc.com/NHTSA-PDFs/MC-10179874-0001.pdf (SB 15-040) — A
- Acura: https://static.nhtsa.gov/odi/tsbs/2016/SB-10084004-2280.pdf — A
- NHTSA investigations: https://static.nhtsa.gov/odi/inv/2024/INOA-EA24002-11766P1.pdf ; https://static.nhtsa.gov/odi/inv/2022/INOA-PE22003-5540.PDF — A
- Toyota: https://static.nhtsa.gov/odi/tsbs/2017/MC-10140595-9999.pdf (T-SB-0330-17) — A
- Toyota: https://static.nhtsa.gov/odi/tsbs/2020/MC-10185789-9999.pdf (T-SB-0010-18) — A
- Toyota: https://static.nhtsa.gov/odi/tsbs/2020/MC-10173797-9999.pdf (T-SB-0152-19) — A
- Toyota: https://static.nhtsa.gov/odi/tsbs/2020/MC-10176705-9999.pdf (A25A water pump) — A
- Toyota: https://static.oemdtc.com/NHTSA-PDFs/MC-11020668-0001.pdf (coolant bypass valve) — A
- Toyota: https://oemdtc.com/tsb/10252251/ (cold short-trip milky oil) — A (TSB text via third-party host)
- Toyota: https://static.oemdtc.com/Recall/18V200/RMISC-18V200-0702.pdf ; https://static.nhtsa.gov/odi/rcl/2018/RCRIT-18V200-3143.pdf — A
- Toyota: https://static.oemdtc.com/Recall/18V901/RMISC-18V901-3864.pdf — A
- Toyota: https://static.nhtsa.gov/odi/tsbs/2018/MC-10145732-9999.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-10152128-9999.pdf (JSD/J0D) — A
- Toyota: https://static.nhtsa.gov/odi/rcl/2020/RCAK-20V682-2302.pdf ; https://static.nhtsa.gov/odi/rcl/2020/RCMN-20V012-0097.pdf — A
- Lexus: https://static.nhtsa.gov/odi/tsbs/2023/MC-10235219-9999.pdf (fuel pump CSP) — A
- Lexus: https://static.nhtsa.gov/odi/tsbs/2023/MC-10247804-9999.pdf (vacuum pump) — A
- Lexus: https://static.nhtsa.gov/odi/tsbs/2019/MC-10153249-9999.pdf (dash CSP) — A
- Mazda: https://static.nhtsa.gov/odi/rcl/2019/RCLRPT-19V907-6397.PDF — A
- Mazda: https://static.oemdtc.com/NHTSA-PDFs/MC-10123441-9999.pdf (TSB 05-001/17 MX-5) — A
- Mazda: https://static.nhtsa.gov/odi/tsbs/2017/MC-10120354-9999.pdf and https://static.nhtsa.gov/odi/tsbs/2015/SB-10100794-2532.pdf (6MT TSBs) — A
- Subaru: https://static.nhtsa.gov/odi/tsbs/2017/MC-10117538-9999.pdf ; https://static.nhtsa.gov/odi/tsbs/2018/MC-10146475-9999.pdf ; https://static.nhtsa.gov/odi/tsbs/2025/MC-11021247-0001.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-10216977-0001.pdf — A
- Subaru: https://www.subarubatterysettlement.com/ (settlement notice) — A
- Nissan: https://static.nhtsa.gov/odi/tsbs/2020/MC-10176204-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10246457-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2022/MC-10229597-0001.pdf ; https://assets.bbbprograms.org/docs/default-source/arbitration-under-class-action-settlements/martinez-cvt-rules.pdf ; https://bbbprograms.org/programs/dr/class-action/nissan-cvt ; https://storage.courtlistener.com/recap/gov.uscourts.tnmd.76250/gov.uscourts.tnmd.76250.103.0_2.pdf — A
- Infiniti: https://static.nhtsa.gov/odi/tsbs/2025/MC-11014069-0001.pdf (turbo extension) ; https://static.nhtsa.gov/odi/tsbs/2017/MC-10127460-9999.pdf — A
- Kia: https://static.nhtsa.gov/odi/rcl/2021/RMISC-21V260-7298.pdf ; https://static.nhtsa.gov/odi/rcl/2021/RCAK-21V259-3410.pdf ; https://static.nhtsa.gov/odi/rcl/2021/RMISC-21V259-3079.pdf — A
- Hyundai/Kia settlements: https://www.kiaenginesettlement.com/Content/Documents/Order%20Granting%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf ; https://www.kiaenginesettlement.com/Content/Documents/Notice.pdf ; https://storage.courtlistener.com/recap/gov.uscourts.cacd.731359/gov.uscourts.cacd.731359.94.8.pdf ; https://static.oemdtc.com/NHTSA-PDFs/MC-10178174-0001.pdf ; https://static.nhtsa.gov/odi/tsbs/2023/MC-10240082-0001.pdf ; https://autoservice.hyundaiusa.com/TXXM ; https://www.kiamedia.com/us/en/media/pressreleases/19400/kia-america-and-hyundai-motor-america-resolve-engine-litigation ; https://www.prnewswire.com/news-releases/hyundai-motor-america-and-kia-motors-america-resolve-engine-litigation-300937047.html — A
- Hyundai/Kia theft: https://www.hyundaitheftsettlement.com/ ; https://static.nhtsa.gov/odi/tsbs/2024/MC-10251282-0001.pdf ; https://angeion-public.s3.amazonaws.com/www.kiatheftsettlement.com/docs/Order%20Regarding%20Motion%20for%20Final%20Approval%20of%20Class%20Action%20Settlement.pdf ; https://storage.courtlistener.com/recap/gov.uscourts.cacd.871294/gov.uscourts.cacd.871294.376.0.pdf ; https://storage.courtlistener.com/recap/gov.uscourts.cacd.871294/gov.uscourts.cacd.871294.166.2.pdf — A
- Hyundai warranty: https://www.hyundaiusa.com/us/en/assurance/america-best-warranty ; https://www.hyundaiusa.com/content/dam/hyundai/us/com/pdf/assurance/2026%5Fowners%5Fhandbook%5Fwarranty.pdf — A

**Primary: J.D. Power (A)**
- https://www.jdpower.com/business/press-releases/2026-us-vehicle-dependability-study-vds/ — A
- https://www.jdpower.com/business/press-releases/2025-us-vehicle-dependability-study-vds/ — A
- https://www.jdpower.com/cars/ratings/dependability/2025 — A
- https://www.jdpower.com/cars/ratings/dependability/2024 — A
- https://www.jdpower.com/cars/ratings/dependability/2023 — A
- https://www.jdpower.com/cars/ratings/dependability/2022 — A
- https://www.businesswire.com/news/home/20220210005117/en/Korean-Auto-Manufacturers-Lead-the-Way-in-Vehicle-Dependability-J.D.-Power-Finds (J.D. Power 2022 release) — A

**Primary: Consumer Reports (A).** Model-year reliability pages have the form `https://www.consumerreports.org/cars/<make>/<model>/<year>/reliability/`. Those read:
- Toyota: Camry 2015–2024; Corolla 2015–2024; Avalon 2015, 2016, 2018–2022.
- Honda: Civic 2015–2024; Accord 2015–2024; Fit 2015–2020.
- Mazda: Mazda3 (slug `mazda/3`) 2015–2024; Mazda6 (`mazda/6`) 2015–2021; MX-5 (`mazda/mx-5-miata`) 2016–2019, 2021, 2023.
- Lexus: ES 2015, 2016, 2018–2022; IS 2016, 2021.
- Acura: TLX 2015–2021; ILX 2016, 2019; Integra 2023.
- Subaru: Impreza 2015–2019, 2021, 2023; Legacy 2016, 2018–2022; WRX 2018, 2022; BRZ 2017, 2022.
- Hyundai: Elantra 2016–2024; Sonata 2015–2023; Accent 2016, 2018, 2021.
- Kia: Forte 2016–2022; Optima 2016–2020; K5 2021–2023; Rio 2016, 2018, 2021.
- Nissan: Altima 2016–2023; Sentra 2016, 2018–2023; Versa 2016, 2020; Maxima 2016, 2019, 2021.
- Infiniti: Q50 2016–2020.
- Genesis: G70 2019–2022; G80 2018, 2021.
- Toyota Yaris 2016, 2019.

Other CR pages:
- https://www.consumerreports.org/car-recalls-defects/honda-extends-warranty-on-troubled-turbo-engines — A
- https://www.consumerreports.org/car-repair-maintenance/honda-cr-v-affected-by-engine-trouble/ — A
- https://www.consumerreports.org/cars/best-used-cars-10-top-picks-a8027733372/ — A
- https://www.consumerreports.org/cars/best-used-cars-for-you-a1080373778/ (lists render dynamically and weren't captured) — A
- https://www.consumerreports.org/cars/used-cars-to-avoid-buying-a4034931071/ (list not captured) — A

**Primary: iSeeCars (A)**
- https://www.iseecars.com/longest-lasting-cars-study (2025 data as crawled) — A
- https://www.iseecars.com/most-reliable/most-reliable-sedans — A (scoring product; supportive only)
- https://www.iseecars.com/car-lifespan-study (older) — A

**Secondary**
- https://www.roadandtrack.com/news/a73741744/20-longest-lasting-cars-trucks-suvs-2026/ — B (with AutoGuide/TFLcar)
- https://www.autoguide.com/auto/top-10/top-10-longest-lasting-cars-sedans-and-hatchbacks-you-can-keep-44638780 — B
- https://tflcar.com/2026/09/vehicles-most-likely-to-make-250000-miles-study/ — B
- https://www.autoblog.com/features/longest-lasting-toyota-sedan-isnt-the-camry-or-corolla — C (not fetched; snippet only)
- https://www.autoblog.com/news/2026-j-d-power-study-reveals-the-most-dependable-cars-and-suvs — B
- https://www.slashgear.com/2124626/jd-power-most-dependable-midsize-car-of-2026/ — C (contains an error)
- https://www.slashgear.com/2079253/toyota-eight-speed-transmission-class-action-lawsuit/ — C
- https://www.autoblog.com/news/toyota-transmission-lawsuit-new-jersey — C (lawsuit existence B jointly)
- https://www.caranddriver.com/news/a60526893/nhtsa-honda-accord-cr-v-emergency-braking-investigation/ — B
- https://arstechnica.com/cars/2024/04/feds-expand-investigation-into-hondas-automatic-emergency-braking-system/ — B
- https://www.wardsauto.com/news/archive-wards-honda-extends-warranty-to-address-1-5l-gas-oil-dilution-problem/793295/ — B
- https://news.bloomberglaw.com/litigation/hondas-win-upheld-in-civic-air-conditioning-class-action-suit — C
- https://www.roadandtrack.com/news/a44362621/toyota-gr86-subaru-brz-fa24-potential-starvation-issue/ — B
- https://www.thedrive.com/news/2022-subaru-brz-owners-instrumented-testing-shows-big-oil-pressure-drops-on-track — B
- https://www.hagerty.com/media/news/fa24-engine-failures-dont-daunt-the-brz-and-gr86-faithful/ — B
- https://www.roadandtrack.com/news/a41519858/gr86-brz-excessive-rtv-oil-pickup-update/ — B
- https://forums.edmunds.com/discussion/36786/acura/tlx/transmission-makes-abrupt-upshifts-2015-acura-tlx-sh-awd-long-term-road-test — C
- https://www.thecarconnection.com/news/1143629_used-cars-to-avoid-chevy-ford-top-consumer-reports-list — B (with TorqueNews)
- https://www.torquenews.com/14093/used-cars-avoid-warns-consumer-reports — C
- https://www.moneytalksnews.com/slideshows/the-most-dependable-cars/ — C (ordering unreliable)
- https://qz.com/best-used-cars-june-2026-consumer-reports — C
- https://dealerbar.com/2026/04/03/10-best-used-cars-for-2026-according-to-consumer-reports/ — D/C (dealer blog summarizing CR)
- https://cars.usnews.com/cars-trucks/advice/most-reliable-used-cars — C
- https://www.classaction.org/news/class-action-alleges-smart-city-brake-support-smart-brake-support-systems-in-2018-2020-mazda-vehicles-are-defective — C (allegation)
- https://www.courthousenews.com/wp-content/uploads/2019/12/Mazda-Brakes.pdf — C (complaint)
- https://www.classaction.org/media/feng-v-toyota-motor-north-america-inc-et-al.pdf — C (complaint)

**Leads only (D)**
- https://www.carcomplaints.com/news/2025/toyota-ua80-transmission-problems.shtml — D
- https://www.carcomplaints.com/news/2019/honda-civic-cr-v-oil-dilution-warranties-extended.shtml — D
- https://m.carcomplaints.com/news/2024/hyundai-and-kia-theft-settlement-final.shtml — D
- https://m.carcomplaints.com/news/2022/nissan-cvt-lawsuit-settlement.shtml — D
- https://www.endurancewarranty.com/vehicle-guides/nissan/unreliable-vehicles-to-avoid-nissan-altima/ — D (the only CVT repair-cost figure, about $3,500)
- https://idycar.com/reviews/honda/common-10-speed-automatic-transmission-problems-in-honda-accord-2018-2022 — D (not used)
- https://transmissionaudit.com/cars/honda/accord-2018-2022/ — D (pointed to SB 22-052, which was verified at A)
- https://forum.miata.net/vb/showthread.php?t=610318 — D
- https://www.gr86.org/threads/2022-fa24-brz-gr86-oil-retention-baffle-development.7126/ — D

## Coverage gaps / not verified
- CR's "best used cars" and "used cars to avoid" **lists** render dynamically and couldn't be read, so CR evidence rests on model-year pages.
- Kia and Genesis second-owner powertrain transfer terms were not verified.
- The Toyota-brand Denso fuel-pump CSP end date was not separately confirmed (the Lexus CSP runs to 15 July 2036).
- Current status of NHTSA EA24-002 (Honda AEB) as of 2026 is unknown.
- Repair-cost figures were rarely available at A/B grade. Most "typical cost" fields are therefore left out.
- Yaris, Rio, Accent (2018+), Versa (2020+), ILX and WRX have no CR model-year verdicts (NA), so their verdicts are evidence-limited.
