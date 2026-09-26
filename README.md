# Reliable Cars 2015–2025

A used-car reliability report for US buyers covering sedans and compacts, SUVs and crossovers, and pickup trucks from model years 2015–2025. Hybrids and EVs are out of scope as a category.

Every model is rated at the level of **model year and engine**, not brand. Every claim carries an evidence grade:

- **A:** primary source (NHTSA recall or investigation, manufacturer bulletin, court record, the survey publisher's own page)
- **B:** two or more independent quality outlets agree
- **C:** a single secondary source or a class-action allegation
- **D:** leads only

## Contents

| Path | What it is |
|---|---|
| `index.html` | The report page (published as a private claude.ai artifact) |
| `data/*.js` | The ratings, picks, avoid list, defects table and survey data the page renders |
| `research/*.md` | Full research notes from seven parallel research passes, with every source and grade |

## Research notes

1. `01-survey-data.md`: J.D. Power VDS 2018–2026, Consumer Reports brand rankings and used-car lists, iSeeCars longevity, RepairPal
2. `02-systemic-defects.md`: cross-model engine, transmission and safety defects, warranty extensions and their status as of September 2026, buyer tools
3. `03-sedans-jp-kr.md`: Japanese and Korean sedans and small cars
4. `04-sedans-dom-eu.md`: domestic, European and luxury sedans
5. `05-suv-compact.md`: compact and subcompact SUVs
6. `06-suv-mid-large.md`: midsize, three-row and full-size SUVs
7. `07-trucks.md`: midsize, full-size and heavy-duty pickups

Research date: September 26, 2026. Recall status changes often, so run any VIN at [nhtsa.gov/recalls](https://www.nhtsa.gov/recalls) and the manufacturer's site before buying.

## Viewing locally

Open `index.html` in a browser. It loads the files in `data/` with relative paths, so keep the folder structure intact.
