/*** Search ***/
const ul = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

const header = document.querySelector('.header');

const label = document.createElement('label');
label.setAttribute('for', 'search');
label.className = 'student-search';
label.innerHTML = `
		<input id="search" placeholder="Search by name...">
		<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
`;
header.appendChild(label);

let search1 = document.querySelector('#search');
let button1 = document.querySelector('button');
let results = [];

function srch(searchInput) {
	if(searchInput.length !== '') {
		results = [];
		for(let i = 0; i < data.length; i++) {
			let tempName = (data[i].name.title + " " + data[i].name.first + " " + data[i].name.last);
			if( (tempName.toLowerCase()).includes(searchInput.toLowerCase()) ) {
				results.push(data[i]);
			}
		}

		if(results.length === 0) {
			ul.innerHTML= '';
			linkList.innerHTML = '';

			let h1 = document.createElement('h1');
			h1.innerHTML = "No Data Found";
			ul.appendChild(h1);

			let resetSearch = document.createElement('button');
			resetSearch.innerHTML = "<h1 style='font-size:30px;'>Reset Search</h1>";
			ul.appendChild(resetSearch);
			resetSearch.addEventListener('click', () => {
				showPage(data, 1);
				addPagination(data);
			 });
			
		} else {
			showPage(results, 1);
			addPagination(results);
		}
	}
}

search1.addEventListener('keyup', e => {
	srch(search1.value);
});

button1.addEventListener('submit', e => {
	e.preventDefault();
	srch(search);
});

/**** Main ****/
const itemsPerPage = 9;

function showPage(list, page) {
	const startIndex = (page * itemsPerPage) - itemsPerPage;
	const endIndex = (page * itemsPerPage);

	// const ul = document.querySelector('.student-list');
	ul.innerHTML = '';

	for(let i = 0; i < list.length; i++) {
		if( i >= startIndex && i < endIndex) {
			let li = document.createElement('li');
			li.className = "student-item cf";
			li.innerHTML = `
				<div class="student-details">
				<img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
				<h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
				<span class="email">${list[i].email}</span>
				</div>
				<div class="joined-details">
				<span class="date">Joined ${list[i].registered.date}</span>
				</div>
			`;
		
			ul.insertAdjacentElement('beforeend', li);

		}
	}
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
	const numPages = Math.ceil(list.length/itemsPerPage);

	// const linkList = document.querySelector('.link-list');
	linkList.innerHTML = '';

	for(let i = 1; i <= numPages; i++) {
		let li = document.createElement('li');
		let button = document.createElement('button');
		button.type = 'button';
		button.textContent = `${i}`;

		li.appendChild(button);
		linkList.appendChild(li);

		// let button1 = document.querySelectorAll('button')[0];
		// button1.className = 'active';

		if(Number(button.textContent) === 1) {
			button.className = 'active';
		}

		linkList.addEventListener('click', e => {
			if(e.target.tagName === 'BUTTON') {
				let button = document.querySelector('.active');
				button.className = '';

				let clicked = e.target;
				let text = clicked.textContent;
				clicked.className = 'active';

				showPage(list, text);
			}
		});

	}
}

// Call functions
addPagination(data);
