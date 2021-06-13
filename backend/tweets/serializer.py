from rest_framework import serializers
from .models import *

# class TweetSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     text = serializers.textField(required=False,allow_blank=True,max_length=1000)
#     image = serializers.FileField(allow_empty_file=True)
#     video = serializers.FileField(allow_empty_file=True)
#     create_at = serializers.DateTimeField(read_only=True)
#     update_at = serializers.DateTimeField(read_only=True)

class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweets
        fields = ('id','text','image','video','create_at','update_at')