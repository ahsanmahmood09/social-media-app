# Social App

## About The Project

This is a small social application built for learning purpose. User can come and create their account. After login they
can search for other people and follow them. After following someone they will be able to see their posts if there are
any. User can like someone's post. User can upload their post as well with the image or without it. They can delete
their posts. User can see his/her own profile and the other users profile as well.

## Built With

<ul>
<li>React Js</li>
<li>Redux-Toolkit</li>
<li>Tailwind Css</li>
<li>Nodejs</li>
<li>Express js</li>
<li>Mongo db</li>
</ul>

# Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and
running follow these simple example steps.

## Prerequisites

<ul>
<li>nodejs</li>
<li>npm</li>
</ul>

## Installation

## client

cd into the client directory and create .env file from .env.example file, the contents are the same.

.env

````
REACT_APP_API_URL = 'http://localhost:5000/api'
REACT_APP_PUBLIC_FOLDER = 'http://localhost:5000/'
````

Terminal or Command Prompt

``` cmd
npm install
```

``` cmd
npm start
```

## server

cd into the server directory and create .env file

.env

````
MONGO_URI = mongodb+srv://username:password@cluster0.qnlgx.mongodb.net/Database-Name?retryWrites=true&w=majority
PORT = 5000
JWT_SECRET = SECRET-KEY-OF-YOUR-CHOICE
````

For MONGO_URI you have to create account on https://account.mongodb.com/account/register and create a collection and get you connection string.

After setting up .env Run:

``` cmd
npm install
```

``` cmd
npm start
```

Now Visit http://localhost:3000/

