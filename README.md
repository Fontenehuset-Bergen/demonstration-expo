# Velkommen til Expo og React Native 👋

### Oppstart - for å ta i bruk prosjektet

1. Installere Node.js på PC'en https://nodejs.org/en/download
2. Installere Npm - skriv npm install (eller npm i) i terminalen i dette prosjektet.
3. Laste ned Expo Go til mobiltelefonen din.
4. Starte Expo Go i dette prosjektet - skriv npm run start (eller npx expo start) i terminalen i dette prosjektet.
5. Åpne Expo Go på mobilen din og skanne QR-koden du fikk i terminalen.

# React Native Workshop 26.03.26:
React Native er et rammeverk (framework). Et rammeverk vil si en rekke verktøy og strukturer som er ferdig laget, så man ikke trenger kode alt fra bunnen av. I React Native finnes det et komponentbibliotek som vi henter fra, heller enn å måtte lage alle komponenter helt selv. Man kan lage egne komponenter i tillegg. Se nederst for en liste over alle React Native komponenter. 

React Native kodes i JavaScript/TypeScript. Dette påvirker både hvordan selve koden og CSS-styling skrives.

## Starte et dokument i React Native:
### Importering
For å ta i bruk komponenter både fra React og egne filer må man importere dem øverst i filen (dersom du prøver å ta i bruk en komponent uten å importere først vil du få en feilmelding).

#### Import av komponenter fra React:
- import { Text, View, StyleSheet, Image, ScrollView, } from 'react-native'

#### Importering av egne *sider* i prosjektet:
- import MinSide from '@/app/(tabs)/minSide'

#### Importering av egne *komponenter* i prosjektet:
- import { MinKomponent } from '@/components/ui/minKomponent'

#### Hvorfor bruker vi @ i imports?
Vi kan importere filer på to forskjellige måter, absolute eller relative: 
- En relativ import forholder seg til hvilken fil du skal importere inn i. Import-linken vil se annerledes ut om du for eksempel skal importere Global Styling inn i app/(tabs)/index enn inn i app/components/ui/card. Importen er dermed relativ og basert på hvilken fil du skal importere *inn i*. Relativ import kan se ut som dette: '../../../myComponent'
- En absolutt import forholder seg til hvor filen du skal importere ligger i prosjektet ditt. Så om du skal hente filen fra et spesifikt sted, f.eks: import file from "components/myComponent", så vil importen være lik uansett hvilken fil du skal importere den inn i. Alias @ imports brukes for å kunne velge hvilke mappe vi skal begynne i, dette er spesielt kjekt hvis vi har et prosjekt der alle filer ligger inni src. Fordelen med absolute paths er at vi kan flytte på filer uten å være redd for at imports ikke skal fungere lengre. Absolutt import kan se ut som dette: '@/components/myComponent'

### Eksportering
Etter imports øverst på siden begynner man å skrive selve sidens innhold. Når man starter en ny fil for enten en ny side eller en komponent, må man starte med å definere en funksjon. Man kan definere den på to måter.

#### Eksportere *sider*:
1. export default function FunksjonensNavn() {

   return ( )

   }

#### Eksportere *komponenter*:
2. export function FunksjonensNavn() {

   return ( )

   }

Vi trenger et return()-felt i funksjonen for å fortelle appen hva den skal vise. Return betyr hva som returneres til skjermen din - altså hva som vises i appen din når du åpner telefonen. Alle komponenter skrives her. Styling for filen du er inne i skrives nederst under funksjonen. Styling kan også skrives i en egen fil og importeres inn, som brukes særlig for global styling som skal gjelde alle sidene i appen. 

export default function Index() {

   return (

      <View>
         <Text> Hallo! <Text/>
      <View/>
   )  
}
const styles = Stylesheet.create({

})


## Liste over alle React Native Komponenter: 

###### Åpne ny fane: ctrl + click
- [ActivityIndicator](https://reactnative.dev/docs/activityindicator)
- [Button](https://reactnative.dev/docs/button)
- [FlatList](https://reactnative.dev/docs/flatlist)
- [Image](https://reactnative.dev/docs/image)
- [ImageBackground](https://reactnative.dev/docs/imagebackground)
- [KeyboardAvoidingView](https://reactnative.dev/docs/keyboardavoidingview)
- [Modal](https://reactnative.dev/docs/modal)
- [Pressable](https://reactnative.dev/docs/pressable)
- [RefreshControl](https://reactnative.dev/docs/refreshcontrol)
- [ScrollView](https://reactnative.dev/docs/scrollview)
- [SectionList](https://reactnative.dev/docs/sectionlist)
- [StatusBar](https://reactnative.dev/docs/statusbar)
- [Switch](https://reactnative.dev/docs/switch)
- [Text](https://reactnative.dev/docs/text)
- [TextInput](https://reactnative.dev/docs/textinput)
- [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)
- [View](https://reactnative.dev/docs/view)
- [VirtualizedList](https://reactnative.dev/docs/virtualizedlist)

Kun for Android: 
- [DrawerLayoutAndroid](https://reactnative.dev/docs/drawerlayoutandroid)
- [TouchableNativeFeedback](https://reactnative.dev/docs/touchablenativefeedback)

Kun for iOS: 
- [InputAccessoryView](https://reactnative.dev/docs/inputaccessoryview)
- [SafeAreaView](https://reactnative.dev/docs/safeareaview)


<!--
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions. -->
