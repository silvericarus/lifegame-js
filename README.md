# John Conway's Game of Life
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Game_of_life_animated_glider_2.gif" width="91.5px">
<p style="float:left;">
	<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><img src="https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png" alt="CC BY-NC-SA 4.0 License"></a>
	<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed."></a>
	<img src="https://4.vercel.app/github/languageall/silvericarus/lifegame-js">
</p>
<p>This project is about math investigation and trying (with the best looks and success, I hope) to program the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Game of Life</a> using Javascript for its use in other projects and out of pure curiosity, as well as getting better as a programmer. además de mi mejora como programador. I'll now explain how this <b>cellular automaton</b> works on the inside.</p>

<h3>Basics and history of the Game of Life</h3>
<p>The Game of Life, created by John Horton Conway in 1970, is a zero-player <a href="https://en.wikipedia.org/wiki/Cellular_automaton">cellular automaton</a>. Its evolution is determined by an initial state without any additional intervention. This simple yet captivating game demonstrates emergent behavior and self-organization. It has attracted interest from scientists, mathematicians, and economists as it showcases how complex patterns can arise from basic rules. The Game of Life is renowned for its diverse patterns and has contributed to the study of artificial life and computational universality.</p>

<h3>Ok, but how does it work?</h3>
<p>The "game board" is a flat grid made up of squares (the "cells") that extends infinitely in all directions. Therefore, each cell has 8 "neighbour" cells, which are the ones adjacent to it, including diagonals. Cells have two states: they are either "alive" or "dead" (or "on" and "off"). The state of cells evolves over discrete units of time (you could say in turns). The state of all cells is taken into account to calculate their state in the next turn. All cells are updated simultaneously in each turn, following these rules:</p>
<ul>
<li>Birth: If a dead cell has exactly 3 live neighbouring cells, it "comes to life" (meaning it will be alive in the next turn).</li>
<li>Death: A live cell can die due to one of two cases:
	<ul>
	<li>Overpopulation: If it has more than three neighbours.</li>
	<li>Isolation: If it has only one neighbour or none.</li>
	</ul>
</li>
<li>Survival: A cell stays alive if it has 2 or 3 neighbours around it.</li>
</ul>
<h3>It sounds interesting, where can I find more information on this?</h3>
<ul>
<li>The <a href="https://es.wikipedia.org/wiki/Juego_de_la_vida">Spanish Wikipedia page</a> for the game has more information, as well as live games, I recommend it instead of the English one.</li>
<li>It also shows that people have thought of variations of the original game rules, known as 23/3, the ones in my JS. You can check them <a href="https://es.wikipedia.org/wiki/Juego_de_la_vida#Variantes">here</a>.</li>
<li>This <a href="http://www.math.com/students/wonders/life/life.html">page</a> explains the kind of "cells" a Game of Life can generate.</li>
<li>Here you can check other "cells", which are put into the Lexicon when discovered, you can check each type <a href="https://playgameoflife.com/">here</a>.</li>
<li>You can use <a href="https://carlosmaesogonzalez.neocities.org/juegovidageneralizado/juegovidageneralizado">this</a> one to change the rules and check how chaotic or stable each one can get.</li>
</ul>
