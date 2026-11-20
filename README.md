# Student Attendance List

React + Vite application for **React Final Lab Activity 2** (Groups 1 and 3).

## Features & React Concepts

- **Student Array State**: Stores 6 student records (`id`, `studentNo`, `name`, `group`, `checkInTime`, `isPresent`) in an array managed with `useState`.
- **List Rendering with `map()` & Unique Keys**: Iterates over `filteredStudents.map(...)` and assigns `key={student.id}` to each list item.
- **Conditional Rendering**: Displays `Present` or `Absent`, matching status icons (`PresentIcon` / `AbsentIcon`), check-in time or `No record`, and an empty-state fallback when no students match the active filter.
- **Distinct Status Styling**: Applies different visual styles to Present rows/badges (emerald accent rail and sage pill) and Absent rows/badges (crimson accent rail, subtle rose tint, and rose pill), with interactive toggling on click.

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
