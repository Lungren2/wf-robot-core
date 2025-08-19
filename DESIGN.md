# WF Robot Design System

A modern, vibrant design system built around a traffic light color theme with clean typography and engaging animations. This comprehensive design system provides a cohesive visual language for building intuitive interfaces that guide users through processes using familiar traffic light concepts.

## 🎨 Color Palette

### Traffic Light Theme
Our core brand identity is built around traffic light colors with high saturation for maximum visual impact. These colors carry semantic meaning throughout the system:

```css
--wf-green: 145 85% 45%    /* Go/Success - Vibrant green */
--wf-yellow: 45 100% 55%   /* Wait/Warning - Bright yellow */
--wf-red: 0 95% 58%        /* Stop/Error - Bold red */
```

**Color Psychology & Usage:**
- **Green (Go)**: Represents approval, success, completion, and positive actions. Used for approved states, success messages, and primary call-to-action buttons.
- **Yellow (Wait)**: Indicates pending states, warnings, and items requiring attention. Applied to pending approvals, cautionary alerts, and intermediate states.
- **Red (Stop)**: Signals errors, rejections, and critical issues. Reserved for error states, destructive actions, and failed operations.

### Foundation Colors
These semantic colors form the backbone of our interface, ensuring consistency across all components:

```css
--wf-bg: 0 0% 100%         /* Pure white background */
--wf-fg: 0 0% 0%           /* Pure black foreground */
--wf-muted: 0 0% 31%       /* #4F4F4F muted text for secondary content */
--wf-border: 0 0% 90%      /* Light gray for separators and borders */
--wf-card: 0 0% 100%       /* Card backgrounds (same as bg in light mode) */
--wf-ring: 160 84% 39%     /* Green-tinted focus ring for accessibility */
```

### Dark Mode Adaptation
All colors automatically adapt for dark mode with carefully calculated contrast adjustments:
- Background becomes dark with appropriate foreground inversion
- Traffic light colors maintain their vibrant appearance while ensuring readability
- Border and muted colors adjust to provide proper visual hierarchy in dark environments
- Focus rings remain highly visible across both themes

### Color Application Examples
```tsx
// Status indicators
<StatusBadge state="approved" />   // Uses wf-green background
<StatusBadge state="pending" />    // Uses wf-yellow background
<StatusBadge state="rejected" />   // Uses wf-red background

// Interactive elements
<Button variant="success">Approve</Button>    // Green for positive actions
<Button variant="warning">Review</Button>     // Yellow for caution
<Button variant="danger">Reject</Button>      // Red for destructive actions
```

## 🔤 Typography

### Font Stack Philosophy
Our typography system uses two complementary fonts to create visual hierarchy and maintain readability:

- **Display Font (Oswald)**: Used for headers, titles, and prominent text elements. Its condensed, bold nature creates strong visual impact while conserving horizontal space.
- **Body Font (Montserrat)**: Applied to body text, UI elements, and general content. Its clean, geometric design ensures excellent readability across all screen sizes.

### Typography Scale & Hierarchy

```css
/* Display Typography - Used for headers and prominent text */
.font-display {
  font-family: 'Oswald', 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.025em;
}

/* Typography Hierarchy Examples from Demo */
.text-4xl.font-display     /* Display Heading - Main page titles */
.text-3xl.font-display     /* Page Title - "WF Robot Design System" */  
.text-2xl.font-display     /* Section Headers - "Typography", "Color Palette" */
.text-xl.font-display      /* Subsection Headers - Card titles */
.text-lg.font-display      /* Card Headers - Component section titles */
```

### Body Text Hierarchy
```css
/* Body Typography - Montserrat is default */
.text-lg.font-semibold     /* Large body semibold - Prominent body text */
.text-base                 /* Regular body text - Main content */
.text-sm.text-wf-muted     /* Small muted text - Secondary information */
.text-xs.text-wf-muted     /* Extra small text - Captions and metadata */
```

