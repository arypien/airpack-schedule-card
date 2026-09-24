# AirPack — Ventilation Schedule Card

**🇬🇧 English** · [🇵🇱 Polski](README_pl.md)

A Home Assistant **Lovelace card** for the weekly ventilation schedule of the
**Thesslagreen AirPack** heat-recovery recuperator. It lets you edit, per day,
up to 4 ventilation "episodes" (start time / intensity / supply temperature),
the daily **ventilation start time**, and a global **Winter / Summer** season
switch — all written straight back to Home Assistant entities.

> Requires the entities exposed by your AirPack integration (e.g.
> [`ha_thesslagreen_airpack_usb`](https://github.com/arypien/ha_thesslagreen_airpack_usb)).

---

## Features

- 🗓️ Weekly schedule — 7 day tabs × 4 episodes
- ☀️/❄️ **Winter / Summer** season switch, auto-detected from the `select` entity
- 🎛️ Per-episode controls: start **time**, **intensity** slider, **supply temp** slider
- 💨 Dedicated **ventilation** start-time row
- ↺ **Reset to defaults** button (current day or whole season, with confirm)
- 🔎 **Auto entity scan** — point it at your device prefix, it maps all entities itself
  (no need to type dozens of entity IDs by hand)
- ✅ **Validation** — missing/unavailable entities are skipped safely, reported in a
  warning banner (⚠) and shown as placeholders instead of breaking the card
- 🌐 i18n PL/EN (auto-detects from Home Assistant language)
- 🎨 Configurable theme (auto/dark/light), width, base font size and density

---

## Installation

### HACS (recommended)

1. In HACS → **Frontend** → ⋮ → *Custom repositories* → add
   `https://github.com/arypien/airpack-schedule-card` with category
   **Lovelace** → **Add**.
2. **Download** the `airpack-schedule-card` repository.
3. Add a resource (HACS does it for you):
   `/hacsfiles/airpack-schedule-card/airpack-schedule-card.js` as
   **JavaScript Module**.
4. Restart/refresh, then add the card from the Lovelace card picker.

### Manual

1. Copy `dist/airpack-schedule-card.js` to `<config>/www/airpack-schedule-card.js`.
2. Add to your dashboard **Edit → ⋮ → Resources**:
   - URL: `/local/airpack-schedule-card.js`
   - Type: **JavaScript Module**
3. Refresh, then add the card from the card picker.

---

## Configuration

The card works with **no config at all** — it auto-scans for a device prefix
(default `airpack_home`).

### Minimal (auto mode)

```yaml
type: custom:airpack-schedule-card
```

### Auto mode — custom device prefix

```yaml
type: custom:airpack-schedule-card
entity_mode: auto
device_prefix: airpack_home   # shared fragment of all your entity_ids
```

### Manual mode — explicit entity patterns

```yaml
type: custom:airpack-schedule-card
entity_mode: manual
entities:
  season:      select.airpack_home_harmonogram_lato_zima
  episodeTime: time.airpack_home_{seasonTime}_{day}_odcinek_{n}
  intensity:   number.airpack_home_{season}_{day}_odc_{n}_intensywnosc
  temp:        number.airpack_home_{season}_{day}_odc_{n}_temp_nawiewu
  ventilation: time.airpack_home_{season}_{day}_poczatek_wietrzenia
seasons:
  zima:
    timeKey: winter
    label: Zima
    option: Zima
    match: [zima, winter]
  lato:
    timeKey: summer
    label: Lato
    option: Lato
    match: [lato, summer]
```

**Placeholders** used in entity patterns:

| Placeholder | Meaning |
|-------------|---------|
| `{season}`     | season key: `zima` / `lato` |
| `{seasonTime}` | time-domain key: `winter` / `summer` |
| `{day}`        | day key: `poniedzialek` … `niedziela` |
| `{n}`          | episode number: `1` … `4` |

---

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity_mode` | `auto`/`manual` | `auto` | Auto-scan entities by prefix, or use explicit patterns |
| `device_prefix` | string | `airpack_home` | Shared entity_id fragment for auto-scan |
| `language` | `auto`/`pl`/`en` | `auto` | UI language |
| `title` | string | — | Masthead title (default: localized) |
| `subtitle` | string | — | Masthead subtitle (default: `airpack_home`) |
| `theme` | `auto`/`dark`/`light` | `auto` | Color scheme |
| `width` | string | `640px` | Card max-width (any CSS unit) |
| `font_size` | number | `14` | Base font size in px (everything scales) |
| `density` | `compact`/`normal`/`comfy` | `normal` | Row spacing |
| `show_reset` | boolean | `true` | Show the reset-to-defaults button |
| `reset_scope` | `day`/`season` | `day` | Reset current day or whole season |
| `vent_default_time` | string | `17:45` | Default ventilation start time (`HH:MM`) used by reset |

---

## Development

```bash
git clone https://github.com/arypien/airpack-schedule-card.git
cd airpack-schedule-card
# edit dist/airpack-schedule-card.js, then syntax-check:
node --check dist/airpack-schedule-card.js
```

For local testing on Home Assistant:

```bash
# from the repo root
cp dist/airpack-schedule-card.js /path/to/homeassistant/config/www/airpack-schedule-card.js
```

---

## License

[MIT](./LICENSE)