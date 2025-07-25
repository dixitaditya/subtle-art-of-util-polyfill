import {describe, expect, it} from "vitest"

import {add} from "./"

describe('add', () => { 
    it('add 1 + 2 expects 3', ()=>{
        expect(add(1,2)).toBe(3)
    })
 })