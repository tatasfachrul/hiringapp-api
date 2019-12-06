const express = require("express");
const Route = express.Router();

const {
  addProject,
  getProjectById,
  getProjectByIdEng,
  getOfferByIdProjIdEng,
  addBidFeeProj,
  updateStsProjEng,
  getProjectByIdProj,
  getProjectEng,
  getBidFeeProjByIdBid,
  updateStsBidProjComp,
  updateProgProjEng,
} = require("../controller/project");
const { checkToken } = require("../helpers/middleware");

Route.post("/", addProject)
  .get("/", getProjectById)
  .get("/engineer/", getProjectByIdEng)
  .get("/offer/", getOfferByIdProjIdEng)
  .post("/bid/", addBidFeeProj)
  .patch("/sts/", updateStsProjEng)
  .get("/id/:idproj", getProjectByIdProj)
  .get("/eng/:idproj", getProjectEng)
  .get("/bid/:idbid", getBidFeeProjByIdBid)
  .patch("/bid/", updateStsBidProjComp)
  .patch("/prog/", updateProgProjEng)

module.exports = Route;
