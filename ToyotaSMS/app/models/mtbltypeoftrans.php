<?php

class mtbltypeoftrans {
    
    public static function mfTypeOfTrans($spname,$param){
        $res = DB::select("call ".$spname,$param);
        $row = DB::select('select found_rows() as total_row');
        return array($res,$row);
    }
    
    public static function mfGetTypeOfTrans($param){
        $rs = DB::select('call chkTypeOfTrans(?)',$param);
        Return $rs;
    }
    
    public static function mfInsTypeOfTrans($param){
        $rs = DB::insert('call insTypeOfTrans(?)',$param);
        Return $rs;
    }
    
    public static function mfEdtTypeOfTrans($param){
        $rs = DB::insert('call editTypeOfTrans(?,?)',$param);
        Return $rs;
    }
    
    public static function mfDelTypeOfTrans($param){
        $rs = DB::select('call delTypeOfTrans(?)',$param);
        Return $rs;
    }
}
