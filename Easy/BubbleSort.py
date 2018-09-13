def BubbleSort(alist):
    for passnum in range(len(alist)-1, 0, -1):
        for i in range(passnum):
            if alist[i] > alist[i+1]:
                temp = alist[i]
                alist[i] = alist[i+1]
                alist[i + 1] = temp


a = [5, 7, 1, 3, 5, 9, 6, 2, 4, 9]
BubbleSort(a)
print(a)
