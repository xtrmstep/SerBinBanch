import Koa from 'koa';
import Router from 'koa-router';
import { flatbuffers } from 'flatbuffers';
import {FlatBuffersSample} from '../data/flatBuffers/schema_generated';
import jsonContent from '../data/data-provider';

const router = new Router();

async function streamFileFlatBuffers(ctx: Koa.Context){
    let items = jsonContent.slice(1,3);

    let builder = new flatbuffers.Builder();

    // people
    let people : flatbuffers.Offset[] = [];
    items.forEach((item: any) => {

        // tags
        let tags : flatbuffers.Offset[] = [];
        item.tags.forEach((tag: string) => {
            tags.push(builder.createString(tag));
        });
        let tagsVector = FlatBuffersSample.Person.createTagsVector(builder, tags);

        // friends
        let friends : flatbuffers.Offset[] = [];
        item.friends.forEach((friend: any) => {

            let idOffset1 = builder.createString(friend.id);
            let nameOffset1 = builder.createString(friend.name);

            FlatBuffersSample.Friend.startFriend(builder);
            FlatBuffersSample.Friend.addId(builder, idOffset1);
            FlatBuffersSample.Friend.addName(builder, nameOffset1);
            let theFriend = FlatBuffersSample.Friend.endFriend(builder);
            friends.push(theFriend);
        });
        let friendsVector = FlatBuffersSample.Person.createFriendsVector(builder, friends);

        // person
        let idOffset = builder.createString(item._id);
        let indexOffset = builder.createString(item.index);
        let guidOffset = builder.createString(item.guid);
        let pictureOffset = builder.createString(item.picture);
        let eyeColorOffset = builder.createString(item.eyeColor);
        let nameOffset = builder.createString(item.name);
        let genderOffset = builder.createString(item.gender);
        let companyOffset = builder.createString(item.company);
        let emailOffset = builder.createString(item.email);
        let phoneOffset = builder.createString(item.phone);
        let addressOffset = builder.createString(item.address);
        let aboutOffset = builder.createString(item.about);
        let registeredOffset = builder.createString(item.registered);

        FlatBuffersSample.Person.startPerson(builder);
        FlatBuffersSample.Person.add_id(builder, idOffset);
        FlatBuffersSample.Person.addIndex(builder, indexOffset);
        FlatBuffersSample.Person.addGuid(builder, guidOffset);
        FlatBuffersSample.Person.addIsActive(builder, item.isActive);
        FlatBuffersSample.Person.addBalance(builder, item.balance);
        FlatBuffersSample.Person.addPicture(builder, pictureOffset);
        FlatBuffersSample.Person.addAge(builder, item.age);
        FlatBuffersSample.Person.addEyeColor(builder, eyeColorOffset);
        FlatBuffersSample.Person.addName(builder, nameOffset);
        FlatBuffersSample.Person.addGender(builder, genderOffset);
        FlatBuffersSample.Person.addCompany(builder, companyOffset);
        FlatBuffersSample.Person.addEmail(builder, emailOffset);
        FlatBuffersSample.Person.addPhone(builder, phoneOffset);
        FlatBuffersSample.Person.addAddress(builder, addressOffset);
        FlatBuffersSample.Person.addAbout(builder, aboutOffset);
        FlatBuffersSample.Person.addRegistered(builder, registeredOffset);
        FlatBuffersSample.Person.addLatitude(builder, item.latitude);
        FlatBuffersSample.Person.addLongitude(builder, item.longitude);

        FlatBuffersSample.Person.addTags(builder, tagsVector);
        FlatBuffersSample.Person.addFriends(builder, friendsVector);

        let person = FlatBuffersSample.Person.endPerson(builder);

        people.push(person);

    });

    let peopleVector = FlatBuffersSample.Message.createPeopleVector(builder, people);

    // message
    FlatBuffersSample.Message.startMessage(builder);
    FlatBuffersSample.Message.addPeople(builder, peopleVector);
    let message = FlatBuffersSample.Message.endMessage(builder);
    builder.finish(message);

    let binaryObj = builder.asUint8Array();
    let binary = Array.from(binaryObj);
    ctx.body = binary;
    ctx.set('Content-Type', 'application/flatbuffers');
}

router
    .get('/fbs', streamFileFlatBuffers);

export default () => {
    return router.middleware();
};
