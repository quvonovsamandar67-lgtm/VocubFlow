// ===== Tarjimalar =====
const translations = {
  uz: {
    subtitle: "So'zlarni oson yodlang",
    tabAdd: "Qo'shish", tabList: "So'zlarim", tabDictionary: "Lug'at",
    tabPractice: "Mashq", tabTest: "Test", tabStats: "Statistika",
    addTitle: "Yangi so'z qo'shish",
    inputForeign: "Chet tilidagi so'z (masalan: apple)",
    inputNative: "Tarjima (masalan: olma)",
    inputExplanation: "Izoh (ixtiyoriy) - masalan: Meva, qizil rangda",
    btnAdd: "Qo'shish",
    btnAutoTranslate: "Avtomatik tarjima qilish",
    listTitle: "Mening so'zlarim",
    emptyList: "Hozircha so'z yo'q. \"Qo'shish\" bo'limidan boshlang!",
    dictTitle: "Lug'at",
    dictSearch: "So'z qidirish...",
    dictEmpty: "So'z topilmadi.",
    dictAll: "Barchasi",
    dictAdd: "Qo'shish",
    dictAdded: "✓ Qo'shilgan",
    practiceTitle: "Mashq",
    practiceInfo: "Har bir so'zni 3 marta to'g'ri yozishingiz kerak.",
    btnStart: "Boshlash", promptLabel: "Tarjima:",
    promptHint: "Chet tilidagi so'zni yozing:",
    practicePlaceholder: "Javobingizni yozing...",
    btnCheck: "Tekshirish",
    doneTitle: "🎉 Tabriklaymiz!",
    doneText: "Barcha so'zlarni o'rgandingiz!",
    btnRestart: "Yana boshlash",
    testTitle: "Test rejimi",
    testInfo: "4 variantdan to'g'ri javobni tanlang.",
    btnTestStart: "Boshlash",
    testQuestion: "Tarjima:",
    testHint: "To'g'ri javobni tanlang:",
    testDoneTitle: "🎉 Test tugadi!",
    btnTestRestart: "Yana boshlash",
    testResult: "Siz {score} / {total} ball to'pladingiz",
    testResultGood: "Ajoyib natija! 🏆",
    testResultMid: "Yaxshi! Yana urinib ko'ring! 💪",
    testResultBad: "Mashq qilishda davom eting! 📚",
    testNoWords: "Test uchun kamida 2 ta so'z kerak!",
    msgEmpty: "Ikkala maydonni ham to'ldiring!",
    msgDuplicate: "Bu so'z allaqachon qo'shilgan!",
    msgAdded: "✅ So'z qo'shildi!",
    msgTranslating: "🌐 Tarjima qilinmoqda...",
    msgTranslateFail: "❌ Tarjima qilinmadi. Qo'lda yozing.",
    msgTranslateSuccess: "✅ Tarjima qilindi!",
    msgExported: "✅ So'zlar yuklab olindi!",
    msgImported: "✅ {count} ta so'z qo'shildi!",
    msgImportFail: "❌ Fayl formati noto'g'ri!",
    fbCorrect: "✅ To'g'ri!",
    fbCorrectLearned: "✅ To'g'ri! So'z o'rganildi! 🎉",
    fbWrong: "❌ Xato. Yana urinib ko'ring!",
    countSuffix: " ta",
    statsTitle: "Statistika",
    statTotal: "Jami so'z", statLearned: "O'rganilgan", statPercent: "Foiz",
    infoStreak: "Kunlik streak", infoToday: "Bugun",
    infoBest: "Eng yaxshi streak", suffixDays: " kun",
  },
  ru: {
    subtitle: "Легко запоминайте слова",
    tabAdd: "Добавить", tabList: "Мои слова", tabDictionary: "Словарь",
    tabPractice: "Практика", tabTest: "Тест", tabStats: "Статистика",
    addTitle: "Добавить новое слово",
    inputForeign: "Слово на иностранном языке",
    inputNative: "Перевод",
    inputExplanation: "Примечание (необязательно)",
    btnAdd: "Добавить",
    btnAutoTranslate: "Автоматический перевод",
    listTitle: "Мои слова",
    emptyList: "Пока слов нет. Начните с раздела \"Добавить\"!",
    dictTitle: "Словарь",
    dictSearch: "Поиск слова...",
    dictEmpty: "Слово не найдено.",
    dictAll: "Все",
    dictAdd: "Добавить",
    dictAdded: "✓ Добавлено",
    practiceTitle: "Практика",
    practiceInfo: "Каждое слово нужно написать правильно 3 раза.",
    btnStart: "Начать", promptLabel: "Перевод:",
    promptHint: "Напишите слово на иностранном языке:",
    practicePlaceholder: "Введите ответ...",
    btnCheck: "Проверить",
    doneTitle: "🎉 Поздравляем!",
    doneText: "Вы выучили все слова!",
    btnRestart: "Начать заново",
    testTitle: "Режим теста",
    testInfo: "Выберите правильный ответ из 4 вариантов.",
    btnTestStart: "Начать",
    testQuestion: "Перевод:",
    testHint: "Выберите правильный ответ:",
    testDoneTitle: "🎉 Тест завершён!",
    btnTestRestart: "Начать заново",
    testResult: "Вы набрали {score} / {total} баллов",
    testResultGood: "Отличный результат! 🏆",
    testResultMid: "Хорошо! Попробуйте ещё раз! 💪",
    testResultBad: "Продолжайте практиковаться! 📚",
    testNoWords: "Для теста нужно минимум 2 слова!",
    msgEmpty: "Заполните оба поля!",
    msgDuplicate: "Это слово уже добавлено!",
    msgAdded: "✅ Слово добавлено!",
    msgTranslating: "🌐 Перевод...",
    msgTranslateFail: "❌ Не удалось перевести. Введите вручную.",
    msgTranslateSuccess: "✅ Переведено!",
    msgExported: "✅ Слова экспортированы!",
    msgImported: "✅ Добавлено слов: {count}!",
    msgImportFail: "❌ Неверный формат файла!",
    fbCorrect: "✅ Правильно!",
    fbCorrectLearned: "✅ Правильно! Слово выучено! 🎉",
    fbWrong: "❌ Ошибка. Попробуйте ещё раз!",
    countSuffix: " шт.",
    statsTitle: "Статистика",
    statTotal: "Всего слов", statLearned: "Выучено", statPercent: "Процент",
    infoStreak: "Серия дней", infoToday: "Сегодня",
    infoBest: "Лучшая серия", suffixDays: " дн.",
  },
  en: {
    subtitle: "Learn words easily",
    tabAdd: "Add", tabList: "My words", tabDictionary: "Dictionary",
    tabPractice: "Practice", tabTest: "Test", tabStats: "Statistics",
    addTitle: "Add new word",
    inputForeign: "Foreign word (e.g. apple)",
    inputNative: "Translation (e.g. olma)",
    inputExplanation: "Note (optional) - e.g. Fruit, red color",
    btnAdd: "Add",
    btnAutoTranslate: "Auto translate",
    listTitle: "My words",
    emptyList: "No words yet. Start from the \"Add\" section!",
    dictTitle: "Dictionary",
    dictSearch: "Search word...",
    dictEmpty: "No words found.",
    dictAll: "All",
    dictAdd: "Add",
    dictAdded: "✓ Added",
    practiceTitle: "Practice",
    practiceInfo: "You must type each word correctly 3 times.",
    btnStart: "Start", promptLabel: "Translation:",
    promptHint: "Type the foreign word:",
    practicePlaceholder: "Type your answer...",
    btnCheck: "Check",
    doneTitle: "🎉 Congratulations!",
    doneText: "You've learned all the words!",
    btnRestart: "Start again",
    testTitle: "Test mode",
    testInfo: "Choose the correct answer from 4 options.",
    btnTestStart: "Start",
    testQuestion: "Translation:",
    testHint: "Choose the correct answer:",
    testDoneTitle: "🎉 Test finished!",
    btnTestRestart: "Start again",
    testResult: "You scored {score} / {total}",
    testResultGood: "Excellent result! 🏆",
    testResultMid: "Good! Try again! 💪",
    testResultBad: "Keep practicing! 📚",
    testNoWords: "You need at least 2 words for the test!",
    msgEmpty: "Fill in both fields!",
    msgDuplicate: "This word is already added!",
    msgAdded: "✅ Word added!",
    msgTranslating: "🌐 Translating...",
    msgTranslateFail: "❌ Translation failed. Enter manually.",
    msgTranslateSuccess: "✅ Translated!",
    msgExported: "✅ Words exported!",
    msgImported: "✅ Added {count} words!",
    msgImportFail: "❌ Invalid file format!",
    fbCorrect: "✅ Correct!",
    fbCorrectLearned: "✅ Correct! Word learned! 🎉",
    fbWrong: "❌ Wrong. Try again!",
    countSuffix: " items",
    statsTitle: "Statistics",
    statTotal: "Total words", statLearned: "Learned", statPercent: "Percent",
    infoStreak: "Daily streak", infoToday: "Today",
    infoBest: "Best streak", suffixDays: " days",
  }
};

