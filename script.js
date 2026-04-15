/* ── Data ── */
const overviewData = [
  { title: "Språkfamiljer i Norden", text: "Germanska (svenska, norska, danska, isländska, färöiska) och uraliska (finska, samiska). Germanska hör till indoeuropeiska – en helt annan familj än uraliska." },
  { title: "Inbördes förståelse", text: "Svenska, norska och danska förstår varandra ganska bra, särskilt i skrift. Norska fungerar som mellanvariant. Danska kan vara svårast att höra." },
  { title: "Varför är de lika?", text: "Gemensamt ursprung i fornnordiskan, liknande grammatik och ordförråd, geografisk närhet och historisk kontakt." },
  { title: "Vad påverkar språkutvecklingen?", text: "Historiska kontakter, religion (Bibelöversättningar), politiska beslut, utbildning och media, lånord från tyska, franska och engelska, globalisering och teknik." },
  { title: "Minoritetsspråk i Sverige", text: "De fem nationella minoritetsspråken är: samiska, finska, meänkieli (tornedalsfinska), romani chib och jiddisch. De skyddas tack vare historisk förankring i landet." },
  { title: "Språklagen 2009", text: "Svenska är huvudspråk. Alla har rätt till språk. Offentligt språk ska vara vårdat, enkelt och begripligt. Minoritetsspråk och teckenspråk skyddas." },
  { title: "Finland och Norge", text: "Finland har två officiella språk: finska och svenska (finlandssvenska, ca 5%). Norge har två skriftspråk: bokmål (påverkat av danska) och nynorska (bygger på norska dialekter)." },
  { title: "Språkpurism", text: "Viljan att rena språket från främmande influenser. Isländska skapar egna ord istället för att låna. Sverige lånar mer fritt, t.ex. från engelska." }
];

const flashcards = [
  // Easy
  { q: "Vilka länder talar germanska nordiska språk?", a: "Sverige (svenska), Norge (norska), Danmark (danska), Island (isländska), Färöarna (färöiska).", diff: "easy" },
  { q: "Vilka länder talar uraliska språk i Norden?", a: "Finland (finska) och samerna i norra Sverige, Norge och Finland (samiska).", diff: "easy" },
  { q: "Vilket år stiftades språklagen?", a: "2009", diff: "easy" },
  { q: "Hur många nationella minoritetsspråk finns det i Sverige?", a: "5 stycken: samiska, finska, meänkieli, romani chib och jiddisch.", diff: "easy" },
  { q: "Vad kallas den variant av svenska som talas i Finland?", a: "Finlandssvenska. Talas av ca 5% av befolkningen.", diff: "easy" },
  { q: "Vad är bokmål?", a: "Det vanligaste skriftspråket i Norge, påverkat av danska.", diff: "easy" },
  { q: "Vad är nynorska?", a: "Norsk skriftspråk som bygger på norska dialekter, skapat för att få ett mer norskt alternativ.", diff: "easy" },
  { q: "Vilket nordiskt språk är svårast att förstå?", a: "Danska – uttalet skiljer sig mycket från svenska och norska.", diff: "easy" },
  { q: "Vad är meänkieli?", a: "Tornedalsfinska – ett av Sveriges fem nationella minoritetsspråk, talat i Tornedalen.", diff: "easy" },
  { q: "Vad är fornnordiska?", a: "Det gemensamma ursprungsspråket för de nordgermanska språken (svenska, norska, danska, isländska, färöiska).", diff: "easy" },
  { q: "Vad innebär språkpurism?", a: "Viljan att rena språket från främmande influenser och undvika lånord.", diff: "easy" },
  { q: "Vilka är de indoeuropeiska nordiska språken?", a: "Svenska, norska, danska, isländska och färöiska – alla tillhör den nordgermanska grenen.", diff: "easy" },
  // Hard
  { q: "Varför har isländska och färöiska sämre inbördes förståelse med svenska än danska har?", a: "De har bevarat äldre former från fornnordiskan och haft mindre geografisk och historisk kontakt med Sverige.", diff: "hard" },
  { q: "Nämn tre faktorer som påverkat språkutvecklingen i Norden.", a: "Historiska kontakter (handel, unioner, krig), religion (Bibelöversättningar), politiska beslut, utbildning, lånord och globalisering.", diff: "hard" },
  { q: "Vilka rättigheter ger språklagen minoritetsspråkstalare?", a: "Rätt att använda minoritetsspråk i kontakt med myndigheter, skydd för språk och kultur, stöd för språkutveckling i skolan.", diff: "hard" },
  { q: "Vad är skillnaden mellan uraliska och indoeuropeiska språk i Norden?", a: "Indoeuropeiska (germanska) är nära besläktade. Uraliska (finska, samiska) tillhör en helt annan språkfamilj utan genetisk koppling.", diff: "hard" },
  { q: "Varför just de fem minoritetsspråken i Sverige?", a: "De har historisk förankring i Sverige och representerar nationella minoriteter som länge levt i landet.", diff: "hard" },
  { q: "Nämn en nackdel med lagskydd för minoritetsspråk.", a: "Kan vara dyrt att genomföra, svårt att ge lika stöd överallt, risk att vissa språk ändå försvagas trots lagen.", diff: "hard" },
  { q: "Hur fungerar norska som mellanvariant i Norden?", a: "Norskan liknar fonetiskt och grammatiskt både svenska och danska, vilket gör att norsktalande förstår och förstås av båda.", diff: "hard" },
  { q: "Ge ett exempel på hur Island tillämpar språkpurism.", a: "Island skapar egna isländska ord för nya begrepp istället för att låna från engelska eller andra språk.", diff: "hard" },
  { q: "Vad säger språklagen om offentligt språk?", a: "Det ska vara vårdat, enkelt och begripligt. Myndigheter ska använda tydligt språk.", diff: "hard" },
  { q: "Jämför Finland och Sverige ur ett officiellt språkperspektiv.", a: "Finland har två officiella språk (finska och svenska). Sverige har svenska som officiellt huvudspråk men skyddar fem nationella minoritetsspråk.", diff: "hard" }
];

