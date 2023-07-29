import BaseClass from './base';

import type { KeyType } from './types/key';

export default class Deta {
    private key: string;

    private type: KeyType;

    private projectId: string;

    /**
     * Deta constructor
     *
     * @param {string} key
     * @param {KeyType} type
     * @param {string} projectId
     */
    constructor(key: string, type: KeyType, projectId: string) {
        this.key = key;
        this.type = type;
        this.projectId = projectId;
    }

    /**
     * Base returns instance of Base class
     *
     * @param {string} baseName
     * @param {string} [host]
     * @returns {BaseClass}
     */
    public Base(baseName: string, host?: string): BaseClass {
        const name = baseName?.trim();
        if (!name) {
            throw new Error('Base name is not defined');
        }
        return new BaseClass(this.key, this.type, this.projectId, name, host);
    }
}