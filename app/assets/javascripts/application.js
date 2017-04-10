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
	console.log(add_form)
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
				console.log(item);
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
}
window.addEventListener('load', function(){
	main();
})
