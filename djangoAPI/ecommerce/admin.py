from django.contrib import admin
from .models import Item, Category, Product, Store

admin.site.register([Item, Category, Product, Store])