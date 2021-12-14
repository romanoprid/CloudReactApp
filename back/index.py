import json
import awsgi
import boto3
import os
import ast
from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4

AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
client = boto3.client("dynamodb", region_name='us-west-2', aws_access_key_id=AWS_ACCESS_KEY_ID, aws_secret_access_key=AWS_SECRET_ACCESS_KEY)
BASE_ROUTE = "/department"
TABLE = os.environ.get("STORAGE_NEWPOSTDB_NAME")


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})


@app.route(BASE_ROUTE, methods=['GET'])
def list_department():
    response = client.scan(TableName=TABLE)
    data = response['Items']
    while response.get('LastEvaluatedKey'):
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
        data.extend(response['Items'])
    return jsonify(data)


@app.route(BASE_ROUTE, methods=['POST'])
def create_department():
    request_json = request.get_json()
    if request_json.get("SECRET_KEY") != "_)(*&^%":
        return jsonify(message="Wrong SECRET KEY")
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'SECRET_KEY': {'S': request_json.get("SECRET_KEY")},
        'department': {'S': request_json.get("department")},
        'delivery': {'S': request_json.get("delivery")},
        'person': {'S': request_json.get("person")},
        'deliveryInfo': {'S': request_json.get("deliveryInfo")},
        'sensor_id': {'S': request_json.get("sensor_id")},
        'sensor_type': {'S': request_json.get("sensor_type")},
        'timestamp': {'S': request_json.get("timestamp")},


    })
    return jsonify(message="item created")


@app.route(BASE_ROUTE + '/<department_id>', methods=['GET'])
def get_department(department_id):
    item = client.get_item(TableName=TABLE, Key={
        'id': {
            'S': department_id
        }
    })
    return jsonify(data=item)


# @app.route(BASE_ROUTE + '/<department_id>', methods=['PUT'])
# def update_department(department_id):
#     client.update_item(
#         TableName=TABLE,
#         Key={'id': {'S': department_id}},
#         UpdateExpression='SET #department = :department, #delivery = :delivery, #person = :person, #deliveryInfo = :deliveryInfo, #sensor_id = :sensor_id, #sensor_type = :sensor_type, #timestamp = :timestamp',

#         ExpressionAttributeNames={
#             '#department': 'department',
#             '#delivery': 'delivery',
#             '#person': 'person',
#             '#deliveryInfo': 'deliveryInfo',


#         },
#         ExpressionAttributeValues={
#             ':department': {'S': request.json['department']},
#             ':delivery': {'S': request.json['delivery']},
#             ':person': {'S': request.json['person']},
#             ':deliveryInfo': {'S': request.json['deliveryInfo']},

#         }
#     )
#     return jsonify(message="item updated")


@app.route(BASE_ROUTE + '/<department_id>', methods=['DELETE'])
def delete_department(department_id):
    client.delete_item(
        TableName=TABLE,
        Key={'id': {'S': department_id}}
    )
    return jsonify(message="item deleted")


def handler(event, context):
    return awsgi.response(app, event, context)
if __name__ == '__main__':
    app.run(host='0.0.0.0')