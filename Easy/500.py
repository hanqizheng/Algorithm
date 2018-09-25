class Solution(object):
    def findWords(self, words):
        """
        :type words: List[str]
        :rtype: List[str]
        """
        keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']

        res = []

        for key in keys:
            for word in words:
                w = set(word.lower())
                if w.issubset(set(key)):
                    res.append(word)

        return res


test = Solution()
a = ['asdaef', 'asdafdg', 'cmcmcvnvb']
print(test.findWords(a))
# 考了一个Set的概念，和set的一个 a.issubset(set(b))方法，用来判断a是否都在b里可以找到
