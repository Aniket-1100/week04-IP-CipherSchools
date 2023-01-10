#1
x = 0
a = 5
b = 5
if a>0:
    if b<0:
        x = x+5
    elif a>5:
        x = x+4
    else:
        x = x+3
else:
    x = x+2
print(x)

#2
for num in range(10,14):
    for i in range(2,num):
        if num%i == 1:
            print(num)

            break
    
#3
for i in 'Jhon':
    if i == 'o':
        pass

    print(i, end=", ")
#4
x = 0
for i in range(10):
    for j in range(-1,-10,-1):
        x += 1

        print(x)

#5
a,b = 12,5
if a+b :
    print("True")
else:
    print("False")
#3
for i in 'Jhon':
    if i == 'o':
        pass

    print(i, end=", ")
#4
x = 0
for i in range(10):
    for j in range(-1,-10,-1):
        x += 1

        print(x)

#5
a,b = 12,5
if a+b :
    print("True")
else:
    print("False")
#6
x = 0
a = 0
b = -5
if a > 0:
    if b < 0: 
        x = x + 5 
    elif a > 5:
        x = x + 4
    else:
        x = x + 3
else:
    x = x + 2
print(x)

#7
for num in range(-2,-5,-1):
    print(num, end=", ")

#8
var = 10
for i in range(10):
    for j in range(2, 10, 1):
        if var % 2 == 0:
            continue
            var += 1
    var+=1
else:
    var+=1
print(var)

#9
numbers = [10, 20]
items = ["Chair", "Table"]

for x in numbers:
  for y in items:
    print(x, y)
    
#10
for num in range(2,-5,-1):
    print(num, end=", ")
    
#11
x = 0
while (x < 100):
  x+=2
print(x)

#12
def fun1(name, age=20):
    print(name, age)

fun1('Emma', 25)

#13
def display(**kwargs):
    for i in kwargs:
        print(i)

display(emp="Kelly", salary=9000)

#14
def outer_fun(a, b):
    def inner_fun(c, d):
        return c + d
    return inner_fun(a, b)

res = outer_fun(5, 10)
print(res)

#15
def add(a, b):
    return a+5, b+5

result = add(3, 2)
print(result)

#16
def outer_fun(a, b):
    def inner_fun(c, d):
        return c + d

    return inner_fun(a, b)
    return a

result = outer_fun(5, 10)
print(result)

#18
def fun1(num):
    return num + 25

fun1(5)
print(num)
