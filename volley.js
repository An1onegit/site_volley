var num = 0;

function changeColor(){
	var element = document.getElementById("title");
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	element.style.color = "#" + randomColor;
}

function changeImage(){
	var images = ["volleyball", "volleyball1", "volleyball2", "volleyball3"];
	var doc = "img/";
	var type = ".jpg"
	var element = document.getElementById("image");
	element.src= doc + images[num] + type;
	if (num <= 2){
		num += 1;
	}
	else{
		num = 0;
	}
}

function changeFontSize(size){
	var elements = document.querySelectorAll("p");
	for (var i=0; i <= elements.length; i++){ 
		var el = elements[i];
		el.style.fontSize = size + "px";
	}
}

//fonction pou récuperer la derniere video youtube d'une chaine
function getLatestVideo(channel, id){
	var element = document.getElementById(id);
	const API_KEY = 'AIzaSyChzprBODuYsJllUFEQMpvRvqiwr3HNIjo'; // API privé
	const CHANNEL_ID = channel; // ID de la chaîne (Power Volleyball)

	// Requête API pour récupérer la liste des vidéos de la chaîne triées par date de publication
	fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`)
		.then(response => response.json())
		.then(data => {
			// Récupération du lien de la première vidéo de la liste
			const videoId = data.items[0].id.videoId;
			const videoUrl = `https://www.youtube.com/embed/${videoId}`;// lien qui permet d'integrer la video sur le site
			element.src = videoUrl
			console.log(data.items[0].id.videoId)
		})
		.catch(error => console.error(error));
}
