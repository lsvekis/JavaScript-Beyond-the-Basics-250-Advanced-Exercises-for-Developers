
class CommandQueue {
constructor() {
this.queue = [];
}
addCommand(command) {
this.queue.push(command);
}
process() {
while (this.queue.length) {
const command = this.queue.shift();
command.execute();
}
}
}

class SimpleCommand {
constructor(action) {
this.action = action;
}
execute() {
this.action();
}
}

const queue = new CommandQueue();
queue.addCommand(new SimpleCommand(() => console.log('Command 1 executed')));
queue.addCommand(new SimpleCommand(() => console.log('Command 2 executed')));
queue.process();
// Outputs:
// "Command 1 executed"
// "Command 2 executed"

Explanation:
Commands are encapsulated as objects and added to a queue for sequential processing.
