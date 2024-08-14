#!/usr/bin/env node

import { fileURLToPath } from 'url';
import fs from 'fs';
import merge from 'deepmerge';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PROJECT_ROOT = process.cwd();

const mergeConfig = async(configFile) => {
  const projectPath = path.join(PROJECT_ROOT, '.vscode', configFile);
  const mergeObjectPath = path.join(__dirname, '../configs/', configFile);

  const mergeObject = JSON.parse(fs.readFileSync(mergeObjectPath, 'utf-8'));

  const vscodeDir = path.dirname(projectPath);
  
  if (!fs.existsSync(vscodeDir)) fs.mkdirSync(vscodeDir, { recursive: true });
  let existingConfig = {};
  if (fs.existsSync(projectPath)) existingConfig = JSON.parse(fs.readFileSync(projectPath, 'utf-8'));

  const mergedConfig = merge(existingConfig, mergeObject);
  fs.writeFileSync(projectPath, JSON.stringify(mergedConfig, null, 2));
};


const run = async () => {
  if (!fs.existsSync(path.join(PROJECT_ROOT, 'package.json'))) {
    throw new Error('@reuters-graphics/vscode-config must be installed in the root of you project. No package.json found.')
  }
  // Don't run in dev...
  if (PROJECT_ROOT === path.join(__dirname, '..')) return;
  await mergeConfig('settings.json');
  await mergeConfig('extensions.json');
};

run();
