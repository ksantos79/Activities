import os
import csv

csvpath = os.path.join(".","Resources","cereal.csv")

with open(csvpath,newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter = ",")
    for row in csvreader:
        if(float(row[7]) >= 5):
            print(row)