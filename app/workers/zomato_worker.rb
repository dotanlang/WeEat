require 'faraday'

class ZomatoWorker
  include Sidekiq::Worker
  def perform(name, count)
    conn = Faraday.new(:url => 'https://developers.zomato.com')
    response = conn.get do |req|
      req.url '/api/v2.1/cuisines', :city_id => 280
      req.headers['Content-Type'] = 'application/json'
      req.headers['user-key'] = ENV['ZOMATO_USER_KEY']
    end

    Rails.logger.info(response.body)
  end
end