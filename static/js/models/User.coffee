'use strict'

@User = class User
  constructor: (o) ->
    {@firstName, @lastName, @uid, @online, @avatar} = o

  getFirstName: ->
    @firstName

  setFirstName: (firstName) ->
    @firstName = firstName

  getLastName: ->
    @lastName

  setLastName: (lastName) ->
    @lastName = lastName

  getUID: ->
    @uid

  setUID: (uid) ->
    @uid = uid

  getOnline: ->
    @online

  setOnline: (online) ->
    @online = online

  getAvatar: ->
    @avatar

  setAvatar: (avatar) ->
    @avatar = avatar