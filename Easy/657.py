class Solution(object):
    def judgeCircle(self, moves):
        """
        :type moves: str
        :rtype: bool
        """
        if (
          moves.count('U') == moves.count('D')
          and moves.count('L') == moves.count('R')
        ):
            return True
        else:
            return False


"""
class Solution(object):
    def judgeCircle(self, moves):

        horizen = 0
        vertical = 0

        m = list(moves)
        for i in range(len(m)):
            if m[i] == 'U':
                vertical += 1
            elif m[i] == 'D':
                vertical -= 1
            elif m[i] == 'R':
                horizen += 1
            elif m[i] == 'L':
                horizen -= 1

        if horizen == 0 and vertical == 0:
            return True
        else:
            return False

"""
