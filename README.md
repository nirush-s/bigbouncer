## BigBouncer – Cricket Ground Manager

Simple browser-based app to manage your cricket ground's match schedule, see empty slots and track past results.

**🌐 Live Website:** View schedules, empty slots, and match results without any login required.

**🔐 Admin Access:** Admins can import CSV files and manage matches. See [DEPLOYMENT.md](./DEPLOYMENT.md) for admin password and deployment instructions.

### Features

- **Schedule view**: Pick a date and see all matches, with time, teams and format.
- **Manage matches**: Add, edit and delete matches with date, time, teams, format and result.
- **Weekend empty slots**: Weekends only, 7:00 AM – 6:00 PM window with automatic capacity calculation for standard match slots (T20 = 3h, T30 = 5h30m) plus mix suggestions, shown for the entire month at once.
- **CSV import**: Upload the `DataToFeedCSV.csv` file (or the same layout exported from Numbers) to repopulate the entire schedule directly from your browser.
- **Results**: Filter past results by date range and team name.
- **Local storage**: All data is stored in your browser (`localStorage`) – no backend required.

### How to run

- **Option 1 – Open the file directly**
  - Open `index.html` in your browser (double-click or drag into a tab).

- **Option 2 – Serve with Node (optional)**
  - Make sure Node.js and npm are installed on your machine.
  - In a terminal, from the `BigBouncer` folder run:

    ```bash
    npm install -g serve
    serve .
    ```

  - Then open the URL printed in the terminal (usually `http://localhost:3000` or `http://localhost:5000`).

### Importing your CSV schedule

1. Open the app and switch to the **Schedule** tab.
2. In the “Import schedule from CSV” card, set the year that the sheet represents (defaults to 2025).
3. Click **Upload CSV** and pick your `DataToFeedCSV.csv` (or a sheet with the same columns: Date, Match1/Format/Slot/TeamA/TeamB etc.).
4. The browser parses the file locally, fills all matches, and refreshes the Schedule / Empty Slots / Results views automatically. Nothing is uploaded to a server.

### Data model

Each match is stored with:

- **date**: `YYYY-MM-DD`
- **start / end**: `HH:MM` (24-hour)
- **teamA / teamB**: team names
- **format**: e.g. T20, practice, tournament (optional)
- **result**: free text like “Team A won by 30 runs” (optional)

You can later hook this UI up to a real database or API; for now it is purely front-end.


