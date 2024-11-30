file = open("sample_text.txt").read()
data = file.split(" ")
print(f"There are {len(data)} words found in the file")
