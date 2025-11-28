// --- Persistence helpers (localStorage) ---
const STORAGE_KEY = "bigbouncer_matches_v2";
const ADMIN_KEY = "bigbouncer_admin";
const ADMIN_PASSWORD = "BigBouncer2025!"; // Change this to your desired password
const WEEKEND_SLOTS_START = "2025-12-01";
const DAY_OPEN_TIME = "07:00";
const DAY_CLOSE_TIME = "18:00";
const MATCH_LENGTH_MINUTES = {
  T20: 180,
  T30: 330,
};
const MIN_BOOKABLE_MINUTES = MATCH_LENGTH_MINUTES.T20;
const DAY_OPEN_MINUTES = toMinutes(DAY_OPEN_TIME);
const DAY_CLOSE_MINUTES = toMinutes(DAY_CLOSE_TIME);

function loadMatches() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getSeedMatches().map(normalizeMatch);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return getSeedMatches().map(normalizeMatch);
    return parsed.map(normalizeMatch);
  } catch {
    return getSeedMatches().map(normalizeMatch);
  }
}

function saveMatches(nextMatches) {
  matches = nextMatches.map(normalizeMatch);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(matches));
}

function getSeedMatches() {
  // Pre-loaded from DataToFeedCSV.csv (Dec 2025 schedule).
  // T20 slots assumed to last 3h, T30 slots 5h30m so the empty-slot view stays accurate.
  return [
    {
      id: "1stmatch-2025-12-06",
      date: "2025-12-06",
      start: "07:00",
      end: "10:00",
      teamA: "A",
      teamB: "B",
      format: "T20",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-06",
      date: "2025-12-06",
      start: "10:30",
      end: "13:30",
      teamA: "C",
      teamB: "D",
      format: "T20",
      result: "",
    },
    {
      id: "3rdmatch-2025-12-06",
      date: "2025-12-06",
      start: "14:00",
      end: "17:00",
      teamA: "E",
      teamB: "F",
      format: "T20",
      result: "",
    },
    {
      id: "1stmatch-2025-12-07",
      date: "2025-12-07",
      start: "07:00",
      end: "09:30",
      teamA: "AB",
      teamB: "CD",
      format: "T30",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-07",
      date: "2025-12-07",
      start: "12:30",
      end: "15:00",
      teamA: "CD",
      teamB: "EF",
      format: "T30",
      result: "",
    },
    {
      id: "1stmatch-2025-12-13",
      date: "2025-12-13",
      start: "07:00",
      end: "10:00",
      teamA: "A",
      teamB: "B",
      format: "T20",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-13",
      date: "2025-12-13",
      start: "10:30",
      end: "13:30",
      teamA: "C",
      teamB: "D",
      format: "T20",
      result: "",
    },
    {
      id: "3rdmatch-2025-12-13",
      date: "2025-12-13",
      start: "14:00",
      end: "17:00",
      teamA: "E",
      teamB: "F",
      format: "T20",
      result: "",
    },
    {
      id: "1stmatch-2025-12-14",
      date: "2025-12-14",
      start: "07:00",
      end: "09:30",
      teamA: "AB",
      teamB: "CD",
      format: "T30",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-14",
      date: "2025-12-14",
      start: "12:30",
      end: "15:00",
      teamA: "CD",
      teamB: "EF",
      format: "T30",
      result: "",
    },
    {
      id: "1stmatch-2025-12-20",
      date: "2025-12-20",
      start: "07:00",
      end: "10:00",
      teamA: "A",
      teamB: "B",
      format: "T20",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-20",
      date: "2025-12-20",
      start: "10:30",
      end: "13:30",
      teamA: "C",
      teamB: "D",
      format: "T20",
      result: "",
    },
    {
      id: "3rdmatch-2025-12-20",
      date: "2025-12-20",
      start: "14:00",
      end: "17:00",
      teamA: "E",
      teamB: "F",
      format: "T20",
      result: "",
    },
    {
      id: "1stmatch-2025-12-21",
      date: "2025-12-21",
      start: "07:00",
      end: "09:30",
      teamA: "AB",
      teamB: "CD",
      format: "T30",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-21",
      date: "2025-12-21",
      start: "12:30",
      end: "15:00",
      teamA: "CD",
      teamB: "EF",
      format: "T30",
      result: "",
    },
    {
      id: "1stmatch-2025-12-27",
      date: "2025-12-27",
      start: "07:00",
      end: "10:00",
      teamA: "A",
      teamB: "B",
      format: "T20",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-27",
      date: "2025-12-27",
      start: "10:30",
      end: "13:30",
      teamA: "C",
      teamB: "D",
      format: "T20",
      result: "",
    },
    {
      id: "3rdmatch-2025-12-27",
      date: "2025-12-27",
      start: "14:00",
      end: "17:00",
      teamA: "E",
      teamB: "F",
      format: "T20",
      result: "",
    },
    {
      id: "1stmatch-2025-12-28",
      date: "2025-12-28",
      start: "07:00",
      end: "09:30",
      teamA: "AB",
      teamB: "CD",
      format: "T30",
      result: "",
    },
    {
      id: "2ndmatch-2025-12-28",
      date: "2025-12-28",
      start: "12:30",
      end: "15:00",
      teamA: "CD",
      teamB: "EF",
      format: "T30",
      result: "",
    },
  ];
}

