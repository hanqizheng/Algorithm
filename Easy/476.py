class Solution:
    def findComplement(self, num):
        z = bin(num)[2:]
        z1 = ""
        for k in z:
            if k == '0':
                z1 += '1'
            else:
                z1 += '0'
        res = int(z1, 2)
        return res


test = Solution()
a = 5
print test.findComplement(a)