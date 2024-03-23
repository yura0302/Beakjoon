n,m=map(int,input().split())
numbers=[int(x) for x in input().split()]
arr=[]
numbers.sort()

def backtracking(depth):
    if depth==m:
        print(" ".join(map(str,arr)))
        return
    for i in range(n):
        if(numbers[i] in arr):
            continue
        arr.append(numbers[i])
        backtracking(depth+1)
        arr.pop()
backtracking(0)