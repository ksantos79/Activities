name = "Kash"
country = "Brazil"
age = 39
hourly_wage = 10
satisfied = False
daily_wage = hourly_wage *8

print("My name is "+name+ " . I am "+str(age)+" years old.")
print("Hourly wage: "+str(hourly_wage))
print("Daily wage: "+str(daily_wage))
print("Satisfied with your pay? "+str(satisfied))


mylist = ["test"]
print(mylist)
mylist.append("append")
print(mylist)
mylist.append("remove")
print(mylist)
mylist.remove("remove")#removes the first match in the list
mylist.append("remove")
mylist.append("onemore")
print(mylist)
mylist.pop(2)#removes item on specified location
print(mylist)



words = "Peace"
for letters in words:
    print(letters)

zoo = ["dog","cat","zebra"]
for animal in zoo:
    print(animal)

run = "y"
while(run == "y"):
    print(0)
    run = input("Continue runing? (y or n) ")

words = "Peace"
print(words[::-1])#reverses order of the "list"