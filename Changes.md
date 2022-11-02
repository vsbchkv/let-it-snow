### Structure

- There was some momemts that wasn't completle clear for me.

  The instructions says "You will be editing the HTML, CSS, and JavaScript inside the `index.html` to accomplish your tasks."

  But I've separated the styles and JS to separate files just for comfort DX. And it really hard to review the code in one single file. Anyway it not so hard to place it back to index.html, if needed.

- Project structure was rebuilded.
- Files "Ad\*" was renamed to "promo" to prevent blocking it by adblockers.

### Tasks:

1. CSS

- Exising CSS was improved
- I didn't change global styles, cause I didn't have mockups. All styles changes are about "promo-box" only.

2. Logo

- Svg was optimized and the color changed to white.
- Link opens in new tab. In real project there could be needed some clarifications, because it could be not so good for security and UX.

3. Time and weather

- Displays current time in Denver CO and the weather forecast
- In real project it a good opportunity to use JS libraries like "moment" but here it works with vanilla JS

4. Parallax

- It responsive now.
- Images works wit tag "picture" to provide avif format for browsers that support it.
- Parallax pictures was optimized
- Parallax animations works with pure css and "transform" css rule for best fps

5. Snow

- Each snowflake has their own randomly generated speed, color, size, position and "transform" propertie rules
- Animation works with css and "transform" rule for using gpu and best fps
- Snowflake removes from DOM when it leave canvas