const quizQuestions = [
  { q: "Vilka två språkfamiljer representeras i Norden?", a: ["indoeuropeiska och uraliska","germanska och uraliska","nordgermanska och uraliska"], hint: "En familj inkluderar svenska, den andra finska.", diff: "easy" },
  { q: "Hur många nationella minoritetsspråk har Sverige?", a: ["5","fem"], hint: "Tänk på samiska, finska, meänkieli, romani chib och jiddisch.", diff: "easy" },
  { q: "Vilket år stiftades språklagen i Sverige?", a: ["2009"], hint: "Det var under 2000-talets första decennium.", diff: "easy" },
  { q: "Vad kallas det norska skriftspråket som påverkats av danska?", a: ["bokmål"], hint: "Det är det vanligaste skriftspråket i Norge.", diff: "easy" },
  { q: "Vilket nordiskt land har två officiella språk?", a: ["finland"], hint: "Landet gränsar till Sverige i väst.", diff: "easy" },
  { q: "Vad innebär språkpurism?", a: ["rena språket från lånord","undvika lånord","hålla språket rent","rena språket från främmande influenser"], hint: "Det handlar om att hålla språket rent från påverkan utifrån.", diff: "easy" },
  { q: "Vilket nordiskt språk fungerar ofta som mellanvariant?", a: ["norska","norskan"], hint: "Landet ligger geografiskt mellan Sverige och Danmark.", diff: "easy" },
  { q: "Vad är finlandssvenska?", a: ["en variant av svenska som talas i finland","svenska som talas i finland"], hint: "Det är en regional variant av ett skandinaviskt språk.", diff: "easy" },
  { q: "Nämn ett av Sveriges fem nationella minoritetsspråk.", a: ["samiska","finska","meänkieli","romani chib","jiddisch","tornedalsfinska"], hint: "Ett av dem talas av urfolket i norra Sverige.", diff: "hard" },
  { q: "Vilket nordiskt språk har bevarat äldst former från fornnordiskan?", a: ["isländska"], hint: "Landet är en ö i Atlanten.", diff: "hard" },
  { q: "Vad heter det norska skriftspråket som bygger på norska dialekter?", a: ["nynorska"], hint: "Det skapades för att få ett mer norskt alternativ till bokmål.", diff: "hard" },
  { q: "Varför förstår svenska, norska och danska varandra relativt bra?", a: ["gemensamt ursprung","fornnordiska","samma ursprung","liknande grammatik och ordförråd"], hint: "Tänk på deras gemensamma historiska rötter.", diff: "hard" },
  { q: "Vad ska offentligt språk vara enligt språklagen?", a: ["vårdat enkelt och begripligt","enkelt och begripligt","vårdat och begripligt"], hint: "Tre adjektiv – alla handlar om tydlighet och kvalitet.", diff: "hard" },
  { q: "Vilken språkfamilj tillhör finska?", a: ["uraliska","uralisk"], hint: "Det är inte indoeuropeiska.", diff: "hard" },
  { q: "Ungefär hur stor andel av Finlands befolkning talar svenska?", a: ["5%","5 procent","cirka 5 procent","ca 5%"], hint: "Det är en ensiffrig procentsats.", diff: "hard" }
];

/* ── Navigation ── */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.section).classList.add('active');
  });
});

/* ── Overview ── */
const overviewGrid = document.getElementById('overview-grid');
overviewData.forEach(item => {
  const card = document.createElement('div');
  card.className = 'overview-card';
  card.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p>`;
  overviewGrid.appendChild(card);
});

/* ── Flashcards ── */
let cardFilter = 'all';
const cardsGrid = document.getElementById('cards-grid');

function buildCards() {
  cardsGrid.innerHTML = '';
  flashcards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'flashcard' + (cardFilter !== 'all' && card.diff !== cardFilter ? ' hidden' : '');
    el.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <div>
            <span class="card-badge badge-${card.diff}">${card.diff === 'easy' ? 'Enkel' : 'Svår'}</span>
            <p class="card-q">${card.q}</p>
          </div>
          <span class="flip-hint">klicka för att vända</span>
        </div>
        <div class="flashcard-back">
          <p class="card-a">${card.a}</p>
          <span class="flip-hint">klicka för att vända</span>
        </div>
      </div>`;
    el.addEventListener('click', () => el.classList.toggle('flipped'));
    cardsGrid.appendChild(el);
  });
}
buildCards();

