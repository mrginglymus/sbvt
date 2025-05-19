import {glob} from 'tinyglobby';

console.log(await glob('../stories/**/*.jsx', { cwd: './stories'}))
console.log(await glob('../stories/**/*.jsx', { cwd: './.storybook'}))