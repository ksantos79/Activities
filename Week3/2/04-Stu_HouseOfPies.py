pies = ["Pecan","Apple Crisp", "Bean", "Banoffee",  "Black Bun", "Blueberry", "Buko", "Burek",  "Tamale", "Steak"]
piesnumbers= [1,2,3,4,5,6,7,8,9,10]
piesqty = [0,0,0,0,0,0,0,0,0,0]
userselection = 0
continueshopping = "y"
buymore = True

print("Welcome to the House of Pies! Here are our pies:\n")
print("---------------------------------------------------------------------")
print("("+str(piesnumbers[0])+") "+pies[0]+", "\
      "("+str(piesnumbers[1])+") "+pies[1]+", "\
      "("+str(piesnumbers[2])+") "+pies[2]+", "\
      "("+str(piesnumbers[3])+") "+pies[3]+", "\
      "("+str(piesnumbers[4])+") "+pies[4]+", "\
      "("+str(piesnumbers[5])+") "+pies[5]+", "\
      "("+str(piesnumbers[6])+") "+pies[6]+", "\
      "("+str(piesnumbers[7])+") "+pies[7]+", "\
      "("+str(piesnumbers[8])+") "+pies[8]+", "\
      "("+str(piesnumbers[9])+") "+pies[9])

while (buymore == True):
  userselection = input("Type the pie number here: ")
  piesqty[piesnumbers.index(int(userselection))] = piesqty[piesnumbers.index(int(userselection))]+1
  print("Great! We'll have that "+ pies[piesnumbers.index(int(userselection))]+" right out for you.")
  print("")
  continueshopping = input("Would you like to order more pies? (y/n): ")

  while (continueshopping != "y" and continueshopping != "n"):
    continueshopping = input("Invalid entry. Please enter y or n: ")
  
  if (continueshopping == "n" ):
    buymore = False


print("")
print("Thank you for your business!")
print("You purchased:")
i = 0
for i in range (0,10):
  print(str(piesqty[i])+" "+pies[i])
  i = i+1