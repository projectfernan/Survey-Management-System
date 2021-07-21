<?php

class mtblservicequestion {
    public static function mfServiceSurQ($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkServiceSurQ($param){
        $res = DB::select('call chktblServicequestion(?)',$param);
        return ($res);
    }
    
    public static function mfInsServiceSurQ($param){
        $res = DB::insert('call insNewServiceQ(?,?,?,?)',$param);
        return ($res);
    }
    
     public static function mfEdtServiceSurQ($param){
        $res = DB::insert('call editServiceQ(?,?,?,?)',$param);
        return ($res);
    }
    
    public static function mfDelServiceSurQ($param){
        $res = DB::insert('call delServiceQ(?)',$param);
        return ($res);
    }
}
