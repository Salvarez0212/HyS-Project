const path = require("path");

module.exports = {
  /** @type {import('next').NextConfig} */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