// --- Utility functions ---
function toMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

function parseISODate(dateStr) {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function toISODate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function toTimeString(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function isWeekend(dateInput) {
  const d = typeof dateInput === "string" ? parseISODate(dateInput) : dateInput;
  if (!d || Number.isNaN(d.getTime())) return false;
  const day = d.getDay();
  return day === 0 || day === 6;
}

function getWeekendDatesForMonth(monthValue) {
  if (!monthValue) return [];
  const [yearStr, monthStr] = monthValue.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  if (!year || !month) return [];

  const firstOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0);
  const minDate = parseISODate(WEEKEND_SLOTS_START);

  if (endOfMonth < minDate) return [];

  const startDate = firstOfMonth < minDate ? new Date(minDate) : new Date(firstOfMonth);
  const weekends = [];
  const cursor = new Date(startDate);
  while (cursor <= endOfMonth) {
    if (isWeekend(cursor)) {
      weekends.push(toISODate(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return weekends;
}

function getWeekendOptions() {
  const options = [];
  const today = new Date();
  const currentYear = today.getFullYear();
  const minDate = parseISODate(WEEKEND_SLOTS_START);
  const minYear = minDate.getFullYear();
  const minMonth = minDate.getMonth();

  for (let year = Math.max(minYear, currentYear); year <= currentYear + 1; year += 1) {
    const startMonth = year === minYear ? minMonth : 0;
    const endMonth = year === currentYear + 1 ? 11 : 11;

    for (let month = startMonth; month <= endMonth; month += 1) {
      const firstOfMonth = new Date(year, month, 1);
      const endOfMonth = new Date(year, month + 1, 0);
      const startDate = firstOfMonth < minDate ? new Date(minDate) : new Date(firstOfMonth);
      if (endOfMonth < minDate) continue;

      const weekends = [];
      const cursor = new Date(startDate);
      while (cursor <= endOfMonth) {
        if (cursor.getDay() === 6) {
          const saturday = toISODate(cursor);
          const nextDay = new Date(cursor);
          nextDay.setDate(nextDay.getDate() + 1);
          const sunday = nextDay <= endOfMonth && isWeekend(nextDay) ? toISODate(nextDay) : null;
          weekends.push({ saturday, sunday });
          cursor.setDate(cursor.getDate() + 7);
        } else {
          cursor.setDate(cursor.getDate() + 1);
        }
      }

      weekends.forEach((weekend, index) => {
        const monthName = firstOfMonth.toLocaleDateString(undefined, { month: "short" });
        const ordinal = index === 0 ? "1st" : index === 1 ? "2nd" : index === 2 ? "3rd" : `${index + 1}th`;
        const label = `${monthName} ${ordinal} weekend`;
        options.push({
          value: `${weekend.saturday}|${weekend.sunday || ""}`,
          label,
          saturday: weekend.saturday,
          sunday: weekend.sunday,
        });
      });
    }
  }

  return options;
}

function populateWeekendSelector() {
  const selector = document.getElementById("schedule-weekend");
  if (!selector) return;
  selector.innerHTML = '<option value="">Select a weekend...</option>';
  const options = getWeekendOptions();
  options.forEach((opt) => {
    const option = document.createElement("option");
    option.value = opt.value;
    option.textContent = opt.label;
    selector.appendChild(option);
  });
}

function extractMatchType(format) {
  const normalized = (format || "").toString().toUpperCase();
  if (normalized.includes("T30") || normalized.includes("30")) return "T30";
  if (normalized.includes("T20") || normalized.includes("20")) return "T20";
  return null;
}

function getMatchDurationMinutes(matchOrFormat) {
  if (!matchOrFormat) return MATCH_LENGTH_MINUTES.T20;
  const format = typeof matchOrFormat === "string" ? matchOrFormat : matchOrFormat.format;
  const detected = extractMatchType(format);
  if (detected && MATCH_LENGTH_MINUTES[detected]) {
    return MATCH_LENGTH_MINUTES[detected];
  }

  const start = typeof matchOrFormat === "object" ? toMinutes(matchOrFormat.start) : NaN;
  const end = typeof matchOrFormat === "object" ? toMinutes(matchOrFormat.end) : NaN;
  if (!Number.isNaN(start) && !Number.isNaN(end) && end > start) {
    return end - start;
  }

  return MATCH_LENGTH_MINUTES.T20;
}

function getMatchEndTime(match) {
  if (!match || !match.start) return match?.end || "";
  const duration = getMatchDurationMinutes(match);
  return toTimeString(toMinutes(match.start) + duration);
}

function normalizeMatch(match) {
  if (!match || !match.start) return match;
  return {
    ...match,
    start: match.start,
    end: getMatchEndTime(match),
  };
}

function formatDuration(minutes) {
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (mins === 0) return `${hrs}h`;
  return `${hrs}h ${String(mins).padStart(2, "0")}m`;
}

// --- Admin Authentication ---
function isAdmin() {
  return localStorage.getItem(ADMIN_KEY) === "true";
}

function setAdminStatus(isAdmin) {
  localStorage.setItem(ADMIN_KEY, isAdmin ? "true" : "false");
  updateAdminUI();
}

function updateAdminUI() {
  const admin = isAdmin();
  const adminElements = document.querySelectorAll(".admin-only");
  const userElements = document.querySelectorAll(".user-only");
  
  adminElements.forEach((el) => {
    el.style.display = admin ? "" : "none";
  });
  
  userElements.forEach((el) => {
    el.style.display = admin ? "none" : "";
  });
  
  const adminBadge = document.getElementById("admin-badge");
  const loginBtn = document.getElementById("admin-login-btn");
  const logoutBtn = document.getElementById("admin-logout-btn");
  
  if (adminBadge) adminBadge.style.display = admin ? "inline-flex" : "none";
  if (loginBtn) loginBtn.style.display = admin ? "none" : "inline-flex";
  if (logoutBtn) logoutBtn.style.display = admin ? "inline-flex" : "none";
  
  // Re-render matches to show/hide edit/delete buttons
  if (scheduleWeekendSelect) {
    renderMatchesForWeekend(scheduleWeekendSelect.value || "");
  }
}

function showAdminLogin() {
  const password = prompt("Enter admin password:");
  if (password === ADMIN_PASSWORD) {
    setAdminStatus(true);
    alert("Admin access granted.");
  } else if (password !== null) {
    alert("Incorrect password.");
  }
}

function handleAdminLogout() {
  if (confirm("Log out from admin mode?")) {
    setAdminStatus(false);
    closeMatchModal();
  }
}

function updateMatchCount(count) {
  if (!matchCountEl) return;
  matchCountEl.textContent = count === 1 ? "1 match" : `${count} matches`;
}

function openMatchModal(isEdit = false) {
  const modal = document.getElementById("match-modal");
  const modalTitle = document.getElementById("modal-title");
  if (!modal) return;
  modalTitle.textContent = isEdit ? "Edit Match" : "Add Match";
  modal.classList.remove("hidden");
  isMatchFormOpen = true;
}

function closeMatchModal() {
  const modal = document.getElementById("match-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  clearMatchForm();
  isMatchFormOpen = false;
}

function setCsvStatus(message, type = "muted") {
  if (!csvStatusEl) return;
  csvStatusEl.textContent = message;
  csvStatusEl.classList.remove("muted", "success", "error");
  csvStatusEl.classList.add(type);
}

function parseCsv(text) {
  const rows = [];
  let current = [];
  let value = "";
  let inQuotes = false;
  const input = text.replace(/\r/g, "");

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (char === '"') {
      if (inQuotes && input[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      current.push(value);
      value = "";
      continue;
    }

    if (char === "\n" && !inQuotes) {
      current.push(value);
      rows.push(current);
      current = [];
      value = "";
      continue;
    }

    value += char;
  }

  current.push(value);
  rows.push(current);
  return rows.map((row) => row.map((cell) => cell.trim()));
}

function parseDateLabel(label, baseYear) {
  if (!label) throw new Error("Missing date value in CSV.");
  let sanitized = label.replace(/,/g, "").trim();
  sanitized = sanitized.replace(/(\d+)(st|nd|rd|th)/gi, "$1");
  const parts = sanitized.split(/\s+/);
  if (parts.length < 2) throw new Error(`Unknown date format: ${label}`);
  const [monthPart, dayPart] = parts;
  const dayNumber = parseInt(dayPart, 10);
  const date = new Date(`${monthPart} ${dayNumber}, ${baseYear}`);
  if (Number.isNaN(date.getTime())) throw new Error(`Could not parse date "${label}"`);
  return toISODate(date);
}

function parseSlotToMinutes(slot) {
  if (!slot) throw new Error("Missing slot time in CSV.");
  const clean = slot.replace(/\s+/g, "").toUpperCase();
  const match = clean.match(/^(\d{1,2})(?::(\d{2}))?(AM|PM)$/);
  if (!match) throw new Error(`Invalid time format: "${slot}"`);
  let hours = Number(match[1]) % 12;
  if (match[3] === "PM") hours += 12;
  const minutes = match[2] ? Number(match[2]) : 0;
  return hours * 60 + minutes;
}

function parseScheduleCsv(text, baseYear) {
  const rows = parseCsv(text);
  const headerIndex = rows.findIndex((row) => row.some((cell) => cell?.toLowerCase() === "date"));
  if (headerIndex === -1) throw new Error('Could not find a header row containing "Date".');

  const dataRows = rows.slice(headerIndex + 1).filter((row) => row.some((cell) => cell && cell.trim().length > 0));
  const imported = [];

  for (const row of dataRows) {
    const dateLabel = row[1]?.trim();
    if (!dateLabel) continue;
    const isoDate = parseDateLabel(dateLabel, baseYear);

    for (let idx = 2; idx + 4 < row.length; idx += 5) {
      const matchLabel = row[idx]?.trim();
      const format = row[idx + 1]?.trim();
      const slot = row[idx + 2]?.trim();
      const teamA = row[idx + 3]?.trim();
      const teamB = row[idx + 4]?.trim();

      if (!slot || !teamA || !teamB || !matchLabel || matchLabel === "-") continue;

      const startMinutes = Math.max(DAY_OPEN_MINUTES, parseSlotToMinutes(slot));
      const duration = getMatchDurationMinutes({ start: toTimeString(startMinutes), format });
      const endMinutes = Math.min(DAY_CLOSE_MINUTES, startMinutes + duration);
      if (endMinutes <= startMinutes) continue;

      imported.push({
        id: crypto.randomUUID(),
        date: isoDate,
        start: toTimeString(startMinutes),
        end: toTimeString(endMinutes),
        teamA,
        teamB,
        format: format || matchLabel,
        result: "",
      });
    }
  }

  if (imported.length === 0) throw new Error("No matches were found in this CSV.");

  return imported.sort((a, b) => (a.date === b.date ? toMinutes(a.start) - toMinutes(b.start) : a.date.localeCompare(b.date)));
}

function handleCsvFile(file) {
  if (!file) return;
  const baseYear = Number(csvYearInput?.value) || new Date().getFullYear();
  setCsvStatus(`Reading ${file.name}…`, "muted");
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const matchesFromCsv = parseScheduleCsv(reader.result, baseYear);
      saveMatches(matchesFromCsv);
      const firstDate = matchesFromCsv[0]?.date;
      if (firstDate) {
        populateWeekendSelector();
        const options = getWeekendOptions();
        const matchingWeekend = options.find((opt) => {
          const [sat, sun] = opt.value.split("|");
          return sat === firstDate || sun === firstDate;
        });
        if (matchingWeekend && scheduleWeekendSelect) {
          scheduleWeekendSelect.value = matchingWeekend.value;
        }
        matchDateInput.value = firstDate;
        if (slotsMonthInput) slotsMonthInput.value = firstDate.slice(0, 7);
        if (resultsFromInput) resultsFromInput.value = firstDate;
      }
      renderMatchesForWeekend(scheduleWeekendSelect?.value || "");
      refreshSlots();
      renderResults();
      setCsvStatus(`Imported ${matchesFromCsv.length} matches from ${file.name}.`, "success");
    } catch (err) {
      console.error(err);
      setCsvStatus(err.message || "Failed to import CSV.", "error");
    } finally {
      if (csvFileInput) csvFileInput.value = "";
    }
  };
  reader.onerror = () => {
    setCsvStatus("Could not read the selected file.", "error");
  };
  reader.readAsText(file);
}

// --- State ---
let matches = loadMatches();
let isMatchFormOpen = false;

// --- DOM references ---
const tabs = document.querySelectorAll(".tab-button");
const tabSections = {
  schedule: document.getElementById("tab-schedule"),
  slots: document.getElementById("tab-slots"),
  results: document.getElementById("tab-results"),
};

const scheduleWeekendSelect = document.getElementById("schedule-weekend");
const matchListEl = document.getElementById("match-list");
const matchCountEl = document.getElementById("match-count");

const matchForm = document.getElementById("match-form");
const matchIdInput = document.getElementById("match-id");
const matchDateInput = document.getElementById("match-date");
const matchStartInput = document.getElementById("match-start");
const matchEndInput = document.getElementById("match-end");
const matchTeamAInput = document.getElementById("match-team-a");
const matchTeamBInput = document.getElementById("match-team-b");
const matchFormatInput = document.getElementById("match-format");
const matchResultInput = document.getElementById("match-result");
const matchResetBtn = document.getElementById("match-reset");
const addMatchBtn = document.getElementById("add-match-btn");
const modalClose = document.getElementById("modal-close");
const modalCancel = document.getElementById("modal-cancel");

const slotsMonthInput = document.getElementById("slots-month");
const slotsRefreshBtn = document.getElementById("slots-refresh");
const slotsListEl = document.getElementById("slots-list");

const resultsFromInput = document.getElementById("results-from");
const resultsToInput = document.getElementById("results-to");
const resultsTeamInput = document.getElementById("results-team");
const resultsRefreshBtn = document.getElementById("results-refresh");
const resultsListEl = document.getElementById("results-list");

const csvYearInput = document.getElementById("csv-year");
const csvUploadBtn = document.getElementById("csv-upload-btn");
const csvFileInput = document.getElementById("csv-file");
const csvStatusEl = document.getElementById("csv-status");

// --- Initial setup ---
function initDefaultDates() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const todayStr = `${yyyy}-${mm}-${dd}`;

  populateWeekendSelector();
  if (scheduleWeekendSelect) {
    const options = getWeekendOptions();
    const todayWeekend = options.find((opt) => {
      const [sat] = opt.value.split("|");
      return sat === todayStr || (opt.sunday && opt.sunday === todayStr);
    });
    if (todayWeekend) {
      scheduleWeekendSelect.value = todayWeekend.value;
    } else {
      const nextWeekend = options.find((opt) => {
        const [sat] = opt.value.split("|");
        return sat >= todayStr;
      });
      if (nextWeekend) scheduleWeekendSelect.value = nextWeekend.value;
    }
  }
  if (slotsMonthInput) {
    const minMonth = WEEKEND_SLOTS_START.slice(0, 7);
    const todayMonth = todayStr.slice(0, 7);
    slotsMonthInput.min = minMonth;
    slotsMonthInput.value = todayMonth < minMonth ? minMonth : todayMonth;
  }
  if (matchDateInput) matchDateInput.value = todayStr;
  if (resultsFromInput) resultsFromInput.value = todayStr;
}

// --- Rendering ---
function renderMatchesForWeekend(weekendValue) {
  matchListEl.innerHTML = "";
  if (!weekendValue) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = "Select a weekend to view matches.";
    matchListEl.appendChild(li);
    updateMatchCount(0);
    return;
  }

  const [saturday, sunday] = weekendValue.split("|");
  const weekendDates = [saturday];
  if (sunday) weekendDates.push(sunday);

  const weekendMatches = matches
    .filter((m) => weekendDates.includes(m.date))
    .sort((a, b) => {
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return toMinutes(a.start) - toMinutes(b.start);
    });
  updateMatchCount(weekendMatches.length);

  if (weekendMatches.length === 0) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = "No matches scheduled for this weekend.";
    matchListEl.appendChild(li);
    return;
  }

  let currentDate = null;
  for (const m of weekendMatches) {
    if (currentDate !== m.date) {
      currentDate = m.date;
      const dateHeader = document.createElement("li");
      dateHeader.className = "list-item date-header";
      const headerMain = document.createElement("div");
      headerMain.className = "list-item-main";
      const headerTitle = document.createElement("div");
      headerTitle.className = "list-item-title";
      headerTitle.textContent = formatDate(m.date);
      headerMain.appendChild(headerTitle);
      dateHeader.appendChild(headerMain);
      matchListEl.appendChild(dateHeader);
    }
    const li = document.createElement("li");
    li.className = "list-item";
    const computedEnd = getMatchEndTime(m);
    const durationLabel = formatDuration(getMatchDurationMinutes(m));

    const main = document.createElement("div");
    main.className = "list-item-main";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = `${m.teamA} vs ${m.teamB}`;

    const subtitle = document.createElement("div");
    subtitle.className = "list-item-subtitle";
    subtitle.textContent = `${m.start} – ${computedEnd} • ${m.format || "Match"} • ${durationLabel}`;

    const chips = document.createElement("div");
    chips.className = "chips";
    const dateChip = document.createElement("span");
    dateChip.className = "chip";
    dateChip.textContent = formatDate(m.date);
    chips.appendChild(dateChip);

    if (m.result) {
      const resChip = document.createElement("span");
      resChip.className = "chip result";
      resChip.textContent = m.result;
      chips.appendChild(resChip);
    }

    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(chips);

    const actions = document.createElement("div");
    actions.className = "list-actions";

    if (isAdmin()) {
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.className = "admin-only";
      editBtn.onclick = () => loadMatchIntoForm(m.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "admin-only";
      deleteBtn.onclick = () => {
        if (!confirm("Delete this match?")) return;
        matches = matches.filter((x) => x.id !== m.id);
        saveMatches(matches);
        renderMatchesForWeekend(scheduleWeekendSelect?.value || "");
        refreshSlots();
        renderResults();
      };

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
    }

    li.appendChild(main);
    li.appendChild(actions);
    matchListEl.appendChild(li);
  }
}

function createGap(startMinutes, endMinutes) {
  const duration = Math.max(0, endMinutes - startMinutes);
  return {
    startMinutes,
    endMinutes,
    durationMinutes: duration,
    maxT20: Math.floor(duration / MATCH_LENGTH_MINUTES.T20),
    maxT30: Math.floor(duration / MATCH_LENGTH_MINUTES.T30),
    canMixed: duration >= MATCH_LENGTH_MINUTES.T20 + MATCH_LENGTH_MINUTES.T30,
  };
}

function getEmptySlotsForDate(dateStr) {
  const dayMatches = matches
    .filter((m) => m.date === dateStr)
    .map((match) => {
      const startMinutes = Math.max(DAY_OPEN_MINUTES, toMinutes(match.start));
      if (Number.isNaN(startMinutes) || startMinutes >= DAY_CLOSE_MINUTES) return null;
      const duration = getMatchDurationMinutes(match);
      const endMinutes = Math.min(DAY_CLOSE_MINUTES, startMinutes + duration);
      return {
        ...match,
        startMinutes,
        endMinutes,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.startMinutes - b.startMinutes);

  const gaps = [];
  let cursor = DAY_OPEN_MINUTES;

  for (const match of dayMatches) {
    if (match.startMinutes > cursor) {
      gaps.push(createGap(cursor, match.startMinutes));
    }
    cursor = Math.max(cursor, match.endMinutes);
  }

  if (cursor < DAY_CLOSE_MINUTES) {
    gaps.push(createGap(cursor, DAY_CLOSE_MINUTES));
  }

  const bookable = gaps.filter((gap) => gap.durationMinutes >= MIN_BOOKABLE_MINUTES);
  return {
    bookable,
    shortBreaks: gaps.length - bookable.length,
  };
}

function renderSlotsMessage(message) {
  slotsListEl.innerHTML = "";
  const li = document.createElement("li");
  li.className = "list-item";
  li.textContent = message;
  slotsListEl.appendChild(li);
}

function refreshSlots() {
  const monthValue = slotsMonthInput?.value;
  if (!monthValue) {
    renderSlotsMessage("Select a month to view weekend availability.");
    return;
  }

  const weekendDates = getWeekendDatesForMonth(monthValue);
  if (weekendDates.length === 0) {
    const minMonth = WEEKEND_SLOTS_START.slice(0, 7);
    const message =
      monthValue < minMonth
        ? "Weekend bookings start from December 2025. Choose a later month."
        : "No weekend days found in this month.";
    renderSlotsMessage(message);
    return;
  }

  slotsListEl.innerHTML = "";

  weekendDates.forEach((dateStr) => {
    const { bookable: gaps, shortBreaks } = getEmptySlotsForDate(dateStr);
    const totalFree = gaps.reduce((sum, gap) => sum + gap.durationMinutes, 0);
    const t30Capacity = Math.floor(totalFree / MATCH_LENGTH_MINUTES.T30);
    const t20Capacity = Math.floor(totalFree / MATCH_LENGTH_MINUTES.T20);
    const summaryBits = [];
    if (t30Capacity) summaryBits.push(`${t30Capacity}× T30`);
    if (t20Capacity) summaryBits.push(`${t20Capacity}× T20`);
    if (totalFree >= MATCH_LENGTH_MINUTES.T30 + MATCH_LENGTH_MINUTES.T20) summaryBits.push("mix: 1× T30 + 1× T20");

    const summaryLi = document.createElement("li");
    summaryLi.className = "list-item summary";
    const main = document.createElement("div");
    main.className = "list-item-main";
    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = formatDate(dateStr);
    const subtitle = document.createElement("div");
    subtitle.className = "list-item-subtitle";

    if (gaps.length > 0) {
      subtitle.textContent = `Free ${formatDuration(totalFree)} • ${
        summaryBits.length ? summaryBits.join(" • ") : "Fits at least one T20 slot"
      }`;
    } else if (shortBreaks > 0) {
      subtitle.textContent = "Only short breaks (< 3h) remain for this day.";
    } else {
      subtitle.textContent = "Fully booked between 7:00 AM and 6:00 PM.";
    }

    main.appendChild(title);
    main.appendChild(subtitle);
    summaryLi.appendChild(main);
    slotsListEl.appendChild(summaryLi);

    if (gaps.length === 0) return;

    for (const gap of gaps) {
      const li = document.createElement("li");
      li.className = "list-item";
      const gapMain = document.createElement("div");
      gapMain.className = "list-item-main";
      const gapTitle = document.createElement("div");
      gapTitle.className = "list-item-title";
      gapTitle.textContent = `${toTimeString(gap.startMinutes)} – ${toTimeString(gap.endMinutes)}`;

      const gapSubtitle = document.createElement("div");
      gapSubtitle.className = "list-item-subtitle";
      const capacityBits = [];
      if (gap.maxT30) capacityBits.push(`${gap.maxT30}× T30`);
      if (gap.maxT20) capacityBits.push(`${gap.maxT20}× T20`);
      if (gap.canMixed) capacityBits.push("mix: 1× T30 + 1× T20");
      gapSubtitle.textContent =
        capacityBits.length > 0
          ? `Free window (${formatDuration(gap.durationMinutes)}) • Fits ${capacityBits.join(" • ")}`
          : `Free window (${formatDuration(gap.durationMinutes)}) – gap too small for a full slot`;

      const chips = document.createElement("div");
      chips.className = "chips";
      if (gap.maxT30) {
        const chipT30 = document.createElement("span");
        chipT30.className = "chip t30";
        chipT30.textContent = `T30 slot ×${gap.maxT30}`;
        chips.appendChild(chipT30);
      }

      if (gap.maxT20) {
        const chipT20 = document.createElement("span");
        chipT20.className = "chip t20";
        chipT20.textContent = `T20 slot ×${gap.maxT20}`;
        chips.appendChild(chipT20);
      }

      if (gap.canMixed) {
        const chipMix = document.createElement("span");
        chipMix.className = "chip";
        chipMix.textContent = "Mix: T30 + T20";
        chips.appendChild(chipMix);
      }

      const chipDate = document.createElement("span");
      chipDate.className = "chip";
      chipDate.textContent = formatDate(dateStr);
      chips.appendChild(chipDate);

      gapMain.appendChild(gapTitle);
      gapMain.appendChild(gapSubtitle);
      gapMain.appendChild(chips);
      li.appendChild(gapMain);
      slotsListEl.appendChild(li);
    }
  });
}

function renderResults() {
  resultsListEl.innerHTML = "";
  const from = resultsFromInput.value;
  const to = resultsToInput.value;
  const team = resultsTeamInput.value.trim().toLowerCase();

  let filtered = matches.filter((m) => m.result && m.result.trim().length > 0);

  if (from) {
    filtered = filtered.filter((m) => m.date >= from);
  }

  if (to) {
    filtered = filtered.filter((m) => m.date <= to);
  }

  if (team) {
    filtered = filtered.filter(
      (m) =>
        m.teamA.toLowerCase().includes(team) ||
        m.teamB.toLowerCase().includes(team) ||
        m.result.toLowerCase().includes(team)
    );
  }

  filtered.sort((a, b) => (a.date === b.date ? toMinutes(a.start) - toMinutes(b.start) : a.date.localeCompare(b.date)));

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.className = "list-item";
    li.textContent = "No results match your filters yet.";
    resultsListEl.appendChild(li);
    return;
  }

  for (const m of filtered) {
    const li = document.createElement("li");
    li.className = "list-item";

    const main = document.createElement("div");
    main.className = "list-item-main";

    const title = document.createElement("div");
    title.className = "list-item-title";
    title.textContent = `${m.teamA} vs ${m.teamB}`;

    const subtitle = document.createElement("div");
    subtitle.className = "list-item-subtitle";
    const computedEnd = getMatchEndTime(m);
    const durationLabel = formatDuration(getMatchDurationMinutes(m));
    subtitle.textContent = `${formatDate(m.date)} • ${m.start} – ${computedEnd} • ${m.format || "Match"} • ${durationLabel}`;

    const chips = document.createElement("div");
    chips.className = "chips";
    const resChip = document.createElement("span");
    resChip.className = "chip result";
    resChip.textContent = m.result;
    chips.appendChild(resChip);

    main.appendChild(title);
    main.appendChild(subtitle);
    main.appendChild(chips);
    li.appendChild(main);
    resultsListEl.appendChild(li);
  }
}

// --- Form helpers ---
function clearMatchForm() {
  matchIdInput.value = "";
  const weekendValue = scheduleWeekendSelect?.value;
  if (weekendValue) {
    const [saturday] = weekendValue.split("|");
    matchDateInput.value = saturday;
  } else {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    matchDateInput.value = `${yyyy}-${mm}-${dd}`;
  }
  matchStartInput.value = "";
  matchEndInput.value = "";
  matchTeamAInput.value = "";
  matchTeamBInput.value = "";
  matchFormatInput.value = "";
  matchResultInput.value = "";
}

function loadMatchIntoForm(id) {
  const m = matches.find((x) => x.id === id);
  if (!m) return;
  openMatchModal(true);
  matchIdInput.value = m.id;
  matchDateInput.value = m.date;
  matchStartInput.value = m.start;
  matchEndInput.value = m.end;
  matchTeamAInput.value = m.teamA;
  matchTeamBInput.value = m.teamB;
  matchFormatInput.value = m.format || "";
  matchResultInput.value = m.result || "";
}

// --- Event wiring ---
function setupCsvImport() {
  if (!csvUploadBtn || !csvFileInput) return;
  csvUploadBtn.addEventListener("click", () => {
    csvFileInput.value = "";
    csvFileInput.click();
  });
  csvFileInput.addEventListener("change", (event) => {
    const input = event.target;
    const file = input?.files?.[0];
    if (!file) {
      setCsvStatus("No file selected.", "muted");
      return;
    }
    handleCsvFile(file);
  });
}

function setupTabs() {
  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      if (!tab) return;
      tabs.forEach((b) => b.classList.remove("active"));
      Object.values(tabSections).forEach((s) => s.classList.remove("active"));
      btn.classList.add("active");
      tabSections[tab].classList.add("active");

      // refresh content on tab switch
      if (tab === "schedule") {
        renderMatchesForWeekend(scheduleWeekendSelect?.value || "");
      } else if (tab === "slots") {
        refreshSlots();
      } else if (tab === "results") {
        renderResults();
      }
    });
  });
}

