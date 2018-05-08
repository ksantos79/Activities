import os
import csv

#Define location and file name
filepath = os.path.join(".","Resources","employees.csv")

#create dictionary to hold the data
complete_list = {"First Name":[],"Last Name":[],"SSN":[],"Email":[]}

#open file
with open(filepath,newline='') as csvfile:
    csvreader = csv.DictReader(csvfile, delimiter = ",")
    for row in csvreader:#load data from file into the dictionary
        complete_list["First Name"].append(row["First Name"])
        complete_list["Last Name"].append(row["Last Name"])
        complete_list["SSN"].append(row["SSN"])
        complete_list["Email"].append(row["First Name"]+"."+row["Last Name"]+"@example.com")

#FORMATTER:
#variable = f"{data_item_1}.{data_item_2}@example.com"
'''
counter = 0
print("First Name\tLast Name\t\tSSN\t\tEmail")
for row2 in complete_list["First Name"]:
    print(complete_list["First Name"][counter]+"\t\t"+complete_list["Last Name"][counter]+"\t\t\t"+str(complete_list["SSN"][counter])+"\t"+str(complete_list["Email"][counter]))
    counter = counter +1
'''
#extract the file name from the path. "_" indicates the value of anything before filename
_ , filename = os.path.split(filepath)
counter = 0
csvpath = os.path.join(".","output",filename)
with open(csvpath,"w",newline='') as csvoutput:
    writer = csv.writer(csvoutput)
    writer.writerow(complete_list.keys())
    writer.writerow(complete_list.values())

    """
    field_names = ["Last Name","First Name","SSN","Email"]
    writer = csv.DictWriter(csvoutput,fieldnames = field_names, dialect='excel', quoting=csv.QUOTE_NONNUMERIC)
    writer.writeheader()
    for data in complete_list:
        writer.writerow(data)
"""
print(_)