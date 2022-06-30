
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
    
    #GET 
    if request.method == 'GET':
        #get all objects from the database
        todos = Todo.objects.all()
        #convert it to json
        todos_serializer = TodoSerializer(todos, many=True)
        #return then as JSON
        return JsonResponse(todos_serializer.data, safe=False)

    #POST 
    elif request.method == 'POST':
        
        #compare if the database has the same items as the request
        #get all the todos from the database
        todos = Todo.objects.all()
        todos_serializer = TodoSerializer(todos, many=True)
        list_of_todos = todos_serializer.data
        #printing is fun
        print("list_of_todos: ", list_of_todos)
        print("request.data: ", request)
        #get the todo from req
        todo_list = JSONParser().parse(request)
        #convert db todos to list just the names
        tmp_db_todo_list=[db_todo['todo'] for db_todo in list_of_todos]
        tmp_request_todo_list=[db_todo['todo'] for db_todo in todo_list]
        
        #handle delete
        #check if got less todos then in the databases
        count_request_todo_list = len(tmp_request_todo_list)
        count_db_todo_list=len(tmp_db_todo_list)
        if(count_request_todo_list<count_db_todo_list):
            #Finding elements that are NOT in the intersection of two lists
            res=list(set(tmp_db_todo_list) ^ set(tmp_request_todo_list))
            print(res)
            for todo in res:
                #find this todo and delete it
                del_todo=Todo.objects.get(todo=todo)    
                del_todo.delete()        
            

        #iterate through the todos from request
        for todo in todo_list:
            #if contains the todo in the db
             if todo["todo"] in tmp_db_todo_list:
                 #is it done? update
                if(todo["isDone"]==True):
                    #get the todo
                    db_todo=Todo.objects.get(todo=todo["todo"])
                    #convert it to json
                    todo_serializer = TodoSerializer(db_todo,data=todo)
                    #if valid save
                    if todo_serializer.is_valid():
                        todo_serializer.save()
                    else:
                        #if error return error message and status code
                        return JsonResponse(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                #ok if somehow ??? the same todo but seems to be undone what is done is done
                elif(todo["isDone"]==False):
                    #get the todo
                    db_todo=Todo.objects.get(todo=todo["todo"])
                    #convert it to json
                    todo_serializer = TodoSerializer(db_todo,data=todo)
                    #if valid save
                    if todo_serializer.is_valid():
                        todo_serializer.save()
                    else:
                        #if error return error message and status code
                        return JsonResponse(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
             else:
                #if was not found in database add it
                todo_serializer = TodoSerializer(data=todo)
                #if valid save
                if todo_serializer.is_valid():
                    todo_serializer.save()
                else:
                    #if error return error message and status code
                   return JsonResponse(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #Success message
        token = {'Response': 'Allright Allright Allright'}
        return JsonResponse(token, status=status.HTTP_201_CREATED)
       
        

       
