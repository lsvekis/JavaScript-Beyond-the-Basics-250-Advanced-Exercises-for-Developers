
class Command {
execute() {}
}

class TurnOnCommand extends Command {
constructor(device) {
super();
this.device = device;
}
execute() {
this.device.turnOn();
}
}

class Device {
turnOn() {
console.log('Device is on');
}
}

class RemoteControl {
submit(command) {
command.execute();
}
}

const device = new Device();
const turnOn = new TurnOnCommand(device);
const remote = new RemoteControl();
remote.submit(turnOn); // Output: "Device is on"

Explanation:
By encapsulating an action within a command object, you can store, queue, or log actions independently of their execution.
