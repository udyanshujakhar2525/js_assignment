# js_assignment
question 1:
	a loop which check every number between L and R
	when the number is multiple of K and sum of its digit is prime 	
		then print the number 
question 2:
	Input: Get N and seed from the user
	Loop (3x): * If N is even: N = (N / 2) + seed
	or: N = (N * 3) - seed
	See if final N is between 100 and 999.
	If the middle digit of N equals the seed, print YES; otherwise, print NO
question 3:
	Search for the smallest number X, starting from 0 up to 100,000.
	Check if the sum of N + X is a multiple of K.
	If it is, check if that sum reads the same forward and backward.
	Return the first X that satisfies both.
		If no such number is found within the limit, return -1.
question 4:
	Start with a base fare and add 7 times the distance
	If the trip is more than 15 minutes late, add a flat 20 to the fare.
	If the distance is greater than 10, increase the total fare by 10% (rounded down).
	If the seed is odd: Subtract the seed from the fare.
		If the seed is even: Add the seed to the fare.
	Round the total fare up to the nearest multiple of 5.
question 5:
	Initialize a counter m and a running sum at 0, and set a divisor equal to seed + 2.
	Continue running as long as the sum is less than N.
	In each step, increase m by 1. Only add m to the sum if m is not divisible by the divisor
	Once the sum reaches or exceeds N, print the final value of m and the total computed sum.
question 6:
	Calculate the base score using the formula: $3 \times a + b - 2 \times c$.
	If the resulting score is negative, reset it to 0.
	If the sum of all inputs ($a + b + c$) is greater than 50, subtract 10 from the score
	Pass/Fail Check
		If the final score is 60 or higher, the status is "PASS"
		Otherwise, the status is "FAIL"
