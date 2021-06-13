from django.db import models

# Create your models here.

class Tweets(models.Model):
    #id = models.AutoField(primary_key=True)
    text = models.TextField(max_length=1000,blank=True,null=True)
    image = models.FileField(upload_to='images/',blank=True,null=True)
    video = models.FileField(upload_to='videos/',blank=True,null=True)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    

    class Meta:
        ordering=['-create_at']
        verbose_name = "ツイート"
        verbose_name_plural = "ツイート"