document.querySelectorAll('.filter-row .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-row .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    cardFilter = btn.dataset.filter;
    buildCards();
  });
});

/* ── Quiz ── */
let quizDiff = 'all';
let shuffled = [];
let currentQ = 0;
let score = 0;
let answered = false;

const qText   = document.getElementById('quiz-q');
const hintBox = document.getElementById('hint-box');
const resBx   = document.getElementById('result-box');
const qInput  = document.getElementById('quiz-input');
const progFill = document.getElementById('prog-fill');
const progLabel = document.getElementById('prog-label');
const scoreLabel = document.getElementById('score-label');

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return s.toLowerCase().trim()
    .replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/é/g, 'e')
    .replace(/[^a-z0-9\s]/g, '');
}

function similarity(input, correct) {
  const a = normalize(input), b = normalize(correct);
  if (a === b) return 1;
  if (b.includes(a) || a.includes(b)) return 0.95;
  const longer = a.length >= b.length ? a : b;
  const shorter = a.length < b.length ? a : b;
  let matches = 0;
  for (let i = 0; i < shorter.length; i++) {
    if (longer.includes(shorter[i])) matches++;
  }
  return matches / longer.length;
}

function initQuiz() {
  const pool = quizDiff === 'all' ? quizQuestions : quizQuestions.filter(q => q.diff === quizDiff);
  shuffled = shuffle(pool);
  currentQ = 0;
  score = 0;
  loadQuestion();
}

function loadQuestion() {
  if (currentQ >= shuffled.length) { showFinish(); return; }
  const q = shuffled[currentQ];
  answered = false;
  qText.textContent = q.q;
  qInput.value = '';
  qInput.disabled = false;
  qInput.style.display = '';
  hintBox.style.display = 'none';
  resBx.style.display = 'none';
  resBx.className = 'result-box';
  const pct = Math.round((currentQ / shuffled.length) * 100);
  progFill.style.width = pct + '%';
  progLabel.textContent = `Fråga ${currentQ + 1} av ${shuffled.length}`;
  scoreLabel.textContent = `Poäng: ${score}`;
  document.getElementById('quiz-actions').innerHTML = `
    <button class="btn-primary" id="btn-answer">Svara</button>
    <button class="btn-ghost" id="btn-hint">Ledtråd</button>
    <button class="btn-ghost" id="btn-next">Nästa</button>
    <button class="btn-ghost" id="btn-skip">Hoppa över</button>`;
  bindQuizButtons();
  setTimeout(() => qInput.focus(), 50);
}

function checkAnswer() {
  if (answered) return;
  const input = qInput.value.trim();
  if (!input) return;
  const q = shuffled[currentQ];
  let best = 0;
  q.a.forEach(correct => {
    const sim = similarity(input, correct);
    if (sim > best) best = sim;
  });
  answered = true;
  qInput.disabled = true;
  resBx.style.display = 'block';
  if (best >= 0.85) {
    score++;
    resBx.className = 'result-box correct';
    resBx.textContent = best === 1 ? 'Rätt! Perfekt svar.' : 'Rätt! (Tillräckligt bra svar)';
  } else {
    resBx.className = 'result-box wrong';
    resBx.textContent = `Fel. Korrekt svar: ${q.a[0]}`;
  }
  scoreLabel.textContent = `Poäng: ${score}`;
}

function showHint() {
  if (answered) return;
  const q = shuffled[currentQ];
  hintBox.style.display = 'block';
  hintBox.textContent = 'Ledtråd: ' + q.hint;
}

function showFinish() {
  const total = shuffled.length;
  const pct = Math.round((score / total) * 100);
  qText.textContent = `Övningen klar! Du fick ${score} av ${total} rätt (${pct}%).`;
  qInput.style.display = 'none';
  hintBox.style.display = 'none';
  resBx.style.display = 'none';
  progFill.style.width = '100%';
  progLabel.textContent = 'Klar!';
  document.getElementById('quiz-actions').innerHTML =
    `<button class="btn-primary" id="btn-restart">Försök igen</button>`;
  document.getElementById('btn-restart').addEventListener('click', initQuiz);
}

function bindQuizButtons() {
  document.getElementById('btn-answer').addEventListener('click', checkAnswer);
  document.getElementById('btn-hint').addEventListener('click', showHint);
  document.getElementById('btn-next').addEventListener('click', () => { currentQ++; loadQuestion(); });
  document.getElementById('btn-skip').addEventListener('click', () => {
    shuffled.push(shuffled[currentQ]);
    currentQ++;
    loadQuestion();
  });
}

qInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkAnswer(); });

document.querySelectorAll('.quiz-controls .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.quiz-controls .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    quizDiff = btn.dataset.diff;
    initQuiz();
  });
});

initQuiz();
