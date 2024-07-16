from django.db import models 

class EVItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class EVCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
    
    items = models.ManyToManyField(EVItem)


from rest_framework import serializers

class EVItemSerializers(serializers.ModelSerializer):
    class Meta:
        model = EVItem
        fields = ['name', 'description', 'price']

class EVCategorySerializer(serializers.ModelSerializer):
    # items = EVItemSerializers(many=True)

    items = serializers.PrimaryKeyRelatedField(many=True)

    class Meta:
        model = EVCategory
        fields = ['name', 'description', 'items']


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets

class EVCategoryViewSet(viewsets.ModelViewSet):
    queryset = EVCategory.objects.all()
    serializer_class = EVCategorySerializer


from django.urls import path

urlpatterns = [
    path('ev-categories', EVCategoryViewSet.as_view({'get': 'list', 'post': 'create'})),
]