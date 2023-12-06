export const signinResponseDTO=(user,prefer)=>{
    const preferFood=[];
    for(let i = 0; i<prefer[0].length;i++){
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email":user[0].email,"name":user.user_name[0],"preferCategory":preferFood};

}

export const reviewResponseDTO=(user)=>{
    return {"star":user[0].star,"description":user[0].user,"restraunt":restraunt};
}
export const missionResponseDTO=(user)=>{i
    return {"is_success":user[0].is_success,"key":user[0].key,"cost":user[0].cost,"state":user[0].state,"customer" : user[0].customer,"mission" : user[0].mission};
}