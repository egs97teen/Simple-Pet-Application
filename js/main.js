// declare variables
// ----------------------------------------------------------------------
// pet object
var Pet = {
	id: null,
	name: null,
	type: null,
	breed: null,
	age: null,
	description: null,
	image: null
};

var containerEl = document.querySelector("#show_all");
var mixer = mixitup(containerEl);

// default pets to fill "database"
var pet1 = {id: 1, name: "Corky", type: "dog", breed: "Pembroke Welsh Corgi", age: "2", description: "Corky is a fun, loving Corgi who enjoys to play in the leaves.", image: "http://cdn.akc.org/Marketplace/Breeds/Pembroke_Welsh_Corgi_SERP.jpg"};
var pet2 = {id: 2, name: "Liz", type: "reptile", breed: "Bearded Dragon", age: "20", description: "A scaly beast from the sands who can take some heat.", image: "http://cdn.sci-news.com/images/enlarge2/image_3826e-Bearded-Dragon.jpg"};
var pet3 = {id: 3, name: "Cali", type: "cat", breed: "Calico", age: "1", description: "A cat from SoCal with a knack for getting in trouble.", image: "http://cdn.pcwallart.com/images/calico-kittens-with-blue-eyes-wallpaper-1.jpg"};
var pet4 = {id: 4, name: "Sam", type: "bird", breed: "Toucan", age: "50", description: "This funny bird loves fruity cereal.", image: "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_toucan.jpg"};
var pet5 = {id: 5, name: "Marcel", type: "other", breed: "Capuchin", age: "20", description: "Marcel is a famous monkey who has a lot of 'Friends.'", image: "https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/capuchin-monkey-baby.jpg?itok=z83njSkD"};
var pet6 = {id: 6, name: "Grumpy", type: "cat", breed: "Showshoe", age: "12", description: "A cat who is generally unamused.", image: "http://i0.kym-cdn.com/entries/icons/mobile/000/011/365/GRUMPYCAT.jpg"};
var pet7 = {id: 7, name: "Twin", type: "cat", breed: "Siamese", age: "13", description: "Has a twin who got in trouble with a particular 'Lady.'", image: "http://cdn2-www.cattime.com/assets/uploads/2011/08/siamese-cat-names.jpg"};
var pet8 = {id: 8, name: "Tweetie", type: "bird", breed: "Canary", age: "100", description: "This bird always seems to find itself running from a cat.", image: "http://www.canarybirdguide.com/wp-content/uploads/2015/07/5559559963_c3aca4e874_z.jpg"};
var pet9 = {id: 9, name: "Slippy", type: "reptile", breed: "Tree Frog", age: "19", description: "Always in need of help from his fox friend.", image: "http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/cutie_0.png"};
var pet10 = {id: 10, name: "Shibby", type: "dog", breed: "Shiba Inu", age: "5", description: "A happy dog that loves to play.", image: "http://cdn.akc.org/content/article-body-image/shiba_pupper.jpg"};
var pet11 = {id: 11, name: "Huskar", type: "dog", breed: "Husky", age: "2", description: "This fella is tired.", image: "https://c1.staticflickr.com/4/3611/3483836848_86712ab63c_b.jpg"};
var pet12 = {id: 12, name: "Terry", type: "dog", breed: "Yorkshire Terrier", age: "11", description: "A cute puppy looking for a new home.", image: "http://cdn1-www.dogtime.com/assets/uploads/gallery/yorkshireterrier-dog-breed-pictures/1-face.jpg"};

// pet array to hold onto pet objects
var petArray = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12];

// pet ID number
var IDcount = 5;

// siblings of divs to appear in main section of the page
var aboutSiblings = $("#about").siblings();
var allPetsSiblings = $("#show_all_pets").siblings();
var showPetSiblings = $("#show_pet").siblings();
var newPetSiblings = $("#new_pet").siblings();

// functions: Adding a new pet
// ----------------------------------------------------------------------
// ensures no inputs are left empty
function checkInputs(inputs) {
	var newPet = Object.create(Pet);
	var errors = false;

	inputs.slice(0, -1).each(function() {
		if ($(this).val() == "" || $(this).val() == null) {
			alert("Please insert " + this.name);
			errors = true;
		} else {
			newPet[this.name] = $(this).val();
		}
	});

	if (errors) {
		return false;
	} else {
		newPet.id = IDcount;
		return savePet(newPet);
	}
}

