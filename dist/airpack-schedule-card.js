import { LitElement, html, css } from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

/* ==================================================================
 * TŁUMACZENIA (i18n)
 * ================================================================== */
const I18N = {
  pl: {
    // Domyślne wartości
    default_title: 'Harmonogram wentylacji',
      default_subtitle: 'airpack_home',

        // Sezony (fallback, jeśli brak label_pl w config)
        season_zima: 'Zima',
        season_lato: 'Lato',

        // Odcinki
        episode_short: 'ODC.',
        intensity: 'Intensywność',
        supply_temp: 'Temp. nawiewu',
        supply_readout: '°C nawiew',
        ventilation: 'WIETRZENIE',

        // Placeholdery
        missing_entity: '— brak encji —',
        unavailable: '— niedostępne —',

        // Banner
        missing_banner_title: '⚠ Brakujące encje',
        and_more: '…i {n} więcej',
        hint_auto: 'Sprawdź <code>device_prefix</code> lub przełącz tryb na <code>manual</code>.',
        hint_manual: 'Sprawdź wzorce w opcji <code>entities</code>.',
        hint_console: 'Szczegóły w konsoli (F12).',

        // Reset
        reset_restore: '↺ Przywróć domyślne',
        reset_confirm: 'Przywrócić domyślne dla',
        reset_scope_season: 'całego sezonu',
        reset_scope_day: 'tego dnia',
        reset_yes: 'Tak, resetuj',
        reset_cancel: 'Anuluj',

        // Edytor — nagłówek
        ed_header: 'Nagłówek',
        ed_title: 'Tytuł',
        ed_subtitle: 'Podtytuł',
        ed_title_placeholder: 'Harmonogram wentylacji',
        ed_subtitle_placeholder: 'airpack_home',
        ed_leave_empty: 'Pozostaw puste, aby ukryć dany wiersz.',

        // Edytor — źródło encji
        ed_source: 'Źródło encji',
        ed_mode: 'Tryb',
        ed_mode_auto: 'Auto (skan encji)',
        ed_mode_manual: 'Manual (wzorce)',
        ed_device_prefix: 'Prefiks urządzenia',
        ed_device_prefix_hint: 'Fragment entity_id wspólny dla wszystkich encji, np. airpack_home',
        ed_scan_waiting: 'Oczekiwanie na dane z Home Assistant…',
        ed_scan_no_hass: 'Nie można przeskanować (brak hass.states).',
        ed_scan_not_found: '✗ Nie znaleziono encji z prefiksem',
        ed_scan_check: 'Sprawdź prefiks lub przełącz na tryb manual.',
        ed_scan_found: '✓ Znaleziono:',
        ed_scan_days: 'dni',
        ed_scan_episodes: 'odcinki',
        ed_scan_season: 'Select sezonu',

        ed_season_select: 'Sezon (select)',
        ed_ep_time: 'Odcinek — czas',
        ed_ep_intensity: 'Odcinek — intensywność',
        ed_ep_temp: 'Odcinek — temp.',
        ed_vent_time: 'Wietrzenie — czas',
        ed_preview: 'Podgląd:',
        ed_placeholders: 'Placeholdery:',

        // Edytor — wygląd
        ed_appearance: 'Wygląd',
        ed_theme: 'Motyw',
        ed_theme_auto: 'Auto (jak HA)',
        ed_theme_dark: 'Ciemny',
        ed_theme_light: 'Jasny',
        ed_width: 'Szerokość',
        ed_font: 'Bazowy font (px)',
        ed_density: 'Gęstość',
        ed_density_compact: 'Kompaktowa',
        ed_density_normal: 'Normalna',
        ed_density_comfy: 'Luźna',

        // Edytor — język
        ed_language: 'Język',
        ed_language_auto: 'Automatyczny (jak HA)',
        ed_language_pl: 'Polski',
        ed_language_en: 'English',

        // Edytor — reset
        ed_reset: 'Reset',
        ed_show_reset: 'Pokaż reset',
        ed_yes: 'Tak',
        ed_no: 'Nie',
        ed_reset_scope: 'Zakres resetu',
        ed_reset_day: 'Bieżący dzień',
        ed_reset_season: 'Cały sezon (7 dni)',
        ed_vent_default: 'Domyślna godz. wietrzenia',
  },

  en: {
    default_title: 'Ventilation schedule',
      default_subtitle: 'airpack_home',

        season_zima: 'Winter',
        season_lato: 'Summer',

        episode_short: 'EP.',
        intensity: 'Intensity',
        supply_temp: 'Supply temp.',
        supply_readout: '°C supply',
        ventilation: 'VENTILATION',

        missing_entity: '— missing entity —',
        unavailable: '— unavailable —',

        missing_banner_title: '⚠ Missing entities',
        and_more: '…and {n} more',
        hint_auto: 'Check <code>device_prefix</code> or switch to <code>manual</code> mode.',
        hint_manual: 'Check patterns in the <code>entities</code> option.',
        hint_console: 'See console (F12) for details.',

        reset_restore: '↺ Restore defaults',
        reset_confirm: 'Restore defaults for',
        reset_scope_season: 'whole season',
        reset_scope_day: 'this day',
        reset_yes: 'Yes, reset',
        reset_cancel: 'Cancel',

        ed_header: 'Header',
        ed_title: 'Title',
        ed_subtitle: 'Subtitle',
        ed_title_placeholder: 'Ventilation schedule',
        ed_subtitle_placeholder: 'airpack_home',
        ed_leave_empty: 'Leave empty to hide that row.',

        ed_source: 'Entity source',
        ed_mode: 'Mode',
        ed_mode_auto: 'Auto (entity scan)',
        ed_mode_manual: 'Manual (patterns)',
        ed_device_prefix: 'Device prefix',
        ed_device_prefix_hint: 'Common entity_id fragment, e.g. airpack_home',
        ed_scan_waiting: 'Waiting for Home Assistant data…',
        ed_scan_no_hass: 'Cannot scan (no hass.states).',
        ed_scan_not_found: '✗ No entities found with prefix',
        ed_scan_check: 'Check the prefix or switch to manual mode.',
        ed_scan_found: '✓ Found:',
        ed_scan_days: 'days',
        ed_scan_episodes: 'episodes',
        ed_scan_season: 'Season select',

        ed_season_select: 'Season (select)',
        ed_ep_time: 'Episode — time',
        ed_ep_intensity: 'Episode — intensity',
        ed_ep_temp: 'Episode — temp.',
        ed_vent_time: 'Ventilation — time',
        ed_preview: 'Preview:',
        ed_placeholders: 'Placeholders:',

        ed_appearance: 'Appearance',
        ed_theme: 'Theme',
        ed_theme_auto: 'Auto (like HA)',
        ed_theme_dark: 'Dark',
        ed_theme_light: 'Light',
        ed_width: 'Width',
        ed_font: 'Base font (px)',
        ed_density: 'Density',
        ed_density_compact: 'Compact',
        ed_density_normal: 'Normal',
        ed_density_comfy: 'Comfy',

        ed_language: 'Language',
        ed_language_auto: 'Automatic (like HA)',
        ed_language_pl: 'Polski',
        ed_language_en: 'English',

        ed_reset: 'Reset',
        ed_show_reset: 'Show reset',
        ed_yes: 'Yes',
        ed_no: 'No',
        ed_reset_scope: 'Reset scope',
        ed_reset_day: 'Current day',
        ed_reset_season: 'Whole season (7 days)',
        ed_vent_default: 'Default ventilation time',
  },
};

