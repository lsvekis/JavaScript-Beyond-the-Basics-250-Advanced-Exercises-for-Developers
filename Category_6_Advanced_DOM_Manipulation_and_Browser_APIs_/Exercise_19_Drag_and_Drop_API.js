<!-- HTML -->
<div id="dragSource" draggable="true" style="width:100px;height:100px;background:#ccc;">
Drag me
</div>
<div id="dropTarget" style="width:200px;height:200px;border:2px dashed #000;margin-top:20px;">
Drop here
</div>


// JavaScript
const dragSource = document.getElementById('dragSource');
const dropTarget = document.getElementById('dropTarget');

dragSource.addEventListener('dragstart', (e) => {
e.dataTransfer.setData('text/plain', 'This text is dragged');
});

dropTarget.addEventListener('dragover', (e) => {
e.preventDefault();
});

dropTarget.addEventListener('drop', (e) => {
e.preventDefault();
const data = e.dataTransfer.getData('text');
dropTarget.textContent = data;
});

Explanation:
This example demonstrates how to use the Drag and Drop API to enable elements to be draggable and dropped into a target container.
