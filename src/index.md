---
title: 'Welome'
layout: 'layouts/page.njk'
eleventyNavigation:
  key: home
  title: Home
---

This site is the offshoot sequal to the smash hit [518Games](http://518games.com/). Like its predecessor; its aim is to provide information for places to play games in the Capital Region\*. Unlike its predecessor-the site creator enjoys making websites thus instead of being one of the ugliest\* sites on the web, the creator hopes it is nice looking (but not *too* nice). 

The site happily welcomes contributions! If you have a game place you would like added and/or any kind of suggestion, you can reach the site creator in several ways:

* email: rbrittbus@gmail.com
* [Github Issues](https://github.com/CapReg/capitalregiongames/issues)

<div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-20">
  <a href="/tag/board+game/">
  <div class="bg-gradient-to-r from-green-400 to-blue-500 rounded-t rounded-b transition-shadow shadow-md hover:shadow-2xl text-center p-12"><p class="text-4xl text-white">Board Games</p></div>
  </a>

   <a href="/tag/card+game/">
  <div class="bg-gradient-to-r from-yellow-400 to-red-600 rounded-t rounded-b transition-shadow shadow-md hover:shadow-2xl text-center p-12"><p class="text-4xl text-white">Card Games</p></div>
  </a>

   <a href="/tag/rpg/">
  <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-t rounded-b transition-shadow shadow-md hover:shadow-2xl text-center p-12"><p class="text-4xl text-white">RPG</p></div>
  </a>

   <a href="/tag/table+top/">
  <div class="bg-gradient-to-r from-pink-400 via-purple-500 to-green-400 rounded-t rounded-b transition-shadow shadow-md hover:shadow-2xl text-center p-12"><p class="text-4xl text-white">Game Places</p></div>
  </a>
</div>



::: callout-blue
## Games

[Chess](/chess) [Scrabble](/scrabble) [Magic The Gathering](/magic) [Bridge](/bridge)

________

## Locations

[Albany](/tag/albany) [Latham](/tag/latham) [Troy](/tag/troy)

_________

## All Categories

{% for tag in collections.tagList %}{% set tagUrl %}/tag/{{ tag | slug }}/{% endset %} <a class="inline-block" href="{{ tagUrl | url }}">{{ tag }}</a>{% endfor %}
:::

::: callout-pink
This site is still rather new and I hope to add a public admin feature (it will use Netlify CMS and contributors need not have knowledge of code or an account) so anyone may contribute to this site. Currently if you would like to assist with this site, you will need to have a [Github account](https://github.com/) and be familiar with [11ty](https://www.11ty.dev/).
:::

[Colophon](/colophon/)
____________

Footnotes:

* Information should be social media agnostic (not hidden behind Facebook, Reddit and the like); this is partially why the creator of this site believes sites such as this are important
* The original 518Games site, while not being the most flattering certainly is no where near the ugliness that is the original [Space Jam](https://www.spacejam.com/1996/) site.