function displayPicture() {
    const random = Math.floor(Math.random() * 1000);
    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
        .then((response) => response.json())
        .then((data) => {
            const picContainer = document.querySelector('#picOfTheDay');
            const maxWidth = 300; 
            const maxHeight = 200; 
            const imgUrl = `https://picsum.photos/id/${data[0].id}/${maxWidth}/${maxHeight}?grayscale`;
            const imgEl = document.createElement('img');
            imgEl.setAttribute('src', imgUrl);
            picContainer.appendChild(imgEl);
    }); 
}

displayPicture();