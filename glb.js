import {glob} from 'tinyglobby';
import fs from 'node:fs/promises';

const consume = async (gen) => {
  const res =[];
  for await (const x of await gen) {
    res.push(x);
  }
  return res;
}

const patterns = ['../stories/**/*.jsx'];

console.log(await glob(patterns, { cwd: './stories'}))
console.log(await glob(patterns, { cwd: './.storybook'}))

console.log(await consume(fs.glob(patterns, {cwd: './stories'})))
console.log(await consume(fs.glob(patterns, {cwd: './.storybook'})))