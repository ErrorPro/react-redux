module.exports = {
  entry: {
    app: "./src/app.js"
  },
  output: {
    path: "./assets",
    filename: "bundle.js"
  },
  module: {
       loaders: [
           { test: /\.js$/, exclude: /node_modules/, loader: "babel?stage=0"}
       ]
   }
};
