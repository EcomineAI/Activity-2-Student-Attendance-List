import { useState } from 'react';
import './App.css';

const initialStudents = [
  {
    id: 1,
    studentNo: '2024-0104',
    name: 'Maria Clara Santos',
    group: 'Group 1',
    checkInTime: '08:02 AM',
    isPresent: true,
  },
  {
    id: 2,
    studentNo: '2024-0118',
    name: 'Juan Miguel Reyes',
    group: 'Group 1',
    checkInTime: '08:05 AM',
    isPresent: true,
  },
  {
    id: 3,
    studentNo: '2024-0127',
    name: 'Sofia Andrea Cruz',
    group: 'Group 3',
    checkInTime: null,
    isPresent: false,
  },
  {
    id: 4,
    studentNo: '2024-0135',
    name: 'Liam Gabriel Mendoza',
    group: 'Group 1',
    checkInTime: '08:09 AM',
    isPresent: true,
  },
  {
    id: 5,
    studentNo: '2024-0142',
    name: 'Hannah Mae Villanueva',
    group: 'Group 3',
    checkInTime: null,
    isPresent: false,
  },
  {
    id: 6,
    studentNo: '2024-0156',
    name: 'Carlos Daniel Bautista',
    group: 'Group 3',
    checkInTime: '08:11 AM',
    isPresent: true,
  },
];

function PresentIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AbsentIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getInitials(fullName) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatCurrentTime() {
  return new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all');

  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        if (student.id !== id) {
          return student;
        }
        const nextPresent = !student.isPresent;
        return {
          ...student,
          isPresent: nextPresent,
          checkInTime: nextPresent ? formatCurrentTime() : null,
        };
      })
    );
  };

  const presentCount = students.filter((student) => student.isPresent).length;
  const absentCount = students.length - presentCount;
  const attendanceRate =
    students.length > 0 ? Math.round((presentCount / students.length) * 100) : 0;

  const filteredStudents = students.filter((student) => {
    if (filter === 'present') return student.isPresent;
    if (filter === 'absent') return !student.isPresent;
    return true;
  });

  const filterOptions = [
    { id: 'all', label: 'All', count: students.length },
    { id: 'present', label: 'Present', count: presentCount },
    { id: 'absent', label: 'Absent', count: absentCount },
  ];

  return (
    <main className="page-shell">
      <header className="page-header">
        <div className="header-copy">
          <h1>Student Attendance List</h1>
          <p className="subtitle">React Final Lab Activity 2 · Groups 1 and 3</p>
        </div>
        <div className="session-pill">
          <span className="session-dot" aria-hidden="true" />
          <span>{students.length} enrolled · Roll call</span>
        </div>
      </header>

      <section className="summary-section" aria-label="Attendance summary">
        <div className="summary-grid">
          <article className="stat-card">
            <span className="stat-label">Total Students</span>
            <strong className="stat-value">{students.length}</strong>
            <span className="stat-meta">Registered in section</span>
          </article>

          <article className="stat-card stat-card-present">
            <span className="stat-label">Present</span>
            <strong className="stat-value stat-value-present">
              {presentCount}
            </strong>
            <span className="stat-meta">{attendanceRate}% attendance rate</span>
          </article>

          <article className="stat-card stat-card-absent">
            <span className="stat-label">Absent</span>
            <strong className="stat-value stat-value-absent">
              {absentCount}
            </strong>
            <span className="stat-meta">
              {100 - attendanceRate}% unaccounted
            </span>
          </article>
        </div>

        <div
          className="ratio-track"
          role="img"
          aria-label={`${presentCount} present and ${absentCount} absent out of ${students.length} students`}
        >
          <div
            className="ratio-fill"
            style={{ width: `${attendanceRate}%` }}
          />
        </div>
      </section>

      <section className="roster-card" aria-label="Student attendance roster">
        <div className="roster-toolbar">
          <div className="toolbar-heading">
            <h2>Class Roster</h2>
            <p className="toolbar-hint">Click a status to toggle</p>
          </div>

          <div className="filter-group" role="group" aria-label="Filter students">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`filter-btn ${filter === option.id ? 'filter-btn-active' : ''}`}
                onClick={() => setFilter(option.id)}
                aria-pressed={filter === option.id}
              >
                <span>{option.label}</span>
                <span className="filter-count">{option.count}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="roster-columns" aria-hidden="true">
          <span>Student ID</span>
          <span>Student</span>
          <span>Check-in</span>
          <span className="col-status">Status</span>
        </div>

        {filteredStudents.length === 0 ? (
          <div className="empty-state">
            <p>No students match the selected filter.</p>
          </div>
        ) : (
          <ul className="student-list">
            {filteredStudents.map((student) => (
              <li
                key={student.id}
                className={`student-row ${student.isPresent ? 'row-present' : 'row-absent'}`}
              >
                <span className="student-id">{student.studentNo}</span>

                <div className="student-identity">
                  <span
                    className={`student-avatar ${student.isPresent ? 'avatar-present' : 'avatar-absent'}`}
                    aria-hidden="true"
                  >
                    {getInitials(student.name)}
                  </span>
                  <div className="student-meta">
                    <span className="student-name">{student.name}</span>
                    <span className="student-group">{student.group}</span>
                  </div>
                </div>

                <span
                  className={`check-in-time ${student.isPresent ? 'check-in-recorded' : 'check-in-missing'}`}
                >
                  {student.isPresent ? student.checkInTime : 'No record'}
                </span>

                <div className="status-cell">
                  <button
                    type="button"
                    className={`status-badge ${student.isPresent ? 'status-present' : 'status-absent'}`}
                    onClick={() => toggleAttendance(student.id)}
                    aria-pressed={student.isPresent}
                    aria-label={`Toggle attendance for ${student.name}, currently ${student.isPresent ? 'Present' : 'Absent'}`}
                  >
                    {student.isPresent ? <PresentIcon /> : <AbsentIcon />}
                    <span>{student.isPresent ? 'Present' : 'Absent'}</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
