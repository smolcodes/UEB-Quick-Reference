---
title: 'Tag Archive'
layout: 'layouts/feed.njk'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['all', 'alphabeticwordsigns','strongwordsigns','grammar']
permalink: '/tag/{{ tag | slug }}/'
---
