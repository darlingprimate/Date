DARLING PRIMATE — setup notes
==============================

WHAT'S INCLUDED
- index.html, application.html, confirmation.html, certificate.html
- style.css, script.js
- assets/primate.jpg  (built from your uploaded photo)
- assets/yes/romantic-background.mp3
    Main background music. Plays on index.html, application.html
    and confirmation.html.
- assets/yes/ending-applause.mp3
    Plays only on certificate.html (applause / celebration sound).
- assets/no/  (9 sound effects)
    ack.mp3, matlab-wo-alag-hi-level-ka-banda-tha.mp3,
    emotional-damage-meme.mp3, huh.mp3, bark-fart.mp3, slap.mp3,
    mac-quack.mp3, oh-my-god-bro.mp3, chalo.mp3
    One is picked at random and played every time someone tries to
    tap/click/hover/focus the "No" button on index.html.
- assets/yes/hub-intro-sound.mp3
    Plays once, only when the "YES" button on index.html is pressed.

All audio files are included and wired up — nothing left to add.
(Filenames were simplified to lowercase-with-hyphens, no spaces, since
spaces in filenames can cause broken links on some static hosts
including GitHub Pages.)

FIXES IN THIS VERSION
- The No button now starts right next to the Yes button on load,
  instead of jumping away before anyone touches it. It only starts
  dodging around the screen the moment someone actually tries to
  press it (click, tap, hover, or keyboard focus).
- Confirmed the Yes/No buttons only ever render on index.html — they
  do not appear on application.html, confirmation.html, or
  certificate.html.
- Added assets/no/ sound effects: a random one now plays on every
  "No" button dodge attempt, alongside the existing message + move.
- Added assets/yes/hub-intro-sound.mp3: plays once when the "YES"
  button on index.html is pressed.
- All audio (music, applause, every Yes/No sound effect) is now
  preloaded into the browser's memory the moment the page loads,
  instead of being fetched the moment a button is pressed. This is
  in-browser buffering only — nothing is saved to the visitor's
  device, and pressing Yes/No plays the sound with zero delay.
- The romantic background track is now silent on index.html until
  the visitor presses Yes or No. Once that press's sound effect
  (hub-intro-sound.mp3, or one of the No sounds) finishes, the
  background track starts and keeps looping for the rest of the
  site. From then on it automatically pauses ("ducks") for the
  duration of any later Yes/No sound and resumes the instant that
  sound ends, so it's never playing under another sound.

HOW TO RUN LOCALLY
Just open index.html in a browser. Everything is plain HTML/CSS/JS —
no server, build tool, or install step required.

Note: some browsers restrict audio/localStorage access when opening
files directly via file://. If music or navigation feels off locally,
serve the folder with any static server, e.g.:
  python3 -m http.server 8080
then visit http://localhost:8080

HOW TO DEPLOY
Upload the whole darling-primate/ folder (including assets/) as-is
to any static host pointed at https://dateprimate.kestford.com —
no server-side code, database, or API is required.

LANGUAGES
English, বাংলা, हिन्दी, اردو, العربية, Türkçe — switch from the
selector in the top navigation on any page. The choice is remembered
across pages via localStorage (key: dp_language).

DATA
Everything (application answers, application number, certificate
number, language, music preference) is stored only in the visitor's
own browser via localStorage. Nothing is sent anywhere.
