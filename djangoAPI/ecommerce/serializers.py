from rest_framework import serializers

# Example usage (assuming you have a Store model with a 'products' relationship)
# Make sure the 'Store' model has a 'products' field related to the Product model

# from your_app.models import Store  # Adjust the import as per your project structure

# store = Store.objects.get(pk=1)  # Replace 1 with the actual store ID
# serializer = StoreSerializer(store)
# data = serializer.data

# print(data)
    
from .models import Category, Item, Product, Store, SuperCategory

class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = '__all__'

# class ItemSerializer(serializers.ModelSerializer):
#     model = Item
#     # fields = '__all__'
#     id = serializers.IntegerField()
#     cutoff = serializers.CharField()
#     thumbnail = serializers.CharField()
#     title = serializers.CharField()
#     desc = serializers.CharField()
#     old_price = serializers.CharField()
#     new_price = serializers.CharField()
#     banner = serializers.CharField()
#     display_photo = serializers.CharField()
#     menu = serializers.CharField()
#     star = serializers.IntegerField()

    def create(self, validated_data):
        return Item.objects.create(**validated_data)

class CategorySerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ["name", "icon", "items"]
        read_only=True

    
    # items = ItemSerializer(many=True, read_only=True)
    # model = Category
    # # fields = '__all__'
    # id = serializers.IntegerField()
    # category = serializers.CharField()
    # icon = serializers.CharField()

class ProductSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True)

    class Meta:
        model = Product
        fields = ['name', 'icon', 'categories']

    # model = Product
    # # fields = '__all__'
    # id = serializers.IntegerField()
    # icon = serializers.CharField()
    # category = CategorySerializer(read_only=True)
    # # item = CategorySerializer.items(many=True, read_only=True)

class StoreSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Store
        fields = '__all__'

    # model = Store
    # # fields = '__all__'
    # id = serializers.IntegerField()
    # cutoff = serializers.CharField()
    # item = serializers.CharField()
    # desc = serializers.CharField()
    # rating = serializers.CharField()
    # thumbnail = serializers.CharField()
    # name = serializers.CharField()
    # banner = serializers.CharField()
    # logo = serializers.CharField()
    # delivery_time = serializers.CharField()
    # delivery_fee = serializers.CharField()
    # products = ProductSerializer(many=True)

class SuperCategorySerializer(serializers.ModelSerializer):

    category = CategorySerializer(many=True, read_only=True)

    class Meta:
        model = SuperCategory
        fields = '__all__'

    # model = Category
    # # fields = '__all__'
    # id = serializers.IntegerField()
    # category = serializers.CharField()
    # icon = serializers.CharField()
