# My Portfolio

A React site that shows the projects I built in Level 2.

This portfolio also introduces who I am and the skills I am learning.

## Components

| Component | What it shows | Where its values come from | What it remembers |
| --- | --- | --- | --- |
| `Header` | my name and a line about me | typed into the JSX | - |
| `Hero` | my hero photo | `heroPhoto`, which calls `imageUrl` | whether the photo is in color |
| `About` | information about me | typed into the JSX |
| `Skills` | skills I am learning | typed into the JSX |
| `Fortune` | a random fortune | a list and `randomNumber` | which fortune is showing |
| `Footer` | © and the current year | the year the page is opened |
| `FeatherFinderPortfolioCard` | my Feather Finder project, description, and links | variables inside the component | its likes |
| `ColorMixingQuizPortfolioCard` | my Color Mixing Quiz project, description, and links | variables inside the component | its likes |
| `DataPlaylistPortfolioCard` | my Data Playlist project, description, and links | variables inside the component | its likes |
| `Gallery` | examples of my artwork and projects | image files in `public` | — |
| `Links` | my external links | variables inside the component | — |
| `NavBar` | links to different parts of my portfolio | links inside the component | — |
| `Footer` | copyright and the current year | the year the page is opened | — |

## What I'm adding next

- Color and Black and White buttons on my hero
- a New Fortune button
- a Like button on every card

## Built with

React, Vite, Bun, and Pico CSS.

<!--
README NOTES

Header
- Does not use state right now.
- It shows my name and introduction.

Hero
- Will use state to remember whether the photo is in color or black and white.
- The buttons will change that state.

About
- Does not use state right now.
- It displays information about me.

Skills
- Does not use state right now.
- It displays the skills I am learning.

Fortune
- Will use state to remember which fortune is currently showing.
- The New Fortune button will change the fortune.

FeatherFinderPortfolioCard
- Will use state to remember how many likes the card has.
- The Like button will increase the number of likes.

ColorMixingQuizPortfolioCard
- Will use state to remember how many likes the card has.
- The Like button will increase the number of likes.

DataPlaylistPortfolioCard
- Will use state to remember how many likes the card has.
- The Like button will increase the number of likes.

Gallery
- Does not use state right now.
- It displays my artwork and projects.

Links
- Does not use state right now.
- It displays my external links.

NavBar
- Does not use state right now.
- It helps move around the portfolio.

Footer
- Does not use state right now.
- It displays the copyright and current year.

This week's state features:
- Hero remembers whether the image is color or black and white.
- Fortune remembers which fortune is showing.
- Each project card remembers its own number of likes.
-->

## What I'm adding next

- More project cards
- Better styling with Pico CSS

## Built with

React, Vite, Bun, and Pico CSS.