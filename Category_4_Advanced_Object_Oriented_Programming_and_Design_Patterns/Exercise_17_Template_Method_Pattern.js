
class DataProcessor {
process() {
this.readData();
this.transformData();
this.writeData();
}
readData() {
throw new Error('readData() must be implemented');
}
transformData() {
throw new Error('transformData() must be implemented');
}
writeData() {
throw new Error('writeData() must be implemented');
}
}

class CSVProcessor extends DataProcessor {
readData() {
console.log('Reading CSV data');
}
transformData() {
console.log('Transforming CSV data');
}
writeData() {
console.log('Writing CSV data');
}
}

const processor = new CSVProcessor();
processor.process();
// Output:
// "Reading CSV data"
// "Transforming CSV data"
// "Writing CSV data"

Explanation:
The Template Method pattern lets the base class define the algorithm structure while delegating implementation of specific steps to subclasses.
