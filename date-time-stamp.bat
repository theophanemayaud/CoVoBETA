SET current_date="not set"
echo %current_date%
SET "current_date=%date% %time%"
echo %current_date%
set current_date={"latest":"%current_date%"}
echo %current_date%
echo %current_date% > src/timestamp.json
