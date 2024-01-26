# Frontend Mentor - Blog preview card solution

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [SourceCode](https://glittery-moonbeam-578431.netlify.app/)
- Live Site URL: [Challenge_Blogcard](https://hashiharis.github.io/challenge_blogcard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

My key learnings were mostly

- Building the html markup solely focusing on semantic HTML markup tags
- Building the component using Flex Box
- Developing a mobile first design and realised how efficient and easy it was to use minimal media queries to achieve responsiveness for larger screens
- Used atmost responsive units for styling the component
- Learned using CSS custom properties.

The below is the secret ingredient which made the component resposnive by preventing the width to enlarge for larger screens. Setting the max-width to a fixed width keeps the blogcard container with a fixed maximum width when viewed in larger screens, thereby maintaining the responsiveness of the component.

```css
.coursecard__container {
  max-width: 350px;
}
```

### Useful resources

- [Example resource 1](https://courses.kevinpowell.co/view/courses/conquering-responsive-layouts) - This amazing course helped me learning on how to approach towards a responsive layout design.
- [Example resource 2](https://www.youtube.com/watch?v=bOUhq46fd5g) - This is youtube video I watched for understanding the semantic HTML importance and how to use them

## Author

- Frontend Mentor - [@hashiharis](https://www.frontendmentor.io/profile/hashiharis)
