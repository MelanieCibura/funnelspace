// fk-v2-quiz.jsx — Funnel-Konfigurator quiz, restyled in the CRM design language

const { useState: useStateFq, useMemo: useMemoFq } = React;

const FqCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 12 10 17 19 7" />
  </svg>
);
const FqArrowR = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const FqArrowL = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

function FqQuestion({ q, value, onChange }) {
  return (
    <div className="fq__q fq-anim" key={q.id}>
      <div className="fq__q-head">
        <span className="fq__q-eyebrow">{q.eyebrow}</span>
        <h3>{q.title}</h3>
        {q.hint && <p className="fq__q-hint">{q.hint}</p>}
      </div>
      <div className={"fq__opts" + (q.cols === 2 ? " fq__opts--2" : "")}>
        {q.options.map(opt => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              className={"fq__opt" + (active ? " fq__opt--active" : "")}
              onClick={() => onChange(opt.id)}
            >
              {opt.icon && <span className="fq__opt-icon">{opt.icon}</span>}
              <span className="fq__opt-body">
                <span className="fq__opt-label">{opt.label}</span>
                {opt.sub && <span className="fq__opt-sub">{opt.sub}</span>}
              </span>
              <span className="fq__opt-check"><FqCheck /></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FqGate({ onSubmit }) {
  const [name, setName] = useStateFq("");
  const [email, setEmail] = useStateFq("");
  const [consent, setConsent] = useStateFq(true);
  const valid = email.includes("@") && email.includes(".") && consent;
  return (
    <div className="fq-gate fq-anim">
      <div className="fq__q-head">
        <span className="fq__q-eyebrow">Fast geschafft</span>
        <h3>Wohin sollen wir dein Ergebnis schicken?</h3>
        <p className="fq__q-hint">Wir senden dir dein passendes Funnel-Konzept plus die fertige Vorlage für Funnelspace. Kein Spam, kein Newsletter-Wahnsinn — versprochen.</p>
      </div>
      <form className="fq-gate__form" onSubmit={(e) => { e.preventDefault(); if (valid) onSubmit({ name, email }); }}>
        <div className="fq-gate__fields">
          <div className="fq-gate__row">
            <label htmlFor="fq-name">Vorname</label>
            <input id="fq-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Lena" autoComplete="given-name" />
          </div>
          <div className="fq-gate__row">
            <label htmlFor="fq-email">E-Mail-Adresse</label>
            <input id="fq-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="lena@beispiel.de" autoComplete="email" />
          </div>
        </div>
        <ul className="fq-gate__perks">
          <li><FqCheck /> Dein Funnel-Typ als PDF</li>
          <li><FqCheck /> Fertige Vorlage in Funnelspace einsetzbar</li>
          <li><FqCheck /> 3 Beispiel-Funnels aus deiner Branche</li>
        </ul>
        <label className="fq-gate__legal">
          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
          <span>Ich bin einverstanden, dass Funnelspace mir mein Ergebnis und gelegentlich relevante Tipps schickt. Abmeldung jederzeit per Klick. <a href="#datenschutz">Datenschutz</a>.</span>
        </label>
        <button type="submit" className="btn btn--primary btn-lg fq-gate__submit" disabled={!valid}>
          Mein Ergebnis ansehen <FqArrowR />
        </button>
      </form>
    </div>
  );
}

function FqResult({ result, onRestart }) {
  const f = result.funnel;
  return (
    <div className="fq-result fq-anim">
      <div className="fq-result__art">
        <span className="fq-result__match">{result.match}% Match</span>
        <img src={f.illustration} alt="" />
        <span className="fq-result__type">{f.tagline}</span>
      </div>
      <div className="fq-result__body">
        <span className="fq__q-eyebrow">Dein Funnel-Typ</span>
        <h3 className="fq-result__name">{f.name}</h3>
        <p className="fq-result__desc">{f.description}</p>
        <div className="fq-steps">
          {f.steps.map((s, i) => (
            <div className="fq-step" key={i}>
              <span className="fq-step__num">{i + 1}</span>
              <span className="fq-step__body">
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </span>
            </div>
          ))}
        </div>
        <div className="fq-result__fit">
          <span className="fq-result__fit-label">Warum dieser Funnel zu dir passt</span>
          <ul>
            {f.fit.map((x, i) => <li key={i}><FqCheck />{x}</li>)}
          </ul>
        </div>
        <div className="fq-result__cta">
          <a href="#open-funnelspace" className="btn btn--primary btn-lg">Vorlage in Funnelspace laden <FqArrowR /></a>
          <button type="button" className="fq-link" onClick={onRestart}>Quiz neu starten</button>
        </div>
        <div className="fq-result__meta"><strong>Inkludiert:</strong> {f.template}</div>
      </div>
    </div>
  );
}

function FqQuiz() {
  const questions = window.QUIZ_QUESTIONS;
  const [step, setStep] = useStateFq(0);
  const [answers, setAnswers] = useStateFq({});

  const total = questions.length;
  const isQuestion = step < total;
  const isGate = step === total;
  const isResult = step === total + 1;

  const current = isQuestion ? questions[step] : null;
  const currentAnswer = current ? answers[current.id] : null;
  const allAnswered = questions.every(q => answers[q.id]);

  const result = useMemoFq(() => {
    if (!allAnswered) return null;
    return window.computeFunnel(answers);
  }, [answers, allAnswered]);

  const answeredCount = Object.keys(answers).length;
  let progress = (answeredCount / total) * 100;
  if (isGate || isResult) progress = 100;

  function pickAnswer(optId) {
    const q = current;
    setAnswers(prev => ({ ...prev, [q.id]: optId }));
    setTimeout(() => setStep(s => s + 1), 220);
  }
  function goBack() { if (step > 0) setStep(step - 1); }
  function goNext() { if (isQuestion && currentAnswer) setStep(step + 1); }
  function submitLead() { setStep(total + 1); }
  function restart() { setAnswers({}); setStep(0); }

  return (
    <div className="fq">
      {!isResult && (
        <div className="fq__progress">
          <div className="fq__progress-count">
            {isGate
              ? <span><strong>Letzter Schritt</strong> · E-Mail eingeben</span>
              : <span>Frage <strong>{step + 1}</strong> von {total}</span>}
          </div>
          <div className="fq__progress-bar"><div className="fq__progress-fill" style={{ width: progress + "%" }} /></div>
          <div className="fq__progress-count">{Math.round(progress)}%</div>
        </div>
      )}

      {isQuestion && <FqQuestion q={current} value={currentAnswer} onChange={pickAnswer} />}
      {isGate && <FqGate onSubmit={submitLead} />}
      {isResult && result && <FqResult result={result} onRestart={restart} />}

      {!isResult && (
        <div className="fq__nav">
          <button type="button" className="fq-link" onClick={goBack} disabled={step === 0}><FqArrowL /> Zurück</button>
          <div className="fq__nav-meta">
            {isQuestion && <>Wähle eine Antwort — wir gehen automatisch weiter.</>}
            {isGate && <>Wir senden dein Ergebnis an deine E-Mail.</>}
          </div>
          {isQuestion
            ? <button type="button" className="btn btn--ink" onClick={goNext} disabled={!currentAnswer}>Weiter <FqArrowR /></button>
            : <span style={{ width: 1 }} />}
        </div>
      )}
    </div>
  );
}

window.FqQuiz = FqQuiz;
