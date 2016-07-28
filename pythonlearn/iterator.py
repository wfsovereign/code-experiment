iterator = {'a': 1, 'b': 2, 'c': 3}

print('single')
for k in iterator:
    print(k)
    print(iterator[k])


print('values')
for v in iterator.values():
    print(v)

print('double')

for k, v in iterator.items():
    print('k :', k, 'v :', v)


for i, v in enumerate([1, 2, 3, 4, 5]):
    print(i, ': ', v)

print('tulple')

for x, y in [(1, 1), (2, 3), (3, 3)]:
    print('x: ', x, ' y: ', y)


print('file list')

import os

fileList = [d for d in os.listdir('../')]
print('file list : ', fileList)


x = 'hahaha'
print(isinstance(x, str))

print('triangle yanghui')


def triangles():
    n = [1]
    while True:
        yield n
        n.append(0)
        n = [n[i - 1] + n[i] for i in range(len(n))]

n = 0
for i, t in enumerate(triangles()):
    print(''.ljust((10 - i) * 2), t)
    n = n + 1
    if n == 10:
        break




print("map------------")
def square(x):
    return x * x


r = map(square, list(range(10)))
print(list(r))


print("reduce-----------")

def char2num(s):
    return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}[s]

aNum = map(char2num, '13579')

print(list(aNum))
