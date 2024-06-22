# from rest_framework import serializers
# from .models import Item, Category, Product

# class ItemSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Item
#         fields = ['id', 
#                   'cutoff', 
#                   'thumbnail', 
#                   'title', 
#                   'desc', 
#                   'old_price', 
#                   'new_price', 
#                   'banner', 
#                   'display_photo', 
#                   'menu', 
#                   'star']

# class CategorySerializer(serializers.ModelSerializer):
#     items = ItemSerializer(many=True, read_only=True)

#     class Meta:
#         model = Category
#         fields = ['id', 'category', 'icon', 'items']

# class ProductSerializer(serializers.ModelSerializer):
#     categories = CategorySerializer(many=True, read_only=True)

#     class Meta:
#         model = Product
#         fields = ['id', 'cutoff', 'item', 'desc', 'rating', 'thumbnail', 'name', 'banner', 'logo', 'delivery_time', 'delivery_fee', 'categories']
