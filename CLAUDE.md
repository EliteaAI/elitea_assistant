# CLAUDE.md — elitea-assistant

## Project Overview

`@eliteaai/elitea-assistant` is an embeddable AI chat assistant widget published as an npm package. It renders a floating chat button that opens a full chat window, connected to a backend via REST API and Socket.io WebSocket. Consumers install it as a React component with zero CSS configuration (CSS is injected at runtime).

**Repository**: `https://github.com/EliteaAI/elitea_assistant.git`

## Quick Reference

```bash
npm run dev          # Start Vite dev server (proxies /api and /socket.io to dev.elitea.ai)
npm run build        # Type-check (tsc --noEmit) + Vite library build
npm run lint         # ESLint on src/
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier on src/**/*.{ts,tsx,css}
npm run format:check # Prettier check only
```

## Project Structure

```
src/
├── index.ts                    # Public API entry point
├── EliteaAssistant.tsx         # Root component (forwardRef, context providers)
├── api/
│   ├── index.ts
│   └── adapter.api.ts          # Default REST/XHR adapter (fetch + XMLHttpRequest)
├── components/
│   ├── chat/                   # All chat UI components
│   │   ├── index.tsx           # Barrel re-exports
│   │   ├── ChatWindow.tsx
│   │   ├── ChatButton.tsx
│   │   ├── ChatHeader.tsx
│   │   ├── MessageList.tsx
│   │   ├── MessageItem.tsx
│   │   ├── MessageInput.tsx
│   │   ├── MarkdownContent.tsx
│   │   ├── MermaidBlock.tsx
│   │   ├── AnimatedMessage.tsx
│   │   ├── StatusMessage.tsx
│   │   ├── TypingIndicator.tsx
│   │   ├── ImageLightbox.tsx
│   │   ├── PopupMessage.tsx
│   │   ├── MessageListSkeleton.tsx
│   │   └── attachments/        # Attachment-related sub-components
│   ├── icons/                  # One SVG icon component per file
│   │   └── index.ts            # Barrel re-exports
│   └── shared/                 # Reusable UI primitives (Tooltip, CopyButton)
│       └── index.tsx
├── lib/
│   ├── constants/              # Enums, socket events, size limits
│   ├── hooks/                  # All custom hooks (14 total)
│   │   └── index.ts            # Barrel re-exports
│   ├── types/                  # All type definitions
│   │   └── index.ts            # Barrel re-exports
│   └── utils/                  # Pure utility functions
│       └── index.ts            # Barrel re-exports
└── theme/
    ├── colors.theme.ts         # Light/dark palettes + CSS var mapping
    └── styles/                 # Plain CSS files (10 files, all imported via index.css)
        └── index.css
dev/
    └── main.tsx                # Local development harness
dist/                           # Build output (ESM + CJS + types)
```

## Code Conventions

### Components

- **Arrow functions only** — never `function` declarations
- **One component per file** — extract inline SVG icons to `components/icons/`
- **Props as parameter, destructure inside body** — never destructure in the signature:
  ```tsx
  const MyComponent: React.FC<TMyComponentProps> = props => {
    const { foo, bar } = props;
    // ...
  };
  ```
- **Wrap every component in `React.memo()`**
- **Set `displayName`** on every component: `MyComponent.displayName = 'MyComponent';`
- **Default export** from individual files, **named re-export** from barrel `index.tsx`

### Types

- Use `type` — never `interface`
- Prefix all types with `T`: `TMessageItemProps`, `TAttachment`, `TChatAPI`
- Define types in `lib/types/` organized by domain, re-export from `lib/types/index.ts`
- Component prop types are defined above the component in the same file

### Imports

- **Absolute imports** via `@/` alias for cross-module imports: `import { useChat } from '@/lib/hooks'`
- **Relative imports** only for siblings within the same directory: `import MermaidBlock from './MermaidBlock'`
- Import order is enforced by Prettier plugin: react → third-party → `@/` aliases → relative

