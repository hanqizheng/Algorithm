
# def selectionSort(alist):
#     for i in range(len(alist)-1, 0, -1):
#         maxone = 0
#         for j in range(1, i+1):
#             if alist[j] > alist[maxone]:
#                 maxone = j
#         temp = alist[i] 
#         alist[i] = alist[maxone]
#         alist[maxone] = temp


def selectionSort(a):
    for i in range(len(a) - 1):
        Min = i
        for j in range(i + 1, len(a)):
            if a[j] < a[Min]:
                Min = j
        temp = a[i]
        a[i] = a[Min]
        a[Min] = temp


a = [72, 6, 57, 88, 60, 40, 83, 73, 48, 85]
selectionSort(a)
print(a)
