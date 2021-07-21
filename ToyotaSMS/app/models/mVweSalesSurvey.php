<?php

class mVweSalesSurvey {
    public static function mfVweCustSalSur($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfVweSalSurAns($param){
        $res = DB::select("call slctsalans(?,?,?,?)",$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfSalAns($param){
        $rs = DB::select("call slctsalsurans(?,?)",$param);
        return $rs;
    }
}
