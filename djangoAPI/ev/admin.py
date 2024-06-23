from django.contrib import admin
from .models import EVItem, EVCategory

admin.site.register([EVItem, EVCategory])