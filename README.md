# Frontend for the Employee CRUD operations


## Docs

  - [Objectives](#objective)
  - [Codebase](#codebase)
    - [Technologies](#technologies)
    - [Folder Structure](#folder-structure)
    - [Code Style](#code-style)
  - [First time setup](#first-time-setup)
    - [Running the app locally](#running-the-app-locally)
- [Technical](#Technical)
  - [Deployment](#Deployment)
- [Remarks](#Remarks)
 

### Objective 
Create a simple CRUD application for an employee management



### Technologies
- ** React Application **: Almost all of the code you'll touch in this codebase will be Typescript.

- **Front End**
	- React
    - Typescript
    - Redux
    - Redux-saga
    - Styled-components
    - Axios


### Folder structure

Client 

```sh
frontend/
├── components
├──── forms              # contains major form components like new and edit forms 
├──── buttons            # contains buttons to be used in the page
├──── modal              # contains the modals and the styles   
├──── table              # contains the table, rows and their styles
├── redux                # contains all redux related actions reducers and types 
├──── reducers           # contains the employee reducers   
├──── sagas              # contains redux sagas to be called async with dispatch calls  
├──── services           # services hold all the major API calls 
├──── store              # 
├──── types              # major types to be used like employee   
└── utils                # hHere holds the design system guidelines like colors and typography 
```


## First time setup

### Running the app locally

- ### Backend

```sh
git clone https://github.com/Dru-Go/React-Redux-Typescript.git 

npm i

npm start

```
## Technical


## Remarks

- Learned a huge deal about redux saga and typescript :+1:
- May have used some amount of the type any, but coming from a background of javascript. Types were only used with prop types :broken_heart:
- May have used a great deal of emojis in my commits just to make it more attractive :blush: :smile:
- Really loved using redux saga :thumbsup:  
- Took me some time but i did the best i could with what i have, Very greatfull :smiley: :relaxed: :joy: