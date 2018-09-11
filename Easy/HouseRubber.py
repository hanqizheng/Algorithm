# unfinished!!!!


class Solution:
    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if nums is None or len(nums) == 0:
            return 0

        result = nums[0]
        b = max(nums[0], nums[1])
        for i in range(1, len(nums)):
            temp = b
            b = max(result + nums[i], b)
            result = temp
        return result


test = Solution()
print(test.rob([2, 1, 1, 2]))
