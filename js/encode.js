"use strict"

var fs = require('fs')
var Person = require('./Person_pb').Person

var p = new Person()
p.setName('John')
p.setNickname('Johnny')
p.setGender(1)
p.setFriendsList(['Maria', 'Joseph', "David"])

var bytes = p.serializeBinary()
var wstream = fs.createWriteStream('person.bin')
wstream.write(new Buffer(bytes))
wstream.end()

const DEBUG = false
if (DEBUG) {
    var p2 = Person.deserializeBinary(bytes)
    console.log(p2.getName())
}