from rest_framework import serializers
from .models import EVCategory, EVItem, EVStore, EVSuperCategory

class EVItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EVItem
        fields = ['name', 'description', 'price']


class EVCategorySerializer(serializers.ModelSerializer):
    items = EVItemSerializer(many=True)  

    class Meta:
        model = EVCategory
        fields = ['id', 'name', 'description', 'items']

    def create(self, validated_data):
        items = validated_data.pop('items')
        category = EVCategory.objects.create(**validated_data)
        for item in items:
            EVItem.objects.create(**item)

        return category


class EVStoreSerializer(serializers.ModelSerializer):
    category = EVCategorySerializer(many=True)

    class Meta:
        model = EVStore
        fields = ['thumbnail', 'name', 'category']

    def create(self, validated_data):
        category = validated_data.pop('category')
        store = EVStore.objects.create(**validated_data)
        for c in category:
            items = c.pop('items')
            category = EVCategory.objects.create(**c)
            for item in items:
                EVItem.objects.create(**item)

        return store

