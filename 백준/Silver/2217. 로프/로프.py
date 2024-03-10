n=int(input())
rope=[]

for i in range(n):
    rope.append(int(input()))
rope.sort()
max=rope[0]*n

for i in range(len(rope)-1):
    if max<rope[i+1]*(n-(i+1)):
        max=rope[i+1]*(n-(i+1))
print(max)