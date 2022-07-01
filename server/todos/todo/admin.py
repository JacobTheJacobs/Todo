from django.contrib import admin
from .models import Todo

# Register your models here.
class ToDoAdmin(admin.ModelAdmin):
    list_display = ('id', 'todo')

admin.site.register(Todo, ToDoAdmin)