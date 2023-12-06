





export const insertUserSql = "INSERT INTO customer (id, email, name, nickname, gender, birth_date, created_at, state, phone_number)VALUES (?,?,?,?,?,?,?,?,?);";

export const getUserID = "SELECT * FROM customer WHERE id = ?";

export const connectFoodCategory = "INSERT INTO favorite_food (customer,food) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM customer WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ff.id, ff.food, c.email, fc.name"
+ "FROM favorite_food ff"
+"JOIN food_category fc on ff.food = fc.id "
+"JOIN cusomter c on ff.customer=c.id"
+ "WHERE c.email = ? ORDER BY ff.food ASC;";

export const insertReview ="INSERT INTO REVIEW (star,description,user,restaurant)values(?,?,?,?);";

export const confrimUserFromReview = "SELECT EXISTS(SELECT 1 FROM review WHERE user = ? and restaurant = ? ) as isExistReview;";

export const insertUseMission = "INSERT INTO add_point(is_success,`key`,cost,create_at,state,customer,mission)values(?,?,?,?,?,?,?);"

export const confrimMission ="SELECT EXISTS(SELECT 1 FROM add_point where customer =? and mission = ? ) as isExistMission;";