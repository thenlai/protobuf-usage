# how to run the demo:

1. `npm install`

2. run `protoc --js_out=import_style=commonjs,binary:. Person.proto` in shell or command line,
   after that you will get a new file "Person_pb.js".

3. `node encode.js` to generate a binary file "person.pb".

4. `node decode.js` to read the file and deserialize it.