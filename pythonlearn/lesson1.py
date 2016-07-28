class MyClass:
    variable = "blah"

    def function(self):
        print("This is a message inside the class.")




myobjectx = MyClass()

print(myobjectx.variable)


myobjectx.function()
# name = input()
# print('hello,', name)

sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print('-----')    
print(sum)
