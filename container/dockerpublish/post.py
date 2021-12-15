import requests
import json
import time
from random import randint


url = 'http://www.lab1cloud.xyz/api/'

headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

while True:
    myobj = {"timestamp": str(time.time()), "sensor_id": "4",
             "sensor_type": "THING4",
             "department": str(str(randint(0, 100))),
             "delivery": str(randint(0, 100)),
             "person": str(randint(0, 100)),
             "deliveryInfo": str(randint(0, 100)),
             "SECRET_KEY": "_)(*&^%"}
    x = requests.post(url, data=json.dumps(myobj), headers=headers)
    print("SEND ITEM:", myobj)
    print(x.text)
    time.sleep(10)