<?php

class mtblseradvisor {
    public static function mfRecAdv($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkAdv($param){
        $rs = DB::select('call chkAdv(?)',$param);
        Return $rs;
    }
    
    public static function mfInsAdv($param){
        $rs = DB::insert('call insAdv(?,?)',$param);
        Return $rs;
    }
    
    public static function mfEdtAdv($param){
        $rs = DB::insert('call editAdv(?,?,?)',$param);
        Return $rs;
    }
    
    public static function mfDelAdv($param){
        $rs = DB::select('call delAdv(?)',$param);
        Return $rs;
    }
    
}