/* ==================================================================
 * WYKRYWANIE JĘZYKA
 * ================================================================== */
function detectLanguage(hass, override) {
  if (override && override !== 'auto') {
    return override === 'pl' ? 'pl' : 'en';
  }
  const raw = (
    hass?.locale?.language ||
    hass?.language ||
    (typeof navigator !== 'undefined' && navigator.language) ||
    'en'
  ).toLowerCase();
  return raw.startsWith('pl') ? 'pl' : 'en';
}

function makeT(lang) {
  const dict = I18N[lang] || I18N.en;
  return (key, vars) => {
    let s = dict[key] ?? I18N.en[key] ?? key;
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
    }
    return s;
  };
}

/* ==================================================================
 * STAŁE
 * ================================================================== */
const DAYS = [
  { key: 'poniedzialek', label: 'PON', label_en: 'MON' },
{ key: 'wtorek',       label: 'WT',  label_en: 'TUE' },
{ key: 'sroda',        label: 'ŚR',  label_en: 'WED' },
{ key: 'czwartek',     label: 'CZW', label_en: 'THU' },
{ key: 'piatek',       label: 'PT',  label_en: 'FRI' },
{ key: 'sobota',       label: 'SOB', label_en: 'SAT' },
{ key: 'niedziela',    label: 'NIEDZ', label_en: 'SUN' },
];

const EPISODES = [1, 2, 3, 4];

const DEFAULT_ENTITIES = {
  season:      'select.airpack_home_harmonogram_lato_zima',
  episodeTime: 'time.airpack_home_{seasonTime}_{day}_odcinek_{n}',
  intensity:   'number.airpack_home_{season}_{day}_odc_{n}_intensywnosc',
  temp:        'number.airpack_home_{season}_{day}_odc_{n}_temp_nawiewu',
  ventilation: 'time.airpack_home_{season}_{day}_poczatek_wietrzenia',
};

const DEFAULT_SEASONS = {
  zima: {
    key: 'zima',
    timeKey: 'winter',
    label: 'Zima',
    label_pl: 'Zima',
    label_en: 'Winter',
    option: 'Zima',
    match: ['zima', 'winter'],
  },
  lato: {
    key: 'lato',
    timeKey: 'summer',
    label: 'Lato',
    label_pl: 'Lato',
    label_en: 'Summer',
    option: 'Lato',
    match: ['lato', 'summer'],
  },
};

const DEFAULTS = {
  title: '',
  subtitle: '',

  language: 'auto',        // 'auto' | 'pl' | 'en'

  theme: 'auto',
  width: '640px',
  font_size: 14,
  density: 'normal',
  show_reset: true,
  reset_scope: 'day',
  vent_default_time: '17:45',

  entity_mode: 'auto',
  device_prefix: 'airpack_home',
  entities: DEFAULT_ENTITIES,
  seasons: DEFAULT_SEASONS,
};

/* ==================================================================
 * SCANNER
 * ================================================================== */
function scanEntities(hass, prefix, seasons) {
  if (!hass?.states || !prefix) return null;

  const lower = String(prefix).toLowerCase();
  const allIds = Object.keys(hass.states);
  const matching = allIds.filter(id => id.toLowerCase().includes(lower));

  const result = {
    entities: {},
    seasonEntity: null,
    _days: new Set(),
    _episodes: new Set(),
    stats: { time: 0, number: 0, select: 0 },
  };

  const seasonMatchers = Object.entries(seasons).map(([key, s]) => ({
    key,
    keywords: (s.match || [s.key, s.timeKey].filter(Boolean)).map(k => String(k).toLowerCase()),
  }));
  const fallbackSeason = Object.keys(seasons)[0] || 'zima';

  const selectCandidates = [];

  for (const id of matching) {
    const dot = id.indexOf('.');
    if (dot < 0) continue;
    const domain = id.slice(0, dot);
    const name = id.slice(dot + 1);
    const nLower = name.toLowerCase();

    if (domain === 'select') {
      selectCandidates.push(id);
      continue;
    }
    if (domain !== 'time' && domain !== 'number') continue;

    let seasonKey = null;
    for (const sm of seasonMatchers) {
      if (sm.keywords.some(kw => nLower.includes(kw))) {
        seasonKey = sm.key;
        break;
      }
    }
    if (!seasonKey) seasonKey = fallbackSeason;

    const day = DAYS.find(d => nLower.includes(d.key))?.key;
    if (!day) continue;

    let type = null;
    if (nLower.includes('poczatek_wietrzenia') || nLower.includes('wietrzenie') || nLower.includes('ventilation')) {
      type = 'ventilation';
    } else if (nLower.includes('intensywnosc') || nLower.includes('intensity')) {
      type = 'intensity';
    } else if (nLower.includes('temp_nawiewu') || nLower.includes('temp_supply') || nLower.includes('supply_temp')) {
      type = 'temp';
    } else if (nLower.includes('odcinek') || /\bodc[_\-]?\d+/.test(nLower) || /\bep(?:isode)?[_\-]?\d+/.test(nLower)) {
      type = 'episodeTime';
    }
    if (!type) continue;

    if (!result.entities[seasonKey]) result.entities[seasonKey] = {};
    if (!result.entities[seasonKey][day]) result.entities[seasonKey][day] = {};

    if (type === 'ventilation') {
      result.entities[seasonKey][day].ventilation = id;
      result._days.add(day);
      result.stats[domain]++;
      continue;
    }

    const nM = nLower.match(/(?:odc|odcinek|episode|ep)[_\-]?(\d+)/);
    if (!nM) continue;
    const n = Number(nM[1]);
    if (!Number.isFinite(n) || n < 1 || n > 24) continue;

    if (!result.entities[seasonKey][day][n]) result.entities[seasonKey][day][n] = {};
    result.entities[seasonKey][day][n][type] = id;
    result._days.add(day);
    if (type === 'episodeTime') result._episodes.add(n);
    result.stats[domain]++;
  }

  if (selectCandidates.length) {
    const preferred = selectCandidates.find(id => /harmonogram|season|sezon/i.test(id));
    result.seasonEntity = preferred || selectCandidates[0];
    result.stats.select = 1;
  }

  return {
    entities: result.entities,
    seasonEntity: result.seasonEntity,
    stats: {
      time: result.stats.time,
      number: result.stats.number,
      select: result.stats.select,
      days: result._days.size,
      episodes: result._episodes.size,
    },
  };
}

