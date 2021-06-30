# Projekt zaliczeniowy Javascript - warsztaty
## Dokumentacja projektu

### Temat aplikacji/strony
Projekt jest podręczną aplikacją do zapamiętywania listy filmów i seriali do obejrzenia.

### Opis oraz funkcjonalność aplikacji/strony (3-4 zdania).
Głównym celem aplikacji jest przechowywanie filmów i seriali, które chcemy obejrzeć w przyszłości. Użytkownik po wejściu do aplikacji musi podać poprawne dane logowania, aby móc korzystać z funkcjonalności aplikacji.
Po zalogowaniu użytkownik może korzystać z głównych modułów - Filmu i Seriale. Po wejściu w któryś z modułów, użytkownik ma możliwość podejrzeć zapamiętane rekordy oraz dodać nowe.
Cała funkcjonalność działa na zasadzie przechowywania danych w localStorage.

### Użyte technologie oraz ich zastosowanie (1-2 zdania do każdej technologii).
Javascript - główny język aplikacji
Github Pages - hosting aplikacji
Bulma - framework css do stylizowania witryny

### Opis podstron WWW (1-2 zdania do każdej strony/podstrony)
Strona główna - strona, do której przenosi się użytkownik po zalogowaniu
Logowanie - formularz logowania
Filmy - lista filmów do obejrzenia wraz z formularzem dodania nowego filmu
Seriale - lista seriali do obejrzenia wraz z formularzem dodania nowego serialu
Konto - możliwość usunięcia pamięci podręcznej dla konta

### Opis nawigacji pomiędzy stronami/podstronami (Skąd i gdzie można się dostać? Opcje w menu?)
Użytkownik przemieszcza się między podstronami dzięki menu po prawej stronie aplikacji. Za routing odpowiedzialny jest plik ***Router.js*** opisany niżej.

### Opis komponentów JS (1-2 zdania do każdego komponentu)
**Core:**
- Auth - Serwis odpowiedzialny za uwierzytelnienie użytkownika
- Module - Klasa bazowa do modułów aplikacji zawierająca logikę działania oraz zestaw zachowań
- Router - Klasa odpowiedzialna za routing aplikacji - przechowuje wszystkie ścieżki modułów oraz kontroluje rendering poszczególnych komponentów
- Store - Serwis zarządzający pamięcią lokalną

**Moduły:**
- Account - Zarządzanie kontem
- Home - Strona główna
- Login - Logowanie
- Movies - Lista filmów oraz formularz dodawania nowych
- Shows - Lista seriali oraz formularz dodawania nowych

**Komponenty:**
- Button - Guzik generyczny
- Card - Blok w liście filmów/seriali
- InfoModal - Modal z powiadomieniem
- InputField - Pole tekstowe
- AddMovieForm - Formularz dodania nowego filmu
- AddShowForm - Formularz dodania nowego serialu
- LoginForm - Formularz logowania

## Wymagania funkcjonalne
- Temat aplikacji/strony ✔
- Opis oraz funkcjonalność aplikacji/strony (3-4 zdania). ✔
- Użyte technologie oraz ich zastosowanie (1-2 zdania do każdej technologii). ✔
- Opis podstron WWW (1-2 zdania do każdej strony/podstrony) ✔
- Opis nawigacji pomiędzy stronami/podstronami (Skąd i gdzie można się dostać? Opcje w menu?) ✔
- Opis komponentów JS (1-2 zdania do każdego komponentu) ✔
