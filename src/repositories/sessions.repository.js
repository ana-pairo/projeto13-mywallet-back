import db from "../config/database.js";

async function selectSessionByToken({ token }) {
  return db.collection("sessions").findOne({ token });
}

async function insertNewSession({ data }) {
  return db.collection("sessions").insertOne({
    ...data,
  });
}

async function deleteSession({ token }) {
  return db.collection("sessions").deleteOne({ token });
}

export const sessionsRepository = {
  selectSessionByToken,
  insertNewSession,
  deleteSession,
};