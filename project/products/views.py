from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category,Product
from .serializers import ProductSerializer,CategorySerializer
from .filters import ProductFilter

class ProductListView(generics.ListAPIView):
    queryset =Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends =[DjangoFilterBackend]
    filterset_class=ProductFilter



class CategoryListView(generics.ListAPIView):
    queryset =Category.objects.all()
    serializer_class = CategorySerializer