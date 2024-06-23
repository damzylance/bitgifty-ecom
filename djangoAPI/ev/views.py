from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import EVCategory, EVItem, EVStore
from .serializers import EVCategorySerializer, EVItemSerializer, EVStoreSerializer

class EVCategoryViewSet(viewsets.ModelViewSet):
    queryset = EVCategory.objects.all()
    serializer_class = EVCategorySerializer

class EVItemViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

class EVStoreViewSet(viewsets.ModelViewSet):
    queryset = EVStore.objects.all()
    serializer_class = EVStoreSerializer