import random

optionsstring = "rps"
userinput = input("Input r (Rock), p (paper) or s (scissors) ")
computerinput = random.choice(optionsstring)

while userinput not in ["r","p","s"]:
    print("Invalid input!")
    userinput = input("Input r (Rock), p (paper) or s (scissors) ")


if (userinput == "r"):
    if (computerinput == "r"):
        result = "It's a tie!"
    elif (computerinput == "p"):
        result = "Computer wins!"
    elif (computerinput == "s"):
        result = "You win!"
elif (userinput == "p"):
    if (computerinput == "p"):
        result = "It's a tie!"
    elif (computerinput == "s"):
        result = "Computer wins!"
    elif (computerinput == "r"):
        result = "You win!"
elif (userinput == "s"):
    if (computerinput == "s"):
        result = "It's a tie!"
    elif (computerinput == "r"):
        result = "Computer wins!"
    elif (computerinput == "p"):
        result = "You win!"


print(userinput+ "   vs   "+computerinput)
print(result)