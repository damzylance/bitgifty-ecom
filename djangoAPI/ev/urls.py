from django.urls import path
from .views import EVCategoryViewSet, EVItemByStoreViewSet, EVItemByCategoryViewSet, EVStoreByNameViewSet, EVItemViewSet, EVStoreViewSet, EVItemByNameViewSet, EVCategoryByNameViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'evitems', EVItemViewSet)
router.register(r'evitemByName', EVItemByNameViewSet)
router.register(r'evitemByCategory', EVItemByCategoryViewSet)
router.register(r'evitemByStore', EVItemByStoreViewSet)
router.register(r'evcategories', EVCategoryViewSet)
router.register(r'evcategoryByName', EVCategoryByNameViewSet)
router.register(r'evstore', EVStoreViewSet)
router.register(r'evstoreByName', EVStoreByNameViewSet)

# router.register(r'supercategory', SuperCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]