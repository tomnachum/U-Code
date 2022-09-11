from posixpath import split


def top_common(text):
    word_counter = {}
    for word in text.split(" "):
        if word in word_counter:
            word_counter[word]+=1
        else:
            word_counter[word] = 1
    
    i=0
    while i<5 and len(word_counter.keys())>5:
        min_counter = float('inf')
        min_word = ''
        for w,c in word_counter.items():
            if c<min_counter:
                min_counter=c
                min_word=w
        del word_counter[min_word]
    return word_counter

print(top_common("wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"))