/* ==================================================================
 * KARTA
 * ================================================================== */
class AirpackScheduleCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      _day: { type: String },
      _season: { type: String },
      _config: { type: Object },
      _confirmReset: { type: Boolean },
    };
  }

  constructor() {
    super();
    this._day = 'poniedzialek';
    this._season = 'zima';
    this._config = { ...DEFAULTS };
    this._confirmReset = false;
    this._resetTimer = null;
    this._scanCache = null;
    this._lang = 'en';
  }

  setConfig(config) {
    const c = config || {};
    this._config = {
      ...DEFAULTS,
      ...c,
      entities: { ...DEFAULT_ENTITIES, ...(c.entities || {}) },
      seasons: {
        zima: { ...DEFAULT_SEASONS.zima, ...((c.seasons || {}).zima || {}) },
        lato: { ...DEFAULT_SEASONS.lato, ...((c.seasons || {}).lato || {}) },
      },
    };
    if (!this._config.seasons[this._season]) {
      this._season = Object.keys(this._config.seasons)[0] || 'zima';
    }
    this._scanCache = null;
    this._lang = detectLanguage(this.hass, this._config.language);
  }

  static getConfigElement() {
    return document.createElement('airpack-schedule-card-editor');
  }

  static getStubConfig() {
    return {
      language: 'auto',
      theme: 'auto',
      width: '640px',
      font_size: 14,
      density: 'normal',
      show_reset: true,
      reset_scope: 'day',
      vent_default_time: '17:45',
      entity_mode: 'auto',
      device_prefix: 'airpack_home',
    };
  }

  /* --- Tłumaczenia --- */
  get _t() { return makeT(this._lang); }

  _seasonLabel(season) {
    if (this._lang === 'pl') return season.label_pl || season.label || season.key;
    return season.label_en || season.label || season.key;
  }

  _dayLabel(day) {
    if (this._lang === 'pl') return day.label;
    return day.label_en || day.label;
  }

  /* --- Motyw --- */
  get _effectiveTheme() {
    const t = this._config.theme || 'auto';
    if (t === 'auto') {
      return this.hass?.themes?.darkMode === false ? 'light' : 'dark';
    }
    return t;
  }

  /* --- Rozwiązywanie encji --- */
  get _entityMode() { return this._config.entity_mode || 'auto'; }

  get _resolvedEntities() {
    if (this._entityMode === 'manual') return null;
    const prefix = this._config.device_prefix || 'airpack_home';
    const fp = this._computeFingerprint(prefix);
    if (this._scanCache && this._scanCache.fp === fp) {
      return this._scanCache.data;
    }
    const data = scanEntities(this.hass, prefix, this._config.seasons);
    this._scanCache = { fp, data };
    return data;
  }

  _computeFingerprint(prefix) {
    if (!this.hass?.states) return '';
    const lower = String(prefix).toLowerCase();
    let count = 0;
    let hash = 0;
    for (const id of Object.keys(this.hass.states)) {
      if (id.toLowerCase().includes(lower)) {
        count++;
        for (let i = 0; i < id.length; i++) {
          hash = ((hash << 5) - hash + id.charCodeAt(i)) | 0;
        }
      }
    }
    return count + ':' + hash;
  }

  _formatPattern(pattern, day, n) {
    const season = this._config.seasons[this._season] || DEFAULT_SEASONS.zima;
    return String(pattern)
    .replace(/\{seasonTime\}/g, season.timeKey)
    .replace(/\{season\}/g, season.key)
    .replace(/\{day\}/g, day)
    .replace(/\{n\}/g, n);
  }

  _getEntity(kind, day = this._day, n = 1) {
    if (this._entityMode === 'manual') {
      const p = this._config.entities;
      if (kind === 'season') return p.season;
      const pattern = p[kind];
      if (!pattern) return null;
      return this._formatPattern(pattern, day, n);
    }
    const map = this._resolvedEntities;
    if (!map) return null;
    if (kind === 'season') return map.seasonEntity;

    const seasonData = map.entities[this._season];
    if (!seasonData) return null;
    const dayData = seasonData[day];
    if (!dayData) return null;

    if (kind === 'ventilation') return dayData.ventilation || null;

    const ep = dayData[n];
    if (!ep) return null;
    return ep[kind] || null;
  }

  /* --- Walidacja --- */
  _entityStatus(entityId) {
    if (!entityId) return 'missing';
    if (!this.hass?.states) return 'unknown';
    const obj = this.hass.states[entityId];
    if (!obj) return 'missing';
    const s = obj.state;
    if (s === 'unknown' || s === 'unavailable') return 'unavailable';
    return 'ok';
  }

  _state(entityId) {
    if (!entityId) return undefined;
    return this.hass?.states?.[entityId]?.state;
  }

  _num(state, fallback) {
    const n = Number(state);
    return Number.isFinite(n) ? n : fallback;
  }
  _formatTime(state) {
    if (!state || state === 'unknown' || state === 'unavailable') return null;
    return state.slice(0, 5);
  }

  _collectMissing() {
    if (!this.hass?.states) return [];
    if (this._entityMode === 'auto' && !this._resolvedEntities) return [];
    const missing = new Set();

    const seasonId = this._getEntity('season');
    if (this._entityStatus(seasonId) === 'missing') missing.add(seasonId);

    for (let n = 1; n <= EPISODES.length; n++) {
      for (const kind of ['episodeTime', 'intensity', 'temp']) {
        const id = this._getEntity(kind, this._day, n);
        if (this._entityStatus(id) === 'missing') missing.add(id || `(${kind} #${n})`);
      }
    }
    const ventId = this._getEntity('ventilation', this._day);
    if (this._entityStatus(ventId) === 'missing') missing.add(ventId || '(ventilation)');

    return [...missing];
  }

  /* --- Akcje HA --- */
  _setTime(entityId, value) {
    if (!value || !entityId) return;
    if (this._entityStatus(entityId) !== 'ok') {
      console.warn(`[airpack-schedule-card] Skipping write — entity unavailable: ${entityId}`);
      return;
    }
    this.hass.callService('time', 'set_value', { entity_id: entityId, time: value });
  }
  _setNumber(entityId, value) {
    if (!entityId) return;
    if (this._entityStatus(entityId) !== 'ok') {
      console.warn(`[airpack-schedule-card] Skipping write — entity unavailable: ${entityId}`);
      return;
    }
    this.hass.callService('number', 'set_value', { entity_id: entityId, value: Number(value) });
  }
  _setSeason(seasonKey) {
    const season = this._config.seasons[seasonKey];
    if (!season) return;
    const entityId = this._getEntity('season');
    this._season = seasonKey;
    if (this._entityStatus(entityId) !== 'ok') {
      console.warn(`[airpack-schedule-card] Skipping season change — entity unavailable: ${entityId}`);
      return;
    }
    this.hass.callService('select', 'select_option', {
      entity_id: entityId,
      option: season.option,
    });
  }

  _detectSeasonFromState(state) {
    if (!state || state === 'unknown' || state === 'unavailable') return null;
    const lower = String(state).toLowerCase();
    for (const [key, season] of Object.entries(this._config.seasons)) {
      const keywords = Array.isArray(season.match) ? season.match : [];
      if (keywords.some(kw => lower.includes(String(kw).toLowerCase()))) return key;
    }
    return null;
  }

  /* --- Reset --- */
  _getDefaultEpisodes(dayKey) {
    const isWeekend = dayKey === 'sobota' || dayKey === 'niedziela';
    const base = isWeekend
    ? [ ['07:30', 30], ['10:00', 55], ['15:00', 45], ['21:30', 25] ]
    : [ ['06:00', 60], ['08:30', 25], ['16:00', 40], ['22:00', 30] ];
    const baseTemp = this._season === 'zima' ? 21 : 19;
    return base.map(([time, intensity], i) => ({
      time,
      intensity,
      temp: baseTemp + (i % 2 === 0 ? 1 : -1),
    }));
  }

  async _resetToDefaults() {
    const scope = this._config.reset_scope || 'day';
    const days = scope === 'season' ? DAYS.map(d => d.key) : [this._day];
    const calls = [];
    const skipped = [];

    for (const day of days) {
      const defaults = this._getDefaultEpisodes(day);
      defaults.forEach((ep, i) => {
        const n = i + 1;
        const timeId = this._getEntity('episodeTime', day, n);
        const intId = this._getEntity('intensity', day, n);
        const tmpId = this._getEntity('temp', day, n);

        if (this._entityStatus(timeId) === 'ok') {
          calls.push(this.hass.callService('time', 'set_value', { entity_id: timeId, time: ep.time }));
        } else skipped.push(timeId);

        if (this._entityStatus(intId) === 'ok') {
          calls.push(this.hass.callService('number', 'set_value', { entity_id: intId, value: ep.intensity }));
        } else skipped.push(intId);

        if (this._entityStatus(tmpId) === 'ok') {
          calls.push(this.hass.callService('number', 'set_value', { entity_id: tmpId, value: ep.temp }));
        } else skipped.push(tmpId);
      });

        const ventId = this._getEntity('ventilation', day);
        if (this._entityStatus(ventId) === 'ok') {
          calls.push(this.hass.callService('time', 'set_value', {
            entity_id: ventId, time: this._config.vent_default_time,
          }));
        } else skipped.push(ventId);
    }

    await Promise.all(calls);
    if (skipped.length) {
      console.warn('[airpack-schedule-card] Reset skipped for unavailable entities:', skipped.filter(Boolean));
    }
    this._confirmReset = false;
  }

  _handleResetClick() {
    if (!this._confirmReset) {
      this._confirmReset = true;
      clearTimeout(this._resetTimer);
      this._resetTimer = setTimeout(() => { this._confirmReset = false; }, 4000);
      return;
    }
    clearTimeout(this._resetTimer);
    this._resetToDefaults();
  }
  _cancelReset() {
    clearTimeout(this._resetTimer);
    this._confirmReset = false;
  }

  /* --- Cykl życia --- */
  updated(changed) {
    if (changed.has('hass') || changed.has('_config')) {
      // Wykryj język na nowo (może się zmienić w HA)
      const newLang = detectLanguage(this.hass, this._config.language);
      if (this._lang !== newLang) this._lang = newLang;

      const s = this._state(this._getEntity('season'));
      const detected = this._detectSeasonFromState(s);
      if (detected && this._season !== detected) {
        this._season = detected;
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._resetTimer);
  }

  /* ==================================================================
   *  STYLE
   *  ================================================================== */
  static get styles() {
    return css`
    :host { display: block; }

    .wrap[data-theme="dark"] {
      --panel: #1A2226;
      --panel-2: #202A2F;
      --line: #2B363B;
      --text: #EAF1EF;
      --text-dim: #8DA0A0;
      --text-faint: #56666B;
      --accent-zima: #5FA8D3;
      --accent-zima-dim: #2E4653;
      --accent-lato: #E8A23D;
      --accent-lato-dim: #4E3E23;
      --slider-thumb-border: #1A2226;
      --time-color-scheme: dark;
      --danger: #D97469;
      --danger-hover: #C5665B;
      --warn: #E8A23D;
    }

    .wrap[data-theme="light"] {
      --panel: #FFFFFF;
      --panel-2: #F6F8F7;
      --line: #DBE3E1;
      --text: #16211F;
      --text-dim: #56696A;
      --text-faint: #94A3A2;
      --accent-zima: #3E8FBF;
      --accent-zima-dim: #DCEBF5;
      --accent-lato: #C98423;
      --accent-lato-dim: #FBE9CF;
      --slider-thumb-border: #FFFFFF;
      --time-color-scheme: light;
      --danger: #C25A50;
      --danger-hover: #A94B42;
      --warn: #B8821F;
    }

    .wrap[data-density="compact"] {
      --ep-pad-y: 0.71em; --ep-pad-x: 1.07em;
      --masthead-mb: 1.14em;
      --days-pad: 0.71em 0.43em 0.57em;
      --season-btn-pad: 0.36em 0.86em;
    }
    .wrap[data-density="normal"] {
      --ep-pad-y: 1.14em; --ep-pad-x: 1.29em;
      --masthead-mb: 1.57em;
      --days-pad: 0.93em 0.43em 0.79em;
      --season-btn-pad: 0.5em 1.14em;
    }
    .wrap[data-density="comfy"] {
      --ep-pad-y: 1.71em; --ep-pad-x: 1.71em;
      --masthead-mb: 2.14em;
      --days-pad: 1.14em 0.57em 1em;
      --season-btn-pad: 0.64em 1.43em;
    }

    .wrap {
      max-width: var(--card-width, 640px);
      width: 100%;
      margin: 0 auto;
      padding: 0.5em 0;
      font-size: calc(var(--font-base, 14) * 1px);
      color: var(--text);
      font-family: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
      --radius: 0.71em;
      --font-mono: 'IBM Plex Mono', ui-monospace, 'SF Mono', monospace;
    }

    .masthead {
      display: flex; align-items: baseline; justify-content: space-between;
      margin-bottom: var(--masthead-mb); gap: 0.86em;
    }
    .masthead h1 {
      font-size: 1.43em; font-weight: 600; margin: 0;
      letter-spacing: .01em; color: var(--text);
    }
    .masthead .device {
      font-family: var(--font-mono); font-size: 0.86em;
      color: var(--text-faint); margin-top: 0.29em;
    }

    .season-switch {
      display: flex; border: 1px solid var(--line);
      border-radius: 999px; padding: 0.21em;
      background: var(--panel); flex-shrink: 0;
    }
    .season-switch button {
      border: none; background: transparent; color: var(--text-dim);
      font-family: inherit; font-size: 0.93em; font-weight: 500;
      padding: var(--season-btn-pad); border-radius: 999px;
      cursor: pointer; transition: background .25s ease, color .25s ease;
    }
    .season-switch button.active {
      background: color-mix(in srgb, var(--accent-cur) 25%, transparent);
      color: var(--accent-cur);
    }

    .panel {
      background: var(--panel); border: 1px solid var(--line);
      border-radius: var(--radius); overflow: hidden;
      transition: background .25s ease, border-color .25s ease;
    }

    .days {
      display: flex; overflow-x: auto; border-bottom: 1px solid var(--line);
      scrollbar-width: none;
    }
    .days::-webkit-scrollbar { display: none; }
    .days button {
      flex: 1 0 auto; min-width: 4.14em; background: transparent;
      border: none; color: var(--text-faint);
      font-family: var(--font-mono); font-size: 0.86em;
      padding: var(--days-pad); cursor: pointer; position: relative;
      transition: color .2s ease;
    }
    .days button.active { color: var(--text); }
    .days button.active::after {
      content: ""; position: absolute; left: 1em; right: 1em; bottom: 0;
      height: 2px; background: var(--accent-cur); border-radius: 2px;
    }

    .episodes { padding: 0.29em 0; }
    .episode {
      display: grid; grid-template-columns: 3.71em 1fr; gap: 0.29em 1.14em;
      padding: var(--ep-pad-y) var(--ep-pad-x);
      border-bottom: 1px solid var(--line); align-items: center;
    }
    .episode:last-child { border-bottom: none; }
    .ep-label {
      font-family: var(--font-mono); font-size: 0.79em;
      color: var(--text-faint); align-self: start; padding-top: 0.14em;
    }
    .ep-main { min-width: 0; }
    .ep-row1 {
      display: flex; align-items: baseline; justify-content: space-between;
      margin-bottom: 0.71em;
    }
    .time-input {
      background: transparent; border: none; color: var(--text);
      font-family: var(--font-mono); font-size: 1.21em; font-weight: 500;
      width: 6.43em; padding: 0; cursor: pointer;
      color-scheme: var(--time-color-scheme, dark);
    }
    .time-input::-webkit-calendar-picker-indicator { opacity: .55; cursor: pointer; }
    .temp-readout {
      font-family: var(--font-mono); font-size: 0.93em;
      color: var(--accent-cur); white-space: nowrap;
    }
    .intensity-row, .temp-row {
      display: flex; align-items: center; gap: 0.71em;
    }
    .temp-row { margin-top: 0.5em; }
    .slider-label {
      font-size: 0.79em; color: var(--text-faint);
      width: 6em; flex-shrink: 0;
    }
    input[type="range"] {
      -webkit-appearance: none; appearance: none; flex: 1;
      height: 4px; border-radius: 2px; background: var(--line);
      outline: none; cursor: pointer;
    }
    input[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; width: 1.07em; height: 1.07em;
      border-radius: 50%; background: var(--accent-cur);
      border: 2px solid var(--slider-thumb-border);
      box-shadow: 0 0 0 1px var(--accent-cur); cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 1.07em; height: 1.07em;
      border: 2px solid var(--slider-thumb-border);
      border-radius: 50%; background: var(--accent-cur);
      box-shadow: 0 0 0 1px var(--accent-cur); cursor: pointer;
    }
    .slider-val {
      font-family: var(--font-mono); font-size: 0.93em;
      color: var(--text); width: 3em;
      text-align: right; flex-shrink: 0;
    }

    .ventilation {
      background: color-mix(in srgb, var(--accent-cur) 8%, var(--panel));
      border-bottom: none;
      grid-template-columns: 6.5em 1fr;
    }
    .ventilation .ep-label {
      color: var(--accent-cur);
      font-weight: 600;
      letter-spacing: .04em;
      align-self: center;
      padding-top: 0;
    }
    .ventilation .ep-main { display: flex; justify-content: flex-end; }
    .ventilation .ep-row1 {
      margin-bottom: 0;
      justify-content: flex-end;
      width: 100%;
    }

    .placeholder {
      color: var(--text-faint);
      font-family: var(--font-mono);
      font-size: 0.93em;
      font-style: italic;
      cursor: help;
    }
    .ep-warning {
      color: var(--danger); font-size: 1em;
      margin-left: 0.43em; cursor: help;
    }
    .episode.episode-broken {
      background: color-mix(in srgb, var(--danger) 5%, transparent);
    }
    .episode.episode-broken .ep-label { color: var(--danger); }

    .banner {
      margin-bottom: 1em;
      padding: 0.86em 1em;
      border-radius: 0.57em;
      font-size: 0.86em;
      line-height: 1.5;
    }
    .banner-warning {
      background: color-mix(in srgb, var(--warn) 14%, var(--panel));
      border: 1px solid color-mix(in srgb, var(--warn) 45%, var(--line));
      color: var(--text);
    }
    .banner-title { font-weight: 600; margin-bottom: 0.29em; }
    .banner-list {
      display: flex; flex-wrap: wrap; gap: 0.29em 0.57em;
      margin: 0.43em 0;
    }
    .banner-list code {
      font-family: var(--font-mono); font-size: 0.86em;
      padding: 0.14em 0.43em;
      background: var(--panel);
      border-radius: 0.29em;
      border: 1px solid var(--line);
    }
    .banner-hint {
      color: var(--text-dim); font-size: 0.93em;
      margin-top: 0.29em;
    }
    .banner-hint code {
      font-family: var(--font-mono); font-size: 0.93em;
    }

    .actions {
      display: flex; align-items: center; justify-content: center;
      gap: 0.71em; margin-top: 1.43em; flex-wrap: wrap;
    }
    .confirm-text { font-size: 0.86em; color: var(--text-dim); }
    .btn {
      font-family: inherit; font-size: 0.86em; font-weight: 500;
      padding: 0.57em 1.14em; border-radius: 999px; cursor: pointer;
      transition: background .2s ease, color .2s ease, border-color .2s ease;
      border: 1px solid transparent;
    }
    .btn-ghost {
      background: transparent; border-color: var(--line); color: var(--text-dim);
    }
    .btn-ghost:hover { color: var(--text); border-color: var(--text-faint); }
    .btn-danger {
      background: var(--danger); color: #fff; border-color: var(--danger);
    }
    .btn-danger:hover {
      background: var(--danger-hover); border-color: var(--danger-hover);
    }

    .wrap[data-season="lato"] { --accent-cur: var(--accent-lato); }
    .wrap[data-season="zima"] { --accent-cur: var(--accent-zima); }
    `;
  }

  /* ==================================================================
   *  RENDER
   *  ================================================================== */
  render() {
    const t = this._t;
    const density  = this._config.density || 'normal';
    const width    = this._config.width || '640px';
    const fontSize = Number(this._config.font_size) || 14;

    const style = `
    --card-width: ${width};
    --font-base: ${fontSize};
    `;

    const missing = this._collectMissing();
    const title = this._config.title || t('default_title');
    const subtitle = this._config.subtitle || t('default_subtitle');

    return html`
    <div class="wrap"
    style=${style}
    data-season="${this._season}"
    data-theme="${this._effectiveTheme}"
    data-density="${density}">

    <div class="masthead">
    <div>
    ${title ? html`<h1>${title}</h1>` : ''}
    ${subtitle ? html`<div class="device">${subtitle}</div>` : ''}
    </div>
    <div class="season-switch">
    ${Object.entries(this._config.seasons).map(([key, season]) => html`
      <button data-season="${key}"
      class="${this._season === key ? 'active' : ''}"
      @click=${() => this._setSeason(key)}>${this._seasonLabel(season)}</button>
      `)}
      </div>
      </div>

      ${missing.length > 0 ? this._renderMissingBanner(missing) : ''}

      <div class="panel">
      <div class="days">
      ${DAYS.map(d => html`
        <button class="${this._day === d.key ? 'active' : ''}"
        @click=${() => { this._day = d.key; }}>${this._dayLabel(d)}</button>
        `)}
        </div>
        <div class="episodes">
        ${EPISODES.map(n => this._renderEpisode(n))}
        ${this._renderVentilation()}
        </div>
        </div>

        ${this._config.show_reset !== false ? html`
          <div class="actions">
          ${this._confirmReset ? html`
            <span class="confirm-text">
            ${t('reset_confirm')}
            ${this._config.reset_scope === 'season' ? t('reset_scope_season') : t('reset_scope_day')}?
            </span>
            <button class="btn btn-danger" @click=${this._resetToDefaults}>
            ${t('reset_yes')}
            </button>
            <button class="btn btn-ghost" @click=${this._cancelReset}>
            ${t('reset_cancel')}
            </button>
            ` : html`
            <button class="btn btn-ghost" @click=${this._handleResetClick}>
            ${t('reset_restore')}
            </button>
            `}
            </div>
            ` : ''}
            </div>
            `;
  }

  _renderMissingBanner(missing) {
    const t = this._t;
    const preview = missing.slice(0, 5);
    const rest = missing.length - preview.length;
    const hint = this._entityMode === 'auto' ? t('hint_auto') : t('hint_manual');

    return html`
    <div class="banner banner-warning">
    <div class="banner-title">${t('missing_banner_title')} (${missing.length})</div>
    <div class="banner-list">
    ${preview.map(id => html`<code title="${id}">${id}</code>`)}
    ${rest > 0 ? html`<code>${t('and_more', { n: rest })}</code>` : ''}
    </div>
    <div class="banner-hint">
    <span .innerHTML=${hint}></span>
    <span> ${t('hint_console')}</span>
    </div>
    </div>
    `;
  }

  _renderEpisode(n) {
    const t = this._t;
    const timeId = this._getEntity('episodeTime', this._day, n);
    const intId  = this._getEntity('intensity', this._day, n);
    const tmpId  = this._getEntity('temp', this._day, n);

    const stTime = this._entityStatus(timeId);
    const stInt  = this._entityStatus(intId);
    const stTmp  = this._entityStatus(tmpId);
    const hasProblem = [stTime, stInt, stTmp].some(s => s !== 'ok');

    const timeVal      = stTime === 'ok' ? this._formatTime(this._state(timeId)) : null;
    const intensityVal = stInt  === 'ok' ? this._num(this._state(intId), 0) : null;
    const tempVal      = stTmp  === 'ok' ? this._num(this._state(tmpId), 20) : null;

    const ph = (status) => status === 'unavailable' ? t('unavailable') : t('missing_entity');

    return html`
    <div class="episode ${hasProblem ? 'episode-broken' : ''}">
    <div class="ep-label">
    ${t('episode_short')} ${n}
    ${hasProblem ? html`<span class="ep-warning" title="⚠">⚠</span>` : ''}
    </div>
    <div class="ep-main">
    <div class="ep-row1">
    ${timeVal !== null ? html`
      <input type="time" class="time-input" .value=${timeVal}
      @change=${(e) => this._setTime(timeId, e.target.value)}>
      ` : html`
      <span class="placeholder" title="${timeId || '(brak)'}">${ph(stTime)}</span>
      `}
      ${tempVal !== null ? html`
        <span class="temp-readout">${tempVal}${t('supply_readout')}</span>
        ` : ''}
        </div>

        <div class="intensity-row">
        <span class="slider-label">${t('intensity')}</span>
        ${intensityVal !== null ? html`
          <input type="range" min="0" max="100" step="5" .value=${intensityVal}
          @input=${(e) => {
            e.target.closest('.intensity-row')
            .querySelector('.slider-val').textContent = e.target.value + '%';
          }}
          @change=${(e) => this._setNumber(intId, e.target.value)}>
          <span class="slider-val">${intensityVal}%</span>
          ` : html`
          <span class="placeholder" style="flex:1" title="${intId || '(brak)'}">${ph(stInt)}</span>
          <span class="slider-val">—</span>
          `}
          </div>

          <div class="temp-row">
          <span class="slider-label">${t('supply_temp')}</span>
          ${tempVal !== null ? html`
            <input type="range" min="14" max="28" step="0.5" .value=${tempVal}
            @input=${(e) => {
              e.target.closest('.temp-row')
              .querySelector('.slider-val').textContent = e.target.value + '°C';
              e.target.closest('.ep-main')
              .querySelector('.temp-readout').textContent = e.target.value + t('supply_readout');
            }}
            @change=${(e) => this._setNumber(tmpId, e.target.value)}>
            <span class="slider-val">${tempVal}°C</span>
            ` : html`
            <span class="placeholder" style="flex:1" title="${tmpId || '(brak)'}">${ph(stTmp)}</span>
            <span class="slider-val">—</span>
            `}
            </div>
            </div>
            </div>
            `;
  }

  _renderVentilation() {
    const t = this._t;
    const ventId = this._getEntity('ventilation', this._day);
    const status = this._entityStatus(ventId);
    const ventVal = status === 'ok' ? this._formatTime(this._state(ventId)) : null;
    const ph = status === 'unavailable' ? t('unavailable') : t('missing_entity');

    return html`
    <div class="episode ventilation ${status !== 'ok' ? 'episode-broken' : ''}">
    <div class="ep-label">
    ${t('ventilation')}
    ${status !== 'ok' ? html`<span class="ep-warning" title="⚠">⚠</span>` : ''}
    </div>
    <div class="ep-main">
    <div class="ep-row1">
    ${ventVal !== null ? html`
      <input type="time" class="time-input" .value=${ventVal}
      @change=${(e) => this._setTime(ventId, e.target.value)}>
      ` : html`
      <span class="placeholder" title="${ventId || '(brak)'}">${ph}</span>
      `}
      </div>
      </div>
      </div>
      `;
  }
}

