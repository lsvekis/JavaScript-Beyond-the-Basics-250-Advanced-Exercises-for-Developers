
class Logger {
constructor(level = 'info') {
this.level = level;
this.levels = { error: 0, warn: 1, info: 2, debug: 3 };
}
log(level, message) {
if (this.levels[level] <= this.levels[this.level]) {
console.log(`[${level.toUpperCase()}] ${message}`);
}
}
error(msg) { this.log('error', msg); }
warn(msg) { this.log('warn', msg); }
info(msg) { this.log('info', msg); }
debug(msg) { this.log('debug', msg); }
}
const logger = new Logger('debug');
logger.error('Error occurred');
logger.debug('Debugging details');

Explanation:
This logger filters messages based on the current log level and prefixes them with a label, improving log clarity.

These ten categories (with 25 exercises each) complete our set of 250 advanced JavaScript exercises. Experiment with and adapt these examples to further deepen your mastery of advanced JavaScript concepts and best practices.
