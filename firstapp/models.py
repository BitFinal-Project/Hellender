from django.db import models

# Create your models here.
class UserData(models.Model):
    
    uid = models.AutoField(primary_key=True)
    profile_image = models.CharField(max_length=255, blank=True, null=True)
    nickname_m =models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=255)  
    birthday = models.DateField()
    health_level = models.CharField(max_length=255, blank=True, null=True)
    flavor = models.CharField(max_length=255, blank=True, null=True)
    purpose = models.CharField(max_length=255, blank=True, null=True)
    health_time = models.CharField(max_length=255, blank=True, null=True)
    health_num = models.CharField(max_length=255, blank=True, null=True)
    location_num = models.CharField(max_length=255, blank=True, null=True)
    etc_hist = models.CharField(max_length=255, blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    exercise = models.CharField(max_length=255, blank=True, null=True)
    food = models.CharField(max_length=255, blank=True, null=True)
    feel = models.CharField(max_length=255, blank=True, null=True)
    cre_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    bmi_value = models.FloatField(blank=True, null=True)
    b_one = models.FloatField(blank=True, null=True)
    b_two = models.FloatField(blank=True, null=True)
    b_three = models.FloatField(blank=True, null=True)
    b_four = models.FloatField(blank=True, null=True)
    b_five = models.FloatField(blank=True, null=True)
    b_six = models.FloatField(blank=True, null=True)

class ResultFeedback(models.Model):
    user_data = models.ForeignKey(UserData, on_delete=models.CASCADE)

    rec_ac1 = models.TextField(blank=True)
    rec_ac2 = models.TextField(blank=True)
    rec_ac3 = models.TextField(blank=True)
    rec_fd1 = models.TextField(blank=True)
    rec_fd2 = models.TextField(blank=True)
    rec_fd3 = models.TextField(blank=True)
    rec_ta1 = models.TextField(blank=True)
    rec_ta2 = models.TextField(blank=True)
    rec_pd1  = models.TextField(blank=True)


