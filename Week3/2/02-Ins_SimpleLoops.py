print("------------------------")

for x in range(20,30, 2):
    print(x)


print("------------------------")

words = ["Iron Man","Captain america","Thanos","Falcon","Hulk"]
for word in words:
    print(word)

for i in range(len(words)):
    print(words[i])

print("------------------------")

sentence = "Hello World"

for letter in sentence:
    print(letter)


x = "Yes"

while x == "Yes":
    print("Nice!")
    x = input("Continue? Yes/No")


print("------------------------")

list = []
for i in range(10):
    list.append(i)

list2 = [i for i in range(10)] #THIS IS MORE EFFICIENT
print(list2)