// ===== Sozlamalar =====
const STORAGE_KEY = 'lingoflash_words';
const STATS_KEY = 'lingoflash_stats';
const LANG_KEY = 'lingoflash_lang';
const THEME_KEY = 'lingoflash_theme';

let words = [];
let currentWord = null;
let currentLang = 'uz';
let stats = { streak: 0, bestStreak: 0, today: 0, lastDate: null };
let currentDictCategory = 'all';
let currentDictSearch = '';

let testWords = [];
let testIndex = 0;
let testScore = 0;
let testAnswered = false;

// ===== DOM =====
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');
const langBtns = document.querySelectorAll('.lang-btn');
const themeToggle = document.getElementById('theme-toggle');

const inputForeign = document.getElementById('input-foreign');
const inputNative = document.getElementById('input-native');
const inputExplanation = document.getElementById('input-explanation');
const btnAdd = document.getElementById('btn-add');
const btnAutoTranslate = document.getElementById('btn-auto-translate');
const addMessage = document.getElementById('add-message');

const wordList = document.getElementById('word-list');
const wordCount = document.getElementById('word-count');
const emptyList = document.getElementById('empty-list');
const btnExport = document.getElementById('btn-export');
const btnImport = document.getElementById('btn-import');
const importFile = document.getElementById('import-file');

