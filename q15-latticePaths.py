paths = 0

def main(i, j, n):
	global paths
	if i < n:
		main(i+1, j, n)
	if j < n:
		main(i, j+1, n)
	if i == n and j == n:
		paths = paths + 1
main(0,0,20)
print paths
