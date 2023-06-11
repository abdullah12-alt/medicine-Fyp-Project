from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ShippingAddressSerializer,UserSerializer,LoginUserSerializer
from rest_framework import status
from .models import ShippingAddress,User
from django.contrib.auth import authenticate
class CreateOrderView(APIView):
    def post(self, request):
        data=request.data
        serializer = ShippingAddressSerializer(data=request.data)
        print(data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Order created successfully'})
        return Response(serializer.errors, status=400)
    
class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# class UserLoginView(APIView):
#     def post(self, request):
#         serializer = LoginUserSerializer(data=request.data)
#         if serializer.is_valid():
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']
#             # Perform login authentication logic here
#             user = authenticate(request, email=email, password=password)
        
#             # Example: Check if user with the given email and password exists
#             try:
#                 user = User.objects.get(email=email, password=password)
#                 return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#             except User.DoesNotExist:
#                 return Response({'message': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# class UserLoginView(APIView):
#     def post(self, request):
#         serializer = LoginUserSerializer(data=request.data)
#         if serializer.is_valid():
#             email = serializer.validated_data['email']
#             password = serializer.validated_data['password']
#             print(email)
#             user = authenticate(request, email=email, password=password)
#             if user is not User:
#                     # Authentication successful
#                 return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
#             else:
#                     # Authentication failed
#                 return Response({'message': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        serializer = LoginUserSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            try:
                user = User.objects.get(email=email)
                if user.password == password:
                    # Authentication successful
                    return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
                else:
                    # Authentication failed
                    return Response({'message': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
            except User.DoesNotExist:
                # User does not exist
                return Response({'message': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
