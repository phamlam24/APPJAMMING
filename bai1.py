# a = int(input())
# for i in range (0,a+1,1):
#     for j in range (0,a-i+1,1):
#         print(' ',end='')
#     for j in range(0,3*i,1):
#         print('*',end='')
#     print("\n")
import math
def check(n):
    if n < 2: return False
    for i in range(2,n,1):
        if n%i == 0: return False
    return True

n = int(input())
if check(n): 
    print("YES")
else:
    print("NO")