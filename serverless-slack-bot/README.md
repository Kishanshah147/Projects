# serverles-slack-bot
Serverless Slackbot to programmatically  fulfill operations

# Environment

Slack Events API to receive/ trigger message events: https://api.slack.com/apis/connections/events-api#receiving_events, https://api.slack.com/events/message
Slack API or  incoming hook to POST message back to the channel:
https://api.slack.com/methods/chat.postMessage, https://api.slack.com/messaging/webhooks

AWS API gateway endpoint handle the incoming POST requests from Slack event subscription:
https://docs.aws.amazon.com/apigateway/api-reference/making-http-requests, 
https://api.slack.com/events/url_verification 

AWS Lambda for processing the events & to act as the fulfilment handler to the events:
https://aws.amazon.com/lambda

<img width="683" alt="Screen Shot 2021-05-06 at 3 57 16 PM" src="https://user-images.githubusercontent.com/31640015/117375442-d3113080-ae83-11eb-8869-32a31c93e1c1.png">

**Note**: Add your own credentails and endpoints to test. The API gateway endpoint and slack hook used in the lamdba_functions.py file are inactive, you're likely to recieve a 404 error in response. 

# Integration Flow

![ServerlessBot-Architecture](https://user-images.githubusercontent.com/31640015/117374368-e7542e00-ae81-11eb-8dbc-06e18cc1ff03.jpg)