### Real Implementation Examples
From our demo page implementation:

```tsx
{/* Main page heading */}
<h1 className="font-display text-3xl">WF Robot Design System</h1>

{/* Section headers */}
<h2 className="font-display text-2xl mb-6">Typography</h2>

{/* Card titles */}
<h3 className="font-display text-lg">Display Font (Oswald)</h3>

{/* Body content */}
<p className="text-wf-muted">A comprehensive design system following the traffic light methodology</p>

{/* Small descriptive text */}
<div className="text-sm text-wf-muted">Secondary information</div>
```

## 🧩 Components

Our component library follows the traffic light methodology, providing consistent visual feedback and interaction patterns. Each component is built with TypeScript for type safety and includes comprehensive prop interfaces.

### Button Component

The Button component is the primary interactive element in our design system, offering six distinct variants that align with our traffic light theme and interaction patterns.

**Available Variants:**
- `primary`: Default brand button for main actions
- `secondary`: Outlined button for secondary actions  
- `success`: Green button for positive/approval actions
- `warning`: Yellow button for caution/pending actions
- `danger`: Red button for destructive/rejection actions
- `ghost`: Minimal button for subtle interactions

**Implementation Details:**
```tsx
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
}

// Base styles include:
// - Consistent padding (px-4 py-2)
// - Rounded corners (rounded-xl)
// - Focus ring with green accent
// - Smooth transitions
// - Disabled states with opacity reduction
```

**Usage Examples from Demo:**
```tsx
{/* Basic variants */}
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

{/* Traffic light actions */}
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>

{/* With icons and states */}
<Button variant="success">
  <RobotDot state="go" animate={false} />
  With Icon
</Button>
<Button variant="primary" disabled>Disabled</Button>
<Button variant="primary" className="w-full">Full Width</Button>
```

### RobotDot Component

Animated status indicators that embody our traffic light theme. These small, circular indicators provide immediate visual feedback about system states.

**Properties:**
```tsx
interface RobotDotProps {
  state: 'go' | 'wait' | 'stop';
  animate?: boolean;  // Defaults to true
}
```

**State Mapping:**
- `go`: Green dot representing success/approval/active states
- `wait`: Yellow dot indicating pending/warning/attention needed
- `stop`: Red dot signaling error/rejection/critical issues

**Animation System:**
When `animate={true}`, dots display sequential glow effects:
- Red dot: Starts glowing immediately
- Yellow dot: Begins glowing after 1 second delay
- Green dot: Starts glowing after 2 second delay

**Implementation Examples:**
```tsx
{/* Header navigation dots */}
<div className="flex items-center gap-1">
  <RobotDot state="stop" />
  <RobotDot state="wait" />
  <RobotDot state="go" />
</div>

{/* Static indicators */}
<RobotDot state="go" animate={false} />
<RobotDot state="wait" animate={false} />
<RobotDot state="stop" animate={false} />
```

### StatusBadge Component

Compact status indicators with integrated dot indicators and readable text labels. Perfect for displaying status information in tables, cards, and lists.

**Properties:**
```tsx
interface StatusBadgeProps {
  state: 'approved' | 'pending' | 'rejected' | 'draft';
  children?: React.ReactNode;  // Custom text content
}
```

**State Styling:**
- `approved`: Green background, white text, white dot
- `pending`: Yellow background, black text, black dot  
- `rejected`: Red background, white text, white dot
- `draft`: Gray background, foreground text, foreground dot

**Visual Structure:**
Each badge includes:
- Colored background matching the state
- Small circular dot indicator
- Text label (defaults to state name)
- Rounded pill shape
- Consistent padding and typography

**Usage Examples:**
```tsx
{/* Default labels */}
<StatusBadge state="approved" />     // Shows "approved"
<StatusBadge state="pending" />      // Shows "pending"
<StatusBadge state="rejected" />     // Shows "rejected"
<StatusBadge state="draft" />        // Shows "draft"

{/* Custom labels */}
<StatusBadge state="approved">Completed</StatusBadge>
<StatusBadge state="pending">Under Review</StatusBadge>
<StatusBadge state="rejected">Failed</StatusBadge>
```

