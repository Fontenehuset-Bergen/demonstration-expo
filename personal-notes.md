# Expo -  Hva er expo?
- Expo Go
  - Mobil aplikasjon som kommuniserer med datamaskinen for å vise koden din.
  - Bruker Metro for å splitte opp koden inn i chunks, optimalisere og levere koden videre til enhet.
    - Docs https://metrobundler.dev/docs/configuration/
- Expo CLI
  -
- Expo SDK er bindeleddet mellom koden vår og telefonen appen skal kjøre på.
  - Via SDK har vi tilgang på telefonen sin funksjonalitet via API calls
  - Du kan finne en fullstendig liste her:
- Expo EAS
  - Toolchain for utgivning av applikasjoner som bruker Expo
  - Faseliterer utgivning på playstore og iStore fra samme kodebase.
- Expo Orbit
  - Desktop program for bedre DX
  - https://expo.dev/orbit

## React Native
Expo benytter seg av React Native til å få tilgang til underliggende systemer og api'er på telefonen
- React Native lar oss bruke React til å lage visuelle elementer.
- Hovedforskjellen er at React Native mer direkte påvirker utseendet, istedet for React som forrandrer [DOM](https://en.wikipedia.org/wiki/Document_Object_Model) (tenk html)
- Bruker [native components](https://reactnative.dev/docs/components-and-apis) som har forskjellig syntax

## Tilgjengelige API'er vi kan bruke
- Kamera for å ta bilder inni appen, uten å måtte stenge den ned.
- Bruk bilder
- Notifikasjoner

## Expo Go vs Development builds

## Tilgjengelige ressurser og guides
- Guide
- Examples
- Troubleshooting:

## Nødvendige programmer
- Expo Go på mobiltelefoner
  - Android https://play.google.com/store/apps/details?id=host.exp.exponent
  - iPhone https://apps.apple.com/us/app/expo-go/id982107779
- Emulering av mobiltelefoner
  - Android https://developer.android.com/studio

## Extensions
- VScode https://github.com/expo/vscode-expo

## Extra ting & tang
- [App.js conf](https://appjs.co/) er en React Native og Expo orientert konferanse som holdes 28-30 Mai i Poland. Live streams er tilgjengelig underveis