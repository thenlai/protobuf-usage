# Installation

1. binary download:

go to page [GitHub - Protobuf release](https://github.com/google/protobuf/releases) and download the applications correspondant to your platforms.

2. build from source codes:

see [C++ Installation](https://github.com/google/protobuf/blob/master/src/README.md)

# Use

1. JavaScript:

command lines:

```bash
protoc --js_out=import_style=commonjs,binary:. MODEL1.proto MODEL2.proto
```

# Protobuf grammar

See: [Grammar of Protobuf](grammar.md)

# Comparision

Protobuf vs JSON

|      field      |                  performance                        |
|-----------------|-----------------------------------------------------|
| Serialization   | speed: depends, but normally Protobuf is much faster; for JavaScript and PHP, JSON is easier to handle; |
| Deserializaztion| spped: depends, but normally Protobuf is much faster; for JavaScript, JSON is easier to handle; |
| File size       | Protobuf is smaller than JSON, but not JSON gzip |
