from django.urls import path
from .views import EVCategoryViewSet, EVItemByStoreViewSet, EVItemByCategoryViewSet, EVStoreByNameViewSet, EVItemViewSet, EVStoreViewSet, EVItemByNameViewSet, EVCategoryByNameViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter
# from rest_framework.schemas import get_schema_view
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Your API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@yourapi.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

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
    # path('api_schema', get_schema_view(title='api schema', description='desc'), name='apischema'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]