const dictSearch = document.getElementById('dict-search');
const dictCategories = document.getElementById('dict-categories');
const dictList = document.getElementById('dict-list');
const dictCount = document.getElementById('dict-count');
const dictEmpty = document.getElementById('dict-empty');

const btnStart = document.getElementById('btn-start');
const practiceStart = document.getElementById('practice-start');
const practiceArea = document.getElementById('practice-area');
const practiceDone = document.getElementById('practice-done');
const promptWord = document.getElementById('prompt-word');
const promptExplanation = document.getElementById('prompt-explanation');
const practiceInput = document.getElementById('practice-input');
const btnCheck = document.getElementById('btn-check');
const practiceFeedback = document.getElementById('practice-feedback');
const wordProgress = document.getElementById('word-progress');
const progressText = document.getElementById('progress-text');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const btnRestart = document.getElementById('btn-restart');
const btnVoicePractice = document.getElementById('btn-voice-practice');

const btnTestStart = document.getElementById('btn-test-start');
const testStart = document.getElementById('test-start');
const testArea = document.getElementById('test-area');
const testDone = document.getElementById('test-done');
const testPromptWord = document.getElementById('test-prompt-word');
const testPromptExplanation = document.getElementById('test-prompt-explanation');
const testOptions = document.getElementById('test-options');
const testFeedback = document.getElementById('test-feedback');
const testProgressText = document.getElementById('test-progress-text');
const testProgressFill = document.getElementById('test-progress-fill');
const testScoreEl = document.getElementById('test-score');
const testResultText = document.getElementById('test-result-text');
const btnTestRestart = document.getElementById('btn-test-restart');

