
export const addRestrauntResponsDTO=(restraunt)=>{
    return {'id':restraunt.id,'name' : restraunt.name,'description' : restraunt.description,'location' : restraunt.location,'owner': restraunt.owner};
}