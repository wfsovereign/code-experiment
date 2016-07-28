import math
from random import random
import pylab
import numpy
import matplotlib.pyplot as plt

pylab.rcParams['figure.figsize'] = (12, 6)

width = 2048; height = 1024

world = numpy.zeros((height+1, width+1, 3))
world[:, :, 2] = 0.75
draw = lambda img : plt.imshow(img);
plt.show()
draw(world)

print('what?')
