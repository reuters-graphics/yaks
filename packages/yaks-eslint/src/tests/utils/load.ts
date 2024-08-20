import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const CASES_DIR = path.join(__dirname, '../cases');

export const loadTestCase = (testCasePath: string) => {
  return readFileSync(path.join(CASES_DIR, testCasePath), 'utf-8');
};
