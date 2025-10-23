# recommendations/urls.py  <-- THIS IS YOUR NEW FILE

from django.urls import path
from . import views  # '.' means from the current directory

urlpatterns = [
    # This maps the URL '.../api/recommendations/' to the
    # 'get_recommendations' view function in your views.py
    path('recommendations/', views.get_recommendations, name='get_recommendations'),
]