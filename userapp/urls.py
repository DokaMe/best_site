from django.urls import path, include
from userapp.views import login, user_main, registration

app_name = "userapp"

urlpatterns = [
    path("", user_main, name="user_main"),
    path("login/", login, name='login'),
    path("registration/", registration, name="registration"),
]
