import os
import csv

indexes = [1,2,3,4]
employes = ["Adrian","Eugene","Rory","Angela"]
department = ["HR","IT","Operations","Finance"]

roster = zip(indexes,employes,department)

output = os.path.join(".","output","zipoutput.csv")
"""
with open(output,'w',newline='') as datafile:
    writer = csv.writer(datafile)
    writer.writerow(["Index","Employee","Department"])
    writer.writerow(roster)
"""
for employee in roster:
    print(employee)
