# Wizytówka osobista Dawida Bubernaka — dawidbubernak.pl

## Cel
Profesjonalna, nowoczesna, jednostronicowa strona-wizytówka po polsku, prezentująca Dawida jako fullstack developera specjalizującego się w AI i Blockchainie (buduje też strony internetowe). Cel: personal branding + pozyskiwanie klientów/zleceń. Domena docelowa: `dawidbubernak.pl`.

## Kierunek wizualny
- Ciemny, futurystyczny motyw tech (głęboka czerń/granat) z gradientowymi akcentami (fiolet/cyjan/elektryczny niebieski) i elementami 3D w hero oraz kluczowych sekcjach — inspiracja: 21st.dev (glassmorphism, precyzyjne komponenty) i motionsites.ai (duże animowane obiekty 3D, dynamiczny hero).
- Animacje przy scrollu (fade/slide-in), subtelny parallax, animowane liczniki statystyk, hover na kartach projektów.
- Typografia: nowoczesny sans (Geist już w projekcie), duża skala w hero.
- Brak amatorskich emoji — ikony z biblioteki (lucide) zamiast emoji.
- W pełni responsywna (mobile-first breakpoints).

## Źródła treści
- Dane bio, stack, usługi, doświadczenie: podane bezpośrednio przez Dawida w rozmowie (LinkedIn zablokował automatyczne pobieranie danych, publiczny profil nie został zweryfikowany — nie wykorzystujemy zgadywanych faktów).
- Nie zgadujemy URL-i social media (GitHub/LinkedIn/X) ani numeru telefonu — brak zweryfikowanych danych. Struktura kontaktu jest przygotowana tak, by łatwo dodać te dane później (pojedyncze miejsce w konfiguracji treści).
- Portfolio: realne zrzuty ekranu (headless Chrome) stron startowych 5 projektów wdrożonych na Vercelu, wybranych dla różnorodności: `tensordeep.pl` (AI), `mintwrite.com` (Web3/blockchain), `securitymood.pl` (security e-commerce, 3D globe), `adamomedia.pl` (agencja marketingowa), `luxauracare.pl` (beauty, animacja 3D). Pominięte: `mintomics.com` (błąd aplikacji), `faktura-express` (ekran logowania Vercel).

## Struktura strony (single page, sekcje z ID do nawigacji)
1. **Header** — sticky, logo tekstowe, nawigacja do sekcji, CTA "Kontakt", menu mobilne (hamburger + drawer).
2. **Hero** — nagłówek, podtytuł, dwa CTA (np. "Skontaktuj się" / "Zobacz portfolio"), animowane tło 3D/gradient (CSS/WebGL-light, bez ciężkich zależności), pasek statystyk (7 lat doświadczenia, 25+ zrealizowanych projektów, 2 domeny specjalizacji: AI + Blockchain).
3. **O mnie** — bio (3-5 zdań), lokalizacja Katowice, kluczowe fakty.
4. **Umiejętności / Stack** — pogrupowane kategorie: Frontend, Backend, AI/ML, Blockchain, DevOps/Cloud — siatka animowanych badge'y.
5. **Usługi** — karty: Tworzenie stron i aplikacji webowych, Wdrożenia AI i automatyzacje, Blockchain i smart kontrakty, Konsulting techniczny.
6. **Proces współpracy** — krótki stepper/timeline (Konsultacja → Wycena → Realizacja → Wdrożenie → Wsparcie).
7. **Portfolio** — siatka kart z realnymi zrzutami ekranu, tagi technologiczne, link "zobacz stronę" (target=_blank) do produkcyjnej domeny każdego projektu.
8. **FAQ** — generyczne, bezpieczne pytania o proces współpracy, technologie, czas realizacji, pracę zdalną.
9. **Kontakt** — dane kontaktowe (e-mail: dawid.bubernak@gmail.com, lokalizacja: Katowice) + prosty formularz kontaktowy (buduje `mailto:` z treścią — bez zależności od zewnętrznego serwisu e-mail, którego obecnie nie mamy skonfigurowanego).
10. **Footer** — nawigacja, copyright, miejsce na social media (obecnie puste/do uzupełnienia).

## Techniczne
- Next.js 16 (App Router, już w repo), TypeScript, Tailwind CSS v4 (już skonfigurowany).
- Treści (bio, stack, usługi, projekty portfolio, FAQ) w jednym pliku `content` do łatwej edycji.
- Zrzuty ekranu zapisane w `public/portfolio/`.
- Metadata: tytuł, opis, OG image, favicon, `robots.txt`, `sitemap.ts` — pod domenę `dawidbubernak.pl`.
- Animacje: natywne CSS (`@keyframes`, `scroll-timeline`/Intersection Observer) — bez ciężkich bibliotek 3D, żeby zachować wydajność i prostotę zależności.
- Brak numeru telefonu i linków social media w pierwszej wersji (dane niezweryfikowane) — łatwe do dodania później.

## Poza zakresem
- Backend do realnego wysyłania e-maili (Resend/inny provider) — formularz na start korzysta z `mailto:`.
- Blog / CMS.
- Wielojęzyczność (tylko polski).
- Fałszywe/wymyślone referencje klientów — pomijamy sekcję testimoniali, bo nie mamy prawdziwych opinii.
