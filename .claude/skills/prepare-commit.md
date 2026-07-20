# Prepare Commit

Prepare the working tree for a clean commit. Run every step in order — stop and fix issues before moving on.

## Step 1 — Guard the dev token

Read `dev/main.tsx` and find the `token=` prop on the `<EliteaAssistant` component.

- If the value is **not** exactly `"user-token"` (i.e. it contains a real JWT or any other secret):
  1. Remember the current token value.
  2. Replace the token prop line so it reads `token="user-token"` (remove any commented-out duplicate line above/below if present).
  3. Run `git stash push -m "dev-token" -- dev/main.tsx` to stash **only** that file's change so the real token is preserved in the stash.
  4. Set a flag that the stash needs to be popped at the end.
- If the value is already `"user-token"`, do nothing — no stash needed.

## Step 2 — Lint

Run `npm run lint` in the project root.

- If there are errors, run `npm run lint:fix` and re-check.
- If auto-fix did not resolve all errors, fix the remaining issues manually by editing the source files, then re-run `npm run lint` to confirm zero errors.

## Step 3 — Format

Run `npm run format:check` in the project root.

- If there are unformatted files, run `npm run format` and re-check.
- If formatting did not resolve all issues, investigate and fix manually, then re-run `npm run format:check` to confirm.

## Step 4 — Build

Run `npm run build` in the project root.

- If the build fails, read the error output, fix the source files, and re-run `npm run build`.
- Repeat until the build succeeds.

Do **not** stage or commit the `dist/` output — it is already gitignored or handled separately.

## Step 5 — Restore dev token

If a stash was created in Step 1:

1. Run `git stash pop` to restore the real token in `dev/main.tsx`.
2. Verify the file looks correct (the real token is back).

If no stash was created, skip this step.

## Done

Report what was fixed (lint errors, formatting, build errors) and confirm the tree is ready to commit.
