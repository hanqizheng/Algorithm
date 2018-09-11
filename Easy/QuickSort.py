def quick_sort(s, left, right):
    if left < right:
        i = left
        j = right
        x = s[left]
        while i < j:
            while i < j and s[j] >= x:
                j -= 1
            if i < j:
                s[i] = s[j]
                i += 1
            while i < j and s[i] < x:
                i += 1
            if i < j:
                s[j] = s[i]
                j -= 1

        s[i] = x
        quick_sort(s, left, i - 1)
        quick_sort(s, i + 1, right)


a = [72, 6, 57, 88, 60, 40, 83, 73, 48, 85]
quick_sort(a, 0, 9)
print(a)
