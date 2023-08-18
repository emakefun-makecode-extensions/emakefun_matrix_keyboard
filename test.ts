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
