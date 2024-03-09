from django.db import models
from uuid import uuid4
from userapp.models import User

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=128,unique=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return f'{self.id}. {self.name}'

class Product(models.Model):
    name = models.CharField(max_length=256)
    description = models.TextField()
    price = models.DecimalField(decimal_places=2,max_digits=6)
    quantity = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="product_images")
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.id}. {self.name}'
    
    @property # то действие стало, как переменная
    def category_info(self):
        categ = Category.objects.get(id = self.category_id)
        return categ
    
    
class Cart(models.Model):
    product = models.ForeignKey(to=Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    device_id = models.UUIDField(default=uuid4)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, null=True, blank=True)

    

class Genre(models.Model):
    name = models.CharField(max_length=100,unique=True)

    def __str__(self):
        return f'{self.id}. {self.name}'


class Poem(models.Model):
    genre = models.ForeignKey(to=Genre, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=128)
    text = models.TextField()
    img = models.ImageField(upload_to="poem_images", null = True, blank=True)

    def __str__(self):
        return f'{self.id}. {self.name}'






