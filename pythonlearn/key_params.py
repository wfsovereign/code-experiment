


def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)

    
extra = {'city': 'Beijing', 'job': 'Engineer'}
person('Jack', 24, **extra)
