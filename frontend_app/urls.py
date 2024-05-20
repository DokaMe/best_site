from django.urls import path
from frontend_app.views import test_react

app_name = "frontend" 

urlpatterns=[
    path("", test_react),
    path("shop/", test_react),
    path("it/",test_react),
    path("texts/",test_react),
    path("projects/",test_react),
    path("test/",test_react),
    path("poems/",test_react),
]