// ===== Tarjima =====
function t(key) {
  return translations[currentLang][key] || key;
}

function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.documentElement.lang = currentLang;
  renderList();
  renderDictionary();
  updateStats();
}

// ===== Ovoz =====
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = /[а-яА-ЯёЁ]/.test(text) ? 'ru-RU' : 'en-US';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

// ===== Til =====
langBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    localStorage.setItem(LANG_KEY, currentLang);
    langBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateTexts();
  });
});

// ===== Dark mode =====
function applyTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  if (saved === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    themeToggle.textContent = '🌙';
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
});

// ===== Tablar =====
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    views.forEach(v => v.classList.remove('active'));
    const view = document.getElementById('view-' + tab.dataset.view);
    if (view) view.classList.add('active');

    if (tab.dataset.view === 'list') renderList();
    if (tab.dataset.view === 'dictionary') renderDictionary();
    if (tab.dataset.view === 'stats') updateStats();
    if (tab.dataset.view === 'practice') resetPracticeView();
    if (tab.dataset.view === 'test') resetTestView();
  });
});

// ===== Saqlash =====
function loadWords() {
  const raw = localStorage.getItem(STORAGE_KEY);
  words = raw ? JSON.parse(raw) : [];
}
function saveWords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
}

// ===== So'z qo'shish =====
btnAdd.addEventListener('click', addWord);
inputExplanation.addEventListener('keydown', e => { if (e.key === 'Enter') addWord(); });

function addWord() {
  const foreign = inputForeign.value.trim();
  const native = inputNative.value.trim();
  const explanation = inputExplanation.value.trim();

  if (!foreign || !native) {
    showMessage(t('msgEmpty'), 'error');
    return;
  }
  if (words.some(w => w.foreign.toLowerCase() === foreign.toLowerCase())) {
    showMessage(t('msgDuplicate'), 'error');
    return;
  }

  words.push({ id: Date.now(), foreign, native, explanation, progress: 0 });
  saveWords();

  inputForeign.value = '';
  inputNative.value = '';
  inputExplanation.value = '';
  inputForeign.focus();
  showMessage(t('msgAdded'), 'success');
  renderDictionary();
}

function showMessage(text, type) {
  addMessage.textContent = text;
  addMessage.className = 'message ' + type;
  setTimeout(() => {
    addMessage.textContent = '';
    addMessage.className = 'message';
  }, 2500);
}

// ===== Onlayn tarjima (MyMemory API) =====
btnAutoTranslate.addEventListener('click', async () => {
  const text = inputForeign.value.trim();
  if (!text) {
    showMessage(t('msgEmpty'), 'error');
    return;
  }

  btnAutoTranslate.disabled = true;
  showMessage(t('msgTranslating'), 'success');

  try {
    const url = 'https://api.mymemory.translated.net/get?q=' +
      encodeURIComponent(text) + '&langpair=en|uz' + '&de=SIZNING@EMAIL.COM';
    const res = await fetch(url);
    const data = await res.json();
    const translated = data.responseData && data.responseData.translatedText;

    if (translated && translated !== text) {
      inputNative.value = translated;
      showMessage(t('msgTranslateSuccess'), 'success');
      inputExplanation.focus();
    } else {
      showMessage(t('msgTranslateFail'), 'error');
    }
  } catch (e) {
    showMessage(t('msgTranslateFail'), 'error');
  }

  btnAutoTranslate.disabled = false;
});

