---
title: 'Capital Region Games'
layout: 'layouts/page.njk'
eleventyNavigation:
  key: home
  title: Home
---

::: callout-events
<span class="bg-red-300 text-gray-800 p-2">Events 😊</span>

## [Finn Action](finnchess/)
Saturday, December 11 at 10.35am. This will be the last tournament of the year! Come and join us

6 British American Blvd, Suite 103, Latham, NY 12110
from 10:35 a.m. to 6:15 p.m.
:::
<div class="flex">
<img style="min-width: 50%; margin-right: 20px; box-shadow: none;" src="images/barrel.png" alt="this is a barrel. It is here so I can make a bad barrel pun">

Games are a barrel of fun (this is a *good* pun). This site is the offshoot sequal to the smash hit [518Games](http://518games.com/). Like its predecessor; its aim is to provide information for places to play games in the {% footnoteref "Capital Region"," Information should be social media agnostic (not hidden behind Facebook, Reddit and the like); this is partially why the creator of this site believes sites such as this are important" %}Capital Region{% endfootnoteref %}. Unlike its predecessor-the site creator enjoys making websites thus instead of being one of the {% footnoteref "ugliest","The original 518Games site, while not being the most flattering certainly is no where near the ugliness that is the original [Space Jam](https://www.spacejam.com/1996/) site." %}ugliest{% endfootnoteref %}. sites on the web, the creator hopes it is nice looking (but not *too* nice). 
</div>

## Contact Us

The site happily welcomes contributions! If you have a game place you would like added and/or any kind of suggestion, you can reach the site creator in several ways:

* [Fill Out this Google Form](https://docs.google.com/forms/d/e/1FAIpQLSfGqlq9JbQHC3z3zsmtLlGQ9myb5bTTRWYBV9-OdOJ8JoXsPQ/viewform?usp=sf_link)
* email: rbrittbus@gmail.com
* [Github Issues](https://github.com/CapReg/capitalregiongames/issues)

::: callout-blue 
## Games

[Chess](/chess) [Scrabble](/scrabble) [Bridge](/bridge)

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

{% footnotes %}

