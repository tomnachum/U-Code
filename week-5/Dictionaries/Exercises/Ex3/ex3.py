country_populations={}

country_populations["Ghana"]=28
country_populations["Brazil"]=209
country_populations["Mongolia"]=3

country ="Brazil"

c = country_populations[country]
print(f"{country} is a {'BIG' if c>=50 else 'small'} country")