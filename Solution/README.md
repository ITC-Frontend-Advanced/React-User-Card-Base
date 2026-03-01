# React User Card – Solution

This repository contains the **solution implementation** for the task:

**React Foundations – Components and Rendering**

The goal of this task is to practice basic React concepts such as:

* Rendering lists
* Conditional rendering
* Component structure
* Importing external data
* Applying dynamic styles

---

# Project Structure

```bash
src/
 ├── App.tsx
 ├── App.css
 ├── data/
 │   └── users.ts
 └── assets/
     └── profile.svg
```

### Description

| File            | Purpose                                 |
| --------------- | --------------------------------------- |
| `App.tsx`       | Main component rendering the user cards |
| `App.css`       | Styling for the UI                      |
| `data/users.ts` | Contains the participants data          |
| `profile.svg`   | Default avatar if user image is missing |

---

# Features Implemented

The solution demonstrates the following React concepts:

### 1. Rendering Lists with `.map()`

Participants are dynamically rendered using `.map()`:

```jsx
participants.map((participant) => (
  <div key={participant.id}>
```

Each participant generates a **User Card**.

---

### 2. Using a Unique Key

React requires a unique key for list items.

```jsx
key={participant.id}
```

---

### 3. Conditional Rendering

The solution uses short-hand conditions to render dynamic values.

Example:

```jsx
participant.image ?? "/profile.svg"
```

If the user has no image, the default avatar is used.

---

### 4. Dynamic Styling

Classes change depending on the participant state.

#### Team Badge

```jsx
participant.team === "First team"
  ? "primary"
  : "secondary"
```

#### Online Status

```jsx
participant.isOnline ? "online" : "offline"
```

---

# UI Elements

Each **User Card** displays:

* User Avatar
* Username
* Team Badge
* Online / Offline Status

Example layout:

```
+----------------------+
|  Avatar              |
|                      |
|  Username   Team     |
|  Status              |
+----------------------+
```

---

# Task Requirements Checklist

| Requirement                           | Status |
| ------------------------------------- | ------ |
| Use `.map()` to render list           | ✅     |
| Conditional rendering                 | ✅     |
| Short-hand conditions                 | ✅     |
| Import `data/users`                   | ✅     |
| Import `App.css`                      | ✅     |
| Use `id` as key                       | ✅     |
| Display user team and image           | ✅     |
| Respect styling rules                 | ✅     |

## Bonus Points

| Bonus                               | Status |
| ----------------------------------- | ------ |
| Show total participants count       | ✅     |
| Show online count                   | ✅     |
| Add filter: Show only online users  | ✅     |

---

# How It Works

1. The `participants` array is imported from `data/users`.
2. The component loops through the array using `.map()`.
3. Each participant creates a **User Card**.
4. Conditional logic determines:

   * Avatar fallback
   * Team badge color
   * Online status badge.

---

# Running the Project

If you want to test the solution locally:

### 1️⃣ Create a Vite React project

```bash
npm create vite
```

Choose:

```
React
TypeScript
```

---

### 2️⃣ Replace the `src` folder

Clone this repository and copy the provided files into your Vite project.

---

### 3️⃣ Install dependencies

```bash
npm install
```

---

### 4️⃣ Run the project

```bash
npm run dev
```

---

# Learning Outcome

After completing this task, you should understand:

* How React renders lists
* How conditional rendering works
* How to apply dynamic classes
* How to structure simple React components

---

# Author

Created as part of the **React Learning Tasks** series.
