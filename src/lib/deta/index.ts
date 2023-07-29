import DetaClass from './deta';
import { KeyType } from './types/key';

import type BaseClass from './base';

/**
 * Deta returns instance of Deta class
 *
 * @param {string} [projectKey]
 * @param {string} [authToken]
 * @returns {DetaClass}
 */
export function Deta(projectKey?: string, authToken?: string): DetaClass {
  const token = authToken?.trim();
  const key = projectKey?.trim();
  if (token && key) {
    return new DetaClass(token, KeyType.AuthToken, key);
  }

  const apiKey = key || process.env.DETA_PROJECT_KEY?.trim();
  if (!apiKey) {
    throw new Error('Project key is not defined');
  }

  return new DetaClass(apiKey, KeyType.ProjectKey, apiKey.split('_')[0]);
}

/**
 * Base returns instance of Base class
 *
 * @param {string} baseName
 * @param {string} [host]
 * @returns {BaseClass}
 */
export function Base(baseName: string, host?: string): BaseClass {
  return Deta().Base(baseName, host);
}
