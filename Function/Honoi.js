// HONOI TOWER : 
function HonoiTower(disk,main_point,target_point,temp_point){
    if(disk==0)
    {
        return;   
    }
    HonoiTower(disk-1,main_point,temp_point,target_point);
    console.log(`DiskNo ${disk} : Move to ${target_point} from ${main_point}.`);
    HonoiTower(disk-1,temp_point,target_point,main_point);


}

HonoiTower(3,1,3,2);