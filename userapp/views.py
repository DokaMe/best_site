from django.shortcuts import render, HttpResponse, HttpResponseRedirect

from userapp.forms import UserLoginForm, UserRegForm
from django.contrib import auth

# Create your views here.


def user_main(request):
    return HttpResponse(f"Главная userapp {request.user}")

# Gfhjkm999
def login(request):
    #print(request.session.keys())
    if request.method == "GET":
        login_form = UserLoginForm()
    else:
        # print(request.POST)
        login_form = UserLoginForm(data=request.POST)
        if login_form.is_valid():
            #print('valid')
            username = request.POST["username"]
            password = request.POST["password"]
            user = auth.authenticate(username=username, password=password)
            #print(user, request.user)
            if user:
                #print(user, request.user)
                auth.login(request, user)
                #print(user, request.user)

    context = {"form": login_form}
    return render(request, "login.html", context)


def registration(request):
    if request.method == "GET":
        reg_form = UserRegForm()
    else:
        reg_form = UserRegForm(data=request.POST)
        # print(request.POST)
        # print(reg_form.errors)
        if reg_form.is_valid():
            # print('valid')
            print(reg_form.cleaned_data)
            reg_form.save()
            return HttpResponseRedirect('/')
    context = {"form": reg_form}
    return render(request, "reg.html", context)