customElements.define('airpack-schedule-card', AirpackScheduleCard);

/* ==================================================================
 * EDYTOR GRAFICZNY
 * ================================================================== */
class AirpackScheduleCardEditor extends LitElement {
  static get properties() {
    return { hass: { type: Object }, _config: { type: Object } };
  }

  setConfig(config) {
    const c = config || {};
    this._config = {
      ...DEFAULTS,
      ...c,
      entities: { ...DEFAULT_ENTITIES, ...(c.entities || {}) },
      seasons: {
        zima: { ...DEFAULT_SEASONS.zima, ...((c.seasons || {}).zima || {}) },
        lato: { ...DEFAULT_SEASONS.lato, ...((c.seasons || {}).lato || {}) },
      },
    };
  }

  get _lang() {
    return detectLanguage(this.hass, this._config?.language);
  }

  get _t() { return makeT(this._lang); }

  static get styles() {
    return css`
    .form { display: flex; flex-direction: column; gap: 12px; padding: 4px 0; }
    .row { display: flex; align-items: center; gap: 12px; }
    label {
      font-size: 14px; min-width: 150px; color: var(--primary-text-color);
    }
    select, input {
      flex: 1; padding: 8px; border-radius: 6px;
      border: 1px solid var(--divider-color, #ccc);
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #000);
      font-size: 14px; box-sizing: border-box;
      font-family: inherit;
    }
    input[type="number"] { max-width: 100px; }
    .hint {
      font-size: 11px; color: var(--secondary-text-color, #888);
      margin-top: -6px; padding-left: 162px;
    }
    .section-title {
      font-size: 13px; font-weight: 600;
      text-transform: uppercase; letter-spacing: .05em;
      color: var(--secondary-text-color, #888);
      margin-top: 8px; margin-bottom: 4px;
    }
    .preview {
      font-size: 12px;
      color: var(--primary-text-color);
      background: var(--secondary-background-color, rgba(0,0,0,.05));
      padding: 8px 12px;
      border-radius: 6px;
      font-family: var(--code-font-family, monospace);
      margin-top: 4px;
    }
    .preview.ok { border-left: 3px solid #4caf50; }
    .preview.err { border-left: 3px solid #d32f2f; }
    .preview code {
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 11px;
    }
    `;
  }

