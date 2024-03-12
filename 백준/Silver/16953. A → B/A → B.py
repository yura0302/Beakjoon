from collections import deque
a,b=map(int,input().split())
queue=deque()
queue.append((a,1))


while (queue):
    node,count=queue.popleft()
    if node>b:
        continue
    if node==b:
        print(count)
        break
    queue.append((int(str(node)+"1"),count+1))
    queue.append((node*2,count+1))
else:
    print(-1)
    