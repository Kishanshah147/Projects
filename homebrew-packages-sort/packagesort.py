import json

def install_sort(package): #sorting fuction with package argument
    return package ['analyics']['30d'] #most installed package from the last 30 days

with open('package_info.json', 'r') as f:
    data = json.load(f)

#data = [item for item in data if 'video' in item['desc']] (To sort by keyword)
data.sort(key=install_sort, reverse=True) #Sort data in place and pass in the fuction + reverse = true to sort in decending order

data_str = json.dumps(data, indent=2) #to get the top 5 packages -- data_str = json.dumps(data[:5], indent=2)
print(data_str)


