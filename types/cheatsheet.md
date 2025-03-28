# React Native workshop - Typescript extra

hovedgrunnen til at vi bruker typescript er for å at applikasjonen skal bli mer stabil med at vi på forhånd kan predefinere hva variabler vi setter er, eller hva data vi henter består av. Typescript gir oss også fordelen med at vi lettere kan få intellisence/suggestions/autocomplete til å fungere i ditt IDE (vscode/webstorm/etc)

Typescript er et superset av javascript og bygger på de samme funksjonene med litt ekstra funksjonalitet. I dag kommer vi til å gå igjennom noen av de grunnleggende prinsippene for å bruke typescript i vår Expo app.

# Hvordan sitte types

På det enkleste kan du forklare til javascriptet at en variabel skal være en streng, dette er veldig kjekt hvis du kommer til å bytte denne variabelen senere, men vet at den kun skal være en streng.

```ts
// Enkel let variabel
let myString: string = "hello world!";

// En variabel som kan bytte mellom streng og nummer
let myVariable: string | number = 1;

// Siden vi spesifiserte at den også kan være en string kan vi bytte den.
myVariable = "oopsie";
```

For mer avanserte types kan du bruke interface eller type til å definere variabler, arrays og objekter

```ts
// Du kan bruke interface nøkkelordet for å forklare javascript objekter
interface MyInterface {
  name: string;
  age: number;
  // du kan spesifiere arrays av strings
  hobbies: Array[string];
  // du kan også definere objekter inni objekter
  objects: {
    myKey: string;
  };
}

// Det er også mulig å bruke types hvis du trenger ekstra funksjonalitet, f.eks hvis objektet ditt har en funksjon
type MyType = {
  name: string;
  age: number;
  myFunction: () => void;
};
```

> [!WARNING]  
> Hvis du skal definere en funksjon i type så må du passe på at du bruker riktige types for denne funksjonen. Hvis den ikke returnerer noe data kan du bruke `void`

## React Native og Typescript

Når vi bruker typescript i React er det som regel for å enten definere props i et komponent, data for useRef/useState eller for å definere argumenter og returns i funksjoner.

### useRef

UseRef er en veldig praktisk funksjon som gjør at du kan refferere til et spesefikt element i ReactNative og utføre data behandlinger på dette elementet

```tsx
export function MyComponent() {
  const textRef = useRef<Text>();

  return <Text ref={textRef}>This is some random text</Text>;
}
```

### useState
Vi kan bruke useState til å skifte ut data for å gjøre appen mer dynamisk. Et eksempel kan være hvis du skal ta imot input fra en bruker og trenger å lagre dette før du behandler det videre. I eksempelet under bruker vi det som kalles destructuring for å hente ut en variabel, og en funksjon som kan endre innholdet for denne variabelen. I dette tilfellet har vi `input` som er en const med en value, mens `setInput` er en funksjon som bytter state på `input` slik at den blir oppdatert.

```ts
export function MyComponent() {
  const [input, setInput] = useState<string>("");

  return <TextInput onChangeText={onChangeText} value={text} />;
}
```

### komponenter

```ts
type MyComponentProps = {
    name: string;
    age: number;
    buttonFn: () => void
}

export function MyComponent({ name, age, buttonFn}: MyComponentProps) {
    return (
        <View>
            <Text>{ name }</Text>
            <Text>{ age }</Text>
            <Button onClick={buttonFn}>Click me!</Botton>
        </View>
    )
}
```