function setupEvents() {
  if (scheduleWeekendSelect) {
    scheduleWeekendSelect.addEventListener("change", () => {
      const weekendValue = scheduleWeekendSelect.value;
      if (weekendValue) {
        const [saturday] = weekendValue.split("|");
        matchDateInput.value = saturday;
      }
      renderMatchesForWeekend(weekendValue);
      refreshSlots();
    });
  }

  if (addMatchBtn) {
    addMatchBtn.addEventListener("click", () => {
      clearMatchForm();
      openMatchModal(false);
    });
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeMatchModal);
  }

  if (modalCancel) {
    modalCancel.addEventListener("click", closeMatchModal);
  }

  const matchModal = document.getElementById("match-modal");
  if (matchModal) {
    matchModal.addEventListener("click", (e) => {
      if (e.target === matchModal) {
        closeMatchModal();
      }
    });
  }

  if (slotsMonthInput) {
    slotsMonthInput.addEventListener("change", () => {
      refreshSlots();
    });
  }

  matchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = matchDateInput.value;
    const start = matchStartInput.value;
    const rawEnd = matchEndInput.value;
    const teamA = matchTeamAInput.value.trim();
    const teamB = matchTeamBInput.value.trim();

    if (!date || !start || !teamA || !teamB) {
      alert("Please fill in date, time and team names.");
      return;
    }

    const format = matchFormatInput.value.trim();
    const computedEnd = getMatchEndTime({ start, end: rawEnd, format });
    matchEndInput.value = computedEnd;

    if (toMinutes(computedEnd) <= toMinutes(start)) {
      alert("End time must be after start time.");
      return;
    }

    const result = matchResultInput.value.trim();

    const existingId = matchIdInput.value;
    if (existingId) {
      matches = matches.map((m) =>
        m.id === existingId
          ? {
              ...m,
              date,
              start,
              end: computedEnd,
              teamA,
              teamB,
              format,
              result,
            }
          : m
      );
    } else {
      matches.push({
        id: crypto.randomUUID(),
        date,
        start,
        end: computedEnd,
        teamA,
        teamB,
        format,
        result,
      });
    }

    saveMatches(matches);
    renderMatchesForWeekend(scheduleWeekendSelect?.value || "");
    refreshSlots();
    renderResults();
    closeMatchModal();
  });

  matchResetBtn.addEventListener("click", () => clearMatchForm());

  if (slotsRefreshBtn) {
    slotsRefreshBtn.addEventListener("click", () => {
      refreshSlots();
    });
  }

  resultsRefreshBtn.addEventListener("click", () => renderResults());
}

// --- Admin Event Handlers ---
function setupAdminControls() {
  const loginBtn = document.getElementById("admin-login-btn");
  const logoutBtn = document.getElementById("admin-logout-btn");
  
  if (loginBtn) {
    loginBtn.addEventListener("click", showAdminLogin);
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleAdminLogout);
  }
}

// --- Boot ---
function boot() {
  initDefaultDates();
  setupCsvImport();
  setupTabs();
  setupEvents();
  setupAdminControls();
  updateAdminUI();
  renderMatchesForWeekend(scheduleWeekendSelect?.value || "");
  refreshSlots();
  renderResults();
}

document.addEventListener("DOMContentLoaded", boot);


