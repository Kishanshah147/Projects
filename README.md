# A collection of my pet projects and prototypes

[Auto Text Generator](https://github.com/Kishanshah147/Projects/tree/master/auto-text-generator)
----------------------------------------------------------------------------------------------------------------------------

Serverless text generation App using Open GPT model deployed on AWS Lambada

Requirements: 
Function dependencies, for example:

torch
transformers 
OR 
pytorch-transformers==1.1.0
requests==2.20.0
numpy==1.16.1

OpenAI's GPT-2: https://openai.com/blog/better-language-models for a pre-trained model

----------------------------------------------------------------------------------------------------------------------------

[Automating Notes](https://github.com/Kishanshah147/Projects/tree/master/automating-notes)
----------------------------------------------------------------------------------------------------------------------------

Automating notes using simple terminal commands

Command Sequence:

`note MyNote folder Notes ext .txt`

`nfe myNote Notes .txt` 

`ne myNote .txt`

`n myNote`

`f Notes`

Requirements:

- Command for creating a note
- creates a new text file
- adds it in the right directory
- creates folders
- open text files in sublime text
- creates other filetypes (.py, .js, etc) 
- navigates to the notes folder
- check if the folder named Notes exists
- if no folder named Notes exists, create Notes folder
- navigates into Notes folder
- check if file already exists
- if file exists then open, else create and open file MyNote.txt

----------------------------------------------------------------------------------------------------------------------------

[AWS Lex Lambda Bot](https://github.com/Kishanshah147/Projects/tree/master/aws-lex-lambda-bot)
----------------------------------------------------------------------------------------------------------------------------

Interactive prototype using AWS' Conversational AI service Lex and Lambda functions (in node.js) to serve as fulfillment handlers to the chatbot. 

References: https://docs.aws.amazon.com/lambda/latest/dg/services-lex.html
https://docs.aws.amazon.com/lex/latest/dg/using-lambda.html

----------------------------------------------------------------------------------------------------------------------------

[Connect4](https://github.com/Kishanshah147/Projects/tree/master/connect4)
----------------------------------------------------------------------------------------------------------------------------

Connect4 game in python, incorporates an "Intelligent Agent" that makes use of Minimax with Alpha beta pruning algorithms to oppose and possibly prevent the user from winning. For more detail refer to the documentation.pdf under https://github.com/Kishanshah147/Projects/blob/master/connect4/documentation.pdf

----------------------------------------------------------------------------------------------------------------------------

[Homebrew Packages Sort](https://github.com/Kishanshah147/Projects/tree/master/homebrew-packages-sort)
----------------------------------------------------------------------------------------------------------------------------

Python script to fetch all homebrew packages via GET https://formulae.brew.sh/api/formula.json and their details via GET https://formulae.brew.sh/api/formula/{package_name}.json to sort them

Written in Python 2.7. Last tested in Python 3.6.3.

----------------------------------------------------------------------------------------------------------------------------

[Othello](https://github.com/Kishanshah147/Projects/tree/master/othello)
----------------------------------------------------------------------------------------------------------------------------

Othello game in python, using Minimax as well as alpha beta pruning. Documentation under https://github.com/Kishanshah147/Projects/tree/master/othello/documentation.pdf

----------------------------------------------------------------------------------------------------------------------------


[Serverless Slack Bot](https://github.com/Kishanshah147/Projects/tree/master/serverless-slack-bot)
----------------------------------------------------------------------------------------------------------------------------

Serverless Slackbot to programmatically  fulfill operations

**Environment:**

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

**Integration Flow:**

![ServerlessBot-Architecture](https://user-images.githubusercontent.com/31640015/117374368-e7542e00-ae81-11eb-8dbc-06e18cc1ff03.jpg)

----------------------------------------------------------------------------------------------------------------------------
