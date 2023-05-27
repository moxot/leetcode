/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let left = 0;
    const map = {};
    const splitString = s.split("");
    let result = 0;
    for (let right = 0, l = splitString.length; right < l; right++) {
        const r = splitString[right];
        if (!map[r]) {
            map[r] = 0;
        }
        map[r] += 1;
        while (map[r] > 1) {
            const l = splitString[left];
            map[l] -= 1;
            left += 1;
        }
        result = Math.max(result, right - left + 1);
    }
    return result;
    // const { longest, current } = s.split("").reduce((acc, ch, index) => {
    //     console.log('++ch', ch)
    //     if (acc.used[ch]) {
    //         console.log('acc.current.length', acc.current.length)
    //         if (acc.longest < acc.current.length) {
    //             acc.longest = acc.current.length;
    //         }
    //         console.log('acc.used', acc.used)
    //         const index = acc.used[ch];
    //         console.log('before slice', acc.current)
    //         console.log('index', index)
    //         acc.current = acc.current.slice(acc.current.indexOf(ch) + 1);
    //        
    //         console.log('after slice', acc.current)
    //     }
    //     acc.current.push(ch);
    //     acc.used[ch] = index;
    //     acc.longest = Math.max(acc.longest, acc.current + 1)
    //     console.log('acc.current', acc.current)
    //     console.log('acc.used', acc.used)
    //     return acc;
    // }, {longest: 0, current: [], used: {}})
    // return Math.max(longest, current.length);
};

console.log(lengthOfLongestSubstring('asdqaswa'));