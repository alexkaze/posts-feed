# Posts Feed

## About

**Posts Feed** is a simple web app for viewing posts with virtual scrolling, based on public [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Website link

https://p-feed.netlify.app/  
The app is adapted for mobile devices.

## Tech stack:

- HTML, CSS, SASS/SCSS (`[name].module.scss`)
- TypeScript, JavaScript
- React, React Router 6.4, Redux Toolkit + RTK Query
- Vite
- ESlint, Prettier

The app architecture is based on [Feature-Sliced Design (FSD)](https://feature-sliced.design/).  
The key feature is **virtual scrolling** realized with [React Virtuoso](https://virtuoso.dev/).

## Installation and launch

Clone the repository:

```
git clone https://github.com/alexkaze/posts-feed.git
```

Install the project:

```
yarn install
```

Run on local server:

```
yarn dev
```

## App screenshots
<details><summary><b>Развернуть</b></summary>

[![main-page](https://github.com/alexkaze/posts-feed/assets/85958340/e3e865a3-e368-4a4a-82bf-bbd538be045d)](https://p-feed.netlify.app/)
[![post-page](https://github.com/alexkaze/posts-feed/assets/85958340/6880f0a9-c396-47fe-9baf-aabe419958a8)](https://p-feed.netlify.app/posts/1)
[![not-found-page](https://github.com/alexkaze/posts-feed/assets/85958340/5bb89dda-6757-44de-ab5c-58a5c0f5aedc)](https://p-feed.netlify.app/pos)

</details>
