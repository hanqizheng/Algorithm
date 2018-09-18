class Solution:
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
# 根据众数的定义，个数超过数组长度的一半，那么中间那个数一定是众数
        a = sorted(nums)
        return(a[len(a) / 2])

        # if len(nums) == 1:
        #     return nums[0]
        # edge = len(nums) / 2
        # for i in range(len(nums) - 1):
        #     times = 1
        #     for j in range(i + 1, len(nums)):
        #         if nums[j] == nums[i]:
        #             times += 1
        #     if times > edge:
        #         print(nums[i])


test = Solution()
a = [3, 2, 3]
print test.majorityElement(a)
# 当我还在傻傻的用两个for找的时候，python自己就有可以数出每个元素出现次数的函数

# tmp = list(set(nums))
# for i in tmp:
#     if nums.count(i) > len(nums)/2:
#         return i
