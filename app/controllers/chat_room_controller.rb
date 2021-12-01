class ChatRoomController < ApplicationController
    def index
        Message.all
    end
end
