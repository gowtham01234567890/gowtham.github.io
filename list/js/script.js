/* filtering data with search */
const header = document.getElementsByClassName('header')[0];

const label = document.createElement('label');
label.setAttribute('for', 'search');
label.className = "student-search";

const search = document.createElement('input');
search.type = 'text';
search.placeholder = "Search by name...";

const submit = document.createElement('button');
submit.type = "submit";

const img = document.createElement('img');
img.src = "img/icn-search.svg";
img.alt = "Search icon";


label.appendChild(search);
label.appendChild(submit);
submit.appendChild(img);

header.appendChild(label);

function srch(searchInput, names) {
   for(let i = 0; i < names.length; i++) {
     names[i].style.display = "none";
     if((searchInput.value.length) >= 0 && (names[i].textContent.toLowerCase())
     	.includes(searchInput.value.toLowerCase())) {
       names[i].style.display = "block";
     } 
   }
   
 }

submit.addEventListener('click', (event) => {
   event.preventDefault();
   srch(search, student_item);
 });
 
search.addEventListener('keyup', () => {
	srch(search, student_item);
});

let student_item = [];
/* Data Pagination */

const itemsPerPage = 9;

/* This creates shows only 9 items perPage */
function showPage(list, page) {
	const startIndex = (page * itemsPerPage) - itemsPerPage;
	const endIndex = (page * itemsPerPage);

	const student_list = document.getElementsByClassName('student-list')[0];
	student_list.innerHTML = '';

	for(let i = 0; i < list.length; i++) {
		if(i >= startIndex && i < endIndex) {
			let li = document.createElement('li');
			li.className = 'student-item cf';

			let div1 = document.createElement('div');
			div1.className = 'student-details';

			let img = document.createElement('img');
			img.className = 'avatar';
			img.src = `${list[i].picture.large}`;

			let h3 = document.createElement('h3');
			h3.textContent = `${list[i].name.title} ${list[i].name.first} ${list[i].name.last}`;

			let span1 = document.createElement('span');
			span1.className = 'email';
			span1.textContent = `${list[i].email}`;

			let div2 = document.createElement('div');
			div2.className = 'joined-details';

			let span2 = document.createElement('span');
			span2.className = 'date';
			span2.textContent = `Joined ${list[i].registered.date}`;

			
			li.appendChild(div1);
			div1.appendChild(img);
			div1.appendChild(h3);
			div1.appendChild(span1);
			li.appendChild(div2);
			div2.appendChild(span2);
			student_list.appendChild(li);
			// student_list.insertAdjacentHTML('beforeend', li.outerHTML);
			student_item.push(li);
		}
	} 
}

showPage(data, 1);

/* This function creates pages dynamically */
function addPagination(list) {
	let pages = Math.ceil(list.length/itemsPerPage);

	let link_list = document.getElementsByClassName('link-list')[0];
	link_list.innerHTML = '';

	for(let i = 0; i < pages; i++) {
		let li = document.createElement('li');
		let button = document.createElement('button');
		button.textContent = i + 1;

		link_list.appendChild(li);
		li.appendChild(button);

		if(Number(button.textContent) === 1) {
			button.className = 'active';
		}

		link_list.addEventListener('click', e => {
			if(e.target.tagName === 'BUTTON') {
			let buttons = document.querySelectorAll('button');
			for(let i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('active');
			}
			
				let clicked = e.target;
				let num = clicked.textContent;
				clicked.classList.add('active');
				showPage(list, Number(num));
			}
		});
	}
}


// Call functions
addPagination(data)