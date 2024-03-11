import sys
input=sys.stdin.readline
n=int(input().rstrip())
tips=[int(input().rstrip()) for _ in range(n)]
tips=sorted(tips,reverse=True)
answer=0

for i in range(n):
    temp=tips[i]-i
    if temp<0:
        continue
    answer+=temp
print(answer)