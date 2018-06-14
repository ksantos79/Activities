#from randint import random #IMPORTS SPECIFIC FUNCTIONS
#import random
#import string
import os
import csv


#print(string.ascii_letters)

#for x in range(10):
#    print(random.randint(1,10))
#C:\Users\KashS\Activities\Week3\2

#csvpath = os.path.join('..',"Netflix","netflix_ratings.csv")

video = input("What show or movie are you looking for? ")

csvpath = os.path.join(".","Netflix","netflix_ratings.csv")

#csvreader = csv.reader(csvpath,delimiter=',')

print(csv)
found = False

with open(csvpath,newline="") as csvfile:
    csvreader = csv.reader(csvfile, delimiter=',')
    for row in csvreader:
        print(row[0] + " is rated " + row[1])
    if(found == False):
        print("Not found")
