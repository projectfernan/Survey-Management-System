<?php

class mtblservicesurvey {
   public static function getSerSur(){
        $res = DB::select('select * from tblservicesurvey');
        Return $res;
    }
    
    public static function mfInsSerSur($param){
        $res = DB::insert('call insSerSur(?,?,?,?,?)',$param);
        Return $res;
    }
    
}   