// save new pet to database
function savePet(newPet) {
	petArray.push(newPet);

	var newPetDiv = document.createElement("div");
	newPetDiv.setAttribute("id", IDcount);
	IDcount += 1;
	newPetDiv.setAttribute("class", "mix petDiv " + newPet.type + "");

	$(newPetDiv).append("<img class='petImg' src='" + newPet.image + "'>");
	$(newPetDiv).append("<p class='petName'>" + newPet.name + "</p>");

	$("#show_all").prepend(newPetDiv);
}

// functions: Populating the all pets list
// ----------------------------------------------------------------------
function createPetDivs() {
	for (var i = 0; i < petArray.length; i++) {
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "mix petDiv " + petArray[i].type + "");
		newDiv.setAttribute("id", petArray[i].id);

		$(newDiv).append("<img class='petImg' src='" + petArray[i].image + "'>");
		$(newDiv).append("<p class='petName'>" + petArray[i].name + "</p>");

		$("#show_all").prepend(newDiv);
	}
}

// functions: Displaying information on a single pet
// ----------------------------------------------------------------------
function displayPetInfo(petID) {
	for (var i = 0; i < petArray.length; i++) {
		if (petArray[i].id == petID) {
			$("#pet_name").html(petArray[i].name);
			$("#pet_breed").html(petArray[i].breed);
			$("#pet_age").html(petArray[i].age);
			$("#pet_description").html(petArray[i].description);
			$("#show_pet_image").html("<img id=" + petID + " class='petImg' src='" + petArray[i].image + "'>");
			showPetSiblings.hide();
			$("#show_pet").fadeIn("slow");
		}
	}
}

// function: Assigning the mixing div
// ----------------------------------------------------------------------
function assignMixer() {
	containerEl = document.querySelector("#show_all");
	mixer = mixitup(containerEl);
}

function deletePet(petID) {
	var index = 0;
	for (var i = 0; i < petArray.length; i++) {
		if (petArray[i].id == petID) {
			index = i;
			break;
		}
	}

	petArray.splice(index, 1);

	return petArray;
}

// jQuery for site functionality
// ----------------------------------------------------------------------
(function($) {

	createPetDivs();

	// on click, display the about page
	$("#about_us, #pet_logo").click(function(event) {
		event.preventDefault();
		mixer.destroy();

		aboutSiblings.hide();
		$("#about").fadeIn("slow");
	})

	// on click, display the add new pet form
	$("#add_new").click(function(event) {
		event.preventDefault();
		mixer.destroy();

		newPetSiblings.hide();
		$("#new_pet").fadeIn("slow");
		document.getElementById("pet_form").reset();
	})

	// on submission of form, clear the form
	$(document).on("submit", "#pet_form", function(event) {
		event.preventDefault();
		mixer.destroy();

		var inputs = $("#pet_form :input");

		if (checkInputs(inputs) != false) {

			document.getElementById("pet_form").reset();
			$("#pet_preview").html("");

			allPetsSiblings.hide();
			assignMixer();
			$("#show_all_pets").fadeIn("slow");
		}
	})

	// on click, display all pets
	$("#all_pets").click(function(event) {
		event.preventDefault();
		mixer.destroy();

		allPetsSiblings.hide();
		assignMixer();
		$("#show_all_pets").fadeIn("slow");
	})

	// on click, load view for a single selected pet
	$(document).on("click", ".petDiv", function() {
		var petID = $(this)[0].id;
		mixer.destroy();

		displayPetInfo(petID);
	})

	// on click, go back to the display all pets page
	$(document).on("click", "#back", function(event) {
		event.preventDefault();

		allPetsSiblings.hide();
		assignMixer();
		$("#show_all_pets").fadeIn("slow");
	})

	// on input, create an image preview
	$(document).on("input", "#pet_form input[name=image]", function() {
		$("#pet_preview").html("<img class='pet_preview' src='" + $(this).val() + "'>");
		$("#pet_preview").hide();
		$("#pet_preview").fadeIn("slow");
	})

	// on click, delete this pet from the "database"
	$(document).on("click", "#delete", function(event) {
		event.preventDefault();

		var petID = $(this).parents()[1].previousElementSibling.firstChild.id;
		deletePet(petID);

		$("#main #" + petID)[0].remove();
		assignMixer();
		allPetsSiblings.hide();
		$("#show_all_pets").fadeIn("slow");
	})
})(jQuery);

// jQuery for styling
// ----------------------------------------------------------------------

(function($) {
	// styling that cannot be accomplished with css transitions
	$("#text_description").hover(function() {
		$("#description").css({"color": "#52bdff"});
	}, function() {
		$("#description").css({"color": "#545557"});
	})

	$("select").hover(function() {
		$("#type").css({"color": "#52bdff"});
	}, function() {
		$("#type").css({"color": "#545557"});
	})
})(jQuery);