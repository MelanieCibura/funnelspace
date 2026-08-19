// quiz.jsx — the interactive quiz state machine

const { useState, useMemo, useEffect, useRef } = React;

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 12 10 17 19 7" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);
const SmallCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 12 10 17 19 7" />
  </svg>
);

function Question({ q, value, onChange }) {
  return (
    <div className="fk-question fk-anim-in" key={q.id}>
      <div className="fk-question__head">
        <div className="fk-question__eyebrow">{q.eyebrow}</div>
        <h3>{q.title}</h3>
        {q.hint && <p className="fk-question__hint">{q.hint}</p>}
      </div>
      <div className={"fk-options " + (q.cols === 2 ? "fk-options--2col" : "")}>
        {q.options.map(opt => {
          const active = value === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              className={"fk-option" + (active ? " fk-option--active" : "")}
              onClick={() => onChange(opt.id)}
            >
              {opt.icon && <div className="fk-option__icon">{opt.icon}</div>}
              <div className="fk-option__body">
                <div className="fk-option__label">{opt.label}</div>
                {opt.sub && <div className="fk-option__sub">{opt.sub}</div>}
              </div>
              <div className="fk-option__check"><CheckIcon /></div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EmailGate({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);
  const valid = email.includes("@") && email.includes(".") && consent;
  return (
    <div className="fk-gate fk-anim-in">
      <div className="fk-gate__head">
        <div className="fk-question__eyebrow">Fast geschafft</div>
        <h3>Wohin sollen wir dein Ergebnis schicken?</h3>
        <p>Wir senden dir dein passendes Funnel-Konzept plus die fertige Vorlage für Funnelspace. Kein Spam, kein Newsletter-Wahnsinn — Versprochen.</p>
      </div>
      <form
        className="fk-gate__form"
        onSubmit={(e) => { e.preventDefault(); if (valid) onSubmit({ name, email }); }}
      >
        <div className="fk-gate__row">
          <label htmlFor="fk-name">Vorname</label>
          <input id="fk-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Lena" autoComplete="given-name" />
        </div>
        <div className="fk-gate__row">
          <label htmlFor="fk-email">E-Mail-Adresse</label>
          <input id="fk-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="lena@beispiel.de" autoComplete="email" />
        </div>
        <div className="fk-gate__perks">
          <div className="fk-gate__perks-item"><SmallCheck /> Dein Funnel-Typ als PDF</div>
          <div className="fk-gate__perks-item"><SmallCheck /> Fertige Vorlage in Funnelspace einsetzbar</div>
          <div className="fk-gate__perks-item"><SmallCheck /> 3 Beispiel-Funnels aus deiner Branche</div>
        </div>
        <label className="fk-gate__legal" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} style={{ marginTop: 3 }} />
          <span>Ich bin einverstanden, dass Funnelspace mir mein Ergebnis und gelegentlich relevante Tipps schickt. Abmeldung jederzeit per Klick. <a href="#datenschutz">Datenschutz</a>.</span>
        </label>
        <button type="submit" className="btn btn-primary btn-lg fk-gate__submit" disabled={!valid}>
          Mein Ergebnis ansehen <ArrowRight />
        </button>
      </form>
    </div>
  );
}

function Result({ result, onRestart }) {
  const f = result.funnel;
  return (
    <div className="fk-result fk-anim-in">
      <div className="fk-result__art">
        <div className="fk-result__match">{result.match}% Match</div>
        <img src={f.illustration} alt="" />
      </div>
      <div className="fk-result__body">
        <div className="fk-result__eyebrow">Dein Funnel-Typ</div>
        <div className="fk-result__name">{f.name}</div>
        <p className="fk-result__desc">{f.description}</p>
        <div className="fk-steps">
          {f.steps.map((s, i) => (
            <div className="fk-step" key={i}>
              <div className="fk-step__num">{i + 1}</div>
              <div className="fk-step__body">
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="fk-result__cta">
          <div className="fk-result__cta-row">
            <a href="#open-funnelspace" className="btn btn-ink btn-lg">
              Vorlage in Funnelspace laden <ArrowRight />
            </a>
            <button type="button" className="btn btn-link" onClick={onRestart}>Quiz neu starten</button>
          </div>
          <div className="fk-result__meta">
            <span><strong>Inkludiert:</strong> {f.template}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Quiz() {
  const questions = window.QUIZ_QUESTIONS;
  const [step, setStep] = useState(0); // 0..questions.length-1 = question, .length = email gate, .length+1 = result
  const [answers, setAnswers] = useState({});
  const [lead, setLead] = useState(null);
  const sectionRef = useRef(null);

  const total = questions.length;
  const isQuestion = step < total;
  const isGate = step === total;
  const isResult = step === total + 1;

  const current = isQuestion ? questions[step] : null;
  const currentAnswer = current ? answers[current.id] : null;
  const allAnswered = questions.every(q => answers[q.id]);

  // computed result
  const result = useMemo(() => {
    if (!allAnswered) return null;
    return window.computeFunnel(answers);
  }, [answers, allAnswered]);

  // progress percentage
  const answeredCount = Object.keys(answers).length;
  let progress = (answeredCount / total) * 100;
  if (isGate) progress = 100;
  if (isResult) progress = 100;

  function pickAnswer(optId) {
    const q = current;
    setAnswers(prev => ({ ...prev, [q.id]: optId }));
    // auto-advance after a short beat so the active state shows
    setTimeout(() => {
      setStep(s => s + 1);
    }, 220);
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }
  function goNext() {
    if (isQuestion && currentAnswer) setStep(step + 1);
  }

  function submitLead({ name, email }) {
    setLead({ name, email });
    setStep(total + 1);
  }

  function restart() {
    setAnswers({});
    setLead(null);
    setStep(0);
  }

  return (
    <section className="fk-quiz-section" id="quiz" ref={sectionRef}>
      <div className="fk-quiz-section__inner">
        <div className="fk-section__head">
          <div className="fs-eyebrow">Der Funnel-Konfigurator</div>
          <h2>7 Fragen. Dein perfekter Funnel.</h2>
          <p>Beantworte ein paar Fragen zu deinem Business — wir mappen daraus den Funnel-Typ, der bei deiner Ausgangslage am wahrscheinlichsten konvertiert. Plus die fertige Vorlage für Funnelspace.</p>
        </div>

        <div className="fk-quiz">
          {/* progress */}
          {!isResult && (
            <div className="fk-progress">
              <div className="fk-progress__count">
                {isGate ? (
                  <span><strong>Letzter Schritt</strong> · E-Mail eingeben</span>
                ) : (
                  <span>Frage <strong>{step + 1}</strong> von {total}</span>
                )}
              </div>
              <div className="fk-progress__bar">
                <div className="fk-progress__fill" style={{ width: progress + "%" }} />
              </div>
              <div className="fk-progress__count">{Math.round(progress)}%</div>
            </div>
          )}

          {/* body */}
          {isQuestion && (
            <Question q={current} value={currentAnswer} onChange={pickAnswer} />
          )}
          {isGate && <EmailGate onSubmit={submitLead} />}
          {isResult && result && <Result result={result} onRestart={restart} />}

          {/* nav */}
          {!isResult && (
            <div className="fk-quiz__nav">
              <button type="button" className="btn btn-link" onClick={goBack} disabled={step === 0}>
                <ArrowLeft /> Zurück
              </button>
              <div className="fk-quiz__nav-meta">
                {isQuestion && <>Tipp: Wähle eine Antwort — wir gehen automatisch weiter.</>}
                {isGate && <>Wir senden dein Ergebnis an deine E-Mail.</>}
              </div>
              {isQuestion ? (
                <button type="button" className="btn btn-ink" onClick={goNext} disabled={!currentAnswer}>
                  Weiter <ArrowRight />
                </button>
              ) : <span style={{ width: 1 }} />}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.Quiz = Quiz;
