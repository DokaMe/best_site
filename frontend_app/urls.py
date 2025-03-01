from django.urls import path, re_path
from frontend_app.views import test_react


app_name = "frontend" 

urlpatterns=[
    re_path(r"^(?!.*\b(old|user|admin)\b).*", test_react)
]