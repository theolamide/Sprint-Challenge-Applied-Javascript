// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    console.log(response.data.articles);
    
    function Card(Res){

                const card = document.createElement('div');           
                const author = document.createElement('div');
                const imgContainer = document.createElement('div');
                const headline = document.createElement('div');
                const imgAuthor = document.createElement('img');
                const authorName = document.createElement('span');

                card.appendChild(headline);
                author.appendChild(authorName);
                imgContainer.appendChild(imgAuthor);
                card.appendChild(author);
                author.appendChild(imgContainer);

                headline.classList.add('headline');
                author.classList.add('author');
                imgContainer.classList.add('img-container');
                card.classList.add('card');

                headline.textContent = Res.headline;
                imgAuthor.src = Res.authorPhoto;
                authorName.textContent = Res.authorName;
                
                return card;       
        }

        const attachToCards = document.querySelector('.cards-container');

        //loop for bootstrap
        let bootstrapArray = response.data.articles.bootstrap;
        bootstrapArray.forEach(element => {            
            attachToCards.appendChild(Card(element));
        });

        //loop for javascript
        response.data.articles.javascript.forEach(element =>{
            attachToCards.appendChild(Card(element));
        })

        //loop for jquery
        response.data.articles.jquery.forEach(element =>{
            attachToCards.appendChild(Card(element));
        })

        //loop for node
        response.data.articles.node.forEach(element =>{
            attachToCards.appendChild(Card(element));
        })

        //loop for technology
        response.data.articles.technology.forEach(element =>{
            attachToCards.appendChild(Card(element));
        })
        
           
})//closes API request