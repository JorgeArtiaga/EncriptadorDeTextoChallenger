# Text Encryptor

A small web app that encrypts and decrypts text right in the browser, built with HTML, CSS and vanilla JavaScript as a challenge for the Oracle Next Education (ONE) program by Alura.

**Live demo:** [GitHub Pages link]

## How it works

Encryption replaces each vowel with a key:

| Letter | Key |
| --- | --- |
| `e` | `enter` |
| `i` | `imes` |
| `a` | `ai` |
| `o` | `ober` |
| `u` | `ufat` |

Decryption reverses these replacements. Input should be lowercase letters without accents.

## Features

- Encrypt and decrypt text
- Copy the result to the clipboard with one click

## Tech stack

HTML · CSS · JavaScript

## Run locally

```bash
git clone https://github.com/JorgeArtiaga/EncriptadorDeTextoChallenger.git
cd EncriptadorDeTextoChallenger
```

Then open `index.html` in your browser. No build step is needed.

## Project structure

```
index.html    Page markup
style.css     Styles
reset.css     CSS reset
myscript.js   Encryption, decryption and copy logic
imagenes/     SVG images
```

## Author

**Jorge Artiaga**, Business Intelligence & Data Analyst
[LinkedIn](https://www.linkedin.com/in/jorge-artiaga) · Available for remote hourly work
