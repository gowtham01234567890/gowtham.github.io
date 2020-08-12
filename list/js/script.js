const student_list = document.querySelectorAll('.student-item');
const perPage = 10;

// Search bar variables
const pageHeader = document.querySelector('.page-header');
const div = document.createElement('div');
div.className = 'student-search';

const search = document.createElement('input');
search.type="text";
search.placeholder = "Search for students...";

const submit = document.createElement('button');
submit.textContent = 'search';

pageHeader.appendChild(div);
div.appendChild(search);
div.appendChild(submit);

// Search Function
function srch(searchInput, names) {
   for(let i = 0; i < names.length; i++) {
     names[i].style.display = "none";
     if((searchInput.value.length) >= 0 && (names[i].textContent.toLowerCase()).includes(searchInput.value.toLowerCase())) {
       names[i].style.display = "block";
     } 
   }
   
 }
 
 submit.addEventListener('click', (event) => {
   event.preventDefault();
   srch(search, student_list);
 });
 
 search.addEventListener('keyup', () => {
   srch(search, student_list);
 });

const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = (page * perPage) - 1;
   
   for(let i = 0; i < list.length; i++) {
      if(i >= startIndex && i <= endIndex) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
};
showPage(student_list, 1);

const appendPageLinks = (list) => {
   const page = document.getElementsByClassName('page')[0]; 

   const div = document.createElement('div'); 
   div.className = 'pagination';
   page.appendChild(div);

   const ul = document.createElement('ul');
   div.appendChild(ul);

   let pages = Math.ceil(list.length / perPage);

   // For loop to create Page Numbers
   for(let i = 0; i < pages; i++) {

      let li = document.createElement('li');

      let a = document.createElement('a');
      a.setAttribute('href', '#');
      a.textContent = i + 1;

      if(parseInt(a.textContent) === 1) {
         a.className = 'active';
      }

      li.appendChild(a);
      ul.appendChild(li);

      a.addEventListener('click', (event) => {
         let aLinks = document.querySelectorAll('a');
         for(let i = 0; i < aLinks.length; i++) {
            aLinks[i].classList.remove('active');
         }
         let selectedLink = event.target;
         let currentNumber = selectedLink.textContent;
         selectedLink.classList.add('active');
         showPage(list, parseInt(currentNumber));
      });
   

   } // End Of For Loop

}; // End Function

appendPageLinks(student_list)





















