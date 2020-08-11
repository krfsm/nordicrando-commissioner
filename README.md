# nordicrando-commissioner

Tool for the Nordic The Legend of Zelda: A Link to the Past Randomizer Community Races

## Structure

* The `options.json` file contains the various options and their potential settings for the randomizer. Each option has a default, which is indicated in the file too.
* The `wishes-vetos.json` file has the, well, wishes and vetos of the racers for each race. The JSON is structured as follows:
  * `race` is an integer, based on what race in order this is.
  * `racers` is an object containing `racer1` and `racer2`, which are strings containing the names of the racers. This can be expanded to more racers, just add more entries (`racer3`, `racer4`, etc) in the object and elsewhere in the file.
  * `selections` is an object containing objects with the option settings `racer1` and `racer2` have each chosen.
  * `vetos` is an object containing arrays with the option settings `racer1` and `racer2` have each chosen to vetos (that is, they want to force this option to use the default setting).
  * `collisionOutcomes` is an object with the options that more than one racers have chosen (and no one has vetoed). Each option has the winning racer as value, which is then used to display whose outcome are selected.
* The `translations.json` file just has conversions of the names of the options and settings from the `options.json` to proper English.
* The `nordicrando.js` script grabs the various JSONs, parses them, and outputs something resembling an informative webpage.
