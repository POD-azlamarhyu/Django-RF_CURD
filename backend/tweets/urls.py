from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name="tweets"
urlpatterns = [
    path('tweet/',TweetView.as_view()),
    path('tweet/<int:pk>',TweetDetailView.as_view()),
    path('tweet/create',TweetCreateView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)