### Hooks

- All hooks are **named `const` arrow functions** prefixed with `use`
- Wrap callbacks in `useCallback`, derived values in `useMemo`
- `react-hooks/exhaustive-deps` is set to `'error'`

### Styling

- **Plain CSS** with CSS custom properties (variables)
- All class names prefixed with `elitea-assistant-` (BEM-like)
- Theme colors defined as `--elitea-assistant-*` CSS variables, applied via inline `style`
- No CSS modules, no styled-components, no Tailwind
- CSS is injected into JS at build time — consumers need no CSS import

### General

- `no-console: 'error'` — no `console.log` in production code
- `prefer-const: 'error'`, `prefer-arrow-callback: 'error'`, `object-shorthand: 'error'`
- Prettier: 110 char width, single quotes, trailing commas, `arrowParens: 'avoid'`, single attribute per line

## Architecture

### Context / Dependency Injection

The root `EliteaAssistant` component sets up 5 React Contexts consumed throughout the tree:

| Context | Hook | Purpose |
|---------|------|---------|
| `ApiContext` | `useApi` | REST API adapter (`TChatAPI`) |
| `SocketContext` | `useSocketContext` | Socket.io connection |
| `ThemeContext` | `useTheme` | Light/dark theme + color overrides |
| `ScreenshotContext` | — | Page screenshot capture |
| `SupportAssistantContext` | `useSupportAssistantContext` | Support metadata |

No external state management (no Redux, Zustand, etc.) — pure React built-ins.

### Pluggable API Layer

Consumers can either:
1. Pass `apiUrl` + `token` → uses built-in adapter (`createDefaultAdapter`)
2. Provide a custom `apiAdapter` implementing `TChatAPI`

### Real-time Communication

Socket.io handles message streaming. The `useChat` hook processes ~15 socket message types (start_task, chunk, agent_start, agent_response, error, etc.).

### Lazy Loading

`mermaid` and `rehype-raw` are dynamically imported to reduce initial bundle size.

### CSS Isolation

All class names are prefixed. Container uses `z-index: 2147483647`. CSS is embedded in JS — no external stylesheet needed.

## Build Configuration

- **Bundler**: Vite 5 in library mode
- **Entry**: `src/index.ts`
- **Output**: ESM (`dist/elitea-assistant.js`) + CJS (`dist/elitea-assistant.cjs`) + rolled-up types (`dist/index.d.ts`)
- **Externals**: `react`, `react-dom`, `react/jsx-runtime`, `socket.io-client`, `mermaid`, `rehype-raw`
- **CSS**: Injected into JS via `vite-plugin-css-injected-by-js`
- **Types**: Bundled via `vite-plugin-dts`
- **Source maps**: Enabled

## Git Conventions

- **Commit format**: `type: [TICKET] description` — e.g., `fix: [EL-5102] assistant supports expanding image view`
- **Types**: `fix`, `feature`, `refactor`
- **Branch naming**: `type/TICKET/description` — e.g., `fix/EL-5102/support-expand-image`
- **Hooks**: pre-commit runs lint-staged (prettier + eslint); pre-push runs full build

## Public API

Exported from `src/index.ts`:

```tsx
// Components
export { EliteaAssistant }

// API
export { createDefaultAdapter }

// Types
export type {
  TAssistantConfig,
  TChatAPI,
  TConversationListItem,
  TEliteaAssistantColors,
  TEliteaAssistantProps,
  TEliteaAssistantPosition,
  TEliteaAssistantRef,
  TMessage,
  TSupportAssistantContext,
}
```

The `EliteaAssistant` component uses `forwardRef` with `useImperativeHandle` to expose imperative methods: `open()`, `close()`, `toggle()`, `showPopup()`, etc.

## Testing

No test framework is configured. Validation relies on TypeScript type-checking (`tsc --noEmit`) and the pre-push build gate.
