
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from todo.models import Todo
from todo.serializers import TodoSerializer
from rest_framework.decorators import api_view

@csrf_exempt
@api_view(['GET', 'POST'])
def todo_list(request):
    list_of_todos=[]
    if request.method == 'GET':
        print("----------------------------------------------------------")
        todos = Todo.objects.all()
        todos_serializer = TodoSerializer(todos, many=True)
        return JsonResponse(todos_serializer.data, safe=False)
    
    elif request.method == 'POST':
        print(request)
        todo_list = JSONParser().parse(request)
        print(todo_list)
        for todo in todo_list:
            print(todo)
            todo = TodoSerializer(data=todo)
            if todo.is_valid():
                todo.save()
                list_of_todos.append(todo)
            else:
                return JsonResponse(todo.errors, status=status.HTTP_400_BAD_REQUEST)
       
        token = {'abcd': '1234'}
        return JsonResponse(token, status=status.HTTP_201_CREATED) 
       
