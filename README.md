# @eliteaai/elitea-assistant

Embeddable AI chat assistant widget for any web platform. Renders a floating chat button that opens a full
chat window — designed to work as any Chat Assistant, but connected to your own backend.

## Installation

```bash
npm install @eliteaai/elitea-assistant
```

**Peer dependencies:** `react` (>=17) and `react-dom` (>=17) — your app must provide these.

## Usage

```tsx
import { EliteaAssistant } from '@eliteaai/elitea-assistant';

const App = () => (
  <EliteaAssistant
    apiUrl="https://your-api.com/assistant"
    token="user-jwt-token"
    title="Support"
    placeholder="Ask me anything..."
    position="bottom-right"
    theme="dark"
    colors={{
      buttonBackground: '#FF5733',
      headerBackground: '#1a1a2e',
    }}
  />
);
```

## Props

| Prop          | Type                              | Required | Default               | Description                        |
| ------------- | --------------------------------- | -------- | --------------------- | ---------------------------------- |
| `apiUrl`      | `string`                          | yes      | —                     | Backend endpoint for chat messages |
| `token`       | `string`                          | yes      | —                     | User authentication token          |
| `title`       | `string`                          | no       | `"Elitea Assistant"`  | Chat window header text            |
| `placeholder` | `string`                          | no       | `"Type a message..."` | Input field placeholder            |
| `position`    | `"bottom-right" \| "bottom-left"` | no       | `"bottom-right"`      | Floating button position           |
| `theme`       | `"light" \| "dark"`               | no       | `"light"`             | Base color theme                   |
| `colors`      | `EliteaAssistantColors`           | no       | —                     | Override individual theme colors   |

### Color Overrides

Pass any subset of these to the `colors` prop — unspecified colors fall back to the selected theme:

```ts
interface EliteaAssistantColors {
  buttonBackground?: string;
  buttonIcon?: string;
  headerBackground?: string;
  headerText?: string;
  chatBackground?: string;
  userMessageBackground?: string;
  userMessageText?: string;
  assistantMessageBackground?: string;
  assistantMessageText?: string;
  inputBackground?: string;
  inputText?: string;
  inputBorder?: string;
  sendButtonBackground?: string;
  sendButtonIcon?: string;
}
```

## License

Apache-2.0
