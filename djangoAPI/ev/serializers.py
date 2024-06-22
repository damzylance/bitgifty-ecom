from rest_framework import serializers
from .models import EVCategory, EVItem

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


# class EVCategorySerializer(serializers.ModelSerializer):
#     # items = EVItemSerializers(many=True, read_only=True)

#     items = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

#     class Meta:
#         model = EVCategory
#         fields = ['name', 'description', 'items']
