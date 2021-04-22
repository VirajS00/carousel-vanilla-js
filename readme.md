# JavaScript Corosel

This is a small project I did, where I made a corosel in vanilla JavaScript.

## How to use

<!-- prettier-ignore -->
#### include the CSS and javaScript file in the head

```html
<head>
	<!-- rest of the code -->
	<link rel="stylesheet" href="css/style.min.css" />
	<script src="js/app.min.js" defer></script>
</head>
```

_Feel free to make changes to the code and include the non-minified files._

or you can include it at the bottom of the body without the `defer` attribute.

#### The markup

<!-- prettier-ignore -->
```html
<div class="corosel">
    <div class="images">
        <img src="images/image1.JPG" alt="add alternate text" class="img-corosel currentImg">
        <img src="images/image2.JPG" alt="add alternate text" class="img-corosel" />
        <img src="images/image3.JPG" alt="add alternate text" class="img-corosel" />
    </div>
    <div class="controls">
        <a class="corosel-arrow" id="left"><</a>
        <a class="corosel-arrow" id="right">></a>
        <div class="image-index" id="image-index"></div>
    </div>
</div>
```

**note: put the `currentImg` class on the first image**

That is it, now you can use the corosel.

If you want to make a change, feel free to make a pull request ↪️ or fork ⑂.
