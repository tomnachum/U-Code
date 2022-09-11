def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError as err:
        print(str(err)) 


# tests
get_list_element([1,2,3],2)
get_list_element([1,2,3],4)
get_list_element([1,2,3],-1)