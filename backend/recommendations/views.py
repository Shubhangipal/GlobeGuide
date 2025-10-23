from django.shortcuts import render

# Create your views here.
# recommendations/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def get_recommendations(request): # <-- Make sure this name is spelled correctly
    """
    Accepts user preferences and returns a list of recommended destinations.
    """
    mock_destinations = [
        {
            "id": 1,
            "name": "Paris, France",
            "description": "The city of light, art, and romance.",
        },
        {
            "id": 2,
            "name": "Kyoto, Japan",
            "description": "The cultural heart of Japan, famous for its temples.",
        }
    ]
    return Response(mock_destinations)