// ===== Ro'yxat =====
function renderList() {
  wordList.innerHTML = '';
  wordCount.textContent = words.length + t('countSuffix');

  if (words.length === 0) {
    emptyList.classList.remove('hidden');
    return;
  }
  emptyList.classList.add('hidden');

  const sorted = [...words].sort((a, b) => a.progress - b.progress);

  sorted.forEach(w => {
    const li = document.createElement('li');
    li.className = 'word-item' + (w.progress >= 3 ? ' done' : '');

    const div1 = document.createElement('div');
    div1.className = 'word-texts';

    const spanForeign = document.createElement('span');
    spanForeign.className = 'word-foreign';
    spanForeign.textContent = w.foreign;

    const spanNative = document.createElement('span');
    spanNative.className = 'word-native';
    spanNative.textContent = w.native;

    div1.appendChild(spanForeign);
    div1.appendChild(spanNative);

    if (w.explanation) {
      const spanExp = document.createElement('span');
      spanExp.className = 'word-explanation';
      spanExp.textContent = '💬 ' + w.explanation;
      div1.appendChild(spanExp);
    }

    const div2 = document.createElement('div');
    div2.className = 'word-meta';

    const btnVoice = document.createElement('button');
    btnVoice.className = 'voice-btn';
    btnVoice.textContent = '🔊';
    btnVoice.addEventListener('click', e => {
      e.stopPropagation();
      speak(w.foreign);
    });

    const spanBadge = document.createElement('span');
    spanBadge.className = 'word-progress-badge' + (w.progress >= 3 ? ' done' : '');
    spanBadge.textContent = w.progress >= 3 ? '✓' : w.progress + '/3';

    const btnDel = document.createElement('button');
    btnDel.className = 'btn-delete';
    btnDel.textContent = '🗑';
    btnDel.addEventListener('click', () => deleteWord(w.id));

    div2.appendChild(btnVoice);
    div2.appendChild(spanBadge);
    div2.appendChild(btnDel);

    li.appendChild(div1);
    li.appendChild(div2);
    wordList.appendChild(li);
  });
}

function deleteWord(id) {
  words = words.filter(w => w.id !== id);
  saveWords();
  renderList();
  renderDictionary();
}

// ===== LUG'AT =====
function getAllDictWords() {
  const all = [];
  Object.keys(DICTIONARY).forEach(cat => {
    DICTIONARY[cat].forEach(w => {
      all.push({ category: cat, foreign: w.f, native: w.n, explanation: w.e });
    });
  });
  return all;
}

function renderDictCategories() {
  dictCategories.innerHTML = '';

  const allChip = document.createElement('button');
  allChip.className = 'dict-chip' + (currentDictCategory === 'all' ? ' active' : '');
  allChip.textContent = '🌟 ' + t('dictAll');
  allChip.addEventListener('click', () => {
    currentDictCategory = 'all';
    renderDictionary();
  });
  dictCategories.appendChild(allChip);

  Object.keys(DICTIONARY).forEach(cat => {
    const chip = document.createElement('button');
    chip.className = 'dict-chip' + (currentDictCategory === cat ? ' active' : '');
    chip.textContent = cat + ' (' + DICTIONARY[cat].length + ')';
    chip.addEventListener('click', () => {
      currentDictCategory = cat;
      renderDictionary();
    });
    dictCategories.appendChild(chip);
  });
}

