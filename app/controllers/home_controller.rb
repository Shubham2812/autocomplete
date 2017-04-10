class HomeController < ApplicationController
	def index
		@items = Item.all
	end

	def add
		Item.create(
				name: params[:name]
			)
		return redirect_to '/'
	end

	def add_ajax
		item = Item.create(
				name: params[:name]
			)
		render json: item 
	end
end
