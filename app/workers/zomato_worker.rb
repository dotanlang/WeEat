require 'faraday'

class ZomatoWorker
  include Sidekiq::Worker
  # def perform(name, count)
  #   conn = Faraday.new(:url => 'https://developers.zomato.com')
  #   response = conn.get do |req|
  #     req.url '/api/v2.1/cuisines', :city_id => 280
  #     req.headers['Content-Type'] = 'application/json'
  #     req.headers['user-key'] = ENV['ZOMATO_USER_KEY']
  #   end
  #
  #
  #   Rails.logger.info(response.body)
  #   puts response.body
  # end

  def perform(*args)
    conn = Faraday.new(:url => 'https://developers.zomato.com')
    response = conn.get do |req|
      req.url '/api/v2.1/search', :entity_id => 280, :entity_type => 'city', :count => 100
      req.headers['Accept'] = 'application/json'
      req.headers['user-key'] = ENV['ZOMATO_USER_KEY']
    end

    JSON.parse(response.body)['restaurants'].each do |rest|
      created_rest = Restaurant.find_or_create_by(:name => rest['restaurant']['name'], :cuisine => rest['restaurant']['cuisines'].split(',').first,
                                                  :address => rest['restaurant']['location']['address'] + ', ' + rest['restaurant']['location']['city'],
                                                  :rating => (rest['restaurant']['user_rating']['aggregate_rating'].to_i%3))

      puts created_rest

      conn = Faraday.new(:url => 'https://developers.zomato.com')
      review_response = conn.get do |req|
        req.url '/api/v2.1/reviews', :res_id => rest['restaurant']['id'], :count => 100
        req.headers['Accept'] = 'application/json'
        req.headers['user-key'] = ENV['ZOMATO_USER_KEY']
      end

      JSON.parse(review_response.body)['user_reviews'].each do |rev|
        Review.find_or_create_by(:restaurant_id => created_rest.id, :reviewer_name => rev['review']['user']['name'], :comments => rev['review']['review_text'], :rating => rev['review']['rating'].to_i%3)
      end

    end
  end

end