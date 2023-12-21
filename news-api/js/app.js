const loadNews = async () => {
	try {
		const URL = `https://newsapi.org/v2/everything?q=food&from=2023-02-07&sortBy=publishedAt&apiKey=6d9af38681d34671967f07c34f54fe2f`;
		const res = await fetch(URL);
		const news = await res.json();
		showNews(news.articles.slice(0, 30));
	} catch (e) {
		console.log(e);
	}
};
const showNews = (allNews) => {
	const cardContainer = document.getElementById('card-container');
	allNews.forEach((news) => {
		console.log(news);
		const { title, urlToImage, author, content, publishedAt, description } = news;
		cardContainer.innerHTML += `	
         <div class="card w-full bg-base-100 shadow-xl">
            <figure><img src="${urlToImage ? urlToImage : `https://www.rb.gy/yg9c4z`}" alt="Shoes" /></figure>
            <div class="card-body">
               <h2 class="card-title">${title}</h2>
               <p>${description}</p>
               <div class="card-actions justify-end">
                  <button class="btn btn-primary">Buy Now</button>
               </div>
            </div>
         </div>`;
	});
};
