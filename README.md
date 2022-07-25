## Ruby Real Time Chat Using Action Cable
A real time chat app using action cable and web sockets.

### What is Action Cable?
A tool to integrate webspckets with your application.

[See more on Rails Guides (Action Cable Overview)](https://guides.rubyonrails.org/action_cable_overview.html)

#### Create a user using bcrypt for the password digest (more about bcrypt: https://github.com/bcrypt-ruby/bcrypt-ruby)
> User.create(username: John Doe, password_digest: BCrypt::Password.create("my password"))