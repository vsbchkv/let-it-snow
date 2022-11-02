## Demo
https://vsbchkv.github.io/let-it-snow/

## BUILD INSTRUCTIONS
You will be working on a unit called "Let It Snow", which is a 970x250 ad unit. A base DOM structure, css, and all the image assets are provided. You will be editing the HTML, CSS, and JavaScript inside the `index.html` to accomplish your tasks. You must use vanilla JavaScript. Any additional libraries are not allowed.

### Here are your tasks:
1. Add the Denver logo to the bottom left corner
    - It should be 100px wide
    - It should be 20px from bottom/left side
    - It should be white
    - It should link to https://www.denver.org/, opening a new window when clicked
2. Display the time and current temperature for Denver, CO in the lower right corner
    - Utilize the National Weather Service API (free to use, no API key needed) to obtain the temperature
    - Time should reflect the current time in Denver
    - It should be right aligned, 20px from right/bottom side
    - It should be white, 24px, medium weight, and Roboto Mono font type
3. Create an element that overlays/covers the whole background landscape (the .landscape div)
    - It should cover the entire ad
    - It should be black, at 80% opacity
4. Place the play button in the center of the overlay.
    - It should be 75px by 75px
    - it should be white
    - On hover it should fade to 50% opacity over 0.5 seconds
    - On hover the cursor should change to a pointer to indicate it can be clicked on
5. When user clicks on the play button, the following should occur:
    - The overlay and the play button fade out over 1 second
    - The landscape animation (parallax) should start, and loop seamlessly forever
    - White snowflakes continuously fall across the canvas (size, amount, speed, spin, direction is up to you but must meet minimum requirements)
        - at least 8 snowflakes randomly spread across the canvas
        - each snowflake should fall at it's own speed

### Bonus
Optimize animation for highest FPS
Improve existing CSS
Reduce DOM complexity
Reduce network requests for resources
