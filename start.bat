@echo off
cd /d "%~dp0"
if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
)
echo Starting Student Attendance List...
call npm run dev -- --open
pause
