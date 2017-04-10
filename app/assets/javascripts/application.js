// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function main(){
	var add_form = document.getElementById('add');
	var search_form = document.getElementById('search');
	add_form.addEventListener('submit', function(){
		event.preventDefault();
		var url = '/item/add/ajax'
		info = {
			name: add_form[2].value
		}
		var textbox = add_form[2]
		$.ajax({
			url: url,
			method: 'post',
			data: info,
			success: function(item){
				var list = document.getElementById("list");
				var child = document.createElement("li")
				var text = document.createTextNode(item.name)
				child.appendChild(text);
				list.appendChild(child);
				textbox.value = "";
			},
			error: function(){
				alert("Error");
			}
		})
	})

	search_form[2].addEventListener('keydown', function(){
		var search_results = document.getElementById('search_results')
		if(search_form[2].value.length > 1)
		{
			var url = '/item/search'
			var info = {
				search: search_form[2].value
			}

			search_results.style.display = 'block'

			$.ajax({
				url: url,
				method: 'post',
				data: info,
				success: function(items){
					console.log(items);
					while (search_results.firstChild) 
					{
 					   search_results.removeChild(search_results.firstChild);
					}

					for(var i=0; i<items.length; i++)
					{ var child = document.createElement('div')
					  var text = document.createTextNode(items[i].name)
					  child.appendChild(text);
					  search_results.appendChild(child)
					  child.addEventListener('click', function(){
					  	search_form[2].value = this.innerHTML
					  })
					}
				},
				error: function(){
					alert("Error")
				}
			})
		}
		else
		{
			search_results.style.display = 'none'
		}
	})

	document.body.addEventListener('click', function(event){
		console.log(event)
		if(event.clientX > 184)
		{ var search_results = document.getElementById('search_results')
		  search_results.style.display = 'none'
		}
	})

}
window.addEventListener('load', function(){
	main();
})
