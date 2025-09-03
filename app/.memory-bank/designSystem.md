# Design System

## Animation & Motion

Our animation system uses Framer Motion to create fluid, sophisticated interactions that enhance the user experience while maintaining elegance and professionalism.

### Core Animation Components

1. ScrollAnimation
   - Purpose: Fade-in and slide-up effect for sections entering viewport
   - Usage: Wrap section content for consistent entrance animations
   - Properties:
     - delay: Optional delay before animation starts
     - className: Additional styling classes
   ```tsx
   <ScrollAnimation>
     <h2>Section Title</h2>
   </ScrollAnimation>
   ```

2. StaggeredScrollAnimation
   - Purpose: Coordinated entrance of multiple items
   - Usage: Parent container for lists or grids where items should animate sequentially
   - Properties:
     - delay: Delay before first item animates
     - className: Additional styling classes
   ```tsx
   <StaggeredScrollAnimation>
     {items.map(item => (
       <motion.div variants={itemVariants}>
         {item}
       </motion.div>
     ))}
   </StaggeredScrollAnimation>
   ```

3. HoverAnimation
   - Purpose: Enhanced hover interactions for cards and interactive elements
   - Features:
     - Subtle scale increase (1.03)
     - Gentle lift effect (-4px)
     - Customizable glow effect
   - Properties:
     - glowColor: Custom glow color (rgba)
     - scale: Custom scale factor
     - lift: Custom lift distance
   ```tsx
   <HoverAnimation glowColor="rgba(255, 255, 255, 0.1)">
     <Card>Content</Card>
   </HoverAnimation>
   ```

4. GridAnimation
   - Purpose: "Showstopper" animation for case study grids
   - Features:
     - Staggered entrance
     - Rotation and scale effects
   - Components:
     - GridAnimation: Container component
     - GridItem: Individual grid items
   ```tsx
   <GridAnimation>
     {items.map(item => (
       <GridItem key={item.id}>
         <Card>{item.content}</Card>
       </GridItem>
     ))}
   </GridAnimation>
   ```

5. GrayscaleHover
   - Purpose: Interactive effect for client logos
   - Features:
     - Grayscale to color transition
     - Subtle scale increase
   ```tsx
   <GrayscaleHover>
     <Image src={logo} alt="Client" />
   </GrayscaleHover>
   ```

### Animation Principles

1. Subtlety
   - All animations should feel natural and unobtrusive
   - Use gentle easing curves (easeOut for most transitions)
   - Keep durations between 300ms and 600ms

2. Performance
   - Use transform and opacity for smooth animations
   - Implement proper exit animations
   - Consider reduced motion preferences

3. Consistency
   - Maintain consistent timing across similar animations
   - Use standard animation patterns for similar interactions
   - Follow established motion hierarchy

### Usage Guidelines

1. Section Entrances
   - Use ScrollAnimation for main section content
   - Add slight delays for sequential sections
   - Ensure animations trigger at appropriate scroll positions

2. Interactive Elements
   - Apply HoverAnimation to clickable cards
   - Use GrayscaleHover for partner/client logos
   - Maintain subtle feedback for all interactive elements

3. Grid Layouts
   - Implement GridAnimation for featured content
   - Stagger children animations for visual interest
   - Consider viewport size for animation timing

4. Motion Hierarchy
   - Primary actions: Larger movements, prominent effects
   - Secondary actions: Subtle movements, minimal effects
   - Background elements: Minimal to no animation

### Best Practices

1. Always wrap animations in 'use client' components
2. Provide fallbacks for reduced motion preferences
3. Keep animations consistent with brand personality
4. Test animations across different viewport sizes
5. Ensure animations don't interfere with usability
