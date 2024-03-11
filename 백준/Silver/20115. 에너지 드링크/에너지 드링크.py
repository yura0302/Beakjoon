n=int(input())
drink=sorted(list(map(int,input().split())),reverse=True)
amount=drink[0]

for _ in range(len(drink)-1):
    amount+=drink[1]/2
    del drink[1] 
print(amount)