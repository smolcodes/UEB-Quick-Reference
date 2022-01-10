---
title: 'Colophon'
eleventyNavigation:
  title: Colophon
  key: Colophon
  order: 3
toc: 1
layout: 'layouts/page.njk'
permalink: '/colophon/index.html'
---

## Thanks

The creator of this site is indebted to [The Ilinois Braille Series](https://www.aph.org/product/illinois-braille-series-book-one-uncontracted-braille/) and their braille instructor as well as [Andy Bell](https://hankchizljaw.com/) for his incredible [11ty course](https://piccalil.li/course/learn-eleventy-from-scratch/). Without them, this site wouldn't exist as it currently does.
_________________

## Braille Resources

### Typing and editing in Braille

* [Braille Blaster](https://www.brailleblaster.org/) : text editor to convert print to UEB, including Nemeth
* [Braille Zephyr](https://www.brailleblaster.org/braillezephyr.php): Allows one to type using six key entry. However, be warned, JAWS will read the keystroke entry and not the dot entry (ex: f is dot one which by itself is the letter a however JAWS will read f to you).
* [PerkyDuck by Duxbury](https://www.duxburysystems.com/perky.asp): Allows for six dot entry and JAWS will read the input correctly but it does not work well with JAWS 2022.

### Braille References

* [Braille Authority of North America](http://www.brailleauthority.org/)
* [Nemeth Tutorial](https://nemeth.aphtech.org/)
* [UK Association for Accessible Formats Braille Chess Code and Layout](https://www.ukaaf.org/wp-content/uploads/2020/03/Braille-chess-code-and-layout-UEB.pdf)

### Displaying Braille on your website

1. Download [Simbraille](http://www.brl.org/simbraille.html) and add it to your website assets.
2. Add this line of code to your CSS file

```css
@font-face {
  font-family: "simbraille"; // name of the font
  src: url("src/css/SIMBRL.TTF") format("ttf"); //the text before simbrl.ttf is 
  //the location of the font yours might differ
  }
.braille {
  font-family: 'simbraille'; //font
  font-size: 26px; //font size Braille consists of dots so the general rule 
  // is to have this be larger than your print font
  color: black; // this is the color of the braille dots
}
```
In your html file, wrap any text you want to show in braille in a braille class

```html
<div class="braille">
    hellow world
    </div>
```

## Resources for the Web

* [Creating a Simple Search Filter](https://www.w3schools.com/howto/howto_js_filter_lists.asp)
* [Custom Ordering of Items for 11ty](https://github.com/11ty/eleventy/issues/898)
* [Learn Eleventy From Scratch](https://piccalil.li/course/learn-eleventy-from-scratch/)
* [Tatiana Mac's Beginner's Guide to Eleventy Part 2](https://tatianamac.com/posts/beginner-eleventy-tutorial-partii/)
* [Free Code Camp](https://www.freecodecamp.org/)
* [Brad Traversy's Git and Github for Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
* [Atlassian Bitbucket Guide to Git and Version Control](https://www.atlassian.com/git/tutorials/what-is-version-control)
* [CSS Grid Guide](https://learncssgrid.com/)

## Site Creation

### Assets

* [Simbraille by Duxbery](http://www.brl.org/simbraille.html)
* [Atkinson Hyperlegible](https://fonts.google.com/specimen/Atkinson+Hyperlegible)
* [Spectral](https://fonts.google.com/specimen/Spectral)
* [Palanquin](https://fonts.google.com/specimen/Palanquin)
* [TailwindCSS](https://tailwindcss.com/)

### For testing

* Google Developer Web Tools
* Firefox Web Tools
* [Responsively](https://responsively.app/) for testing the responsivenes of a site. I also use an Ipad, ThinkPad and a Google Pixel
* [Wave](https://wave.webaim.org/) for visual accessibility. 
* [NVDA](https://www.nvaccess.org/) for accessibility for low vision and blind.
* JAWS 
* I try to make sure the site looks and works decently accross Chrome, Firefox, Edge and Safari although this site does not support IE.

### Plugins

* [Footnotes](https://github.com/KittyGiraudel/eleventy-plugin-footnotes)
* [Markdown-It](https://github.com/markdown-it/markdown-it)

### Build 

This site is styled using TailWindCSS, built with 11ty, hosted on Github and deployed with Netlify.
