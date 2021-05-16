#!/bin/bash

function create() {
    cd 
    python create.py $1
    cd /Users/kishanshah/workspace/Automating-noteTaking/$1
    git init
    git remote add origin git@github.com:Kishanshah147/$1.git
    touch README.md
    git add.
    git commit -m "Initial Commit"
    git push -u origin master
    code .
}

function nfe() {
    cd 
    cd /Users/kishanshah/workspace/Automating-noteTaking
    python notes.py $"nfe" $1 $2 $3
    cd $(pbpaste)
}

function on() {
    pwd | pbcopy 
    cd
    cd /Users/kishanshah/workspace/Automating-noteTaking
    python notes.py $"on" $1 $2
    cd $(pbpaste)
}

function n() {
    pwd | pbcopy 
    cd 
    cd /Users/kishanshah/workspace/Automating-noteTaking
    python notes.py $"n" $1
    cd $(pbpaste)
}


function ne() {
    pwd | pbcopy 
    cd 
    cd /Users/kishanshah/workspace/Automating-noteTaking
    python notes.py $"ne" $1 $2
    cd $(pbpaste)
}

function fs() {
    pwd | pbcopy 
    cd 
    cd /Users/kishanshah/workspace/Automating-noteTaking
    python notes.py $"fs" $1 $2
    cd $(pbpaste)
}

# source ~/my_commands.sh