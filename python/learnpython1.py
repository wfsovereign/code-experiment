print 'hello world'

m = 'abc' * 10
print m
a = [1,2,3,4,5]
b = [2,3,4,5,6]
c = [0]
print a+b
print c * 10

print "hello %s" % b

print "hex : %x" %10
print "hex : %X" %10
print m[1:10]

# primes = [2, 3, 5, 7]
# for prime in primes:
#     print prime


# Prints out the numbers 0,1,2,3,4
for x in xrange(5): # or range(5)
    print x
print '----'
# Prints out 3,4,5
for x in xrange(3, 6): # or range(3, 6)
    print x
print '----'
# Prints out 3,5,7
for x in xrange(3, 8, 2): # or range(3, 8, 2)
    print x   
print '----'
xr1 = xrange(5) 
xr2 = range(5)
print xr1
print xr2

print '----'

numbers = [
    951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507, 725, 547, 544,
    615, 83, 165, 141, 501, 263, 617, 865, 575, 219, 390, 984, 592, 236, 105, 942, 941,
    386, 462, 47, 418, 907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
    399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217,
    815, 67, 104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742, 717,
    958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126, 721, 328, 753, 470,
    743, 527
]

# your code goes here
for x in numbers:
	if x%2 == 0:
    		print x

print '=--='
s1 = 72
s2 = 85

r = 100*(s2-s1)/s1
print r
print('%.1f' % r)    		