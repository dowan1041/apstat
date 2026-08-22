# Repo-specific instructions

## Git commits

Do NOT add a `Co-Authored-By: Claude` trailer to commit messages in this repo.
This repo is connected to Vercel, and Vercel's "Git author must have access to
the project" deployment check fails when a commit lists a co-author (like
Claude via `noreply@anthropic.com`) that isn't a member of the Vercel project.
