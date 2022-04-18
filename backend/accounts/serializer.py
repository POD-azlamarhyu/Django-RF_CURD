from dataclasses import field
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_jwt.settings import api_settings
from .models import Accounts,AccountManager

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=Accounts.objects.all())]
            )
    username = serializers.CharField(
            validators=[UniqueValidator(queryset=Accounts.objects.all())]
            )
    password = serializers.CharField(min_length=10)
    
    class Meta:
        model=Accounts
        field = ['id','username','email','password']
        read_only_field = ['is_active','date_joined']