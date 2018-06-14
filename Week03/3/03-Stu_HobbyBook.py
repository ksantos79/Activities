kash_dict = {"name": "Kash Santos",
             "age":39,
             "hobbies" : ["Playing guitar","Flying drones","Woodwork"],
             "wake_up" : {"Monday" : 5,"Tuesday" : 6}
            }

print("---------Print items in kash_dict---------")
for item in kash_dict:
    print(item)

print("---------Print items in kash_dict[hobbies]---------")
for hobby_list in kash_dict["hobbies"]:
    print(hobby_list)

print("---------Print items in kash_dict[wake_up]---------")
for times in kash_dict["wake_up"]:
    print(times + " " + str(kash_dict["wake_up"][times]))

print("---------Print values in kash_dict[wake_up]---------")
for i in kash_dict["wake_up"].values():
    print(i)

print("---------Print items in kash_dict[wake_up] (built in)---------")
for k,v in kash_dict["wake_up"].items():
    print(k)
    print(v)