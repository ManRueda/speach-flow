# speech-flow

Use the WebSpeach API with events.

Listen to a word or quote and the trigger all the callbacks.

* Support jQuery and NodeJS syntax
* Support RequireJS and Globals
* Use [https://github.com/ManRueda/phenomenonJS](https://github.com/ManRueda/phenomenonJS) to manage the events

## Documentation
Speech-flow can be used by code or bootstrapping the DOM.

#### Constructor
The constructor has this properties:
* **lang:** Language code.
* **ignoreCase:** Define if the cases have a meaning when the speech is interpreted.
* **ignoreDiacritics:** Define if the diacritics characters are replaced with their base when the speech is interpreted.

#### by code
Using code you need to create a speech-flow, attach the words or quotes with a callback and start listening.
```javascript
speak = new SpeechFlow({
  lang: "en-US",
  ignoreCase: true,
  ignoreDiacritics: true
});

speak.on('my quote', function(){

});

speak.start();
```

#### by bootstrap
Using the bootstrap function you only need to add the ```speech-flow``` attribute to an element with this structure as value ```word or quote:function to execute```.

The ```bootstrap``` method receive an object with this options.
* autoStart: Define if speech-flow starts to listen automatically.

```html
<button id="btn1" speech-flow="hello:myFunction">Button 1</button>
```

```javascript
speak = new SpeechFlow({
  lang: "en-US",
  ignoreCase: true,
  ignoreDiacritics: true
});

function myFunction(){
  console.log('this function is triggered by the voice');
  console.log(this);
}

speak.bootstrap({
  autoStart: true
});
```
