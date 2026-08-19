// Tripwire — Tweaks panel (just product variant)
const TW_DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "prompts"
}/*EDITMODE-END*/;

const TwTweaks = ({ tw, setTweak }) => (
  <TweaksPanel title="Tweaks">
    <TweakSection title="Tripwire-Produkt">
      <TweakRadio
        label="Variante"
        value={tw.variant}
        onChange={(v) => setTweak("variant", v)}
        options={[
          { value: "prompts", label: "Prompts" },
          { value: "templates", label: "Templates" },
          { value: "workshop", label: "Workshop" },
        ]}
      />
    </TweakSection>
  </TweaksPanel>
);
window.TwTweaks = TwTweaks;
window.TW_DEFAULTS = TW_DEFAULTS;
