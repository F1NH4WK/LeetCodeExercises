// Vi essa resolução, estou fazendo ela e entendendo.

function twoSum(nums, target){
    const map = new Map();

    for (i = 0; i <= nums.length; i++) {
        
        const complement = target - nums[i]
    
        if (map.has(complement)) return [map.get(complement), i]
        // verify if the complement's in hash map, if so, then returns the index of complement and the current number index.
        else map.set(nums[i], i)
        // otherwise, just add the current number as key and its value as element.
    }
}

console.log(twoSum([2, 7, 11, 15], 9))