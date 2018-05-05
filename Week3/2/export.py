import os
import csv

output_path = os.path.join(".","output","new.csv")

with open(output_path,'w',newline='') as csvfile:
    csvwriter = csv.writer(csvfile,delimiter=",")
    csvwriter.writerow(['first name','last name','ssn'])
    csvwriter.writerow(["Drew","Hoang","505-80-2901"])