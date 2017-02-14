require 'addressable/uri'
require 'rest-client'

def index_users
    url = Addressable::URI.new(
      scheme: 'http',
      host: 'localhost',
      port: 3000,
      path: '/users.html'
      #query values go here
    ).to_s

    puts RestClient.get(url)
end

def create_user(name, email = nil)
  url = Addressable::URI.new(
    scheme: 'http',
    host: 'localhost',
    port: 3000,
    path: '/users.json'
  ).to_s
  begin
    puts RestClient.post(
      url,
      { user: { name: name, email: email } }
    )
  rescue RestClient::Exception => e
    puts e.message
    puts "Enter a VALID name"
    name = gets.chomp
    puts "Enter a VALID AND PRESENT email, ffs"
    email = gets.chomp
    retry
  end
end


# create_user("cashmeouside")
