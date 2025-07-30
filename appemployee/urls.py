from django.urls import path
from . import views


urlpatterns = [
  path('', views.index, name='appemployee-index'),
  path('add/', views.add, name='appemployee-add'),
  
  
   
]