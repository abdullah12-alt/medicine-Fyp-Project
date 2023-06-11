from .views import CreateOrderView,UserRegistrationView,UserLoginView
from django.urls import path
urlpatterns = [
    # Other URL patterns
    path('create_order/', CreateOrderView.as_view(), name='create_order'),
    path('api/register/', UserRegistrationView.as_view(), name='user-registration'),
    path('api/login/', UserLoginView.as_view(), name='user-login'),


]
