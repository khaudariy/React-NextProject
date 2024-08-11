from django_filters import rest_framework as filters

from .models import Product


class ProductFilter(filters.FilterSet):
    categories=filters.CharFilter(method='filter_categories')
    price_min=filters.NumberFilter(field_name='price',lookup_expr='gte')
    price_max=filters.NumberFilter(field_name='price',lookup_expr='lte')

    class Meta:
        model = Product
        fields = ['price_min','price_max']

    def filter_categories(self,queryset,name,value):
           category_ids = value.split(',')
           return queryset.filter(Category__id__in=category_ids)
