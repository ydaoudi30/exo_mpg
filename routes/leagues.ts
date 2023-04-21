import { Router } from "express";
import { getUsernames, postLeague } from "../services";

export const router = Router();

router.get('/getusernames/:leagueId', async (req, res) => {
    try{
      let userNames = await getUsernames(req.params.leagueId);
      res.send(userNames);
  }
  catch(error){
      res.send([]);
  }
  });

router.post('/postleague', async (req , res) => {
    if (!req.body.id || !req.body.name || !req.body.description || !req.body.adminId) { 
      return res.send("Mandatory fields are missing from the request.");
    }
    if (await postLeague(req)=='Error')
        res.send("Oops, some error occured...")
    else{
        await postLeague(req);
        res.send("League added successfully!");
    } 
  });