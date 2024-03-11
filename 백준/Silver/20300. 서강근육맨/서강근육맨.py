n=int(input())
loss=list(map(int,input().split()))
loss.sort()
answer=loss[-1]

if n%2==1:
    for i in range(n//2):
        temp=loss[i]+loss[n-i-2]
        if answer<temp:
            answer=temp
else:
    for i in range(n//2):
        temp=loss[i]+loss[n-i-1]
        if answer<temp:
            answer=temp
print(answer)
    