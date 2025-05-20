import {glob as tinyglob} from 'tinyglobby';
import {glob as fixedtinyglob} from 'tinyglobby-fix'
import fs from 'node:fs/promises';
import {globby} from 'globby';
import fastglob from 'fast-glob'

const native = async (patterns, options) => {
  const res = [];
  for await (const x of await fs.glob(patterns, options)) {
    res.push(x);
  }
  return res;
}

const patterns = ['../stories/**/*.jsx', '../stories/**/*.mdx'];
const ignore = ['**/*.mdx'];

const cwds = ['./stories', './.storybook'];

const globs = {
  tinyglobby: tinyglob,
  'tinyglobby (fixed)': fixedtinyglob,
  globby,
  fastglob,
  native
}

for (const [name, globber] of Object.entries(globs)) {
  console.log(name);
  for (const cwd of cwds) {
    console.log(`${cwd}: `, await globber(patterns, {cwd, ignore}))
  }
  console.log('=========')
}
