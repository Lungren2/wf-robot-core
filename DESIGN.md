# WF Robot Design System

A modern, vibrant design system built around a traffic light color theme with clean typography and engaging animations.

## 🎨 Color Palette

### Traffic Light Theme
Our core brand identity is built around traffic light colors with high saturation for maximum visual impact:

```css
--wf-green: 145 85% 45%    /* Go/Success - Vibrant green */
--wf-yellow: 45 100% 55%   /* Wait/Warning - Bright yellow */
--wf-red: 0 95% 58%        /* Stop/Error - Bold red */
```

### Foundation Colors
```css
--wf-bg: 0 0% 100%         /* White background */
--wf-fg: 0 0% 0%           /* Black foreground */
--wf-muted: 0 0% 31%       /* #4F4F4F muted text */
--wf-border: 0 0% 90%      /* Light gray separators */
--wf-card: 0 0% 100%       /* Card background */
--wf-ring: 160 84% 39%     /* Focus ring */
```

### Dark Mode
All colors automatically adapt for dark mode with appropriate contrast adjustments.

## 🔤 Typography

### Font Stack
- **Display/Headers**: Oswald (bold, condensed)
- **Body/UI**: Montserrat (clean, readable)

### Hierarchy
```css
.font-display {
  font-family: 'Oswald', 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.025em;
}
```

## 🧩 Components

### Button
**Variants**: `primary`, `secondary`, `success`, `warning`, `danger`, `ghost`

```tsx
<Button variant="success">Go</Button>
<Button variant="warning">Wait</Button>
<Button variant="danger">Stop</Button>
```

### RobotDot
Animated status indicators with sequential glow effects:

```tsx
<RobotDot state="go" animate />     // Green with delayed glow
<RobotDot state="wait" animate />   // Yellow with 1s delay
<RobotDot state="stop" animate />   // Red - starts first
```

### StatusBadge
Color-coded status indicators:

```tsx
<StatusBadge state="approved" />  // Green
<StatusBadge state="pending" />   // Yellow
<StatusBadge state="rejected" />  // Red
<StatusBadge state="draft" />     // Gray
```

### Alert
Contextual alert messages with appropriate color coding:

```tsx
<Alert tone="success" title="Success!" />
<Alert tone="warning" title="Warning!" />
<Alert tone="danger" title="Error!" />
```

### Card
Content containers with optional status stripes:

```tsx
<Card 
  title="Dashboard" 
  statusStripe="success"
  actions={<Button variant="ghost">Edit</Button>}
>
  Content here
</Card>
```

### TextInput
Form inputs with validation states:

```tsx
<TextInput 
  label="Email"
  error="Required field"
  placeholder="Enter email"
/>
```

### Table
Data tables with hover states and status integration:

```tsx
<Table 
  title="Orders"
  rows={[
    { id: "12345", customer: "John Doe", amount: "$100", state: "approved" }
  ]}
/>
```

## ✨ Animations

### Glow Effects
Sequential traffic light glow animations:

```css
.animate-glow-red     /* Starts immediately */
.animate-glow-yellow  /* 1s delay */
.animate-glow-green   /* 2s delay */
```

### Transitions
```css
.animate-fade-in      /* Smooth entrance */
.focus-ring           /* Focus state with green ring */
.card-shadow          /* Subtle elevation */
```

## 🎯 Usage Principles

### Color Usage
- **Green**: Success states, positive actions, "go" signals
- **Yellow**: Warning states, pending actions, "wait" signals  
- **Red**: Error states, destructive actions, "stop" signals
- **Gray**: Neutral states, disabled elements, draft content

### Semantic Tokens
Always use semantic color tokens instead of direct colors:

```tsx
// ✅ Correct
className="bg-wf-green text-white"

// ❌ Avoid
className="bg-green-500 text-white"
```

### Animation Guidelines
- Use glow effects for status indicators
- Apply fade-in for content transitions
- Maintain consistent timing (3s cycles, 1s delays)
- Respect user motion preferences

### Accessibility
- High contrast ratios maintained across all themes
- Focus rings use brand green for consistency
- Semantic HTML structure with proper ARIA labels
- Color is never the only indicator of state

## 🔧 Implementation

### CSS Variables
All design tokens are defined as HSL CSS variables in `src/index.css` for easy theming and consistent usage across components.

### Component Architecture
- Focused, single-responsibility components
- Variant-based styling using props
- Consistent prop interfaces across similar components
- TypeScript for type safety

### Responsive Design
- Mobile-first approach
- Flexible layouts using CSS Grid and Flexbox
- Consistent spacing scale
- Touch-friendly interactive elements

## 📱 Responsive Breakpoints

Following standard Tailwind breakpoints:
- `sm`: 640px and up
- `md`: 768px and up  
- `lg`: 1024px and up
- `xl`: 1280px and up
- `2xl`: 1536px and up

---

*This design system emphasizes clarity, consistency, and visual hierarchy while maintaining the playful traffic light theme that makes WF Robot memorable and approachable.*