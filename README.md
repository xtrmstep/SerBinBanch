# SerBinBanch
Banchmark of binary serialization protocols FlatBuffers, MessagePack, Protocol Buffers, Thrift, Avro, colfer, protostuff

# Platforms/Languages
- .NET Core, C#
- TypeScript/JavaScript (NodeJs)
- TypeScript/JavaScript (Browser)
- Swift (iOS)
- Kotlin (Android)

# Abstract
Server is streaning a file of 1mbi to the client. The transportation time is measured to compare different protocols. Client and Server uses the same protocol.

## Process Detalization

1. take start time
-
2. encode an object to format (F)
3. convert F to plane binary array (A) to transfer
-
4. send (respond) A to "internet"
5. receive A on the other side
-
6. convert A to F
7. decode the object from F
-
8. take end time

## Benchmark Metrics
1. For formats with RPC frameworks: the time for entire transition
2. Speed of getting binary array from an object (encoding speed)
3. Speed of getting object from binary array (decoding speed)
4. Size of the binary array (footprint size)