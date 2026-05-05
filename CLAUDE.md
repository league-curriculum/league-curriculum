<!-- CURIK:START -->
# Curik Curriculum Project

This repository is a Curik-managed curriculum project for the League of Amazing Programmers.

## Before You Do Anything

1. Run `curik status` to determine where this project stands.
2. Run `curik phase get` to understand the current phase and what gates must be met to advance.
3. Follow the process guide's instructions for the current phase.

Do not write curriculum content, modify course structure, scaffold files, or make any substantive changes without first checking the current phase via the CLI.

## Hugo Theme

The Hugo theme lives at `site/themes/curriculum-hugo-theme/` in this repo. Curik
copies it there during scaffolding. Do not modify it — changes go upstream
in the curik package. Hugo finds it automatically via `theme = "curriculum-hugo-theme"`
in `site/hugo.toml`.

## Rules

- **Use the AskUserQuestion tool for all questions**: When you need input, a decision, or approval from the stakeholder, ALWAYS use the `AskUserQuestion` tool. Do NOT pose questions in plain text output — users working in IDEs often miss text-only questions. The AskUserQuestion tool renders a visible UI prompt that the user can respond to. This applies to design decisions, approval gates, clarifications, and any time you need the stakeholder to choose or confirm something.
- **CLI-first**: For any operation that Curik has a command for (creating issues, managing change plans, scaffolding, validation, syllabus operations), use `curik <command>` via Bash. Do not perform these operations by directly editing files.
- **Agent boundaries**: When you load an agent definition via `get_agent()`, respect its boundaries. The Curriculum Architect does not write lesson content. The Lesson Author does not modify course structure.
- **Skills are workflows**: When you load a skill via `get_skill()`, follow its steps in order. Do not skip steps.
- **Gates are gates**: When `curik phase advance` fails, do not work around it. Address the unmet conditions.
- **Designer approval**: Change plans, outlines, and phase transitions require designer approval. Do not self-approve.
- **Theme is read-only**: Do not edit files in `themes/`. The theme is managed by the curik package.
- **No TBDs in course.yml**: After scaffolding, fill in all `course.yml` fields using `curik config update`. Infer values from the spec and content, then present to the designer for review. Never leave TBD values — ask the designer if you cannot determine a field.

## Available Commands

### Status and Phase
- `curik status` — current project state (phase, open issues, active plans)
- `curik phase get` — current phase and gate conditions
- `curik phase advance <target>` — gated phase transition
- `curik phase advance-sub` — advance to next Phase 1 sub-phase

### Spec Management
- `curik spec get` — read the course specification
- `curik spec update <section>` — update a named spec section
- `curik spec record-concept` — record Phase 1a output
- `curik spec record-model` — record Phase 1b output
- `curik spec record-alignment` — record Phase 1d output

### Course Configuration
- `curik config update <json>` — update fields in course.yml

### Scaffolding
- `curik scaffold structure <json>` — create Hugo content/ directory tree and lesson stubs
- `curik scaffold lesson <module> <lesson> --tier <n>` — create a single lesson stub
- `curik scaffold outline <name>` — create an outline document
- `curik scaffold approve-outline <name>` — mark an outline as approved
- `curik scaffold get-outline <name>` — read an outline document
- `curik scaffold change-plan <title> <items-json>` — create a numbered change plan

### Issues and Change Plans
- `curik issue create <title>` — create a numbered issue
- `curik issue list` — list open issues
- `curik plan create <title> <issue-numbers-json>` — create a change plan
- `curik plan register <n>` — register an agent-written change plan
- `curik plan approve <n>` — approve a change plan
- `curik plan execute <n>` — mark a change plan as executed
- `curik plan review <n>` — review a change plan
- `curik plan close <n>` — close a change plan and move issues to done

### Validation
- `curik validate lesson <path>` — validate a single lesson file
- `curik validate module <path>` — validate a module directory
- `curik validate course` — validate the entire course
- `curik validate get-report` — read the last saved validation report

### Syllabus
- `curik syllabus write-url <uid> <url>` — update the URL for a lesson entry
- `curik syllabus validate` — check syllabus entries against Hugo content pages

### Hugo Site
- `curik hugo pages` — list all content pages
- `curik hugo create-page <path> <title>` — create a new content page
- `curik hugo update-frontmatter <path> <json>` — update page frontmatter
- `curik hugo setup` — generate hugo.toml and copy the curriculum theme
- `curik hugo bump-version` — bump the curriculum version in hugo.toml
- `curik hugo build` — build the Hugo site

### README Generation
- `curik readme generate` — generate README files from lesson shortcode guards

### Publishing
- `curik publish guide` — full publishing guide with pre/post checklists
- `curik publish check` — quick publish readiness check
<!-- CURIK:END -->
