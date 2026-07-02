const YEAR = 2026;
const LEGACY_STORAGE_KEY = "marketingCalendarMemos_2026";
const MEMO_TABS_STORAGE_KEY = "marketingCalendarMemoTabs_2026";

const CATEGORY_COLORS = {
  공휴일: "#F04452",
  기념일: "#FF8A3D",
  쇼핑시즌: "#E8B400",
  "시즌·학사": "#2FB675",
  "IT·컨퍼런스": "#3182F6",
  스포츠: "#12C2C2",
};

// 각 플랫폼의 실제 시그니처(공식 브랜드) 컬러 반영
const PLATFORM_COLORS = {
  "전 플랫폼": "#6B7280",
  네이버: "#03C75A",
  쿠팡: "#E11937",
  "G마켓·옥션": "#00A8E1",
  G마켓: "#00A8E1",
  SSG닷컴: "#B08D57",
  SSG: "#B08D57",
  롯데온: "#7A0019",
  컬리: "#5F0080",
  "11번가": "#FF6B00",
};

// 월별 오픈마켓/플랫폼 주요 세일·기획전 일정 (특정 날짜가 아닌 월 단위 참고 정보, 캘린더에는 표시하지 않음)
const PLATFORM_EVENTS = {
  1: [
    { platform: "네이버", desc: "신년 특가, 설 선물대전 시작" },
    { platform: "쿠팡", desc: "신년 BIG SALE" },
    { platform: "G마켓·옥션", desc: "신년 세일" },
    { platform: "SSG닷컴", desc: "새해 특가" },
    { platform: "롯데온", desc: "New Year Sale" },
    { platform: "11번가", desc: "월간 십일절(1/11)" },
  ],
  2: [
    { platform: "전 플랫폼", desc: "설 선물대전" },
    { platform: "네이버", desc: "설 쇼핑라이브 특집" },
    { platform: "쿠팡", desc: "설 BIG SALE" },
    { platform: "SSG", desc: "설 장보기" },
    { platform: "컬리", desc: "설 선물관" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  3: [
    { platform: "네이버", desc: "신학기 프로모션" },
    { platform: "쿠팡", desc: "신학기 기획전" },
    { platform: "G마켓", desc: "새학기 세일" },
    { platform: "컬리", desc: "봄 식품전" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  4: [
    { platform: "네이버", desc: "봄 쇼핑페스타" },
    { platform: "쿠팡", desc: "봄 리빙·패션전" },
    { platform: "SSG", desc: "Spring Festa" },
    { platform: "롯데온", desc: "봄 할인전" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  5: [
    { platform: "네이버", desc: "쇼핑페스타(최대 행사)" },
    { platform: "G마켓·옥션", desc: "빅스마일데이(Big Smile Day)" },
    { platform: "쿠팡", desc: "Family Month BIG SALE" },
    { platform: "SSG", desc: "랜더스 쇼핑페스타" },
    { platform: "롯데온", desc: "가정의 달 선물대전" },
    { platform: "컬리", desc: "가정의 달 특가" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  6: [
    { platform: "쿠팡", desc: "WOW SALE" },
    { platform: "네이버", desc: "여름 준비 기획전" },
    { platform: "SSG", desc: "Summer Sale" },
    { platform: "롯데온", desc: "여름 가전 행사" },
    { platform: "컬리", desc: "여름 식품전" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  7: [
    { platform: "네이버", desc: "여름 바캉스 특가" },
    { platform: "쿠팡", desc: "여름 BIG SALE" },
    { platform: "G마켓", desc: "바캉스 할인" },
    { platform: "SSG", desc: "Summer Festa" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  8: [
    { platform: "네이버", desc: "Back to School" },
    { platform: "쿠팡", desc: "개학 준비전" },
    { platform: "G마켓", desc: "신학기 할인" },
    { platform: "컬리", desc: "추석 사전예약 시작" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  9: [
    { platform: "전 플랫폼", desc: "추석 선물대전" },
    { platform: "네이버", desc: "추석 쇼핑라이브" },
    { platform: "쿠팡", desc: "추석 BIG SALE" },
    { platform: "SSG", desc: "추석 장보기" },
    { platform: "롯데온", desc: "추석 선물전" },
    { platform: "컬리", desc: "추석 예약관" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  10: [
    { platform: "네이버", desc: "쇼핑페스타(가을)" },
    { platform: "쿠팡", desc: "가을 쇼핑위크" },
    { platform: "SSG", desc: "Fall Festa" },
    { platform: "롯데온", desc: "가을 할인전" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
  11: [
    { platform: "11번가", desc: "그랜드 십일절(연중 최대 행사)" },
    { platform: "G마켓·옥션", desc: "빅스마일데이" },
    { platform: "SSG", desc: "쓱데이(연중 최대 행사)" },
    { platform: "네이버", desc: "블랙프라이데이 특집" },
    { platform: "쿠팡", desc: "블랙프라이데이" },
    { platform: "롯데온", desc: "블랙 메가위크" },
    { platform: "컬리", desc: "블랙위크" },
  ],
  12: [
    { platform: "네이버", desc: "연말결산 세일" },
    { platform: "쿠팡", desc: "연말 BIG SALE" },
    { platform: "G마켓", desc: "연말 감사제" },
    { platform: "SSG", desc: "연말결산" },
    { platform: "롯데온", desc: "연말 클리어런스" },
    { platform: "컬리", desc: "크리스마스·연말 기획전" },
    { platform: "11번가", desc: "월간 십일절" },
  ],
};

// 2026년 국내 공휴일 / 기념일 / 쇼핑시즌 / 학사일정 / IT행사 / 스포츠 일정
// date~endDate(선택): 기간 이벤트
const EVENTS = [
  { date: "2026-01-01", title: "신정", category: "공휴일", desc: "신정 공휴일" },
  { date: "2026-01-01", endDate: "2026-01-10", title: "신년 프로모션 시즌", category: "쇼핑시즌", desc: "시무식, 신년 프로모션, 다이어리·운동·자기계발 시즌" },
  { date: "2026-01-06", endDate: "2026-01-09", title: "CES 2026", category: "IT·컨퍼런스", desc: "세계 최대 IT·가전 전시회" },
  { date: "2026-01-11", endDate: "2026-02-05", title: "설 선물세트 사전예약 시즌", category: "쇼핑시즌", desc: "설 선물세트 사전예약, 명절 상품권·법인 선물 수요" },

  { date: "2026-02-14", title: "밸런타인데이", category: "기념일", desc: "밸런타인데이" },
  { date: "2026-02-14", endDate: "2026-02-18", title: "설 연휴 소비 피크", category: "쇼핑시즌", desc: "설 연휴 포함 명절 소비 피크" },
  { date: "2026-02-16", endDate: "2026-02-18", title: "설날 연휴", category: "공휴일", desc: "설날 공휴일" },
  { date: "2026-02-21", endDate: "2026-02-28", title: "대학 OT·입학 시즌", category: "시즌·학사", desc: "대학 OT·입학·개강 준비 시즌" },
  { date: "2026-02-28", endDate: "2026-03-02", title: "삼일절 연휴 구간", category: "공휴일", desc: "삼일절 연휴 구간" },

  { date: "2026-03-01", title: "삼일절", category: "공휴일", desc: "삼일절" },
  { date: "2026-03-02", title: "삼일절 대체공휴일", category: "공휴일", desc: "삼일절 대체공휴일" },
  { date: "2026-03-01", endDate: "2026-03-07", title: "개학·개강 시즌", category: "시즌·학사", desc: "초·중·고 개학, 대학교 개강 시즌" },
  { date: "2026-03-02", endDate: "2026-03-05", title: "MWC Barcelona 2026", category: "IT·컨퍼런스", desc: "모바일 월드 콩그레스 바르셀로나" },
  { date: "2026-03-12", endDate: "2026-03-24", title: "KBO 시범경기", category: "스포츠", desc: "프로야구 시범경기 기간" },
  { date: "2026-03-14", title: "화이트데이", category: "기념일", desc: "화이트데이" },
  { date: "2026-03-20", endDate: "2026-04-07", title: "벚꽃 개화·나들이 시즌", category: "시즌·학사", desc: "벚꽃 개화 및 나들이 시즌" },
  { date: "2026-03-28", title: "KBO 정규시즌 개막", category: "스포츠", desc: "프로야구 정규시즌 개막" },

  { date: "2026-04-01", endDate: "2026-04-10", title: "벚꽃·봄나들이 피크", category: "시즌·학사", desc: "수도권 벚꽃·봄나들이 피크" },
  { date: "2026-04-05", title: "부활절", category: "기념일", desc: "부활절" },
  { date: "2026-04-11", endDate: "2026-04-20", title: "중간고사 시즌", category: "시즌·학사", desc: "중간고사 시즌, 대학가 카페·간식·편의점 수요" },
  { date: "2026-04-21", endDate: "2026-05-07", title: "어린이날·어버이날 선물 시즌", category: "쇼핑시즌", desc: "어린이날·어버이날 선물 사전 구매" },

  { date: "2026-05-01", title: "근로자의 날", category: "공휴일", desc: "근로자의 날" },
  { date: "2026-05-05", title: "어린이날", category: "공휴일", desc: "어린이날" },
  { date: "2026-05-08", title: "어버이날", category: "기념일", desc: "어버이날" },
  { date: "2026-05-15", title: "스승의 날", category: "기념일", desc: "스승의 날" },
  { date: "2026-05-11", endDate: "2026-05-20", title: "성년의 날 시즌", category: "기념일", desc: "성년의 날 시즌" },
  { date: "2026-05-24", title: "부처님오신날", category: "공휴일", desc: "부처님오신날" },
  { date: "2026-05-25", title: "부처님오신날 대체공휴일", category: "공휴일", desc: "부처님오신날 대체공휴일" },
  { date: "2026-05-21", endDate: "2026-05-31", title: "여름휴가 사전예약 시즌", category: "쇼핑시즌", desc: "여름휴가 사전예약, 여행·숙박·항공 프로모션 시작" },

  { date: "2026-06-03", title: "전국동시지방선거", category: "공휴일", desc: "제9회 전국동시지방선거" },
  { date: "2026-06-06", title: "현충일", category: "공휴일", desc: "현충일" },
  { date: "2026-06-08", endDate: "2026-06-12", title: "Apple WWDC 2026", category: "IT·컨퍼런스", desc: "애플 세계 개발자 컨퍼런스" },
  { date: "2026-06-11", endDate: "2026-07-19", title: "FIFA 월드컵 2026", category: "스포츠", desc: "FIFA 월드컵 2026 본선" },
  { date: "2026-06-11", endDate: "2026-06-30", title: "대학 기말고사·종강", category: "시즌·학사", desc: "대학 기말고사·종강 시즌" },
  { date: "2026-06-21", endDate: "2026-06-30", title: "초중고 기말고사 시즌", category: "시즌·학사", desc: "초·중·고 기말고사 시즌" },
  { date: "2026-06-24", endDate: "2026-06-26", title: "MWC Shanghai 2026", category: "IT·컨퍼런스", desc: "모바일 월드 콩그레스 상하이" },

  { date: "2026-07-17", title: "제헌절", category: "공휴일", desc: "제헌절" },
  { date: "2026-07-01", endDate: "2026-07-20", title: "대학 여름방학·계절학기", category: "시즌·학사", desc: "대학 여름방학, 여름 계절학기" },
  { date: "2026-07-11", endDate: "2026-08-31", title: "초중고 여름방학 시즌", category: "시즌·학사", desc: "초·중·고 여름방학 시즌" },
  { date: "2026-07-19", title: "FIFA 월드컵 결승", category: "스포츠", desc: "FIFA 월드컵 결승" },
  { date: "2026-07-21", endDate: "2026-08-10", title: "여름휴가·성수기 피크", category: "쇼핑시즌", desc: "여름휴가·성수기 피크" },

  { date: "2026-08-15", title: "광복절", category: "공휴일", desc: "광복절" },
  { date: "2026-08-17", title: "광복절 대체공휴일", category: "공휴일", desc: "광복절 대체공휴일" },
  { date: "2026-08-01", endDate: "2026-08-20", title: "여름휴가 피크 수요", category: "쇼핑시즌", desc: "여름휴가 피크, 숙박·교통·편의점·음료 수요" },
  { date: "2026-08-21", endDate: "2026-08-31", title: "2학기 개강 준비 시즌", category: "시즌·학사", desc: "2학기 개강·개학 준비 시즌" },

  { date: "2026-09-01", endDate: "2026-09-07", title: "대학 2학기 개강", category: "시즌·학사", desc: "대학 2학기 개강" },
  { date: "2026-09-01", endDate: "2026-09-10", title: "초중고 2학기 본격화", category: "시즌·학사", desc: "초·중·고 2학기 본격화" },
  { date: "2026-09-01", endDate: "2026-09-20", title: "추석 선물세트 사전예약", category: "쇼핑시즌", desc: "추석 선물세트 사전예약" },
  { date: "2026-09-24", endDate: "2026-09-26", title: "추석 연휴", category: "공휴일", desc: "추석 연휴" },
  { date: "2026-09-27", endDate: "2026-09-30", title: "추석 이후 소비 변화", category: "쇼핑시즌", desc: "추석 이후 여행·문화생활·환불/교환 응대 증가" },

  { date: "2026-10-03", title: "개천절", category: "공휴일", desc: "개천절" },
  { date: "2026-10-05", title: "개천절 대체공휴일", category: "공휴일", desc: "개천절 대체공휴일" },
  { date: "2026-10-09", title: "한글날", category: "공휴일", desc: "한글날" },
  { date: "2026-10-01", endDate: "2026-10-20", title: "단풍·가을여행 시즌", category: "시즌·학사", desc: "단풍·가을여행 시즌" },
  { date: "2026-10-11", endDate: "2026-10-20", title: "중간고사 시즌", category: "시즌·학사", desc: "중간고사 시즌" },
  { date: "2026-10-21", endDate: "2026-10-31", title: "핼러윈 시즌", category: "기념일", desc: "핼러윈 시즌" },

  { date: "2026-11-11", title: "빼빼로데이", category: "기념일", desc: "빼빼로데이" },
  { date: "2026-11-11", title: "광군제", category: "쇼핑시즌", desc: "광군제(솽스이) 쇼핑 시즌" },
  { date: "2026-11-19", title: "수능", category: "시즌·학사", desc: "2027학년도 대학수학능력시험" },
  { date: "2026-11-20", endDate: "2026-11-30", title: "수능 이후 소비 증가", category: "쇼핑시즌", desc: "수능 이후 외식·영화·게임·쇼핑 수요" },
  { date: "2026-11-27", title: "블랙프라이데이", category: "쇼핑시즌", desc: "블랙프라이데이" },
  { date: "2026-11-30", title: "사이버먼데이", category: "쇼핑시즌", desc: "사이버먼데이" },

  { date: "2026-12-01", endDate: "2026-12-20", title: "대학 기말고사·종강", category: "시즌·학사", desc: "대학 기말고사·종강" },
  { date: "2026-12-11", title: "수능 성적 통지", category: "시즌·학사", desc: "수능 성적 통지" },
  { date: "2026-12-11", endDate: "2026-12-31", title: "연말 소비 시즌", category: "쇼핑시즌", desc: "송년회, 법인 선물, 연말정산 준비" },
  { date: "2026-12-24", title: "크리스마스이브", category: "기념일", desc: "크리스마스이브" },
  { date: "2026-12-25", title: "크리스마스", category: "공휴일", desc: "크리스마스" },
  { date: "2026-12-31", title: "연말·신년 프로모션 전환", category: "쇼핑시즌", desc: "연말, 카운트다운, 신년 프로모션 전환" },
];

const today = new Date();
const isCurrentYear = today.getFullYear() === YEAR;
let currentMonth = isCurrentYear ? today.getMonth() : 0; // 0-11
const todayKey = formatDateKey(today.getFullYear(), today.getMonth(), today.getDate());

// mode: "none" | "selected" | "single-edit" | "range-picking" | "range-edit"
let mode = "none";
let selectedDateKey = null;
let rangeStart = null;
let rangeEnd = null;

let memoTabs = loadMemoTabs();
let activeTabIndex = 0;
let targetTabIndex = 0;

const monthLabel = document.getElementById("monthLabel");
const calendarGrid = document.getElementById("calendarGrid");
const categoryLegend = document.getElementById("categoryLegend");
const eventPanelTitle = document.getElementById("eventPanelTitle");
const eventListEl = document.getElementById("eventList");
const platformPanelTitle = document.getElementById("platformPanelTitle");
const platformListEl = document.getElementById("platformList");
const prevBtn = document.getElementById("prevMonth");
const nextBtn = document.getElementById("nextMonth");

const swipeViewport = document.getElementById("swipeViewport");
const swipeTrack = document.getElementById("swipeTrack");
const swipeDots = document.querySelectorAll(".swipe-dot");
let eventPage = 0;
let dragStartX = null;
let dragDeltaX = 0;

const dateActionPanel = document.getElementById("dateActionPanel");
const selectedDateLabel = document.getElementById("selectedDateLabel");
const closeDateActionBtn = document.getElementById("closeDateAction");
const actionButtons = document.getElementById("actionButtons");
const btnSingleMemo = document.getElementById("btnSingleMemo");
const btnRangeMemo = document.getElementById("btnRangeMemo");
const rangeHint = document.getElementById("rangeHint");
const memoForm = document.getElementById("memoForm");
const memoInput = document.getElementById("memoInput");
const memoCancelBtn = document.getElementById("memoCancel");
const memoSaveBtn = document.getElementById("memoSave");
const myMemoTitle = document.getElementById("myMemoTitle");
const myMemoList = document.getElementById("myMemoList");
const memoTabBar = document.getElementById("memoTabBar");
const memoTabPicker = document.getElementById("memoTabPicker");

prevBtn.addEventListener("click", () => changeMonth(-1));
nextBtn.addEventListener("click", () => changeMonth(1));

swipeDots.forEach((dot) => {
  dot.addEventListener("click", () => setEventPage(Number(dot.dataset.page)));
});
swipeViewport.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startDrag(e.clientX);
});
window.addEventListener("mousemove", (e) => {
  if (dragStartX !== null) moveDrag(e.clientX);
});
window.addEventListener("mouseup", () => {
  if (dragStartX !== null) endDrag();
});
swipeViewport.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
swipeViewport.addEventListener("touchmove", (e) => moveDrag(e.touches[0].clientX));
swipeViewport.addEventListener("touchend", endDrag);

closeDateActionBtn.addEventListener("click", () => {
  resetSelection();
  render();
});
btnSingleMemo.addEventListener("click", () => {
  targetTabIndex = activeTabIndex;
  mode = "single-edit";
  memoInput.value = memoTabs[activeTabIndex].single[selectedDateKey] || "";
  render();
  memoInput.focus();
});
btnRangeMemo.addEventListener("click", () => {
  targetTabIndex = activeTabIndex;
  mode = "range-picking";
  rangeStart = selectedDateKey;
  render();
});
memoCancelBtn.addEventListener("click", () => {
  if (mode === "range-edit") {
    resetSelection();
  } else {
    mode = "selected";
  }
  render();
});
memoSaveBtn.addEventListener("click", () => {
  const text = memoInput.value.trim();
  const tab = memoTabs[targetTabIndex];
  if (mode === "single-edit") {
    if (text) tab.single[selectedDateKey] = text;
    else delete tab.single[selectedDateKey];
  } else if (mode === "range-edit" && text) {
    tab.ranges.push({ id: String(Date.now()), start: rangeStart, end: rangeEnd, text });
  }
  saveMemoTabs();
  resetSelection();
  render();
});

function loadMemoTabs() {
  try {
    const raw = localStorage.getItem(MEMO_TABS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.tabs) && parsed.tabs.length > 0) return parsed.tabs;
    }
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) {
      const legacy = JSON.parse(legacyRaw);
      return [{ id: "tab-1", name: "내 메모", single: legacy.single || {}, ranges: legacy.ranges || [] }];
    }
  } catch {
    // ignore parse errors, fall through to default
  }
  return [{ id: "tab-1", name: "내 메모", single: {}, ranges: [] }];
}

function saveMemoTabs() {
  localStorage.setItem(MEMO_TABS_STORAGE_KEY, JSON.stringify({ tabs: memoTabs }));
}

function addMemoTab() {
  memoTabs.push({ id: "tab-" + Date.now(), name: `새 메모 ${memoTabs.length + 1}`, single: {}, ranges: [] });
  activeTabIndex = memoTabs.length - 1;
  saveMemoTabs();
  render();
}

function deleteMemoTab(index) {
  if (memoTabs.length <= 1) return;
  memoTabs.splice(index, 1);
  if (activeTabIndex > index) activeTabIndex -= 1;
  else if (activeTabIndex >= memoTabs.length) activeTabIndex = memoTabs.length - 1;
  saveMemoTabs();
  render();
}

function startRenameTab(index, chip, nameSpan) {
  const input = document.createElement("input");
  input.className = "memo-tab-name-input";
  input.value = memoTabs[index].name;
  chip.replaceChild(input, nameSpan);
  input.focus();
  input.select();

  const commit = () => {
    const newName = input.value.trim();
    if (newName) memoTabs[index].name = newName;
    saveMemoTabs();
    render();
  };
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") input.blur();
  });
  input.addEventListener("blur", commit);
}

function escapeHtml(str) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return str.replace(/[&<>"']/g, (ch) => map[ch]);
}

function formatDateKey(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatLabel(dateKey) {
  if (!dateKey) return "";
  const [, m, d] = dateKey.split("-");
  return `${Number(m)}월 ${Number(d)}일`;
}

function eventCoversDate(event, dateKey) {
  const end = event.endDate || event.date;
  return dateKey >= event.date && dateKey <= end;
}

function resetSelection() {
  mode = "none";
  selectedDateKey = null;
  rangeStart = null;
  rangeEnd = null;
}

function changeMonth(diff) {
  const next = currentMonth + diff;
  if (next < 0 || next > 11) return;
  currentMonth = next;
  if (mode !== "range-picking") resetSelection();
  render();
}

function setEventPage(index, animate = true) {
  eventPage = index;
  swipeTrack.style.transition = animate ? "transform 0.25s ease" : "none";
  swipeTrack.style.transform = `translateX(-${index * 50}%)`;
  swipeDots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function startDrag(clientX) {
  dragStartX = clientX;
  dragDeltaX = 0;
  swipeTrack.style.transition = "none";
  swipeViewport.classList.add("dragging");
}

function moveDrag(clientX) {
  if (dragStartX === null) return;
  dragDeltaX = clientX - dragStartX;
  const basePercent = -eventPage * 50;
  const deltaPercent = (dragDeltaX / swipeViewport.clientWidth) * 50;
  swipeTrack.style.transform = `translateX(${basePercent + deltaPercent}%)`;
}

function endDrag() {
  if (dragStartX === null) return;
  const threshold = swipeViewport.clientWidth * 0.15;
  if (dragDeltaX < -threshold && eventPage < 1) {
    setEventPage(1);
  } else if (dragDeltaX > threshold && eventPage > 0) {
    setEventPage(0);
  } else {
    setEventPage(eventPage);
  }
  dragStartX = null;
  dragDeltaX = 0;
  swipeViewport.classList.remove("dragging");
}

function getMonthRange(monthIndex) {
  const prefix = `${YEAR}-${String(monthIndex + 1).padStart(2, "0")}`;
  const lastDay = new Date(YEAR, monthIndex + 1, 0).getDate();
  return { start: `${prefix}-01`, end: `${prefix}-${String(lastDay).padStart(2, "0")}` };
}

function getEventsForMonth(monthIndex) {
  const { start: monthStart, end: monthEnd } = getMonthRange(monthIndex);
  return EVENTS.filter((e) => e.date <= monthEnd && (e.endDate || e.date) >= monthStart).sort((a, b) => a.date.localeCompare(b.date));
}

function isInSavedRange(dateKey) {
  return memoTabs[activeTabIndex].ranges.some((r) => dateKey >= r.start && dateKey <= r.end);
}

function isInDraftRange(dateKey) {
  if (mode === "range-picking" && rangeStart) return dateKey === rangeStart;
  if (mode === "range-edit" && rangeStart && rangeEnd) return dateKey >= rangeStart && dateKey <= rangeEnd;
  return false;
}

function handleDayClick(dateKey) {
  if (mode === "range-picking") {
    if (dateKey < rangeStart) {
      rangeEnd = rangeStart;
      rangeStart = dateKey;
    } else {
      rangeEnd = dateKey;
    }
    mode = "range-edit";
    memoInput.value = "";
    render();
    memoInput.focus();
    return;
  }

  selectedDateKey = dateKey;
  mode = "selected";
  render();
}

function renderLegend() {
  categoryLegend.innerHTML = Object.entries(CATEGORY_COLORS)
    .map(([name, color]) => `<span class="legend-item"><span class="legend-dot" style="background:${color}"></span>${name}</span>`)
    .join("");
}

function render() {
  monthLabel.textContent = `${YEAR}년 ${currentMonth + 1}월`;
  prevBtn.disabled = currentMonth === 0;
  nextBtn.disabled = currentMonth === 11;

  renderCalendar();
  renderMemoTabBar();
  renderDateActionPanel();
  renderMyMemos();
  renderEventList();
  renderPlatformList();
}

function renderCalendar() {
  calendarGrid.innerHTML = "";

  const firstWeekday = new Date(YEAR, currentMonth, 1).getDay();
  const daysInMonth = new Date(YEAR, currentMonth + 1, 0).getDate();

  for (let i = 0; i < firstWeekday; i++) {
    const empty = document.createElement("div");
    empty.className = "day-cell empty";
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = formatDateKey(YEAR, currentMonth, day);
    const dayEvents = EVENTS.filter((e) => eventCoversDate(e, dateKey));
    const weekday = (firstWeekday + day - 1) % 7;

    const cell = document.createElement("div");
    cell.className = "day-cell";
    if (weekday === 0) cell.classList.add("sunday");
    if (weekday === 6) cell.classList.add("saturday");
    if (memoTabs[activeTabIndex].single[dateKey]) cell.classList.add("has-memo");
    if (isInSavedRange(dateKey) || isInDraftRange(dateKey)) cell.classList.add("in-range");
    if (dateKey === todayKey) cell.classList.add("today");
    if ((mode === "selected" || mode === "single-edit") && dateKey === selectedDateKey) cell.classList.add("selected");
    if (mode === "range-picking" && dateKey === rangeStart) cell.classList.add("selected");
    if (mode === "range-edit" && (dateKey === rangeStart || dateKey === rangeEnd)) cell.classList.add("selected");

    const dayNumber = document.createElement("span");
    dayNumber.className = "day-number";
    dayNumber.textContent = String(day);
    cell.appendChild(dayNumber);

    if (dayEvents.length > 0) {
      cell.classList.add("has-event");
      const dotsWrap = document.createElement("div");
      dotsWrap.className = "event-dots";
      const categories = [...new Set(dayEvents.map((e) => e.category))].slice(0, 3);
      categories.forEach((cat) => {
        const dot = document.createElement("span");
        dot.className = "event-dot";
        dot.style.background = CATEGORY_COLORS[cat] || "#3182F6";
        dotsWrap.appendChild(dot);
      });
      cell.appendChild(dotsWrap);
    }

    cell.addEventListener("click", () => handleDayClick(dateKey));

    calendarGrid.appendChild(cell);
  }
}

function renderDateActionPanel() {
  if (mode === "none") {
    dateActionPanel.hidden = true;
    return;
  }

  dateActionPanel.hidden = false;

  if (mode === "range-picking") {
    selectedDateLabel.textContent = `${formatLabel(rangeStart)} ~ 종료일 선택 중`;
  } else if (mode === "range-edit") {
    selectedDateLabel.textContent = `${formatLabel(rangeStart)} ~ ${formatLabel(rangeEnd)}`;
  } else {
    selectedDateLabel.textContent = formatLabel(selectedDateKey);
  }

  actionButtons.hidden = mode !== "selected";
  rangeHint.hidden = mode !== "range-picking";
  memoForm.hidden = mode !== "single-edit" && mode !== "range-edit";
  if (!memoForm.hidden) renderMemoTabPicker();
}

function renderMemoTabBar() {
  memoTabBar.innerHTML = "";

  memoTabs.forEach((tab, index) => {
    const chip = document.createElement("div");
    chip.className = "memo-tab" + (index === activeTabIndex ? " active" : "");

    const nameSpan = document.createElement("span");
    nameSpan.className = "memo-tab-name";
    nameSpan.textContent = tab.name;
    nameSpan.title = tab.name;
    nameSpan.addEventListener("click", () => {
      activeTabIndex = index;
      render();
    });
    chip.appendChild(nameSpan);

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "memo-tab-icon-btn";
    editBtn.textContent = "✎";
    editBtn.setAttribute("aria-label", "탭 이름 변경");
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      startRenameTab(index, chip, nameSpan);
    });
    chip.appendChild(editBtn);

    if (memoTabs.length > 1) {
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "memo-tab-icon-btn";
      delBtn.textContent = "×";
      delBtn.setAttribute("aria-label", "탭 삭제");
      delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (confirm(`"${tab.name}" 탭을 삭제할까요? 안에 있는 메모도 함께 삭제됩니다.`)) {
          deleteMemoTab(index);
        }
      });
      chip.appendChild(delBtn);
    }

    memoTabBar.appendChild(chip);
  });

  const addBtn = document.createElement("button");
  addBtn.type = "button";
  addBtn.className = "memo-tab-add";
  addBtn.textContent = "+";
  addBtn.setAttribute("aria-label", "탭 추가");
  addBtn.addEventListener("click", addMemoTab);
  memoTabBar.appendChild(addBtn);
}

function renderMemoTabPicker() {
  memoTabPicker.innerHTML = "";

  const label = document.createElement("span");
  label.className = "memo-tab-picker-label";
  label.textContent = "저장할 탭";
  memoTabPicker.appendChild(label);

  memoTabs.forEach((tab, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "memo-tab-picker-btn" + (index === targetTabIndex ? " active" : "");
    btn.textContent = String(index + 1);
    btn.title = tab.name;
    btn.addEventListener("click", () => {
      targetTabIndex = index;
      renderMemoTabPicker();
    });
    memoTabPicker.appendChild(btn);
  });
}

function renderMyMemos() {
  const tab = memoTabs[activeTabIndex];
  const { start: monthStart, end: monthEnd } = getMonthRange(currentMonth);

  const items = [];
  Object.keys(tab.single).forEach((dateKey) => {
    if (dateKey >= monthStart && dateKey <= monthEnd) {
      items.push({ type: "single", date: dateKey, text: tab.single[dateKey] });
    }
  });
  tab.ranges.forEach((r) => {
    if (r.start <= monthEnd && r.end >= monthStart) {
      items.push({ type: "range", ...r });
    }
  });
  items.sort((a, b) => (a.date || a.start).localeCompare(b.date || b.start));

  myMemoTitle.textContent = `${tab.name} (${items.length}건)`;
  myMemoList.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.className = "event-empty";
    empty.textContent = "이 달에 작성한 메모가 없습니다. 날짜를 클릭해서 추가해보세요.";
    myMemoList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "event-item memo-item";

    const label = item.type === "single" ? formatLabel(item.date) : `${formatLabel(item.start)} ~ ${formatLabel(item.end)}`;
    const tagLabel = item.type === "single" ? "메모" : "기간";

    li.innerHTML = `
      <div class="event-item-body">
        <div class="event-top-row">
          <span class="event-date">${label}</span>
          <span class="event-tag memo-tag">${tagLabel}</span>
        </div>
        <p class="event-desc">${escapeHtml(item.text)}</p>
      </div>
      <button class="memo-delete" aria-label="메모 삭제">×</button>
    `;

    li.querySelector(".memo-delete").addEventListener("click", () => {
      if (item.type === "single") delete tab.single[item.date];
      else tab.ranges = tab.ranges.filter((r) => r.id !== item.id);
      saveMemoTabs();
      render();
    });

    myMemoList.appendChild(li);
  });
}

function renderEventList() {
  const monthEvents = getEventsForMonth(currentMonth);
  eventPanelTitle.textContent = `${currentMonth + 1}월 이벤트 (${monthEvents.length}건)`;
  eventListEl.innerHTML = "";

  if (monthEvents.length === 0) {
    const empty = document.createElement("li");
    empty.className = "event-empty";
    empty.textContent = "이 달에는 등록된 이벤트가 없습니다.";
    eventListEl.appendChild(empty);
    return;
  }

  monthEvents.forEach((event) => {
    const item = document.createElement("li");
    item.className = "event-item";
    item.style.setProperty("--dot-color", CATEGORY_COLORS[event.category] || "#3182F6");
    if (selectedDateKey && eventCoversDate(event, selectedDateKey)) item.classList.add("active");

    const dateLabel = event.endDate && event.endDate !== event.date ? `${formatLabel(event.date)} ~ ${formatLabel(event.endDate)}` : formatLabel(event.date);

    item.innerHTML = `
      <div class="event-item-body">
        <div class="event-top-row">
          <span class="event-date">${dateLabel}</span>
          <span class="event-tag">${event.category}</span>
        </div>
        <div class="event-title">${event.title}</div>
        <p class="event-desc">${event.desc}</p>
      </div>
    `;

    eventListEl.appendChild(item);
  });
}

function renderPlatformList() {
  const items = PLATFORM_EVENTS[currentMonth + 1] || [];
  platformPanelTitle.textContent = `${currentMonth + 1}월 플랫폼 이슈 (${items.length}건)`;
  platformListEl.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("li");
    empty.className = "event-empty";
    empty.textContent = "이 달에는 등록된 플랫폼 이슈가 없습니다.";
    platformListEl.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "event-item";
    li.style.setProperty("--dot-color", PLATFORM_COLORS[item.platform] || "#6B7280");

    li.innerHTML = `
      <div class="event-item-body">
        <div class="event-top-row">
          <span class="event-tag">${item.platform}</span>
        </div>
        <p class="event-desc">${item.desc}</p>
      </div>
    `;

    platformListEl.appendChild(li);
  });
}

renderLegend();
render();
setEventPage(0, false);