function renderDictionary() {
  if (!dictList) return;
  renderDictCategories();
  dictList.innerHTML = '';

  let list = [];
  if (currentDictCategory === 'all') {
    list = getAllDictWords();
  } else {
    list = DICTIONARY[currentDictCategory].map(w => ({
      category: currentDictCategory,
      foreign: w.f,
      native: w.n,
      explanation: w.e
    }));
  }

  const query = currentDictSearch.toLowerCase().trim();
  if (query) {
    list = list.filter(w =>
      w.foreign.toLowerCase().includes(query) ||
      w.native.toLowerCase().includes(query) ||
      w.explanation.toLowerCase().includes(query)
    );
  }

  dictCount.textContent = list.length + t('countSuffix');

  if (list.length === 0) {
    dictEmpty.classList.remove('hidden');
    return;
  }
  dictEmpty.classList.add('hidden');

  list.forEach(w => {
    const alreadyAdded = words.some(x =>
      x.foreign.toLowerCase() === w.foreign.toLowerCase()
    );

    const li = document.createElement('li');
    li.className = 'word-item';

    const div1 = document.createElement('div');
    div1.className = 'word-texts';

    const spanForeign = document.createElement('span');
    spanForeign.className = 'word-foreign';
    spanForeign.textContent = w.foreign;

    const spanNative = document.createElement('span');
    spanNative.className = 'word-native';
    spanNative.textContent = w.native;

    const spanCat = document.createElement('span');
    spanCat.className = 'dict-info-row';
    spanCat.textContent = w.category + ' • ' + w.explanation;

    div1.appendChild(spanForeign);
    div1.appendChild(spanNative);
    div1.appendChild(spanCat);

    const div2 = document.createElement('div');
    div2.className = 'word-meta';

    const btnVoice = document.createElement('button');
    btnVoice.className = 'voice-btn';
    btnVoice.textContent = '🔊';
    btnVoice.addEventListener('click', e => {
      e.stopPropagation();
      speak(w.foreign);
    });

    const btnAddDict = document.createElement('button');
    btnAddDict.className = 'dict-add-btn' + (alreadyAdded ? ' added' : '');
    btnAddDict.textContent = alreadyAdded ? t('dictAdded') : '+ ' + t('dictAdd');
    if (!alreadyAdded) {
      btnAddDict.addEventListener('click', () => addFromDictionary(w, btnAddDict));
    }

    div2.appendChild(btnVoice);
    div2.appendChild(btnAddDict);

    li.appendChild(div1);
    li.appendChild(div2);
    dictList.appendChild(li);
  });
}

function addFromDictionary(w, btn) {
  if (words.some(x => x.foreign.toLowerCase() === w.foreign.toLowerCase())) return;

  words.push({
    id: Date.now(),
    foreign: w.foreign,
    native: w.native,
    explanation: w.explanation,
    progress: 0
  });
  saveWords();
  renderList();

  btn.textContent = t('dictAdded');
  btn.classList.add('added');
  btn.disabled = true;

  updateStats();
}

// Lug'at qidiruvi
dictSearch.addEventListener('input', e => {
  currentDictSearch = e.target.value;
  renderDictionary();
});

// ===== Import / Export =====
btnExport.addEventListener('click', () => {
  if (words.length === 0) {
    alert('Eksport uchun so\'zlar yo\'q');
    return;
  }
  const data = JSON.stringify({ words, exported: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'lingoflash-backup-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
});

btnImport.addEventListener('click', () => importFile.click());

importFile.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      const imported = Array.isArray(data) ? data : data.words;

      if (!Array.isArray(imported)) throw new Error('Noto\'g\'ri format');

      let count = 0;
      imported.forEach(w => {
        if (!w.foreign || !w.native) return;
        if (words.some(x => x.foreign.toLowerCase() === w.foreign.toLowerCase())) return;

        words.push({
          id: Date.now() + Math.random(),
          foreign: w.foreign,
          native: w.native,
          explanation: w.explanation || '',
          progress: w.progress || 0
        });
        count++;
      });

      saveWords();
      renderList();
      renderDictionary();
      updateStats();
      alert(t('msgImported').replace('{count}', count));
    } catch (err) {
      alert(t('msgImportFail'));
    }
    importFile.value = '';
  };
  reader.readAsText(file);
});

// ===== Mashq =====
btnStart.addEventListener('click', startPractice);
btnRestart.addEventListener('click', () => { resetPracticeView(); startPractice(); });
btnCheck.addEventListener('click', checkAnswer);
practiceInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });
btnVoicePractice.addEventListener('click', () => {
  if (currentWord) speak(currentWord.foreign);
});

