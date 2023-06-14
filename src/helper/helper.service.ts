import * as randomstring from 'randomstring'

export function createHash() {
    return randomstring.generate(9);
}