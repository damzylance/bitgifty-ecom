from django.urls import path
from .views import EVCategoryViewSet, EVItemViewSet, EVStoreViewSet

# urlpatterns = [
#     path('evcategories/', EVCategoryViewSet.as_view({'get': 'list', 'post': 'create'})),
#     path('evitems/', EVItemViewSet.as_view({'get': 'list', 'post': 'create'})),
# ]



from django.urls import path, include
from .views import EVCategoryViewSet, EVItemViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'evitems', EVItemViewSet)
router.register(r'evcategories', EVCategoryViewSet)
router.register(r'evstore', EVStoreViewSet)

# router.register(r'products', ProductViewSet)
# router.register(r'stores', StoreViewSet)
# router.register(r'supercategory', SuperCategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]