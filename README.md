# Student Attendance List

React + Vite application for **React Final Laboratory Activity 2** (Groups 1 and 3 — Individual Activity).

## Assignment Requirements Implemented

1. **Student Data Array (`src/App.jsx`)**: Stores 6 student records (`id`, `studentNo`, `name`, `group`, `checkInTime`, `isPresent`) in an array managed with `useState`.
2. **`map()` with Unique Keys (`src/App.jsx`)**: Uses `filteredStudents.map(...)` to render the student roster and assigns `key={student.id}` to each list item.
3. **Conditional Rendering (`src/App.jsx`)**: Conditionally displays `Present` or `Absent`, switches between matching checkmark and cross icons, shows check-in time or `No record`, and renders an empty-state message when a filter has no matches.
4. **Distinct Status Styling (`src/index.css` & `src/App.css`)**: Applies separate visual styles for `Present` (emerald green left accent rail, green-tinted avatar, and sage pill) and `Absent` (crimson left accent rail, warm-rose row tint, rose-tinted avatar, and rose pill), with interactive status toggling on click.

## Project Structure

- `src/App.jsx` — Student array, `useState` state/toggle/filter logic, `map()` list rendering, and conditional rendering
- `src/App.css` — Layout and distinct `.row-present` / `.row-absent` and `.status-present` / `.status-absent` styling
- `src/index.css` — Color variables and base typography
- `start.bat` — Windows quick-start launcher

## Quick Start (Windows)

Double-click `start.bat` in the project folder to install dependencies (if needed), start the Vite development server, and open the app in your browser.

## Manual Commands

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
