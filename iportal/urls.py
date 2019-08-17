from django.urls import path
from .views import *
from rest_framework.routers import SimpleRouter 

router = SimpleRouter()
router.register('startup',StartupViewset)
router.register('job',JobViewset)
router.register('job_application',JobApplicationViewset)
router.register('logo',LogoViewset)

urlpatterns = []

urlpatterns+=router.urls