export const byName = (a,b) =>{
    
    if(a.username > b.username){
        console.log(a);
        return 1;
    } else if(b.username > a.username){
        return -1;
    }else{
        return 0;
    }

}

export const byDay = (a,b) =>{
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
}