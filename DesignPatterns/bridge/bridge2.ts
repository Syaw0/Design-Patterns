class Remote {
  constructor(protected device: Device) {}

  togglePower() {
    if (this.device.isEnable()) {
      this.device.enable();
    } else {
      this.device.disable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 1);
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 1);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

class AdvancedRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  mute() {
    this.device.setVolume(0);
  }
}

interface Device {
  isEnable(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(vol: number): void;
  setChannel(channel: number): void;
  getChannel(): number;
}

class Tv implements Device {
  isDeviceEnable: boolean;
  currentChannel: number;
  volume: number;

  constructor() {
    this.isDeviceEnable = false;
    this.currentChannel = 1;
    this.volume = 0;
  }

  isEnable(): boolean {
    return this.isDeviceEnable;
  }

  disable(): void {
    this.isDeviceEnable = false;
  }

  enable(): void {
    this.isDeviceEnable = true;
  }

  setChannel(channel: number): void {
    this.currentChannel = channel;
  }

  getChannel(): number {
    return this.currentChannel;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(vol: number): void {
    this.volume = vol;
  }
}

// we can also define many of devices... like radio and so on...
const samsung = new Tv();
const remote = new Remote(samsung);
remote.channelUp();
remote.volumeUp();
console.log(samsung.getChannel(), samsung.getVolume());
