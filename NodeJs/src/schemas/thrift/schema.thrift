namespace * FlatBuffersSample

struct Message {
    1: list<Person> people;
}

typedef i32 uint

struct Person {
	1: string _id;
	2: string index;
	3: string guid;
	4: bool isActive;
	5: double balance;
	6: string picture;
	8: uint age;
	9: string eyeColor;
	10: string name;
	11: string gender;
	12: string company;
	13: string email;
	14: string phone;
	15: string address;
	16: string about;
	17: string registered;
	18: double latitude;
	19: double longitude;
	20: list<string> tags;
	21: list<Friend> friends;
}

struct Friend {
    1: string id;
    2: string name;
}
