from django.db import models

class Item(models.Model):
    cutoff = models.CharField(max_length=255)
    thumbnail = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    desc = models.TextField()
    old_price = models.CharField(max_length=50)
    new_price = models.CharField(max_length=50)
    banner = models.CharField(max_length=255)
    display_photo = models.CharField(max_length=255)
    menu = models.CharField(max_length=255)
    star = models.IntegerField()
    # category = models.ForeignKey(Category, related_name='items', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Category(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    items = models.ManyToManyField(Item, related_name='categories')

    def __str__(self):
        return self.name
    

class Product(models.Model):
    desc = models.TextField()
    thumbnail = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Store(models.Model):
    cutoff = models.CharField(max_length=255)
    desc = models.TextField()
    rating = models.CharField(max_length=10)
    thumbnail = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    banner = models.CharField(max_length=255)
    logo = models.CharField(max_length=255)
    delivery_time = models.CharField(max_length=50)
    delivery_fee = models.CharField(max_length=50)
    products = models.ManyToManyField(Product, related_name='stores')

    def __str__(self):
        return self.name
    
class SuperCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    category = models.ManyToManyField(Category, related_name='category')
    store = models.ForeignKey(Store, related_name='store', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# class CategoryItem(models.Model):
#     category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
#     item = models.ManyToManyField(Item, related_name='products')
