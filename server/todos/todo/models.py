from django.db import models

#One modal to Rule them all
class Todo(models.Model):
    id=models.AutoField(primary_key=True)
    todo=models.CharField(max_length=255)
    isDone=models.BooleanField(default=False)