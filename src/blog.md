---
title: 'Posts'
layout: 'layouts/feed.njk'
pagination: 
  data: collections.blog
  size: 6
permalink: '/blog/{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: posts
  title: 📓 Posts
  order: 1
---

The latest updates on games.