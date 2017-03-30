"use strict"

var fs = require('fs')
var Person = require('./Person_pb').Person

var readStream = fs.createReadStream('person.bin')
readStream.on('data', function (chunk) {
    // chunk: type is `Buffer`
    var bytes = new Uint8Array(
        chunk.buffer, 
        chunk.byteOffset, 
        chunk.byteLength / Uint8Array.BYTES_PER_ELEMENT)

    let p = Person.deserializeBinary(bytes)
    let name = p.getName()
    let nickname = p.getNickname()
    let gender
    switch (p.getGender()) {
        case Person.Gender.FEMALE:
            gender = 'girl'
            break
        case Person.Gender.MALE:
            gender = 'boy'
            break
        default:
            gender = 'lovely kid'
    }
    console.log(nickname + " is a " + gender)

    let friends = p.getFriendsList()
    console.log(name + " has " + friends.length + " friends.")
})