### Alert Component

Contextual alert messages that provide important feedback to users using our traffic light color system for immediate recognition.

**Properties:**
```tsx
interface AlertProps {
  tone?: 'success' | 'warning' | 'danger';  // Defaults to 'success'
  title: string;
  description?: string;
  children?: React.ReactNode;
}
```

**Visual Design:**
- Rounded corners (rounded-xl)
- Colored borders and backgrounds using theme colors with transparency
- Bold title text
- Optional description with reduced opacity
- Consistent padding and spacing

**Color Mapping:**
- `success`: Green border and background tint
- `warning`: Yellow border and background tint
- `danger`: Red border and background tint

**Implementation Examples:**
```tsx
{/* Basic alerts */}
<Alert tone="success" title="Success Alert" description="Everything is working correctly." />
<Alert tone="warning" title="Warning Alert" description="Something needs your attention." />
<Alert tone="danger" title="Error Alert" description="Something went wrong." />

{/* Alert with custom content */}
<Alert tone="success" title="Upload Complete">
  <p>Your file has been successfully uploaded and processed.</p>
  <Button variant="ghost" className="mt-2">View Details</Button>
</Alert>
```

### Card Component

Flexible content containers that serve as the foundation for organizing information. Cards provide clean, consistent layouts with optional interactive elements.

**Properties:**
```tsx
interface CardProps {
  title: string;
  children: ReactNode;
  actions?: ReactNode;  // Optional action buttons or controls
  className?: string;   // Additional styling
}
```

**Design Features:**
- Clean white background with subtle border
- Rounded corners (rounded-2xl) for modern appearance
- Header section with title and optional actions
- Content area with consistent padding
- Hover effects with shadow enhancement
- Fade-in animation on mount
- Responsive design patterns

**Layout Structure:**
```tsx
<Card 
  title="Component Title"
  actions={<Button variant="ghost">Action</Button>}
>
  <div className="space-y-4">
    {/* Card content */}
  </div>
</Card>
```

**Demo Implementation Examples:**
```tsx
{/* Typography showcase */}
<Card title="Display Font (Oswald)">
  <div className="space-y-4">
    <div className="font-display text-4xl">Display Heading</div>
    <div className="font-display text-3xl">Section Title</div>
    <div className="font-display text-2xl">Subsection</div>
  </div>
</Card>

{/* Color demonstration */}
<Card title="Traffic Light System">
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-wf-green"></div>
      <div>
        <div className="font-medium">Green - Go/Success</div>
        <div className="text-sm text-wf-muted">Approvals, success states</div>
      </div>
    </div>
  </div>
</Card>
```

### TextInput Component

Form input component with comprehensive validation states and accessibility features.

**Properties:**
```tsx
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;  // Error message to display
  label?: string;  // Input label
}
```

**Features:**
- Clean, rounded design (rounded-xl)
- Focus states with green accent
- Error states with red styling
- Placeholder text with muted styling
- Dark mode compatibility
- Consistent spacing and typography

**State Variations:**
- **Normal**: Standard input with border and focus states
- **Error**: Red border and focus ring with error message
- **Disabled**: Reduced opacity and disabled interactions

**Usage Examples:**
```tsx
{/* Form inputs with different states */}
<TextInput placeholder="Normal input field" />
<TextInput 
  error="This field has an error" 
  placeholder="Input with error" 
/>
<TextInput 
  placeholder="Disabled input" 
  disabled 
/>

{/* Input with label */}
<TextInput 
  label="Email Address"
  placeholder="Enter your email"
  type="email"
/>
```

### Table Component

Data tables with integrated status indicators and hover interactions for displaying structured information.