  render() {
    const c = this._config || DEFAULTS;
    const t = this._t;
    const mode = c.entity_mode || 'auto';
    return html`
    <div class="form">

    <div class="section-title">${t('ed_language')}</div>
    <div class="row">
    <label>${t('ed_language')}</label>
    <select .value=${c.language || 'auto'} @change=${(e) => this._update('language', e.target.value)}>
    <option value="auto">${t('ed_language_auto')}</option>
    <option value="pl">${t('ed_language_pl')}</option>
    <option value="en">${t('ed_language_en')}</option>
    </select>
    </div>

    <div class="section-title">${t('ed_header')}</div>
    <div class="row">
    <label>${t('ed_title')}</label>
    <input type="text" .value=${c.title || ''}
    placeholder=${t('ed_title_placeholder')}
    @change=${(e) => this._update('title', e.target.value)}>
    </div>
    <div class="row">
    <label>${t('ed_subtitle')}</label>
    <input type="text" .value=${c.subtitle || ''}
    placeholder=${t('ed_subtitle_placeholder')}
    @change=${(e) => this._update('subtitle', e.target.value)}>
    </div>
    <div class="hint">${t('ed_leave_empty')}</div>

    <div class="section-title">${t('ed_source')}</div>
    <div class="row">
    <label>${t('ed_mode')}</label>
    <select .value=${mode} @change=${(e) => this._update('entity_mode', e.target.value)}>
    <option value="auto">${t('ed_mode_auto')}</option>
    <option value="manual">${t('ed_mode_manual')}</option>
    </select>
    </div>

    ${mode === 'auto' ? this._renderAutoSection(c) : this._renderManualSection(c)}

    <div class="section-title">${t('ed_appearance')}</div>
    <div class="row">
    <label>${t('ed_theme')}</label>
    <select .value=${c.theme || 'auto'} @change=${(e) => this._update('theme', e.target.value)}>
    <option value="auto">${t('ed_theme_auto')}</option>
    <option value="dark">${t('ed_theme_dark')}</option>
    <option value="light">${t('ed_theme_light')}</option>
    </select>
    </div>

    <div class="row">
    <label>${t('ed_width')}</label>
    <input type="text" .value=${c.width || '640px'}
    @change=${(e) => this._update('width', e.target.value)}>
    </div>

    <div class="row">
    <label>${t('ed_font')}</label>
    <input type="number" min="10" max="24" step="1" .value=${c.font_size || 14}
    @change=${(e) => this._update('font_size', Number(e.target.value) || 14)}>
    </div>

    <div class="row">
    <label>${t('ed_density')}</label>
    <select .value=${c.density || 'normal'} @change=${(e) => this._update('density', e.target.value)}>
    <option value="compact">${t('ed_density_compact')}</option>
    <option value="normal">${t('ed_density_normal')}</option>
    <option value="comfy">${t('ed_density_comfy')}</option>
    </select>
    </div>

    <div class="section-title">${t('ed_reset')}</div>
    <div class="row">
    <label>${t('ed_show_reset')}</label>
    <select .value=${String(c.show_reset !== false)}
    @change=${(e) => this._update('show_reset', e.target.value === 'true')}>
    <option value="true">${t('ed_yes')}</option>
    <option value="false">${t('ed_no')}</option>
    </select>
    </div>
    <div class="row">
    <label>${t('ed_reset_scope')}</label>
    <select .value=${c.reset_scope || 'day'}
    @change=${(e) => this._update('reset_scope', e.target.value)}>
    <option value="day">${t('ed_reset_day')}</option>
    <option value="season">${t('ed_reset_season')}</option>
    </select>
    </div>
    <div class="row">
    <label>${t('ed_vent_default')}</label>
    <input type="text" .value=${c.vent_default_time || '17:45'}
    placeholder="HH:MM"
    @change=${(e) => this._update('vent_default_time', e.target.value)}>
    </div>
    </div>
    `;
  }

