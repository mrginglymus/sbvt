import {mergeConfig} from "vite";

export default {
  stories: ['../stories/**/*.stories.@(js|jsx)', "../stories/**/*.mdx"],
  framework: '@storybook/react-vite',
  viteFinal: (config) => {
    return mergeConfig(config, {
      root: 'stories'
    })
  }
}