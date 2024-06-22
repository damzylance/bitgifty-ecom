from django.db import models

class EVItem(models.Model):
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

    def __str__(self):
        return self.title

class EVCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    items = models.ManyToManyField(EVItem, related_name='categories')

    def __str__(self):
        return self.name
    
class EVStore(models.Model):
    cutoff = models.CharField(max_length=255)
    desc = models.TextField()
    rating = models.CharField(max_length=10)
    thumbnail = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    banner = models.CharField(max_length=255)
    logo = models.CharField(max_length=255)
    delivery_time = models.CharField(max_length=50)
    delivery_fee = models.CharField(max_length=50)
    category = models.ManyToManyField(EVCategory, related_name='stores')

    def __str__(self):
        return self.name
    
class EVSuperCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    store = models.ManyToManyField(EVStore, related_name='store')

    def __str__(self):
        return self.name