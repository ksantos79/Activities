lst = ["A","B","C"]

item = {"key": 100}

#dict name key
item2 = {"name": "Kash"}
print("---------Set 1---------")
print(item["key"])
print(item2["name"])


#dictionary can contain multiple pari of information
hero = {"name": "Iron Man","Nationality":"United States","type": False}

item3 = { "bag" : ["laptop","usb","food"],"pocket": [5.00,1.00,'gum'],
          "reddit": {"key": [1,2,3,4]}
          }

print("---------Set 2---------")
print(item3["bag"])
print(item3["pocket"])
print(item3["reddit"]["key"][3])


print("---------Set 3---------")
for keys in item3["reddit"]["key"]:
    print(keys)