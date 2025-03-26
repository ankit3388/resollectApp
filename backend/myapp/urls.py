from .views import item_list_create, item_detail, bucket_by_category,home
from django.urls import path

urlpatterns = [
    path('', home, name="home"),  
    path('api/items/', item_list_create, name='item_list_create'),
    path('api/items/<int:id>/', item_detail, name='item_detail'),
    path('api/items/bucket_by_category/', bucket_by_category, name='bucket_by_category'),
]
