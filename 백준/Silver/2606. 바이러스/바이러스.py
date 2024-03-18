n=int(input())
m=int(input())
graph=[[]*n for _ in range(n+1)]
visited=[0]*(n+1)

for _ in range(m):
    a,b=map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)
    graph[a].sort()

def dfs(node):
    visited[node]=1
    for i in graph[node]:
        if visited[i]==0:
            dfs(i)
    return
dfs(1)
print(sum(visited)-1)