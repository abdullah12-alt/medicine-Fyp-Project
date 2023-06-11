from django.contrib import admin
from .models import ShippingAddress,User,LoginUser
class ShippingAddressAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'address', 'city', 'postal_code', 'country']
    # list_display = "__all__"

admin.site.register(ShippingAddress, ShippingAddressAdmin)

admin.site.register(User)
admin.site.register(LoginUser)