  _renderAutoSection(c) {
    const t = this._t;
    const prefix = c.device_prefix || 'airpack_home';
    return html`
    <div class="row">
    <label>${t('ed_device_prefix')}</label>
    <input type="text" .value=${prefix}
    placeholder="airpack_home"
    @change=${(e) => this._update('device_prefix', e.target.value)}>
    </div>
    <div class="hint">${t('ed_device_prefix_hint')}</div>
    ${this._renderScanPreview(prefix)}
    `;
  }

  _renderScanPreview(prefix) {
    const t = this._t;
    if (!this.hass) {
      return html`<div class="preview">${t('ed_scan_waiting')}</div>`;
    }
    const scan = scanEntities(this.hass, prefix, this._config.seasons);
    if (!scan) {
      return html`<div class="preview">${t('ed_scan_no_hass')}</div>`;
    }
    const { stats } = scan;
    const total = stats.time + stats.number + stats.select;
    if (total === 0) {
      return html`
      <div class="preview err">
      ${t('ed_scan_not_found')} <code>${prefix}</code>.
      ${t('ed_scan_check')}
      </div>
      `;
    }
    return html`
    <div class="preview ok">
    ${t('ed_scan_found')}
    <b>${stats.time}</b> time · <b>${stats.number}</b> number · <b>${stats.select}</b> select
    — ${t('ed_scan_days')} <b>${stats.days}</b>, ${t('ed_scan_episodes')} <b>${stats.episodes}</b><br>
    ${t('ed_scan_season')}: <code>${scan.seasonEntity || '—'}</code>
    </div>
    `;
  }

