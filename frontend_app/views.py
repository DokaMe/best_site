from django.shortcuts import render

# Create your views here.

def test_react(request):
    
    return render(request, 'frontend_app/index.html')