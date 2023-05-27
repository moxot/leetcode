/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringWip = function(s) {
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
};

const lengthOfLongestSubstringSubmitted = function(s) {
    const { longest, current } = s.split("").reduce((acc, ch) => {
        if (acc.used[ch]) {
            if (acc.longest < acc.current.length) {
                acc.longest = acc.current.length;
            }
            acc.current = acc.current.slice(acc.current.indexOf(ch) + 1);
        }
        acc.current.push(ch);
        acc.used[ch] = true;
        return acc;
    }, {longest: 0, current: [], used: {}})
    return Math.max(longest, current.length);
};


console.log(lengthOfLongestSubstringWip('asdqaswa'));