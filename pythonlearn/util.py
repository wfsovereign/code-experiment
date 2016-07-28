import math


def my_abs(arg):
    if arg >= 0:
        return arg
    else :
        return -arg


def quadratic(a, b, c = 0):
    darta = b * b - 4 * a * c
    if darta < 0:
        raise TypeError('无解')

    d = math.sqrt(darta)
    if darta == 0:
        return (-b + d)/(2 * a)
    else:
        return (-b + d)/(2 * a), (-b - d)/(2 * a)
