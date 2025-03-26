from django.http import HttpResponse


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count, Q
from .models import Item
from .serializers import ItemSerializer





def home(request):
    return HttpResponse('<h1>Item API</h1>')

@api_view(['GET', 'POST'])
def item_list_create(request):
    if request.method == 'GET':
        # Fetch all items
        items = Item.objects.all()

        search_query = request.GET.get('search', None)
        if search_query:
            items = items.filter(Q(name__icontains=search_query) | Q(category__icontains=search_query))

        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PUT', 'DELETE'])
def item_detail(request, id):
    try:
        item = Item.objects.get(pk=id)
    except Item.DoesNotExist:
        return Response({'error': 'Item not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = ItemSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        # Delete an item
        item.delete()
        return Response({'message': 'Item deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def bucket_by_category(request):
    categories = Item.objects.values('category').annotate(count=Count('id'))
    return Response(categories, status=status.HTTP_200_OK)