**Properties:**
```tsx
interface TableRow {
  id: string;
  customer: string;
  amount: string;
  state: 'approved' | 'pending' | 'rejected';
  date?: string;
}

interface TableProps {
  rows: TableRow[];
  title?: string;  // Defaults to "Orders"
}
```

**Design Features:**
- Rounded table container with borders
- Header row with uppercase, muted styling
- Hover effects on table rows
- Integrated StatusBadge components
- Monospace font for ID numbers
- Responsive overflow handling
- Consistent spacing and alignment

**Column Structure:**
- **Order #**: Monospace ID display
- **Customer**: Regular text formatting
- **Amount**: Currency formatting
- **Status**: StatusBadge component integration
- **Date**: Muted text for timestamps

**Implementation Example:**
```tsx
<Table 
  title="Recent Orders"
  rows={[
    { 
      id: "ORD-001", 
      customer: "John Smith", 
      amount: "$299.99", 
      state: "approved",
      date: "2024-01-15"
    },
    { 
      id: "ORD-002", 
      customer: "Jane Doe", 
      amount: "$150.00", 
      state: "pending"
    }
  ]}
/>
```

## ✨ Animations & Effects

Our animation system creates engaging micro-interactions while maintaining performance and accessibility. Animations follow our traffic light timing methodology with carefully orchestrated sequences.

### Glow Animation System

The signature glow effects create visual hierarchy and draw attention in a traffic light sequence:

```css
.animate-glow-red     /* Red dots start glowing immediately (0s delay) */
.animate-glow-yellow  /* Yellow dots begin after 1 second delay */
.animate-glow-green   /* Green dots start after 2 second delay */
```

**Implementation Details:**
- 3-second animation cycles with smooth pulsing
- Sequential timing creates natural visual flow
- Respects `prefers-reduced-motion` for accessibility
- Used primarily on RobotDot components

**Usage in Components:**
```tsx
{/* Sequential traffic light header */}
<div className="flex items-center gap-1">
  <RobotDot state="stop" />   {/* Glows immediately */}
  <RobotDot state="wait" />   {/* Glows after 1s */}
  <RobotDot state="go" />     {/* Glows after 2s */}
</div>
```

### Entrance Animations

**Fade-in Effects:**
All major content areas use fade-in animations for smooth loading:
```css
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
```

**Applied to:**
- Card components on page load
- Section content as it appears
- Modal and dialog overlays

### Interactive Animations

**Hover Effects:**
```css
/* Card hover enhancement */
.hover:shadow-lg.transition-shadow.duration-300

/* Button state transitions */
.transition-colors  /* Smooth color changes */
.hover:bg-{variant}/90  /* Subtle opacity changes */
```

**Focus States:**
All interactive elements use consistent focus animations:
```css
.focus:ring-4.focus:ring-wf-green/20  /* Green focus ring */
.focus:outline-none  /* Remove default outline */
.transition-all  /* Smooth focus transitions */
```

## 🎨 Layout & Spacing System

### Container Patterns

**Main Layout Structure:**
```tsx
<div className="min-h-screen bg-bg text-fg">
  <header className="border-b border-wf-border bg-wf-card">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* Header content */}
    </div>
  </header>
  
  <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
    {/* Main content */}
  </main>
</div>
```

**Section Spacing:**
- Header padding: `py-6` (24px vertical)
- Main content padding: `py-8` (32px vertical)
- Section spacing: `space-y-12` (48px between sections)
- Responsive horizontal padding: `px-4 sm:px-6 lg:px-8`

### Grid Patterns

**Card Layouts:**
```tsx
{/* 2-column layout for medium screens and up */}
<div className="grid gap-6 md:grid-cols-2">
  <Card title="Left Card">Content</Card>
  <Card title="Right Card">Content</Card>
</div>

{/* 3-column layout for larger content */}
<div className="grid gap-6 md:grid-cols-3">
  <Card title="Card 1">Content</Card>
  <Card title="Card 2">Content</Card>
  <Card title="Card 3">Content</Card>
</div>
```

