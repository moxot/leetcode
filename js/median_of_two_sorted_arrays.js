/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArraysSubmitted = function(nums1, nums2) {
    let notFound = true;
    let divide = nums1.length;
    let divide2 = divide;
    while (notFound) {
        divide = Math.round(divide / 2);
        divide2 = Math.round((nums1.length + nums2.length) / 2) - divide;
        if (
            nums1[divide - 1] <= nums2[divide2]
            && nums2[divide2 - 1] <= nums1[divide]
        ) {
            notFound = false;
        }
        if (divide <= 1) {
            break;
        }
    }
    if ((nums1.length + nums2.length) % 2 === 0) {
        return (Math.max(nums1[divide - 1], nums2[divide2 - 1]) + Math.min(nums1[divide], nums2[divide2])) / 2;
    } else {
        return Math.max(nums1[divide - 1], nums2[divide2 - 1]);
    }
};

console.log('RESULT:', findMedianSortedArraysSubmitted([3, 5, 9], [1, 11, 111, 112]));
