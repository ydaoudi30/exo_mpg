import { Router } from "express";
import { patchTeamName } from "../services";
  
export const router2 = Router();

router2.patch('/patchteamname/:teamId', async (req, res) => {
    if (await patchTeamName(req.params.teamId,req.body.name) === 100){
      res.send("This entry is not a team.");
    }
      try{
        res.send('Team modified successfully!');
    }
    catch (error) {
      res.send('Oops, some error occured...');
    }
    });  