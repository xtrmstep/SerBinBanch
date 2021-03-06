// automatically generated by the FlatBuffers compiler, do not modify

import { flatbuffers } from "flatbuffers"
/**
 * @constructor
 */
export namespace FlatBuffersSample{
export class Message {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Message
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Message {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Message= obj
 * @returns Message
 */
static getRootAsMessage(bb:flatbuffers.ByteBuffer, obj?:Message):Message {
  return (obj || new Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @param FlatBuffersSample.Person= obj
 * @returns FlatBuffersSample.Person
 */
people(index: number, obj?:FlatBuffersSample.Person):FlatBuffersSample.Person|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new FlatBuffersSample.Person).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
peopleLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startMessage(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset peopleOffset
 */
static addPeople(builder:flatbuffers.Builder, peopleOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, peopleOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createPeopleVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startPeopleVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishMessageBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

}
}
/**
 * @constructor
 */
export namespace FlatBuffersSample{
export class Person {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Person
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Person {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Person= obj
 * @returns Person
 */
static getRootAsPerson(bb:flatbuffers.ByteBuffer, obj?:Person):Person {
  return (obj || new Person).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
Id():string|null
Id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
Id(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
index():string|null
index(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
index(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
guid():string|null
guid(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
guid(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns boolean
 */
isActive():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns number
 */
balance():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
picture():string|null
picture(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
picture(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
age():number {
  var offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
eyeColor():string|null
eyeColor(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
eyeColor(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
gender():string|null
gender(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
gender(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
company():string|null
company(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
company(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
email():string|null
email(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
email(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
phone():string|null
phone(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
phone(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
address():string|null
address(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
address(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
about():string|null
about(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
about(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
registered():string|null
registered(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
registered(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
latitude():number {
  var offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
longitude():number {
  var offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param number index
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array
 */
tags(index: number):string
tags(index: number,optionalEncoding:flatbuffers.Encoding):string|Uint8Array
tags(index: number,optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
};

/**
 * @returns number
 */
tagsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param number index
 * @param FlatBuffersSample.Friend= obj
 * @returns FlatBuffersSample.Friend
 */
friends(index: number, obj?:FlatBuffersSample.Friend):FlatBuffersSample.Friend|null {
  var offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new FlatBuffersSample.Friend).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
friendsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startPerson(builder:flatbuffers.Builder) {
  builder.startObject(20);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset IdOffset
 */
static add_id(builder:flatbuffers.Builder, IdOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, IdOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset indexOffset
 */
static addIndex(builder:flatbuffers.Builder, indexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, indexOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset guidOffset
 */
static addGuid(builder:flatbuffers.Builder, guidOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, guidOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean isActive
 */
static addIsActive(builder:flatbuffers.Builder, isActive:boolean) {
  builder.addFieldInt8(3, +isActive, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @param number balance
 */
static addBalance(builder:flatbuffers.Builder, balance:number) {
  builder.addFieldFloat32(4, balance, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset pictureOffset
 */
static addPicture(builder:flatbuffers.Builder, pictureOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, pictureOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number age
 */
static addAge(builder:flatbuffers.Builder, age:number) {
  builder.addFieldInt32(6, age, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset eyeColorOffset
 */
static addEyeColor(builder:flatbuffers.Builder, eyeColorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, eyeColorOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(8, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset genderOffset
 */
static addGender(builder:flatbuffers.Builder, genderOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, genderOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset companyOffset
 */
static addCompany(builder:flatbuffers.Builder, companyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, companyOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset emailOffset
 */
static addEmail(builder:flatbuffers.Builder, emailOffset:flatbuffers.Offset) {
  builder.addFieldOffset(11, emailOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset phoneOffset
 */
static addPhone(builder:flatbuffers.Builder, phoneOffset:flatbuffers.Offset) {
  builder.addFieldOffset(12, phoneOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset addressOffset
 */
static addAddress(builder:flatbuffers.Builder, addressOffset:flatbuffers.Offset) {
  builder.addFieldOffset(13, addressOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset aboutOffset
 */
static addAbout(builder:flatbuffers.Builder, aboutOffset:flatbuffers.Offset) {
  builder.addFieldOffset(14, aboutOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset registeredOffset
 */
static addRegistered(builder:flatbuffers.Builder, registeredOffset:flatbuffers.Offset) {
  builder.addFieldOffset(15, registeredOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number latitude
 */
static addLatitude(builder:flatbuffers.Builder, latitude:number) {
  builder.addFieldFloat32(16, latitude, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number longitude
 */
static addLongitude(builder:flatbuffers.Builder, longitude:number) {
  builder.addFieldFloat32(17, longitude, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tagsOffset
 */
static addTags(builder:flatbuffers.Builder, tagsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(18, tagsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createTagsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startTagsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset friendsOffset
 */
static addFriends(builder:flatbuffers.Builder, friendsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(19, friendsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createFriendsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startFriendsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endPerson(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace FlatBuffersSample{
export class Friend {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Friend
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Friend {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Friend= obj
 * @returns Friend
 */
static getRootAsFriend(bb:flatbuffers.ByteBuffer, obj?:Friend):Friend {
  return (obj || new Friend).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startFriend(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset idOffset
 */
static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endFriend(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
