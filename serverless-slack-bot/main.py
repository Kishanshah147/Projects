import slack
import os
from pathlib import Path
from dotenv import load_dotenv
from flask import Flask
from slackeventsapi import SlackEventAdapter

env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

app = Flask(__name__)
slack_event_adapter = SlackEventAdapter(os.environ['SIGNING_SECRET'],'/event-handler', app)

client = slack.WebClient(token=os.environ['SLACK_TOKEN'])

client.chat_postMessage(channel='#test', text='Hello world')

if __name__ == "main":
    app.run(debug=True)
