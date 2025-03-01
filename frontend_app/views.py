from django.shortcuts import render

# Create your views here.

def test_react(request, *args, **kwargs):
    return render(request, 'frontend_app/index.html')