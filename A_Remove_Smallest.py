t = int(input())

def solve():
    n = int(input())
    nums = list(map(int, input().split()))
    nums.sort()
    for i in range(len(nums) - 1):
        if nums[i + 1] - nums[i] > 1:
            return False
    return True

for _ in range(t):
    if solve():
        print("YES")
    else:
        print("NO")