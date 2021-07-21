<?php

class mUnitModel {
    public static function mfrecUM($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfChkUM($param){
        $rs = DB::select('call chkUnitModel(?)',$param);
        Return $rs;
    }
    
    public static function mfInsUM($param){
        $rs = DB::insert('call insUnitModel(?)',$param);
        Return $rs;
    }
    
    public static function mfEdtUM($param){
        $rs = DB::insert('call editUnitModel(?,?)',$param);
        Return $rs;
    }
    
    public static function mfDelUM($param){
        $rs = DB::select('call delUnitModel(?)',$param);
        Return $rs;
    }
}
