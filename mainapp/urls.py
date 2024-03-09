from django.urls import path
from mainapp.views import main, shop, whoa, it, projects, good, add_to_cart, CategoryView, ProductView, CartView, GenreView, PoemView

app_name = "mainapp"


urlpatterns = [
    path("", main, name="main"),
    path("shop/", shop, name="shop"),
    path("mainpage/", whoa, name="mainpage"),
    path("it/", it, name="it"),
    path("projects/", projects, name="projects"),
    path("api/category/", CategoryView.as_view()),
    path("api/product/", ProductView.as_view()),
    path("api/cart/", CartView.as_view()),
    path("api/genre/", GenreView.as_view()),
    path("api/poem/", PoemView.as_view()),
    path("shop/good/<int:good_id>", good, name="good"),
    path("shop/add_to_cart/<int:good_id>", add_to_cart, name="add_to_cart")
]