function resetPracticeView() {
  practiceStart.classList.remove('hidden');
  practiceArea.classList.add('hidden');
  practiceDone.classList.add('hidden');
  practiceInput.value = '';
  practiceFeedback.textContent = '';
  practiceFeedback.className = 'feedback';
  currentWord = null;
}

function startPractice() {
  const remaining = words.filter(w => w.progress < 3);
  if (remaining.length === 0) {
    practiceStart.classList.add('hidden');
    practiceArea.classList.add('hidden');
    practiceDone.classList.remove('hidden');
    return;
  }
  practiceStart.classList.add('hidden');
  practiceDone.classList.add('hidden');
  practiceArea.classList.remove('hidden');
  nextWord();
}

function nextWord() {
  const remaining = words.filter(w => w.progress < 3);
  if (remaining.length === 0) {
    practiceArea.classList.add('hidden');
    practiceDone.classList.remove('hidden');
    return;
  }

  shuffle(remaining);
  currentWord = remaining[0];

  promptWord.textContent = currentWord.native;
  promptExplanation.textContent = currentWord.explanation ? '💬 ' + currentWord.explanation : '';

  practiceInput.value = '';
  practiceInput.focus();
  practiceFeedback.textContent = '';
  practiceFeedback.className = 'feedback';

  updateWordProgressBadge();
  updateOverallProgress();
}

function checkAnswer() {
  if (!currentWord) return;
  const answer = practiceInput.value.trim();
  if (!answer) return;

  const correct = currentWord.foreign.trim().toLowerCase();

  if (answer.toLowerCase() === correct) {
    currentWord.progress++;
    if (currentWord.progress === 3) registerWordLearned();
    saveWords();
    updateWordProgressBadge();
    updateOverallProgress();

    practiceFeedback.textContent = currentWord.progress >= 3
      ? t('fbCorrectLearned')
      : t('fbCorrect') + ' (' + currentWord.progress + '/3)';
    practiceFeedback.className = 'feedback success';

    setTimeout(nextWord, 900);
  } else {
    practiceFeedback.textContent = t('fbWrong');
    practiceFeedback.className = 'feedback error';
    practiceInput.select();
  }
}

function updateWordProgressBadge() {
  const p = currentWord.progress;
  wordProgress.textContent = p + '/3';
  wordProgress.className = 'counter-badge' + (p >= 3 ? ' done' : '');
}

function updateOverallProgress() {
  const total = words.length;
  const learned = words.filter(w => w.progress >= 3).length;
  const percent = total === 0 ? 0 : Math.round((learned / total) * 100);

  progressText.textContent = learned + ' / ' + total;
  progressPercent.textContent = percent + '%';
  progressFill.style.width = percent + '%';
}

// ===== Aralashtirish =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

// ===== TEST REJIMI =====
btnTestStart.addEventListener('click', startTest);
btnTestRestart.addEventListener('click', () => { resetTestView(); startTest(); });

function resetTestView() {
  testStart.classList.remove('hidden');
  testArea.classList.add('hidden');
  testDone.classList.add('hidden');
  testOptions.innerHTML = '';
  testFeedback.textContent = '';
  testFeedback.className = 'feedback';
}

function startTest() {
  if (words.length < 2) {
    alert(t('testNoWords'));
    return;
  }

  testWords = [...words];
  shuffle(testWords);
  testIndex = 0;
  testScore = 0;
  testAnswered = false;

  testStart.classList.add('hidden');
  testDone.classList.add('hidden');
  testArea.classList.remove('hidden');
  nextTestQuestion();
}

function nextTestQuestion() {
  if (testIndex >= testWords.length) {
    showTestResults();
    return;
  }

  testAnswered = false;
  const current = testWords[testIndex];

  testPromptWord.textContent = current.native;
  testPromptExplanation.textContent = current.explanation ? '💬 ' + current.explanation : '';
  testFeedback.textContent = '';
  testFeedback.className = 'feedback';

  const options = [current];
  const others = words.filter(w => w.id !== current.id);
  shuffle(others);

  while (options.length < 4 && others.length > 0) {
    options.push(others.shift());
  }
  shuffle(options);

  testOptions.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'test-option';
    btn.textContent = opt.foreign;
    btn.addEventListener('click', () => checkTestAnswer(btn, opt, current));
    testOptions.appendChild(btn);
  });

  testProgressText.textContent = (testIndex + 1) + ' / ' + testWords.length;
  testProgressFill.style.width = (testIndex / testWords.length * 100) + '%';
  testScoreEl.textContent = testScore;
}

