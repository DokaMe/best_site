from rest_framework import serializers

from .models import Category, Product, Cart, Genre, Poem

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')

class ProductSerializer(serializers.ModelSerializer):
    category_info = CategorySerializer()
    class Meta:
        model = Product
        fields = ('id','name', 'description', 'price', 'quantity', 'image', 'category', 'category_info')

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('product', 'quantity', 'device_id',   'user')

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('id','name')

class PoemSerializer(serializers.ModelSerializer):
    genre_info = GenreSerializer()
    class Meta: 
        model = Poem
        fields = ('name','author','text','img', 'genre', 'genre_info')
