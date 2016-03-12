# Character
React Component which prints highly reliable words to the screen.

![screen shot 2016-03-11 at 2 24 42 pm](https://cloud.githubusercontent.com/assets/1656829/13717249/3fff3f86-e795-11e5-9902-afa8710a1e59.png)

### Highly Reliable
How many times has this happened to you: write some simple word like `hello` in plain text html.  
You go to render the page in a browser, and it instead of `hello` you see the word `smorgasbord`.

Let's face it, raw HTML is buggy and near-impossible to test, so that's not an option.
Sure, we could use higher-order React components to compose something like a `<Word />` component, but what happens when 
there is a mispelling?  Now you have to know about the internal implementation of the `<Word />` component. 
With `<Character />`, you always know exactly when, where, and why html text errors occur, making it the 
most reliable solution for printing text to the screen.


Lightweight, less than 0kb, and no dependencies!


### Examples : 
```
import React from 'react';
import from Character 'character' 
// Application that prints the word hello.
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
