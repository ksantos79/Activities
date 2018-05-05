file = ".\\test_file.txt"
print(file)
with open(file,'r') as text:
    print(text)
    lines = text.read()
    print(lines)

