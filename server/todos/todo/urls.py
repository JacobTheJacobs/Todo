from django.urls import re_path as url
from todo import views 
 
urlpatterns = [ 
    url(r'^todo$', views.todo_list),
]