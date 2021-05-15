import json
import urllib3

def lambda_handler(event, context):
    http = urllib3.PoolManager()
    
    data = {"text": "sample message from lambda_handler"}
    
    r = http.request("POST", "https://hooks.slack.com/services/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", body = json.dumps(data), headers = {"Content-Type": "application/json"})
    
    if "challenge" in event:
        return event["challenge"]
    

    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('success')
    }


