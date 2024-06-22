from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, CategoryViewSet, ProductViewSet, StoreViewSet, SuperCategoryViewSet

# don't forget to add urls to projects url

router = DefaultRouter()
router.register(r'items', ItemViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'stores', StoreViewSet)
router.register(r'supercategory', SuperCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


# from . import views

# urlpatterns = [
#     path('item/', views.ItemViewSet.as_view()),
#     path('category/', views.CategoryViewSet.as_view()),
#     path('products/', views.ProductViewSet.as_view()),
#     path('stores/', views.StoreViewSet.as_view()),
# ]
