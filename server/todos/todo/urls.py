from django.urls import re_path as url
from todo import views 


#one url to rule them all
urlpatterns = [ 
    url('todo/', views.todo_list),
]