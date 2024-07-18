from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import EVCategory, EVItem, EVStore
from .serializers import EVCategorySerializer, EVItemSerializer, EVStoreSerializer

class EVCategoryViewSet(viewsets.ModelViewSet):
    queryset = EVCategory.objects.all()
    serializer_class = EVCategorySerializer

class EVCategoryByNameViewSet(viewsets.ModelViewSet):
    queryset = EVCategory.objects.all()
    serializer_class = EVCategorySerializer

    def retrieve(self, request, *args, **kwargs):
        name = kwargs.get('pk')
        queryset = self.queryset.filter(name=name)
        instance = queryset.first()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class EVItemViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

        # return Response(name)

class EVItemByNameViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

    def retrieve(self, request, *args, **kwargs):
        name = kwargs.get('pk')
        queryset = self.queryset.filter(title=name)
        instance = queryset.first()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

        # return Response(name)

    
class EVStoreViewSet(viewsets.ModelViewSet):
    queryset = EVStore.objects.all()
    serializer_class = EVStoreSerializer
    
class EVStoreByNameViewSet(viewsets.ModelViewSet):
    queryset = EVStore.objects.all()
    serializer_class = EVStoreSerializer

    # @action(detail=False, methods=['GET'])
    # def retrieve(self, request, name):
    #     storeByName = EVStore.objects.get(item=name)
    #     return Response(storeByName)

    def retrieve(self, request, *args, **kwargs):
        name = kwargs.get('pk')
        queryset = self.queryset.get(name=name)
        # instance = queryset.first()
        serializer = self.get_serializer(queryset) #use instance if queryset.filter
        return Response(serializer.data)
    

class EVItemByCategoryViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

    def retrieve(self, request, *args, **kwargs):
        name = kwargs.get('pk')
        try:
            category = EVCategory.objects.get(name=name)
        except EVCategory.DoesNotExist:
            return Response({'error': 'Category not found'}, status=404)

        items = category.items.all()
        serializer = EVItemSerializer(items, many=True)
        return Response(serializer.data)
    
class EVItemByStoreViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

    def retrieve(self, request, *args, **kwargs):
        name = kwargs.get('pk')
        stores = EVStore.objects.filter(name=name)
        
        if not stores.exists():
            return Response({'error': 'Store not found'}, status=404)
        
        all_items = []
        for store in stores:
            stcat = store.category.all()
            for st in stcat:
                items = st.items.all() #error
                serializer = EVItemSerializer(items, many=True)
                all_items.extend(serializer.data)

        return Response(all_items)


        # return Response(name)