const listItems = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggable = null;

for(let i = 0; i < listItems.length; ++i) {
	const item = listItems[i];
	console.log(item);

	item.addEventListener('dragstart', function() {
		draggedItem = item;
		console.log('DragStart')
		// draggedItem = this;
		setTimeout(function() {
		item.style.display = 'none'
		}, 0)
		// console.log(draggedItem);
	});

	item.addEventListener('dragend', function() {
		console.log('dragEnd')
		setTimeout(() => {
			draggedItem.style.display = 'block'
			draggedItem = null;
		}, 0)
	});

	for (var j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		list.addEventListener('dragenter', function(e) {
			e.preventDefault();
			this.style.boxShadow = '5px 5px 4px 4px rgba(0,0,0,0.75)';
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
			this.style.border = '1px dashed black'
		});
		list.addEventListener('dragleave', function(e) {
			this.style.boxShadow = 'none';
			this.style.border = '0px dashed black'
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'			
		})
		list.addEventListener('drop', function(e) {
			console.log('drop');
			list.append(draggedItem);
			this.style.boxShadow = 'none';
			this.style.border = '0px dashed black'
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
		})
	}
}









