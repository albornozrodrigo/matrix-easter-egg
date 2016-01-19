# matrix-easter-egg

Matrix easter egg with konami code.

![The Matrix has you...](https://s-media-cache-ak0.pinimg.com/originals/79/57/1b/79571b075b2d365d94f1972edb363b2d.jpg)

## Installation

Install with bower (or download/clone).

```shell
bower install matrix-easter-egg --save
```

Import the required files to your html.

```html
<script src="/bower_components/konami-js/konami.js"></script>
<script src="/bower_components/matrix-easter-egg/dist/matrix.min.js"></script>
```

## Usage

```javascript
Matrix(); // Says: 'Wake up, Neo...'
```

Using a custom name:

```javascript
Matrix({name: 'Motherfucker Jones'}); // Says: 'Wake up, Motherfucker Jones...'
```

In the browser, just do:

```shell
↑ ↑ ↓ ↓ ← → ← → B A
```

If you are on mobile device:

```shell
↑ ↑ ↓ ↓ ← → ← → TAP TAP
```