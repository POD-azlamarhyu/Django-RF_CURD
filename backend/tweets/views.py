from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.generics import * 
from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class TweetView(APIView):
    def get(self,request,format=None):
        tweet = Tweets.objects.all()
        serializer = TweetSerializer(tweet,many=True)
        return Response(serializer.data)

class TweetDetailView(APIView):
    def get_object(self,pk,format=None):
        try:
            return Tweets.objects.get(id=pk)
        except Tweets.DoesNotExist:
            raise Http404

    def get(self,request,pk,format=None):
        tweet = self.get_object(pk)
        serializer = TweetSerializer(tweet)
        return Response(serializer.data)

    def put(self,request,pk,format=None):
        tweet = self.get_object(pk)
        serializers = TweetSerializer(tweet,data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,pk,format=None):
        tweet = self.get_object(pk)
        tweet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TweetCreateView(APIView):
    # queryset = Tweets.objects.all()
    # serializer_class = TweetSerializer
    def get(self,request,format=None):
        tweet = Tweets.objects.all()
        serializer = TweetSerializer(tweet,many=True)
        return Response(serializer.data)

    def post(self,request,format=None):
        serializer = TweetSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
