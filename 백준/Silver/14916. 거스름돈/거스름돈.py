import sys
sys.stdin.readline
n=int(input().rstrip())
answer=0

while True:
    if n%5==0:
        answer+=n//5
        break
    else:
        n-=2
        answer+=1
    if n<0:
        break
if n<0:
    print(-1)
else:
    print(answer)