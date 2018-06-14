def printHello():
    print("Hello!")


printHello()


def printName(name):
    print("Hello, "+ name)

printName("Kash")


listOne = [1,2,3,4,5]
listTwo = [11,12,13,14,15]

def listInfo(lst):
    print("The values within the list are...")
    for value in lst:
        print(value)
    print("Length = " + str(len(lst)))


listInfo(listOne)
listInfo(listTwo)
listInfo(["a","b","c","d","e"])


a = [1,2,3]
x, y, z = a

print(x)
print(y)
print(z)


a = ["Hello","World"]
print(" ".join(a))

list1 = ["a","b","c"]
list2 = [1,2,3]

for x,y in zip(list1,list2):
    print(x,y)

a = 8
b = 5
b, a = a, b
print(a)
print(b)