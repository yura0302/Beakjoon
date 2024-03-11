n=int(input())
times=list(map(int,input().split()))
times.sort()
answer=0

for i in range(1,n+1):
    answer+=sum(times[0:i])
print(answer)