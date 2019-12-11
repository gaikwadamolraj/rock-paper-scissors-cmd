# rock-paper-scissors-cmd-game
A simple command line game.

# Information

- [Setup Instructions](#instructions)
- [How to play](#how-to-play)
- [Enhancement](#enhancement)

## Setup Instructions


Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm run start
```


Execute unit test cases:

```sh
$ npm run test
```

## How to play
Start the game using npm run start command.
It show the below options:

```
Select type of Game? 
 ---------------
 1 - Comp vs Comp
 2 - Comp vs Player
 3 - Exit Game 
 --------------- 
```

Then Input your choice;
 - 1 - Input will start Comp VS Comp game. In this two computers will play.
 - 2 - Input will start Comp VS Player game. In that you need to input your choice of weapen.
 
 ```
 --------------- 
 Player 2 Input your choice? 
 Select 
 1 for rock 
 2 for scissors 
 3 for paper 
  
 ---------------
 ```

  Input your choice it will show you result.

  ```
  Player 1 chosen: scissors
  Player 2 chosen: scissors 

  RESULT:  Players 1 and 2 attempt to cut each other's scissors. What? TIE.
  ```

If you want to continue with same type of game then Give input 1.
If you input any value then it will start menu.


```
Select type of Game? 
 ---------------
 1 - Comp vs Comp
 2 - Comp vs Player
 3 - Exit Game 
 --------------- 
```


If you input 3 then it will stop the current game.



## Enhancement

We can enhance game with multiple ways. I will be give below some enhancement option that we can do.
- We can add Player VS Player option easily  ( min code change) with current code.
- We will accept player name at the start.
- We will calculate score upton number of games.
- We will expose the game over REST api.