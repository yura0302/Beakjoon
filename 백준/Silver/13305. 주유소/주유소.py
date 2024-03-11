n= int(input())
km=list(map(int,input().split()))
oil=list(map(int,input().split()))

total=km[0]*oil[0]
minCost=oil[0]

for i in range(1,n-1):
    if minCost>oil[i]:
        minCost=oil[i]
    total+=minCost*km[i]
print(total)