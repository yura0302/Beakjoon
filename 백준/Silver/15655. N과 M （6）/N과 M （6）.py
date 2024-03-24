n,m=map(int,input().split())
numbers=sorted(map(int,input().split()))
arr=[]

def dfs(start):
    if len(arr)==m:
        print(*arr)
        return
    for i in range(start,n):
        if numbers[i] not in arr:
            arr.append(numbers[i])
            dfs(i+1)
            arr.pop()
dfs(0)