---
description: Curik curriculum development tool dispatcher
---

# /curik

Dispatch to the Curik curriculum development tool. Parse the argument
after `/curik` and call the matching MCP tool from the table below.

If `/curik` is called with **no arguments**, display this help listing
to the user and stop — do not execute any tool.

## Available commands

| Command | Description | MCP call |
|---------|-------------|----------|
| `/curik status` | Show current project phase, open issues, active plans | `tool_get_course_status(path=".")` |
| `/curik spec` | Display the current course specification | `tool_get_spec(path=".")` |
| `/curik phase` | Show the current development phase | `tool_get_phase(path=".")` |
| `/curik validate <path>` | Validate a lesson file | `tool_validate_lesson(lesson_path=<path>)` |
| `/curik agents` | List available curriculum agents | `list_agents()` |
| `/curik skills` | List available curriculum skills | `list_skills()` |
| `/curik refs` | List available reference documents | `list_references()` |
| `/curik publish` | Run publish check, fix issues, and push | See **Publish workflow** below |
| `/curik publish check` | Quick readiness check (no push) | `tool_check_publish_ready()` |
| `/curik publish guide` | Show full publishing setup guide | `tool_get_publish_guide()` |

Pass any remaining text after the subcommand as the argument to the
tool (e.g., `/curik validate content/01-intro/01-hello.md`).

## Publish workflow

When the user runs `/curik publish`, execute these steps in order:

1. **Run readiness check**: Call `tool_check_publish_ready()`.
2. **Fix what you can**: If any checks fail:
   - Missing `course.yml` fields → fill them in with `tool_update_course_yml()`,
     using your best inference from the course content. Present the values to
     the user with `AskUserQuestion` for confirmation.
   - Missing `.gitignore` or workflow → run `tool_init_course()`.
   - Wrong `baseURL` → run `tool_hugo_setup()`.
   - Hugo build fails → investigate and fix the build errors.
3. **Re-check**: Run `tool_check_publish_ready()` again to confirm all green.
4. **Bump version**: Call `tool_bump_curriculum_version()` to update the
   curriculum version in `hugo.toml`. This uses the format `0.YYYYMMDD.revision`.
5. **Commit**: Stage and commit all changes including the version bump.
6. **Push**: Run `git push` to deploy. The GitHub Actions workflow handles
   the rest (build + deploy to GitHub Pages).
7. **Report**: Show the user the target URL, the new version number, and
   remind them to check the post-publish checklist from `tool_get_publish_guide()`.

If a check fails that you cannot fix (e.g., no content, GitHub Pages not
enabled), use `AskUserQuestion` to tell the user what's needed.

## General guidance

Call `list_agents()` and load the `start-curik` agent definition to begin
the curriculum development workflow.