**Responsive Breakpoint Usage:**
- Mobile: Single column layouts
- `md` (768px+): 2-column for comparison content
- `md` (768px+): 3-column for showcase sections
- Consistent `gap-6` (24px) spacing between grid items

### Spacing Scale

**Component Internal Spacing:**
```css
/* Card internal spacing */
.px-5.py-4    /* Header: 20px horizontal, 16px vertical */
.px-5.py-4    /* Content: 20px horizontal, 16px vertical */

/* Button spacing */
.px-4.py-2    /* Buttons: 16px horizontal, 8px vertical */
.gap-2        /* Icon spacing: 8px */

/* Input spacing */
.px-3.py-2    /* Inputs: 12px horizontal, 8px vertical */
.space-y-1    /* Label spacing: 4px */
```

**Content Spacing:**
```css
.space-y-4    /* Standard content spacing: 16px */
.space-y-6    /* Section spacing: 24px */
.space-y-12   /* Major section spacing: 48px */
.gap-3        /* Inline element spacing: 12px */
.gap-6        /* Component spacing: 24px */
```

## 🔧 Implementation Guidelines

### File Structure

```
src/
├── components/
│   └── wf/                 # WF Robot components
│       ├── Button.tsx      # Primary interactive element
│       ├── Card.tsx        # Content containers
│       ├── RobotDot.tsx    # Status indicators
│       ├── StatusBadge.tsx # Status labels
│       ├── Alert.tsx       # Feedback messages
│       ├── TextInput.tsx   # Form inputs
│       ├── Table.tsx       # Data display
│       └── ThemeToggle.tsx # Dark/light mode
├── pages/
│   └── Index.tsx          # Demo implementation
└── index.css             # Design system tokens
```

### CSS Variable Organization

**Color Token Structure:**
```css
:root {
  /* Traffic Light Colors */
  --wf-green: 145 85% 45%;
  --wf-yellow: 45 100% 55%;
  --wf-red: 0 95% 58%;
  
  /* Foundation Colors */
  --wf-bg: 0 0% 100%;
  --wf-fg: 0 0% 0%;
  --wf-muted: 0 0% 31%;
  --wf-border: 0 0% 90%;
  --wf-card: 0 0% 100%;
  --wf-ring: 160 84% 39%;
}

.dark {
  /* Dark mode adaptations */
  --wf-bg: 0 0% 3.9%;
  --wf-fg: 0 0% 98%;
  /* Additional dark mode tokens */
}
```

### Component Development Patterns

**TypeScript Interface Standards:**
```tsx
// Always extend base HTML element props
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  // Required props first
  title: string;
  
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  
  // Event handlers
  onAction?: () => void;
  
  // Children and content
  children?: ReactNode;
}
```

**Styling Conventions:**
```tsx
// Use template literals for dynamic classes
const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2";
const variantStyles = {
  primary: "bg-wf-green text-white hover:bg-wf-green/90",
  secondary: "border border-wf-border text-fg hover:bg-fg/5"
};

// Always include transition classes
const transitionStyles = "transition-colors focus:outline-none focus:ring-4";
```

### Demo Page Structure

The Index.tsx page serves as both documentation and testing ground:

**Section Organization:**
1. **Header**: Brand identity with animated dots and theme toggle
2. **Typography**: Font hierarchy demonstration with real examples
3. **Color Palette**: Interactive color swatches with usage descriptions
4. **Buttons**: All variants and states including disabled and full-width
5. **Status Indicators**: Badge and dot components in various states
6. **Robot Dots**: Both animated and static versions
7. **Forms**: Input fields with error states and labels
8. **Alerts**: All tone variations with descriptions
9. **Cards**: Clean container showcases without status stripes

**Content Strategy:**
Each section demonstrates:
- Component variations and states
- Real-world usage examples
- Accessibility considerations
- Responsive behavior patterns

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