from django.db import models

class EVItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class EVCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    items = models.ManyToManyField(EVItem, related_name='items')  # ManyToMany for Scenario 2

class EVStore(models.Model):
    # cutoff = models.CharField(max_length=255)
    # desc = models.TextField()
    # rating = models.CharField(max_length=10)
    thumbnail = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    # banner = models.CharField(max_length=255)
    # logo = models.CharField(max_length=255)
    # delivery_time = models.CharField(max_length=50)
    # delivery_fee = models.CharField(max_length=50)
    category = models.ManyToManyField(EVCategory, related_name='stores')

    def __str__(self):
        return self.name
    
class EVSuperCategory(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    store = models.ManyToManyField(EVStore, related_name='store')

    def __str__(self):
        return self.name
    

# class EVProductSuperCategory(models.Model):
#     EVSuperCategoryKey = models.ForeignKey(EVSuperCategory, on_delete=models.CASCADE)
#     EVProductKey = models.ForeignKey(EVProduct, on_delete=models.CASCADE)