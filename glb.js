import {glob as tinyglob} from 'tinyglobby';
import fs from 'node:fs/promises';
import {globby} from 'globby';
import fastglob from 'fast-glob'

const consume = async (gen) => {
  const res = [];
  for await (const x of await gen) {
    res.push(x);
  }
  return res;
}

const patterns = ['../stories/**/*.jsx', '../stories/**/*.mdx'];
const ignore = ['**/*.mdx'];


console.log('tinygloby');
console.log(await tinyglob(patterns, {cwd: './stories', ignore}))
console.log(await tinyglob(patterns, {cwd: './.storybook', ignore}))

console.log('globby');
console.log(await globby(patterns, {cwd: './stories', ignore}))
console.log(await globby(patterns, {cwd: './.storybook', ignore}))

console.log('fast-glob');
console.log(await fastglob(patterns, {cwd: './stories', ignore}))
console.log(await fastglob(patterns, {cwd: './.storybook', ignore}))

console.log('native');
console.log(await consume(fs.glob(patterns, {cwd: './stories', ignore})))
console.log(await consume(fs.glob(patterns, {cwd: './.storybook', ignore})))