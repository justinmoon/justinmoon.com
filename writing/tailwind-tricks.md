---
title: Tailwind Tricks
description: Using TailwindCSS Effectively
tags: webdev
date: 2020-01-18
---

# Resources

- Tailwind creator Adam Wathan's YouTube playlists are fantastic. He shows you how he uses tailwind to build applications and also explains by example why he designed Tailwind like he did.
    - [Desigining with Tailwind CSS](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR)
        - Start here. It's incomplete but extremely polishe.
    - TODO: add more
- [Tailwind docs](https://tailwindcss.com/) are fantastic

# Strategies

Adam Wathan's videos are immensely useful because he shows you how he takes an empty page and turns it into beautiful finished product. Here's a couple things I've observed watching him work:

- Start with HTML structure. Get all the semantically-correct content in place. For example, if some field will be clickable, use a button (completely unstyled). If that something will redirect users elsewhere, use an anchor tag.
- Start with mobile screen size. Tailwind's default utility classes (e.g. `p-2` for a little big of padding) apply to screens up to 640 pixels wide. So you want to start with this and nail it. Then expand your screen past that size and (e.g. 800 pixels wide) and see how it looks at the width. Begin writing overrides to the default utility classes to fix your interface at this size. If you want a little more padding, you can add `sm:p-4` to override the `p-2` we set earlier. Continue through the [Tailwind breakpoints](https://tailwindcss.com/docs/breakpoints/) until you screen looks great on monster retina screens. And as you go, be sure to scale back to smaller sizes to ensure no regressions are introduced.
- Use [Sizzy](https://sizzy.co/) to easily toggle between screen sizes (TODO: picture).
- Only create components or extract CSS classes if they truly remove duplication.
    - For example, if you have a list of widgets which only occur once in your codebase, there's no incentive to extract the functionality to a javascript component. You don't really gain anything from doing it. Just leave the markup in there. 
    - TODO: he had a reason why you should extract little CSS class combinations into meta combinations, e.g. `card-title` and `card-body` but I can't recall what it was.


# Tricks

Now it's time for the meat of the article:

### Filling parent element:

Let's say you have a container and a child element and you want to child element to fill the container. Add `relative` to the parent, and add `absolute aspect-0` to the child. `aspect-0` is shorthand for `top-0 right-0 bottom-0 left-0` which pins the corners of the child element to the boundaries of the parent.

### Truncating text

`truncate` will add a `...` at the end of a line of text`.


### Working with Icons

Prefer SVG icons over font icons because tailwind utilities can be more easily applied to them. [Example](https://tailwind.run/nz3UjL)

