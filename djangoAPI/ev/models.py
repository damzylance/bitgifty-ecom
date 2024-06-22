from django.db import models

class EVItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

class EVCategory(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    items = models.ManyToManyField(EVItem, related_name='items')  # ManyToMany for Scenario 2

class EVProduct(models.Model):
    desc = models.TextField()
    thumbnail = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)

    def __str__(self):
        return self.name