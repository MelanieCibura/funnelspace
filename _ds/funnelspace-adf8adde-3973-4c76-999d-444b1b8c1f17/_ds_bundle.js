/* @ds-bundle: {"format":3,"namespace":"Funnelspace_adf8ad","components":[],"sourceHashes":{"ads/design-canvas.jsx":"3fc2600126c0","ui_kits/app/AppHeader.jsx":"d6b24a17f135","ui_kits/app/CalendarView.jsx":"dc6f84e91f00","ui_kits/app/CrmView.jsx":"7373ad49e087","ui_kits/app/DashboardView.jsx":"050ae00c7aaf","ui_kits/app/EmailView.jsx":"5b3154630403","ui_kits/app/FunnelsView.jsx":"10cf6378a3b5","ui_kits/app/MembersView.jsx":"c62bef1df3b0","ui_kits/app/Sidebar.jsx":"a7aaa11d048f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Funnelspace_adf8ad = window.Funnelspace_adf8ad || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ads/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// No assets, no deps.

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// ─────────────────────────────────────────────────────────────
// Main canvas — transform-based pan/zoom viewport
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DesignCanvas({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button starting on the
    // canvas background (not inside an artboard).
    let drag = null;
    const onPointerDown = e => {
      const onBg = e.target === vp || e.target === worldRef.current;
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px',
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Section — title + subtitle + h-stack of artboards (no wrap)
// ─────────────────────────────────────────────────────────────
function DCSection({
  title,
  subtitle,
  children,
  gap = 48
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 80,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.3,
      marginBottom: 4
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: DC.subtitle
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Artboard — labeled card
// ─────────────────────────────────────────────────────────────
function DCArtboard({
  label,
  children,
  width,
  height,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '100%',
      left: 0,
      paddingBottom: 8,
      fontSize: 12,
      fontWeight: 500,
      color: DC.label,
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ads/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppHeader.jsx
try { (() => {
// ui_kits/app/AppHeader.jsx
const TITLES = {
  dashboard: 'Dashboard',
  crm: 'CRM · Pipeline',
  funnels: 'Funnels',
  email: 'E-Mail · Broadcasts',
  calendar: 'Kalender',
  members: 'Mitgliederbereich'
};
const AppHeader = ({
  route
}) => /*#__PURE__*/React.createElement("header", {
  className: "ah"
}, /*#__PURE__*/React.createElement("h1", null, TITLES[route] || 'Funnelspace'), /*#__PURE__*/React.createElement("div", {
  className: "ah__search"
}, /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m20 20-3.5-3.5"
})), /*#__PURE__*/React.createElement("input", {
  placeholder: "Kontakte, Funnels, E-Mails durchsuchen\u2026"
})), /*#__PURE__*/React.createElement("div", {
  className: "ah__actions"
}, /*#__PURE__*/React.createElement("button", {
  className: "ah__icon-btn",
  title: "Benachrichtigungen",
  "aria-label": "Benachrichtigungen"
}, /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 21a2 2 0 0 0 4 0"
}))), /*#__PURE__*/React.createElement("button", {
  className: "ah__icon-btn",
  title: "Hilfe",
  "aria-label": "Hilfe"
}, /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.9.4-1 1-1 1.7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "17",
  r: ".6",
  fill: "currentColor"
}))), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-primary"
}, "+ Neu")));
window.AppHeader = AppHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CalendarView.jsx
try { (() => {
// ui_kits/app/CalendarView.jsx
const SLOTS_BY_DAY = [{
  day: 'Mo 21.',
  slots: ['09:00', '11:00', '14:00', '16:00']
}, {
  day: 'Di 22.',
  slots: ['10:00', '13:00', '15:00']
}, {
  day: 'Mi 23.',
  slots: ['09:00', '12:00', '14:30', '17:00']
}, {
  day: 'Do 24.',
  slots: ['11:00', '15:00']
}, {
  day: 'Fr 25.',
  slots: ['09:30', '13:00', '16:00']
}];
const CalendarView = () => {
  const [sel, setSel] = React.useState({
    d: 2,
    s: 1
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "view",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "view__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Strategy-Call buchen"), /*#__PURE__*/React.createElement("p", null, "30 Min \xB7 Google Meet \xB7 n\xE4chste Woche verf\xFCgbar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, "Synchronisierung"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ink"
  }, "Einstellungen"))), /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 12
    }
  }, SLOTS_BY_DAY.map((d, di) => /*#__PURE__*/React.createElement("div", {
    key: d.day
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      marginBottom: 10,
      color: 'var(--fs-ink)'
    }
  }, d.day), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, d.slots.map((s, si) => {
    const active = sel.d === di && sel.s === si;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setSel({
        d: di,
        s: si
      }),
      style: {
        padding: '10px 12px',
        borderRadius: 10,
        border: '1px solid ' + (active ? 'var(--fs-ink)' : 'var(--border-1)'),
        background: active ? 'var(--fs-ink)' : '#fff',
        color: active ? '#fff' : 'var(--fs-ink)',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer',
        transition: 'all 120ms'
      }
    }, s);
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 20,
      borderTop: '1px solid var(--border-1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--fg-2)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fs-ink)'
    }
  }, SLOTS_BY_DAY[sel.d].day, " \xB7 ", SLOTS_BY_DAY[sel.d].slots[sel.s]), " \xB7 30 Min \xB7 Europa/Berlin"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Termin best\xE4tigen"))));
};
window.CalendarView = CalendarView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CalendarView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CrmView.jsx
try { (() => {
// ui_kits/app/CrmView.jsx
const COLS = [{
  k: 'new',
  label: 'Neu',
  color: '#8A9098',
  deals: [{
    n: 'Lena Meinhardt',
    c: 'Launch-Coaching',
    a: '€ 1.200'
  }, {
    n: 'Jonas Krüger',
    c: 'Strategy-Call',
    a: '€ 480'
  }, {
    n: 'Sara Becker',
    c: 'Group-Program',
    a: '€ 2.400'
  }]
}, {
  k: 'in',
  label: 'In Gespräch',
  color: '#E6A13A',
  deals: [{
    n: 'Tim Fischer',
    c: '1:1 Mentoring',
    a: '€ 3.600'
  }, {
    n: 'Rafael Hartmann',
    c: 'Launch-Coaching',
    a: '€ 1.200'
  }]
}, {
  k: 'prop',
  label: 'Angebot',
  color: '#4A6FA5',
  deals: [{
    n: 'Marie Wagner',
    c: 'Group-Program',
    a: '€ 2.400'
  }, {
    n: 'Paul Neumann',
    c: '1:1 Mentoring',
    a: '€ 3.600'
  }, {
    n: 'Eva Richter',
    c: 'Strategy-Call',
    a: '€ 480'
  }]
}, {
  k: 'won',
  label: 'Gewonnen',
  color: '#7FB23B',
  deals: [{
    n: 'Hanna Schulz',
    c: 'Launch-Coaching',
    a: '€ 1.200'
  }, {
    n: 'Felix Braun',
    c: 'Group-Program',
    a: '€ 2.400'
  }]
}];
const CrmView = () => /*#__PURE__*/React.createElement("div", {
  className: "view"
}, /*#__PURE__*/React.createElement("div", {
  className: "view__head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Pipeline"), /*#__PURE__*/React.createElement("p", null, "12 offene Deals \xB7 \u20AC 22.560 im Forecast")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ghost"
}, "Filter \u25BE"), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ink"
}, "+ Deal anlegen"))), /*#__PURE__*/React.createElement("div", {
  className: "kanban"
}, COLS.map(col => /*#__PURE__*/React.createElement("div", {
  key: col.k,
  className: "kcol"
}, /*#__PURE__*/React.createElement("div", {
  className: "kcol__head"
}, /*#__PURE__*/React.createElement("span", {
  className: "dot",
  style: {
    background: col.color
  }
}), col.label, /*#__PURE__*/React.createElement("span", {
  className: "c"
}, col.deals.length)), col.deals.map((d, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: "kcard"
}, /*#__PURE__*/React.createElement("strong", null, d.n), /*#__PURE__*/React.createElement("div", {
  className: "meta"
}, /*#__PURE__*/React.createElement("span", null, d.c), /*#__PURE__*/React.createElement("span", {
  className: "amount"
}, d.a))))))));
window.CrmView = CrmView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CrmView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DashboardView.jsx
try { (() => {
// ui_kits/app/DashboardView.jsx
const DashboardView = () => /*#__PURE__*/React.createElement("div", {
  className: "view"
}, /*#__PURE__*/React.createElement("div", {
  className: "view__head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Willkommen zur\xFCck, Anna."), /*#__PURE__*/React.createElement("p", null, "Das ist in den letzten 7 Tagen passiert.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ghost"
}, "Letzte 7 Tage \u25BE"), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ink"
}, "Bericht exportieren"))), /*#__PURE__*/React.createElement("div", {
  className: "stats"
}, /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "Neue Kontakte"), /*#__PURE__*/React.createElement("div", {
  className: "n"
}, "412"), /*#__PURE__*/React.createElement("div", {
  className: "d"
}, "+18,2 %")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "Opt-In-Rate"), /*#__PURE__*/React.createElement("div", {
  className: "n"
}, "34 %"), /*#__PURE__*/React.createElement("div", {
  className: "d"
}, "+2,1 %")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "Umsatz (7 T)"), /*#__PURE__*/React.createElement("div", {
  className: "n"
}, "\u20AC 8.240"), /*#__PURE__*/React.createElement("div", {
  className: "d"
}, "+11,4 %")), /*#__PURE__*/React.createElement("div", {
  className: "stat"
}, /*#__PURE__*/React.createElement("div", {
  className: "label"
}, "Abmeldungen"), /*#__PURE__*/React.createElement("div", {
  className: "n"
}, "17"), /*#__PURE__*/React.createElement("div", {
  className: "d down"
}, "\u22125"))), /*#__PURE__*/React.createElement("div", {
  className: "panel-grid"
}, /*#__PURE__*/React.createElement("div", {
  className: "panel"
}, /*#__PURE__*/React.createElement("h3", null, "Aktivit\xE4t"), /*#__PURE__*/React.createElement("div", {
  className: "activity"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av"
}, "LM"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Lena Meinhardt"), " hat \u201ELaunch-Funnel\" gestartet"), /*#__PURE__*/React.createElement("small", null, "vor 12 min")), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av"
}, "JK"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Jonas Kr\xFCger"), " hat Kurs \u201EIntensiv-Woche\" gekauft"), /*#__PURE__*/React.createElement("small", null, "vor 34 min")), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av"
}, "SB"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Sara Becker"), " hat einen Termin gebucht"), /*#__PURE__*/React.createElement("small", null, "vor 1 Std.")), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av"
}, "TF"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Tim Fischer"), " hat Newsletter abonniert"), /*#__PURE__*/React.createElement("small", null, "vor 2 Std.")), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av"
}, "RH"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Rafael Hartmann"), " hat E-Mail-Sequenz abgeschlossen"), /*#__PURE__*/React.createElement("small", null, "vor 3 Std.")))), /*#__PURE__*/React.createElement("div", {
  className: "panel"
}, /*#__PURE__*/React.createElement("h3", null, "Top-Funnels"), /*#__PURE__*/React.createElement("div", {
  className: "activity"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av",
  style: {
    background: 'var(--fs-lime)',
    color: 'var(--fs-lime-ink)'
  }
}, "1"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Launch-Sequenz Q2"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
  style: {
    color: 'var(--fg-3)'
  }
}, "248 Leads \xB7 38 % Conv."))), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av",
  style: {
    background: 'var(--fs-lime)',
    color: 'var(--fs-lime-ink)'
  }
}, "2"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Free Masterclass"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
  style: {
    color: 'var(--fg-3)'
  }
}, "182 Leads \xB7 29 % Conv."))), /*#__PURE__*/React.createElement("div", {
  className: "activity__row"
}, /*#__PURE__*/React.createElement("div", {
  className: "activity__av",
  style: {
    background: 'var(--fs-lime)',
    color: 'var(--fs-lime-ink)'
  }
}, "3"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Whitepaper-Opt-In"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
  style: {
    color: 'var(--fg-3)'
  }
}, "91 Leads \xB7 24 % Conv.")))))));
window.DashboardView = DashboardView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DashboardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EmailView.jsx
try { (() => {
// ui_kits/app/EmailView.jsx
const {
  useState
} = React;
const EmailView = () => {
  const [subject, setSubject] = useState('Dein Zugang zur Masterclass');
  const [to, setTo] = useState('Segment · Alle Kontakte (8.412)');
  return /*#__PURE__*/React.createElement("div", {
    className: "view",
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "view__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Broadcast erstellen"), /*#__PURE__*/React.createElement("p", null, "Verschicke Newsletter oder Launch-Mails an ein Segment.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, "Entwurf speichern"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Jetzt senden"))), /*#__PURE__*/React.createElement("div", {
    className: "compose"
  }, /*#__PURE__*/React.createElement("div", {
    className: "compose__head"
  }, /*#__PURE__*/React.createElement("strong", null, "Neuer Broadcast"), /*#__PURE__*/React.createElement("span", null, "\xB7 Zuletzt gespeichert vor 2 Min.")), /*#__PURE__*/React.createElement("div", {
    className: "compose__field"
  }, /*#__PURE__*/React.createElement("label", null, "An"), /*#__PURE__*/React.createElement("input", {
    value: to,
    onChange: e => setTo(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "compose__field"
  }, /*#__PURE__*/React.createElement("label", null, "Betreff"), /*#__PURE__*/React.createElement("input", {
    value: subject,
    onChange: e => setSubject(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "compose__field"
  }, /*#__PURE__*/React.createElement("label", null, "Vorschau"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Kurzer Teaser \u2014 wird in der Inbox angezeigt",
    defaultValue: "Alles, was du f\xFCr den Start brauchst. Drin in 2 Minuten."
  })), /*#__PURE__*/React.createElement("div", {
    className: "compose__body"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Hallo ", '{{first_name}}', ","), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "du hast dich f\xFCr die Masterclass angemeldet \u2014 herzlich willkommen. In den n\xE4chsten Tagen bekommst du von mir drei kurze E-Mails, die dich Schritt f\xFCr Schritt vorbereiten."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, "Los geht's am Montag um 10 Uhr. Den Zugang findest du hier:"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--fs-ink)',
      fontWeight: 600
    }
  }, "\u203A Zur Masterclass")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Bis gleich,", /*#__PURE__*/React.createElement("br", null), "Anna")), /*#__PURE__*/React.createElement("div", {
    className: "compose__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, "Bild"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, "Link"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost"
  }, '{{…}}', " Variable"), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--fg-3)'
    }
  }, "An 8.412 Kontakte"))));
};
window.EmailView = EmailView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EmailView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/FunnelsView.jsx
try { (() => {
// ui_kits/app/FunnelsView.jsx
const FUNNELS = [{
  img: 'funnel.png',
  name: 'Launch-Sequenz Q2',
  sub: '5 Schritte · live seit 12 Tagen',
  status: 'Live',
  visits: 3240,
  conv: '38 %'
}, {
  img: 'email.png',
  name: 'Free Masterclass',
  sub: '3 Schritte · live seit 34 Tagen',
  status: 'Live',
  visits: 1820,
  conv: '29 %'
}, {
  img: 'mitgliederbereich.png',
  name: 'Whitepaper-Opt-In',
  sub: '2 Schritte · live seit 2 Monaten',
  status: 'Live',
  visits: 910,
  conv: '24 %'
}, {
  img: 'calendar.png',
  name: 'Strategy-Call-Funnel',
  sub: '4 Schritte · Entwurf',
  status: 'Entwurf',
  visits: 0,
  conv: '—'
}, {
  img: 'crm.png',
  name: 'Black-Friday 2025',
  sub: '6 Schritte · pausiert',
  status: 'Pausiert',
  visits: 2112,
  conv: '41 %'
}];
const STATUS_STYLE = {
  'Live': {
    color: '#4F7221',
    bg: 'rgba(127,178,59,.18)'
  },
  'Entwurf': {
    color: '#8A5C10',
    bg: 'rgba(230,161,58,.18)'
  },
  'Pausiert': {
    color: '#8F2B1E',
    bg: 'rgba(214,81,62,.15)'
  }
};
const FunnelsView = () => /*#__PURE__*/React.createElement("div", {
  className: "view"
}, /*#__PURE__*/React.createElement("div", {
  className: "view__head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Funnels"), /*#__PURE__*/React.createElement("p", null, "5 Funnels \xB7 3 live")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ghost"
}, "Vorlagen"), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ink"
}, "+ Funnel erstellen"))), /*#__PURE__*/React.createElement("div", {
  className: "flist"
}, FUNNELS.map((f, i) => {
  const s = STATUS_STYLE[f.status];
  return /*#__PURE__*/React.createElement("div", {
    className: "frow",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/illustrations/${f.img}`,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, f.name), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, f.sub)), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("strong", null, f.visits.toLocaleString('de-DE')), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Besucher")), /*#__PURE__*/React.createElement("div", {
    className: "kpi"
  }, /*#__PURE__*/React.createElement("strong", null, f.conv), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Conv.-Rate")), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      color: s.color,
      background: s.bg
    }
  }, f.status));
})));
window.FunnelsView = FunnelsView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/FunnelsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MembersView.jsx
try { (() => {
// ui_kits/app/MembersView.jsx
const LESSONS = [{
  t: 'Willkommen & Überblick',
  d: '3:42',
  done: true
}, {
  t: 'Dein erster Funnel',
  d: '12:08',
  done: true
}, {
  t: 'Opt-In-Seite bauen',
  d: '18:20',
  active: true
}, {
  t: 'Thank-You-Seite & Upsell',
  d: '11:55'
}, {
  t: 'E-Mail-Sequenz schreiben',
  d: '24:10'
}, {
  t: 'Launch-Tag: Checkliste',
  d: '9:02'
}];
const MembersView = () => /*#__PURE__*/React.createElement("div", {
  className: "view"
}, /*#__PURE__*/React.createElement("div", {
  className: "view__head"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Launch-Masterclass"), /*#__PURE__*/React.createElement("p", null, "Kapitel 2 von 6 \xB7 33 % abgeschlossen")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    gap: 8
  }
}, /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ghost"
}, "Materialien"), /*#__PURE__*/React.createElement("button", {
  className: "btn btn-ink"
}, "Fortschritt teilen"))), /*#__PURE__*/React.createElement("div", {
  className: "course"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  className: "course__player"
}, /*#__PURE__*/React.createElement("div", {
  className: "play"
})), /*#__PURE__*/React.createElement("div", {
  className: "course__title"
}, /*#__PURE__*/React.createElement("h3", null, "Opt-In-Seite bauen"), /*#__PURE__*/React.createElement("p", null, "Lektion 3 \xB7 18:20 Min \xB7 Mit Vorlage und Checkliste"))), /*#__PURE__*/React.createElement("div", {
  className: "outline"
}, /*#__PURE__*/React.createElement("h4", null, "Kapitel 2 \u2014 Der Funnel"), LESSONS.map((l, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  className: 'lesson ' + (l.active ? 'active' : '') + (l.done ? ' done' : '')
}, /*#__PURE__*/React.createElement("span", {
  className: "n"
}, l.done ? '✓' : i + 1), /*#__PURE__*/React.createElement("span", null, l.t), /*#__PURE__*/React.createElement("span", {
  className: "time"
}, l.d))))));
window.MembersView = MembersView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MembersView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
// ui_kits/app/Sidebar.jsx
// Lucide-style outline glyphs (24x24, stroke 1.75) to match the illustration linework.
const Ico = ({
  d,
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.75",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, d && /*#__PURE__*/React.createElement("path", {
  d: d
}), children);
const IcoHome = () => /*#__PURE__*/React.createElement(Ico, {
  d: "M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"
});
const IcoCrm = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "10",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 19c0-2.5-1.8-4.5-4-4.5"
}));
const IcoFunnel = () => /*#__PURE__*/React.createElement(Ico, {
  d: "M3 4h18l-7 9v7l-4-2v-5z"
});
const IcoMail = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "14",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "m4 7 8 6 8-6"
}));
const IcoCal = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "5",
  width: "18",
  height: "16",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18M8 3v4M16 3v4"
}));
const IcoMembers = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "3.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 20c0-4 3.5-7 8-7s8 3 8 7"
}));
const IcoCog = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"
}));
const IcoUsers = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("circle", {
  cx: "9",
  cy: "8",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 20c0-3.3 2.7-6 6-6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "17",
  cy: "10",
  r: "2.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 19c0-2.5-1.8-4.5-4-4.5"
}));
const IcoBill = () => /*#__PURE__*/React.createElement(Ico, null, /*#__PURE__*/React.createElement("rect", {
  x: "3",
  y: "6",
  width: "18",
  height: "12",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 10h18M7 15h4"
}));
const Sidebar = ({
  route,
  setRoute
}) => {
  const items = [{
    k: 'dashboard',
    label: 'Dashboard',
    I: IcoHome
  }, {
    k: 'crm',
    label: 'CRM',
    I: IcoCrm
  }, {
    k: 'funnels',
    label: 'Funnels',
    I: IcoFunnel,
    badge: 3
  }, {
    k: 'email',
    label: 'E-Mail',
    I: IcoMail
  }, {
    k: 'calendar',
    label: 'Kalender',
    I: IcoCal
  }, {
    k: 'members',
    label: 'Mitglieder',
    I: IcoMembers
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "sb"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sb__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/funnelspace-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("strong", null, "funnelspace")), /*#__PURE__*/React.createElement("div", {
    className: "sb__section"
  }, "Workspace"), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.k,
    className: 'sb__item ' + (route === it.k ? 'active' : ''),
    onClick: () => setRoute(it.k)
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(it.I, null)), /*#__PURE__*/React.createElement("span", null, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
    className: "dot-badge"
  }, it.badge))), /*#__PURE__*/React.createElement("div", {
    className: "sb__section"
  }, "Einstellungen"), /*#__PURE__*/React.createElement("button", {
    className: "sb__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(IcoCog, null)), /*#__PURE__*/React.createElement("span", null, "Konto")), /*#__PURE__*/React.createElement("button", {
    className: "sb__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(IcoUsers, null)), /*#__PURE__*/React.createElement("span", null, "Team")), /*#__PURE__*/React.createElement("button", {
    className: "sb__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(IcoBill, null)), /*#__PURE__*/React.createElement("span", null, "Abrechnung")), /*#__PURE__*/React.createElement("div", {
    className: "sb__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sb__user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av"
  }, "AM"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Anna M\xFCller"), /*#__PURE__*/React.createElement("span", null, "Pro-Plan"))));
};
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

})();
