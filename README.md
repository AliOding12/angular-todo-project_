# Ang01 - Basic Angular To-Do App

[![Angular](https://img.shields.io/badge/angular-18.1.0-red.svg)](https://angular.dev/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()

A simple To-Do application built with Angular. This project demonstrates basic CRUD operations, component communication, and integration with a mock backend using JSON server. It also includes a test component for experimentation.

## Features

- Add, view, and manage tasks
- Task reminders and scheduling
- Responsive UI with Bootstrap
- Angular standalone components
- Mock backend with `db.json`
- Simple routing setup

## How It Works

1. **Start the Angular app:**  
   ```sh
   npm install
   npm start
   ```
2. **Start the JSON server for mock backend:**  
   ```sh
   npx json-server --watch db.json --port 3000
   ```
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

Tasks are displayed and managed via the To-Do component. Data is fetched and updated using Angular's HttpClient.

## Directory Structure

```
ang01/
  ├── src/
  │   ├── app/
  │   │   ├── app.component.ts
  │   │   ├── app.component.html
  │   │   ├── app.config.ts
  │   │   ├── app.routes.ts
  │   │   ├── testapp/
  │   │   │   └── test01.component.ts
  │   │   └── todo/
  │   │       └── to-do/
  │   │           ├── to-do.component.ts
  │   │           ├── to-do.component.html
  │   │           ├── items/
  │   │           │   └── items.component.ts
  │   │           ├── task.service.ts
  │   │           ├── task.interface.ts
  │   │           └── testtask.ts
  │   ├── main.ts
  │   ├── main.server.ts
  │   └── index.html
  ├── db.json
  ├── package.json
  ├── angular.json
  ├── server.ts
  └── README.md
```

## Author

- **GitHub:** [AliOding12](https://github.com/AliOding12)
- **Email:** abbasali1214313@gmail.com

---

><!-- Add package.json and initial README -->
