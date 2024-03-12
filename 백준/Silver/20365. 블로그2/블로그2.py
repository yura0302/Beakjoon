n=int(input())
color=input()
dict={"R":0,"B":0}
dict[color[0]]+=1

for i in range(1,n):
    if color[i]!=color[i-1]:
        dict[color[i]]+=1
answer=min(dict["R"],dict["B"])+1
print(answer)