import { Response } from '../../../Libs/handler';

export default async event => {
  try {
    const newRoom = await new RoomModel({ account: event.account._id, ...event.body }).save();
    const updateAccount = event.account.update({ $push: { createdRooms: newRoom._id } }).exec();
    const joinRoomResult = joinRoomLogic(event.account, newRoom._id);

    await Promise.all([updateAccount, joinRoomResult]);
    return Response.success(newRoom);
  } catch (error) {
    return Response.error(error);
  }
};
