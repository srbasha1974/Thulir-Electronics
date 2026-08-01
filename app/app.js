(function () {
  "use strict";

  var DATA = window.THULIR_DATA;
  var SECTIONS = DATA.sections;
  var QUESTIONS = DATA.questions;
  var STORAGE_KEY = "thulir-bench-quest-v1";

  var XP_TOPIC = 15;
  var XP_MODULE_BONUS = 50;
  var XP_CORRECT = 20;
  var XP_STREAK_STEP = 5;
  var XP_STREAK_MAX_BONUS = 25;

  var ELECTRONICS_TRACK = ["components", "protection-signal", "safety", "workshop", "test-measurement", "rework", "circuit-building", "power-electronics", "embedded-systems", "sensors-actuators", "motors-drives", "industrial-wiring", "plc-automation", "industrial-communication", "systematic-troubleshooting", "repair-documentation"];

  var BADGES = [
    { id: "first-spark", icon: "✨", name: "First Spark", desc: "Answer your first question correctly", check: function (s) { return s.quiz.totalCorrect >= 1; } },
    { id: "streak-5", icon: "🔥", name: "Streak 5", desc: "5 correct answers in a row", check: function (s) { return s.quiz.bestStreak >= 5; } },
    { id: "streak-10", icon: "🔥", name: "Streak 10", desc: "10 correct answers in a row", check: function (s) { return s.quiz.bestStreak >= 10; } },
    { id: "bookworm", icon: "📖", name: "Bookworm", desc: "Finish every topic in one module", check: function (s) { return moduleFullyRead(s) !== null; } },
    { id: "electronics-track", icon: "🏅", name: "Electronics Fundamentals", desc: "Read every topic across all 16 Electronics modules", check: function (s) { return tracksFullyRead(s, ELECTRONICS_TRACK); } },
    { id: "rookie", icon: "🥉", name: "Quiz Rookie", desc: "Answer 25 questions total", check: function (s) { return s.quiz.totalAnswered >= 25; } },
    { id: "veteran", icon: "🥈", name: "Quiz Veteran", desc: "Answer 60 questions total", check: function (s) { return s.quiz.totalAnswered >= 60; } },
    { id: "perfectionist", icon: "💯", name: "Perfectionist", desc: "100% on a quiz round of 10+", check: function (s) { return s.quiz.hadPerfectRound; } },
    { id: "safety-first", icon: "🦺", name: "Safety First", desc: "100% on a Safety quiz round", check: function (s) { return s.quiz.perfectModules.indexOf("safety") !== -1; } },
    { id: "bench-ready", icon: "🔧", name: "Bench Ready", desc: "Get 3 bench simulations right", check: function (s) { return s.sim && s.sim.correct >= 3; } }
  ];

  // ---------------------------------------------------------- STATE
  function defaultState() {
    return {
      xp: 0,
      readTopics: {},        // topicId -> true
      badgesEarned: {},      // badgeId -> true
      sim: { attempts: 0, correct: 0 },
      quiz: {
        totalAnswered: 0,
        totalCorrect: 0,
        currentStreak: 0,
        bestStreak: 0,
        hadPerfectRound: false,
        perfectModules: [],
        perModule: {}        // moduleId -> {answered, correct}
      }
    };
  }

  var state = loadState();

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      var d = defaultState();
      return Object.assign(d, parsed, {
        quiz: Object.assign(d.quiz, parsed.quiz || {}),
        sim: Object.assign(d.sim, parsed.sim || {})
      });
    } catch (e) {
      return defaultState();
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function addXP(amount) {
    state.xp += amount;
  }

  function levelFromXP(xp) {
    var level = 1;
    var need = 150;
    var total = 0;
    while (xp >= total + need) {
      total += need;
      level += 1;
      need = Math.round(need * 1.18);
    }
    var into = xp - total;
    return { level: level, into: into, need: need, pct: Math.min(100, Math.round((into / need) * 100)) };
  }

  function sectionTopicIds(sectionId) {
    var sec = SECTIONS.filter(function (s) { return s.id === sectionId; })[0];
    if (!sec) return [];
    return sec.cards.map(function (c) { return c.id; });
  }

  function moduleFullyRead(s) {
    for (var i = 0; i < SECTIONS.length; i++) {
      var ids = sectionTopicIds(SECTIONS[i].id);
      var all = ids.every(function (id) { return s.readTopics[id]; });
      if (all && ids.length) return SECTIONS[i].id;
    }
    return null;
  }

  function tracksFullyRead(s, sectionIds) {
    return sectionIds.every(function (secId) {
      var ids = sectionTopicIds(secId);
      return ids.length && ids.every(function (id) { return s.readTopics[id]; });
    });
  }

  function checkBadges() {
    var newly = [];
    BADGES.forEach(function (b) {
      if (!state.badgesEarned[b.id] && b.check(state)) {
        state.badgesEarned[b.id] = true;
        newly.push(b);
      }
    });
    return newly;
  }

  window.THULIR_HOOKS = {
    reportSimResult: function (correct, label) {
      state.sim = state.sim || { attempts: 0, correct: 0 };
      state.sim.attempts += 1;
      if (correct) {
        state.sim.correct += 1;
        addXP(15);
        toast("+15 XP — nice bench work!", "🔧");
      } else {
        toast("Not quite — give it another go", "❌");
      }
      saveState();
      var newBadges = checkBadges();
      saveState();
      renderScoreboard();
      newBadges.forEach(function (b, i) {
        setTimeout(function () { toast("Badge unlocked: " + b.name, b.icon); }, 500 + i * 500);
      });
    }
  };

  // ---------------------------------------------------------- TOAST
  function toast(text, icon) {
    var stack = document.getElementById("toast-stack");
    var el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = "<span>" + (icon || "🏆") + "</span><span>" + escapeHtml(text) + "</span>";
    stack.appendChild(el);
    setTimeout(function () { el.remove(); }, 2700);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---------------------------------------------------------- SCOREBOARD RENDER
  function renderScoreboard() {
    var lvl = levelFromXP(state.xp);
    document.getElementById("sb-level-num").textContent = lvl.level;
    document.getElementById("sb-level-badge").style.setProperty("--pct", lvl.pct);
    document.getElementById("sb-xp-fill").style.width = lvl.pct + "%";
    document.getElementById("sb-xp-text").textContent = lvl.into + " / " + lvl.need + " XP to level " + (lvl.level + 1);
    document.getElementById("sb-xp-total").textContent = state.xp;
    document.getElementById("sb-streak").textContent = state.quiz.currentStreak;
    var acc = state.quiz.totalAnswered ? Math.round((state.quiz.totalCorrect / state.quiz.totalAnswered) * 100) : 0;
    document.getElementById("sb-accuracy").textContent = acc + "%";
    var badgeCount = Object.keys(state.badgesEarned).length;
    document.getElementById("sb-badges").textContent = badgeCount + "/" + BADGES.length;
  }

  // ---------------------------------------------------------- SECTIONS TAB
  var sectionsView = { mode: "grid", moduleId: null };
  var pendingChecks = {}; // topicId -> check block, populated during renderModuleDetail

  function cssEscape(str) {
    return window.CSS && CSS.escape ? CSS.escape(str) : str.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }

  function renderSections() {
    var root = document.getElementById("panel-sections");
    if (sectionsView.mode === "grid") {
      root.innerHTML = renderModuleGrid();
      bindModuleGridEvents();
    } else {
      root.innerHTML = renderModuleDetail(sectionsView.moduleId);
      bindModuleDetailEvents(sectionsView.moduleId);
    }
  }

  function renderModuleGrid() {
    var cards = SECTIONS.map(function (sec) {
      var ids = sectionTopicIds(sec.id);
      var readCount = ids.filter(function (id) { return state.readTopics[id]; }).length;
      var pct = ids.length ? Math.round((readCount / ids.length) * 100) : 0;
      var complete = pct === 100;
      return (
        '<div class="module-card" data-module="' + sec.id + '" style="--accent-color:' + sec.color + '">' +
          '<div class="mc-top"><span class="mc-icon">' + sec.icon + '</span><span class="mc-code">' + escapeHtml(sec.code) + '</span></div>' +
          '<h3>' + escapeHtml(sec.title) + '</h3>' +
          '<p>' + escapeHtml(sec.subtitle) + '</p>' +
          '<div class="mc-progress-row">' +
            '<div class="mc-progress-bar"><div style="width:' + pct + '%"></div></div>' +
            '<span class="mc-progress-text">' + readCount + '/' + ids.length + '</span>' +
          '</div>' +
          (complete ? '<span class="mc-complete-badge">✓ Module cleared</span>' : '') +
        '</div>'
      );
    }).join("");
    return (
      '<div class="module-grid">' + cards + '</div>'
    );
  }

  function bindModuleGridEvents() {
    var els = document.querySelectorAll("#panel-sections .module-card");
    els.forEach(function (el) {
      el.addEventListener("click", function () {
        sectionsView.mode = "detail";
        sectionsView.moduleId = el.getAttribute("data-module");
        renderSections();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  function renderModuleDetail(moduleId) {
    var sec = SECTIONS.filter(function (s) { return s.id === moduleId; })[0];
    if (!sec) return '<div class="empty-state">Module not found.</div>';
    pendingChecks = {};
    var topics = sec.cards.map(function (card) {
      var done = !!state.readTopics[card.id];
      var hasCheck = card.blocks.some(function (b) { return b.type === "check"; });
      var body = card.blocks.map(function (b) { return renderBlock(b, card.id); }).join("");
      return (
        '<details class="topic-card' + (done ? ' done' : '') + '" data-topic="' + card.id + '">' +
          '<summary>' +
            '<span class="tc-check">' + (done ? "✓" : "") + '</span>' +
            '<span>' + escapeHtml(card.title) + '<div class="tc-tag">' + escapeHtml(card.tag) + '</div></span>' +
            '<span class="tc-chevron">▶</span>' +
          '</summary>' +
          '<div class="tc-body">' +
            body +
            (hasCheck ? "" :
              '<button class="mark-read-btn' + (done ? ' done' : '') + '" data-topic="' + card.id + '" ' + (done ? "disabled" : "") + '>' +
                (done ? "✓ Learned (+" + XP_TOPIC + " XP claimed)" : "Mark as learned  +" + XP_TOPIC + " XP") +
              '</button>'
            ) +
          '</div>' +
        '</details>'
      );
    }).join("");

    return (
      '<div class="module-detail-header">' +
        '<button class="back-btn" id="back-to-grid">← Modules</button>' +
        '<div class="module-detail-title"><h2>' + sec.icon + ' ' + escapeHtml(sec.title) + '</h2><span>' + escapeHtml(sec.subtitle) + '</span></div>' +
      '</div>' +
      '<div class="topic-list">' + topics + '</div>'
    );
  }

  function renderBlock(b, topicId) {
    if (b.type === "diagram") {
      return window.THULIR_DIAGRAMS ? window.THULIR_DIAGRAMS.render(b.id) : "";
    }
    if (b.type === "simulation") {
      return '<div class="sim-mount" data-sim="' + escapeHtml(b.sim) + '" data-scenario="' + escapeHtml(b.scenario || "") + '"></div>';
    }
    if (b.type === "check") {
      pendingChecks[topicId] = b;
      return '<div class="check-mount" data-topic="' + escapeHtml(topicId) + '"></div>';
    }
    if (b.type === "intro") {
      return '<p class="blk-intro">' + escapeHtml(b.text) + '</p>';
    }
    if (b.type === "definition") {
      var rows = "";
      if (b.plain) rows += '<div class="row"><div class="k">In Plain Terms</div><div class="v">' + escapeHtml(b.plain) + '</div></div>';
      if (b.picture) rows += '<div class="row"><div class="k">Real-World Picture</div><div class="v">' + escapeHtml(b.picture) + '</div></div>';
      if (b.facts) rows += '<div class="row"><div class="k">Key Facts</div><div class="v">' + escapeHtml(b.facts) + '</div></div>';
      return '<div class="blk-def">' + rows + '</div>';
    }
    if (b.type === "numbered") {
      var items = b.items.map(function (it, i) {
        return '<div class="num-item"><span class="n">' + (i + 1) + '</span><span class="txt"><b>' + escapeHtml(it.title) + '</b>' + (it.desc ? '<span>' + escapeHtml(it.desc) + '</span>' : '') + '</span></div>';
      }).join("");
      return '<div class="blk-numbered">' + (b.title ? '<div class="blk-title">' + escapeHtml(b.title) + '</div>' : '') + items + '</div>';
    }
    if (b.type === "warning") {
      var wItems = b.items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join("");
      return '<div class="blk-warning"><div class="blk-title">⚠ ' + escapeHtml(b.title || "Watch Out") + '</div><ul>' + wItems + '</ul></div>';
    }
    if (b.type === "checklist") {
      var cItems = b.items.map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join("");
      return '<div class="blk-checklist"><ul>' + cItems + '</ul></div>';
    }
    if (b.type === "golden") {
      return '<div class="blk-golden">' + escapeHtml(b.text) + '</div>';
    }
    if (b.type === "tip") {
      return '<div class="blk-tip">' + escapeHtml(b.text) + '</div>';
    }
    if (b.type === "table") {
      var thead = '<tr>' + b.headers.map(function (h) { return '<th>' + escapeHtml(h) + '</th>'; }).join("") + '</tr>';
      var tbody = b.rows.map(function (r) {
        return '<tr>' + r.map(function (c) { return '<td>' + escapeHtml(c) + '</td>'; }).join("") + '</tr>';
      }).join("");
      return (
        (b.title ? '<div class="blk-title">' + escapeHtml(b.title) + '</div>' : '') +
        '<div class="blk-table-wrap"><table class="blk-table"><thead>' + thead + '</thead><tbody>' + tbody + '</tbody></table></div>'
      );
    }
    return "";
  }

  function markTopicLearned(moduleId, topicId) {
    if (state.readTopics[topicId]) return;
    state.readTopics[topicId] = true;
    addXP(XP_TOPIC);
    toast("+" + XP_TOPIC + " XP — topic learned!", "📘");

    var justFinishedModule = null;
    var ids = sectionTopicIds(moduleId);
    if (ids.every(function (id) { return state.readTopics[id]; })) {
      addXP(XP_MODULE_BONUS);
      justFinishedModule = moduleId;
    }

    saveState();
    var newBadges = checkBadges();
    saveState();

    if (justFinishedModule) {
      var secObj = SECTIONS.filter(function (s) { return s.id === justFinishedModule; })[0];
      setTimeout(function () { toast("Module cleared: " + secObj.title + " (+" + XP_MODULE_BONUS + " XP)", "🎉"); }, 300);
    }
    newBadges.forEach(function (b, i) {
      setTimeout(function () { toast("Badge unlocked: " + b.name, b.icon); }, 600 + i * 500);
    });

    renderSections();
    renderScoreboard();
  }

  function mountCheckWidget(el, block, moduleId, topicId) {
    // A check block is either the newer { questions: [...] } form (5+ questions,
    // each with a "why" explanation per wrong choice) or the older single-question
    // { q, choices, answer, explain } form. Both run through the same engine —
    // the older form is treated as a 1-question set with no per-choice "why" text.
    var questions = block.questions || [{ q: block.q, choices: block.choices, answer: block.answer, explain: block.explain, why: [] }];
    var s = { qIndex: 0, selected: null, revealed: false };

    function paint() {
      if (state.readTopics[topicId]) {
        el.innerHTML = '<div class="check-passed">✅ <b>Nailed it</b> — this topic is marked learned.</div>';
        return;
      }
      var q = questions[s.qIndex];
      var isLast = s.qIndex === questions.length - 1;
      var gotItRight = s.revealed && s.selected === q.answer;

      var choices = q.choices.map(function (c, i) {
        var cls = "";
        if (s.revealed) {
          if (i === q.answer) cls = " correct";
          else if (i === s.selected) cls = " wrong";
        }
        return (
          '<button class="choice-btn' + cls + '" data-idx="' + i + '"' + (s.revealed ? " disabled" : "") + '>' +
            '<span class="letter">' + String.fromCharCode(65 + i) + '</span><span>' + escapeHtml(c) + '</span>' +
          '</button>'
        );
      }).join("");

      var wrongReasons = "";
      if (s.revealed) {
        var reasonItems = q.choices.map(function (c, i) {
          if (i === q.answer) return "";
          var why = q.why && q.why[i];
          if (!why) return "";
          return '<li><b>' + String.fromCharCode(65 + i) + '.</b> ' + escapeHtml(why) + '</li>';
        }).join("");
        if (reasonItems) {
          wrongReasons = '<div class="wrong-reasons-box show"><b>Why the others are wrong:</b><ul>' + reasonItems + '</ul></div>';
        }
      }

      el.innerHTML = (
        '<div class="check-widget">' +
          '<div class="check-label">🧠 Quick Check — answer to mark this topic learned</div>' +
          (questions.length > 1 ? '<div class="check-progress">Question ' + (s.qIndex + 1) + ' of ' + questions.length + '</div>' : "") +
          '<div class="check-q">' + escapeHtml(q.q) + '</div>' +
          '<div class="choice-list">' + choices + '</div>' +
          (s.revealed ? '<div class="explain-box show"><b>Why: </b><span>' + escapeHtml(q.explain) + '</span></div>' : "") +
          wrongReasons +
          (s.revealed && !gotItRight ? '<button class="sim-retry-btn check-retry">Try Again</button>' : "") +
          (gotItRight && !isLast ? '<button class="next-btn show check-next">Next Question →</button>' : "") +
          (gotItRight && isLast ? '<button class="next-btn show check-next">Finish — Mark Learned</button>' : "") +
        '</div>'
      );
      wire();
    }

    function wire() {
      el.querySelectorAll(".choice-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (s.revealed) return;
          s.selected = parseInt(btn.getAttribute("data-idx"), 10);
          s.revealed = true;
          paint();
        });
      });
      var retryBtn = el.querySelector(".check-retry");
      if (retryBtn) {
        retryBtn.addEventListener("click", function () {
          s.selected = null;
          s.revealed = false;
          paint();
        });
      }
      var nextBtn = el.querySelector(".check-next");
      if (nextBtn) {
        nextBtn.addEventListener("click", function () {
          if (s.qIndex === questions.length - 1) {
            markTopicLearned(moduleId, topicId);
          } else {
            s.qIndex += 1;
            s.selected = null;
            s.revealed = false;
            paint();
          }
        });
      }
    }

    paint();
  }

  function mountInteractiveWidgets(moduleId) {
    document.querySelectorAll("#panel-sections .sim-mount").forEach(function (el) {
      if (window.THULIR_SIMS) window.THULIR_SIMS.mount(el, el.getAttribute("data-sim"), el.getAttribute("data-scenario"));
    });
    Object.keys(pendingChecks).forEach(function (topicId) {
      var el = document.querySelector('#panel-sections .check-mount[data-topic="' + cssEscape(topicId) + '"]');
      if (el) mountCheckWidget(el, pendingChecks[topicId], moduleId, topicId);
    });
  }

  function bindModuleDetailEvents(moduleId) {
    var backBtn = document.getElementById("back-to-grid");
    if (backBtn) {
      backBtn.addEventListener("click", function () {
        sectionsView.mode = "grid";
        renderSections();
      });
    }
    var markBtns = document.querySelectorAll("#panel-sections .mark-read-btn");
    markBtns.forEach(function (btn) {
      btn.addEventListener("click", function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        markTopicLearned(moduleId, btn.getAttribute("data-topic"));
      });
    });
    mountInteractiveWidgets(moduleId);
  }

  // ---------------------------------------------------------- QUIZ TAB
  var quizState = {
    mode: "setup", // setup | live | result
    moduleFilter: "all",
    length: 10,
    pool: [],
    index: 0,
    answered: false,
    roundCorrect: 0,
    roundAnswered: 0,
    roundStreakStart: 0,
    xpGainedThisRound: 0
  };

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function renderQuiz() {
    var root = document.getElementById("panel-quiz");
    if (quizState.mode === "setup") {
      root.innerHTML = renderQuizSetup();
      bindQuizSetupEvents();
    } else if (quizState.mode === "live") {
      root.innerHTML = renderQuizLive();
      bindQuizLiveEvents();
    } else {
      root.innerHTML = renderQuizResult();
      bindQuizResultEvents();
    }
  }

  function renderQuizSetup() {
    var chips = ['<button class="chip' + (quizState.moduleFilter === "all" ? " active" : "") + '" data-mod="all">All Modules</button>']
      .concat(SECTIONS.map(function (s) {
        return '<button class="chip' + (quizState.moduleFilter === s.id ? " active" : "") + '" data-mod="' + s.id + '">' + s.icon + ' ' + escapeHtml(s.title) + '</button>';
      })).join("");

    var lens = [5, 10, 15].map(function (n) {
      return '<button class="chip' + (quizState.length === n ? " active" : "") + '" data-len="' + n + '">' + n + ' Qs</button>';
    }).join("");

    var poolCount = QUESTIONS.filter(function (q) { return quizState.moduleFilter === "all" || q.module === quizState.moduleFilter; }).length;

    return (
      '<div class="quiz-setup">' +
        '<h2>🎯 Start a Quiz Round</h2>' +
        '<div><div class="blk-title" style="margin-bottom:8px">Choose a module</div><div class="chip-row">' + chips + '</div></div>' +
        '<div><div class="blk-title" style="margin-bottom:8px">Round length</div><div class="len-row">' + lens + '</div></div>' +
        '<p class="blk-intro">' + poolCount + ' question' + (poolCount === 1 ? "" : "s") + ' available in this pool.</p>' +
        '<button class="start-quiz-btn" id="start-quiz">Start Quiz →</button>' +
      '</div>'
    );
  }

  function bindQuizSetupEvents() {
    document.querySelectorAll("#panel-quiz .chip[data-mod]").forEach(function (el) {
      el.addEventListener("click", function () {
        quizState.moduleFilter = el.getAttribute("data-mod");
        renderQuiz();
      });
    });
    document.querySelectorAll("#panel-quiz .chip[data-len]").forEach(function (el) {
      el.addEventListener("click", function () {
        quizState.length = parseInt(el.getAttribute("data-len"), 10);
        renderQuiz();
      });
    });
    document.getElementById("start-quiz").addEventListener("click", startQuizRound);
  }

  function startQuizRound() {
    var filtered = QUESTIONS.filter(function (q) { return quizState.moduleFilter === "all" || q.module === quizState.moduleFilter; });
    var pool = shuffle(filtered).slice(0, Math.min(quizState.length, filtered.length));
    quizState.pool = pool;
    quizState.index = 0;
    quizState.answered = false;
    quizState.roundCorrect = 0;
    quizState.roundAnswered = 0;
    quizState.roundStreakStart = state.quiz.currentStreak;
    quizState.xpGainedThisRound = 0;
    quizState.mode = "live";
    renderQuiz();
  }

  function currentQuestion() {
    return quizState.pool[quizState.index];
  }

  function renderQuizLive() {
    var total = quizState.pool.length;
    var q = currentQuestion();
    if (!q) return '<div class="empty-state">No questions available for this selection.</div>';
    var sec = SECTIONS.filter(function (s) { return s.id === q.module; })[0];
    var pct = Math.round((quizState.index / total) * 100);

    var choices = q.choices.map(function (c, i) {
      return (
        '<button class="choice-btn" data-idx="' + i + '">' +
          '<span class="letter">' + String.fromCharCode(65 + i) + '</span>' +
          '<span>' + escapeHtml(c) + '</span>' +
        '</button>'
      );
    }).join("");

    return (
      '<div class="quiz-live">' +
        '<div class="quiz-progress-row">' +
          '<span>Q ' + (quizState.index + 1) + ' / ' + total + '</span>' +
          '<div class="quiz-progress-bar"><div style="width:' + pct + '%"></div></div>' +
          '<span class="quiz-streak">🔥 ' + state.quiz.currentStreak + '</span>' +
        '</div>' +
        '<div class="question-card">' +
          '<div class="q-mod-tag">' + (sec ? sec.icon + " " + escapeHtml(sec.title) : "") + '</div>' +
          '<h3>' + escapeHtml(q.q) + '</h3>' +
          '<div class="choice-list">' + choices + '</div>' +
          '<div class="explain-box" id="explain-box"><b>Why: </b><span id="explain-text"></span></div>' +
          '<button class="next-btn" id="next-question">Next →</button>' +
        '</div>' +
      '</div>'
    );
  }

  function bindQuizLiveEvents() {
    var q = currentQuestion();
    var btns = document.querySelectorAll("#panel-quiz .choice-btn");
    btns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (quizState.answered) return;
        quizState.answered = true;
        var idx = parseInt(btn.getAttribute("data-idx"), 10);
        var correct = idx === q.answer;

        btns.forEach(function (b) {
          b.setAttribute("disabled", "disabled");
          var bi = parseInt(b.getAttribute("data-idx"), 10);
          if (bi === q.answer) b.classList.add("correct");
          else if (bi === idx && !correct) b.classList.add("wrong");
        });

        state.quiz.totalAnswered += 1;
        quizState.roundAnswered += 1;
        var perMod = state.quiz.perModule[q.module] || { answered: 0, correct: 0 };
        perMod.answered += 1;

        if (correct) {
          state.quiz.totalCorrect += 1;
          quizState.roundCorrect += 1;
          state.quiz.currentStreak += 1;
          state.quiz.bestStreak = Math.max(state.quiz.bestStreak, state.quiz.currentStreak);
          perMod.correct += 1;
          var streakBonus = Math.min(XP_STREAK_MAX_BONUS, Math.max(0, (state.quiz.currentStreak - 1) * XP_STREAK_STEP));
          var gained = XP_CORRECT + streakBonus;
          addXP(gained);
          quizState.xpGainedThisRound += gained;
          toast("Correct! +" + gained + " XP" + (streakBonus > 0 ? " (streak bonus)" : ""), "✅");
        } else {
          state.quiz.currentStreak = 0;
          toast("Not quite — streak reset", "❌");
        }
        state.quiz.perModule[q.module] = perMod;

        var explainBox = document.getElementById("explain-box");
        document.getElementById("explain-text").textContent = q.explain;
        explainBox.classList.add("show");
        document.getElementById("next-question").classList.add("show");

        saveState();
        var newBadges = checkBadges();
        saveState();
        renderScoreboard();
        newBadges.forEach(function (b, i) {
          setTimeout(function () { toast("Badge unlocked: " + b.name, b.icon); }, 500 + i * 500);
        });
      });
    });

    var nextBtn = document.getElementById("next-question");
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (quizState.index + 1 < quizState.pool.length) {
          quizState.index += 1;
          quizState.answered = false;
          renderQuiz();
        } else {
          finishQuizRound();
        }
      });
    }
  }

  function finishQuizRound() {
    var isPerfect = quizState.roundAnswered >= 10 && quizState.roundCorrect === quizState.roundAnswered;
    if (isPerfect) {
      state.quiz.hadPerfectRound = true;
      if (quizState.moduleFilter !== "all" && state.quiz.perfectModules.indexOf(quizState.moduleFilter) === -1) {
        state.quiz.perfectModules.push(quizState.moduleFilter);
      }
    }
    saveState();
    var newBadges = checkBadges();
    saveState();
    quizState.mode = "result";
    quizState._newBadges = newBadges;
    renderQuiz();
    renderScoreboard();
    newBadges.forEach(function (b, i) {
      setTimeout(function () { toast("Badge unlocked: " + b.name, b.icon); }, 300 + i * 500);
    });
  }

  function renderQuizResult() {
    var total = quizState.roundAnswered;
    var correct = quizState.roundCorrect;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var emoji = pct === 100 ? "🏆" : pct >= 70 ? "🎉" : pct >= 40 ? "🙂" : "🔧";
    var badgesHtml = (quizState._newBadges || []).map(function (b) {
      return '<span class="badge-pill">' + b.icon + ' ' + escapeHtml(b.name) + '</span>';
    }).join("");

    return (
      '<div class="quiz-result">' +
        '<div class="big-emoji">' + emoji + '</div>' +
        '<h2>Round Complete!</h2>' +
        '<div class="score-line">You scored ' + correct + ' / ' + total + ' (' + pct + '%)</div>' +
        '<div class="result-stats">' +
          '<div class="rs"><span class="v">+' + quizState.xpGainedThisRound + '</span><span class="l">XP earned</span></div>' +
          '<div class="rs"><span class="v">' + state.quiz.currentStreak + '</span><span class="l">Current streak</span></div>' +
          '<div class="rs"><span class="v">' + state.quiz.bestStreak + '</span><span class="l">Best streak</span></div>' +
        '</div>' +
        (badgesHtml ? '<div class="result-badges">' + badgesHtml + '</div>' : '') +
        '<div class="result-actions">' +
          '<button id="quiz-again">Play Again</button>' +
          '<button class="primary" id="quiz-menu">Back to Menu</button>' +
        '</div>' +
      '</div>'
    );
  }

  function bindQuizResultEvents() {
    document.getElementById("quiz-again").addEventListener("click", function () {
      startQuizRound();
    });
    document.getElementById("quiz-menu").addEventListener("click", function () {
      quizState.mode = "setup";
      renderQuiz();
    });
  }

  // ---------------------------------------------------------- TROPHY MODAL
  function renderTrophyModal() {
    var trophies = BADGES.map(function (b) {
      var earned = !!state.badgesEarned[b.id];
      return (
        '<div class="trophy' + (earned ? " earned" : "") + '">' +
          '<div class="t-icon">' + b.icon + '</div>' +
          '<div class="t-name">' + escapeHtml(b.name) + '</div>' +
          '<div class="t-desc">' + escapeHtml(b.desc) + '</div>' +
        '</div>'
      );
    }).join("");

    var mastery = SECTIONS.map(function (sec) {
      var pm = state.quiz.perModule[sec.id] || { answered: 0, correct: 0 };
      var pct = pm.answered ? Math.round((pm.correct / pm.answered) * 100) : 0;
      return (
        '<div class="module-mastery-row">' +
          '<span class="mm-icon">' + sec.icon + '</span>' +
          '<span class="mm-name">' + escapeHtml(sec.title) + '</span>' +
          '<div class="mm-bar"><div style="width:' + pct + '%;background:' + sec.color + '"></div></div>' +
          '<span class="mm-pct">' + pct + '%</span>' +
        '</div>'
      );
    }).join("");

    var lvl = levelFromXP(state.xp);
    var acc = state.quiz.totalAnswered ? Math.round((state.quiz.totalCorrect / state.quiz.totalAnswered) * 100) : 0;

    document.getElementById("trophy-modal-body").innerHTML = (
      '<div class="result-stats" style="justify-content:flex-start">' +
        '<div class="rs"><span class="v">' + state.xp + '</span><span class="l">Total XP</span></div>' +
        '<div class="rs"><span class="v">Lv ' + lvl.level + '</span><span class="l">Level</span></div>' +
        '<div class="rs"><span class="v">' + acc + '%</span><span class="l">Quiz accuracy</span></div>' +
        '<div class="rs"><span class="v">' + state.quiz.bestStreak + '</span><span class="l">Best streak</span></div>' +
      '</div>' +
      '<div class="blk-title" style="margin-top:6px">Trophies</div>' +
      '<div class="trophy-grid">' + trophies + '</div>' +
      '<div class="blk-title" style="margin-top:6px">Module Quiz Mastery</div>' +
      '<div style="display:flex;flex-direction:column;gap:8px">' + mastery + '</div>'
    );
  }

  // ---------------------------------------------------------- TABS
  function switchTab(tab) {
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-tab") === tab);
    });
    document.querySelectorAll(".panel").forEach(function (p) {
      p.classList.toggle("active", p.id === "panel-" + tab);
    });
  }

  // ---------------------------------------------------------- INIT
  function init() {
    document.querySelectorAll(".tab-btn").forEach(function (b) {
      b.addEventListener("click", function () { switchTab(b.getAttribute("data-tab")); });
    });

    document.getElementById("scoreboard").addEventListener("click", function () {
      renderTrophyModal();
      document.getElementById("trophy-overlay").classList.add("show");
    });
    document.getElementById("trophy-close").addEventListener("click", function () {
      document.getElementById("trophy-overlay").classList.remove("show");
    });
    document.getElementById("trophy-overlay").addEventListener("click", function (e) {
      if (e.target.id === "trophy-overlay") {
        document.getElementById("trophy-overlay").classList.remove("show");
      }
    });

    renderScoreboard();
    renderSections();
    renderQuiz();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
