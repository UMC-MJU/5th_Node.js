export const insertRestaurantSql="INSERT INTO restaurant(id,name,description,location,owner) values(?,?,?,?,?);";

export const confirmLocation="SELECT NOT EXISTS(SELECT 1 FROM location WHERE id = ?) as isNotExistLocation";
export const insertLocationSql="Insert into location(id,name) values(?,?);";
export const insertMission="Insert into mission(id,description,reward,target_cost,created_at,restaurant)values (?,?,?,?,?,?);";