import { configure } from "@storybook/react";


// Automatically import all files ending in *.stories.js
const req = require.context("../testing/stories", true, /.stories.js$/);

// Load all stories into storybook
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
