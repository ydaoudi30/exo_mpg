'use strict'
import {
  Bucket,
  Cluster,
  GetResult,
  connect,
} from 'couchbase'
import {UserTeams, Team, League} from "../exo_mpg/models"
import { clusterConnStr,bucketName,connectOptions } from './environment'

  export async function getCollection(){
    const cluster: Cluster = await connect(clusterConnStr, connectOptions)
    const bucket: Bucket = cluster.bucket(bucketName)
    const collection = bucket.defaultCollection();
    return collection;
  }

  export async function getUsernames(leagueId: string) {
    if (!leagueId.startsWith("mpg_league")){
      return 'This entry is not a league.';
    }
    const getLeague: GetResult = await (await getCollection()).get(leagueId)
    let userNames: UserTeams[] = [];
    const promises = Object.keys(getLeague.content.usersTeams).map(async function(value){
        var getUser: GetResult = await (await getCollection()).get(value);
        var username = {"name":getUser.content.name};
        console.log(username)
        return username;
        })
        userNames = await Promise.all(promises);
        return userNames;
  }

  export async function postLeague(req: any){
    let league: League = {
        adminId: req.body.adminId,
        description: req.body.description,
        id: req.body.id,
        name: req.body.name,
        type: 'mpg_league',
        usersTeams: req.body.usersTeams
    }
    try {
        await (await getCollection()).insert(req.body.id, league);
    }
    catch(e){
        return 'Error';
    }
  }
  
  export async function patchTeamName(teamId: string, newName: string){
    if (!teamId.startsWith("mpg_team")){
        return 100;
    }
      const result = await (await getCollection()).get(teamId);
      const document: Team = result.content;
      document.name = newName;
      await (await getCollection()).replace(teamId, document);
  }