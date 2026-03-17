# Curik Course Specification

## Course Concept
## Course Concept

**Title:** League Curriculum Index
**Type:** Curriculum portal / course catalog (single-page index site)
**Organization:** The League of Amazing Programmers

A branded landing page that lists all available League courses organized by track, with links to each course's dedicated site or repository. Not a traditional course — purely a navigation/discovery tool.

**Audience:** Students, instructors, and administrators seeking League courses.

### Course Categories
1. Python — 3 courses
2. Microcontrollers and Robotics — 2 courses
3. Web — 1 course
4. Java — 6 levels (Levels 0–5)
5. In Development — 3 courses

### Per-Entry Information
- Course title (linked to external site/repo)
- One-line description

### Footer
Attribution to the Itzkowitz Family Foundation.

## Course Concept: League Curriculum Index

**Type:** Curriculum portal / course catalog (single-page index site)

**Purpose:** A branded landing page for the League of Amazing Programmers that lists all available courses, organized by track, with links out to each course's dedicated site/repository.

**Audience:** Students, instructors, and administrators looking to find and navigate to League courses.

### Course Categories (in order)

1. **Python** — Intro to Python, Python Apprentice, Python Games
2. **Microcontrollers and Robotics** — Hour of Micro:bit, Motors Clinic
3. **Web** — Github Pages Portfolio
4. **Java** — Levels 0–5 (with future Levels 6–9 planned)
5. **In Development** — Microbit Robot Rally, OrbitLab, Arcade Games

### Information Per Course Entry

- Title (linked to external course site/repo)
- One-line description

This is intentionally minimal. The structure will evolve as more sites are brought into the system.

### What This Is NOT

- Not a traditional multi-lesson course
- No how-to guides (those may live elsewhere later)
- No modules or lessons within this site — it's purely a catalog/index

### Technical Approach

- Hugo static site using the curriculum-hugo-theme
- Single content page (or minimal page set) with course listings
- Hosted via GitHub Pages

## Pedagogical Model
## Pedagogical Model: N/A — Catalog Site

This project is a curriculum index/portal, not an instructional course. There is no pedagogical model to define.

- **No lessons, modules, or assessments** within this site
- **No learning objectives** — the site's purpose is navigation, not instruction
- **Individual courses** linked from this catalog have their own pedagogical models defined in their respective repositories

The "pedagogy" of this site is information architecture: organizing courses into intuitive categories so users can quickly find what they need.

## Research Summary
## Research Summary

Inventoried all existing course content from the sequestered Sphinx site (`_old/`). The League currently offers:

- **15 courses/levels** across 5 tracks (Python, Microcontrollers, Web, Java, In Development)
- **Java** is the largest track with 6 published levels (0–5) and 4 more planned (6–9)
- **Python** has 3 courses spanning beginner to intermediate
- All courses are hosted externally on GitHub Pages or as GitHub repositories under the `league-curriculum` and `league-java` organizations

No external research was needed — the catalog content is fully defined by the League's existing course inventory. See research finding #001 for the complete course inventory with URLs and descriptions.

## Alignment Decision
## Alignment: N/A — Catalog Site

This project is a curriculum index/portal. Standards alignment is handled by individual course repositories, not the catalog site. No alignment mapping is needed here.

## Course Structure Outline
## Course Structure Outline

This is a single-page catalog site. The structure is:

```
content/
  _index.md          # Home page with all course listings
```

The home page contains:
1. Header/branding
2. Python section (3 course links)
3. Microcontrollers and Robotics section (2 course links)
4. Web section (1 course link)
5. Java section (6 level links)
6. In Development section (3 course links)
7. Footer with funding attribution

## Assessment Plan
## Assessment Plan

N/A — This is a catalog/portal site with no instructional content and no assessments.

## Technical Decisions
## Technical Decisions

- **Static site generator:** Hugo
- **Theme:** curriculum-hugo-theme (managed by Curik)
- **Hosting:** GitHub Pages via GitHub Actions
- **Content structure:** Single index page with course listings organized by category
- **No modules or lessons** — all course content lives in external repositories
- **Migrating from:** Sphinx (MyST Markdown) site, sequestered to `_old/`
