/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    function recurseMe(start, end, length) {
        const pos1 = Math.floor(end / 2);
        const pos2 = Math.floor((length + 1) / 2) - pos1 - 1;
        console.log('start', start);
        console.log('end', end);
        console.log('length', length)
        console.log('pos1', pos1);
        console.log('pos2', pos2);
        let elem1 = nums1[pos1];
        let elem2 = nums2[pos2];
        if (end === 0) {
            elem1 = -Infinity;
        }
        if (start >= nums1.length) {
            elem1 = Infinity;
        }
        console.log('elem1', elem1);
        console.log('elem2', elem2);
        console.log('nums2[pos2 + 1]', nums2[pos2 + 1]);
        console.log('nums1[pos1 + 1]', nums1[pos1 + 1]);

        console.log('elem1 <= nums2[pos2 + 1]', elem1 <= nums2[pos2 + 1]);
        console.log('elem2 <= nums1[pos1 + 1]', elem2 <= nums1[pos1 + 1]);
        if (elem1 <= nums2[pos2 + 1] && elem2 <= nums1[pos1 + 1]) {
            return end;
        }
        if (elem1 > nums2[pos2 + 1]) {
            return recurseMe(start, pos1 - 1, length);
        } else {
            return recurseMe(start + 1, end, length);
        }
    }
    const result = recurseMe(
        0, 
        nums1.length - 1, 
        nums1.length + nums2.length
    );
    console.log('result', result);
    
    
    
    // let notFound = true;
    // let divide = nums1.length;
    // let divide2 = divide;
    // while (notFound) {
    //     divide = Math.round(divide / 2);
    //     divide2 = Math.floor((nums1.length + nums2.length + 1) / 2) - divide;
    //     console.log('divide', divide);
    //     console.log('divide2', divide2)
    //     console.log('nums1[divide - 1]', nums1[divide - 1])
    //     console.log('nums2[divide2 - 1]', nums2[divide2 - 1])
    //     console.log('nums1[divide]', nums1[divide])
    //     console.log('nums2[divide2]', nums2[divide2])
    //     console.log('nums1[divide - 1] <= nums2[divide2]', nums1[divide - 1] <= nums2[divide2]);
    //     console.log('nums2[divide2 - 1] <= nums1[divide]', nums2[divide2 - 1] <= nums1[divide])
    //     if (
    //         nums1[divide - 1] <= nums2[divide2]
    //         && nums2[divide2 - 1] <= nums1[divide]
    //     ) {
    //         notFound = false;
    //     }
    //     if (divide <= 1) {
    //         break;
    //     }
    // }
    // console.log('final divide', divide);
    // console.log('final divide 2', divide2)
    // if ((nums1.length + nums2.length) % 2 === 0) {
    //     return (Math.max(nums1[divide - 1], nums2[divide2 - 1]) + Math.min(nums1[divide], nums2[divide2])) / 2;
    // } else {
    //     return Math.max(nums1[divide - 1], nums2[divide2 - 1]);
    // }
    //
    
    
    
    // let right = 0;
    // let result = [];
    // for (let left = 0, l = nums1.length; left < l; left++) {
    //     while (nums2[right] <= nums1[left]) {
    //         result.push(nums2[right]);
    //         right++;
    //     }
    //     result.push(nums1[left]);
    // }
    // while (right < nums2.length) {
    //     result.push(nums2[right++]);
    // }
    // console.log('result', result)
    // if (result.length % 2 === 0)  {
    //     return (result[(result.length / 2 - 1)] + result[result.length / 2]) / 2
    // } else {
    //     return result[Math.round(result.length / 2) - 1];
    // }
};

console.log('RESULT:', findMedianSortedArrays([3, 5, 9], [1, 11, 111, 112]));
