

class Wfsovereign():
    """docstring for wfsovereign"""

    __slots__ = ('age', 'identity', 'profile', 'assignIdentity', 'assignProfile')

    def __init__(self, age):
        self.age = age


def assignIdentity(self, identity):
    self.identity = identity


wfsovereign = Wfsovereign(18)

print(wfsovereign.age)
# print(wfsovereign.identity)
wfsovereign.assignIdentity = assignIdentity
wfsovereign.assignIdentity(wfsovereign, 'chairman')
print('identity : ', wfsovereign.identity)

print('########################')


from types import MethodType


def assignProfile(self, profile):
    self.profile = profile

try:
    print(wfsovereign.profile)
except Exception as e:
    print('err : ', e)

wfsovereign.assignProfile = MethodType(assignProfile, wfsovereign)

wfsovereign.assignProfile('awesome guy')

print('profile :', wfsovereign.profile)


try:
    wfsovereign.amazing = True
except Exception as e:
    print('err: ', e)
