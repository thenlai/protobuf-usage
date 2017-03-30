# Grammar of Protobuf

Protobuf v2 or Protobuf v3

# Protobuf V3

For details, please visit [official guide](https://developers.google.com/protocol-buffers/docs/proto3).

## types

| type    | default value |
|---------|---------------|
| string  | empty string  |
| byte    | empty byte    |
| bool    | false         |
| numerics| zero, 0       |
| enum    | first defined, must be 0 |
| message |   not set     |

## `import`

```proto
import Module "module";
import "module.submodule";
```

## `oneof`

It is like `union` in C language, which demonstrates that you can have only one among many at a time.

```
message JavaScriptType {
    oneof value {
        Boolean b = 0;
        Number n = 1;
        String s = 2;
        Object o = 3;
        Array a = 4;
        Null l = 5;
        Undefined u = 6;
    }
}
```