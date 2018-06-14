prices = ["24","13","16000","1400"]
price_nums = [int(price) for price in prices]
print(prices)
print(price_nums)

dog = "poodle"
letters = [letter for letter in dog]
print(letters)
print(f"We iterate over a string into a list: {letters}")

capital_letters = [letter.upper() for letter in letters]
print(capital_letters)

#LONG VERSION OF ABOVE
capital_letters2 = []
for letter in letters:
    capital_letters2.append(letter.upper())
print(capital_letters2)


no_o = [letter for letter in letters if letter != 'o']
print(no_o)
#or
no_os = []
for letter in letters:
    if letter != 'o':
        no_os.append(letter)
print(no_os)

june_temperature = [72,65,59,87]
july_temperature = [87,85,92,79]
august_temperature = [88,77,66,100]
temperature = [june_temperature,july_temperature,august_temperature]

lowest_summer_temperatures = [min(temps) for temps in temperature]
print(lowest_summer_temperatures)
#or
lowest_summer_temperatures2 =[] 
for temps in temperature:
    lowest_summer_temperatures2.append(min(temps))
print(lowest_summer_temperatures2)

print(lowest_summer_temperatures[0])
print(lowest_summer_temperatures[1])
print(lowest_summer_temperatures[2])
print("-" * 50)#divider
print(lowest_summer_temperatures2[0])
print(lowest_summer_temperatures2[1])
print(lowest_summer_temperatures2[2])
print("-" * 50)#divider

#average
print(sum(lowest_summer_temperatures)/len(lowest_summer_temperatures))



def name(parameter):
    return "Hello " + parameter

print(name("Kash"))


def avg(data1,data2):
    return (sum(data1)/len(data1))+(sum(data2)/len(data2))
print(avg([1,2,3,4,5,6],[3,4,20]))