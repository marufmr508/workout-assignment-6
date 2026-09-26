# Project-Name: FitLog — Workout Library

FitLog is a modern and responsive workout library web application built with Next.js. It helps users to explore different exercises, view detailed gym information, add workouts to today's plan, save workouts for later, and organize their workout list.

## Technologies Used

- **Next.js** — React framework with App Router
- **React** — Building reusable UI components
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **React Icons** — Workout and interface icons
- **React Toastify** — Success and warning notifications
- **JSON** — Storing workout data locally

## Key Features

### 1. Workout Library

Users can browse a collection of workouts covering different muscle groups, with information such as equipment, duration, calories, and rating.

### 2. Workout Details

Each workout has a dedicated details page containing the workout image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.

### 3. Today's Workout Plan

Users can add workouts to today's plan and manage their selected exercises in one place. The plan allows a maximum of five workouts and prevents duplicate entries.

### 4. Save Workouts for Later

Users can save their favorite workouts for later and access them from the Saved section. Duplicate workouts are automatically prevented.

### 5. My Plan Management

The My Plan page allows users to view Today's Plan and Saved workouts, see total exercises, duration, and calories, sort workouts, mark workouts as completed, and remove workouts.

## Additional Features

- Responsive design for mobile, tablet, and desktop
- Loading animation while pages are loading
- Custom 404 page
- Toast notifications for user actions

## Challenges I Faced

While developing FitLog, I faced some challenges during implementation:

- **Sorting Workouts:** Implementing the `Sort By` feature for Duration, Calories, and Rating was challenging because the workout list needed to update immediately when the user changed the sorting option.
- **Live Duration and Calories Count:** Updating the total exercise count, duration, and calories when workouts were added or removed was another challenge. I used array methods such as `reduce()` to calculate the total duration and calories dynamically
- **Managing Today's Plan and Saved Workouts:** Keeping Today's Plan and Saved workouts separate while allowing users to remove items, mark workouts as done, and view them in different tabs required careful state management using React Context.