function checkTestAnswer(btn, selected, correct) {
  if (testAnswered) return;
  testAnswered = true;

  const allBtns = testOptions.querySelectorAll('.test-option');
  allBtns.forEach(b => b.disabled = true);

  if (selected.id === correct.id) {
    btn.classList.add('correct');
    testScore++;
    testScoreEl.textContent = testScore;
    testFeedback.textContent = t('fbCorrect');
    testFeedback.className = 'feedback success';
  } else {
    btn.classList.add('wrong');
    allBtns.forEach(b => {
      if (b.textContent === correct.foreign) b.classList.add('correct');
    });
    testFeedback.textContent = t('fbWrong');
    testFeedback.className = 'feedback error';
  }

  testProgressFill.style.width = ((testIndex + 1) / testWords.length * 100) + '%';

  setTimeout(() => {
    testIndex++;
    nextTestQuestion();
  }, 1200);
}

function showTestResults() {
  testArea.classList.add('hidden');
  testDone.classList.remove('hidden');

  const total = testWords.length;
  const percent = Math.round(testScore / total * 100);

  let msg = '';
  if (percent >= 80) msg = t('testResultGood');
  else if (percent >= 50) msg = t('testResultMid');
  else msg = t('testResultBad');

  const resultText = t('testResult')
    .replace('{score}', testScore)
    .replace('{total}', total);

  testResultText.innerHTML = resultText + '<br><br>' + msg;
}

// ===== STATISTIKA =====
function loadStats() {
  const raw = localStorage.getItem(STATS_KEY);
  stats = raw ? JSON.parse(raw) : { streak: 0, bestStreak: 0, today: 0, lastDate: null };
  checkStreak();
}

function saveStats() {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

function checkStreak() {
  const today = todayStr();
  if (stats.lastDate === today) return;

  if (stats.lastDate) {
    const last = new Date(stats.lastDate);
    const now = new Date(today);
    const diffDays = Math.round((now - last) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) stats.streak++;
    else if (diffDays > 1) stats.streak = 1;
  } else {
    stats.streak = 1;
  }

  stats.lastDate = today;
  stats.today = 0;
  if (stats.streak > stats.bestStreak) stats.bestStreak = stats.streak;
  saveStats();
}

function updateStats() {
  const total = words.length;
  const learned = words.filter(w => w.progress >= 3).length;
  const percent = total === 0 ? 0 : Math.round((learned / total) * 100);

  const el = id => document.getElementById(id);
  if (el('stat-total')) el('stat-total').textContent = total;
  if (el('stat-learned')) el('stat-learned').textContent = learned;
  if (el('stat-percent')) el('stat-percent').textContent = percent + '%';
  if (el('stat-streak')) el('stat-streak').textContent = stats.streak + t('suffixDays');
  if (el('stat-today')) el('stat-today').textContent = stats.today;
  if (el('stat-best')) el('stat-best').textContent = stats.bestStreak + t('suffixDays');
}

function registerWordLearned() {
  const today = todayStr();
  if (stats.lastDate !== today) checkStreak();
  stats.today++;
  saveStats();
  updateStats();
}

// ===== Boshlash =====
function init() {
  loadWords();
  loadStats();

  const savedLang = localStorage.getItem(LANG_KEY) || 'uz';
  currentLang = savedLang;
  langBtns.forEach(b => {
    b.classList.toggle('active', b.dataset.lang === savedLang);
  });

  applyTheme();
  updateTexts();
  renderList();
  renderDictionary();
  updateStats();
}

init();

