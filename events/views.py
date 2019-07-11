from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer
from decorators import ecell_user
from django.http import HttpResponse
import csv


@api_view(['GET', ])
def get_events(request, year):

    res_message = ""
    res_status = ""
    res_data = []

    events = Event.objects.filter(year=year, flag=True)
    if len(events) > 0:
        res_data = EventSerializer(
            events, many=True, context={
                'request': request}).data
        res_message = "Events Fetched successfully."
        res_status = status.HTTP_200_OK
    else:
        res_message = "Events Couldn't be fetched"
        res_status = status.HTTP_404_NOT_FOUND

    return Response({
        "message": res_message,
        "data": res_data
    }, status=res_status)


@api_view(['POST', ])
@ecell_user
def add_event(request):
    if request.ecelluser.user_type in ['GST', 'VLT', 'CAB']:
        return Response({
            "message": "Unauthorized to view this page"
        }, status=status.HTTP_401_UNAUTHORIZED)

    res_message = ""
    request.data['ecell_user'] = request.ecelluser.pk
    event = EventSerializer(data=request.data)

    try:
        event.is_valid(raise_exception=True)
    except Exception as e:
        error = event.errors
        error_msg = ""
        for err in error:
            error_msg += "Error in field:"+str(err)+" -"+str(error[err][0]) + " "
        res_message = error_msg
        res_status = status.HTTP_400_BAD_REQUEST
    else:
        event.save()
        res_message = "Event Added Successfully"
        res_status = status.HTTP_200_OK

    return Response({
        "message": res_message
    }, status=res_status)


@api_view(['GET', ])
@permission_classes((IsAdminUser,))
def generate_spreadsheet(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="events.csv"'

    writer = csv.writer(response)
    writer.writerow(['Name', 'Venue', 'Date', 'Time', 'Details', 'Coverpic',
                     'Icon', 'Email', 'Flag'])

    events = Event.objects.all().values_list('name', 'venue', 'date', 'time',
                                             'details', 'cover_pic', 'icon', 'email', 'flag')

    for event in events:
        writer.writerow(event)

    return response