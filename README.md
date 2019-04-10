# NintendDB: An IGDB Front End Project

## ABOUT

This is my submission to the good folks at IGDB. This is a small app that uses the IGDB.com API to get get Nintendo themed data and bit of nostalgia from my childhood. It uses an express server with Apicalypse on the back end and uses React on the front end. The database layer is Google Firebase and also serves up user authentication.

Below is the deployed version _(It is on a free dyno so it may be slow to load at first)_, and as always you can comb through the code.

### DEPLOYED APP

[Deployed Version](https://nintendb.herokuapp.com/)

**Test user information**

- **Email** - user@email.com
- **Password** - password

Feel free to add or subtract games to play around with it a bit.

## SUMMARY AND BUILD PROCESS

The front end is built in React, but it utilizes all React Hooks and the Context API. There is not one class component as I wanted to utilize the minimalism of hooks and keep a simple data center with the context API. All of these context functions and data can be found in the `src/App/utilities/FirebaseContext.js` file. This is where all of the main functionality lives and then it can be consumed by an component that is wrapped by the Context Provider. Although I am comfortable writing class components, I do love the cleaner code behind React Hooks, and I have tried to implement it as much as possible since it has become a stable release.

I started by playing around with the IGDB API and Apicalypse. This was new tech to me so it took me a bit to get accustomed to it. However, after using for a bit I have to say I really like it. I love how it works almost like GraphQL for the data fetching. I love getting back only the data requested, rather than bloated queries. It is a really great tech that I would like to implement in other projects.

Once I had Apicalypse down I worked on creating the Express routes. There is one for random games and one for games that you have saved. They both have the same basic structure and page layout. They display basic game info and images from the IGDB API.

The database layer in this case is Firebase. This was primarily a choice made base upon build time. I would normally prefer to use an SQL database for a project that can grow like this, but I wanted something I could put together in just a few days and Google Firebase allows you to prototype something like this quickly. It helps quickly build all of the user sign in and log in functions. This is also how I created the saved game functions for each user. When you are logged in you can click the heart to save games for later viewing, rather than just random mode.

Finally the styling was done using the help of NES.CSS. It is a library perfect for something like this and was one that I had wanted to use for a project that was video game themed. I used styled components to separate out the CSS.

## IMPROVEMENTS FOR V2

If I had more time for a project like this, I would probably make a few alterations:

- Swap out Firebase for an SQL database and user authentication that uses JWTs.
- Optimize mobile styling. It is servicable on mobile but not great. It is mainly meant as a desktop site.
- Improve my random game algorithm to be more random. It works and gets a good variety of games, but I would like to get more low rated games in a revision.
- More customization to styling. Most of it is out of the box. I would like to add more animations and fun styling
- Add a search function. I did play around with the search functionality of Apicalypse but did not have time to implement it.

## KNOWN ISSUES

- The loading of a random page with sometimes get hung up. This is an issue where no game data is returned with my algorithm occasionally. It seems to happen more on the N64 and Game Cube searches, which might not return as much data for very high rated games.  A simple click of the random games button or refresh will bring new data.
- The initial loading of elements waiting for saved games or authenticated users takes a bit while they wait for a Firebase response.

