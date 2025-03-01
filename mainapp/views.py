from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, HttpResponseRedirect

from mainapp.models import Product,Category,Poem,Cart
from userapp.models import User
from userapp.forms import UserLoginForm
from rest_framework import generics
from .serializers import *
from uuid import uuid4


# Create your views here.
def main(request):
    try:
        device_id = request.session['device_id']
    except KeyError:
        request.session['device_id'] = str(uuid4())
    
    print(request.session['device_id'])
    # filter - он отдает список либо пустой либо с элементами
    # get - Отдает четко это элемент, если элементов не 1, то ошибка
    # print(list(Category.objects.all().values_list()))
    #Product.objects.create()
    return render(request, "thank_god.html")


def shop(request):
    try:
        device_id = request.session['device_id']
    except KeyError:
        request.session['device_id'] = str(uuid4())
    
    category = request.GET.get('category')
    if category == None:
        products = Product.objects.all()
    else:
        products = Product.objects.filter(category_id = category)
    categorys = Category.objects.all()
    context = {"products": products, 'categorys':categorys}
    return render(request, "shop.html", context)


def whoa(request):
    poems = Poem.objects.all()
    context = {'poems':poems}
    return render(request, "index.html",context)



def it(request):
    return render(request, "it.html")

def projects(request):
    # products = Product.objects.all()
    # return HttpResponse(products)
    return render(request, "projects.html")

def good(request, good_id):
    good_info = Product.objects.get(id = good_id)
    context = {"good_info": good_info}
    return render(request, "good.html", context)

def add_to_cart(request, good_id):
    try:
        device_id = request.session['device_id']
    except KeyError:
        request.session['device_id'] = str(uuid4())
        device_id = request.session['device_id']

    user_id = request.user.id
    if user_id==None:
        cart_obj = Cart.objects.filter(device_id=device_id, product_id=good_id, user_id=user_id)
    else:
        cart_obj = Cart.objects.filter(product_id=good_id, user_id=user_id)
    if cart_obj.exists():
        cart_obj = cart_obj.first() # cart_obj[0]
        cart_obj.quantity += 1
        cart_obj.save()
    else:
        cart = Cart.objects.create(device_id=device_id, product_id=good_id, user_id=user_id, quantity=1)
        cart.save()
    return HttpResponseRedirect(request.META['HTTP_REFERER'])

class CategoryView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CartView(generics.ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

class GenreView(generics.ListAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class PoemView(generics.ListAPIView):
    queryset = Poem.objects.all()
    serializer_class = PoemSerializer

    def get(self, request, *args, **kwargs):
        genre_id = request.GET.get('genre')
        if genre_id:
            self.queryset = self.queryset.filter(genre_id=genre_id)
        return super().get(request, *args, **kwargs)

    
'''
JSON - JavaScript Object notation
{'persons':[{'name':'Вова'},{'name':'Даша'},{'name':'Cаша'}]}

REST API - Representation state transfer

Клиент -> request ->       Сервер
       <- Json response ->

'''

