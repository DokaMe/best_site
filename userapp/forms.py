from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from userapp.models import User


class UserLoginForm(AuthenticationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "aoa", "placeholder": "ник"})
    )

    class Meta:
        model = User
        fields = ["username", "password"]

# тут класс
# first_name last_name username email password1 password2
class UserRegForm(UserCreationForm):
    username = forms.CharField(
        widget=forms.TextInput(attrs={"class": "aoa"})
    )
    class Meta:
        model = User
        fields = ["first_name", "last_name", "username","email", "password1", "password2" ]