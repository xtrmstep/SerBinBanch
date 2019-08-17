//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Message = module.exports.Message = function(args) {
  this.people = null;
  if (args) {
    if (args.people !== undefined && args.people !== null) {
      this.people = Thrift.copyList(args.people, [null]);
    }
  }
};
Message.prototype = {};
Message.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.LIST) {
        this.people = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.Person();
          elem3.read(input);
          this.people.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Message.prototype.write = function(output) {
  output.writeStructBegin('Message');
  if (this.people !== null && this.people !== undefined) {
    output.writeFieldBegin('people', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.people.length);
    for (var iter4 in this.people) {
      if (this.people.hasOwnProperty(iter4)) {
        iter4 = this.people[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Person = module.exports.Person = function(args) {
  this._id = null;
  this.index = null;
  this.guid = null;
  this.isActive = null;
  this.balance = null;
  this.picture = null;
  this.age = null;
  this.eyeColor = null;
  this.name = null;
  this.gender = null;
  this.company = null;
  this.email = null;
  this.phone = null;
  this.address = null;
  this.about = null;
  this.registered = null;
  this.latitude = null;
  this.longitude = null;
  this.tags = null;
  this.friends = null;
  if (args) {
    if (args._id !== undefined && args._id !== null) {
      this._id = args._id;
    }
    if (args.index !== undefined && args.index !== null) {
      this.index = args.index;
    }
    if (args.guid !== undefined && args.guid !== null) {
      this.guid = args.guid;
    }
    if (args.isActive !== undefined && args.isActive !== null) {
      this.isActive = args.isActive;
    }
    if (args.balance !== undefined && args.balance !== null) {
      this.balance = args.balance;
    }
    if (args.picture !== undefined && args.picture !== null) {
      this.picture = args.picture;
    }
    if (args.age !== undefined && args.age !== null) {
      this.age = args.age;
    }
    if (args.eyeColor !== undefined && args.eyeColor !== null) {
      this.eyeColor = args.eyeColor;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.gender !== undefined && args.gender !== null) {
      this.gender = args.gender;
    }
    if (args.company !== undefined && args.company !== null) {
      this.company = args.company;
    }
    if (args.email !== undefined && args.email !== null) {
      this.email = args.email;
    }
    if (args.phone !== undefined && args.phone !== null) {
      this.phone = args.phone;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.about !== undefined && args.about !== null) {
      this.about = args.about;
    }
    if (args.registered !== undefined && args.registered !== null) {
      this.registered = args.registered;
    }
    if (args.latitude !== undefined && args.latitude !== null) {
      this.latitude = args.latitude;
    }
    if (args.longitude !== undefined && args.longitude !== null) {
      this.longitude = args.longitude;
    }
    if (args.tags !== undefined && args.tags !== null) {
      this.tags = Thrift.copyList(args.tags, [null]);
    }
    if (args.friends !== undefined && args.friends !== null) {
      this.friends = Thrift.copyList(args.friends, [null]);
    }
  }
};
Person.prototype = {};
Person.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this._id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.index = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.guid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.isActive = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.balance = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.picture = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.I32) {
        this.age = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.eyeColor = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.gender = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.company = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.email = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.phone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 15:
      if (ftype == Thrift.Type.STRING) {
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 16:
      if (ftype == Thrift.Type.STRING) {
        this.about = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 17:
      if (ftype == Thrift.Type.STRING) {
        this.registered = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 18:
      if (ftype == Thrift.Type.DOUBLE) {
        this.latitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 19:
      if (ftype == Thrift.Type.DOUBLE) {
        this.longitude = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 20:
      if (ftype == Thrift.Type.LIST) {
        this.tags = [];
        var _rtmp36 = input.readListBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var elem8 = null;
          elem8 = input.readString();
          this.tags.push(elem8);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 21:
      if (ftype == Thrift.Type.LIST) {
        this.friends = [];
        var _rtmp310 = input.readListBegin();
        var _size9 = _rtmp310.size || 0;
        for (var _i11 = 0; _i11 < _size9; ++_i11) {
          var elem12 = null;
          elem12 = new ttypes.Friend();
          elem12.read(input);
          this.friends.push(elem12);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Person.prototype.write = function(output) {
  output.writeStructBegin('Person');
  if (this._id !== null && this._id !== undefined) {
    output.writeFieldBegin('_id', Thrift.Type.STRING, 1);
    output.writeString(this._id);
    output.writeFieldEnd();
  }
  if (this.index !== null && this.index !== undefined) {
    output.writeFieldBegin('index', Thrift.Type.STRING, 2);
    output.writeString(this.index);
    output.writeFieldEnd();
  }
  if (this.guid !== null && this.guid !== undefined) {
    output.writeFieldBegin('guid', Thrift.Type.STRING, 3);
    output.writeString(this.guid);
    output.writeFieldEnd();
  }
  if (this.isActive !== null && this.isActive !== undefined) {
    output.writeFieldBegin('isActive', Thrift.Type.BOOL, 4);
    output.writeBool(this.isActive);
    output.writeFieldEnd();
  }
  if (this.balance !== null && this.balance !== undefined) {
    output.writeFieldBegin('balance', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.balance);
    output.writeFieldEnd();
  }
  if (this.picture !== null && this.picture !== undefined) {
    output.writeFieldBegin('picture', Thrift.Type.STRING, 6);
    output.writeString(this.picture);
    output.writeFieldEnd();
  }
  if (this.age !== null && this.age !== undefined) {
    output.writeFieldBegin('age', Thrift.Type.I32, 8);
    output.writeI32(this.age);
    output.writeFieldEnd();
  }
  if (this.eyeColor !== null && this.eyeColor !== undefined) {
    output.writeFieldBegin('eyeColor', Thrift.Type.STRING, 9);
    output.writeString(this.eyeColor);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 10);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.gender !== null && this.gender !== undefined) {
    output.writeFieldBegin('gender', Thrift.Type.STRING, 11);
    output.writeString(this.gender);
    output.writeFieldEnd();
  }
  if (this.company !== null && this.company !== undefined) {
    output.writeFieldBegin('company', Thrift.Type.STRING, 12);
    output.writeString(this.company);
    output.writeFieldEnd();
  }
  if (this.email !== null && this.email !== undefined) {
    output.writeFieldBegin('email', Thrift.Type.STRING, 13);
    output.writeString(this.email);
    output.writeFieldEnd();
  }
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 14);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 15);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.about !== null && this.about !== undefined) {
    output.writeFieldBegin('about', Thrift.Type.STRING, 16);
    output.writeString(this.about);
    output.writeFieldEnd();
  }
  if (this.registered !== null && this.registered !== undefined) {
    output.writeFieldBegin('registered', Thrift.Type.STRING, 17);
    output.writeString(this.registered);
    output.writeFieldEnd();
  }
  if (this.latitude !== null && this.latitude !== undefined) {
    output.writeFieldBegin('latitude', Thrift.Type.DOUBLE, 18);
    output.writeDouble(this.latitude);
    output.writeFieldEnd();
  }
  if (this.longitude !== null && this.longitude !== undefined) {
    output.writeFieldBegin('longitude', Thrift.Type.DOUBLE, 19);
    output.writeDouble(this.longitude);
    output.writeFieldEnd();
  }
  if (this.tags !== null && this.tags !== undefined) {
    output.writeFieldBegin('tags', Thrift.Type.LIST, 20);
    output.writeListBegin(Thrift.Type.STRING, this.tags.length);
    for (var iter13 in this.tags) {
      if (this.tags.hasOwnProperty(iter13)) {
        iter13 = this.tags[iter13];
        output.writeString(iter13);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.friends !== null && this.friends !== undefined) {
    output.writeFieldBegin('friends', Thrift.Type.LIST, 21);
    output.writeListBegin(Thrift.Type.STRUCT, this.friends.length);
    for (var iter14 in this.friends) {
      if (this.friends.hasOwnProperty(iter14)) {
        iter14 = this.friends[iter14];
        iter14.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Friend = module.exports.Friend = function(args) {
  this.id = null;
  this.name = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
  }
};
Friend.prototype = {};
Friend.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.id = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Friend.prototype.write = function(output) {
  output.writeStructBegin('Friend');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.STRING, 1);
    output.writeString(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