  _renderManualSection(c) {
    const t = this._t;
    return html`
    <div class="row">
    <label>${t('ed_season_select')}</label>
    <input type="text" .value=${c.entities.season}
    @change=${(e) => this._updateNested('entities', 'season', e.target.value)}>
    </div>
    <div class="row">
    <label>${t('ed_ep_time')}</label>
    <input type="text" .value=${c.entities.episodeTime}
    @change=${(e) => this._updateNested('entities', 'episodeTime', e.target.value)}>
    </div>
    <div class="hint">${t('ed_preview')} <code>${this._previewPattern(c.entities.episodeTime)}</code></div>

    <div class="row">
    <label>${t('ed_ep_intensity')}</label>
    <input type="text" .value=${c.entities.intensity}
    @change=${(e) => this._updateNested('entities', 'intensity', e.target.value)}>
    </div>
    <div class="hint">${t('ed_preview')} <code>${this._previewPattern(c.entities.intensity)}</code></div>

    <div class="row">
    <label>${t('ed_ep_temp')}</label>
    <input type="text" .value=${c.entities.temp}
    @change=${(e) => this._updateNested('entities', 'temp', e.target.value)}>
    </div>
    <div class="hint">${t('ed_preview')} <code>${this._previewPattern(c.entities.temp)}</code></div>

    <div class="row">
    <label>${t('ed_vent_time')}</label>
    <input type="text" .value=${c.entities.ventilation}
    @change=${(e) => this._updateNested('entities', 'ventilation', e.target.value)}>
    </div>
    <div class="hint">${t('ed_preview')} <code>${this._previewPattern(c.entities.ventilation)}</code></div>

    <div class="hint" style="padding-left:0; margin-top:6px">
    ${t('ed_placeholders')}
    <code>{season}</code> · <code>{seasonTime}</code> · <code>{day}</code> · <code>{n}</code>
    </div>
    `;
  }

  _previewPattern(pattern) {
    if (!pattern) return '—';
    const sample = { season: 'zima', seasonTime: 'winter', day: 'poniedzialek', n: 1 };
    return String(pattern)
    .replace(/\{seasonTime\}/g, sample.seasonTime)
    .replace(/\{season\}/g, sample.season)
    .replace(/\{day\}/g, sample.day)
    .replace(/\{n\}/g, sample.n);
  }

  _update(key, value) {
    this._config = { ...this._config, [key]: value };
    this._emit();
  }

  _updateNested(parent, key, value) {
    this._config = {
      ...this._config,
      [parent]: { ...this._config[parent], [key]: value },
    };
    this._emit();
  }

  _emit() {
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true, composed: true,
    }));
  }
}

customElements.define('airpack-schedule-card-editor', AirpackScheduleCardEditor);

/* ==================================================================
 * REJESTRACJA W PICKERZE HA
 * ================================================================== */
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'airpack-schedule-card',
  name: 'AirPack – Ventilation Schedule / Harmonogram wentylacji',
  description: 'Weekly ventilation schedule with auto entity scan (prefix-based), i18n PL/EN, and validation',
                        preview: true,
});
