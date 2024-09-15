# Article Accessibilities

A Pen created on CodePen.io. Original URL: [https://codepen.io/jime0070/pen/gOyPrxp](https://codepen.io/jime0070/pen/gOyPrxp).
Article Accessibilies
Practice implementing accessibility techniques by refactoring the article to be more accessible.

1. Using semantic tags provides a better understanding of page structure. Use the nav, article, and header tags instead of the generic div tag.
2. Screen readers cannot read text in images. Replace the image title with an h1 tag containing the same text.
3. Noisy backgrounds can make text difficult to read. One solution is to add a transparent layer over the image. Hint: This can be accomplished using CSS and the linear-gradient, which can be added to the background-image property. Example:
background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5) 0%, rgba(0,0,0,0.5))
4. The alt attribute is used to describe the image when the user can see the image. Add an alt attribute to the images in the article.
5. Heading tags help create a hierarchical structure. Use the h1, h2, and h3 tags to create the hierarchical structure. Hint: The article has two sections The Inner Planets and The Outer Planets. The individual planets are sub-sections.
6. Make sure the contrast between the text and the background is adequate. Hint: Use the .article class to make any changes.
7. Make sure the font is of adequate size and make sure there is enough between the lines. Hint: Use the .article class to make any changes.
8. Links should be easy to spot. Use CSS to make the links stand out from the normal text. Hint: Use .article a selector to make any changes. Bonus: Add a hover state to further emphasize the link action.
9. Links should also include descriptive text and 'Click here.' is not descriptive. Update the text for the article's links to be more descriptive.

