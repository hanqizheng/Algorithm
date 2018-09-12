
def selectionSort(alist):
    for i in range(len(alist)-1, 0, -1):
        maxone = 0
        for j in range(1, i+1):
            if alist[j] > alist[maxone]:
                maxone = j
        temp = alist[i] 
        alist[i] = alist[maxone]
        alist[maxone] = temp


a = [72, 6, 57, 88, 60, 40, 83, 73, 48, 85]
selectionSort(a)
print(a)
