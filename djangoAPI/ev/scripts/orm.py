from ..models import EVCategory, EVItem, EVStore, EVSuperCategory
from ..serializers import EVItemSerializer


def run():
#     cat = EVCategory.objects.filter(name='Food').values_list('id', flat=True)
#     print(cat)

#     return

# def run():
#     cat = EVCategory.objects.filter(name='Food')
#     print(cat)
    
#     for i in cat:
#         n = i.items.values_list()
#         print(n)


    stores = EVStore.objects.filter(name="Tasty")
    print(stores)
    
    all_items = []
    for store in stores:
        stcat = store.category.all()
        print(stcat)
        for st in stcat:
            items = st.items.all() #error
            print(items)
    #         serializer = EVItemSerializer(items, many=True)
    #         all_items.extend(serializer.data)

        # return Response(all_items)