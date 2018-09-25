class Solution:
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = s.split(' ')
        result = []

        if len(s) == 0:
            return 0

        for i in range(len(res)):
            if res[i] != '':
                result.append(res[i])
        length = result[len(result) - 1]
        return len(length)


test = Solution()
s = 'asdasd asda sfaf adadsdasada'
print test.lengthOfLastWord(s)
