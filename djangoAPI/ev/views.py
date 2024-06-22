from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import EVCategory, EVItem, EVStore
from .serializers import EVCategorySerializer, EVItemSerializer, EVStoreSerializer

class EVCategoryViewSet(viewsets.ModelViewSet):
    queryset = EVCategory.objects.all()
    serializer_class = EVCategorySerializer

    # def create(self, request):
    #     # Override the default create method to handle nested item creation
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_header(serializer.data)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def perform_create(self, serializer):
    #     # Create EVCategory object and handle nested item creation
    #     category = serializer.save()
    #     for item_data in serializer.validated_data['items']:
    #         new_item = EVItem.objects.create(**item_data)
    #         category.items.add(new_item)


class EVItemViewSet(viewsets.ModelViewSet):
    queryset = EVItem.objects.all()
    serializer_class = EVItemSerializer

class EVStoreViewSet(viewsets.ModelViewSet):
    queryset = EVStore.objects.all()
    serializer_class = EVStoreSerializer