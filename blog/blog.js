const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his Aunt Pol and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]

function displayArticles(articles) {
	const container = document.querySelector("#articles-container");

	// const date = document.querySelector("#leftsect");
	// const cont = document.querySelector("#fullContainer");

	articles.forEach(article => {

		const fullContainer = document.createElement("div");
		fullContainer.classList.add("fullContainer")

		const middlesect = document.createElement("section");
		middlesect.classList.add("article-class");
		
		const middleContent = `
		<h2>${article.title}</h2>
		<img src="${article.imgSrc}">
		<p>${article.description}</p>
        `;
		middlesect.innerHTML = middleContent;

		const leftsect = document.createElement("section");
		leftsect.classList.add("left");

		const leftContent = `
			<h2>${article.date}</h2>
			<p>${article.ages}</p>
			<p>${article.genre}</p>
			<p>${article.stars}</p>
		`;

		leftsect.innerHTML = leftContent
		

		fullContainer.appendChild(leftsect);
		fullContainer.appendChild(middlesect);
		container.appendChild(fullContainer)





		// container.appendChild(middlesect);
		// container.appendChild(leftsect);


		// date.appendChild(leftsect);

		// fullContainer.append(container);
		// fullContainer.append(date);
		// cont.appendChild(fullContainer);
	});
}

displayArticles(articles);

// const container = document.querySelector("#articles-container");
// articles.forEach(article => {
// 	const newArticle = document.createElement("article");
// 	newArticle.classList.add("article-class");
// });

// const articleContent = `
//     <h2>${article.title}</h2>
//     <p><strong>Date:</strong> ${article.date}</p>
//     <p>${article.content}</p>
// `;

// newArticle.innerHTML = articleContent;
// container.appendChild(newArticle);