import { paintings } from './list';

export default function(data) {
	const $contentWrapper = document.querySelector('.content');
	appendImg(paintings);
}



	function _template (data) = {
	var painting = document.createElement('div');
	painting.classList.add('thumbnail');
	painting.innerHTML = `
	<a href="${data.img}" data-caption="${data.title}">
	<img src="${data.img}">
	</a>
	<div class="description"><div>
	<p>"${data.title}"</p>
	<p>${data.medium}</p>
	<p>${data.size}</p>
	<p>${data.price}</p>
	</div></div>
	`;
	return painting;
}
	function appendImg (list) {
	for (var x = 0; x < list.length; x++) {
      $contentWrapper.appendChild(_template(list[x]);
    }


/*
<div class="thumbnail">
<a href="art/das_modell.jpg" data-caption="Das Modell">
<img src="art/das_modell.jpg">
</a>
<div class="description"><div>
<p>"Das Modell"</p>
<p>Acrylic / watercolor paper</p>
<p>9x12</p>
<p>Sold</p>
</div></div>
</div>
*/