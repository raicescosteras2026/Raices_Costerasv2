---
name: Proyecto Raíces Costeras
colors:
  surface: '#fafaf5'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ef'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#43474c'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#74777d'
  outline-variant: '#c4c6cd'
  surface-tint: '#4e6073'
  primary: '#162839'
  on-primary: '#ffffff'
  primary-container: '#2c3e50'
  on-primary-container: '#96a9be'
  inverse-primary: '#b5c8df'
  secondary: '#7c5800'
  on-secondary: '#ffffff'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#002c29'
  on-tertiary: '#ffffff'
  tertiary-container: '#00443f'
  on-tertiary-container: '#4eb7ad'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e4fb'
  primary-fixed-dim: '#b5c8df'
  on-primary-fixed: '#091d2e'
  on-primary-fixed-variant: '#36485b'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#8ef4e9'
  tertiary-fixed-dim: '#71d7cd'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#fafaf5'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  headline-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style
The design system bridges the gap between professional heritage preservation and vibrant coastal life. It is designed to evoke a sense of community pride, warmth, and structural reliability. The target audience includes local residents, cultural historians, and urban planners.

The visual style is **Corporate Modern with a Vernacular Twist**. We utilize clean, structured layouts to maintain professional authority, while injecting the high-contrast, sun-drenched spirit of coastal architecture through accent colors and tactile details. The interface should feel as sturdy as a well-built home and as welcoming as a neighbor’s porch.

## Colors
The palette is derived directly from the traditional facades of coastal housing, balanced by a deep, authoritative navy to maintain professional grounding.

*   **Primary (Heritage Navy):** Used for primary typography, navigation, and structural elements to ensure a grounded, trustworthy feel.
*   **Secondary (Sunlight Yellow):** Extracted from the bright yellow siding; used for high-visibility calls to action and highlighting community milestones.
*   **Tertiary (Coastal Turquoise):** Sourced from the weathered timber frames; used for secondary buttons, information categorization, and supportive iconography.
*   **Accent (Coral Pink):** Based on the warm earthy tones of the adjacent structures; reserved for special status indicators and decorative accents.
*   **Neutral (Shell White):** A warm off-white that prevents the high-contrast accents from feeling jarring, providing a soft but clean background.

**Readability Note:** When using Sunlight Yellow or Coastal Turquoise as backgrounds, all overlaid text must use the Heritage Navy to ensure WCAG AA compliance.

## Typography
We utilize a pairing that reflects both modern efficiency and approachable warmth. 

**Be Vietnam Pro** is used for headlines. Its contemporary geometry and slightly soft terminals mirror the friendly yet purposeful nature of the coastal project. **Work Sans** provides a grounded, highly legible experience for body text and data-heavy interfaces, ensuring that administrative and historical information is easily digestible.

Headlines should use tight letter-spacing to feel impactful, while labels utilize increased tracking for clarity in dense UI sections.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to mimic the deliberate planning of historical districts, transitioning to a fluid model on mobile.

A 12-column grid is standard for desktop (1280px max-width), utilizing 24px gutters. Spacing follows a strict 8px linear scale. Large components (sections) should be separated by 64px or 80px to provide visual "breathing room" reminiscent of the open coastal horizon. On mobile devices, margins shrink to 16px to maximize the utility of the screen real estate while maintaining structural alignment.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows, keeping the UI feeling modern and clean. 

Lower elevation elements use subtle 1px borders in a desaturated version of the Coastal Turquoise or Shell White. High-priority elements, such as active cards or modals, utilize a "Soft Ambient Shadow"—a very large blur (24px+) with extremely low opacity (4%) tinted with the Heritage Navy. This creates a subtle lift without introducing visual clutter, keeping the focus on the vibrant architectural colors.

## Shapes
We adopt a **Soft** shape language. While the coastal houses are geometric and linear, the community aspect of the project calls for approachable edges. 

Standard components like buttons and input fields use a 4px (0.25rem) radius. Larger containers like cards use an 8px (0.5rem) radius. This subtle rounding maintains the "structural" feel of architecture while ensuring the interface feels contemporary and accessible.

## Components
*   **Buttons:** Primary buttons use the Sunlight Yellow with Heritage Navy text. Secondary buttons use a Coastal Turquoise outline.
*   **Chips:** Use high-saturation backgrounds (Yellow, Turquoise, Coral) with dark text to categorize different types of architectural styles or project statuses.
*   **Input Fields:** Minimalist design with a 1px Heritage Navy border that thickens to 2px on focus using the Coastal Turquoise color.
*   **Cards:** Pure Shell White backgrounds with a 1px border. The top edge of cards may include a 4px "accent strip" using one of the three brand colors to indicate category.
*   **Progress Indicators:** Use the Coral Pink to represent community milestones and funding goals, providing a warm, high-contrast visual cue of growth.