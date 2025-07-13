| Operation         | Type        | Phase                                |
|------------------|-------------|--------------------------------------|
| `console.log`     | Sync        | Immediate                            |
| `process.nextTick`| Micro-task  | Before `Promise.then`                |
| `Promise.then`    | Micro-task  | After `process.nextTick`             |
| `async/await`     | Micro-task  | Like `.then` after `await`           |
| `setTimeout`      | Macro-task  | Timer queue                          |
| `setImmediate`    | Macro-task  | Check phase (after I/O)              |
| `fs.readFile`     | I/O         | Poll phase → Callback                |

## 🎯 Node.js Event Loop – Diagram

┌──────────────────────────────┐
│ Start Loop │
└──────────────────────────────┘
│
▼
┌──────────────────────────────┐
│ Timers Phase │ ← setTimeout, setInterval
└──────────────────────────────┘
│
[Run Microtasks]
- process.nextTick()
- Promise.then / await
│
▼
┌──────────────────────────────┐
│ Pending Callbacks Phase │ ← System operations (e.g., TCP)
└──────────────────────────────┘
│
[Run Microtasks]
▼
┌──────────────────────────────┐
│ Idle / Prepare Phase │ ← Internal use
└──────────────────────────────┘
│
▼
┌──────────────────────────────┐
│ Poll Phase │ ← I/O callbacks (e.g., fs.readFile)
└──────────────────────────────┘
(May wait here for events)
[Run Microtasks]
▼
┌──────────────────────────────┐
│ Check Phase │ ← setImmediate()
└──────────────────────────────┘
[Run Microtasks]
▼
┌──────────────────────────────┐
│ Close Callbacks Phase │ ← socket.on('close'), etc.
└──────────────────────────────┘
│
└────► Back to Start Loop (Next tick)
