from django.contrib import admin
from mainapp.models import Category, Product, Genre, Poem
# Register your models here.
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Genre)
admin.site.register(Poem)