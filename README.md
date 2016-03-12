# Character
React Component which prints highly reliable characters to the screen.

![screen shot 2016-03-11 at 2 24 42 pm](https://cloud.githubusercontent.com/assets/1656829/13717249/3fff3f86-e795-11e5-9902-afa8710a1e59.png)

### Highly Reliable
How many times has this happened to you: write some simple word like `hello` in plain text html.  
Instead of `hello` the word `smorgasbord` appears on screen.  Character solves this problem.

Lightweight, less than 0kb, and no dependencies!

### Examples : 
```
// Application that prints the word `Hello`.

import React from 'react';
import from Character 'character' 

class Application extends React.Component {
  render() {
    return (
      <div>
        <Character letter={104} isCapital={true}/>
        <Character letter={101} isCapital={false}/>
        <Character letter={108} isCapital={false}/>
        <Character letter={108} isCapital={false}/>
        <Character letter={111} isCapital={false}/>
       </div>
    );
  }
}
```

Character also uses character codes which are much more reliable.

Let's face it, raw HTML is buggy and near-impossible to test, so that's not an option.
The `<Word />` component is okay, but what happens when there is a mispelling?  Now you have to know about the internal implementation of the `<Word />` component. 
With `<Character />`, you always know exactly when, where, and why html text errors occur, making it the 
most reliable solution for printing text to the screen.
