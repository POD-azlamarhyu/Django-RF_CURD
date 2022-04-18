from django.conf.urls import include,url
from rest_framework import routers
from .views import UserRegister
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    url(r'^login/$',obtain_jwt_token),
    url(r'^register/$',UserRegister.as_view()),
    
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)