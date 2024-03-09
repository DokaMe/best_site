from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    img = models.ImageField(upload_to="user_images", default="user_images/default.png")
    phone_num = models.CharField(max_length=16)
