from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin,BaseUserManager,_user_has_perm
from django.utils import timezone
from django.core import validators
from django.utils.translation import ugettext_lazy as _
from django.core.mail import send_mail
# Create your models here.

class AccountManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self,request_data,**kwargs):
        now = timezone.now()
        if not request_data['email']:
            raise ValueError("Users must have an email address.")
        
        
        user = self.model(
            username = request_data["username"],
            email = self.normalize_email(request_data['email']),
            is_active = True,
            last_login = now,
            date_joined = now,
        )
        user.set_password(request_data['password'])
        user.save(using=self._db)
        return user


    def create_superuser(self,username,email,password,**extra_fields):
        request = {
            'username':username,
            'email':email,
            'password':password
        }

        user = self.create_user(request)
        user.is_active =True
        user.is_staff = True
        user.is_admin = True
        user.save(using=self._db)

        return user


class Accounts(AbstractBaseUser,PermissionsMixin):
    username = models.CharField(_('username'),max_length=100,unique=True)
    email = models.EmailField(verbose_name="email address",max_length=255,unique=True)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    is_admin = models.BooleanField(default = False)
    date_joined = models.DateTimeField(_('date joined'),default=timezone.now)

    objects = AccountManager()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    
 
    class Meta:
        db_table = 'accounts'
        swappable = 'AUTH_USER_MODEL'

    def email_user(self,subjects,message,from_email=None,**kwargs):
        send_mail(subjects,message,from_email,[self.email],**kwargs)
    
    def username(self):
        return self.email