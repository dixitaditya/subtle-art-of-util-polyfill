/**
 * @param {*} value
 * @return {string}
 */

function escapeString(str){
    return str.replace(/"/g,'\\"')
}
export default function jsonStringify(val, seen = new Set()) {
    if(val === null) return 'null'
    const type = typeof val

    // primitive
    if(type === 'number') return isFinite(val) ? String(val): 'null'
    if(type === 'boolean') return val ? 'true': 'false'
    if(type === 'bigint') throw new TypeError('Do not know how to serialize a BigInt')
    if(type === 'undefined' || type === 'function' || type === 'symbol') return undefined 
    if(type === 'string') return `"${escapeString(val)}"`

    if(seen.has(val)) throw new TypeError('Converting circular structure to JSON')
    seen.add(val)

    if(Array.isArray(val)){
        const res = val.map(item=>{
            let v = jsonStringify(item, seen)
            return v === undefined ? 'null' : v
        })
        seen.delete(val)
        return `[${res.join(",")}]`
    }

    if(val.toString() === '[object Object]'){
        const res = []
        for(let key in val){
            if(Object.hasOwn(val, key)){
                const v = jsonStringify(val[key],seen)
                if(v !== undefined) res.push(`"${escapeString(key)}":${v}`)
            }
        }
        seen.delete(val)
        return `{${res.join(",")}}`
    }

    seen.delete(val)
    return {}

}
