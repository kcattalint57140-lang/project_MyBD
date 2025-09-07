const ps_myBDtm = document.getElementById("present_myBD_timer");
const ft_myBDdotm = document.getElementById("future_myBD_timer");

// วันเกิดของคุณ: 1 มิถุนายน 2004
const birthDate = new Date("Jun 1, 2004 00:00:00");
const birthDate_ms = birthDate.getTime();

// วันเกิดอายุ 22 ปี: 1 มิถุนายน 2026
const countdownDate = new Date("Jun 1, 2026 00:00:00");

// ใช้ตัวจับเวลาแบบเรียลไทม์
const x = setInterval(function() {
  const now = new Date();
  const now_ms = now.getTime();
  
  // ======================================
  // 1. คำนวณอายุปัจจุบัน
  // ======================================
  let age_years = now.getFullYear() - birthDate.getFullYear();
  let age_months = now.getMonth() - birthDate.getMonth();
  let age_days = now.getDate() - birthDate.getDate();

  // ปรับการคำนวณถ้าเดือนหรือวันปัจจุบันน้อยกว่าวันเกิด
  if (age_days < 0) {
    age_months--;
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    age_days = prevMonthLastDay + age_days;
  }
  if (age_months < 0) {
    age_years--;
    age_months = 12 + age_months;
  }
  
  // คำนวณชั่วโมง นาที วินาที และมิลลิวินาที
  const age_hours = Math.floor((now_ms - birthDate_ms) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const age_minutes = Math.floor((now_ms - birthDate_ms) % (1000 * 60 * 60) / (1000 * 60));
  const age_seconds = Math.floor((now_ms - birthDate_ms) % (1000 * 60) / 1000);
  const age_milliseconds = (now_ms - birthDate_ms) % 1000;
  
  // แสดงผลอายุปัจจุบัน
  ps_myBDtm.innerHTML = `${age_months} months ${age_days} days ${age_hours} hours ${age_minutes} minutes ${age_seconds} seconds ${age_milliseconds} milliseconds`;

  // ======================================
  // 2. คำนวณเวลาถอยหลัง
  // ======================================
  const distance_countDown = countdownDate.getTime() - now_ms;
  let cd_years = countdownDate.getFullYear() - now.getFullYear();
  let cd_months = countdownDate.getMonth() - now.getMonth();
  let cd_days = countdownDate.getDate() - now.getDate();
  
  // ปรับการคำนวณถ้าเดือนหรือวันของวันเกิดน้อยกว่าปัจจุบัน
  if (cd_days < 0) {
    cd_months--;
    const prevMonthLastDay = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    cd_days = prevMonthLastDay + cd_days;
  }
  if (cd_months < 0) {
    cd_years--;
    cd_months = 12 + cd_months;
  }
  
  // คำนวณชั่วโมง นาที วินาที และมิลลิวินาที
  const cd_hours = Math.floor((distance_countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const cd_minutes = Math.floor((distance_countDown % (1000 * 60 * 60)) / (1000 * 60));
  const cd_seconds = Math.floor((distance_countDown % (1000 * 60)) / 1000);
  const cd_milliseconds = distance_countDown % 1000;
  
  // แสดงผลเวลาถอยหลัง
  ft_myBDdotm.innerHTML = `${cd_months} months ${cd_days} days ${cd_hours} hours ${cd_minutes} minutes ${cd_seconds} seconds ${cd_milliseconds} milliseconds`;

  if (distance_countDown < 0) {
    clearInterval(x);
    ps_myBDtm.innerHTML = "Happy Birthday!";
    ft_myBDdotm.innerHTML = "Happy Birthday!";
  }
}, 10);