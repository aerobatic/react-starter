# React Starter Template

This repo provides a solid starting point for building your own React single page app on the [Aerobatic hosting platform](http://www.aerobatic.com).
It comes preconfigured with a `gulpfile.js` that handles the JSX transforms. In debug mode the in-browser JSX transformer is included and raw .jsx files are served directly to the browser, eliminating the need for a build step in debug mode.

A live demo can be seen at http://react-starter-template.aerobaticapp.com/

## Getting Started
Make sure you have the yoke-cli tool installed: `npm install -g yoke-cli`

Create and deploy your own React app on Aerobatic with the following command:

```bash
yoke create-app --github-repo 'aerobatic/react-starter'
```

To deploy your app to the Aerobatic platform, simply run the following from the root of your repo:

```
yoke deploy
```