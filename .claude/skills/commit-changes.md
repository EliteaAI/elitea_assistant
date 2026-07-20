# Commit Changes

Create a clean, complete commit. Run every step in order.

## Step 1 — Guard the dev token

Read `dev/main.tsx` and find the `token=` prop on the `<EliteaAssistant` component.

- If the value is **not** exactly `"user-token"` (i.e. it contains a real JWT or any other secret):
  1. Remember the current token value.
  2. Replace the token prop line so it reads `token="user-token"` (remove any commented-out duplicate line above/below if present).
  3. Run `git stash push -m "dev-token" -- dev/main.tsx` to stash **only** that file so the real token is preserved.
  4. Set a flag that the stash needs to be popped after the commit.
- If the value is already `"user-token"`, do nothing.

## Step 2 — Validate branch name

Run `git branch --show-current` and check the name matches this pattern:

```
(feature|fix|improvement)/EL-<number>/<description-with-dashes>
```

Examples of valid names:
- `feature/EL-5723/update-streaming`
- `fix/EL-5102/support-expand-image`
- `improvement/EL-4800/refactor-hooks`

If the branch name does **not** match, **stop and ask the user** whether to rename the branch or continue anyway. Do not silently proceed.

## Step 3 — Stage all changes

Run `git add .` to stage everything including the `dist/` build output.

Then run `git status` and review what is staged. If you see anything that looks like it contains secrets (`.env`, credentials, tokens), **stop and warn the user** before committing.

## Step 4 — Write the commit message

Extract the commit type and ticket number from the branch name:
- Branch prefix → commit type: `feature` → `feature`, `fix` → `fix`, `improvement` → `improvement`
- `EL-<number>` → ticket reference

Analyze all staged changes (`git diff --cached`) to understand what was done.

Write a commit message in this exact format:

```
<type>: [EL-<number>] Short summary of the change

Expanded description explaining what changed and why.
Mention key files or areas affected if helpful.
Keep it concise but informative.
```

Example:
```
feature: [EL-5723] Add streaming status indicators to chat

Added StatusMessage component to display agent thinking steps
and tool execution status during streaming responses. Refactored
useChat hook to handle new socket message types. Updated message
styles for status chip display.
```

**Ask the user to confirm** the commit message before proceeding. They may want to adjust it.

## Step 5 — Create the commit

Run `git commit` with the confirmed message. Use a HEREDOC to pass the message:

```bash
git commit -m "$(cat <<'EOF'
<title line>

<body>
EOF
)"
```

Verify the commit succeeded with `git status`.

## Step 6 — Restore dev token

If a stash was created in Step 1:

1. Run `git stash pop` to restore the real token in `dev/main.tsx`.
2. Verify the file looks correct.

If no stash was created, skip this step.

## Done

Report the commit hash and summary. Remind the user to push when ready.
