from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from .models import Item, Category, Product, Store, SuperCategory
from .serializers import ItemSerializer, CategorySerializer, ProductSerializer, StoreSerializer, SuperCategorySerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def list(self, request):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        item = self.get_object()
        serializer = self.serializer_class(item)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=False, methods=['post'])
    def create_product(self, request):
        items_data = request.data.pop('items')
        category = Category.objects.create(**request.data)
        
        for item_data in items_data:
            item = Item.objects.create(**item_data)
            category.items.add(item)
        
        serializer = self.get_serializer(category)
        return Response(serializer.data)
    
    def get_queryset(self):
        queryset = super().get_queryset()
        for category in queryset:
            category.items.all()
        return queryset

# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

    # @action(detail=False, methods=['post'])
    # def create_product_with_categories(self, request):
    #     categories_data = request.data.pop('categories')
    #     product = Product.objects.create(**request.data)
        
    #     for category_data in categories_data:
    #         items_data = category_data.pop('items')
    #         category = Category.objects.create(**category_data)
            
    #         for item_data in items_data:
    #             item = Item.objects.create(**item_data)
    #             category.items.add(item)
                
    #         product.categories.add(category)
        
    #     serializer = self.get_serializer(product)
    #     return Response(serializer.data)

    # def get_queryset(self):
    #     queryset = super().get_queryset()
    #     for product in queryset:
    #         product.categories.all()
    #     return queryset
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @action(detail=False, methods=['post'])
    def bulk_create(self, request):
        data = request.data
        if isinstance(data, list):
            serializer = self.get_serializer(data=data, many=True)
            serializer.is_valid(raise_exception=True)
            self.perform_bulk_create(serializer.validated_data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_bulk_create(self, validated_data_list):
        for data in validated_data_list:
            categories_data = data.pop('categories')
            product = Product.objects.create(**data)
            for category_data in categories_data:
                items_data = category_data.pop('items')
                category = Category.objects.create(product=product, **category_data)
                for item_data in items_data:
                    Item.objects.create(category=category, **item_data)


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer

class SuperCategoryViewSet(viewsets.ModelViewSet):
    queryset = SuperCategory.objects.all()
    serializer_class = SuperCategorySerializer

# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from .models import Item, Category, Product, Store
# from .serializers import ItemSerializer, CategorySerializer, ProductSerializer, StoreSerializer

# class ItemViewSet(request):
#     queryset = Item.objects.all()
#     serializer_class = ItemSerializer

# class CategoryViewSet(request):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer

# class ProductViewSet(request):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer

# class StoreViewSet(request):
#     queryset = Store.objects.all()
#     serializer_class = StoreSerializer
