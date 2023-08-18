//% block="Emakefun"
namespace Emakefun {

  /** Default I2C address */
  const DEFAULT_I2C_ADDRESS = 0x50

  /**
   * Enum for matrix keyboard keys.
   */
  export enum MatrixKeyboardKey {
    KEY_1,
    KEY_2,
    KEY_3,
    KEY_A,
    KEY_4,
    KEY_5,
    KEY_6,
    KEY_B,
    KEY_7,
    KEY_8,
    KEY_9,
    KEY_C,
    KEY_ASTERISK,
    KEY_0,
    KEY_NUMBER_SIGN,
    KEY_D,
  }

  export class MatrixKeyboard {
    // I2C device
    private readonly i2c_device: Emakefun.I2cDevice = undefined;

    // Last key states
    private last_key_states: number = 0;

    /**
     * Constructor.
     *
     * @param i2c_address I2C address
     */
    constructor(i2c_address: number = DEFAULT_I2C_ADDRESS) {
      // Initialize I2C device
      this.i2c_device = new Emakefun.I2cDevice(i2c_address);

      // Key trigger threshold value
      const KEY_TRIGGER_THRESHOLD_VALUE = 0x3F;

      // Initialize data
      let initialize_data: number[] = [
        0x00,  // Option1
        0x00,  // Reserve
        0x83,  // Reserve
        0xF3,  // Reserve
        0x98,  // Option2

        KEY_TRIGGER_THRESHOLD_VALUE,  // Key1 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key2 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key3 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key4 Trigger threshold value

        KEY_TRIGGER_THRESHOLD_VALUE,  // Key5 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key6 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key7 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key8 Trigger threshold value

        KEY_TRIGGER_THRESHOLD_VALUE,  // Key9 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key10 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key11 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key12 Trigger threshold value

        KEY_TRIGGER_THRESHOLD_VALUE,  // Key13 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key14 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key15 Trigger threshold value
        KEY_TRIGGER_THRESHOLD_VALUE,  // Key16 Trigger threshold value
      ];

      // Calculate checksum
      let checksum: number = 0;
      for (let data of initialize_data) {
        checksum += data;
      }
      initialize_data.push(checksum & 0xFF);

      // Write initialize data
      this.i2c_device.writeBytes(0xB0, initialize_data);
    }

    /**
     * Check if key is clicked.
     *
     * @param key The key
     * @return Clicked or not
     */
    //% block="$this is clicked $key"
    //% subcategory="MatrixKeyboard"
    //% this.defl=matrix_keyboard
    //% key.defl=KEY_1
    isClicked(key: MatrixKeyboardKey): boolean {
      // Read key status
      let data = this.i2c_device.readBytes(0x08, 2);
      if (data.length !== 2) {
        return false;
      }

      let key_status = (data[1] << 8) | data[0];

      // Check if key is valid
      if ((this.last_key_states & (1 << key)) === 0 && ((1 << key) & key_status) !== 0) {
        this.last_key_states |= 1 << key;
        return true;
      } else if ((this.last_key_states & (1 << key)) !== 0 && ((1 << key) & key_status) === 0) {
        this.last_key_states &= ~(1 << key);
      }
      return false;
    }
  }

  /**
   * Create matrix keyboard object.
   *
   * @param i2c_address I2C address, default 0x50
   */
  //% block="create matrix keyboard|I2C address = $i2c_address"
  //% subcategory="MatrixKeyboard"
  //% blockSetVariable=matrix_keyboard
  //% i2c_address.defl=0x50
  //% weight=100
  //% inlineInputMode=external
  export function createMatrixKeyboard(i2c_address: number = DEFAULT_I2C_ADDRESS): MatrixKeyboard {
    return new MatrixKeyboard(i2c_address);
  }
}