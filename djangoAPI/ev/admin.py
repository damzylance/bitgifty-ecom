from django.contrib import admin
from .models import EVItem, EVCategory, EVStore, EVSuperCategory

admin.site.register([EVItem, EVCategory, EVStore, EVSuperCategory])