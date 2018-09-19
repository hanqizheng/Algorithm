class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        return bin(x ^ y).count('1')


test = Solution()
print bin(30)
print bin(20)
print test.hammingDistance(56, 20)
