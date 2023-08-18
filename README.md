# MakeCode Extension for Emakefun Speech Recognizer

## Introduction

- This project implements a MakeCode extension for Microbit to integrate the Emakefun matrix keyboard module's capabilities on the micro:bit.

- Through this extension, you can easily interface with the Emakefun matrix keyboard to detect key presses and read input in the MakeCode Blocks editor.

- You can get this module [here]().

## Hardware

TODO

## Usage

- Use the createMatrixKeyboard block to create an instance of the matrix keyboard and configure the I2C address.

- In a loop, use the isClicked block to check if a key is clicked and get the return value.

- Optionally, based on the return value of isClicked, you can perform appropriate actions. For example:

  - If a number key is clicked, display the corresponding number.
  
  - If a letter key is clicked, display the corresponding letter.
  
  - If a special character key is clicked, display the character.

## Example

You can copy the code from below or view the project (blocks and JavaScript view) [here]().

```blocks
let matrix_keyboard = Emakefun.createMatrixKeyboard(0x50)
basic.forever(function() {
  if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_0)) {
    basic.showNumber(0)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_1)) {
    basic.showNumber(1)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_2)) {
    basic.showNumber(2)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_3)) {
    basic.showNumber(3)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_4)) {
    basic.showNumber(4)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_5)) {
    basic.showNumber(5)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_6)) {
    basic.showNumber(6)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_7)) {
    basic.showNumber(7)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_8)) {
    basic.showNumber(8)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_9)) {
    basic.showNumber(9)
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_A)) {
    basic.showString('A')
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_B)) {
    basic.showString('B')
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_C)) {
    basic.showString('C')
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_D)) {
    basic.showString('D')
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_ASTERISK)) {
    basic.showString('*')
  } else if (matrix_keyboard.isClicked(Emakefun.MatrixKeyboardKey.KEY_NUMBER_SIGN)) {
    basic.showString('#')
  }
})
```

## Supported targets

- for PXT/microbit
(The metadata above is needed for package search.)

## License

MIT
