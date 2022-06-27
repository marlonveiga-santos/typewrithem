# typewrithem

## How to download

You can can download the minified file or use JsDelivir "greeper" tag to remote delivery:

```HTML 
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/marlonveiga-santos/typewrithem/typewrithem.min.js" defer></script>
```

**Note:** The code is provided as a simple js file, not as a module.

## How to use

This solution is based on two simple Javascript functions who provides typewriter effect, normal and reverse.
You just need to add the respective class in your HTML and the function inside your js code. Like below:

```HTML
<!--HTML tags example-->
<h1 class="typewrithem">Konichiwa Namekusei !</h1>
<h1 class="typewrithem_reverse">Good night bright eyes !!!</h1>
```

```javascript
// Respective javascript functions
typewrithem();
typewrithemReverse();
```
The previous structure will provide the default parameters at the first element with the classes that matches it.
If you need change the behavior or add multiple effects on the same page, you can customize the function based on the shape below:

```js
// It's the same for typewrithemReverse() !
typewrithem({
target:'.typewrithem', // String: this target can be tags, classes or id's.
delay: 95, // Number: The time in milliseconds what the character will appear or disappear.
caret: '|' // String: The simbol who represents an active line of input. It accepts any string input so, use your imagination ;)
});
```
Soon I want to put a caretDelay option for delay blink.
It's recommended the use of ID for tags who will use typewrithem.

## Todo
- Talk about styling.
- Refactor code as possible.
- Create a CSS detached version.
- Aknowledgements.

SOON...
