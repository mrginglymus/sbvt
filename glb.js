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

const patterns = ['../stories/**/*.jsx'];


console.log('tinygloby');
console.log(await tinyglob(patterns, {cwd: './stories'}))
console.log(await tinyglob(patterns, {cwd: './.storybook'}))

console.log('globby');
console.log(await globby(patterns, {cwd: './stories'}))
console.log(await globby(patterns, {cwd: './.storybook'}))

console.log('fast-glob');
console.log(await fastglob(patterns, {cwd: './stories'}))
console.log(await fastglob(patterns, {cwd: './.storybook'}))

console.log('native');
console.log(await consume(fs.glob(patterns, {cwd: './stories'})))
console.log(await consume(fs.glob(patterns, {cwd: './.storybook'})))