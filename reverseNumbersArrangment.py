numbers = 12345
rev = 0

while numbers:
	rev = rev * 10 + numbers % 10
	numbers //= 10

print(rev)
