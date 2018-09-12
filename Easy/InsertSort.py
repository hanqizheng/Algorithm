def insertSort(a):
    for i in range(len(a)-1): 
        for j in range(i+1, len(a)):
            if a[i] > a[j]:
                temp = a[i]
                a[i] = a[j]
                a[j] = temp


a = [72, 6, 57, 88, 60, 40, 83, 73, 48, 85]
insertSort(a)
print(a)
