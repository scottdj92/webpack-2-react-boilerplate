# webpack-2-react-boilerplate
a boilerplate using react and webpack 2

## How to use
`npm install` or `yarn install` to install the packages.

`index.js` is the entry point of all your React Components. Import them there.

After this, you can make your app as modular as you'd like. The webpack config will take care of everything.

Once you have everything set up, you can run `npm start` to start the dev server. It will run in both `localhost:8080` and `localhost:8080/webpack-dev-server/`. The webpack-dev-server URL will allow you to view errors within the browser and will display your app within an `<iframe>`.


### What's supported?
* Image Optimization by way of `image-webpack-loader`
* Hot Module Replacement

### Updating With Your Code
Simply add more `.js` or `.jsx` files and import them accordingly within `index.js`.
