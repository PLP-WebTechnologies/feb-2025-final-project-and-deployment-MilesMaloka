// This file contains the JavaScript code for the Kanye West fan website.
// It handles interactivity, such as displaying album details, playing songs, and managing user interactions.

document.addEventListener('DOMContentLoaded', () => {
    fetchAlbums();
});

function fetchAlbums() {
    fetch('./data/albums.json')
        .then(response => response.json())
        .then(data => {
            displayAlbums(data);
        })
        .catch(error => console.error('Error fetching albums:', error));
}

function displayAlbums(albums) {
    const albumContainer = document.getElementById('album-container');
    albumContainer.innerHTML = '';

    albums.forEach(album => {
        const albumElement = document.createElement('div');
        albumElement.classList.add('album');

        albumElement.innerHTML = `
            <h2>${album.title}</h2>
            <img src="${album.image}" alt="${album.title} cover">
            <p>Release Date: ${album.releaseDate}</p>
            <h3>Track List:</h3>
            <ul>
                ${album.tracks.map(track => `<li>${track}</li>`).join('')}
            </ul>
            <button onclick="playAlbum('${album.title}')">Play Album</button>
        `;

        albumContainer.appendChild(albumElement);
    });
}

function playAlbum(albumTitle) {
    // Logic to play the album's songs
    console.log(`Playing album: ${albumTitle}`);
    // This can be expanded to include audio playback functionality
}