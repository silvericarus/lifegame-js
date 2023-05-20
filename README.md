# John Conway's Game of Life
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Game_of_life_animated_glider_2.gif" width="91.5px">

<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed."/></a>
<br>
This project is about math investigation and trying (with the best looks and success, I hope) to program the [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using Javascript for it's use in other projects and out of pure curiosity, as well as getting better as a programmer. además de mi mejora como programador. I'l now explain how this <b>cellular automaton</b> works on the inside.
### Basics and history of the Game of Life
The Game of Life, created by John Horton Conway in 1970, is a zero-player [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton). Its evolution is determined by an initial state without any additional intervention. This simple yet captivating game demonstrates emergent behavior and self-organization. It has attracted interest from scientists, mathematicians, and economists as it showcases how complex patterns can arise from basic rules. The Game of Life is renowned for its diverse patterns and has contributed to the study of artificial life and computational universality.
### Ok, but how does it work?
The "game board" is a flat grid made up of squares (the "cells") that extends infinitely in all directions. Therefore, each cell has 8 "neighbour" cells, which are the ones adjacent to it, including diagonals. Cells have two states: they are either "alive" or "dead" (or "on" and "off"). The state of cells evolves over discrete units of time (you could say in turns). The state of all cells is taken into account to calculate their state in the next turn. All cells are updated simultaneously in each turn, following these rules:
- Birth: If a dead cell has exactly 3 live neighbouring cells, it "comes to life" (meaning it will be alive in the next turn).
- Death: A live cell can die due to one of two cases:
	- Overpopulation: If it has more than three neighbours.
	- Isolation: If it has only one neighbour or none.
- Survival: A cell stays alive if it has 2 or 3 neighbours around it.
### It sounds interesing, where can I find more information on this?
- The spanish wikipedia page for the game has more information, as well as live games, I recommend it instead of the english one.
- It also show that people has thought of variations of the original game rules, known as 23/3, the ones in my js. You can check them [here](https://es.wikipedia.org/wiki/Juego_de_la_vida#Variantes).
- This [page](http://www.math.com/students/wonders/life/life.html) explains the kind of "cells" a Game of Life can generate.
- Here you can check other "cells", which are put into the Lexicon when discovered, you can check each type [here](https://playgameoflife.com/).
- You can use [this](https://carlosmaesogonzalez.neocities.org/juegovidageneralizado/juegovidageneralizado) one to change the rules and check how chaotic or stable each one can get.
