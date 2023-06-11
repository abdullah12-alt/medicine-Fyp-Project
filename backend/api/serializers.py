from rest_framework import serializers
from .models import ShippingAddress,User,LoginUser
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = ['name','email','phone','address','city','postal_code','country']
        


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password']

class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginUser
        fields = ['email', 'password']