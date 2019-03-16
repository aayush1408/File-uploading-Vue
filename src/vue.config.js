module.exports = {
  devServer: {
    proxy: {
      "/upload": {
        target: "http://localhost:5000",
      }
    }
  }
}