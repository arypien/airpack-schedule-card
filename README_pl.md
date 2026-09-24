# AirPack — Ventilation Schedule Card

[🇬🇧 English](README.md) · **🇵🇱 Polski**

Karta **Lovelace** do tygodniowego harmonogramu wentylacji rekuperatora
**Thesslagreen AirPack**. Pozwala edytować, dla każdego dnia, do 4 "odcinków"
wentylacji (godzina startu / intensywność / temperatura nawiewu), codzienną
godzinę **początku wietrzenia** oraz globalny przełącznik pory roku
**Zima / Lato** — zapisując zmiany bezpośrednio do encji Home Assistant.

> Wymaga encji wystawionych przez Twoją integrację AirPack (np.
> [`ha_thesslagreen_airpack_usb`](https://github.com/arypien/ha_thesslagreen_airpack_usb)).

---

## Funkcje

- 🗓️ Tygodniowy harmonogram — 7 zakładek dni × 4 odcinki
- ☀️/❄️ Przełącznik **Zima / Lato**, auto-wykrywany z encji `select`
- 🎛️ Sterowanie odcinkiem: godzina **startu**, suwak **intensywności**, suwak **temp. nawiewu**
- 💨 Osobny wiersz **początku wietrzenia**
- ↺ **Reset do domyślnych** (bieżący dzień lub cały sezon, z potwierdzeniem)
- 🔎 **Auto-skan encji** — wskaż prefiks urządzenia, a karta sama pomapuje wszystkie encje
  (nie ma potrzeby wpisywania dziesiątek ID ręcznie)
- ✅ **Walidacja** — brakujące/niedostępne encje są bezpiecznie pomijane,
  sygnalizowane banerem ostrzegawczym (⚠) i pokazywane jako placeholdery zamiast
  wywalać kartę
- 🌐 i18n PL/EN (auto-wykrywanie języka z Home Assistant)
- 🎨 Konfigurowalny motyw (auto/ciemny/jasny), szerokość, bazowy font i gęstość

---

## Instalacja

### HACS (zalecane)

1. W HACS → **Frontend** → ⋮ → *Repozytoria niestandardowe* → dodaj
   `https://github.com/arypien/airpack-schedule-card` z kategorią
   **Lovelace** → **Dodaj**.
2. **Pobierz** repozytorium `airpack-schedule-card`.
3. Dodaj resource (HACS zrobi to za Ciebie):
   `/hacsfiles/airpack-schedule-card/airpack-schedule-card.js` jako
   **Dashboard**.
4. Zrestartuj/odśwież, następnie dodaj kartę z wybieraka kart Lovelace.

### Ręcznie

1. Skopiuj `dist/airpack-schedule-card.js` do `<config>/www/airpack-schedule-card.js`.
2. W panelu **Edytuj → ⋮ → Zasoby** dodaj:
   - URL: `/local/airpack-schedule-card.js`
   - Typ: **JavaScript Module**
3. Odśwież, potem dodaj kartę z wybieraka kart.

---

## Konfiguracja

Karta działa **bez żadnej konfiguracji** — auto-skanuje po prefiksie urządzenia
(domyślnie `airpack_home`).

### Minimalna (tryb auto)

```yaml
type: custom:airpack-schedule-card
```

### Tryb auto — własny prefiks urządzenia

```yaml
type: custom:airpack-schedule-card
entity_mode: auto
device_prefix: airpack_home   # wspólny fragment wszystkich entity_id
```

### Tryb manualny — jawne wzorce encji

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

**Placeholdery** używane we wzorcach encji:

| Placeholder | Znaczenie |
|-------------|-----------|
| `{season}`     | klucz pory roku: `zima` / `lato` |
| `{seasonTime}` | klucz dla encji `time`: `winter` / `summer` |
| `{day}`        | klucz dnia: `poniedzialek` … `niedziela` |
| `{n}`          | numer odcinka: `1` … `4` |

---

## Opcje

| Opcja | Typ | Domyślna | Opis |
|--------|------|---------|------|
| `entity_mode` | `auto`/`manual` | `auto` | Auto-skan encji po prefiksie albo jawne wzorce |
| `device_prefix` | string | `airpack_home` | Wspólny fragment entity_id dla auto-skanu |
| `language` | `auto`/`pl`/`en` | `auto` | Język UI |
| `title` | string | — | Tytuł nagłówka (domyślnie przetłumaczony) |
| `subtitle` | string | — | Podtytuł nagłówka (domyślnie `airpack_home`) |
| `theme` | `auto`/`dark`/`light` | `auto` | Schemat kolorów |
| `width` | string | `640px` | Max. szerokość karty (jednostka CSS) |
| `font_size` | number | `14` | Bazowy font w px (wszystko skaluje się) |
| `density` | `compact`/`normal`/`comfy` | `normal` | Odstępy wierszy |
| `show_reset` | boolean | `true` | Pokaż przycisk resetu do domyślnych |
| `reset_scope` | `day`/`season` | `day` | Reset bieżącego dnia lub całego sezonu |
| `vent_default_time` | string | `17:45` | Domyślna godz. początku wietrzenia (`HH:MM`) w resecie |

---


<img width="535" height="856" alt="harmo_pl" src="https://github.com/user-attachments/assets/97a226a2-a59f-46ac-8de2-36e758458294" />


## Rozwój / testy

```bash
git clone https://github.com/arypien/airpack-schedule-card.git
cd airpack-schedule-card
# edytuj dist/airpack-schedule-card.js, potem sprawdź składnię:
node --check dist/airpack-schedule-card.js
```

Testy lokalnie na Home Assistant:

```bash
# z katalogu głównego repo
cp dist/airpack-schedule-card.js /path/to/homeassistant/config/www/airpack-schedule-card.js
```

---

## Licencja

[MIT](./LICENSE)
