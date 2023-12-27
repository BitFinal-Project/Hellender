from rest_framework import serializers
from .models import UserData,ResultFeedback


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserData
        fields='__all__'

    
class ResultFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model=ResultFeedback
        fields='__all__'

